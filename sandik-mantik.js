/* Sandık'ın saf mantığı. DOM'a dokunmaz; Node'da test edilir.
   Kullanım: const M = SandikMantik.olustur(window.PARTILER, window.Ortak); */
(function (kok, fabrika) {
  var SM = fabrika();
  if (typeof module === "object" && module.exports) module.exports = SM;
  else kok.SandikMantik = SM;
})(typeof window !== "undefined" ? window : this, function () {
  function olustur(P, O) {
    const BAGIMSIZ = "Bağımsız", DIGER = "Diğer", NOTR = "#8A8D80";
    const parti = id => P.N.find(n => n.id === id);
    const ozelSatir = s => s.ad === BAGIMSIZ || s.ad === DIGER;

    function partiAdi(s) {
      const n = s.parti ? parti(s.parti) : null;
      if (n) return { id: n.id, kisa: n.kisa, ad: n.ad, renk: P.AILE[n.aile].ham };
      return { id: null, kisa: s.ad, ad: s.ad, renk: NOTR };
    }
    function oyDegeri(s, k) {
      if (s.oy != null) return O.yuzde(s.oy, k.gecerli);
      return s.oyYuzde != null ? s.oyYuzde : null;
    }
    function katilimDegeri(k) {
      if (k.kullanilan != null && k.kayitli != null) return O.yuzde(k.kullanilan, k.kayitli);
      return k.katilimYuzde != null ? k.katilimYuzde : null;
    }
    function siralaGenel(k) {
      const oy = s => (s.oy != null ? s.oy : (s.oyYuzde != null ? s.oyYuzde : -1));
      return k.sonuc.filter(s => !ozelSatir(s)).slice().sort((a, b) => {
        const sa = a.sandalye == null ? -1 : a.sandalye, sb = b.sandalye == null ? -1 : b.sandalye;
        return sb - sa || oy(b) - oy(a);
      });
    }
    function baslikGenel(k) {
      if (k.tekParti) return "tek parti seçimi · iki dereceli";
      const ilk = siralaGenel(k)[0];
      if (!ilk) return "";
      const ad = partiAdi(ilk).kisa;
      if (ilk.sandalye != null && k.meclis != null && ilk.sandalye > k.meclis / 2)
        return ad + " kazandı · tek başına iktidar";
      return ad + " birinci parti";
    }
    function meclisDurumu(k) {
      const sirali = siralaGenel(k);
      return {
        girenler: sirali.filter(s => s.sandalye > 0),
        giremeyenler: sirali.filter(s => s.sandalye === 0),
        bilinmeyen: sirali.filter(s => s.sandalye == null),
        bagimsiz: k.sonuc.find(s => s.ad === BAGIMSIZ) || null,
        diger: k.sonuc.find(s => s.ad === DIGER) || null
      };
    }
    function bantYillari(d) {
      const p = d.yil.split("–").map(x => +x.trim());
      return { bas: p[0], bit: p[1] || p[0] };
    }
    function donemBul(tarih) {
      for (let i = 0; i < P.DONEMLER.length; i++) {
        const y = P.DONEMLER[i].kesinti && P.DONEMLER[i].kesinti.yonetim;
        if (y && y.bas <= tarih && tarih <= y.bit) return { tur: "yonetim", i };
      }
      const yil = +tarih.slice(0, 4);
      for (let i = 0; i < P.DONEMLER.length; i++) {
        const b = bantYillari(P.DONEMLER[i]);
        if (b.bas <= yil && yil <= b.bit) return { tur: "donem", i };
      }
      return null;
    }
    function kronoloji(S) {
      const ogeler = S.secimler.map(k => ({ tur: "secim", tarih: k.tarih, kayit: k }))
        .concat(S.hukumetler.map(h => ({ tur: "hukumet", tarih: h.baslangic, hukumet: h })))
        .sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 :
                        (a.tur === b.tur ? 0 : a.tur === "secim" ? -1 : 1));
      const kr = { bantlar: P.DONEMLER.map((d, i) => ({ i, ogeler: [] })), kaplar: {}, yersiz: [] };
      for (const o of ogeler) {
        const y = donemBul(o.tarih);
        if (!y) kr.yersiz.push(o);
        else if (y.tur === "yonetim") (kr.kaplar[y.i] = kr.kaplar[y.i] || []).push(o);
        else kr.bantlar[y.i].ogeler.push(o);
      }
      return kr;
    }
    function sonrakiHukumetler(k, S) {
      const sonraki = S.secimler.filter(x => x.tur === "genel" && x.tarih > k.tarih)
        .map(x => x.tarih).sort()[0] || "9999-12-31";
      return S.hukumetler.filter(h => h.baslangic >= k.tarih && h.baslangic < sonraki);
    }
    function partininSecimleri(id, S) {
      const genel = [], yerel = [];
      for (const k of S.secimler) {
        const satir = (k.sonuc || []).find(s => s.parti === id) || null;
        if (k.tur === "genel") {
          let ittifak = null;
          for (const it of k.ittifak || []) {
            const ic = it.icinden.find(x => x.parti === id);
            if (ic) ittifak = { ad: it.ad, liste: it.liste, sandalye: ic.sandalye };
          }
          if (satir || ittifak) genel.push({ kayit: k, satir, ittifak });
        } else if (k.tur === "yerel" && satir) {
          yerel.push({ kayit: k, satir });
        }
      }
      return { genel, yerel };
    }

    /* ---------------- HTML üreticileri ---------------- */
    const KESINTI = "#7A1509";
    const EVET = "#151810", HAYIR = "#A9AD9E";
    const TUR_ETIKET = { genel: "GENEL", yerel: "YEREL", referandum: "REFERANDUM",
      "cb-halk": "CB · HALK", "cb-tbmm": "CB · TBMM", ara: "ARA SEÇİM" };
    const TUR_AD = { genel: "Genel Seçimi", yerel: "Yerel Seçimi", referandum: "Referandumu",
      "cb-halk": "Cumhurbaşkanlığı Seçimi", "cb-tbmm": "Cumhurbaşkanlığı Seçimi (TBMM)", ara: "Ara Seçimi" };
    const BITIS_ETIKET = { secim: "olağan seçim", "erken-secim": "erken seçim kararı",
      guvensizlik: "güvensizlik oyu", istifa: "istifa", darbe: "darbe", muhtira: "muhtıra",
      "cumhurbaskani-secimi": "başbakanın cumhurbaşkanı seçilmesi", olum: "başbakanın ölümü",
      "sistem-degisikligi": "hükümet sisteminin değişmesi", diger: "diğer" };
    const TIP_ETIKET = { "tek-parti": "tek parti", koalisyon: "koalisyon", azinlik: "azınlık",
      partiluestu: "partilerüstü", mbk: "Millî Birlik Komitesi", mgk: "Millî Güvenlik Konseyi", cumhurbaskanligi: "cumhurbaşkanlığı" };
    const SEHIRLER = [["istanbul", "İstanbul"], ["ankara", "Ankara"], ["izmir", "İzmir"]];

    function kacis(s) {
      return s == null ? "" : String(s).replace(/[&<>"']/g, c =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
    }
    function partiBag(id, metin) {
      const a = partiAdi({ parti: id });
      return a.id ? '<a class="p-git" href="index.html#' + a.id + '">' + kacis(metin || a.kisa) + "</a>"
                  : kacis(metin || id);
    }
    function satirAdi(s) { return s.parti ? partiBag(s.parti) : kacis(s.ad); }
    function rozetHTML(tur) {
      return '<span class="t-rozet t-' + tur + '">' + TUR_ETIKET[tur] + "</span>";
    }
    function cubukHTML(bolutler, etiket) {
      const b = bolutler.filter(x => x.deger != null && x.deger > 0);
      if (!b.length) {
        // değerler bilinip hepsi 0 ise boş çubuk çizilir; hiç değer yoksa çubuk hiç çizilmez
        const sifir = bolutler.filter(x => x.deger === 0);
        return sifir.length ? '<div class="cubuk" role="img" aria-label="' + kacis(etiket + ": " +
          sifir.map(x => x.kisa + " " + O.yuzdeYaz(0)).join(", ")) + '"></div>' : "";
      }
      const aria = etiket + ": " + b.map(x => x.kisa + " " + O.yuzdeYaz(x.deger)).join(", ");
      return '<div class="cubuk" role="img" aria-label="' + kacis(aria) + '">' +
        b.map(x => '<i style="width:' + x.deger.toFixed(2) + "%;background:" + x.renk + '" title="' +
          kacis(x.kisa + " " + O.yuzdeYaz(x.deger)) + '"></i>').join("") + "</div>";
    }
    function oyBolutleri(k, satirlar) {
      return satirlar.slice().sort((a, b) => (oyDegeri(b, k) || 0) - (oyDegeri(a, k) || 0))
        .map(s => { const a = partiAdi(s); return { kisa: a.kisa, deger: oyDegeri(s, k), renk: a.renk }; });
    }
    // kazanılan belediye başkanlıkları (k.belediye): çubuk için yüzdeler, en çok kazananlar önce
    function baskanlikToplami(l) { return (l || []).reduce((a, x) => a + x.sayi, 0); }
    function baskanlikBolutleri(l) {
      const t = baskanlikToplami(l);
      return (l || []).map(x => { const a = partiAdi(x); return { kisa: a.kisa, deger: t ? x.sayi / t * 100 : null, renk: a.renk }; });
    }
    function baskanlikHTML(k) {
      const b = k.belediye; if (!b) return "";
      const satir = x => '<li><i style="background:' + partiAdi(x).renk + '"></i>' + satirAdi(x) + "<span>" +
        O.sayiYaz(x.sayi) + " · " + O.yuzdeYaz(x.sayi / baskanlikToplami(b.sonuc) * 100) + "</span></li>";
      let h = '<div class="p-etiket">Kazanılan belediye başkanlıkları · ' + O.sayiYaz(baskanlikToplami(b.sonuc)) + "</div>" +
        cubukHTML(baskanlikBolutleri(b.sonuc), "belediye başkanlıkları") + "<ul>" + b.sonuc.map(satir).join("") + "</ul>";
      if (b.buyuksehir && b.buyuksehir.length)
        h += '<div class="p-etiket">Kazanılan büyükşehir başkanlıkları · ' + O.sayiYaz(baskanlikToplami(b.buyuksehir)) + "</div><ul>" +
          b.buyuksehir.map(x => '<li><i style="background:' + partiAdi(x).renk + '"></i>' + satirAdi(x) + "<span>" + O.sayiYaz(x.sayi) + "</span></li>").join("") + "</ul>";
      if (b.not) h += '<div class="p-dipnot">' + kacis(b.not) + "</div>";
      return h;
    }
    function ustHTML(k) {
      return '<div class="s-ust"><span class="s-tarih">' + O.tarihYaz(k.tarih, true) + "</span>" + rozetHTML(k.tur) + "</div>";
    }
    function kartRengi(k) {
      if (k.tur === "genel") { const i = siralaGenel(k)[0]; return i ? partiAdi(i).renk : NOTR; }
      if (k.tur === "yerel") { const i = oyBolutleri(k, (k.sonuc || []).filter(s => s.parti))[0]; return i ? i.renk : NOTR; }
      if (k.tur === "cb-halk") { const t = (k.turlar || [])[k.turlar.length - 1]; const a = t && t.adaylar.find(x => x.ad === k.secilen);
        return a && a.parti ? partiAdi(a).renk : NOTR; }
      return EVET;
    }
    function ilkUcHTML(k, satirlar, sandalyeli) {
      // Sıralama oya (gerekirse sandalyeye) dayanır; ikisi de bilinmiyorsa liste sırası
      // sıralama sanılmasın diye ilk üç hiç gösterilmez. Bilinmeyen değer yazılmaz.
      const olculebilir = satirlar.some(s => oyDegeri(s, k) != null || (sandalyeli && s.sandalye != null));
      if (!olculebilir) return "";
      return '<ol class="s-ilk3">' + satirlar.slice(0, 3).map(s => {
        const a = partiAdi(s), y = oyDegeri(s, k);
        const deger = [y != null ? O.yuzdeYaz(y) : null,
          sandalyeli && s.sandalye != null ? O.sayiYaz(s.sandalye) + " sandalye" : null].filter(Boolean).join(" · ");
        return '<li><i style="background:' + a.renk + '"></i><b>' + kacis(a.kisa) + "</b>" +
          (deger ? "<span>" + deger + "</span>" : "") + "</li>";
      }).join("") + "</ol>";
    }
    // bir satır dizisinde en az bir oy değeri biliniyor mu
    function oyVarMi(k, satirlar) { return (satirlar || []).some(s => oyDegeri(s, k) != null); }
    // kart altındaki künye satırı: yalnız bilinen parçalar yazılır
    function kunyeSatiri(parcalar) {
      const p = parcalar.filter(Boolean);
      return p.length ? '<div class="s-kunye">' + p.join('<span class="s-ayrac">·</span>') + "</div>" : "";
    }

    /* ---- meclis yarım dairesi: her nokta bir sandalye. Yerleşim temsilîdir, gerçek oturma
       düzeni değildir; yalnızca partilerin meclisin ne kadarını kapladığını gösterir. ---- */
    function meclisGruplari(k) {
      // sandalye sayısına göre çoktan aza partiler, ardından bağımsızlar; toplam meclise
      // ulaşmıyorsa kalan sandalyeler "bilgi yok" diye boş nokta olarak gösterilir
      const g = siralaGenel(k).concat(k.sonuc.filter(s => s.ad === BAGIMSIZ))
        .filter(s => s.sandalye > 0)
        .map(s => { const a = partiAdi(s); return { id: a.id, kisa: a.kisa, renk: a.renk, sandalye: s.sandalye, satir: s }; });
      // seçimde boş kalıp sonradan dolan sandalyeler (k.sonradan) de boş halka olur, ama ayrı açıklanır
      if (k.sonradan) g.push({ id: null, kisa: "seçimden sonra dolan", renk: null, sandalye: k.sonradan, satir: null, sonradan: true });
      const bilinen = g.reduce((t, x) => t + x.sandalye, 0);
      if (k.meclis != null && k.meclis > bilinen)
        g.push({ id: null, kisa: "dağılımı bilinmeyen", renk: null, sandalye: k.meclis - bilinen, satir: null });
      return g;
    }
    function koltukDuzeni(n) {
      // sıra sayısı, yay boyunca ve sıralar arasındaki aralık yaklaşık eşit olacak biçimde seçilir
      const IC = 0.4;
      const c = 2 * n * (1 - IC) / (Math.PI * (1 + IC));
      const R = Math.max(1, Math.round((1 + Math.sqrt(1 + 4 * c)) / 2));
      const yc = []; for (let i = 0; i < R; i++) yc.push(R === 1 ? 1 : IC + (1 - IC) * i / (R - 1));
      const top = yc.reduce((a, b) => a + b, 0);
      const sira = yc.map(r => Math.floor(n * r / top));
      let kalan = n - sira.reduce((a, b) => a + b, 0);
      yc.map((r, i) => [n * r / top - sira[i], i]).sort((a, b) => b[0] - a[0] || b[1] - a[1])
        .forEach(x => { if (kalan > 0) { sira[x[1]]++; kalan--; } });
      return { sira: sira.map((s, i) => ({ s, r: yc[i] })).filter(x => x.s > 0),
               adim: R === 1 ? Math.PI / Math.max(n, 2) : (1 - IC) / (R - 1) };
    }
    function dilimler(sira, sayilar) {
      // Her grup her sırada bitişik bir dilim alır; dilim sınırları sıranın koltuk sayısıyla orantılı
      // olduğundan her parti bir kama gibi görünür. Toplamlar tam tutar: grubun sandalyesi eksiksiz dağıtılır.
      const n = sayilar.reduce((a, b) => a + b, 0);
      const dolu = sira.map(() => 0), sonuc = [];
      let birikim = 0;
      sayilar.forEach((adet, gi) => {
        birikim += adet;
        const x = sira.map((row, i) => gi === sayilar.length - 1 ? row.s - dolu[i]
          : Math.max(0, Math.min(row.s, Math.floor(birikim / n * row.s)) - dolu[i]));
        let fark = adet - x.reduce((a, b) => a + b, 0);
        const artik = i => birikim / n * sira[i].s - dolu[i] - x[i];
        const sirali = sira.map((_, i) => i).sort((a, b) => artik(b) - artik(a) || a - b);
        for (const i of sirali) { if (fark <= 0) break; if (dolu[i] + x[i] < sira[i].s) { x[i]++; fark--; } }
        for (const i of sirali.slice().reverse()) { if (fark >= 0) break; if (x[i] > 0) { x[i]--; fark++; } }
        sonuc.push(x.map((v, i) => { const bas = dolu[i]; dolu[i] += v; return { bas, adet: v }; }));
      });
      return sonuc;
    }
    function meclisSVG(k, buyuk) {
      const g = meclisGruplari(k);
      const n = g.reduce((t, x) => t + x.sandalye, 0);
      if (!n) return "";
      const d = koltukDuzeni(n), m = g.length;
      const dilim = dilimler(d.sira, g.map(x => x.sandalye));
      // gruplar arası boşluk; aynı renkteki komşu partiler arasında daha geniş (renk tek başına ayırmasın)
      const agirlik = g.map((x, gi) => gi === 0 ? 0 : (x.renk && x.renk === g[gi - 1].renk ? 2.5 : 1));
      const topAg = agirlik.reduce((a, b) => a + b, 0);
      const birim = topAg ? Math.min(0.045, 0.45 / topAg) : 0;
      const kayma = []; agirlik.reduce((t, w, gi) => (kayma[gi] = t + w * birim), 0);
      const olcek = (Math.PI - birim * topAg) / Math.PI;
      const nokta = Math.min(d.adim * olcek * 100 * 0.78, 6);
      const yer = (a, r) => [(-Math.cos(a) * r * 100).toFixed(1), (-Math.sin(a) * r * 100).toFixed(1)];
      const aci = (row, j, gi) => (row.s === 1 ? Math.PI / 2 : Math.PI * j / (row.s - 1)) * olcek + kayma[gi];
      const parcalar = g.map((x, gi) => {
        let yol = "";
        d.sira.forEach((row, i) => {
          for (let j = dilim[gi][i].bas; j < dilim[gi][i].bas + dilim[gi][i].adet; j++) {
            const p = yer(aci(row, j, gi), row.r);
            yol += x.renk ? "M" + p[0] + " " + p[1] + "h0"
              : '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (nokta * 0.4).toFixed(2) + '"/>';
          }
        });
        const baslik = x.kisa + ": " + O.sayiYaz(x.sandalye) + " sandalye (" + O.yuzdeYaz(x.sandalye / n * 100) + ")";
        // bilinmeyen sandalyeler içi boş halka olarak çizilir
        return '<g class="m-grup' + (x.renk ? "" : " m-bos") + '"><title>' + kacis(baslik) + "</title>" + (x.renk
          ? '<path d="' + yol + '" stroke="' + x.renk + '" stroke-width="' + nokta.toFixed(2) + '"/>' : yol) + "</g>";
      });
      // salt çoğunluk çizgisi: soldan sayınca çoğunluğu tamamlayan sandalyenin açısı
      const cogunluk = k.meclis ? Math.floor(k.meclis / 2) + 1 : null;
      let cizgi = "";
      if (cogunluk && cogunluk <= n) {
        let t = 0, gi = 0; while (t + g[gi].sandalye < cogunluk) t += g[gi++].sandalye;
        const a = Math.PI * (cogunluk - 0.5) / n * olcek + kayma[gi];
        const i1 = yer(a, 1 + nokta / 100 + 0.02), i2 = yer(a, 1 + nokta / 100 + 0.1);
        cizgi = '<path class="m-cogunluk" d="M' + i1[0] + " " + i1[1] + "L" + i2[0] + " " + i2[1] + '"/>';
      }
      const aria = "Meclis dağılımı, " + O.sayiYaz(n) + " sandalye: " +
        g.map(x => x.kisa + " " + O.sayiYaz(x.sandalye)).join(", ");
      const ust = -100 - nokta - (cogunluk ? 12 : 2);
      return '<svg class="meclis' + (buyuk ? " meclis-buyuk" : "") + '" viewBox="-' + (101 + nokta).toFixed(0) + " " +
        ust.toFixed(0) + " " + (202 + 2 * nokta).toFixed(0) + " " + (-ust + nokta + 1).toFixed(0) +
        '" role="img" aria-label="' + kacis(aria) + '">' + parcalar.join("") + cizgi +
        '<text class="m-sayi" x="0" y="' + (buyuk ? -12 : -4) + '" text-anchor="middle">' + O.sayiYaz(n) + "</text>" +
        (buyuk ? '<text class="m-alt" x="0" y="-1" text-anchor="middle">sandalye</text>' : "") + "</svg>";
    }
    function koltukListesiHTML(k) {
      // dağılımı bilinmeyen sandalyeler listede satır olmaz; çizimde boş halka, pencerede açıklama olarak durur
      const g = meclisGruplari(k).filter(x => x.renk);
      const goster = g.length > 6 ? g.slice(0, 5) : g, artan = g.slice(goster.length);
      const oyVar = g.some(x => x.satir && oyDegeri(x.satir, k) != null);
      const oy = x => {
        if (!oyVar) return "";
        const y = x.satir ? oyDegeri(x.satir, k) : null;
        return "<span>" + (y != null ? O.yuzdeYaz(y) : "") + "</span>";
      };
      return '<ol class="s-koltuk' + (oyVar ? "" : " s-oysuz") + '"><li class="s-kb"><span></span><span>sandalye</span>' +
        (oyVar ? "<span>oy</span>" : "") + "</li>" +
        goster.map(x => '<li><b><i style="background:' + x.renk + '"></i>' + kacis(x.kisa) + "</b><span>" +
          O.sayiYaz(x.sandalye) + "</span>" + oy(x) + "</li>").join("") +
        (artan.length ? '<li class="s-artan"><b>+' + artan.length + " parti daha</b><span>" +
          O.sayiYaz(artan.reduce((t, x) => t + x.sandalye, 0)) + "</span>" + (oyVar ? "<span></span>" : "") + "</li>" : "") + "</ol>";
    }

    function oySirali(k, satirlar) {
      return satirlar.slice().sort((a, b) => (oyDegeri(b, k) || 0) - (oyDegeri(a, k) || 0));
    }
    function sehirlerHTML(k) {
      if (!k.buyuksehir) return "";
      const l = SEHIRLER.filter(x => k.buyuksehir[x[0]]).map(x => {
        const b = k.buyuksehir[x[0]], a = partiAdi(b);
        return '<span class="s-sehir"' + (b.dipnot ? ' title="' + kacis(b.dipnot) + '"' : "") + ">" + x[1] +
          ' <i style="background:' + a.renk + '"></i><b>' + kacis(a.kisa) + "</b></span>";
      });
      return l.length ? '<div class="s-sehirler">' + l.join("") + "</div>" : "";
    }
    function kartHTML(k) {
      let govde = "";
      if (k.tur === "genel") {
        govde = '<div class="s-baslik">' + kacis(baslikGenel(k)) + "</div>";
        const oyVar = !k.tekParti && oyVarMi(k, k.sonuc);
        const oyCubugu = oyVar ? '<div class="s-oycubuk"><span>oy</span>' + cubukHTML(oyBolutleri(k, k.sonuc), "oy") + "</div>" : "";
        const alt = oySirali(k, meclisDurumu(k).giremeyenler)[0];
        const altOy = alt ? oyDegeri(alt, k) : null;
        const kunye = kunyeSatiri([
          k.sonradan ? O.sayiYaz(k.sonradan) + " sandalye seçimden sonra doldu" : null,
          katilimDegeri(k) != null ? "katılım " + O.yuzdeYaz(katilimDegeri(k)) : null,
          !k.tekParti && k.baraj != null ? "baraj %" + k.baraj : null,
          !k.tekParti && k.baraj != null && alt && altOy != null
            ? '<span class="s-baraj">baraj altı: ' + kacis(partiAdi(alt).kisa) + " " + O.yuzdeYaz(altOy) + "</span>" : null]);
        if (meclisGruplari(k).length)
          govde += '<div class="s-meclis"><div class="s-sol">' + meclisSVG(k, false) + oyCubugu + '</div><div class="s-sag">' +
            koltukListesiHTML(k) + "</div></div>" + kunye;
        else if (oyVar)   // sandalye dağılımı bilinmiyor: yalnız oy
          govde += oyCubugu + ilkUcHTML(k, siralaGenel(k), true) + kunye;
        else govde += kunye;
      } else if (k.tur === "yerel") {
        const partiler = (k.sonuc || []).filter(s => !ozelSatir(s));
        if (oyVarMi(k, partiler)) {
          const sirali = oySirali(k, partiler);
          govde = '<div class="s-baslik">' + kacis(partiAdi(sirali[0]).kisa) + " birinci parti</div>" +
            cubukHTML(oyBolutleri(k, k.sonuc || []), "oy") + ilkUcHTML(k, sirali, false);
        } else if (k.kapsam) govde = '<div class="s-tek">yalnız ' + kacis(k.kapsam) + "</div>";
        if (k.belediye) govde += '<div class="s-baskanlik"><span class="s-alt-etiket">belediye başkanlığı</span>' +
          k.belediye.sonuc.filter(x => x.ad !== BAGIMSIZ).slice(0, 3)
            .map(x => '<span class="s-nw"><b>' + kacis(partiAdi(x).kisa) + "</b> " + O.sayiYaz(x.sayi) + "</span>").join('<span class="s-ayrac">·</span>') + "</div>";
        govde += sehirlerHTML(k);
      } else if (k.tur === "referandum") {
        const e = O.yuzde(k.evet, k.gecerli), h = O.yuzde(k.hayir, k.gecerli);
        govde = '<div class="s-baslik s-konu" title="' + kacis(k.konu) + '">' + kacis(k.konu) + "</div>" +
          (e != null && h != null ? '<div class="s-evethayir"><span><b>Evet</b> ' + O.yuzdeYaz(e) + "</span><span><b>Hayır</b> " +
            O.yuzdeYaz(h) + "</span></div>" : "") +
          cubukHTML([{ kisa: "Evet", deger: e, renk: EVET }, { kisa: "Hayır", deger: h, renk: HAYIR }], "sonuç") +
          kunyeSatiri(['<b class="s-karar">' + (k.karar === "kabul" ? "kabul edildi" : "reddedildi") + "</b>",
            katilimDegeri(k) != null ? "katılım " + O.yuzdeYaz(katilimDegeri(k)) : null]);
      } else if (k.tur === "cb-halk") {
        const turlar = k.turlar || [];
        govde = '<div class="s-baslik">' + kacis(k.secilen) + " seçildi</div>" + turlar.map((t, i) => {
          const l = oySirali(t, t.adaylar).slice(0, 2);
          return '<div class="s-tur">' + (turlar.length > 1 ? '<span class="s-alt-etiket">' + (i + 1) + ". tur</span>" : "") +
            '<ol class="s-aday">' + l.map(a => {
              const y = oyDegeri(a, t);
              return "<li><b>" + kacis(a.ad) + "</b>" + (y != null ? "<span>" + O.yuzdeYaz(y) + "</span>" : "") + "</li>";
            }).join("") + "</ol></div>";
        }).join("");
      } else if (k.tur === "cb-tbmm") {
        govde = '<div class="s-tek">' + (k.secilen ? kacis(k.secilen) + " seçildi" : "sonuçsuz") +
          (k.turSayisi != null ? " · " + k.turSayisi + " tur" : "") + "</div>";
      } else if (k.tur === "ara") {
        govde = '<div class="s-tek">' + araOzeti(k) + "</div>";
      }
      const tek = k.tur === "cb-tbmm" || k.tur === "ara" ? " s-kucuk" : "";
      return '<div class="kart s-kart s-ac s-' + k.tur + tek + '" data-id="' + k.id + '" tabindex="0" role="button" style="--aile:' +
        kartRengi(k) + '">' + ustHTML(k) + govde + "</div>";
    }
    function araOzeti(k) {
      return [kacis(k.bolge), k.sandalyeSayisi != null ? O.sayiYaz(k.sandalyeSayisi) + " sandalye" : null].filter(Boolean).join(" · ");
    }

    /* ---- zaman çizelgesi: ayrıntılı sonucu olan kayıtlar kart, tek satırlık bilgiler satır olur ---- */
    function kartMi(k) {
      if (k.tur === "yerel") return oyVarMi(k, (k.sonuc || []).filter(s => !ozelSatir(s))) || !!k.belediye;
      return k.tur === "genel" || k.tur === "referandum" || k.tur === "cb-halk";
    }
    // ardışık öğeleri (kronoloji öğeleri: {tarih, ...}) yıllarına göre toplar; sıra korunur
    function yilGruplari(ogeler) {
      const g = [];
      for (const o of ogeler) {
        const y = o.tarih.slice(0, 4), son = g[g.length - 1];
        if (son && son.yil === y) son.ogeler.push(o); else g.push({ yil: y, ogeler: [o] });
      }
      return g;
    }
    function ilkCumle(t) { return String(t || "").split(/;\s|\.\s/)[0].replace(/\.$/, ""); }
    // genel seçim kartı iki sütun kaplar; tek partili meclisler (çizimde tek renk) dar kartta kalır
    function genisKartMi(k) {
      return k.tur === "genel" && (meclisGruplari(k).filter(x => x.renk).length > 1 || (!meclisGruplari(k).length && oyVarMi(k, k.sonuc)));
    }
    function olayHTML(k) {
      let ana = "", son = "";
      if (k.tur === "cb-tbmm") {
        ana = k.secilen ? "<b>" + kacis(k.secilen) + "</b> seçildi" : "sonuçsuz kaldı";
        son = k.turSayisi != null ? k.turSayisi + " tur" : "";
      } else if (k.tur === "ara") {
        ana = araOzeti(k);
        son = (k.sonuc || []).filter(s => s.sandalye != null).map(s => {
          const a = partiAdi(s);
          return '<span class="s-o-parti"><i style="background:' + a.renk + '"></i>' + kacis(a.kisa) + " " + O.sayiYaz(s.sandalye) + "</span>";
        }).join("");
      } else if (k.tur === "yerel") {
        // ayrıntılı sonucu olmayan yerel seçim: kapsamı ya da notun ilk cümlesi (notun tamamı pencerede)
        ana = k.kapsam ? "yalnız " + kacis(k.kapsam) : '<span class="s-o-not">' + kacis(ilkCumle(k.not)) + "</span>";
        son = SEHIRLER.filter(x => k.buyuksehir && k.buyuksehir[x[0]]).map(x => {
          const a = partiAdi(k.buyuksehir[x[0]]);
          return '<span class="s-o-parti">' + x[1] + ' <i style="background:' + a.renk + '"></i>' + kacis(a.kisa) + "</span>";
        }).join("");
      } else {
        ana = kacis(TUR_AD[k.tur] || "");
      }
      return '<div class="s-olay s-ac s-o-' + k.tur + '" data-id="' + k.id + '" tabindex="0" role="button" style="--aile:' + kartRengi(k) + '">' +
        '<span class="s-o-tarih">' + O.tarihYaz(k.tarih, true) + '</span><span class="s-o-tur">' + rozetHTML(k.tur) + "</span>" +
        '<span class="s-o-ana">' + ana + '</span><span class="s-o-son">' + son + "</span></div>";
    }
    function hukumetRengi(h) {
      return h.partiler && h.partiler.length && (h.tip !== "partiluestu" && h.tip !== "mbk" && h.tip !== "mgk")
        ? partiAdi({ parti: h.partiler[0] }).renk : KESINTI;
    }
    function hukumetPartileri(h) {
      return h.partiler && h.partiler.length ? h.partiler.map(p => partiBag(p)).join("–") : kacis(TIP_ETIKET[h.tip] || h.tip || "");
    }
    function bitisNedeni(h) {
      return h.bitisNedeni ? kacis(BITIS_ETIKET[h.bitisNedeni]) + (h.bitisNedeni === "diger" && h.not ? " — " + kacis(h.not) : "") : "";
    }
    // hükümetin adres kimliği: numaralı olanlar "hukumet-57", numarasızlar (cumhurbaşkanlığı) başlangıç tarihiyle
    function hukumetId(h) { return "hukumet-" + (h.no != null ? h.no : h.baslangic); }
    function hukumetAdi(h) { return h.no != null ? h.no + ". Hükümet" : h.tip === "cumhurbaskanligi" ? "Cumhurbaşkanlığı Hükümeti" : "Hükümet"; }
    function hukumetSatiriHTML(h) {
      const neden = bitisNedeni(h);
      // satırın tamamı tıklanınca pencere açılır; klavyede odak numaradaki düğmeye gelir (satırdaki parti bağlantıları ayrı)
      return '<div class="s-olay s-hukumet s-ac' + (h.onemli ? " s-onemli" : "") + '" data-id="' + hukumetId(h) + '" style="--aile:' + hukumetRengi(h) + '">' +
        '<span class="s-o-tarih">' + O.tarihYaz(h.baslangic, true) + '</span><span class="s-o-tur"><button type="button" class="s-hk-ac">' +
        (h.no != null ? h.no + ". Hükümet" : "Hükümet") + "</button></span>" +
        '<span class="s-o-ana">' + (h.lakap ? '<span class="s-lakap">' + kacis(h.lakap) + "</span> " : "") +
        '<span class="s-o-kisi">' + kacis(h.basbakan || h.baskan) + "</span>" +
        '<span class="s-o-partiler">' + hukumetPartileri(h) + "</span></span>" +
        '<span class="s-o-son">' + (h.bitis ? "→ " + O.tarihYaz(h.bitis, true) : '<b class="s-gorevde">görevde</b>') +
        (neden ? '<span class="s-o-neden">' + neden + "</span>" : "") + "</span></div>";
    }

    /* ---- süre: iki tarih arasındaki yıl / ay / gün (takvime göre) ---- */
    function sure(bas, bit) {
      const a = bas.split("-").map(Number), b = bit.split("-").map(Number);
      const gunu = (y, m, d) => Date.UTC(y, m - 1, d) / 864e5;
      // tam ay sayısı: başlangıca ay eklenir (ayın son gününü aşan gün o ayın son gününe çekilir), kalan günler sayılır
      let ay = (b[0] - a[0]) * 12 + (b[1] - a[1]);
      const ekle = n => { const y = a[0] + Math.floor((a[1] - 1 + n) / 12), m = (a[1] - 1 + n) % 12 + 1;
        return gunu(y, m, Math.min(a[2], new Date(Date.UTC(y, m, 0)).getUTCDate())); };
      if (ekle(ay) > gunu(b[0], b[1], b[2])) ay--;
      return { y: Math.floor(ay / 12), m: ay % 12, d: Math.round(gunu(b[0], b[1], b[2]) - ekle(ay)),
               gun: Math.round(gunu(b[0], b[1], b[2]) - gunu(a[0], a[1], a[2])) };
    }
    function sureYaz(x) {
      const p = [x.y ? x.y + " yıl" : "", x.m ? x.m + " ay" : "", x.d ? x.d + " gün" : ""].filter(Boolean);
      return p.length ? p.join(" ") : "1 günden kısa";
    }
    // toplam gün sayısı yaklaşık yıl/ay olarak (ör. partinin hükümette geçirdiği toplam süre)
    function gunYaz(gun) {
      const y = Math.floor(gun / 365.2425), m = Math.floor((gun - y * 365.2425) / 30.436875);
      return [y ? y + " yıl" : "", m ? m + " ay" : ""].filter(Boolean).join(" ") || gun + " gün";
    }

    function hukumetPanelHTML(h, S) {
      const i = S.hukumetler.indexOf(h), once = S.hukumetler[i - 1], sonra = S.hukumetler[i + 1];
      const secim = S.secimler.filter(k => k.tur === "genel" && k.tarih <= h.baslangic).pop();
      const kisi = h.basbakan ? "Başbakan " + kacis(h.basbakan) : h.baskan ? "Cumhurbaşkanı " + kacis(h.baskan) : "";
      let x = '<div class="p-kisa" id="p-kisa">' + hukumetAdi(h) + "</div>";
      x += '<div class="p-ad">' + (h.lakap ? '<span class="p-lakap">' + kacis(h.lakap) + "</span>" : "") + kisi + "</div>";
      x += meta([O.tarihYaz(h.baslangic) + " – " + (h.bitis ? O.tarihYaz(h.bitis) : "görevde"),
        h.bitis ? sureYaz(sure(h.baslangic, h.bitis)) : null, kacis(TIP_ETIKET[h.tip] || "")]);
      if (h.partiler && h.partiler.length)
        x += liste(h.partiler.length > 1 ? "Hükümetteki partiler" : "Hükümetteki parti", h.partiler.map(p => {
          const a = partiAdi({ parti: p });
          return '<li><i style="background:' + a.renk + '"></i>' + partiBag(p) + "<span>" + kacis(a.ad) + "</span></li>";
        }));
      if (h.bitis) x += '<div class="p-etiket">Bitiş</div><div class="p-ozet">' + O.tarihYaz(h.bitis) +
        (h.bitisNedeni ? " · " + bitisNedeni(h) : "") + "</div>";
      if (h.not && h.bitisNedeni !== "diger") x += '<div class="p-etiket">Not</div><div class="p-ozet">' + kacis(h.not) + "</div>";
      const bag = (etiket, hedef, metin) => '<li><b>' + etiket + '</b><a class="p-git" href="#' + hedef + '">' + metin + "</a></li>";
      const l = [secim ? bag("Önceki genel seçim", secim.id, secim.tarih.slice(0, 4) + " Genel Seçimi") : "",
        once ? bag("Önceki hükümet", hukumetId(once), hukumetAdi(once) + " · " + kacis(once.basbakan || once.baskan)) : "",
        sonra ? bag("Sonraki hükümet", hukumetId(sonra), hukumetAdi(sonra) + " · " + kacis(sonra.basbakan || sonra.baskan)) : ""].filter(Boolean);
      x += liste("Bağlantılar", l);
      return { html: x, renk: hukumetRengi(h) };
    }

    /* ---- soyağacı künyesi: partinin yer aldığı hükümetler ve toplam süre ---- */
    function partiHukumetleriHTML(id, S) {
      const l = S.hukumetler.filter(h => (h.partiler || []).includes(id));
      if (!l.length) return "";
      const biten = l.filter(h => h.bitis), gun = biten.reduce((t, h) => t + sure(h.baslangic, h.bitis).gun, 0);
      const ozet = l.length + " hükümet" + (biten.length ? " · toplam yaklaşık " + gunYaz(gun) : "") +
        (biten.length < l.length ? " (görevdeki hükümet hariç)" : "");
      return '<div class="p-etiket">Yer aldığı hükümetler</div><div class="p-ozet p-hk-ozet">' + ozet + "</div><ul>" +
        l.map(h => '<li><a class="p-git" href="sandik.html#' + hukumetId(h) + '">' + hukumetAdi(h) + "</a><span>" +
          kacis(h.basbakan || h.baskan) + " · " + h.baslangic.slice(0, 4) + (h.bitis && h.bitis.slice(0, 4) !== h.baslangic.slice(0, 4) ? "–" + h.bitis.slice(0, 4) : "") +
          (h.lakap ? " · " + kacis(h.lakap) : "") + "</span></li>").join("") + "</ul>" +
        // 2018'den beri kabineyi cumhurbaşkanı atıyor; veride bu hükümetlerin partisi yok, o yüzden sayılmaz
        (parti(id) && parti(id).durum === "faal" && S.hukumetler.some(h => h.tip === "cumhurbaskanligi")
          ? '<div class="p-dipnot">2018\'den beri kurulan cumhurbaşkanlığı hükümetleri bir partinin hükümeti olarak kaydedilmediği için bu listede yok.</div>' : "");
    }

    /* ---- Sandık dönem özeti: dönemdeki seçim ve kurulan hükümet sayıları; dönemde kurulan hükümetlerin hepsi
       sona erdiyse ortalama süreleri (tarihlerden). ogeler: kronoloji() bant ve askerî yönetim öğeleri. ---- */
    const OZET_TUR = [["genel", "genel seçim"], ["yerel", "yerel seçim"], ["referandum", "referandum"],
      ["cb", "cumhurbaşkanlığı seçimi"], ["ara", "ara seçim"]];
    function donemOzeti(ogeler) {
      const say = {};
      ogeler.forEach(o => {
        if (o.tur !== "secim") return;
        const t = o.kayit.tur.startsWith("cb") ? "cb" : o.kayit.tur;
        say[t] = (say[t] || 0) + 1;
      });
      const hk = ogeler.filter(o => o.tur === "hukumet").map(o => o.hukumet);
      const secim = OZET_TUR.filter(t => say[t[0]]).map(t => say[t[0]] + " " + t[1]);
      const p = [];
      if (secim.length) p.push(secim.join(", "));
      if (hk.length) p.push(hk.length + " hükümet" + (hk.every(h => h.bitis)
        ? ", ortalama süre " + gunYaz(Math.round(hk.reduce((t, h) => t + sure(h.baslangic, h.bitis).gun, 0) / hk.length)) : ""));
      return p.join(" · ");
    }

    /* ---- parti dizini (soyağacının liste görünümü): yalnız kayıtlı veriden türetilir. Genel seçim sayısı
       pencerede listelenen seçimlerle aynıdır (başka partinin listesinden girilenler dahil); "Diğer" içinde
       kalan partiler sayılamaz. En yüksek oy yalnız oyu bilinen seçimlerden seçilir. ---- */
    function dizinSatiri(id, S) {
      const s = partininSecimleri(id, S);
      let enIyi = null;
      s.genel.forEach(x => {
        const oy = x.satir ? oyDegeri(x.satir, x.kayit) : null;
        if (oy != null && (!enIyi || oy > enIyi.oy)) enIyi = { oy, kayit: x.kayit };
      });
      return { genel: s.genel.length, enIyi, hukumet: S.hukumetler.filter(h => (h.partiler || []).includes(id)).length };
    }

    /* ---- arama: kayıt başına aranacak metin (Türkçe harfler sadeleştirilir: "ozal" → Özal) ---- */
    function aramaNormal(t) {
      return String(t || "").toLocaleLowerCase("tr").replace(/[çğıöşüâîû]/g, c => ({ ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", â: "a", î: "i", û: "u" })[c]);
    }
    function partiMetni(p) { const n = parti(p); return n ? [p, n.kisa, n.ad].join(" ") : p; }
    function aramaMetni(x) {
      const l = [];
      if (x.baslangic) {   // hükümet
        l.push(hukumetAdi(x), x.no != null ? x.no + " hukumet" : "", x.basbakan, x.baskan, x.lakap, TIP_ETIKET[x.tip], x.not,
          O.tarihYaz(x.baslangic), x.bitis ? O.tarihYaz(x.bitis) : "", ...(x.partiler || []).map(partiMetni));
      } else {
        l.push(TUR_AD[x.tur], TUR_ETIKET[x.tur], O.tarihYaz(x.tarih), x.konu, x.bolge, x.kapsam, x.secilen, x.not,
          ...(x.sonuc || []).map(s => s.parti ? partiMetni(s.parti) : s.ad),
          ...((x.belediye && x.belediye.sonuc) || []).map(s => s.parti ? partiMetni(s.parti) : s.ad),
          ...Object.values(x.buyuksehir || {}).map(b => [b.parti ? partiMetni(b.parti) : "", b.aday].join(" ")),
          ...(x.ittifak || []).map(it => [it.ad, partiMetni(it.liste), ...it.icinden.map(i => partiMetni(i.parti))].join(" ")),
          ...(x.turlar || []).flatMap(t => t.adaylar.map(a => [a.ad, a.parti ? partiMetni(a.parti) : a.destek].join(" "))),
          ...(x.tutumlar || []).map(t => partiMetni(t.parti)));
      }
      return aramaNormal(l.filter(Boolean).join(" "));
    }
    // her sözcük metinde geçmeli
    function aramaEslesir(metin, sorgu) {
      const s = aramaNormal(sorgu).split(/\s+/).filter(Boolean);
      return s.every(w => metin.includes(w));
    }

    function liste(baslik, satirlar) {
      return satirlar.length ? '<div class="p-etiket">' + baslik + "</div><ul>" + satirlar.join("") + "</ul>" : "";
    }
    function sonucSatiri(k, s, sandalyeli) {
      // yalnız bilinen değerler yazılır; hiçbir değeri bilinmeyen satır hiç çizilmez
      const a = partiAdi(s), y = oyDegeri(s, k);
      const parca = [y != null ? O.yuzdeYaz(y) : null, s.oy != null ? O.sayiYaz(s.oy) + " oy" : null,
        sandalyeli && s.sandalye != null ? O.sayiYaz(s.sandalye) + " sandalye" : null].filter(Boolean);
      if (!parca.length) return "";
      return '<li><i style="background:' + a.renk + '"></i>' + satirAdi(s) + "<span>" + parca.join(" · ") + "</span></li>";
    }
    // satırda gösterilecek en az bir değer var mı (oy, oy oranı ya da sandalye)
    const doluSatir = (k, s) => oyDegeri(s, k) != null || s.oy != null || s.sandalye != null;
    function tabloGrubu(k, baslik, satirlar, oyKolon) {
      satirlar = satirlar.filter(s => doluSatir(k, s));
      if (!satirlar.length) return "";
      return '<tbody><tr class="p-grup"><th colspan="' + (oyKolon ? 3 : 2) + '" scope="rowgroup">' + baslik + "</th></tr>" + satirlar.map(s => {
        const a = partiAdi(s), y = oyDegeri(s, k);
        const sandalye = s.ad === DIGER || s.sandalye == null ? "" : "<b>" + O.sayiYaz(s.sandalye) + "</b>" +
          (s.sandalye > 0 && k.meclis ? "<small>" + O.yuzdeYaz(s.sandalye / k.meclis * 100) + "</small>" : "");
        // oran bilinmeyip oy sayısı biliniyorsa sayı tek başına yazılır
        const oy = !oyKolon ? "" : "<td>" + (y != null ? O.yuzdeYaz(y) + (s.oy != null ? "<small>" + O.sayiYaz(s.oy) + "</small>" : "")
          : s.oy != null ? O.sayiYaz(s.oy) : "") + "</td>";
        return '<tr><td><i style="background:' + a.renk + '"></i>' + satirAdi(s) + "</td>" + oy + "<td>" + sandalye + "</td></tr>";
      }).join("") + "</tbody>";
    }
    function meclisFiguru(k) {
      const svg = meclisSVG(k, true);
      if (!svg) return "";
      const g = meclisGruplari(k), sonra = g.find(x => x.sonradan), bos = g.find(x => !x.renk && !x.sonradan);
      return '<figure class="p-meclis">' + svg + "<figcaption>Her nokta bir sandalye; yerleşim temsilîdir, " +
        "gerçek oturma düzeni değildir. Partiler soldan sağa, tablodaki sırayla dizilidir." + (k.meclis ? " Üstteki çizgi salt çoğunluğu (" +
        O.sayiYaz(Math.floor(k.meclis / 2) + 1) + ") gösterir." : "") +
        (sonra ? " Boş noktalar: " + O.sayiYaz(sonra.sandalye) + " sandalye seçimde boştu, sonradan dolduruldu (bkz. not)." : "") +
        (bos ? " Boş noktalar: " + O.sayiYaz(bos.sandalye) + " sandalyenin dağılımı kaynaklarda bulunamadı." : "") +
        "</figcaption></figure>";
    }
    function meta(parcalar) {
      const p = parcalar.filter(Boolean);
      return p.length ? '<div class="p-meta">' + p.join(" · ") + "</div>" : "";
    }
    const katilimMetni = k => katilimDegeri(k) != null ? "katılım " + O.yuzdeYaz(katilimDegeri(k)) : null;

    function panelHTML(k, S, ek) {
      const harita = (ek && ek.harita) || "";   // il il harita (sayfa verirse)
      const renk = kartRengi(k);
      // renk yalnız kenar şeridinde; nötr (gri) renkte başlık mürekkep rengiyle yazılır
      let h = '<div class="p-kisa' + (renk === NOTR ? " p-notr" : "") + '" id="p-kisa">' + k.tarih.slice(0, 4) + " " + TUR_AD[k.tur] + "</div>";
      h += '<div class="p-ad">' + O.tarihYaz(k.tarih) + (k.tur === "ara" && k.bolge ? " · " + kacis(k.bolge) : "") + "</div>";
      if (k.tur === "genel") {
        const d = meclisDurumu(k);
        const oyKolon = k.sonuc.some(s => oyDegeri(s, k) != null || s.oy != null);
        h += meta([k.meclis != null ? O.sayiYaz(k.meclis) + " sandalye" : null,
          katilimMetni(k), k.baraj != null ? "baraj %" + k.baraj : null]);
        h += meclisFiguru(k) + harita;
        h += '<table class="p-tablo"><thead><tr><th scope="col">Parti</th>' + (oyKolon ? '<th scope="col">Oy</th>' : "") +
          '<th scope="col">Sandalye</th></tr></thead>' +
          tabloGrubu(k, "Meclise girenler", d.girenler, oyKolon) +
          tabloGrubu(k, "Giremeyenler", d.giremeyenler, oyKolon) +
          tabloGrubu(k, "Sandalye bilgisi yok", d.bilinmeyen, oyKolon) +
          tabloGrubu(k, "Bağımsızlar", d.bagimsiz ? [d.bagimsiz] : [], oyKolon) +
          tabloGrubu(k, d.diger ? "Diğer (" + O.sayiYaz(d.diger.partiSayisi) + " parti)" : "", d.diger ? [d.diger] : [], oyKolon) +
          "</table>";
        for (const it of k.ittifak || [])
          h += '<div class="p-etiket">' + kacis(it.ad) + "</div><div class=\"p-ozet\">" + partiBag(it.liste) +
            " listesinden: " + it.icinden.map(x => partiBag(x.parti) + (x.sandalye != null ? " " + O.sayiYaz(x.sandalye) : "")).join(", ") + "</div>";
        const hk = sonrakiHukumetler(k, S);
        if (hk.length) h += '<div class="p-etiket">Bu seçimden sonra kurulan hükümetler</div><div class="s-olaylar p-olaylar">' +
          hk.map(hukumetSatiriHTML).join("") + "</div>";
      } else if (k.tur === "yerel") {
        const partiler = (k.sonuc || []).filter(s => !ozelSatir(s));
        const oyVar = oyVarMi(k, partiler) || (k.sonuc || []).some(s => s.oy != null);
        h += meta([k.kapsam ? kacis(k.kapsam) : null, katilimMetni(k),
          oyVar && k.olcu === "belediye-meclisi" ? "belediye meclisi oyları" : null]);
        // partiler oya göre; "Diğer" ve "Bağımsız" genel seçim panelindeki gibi sonda
        const sirali = (k.sonuc || []).slice().sort((a, c) => (ozelSatir(a) - ozelSatir(c)) ||
          (oyDegeri(c, k) || 0) - (oyDegeri(a, k) || 0));
        h += harita;
        const satirlar = sirali.map(s => sonucSatiri(k, s, false)).filter(Boolean);
        if (satirlar.length) h += '<div class="p-etiket">Sonuç</div>' + cubukHTML(oyBolutleri(k, k.sonuc || []), "oy") +
          "<ul>" + satirlar.join("") + "</ul>";
        h += baskanlikHTML(k);
        if (k.buyuksehir) h += liste("Büyükşehirler", SEHIRLER.filter(x => k.buyuksehir[x[0]]).map(x =>
          '<li><i style="background:' + partiAdi(k.buyuksehir[x[0]]).renk + '"></i><b>' + x[1] + "</b>" + partiBag(k.buyuksehir[x[0]].parti) + "<span>" +
            [k.buyuksehir[x[0]].aday, k.buyuksehir[x[0]].dipnot].filter(Boolean).map(kacis).join(" · ") + "</span></li>"));
      } else if (k.tur === "referandum") {
        const e = O.yuzde(k.evet, k.gecerli), hy = O.yuzde(k.hayir, k.gecerli);
        h += '<div class="p-ozet p-konu">' + kacis(k.konu) + "</div>";
        h += meta([k.karar === "kabul" ? "kabul edildi" : "reddedildi", katilimMetni(k)]);
        const oySatiri = (ad, y, n) => (y != null || n != null) ? "<li><b>" + ad + "</b><span>" +
          [y != null ? O.yuzdeYaz(y) : null, n != null ? O.sayiYaz(n) + " oy" : null].filter(Boolean).join(" · ") + "</span></li>" : "";
        const l = [oySatiri("Evet", e, k.evet), oySatiri("Hayır", hy, k.hayir)].filter(Boolean);
        if (l.length) h += '<div class="p-etiket">Sonuç</div>' +
          cubukHTML([{ kisa: "Evet", deger: e, renk: EVET }, { kisa: "Hayır", deger: hy, renk: HAYIR }], "sonuç") + "<ul>" + l.join("") + "</ul>";
        h += harita;
        for (const [t, ad] of [["evet", "Evet dedi"], ["hayir", "Hayır dedi"], ["boykot", "Boykot etti"], ["serbest", "Serbest bıraktı"]]) {
          const p = (k.tutumlar || []).filter(x => x.tutum === t);
          if (p.length) h += '<div class="p-etiket">' + ad + '</div><div class="p-ozet">' + p.map(x => partiBag(x.parti)).join(", ") + "</div>";
        }
      } else if (k.tur === "cb-halk") {
        h += meta([k.secilen ? "seçilen: " + kacis(k.secilen) : null]);
        (k.turlar || []).forEach((t, i) => {
          h += '<div class="p-etiket">' + [(i + 1) + ". tur", O.tarihYaz(t.tarih), katilimMetni(t)].filter(Boolean).join(" · ") + "</div>";
          h += '<ul class="p-adaylar">' + oySirali(t, t.adaylar).map(a => {
            const y = oyDegeri(a, t), destek = a.parti ? partiBag(a.parti) : kacis(a.destek || "");
            return '<li><div class="p-aday"><b>' + kacis(a.ad) + "</b>" + (destek ? "<small>" + destek + "</small>" : "") + "</div>" +
              (y != null ? "<span>" + O.yuzdeYaz(y) + "</span>" : "") + "</li>";
          }).join("") + "</ul>";
        });
      } else if (k.tur === "cb-tbmm") {
        h += meta([k.secilen ? "seçilen: " + kacis(k.secilen) : "sonuçsuz", k.turSayisi != null ? k.turSayisi + " tur" : null]);
      } else if (k.tur === "ara") {
        h += meta([k.sandalyeSayisi != null ? O.sayiYaz(k.sandalyeSayisi) + " sandalye" : null]);
        h += liste("Kazananlar", (k.sonuc || []).map(s => '<li><i style="background:' + partiAdi(s).renk + '"></i>' + satirAdi(s) +
          (s.sandalye != null ? "<span>" + O.sayiYaz(s.sandalye) + " sandalye</span>" : "") + "</li>"));
      }
      if (k.not) h += '<div class="p-etiket">Not</div><div class="p-ozet">' + kacis(k.not) + "</div>";
      return { html: h, renk };
    }

    /* ---- soyağacı künyesi: genel başkanlar (GB = window.GENEL_BASKANLAR) ---- */
    // yılın okunuşuna göre Türkçe ek: 1955'ten, 1958'e (yılın son sözcüğü: beş, sekiz, on, yüz, bin...)
    function yilEki(yil, tur) {
      const y = String(yil), son = +y.slice(-1), onlar = +y.slice(-2, -1);
      const sozcuk = son ? ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"][son]
        : onlar ? ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"][onlar]
        : +y.slice(-3, -2) ? "yüz" : "bin";
      const unlu = sozcuk.match(/[aeıioöuü]/g).pop(), kalin = /[aıou]/.test(unlu);
      const sonHarf = sozcuk.slice(-1), unluyleBiter = /[aeıioöuü]/.test(sonHarf);
      if (tur === "den") return y + "'" + (/[çfhkpsşt]/.test(sonHarf) ? "t" : "d") + (kalin ? "an" : "en");
      return y + "'" + (unluyleBiter ? "y" : "") + (kalin ? "a" : "e");   // yönelme: 'e / 'ye / 'a / 'ya
    }
    // bilinmeyen yıl "?" diye yazılmaz: yalnız başlangıç biliniyorsa "1955'ten", yalnız bitiş biliniyorsa "1958'e kadar"
    function baskanYili(x) {
      return x.gorevde ? (x.bas ? x.bas + " – görevde" : "görevde")
        : x.bas == null && x.bit == null ? "" : x.bas === x.bit ? x.bas
        : x.bit == null ? yilEki(x.bas, "den") : x.bas == null ? yilEki(x.bit, "e") + " kadar" : x.bas + " – " + x.bit;
    }
    function genelBaskanlarHTML(id, GB) {
      const l = GB && GB[id];
      if (!l || !l.length) return "";
      const satirlar = l.map(x => "<li><b>" + kacis(x.ad) + "</b><span>" + baskanYili(x) +
        (x.not ? '<em class="p-bnot">' + kacis(x.not) + "</em>" : "") + "</span></li>");
      return liste(l.every(x => / ve /.test(x.ad)) ? "Eş genel başkanlar" : "Genel başkanlar", satirlar);
    }

    /* ---- soyağacı künyesi: partinin girdiği seçimler ---- */
    // aynı yıl aynı türde iki seçim varsa (2015 genel gibi) yılın önüne ay yazılır
    function yilEtiketi(k, S) {
      const ayniYil = S.secimler.filter(x => x.tur === k.tur && x.tarih.slice(0, 4) === k.tarih.slice(0, 4));
      return ayniYil.length > 1 ? O.tarihYaz(k.tarih, true).replace(/^\d+ /, "") : k.tarih.slice(0, 4);
    }
    function kunyeSecimleriHTML(id, S) {
      const s = partininSecimleri(id, S);
      const etiket = k => yilEtiketi(k, S);
      const bag = k => '<a class="p-git" href="sandik.html#' + k.id + '">' + etiket(k) + "</a>";
      // bilinmeyen oy ya da sandalye yazılmaz
      const yuzdeVarsa = (s, k) => oyDegeri(s, k) != null ? O.yuzdeYaz(oyDegeri(s, k)) : null;
      const genel = s.genel.map(x => "<li>" + bag(x.kayit) + "<span>" + (x.satir
        ? [yuzdeVarsa(x.satir, x.kayit), x.satir.sandalye != null ? O.sayiYaz(x.satir.sandalye) + " sandalye" : null].filter(Boolean).join(" · ")
        : kacis(partiAdi({ parti: x.ittifak.liste }).kisa) + " listesinden" +
          (x.ittifak.sandalye != null ? " " + O.sayiYaz(x.ittifak.sandalye) + " vekil" : "")) +
        "</span></li>");
      const yerel = s.yerel.map(x => "<li>" + bag(x.kayit) + "<span>" + (yuzdeVarsa(x.satir, x.kayit) || "") + "</span></li>");
      return liste("Girdiği genel seçimler", genel) + liste("Girdiği yerel seçimler", yerel);
    }

    /* ---- soyağacı künyesi: partinin haritada birinci çıktığı iller (V = window.IL_SONUCLARI) ---- */
    function ilKazanani(v) {
      if (v.kazanan !== undefined) return v.kazanan;                 // yerel
      if (!v.oy) return null;                                        // referandum vb.
      let en = null, n = 0;
      for (const [a, x] of Object.entries(v.oy)) if (x != null && x > n) { en = a; n = x; }
      return en;
    }
    function birinciIller(id, S, V) {
      return S.secimler.filter(k => (k.tur === "genel" || k.tur === "yerel") && V && V[k.id]).map(k => {
        const iller = Object.values(V[k.id].iller || {});
        return { kayit: k, il: iller.filter(v => ilKazanani(v) === id).length, toplam: iller.length };
      }).filter(x => x.il > 0);
    }
    function haritaKunyeHTML(id, S, V) {
      const l = birinciIller(id, S, V);
      return liste("Haritada birinci çıktığı iller", l.map(x => '<li><a class="p-git" href="harita.html#' + x.kayit.id + '">' +
        yilEtiketi(x.kayit, S) + " " + (x.kayit.tur === "genel" ? "genel" : "yerel") + "</a><span>" +
        O.sayiYaz(x.il) + " il" + (x.kayit.tur === "yerel" ? " (il merkezi)" : "") + "</span></li>"));
    }

    return { BAGIMSIZ, DIGER, NOTR, KESINTI, TUR_ETIKET, TUR_AD, BITIS_ETIKET,
             partiAdi, oyDegeri, katilimDegeri, siralaGenel, baslikGenel, meclisDurumu, kartRengi, hukumetRengi, baskanYili,
             donemBul, kronoloji, sonrakiHukumetler, partininSecimleri,
             kacis, rozetHTML, genelBaskanlarHTML, cubukHTML, meclisGruplari, meclisSVG, kartHTML, panelHTML, kunyeSecimleriHTML,
             kartMi, genisKartMi, yilGruplari, olayHTML, hukumetSatiriHTML, hukumetId, hukumetAdi, hukumetPanelHTML,
             sure, sureYaz, gunYaz, partiHukumetleriHTML, dizinSatiri, donemOzeti, aramaNormal, aramaMetni, aramaEslesir,
             birinciIller, haritaKunyeHTML, yilEki };
  }
  return { olustur };
});
