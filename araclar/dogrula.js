#!/usr/bin/env node
// Veri denetimi: node araclar/dogrula.js  (hata varsa çıkış kodu 1)
const { yukle } = require("./yukle");
const Ortak = require("../ortak");
const SandikMantik = require("../sandik-mantik");

const BAG_TURLERI = ["devam", "bolunme", "katilma"];
const TURLER = ["genel", "yerel", "referandum", "cb-halk", "cb-tbmm", "ara"];
const TIPLER = ["tek-parti", "koalisyon", "azinlik", "partiluestu", "mbk", "mgk", "cumhurbaskanligi"];
const BITIS = ["secim", "erken-secim", "guvensizlik", "istifa", "darbe", "muhtira",
               "cumhurbaskani-secimi", "olum", "sistem-degisikligi", "diger"];
const TUTUMLAR = ["evet", "hayir", "boykot", "serbest"];
const REF_SONUC = ["kabul", "ret"];
const SAYISAL = ["kayitli", "kullanilan", "gecerli", "oy", "sandalye", "sandalyeSayisi", "evet", "hayir"];

function gunFarki(a, b) { return (Date.parse(b) - Date.parse(a)) / 86400000; }

function dogrulaSandik(P, S) {
  const hatalar = [], uyarilar = [];
  const M = SandikMantik.olustur(P, Ortak);
  const partiVar = id => P.N.some(n => n.id === id);
  const partiDenetle = (id, yer) => { if (id && !partiVar(id)) hatalar.push("bilinmeyen parti: " + id + " (" + yer + ")"); };

  // kimlik, sıra, tür
  const idler = new Set();
  S.secimler.forEach((k, i) => {
    if (idler.has(k.id)) hatalar.push("yinelenen kimlik: " + k.id);
    idler.add(k.id);
    if (!TURLER.includes(k.tur)) hatalar.push("bilinmeyen tür: " + k.id + " → " + k.tur);
    if (!/^\d{4}-\d{2}-[a-z-]+$/.test(k.id) || k.id.slice(0, 7) !== k.tarih.slice(0, 7) ||
        k.id.slice(8) !== k.tur) hatalar.push("kimlik tarihle uyuşmuyor: " + k.id);
    if (!/^\d{4}-\d{2}(-\d{2})?$/.test(k.tarih)) hatalar.push("geçersiz tarih biçimi: " + k.id + " → " + k.tarih);
    if (i > 0 && S.secimler[i - 1].tarih > k.tarih) hatalar.push("secimler tarih sırasında değil: " + k.id);
  });

  // satır düzeyi denetimler
  function satirlariDenetle(k, satirlar, gecerli, yer, aday) {
    let toplam = 0, hepsi = true, yuzdeler = [];
    for (const s of satirlar) {
      // Cumhurbaşkanı adaylarında `ad` kişinin adıdır; partisi `parti`, ittifakı `destek` ile yazılır.
      if (aday) {
        if (!s.ad) hatalar.push(k.id + ": adayın adı yok" + (yer ? " (" + yer + ")" : ""));
        if (s.parti && s.destek) hatalar.push(k.id + ": adayda hem parti hem destek (" + s.ad + ")");
      } else if (s.parti && s.ad) hatalar.push(k.id + ": satırda hem parti hem ad (" + s.parti + ")");
      partiDenetle(s.parti, k.id);
      if (s.oy != null && s.oyYuzde != null) hatalar.push(k.id + ": aynı satırda oy ve oyYuzde");
      if (s.oy == null) hepsi = false; else toplam += s.oy;
      if (s.oyYuzde != null) yuzdeler.push(s.oyYuzde);
    }
    // kaynakFarki: resmî ilanın kendi parti toplamının geçerli oydan açıklanmamış eksiği (ilandaki gibi yazılır)
    if (k.kaynakFarki != null && !yer) toplam += k.kaynakFarki;
    if (gecerli != null && satirlar.length) {
      if (toplam > gecerli || (hepsi && toplam !== gecerli)) {
        // Resmî tablonun kendi içindeki küçük farklar (≤ %0,5, kaynak eşleştirme kuralıyla aynı eşik) uyarıdır
        const metin = k.id + ": oy toplamı " + toplam + ", geçerli " + gecerli + (yer ? " (" + yer + ")" : "");
        if (Math.abs(toplam - gecerli) <= gecerli * 0.005) uyarilar.push(metin + " — kaynağın kendi farkı");
        else hatalar.push(metin);
      }
    }
    if (yuzdeler.length && yuzdeler.length === satirlar.length) {
      const t = yuzdeler.reduce((a, b) => a + b, 0);
      if (t < 98 || t > 102) uyarilar.push(k.id + ": yüzdelerin toplamı " + t.toFixed(1));
    }
  }
  function secmenDenetle(k, x, yer) {
    const ad = k.id + (yer ? " (" + yer + ")" : "");
    if (x.gecerli != null && x.kullanilan != null && x.gecerli > x.kullanilan) hatalar.push(ad + ": geçerli > kullanılan");
    if (x.kullanilan != null && x.kayitli != null && x.kullanilan > x.kayitli) hatalar.push(ad + ": kullanılan > kayıtlı");
    if (x.katilimYuzde != null && (x.kayitli != null || x.kullanilan != null))
      hatalar.push(ad + ": seçmen sayıları ve katilimYuzde birlikte");
  }

  const nullSayisi = {};
  for (const k of S.secimler) {
    if (k.tur === "genel" || k.tur === "yerel") {
      secmenDenetle(k, k);
      satirlariDenetle(k, k.sonuc || [], k.gecerli);
    }
    // sonradan: seçimde boş kalıp sonradan (ara seçimle) dolan sandalyeler; toplama katılır
    if (k.sonradan != null && !(Number.isInteger(k.sonradan) && k.sonradan > 0))
      hatalar.push(k.id + ": sonradan pozitif tam sayı olmalı");
    if (k.tur === "genel" && k.meclis != null) {
      const bilinen = (k.sonuc || []).filter(s => s.sandalye != null);
      const t = bilinen.reduce((a, s) => a + s.sandalye, 0) + (k.sonradan || 0);
      if (t > k.meclis || (bilinen.length === k.sonuc.length && t !== k.meclis))
        hatalar.push(k.id + ": sandalye toplamı " + t + ", meclis " + k.meclis);
    }
    if (k.tur === "genel") for (const it of k.ittifak || []) {
      partiDenetle(it.liste, k.id + " ittifak");
      const liste = (k.sonuc || []).find(s => s.parti === it.liste);
      const ic = it.icinden.reduce((a, x) => { partiDenetle(x.parti, k.id + " ittifak"); return a + (x.sandalye || 0); }, 0);
      if (liste && liste.sandalye != null && ic > liste.sandalye)
        uyarilar.push(k.id + ": ittifak " + it.ad + " içinden " + ic + " > liste partisi " + liste.sandalye);
    }
    if (k.tur === "yerel" && k.buyuksehir)
      for (const sehir of Object.keys(k.buyuksehir)) partiDenetle(k.buyuksehir[sehir].parti, k.id + " " + sehir);
    // kazanılan belediye başkanlıkları: parti kimliği geçerli, sayılar pozitif tam sayı, toplam seçimi yapılanı aşmaz
    if (k.tur === "yerel" && k.belediye) {
      for (const [ad, l] of [["belediye", k.belediye.sonuc || []], ["büyükşehir sayısı", k.belediye.buyuksehir || []]]) {
        for (const x of l) {
          if (x.parti) partiDenetle(x.parti, k.id + " " + ad);
          else if (!x.ad) hatalar.push(k.id + " " + ad + ": satırda parti ya da ad yok");
          if (!Number.isInteger(x.sayi) || x.sayi <= 0) hatalar.push(k.id + " " + ad + ": geçersiz sayı " + x.sayi);
        }
      }
      const t = (k.belediye.sonuc || []).reduce((a, x) => a + x.sayi, 0);
      if (k.belediye.yapilan != null && t > k.belediye.yapilan)
        hatalar.push(k.id + ": kazanılan başkanlık " + t + " > seçimi yapılan " + k.belediye.yapilan);
      else if (k.belediye.yapilan != null && t < k.belediye.yapilan && !k.belediye.not)
        uyarilar.push(k.id + ": kazanılan başkanlık " + t + " < seçimi yapılan " + k.belediye.yapilan + " (not yok)");
    }
    if (k.tur === "referandum") {
      secmenDenetle(k, k);
      if (!REF_SONUC.includes(k.karar)) hatalar.push(k.id + ": bilinmeyen referandum sonucu " + k.karar);
      if (k.evet != null && k.hayir != null && k.gecerli != null && k.evet + k.hayir !== k.gecerli)
        hatalar.push(k.id + ": evet + hayır " + (k.evet + k.hayir) + ", geçerli " + k.gecerli);
      for (const t of k.tutumlar || []) {
        partiDenetle(t.parti, k.id + " tutum");
        if (!TUTUMLAR.includes(t.tutum)) hatalar.push(k.id + ": bilinmeyen tutum " + t.tutum);
      }
    }
    if (k.tur === "cb-halk") (k.turlar || []).forEach((t, i) => {
      secmenDenetle(k, t, (i + 1) + ". tur");
      satirlariDenetle(k, t.adaylar || [], t.gecerli, (i + 1) + ". tur", true);
    });
    if (k.tur === "ara") for (const s of k.sonuc || []) partiDenetle(s.parti, k.id);

    if (k.tur === "genel" || k.tur === "ara")
      for (const s of k.sonuc || [])
        if (s.ad && s.ad !== "Bağımsız" && s.ad !== "Diğer" && s.sandalye > 0)
          uyarilar.push("soyağacında olmayan ama sandalye kazanan: " + s.ad + " (" + k.id + ")");

    // — sayısı (bilinmeyen sayısal alanlar)
    const y = M.donemBul(k.tarih);
    const anahtar = k.tur + " " + (y ? (y.tur === "yonetim" ? "kap " : "bant ") + y.i : "yersiz");
    let n = 0;
    const say = o => SAYISAL.forEach(a => { if (a in o && o[a] == null) n++; });
    say(k); (k.sonuc || []).forEach(say); (k.turlar || []).forEach(t => { say(t); (t.adaylar || []).forEach(say); });
    nullSayisi[anahtar] = (nullSayisi[anahtar] || 0) + n;
  }
  for (const a of Object.keys(nullSayisi)) uyarilar.push("— sayısı: " + a + ": " + nullSayisi[a]);

  // hükümetler
  S.hukumetler.forEach((h, i) => {
    if (!TIPLER.includes(h.tip)) hatalar.push("bilinmeyen hükümet tipi: " + h.no + " → " + h.tip);
    if (h.bitisNedeni != null && !BITIS.includes(h.bitisNedeni)) hatalar.push("bilinmeyen bitiş nedeni: " + h.no + " → " + h.bitisNedeni);
    (h.partiler || []).forEach(p => partiDenetle(p, "hükümet " + h.no));
    if (h.lakap != null && (typeof h.lakap !== "string" || !h.lakap.trim())) hatalar.push("hükümet adı boş olamaz: " + h.no);
    if (h.onemli != null && h.onemli !== true) hatalar.push("onemli yalnızca true olabilir: " + h.no);
    if (h.onemli && !h.lakap) hatalar.push("öne çıkan hükümetin adı olmalı: " + h.no);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(h.baslangic) || (h.bitis != null && !/^\d{4}-\d{2}-\d{2}$/.test(h.bitis)))
      hatalar.push("hükümet tarihi gün dahil olmalı: " + h.no);
    const s = S.hukumetler[i + 1];
    if (!s) return;
    if (h.baslangic > s.baslangic) hatalar.push("hukumetler tarih sırasında değil: " + h.no + " / " + s.no);
    if (h.bitis == null) hatalar.push("bitişi olmayan hükümetten sonra hükümet var: " + h.no);
    else if (h.bitis > s.baslangic) hatalar.push("hükümetler çakışıyor: " + h.no + " / " + s.no);
    else if (gunFarki(h.bitis, s.baslangic) > 1) uyarilar.push("hükümetler arasında boşluk: " + h.no + " → " + s.no);
  });

  // yerleşim
  for (const o of M.kronoloji(S).yersiz)
    hatalar.push("yersiz kayıt: " + (o.tur === "secim" ? o.kayit.id : "hükümet " + o.hukumet.no));

  return { hatalar, uyarilar };
}

