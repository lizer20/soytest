// Paylaşım görsellerini (paylasim/kapak-*.png, 1200×630) ve simge-180.png'yi yeniden üretir.
// Sayılar veriden okunur. Çalıştırma: NODE_PATH=$(npm root -g) node araclar/kapak-uret.js
// (Playwright gerekir; Chromium yolu PW_CHROMIUM ile verilebilir.)
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path"), os = require("os");
const { yukle, KOK } = require("./yukle");

const w = yukle(["veri/partiler.js", "veri/sandik.js", "veri/il-sonuclari.js"]);
const secimSayisi = w.SANDIK.secimler.length, hukumetSayisi = w.SANDIK.hukumetler.length;
const RENK = w.PARTILER.AILE.map(a => a.ham);
const GECICI = fs.mkdtempSync(path.join(os.tmpdir(), "kapak-"));
const dosya = p => "file://" + path.join(KOK, p);

const KARTLAR = [
  { ad: "soyagaci", ust: "1923'ten bugüne · " + w.PARTILER.N.length + " parti · " + RENK.length + " gelenek",
    baslik: "Türkiye Siyasi Partileri Soyağacı", alt: "Süreklilikler, bölünmeler, birleşmeler ve kapatmalar tek şemada.",
    sayfa: "index.html", kaydir: 900 },
  { ad: "sandik", ust: secimSayisi + " seçim ve referandum · " + hukumetSayisi + " hükümet", baslik: "Sandık",
    alt: "1923'ten bugüne seçimler, referandumlar ve hükümetler tek kronolojide.", sayfa: "sandik.html", kaydirOge: "#bant-3" },
  { ad: "harita", ust: Object.keys(w.IL_SONUCLARI).length + " harita · il il sonuçlar", baslik: "Harita",
    alt: "Seçimlerde il il kazanan partiler, referandumlarda illerin evet ya da hayır oyu.",
    sayfa: "harita.html#2023-05-genel", oge: ".h-harita", harita: true }];

(async () => {
  const b = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
  const p = await b.newPage({ viewport: { width: 1400, height: 1000 } });
  for (const k of KARTLAR) {
    await p.goto(dosya(k.sayfa)); await p.waitForTimeout(900);
    k.resim = path.join(GECICI, k.ad + ".png");
    if (k.oge) await (await p.$(k.oge)).screenshot({ path: k.resim });
    else {
      // kaydirOge: o öğenin başı ekranın üstüne gelecek kadar kaydırılır (düzen değişse de aynı yer görünür)
      // (Sandık'ta ekran dışı yıllar sonradan çizilir; yer oturana dek birkaç kez kaydırılır)
      if (k.kaydirOge) for (let i = 0; i < 5; i++) {
        await p.evaluate(s => window.scrollTo(0, document.querySelector(s).getBoundingClientRect().top + scrollY - 8), k.kaydirOge);
        await p.waitForTimeout(150);
      }
      else await p.evaluate(y => window.scrollTo(0, y), k.kaydir);
      await p.waitForTimeout(300); await p.screenshot({ path: k.resim });
    }
  }
  const c = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const k of KARTLAR) {
    const html = `<!doctype html><html lang="tr"><head><meta charset="utf-8"><link rel="stylesheet" href="${dosya("ortak.css")}"><style>
      html,body{margin:0;width:1200px;height:630px;overflow:hidden;background:#D8DACF}
      .k{width:1200px;height:630px;display:flex}
      .sol{width:560px;padding:64px 56px 48px 64px;box-sizing:border-box;display:flex;flex-direction:column}
      .ust{font-family:"IBM Plex Mono",monospace;font-size:16px;letter-spacing:.1em;text-transform:uppercase;color:#6A6E60}
      h1{font-family:"Fraunces",serif;font-weight:700;font-size:${k.baslik.length > 12 ? 62 : 96}px;line-height:1.02;margin:26px 0 22px;color:#151810}
      p{font-family:"IBM Plex Sans",system-ui,sans-serif;font-size:25px;line-height:1.38;color:#2A2E22;margin:0}
      .serit{display:flex;gap:6px;margin-top:auto}.serit i{display:block;width:44px;height:9px;border-radius:2px}
      .alan{font-family:"IBM Plex Mono",monospace;font-size:15px;color:#6A6E60;margin-top:16px}
      .sag{flex:1;position:relative;border-left:1px solid #A9AD9E;background:url("file://${k.resim}") ${k.harita ? "center/94% auto no-repeat #F5F5F0" : "0 0/cover no-repeat"}}
      .sag::before{content:"";position:absolute;inset:0;${k.harita ? "display:none;" : ""}background:linear-gradient(90deg,rgba(216,218,207,.85),rgba(216,218,207,0) 22%)}
    </style></head><body><div class="k"><div class="sol"><div class="ust">${k.ust}</div><h1>${k.baslik}</h1><p>${k.alt}</p>
      <div class="serit">${RENK.map(r => `<i style="background:${r}"></i>`).join("")}</div>
      <div class="alan">emrebiltekin.me/soyagaci</div></div><div class="sag"></div></div></body></html>`;
    const h = path.join(GECICI, k.ad + ".html"); fs.writeFileSync(h, html);
    await c.goto("file://" + h); await c.waitForTimeout(500);
    await c.screenshot({ path: path.join(KOK, "paylasim", "kapak-" + k.ad + ".png") });
  }
  const s = path.join(GECICI, "simge.html");
  fs.writeFileSync(s, `<html><body style="margin:0;background:#151810"><img src="${dosya("paylasim/simge.svg")}" width="180" height="180" style="display:block"></body></html>`);
  const i = await b.newPage({ viewport: { width: 180, height: 180 } });
  await i.goto("file://" + s); await i.waitForTimeout(300);
  await i.screenshot({ path: path.join(KOK, "paylasim", "simge-180.png") });
  await b.close();
  console.log("kapaklar üretildi:", KARTLAR.map(k => k.ad).join(", "));
})();
