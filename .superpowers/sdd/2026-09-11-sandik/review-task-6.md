# İnceleme paketi: task-6 (182bafb..HEAD)

## Commitler
```
6d4b445 Sandık kart, hükümet şeridi ve panel üreticileri
```
## Özet
```
 araclar/test/sandik-html.test.js | 101 +++++++++++++++++++++
 sandik-mantik.js                 | 186 ++++++++++++++++++++++++++++++++++++++-
 2 files changed, 285 insertions(+), 2 deletions(-)
```
## Fark
```diff
diff --git a/araclar/test/sandik-html.test.js b/araclar/test/sandik-html.test.js
new file mode 100644
index 0000000..eb468c0
--- /dev/null
+++ b/araclar/test/sandik-html.test.js
@@ -0,0 +1,101 @@
+const test = require("node:test");
+const assert = require("node:assert/strict");
+const { yukle } = require("../yukle");
+const O = require("../../ortak");
+const F = require("./fikstur");
+
+const P = yukle(["veri/partiler.js"]).PARTILER;
+const M = require("../../sandik-mantik").olustur(P, O);
+const kayit = id => F.secimler.find(k => k.id === id);
+const kisa = id => P.N.find(n => n.id === id).kisa;
+
+test("kacis HTML karakterlerini kaçırır", () => {
+  assert.equal(M.kacis(`<a href="x">'&'</a>`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;");
+  assert.equal(M.kacis(null), "");
+});
+
+test("genel seçim kartı: kimlik, rozet, başlık, iki çubuk, ilk üç ve baraj altı", () => {
+  const h = M.kartHTML(kayit("1999-04-genel"));
+  assert.match(h, /data-id="1999-04-genel"/);
+  assert.match(h, /t-rozet t-genel/);
+  assert.ok(h.includes(M.kacis(kisa("dsp") + " kazandı · tek başına iktidar")));
+  assert.equal((h.match(/class="cubuk"/g) || []).length, 2);
+  assert.ok(h.includes("%42,9"));
+  assert.match(h, /baraj altı/);
+});
+
+test("tek parti kartı çubuk çizmez", () => {
+  const h = M.kartHTML(kayit("1927-09-genel"));
+  assert.match(h, /tek parti seçimi/);
+  assert.doesNotMatch(h, /class="cubuk"/);
+});
+
+test("yerel kart büyükşehirleri gösterir", () => {
+  const h = M.kartHTML(kayit("2004-03-yerel"));
+  assert.match(h, /İstanbul/);
+  assert.ok(h.includes(M.kacis(kisa("chp92"))));
+});
+
+test("bilinmeyen oy — olarak yazılır ve çubuk bölütü çizilmez", () => {
+  const k = structuredClone(kayit("1999-04-genel"));
+  k.sonuc[1].oy = null;
+  const h = M.kartHTML(k);
+  assert.ok(h.includes("—"));
+  assert.equal(M.cubukHTML([{ kisa: "X", deger: null, renk: "#000000" }], "oy"), '<div class="cubuk-yok">veri yok</div>');
+});
+
+test("hükümet şeridi: numara, soyağacı bağlantısı, bitiş nedeni; görevdeki hükümet", () => {
+  const h57 = M.seritHTML(F.hukumetler[0]);
+  assert.match(h57, /57\. Hükümet/);
+  assert.match(h57, /href="index\.html#dsp"/);
+  assert.match(h57, /bitti: erken seçim kararı/);
+  const h58 = M.seritHTML(F.hukumetler[1]);
+  assert.match(h58, /görevde/);
+  assert.doesNotMatch(h58, /bitti:/);
+});
+
+test("partilerüstü hükümet kesinti rengini alır", () => {
+  const h = M.seritHTML({ no: null, baskan: "C", partiler: [], baslangic: "1980-09-21",
+    bitis: "1983-12-13", tip: "partiluestu", bitisNedeni: null });
+  assert.ok(h.includes("--aile:" + M.KESINTI));
+  assert.match(h, /partilerüstü/);
+});
+
+test("genel seçim paneli bölümleri ve sonraki hükümetler", () => {
+  const { html, renk } = M.panelHTML(kayit("1999-04-genel"), F);
+  assert.match(html, /id="p-kisa"/);
+  for (const b of ["Meclise girenler", "Giremeyenler", "Bağımsız", "Diğer (3 parti)", "57. Hükümet"])
+    assert.ok(html.includes(b), b + " yok");
+  assert.match(renk, /^#[0-9A-F]{6}$/i);
+});
+
+test("sandalyesi bilinmeyen parti panelde ayrı listede görünür", () => {
+  const k = structuredClone(kayit("1999-04-genel"));
+  k.sonuc.find(s => s.parti === "fp").sandalye = null;
+  const { html } = M.panelHTML(k, F);
+  assert.ok(html.includes("Sandalye bilgisi yok"));
+  assert.ok(html.includes("— sandalye"));
+  assert.ok(!html.includes(">Giremeyenler<"));   // fp artık giremeyenlerde değil
+});
+
+test("ittifak notu panelde görünür", () => {
+  const { html } = M.panelHTML(kayit("2002-11-genel"), F);
+  assert.ok(html.includes("Sahte İttifak"));
+  // parti adı soyağacına bağlantı olarak yazılır
+  assert.ok(html.includes('href="index.html#dsp">' + M.kacis(kisa("dsp")) + "</a> 2"));
+});
+
+test("referandum paneli: evet/hayır, sonuç ve tutum grupları", () => {
+  const k = { id: "2010-09-referandum", tur: "referandum", tarih: "2010-09-12", konu: "Sahte konu",
+    kayitli: 100, kullanilan: 90, gecerli: 88, evet: 80, hayir: 8, karar: "kabul",
+    tutumlar: [{ parti: "akp", tutum: "evet" }, { parti: "chp92", tutum: "hayir" }] };
+  const { html } = M.panelHTML(k, F);
+  for (const b of ["Sahte konu", "kabul", "Evet", "Hayır", "%90,9"]) assert.ok(html.includes(b), b + " yok");
+  assert.ok(M.kartHTML(k).includes("t-referandum"));
+});
+
+test("not alanı kaçırılır", () => {
+  const k = structuredClone(kayit("1999-04-genel"));
+  k.not = "<x>";
+  assert.ok(M.panelHTML(k, F).html.includes("&lt;x&gt;"));
+});
diff --git a/sandik-mantik.js b/sandik-mantik.js
index cf926e1..6a81e4a 100644
--- a/sandik-mantik.js
+++ b/sandik-mantik.js
@@ -95,15 +95,197 @@
             if (ic) ittifak = { ad: it.ad, liste: it.liste, sandalye: ic.sandalye };
           }
           if (satir || ittifak) genel.push({ kayit: k, satir, ittifak });
         } else if (k.tur === "yerel" && satir) {
           yerel.push({ kayit: k, satir });
         }
       }
       return { genel, yerel };
     }
 
-    return { BAGIMSIZ, DIGER, NOTR, partiAdi, oyDegeri, katilimDegeri, siralaGenel,
-             baslikGenel, meclisDurumu, donemBul, kronoloji, sonrakiHukumetler, partininSecimleri };
+    /* ---------------- HTML üreticileri ---------------- */
+    const KESINTI = "#7A1509";
+    const EVET = "#151810", HAYIR = "#A9AD9E";
+    const TUR_ETIKET = { genel: "GENEL", yerel: "YEREL", referandum: "REFERANDUM",
+      "cb-halk": "CB · HALK", "cb-tbmm": "CB · TBMM", ara: "ARA SEÇİM" };
+    const TUR_AD = { genel: "Genel Seçimi", yerel: "Yerel Seçimi", referandum: "Referandumu",
+      "cb-halk": "Cumhurbaşkanlığı Seçimi", "cb-tbmm": "Cumhurbaşkanlığı Seçimi (TBMM)", ara: "Ara Seçimi" };
+    const BITIS_ETIKET = { secim: "olağan seçim", "erken-secim": "erken seçim kararı",
+      guvensizlik: "güvensizlik oyu", istifa: "istifa", darbe: "darbe", muhtira: "muhtıra",
+      "cumhurbaskani-secimi": "başbakanın cumhurbaşkanı seçilmesi", olum: "başbakanın ölümü",
+      "sistem-degisikligi": "hükümet sisteminin değişmesi", diger: "diğer" };
+    const TIP_ETIKET = { "tek-parti": "tek parti", koalisyon: "koalisyon", azinlik: "azınlık",
+      partiluestu: "partilerüstü", mbk: "Millî Birlik Komitesi", cumhurbaskanligi: "cumhurbaşkanlığı" };
+    const SEHIRLER = [["istanbul", "İstanbul"], ["ankara", "Ankara"], ["izmir", "İzmir"]];
+
+    function kacis(s) {
+      return s == null ? "" : String(s).replace(/[&<>"']/g, c =>
+        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
+    }
+    function partiBag(id, metin) {
+      const a = partiAdi({ parti: id });
+      return a.id ? '<a class="p-git" href="index.html#' + a.id + '">' + kacis(metin || a.kisa) + "</a>"
+                  : kacis(metin || id);
+    }
+    function satirAdi(s) { return s.parti ? partiBag(s.parti) : kacis(s.ad); }
+    function rozetHTML(tur) {
+      return '<span class="t-rozet t-' + tur + '">' + TUR_ETIKET[tur] + "</span>";
+    }
+    function cubukHTML(bolutler, etiket) {
+      const b = bolutler.filter(x => x.deger != null && x.deger > 0);
+      if (!b.length) return '<div class="cubuk-yok">veri yok</div>';
+      const aria = etiket + ": " + b.map(x => x.kisa + " " + O.yuzdeYaz(x.deger)).join(", ");
+      return '<div class="cubuk" role="img" aria-label="' + kacis(aria) + '">' +
+        b.map(x => '<i style="width:' + x.deger.toFixed(2) + "%;background:" + x.renk + '" title="' +
+          kacis(x.kisa + " " + O.yuzdeYaz(x.deger)) + '"></i>').join("") + "</div>";
+    }
+    function oyBolutleri(k, satirlar) {
+      return satirlar.slice().sort((a, b) => (oyDegeri(b, k) || 0) - (oyDegeri(a, k) || 0))
+        .map(s => { const a = partiAdi(s); return { kisa: a.kisa, deger: oyDegeri(s, k), renk: a.renk }; });
+    }
+    function sandalyeBolutleri(k) {
+      return siralaGenel(k).concat(k.sonuc.filter(s => s.ad === BAGIMSIZ))
+        .filter(s => s.sandalye > 0 && k.meclis)
+        .map(s => { const a = partiAdi(s); return { kisa: a.kisa, deger: s.sandalye / k.meclis * 100, renk: a.renk }; });
+    }
+    function ustHTML(k) {
+      return '<div class="s-ust"><span class="s-tarih">' + O.tarihYaz(k.tarih, true) + "</span>" + rozetHTML(k.tur) + "</div>";
+    }
+    function kartRengi(k) {
+      if (k.tur === "genel") { const i = siralaGenel(k)[0]; return i ? partiAdi(i).renk : NOTR; }
+      if (k.tur === "yerel") { const i = oyBolutleri(k, (k.sonuc || []).filter(s => s.parti))[0]; return i ? i.renk : NOTR; }
+      if (k.tur === "cb-halk") { const t = (k.turlar || [])[k.turlar.length - 1]; const a = t && t.adaylar.find(x => x.ad === k.secilen);
+        return a && a.parti ? partiAdi(a).renk : NOTR; }
+      return EVET;
+    }
+    function ilkUcHTML(k, satirlar, sandalyeli) {
+      return '<ol class="s-ilk3">' + satirlar.slice(0, 3).map(s =>
+        "<li><b>" + kacis(partiAdi(s).kisa) + "</b> " + O.yuzdeYaz(oyDegeri(s, k)) +
+        (sandalyeli ? " · " + O.sayiYaz(s.sandalye) : "") + "</li>").join("") + "</ol>";
+    }
+
+    function kartHTML(k) {
+      let govde = "";
+      if (k.tur === "genel") {
+        govde = '<div class="s-baslik">' + kacis(baslikGenel(k)) + "</div>";
+        if (!k.tekParti) {
+          govde += cubukHTML(oyBolutleri(k, k.sonuc), "oy") + cubukHTML(sandalyeBolutleri(k), "sandalye") +
+                   ilkUcHTML(k, siralaGenel(k), true);
+          const alt = meclisDurumu(k).giremeyenler.slice().sort((a, b) => (oyDegeri(b, k) || 0) - (oyDegeri(a, k) || 0))[0];
+          if (k.baraj != null && alt)
+            govde += '<div class="s-baraj">baraj altı: ' + kacis(partiAdi(alt).kisa) + " " + O.yuzdeYaz(oyDegeri(alt, k)) + "</div>";
+        } else {
+          const b = (k.sonuc || []).filter(s => s.sandalye != null);
+          if (b.length) govde += '<div class="s-not">' + b.map(s => kacis(partiAdi(s).kisa) + " " + s.sandalye).join(" · ") + "</div>";
+        }
+      } else if (k.tur === "yerel") {
+        const partiler = (k.sonuc || []).filter(s => s.ad !== DIGER);
+        govde = cubukHTML(oyBolutleri(k, k.sonuc || []), "oy") +
+          ilkUcHTML(k, partiler.slice().sort((a, b) => (oyDegeri(b, k) || 0) - (oyDegeri(a, k) || 0)), false);
+        if (k.buyuksehir) govde += '<div class="s-sehirler">' + SEHIRLER.filter(x => k.buyuksehir[x[0]])
+          .map(x => x[1] + " · <b>" + kacis(partiAdi(k.buyuksehir[x[0]]).kisa) + "</b>").join("<br>") + "</div>";
+      } else if (k.tur === "referandum") {
+        const e = O.yuzde(k.evet, k.gecerli), h = O.yuzde(k.hayir, k.gecerli);
+        govde = '<div class="s-baslik">' + kacis(k.konu) + "</div>" +
+          cubukHTML([{ kisa: "Evet", deger: e, renk: EVET }, { kisa: "Hayır", deger: h, renk: HAYIR }], "sonuç") +
+          '<div class="s-not">' + (k.karar === "kabul" ? "kabul edildi" : "reddedildi") +
+          " · katılım " + O.yuzdeYaz(katilimDegeri(k)) + "</div>";
+      } else if (k.tur === "cb-halk") {
+        govde = '<div class="s-baslik">' + kacis(k.secilen) + " seçildi</div>" +
+          (k.turlar || []).map((t, i) => '<div class="s-not">' + (i + 1) + ". tur: " +
+            t.adaylar.slice().sort((a, b) => (oyDegeri(b, t) || 0) - (oyDegeri(a, t) || 0)).slice(0, 2)
+              .map(a => kacis(a.ad) + " " + O.yuzdeYaz(oyDegeri(a, t))).join(" · ") + "</div>").join("");
+      } else if (k.tur === "cb-tbmm") {
+        govde = '<div class="s-tek">' + (k.secilen ? kacis(k.secilen) + " seçildi" : "sonuçsuz") +
+          (k.turSayisi != null ? " · " + k.turSayisi + " tur" : "") + "</div>";
+      } else if (k.tur === "ara") {
+        govde = '<div class="s-tek">' + kacis(k.bolge) + " · " + O.sayiYaz(k.sandalyeSayisi) + " sandalye" +
+          ((k.sonuc || []).length ? " · " + k.sonuc.map(s => kacis(partiAdi(s).kisa) + " " + O.sayiYaz(s.sandalye)).join(", ") : "") + "</div>";
+      }
+      const tek = k.tur === "cb-tbmm" || k.tur === "ara" ? " s-kucuk" : "";
+      return '<div class="kart s-kart s-' + k.tur + tek + '" data-id="' + k.id + '" tabindex="0" role="button" style="--aile:' +
+        kartRengi(k) + '">' + ustHTML(k) + govde + "</div>";
+    }
+
+    function seritHTML(h) {
+      const renk = h.partiler && h.partiler.length && (h.tip !== "partiluestu" && h.tip !== "mbk")
+        ? partiAdi({ parti: h.partiler[0] }).renk : KESINTI;
+      const bas = h.no != null ? h.no + ". Hükümet" : "Hükümet";
+      const kisi = h.basbakan || h.baskan;
+      const partiler = h.partiler && h.partiler.length ? h.partiler.map(p => partiBag(p)).join("–") : TIP_ETIKET[h.tip];
+      const aralik = O.tarihYaz(h.baslangic, true) + " – " + (h.bitis ? O.tarihYaz(h.bitis, true) : "görevde");
+      return '<div class="s-serit" style="--aile:' + renk + '"><b>' + bas + "</b> · " + kacis(kisi) + " · " +
+        partiler + " · " + aralik +
+        (h.bitisNedeni ? '<div class="s-bitis">bitti: ' + kacis(BITIS_ETIKET[h.bitisNedeni]) +
+          (h.bitisNedeni === "diger" && h.not ? " — " + kacis(h.not) : "") + "</div>" : "") + "</div>";
+    }
+
+    function liste(baslik, satirlar) {
+      return satirlar.length ? '<div class="p-etiket">' + baslik + "</div><ul>" + satirlar.join("") + "</ul>" : "";
+    }
+    function sonucSatiri(k, s, sandalyeli) {
+      const a = partiAdi(s);
+      return '<li><i style="background:' + a.renk + '"></i>' + satirAdi(s) + "<span>" +
+        O.yuzdeYaz(oyDegeri(s, k)) + (s.oy != null ? " · " + O.sayiYaz(s.oy) + " oy" : "") +
+        (sandalyeli ? " · " + O.sayiYaz(s.sandalye) + " sandalye" : "") + "</span></li>";
+    }
+    function meta(parcalar) {
+      return '<div class="p-meta">' + parcalar.filter(Boolean).join(" · ") + "</div>";
+    }
+
+    function panelHTML(k, S) {
+      let h = '<div class="p-kisa" id="p-kisa">' + k.tarih.slice(0, 4) + " " + TUR_AD[k.tur] + "</div>";
+      h += '<div class="p-ad">' + O.tarihYaz(k.tarih) + (k.tur === "ara" ? " · " + kacis(k.bolge) : "") + "</div>";
+      if (k.tur === "genel") {
+        const d = meclisDurumu(k);
+        h += meta([k.meclis != null ? O.sayiYaz(k.meclis) + " sandalye" : null,
+          "katılım " + O.yuzdeYaz(katilimDegeri(k)), k.baraj != null ? "baraj %" + k.baraj : null]);
+        h += liste("Meclise girenler", d.girenler.map(s => sonucSatiri(k, s, true)));
+        h += liste("Giremeyenler", d.giremeyenler.map(s => sonucSatiri(k, s, false)));
+        h += liste("Sandalye bilgisi yok", d.bilinmeyen.map(s => sonucSatiri(k, s, true)));
+        if (d.bagimsiz) h += liste("Bağımsızlar", [sonucSatiri(k, d.bagimsiz, true)]);
+        if (d.diger) h += liste("Diğer (" + O.sayiYaz(d.diger.partiSayisi) + " parti)", [sonucSatiri(k, d.diger, false)]);
+        for (const it of k.ittifak || [])
+          h += '<div class="p-etiket">' + kacis(it.ad) + "</div><div class=\"p-ozet\">" + partiBag(it.liste) +
+            " listesinden: " + it.icinden.map(x => partiBag(x.parti) + " " + O.sayiYaz(x.sandalye)).join(", ") + "</div>";
+        h += liste("Bu seçimden sonra kurulan hükümetler", sonrakiHukumetler(k, S).map(x => "<li>" + seritHTML(x) + "</li>"));
+      } else if (k.tur === "yerel") {
+        h += meta(["katılım " + O.yuzdeYaz(katilimDegeri(k)), "belediye meclisi oyları"]);
+        const sirali = (k.sonuc || []).slice().sort((a, c) => (oyDegeri(c, k) || 0) - (oyDegeri(a, k) || 0));
+        h += liste("Sonuç", sirali.map(s => sonucSatiri(k, s, false)));
+        if (k.buyuksehir) h += liste("Büyükşehirler", SEHIRLER.filter(x => k.buyuksehir[x[0]]).map(x =>
+          "<li><b>" + x[1] + "</b>" + partiBag(k.buyuksehir[x[0]].parti) + "<span>" + kacis(k.buyuksehir[x[0]].aday) + "</span></li>"));
+      } else if (k.tur === "referandum") {
+        h += '<div class="p-ozet">' + kacis(k.konu) + "</div>";
+        h += meta(["katılım " + O.yuzdeYaz(katilimDegeri(k)), k.karar === "kabul" ? "kabul" : "ret"]);
+        h += liste("Sonuç", [
+          "<li><b>Evet</b><span>" + O.yuzdeYaz(O.yuzde(k.evet, k.gecerli)) + " · " + O.sayiYaz(k.evet) + " oy</span></li>",
+          "<li><b>Hayır</b><span>" + O.yuzdeYaz(O.yuzde(k.hayir, k.gecerli)) + " · " + O.sayiYaz(k.hayir) + " oy</span></li>"]);
+        for (const [t, ad] of [["evet", "Evet dedi"], ["hayir", "Hayır dedi"], ["boykot", "Boykot etti"], ["serbest", "Serbest bıraktı"]]) {
+          const p = (k.tutumlar || []).filter(x => x.tutum === t);
+          if (p.length) h += '<div class="p-etiket">' + ad + '</div><div class="p-ozet">' + p.map(x => partiBag(x.parti)).join(", ") + "</div>";
+        }
+      } else if (k.tur === "cb-halk") {
+        (k.turlar || []).forEach((t, i) => {
+          h += '<div class="p-etiket">' + (i + 1) + ". tur · " + O.tarihYaz(t.tarih) + " · katılım " + O.yuzdeYaz(katilimDegeri(t)) + "</div>";
+          h += "<ul>" + t.adaylar.slice().sort((a, b) => (oyDegeri(b, t) || 0) - (oyDegeri(a, t) || 0)).map(a =>
+            "<li><b>" + kacis(a.ad) + "</b>" + (a.parti ? partiBag(a.parti) : kacis(a.destek || "")) + "<span>" +
+            O.yuzdeYaz(oyDegeri(a, t)) + "</span></li>").join("") + "</ul>";
+        });
+        h += meta(["seçilen: " + kacis(k.secilen)]);
+      } else if (k.tur === "cb-tbmm") {
+        h += meta([k.secilen ? "seçilen: " + kacis(k.secilen) : "sonuçsuz", k.turSayisi != null ? k.turSayisi + " tur" : null]);
+      } else if (k.tur === "ara") {
+        h += meta([O.sayiYaz(k.sandalyeSayisi) + " sandalye"]);
+        h += liste("Kazananlar", (k.sonuc || []).map(s => "<li>" + satirAdi(s) + "<span>" + O.sayiYaz(s.sandalye) + " sandalye</span></li>"));
+      }
+      if (k.not) h += '<div class="p-etiket">Not</div><div class="p-ozet">' + kacis(k.not) + "</div>";
+      return { html: h, renk: kartRengi(k) };
+    }
+
+    return { BAGIMSIZ, DIGER, NOTR, KESINTI, TUR_ETIKET, TUR_AD, BITIS_ETIKET,
+             partiAdi, oyDegeri, katilimDegeri, siralaGenel, baslikGenel, meclisDurumu,
+             donemBul, kronoloji, sonrakiHukumetler, partininSecimleri,
+             kacis, rozetHTML, cubukHTML, kartHTML, seritHTML, panelHTML };
   }
   return { olustur };
 });
```
