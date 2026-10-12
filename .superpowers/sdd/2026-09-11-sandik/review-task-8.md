# İnceleme paketi: task-8 (07ea1a6..HEAD)

## Commitler
```
43794b8 Künyede girdiği seçimler, index.html#parti bağlantısı ve Sandık menüsü
```
## Özet
```
 araclar/test/sandik-html.test.js | 26 ++++++++++++++++++++++++++
 index.html                       | 29 +++++++++++++++++++++++++++--
 kaynakca.html                    |  1 +
 sandik-mantik.js                 | 18 +++++++++++++++++-
 4 files changed, 71 insertions(+), 3 deletions(-)
```
## Fark
```diff
diff --git a/araclar/test/sandik-html.test.js b/araclar/test/sandik-html.test.js
index eb468c0..e98bafd 100644
--- a/araclar/test/sandik-html.test.js
+++ b/araclar/test/sandik-html.test.js
@@ -92,10 +92,36 @@ test("referandum paneli: evet/hayır, sonuç ve tutum grupları", () => {
   const { html } = M.panelHTML(k, F);
   for (const b of ["Sahte konu", "kabul", "Evet", "Hayır", "%90,9"]) assert.ok(html.includes(b), b + " yok");
   assert.ok(M.kartHTML(k).includes("t-referandum"));
 });
 
 test("not alanı kaçırılır", () => {
   const k = structuredClone(kayit("1999-04-genel"));
   k.not = "<x>";
   assert.ok(M.panelHTML(k, F).html.includes("&lt;x&gt;"));
 });
+
+test("künye: girdiği genel seçimler (kendi listesi ve ittifak listesi) ve yerel seçimler", () => {
+  const h = M.kunyeSecimleriHTML("dsp", F);
+  assert.match(h, /Girdiği genel seçimler/);
+  assert.match(h, /href="sandik\.html#1999-04-genel">1999</);
+  assert.ok(h.includes("%42,9 · 6 sandalye"));
+  assert.match(h, /href="sandik\.html#2002-11-genel">2002</);
+  assert.ok(h.includes(M.kacis(kisa("chp92")) + " listesinden 2 vekil"));
+  assert.match(h, /Girdiği yerel seçimler/);
+  assert.match(h, /href="sandik\.html#2004-03-yerel">2004</);
+  assert.ok(h.includes("%13,0"));
+});
+
+test("künye: aynı yıl aynı türde iki seçim ay adıyla ayrışır", () => {
+  const S = structuredClone(F);
+  const ikinci = structuredClone(S.secimler.find(k => k.id === "1999-04-genel"));
+  ikinci.id = "1999-11-genel"; ikinci.tarih = "1999-11-07";
+  S.secimler.splice(2, 0, ikinci);
+  const h = M.kunyeSecimleriHTML("dsp", S);
+  assert.match(h, />Nis 1999</);
+  assert.match(h, />Kas 1999</);
+});
+
+test("künye: seçim kaydı olmayan partide boş", () => {
+  assert.equal(M.kunyeSecimleriHTML("tcf", F), "");
+});
diff --git a/index.html b/index.html
index 49abb4a..369eb83 100644
--- a/index.html
+++ b/index.html
@@ -106,20 +106,21 @@
     .satir{display:flex;flex-direction:column;gap:10px}
     .hucre:empty{display:none}
 
     .ara-kutu{width:100%;max-width:none}
   }
 </style>
 
 <nav class="ustmenu">
   <div class="ustmenu-ic">
     <a href="index.html" class="ustmenu-link aktif">Ana sayfa</a>
+    <a href="sandik.html" class="ustmenu-link">Sandık</a>
     <a href="kaynakca.html" class="ustmenu-link">Kaynakça &amp; metodoloji</a>
   </div>
 </nav>
 <div class="wrap">
   <header>
     <div class="eyebrow">1923 — 2026 · süreklilikler, kopuşlar, kapatmalar · son güncelleme Ağustos 2026</div>
     <h1>Türkiye siyasi partileri<br><em>soyağacı</em></h1>
     <p class="lede">Yedi ana gelenek, yüz yıllık bir çizelge. Düz çizgiler doğrudan devamlılığı (isim değişikliği, yeniden kuruluş), kesikli çizgiler bölünmeleri, noktalı çizgiler katılma ve birleşmeleri gösterir.</p>
     <p class="lede" style="margin-top:10px">Taralı ve kesik çerçeveli kartlar, <b>kapatılmış</b> partilerdir. Kırmızı bantlar ise şemadaki kopuş anları: askerî müdahaleler ve kapatma dalgaları.</p>
     <p class="disclaimer">Parti amblemleri tescilli marka olduğu için çizilmedi; bunun yerine her gelenek bir renkle temsil ediliyor ve yaygın bilinen semboller yazıyla belirtiliyor. Bazı bağlantılar hukuki halefiyet değil siyasi süreklilik iddiasıdır ve tartışmalıdır — kartlardaki notlara bakın.</p>
@@ -161,24 +162,28 @@
   <footer>
     <p><b>Okuma notu.</b> Şema kurucu tarihe göre dizilmiştir; bir parti kurulduğu dönem bandında görünür, faaliyeti sonraki yıllara uzasa da. 12 Eylül 1980'de parti faaliyetleri yasaklandı, hukuki fesih ise 16 Ekim 1981'de gerçekleşti — bu yüzden o dönemin kartlarında bitiş yılı 1981'dir. Mal varlıkları Hazine'ye devredildiği için 1983 bandı neredeyse tümüyle sıfırdan kuruluşlardan oluşur.</p>
     <p><b>Yeni Yol hakkında.</b> Şemadaki tek "çatı parti". TBMM İçtüzüğü grup kurmak için tek bir partiden en az 20 milletvekili şartı aradığından, Saadet, Gelecek ve DEVA 2025'te ortak bir tüzel kişilik kurdu. Üç parti örgütlerini, programlarını ve genel başkanlarını korudu; bu yüzden şemada birleşme değil, üç ayrı noktalı bağla gösteriliyor.</p>
     <p><b>Sınıflandırma.</b> Sütunlar ideolojik çizgiye göre ayrılmıştır. Sosyalist sol (TİP, TKP, ÖDP, EMEP çizgisi) ile radikal sol (HEP'ten DEM Parti'ye uzanan hat) ayrı tutuldu; ikisi de solda yer alsa da aralarında örgütsel devir ilişkisi yok, iki bağımsız zincir oluşturuyorlar.</p>
     <p><b>Rozetler.</b> "kapatıldı" yargı ya da darbe kararıyla sona ermeyi, "feshedildi" partinin kendi kararıyla kapanmasını, "devredildi" kadro ve üyelerin başka bir partiye geçmesini belirtir.</p>
     <p><b>Kapsam.</b> Meclise girmiş, kapatılmış ya da bir geleneğin halkası olan partiler alınmıştır; Türkiye'de kurulmuş yüzlerce partinin tamamı değil.</p>
   </footer>
 </div>
 
 <script src="veri/partiler.js"></script>
+<script src="veri/sandik.js"></script>
 <script src="ortak.js"></script>
+<script src="sandik-mantik.js"></script>
 <script>
 (function(){
   const {AILE, BILGI, DONEMLER, N, E, ROZET} = window.PARTILER;
+  const SANDIK = window.SANDIK;
+  const SM = SandikMantik.olustur(window.PARTILER, Ortak);
 
   const GUNCEL_YIL=2026;
   let arama="", aileFiltre=null, yilFiltre=null, filtreAktif=false;
 
   const lej = document.getElementById("lejant");
   AILE.forEach((a,i)=>{
     const d=document.createElement("div"); d.className="lej";
     d.innerHTML='<i class="dot" style="background:'+a.ham+'"></i>'+a.ad;
     d.tabIndex=0; d.setAttribute("role","button"); d.setAttribute("aria-pressed","false");
     function ailesecTogla(){
@@ -353,21 +358,22 @@
   });
 
   /* ---- açıklama paneli ---- */
   const panel=document.getElementById("panel");
   const perde=document.getElementById("perde");
   const govde=document.getElementById("p-govde");
   const ETIKET={devam:"doğrudan devam",bolunme:"bölünme",katilma:"katılma"};
   const Panel = Ortak.panelKur({
     panel, perde, govde,
     kapatDugmesi: document.getElementById("kapat"),
-    odakSecici: ".kart"
+    odakSecici: ".kart",
+    kapaninca: () => history.replaceState(null, "", location.pathname + location.search)
   });
 
   function bul(id){ return N.find(n=>n.id===id); }
 
   function satirlar(liste){
     return liste.map(x=>{
       const n=bul(x.id); if(!n) return "";
       return '<li><i style="background:'+AILE[n.aile].ham+'"></i>'+
              '<button class="p-git" data-git="'+n.id+'">'+n.kisa+'</button>'+
              '<span>'+n.yil+' · '+x.tur+'</span></li>';
@@ -384,21 +390,23 @@
     const html =
       '<div class="p-kisa" id="p-kisa" style="color:'+renk+'">'+n.kisa+'</div>'+
       '<div class="p-ad">'+n.ad+'</div>'+
       '<div class="p-meta">'+n.yil+' <span class="rozet '+r[1]+'">'+r[0]+'</span>'+
         ' · '+AILE[n.aile].ad+'</div>'+
       (b.k?'<div class="p-etiket">Kurucu</div><div class="p-kurucu">'+b.k+'</div>':'')+
       (b.o?'<div class="p-etiket">Özet</div><div class="p-ozet">'+b.o+'</div>':'')+
       (n.sembol?'<div class="p-etiket">Sembol</div><div class="p-sembol">'+n.sembol+'</div>':'')+
       (oncul.length?'<div class="p-etiket">Nereden geldi</div><ul>'+satirlar(oncul)+'</ul>':'')+
       (ardil.length?'<div class="p-etiket">Nereye gitti</div><ul>'+satirlar(ardil)+'</ul>':'');
-    Panel.ac(html, renk);
+    const secimler = SM.kunyeSecimleriHTML(id, SANDIK);
+    Panel.ac(html + secimler, renk);
+    history.replaceState(null, "", "#" + id);
   }
 
   chart.addEventListener("click",ev=>{
     const k=ev.target.closest(".kart"); if(!k) return;
     ac(k.dataset.id);
   });
   govde.addEventListener("click",ev=>{
     const g=ev.target.closest("[data-git]"); if(!g) return;
     ac(g.dataset.git);
     const hedef=chart.querySelector('[data-id="'+g.dataset.git+'"]');
@@ -426,16 +434,33 @@
 
   document.getElementById("filtreTemizle").addEventListener("click",()=>{
     arama=""; araInput.value="";
     aileFiltre=null;
     document.querySelectorAll(".lej.secili").forEach(x=>{x.classList.remove("secili"); x.setAttribute("aria-pressed","false");});
     yilFiltre=null;
     yilKaydirici.value=YMAX; yilDeger.textContent=YMAX;
     filtreUygula();
   });
 
+  /* ---- doğrudan bağlantı: index.html#<parti> ---- */
+  function hashAc(){
+    const id = Ortak.hashOku(location.hash);
+    if(!id || !bul(id)) return;
+    const el = chart.querySelector('[data-id="'+id+'"]');
+    const s = el.closest(".satir");
+    if(s.classList.contains("kapali")){
+      const b = document.querySelector('.banner[aria-controls="'+s.id+'"]');
+      Ortak.bantDurum(b, s, false); ciz();
+    }
+    el.scrollIntoView({block:"center", inline:"center"});
+    el.focus();
+    ac(id);
+  }
+  window.addEventListener("hashchange", hashAc);
+  hashAc();
+
   ciz();
   window.addEventListener("resize",()=>{clearTimeout(window.__t);window.__t=setTimeout(ciz,120)});
   if(document.fonts&&document.fonts.ready) document.fonts.ready.then(ciz);
   setTimeout(ciz,400);
 })();
 </script>
diff --git a/kaynakca.html b/kaynakca.html
index 272ca43..659abc8 100644
--- a/kaynakca.html
+++ b/kaynakca.html
@@ -48,20 +48,21 @@
   .kaynak-liste li:first-child{padding-top:0}
   .kaynak-liste b{
     display:block;font-family:"IBM Plex Mono",monospace;font-weight:600;
     font-size:11.5px;letter-spacing:.04em;color:var(--murekkep);margin-bottom:3px;
   }
 </style>
 
 <nav class="ustmenu">
   <div class="ustmenu-ic">
     <a href="index.html" class="ustmenu-link">Ana sayfa</a>
+    <a href="sandik.html" class="ustmenu-link">Sandık</a>
     <a href="kaynakca.html" class="ustmenu-link aktif">Kaynakça &amp; metodoloji</a>
   </div>
 </nav>
 <div class="wrap">
   <header>
     <div class="eyebrow">metodoloji · kapsam · doğrulama</div>
     <h1>Kaynakça<br><em>&amp; metodoloji</em></h1>
     <p class="lede">Bu sayfa parti başına bir kaynakça/dipnot listesi değildir. Şemanın hangi
       kurallarla çizildiğini, kapsamının nerede durduğunu ve bu tür bilgilerin genel olarak
       hangi kurumsal kayıtlarla doğrulanabileceğini anlatır.</p>
diff --git a/sandik-mantik.js b/sandik-mantik.js
index 6a81e4a..281b2bf 100644
--- a/sandik-mantik.js
+++ b/sandik-mantik.js
@@ -275,17 +275,33 @@
       } else if (k.tur === "cb-tbmm") {
         h += meta([k.secilen ? "seçilen: " + kacis(k.secilen) : "sonuçsuz", k.turSayisi != null ? k.turSayisi + " tur" : null]);
       } else if (k.tur === "ara") {
         h += meta([O.sayiYaz(k.sandalyeSayisi) + " sandalye"]);
         h += liste("Kazananlar", (k.sonuc || []).map(s => "<li>" + satirAdi(s) + "<span>" + O.sayiYaz(s.sandalye) + " sandalye</span></li>"));
       }
       if (k.not) h += '<div class="p-etiket">Not</div><div class="p-ozet">' + kacis(k.not) + "</div>";
       return { html: h, renk: kartRengi(k) };
     }
 
+    /* ---- soyağacı künyesi: partinin girdiği seçimler ---- */
+    function kunyeSecimleriHTML(id, S) {
+      const s = partininSecimleri(id, S);
+      const etiket = k => {
+        const ayniYil = S.secimler.filter(x => x.tur === k.tur && x.tarih.slice(0, 4) === k.tarih.slice(0, 4));
+        return ayniYil.length > 1 ? O.tarihYaz(k.tarih, true).replace(/^\d+ /, "") : k.tarih.slice(0, 4);
+      };
+      const bag = k => '<a class="p-git" href="sandik.html#' + k.id + '">' + etiket(k) + "</a>";
+      const genel = s.genel.map(x => "<li>" + bag(x.kayit) + "<span>" + (x.satir
+        ? O.yuzdeYaz(oyDegeri(x.satir, x.kayit)) + " · " + O.sayiYaz(x.satir.sandalye) + " sandalye"
+        : kacis(partiAdi({ parti: x.ittifak.liste }).kisa) + " listesinden " + O.sayiYaz(x.ittifak.sandalye) + " vekil") +
+        "</span></li>");
+      const yerel = s.yerel.map(x => "<li>" + bag(x.kayit) + "<span>" + O.yuzdeYaz(oyDegeri(x.satir, x.kayit)) + "</span></li>");
+      return liste("Girdiği genel seçimler", genel) + liste("Girdiği yerel seçimler", yerel);
+    }
+
     return { BAGIMSIZ, DIGER, NOTR, KESINTI, TUR_ETIKET, TUR_AD, BITIS_ETIKET,
              partiAdi, oyDegeri, katilimDegeri, siralaGenel, baslikGenel, meclisDurumu,
              donemBul, kronoloji, sonrakiHukumetler, partininSecimleri,
-             kacis, rozetHTML, cubukHTML, kartHTML, seritHTML, panelHTML };
+             kacis, rozetHTML, cubukHTML, kartHTML, seritHTML, panelHTML, kunyeSecimleriHTML };
   }
   return { olustur };
 });
```