function dogrulaPartiler(P) {
  const hatalar = [], uyarilar = [];
  const idler = new Set();
  for (const n of P.N) {
    if (idler.has(n.id)) hatalar.push("yinelenen parti id: " + n.id);
    idler.add(n.id);
    if (!P.BILGI[n.id]) hatalar.push("BILGI kaydı yok: " + n.id);
    if (!P.ROZET[n.durum]) hatalar.push("bilinmeyen durum: " + n.id + " → " + n.durum);
    if (n.aile < 0 || n.aile >= P.AILE.length) hatalar.push("geçersiz aile: " + n.id);
    if (n.donem < 0 || n.donem >= P.DONEMLER.length) hatalar.push("geçersiz dönem: " + n.id);
    if (n.durum === "faal" && /–\s*\d{4}/.test(n.yil)) hatalar.push("faal ama bitiş yılı var: " + n.id);
  }
  for (const k of Object.keys(P.BILGI)) if (!idler.has(k)) hatalar.push("parti olmayan BILGI kaydı: " + k);
  const kenarlar = new Set();
  for (const e of P.E) {
    if (!idler.has(e[0]) || !idler.has(e[1])) hatalar.push("bilinmeyen uç: " + e.join(" > "));
    if (!BAG_TURLERI.includes(e[2])) hatalar.push("bilinmeyen bağ türü: " + e.join(" > "));
    const a = e.join(">");
    if (kenarlar.has(a)) hatalar.push("yinelenen bağ: " + a);
    kenarlar.add(a);
  }
  return { hatalar, uyarilar };
}

