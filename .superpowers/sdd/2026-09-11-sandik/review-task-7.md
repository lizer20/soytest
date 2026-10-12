# İnceleme paketi: task-7 (6d4b445..HEAD)

## Commitler
```
07ea1a6 Sandık sayfası: dönem bantları, kesinti kapları, filtreler, panel
```
## Özet
```
 araclar/denetim/fikstur.html |  29 ++++++++++
 araclar/denetim/sandik.js    |  32 +++++++++++
 index.html                   |  19 -------
 ortak.css                    |  21 +++++++
 sandik-sayfa.js              | 128 +++++++++++++++++++++++++++++++++++++++++++
 sandik.css                   |  48 ++++++++++++++++
 sandik.html                  |  63 +++++++++++++++++++++
 7 files changed, 321 insertions(+), 19 deletions(-)
```
## Fark
```diff
diff --git a/araclar/denetim/fikstur.html b/araclar/denetim/fikstur.html
new file mode 100644
index 0000000..8b4c55b
--- /dev/null
+++ b/araclar/denetim/fikstur.html
@@ -0,0 +1,29 @@
+<!DOCTYPE html>
+<html lang="tr">
+<meta charset="utf-8">
+<meta name="robots" content="noindex">
+<title>Sandık — SAHTE FİKSTÜR (test sayfası)</title>
+<meta name="viewport" content="width=device-width, initial-scale=1">
+<link rel="stylesheet" href="../../ortak.css">
+<link rel="stylesheet" href="../../sandik.css">
+<div class="wrap">
+  <p class="disclaimer"><b>SAHTE VERİ.</b> Bu sayfa yalnızca sandik-sayfa.js'i sınamak içindir; sayılar uydurmadır.</p>
+  <div class="araclar">
+    <div class="turlar" id="turlar" role="group" aria-label="Kayıt türleri"></div>
+    <div class="yil-filtre"><span>yıl</span>
+      <input id="yilKaydirici" type="range" step="1" aria-label="Yıl filtresi">
+      <span id="yilDeger" class="yil-deger"></span></div>
+    <button id="filtreTemizle" class="temizle-buton" type="button">filtreleri temizle</button>
+  </div>
+  <div id="rows"></div>
+  <div id="perde"></div>
+  <aside id="panel" role="dialog" aria-modal="true" aria-labelledby="p-kisa" inert aria-hidden="true">
+    <button id="kapat" aria-label="Kapat">✕</button>
+    <div id="p-govde"></div>
+  </aside>
+</div>
+<script src="../../veri/partiler.js"></script>
+<script src="../test/fikstur.js"></script>
+<script src="../../ortak.js"></script>
+<script src="../../sandik-mantik.js"></script>
+<script src="../../sandik-sayfa.js"></script>
diff --git a/araclar/denetim/sandik.js b/araclar/denetim/sandik.js
new file mode 100644
index 0000000..8339807
--- /dev/null
+++ b/araclar/denetim/sandik.js
@@ -0,0 +1,32 @@
+// Sandık sayfası denetimi — araclar/denetim/fikstur.html üzerinde, javascript_tool ile
+// değerlendirilir. Beklenen değerler plan Görev 7 / Adım 7'de.
+(() => {
+  const r = {};
+  const ogeId = x => { const k = x.querySelector("[data-id]"); return k ? k.dataset.id : "serit"; };
+  r.kart = document.querySelectorAll(".s-kart").length;
+  r.serit = document.querySelectorAll(".s-serit").length;
+  r.bant = document.querySelectorAll(".banner:not(.kesinti)").length;
+  r.kesinti = document.querySelectorAll(".banner.kesinti").length;
+  r.bos = document.querySelectorAll(".s-bos").length;
+  const d = document.querySelector('.tur-dugme[data-tur="hukumet"]');
+  d.click();
+  r.hukumetKapali = { gizli: [...document.querySelectorAll(".s-oge-serit")].every(x => x.hidden),
+                      basili: d.getAttribute("aria-pressed") };
+  d.click();
+  const y = document.getElementById("yilKaydirici");
+  y.value = 2003; y.dispatchEvent(new Event("input", { bubbles: true }));
+  r.yil2003 = [...document.querySelectorAll(".s-oge.sonuc")].map(ogeId);
+  y.value = y.max; y.dispatchEvent(new Event("input", { bubbles: true }));
+  r.yilEnSag = document.getElementById("rows").classList.contains("filtreli");
+  const k = document.querySelector('[data-id="1999-04-genel"]');
+  k.focus(); k.click();
+  const p = document.getElementById("panel");
+  r.panel = { acik: p.classList.contains("acik"), baslik: document.getElementById("p-kisa").textContent, hash: location.hash };
+  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
+  r.kapaninca = { inert: p.hasAttribute("inert"), odakGeri: document.activeElement === k, hash: location.hash };
+  const b = document.querySelector(".banner:not(.kesinti)");
+  b.click();
+  r.bantKapali = document.getElementById(b.getAttribute("aria-controls")).offsetHeight;
+  b.click();
+  return r;
+})()
diff --git a/index.html b/index.html
index a544687..49abb4a 100644
--- a/index.html
+++ b/index.html
@@ -26,43 +26,27 @@
   .dot{width:11px;height:11px;border-radius:50%;flex:none}
   .lejant2{
     max-width:1100px;margin:14px auto 0;display:flex;flex-wrap:wrap;gap:6px 20px;
     font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--soluk);
   }
   .lejant2 span{display:flex;align-items:center;gap:7px}
   .swatch{width:26px;height:0;border-top:2px solid var(--soluk);flex:none}
   .swatch.kesik{border-top-style:dashed}
   .swatch.nokta{border-top-style:dotted}
 
-  .araclar{
-    max-width:1100px;margin:18px auto 0;padding-top:16px;border-top:1px solid var(--cizgi);
-    display:flex;flex-wrap:wrap;align-items:center;gap:14px 22px;
-  }
   .ara-kutu{
     font-family:"IBM Plex Sans",sans-serif;font-size:13px;color:var(--murekkep);
     background:var(--kart);border:1px solid var(--cizgi);padding:7px 10px;
     width:230px;max-width:60vw;
   }
   .ara-kutu::placeholder{color:var(--soluk)}
   .ara-kutu:focus-visible{outline:2px solid var(--murekkep);outline-offset:1px}
-  .yil-filtre{
-    display:flex;align-items:center;gap:9px;font-family:"IBM Plex Mono",monospace;
-    font-size:11px;color:var(--soluk);letter-spacing:.06em;
-  }
-  .yil-filtre input[type=range]{width:170px;accent-color:var(--murekkep)}
-  .yil-deger{font-weight:600;color:var(--murekkep);min-width:32px;display:inline-block}
-  .temizle-buton{
-    font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.05em;color:var(--soluk);
-    background:none;border:1px solid var(--cizgi);padding:6px 10px;cursor:pointer;
-  }
-  .temizle-buton:hover{background:var(--murekkep);color:var(--kagit);border-color:var(--murekkep)}
-  .temizle-buton.aktif{color:var(--murekkep);border-color:var(--murekkep);font-weight:600}
 
   .kaydir-ipucu{
     max-width:1100px;margin:24px auto 8px;font-family:"IBM Plex Mono",monospace;
     font-size:11px;color:var(--soluk);letter-spacing:.06em;
   }
   .mobil-ipucu{display:none}
   .scroller{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;padding-bottom:10px}
 
   #chart{position:relative;min-width:1360px;max-width:1500px;margin:0 auto}
   #edges{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:visible}
@@ -115,24 +99,21 @@
     .masaustu-ipucu{display:none}
     .mobil-ipucu{display:block}
 
     .scroller{overflow-x:visible}
     #chart{min-width:0;max-width:100%}
     #edges{display:none}
 
     .satir{display:flex;flex-direction:column;gap:10px}
     .hucre:empty{display:none}
 
-    .araclar{gap:12px}
     .ara-kutu{width:100%;max-width:none}
-    .yil-filtre{width:100%}
-    .yil-filtre input[type=range]{flex:1}
   }
 </style>
 
 <nav class="ustmenu">
   <div class="ustmenu-ic">
     <a href="index.html" class="ustmenu-link aktif">Ana sayfa</a>
     <a href="kaynakca.html" class="ustmenu-link">Kaynakça &amp; metodoloji</a>
   </div>
 </nav>
 <div class="wrap">
diff --git a/ortak.css b/ortak.css
index 6f74609..a995351 100644
--- a/ortak.css
+++ b/ortak.css
@@ -105,20 +105,37 @@
   .ustmenu-link:focus-visible{outline:2px solid var(--kagit);outline-offset:-2px}
 
   /* ---------- footer ---------- */
   footer{
     max-width:1100px;margin:26px auto 0;padding-top:16px;border-top:1px solid var(--cizgi);
     font-size:12px;color:var(--soluk);
   }
   footer p{margin:0 0 8px;max-width:70ch}
 
   /* ---------- ortak bileşenler: dönem bandı, kart kutusu, rozet, açıklama paneli ---------- */
+  .araclar{
+    max-width:1100px;margin:18px auto 0;padding-top:16px;border-top:1px solid var(--cizgi);
+    display:flex;flex-wrap:wrap;align-items:center;gap:14px 22px;
+  }
+  .yil-filtre{
+    display:flex;align-items:center;gap:9px;font-family:"IBM Plex Mono",monospace;
+    font-size:11px;color:var(--soluk);letter-spacing:.06em;
+  }
+  .yil-filtre input[type=range]{width:170px;accent-color:var(--murekkep)}
+  .yil-deger{font-weight:600;color:var(--murekkep);min-width:32px;display:inline-block}
+  .temizle-buton{
+    font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.05em;color:var(--soluk);
+    background:none;border:1px solid var(--cizgi);padding:6px 10px;cursor:pointer;
+  }
+  .temizle-buton:hover{background:var(--murekkep);color:var(--kagit);border-color:var(--murekkep)}
+  .temizle-buton.aktif{color:var(--murekkep);border-color:var(--murekkep);font-weight:600}
+
   .banner{
     position:relative;z-index:1;
     background:var(--murekkep);color:var(--kagit);
     display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;
     padding:7px 14px;margin:0 0 14px;
   }
   .banner .yil{font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:12px;letter-spacing:.1em}
   .banner .ad{font-family:"Fraunces",serif;font-size:14px;font-style:italic;opacity:.85}
   .banner:not(.kesinti){cursor:pointer}
   .banner:not(.kesinti):focus-visible{outline:2px solid var(--kagit);outline-offset:-3px}
@@ -216,11 +233,15 @@
   @media (max-width:700px){ .wrap{padding:20px 14px 30px} }
 
   @media (max-width:760px){
     #panel{
       top:auto;left:0;right:0;bottom:0;width:100%;max-height:78vh;
       border-left:none;border-top:6px solid var(--aile,#151810);
       transform:translateY(102%);box-shadow:0 -6px 0 rgba(21,24,16,.12);
       padding:22px 18px 34px;
     }
     #panel.acik{transform:translateY(0)}
+
+    .araclar{gap:12px}
+    .yil-filtre{width:100%}
+    .yil-filtre input[type=range]{flex:1}
   }
diff --git a/sandik-sayfa.js b/sandik-sayfa.js
new file mode 100644
index 0000000..10e0241
--- /dev/null
+++ b/sandik-sayfa.js
@@ -0,0 +1,128 @@
+/* Sandık sayfasının DOM bağlaması.
+   Gerektirir: window.PARTILER, window.SANDIK, window.Ortak, window.SandikMantik ve sayfada
+   #turlar, #yilKaydirici, #yilDeger, #filtreTemizle, #rows, #perde, #panel, #kapat, #p-govde. */
+(function () {
+  const P = window.PARTILER, S = window.SANDIK, O = window.Ortak;
+  const M = window.SandikMantik.olustur(P, O);
+  const TURLER = [["genel", "Genel"], ["yerel", "Yerel"], ["referandum", "Referandum"],
+    ["cb-halk", "CB (halk)"], ["cb-tbmm", "CB (TBMM)"], ["ara", "Ara seçim"], ["hukumet", "Hükümet"]];
+  const acikTurler = new Set(TURLER.map(t => t[0]));
+  let yilFiltre = null;
+
+  const rows = document.getElementById("rows");
+  const kr = M.kronoloji(S);
+
+  /* ---- çizim ---- */
+  function ogeHTML(o) {
+    if (o.tur === "secim") {
+      const y = o.tarih.slice(0, 4);
+      return '<div class="s-oge" data-tur="' + o.kayit.tur + '" data-bas="' + y + '" data-bit="' + y + '">' +
+        M.kartHTML(o.kayit) + "</div>";
+    }
+    const h = o.hukumet;
+    return '<div class="s-oge s-oge-serit" data-tur="hukumet" data-bas="' + h.baslangic.slice(0, 4) +
+      '" data-bit="' + (h.bitis ? h.bitis.slice(0, 4) : "9999") + '">' + M.seritHTML(h) + "</div>";
+  }
+  function satirHTML(ogeler) {
+    return ogeler.length ? '<div class="s-satir">' + ogeler.map(ogeHTML).join("") + "</div>" : "";
+  }
+  function bantBul(donem) { return rows.querySelector('.banner[aria-controls="' + donem.id + '"]'); }
+
+  P.DONEMLER.forEach((d, i) => {
+    const b = document.createElement("div");
+    b.className = "banner";
+    b.innerHTML = '<span class="yil">' + d.yil + '</span><span class="ad">' + d.ad +
+      '</span><span class="ok" aria-hidden="true">−</span>';
+    const icerik = document.createElement("div");
+    icerik.className = "s-donem"; icerik.id = "donem-" + i;
+    const ogeler = kr.bantlar[i].ogeler, k = d.kesinti, kap = kr.kaplar[i] || [];
+    // kesinti bandı dönemin sonunda değil, kendi tarihinde durur (spesifikasyon §6.3)
+    const once = k ? ogeler.filter(o => o.tarih < k.tarih) : ogeler;
+    const sonra = k ? ogeler.filter(o => o.tarih >= k.tarih) : [];
+    let html = !ogeler.length && !kap.length ? '<p class="s-bos">bu dönem için henüz kayıt yok</p>' : "";
+    html += satirHTML(once);
+    if (k) {
+      html += '<div class="banner kesinti"><span class="yil">⚡</span><span class="ad">' + M.kacis(k.metin) + "</span></div>";
+      if (kap.length) html += '<div class="s-kap" role="group" aria-label="askerî yönetim dönemi">' + satirHTML(kap) + "</div>";
+    }
+    html += satirHTML(sonra);
+    icerik.innerHTML = html;
+    rows.appendChild(b); rows.appendChild(icerik);
+    O.bantKur(b, icerik);
+  });
+
+  /* ---- araç çubuğu ---- */
+  const turlar = document.getElementById("turlar");
+  turlar.innerHTML = TURLER.map(t => '<button type="button" class="tur-dugme" data-tur="' + t[0] +
+    '" aria-pressed="true">' + t[1] + "</button>").join("");
+  turlar.addEventListener("click", e => {
+    const d = e.target.closest(".tur-dugme"); if (!d) return;
+    const t = d.dataset.tur;
+    if (acikTurler.has(t)) acikTurler.delete(t); else acikTurler.add(t);
+    d.setAttribute("aria-pressed", String(acikTurler.has(t)));
+    uygula();
+  });
+
+  const yillar = P.DONEMLER.map(d => d.yil.split("–").map(x => +x.trim()));
+  const YMIN = yillar[0][0], YMAX = yillar[yillar.length - 1][1];
+  const kaydirici = document.getElementById("yilKaydirici"), yilDeger = document.getElementById("yilDeger");
+  kaydirici.min = YMIN; kaydirici.max = YMAX; kaydirici.value = YMAX; yilDeger.textContent = YMAX;
+  kaydirici.addEventListener("input", () => {
+    const v = +kaydirici.value;
+    yilFiltre = v === YMAX ? null : v;   // en sağ uç "filtre yok" demektir
+    yilDeger.textContent = v;
+    uygula();
+  });
+
+  const temizle = document.getElementById("filtreTemizle");
+  temizle.addEventListener("click", () => {
+    TURLER.forEach(t => acikTurler.add(t[0]));
+    turlar.querySelectorAll(".tur-dugme").forEach(d => d.setAttribute("aria-pressed", "true"));
+    yilFiltre = null; kaydirici.value = YMAX; yilDeger.textContent = YMAX;
+    uygula();
+  });
+
+  function uygula() {
+    rows.classList.toggle("filtreli", yilFiltre !== null);
+    rows.querySelectorAll(".s-oge").forEach(el => {
+      el.hidden = !acikTurler.has(el.dataset.tur);
+      const tutar = yilFiltre !== null && +el.dataset.bas <= yilFiltre && yilFiltre <= +el.dataset.bit;
+      el.classList.toggle("sonuc", tutar);
+      const donem = el.closest(".s-donem");
+      if (tutar && !el.hidden && donem.classList.contains("kapali")) O.bantDurum(bantBul(donem), donem, false);
+    });
+    temizle.classList.toggle("aktif", yilFiltre !== null || acikTurler.size < TURLER.length);
+  }
+
+  /* ---- panel ve doğrudan bağlantı ---- */
+  const Panel = O.panelKur({
+    panel: document.getElementById("panel"), perde: document.getElementById("perde"),
+    govde: document.getElementById("p-govde"), kapatDugmesi: document.getElementById("kapat"),
+    odakSecici: ".s-kart",
+    kapaninca: () => history.replaceState(null, "", location.pathname + location.search)
+  });
+  function ac(id) {
+    const k = S.secimler.find(x => x.id === id); if (!k) return;
+    const p = M.panelHTML(k, S);
+    Panel.ac(p.html, p.renk);
+    history.replaceState(null, "", "#" + id);
+  }
+  rows.addEventListener("click", e => {
+    const k = e.target.closest(".s-kart"); if (k) ac(k.dataset.id);
+  });
+  rows.addEventListener("keydown", e => {
+    const k = e.target.closest(".s-kart");
+    if (k && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); ac(k.dataset.id); }
+  });
+  function hashAc() {
+    const id = O.hashOku(location.hash); if (!id) return;
+    const el = rows.querySelector('[data-id="' + id + '"]'); if (!el) return;
+    const donem = el.closest(".s-donem");
+    if (donem.classList.contains("kapali")) O.bantDurum(bantBul(donem), donem, false);
+    el.scrollIntoView({ block: "center" });
+    el.focus();
+    ac(id);
+  }
+  window.addEventListener("hashchange", hashAc);
+  hashAc();
+})();
diff --git a/sandik.css b/sandik.css
new file mode 100644
index 0000000..cb10106
--- /dev/null
+++ b/sandik.css
@@ -0,0 +1,48 @@
+/* Sandık sayfasına özgü stiller. Ortak bileşenler (bant, kart kutusu, panel, araç çubuğu) ortak.css'te. */
+.turlar{display:flex;flex-wrap:wrap;gap:6px}
+.tur-dugme{
+  font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.04em;
+  padding:5px 9px;border:1px solid var(--cizgi);background:none;color:var(--soluk);cursor:pointer;
+}
+.tur-dugme[aria-pressed="true"]{border-color:var(--murekkep);color:var(--murekkep);background:rgba(21,24,16,.07);font-weight:600}
+.tur-dugme:focus-visible{outline:2px solid var(--murekkep);outline-offset:2px}
+
+#rows{max-width:1100px;margin:24px auto 0}
+.s-donem.kapali{display:none}
+.s-satir{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px;margin:0 0 14px}
+.s-oge-serit{grid-column:1/-1}
+.s-bos{font-size:12px;color:var(--soluk);font-style:italic;margin:0 0 14px}
+.s-kap{border:1px dashed #7A1509;padding:10px 10px 0;margin:-8px 0 14px}
+
+.s-kart{padding:9px 11px 10px}
+.s-ust{
+  display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:5px;
+  font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--soluk);
+}
+.t-rozet{
+  font-family:"IBM Plex Mono",monospace;font-size:9px;font-weight:600;letter-spacing:.07em;
+  padding:1px 5px;border:1px solid currentColor;white-space:nowrap;
+}
+.s-baslik{font-family:"Fraunces",serif;font-weight:700;font-size:15px;line-height:1.15;color:var(--aile);margin-bottom:6px}
+.cubuk{display:flex;height:9px;margin:4px 0;background:var(--kagit)}
+.cubuk i{display:block;height:100%}
+.cubuk-yok{font-size:10.5px;color:var(--soluk);font-style:italic;margin:4px 0}
+.s-ilk3{list-style:none;margin:6px 0 0;padding:0;font-size:11.5px;color:#2A2E22}
+.s-ilk3 li{display:inline;margin-right:9px}
+.s-baraj,.s-not,.s-sehirler{font-size:10.5px;color:var(--soluk);margin-top:5px;line-height:1.4}
+.s-kucuk .s-tek{font-size:12px;color:#2A2E22}
+
+.s-serit{
+  border-left:4px solid var(--aile);padding:5px 10px;font-size:12px;color:#2A2E22;
+  background:rgba(245,245,240,.55);
+}
+.s-serit a{color:inherit;text-underline-offset:3px;text-decoration-color:var(--cizgi)}
+.s-bitis{font-size:11px;color:var(--soluk);margin-top:2px}
+
+#rows.filtreli .s-oge{opacity:.25}
+#rows.filtreli .s-oge.sonuc{opacity:1}
+
+@media (max-width:760px){
+  .s-satir{grid-template-columns:1fr}
+  .turlar{width:100%}
+}
diff --git a/sandik.html b/sandik.html
new file mode 100644
index 0000000..cf9eca8
--- /dev/null
+++ b/sandik.html
@@ -0,0 +1,63 @@
+<!DOCTYPE html>
+<html lang="tr">
+<meta charset="utf-8">
+<title>Sandık — Türkiye Siyasi Partileri Soyağacı</title>
+<meta name="viewport" content="width=device-width, initial-scale=1">
+<meta name="description" content="1923'ten bugüne Türkiye'deki genel ve yerel seçimler, referandumlar, cumhurbaşkanlığı seçimleri ve hükümetler tek kronolojide.">
+<meta property="og:type" content="website">
+<meta property="og:title" content="Sandık — Türkiye Siyasi Partileri Soyağacı">
+<meta property="og:description" content="1923'ten bugüne seçimler, referandumlar ve hükümetler tek kronolojide.">
+<meta property="og:locale" content="tr_TR">
+<link rel="stylesheet" href="ortak.css">
+<link rel="stylesheet" href="sandik.css">
+
+<nav class="ustmenu">
+  <div class="ustmenu-ic">
+    <a href="index.html" class="ustmenu-link">Ana sayfa</a>
+    <a href="sandik.html" class="ustmenu-link aktif">Sandık</a>
+    <a href="kaynakca.html" class="ustmenu-link">Kaynakça &amp; metodoloji</a>
+  </div>
+</nav>
+<div class="wrap">
+  <header>
+    <div class="eyebrow">1923 — 2026 · seçimler, referandumlar, hükümetler</div>
+    <h1>Sandık<br><em>seçimler ve hükümetler</em></h1>
+    <p class="lede">Genel ve yerel seçimler, referandumlar, cumhurbaşkanlığı seçimleri, ara seçimler ve
+      kurulan hükümetler; soyağacıyla aynı dönem bantlarında, tarih sırasıyla.</p>
+    <p class="disclaimer">"—" işareti, sayının iki kaynakla doğrulanamadığı anlamına gelir; tahmin
+      yazılmaz. İttifak listelerinde YSK'nın resmî liste sonucu esas alınır; listeden seçilen başka
+      parti vekilleri ayrıca belirtilir.</p>
+  </header>
+
+  <div class="araclar">
+    <div class="turlar" id="turlar" role="group" aria-label="Kayıt türleri"></div>
+    <div class="yil-filtre">
+      <span>yıl</span>
+      <input id="yilKaydirici" type="range" step="1" aria-label="Yıl filtresi">
+      <span id="yilDeger" class="yil-deger"></span>
+    </div>
+    <button id="filtreTemizle" class="temizle-buton" type="button">filtreleri temizle</button>
+  </div>
+
+  <div id="rows"></div>
+
+  <div id="perde"></div>
+  <aside id="panel" role="dialog" aria-modal="true" aria-labelledby="p-kisa" inert aria-hidden="true">
+    <button id="kapat" aria-label="Kapat">✕</button>
+    <div id="p-govde"></div>
+  </aside>
+
+  <footer>
+    <p><b>Okuma notu.</b> Seçimler tarihlerine, hükümetler kuruluş tarihlerine göre soyağacındaki
+      dönem bantlarına yerleşir. Askerî yönetim dönemlerinde yapılanlar kırmızı kesinti bandının
+      altında toplanır.</p>
+    <p><b>Ölçüler ve kaynaklar.</b> Hangi sayının neye göre hesaplandığı
+      <a href="kaynakca.html">kaynakça &amp; metodoloji</a> sayfasındadır.</p>
+  </footer>
+</div>
+
+<script src="veri/partiler.js"></script>
+<script src="veri/sandik.js"></script>
+<script src="ortak.js"></script>
+<script src="sandik-mantik.js"></script>
+<script src="sandik-sayfa.js"></script>
```
