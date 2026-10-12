# İnceleme paketi: task-2 (e7e0ada..HEAD)

## Commitler
```
dc0764b Soyağacı verisini veri/partiler.js'e taşı, veri denetimi ekle
```
## Özet
```
 araclar/denetim/soyagaci.js   |  24 ++++
 araclar/dogrula.js            |  44 +++++++
 araclar/test/partiler.test.js |  54 ++++++++
 araclar/yukle.js              |  19 +++
 index.html                    | 283 +----------------------------------------
 veri/partiler.js              | 290 ++++++++++++++++++++++++++++++++++++++++++
 6 files changed, 434 insertions(+), 280 deletions(-)
```
## Fark
```diff
diff --git a/araclar/denetim/soyagaci.js b/araclar/denetim/soyagaci.js
new file mode 100644
index 0000000..8f78127
--- /dev/null
+++ b/araclar/denetim/soyagaci.js
@@ -0,0 +1,24 @@
+// Soyağacı gerileme denetimi. Claude Browser'da javascript_tool ile değerlendirilir
+// (1400px genişlik). Beklenen değerler plan Görev 2 / Adım 1'de.
+(() => {
+  const r = {};
+  r.kart = document.querySelectorAll('.kart').length;
+  r.kenar = document.querySelectorAll('#edges path').length;
+  r.bant = document.querySelectorAll('.banner:not(.kesinti)').length;
+  r.kesinti = [...document.querySelectorAll('.banner.kesinti .ad')].map(x => x.textContent);
+  const b = document.querySelector('.banner:not(.kesinti)');
+  const s = document.getElementById(b.getAttribute('aria-controls'));
+  b.click();
+  r.bantKapaninca = { yukseklik: s.offsetHeight, kenar: document.querySelectorAll('#edges path').length };
+  b.click();
+  const k = document.querySelector('[data-id="akp"]');
+  k.focus(); k.click();
+  const p = document.getElementById('panel');
+  r.panelAcik = { acik: p.classList.contains('acik'), inert: p.hasAttribute('inert'), odak: document.activeElement.id };
+  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
+  r.panelKapali = { inert: p.hasAttribute('inert'), odakGeri: document.activeElement === k };
+  k.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
+  r.vurgu = document.querySelectorAll('#edges path.aktif').length;
+  k.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
+  return r;
+})()
diff --git a/araclar/dogrula.js b/araclar/dogrula.js
new file mode 100644
index 0000000..6fbf9b1
--- /dev/null
+++ b/araclar/dogrula.js
@@ -0,0 +1,44 @@
+#!/usr/bin/env node
+// Veri denetimi: node araclar/dogrula.js  (hata varsa çıkış kodu 1)
+const { yukle } = require("./yukle");
+
+const BAG_TURLERI = ["devam", "bolunme", "katilma"];
+
+function dogrulaPartiler(P) {
+  const hatalar = [], uyarilar = [];
+  const idler = new Set();
+  for (const n of P.N) {
+    if (idler.has(n.id)) hatalar.push("yinelenen parti id: " + n.id);
+    idler.add(n.id);
+    if (!P.BILGI[n.id]) hatalar.push("BILGI kaydı yok: " + n.id);
+    if (!P.ROZET[n.durum]) hatalar.push("bilinmeyen durum: " + n.id + " → " + n.durum);
+    if (n.aile < 0 || n.aile >= P.AILE.length) hatalar.push("geçersiz aile: " + n.id);
+    if (n.donem < 0 || n.donem >= P.DONEMLER.length) hatalar.push("geçersiz dönem: " + n.id);
+    if (n.durum === "faal" && /–\s*\d{4}/.test(n.yil)) hatalar.push("faal ama bitiş yılı var: " + n.id);
+  }
+  for (const k of Object.keys(P.BILGI)) if (!idler.has(k)) hatalar.push("parti olmayan BILGI kaydı: " + k);
+  const kenarlar = new Set();
+  for (const e of P.E) {
+    if (!idler.has(e[0]) || !idler.has(e[1])) hatalar.push("bilinmeyen uç: " + e.join(" > "));
+    if (!BAG_TURLERI.includes(e[2])) hatalar.push("bilinmeyen bağ türü: " + e.join(" > "));
+    const a = e.join(">");
+    if (kenarlar.has(a)) hatalar.push("yinelenen bağ: " + a);
+    kenarlar.add(a);
+  }
+  return { hatalar, uyarilar };
+}
+
+function dogrula(P, S) {
+  return dogrulaPartiler(P);   // Görev 5 Sandık kurallarını ekler
+}
+
+module.exports = { dogrula, dogrulaPartiler };
+
+if (require.main === module) {
+  const w = yukle(["veri/partiler.js", "veri/sandik.js"]);
+  const { hatalar, uyarilar } = dogrula(w.PARTILER, w.SANDIK);
+  uyarilar.forEach(u => console.log("uyarı: " + u));
+  hatalar.forEach(h => console.log("HATA:  " + h));
+  console.log(hatalar.length ? hatalar.length + " hata" : "hata yok");
+  process.exit(hatalar.length ? 1 : 0);
+}
diff --git a/araclar/test/partiler.test.js b/araclar/test/partiler.test.js
new file mode 100644
index 0000000..956d474
--- /dev/null
+++ b/araclar/test/partiler.test.js
@@ -0,0 +1,54 @@
+const test = require("node:test");
+const assert = require("node:assert/strict");
+const { yukle } = require("../yukle");
+const { dogrulaPartiler } = require("../dogrula");
+
+const P = yukle(["veri/partiler.js"]).PARTILER;
+
+test("PARTILER yüklenir ve soyağacının sayıları korunur", () => {
+  assert.ok(P, "window.PARTILER tanımlı değil");
+  assert.equal(P.N.length, 66);
+  assert.equal(P.E.length, 73);
+  assert.equal(P.AILE.length, 7);
+  assert.equal(P.DONEMLER.length, 8);
+  assert.deepEqual(Object.keys(P.ROZET).sort(), ["faal", "kapandi", "kapatildi", "katildi"]);
+});
+
+test("kesintiler null ya da {tarih, metin} nesnesi", () => {
+  for (const d of P.DONEMLER) {
+    if (d.kesinti === null) continue;
+    assert.match(d.kesinti.tarih, /^\d{4}-\d{2}-\d{2}$/);
+    assert.equal(typeof d.kesinti.metin, "string");
+    if (d.kesinti.yonetim) {
+      assert.match(d.kesinti.yonetim.bas, /^\d{4}-\d{2}-\d{2}$/);
+      assert.match(d.kesinti.yonetim.bit, /^\d{4}-\d{2}-\d{2}$/);
+      assert.ok(d.kesinti.yonetim.bas <= d.kesinti.yonetim.bit);
+    }
+  }
+});
+
+test("28 Şubat kesintisi Refah Partisi'nin kapatılmasını 1998'e koyar", () => {
+  const k = P.DONEMLER.map(d => d.kesinti).find(k => k && k.tarih === "1997-02-28");
+  assert.ok(k, "1997-02-28 tarihli kesinti yok");
+  assert.match(k.metin, /Refah Partisi/);
+  assert.match(k.metin, /1998/);
+});
+
+test("gerçek veri soyağacı denetiminden hatasız geçer", () => {
+  assert.deepEqual(dogrulaPartiler(P).hatalar, []);
+});
+
+test("denetim bozuk veriyi yakalar", () => {
+  const bozuk = structuredClone(P);
+  bozuk.N.push({ ...bozuk.N[0] });                        // yinelenen id
+  bozuk.E.push(["yok1", "yok2", "devam"]);                // bilinmeyen uç
+  bozuk.E.push([bozuk.N[0].id, bozuk.N[1].id, "tuhaf"]);  // bilinmeyen tür
+  delete bozuk.BILGI[bozuk.N[2].id];                      // künyesiz parti
+  bozuk.N[3] = { ...bozuk.N[3], durum: "faal", yil: "1950 – 1960" }; // faal ama bitmiş
+  const h = dogrulaPartiler(bozuk).hatalar.join("\n");
+  assert.match(h, /yinelenen parti id/);
+  assert.match(h, /bilinmeyen uç/);
+  assert.match(h, /bilinmeyen bağ türü/);
+  assert.match(h, /BILGI kaydı yok/);
+  assert.match(h, /faal ama bitiş yılı var/);
+});
diff --git a/araclar/yukle.js b/araclar/yukle.js
new file mode 100644
index 0000000..bf3942d
--- /dev/null
+++ b/araclar/yukle.js
@@ -0,0 +1,19 @@
+// Tarayıcı için yazılmış dosyaları (window.X = …) Node'da çalıştırır.
+const fs = require("fs");
+const path = require("path");
+const vm = require("vm");
+
+const KOK = path.join(__dirname, "..");
+
+function yukle(dosyalar) {
+  const window = {};
+  const ctx = vm.createContext({ window, console });
+  for (const d of dosyalar) {
+    const tam = path.join(KOK, d);
+    if (!fs.existsSync(tam)) continue;
+    vm.runInContext(fs.readFileSync(tam, "utf8"), ctx, { filename: d });
+  }
+  return window;
+}
+
+module.exports = { yukle, KOK };
diff --git a/index.html b/index.html
index 4b9fde3..9227164 100644
--- a/index.html
+++ b/index.html
@@ -284,301 +284,24 @@
 
   <footer>
     <p><b>Okuma notu.</b> Şema kurucu tarihe göre dizilmiştir; bir parti kurulduğu dönem bandında görünür, faaliyeti sonraki yıllara uzasa da. 12 Eylül 1980'de parti faaliyetleri yasaklandı, hukuki fesih ise 16 Ekim 1981'de gerçekleşti — bu yüzden o dönemin kartlarında bitiş yılı 1981'dir. Mal varlıkları Hazine'ye devredildiği için 1983 bandı neredeyse tümüyle sıfırdan kuruluşlardan oluşur.</p>
     <p><b>Yeni Yol hakkında.</b> Şemadaki tek "çatı parti". TBMM İçtüzüğü grup kurmak için tek bir partiden en az 20 milletvekili şartı aradığından, Saadet, Gelecek ve DEVA 2025'te ortak bir tüzel kişilik kurdu. Üç parti örgütlerini, programlarını ve genel başkanlarını korudu; bu yüzden şemada birleşme değil, üç ayrı noktalı bağla gösteriliyor.</p>
     <p><b>Sınıflandırma.</b> Sütunlar ideolojik çizgiye göre ayrılmıştır. Sosyalist sol (TİP, TKP, ÖDP, EMEP çizgisi) ile radikal sol (HEP'ten DEM Parti'ye uzanan hat) ayrı tutuldu; ikisi de solda yer alsa da aralarında örgütsel devir ilişkisi yok, iki bağımsız zincir oluşturuyorlar.</p>
     <p><b>Rozetler.</b> "kapatıldı" yargı ya da darbe kararıyla sona ermeyi, "feshedildi" partinin kendi kararıyla kapanmasını, "devredildi" kadro ve üyelerin başka bir partiye geçmesini belirtir.</p>
     <p><b>Kapsam.</b> Meclise girmiş, kapatılmış ya da bir geleneğin halkası olan partiler alınmıştır; Türkiye'de kurulmuş yüzlerce partinin tamamı değil.</p>
   </footer>
 </div>
 
+<script src="veri/partiler.js"></script>
 <script>
 (function(){
-  const AILE = [
-    {ad:"Cumhuriyetçi / sosyal demokrat", ham:"#C0392B"},
-    {ad:"Merkez sağ", ham:"#B57B18"},
-    {ad:"Milli Görüş / muhafazakâr", ham:"#25795A"},
-    {ad:"Milliyetçi", ham:"#28457A"},
-    {ad:"Sosyalist sol", ham:"#8E2050"},
-    {ad:"Radikal sol", ham:"#7B3F9D"},
-    {ad:"Liberal", ham:"#0F7A80"}
-  ];
-
-  const BILGI = {
-    chp23:{k:"Mustafa Kemal Atatürk", o:"Kurtuluş Savaşı'nı yürüten Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti'nin partiye dönüşmesiyle doğdu. 1946'ya kadar tek parti olarak ülkeyi yönetti, 1950'de iktidarı seçimle devretti. 1965'ten sonra Ecevit önderliğinde \"ortanın solu\" çizgisine kaydı ve 12 Eylül'e kadar sosyal demokrat bir kitle partisi oldu."},
-    tcf:{k:"Kâzım Karabekir, Rauf Orbay, Ali Fuat Cebesoy", o:"Cumhuriyetin ilk muhalefet partisi. Kurtuluş Savaşı'nın önde gelen komutanları tarafından, tek elde toplanan yetkiye itiraz olarak kuruldu. Şeyh Sait İsyanı'nın ardından Takrir-i Sükûn Kanunu'na dayanılarak kapatıldı."},
-    scf:{k:"Fethi Okyar", o:"Denetimli bir muhalefet yaratmak amacıyla, Mustafa Kemal Atatürk'ün isteğiyle kuruldu. Kısa sürede rejim karşıtı unsurların partinin tabanına yayılması üzerine, Fethi Okyar kendi kararıyla partiyi feshetti."},
-    tkp20:{k:"Mustafa Suphi", o:"Bakü'de, Kızıl Ordu kulübünde 74 delegenin katılımıyla kuruldu; Türkiye'de değil yurt dışında doğdu. Suphi ve on dört yoldaşı 1921 başında Trabzon açıklarında öldürüldü. Parti bundan sonra onlarca yıl boyunca yasa dışı çalıştı, 1988'de kendini feshederek TBKP'ye katıldı."},
-    thif:{k:"Şerif Manatov, Salih Hacıoğlu", o:"TKP'nin Ankara'daki yasal görünümlü kolu olarak kuruldu. Birkaç ay içinde kapatıldı, 1922 yazında kısa süre yeniden faaliyet gösterebildi. Şemadaki en kısa ömürlü parti."},
-    dp46:{k:"Celâl Bayar, Adnan Menderes", o:"CHP'den ayrılan \"Dörtlü Takrir\" imzacıları tarafından kuruldu ve çok partili hayatın başlangıcı oldu. 1950 seçimini kazanarak on yıl iktidarda kaldı; kırsal kalkınma, karayolu ve tarım politikalarıyla anıldı. 27 Mayıs darbesiyle kapatıldı, Menderes ve iki bakanı idam edildi."},
-    mp48:{k:"Fevzi Çakmak, Osman Bölükbaşı", o:"DP'den ayrılan muhafazakâr ve milliyetçi kanadın partisi. Din ve gelenek vurgusuyla DP'nin sağında konumlandı. 1958'de Köylü Partisi ile birleşerek CKMP'ye dönüştü."},
-    ckmp:{k:"Osman Bölükbaşı", o:"Millet Partisi ile Türkiye Köylü Partisi'nin birleşmesiyle kuruldu. 1965'te Alparslan Türkeş ve arkadaşlarının katılmasıyla yön değiştirdi ve 1969'da adını Milliyetçi Hareket Partisi olarak değiştirdi."},
-    ap:{k:"Ragıp Gümüşpala, ardından Süleyman Demirel", o:"27 Mayıs sonrası DP tabanının ana adresi oldu ve 1965'te tek başına iktidara geldi. Demirel liderliğinde merkez sağın en uzun soluklu partisi haline geldi, 1970'lerde Milliyetçi Cephe hükümetlerini kurdu. 12 Eylül'le birlikte feshedildi."},
-    ytp:{k:"Ekrem Alican", o:"DP mirasını paylaşan ikinci damar olarak kuruldu ve 1961–65 koalisyonlarında yer aldı. AP'nin tabanı toparlamasıyla hızla eridi."},
-    demp70:{k:"Ferruh Bozbeyli", o:"AP'nin \"kırk dörtler\" olarak anılan muhalif kanadının ayrılmasıyla kuruldu. Demirel'e karşı sağda alternatif olmayı denedi ama başaramadı ve 1980'de yeniden AP'ye katıldı."},
-    mhp69:{k:"Alparslan Türkeş", o:"CKMP'nin adını ve simgesini değiştirmesiyle doğdu; üç hilal ve bozkurt sembolleri bu dönemde benimsendi. 1970'lerde Milliyetçi Cephe hükümetlerine ortak oldu. 12 Eylül'de kapatıldı ve yöneticileri uzun süre yargılandı."},
-    mnp:{k:"Necmettin Erbakan", o:"Milli Görüş hareketinin ilk partisi. Ağır sanayi hamlesi ve manevi kalkınma söylemiyle merkez sağdan ayrıştı. 12 Mart muhtırasının ardından laiklik gerekçesiyle kapatıldı."},
-    gp:{k:"Turhan Feyzioğlu", o:"CHP'nin \"ortanın solu\" çizgisine itiraz eden 47 milletvekilinin ayrılmasıyla kuruldu. Kemalist ama sola mesafeli bir çizgi izledi. 1971'de Millî Güven Partisi adını aldı, 1973'te Cumhuriyetçi Parti ile birleşti."},
-    tip61:{k:"On iki sendikacı, ardından Mehmet Ali Aybar", o:"Sosyalist solun parlamentoya ilk kez girmesini sağladı; 1965'te 15 milletvekili kazandı. Sosyalizmi seçim yoluyla savunan ilk yasal parti oldu. 12 Mart muhtırasının ardından Anayasa Mahkemesi tarafından kapatıldı."},
-    cp72:{k:"Kemal Satır", o:"Ecevit'in CHP genel başkanı olmasına karşı çıkan 18 milletvekili tarafından kuruldu. Hiçbir genel seçime kendi adıyla giremeden, altı ay sonra Millî Güven Partisi ile birleşti."},
-    cgp:{k:"Turhan Feyzioğlu", o:"MGP ile Cumhuriyetçi Parti'nin birleşmesinden doğdu. Kendini \"ne aşırı sol ne aşırı sağ\" diye tanımladı ve 1970'lerin koalisyonlarında denge unsuru oldu; Feyzioğlu I. Milliyetçi Cephe hükümetinde başbakan yardımcılığı yaptı. 12 Eylül'le feshedildi."},
-    msp:{k:"Necmettin Erbakan", o:"MNP'nin kapatılmasının ardından Milli Görüş'ün ikinci partisi olarak kuruldu. 1973'te CHP ile, ardından AP ile koalisyon kurarak dönemin kilit partisi haline geldi. Kıbrıs Barış Harekâtı bu koalisyonlar döneminde gerçekleşti."},
-    tip75:{k:"Behice Boran", o:"Kapatılan TİP'in kadrosuyla yeniden kuruldu; Boran, Türkiye'de bir partinin genel başkanı olan ilk kadın oldu. 12 Eylül'le kapatıldı, yöneticileri yurt dışına çıkmak zorunda kaldı."},
-    hp83:{k:"Necdet Calp", o:"12 Eylül sonrası kurulmasına izin verilen üç partiden biri. CHP geleneğinin devamı sayıldı ve 1983 seçiminde ana muhalefet oldu. 1985'te SODEP ile birleşti."},
-    sodep:{k:"Erdal İnönü", o:"CHP kadrolarının kurduğu, ancak 1983 seçimine katılmasına izin verilmeyen sosyal demokrat parti. İki yıl sonra Halkçı Parti ile birleşerek SHP'yi oluşturdu."},
-    shp:{k:"Erdal İnönü", o:"1980'lerin sonunda sosyal demokrat solun ana partisi oldu ve 1991'de DYP ile koalisyon kurdu. Kürt sorununda açılım arayışları partinin içinde büyük gerilim yarattı; ayrılan milletvekilleri HEP'i kurdu. 1995'te CHP'ye katılarak sona erdi."},
-    dsp:{k:"Rahşan Ecevit, ardından Bülent Ecevit", o:"Ecevit'e siyaset yasağı sürerken eşi Rahşan Ecevit tarafından kuruldu. CHP geleneğinden ayrı, daha ulusalcı bir sol çizgi izledi. 1999 seçiminde birinci parti oldu ve Ecevit başbakanlığında koalisyon kurdu."},
-    anap:{k:"Turgut Özal", o:"12 Eylül sonrası ilk seçimi kazanarak tek başına iktidara geldi. Piyasa ekonomisine geçiş, dışa açılma ve özelleştirme politikalarıyla ekonomiyi köklü biçimde dönüştürdü. Merkez sağ, milliyetçi ve muhafazakâr \"dört eğilimi\" birleştirme iddiasıyla kuruldu."},
-    dyp:{k:"Süleyman Demirel, ardından Tansu Çiller", o:"AP'nin doğrudan devamı olarak kuruldu ve kır at simgesini sürdürdü. 1991'de iktidara geldi; Çiller, Türkiye'nin ilk kadın başbakanı oldu. 2007'de Demokrat Parti adını alarak tarihe karıştı."},
-    rp:{k:"Necmettin Erbakan", o:"Milli Görüş'ün üçüncü partisi. 1994 yerel seçimlerinde İstanbul ve Ankara'yı kazandı, 1995'te birinci parti oldu ve Erbakan başbakanlığında Refahyol hükümetini kurdu. 28 Şubat süreci sonrası Anayasa Mahkemesi tarafından kapatıldı."},
-    mcp:{k:"Alparslan Türkeş", o:"MHP kapatıldıktan sonra aynı geleneğin devamı olarak kuruldu. Türkeş'in siyasi yasağı kalkınca partinin başına geçti ve 1993'te MHP adı geri alındı."},
-    hep:{k:"Fehmi Işıklar", o:"SHP'den ihraç edilen ve istifa eden milletvekilleri tarafından kuruldu. Kürt kimliği taleplerini meclis siyasetine taşıyan ilk parti oldu. 1993'te Anayasa Mahkemesi tarafından kapatıldı; bu, uzun bir kapatma zincirinin ilk halkası oldu."},
-    tbkp:{k:"Haydar Kutlu, Nihat Sargın", o:"TKP ile TİP'in yurt dışında birleşmesiyle kuruldu; kurucuları Türkiye'ye döndüklerinde tutuklandı. Bir yıl bile dayanamadan Anayasa Mahkemesi tarafından kapatıldı. Bu karar sonradan Avrupa İnsan Hakları Mahkemesi'nde Türkiye aleyhine sonuçlandı."},
-    chp92:{k:"Deniz Baykal", o:"Kapatılan partilerin yeniden açılmasına izin veren 3821 sayılı yasayla, on bir yıl aradan sonra aynı adla açıldı. 1995'te SHP'yi bünyesine kattı ve sosyal demokrat solun ana partisi oldu. 2026'da 91 milletvekilinin ayrılışıyla meclisteki konumunu kaybetti."},
-    dp92:{k:"Aydın Menderes ve eski Demokrat Partililer", o:"CHP ile aynı yasa sayesinde yeniden açıldı, 1946'nın DP'sinin halefi olma iddiasını taşıdı. Sık sık genel başkan değiştirdi, kayda değer bir seçim başarısı elde edemedi. 2005'te kendini feshederek isim hakkıyla ANAP'a katıldı."},
-    dtp97:{k:"Hüsamettin Cindoruk", o:"Refahyol hükümetine tepki gösteren \"Yeni Oluşumcular\" DYP'den ayrılarak kurdu. 55. hükümetin ortağı oldu. 2005'te adını Hürriyet ve Değişim Partisi olarak değiştirdi."},
-    ldp:{k:"Besim Tibuk", o:"Tibuk, Demokrat Parti genel başkanlığı yarışını kaybedince ayrılıp kurdu; ilk adı Liberal Parti'ydi. Klasik liberal, devletin küçültülmesini savunan bir program izledi. Simgesi yunustur ve parti hiçbir zaman meclise girememiştir."},
-    ydh:{k:"Cem Boyner", o:"İş dünyası ve aydın çevrelerinin birlikte kurduğu, medyada büyük ilgi gören liberal hareket. Kurucu kadrosunun önemli bölümü TİP, TKP ve SHP gibi sol geleneklerden geliyordu. 1995 seçiminde binde beşin altında oy alınca 1997'de kendini feshetti."},
-    mhp93:{k:"Alparslan Türkeş, ardından Devlet Bahçeli", o:"MÇP'nin eski adını geri almasıyla doğdu. 1999'da ikinci parti olarak koalisyon ortağı oldu; 2018'den sonra Cumhur İttifakı'nın kurucu unsuru haline geldi."},
-    bbp:{k:"Muhsin Yazıcıoğlu", o:"MHP içindeki daha İslami vurgulu kanadın ayrılmasıyla kuruldu. Milliyetçilikle muhafazakârlığı birleştiren bir çizgi izledi. Yazıcıoğlu'nun 2009'da bir helikopter kazasında ölümü partide derin bir kırılma yarattı."},
-    fp:{k:"Recai Kutan", o:"Refah kapatılınca kurulan Milli Görüş'ün dördüncü partisi. İçinde \"gelenekçi\" ve \"yenilikçi\" kanatların çekişmesi büyüdü. 2001'de kapatılınca bu iki kanat Saadet ve AK Parti olarak ayrıldı."},
-    dep:{k:"Yaşar Kaya", o:"HEP kapatılınca kurulan ikinci halka. Milletvekillerinin dokunulmazlıklarının kaldırılıp meclis içinde gözaltına alınması Türkiye siyasetinde derin iz bıraktı. Bir yıl içinde kapatıldı."},
-    hadep:{k:"Murat Bozlak", o:"DEP'in kapatılmasının ardından kuruldu ve seçim barajı yüzünden meclise giremese de yerel yönetimlerde güçlendi. 2003'te kapatıldı."},
-    dehap:{k:"Mehmet Abbasoğlu", o:"HADEP hakkındaki kapatma davası sürerken yedek parti olarak kuruldu ve 2002 seçimine girdi. 2005'te DTP çatısı altında birleşme kararıyla sona erdi."},
-    odp:{k:"Ufuk Uras", o:"Farklı sosyalist grupların bir araya gelmesiyle kuruldu; sol içinde çoğulculuk arayışının simgesi sayıldı. Küçük ölçekli kalsa da çevre, emek ve özgürlük gündemlerinde etkili oldu."},
-    emep:{k:"Levent Tüzel", o:"Sınıf eksenli, sendikal mücadeleye dayanan bir sosyalist parti olarak kuruldu. Genellikle seçimlere ittifaklar üzerinden katıldı."},
-    ip92:{k:"Doğu Perinçek", o:"Sosyalist Parti'nin kapatılmasının ardından aynı kadroyla kuruldu. Zamanla ulusalcı ve Avrasyacı bir çizgiye kaydı. 2015'te Vatan Partisi adını aldı."},
-    akp:{k:"Recep Tayyip Erdoğan", o:"Fazilet Partisi'nin \"yenilikçi\" kanadı tarafından kuruldu ve kurulduktan bir yıl sonra tek başına iktidara geldi. AB üyelik süreci, ekonomik büyüme ve 2017 referandumuyla başkanlık sistemine geçiş bu dönemin dönüm noktaları oldu. Türkiye tarihinin en uzun süre kesintisiz iktidarda kalan partisidir."},
-    sp:{k:"Recai Kutan", o:"Fazilet'in \"gelenekçi\" kanadının partisi; Erbakan çizgisini sürdürdü. Seçim başarısı sınırlı kaldı ama Milli Görüş'ün asıl mirasçısı olma iddiasını korudu. 2025'te Yeni Yol çatısına katıldı."},
-    has:{k:"Numan Kurtulmuş", o:"Saadet Partisi genel başkanlığından ayrılan Kurtulmuş ve kadrosu tarafından kuruldu. İki yıl sonra AK Parti ile birleşerek feshedildi; Kurtulmuş burada üst düzey görevlere geldi."},
-    ytp02:{k:"İsmail Cem, Hüsamettin Özkan, Kemal Derviş", o:"Ecevit'in hastalığı sırasında DSP'den istifa eden 64 vekilin 63'ünün katılımıyla kuruldu. Beklenen ilgiyi göremedi, 2002 seçiminde yüzde 1'in biraz üzerinde kaldı. 2004'te CHP'ye katıldı."},
-    anadolu:{k:"Emine Ülker Tarhan", o:"CHP'den ayrılan Tarhan tarafından kuruldu. 2015 seçiminde varlık gösteremeyince aynı yıl faaliyetlerini sonlandırdı."},
-    dp07:{k:"Mehmet Ağar", o:"DYP'nin adını değiştirmesiyle doğdu; 2009'da ANAP'ın katılmasıyla merkez sağın dağılmış mirasını tek çatı altında toplamayı denedi. Eski gücüne dönemedi ama meclise bağımsız adaylar ve ittifaklar üzerinden temsilci gönderdi."},
-    dtp:{k:"Ahmet Türk, Aysel Tuğluk", o:"DEHAP'ın devamı olarak kuruldu ve 2007'de bağımsız adaylar yoluyla meclise grup sokmayı başardı. 2009'da Anayasa Mahkemesi tarafından kapatıldı."},
-    bdp:{k:"Selahattin Demirtaş", o:"DTP hakkındaki kapatma davası sürerken hazırlık olarak kuruldu. 2014'te vekillerini HDP'ye devredip Demokratik Bölgeler Partisi adıyla yerel siyasete odaklandı."},
-    hdp:{k:"Selahattin Demirtaş, Figen Yüksekdağ", o:"Kürt hareketi ile Türkiye solunu ve çevre, kadın, LGBT gibi hareketleri ortak çatıda buluşturma iddiasıyla kuruldu. Haziran 2015'te yüzde 13 alarak barajı aşan ilk parti oldu. Eş genel başkanları 2016'da tutuklandı."},
-    yesilsol:{k:"Yeşiller ve Sol Gelecek Partisi kadroları", o:"Yeşil siyaset ile solu birleştirmek üzere kuruldu. HDP hakkındaki kapatma davası nedeniyle 2023 seçimlerinde HDP'nin listesi olarak kullanıldı, ardından adını değiştirdi."},
-    vatan:{k:"Doğu Perinçek", o:"İşçi Partisi'nin ad değişikliğiyle doğdu. Ulusalcı, Avrasyacı ve devletçi bir çizgi izliyor; seçim desteği düşük olmakla birlikte gündem belirlemede etkili."},
-    memleket:{k:"Muharrem İnce", o:"CHP'nin 2018 cumhurbaşkanı adayı olan İnce'nin partiden ayrılarak kurduğu parti. 2023 seçiminde İnce adaylıktan çekildi. 2025'te İnce CHP'ye döndü ve parti kurultay kararıyla kapandı."},
-    tdp:{k:"Mustafa Sarıgül", o:"Uzun yıllar Şişli belediye başkanlığı yapan Sarıgül tarafından kuruldu. 2023'te CHP ile birleşerek sona erdi."},
-    yeniparti:{k:"Özgür Özel", o:"Özel'in CHP genel başkanlığının yargı kararıyla düşmesinin ardından, 91 milletvekiliyle kuruldu ve mecliste ana muhalefet konumuna geçti. Kuruluş tarihi Lozan Antlaşması'nın yıl dönümüne denk getirildi. Türkiye tarihinde bir partinin bu ölçekte bölünmesinin ilk örneği."},
-    yrp:{k:"Fatih Erbakan", o:"Necmettin Erbakan'ın oğlu tarafından, Saadet Partisi'nden ayrılarak kuruldu. 2023'te meclise girdi ve 2024 yerel seçimlerinde beklenenin üzerinde oy alarak dikkat çekti."},
-    gelecek:{k:"Ahmet Davutoğlu", o:"AK Parti'nin eski başbakanı ve genel başkanı tarafından kuruldu. Kendi başına seçime girmek yerine ittifaklar üzerinden meclise vekil soktu. Temmuz 2026'da Davutoğlu tarafından feshedildi."},
-    deva:{k:"Ali Babacan", o:"AK Parti'nin ekonomiden sorumlu eski bakanı tarafından kuruldu. Hukuk devleti ve ekonomi vurgusuyla merkeze oynadı, meclise ittifak yoluyla girdi."},
-    yeniyol:{k:"Saadet, Gelecek ve DEVA'nın ortak girişimi", o:"Meclis grubu kurmak için tek partiden 20 vekil şartı arayan İçtüzük nedeniyle, üç parti ortak bir tüzel kişilik kurdu. Partiler örgütlerini, programlarını ve genel başkanlarını korudu; yalnızca meclis çalışmalarında birlikte hareket ediyorlar. Gelecek Partisi'nin feshiyle grubun sürekliliği tartışmalı hale geldi."},
-    iyi:{k:"Meral Akşener", o:"MHP içindeki muhalif kanadın ayrılmasıyla kuruldu; Akşener, Türkiye'de bir partinin kadın genel başkanı olarak dikkat çekti. Milliyetçi ama merkeze açık bir çizgi izledi ve 2018'den itibaren muhalefet ittifaklarında yer aldı."},
-    zafer:{k:"Ümit Özdağ", o:"İYİ Parti'den ayrılan Özdağ tarafından kuruldu. Göç ve sığınmacı politikalarını merkezine alan bir söylemle tanındı."},
-    anahtar:{k:"Yavuz Ağıralioğlu", o:"İYİ Parti'den ayrılan Ağıralioğlu tarafından kuruldu. Resmî kısaltması A Parti; amblemindeki anahtarın MSP'nin simgesini andırması dikkat çekmişti. Henüz mecliste temsil edilmiyor."},
-    dem:{k:"Tülay Hatimoğulları, Tuncer Bakırhan", o:"Yeşil Sol Parti'nin ad değişikliğiyle doğdu ve HDP kadrolarının siyasi adresi oldu. 2024 yerel seçimlerinde çok sayıda belediye kazandı."},
-    tip17:{k:"Erkan Baş", o:"1961'de kurulan TİP'in adını yeniden kullanan sosyalist parti; ikisi arasında hukuki süreklilik yoktur. 2018 ve 2023'te ittifaklar yoluyla meclise girdi ve sosyalist solun uzun aradan sonra parlamentodaki sesi oldu."}
-  };
-
-  const DONEMLER = [
-    {yil:"1923 – 1945", ad:"Tek parti dönemi", kesinti:null},
-    {yil:"1946 – 1960", ad:"Çok partili hayata geçiş", kesinti:"27 Mayıs 1960 — DP kapatıldı, liderleri idam edildi"},
-    {yil:"1961 – 1971", ad:"1961 Anayasası ve yeni kurulan partiler", kesinti:"12 Mart 1971 — TİP ve MNP kapatıldı"},
-    {yil:"1972 – 1980", ad:"Koalisyonlar ve Milliyetçi Cephe hükümetleri", kesinti:"12 Eylül 1980 — parti faaliyetleri yasaklandı; 16 Ekim 1981'de 1533 sayılı kanunla hepsi feshedildi"},
-    {yil:"1983 – 1990", ad:"Yeniden kuruluş", kesinti:null},
-    {yil:"1991 – 2000", ad:"Koalisyonlar ve kapatma davaları", kesinti:"28 Şubat 1997 — Refah Partisi kapatıldı"},
-    {yil:"2001 – 2015", ad:"AK Parti dönemi", kesinti:null},
-    {yil:"2016 – 2026", ad:"Yeni bölünmeler ve ittifaklar", kesinti:null}
-  ];
-
-  const N = [
-    // --- dönem 0 ---
-    {id:"chp23", kisa:"CHP", ad:"Cumhuriyet Halk Partisi", yil:"1923 – 1981", durum:"kapatildi", aile:0, donem:0,
-     sembol:"Altı Ok", not:"Cumhuriyeti kuran parti; 12 Eylül'le kapatıldı"},
-    {id:"tcf", kisa:"TCF", ad:"Terakkiperver Cumhuriyet Fırkası", yil:"1924 – 1925", durum:"kapatildi", aile:0, donem:0,
-     not:"İlk muhalefet partisi"},
-    {id:"scf", kisa:"SCF", ad:"Serbest Cumhuriyet Fırkası", yil:"1930", durum:"kapandi", aile:0, donem:0,
-     not:"Aynı yıl kendini feshetti"},
-    {id:"tkp20", kisa:"TKP", ad:"Türkiye Komünist Partisi", yil:"1920 – 1988", durum:"kapatildi", aile:4, donem:0,
-     not:"Bakü'de, Türkiye dışında kuruldu; yurt içinde hep yasa dışı kaldı"},
-    {id:"thif", kisa:"THİF", ad:"Türkiye Halk İştirakiyun Fırkası", yil:"1920 – 1921", durum:"kapatildi", aile:4, donem:0,
-     not:"TKP'nin Ankara'daki yasal kolu; birkaç ay sonra kapatıldı"},
-
-    // --- dönem 1 ---
-    {id:"dp46", kisa:"DP", ad:"Demokrat Parti", yil:"1946 – 1960", durum:"kapatildi", aile:1, donem:1,
-     not:"1950–60 arası iktidar; darbeyle kapatıldı"},
-    {id:"mp48", kisa:"MP", ad:"Millet Partisi", yil:"1948 – 1958", durum:"kapatildi", aile:3, donem:1},
-    {id:"ckmp", kisa:"CKMP", ad:"Cumhuriyetçi Köylü Millet Partisi", yil:"1958 – 1969", durum:"katildi", aile:3, donem:1,
-     not:"1965'te Türkeş partiye katıldı"},
-
-    // --- dönem 2 ---
-    {id:"ap", kisa:"AP", ad:"Adalet Partisi", yil:"1961 – 1981", durum:"kapatildi", aile:1, donem:2,
-     sembol:"Kır at", not:"DP'nin ana halefi, Demirel liderliğinde"},
-    {id:"ytp", kisa:"YTP", ad:"Yeni Türkiye Partisi", yil:"1961 – 1973", durum:"kapatildi", aile:1, donem:2,
-     not:"DP mirasını paylaşan ikinci damar"},
-    {id:"demp70", kisa:"DP", ad:"Demokratik Parti", yil:"1970 – 1980", durum:"katildi", aile:1, donem:2,
-     not:"AP'den ayrıldı, 1980'de AP'ye döndü"},
-    {id:"mhp69", kisa:"MHP", ad:"Milliyetçi Hareket Partisi", yil:"1969 – 1981", durum:"kapatildi", aile:3, donem:2,
-     sembol:"Üç hilal", not:"CKMP'nin ad değişikliğiyle kuruldu"},
-    {id:"mnp", kisa:"MNP", ad:"Milli Nizam Partisi", yil:"1970 – 1971", durum:"kapatildi", aile:2, donem:2,
-     not:"Milli Görüş'ün ilk partisi"},
-    {id:"gp", kisa:"GP", ad:"Güven Partisi / Millî Güven Partisi", yil:"1967 – 1973", durum:"katildi", aile:0, donem:2,
-     not:"Feyzioğlu ve 47 vekil, \"ortanın solu\"na itiraz ederek ayrıldı"},
-    {id:"tip61", kisa:"TİP", ad:"Türkiye İşçi Partisi", yil:"1961 – 1971", durum:"kapatildi", aile:4, donem:2,
-     not:"Sosyalist solun meclise ilk girişi"},
-
-    // --- dönem 3 ---
-    {id:"cp72", kisa:"CP", ad:"Cumhuriyetçi Parti", yil:"1972 – 1973", durum:"katildi", aile:0, donem:3,
-     not:"Ecevit'in genel başkanlığına karşı çıkan Satır ve 18 vekil"},
-    {id:"cgp", kisa:"CGP", ad:"Cumhuriyetçi Güven Partisi", yil:"1973 – 1981", durum:"kapatildi", aile:0, donem:3,
-     not:"MGP ile CP'nin birleşmesi; MC hükümetlerinin ortağı"},
-    {id:"msp", kisa:"MSP", ad:"Milli Selamet Partisi", yil:"1972 – 1981", durum:"kapatildi", aile:2, donem:3,
-     sembol:"Anahtar", not:"1970'ler koalisyonlarının değişmez ortağı"},
-    {id:"tip75", kisa:"TİP", ad:"Türkiye İşçi Partisi", yil:"1975 – 1980", durum:"kapatildi", aile:4, donem:3,
-     not:"Behice Boran liderliğinde yeniden kuruldu"},
-
-    // --- dönem 4 ---
-    {id:"hp83", kisa:"HP", ad:"Halkçı Parti", yil:"1983 – 1985", durum:"katildi", aile:0, donem:4},
-    {id:"sodep", kisa:"SODEP", ad:"Sosyal Demokrasi Partisi", yil:"1983 – 1985", durum:"katildi", aile:0, donem:4},
-    {id:"shp", kisa:"SHP", ad:"Sosyaldemokrat Halkçı Parti", yil:"1985 – 1995", durum:"katildi", aile:0, donem:4,
-     not:"1995'te CHP'ye katıldı"},
-    {id:"dsp", kisa:"DSP", ad:"Demokratik Sol Parti", yil:"1985 –", durum:"faal", aile:0, donem:4,
-     sembol:"Güvercin", not:"Ecevit çizgisi, CHP'den ayrı damar"},
-    {id:"anap", kisa:"ANAP", ad:"Anavatan Partisi", yil:"1983 – 2009", durum:"katildi", aile:1, donem:4,
-     sembol:"Bal peteği", not:"\"Dört eğilimi birleştirme\" iddiası; Özal"},
-    {id:"dyp", kisa:"DYP", ad:"Doğru Yol Partisi", yil:"1983 – 2007", durum:"katildi", aile:1, donem:4,
-     sembol:"Kır at", not:"AP'nin doğrudan devamı"},
-    {id:"rp", kisa:"RP", ad:"Refah Partisi", yil:"1983 – 1998", durum:"kapatildi", aile:2, donem:4,
-     not:"1996–97 arası iktidar ortağı"},
-    {id:"mcp", kisa:"MÇP", ad:"Milliyetçi Çalışma Partisi", yil:"1983 – 1993", durum:"katildi", aile:3, donem:4,
-     not:"MHP'nin kapatılma sonrası devamı"},
-    {id:"hep", kisa:"HEP", ad:"Halkın Emek Partisi", yil:"1990 – 1993", durum:"kapatildi", aile:5, donem:4,
-     not:"SHP'den ayrılan milletvekilleriyle kuruldu"},
-    {id:"tbkp", kisa:"TBKP", ad:"Türkiye Birleşik Komünist Partisi", yil:"1990 – 1991", durum:"kapatildi", aile:4, donem:4,
-     not:"TKP ile TİP'in birleşmesi"},
-
-    // --- dönem 5 ---
-    {id:"chp92", kisa:"CHP", ad:"Cumhuriyet Halk Partisi", yil:"1992 –", durum:"faal", aile:0, donem:5,
-     sembol:"Altı Ok", not:"Kapalı kaldığı 11 yılın ardından aynı adla yeniden açıldı"},
-    {id:"dp92", kisa:"DP", ad:"Demokrat Parti", yil:"1992 – 2005", durum:"katildi", aile:1, donem:5,
-     not:"CHP ile aynı yasayla yeniden açıldı; 2005'te isim hakkıyla ANAP'a katıldı"},
-    {id:"dtp97", kisa:"DTP", ad:"Demokrat Türkiye Partisi", yil:"1997 – 2005", durum:"katildi", aile:1, donem:5,
-     sembol:"Şemsiye", not:"DYP'den kopan \"Yeni Oluşumcular\"; 2005'te HÜRPARTİ oldu"},
-    {id:"ldp", kisa:"LDP", ad:"Liberal Demokrat Parti", yil:"1994 –", durum:"faal", aile:6, donem:5,
-     sembol:"Yunus", not:"Tibuk, DP genel başkanlığını kaybedince ayrılıp kurdu"},
-    {id:"ydh", kisa:"YDH", ad:"Yeni Demokrasi Hareketi", yil:"1994 – 1997", durum:"katildi", aile:6, donem:5,
-     not:"Boyner liderliğinde, ağırlıkla sol kökenli aydın ve iş insanı kadrosu"},
-    {id:"mhp93", kisa:"MHP", ad:"Milliyetçi Hareket Partisi", yil:"1993 –", durum:"faal", aile:3, donem:5,
-     sembol:"Üç hilal", not:"MÇP'nin adını yeniden alması"},
-    {id:"bbp", kisa:"BBP", ad:"Büyük Birlik Partisi", yil:"1993 –", durum:"faal", aile:3, donem:5,
-     not:"MHP'den ayrılan Yazıcıoğlu kanadı"},
-    {id:"fp", kisa:"FP", ad:"Fazilet Partisi", yil:"1997 – 2001", durum:"kapatildi", aile:2, donem:5,
-     not:"Refah kapatılınca kuruldu"},
-    {id:"dep", kisa:"DEP", ad:"Demokrasi Partisi", yil:"1993 – 1994", durum:"kapatildi", aile:5, donem:5},
-    {id:"hadep", kisa:"HADEP", ad:"Halkın Demokrasi Partisi", yil:"1994 – 2003", durum:"kapatildi", aile:5, donem:5},
-    {id:"dehap", kisa:"DEHAP", ad:"Demokratik Halk Partisi", yil:"1997 – 2005", durum:"katildi", aile:5, donem:5},
-    {id:"odp", kisa:"ÖDP", ad:"Özgürlük ve Dayanışma Partisi", yil:"1996 –", durum:"faal", aile:4, donem:5,
-     not:"Sosyalist grupların birleşmesi"},
-    {id:"emep", kisa:"EMEP", ad:"Emek Partisi", yil:"1996 –", durum:"faal", aile:4, donem:5},
-    {id:"ip92", kisa:"İP", ad:"İşçi Partisi", yil:"1992 – 2015", durum:"katildi", aile:4, donem:5,
-     not:"Perinçek çizgisi"},
-
-    // --- dönem 6 ---
-    {id:"akp", kisa:"AK Parti", ad:"Adalet ve Kalkınma Partisi", yil:"2001 –", durum:"faal", aile:2, donem:6,
-     sembol:"Ampul", not:"Fazilet'in \"yenilikçi\" kanadı"},
-    {id:"sp", kisa:"SP", ad:"Saadet Partisi", yil:"2001 –", durum:"faal", aile:2, donem:6,
-     not:"Fazilet'in \"gelenekçi\" kanadı"},
-    {id:"has", kisa:"HAS Parti", ad:"Halkın Sesi Partisi", yil:"2010 – 2012", durum:"katildi", aile:2, donem:6,
-     not:"Saadet'ten ayrılan Kurtulmuş; AK Parti ile bütünleşti"},
-    {id:"ytp02", kisa:"YTP", ad:"Yeni Türkiye Partisi", yil:"2002 – 2004", durum:"katildi", aile:0, donem:6,
-     not:"DSP'den ayrılan 63 vekil, İsmail Cem liderliğinde"},
-    {id:"anadolu", kisa:"Anadolu P.", ad:"Anadolu Partisi", yil:"2014 – 2015", durum:"kapandi", aile:0, donem:6,
-     not:"CHP'den ayrılan Emine Ülker Tarhan"},
-    {id:"dp07", kisa:"DP", ad:"Demokrat Parti", yil:"2007 –", durum:"faal", aile:1, donem:6,
-     not:"DYP'nin ad değişikliği; 2009'da ANAP katıldı"},
-    {id:"dtp", kisa:"DTP", ad:"Demokratik Toplum Partisi", yil:"2005 – 2009", durum:"kapatildi", aile:5, donem:6},
-    {id:"bdp", kisa:"BDP", ad:"Barış ve Demokrasi Partisi", yil:"2008 – 2014", durum:"katildi", aile:5, donem:6,
-     not:"2014'te DBP adını aldı, vekiller HDP'ye geçti"},
-    {id:"hdp", kisa:"HDP", ad:"Halkların Demokratik Partisi", yil:"2012 –", durum:"faal", aile:5, donem:6},
-    {id:"yesilsol", kisa:"YSP", ad:"Yeşil Sol Parti", yil:"2012 – 2023", durum:"katildi", aile:5, donem:6,
-     not:"2023 seçimlerinde HDP'nin listesi oldu"},
-    {id:"vatan", kisa:"Vatan P.", ad:"Vatan Partisi", yil:"2015 –", durum:"faal", aile:4, donem:6,
-     not:"İşçi Partisi'nin ad değişikliği"},
-
-    // --- dönem 7 ---
-    {id:"memleket", kisa:"Memleket P.", ad:"Memleket Partisi", yil:"2021 – 2025", durum:"katildi", aile:0, donem:7,
-     not:"İnce 2025'te CHP'ye döndü; parti kurultay kararıyla kapandı"},
-    {id:"tdp", kisa:"TDP", ad:"Türkiye Değişim Partisi", yil:"2020 – 2023", durum:"katildi", aile:0, donem:7,
-     not:"Mustafa Sarıgül; 2023'te CHP ile birleşti"},
-    {id:"yeniparti", kisa:"Yeni Parti", ad:"Yeni Parti", yil:"2026 –", durum:"faal", aile:0, donem:7,
-     not:"Özel ve 91 vekilin ayrılışı; TBMM'de ana muhalefet"},
-    {id:"yrp", kisa:"YRP", ad:"Yeniden Refah Partisi", yil:"2018 –", durum:"faal", aile:2, donem:7,
-     not:"Saadet'ten ayrılan Erbakan çizgisi"},
-    {id:"gelecek", kisa:"Gelecek P.", ad:"Gelecek Partisi", yil:"2019 – 2026", durum:"kapandi", aile:2, donem:7,
-     not:"AK Parti'den ayrılan Davutoğlu; Temmuz 2026'da feshedildi"},
-    {id:"deva", kisa:"DEVA", ad:"Demokrasi ve Atılım Partisi", yil:"2020 –", durum:"faal", aile:2, donem:7,
-     not:"AK Parti'den ayrılan Babacan"},
-    {id:"yeniyol", kisa:"Yeni Yol", ad:"Yeni Yol Partisi", yil:"2025 –", durum:"faal", aile:2, donem:7,
-     not:"Saadet + Gelecek + DEVA'nın ortak Meclis grubu; partiler ayrı kaldı"},
-    {id:"iyi", kisa:"İYİ Parti", ad:"İyi Parti", yil:"2017 –", durum:"faal", aile:3, donem:7,
-     sembol:"16 ışınlı güneş", not:"MHP'den ayrılan Akşener kanadı"},
-    {id:"zafer", kisa:"Zafer P.", ad:"Zafer Partisi", yil:"2021 –", durum:"faal", aile:3, donem:7,
-     not:"İYİ Parti'den ayrılan Özdağ"},
-    {id:"anahtar", kisa:"A Parti", ad:"Anahtar Parti", yil:"2024 –", durum:"faal", aile:3, donem:7,
-     sembol:"Anahtar", not:"İYİ Parti'den ayrılan Ağıralioğlu; amblemi MSP'yi andırıyor"},
-    {id:"dem", kisa:"DEM Parti", ad:"Halkların Eşitlik ve Demokrasi Partisi", yil:"2023 –", durum:"faal", aile:5, donem:7,
-     not:"Yeşil Sol Parti'nin ad değişikliği"},
-    {id:"tip17", kisa:"TİP", ad:"Türkiye İşçi Partisi", yil:"2017 –", durum:"faal", aile:4, donem:7,
-     not:"Tarihsel TİP adının yeniden kullanımı"}
-  ];
-
-  const E = [
-    ["chp23","tcf","bolunme"], ["chp23","scf","bolunme"],
-    ["chp23","hp83","bolunme"], ["chp23","sodep","bolunme"],
-    ["hp83","shp","katilma"], ["sodep","shp","katilma"],
-    ["chp23","chp92","devam"],
-    ["chp23","gp","bolunme"], ["chp23","cp72","bolunme"],
-    ["gp","cgp","katilma"], ["cp72","cgp","katilma"],
-    ["shp","chp92","katilma"], ["chp23","dsp","bolunme"],
-    ["chp92","memleket","bolunme"], ["memleket","chp92","katilma"],
-    ["chp92","yeniparti","bolunme"], ["shp","hep","bolunme"],
-    ["dsp","ytp02","bolunme"], ["ytp02","chp92","katilma"],
-    ["chp92","anadolu","bolunme"],
-    ["dsp","tdp","bolunme"], ["tdp","chp92","katilma"],
-
-    ["dp46","ap","devam"], ["dp46","ytp","devam"], ["dp46","dp92","devam"],
-    ["dp92","ldp","bolunme"], ["dp92","anap","katilma"],
-    ["shp","ydh","bolunme"], ["tip61","ydh","bolunme"],
-    ["ap","demp70","bolunme"], ["demp70","ap","katilma"],
-    ["ap","dyp","devam"], ["ap","anap","bolunme"],
-    ["dyp","dp07","devam"], ["anap","dp07","katilma"],
-    ["dyp","dtp97","bolunme"],
-
-    ["mnp","msp","devam"], ["msp","rp","devam"], ["rp","fp","devam"],
-    ["fp","sp","devam"], ["fp","akp","bolunme"],
-    ["sp","yrp","bolunme"], ["sp","has","bolunme"], ["has","akp","katilma"],
-    ["akp","gelecek","bolunme"], ["akp","deva","bolunme"],
-    ["sp","yeniyol","katilma"], ["gelecek","yeniyol","katilma"], ["deva","yeniyol","katilma"],
-
-    ["mp48","ckmp","devam"], ["ckmp","mhp69","devam"],
-    ["mhp69","mcp","devam"], ["mcp","mhp93","devam"],
-    ["mhp93","bbp","bolunme"], ["mhp93","iyi","bolunme"], ["iyi","zafer","bolunme"],
-    ["iyi","anahtar","bolunme"],
-
-    ["hep","dep","devam"], ["dep","hadep","devam"], ["hadep","dehap","devam"],
-    ["dehap","dtp","devam"], ["dtp","bdp","devam"], ["bdp","hdp","katilma"],
-    ["yesilsol","dem","devam"], ["hdp","dem","bolunme"],
-
-    ["tkp20","thif","devam"], ["tkp20","tbkp","katilma"], ["tip61","tip75","devam"], ["tip75","tbkp","katilma"],
-    ["tip75","odp","bolunme"], ["tip75","emep","bolunme"],
-    ["tip61","tip17","bolunme"], ["ip92","vatan","devam"]
-  ];
-
-  const ROZET = {
-    kapatildi:["kapatıldı","r-kapatildi"],
-    faal:["faal","r-faal"],
-    katildi:["devredildi","r-katildi"],
-    kapandi:["feshedildi","r-katildi"]
-  };
+  const {AILE, BILGI, DONEMLER, N, E, ROZET} = window.PARTILER;
 
   const GUNCEL_YIL=2026;
   let arama="", aileFiltre=null, yilFiltre=null, filtreAktif=false;
 
   const lej = document.getElementById("lejant");
   AILE.forEach((a,i)=>{
     const d=document.createElement("div"); d.className="lej";
     d.innerHTML='<i class="dot" style="background:'+a.ham+'"></i>'+a.ad;
     d.tabIndex=0; d.setAttribute("role","button"); d.setAttribute("aria-pressed","false");
     function ailesecTogla(){
@@ -617,21 +340,21 @@
       b.querySelector(".ok").textContent=kapali?"+":"−";
       ciz();
     }
     b.addEventListener("click",ackapa);
     b.addEventListener("keydown",e=>{
       if(e.key==="Enter"||e.key===" "){ e.preventDefault(); ackapa(); }
     });
 
     if(d.kesinti){
       const k=document.createElement("div"); k.className="banner kesinti";
-      k.innerHTML='<span class="yil">⚡</span><span class="ad">'+d.kesinti+'</span>';
+      k.innerHTML='<span class="yil">⚡</span><span class="ad">'+d.kesinti.metin+'</span>';
       rows.appendChild(k);
     }
   });
 
   function kart(n){
     const el=document.createElement("div");
     el.className="kart"+(n.durum==="kapatildi"?" kapatildi":"");
     el.style.setProperty("--aile",AILE[n.aile].ham);
     el.dataset.id=n.id;
     el.tabIndex=0;
diff --git a/veri/partiler.js b/veri/partiler.js
new file mode 100644
index 0000000..1c94e6d
--- /dev/null
+++ b/veri/partiler.js
@@ -0,0 +1,290 @@
+/* Türkiye Siyasi Partileri Soyağacı — ortak veri.
+   index.html ve sandik.html tarafından paylaşılır; tek kaynak burasıdır. */
+window.PARTILER = (function(){
+  const AILE = [
+    {ad:"Cumhuriyetçi / sosyal demokrat", ham:"#C0392B"},
+    {ad:"Merkez sağ", ham:"#B57B18"},
+    {ad:"Milli Görüş / muhafazakâr", ham:"#25795A"},
+    {ad:"Milliyetçi", ham:"#28457A"},
+    {ad:"Sosyalist sol", ham:"#8E2050"},
+    {ad:"Radikal sol", ham:"#7B3F9D"},
+    {ad:"Liberal", ham:"#0F7A80"}
+  ];
+
+  const BILGI = {
+    chp23:{k:"Mustafa Kemal Atatürk", o:"Kurtuluş Savaşı'nı yürüten Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti'nin partiye dönüşmesiyle doğdu. 1946'ya kadar tek parti olarak ülkeyi yönetti, 1950'de iktidarı seçimle devretti. 1965'ten sonra Ecevit önderliğinde \"ortanın solu\" çizgisine kaydı ve 12 Eylül'e kadar sosyal demokrat bir kitle partisi oldu."},
+    tcf:{k:"Kâzım Karabekir, Rauf Orbay, Ali Fuat Cebesoy", o:"Cumhuriyetin ilk muhalefet partisi. Kurtuluş Savaşı'nın önde gelen komutanları tarafından, tek elde toplanan yetkiye itiraz olarak kuruldu. Şeyh Sait İsyanı'nın ardından Takrir-i Sükûn Kanunu'na dayanılarak kapatıldı."},
+    scf:{k:"Fethi Okyar", o:"Denetimli bir muhalefet yaratmak amacıyla, Mustafa Kemal Atatürk'ün isteğiyle kuruldu. Kısa sürede rejim karşıtı unsurların partinin tabanına yayılması üzerine, Fethi Okyar kendi kararıyla partiyi feshetti."},
+    tkp20:{k:"Mustafa Suphi", o:"Bakü'de, Kızıl Ordu kulübünde 74 delegenin katılımıyla kuruldu; Türkiye'de değil yurt dışında doğdu. Suphi ve on dört yoldaşı 1921 başında Trabzon açıklarında öldürüldü. Parti bundan sonra onlarca yıl boyunca yasa dışı çalıştı, 1988'de kendini feshederek TBKP'ye katıldı."},
+    thif:{k:"Şerif Manatov, Salih Hacıoğlu", o:"TKP'nin Ankara'daki yasal görünümlü kolu olarak kuruldu. Birkaç ay içinde kapatıldı, 1922 yazında kısa süre yeniden faaliyet gösterebildi. Şemadaki en kısa ömürlü parti."},
+    dp46:{k:"Celâl Bayar, Adnan Menderes", o:"CHP'den ayrılan \"Dörtlü Takrir\" imzacıları tarafından kuruldu ve çok partili hayatın başlangıcı oldu. 1950 seçimini kazanarak on yıl iktidarda kaldı; kırsal kalkınma, karayolu ve tarım politikalarıyla anıldı. 27 Mayıs darbesiyle kapatıldı, Menderes ve iki bakanı idam edildi."},
+    mp48:{k:"Fevzi Çakmak, Osman Bölükbaşı", o:"DP'den ayrılan muhafazakâr ve milliyetçi kanadın partisi. Din ve gelenek vurgusuyla DP'nin sağında konumlandı. 1958'de Köylü Partisi ile birleşerek CKMP'ye dönüştü."},
+    ckmp:{k:"Osman Bölükbaşı", o:"Millet Partisi ile Türkiye Köylü Partisi'nin birleşmesiyle kuruldu. 1965'te Alparslan Türkeş ve arkadaşlarının katılmasıyla yön değiştirdi ve 1969'da adını Milliyetçi Hareket Partisi olarak değiştirdi."},
+    ap:{k:"Ragıp Gümüşpala, ardından Süleyman Demirel", o:"27 Mayıs sonrası DP tabanının ana adresi oldu ve 1965'te tek başına iktidara geldi. Demirel liderliğinde merkez sağın en uzun soluklu partisi haline geldi, 1970'lerde Milliyetçi Cephe hükümetlerini kurdu. 12 Eylül'le birlikte feshedildi."},
+    ytp:{k:"Ekrem Alican", o:"DP mirasını paylaşan ikinci damar olarak kuruldu ve 1961–65 koalisyonlarında yer aldı. AP'nin tabanı toparlamasıyla hızla eridi."},
+    demp70:{k:"Ferruh Bozbeyli", o:"AP'nin \"kırk dörtler\" olarak anılan muhalif kanadının ayrılmasıyla kuruldu. Demirel'e karşı sağda alternatif olmayı denedi ama başaramadı ve 1980'de yeniden AP'ye katıldı."},
+    mhp69:{k:"Alparslan Türkeş", o:"CKMP'nin adını ve simgesini değiştirmesiyle doğdu; üç hilal ve bozkurt sembolleri bu dönemde benimsendi. 1970'lerde Milliyetçi Cephe hükümetlerine ortak oldu. 12 Eylül'de kapatıldı ve yöneticileri uzun süre yargılandı."},
+    mnp:{k:"Necmettin Erbakan", o:"Milli Görüş hareketinin ilk partisi. Ağır sanayi hamlesi ve manevi kalkınma söylemiyle merkez sağdan ayrıştı. 12 Mart muhtırasının ardından laiklik gerekçesiyle kapatıldı."},
+    gp:{k:"Turhan Feyzioğlu", o:"CHP'nin \"ortanın solu\" çizgisine itiraz eden 47 milletvekilinin ayrılmasıyla kuruldu. Kemalist ama sola mesafeli bir çizgi izledi. 1971'de Millî Güven Partisi adını aldı, 1973'te Cumhuriyetçi Parti ile birleşti."},
+    tip61:{k:"On iki sendikacı, ardından Mehmet Ali Aybar", o:"Sosyalist solun parlamentoya ilk kez girmesini sağladı; 1965'te 15 milletvekili kazandı. Sosyalizmi seçim yoluyla savunan ilk yasal parti oldu. 12 Mart muhtırasının ardından Anayasa Mahkemesi tarafından kapatıldı."},
+    cp72:{k:"Kemal Satır", o:"Ecevit'in CHP genel başkanı olmasına karşı çıkan 18 milletvekili tarafından kuruldu. Hiçbir genel seçime kendi adıyla giremeden, altı ay sonra Millî Güven Partisi ile birleşti."},
+    cgp:{k:"Turhan Feyzioğlu", o:"MGP ile Cumhuriyetçi Parti'nin birleşmesinden doğdu. Kendini \"ne aşırı sol ne aşırı sağ\" diye tanımladı ve 1970'lerin koalisyonlarında denge unsuru oldu; Feyzioğlu I. Milliyetçi Cephe hükümetinde başbakan yardımcılığı yaptı. 12 Eylül'le feshedildi."},
+    msp:{k:"Necmettin Erbakan", o:"MNP'nin kapatılmasının ardından Milli Görüş'ün ikinci partisi olarak kuruldu. 1973'te CHP ile, ardından AP ile koalisyon kurarak dönemin kilit partisi haline geldi. Kıbrıs Barış Harekâtı bu koalisyonlar döneminde gerçekleşti."},
+    tip75:{k:"Behice Boran", o:"Kapatılan TİP'in kadrosuyla yeniden kuruldu; Boran, Türkiye'de bir partinin genel başkanı olan ilk kadın oldu. 12 Eylül'le kapatıldı, yöneticileri yurt dışına çıkmak zorunda kaldı."},
+    hp83:{k:"Necdet Calp", o:"12 Eylül sonrası kurulmasına izin verilen üç partiden biri. CHP geleneğinin devamı sayıldı ve 1983 seçiminde ana muhalefet oldu. 1985'te SODEP ile birleşti."},
+    sodep:{k:"Erdal İnönü", o:"CHP kadrolarının kurduğu, ancak 1983 seçimine katılmasına izin verilmeyen sosyal demokrat parti. İki yıl sonra Halkçı Parti ile birleşerek SHP'yi oluşturdu."},
+    shp:{k:"Erdal İnönü", o:"1980'lerin sonunda sosyal demokrat solun ana partisi oldu ve 1991'de DYP ile koalisyon kurdu. Kürt sorununda açılım arayışları partinin içinde büyük gerilim yarattı; ayrılan milletvekilleri HEP'i kurdu. 1995'te CHP'ye katılarak sona erdi."},
+    dsp:{k:"Rahşan Ecevit, ardından Bülent Ecevit", o:"Ecevit'e siyaset yasağı sürerken eşi Rahşan Ecevit tarafından kuruldu. CHP geleneğinden ayrı, daha ulusalcı bir sol çizgi izledi. 1999 seçiminde birinci parti oldu ve Ecevit başbakanlığında koalisyon kurdu."},
+    anap:{k:"Turgut Özal", o:"12 Eylül sonrası ilk seçimi kazanarak tek başına iktidara geldi. Piyasa ekonomisine geçiş, dışa açılma ve özelleştirme politikalarıyla ekonomiyi köklü biçimde dönüştürdü. Merkez sağ, milliyetçi ve muhafazakâr \"dört eğilimi\" birleştirme iddiasıyla kuruldu."},
+    dyp:{k:"Süleyman Demirel, ardından Tansu Çiller", o:"AP'nin doğrudan devamı olarak kuruldu ve kır at simgesini sürdürdü. 1991'de iktidara geldi; Çiller, Türkiye'nin ilk kadın başbakanı oldu. 2007'de Demokrat Parti adını alarak tarihe karıştı."},
+    rp:{k:"Necmettin Erbakan", o:"Milli Görüş'ün üçüncü partisi. 1994 yerel seçimlerinde İstanbul ve Ankara'yı kazandı, 1995'te birinci parti oldu ve Erbakan başbakanlığında Refahyol hükümetini kurdu. 28 Şubat süreci sonrası Anayasa Mahkemesi tarafından kapatıldı."},
+    mcp:{k:"Alparslan Türkeş", o:"MHP kapatıldıktan sonra aynı geleneğin devamı olarak kuruldu. Türkeş'in siyasi yasağı kalkınca partinin başına geçti ve 1993'te MHP adı geri alındı."},
+    hep:{k:"Fehmi Işıklar", o:"SHP'den ihraç edilen ve istifa eden milletvekilleri tarafından kuruldu. Kürt kimliği taleplerini meclis siyasetine taşıyan ilk parti oldu. 1993'te Anayasa Mahkemesi tarafından kapatıldı; bu, uzun bir kapatma zincirinin ilk halkası oldu."},
+    tbkp:{k:"Haydar Kutlu, Nihat Sargın", o:"TKP ile TİP'in yurt dışında birleşmesiyle kuruldu; kurucuları Türkiye'ye döndüklerinde tutuklandı. Bir yıl bile dayanamadan Anayasa Mahkemesi tarafından kapatıldı. Bu karar sonradan Avrupa İnsan Hakları Mahkemesi'nde Türkiye aleyhine sonuçlandı."},
+    chp92:{k:"Deniz Baykal", o:"Kapatılan partilerin yeniden açılmasına izin veren 3821 sayılı yasayla, on bir yıl aradan sonra aynı adla açıldı. 1995'te SHP'yi bünyesine kattı ve sosyal demokrat solun ana partisi oldu. 2026'da 91 milletvekilinin ayrılışıyla meclisteki konumunu kaybetti."},
+    dp92:{k:"Aydın Menderes ve eski Demokrat Partililer", o:"CHP ile aynı yasa sayesinde yeniden açıldı, 1946'nın DP'sinin halefi olma iddiasını taşıdı. Sık sık genel başkan değiştirdi, kayda değer bir seçim başarısı elde edemedi. 2005'te kendini feshederek isim hakkıyla ANAP'a katıldı."},
+    dtp97:{k:"Hüsamettin Cindoruk", o:"Refahyol hükümetine tepki gösteren \"Yeni Oluşumcular\" DYP'den ayrılarak kurdu. 55. hükümetin ortağı oldu. 2005'te adını Hürriyet ve Değişim Partisi olarak değiştirdi."},
+    ldp:{k:"Besim Tibuk", o:"Tibuk, Demokrat Parti genel başkanlığı yarışını kaybedince ayrılıp kurdu; ilk adı Liberal Parti'ydi. Klasik liberal, devletin küçültülmesini savunan bir program izledi. Simgesi yunustur ve parti hiçbir zaman meclise girememiştir."},
+    ydh:{k:"Cem Boyner", o:"İş dünyası ve aydın çevrelerinin birlikte kurduğu, medyada büyük ilgi gören liberal hareket. Kurucu kadrosunun önemli bölümü TİP, TKP ve SHP gibi sol geleneklerden geliyordu. 1995 seçiminde binde beşin altında oy alınca 1997'de kendini feshetti."},
+    mhp93:{k:"Alparslan Türkeş, ardından Devlet Bahçeli", o:"MÇP'nin eski adını geri almasıyla doğdu. 1999'da ikinci parti olarak koalisyon ortağı oldu; 2018'den sonra Cumhur İttifakı'nın kurucu unsuru haline geldi."},
+    bbp:{k:"Muhsin Yazıcıoğlu", o:"MHP içindeki daha İslami vurgulu kanadın ayrılmasıyla kuruldu. Milliyetçilikle muhafazakârlığı birleştiren bir çizgi izledi. Yazıcıoğlu'nun 2009'da bir helikopter kazasında ölümü partide derin bir kırılma yarattı."},
+    fp:{k:"Recai Kutan", o:"Refah kapatılınca kurulan Milli Görüş'ün dördüncü partisi. İçinde \"gelenekçi\" ve \"yenilikçi\" kanatların çekişmesi büyüdü. 2001'de kapatılınca bu iki kanat Saadet ve AK Parti olarak ayrıldı."},
+    dep:{k:"Yaşar Kaya", o:"HEP kapatılınca kurulan ikinci halka. Milletvekillerinin dokunulmazlıklarının kaldırılıp meclis içinde gözaltına alınması Türkiye siyasetinde derin iz bıraktı. Bir yıl içinde kapatıldı."},
+    hadep:{k:"Murat Bozlak", o:"DEP'in kapatılmasının ardından kuruldu ve seçim barajı yüzünden meclise giremese de yerel yönetimlerde güçlendi. 2003'te kapatıldı."},
+    dehap:{k:"Mehmet Abbasoğlu", o:"HADEP hakkındaki kapatma davası sürerken yedek parti olarak kuruldu ve 2002 seçimine girdi. 2005'te DTP çatısı altında birleşme kararıyla sona erdi."},
+    odp:{k:"Ufuk Uras", o:"Farklı sosyalist grupların bir araya gelmesiyle kuruldu; sol içinde çoğulculuk arayışının simgesi sayıldı. Küçük ölçekli kalsa da çevre, emek ve özgürlük gündemlerinde etkili oldu."},
+    emep:{k:"Levent Tüzel", o:"Sınıf eksenli, sendikal mücadeleye dayanan bir sosyalist parti olarak kuruldu. Genellikle seçimlere ittifaklar üzerinden katıldı."},
+    ip92:{k:"Doğu Perinçek", o:"Sosyalist Parti'nin kapatılmasının ardından aynı kadroyla kuruldu. Zamanla ulusalcı ve Avrasyacı bir çizgiye kaydı. 2015'te Vatan Partisi adını aldı."},
+    akp:{k:"Recep Tayyip Erdoğan", o:"Fazilet Partisi'nin \"yenilikçi\" kanadı tarafından kuruldu ve kurulduktan bir yıl sonra tek başına iktidara geldi. AB üyelik süreci, ekonomik büyüme ve 2017 referandumuyla başkanlık sistemine geçiş bu dönemin dönüm noktaları oldu. Türkiye tarihinin en uzun süre kesintisiz iktidarda kalan partisidir."},
+    sp:{k:"Recai Kutan", o:"Fazilet'in \"gelenekçi\" kanadının partisi; Erbakan çizgisini sürdürdü. Seçim başarısı sınırlı kaldı ama Milli Görüş'ün asıl mirasçısı olma iddiasını korudu. 2025'te Yeni Yol çatısına katıldı."},
+    has:{k:"Numan Kurtulmuş", o:"Saadet Partisi genel başkanlığından ayrılan Kurtulmuş ve kadrosu tarafından kuruldu. İki yıl sonra AK Parti ile birleşerek feshedildi; Kurtulmuş burada üst düzey görevlere geldi."},
+    ytp02:{k:"İsmail Cem, Hüsamettin Özkan, Kemal Derviş", o:"Ecevit'in hastalığı sırasında DSP'den istifa eden 64 vekilin 63'ünün katılımıyla kuruldu. Beklenen ilgiyi göremedi, 2002 seçiminde yüzde 1'in biraz üzerinde kaldı. 2004'te CHP'ye katıldı."},
+    anadolu:{k:"Emine Ülker Tarhan", o:"CHP'den ayrılan Tarhan tarafından kuruldu. 2015 seçiminde varlık gösteremeyince aynı yıl faaliyetlerini sonlandırdı."},
+    dp07:{k:"Mehmet Ağar", o:"DYP'nin adını değiştirmesiyle doğdu; 2009'da ANAP'ın katılmasıyla merkez sağın dağılmış mirasını tek çatı altında toplamayı denedi. Eski gücüne dönemedi ama meclise bağımsız adaylar ve ittifaklar üzerinden temsilci gönderdi."},
+    dtp:{k:"Ahmet Türk, Aysel Tuğluk", o:"DEHAP'ın devamı olarak kuruldu ve 2007'de bağımsız adaylar yoluyla meclise grup sokmayı başardı. 2009'da Anayasa Mahkemesi tarafından kapatıldı."},
+    bdp:{k:"Selahattin Demirtaş", o:"DTP hakkındaki kapatma davası sürerken hazırlık olarak kuruldu. 2014'te vekillerini HDP'ye devredip Demokratik Bölgeler Partisi adıyla yerel siyasete odaklandı."},
+    hdp:{k:"Selahattin Demirtaş, Figen Yüksekdağ", o:"Kürt hareketi ile Türkiye solunu ve çevre, kadın, LGBT gibi hareketleri ortak çatıda buluşturma iddiasıyla kuruldu. Haziran 2015'te yüzde 13 alarak barajı aşan ilk parti oldu. Eş genel başkanları 2016'da tutuklandı."},
+    yesilsol:{k:"Yeşiller ve Sol Gelecek Partisi kadroları", o:"Yeşil siyaset ile solu birleştirmek üzere kuruldu. HDP hakkındaki kapatma davası nedeniyle 2023 seçimlerinde HDP'nin listesi olarak kullanıldı, ardından adını değiştirdi."},
+    vatan:{k:"Doğu Perinçek", o:"İşçi Partisi'nin ad değişikliğiyle doğdu. Ulusalcı, Avrasyacı ve devletçi bir çizgi izliyor; seçim desteği düşük olmakla birlikte gündem belirlemede etkili."},
+    memleket:{k:"Muharrem İnce", o:"CHP'nin 2018 cumhurbaşkanı adayı olan İnce'nin partiden ayrılarak kurduğu parti. 2023 seçiminde İnce adaylıktan çekildi. 2025'te İnce CHP'ye döndü ve parti kurultay kararıyla kapandı."},
+    tdp:{k:"Mustafa Sarıgül", o:"Uzun yıllar Şişli belediye başkanlığı yapan Sarıgül tarafından kuruldu. 2023'te CHP ile birleşerek sona erdi."},
+    yeniparti:{k:"Özgür Özel", o:"Özel'in CHP genel başkanlığının yargı kararıyla düşmesinin ardından, 91 milletvekiliyle kuruldu ve mecliste ana muhalefet konumuna geçti. Kuruluş tarihi Lozan Antlaşması'nın yıl dönümüne denk getirildi. Türkiye tarihinde bir partinin bu ölçekte bölünmesinin ilk örneği."},
+    yrp:{k:"Fatih Erbakan", o:"Necmettin Erbakan'ın oğlu tarafından, Saadet Partisi'nden ayrılarak kuruldu. 2023'te meclise girdi ve 2024 yerel seçimlerinde beklenenin üzerinde oy alarak dikkat çekti."},
+    gelecek:{k:"Ahmet Davutoğlu", o:"AK Parti'nin eski başbakanı ve genel başkanı tarafından kuruldu. Kendi başına seçime girmek yerine ittifaklar üzerinden meclise vekil soktu. Temmuz 2026'da Davutoğlu tarafından feshedildi."},
+    deva:{k:"Ali Babacan", o:"AK Parti'nin ekonomiden sorumlu eski bakanı tarafından kuruldu. Hukuk devleti ve ekonomi vurgusuyla merkeze oynadı, meclise ittifak yoluyla girdi."},
+    yeniyol:{k:"Saadet, Gelecek ve DEVA'nın ortak girişimi", o:"Meclis grubu kurmak için tek partiden 20 vekil şartı arayan İçtüzük nedeniyle, üç parti ortak bir tüzel kişilik kurdu. Partiler örgütlerini, programlarını ve genel başkanlarını korudu; yalnızca meclis çalışmalarında birlikte hareket ediyorlar. Gelecek Partisi'nin feshiyle grubun sürekliliği tartışmalı hale geldi."},
+    iyi:{k:"Meral Akşener", o:"MHP içindeki muhalif kanadın ayrılmasıyla kuruldu; Akşener, Türkiye'de bir partinin kadın genel başkanı olarak dikkat çekti. Milliyetçi ama merkeze açık bir çizgi izledi ve 2018'den itibaren muhalefet ittifaklarında yer aldı."},
+    zafer:{k:"Ümit Özdağ", o:"İYİ Parti'den ayrılan Özdağ tarafından kuruldu. Göç ve sığınmacı politikalarını merkezine alan bir söylemle tanındı."},
+    anahtar:{k:"Yavuz Ağıralioğlu", o:"İYİ Parti'den ayrılan Ağıralioğlu tarafından kuruldu. Resmî kısaltması A Parti; amblemindeki anahtarın MSP'nin simgesini andırması dikkat çekmişti. Henüz mecliste temsil edilmiyor."},
+    dem:{k:"Tülay Hatimoğulları, Tuncer Bakırhan", o:"Yeşil Sol Parti'nin ad değişikliğiyle doğdu ve HDP kadrolarının siyasi adresi oldu. 2024 yerel seçimlerinde çok sayıda belediye kazandı."},
+    tip17:{k:"Erkan Baş", o:"1961'de kurulan TİP'in adını yeniden kullanan sosyalist parti; ikisi arasında hukuki süreklilik yoktur. 2018 ve 2023'te ittifaklar yoluyla meclise girdi ve sosyalist solun uzun aradan sonra parlamentodaki sesi oldu."}
+  };
+
+  const DONEMLER = [
+    {yil:"1923 – 1945", ad:"Tek parti dönemi", kesinti:null},
+    {yil:"1946 – 1960", ad:"Çok partili hayata geçiş",
+     kesinti:{tarih:"1960-05-27", metin:"27 Mayıs 1960 — DP kapatıldı, liderleri idam edildi",
+              yonetim:{bas:"1960-05-27", bit:"1961-10-14"}}},
+    {yil:"1961 – 1971", ad:"1961 Anayasası ve yeni kurulan partiler",
+     kesinti:{tarih:"1971-03-12", metin:"12 Mart 1971 — TİP ve MNP kapatıldı"}},
+    {yil:"1972 – 1980", ad:"Koalisyonlar ve Milliyetçi Cephe hükümetleri",
+     kesinti:{tarih:"1980-09-12", metin:"12 Eylül 1980 — parti faaliyetleri yasaklandı; 16 Ekim 1981'de 1533 sayılı kanunla hepsi feshedildi",
+              yonetim:{bas:"1980-09-12", bit:"1983-11-05"}}},
+    {yil:"1983 – 1990", ad:"Yeniden kuruluş", kesinti:null},
+    {yil:"1991 – 2000", ad:"Koalisyonlar ve kapatma davaları",
+     kesinti:{tarih:"1997-02-28", metin:"28 Şubat 1997 — MGK kararları; Refah Partisi 16 Ocak 1998'de kapatıldı"}},
+    {yil:"2001 – 2015", ad:"AK Parti dönemi", kesinti:null},
+    {yil:"2016 – 2026", ad:"Yeni bölünmeler ve ittifaklar", kesinti:null}
+  ];
+
+  const N = [
+    // --- dönem 0 ---
+    {id:"chp23", kisa:"CHP", ad:"Cumhuriyet Halk Partisi", yil:"1923 – 1981", durum:"kapatildi", aile:0, donem:0,
+     sembol:"Altı Ok", not:"Cumhuriyeti kuran parti; 12 Eylül'le kapatıldı"},
+    {id:"tcf", kisa:"TCF", ad:"Terakkiperver Cumhuriyet Fırkası", yil:"1924 – 1925", durum:"kapatildi", aile:0, donem:0,
+     not:"İlk muhalefet partisi"},
+    {id:"scf", kisa:"SCF", ad:"Serbest Cumhuriyet Fırkası", yil:"1930", durum:"kapandi", aile:0, donem:0,
+     not:"Aynı yıl kendini feshetti"},
+    {id:"tkp20", kisa:"TKP", ad:"Türkiye Komünist Partisi", yil:"1920 – 1988", durum:"kapatildi", aile:4, donem:0,
+     not:"Bakü'de, Türkiye dışında kuruldu; yurt içinde hep yasa dışı kaldı"},
+    {id:"thif", kisa:"THİF", ad:"Türkiye Halk İştirakiyun Fırkası", yil:"1920 – 1921", durum:"kapatildi", aile:4, donem:0,
+     not:"TKP'nin Ankara'daki yasal kolu; birkaç ay sonra kapatıldı"},
+
+    // --- dönem 1 ---
+    {id:"dp46", kisa:"DP", ad:"Demokrat Parti", yil:"1946 – 1960", durum:"kapatildi", aile:1, donem:1,
+     not:"1950–60 arası iktidar; darbeyle kapatıldı"},
+    {id:"mp48", kisa:"MP", ad:"Millet Partisi", yil:"1948 – 1958", durum:"kapatildi", aile:3, donem:1},
+    {id:"ckmp", kisa:"CKMP", ad:"Cumhuriyetçi Köylü Millet Partisi", yil:"1958 – 1969", durum:"katildi", aile:3, donem:1,
+     not:"1965'te Türkeş partiye katıldı"},
+
+    // --- dönem 2 ---
+    {id:"ap", kisa:"AP", ad:"Adalet Partisi", yil:"1961 – 1981", durum:"kapatildi", aile:1, donem:2,
+     sembol:"Kır at", not:"DP'nin ana halefi, Demirel liderliğinde"},
+    {id:"ytp", kisa:"YTP", ad:"Yeni Türkiye Partisi", yil:"1961 – 1973", durum:"kapatildi", aile:1, donem:2,
+     not:"DP mirasını paylaşan ikinci damar"},
+    {id:"demp70", kisa:"DP", ad:"Demokratik Parti", yil:"1970 – 1980", durum:"katildi", aile:1, donem:2,
+     not:"AP'den ayrıldı, 1980'de AP'ye döndü"},
+    {id:"mhp69", kisa:"MHP", ad:"Milliyetçi Hareket Partisi", yil:"1969 – 1981", durum:"kapatildi", aile:3, donem:2,
+     sembol:"Üç hilal", not:"CKMP'nin ad değişikliğiyle kuruldu"},
+    {id:"mnp", kisa:"MNP", ad:"Milli Nizam Partisi", yil:"1970 – 1971", durum:"kapatildi", aile:2, donem:2,
+     not:"Milli Görüş'ün ilk partisi"},
+    {id:"gp", kisa:"GP", ad:"Güven Partisi / Millî Güven Partisi", yil:"1967 – 1973", durum:"katildi", aile:0, donem:2,
+     not:"Feyzioğlu ve 47 vekil, \"ortanın solu\"na itiraz ederek ayrıldı"},
+    {id:"tip61", kisa:"TİP", ad:"Türkiye İşçi Partisi", yil:"1961 – 1971", durum:"kapatildi", aile:4, donem:2,
+     not:"Sosyalist solun meclise ilk girişi"},
+
+    // --- dönem 3 ---
+    {id:"cp72", kisa:"CP", ad:"Cumhuriyetçi Parti", yil:"1972 – 1973", durum:"katildi", aile:0, donem:3,
+     not:"Ecevit'in genel başkanlığına karşı çıkan Satır ve 18 vekil"},
+    {id:"cgp", kisa:"CGP", ad:"Cumhuriyetçi Güven Partisi", yil:"1973 – 1981", durum:"kapatildi", aile:0, donem:3,
+     not:"MGP ile CP'nin birleşmesi; MC hükümetlerinin ortağı"},
+    {id:"msp", kisa:"MSP", ad:"Milli Selamet Partisi", yil:"1972 – 1981", durum:"kapatildi", aile:2, donem:3,
+     sembol:"Anahtar", not:"1970'ler koalisyonlarının değişmez ortağı"},
+    {id:"tip75", kisa:"TİP", ad:"Türkiye İşçi Partisi", yil:"1975 – 1980", durum:"kapatildi", aile:4, donem:3,
+     not:"Behice Boran liderliğinde yeniden kuruldu"},
+
+    // --- dönem 4 ---
+    {id:"hp83", kisa:"HP", ad:"Halkçı Parti", yil:"1983 – 1985", durum:"katildi", aile:0, donem:4},
+    {id:"sodep", kisa:"SODEP", ad:"Sosyal Demokrasi Partisi", yil:"1983 – 1985", durum:"katildi", aile:0, donem:4},
+    {id:"shp", kisa:"SHP", ad:"Sosyaldemokrat Halkçı Parti", yil:"1985 – 1995", durum:"katildi", aile:0, donem:4,
+     not:"1995'te CHP'ye katıldı"},
+    {id:"dsp", kisa:"DSP", ad:"Demokratik Sol Parti", yil:"1985 –", durum:"faal", aile:0, donem:4,
+     sembol:"Güvercin", not:"Ecevit çizgisi, CHP'den ayrı damar"},
+    {id:"anap", kisa:"ANAP", ad:"Anavatan Partisi", yil:"1983 – 2009", durum:"katildi", aile:1, donem:4,
+     sembol:"Bal peteği", not:"\"Dört eğilimi birleştirme\" iddiası; Özal"},
+    {id:"dyp", kisa:"DYP", ad:"Doğru Yol Partisi", yil:"1983 – 2007", durum:"katildi", aile:1, donem:4,
+     sembol:"Kır at", not:"AP'nin doğrudan devamı"},
+    {id:"rp", kisa:"RP", ad:"Refah Partisi", yil:"1983 – 1998", durum:"kapatildi", aile:2, donem:4,
+     not:"1996–97 arası iktidar ortağı"},
+    {id:"mcp", kisa:"MÇP", ad:"Milliyetçi Çalışma Partisi", yil:"1983 – 1993", durum:"katildi", aile:3, donem:4,
+     not:"MHP'nin kapatılma sonrası devamı"},
+    {id:"hep", kisa:"HEP", ad:"Halkın Emek Partisi", yil:"1990 – 1993", durum:"kapatildi", aile:5, donem:4,
+     not:"SHP'den ayrılan milletvekilleriyle kuruldu"},
+    {id:"tbkp", kisa:"TBKP", ad:"Türkiye Birleşik Komünist Partisi", yil:"1990 – 1991", durum:"kapatildi", aile:4, donem:4,
+     not:"TKP ile TİP'in birleşmesi"},
+
+    // --- dönem 5 ---
+    {id:"chp92", kisa:"CHP", ad:"Cumhuriyet Halk Partisi", yil:"1992 –", durum:"faal", aile:0, donem:5,
+     sembol:"Altı Ok", not:"Kapalı kaldığı 11 yılın ardından aynı adla yeniden açıldı"},
+    {id:"dp92", kisa:"DP", ad:"Demokrat Parti", yil:"1992 – 2005", durum:"katildi", aile:1, donem:5,
+     not:"CHP ile aynı yasayla yeniden açıldı; 2005'te isim hakkıyla ANAP'a katıldı"},
+    {id:"dtp97", kisa:"DTP", ad:"Demokrat Türkiye Partisi", yil:"1997 – 2005", durum:"katildi", aile:1, donem:5,
+     sembol:"Şemsiye", not:"DYP'den kopan \"Yeni Oluşumcular\"; 2005'te HÜRPARTİ oldu"},
+    {id:"ldp", kisa:"LDP", ad:"Liberal Demokrat Parti", yil:"1994 –", durum:"faal", aile:6, donem:5,
+     sembol:"Yunus", not:"Tibuk, DP genel başkanlığını kaybedince ayrılıp kurdu"},
+    {id:"ydh", kisa:"YDH", ad:"Yeni Demokrasi Hareketi", yil:"1994 – 1997", durum:"katildi", aile:6, donem:5,
+     not:"Boyner liderliğinde, ağırlıkla sol kökenli aydın ve iş insanı kadrosu"},
+    {id:"mhp93", kisa:"MHP", ad:"Milliyetçi Hareket Partisi", yil:"1993 –", durum:"faal", aile:3, donem:5,
+     sembol:"Üç hilal", not:"MÇP'nin adını yeniden alması"},
+    {id:"bbp", kisa:"BBP", ad:"Büyük Birlik Partisi", yil:"1993 –", durum:"faal", aile:3, donem:5,
+     not:"MHP'den ayrılan Yazıcıoğlu kanadı"},
+    {id:"fp", kisa:"FP", ad:"Fazilet Partisi", yil:"1997 – 2001", durum:"kapatildi", aile:2, donem:5,
+     not:"Refah kapatılınca kuruldu"},
+    {id:"dep", kisa:"DEP", ad:"Demokrasi Partisi", yil:"1993 – 1994", durum:"kapatildi", aile:5, donem:5},
+    {id:"hadep", kisa:"HADEP", ad:"Halkın Demokrasi Partisi", yil:"1994 – 2003", durum:"kapatildi", aile:5, donem:5},
+    {id:"dehap", kisa:"DEHAP", ad:"Demokratik Halk Partisi", yil:"1997 – 2005", durum:"katildi", aile:5, donem:5},
+    {id:"odp", kisa:"ÖDP", ad:"Özgürlük ve Dayanışma Partisi", yil:"1996 –", durum:"faal", aile:4, donem:5,
+     not:"Sosyalist grupların birleşmesi"},
+    {id:"emep", kisa:"EMEP", ad:"Emek Partisi", yil:"1996 –", durum:"faal", aile:4, donem:5},
+    {id:"ip92", kisa:"İP", ad:"İşçi Partisi", yil:"1992 – 2015", durum:"katildi", aile:4, donem:5,
+     not:"Perinçek çizgisi"},
+
+    // --- dönem 6 ---
+    {id:"akp", kisa:"AK Parti", ad:"Adalet ve Kalkınma Partisi", yil:"2001 –", durum:"faal", aile:2, donem:6,
+     sembol:"Ampul", not:"Fazilet'in \"yenilikçi\" kanadı"},
+    {id:"sp", kisa:"SP", ad:"Saadet Partisi", yil:"2001 –", durum:"faal", aile:2, donem:6,
+     not:"Fazilet'in \"gelenekçi\" kanadı"},
+    {id:"has", kisa:"HAS Parti", ad:"Halkın Sesi Partisi", yil:"2010 – 2012", durum:"katildi", aile:2, donem:6,
+     not:"Saadet'ten ayrılan Kurtulmuş; AK Parti ile bütünleşti"},
+    {id:"ytp02", kisa:"YTP", ad:"Yeni Türkiye Partisi", yil:"2002 – 2004", durum:"katildi", aile:0, donem:6,
+     not:"DSP'den ayrılan 63 vekil, İsmail Cem liderliğinde"},
+    {id:"anadolu", kisa:"Anadolu P.", ad:"Anadolu Partisi", yil:"2014 – 2015", durum:"kapandi", aile:0, donem:6,
+     not:"CHP'den ayrılan Emine Ülker Tarhan"},
+    {id:"dp07", kisa:"DP", ad:"Demokrat Parti", yil:"2007 –", durum:"faal", aile:1, donem:6,
+     not:"DYP'nin ad değişikliği; 2009'da ANAP katıldı"},
+    {id:"dtp", kisa:"DTP", ad:"Demokratik Toplum Partisi", yil:"2005 – 2009", durum:"kapatildi", aile:5, donem:6},
+    {id:"bdp", kisa:"BDP", ad:"Barış ve Demokrasi Partisi", yil:"2008 – 2014", durum:"katildi", aile:5, donem:6,
+     not:"2014'te DBP adını aldı, vekiller HDP'ye geçti"},
+    {id:"hdp", kisa:"HDP", ad:"Halkların Demokratik Partisi", yil:"2012 –", durum:"faal", aile:5, donem:6},
+    {id:"yesilsol", kisa:"YSP", ad:"Yeşil Sol Parti", yil:"2012 – 2023", durum:"katildi", aile:5, donem:6,
+     not:"2023 seçimlerinde HDP'nin listesi oldu"},
+    {id:"vatan", kisa:"Vatan P.", ad:"Vatan Partisi", yil:"2015 –", durum:"faal", aile:4, donem:6,
+     not:"İşçi Partisi'nin ad değişikliği"},
+
+    // --- dönem 7 ---
+    {id:"memleket", kisa:"Memleket P.", ad:"Memleket Partisi", yil:"2021 – 2025", durum:"katildi", aile:0, donem:7,
+     not:"İnce 2025'te CHP'ye döndü; parti kurultay kararıyla kapandı"},
+    {id:"tdp", kisa:"TDP", ad:"Türkiye Değişim Partisi", yil:"2020 – 2023", durum:"katildi", aile:0, donem:7,
+     not:"Mustafa Sarıgül; 2023'te CHP ile birleşti"},
+    {id:"yeniparti", kisa:"Yeni Parti", ad:"Yeni Parti", yil:"2026 –", durum:"faal", aile:0, donem:7,
+     not:"Özel ve 91 vekilin ayrılışı; TBMM'de ana muhalefet"},
+    {id:"yrp", kisa:"YRP", ad:"Yeniden Refah Partisi", yil:"2018 –", durum:"faal", aile:2, donem:7,
+     not:"Saadet'ten ayrılan Erbakan çizgisi"},
+    {id:"gelecek", kisa:"Gelecek P.", ad:"Gelecek Partisi", yil:"2019 – 2026", durum:"kapandi", aile:2, donem:7,
+     not:"AK Parti'den ayrılan Davutoğlu; Temmuz 2026'da feshedildi"},
+    {id:"deva", kisa:"DEVA", ad:"Demokrasi ve Atılım Partisi", yil:"2020 –", durum:"faal", aile:2, donem:7,
+     not:"AK Parti'den ayrılan Babacan"},
+    {id:"yeniyol", kisa:"Yeni Yol", ad:"Yeni Yol Partisi", yil:"2025 –", durum:"faal", aile:2, donem:7,
+     not:"Saadet + Gelecek + DEVA'nın ortak Meclis grubu; partiler ayrı kaldı"},
+    {id:"iyi", kisa:"İYİ Parti", ad:"İyi Parti", yil:"2017 –", durum:"faal", aile:3, donem:7,
+     sembol:"16 ışınlı güneş", not:"MHP'den ayrılan Akşener kanadı"},
+    {id:"zafer", kisa:"Zafer P.", ad:"Zafer Partisi", yil:"2021 –", durum:"faal", aile:3, donem:7,
+     not:"İYİ Parti'den ayrılan Özdağ"},
+    {id:"anahtar", kisa:"A Parti", ad:"Anahtar Parti", yil:"2024 –", durum:"faal", aile:3, donem:7,
+     sembol:"Anahtar", not:"İYİ Parti'den ayrılan Ağıralioğlu; amblemi MSP'yi andırıyor"},
+    {id:"dem", kisa:"DEM Parti", ad:"Halkların Eşitlik ve Demokrasi Partisi", yil:"2023 –", durum:"faal", aile:5, donem:7,
+     not:"Yeşil Sol Parti'nin ad değişikliği"},
+    {id:"tip17", kisa:"TİP", ad:"Türkiye İşçi Partisi", yil:"2017 –", durum:"faal", aile:4, donem:7,
+     not:"Tarihsel TİP adının yeniden kullanımı"}
+  ];
+
+  const E = [
+    ["chp23","tcf","bolunme"], ["chp23","scf","bolunme"],
+    ["chp23","hp83","bolunme"], ["chp23","sodep","bolunme"],
+    ["hp83","shp","katilma"], ["sodep","shp","katilma"],
+    ["chp23","chp92","devam"],
+    ["chp23","gp","bolunme"], ["chp23","cp72","bolunme"],
+    ["gp","cgp","katilma"], ["cp72","cgp","katilma"],
+    ["shp","chp92","katilma"], ["chp23","dsp","bolunme"],
+    ["chp92","memleket","bolunme"], ["memleket","chp92","katilma"],
+    ["chp92","yeniparti","bolunme"], ["shp","hep","bolunme"],
+    ["dsp","ytp02","bolunme"], ["ytp02","chp92","katilma"],
+    ["chp92","anadolu","bolunme"],
+    ["dsp","tdp","bolunme"], ["tdp","chp92","katilma"],
+
+    ["dp46","ap","devam"], ["dp46","ytp","devam"], ["dp46","dp92","devam"],
+    ["dp92","ldp","bolunme"], ["dp92","anap","katilma"],
+    ["shp","ydh","bolunme"], ["tip61","ydh","bolunme"],
+    ["ap","demp70","bolunme"], ["demp70","ap","katilma"],
+    ["ap","dyp","devam"], ["ap","anap","bolunme"],
+    ["dyp","dp07","devam"], ["anap","dp07","katilma"],
+    ["dyp","dtp97","bolunme"],
+
+    ["mnp","msp","devam"], ["msp","rp","devam"], ["rp","fp","devam"],
+    ["fp","sp","devam"], ["fp","akp","bolunme"],
+    ["sp","yrp","bolunme"], ["sp","has","bolunme"], ["has","akp","katilma"],
+    ["akp","gelecek","bolunme"], ["akp","deva","bolunme"],
+    ["sp","yeniyol","katilma"], ["gelecek","yeniyol","katilma"], ["deva","yeniyol","katilma"],
+
+    ["mp48","ckmp","devam"], ["ckmp","mhp69","devam"],
+    ["mhp69","mcp","devam"], ["mcp","mhp93","devam"],
+    ["mhp93","bbp","bolunme"], ["mhp93","iyi","bolunme"], ["iyi","zafer","bolunme"],
+    ["iyi","anahtar","bolunme"],
+
+    ["hep","dep","devam"], ["dep","hadep","devam"], ["hadep","dehap","devam"],
+    ["dehap","dtp","devam"], ["dtp","bdp","devam"], ["bdp","hdp","katilma"],
+    ["yesilsol","dem","devam"], ["hdp","dem","bolunme"],
+
+    ["tkp20","thif","devam"], ["tkp20","tbkp","katilma"], ["tip61","tip75","devam"], ["tip75","tbkp","katilma"],
+    ["tip75","odp","bolunme"], ["tip75","emep","bolunme"],
+    ["tip61","tip17","bolunme"], ["ip92","vatan","devam"]
+  ];
+
+  const ROZET = {
+    kapatildi:["kapatıldı","r-kapatildi"],
+    faal:["faal","r-faal"],
+    katildi:["devredildi","r-katildi"],
+    kapandi:["feshedildi","r-katildi"]
+  };
+  return {AILE, BILGI, DONEMLER, N, E, ROZET};
+})();
```
