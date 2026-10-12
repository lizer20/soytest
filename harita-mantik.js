/* Seçim haritasının saf mantığı: il il kazanan partiyi bulur, renkleri atar, SVG ve açıklama üretir.
   DOM'a dokunmaz; Node'da test edilir.
   Kullanım: const H = HaritaMantik.olustur(window.ILLER, SandikMantik.olustur(P, O), window.Ortak); */
(function (kok, fabrika) {
  var HM = fabrika();
  if (typeof module === "object" && module.exports) module.exports = HM;
  else kok.HaritaMantik = HM;
})(typeof window !== "undefined" ? window : this, function () {
  function olustur(IL, M, O) {
    // Kaynaklarda eski ya da kısa adla geçen iller → bugünkü il adı
    const ESKI_AD = { "İÇEL": "Mersin", "MARAŞ": "Kahramanmaraş", "URFA": "Şanlıurfa", "ANTEP": "Gaziantep",
      "AFYON": "Afyonkarahisar", "GÜMÜŞANE": "Gümüşhane", "HAKKÂRİ": "Hakkari", "İZMİT": "Kocaeli",
      "K.MARAŞ": "Kahramanmaraş", "K. MARAŞ": "Kahramanmaraş", "KASTOMONU": "Kastamonu",
      "A. KARAHİSAR": "Afyonkarahisar", "A.KARAHİSAR": "Afyonkarahisar", "ELÂZIĞ": "Elazığ" };
    const buyuk = s => String(s).trim().toLocaleUpperCase("tr-TR").replace(/\s+/g, " ");
    const adla = new Map(IL.iller.map(i => [buyuk(i.ad), i]));
    function ilBul(ad) {
      const b = buyuk(ad);
      return adla.get(b) || (ESKI_AD[b] ? adla.get(buyuk(ESKI_AD[b])) : null) || null;
    }

    const anahtar = s => s.parti || s.ad;
    const satir = k => (/^[a-z0-9]+$/.test(k) && k !== "Bağımsız" ? { parti: k } : { ad: k });

    /* Her il için: { durum: "var" | "bilinmiyor" | "yok", kazanan, sira: [{anahtar, oy, pay}] }
       "yok": il o seçimin tablosunda hiç yer almıyor (o tarihte ayrı il değildi). */
    function iller(k, veri) {
      const sonuc = new Map(IL.iller.map(i => [i.plaka, { durum: "yok", kazanan: null, sira: [] }]));
      const eslesmeyen = [];
      for (const [ad, v] of Object.entries((veri && veri.iller) || {})) {
        const il = ilBul(ad);
        if (!il) { eslesmeyen.push(ad); continue; }
        let r;
        if (v.evet != null && v.hayir != null) {                // referandum: evet/hayır
          const g = v.gecerli || (v.evet + v.hayir), pe = v.evet / g * 100;
          const e = { anahtar: "Evet", oy: v.evet, pay: pe }, h = { anahtar: "Hayır", oy: v.hayir, pay: 100 - pe };
          r = { durum: "var", kazanan: v.evet >= v.hayir ? "Evet" : "Hayır", evetPay: pe, sira: v.evet >= v.hayir ? [e, h] : [h, e] };
        } else if (v.oy && typeof v.oy === "object") {                 // genel seçim: il il parti oyları
          const sira = Object.entries(v.oy).filter(([, n]) => n != null)
            .sort((a, b) => b[1] - a[1])
            .map(([a, n]) => ({ anahtar: a, oy: n, pay: v.gecerli ? n / v.gecerli * 100 : null }));
          r = sira.length && sira[0].oy > 0 ? { durum: "var", kazanan: sira[0].anahtar, sira }
                                            : { durum: "bilinmiyor", kazanan: null, sira: [] };
        } else {                                                // yerel seçim: kazanan belediye başkanlığı
          r = v.kazanan ? { durum: "var", kazanan: v.kazanan,
            sira: [{ anahtar: v.kazanan, oy: v.oy == null ? null : v.oy, pay: null }]
              .concat(v.ikinci ? [{ anahtar: v.ikinci, oy: v.ikinciOy == null ? null : v.ikinciOy, pay: null }] : []) }
            : { durum: "bilinmiyor", kazanan: null, sira: [] };
        }
        if (v.not) r.not = v.not;
        sonuc.set(il.plaka, r);
      }
      return { iller: sonuc, eslesmeyen };
    }

    function karistir(hex, hedef, t) {
      const h = x => parseInt(x, 16), c = [1, 3, 5].map(i => h(hex.slice(i, i + 2))), d = [1, 3, 5].map(i => h(hedef.slice(i, i + 2)));
      return "#" + c.map((v, i) => Math.round(v + (d[i] - v) * t).toString(16).padStart(2, "0")).join("").toUpperCase();
    }
    /* Kazanan partilere renk: parti ailesinin rengi. Aynı aileden birden fazla parti il kazandıysa
       (ör. AK Parti ve Yeniden Refah) en çok il kazanan ailenin rengini alır, diğerleri açık/koyu tonunu. */
    function renkler(ilSonuc) {
      const sayac = new Map();
      for (const r of ilSonuc.values()) if (r.kazanan) sayac.set(r.kazanan, (sayac.get(r.kazanan) || 0) + 1);
      const liste = [...sayac.entries()].sort((a, b) => b[1] - a[1])
        .map(([a, n]) => ({ anahtar: a, il: n, ...M.partiAdi(satir(a)) }));
      const TON = [["#FFFFFF", 0], ["#FFFFFF", 0.45], ["#000000", 0.35], ["#FFFFFF", 0.7]];
      const aile = new Map();
      for (const p of liste) {
        const i = aile.get(p.renk) || 0;
        aile.set(p.renk, i + 1);
        const t = TON[Math.min(i, TON.length - 1)];
        p.dolgu = t[1] ? karistir(p.renk, t[0], t[1]) : p.renk;
        p.ton = i;
      }
      return liste;
    }

    /* Referandum: evet oranına göre karşıt iki renk dizisi (mavi = evet, turuncu = hayır); oran arttıkça koyulaşır. */
    const REF_BASAMAK = [
      { alt: 80, ust: 101, taraf: "Evet", dolgu: "#1F4A7A" }, { alt: 65, ust: 80, taraf: "Evet", dolgu: "#3A6EA5" },
      { alt: 55, ust: 65, taraf: "Evet", dolgu: "#7FA6CC" }, { alt: 50, ust: 55, taraf: "Evet", dolgu: "#C3D5E8" },
      { alt: 50, ust: 55, taraf: "Hayır", dolgu: "#F2CDB8" }, { alt: 55, ust: 65, taraf: "Hayır", dolgu: "#E08A62" },
      { alt: 65, ust: 80, taraf: "Hayır", dolgu: "#B8502A" }, { alt: 80, ust: 101, taraf: "Hayır", dolgu: "#7F2E14" }];
    function refBasamak(r) {
      const p = r.kazanan === "Evet" ? r.evetPay : 100 - r.evetPay;
      return REF_BASAMAK.find(b => b.taraf === r.kazanan && p >= b.alt && p < b.ust);
    }
    const referandumMu = veri => veri && veri.olcu === "referandum";

    function kisaAd(a) { return a === "Evet" || a === "Hayır" ? a : M.partiAdi(satir(a)).kisa; }
    function ipucu(il, r) {
      if (r.durum === "yok") return il.ad + " — bu seçimde ayrı bir il değildi";
      if (r.durum === "bilinmiyor") return il.ad + " — " + (r.not || "sonuç bilinmiyor");
      return il.ad + " — " + r.sira.slice(0, 3).map(s => kisaAd(s.anahtar) +
        (s.pay != null ? " " + O.yuzdeYaz(s.pay) : s.oy != null ? " " + O.sayiYaz(s.oy) + " oy" : "")).join(" · ") +
        (r.not ? " (" + r.not + ")" : "");
    }

    function haritaSVG(k, veri, secenek) {
      const s = secenek || {};
      const { iller: ilSonuc } = iller(k, veri);
      const ref = referandumMu(veri);
      const renk = ref ? null : new Map(renkler(ilSonuc).map(p => [p.anahtar, p.dolgu]));
      const yollar = IL.iller.map(il => {
        const r = ilSonuc.get(il.plaka);
        const dolgu = r.durum === "var" ? (ref ? refBasamak(r).dolgu : renk.get(r.kazanan)) : r.durum === "yok" ? "url(#h-tarama)" : "var(--h-bos)";
        return '<path class="h-il h-' + r.durum + '" data-plaka="' + il.plaka + '" d="' + il.d + '" fill="' + dolgu +
          '"><title>' + M.kacis(ipucu(il, r)) + "</title></path>";
      }).join("");
      const say = [...ilSonuc.values()].filter(r => r.durum === "var").length;
      return '<svg class="h-harita' + (s.buyuk ? " h-buyuk" : "") + '" viewBox="' + IL.viewBox + '" role="img" aria-label="' +
        M.kacis((ref ? "İllere göre referandum sonucu haritası, " : "İllere göre kazanan parti haritası, ") + say + " il") + '">' +
        '<defs><pattern id="h-tarama" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
        '<rect width="6" height="6" fill="var(--h-yok)"/><line x1="0" y1="0" x2="0" y2="6" stroke="var(--h-cizgi)" stroke-width="1.6"/>' +
        "</pattern></defs>" + yollar + "</svg>";
    }

    function lejantHTML(k, veri) {
      const { iller: ilSonuc } = iller(k, veri);
      const yok = [...ilSonuc.values()].filter(r => r.durum === "yok").length;
      const bil = [...ilSonuc.values()].filter(r => r.durum === "bilinmiyor").length;
      if (referandumMu(veri)) {
        const say = new Map(); for (const r of ilSonuc.values()) if (r.durum === "var") { const b = refBasamak(r); say.set(b, (say.get(b) || 0) + 1); }
        const taraf = t => { const n = [...ilSonuc.values()].filter(r => r.kazanan === t).length;
          return '<li class="h-taraf"><b>' + t + " çoğunlukta</b><span>" + n + " il</span></li>" +
            REF_BASAMAK.filter(b => b.taraf === t).sort((a, b) => b.alt - a.alt).map(b => '<li><i style="background:' + b.dolgu + '"></i>' +
              "%" + b.alt + (b.ust > 100 ? " ve üstü" : "–" + b.ust) + "<span>" + (say.get(b) || 0) + " il</span></li>").join(""); };
        return '<ul class="h-lejant">' + taraf("Evet") + taraf("Hayır") +
          (yok ? '<li><i class="h-i-yok"></i>o tarihte ayrı il değildi<span>' + yok + " il</span></li>" : "") + "</ul>";
      }
      const liste = renkler(ilSonuc);
      // genel ve yerel seçimde il kazanan partilerin Türkiye geneli oy oranı (yerelde belediye meclisi oyu);
      // il kazanamayanların toplamı "Diğer"
      const ulusal = new Map(), genel = !!k && (k.tur === "genel" || k.tur === "yerel") && Array.isArray(k.sonuc);
      let diger = 0, digerBilinir = genel;
      if (genel) for (const x of k.sonuc) {
        const y = M.oyDegeri(x, k), a = x.parti || x.ad;
        if (liste.some(p => p.anahtar === a)) ulusal.set(a, y);
        else if (y == null) digerBilinir = false; else diger += y;
      }
      const oyYaz = a => ulusal.get(a) != null ? O.yuzdeYaz(ulusal.get(a)) + " oy · " : "";
      const yerelNot = genel && k.tur === "yerel" && ulusal.size ? '<li class="h-not">Oy oranları: Türkiye geneli belediye meclisi oyu</li>' : "";
      return '<ul class="h-lejant">' + yerelNot + liste.map(p => '<li><i style="background:' + p.dolgu + '"></i>' +
        (p.id ? '<a class="p-git" href="index.html#' + p.id + '">' + M.kacis(p.kisa) + "</a>" : M.kacis(p.kisa)) +
        "<span>" + oyYaz(p.anahtar) + p.il + " il</span></li>").join("") +
        (genel && digerBilinir && diger > 0 ? '<li><i class="h-i-diger"></i>Diğer<span>' + O.yuzdeYaz(diger) + " oy</span></li>" : "") +
        (bil ? '<li><i class="h-i-bos"></i>sonuç bilinmiyor<span>' + bil + " il</span></li>" : "") +
        (yok ? '<li><i class="h-i-yok"></i>o tarihte ayrı il değildi<span>' + yok + " il</span></li>" : "") + "</ul>";
    }

    /* Referandumda Türkiye geneli evet/hayır oranı (Sandık kaydındaki resmî sonuç) */
    function referandumOzetHTML(k) {
      if (!k || k.evet == null || k.hayir == null) return "";
      const g = k.gecerli || (k.evet + k.hayir), e = k.evet / g * 100, h = k.hayir / g * 100;
      const satir = (ad, pay, oy, renk) => '<li><i style="background:' + renk + '"></i><b>' + ad + "</b><span>" +
        O.yuzdeYaz(pay) + " · " + O.sayiYaz(oy) + " oy</span></li>";
      return '<div class="h-ozet"><div class="p-etiket">Türkiye geneli</div>' +
        '<div class="h-ozet-cubuk" role="img" aria-label="' + M.kacis("Evet " + O.yuzdeYaz(e) + ", Hayır " + O.yuzdeYaz(h)) + '">' +
        '<span style="width:' + e.toFixed(2) + '%;background:#3A6EA5"></span><span style="width:' + h.toFixed(2) + '%;background:#B8502A"></span></div>' +
        '<ul class="h-lejant">' + satir("Evet", e, k.evet, "#3A6EA5") + satir("Hayır", h, k.hayir, "#B8502A") + "</ul>" +
        (k.karar ? '<div class="h-ozet-karar">' + (k.karar === "kabul" ? "kabul edildi" : "reddedildi") + "</div>" : "") + "</div>";
    }

    function tabloHTML(k, veri) {
      const { iller: ilSonuc } = iller(k, veri);
      if (referandumMu(veri)) {
        const satirlar = IL.iller.slice().sort((a, b) => a.ad.localeCompare(b.ad, "tr"))
          .filter(il => ilSonuc.get(il.plaka).durum === "var")
          .map(il => { const r = ilSonuc.get(il.plaka);
            return '<tr><th scope="row">' + M.kacis(il.ad) + "</th><td>" + r.kazanan + "</td><td>" + O.yuzdeYaz(r.evetPay) +
              "</td><td>" + O.yuzdeYaz(100 - r.evetPay) + "</td></tr>"; });
        return '<table class="h-tablo"><thead><tr><th scope="col">İl</th><th scope="col">Çoğunluk</th>' +
          '<th scope="col">Evet</th><th scope="col">Hayır</th></tr></thead><tbody>' + satirlar.join("") + "</tbody></table>";
      }
      // sonucu bilinmeyen il satır olmaz (haritada boş, lejantta sayılır); bilinmeyen değer "—" diye yazılmaz,
      // bütün illerde boş kalan sütun hiç çizilmez
      const satirlar = IL.iller.slice().sort((a, b) => a.ad.localeCompare(b.ad, "tr"))
        .filter(il => ilSonuc.get(il.plaka).durum === "var" && ilSonuc.get(il.plaka).kazanan)
        .map(il => { const r = ilSonuc.get(il.plaka), ilk = r.sira[0];
          return { ad: il.ad, birinci: M.kacis(kisaAd(r.kazanan)) + (/^seçim tekrarlandı/.test(r.not || "") ? " <small>(seçim tekrarlandı)</small>" : ""),
            sonraki: M.kacis(r.sira.slice(1, 3).map(s => kisaAd(s.anahtar) + (s.pay != null ? " " + O.yuzdeYaz(s.pay) : "")).join(" · ")),
            pay: ilk && ilk.pay != null ? O.yuzdeYaz(ilk.pay) : ilk && ilk.oy != null ? O.sayiYaz(ilk.oy) + " oy" : "" }; });
      const sonrakiVar = satirlar.some(x => x.sonraki), payVar = satirlar.some(x => x.pay);
      return '<table class="h-tablo"><thead><tr><th scope="col">İl</th><th scope="col">Birinci</th>' +
        (sonrakiVar ? '<th scope="col">Sonrakiler</th>' : "") + (payVar ? '<th scope="col">Birincinin payı</th>' : "") + "</tr></thead><tbody>" +
        satirlar.map(x => '<tr><th scope="row">' + M.kacis(x.ad) + "</th><td>" + x.birinci + "</td>" +
          (sonrakiVar ? "<td>" + x.sonraki + "</td>" : "") + (payVar ? "<td>" + x.pay + "</td>" : "") + "</tr>").join("") + "</tbody></table>";
    }

    return { ilBul, iller, renkler, karistir, ipucu, haritaSVG, lejantHTML, tabloHTML, referandumOzetHTML };
  }
  return { olustur };
});
