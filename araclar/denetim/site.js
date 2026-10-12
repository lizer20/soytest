// Tek komutla site denetimi: sayfaları gerçek tarayıcıda (file://) açar ve şunlara bakar:
//   1. dört sayfada, masaüstü ve telefon genişliğinde konsol / betik hatası
//   2. Sandık'ın bütün kayıt pencereleri, soyağacının bütün parti pencereleri ve bütün harita
//      tablolarında değer yerine yazılmış "—" ya da "?" (boş veri gösterilmez kuralı)
//   3. sayfalardaki ve pencerelerdeki iç bağlantılar: dosya var mı, # hedefi var mı
//   4. (isteğe bağlı) EKRAN=klasör verilirse her sayfanın tam boy ekran görüntüsü
// Çalıştırma:  NODE_PATH=$(npm root -g) node araclar/denetim/site.js
// Chromium yolu gerekirse: PW_CHROMIUM=/opt/pw-browsers/chromium. Sorun yoksa çıkış kodu 0.
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");

const KOK = path.resolve(__dirname, "..", "..");
const url = (s) => "file://" + path.join(KOK, s);
const SAYFALAR = ["index.html", "sandik.html", "harita.html", "kaynakca.html"];
const EKRAN = process.env.EKRAN ? path.resolve(process.env.EKRAN) : null;

// bir öğenin içindeki, değer yerine duran "—" / "?" metinleri (cümle içindeki "A — B" sayılmaz)
function bosIsaretler(secici) {
  const kok = typeof secici === "string" ? document.querySelector(secici) : document.body;
  if (!kok) return [];
  const l = [], w = document.createTreeWalker(kok, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = w.nextNode())) {
    if (n.parentElement.closest("script,style")) continue;
    const t = n.textContent;
    if (/^\s*[—?]\s*$/.test(t) || (/(^|[\s·:(])[—?]([\s·,)]|$)/.test(t) && !/\S —\s+\S/.test(t)))
      l.push(t.trim().slice(0, 60));
  }
  return l;
}

(async () => {
  const b = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
  const sorun = [];
  const bag = new Map();   // href → hangi sayfada görüldü
  const p = await b.newPage({ viewport: { width: 1400, height: 900 } });
  let sayfaAdi = "";
  p.on("pageerror", (e) => sorun.push("betik hatası (" + sayfaAdi + "): " + e.message));
  p.on("console", (m) => m.type() === "error" && sorun.push("konsol hatası (" + sayfaAdi + "): " + m.text()));
  const git = async (s, bekle = 400) => { sayfaAdi = s; await p.goto(url(s)); await p.waitForTimeout(bekle); };
  const topla = async (s) => {
    for (const h of await p.$$eval("a[href]", (l) => l.map((a) => a.getAttribute("href")))) if (!bag.has(h)) bag.set(h, s);
  };

  // 1. sayfalar: masaüstü ve telefon
  for (const [en, boy, et] of [[1400, 900, "masaustu"], [390, 844, "telefon"]]) {
    await p.setViewportSize({ width: en, height: boy });
    for (const s of SAYFALAR) {
      await git(s, 600);
      await topla(s);
      const bos = await p.evaluate(bosIsaretler, null);
      if (bos.length) sorun.push(s + " (" + et + "): boş işaret " + JSON.stringify(bos.slice(0, 5)));
      if (EKRAN) {
        fs.mkdirSync(EKRAN, { recursive: true });
        // Sandık'ta ekran dışı yıllar ancak görününce çizilir; tam boy görüntü için hepsi çizdirilir
        await p.addStyleTag({ content: ".s-yil{content-visibility:visible!important}" });
        await p.screenshot({ path: path.join(EKRAN, s.replace(".html", "") + "-" + et + ".png"), fullPage: true });
      }
    }
  }
  await p.setViewportSize({ width: 1400, height: 900 });

  // 2a. Sandık: her kaydın penceresi
  await git("sandik.html", 900);
  const kayitlar = await p.$$eval("[data-id]", (x) => [...new Set(x.map((e) => e.dataset.id))]);
  for (const id of kayitlar) {
    await p.evaluate((i) => { location.hash = i; }, id); await p.waitForTimeout(60);
    const bos = await p.evaluate(bosIsaretler, "#p-govde");
    if (bos.length) sorun.push("Sandık penceresi " + id + ": " + JSON.stringify(bos.slice(0, 5)));
    await topla("sandik.html");
  }
  // 2b. soyağacı: her partinin penceresi
  await git("index.html", 600);
  const partiler = await p.$$eval("#chart .kart[data-id]", (x) => x.map((e) => e.dataset.id));
  for (const id of partiler) {
    await p.evaluate((i) => { location.hash = i; }, id); await p.waitForTimeout(60);
    const bos = await p.evaluate(bosIsaretler, "#p-govde");
    if (bos.length) sorun.push("Parti penceresi " + id + ": " + JSON.stringify(bos.slice(0, 5)));
    await topla("index.html");
  }
  // 2c. harita: her seçimin yan bilgisi ve il tablosu
  await git("harita.html", 500);
  const haritalar = await p.evaluate(() => Object.keys(window.IL_SONUCLARI || {}));
  for (const id of haritalar) {
    await p.evaluate((i) => { location.hash = i; }, id); await p.waitForTimeout(60);
    for (const sec of ["#hYan", "#hTablo", "#hBaslik"]) {
      const bos = await p.evaluate(bosIsaretler, sec);
      if (bos.length) sorun.push("Harita " + id + " " + sec + ": " + JSON.stringify(bos.slice(0, 5)));
    }
    await topla("harita.html");
  }

  // 3. iç bağlantılar
  let denenen = 0;
  for (const [h, nerede] of bag) {
    if (/^(https?:|mailto:)/.test(h)) continue;
    denenen++;
    const [dosya, hedef] = h.split("#");
    const f = dosya || nerede;
    if (!fs.existsSync(path.join(KOK, f))) { sorun.push("kırık bağlantı: " + h + " (" + nerede + ", dosya yok)"); continue; }
    if (!hedef) continue;
    await git(f, 250);
    const var_ = await p.evaluate((x) => !!document.getElementById(x) || !!document.querySelector('[data-id="' + x + '"]') ||
      !!(window.IL_SONUCLARI && x in window.IL_SONUCLARI), hedef);
    if (!var_) sorun.push("kırık bağlantı: " + h + " (" + nerede + ", hedef yok)");
  }

  await b.close();
  console.log("Sayfa: " + SAYFALAR.length + " × 2 genişlik · Sandık penceresi: " + kayitlar.length +
    " · parti penceresi: " + partiler.length + " · harita: " + haritalar.length + " · iç bağlantı: " + denenen);
  if (sorun.length) { console.log("SORUN (" + sorun.length + "):\n- " + sorun.join("\n- ")); process.exit(1); }
  console.log("Sorun yok.");
})().catch((e) => { console.error(e); process.exit(2); });
