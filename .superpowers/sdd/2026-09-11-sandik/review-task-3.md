# İnceleme paketi: task-3 (dc0764b..HEAD)

## Commitler
```
9525c43 Panel, dönem bandı ve biçimleme kodunu ortak.js'e taşı
```
## Özet
```
 araclar/test/ortak.test.js |  29 ++++++++
 index.html                 | 171 +++------------------------------------------
 ortak.css                  | 111 +++++++++++++++++++++++++++++
 ortak.js                   |  98 ++++++++++++++++++++++++++
 4 files changed, 249 insertions(+), 160 deletions(-)
```
## Fark
```diff
diff --git a/araclar/test/ortak.test.js b/araclar/test/ortak.test.js
new file mode 100644
index 0000000..531b7f1
--- /dev/null
+++ b/araclar/test/ortak.test.js
@@ -0,0 +1,29 @@
+const test = require("node:test");
+const assert = require("node:assert/strict");
+const O = require("../../ortak");
+
+test("tarihYaz Türkçe ay adlarıyla yazar", () => {
+  assert.equal(O.tarihYaz("1950-05-14"), "14 Mayıs 1950");
+  assert.equal(O.tarihYaz("2002-11-03", true), "3 Kas 2002");
+  assert.equal(O.tarihYaz(null), "—");
+});
+
+test("yuzde ve yuzdeYaz", () => {
+  assert.equal(O.yuzde(1, 4), 25);
+  assert.equal(O.yuzde(null, 4), null);
+  assert.equal(O.yuzde(1, 0), null);
+  assert.equal(O.yuzdeYaz(52.68), "%52,7");
+  assert.equal(O.yuzdeYaz(null), "—");
+});
+
+test("sayiYaz binlik noktayla yazar", () => {
+  assert.equal(O.sayiYaz(1234567), "1.234.567");
+  assert.equal(O.sayiYaz(null), "—");
+});
+
+test("hashOku yalnızca güvenli kimlikleri kabul eder", () => {
+  assert.equal(O.hashOku("#1950-05-genel"), "1950-05-genel");
+  assert.equal(O.hashOku("#akp"), "akp");
+  assert.equal(O.hashOku("#<img>"), null);
+  assert.equal(O.hashOku(""), null);
+});
diff --git a/index.html b/index.html
index 9227164..a544687 100644
--- a/index.html
+++ b/index.html
@@ -60,170 +60,65 @@
   .kaydir-ipucu{
     max-width:1100px;margin:24px auto 8px;font-family:"IBM Plex Mono",monospace;
     font-size:11px;color:var(--soluk);letter-spacing:.06em;
   }
   .mobil-ipucu{display:none}
   .scroller{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;padding-bottom:10px}
 
   #chart{position:relative;min-width:1360px;max-width:1500px;margin:0 auto}
   #edges{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:visible}
 
-  .banner{
-    position:relative;z-index:1;
-    background:var(--murekkep);color:var(--kagit);
-    display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;
-    padding:7px 14px;margin:0 0 14px;
-  }
-  .banner .yil{font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:12px;letter-spacing:.1em}
-  .banner .ad{font-family:"Fraunces",serif;font-size:14px;font-style:italic;opacity:.85}
-  .banner:not(.kesinti){cursor:pointer}
-  .banner:not(.kesinti):focus-visible{outline:2px solid var(--kagit);outline-offset:-3px}
-  .banner .ok{
-    display:inline-block;margin-left:auto;font-family:"IBM Plex Mono",monospace;
-    font-size:14px;line-height:1;
-  }
-  .banner.kesinti .ok{display:none}
-  .banner.kesinti{background:#7A1509}
-  .banner.kesinti .ad{opacity:1;font-style:normal;font-weight:600;font-family:"IBM Plex Sans",sans-serif;font-size:12.5px}
-
   .satir{
     display:grid;grid-template-columns:repeat(7,1fr);gap:0 12px;
     margin-bottom:26px;position:relative;z-index:1;
   }
-  .satir.kapali{display:none}
   .hucre{display:flex;flex-direction:column;gap:12px}
 
-  .kart{
-    background:var(--kart);
-    border:1px solid var(--cizgi);
-    border-left:4px solid var(--aile);
-    padding:9px 11px 10px;
-    position:relative;
-    transition:box-shadow .18s, transform .18s, opacity .18s;
-  }
   .kart .kisa{
     font-family:"Fraunces",serif;font-weight:700;font-size:16px;line-height:1.1;
     color:var(--aile);margin-bottom:2px;letter-spacing:-.01em;
   }
   .kart .ad{font-size:11.5px;line-height:1.25;color:#2A2E22;margin-bottom:6px}
   .kart .yil{
     font-family:"IBM Plex Mono",monospace;font-size:11px;font-weight:500;color:var(--soluk);
     display:flex;align-items:center;gap:6px;flex-wrap:wrap;
   }
   .kart .sembol{
     font-size:10.5px;color:var(--soluk);margin-top:5px;padding-top:5px;
     border-top:1px dotted var(--cizgi);
   }
   .kart .sembol b{font-family:"IBM Plex Mono",monospace;font-weight:600;color:#2A2E22}
   .kart .not{font-size:10.5px;color:var(--soluk);margin-top:5px;font-style:italic}
 
-  .rozet{
-    font-family:"IBM Plex Mono",monospace;font-size:9px;font-weight:600;
-    letter-spacing:.07em;text-transform:uppercase;
-    padding:1px 5px;border:1px solid currentColor;white-space:nowrap;
-  }
-  .r-kapatildi{color:#7A1509}
-  .r-faal{color:#25795A}
-  .r-katildi{color:#5C5F52}
-
   .kart.kapatildi{
     background:
       repeating-linear-gradient(-45deg,
         transparent 0 6px,
         rgba(122,21,9,.09) 6px 7px);
     background-color:var(--kart);
     border-style:dashed;
   }
 
-  .kart{cursor:pointer}
-  .kart:hover{transform:translateY(-2px);box-shadow:0 4px 0 rgba(21,24,16,.18)}
-  .kart:focus-visible{outline:2px solid var(--murekkep);outline-offset:2px}
   #chart.odak .kart{opacity:.28}
   #chart.odak .kart.aktif{opacity:1}
   #chart.odak .kart.komsu{opacity:1}
 
   #chart.filtreli .kart{opacity:.2}
   #chart.filtreli .kart.sonuc{opacity:1}
 
   path.kenar{fill:none;stroke-width:1.6;opacity:.5;transition:opacity .18s,stroke-width .18s}
   path.kenar.bolunme{stroke-dasharray:6 4}
   path.kenar.katilma{stroke-dasharray:2 4;stroke-width:2}
   #chart.odak path.kenar{opacity:.07}
   #chart.odak path.kenar.aktif{opacity:1;stroke-width:2.6}
 
-  /* ---------- açıklama paneli ---------- */
-  #perde{
-    position:fixed;inset:0;background:rgba(21,24,16,.35);
-    opacity:0;pointer-events:none;transition:opacity .22s;z-index:40;
-  }
-  #perde.acik{opacity:1;pointer-events:auto}
-
-  #panel{
-    position:fixed;top:0;right:0;bottom:0;width:min(420px,100%);
-    background:var(--kart);border-left:6px solid var(--aile,#151810);
-    z-index:50;overflow-y:auto;padding:26px 24px 40px;
-    transform:translateX(102%);transition:transform .26s cubic-bezier(.4,0,.2,1);
-    box-shadow:-6px 0 0 rgba(21,24,16,.12);
-  }
-  #panel.acik{transform:translateX(0)}
-
-  #kapat{
-    position:absolute;top:16px;right:18px;background:none;border:1px solid var(--cizgi);
-    color:var(--soluk);font-family:"IBM Plex Mono",monospace;font-size:13px;
-    width:30px;height:30px;cursor:pointer;line-height:1;
-  }
-  #kapat:hover{background:var(--murekkep);color:var(--kagit);border-color:var(--murekkep)}
-
-  #panel .p-kisa{
-    font-family:"Fraunces",serif;font-weight:700;font-size:30px;line-height:1;
-    color:var(--aile);margin:0 0 6px;letter-spacing:-.02em;
-  }
-  #panel .p-ad{font-size:14px;color:#2A2E22;margin-bottom:14px;padding-right:30px}
-  #panel .p-meta{
-    font-family:"IBM Plex Mono",monospace;font-size:11.5px;color:var(--soluk);
-    display:flex;align-items:center;gap:8px;flex-wrap:wrap;
-    padding-bottom:14px;border-bottom:1px solid var(--cizgi);margin-bottom:16px;
-  }
-  #panel .p-etiket{
-    font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.14em;
-    text-transform:uppercase;color:var(--soluk);margin:20px 0 7px;
-  }
-  #panel .p-kurucu{font-size:13px;color:#2A2E22;line-height:1.5}
-  #panel .p-ozet{font-size:13.5px;color:#2A2E22;line-height:1.6}
-  #panel .p-sembol{
-    font-size:12.5px;color:#2A2E22;
-    border:1px dashed var(--cizgi);padding:8px 10px;margin-top:6px;
-  }
-  #panel ul{list-style:none;margin:0;padding:0}
-  #panel li{
-    font-size:12.5px;padding:7px 0;border-bottom:1px dotted var(--cizgi);
-    display:flex;gap:9px;align-items:baseline;
-  }
-  #panel li b{color:#2A2E22;font-weight:600;flex:none}
-  #panel li span{color:var(--soluk);font-size:11.5px}
-  #panel li i{width:8px;height:8px;border-radius:50%;flex:none;align-self:center}
-  .p-git{
-    background:none;border:none;padding:0;cursor:pointer;text-align:left;
-    font:inherit;color:#2A2E22;font-weight:600;text-decoration:underline;
-    text-decoration-color:var(--cizgi);text-underline-offset:3px;
-  }
-  .p-git:hover{text-decoration-color:currentColor}
-
   @media (max-width:760px){
-    #panel{
-      top:auto;left:0;right:0;bottom:0;width:100%;max-height:78vh;
-      border-left:none;border-top:6px solid var(--aile,#151810);
-      transform:translateY(102%);box-shadow:0 -6px 0 rgba(21,24,16,.12);
-      padding:22px 18px 34px;
-    }
-    #panel.acik{transform:translateY(0)}
-
     .masaustu-ipucu{display:none}
     .mobil-ipucu{display:block}
 
     .scroller{overflow-x:visible}
     #chart{min-width:0;max-width:100%}
     #edges{display:none}
 
     .satir{display:flex;flex-direction:column;gap:10px}
     .hucre:empty{display:none}
 
@@ -285,20 +180,21 @@
   <footer>
     <p><b>Okuma notu.</b> Şema kurucu tarihe göre dizilmiştir; bir parti kurulduğu dönem bandında görünür, faaliyeti sonraki yıllara uzasa da. 12 Eylül 1980'de parti faaliyetleri yasaklandı, hukuki fesih ise 16 Ekim 1981'de gerçekleşti — bu yüzden o dönemin kartlarında bitiş yılı 1981'dir. Mal varlıkları Hazine'ye devredildiği için 1983 bandı neredeyse tümüyle sıfırdan kuruluşlardan oluşur.</p>
     <p><b>Yeni Yol hakkında.</b> Şemadaki tek "çatı parti". TBMM İçtüzüğü grup kurmak için tek bir partiden en az 20 milletvekili şartı aradığından, Saadet, Gelecek ve DEVA 2025'te ortak bir tüzel kişilik kurdu. Üç parti örgütlerini, programlarını ve genel başkanlarını korudu; bu yüzden şemada birleşme değil, üç ayrı noktalı bağla gösteriliyor.</p>
     <p><b>Sınıflandırma.</b> Sütunlar ideolojik çizgiye göre ayrılmıştır. Sosyalist sol (TİP, TKP, ÖDP, EMEP çizgisi) ile radikal sol (HEP'ten DEM Parti'ye uzanan hat) ayrı tutuldu; ikisi de solda yer alsa da aralarında örgütsel devir ilişkisi yok, iki bağımsız zincir oluşturuyorlar.</p>
     <p><b>Rozetler.</b> "kapatıldı" yargı ya da darbe kararıyla sona ermeyi, "feshedildi" partinin kendi kararıyla kapanmasını, "devredildi" kadro ve üyelerin başka bir partiye geçmesini belirtir.</p>
     <p><b>Kapsam.</b> Meclise girmiş, kapatılmış ya da bir geleneğin halkası olan partiler alınmıştır; Türkiye'de kurulmuş yüzlerce partinin tamamı değil.</p>
   </footer>
 </div>
 
 <script src="veri/partiler.js"></script>
+<script src="ortak.js"></script>
 <script>
 (function(){
   const {AILE, BILGI, DONEMLER, N, E, ROZET} = window.PARTILER;
 
   const GUNCEL_YIL=2026;
   let arama="", aileFiltre=null, yilFiltre=null, filtreAktif=false;
 
   const lej = document.getElementById("lejant");
   AILE.forEach((a,i)=>{
     const d=document.createElement("div"); d.className="lej";
@@ -322,35 +218,21 @@
     rows.appendChild(b);
 
     const s=document.createElement("div"); s.className="satir"; s.id="donem-"+i;
     for(let c=0;c<7;c++){
       const h=document.createElement("div"); h.className="hucre"; h.dataset.col=c;
       N.filter(n=>n.donem===i && n.aile===c).forEach(n=>h.appendChild(kart(n)));
       s.appendChild(h);
     }
     rows.appendChild(s);
 
-    b.tabIndex=0;
-    b.setAttribute("role","button");
-    b.setAttribute("aria-expanded","true");
-    b.setAttribute("aria-controls",s.id);
-    function ackapa(){
-      const kapali=s.classList.toggle("kapali");
-      b.classList.toggle("kapali",kapali);
-      b.setAttribute("aria-expanded",String(!kapali));
-      b.querySelector(".ok").textContent=kapali?"+":"−";
-      ciz();
-    }
-    b.addEventListener("click",ackapa);
-    b.addEventListener("keydown",e=>{
-      if(e.key==="Enter"||e.key===" "){ e.preventDefault(); ackapa(); }
-    });
+    Ortak.bantKur(b, s, ciz);
 
     if(d.kesinti){
       const k=document.createElement("div"); k.className="banner kesinti";
       k.innerHTML='<span class="yil">⚡</span><span class="ad">'+d.kesinti.metin+'</span>';
       rows.appendChild(k);
     }
   });
 
   function kart(n){
     const el=document.createElement("div");
@@ -442,24 +324,23 @@
       chart.querySelectorAll(".aktif,.komsu").forEach(x=>x.classList.remove("aktif","komsu"));
     }
     chart.querySelectorAll(".kart").forEach(el=>{
       const n=bul(el.dataset.id);
       el.classList.toggle("sonuc",filtreAktif && eslesiyorMu(n));
     });
     let duzenDegisti=false;
     if(filtreAktif){
       document.querySelectorAll(".satir.kapali").forEach(s=>{
         if(!s.querySelector(".kart.sonuc")) return;
-        s.classList.remove("kapali");
         duzenDegisti=true;
         const b=document.querySelector('.banner[aria-controls="'+s.id+'"]');
-        if(b){ b.classList.remove("kapali"); b.setAttribute("aria-expanded","true"); b.querySelector(".ok").textContent="−"; }
+        if(b) Ortak.bantDurum(b, s, false); else s.classList.remove("kapali");
       });
     }
     document.getElementById("filtreTemizle").classList.toggle("aktif",filtreAktif);
     // sadece kapalı bir dönem açıldıysa yükseklikler değişir; her tuş vuruşunda yeniden çizme
     if(duzenDegisti) ciz();
   }
 
   function vurgula(k){
     if(filtreAktif||!k) return;
     if(k.classList.contains("aktif")) return;   // aynı kart içinde gezinirken titremesin
@@ -488,97 +369,67 @@
     const k=ev.target.closest(".kart"); if(!k) return;
     if(ev.relatedTarget&&k.contains(ev.relatedTarget)) return;
     vurguyuSil();
   });
 
   /* ---- açıklama paneli ---- */
   const panel=document.getElementById("panel");
   const perde=document.getElementById("perde");
   const govde=document.getElementById("p-govde");
   const ETIKET={devam:"doğrudan devam",bolunme:"bölünme",katilma:"katılma"};
-  let sonOdak=null;   // panel kapanınca odağın geri döneceği kart
+  const Panel = Ortak.panelKur({
+    panel, perde, govde,
+    kapatDugmesi: document.getElementById("kapat"),
+    odakSecici: ".kart"
+  });
 
   function bul(id){ return N.find(n=>n.id===id); }
 
   function satirlar(liste){
     return liste.map(x=>{
       const n=bul(x.id); if(!n) return "";
       return '<li><i style="background:'+AILE[n.aile].ham+'"></i>'+
              '<button class="p-git" data-git="'+n.id+'">'+n.kisa+'</button>'+
              '<span>'+n.yil+' · '+x.tur+'</span></li>';
     }).join("");
   }
 
   function ac(id){
     const n=bul(id); if(!n) return;
     const b=BILGI[id]||{};
     const renk=AILE[n.aile].ham;
     const r=ROZET[n.durum];
-
     const oncul=E.filter(e=>e[1]===id).map(e=>({id:e[0],tur:ETIKET[e[2]]}));
     const ardil=E.filter(e=>e[0]===id).map(e=>({id:e[1],tur:ETIKET[e[2]]}));
-
-    panel.style.setProperty("--aile",renk);
-    govde.innerHTML =
+    const html =
       '<div class="p-kisa" id="p-kisa" style="color:'+renk+'">'+n.kisa+'</div>'+
       '<div class="p-ad">'+n.ad+'</div>'+
       '<div class="p-meta">'+n.yil+' <span class="rozet '+r[1]+'">'+r[0]+'</span>'+
         ' · '+AILE[n.aile].ad+'</div>'+
       (b.k?'<div class="p-etiket">Kurucu</div><div class="p-kurucu">'+b.k+'</div>':'')+
       (b.o?'<div class="p-etiket">Özet</div><div class="p-ozet">'+b.o+'</div>':'')+
       (n.sembol?'<div class="p-etiket">Sembol</div><div class="p-sembol">'+n.sembol+'</div>':'')+
       (oncul.length?'<div class="p-etiket">Nereden geldi</div><ul>'+satirlar(oncul)+'</ul>':'')+
       (ardil.length?'<div class="p-etiket">Nereye gitti</div><ul>'+satirlar(ardil)+'</ul>':'');
-
-    // paneli açan kartı hatırla; panel içindeki bağlantılardan gelindiyse ilkini koru
-    const o=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".kart"):null;
-    if(o) sonOdak=o;
-
-    panel.removeAttribute("inert");
-    panel.removeAttribute("aria-hidden");
-    panel.classList.add("acik"); perde.classList.add("acik");
-    panel.scrollTop=0;
-    document.getElementById("kapat").focus();
+    Panel.ac(html, renk);
   }
 
-  function kapat(){
-    if(!panel.classList.contains("acik")) return;
-    panel.classList.remove("acik"); perde.classList.remove("acik");
-    panel.setAttribute("inert","");
-    panel.setAttribute("aria-hidden","true");
-    if(sonOdak&&document.body.contains(sonOdak)) sonOdak.focus();
-    sonOdak=null;
-  }
-
-  // açıkken odak panelin dışına kaçmasın (aria-modal'ın davranışsal karşılığı)
-  panel.addEventListener("keydown",e=>{
-    if(e.key!=="Tab") return;
-    const o=panel.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
-    if(!o.length) return;
-    const ilk=o[0], son=o[o.length-1];
-    if(e.shiftKey&&document.activeElement===ilk){ e.preventDefault(); son.focus(); }
-    else if(!e.shiftKey&&document.activeElement===son){ e.preventDefault(); ilk.focus(); }
-  });
-
   chart.addEventListener("click",ev=>{
     const k=ev.target.closest(".kart"); if(!k) return;
     ac(k.dataset.id);
   });
   govde.addEventListener("click",ev=>{
     const g=ev.target.closest("[data-git]"); if(!g) return;
     ac(g.dataset.git);
     const hedef=chart.querySelector('[data-id="'+g.dataset.git+'"]');
-    if(hedef){ sonOdak=hedef; hedef.scrollIntoView({block:"center",inline:"center",behavior:"smooth"}); }
+    if(hedef){ Panel.odakHedefi(hedef); hedef.scrollIntoView({block:"center",inline:"center",behavior:"smooth"}); }
   });
-  document.getElementById("kapat").addEventListener("click",kapat);
-  perde.addEventListener("click",kapat);
-  document.addEventListener("keydown",e=>{ if(e.key==="Escape") kapat(); });
 
   /* ---- araç çubuğu: arama + yıl kaydırıcı + temizle ---- */
   let YMIN=9999, YMAX=0;
   N.forEach(n=>{ const yr=parseYil(n.yil); if(yr.bas<YMIN) YMIN=yr.bas; if(yr.bit>YMAX) YMAX=yr.bit; });
 
   const araInput=document.getElementById("ara");
   araInput.addEventListener("input",()=>{ arama=araInput.value.trim(); filtreUygula(); });
 
   const yilKaydirici=document.getElementById("yilKaydirici");
   const yilDeger=document.getElementById("yilDeger");
diff --git a/ortak.css b/ortak.css
index ee5d2de..6f74609 100644
--- a/ortak.css
+++ b/ortak.css
@@ -104,12 +104,123 @@
   .ustmenu-link.aktif{border-bottom-color:var(--kagit);font-weight:600}
   .ustmenu-link:focus-visible{outline:2px solid var(--kagit);outline-offset:-2px}
 
   /* ---------- footer ---------- */
   footer{
     max-width:1100px;margin:26px auto 0;padding-top:16px;border-top:1px solid var(--cizgi);
     font-size:12px;color:var(--soluk);
   }
   footer p{margin:0 0 8px;max-width:70ch}
 
+  /* ---------- ortak bileşenler: dönem bandı, kart kutusu, rozet, açıklama paneli ---------- */
+  .banner{
+    position:relative;z-index:1;
+    background:var(--murekkep);color:var(--kagit);
+    display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;
+    padding:7px 14px;margin:0 0 14px;
+  }
+  .banner .yil{font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:12px;letter-spacing:.1em}
+  .banner .ad{font-family:"Fraunces",serif;font-size:14px;font-style:italic;opacity:.85}
+  .banner:not(.kesinti){cursor:pointer}
+  .banner:not(.kesinti):focus-visible{outline:2px solid var(--kagit);outline-offset:-3px}
+  .banner .ok{
+    display:inline-block;margin-left:auto;font-family:"IBM Plex Mono",monospace;
+    font-size:14px;line-height:1;
+  }
+  .banner.kesinti .ok{display:none}
+  .banner.kesinti{background:#7A1509}
+  .banner.kesinti .ad{opacity:1;font-style:normal;font-weight:600;font-family:"IBM Plex Sans",sans-serif;font-size:12.5px}
+
+  .satir.kapali{display:none}
+
+  .kart{
+    background:var(--kart);
+    border:1px solid var(--cizgi);
+    border-left:4px solid var(--aile);
+    padding:9px 11px 10px;
+    position:relative;
+    transition:box-shadow .18s, transform .18s, opacity .18s;
+  }
+
+  .rozet{
+    font-family:"IBM Plex Mono",monospace;font-size:9px;font-weight:600;
+    letter-spacing:.07em;text-transform:uppercase;
+    padding:1px 5px;border:1px solid currentColor;white-space:nowrap;
+  }
+  .r-kapatildi{color:#7A1509}
+  .r-faal{color:#25795A}
+  .r-katildi{color:#5C5F52}
+
+  .kart{cursor:pointer}
+  .kart:hover{transform:translateY(-2px);box-shadow:0 4px 0 rgba(21,24,16,.18)}
+  .kart:focus-visible{outline:2px solid var(--murekkep);outline-offset:2px}
+
+  /* ---------- açıklama paneli ---------- */
+  #perde{
+    position:fixed;inset:0;background:rgba(21,24,16,.35);
+    opacity:0;pointer-events:none;transition:opacity .22s;z-index:40;
+  }
+  #perde.acik{opacity:1;pointer-events:auto}
+
+  #panel{
+    position:fixed;top:0;right:0;bottom:0;width:min(420px,100%);
+    background:var(--kart);border-left:6px solid var(--aile,#151810);
+    z-index:50;overflow-y:auto;padding:26px 24px 40px;
+    transform:translateX(102%);transition:transform .26s cubic-bezier(.4,0,.2,1);
+    box-shadow:-6px 0 0 rgba(21,24,16,.12);
+  }
+  #panel.acik{transform:translateX(0)}
+
+  #kapat{
+    position:absolute;top:16px;right:18px;background:none;border:1px solid var(--cizgi);
+    color:var(--soluk);font-family:"IBM Plex Mono",monospace;font-size:13px;
+    width:30px;height:30px;cursor:pointer;line-height:1;
+  }
+  #kapat:hover{background:var(--murekkep);color:var(--kagit);border-color:var(--murekkep)}
+
+  #panel .p-kisa{
+    font-family:"Fraunces",serif;font-weight:700;font-size:30px;line-height:1;
+    color:var(--aile);margin:0 0 6px;letter-spacing:-.02em;
+  }
+  #panel .p-ad{font-size:14px;color:#2A2E22;margin-bottom:14px;padding-right:30px}
+  #panel .p-meta{
+    font-family:"IBM Plex Mono",monospace;font-size:11.5px;color:var(--soluk);
+    display:flex;align-items:center;gap:8px;flex-wrap:wrap;
+    padding-bottom:14px;border-bottom:1px solid var(--cizgi);margin-bottom:16px;
+  }
+  #panel .p-etiket{
+    font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:.14em;
+    text-transform:uppercase;color:var(--soluk);margin:20px 0 7px;
+  }
+  #panel .p-kurucu{font-size:13px;color:#2A2E22;line-height:1.5}
+  #panel .p-ozet{font-size:13.5px;color:#2A2E22;line-height:1.6}
+  #panel .p-sembol{
+    font-size:12.5px;color:#2A2E22;
+    border:1px dashed var(--cizgi);padding:8px 10px;margin-top:6px;
+  }
+  #panel ul{list-style:none;margin:0;padding:0}
+  #panel li{
+    font-size:12.5px;padding:7px 0;border-bottom:1px dotted var(--cizgi);
+    display:flex;gap:9px;align-items:baseline;
+  }
+  #panel li b{color:#2A2E22;font-weight:600;flex:none}
+  #panel li span{color:var(--soluk);font-size:11.5px}
+  #panel li i{width:8px;height:8px;border-radius:50%;flex:none;align-self:center}
+  .p-git{
+    background:none;border:none;padding:0;cursor:pointer;text-align:left;
+    font:inherit;color:#2A2E22;font-weight:600;text-decoration:underline;
+    text-decoration-color:var(--cizgi);text-underline-offset:3px;
+  }
+  .p-git:hover{text-decoration-color:currentColor}
+
   @media (prefers-reduced-motion:reduce){*{transition:none!important}}
   @media (max-width:700px){ .wrap{padding:20px 14px 30px} }
+
+  @media (max-width:760px){
+    #panel{
+      top:auto;left:0;right:0;bottom:0;width:100%;max-height:78vh;
+      border-left:none;border-top:6px solid var(--aile,#151810);
+      transform:translateY(102%);box-shadow:0 -6px 0 rgba(21,24,16,.12);
+      padding:22px 18px 34px;
+    }
+    #panel.acik{transform:translateY(0)}
+  }
diff --git a/ortak.js b/ortak.js
new file mode 100644
index 0000000..93d7e05
--- /dev/null
+++ b/ortak.js
@@ -0,0 +1,98 @@
+/* Ortak yardımcılar: biçimleme, dönem bandı, açıklama paneli, adres hash'i.
+   index.html ve sandik.html paylaşır. Node'da da yüklenir (testler için). */
+(function (kok, fabrika) {
+  var Ortak = fabrika();
+  if (typeof module === "object" && module.exports) module.exports = Ortak;
+  else kok.Ortak = Ortak;
+})(typeof window !== "undefined" ? window : this, function () {
+  const AYLAR = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz",
+                 "Ağustos","Eylül","Ekim","Kasım","Aralık"];
+
+  function tarihYaz(iso, kisa) {
+    if (!iso) return "—";
+    const [y, a, g] = iso.split("-").map(Number);
+    const ay = kisa ? AYLAR[a - 1].slice(0, 3) : AYLAR[a - 1];
+    return g + " " + ay + " " + y;
+  }
+  function yuzde(pay, payda) {
+    if (pay == null || payda == null || payda === 0) return null;
+    return pay / payda * 100;
+  }
+  function yuzdeYaz(y) {
+    return y == null ? "—" : "%" + y.toFixed(1).replace(".", ",");
+  }
+  function sayiYaz(n) {
+    return n == null ? "—" : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
+  }
+  function hashOku(h) {
+    const s = decodeURIComponent(String(h || "").replace(/^#/, ""));
+    return /^[a-z0-9-]+$/.test(s) ? s : null;
+  }
+
+  /* ---- dönem bandı ---- */
+  function bantDurum(b, s, kapali) {
+    s.classList.toggle("kapali", kapali);
+    b.classList.toggle("kapali", kapali);
+    b.setAttribute("aria-expanded", String(!kapali));
+    const ok = b.querySelector(".ok");
+    if (ok) ok.textContent = kapali ? "+" : "−";
+  }
+  function bantKur(b, s, degisince) {
+    b.tabIndex = 0;
+    b.setAttribute("role", "button");
+    b.setAttribute("aria-controls", s.id);
+    bantDurum(b, s, false);
+    function ackapa() {
+      bantDurum(b, s, !s.classList.contains("kapali"));
+      if (degisince) degisince();
+    }
+    b.addEventListener("click", ackapa);
+    b.addEventListener("keydown", e => {
+      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ackapa(); }
+    });
+  }
+
+  /* ---- açıklama paneli: inert, odak tuzağı, odak iadesi ---- */
+  function panelKur(o) {
+    let sonOdak = null;
+    function acikMi() { return o.panel.classList.contains("acik"); }
+    function ac(html, renk) {
+      o.panel.style.setProperty("--aile", renk);
+      o.govde.innerHTML = html;
+      // paneli açan öğeyi hatırla; panel içinden gelindiyse öncekini koru
+      const a = document.activeElement;
+      const k = a && a.closest ? a.closest(o.odakSecici) : null;
+      if (k) sonOdak = k;
+      o.panel.removeAttribute("inert");
+      o.panel.removeAttribute("aria-hidden");
+      o.panel.classList.add("acik"); o.perde.classList.add("acik");
+      o.panel.scrollTop = 0;
+      o.kapatDugmesi.focus();
+    }
+    function kapat() {
+      if (!acikMi()) return;
+      o.panel.classList.remove("acik"); o.perde.classList.remove("acik");
+      o.panel.setAttribute("inert", "");
+      o.panel.setAttribute("aria-hidden", "true");
+      if (sonOdak && document.body.contains(sonOdak)) sonOdak.focus();
+      sonOdak = null;
+      if (o.kapaninca) o.kapaninca();
+    }
+    function odakHedefi(el) { sonOdak = el; }
+    // açıkken odak panelin dışına kaçmasın (aria-modal'ın davranışsal karşılığı)
+    o.panel.addEventListener("keydown", e => {
+      if (e.key !== "Tab") return;
+      const l = o.panel.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
+      if (!l.length) return;
+      const ilk = l[0], son = l[l.length - 1];
+      if (e.shiftKey && document.activeElement === ilk) { e.preventDefault(); son.focus(); }
+      else if (!e.shiftKey && document.activeElement === son) { e.preventDefault(); ilk.focus(); }
+    });
+    o.kapatDugmesi.addEventListener("click", kapat);
+    o.perde.addEventListener("click", kapat);
+    document.addEventListener("keydown", e => { if (e.key === "Escape") kapat(); });
+    return { ac, kapat, odakHedefi, acikMi };
+  }
+
+  return { tarihYaz, yuzde, yuzdeYaz, sayiYaz, hashOku, bantDurum, bantKur, panelKur };
+});
```