// genel başkanlar: parti kimliği, yıl biçimi, sıra, "görevde" yalnızca faal partide ve en sonda
function dogrulaBaskanlar(P, GB) {
  const hatalar = [], uyarilar = [];
  const durum = new Map(P.N.map(n => [n.id, n.durum]));
  const YIL = /^\d{4}$/;
  for (const [id, l] of Object.entries(GB || {})) {
    if (!durum.has(id)) { hatalar.push("genel başkan: bilinmeyen parti " + id); continue; }
    if (!Array.isArray(l) || !l.length) { hatalar.push("genel başkan listesi boş: " + id); continue; }
    let onceki = null;
    l.forEach((x, i) => {
      const yer = id + " → " + (x && x.ad);
      if (!x || typeof x.ad !== "string" || !x.ad.trim()) { hatalar.push("genel başkan adı yok: " + id); return; }
      for (const k of ["bas", "bit"]) if (x[k] != null && !YIL.test(x[k])) hatalar.push("genel başkan yılı dört haneli olmalı: " + yer);
      if (x.bas && x.bit && x.bas > x.bit) hatalar.push("genel başkan bitişi başlangıçtan önce: " + yer);
      if (x.gorevde && (x.bit != null || i !== l.length - 1)) hatalar.push("görevdeki genel başkan en sonda ve bitişsiz olmalı: " + yer);
      if (x.gorevde && durum.get(id) !== "faal") hatalar.push("faal olmayan partide görevdeki genel başkan: " + yer);
      const ilk = x.bas || x.bit;
      if (ilk && onceki && ilk < onceki) hatalar.push("genel başkanlar tarih sırasında değil: " + yer);
      if (ilk) onceki = x.bit || x.bas;
    });
    if (durum.get(id) === "faal" && !l[l.length - 1].gorevde) uyarilar.push("faal partinin görevdeki genel başkanı yok: " + id);
  }
  return { hatalar, uyarilar };
}

function dogrula(P, S) {
  const a = dogrulaPartiler(P);
  if (!S) return a;
  const b = dogrulaSandik(P, S);
  return { hatalar: a.hatalar.concat(b.hatalar), uyarilar: a.uyarilar.concat(b.uyarilar) };
}

module.exports = { dogrula, dogrulaPartiler, dogrulaSandik, dogrulaBaskanlar };

if (require.main === module) {
  const w = yukle(["veri/partiler.js", "veri/sandik.js", "veri/genel-baskanlar.js"]);
  const a = dogrula(w.PARTILER, w.SANDIK), g = dogrulaBaskanlar(w.PARTILER, w.GENEL_BASKANLAR);
  const hatalar = a.hatalar.concat(g.hatalar), uyarilar = a.uyarilar.concat(g.uyarilar);
  uyarilar.forEach(u => console.log("uyarı: " + u));
  hatalar.forEach(h => console.log("HATA:  " + h));
  console.log(hatalar.length ? hatalar.length + " hata" : "hata yok");
  process.exit(hatalar.length ? 1 : 0);
}
