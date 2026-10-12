# İnceleme paketi: task-9-d0-fix1 (1727a29..HEAD)

## Commitler
```
4b75726 Dönem 0: eksik kayıtlar için arama turu
550ff0c Düzeltme: ay hassasiyetli tarih desteği ve dönem 0 kaynak eksikleri
```
## Özet
```
 araclar/dogrula.js           |  3 ++
 araclar/kaynak-defteri.md    | 72 ++++++++++++++++++++++++++++++++------------
 araclar/test/dogrula.test.js | 11 +++++++
 araclar/test/ortak.test.js   |  5 +++
 ortak.js                     |  6 ++--
 veri/sandik.js               | 25 +++++++++++++--
 6 files changed, 97 insertions(+), 25 deletions(-)
```
## Fark
```diff
diff --git a/araclar/dogrula.js b/araclar/dogrula.js
index c7d8ee8..8bdb4f9 100644
--- a/araclar/dogrula.js
+++ b/araclar/dogrula.js
@@ -22,20 +22,21 @@ function dogrulaSandik(P, S) {
   const partiDenetle = (id, yer) => { if (id && !partiVar(id)) hatalar.push("bilinmeyen parti: " + id + " (" + yer + ")"); };
 
   // kimlik, sıra, tür
   const idler = new Set();
   S.secimler.forEach((k, i) => {
     if (idler.has(k.id)) hatalar.push("yinelenen kimlik: " + k.id);
     idler.add(k.id);
     if (!TURLER.includes(k.tur)) hatalar.push("bilinmeyen tür: " + k.id + " → " + k.tur);
     if (!/^\d{4}-\d{2}-[a-z-]+$/.test(k.id) || k.id.slice(0, 7) !== k.tarih.slice(0, 7) ||
         k.id.slice(8) !== k.tur) hatalar.push("kimlik tarihle uyuşmuyor: " + k.id);
+    if (!/^\d{4}-\d{2}(-\d{2})?$/.test(k.tarih)) hatalar.push("geçersiz tarih biçimi: " + k.id + " → " + k.tarih);
     if (i > 0 && S.secimler[i - 1].tarih > k.tarih) hatalar.push("secimler tarih sırasında değil: " + k.id);
   });
 
   // satır düzeyi denetimler
   function satirlariDenetle(k, satirlar, gecerli, yer) {
     let toplam = 0, hepsi = true, yuzdeler = [];
     for (const s of satirlar) {
       if (s.parti && s.ad) hatalar.push(k.id + ": satırda hem parti hem ad (" + s.parti + ")");
       partiDenetle(s.parti, k.id);
       if (s.oy != null && s.oyYuzde != null) hatalar.push(k.id + ": aynı satırda oy ve oyYuzde");
@@ -109,20 +110,22 @@ function dogrulaSandik(P, S) {
     say(k); (k.sonuc || []).forEach(say); (k.turlar || []).forEach(t => { say(t); (t.adaylar || []).forEach(say); });
     nullSayisi[anahtar] = (nullSayisi[anahtar] || 0) + n;
   }
   for (const a of Object.keys(nullSayisi)) uyarilar.push("— sayısı: " + a + ": " + nullSayisi[a]);
 
   // hükümetler
   S.hukumetler.forEach((h, i) => {
     if (!TIPLER.includes(h.tip)) hatalar.push("bilinmeyen hükümet tipi: " + h.no + " → " + h.tip);
     if (h.bitisNedeni != null && !BITIS.includes(h.bitisNedeni)) hatalar.push("bilinmeyen bitiş nedeni: " + h.no + " → " + h.bitisNedeni);
     (h.partiler || []).forEach(p => partiDenetle(p, "hükümet " + h.no));
+    if (!/^\d{4}-\d{2}-\d{2}$/.test(h.baslangic) || (h.bitis != null && !/^\d{4}-\d{2}-\d{2}$/.test(h.bitis)))
+      hatalar.push("hükümet tarihi gün dahil olmalı: " + h.no);
     const s = S.hukumetler[i + 1];
     if (!s) return;
     if (h.baslangic > s.baslangic) hatalar.push("hukumetler tarih sırasında değil: " + h.no + " / " + s.no);
     if (h.bitis == null) hatalar.push("bitişi olmayan hükümetten sonra hükümet var: " + h.no);
     else if (h.bitis > s.baslangic) hatalar.push("hükümetler çakışıyor: " + h.no + " / " + s.no);
     else if (gunFarki(h.bitis, s.baslangic) > 1) uyarilar.push("hükümetler arasında boşluk: " + h.no + " → " + s.no);
   });
 
   // yerleşim
   for (const o of M.kronoloji(S).yersiz)
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index 6e46cdf..02e04f5 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -185,24 +185,38 @@ kayıt için ayrı kısa başlık aşağıda.
 - **1923 istisnası:** her iki kaynak da (TÜİK Ek-1 ve Olgun/ATAM Dergisi) yalnızca
   "Haziran–Temmuz 1923" aralığını veriyor, tek gün yok — seçim il il farklı tarihlerde,
   iki dereceli olarak yapıldı (Wikipedia "28 Haziran 1923" diyor ama kural gereği Vikipedi
   kaynak sayılmıyor; bu iddiayı doğrulayan Vikipedi-dışı bir kaynak bulunamadı). Kayıtta
   `tarih:"1923-06-01"` kullanıldı (doğrulanan aralığın ilk ayının ilk günü, biçimsel bir
   yer tutucu) ve `not` alanında bu belirsizlik açıkça belirtildi.
 - Uyuşmazlık: yok (1923 hariç, yukarıda açıklandı).
 - Erişim: 2026-09-11.
 
 ### 1923-06-genel
-- Bkz. yukarıdaki ortak blok. `tarih:"1923-06-01"` — TÜİK Ek-1 ve Olgun/ATAM Dergisi yalnızca
-  "Haziran–Temmuz 1923" aralığını veriyor, tek gün Vikipedi-dışı kaynakla doğrulanamadı; ilk
-  ay/gün yer tutucu olarak kullanıldı, `not` alanında belirtildi. `meclis:287` (TÜİK Tablo 5 +
-  Lüleci 2023 çapraz doğrulaması).
+- Bkz. yukarıdaki ortak blok. **Düzeltme turu 1 (2026-09-12):** `tarih` alanı `"1923-06"` olarak
+  düzeltildi (önceki tur `"1923-06-01"` yazmıştı — kaynakta olmayan, inşa edilmiş bir gündü;
+  kullanıcı kararıyla artık ay hassasiyetli tarih `"YYYY-AA"` biçiminde yazılabiliyor, bkz.
+  `ortak.js#tarihYaz`). TÜİK Ek-1 ve Olgun/ATAM Dergisi yalnızca "Haziran–Temmuz 1923"
+  aralığını veriyor, tek gün Vikipedi-dışı kaynakla doğrulanamadı.
+- **`meclis:287` — ikinci kaynak (Düzeltme turu 1'de bizzat açılıp doğrulandı):**
+  **[İkinci kaynak] TESAV (Toplumsal Ekonomik Siyasal Araştırmalar Vakfı), "TBMM ve
+  Cumhuriyet Dönemlerinde Milletvekili ve Senatör Sayıları"**
+  (`https://www.tesav.org.tr/wp-content/uploads/2020/02/tbmmvecumhuriyetdonemlerindemv.vesenatorsayilari.pdf`,
+  indirilip `pdftotext -layout -enc UTF-8` ile okundu) — tablo satırı: "2. (1923 – 1927) 287"
+  (TBMM'nin 2. Dönemi, 1923 seçimiyle kurulan meclis, 287 milletvekili). TÜİK Tablo 5'teki
+  287 rakamıyla birebir eşleşiyor.
+  Aynı tablo, dönem 0'daki diğer beş tek parti seçiminin `meclis` değerlerini de bağımsız
+  olarak doğruluyor: "3. (1927–1931) 316", "4. (1931–1935) 317", "5. (1935–1939) 399",
+  "6. (1939–1943) 424 + 5(*)" (toplam 429; sayfada (*) dipnotu açıklaması yok ama toplam
+  TÜİK'in 429'uyla eşleşiyor), "7. (1943–1946) 455" — hepsi TÜİK Tablo 5 ve Lüleci (2023) ile
+  üçüncü kez çapraz doğrulanmış oldu.
+- Erişim (düzeltme turu 1): 2026-09-12.
 
 ### 1927-09-genel
 - Bkz. yukarıdaki ortak blok. `tarih:"1927-09-02"` (TÜİK Ek-1; Olgun/ATAM: "milletvekilliği
   seçimi 2-6 Eylül" — TÜİK'in verdiği ilk gün). `meclis:316`.
 
 ### 1931-04-genel
 - Bkz. yukarıdaki ortak blok. `tarih:"1931-04-25"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor:
   "milletvekili seçimi 25 Nisan"). `meclis:317`.
 
 ### 1935-02-genel
@@ -381,36 +395,54 @@ ayrıntı bu blokta, her kayıt için ayrı kısa başlık aşağıda.
   bir envanter olduğunu gösteriyor.
 - **Ülke geneli oy sayısı:** bulunamadı — resmî bir kaynakta 502 seçim çevresinin tam il/ilçe
   tablosu bu görevde erişilemedi, bu yüzden `araclar/topla.js` ile hesaplama da yapılamadı.
   `sonuc: []`, `kayitli`/`kullanilan`/`gecerli`: `null` (spesifikasyon §5.3, 1963 öncesi
   kuralı). İstanbul'a özgü rakam (CHF 35.934, SCF 12.813) `not` alanında bilgi olarak
   aktarıldı; `buyuksehir` alanı yazılmadı (1930'da İstanbul belediye başkanı atamayla
   geliyordu — doğrudan seçim yok, Görev 1'de doğrulanan 1963 kuralı).
 - Uyuşmazlık: yok.
 - Erişim: 2026-09-11.
 
-### 1934, 1938, 1942 belediye seçimleri — envanterde bulundu, kayıt EKLENMEDİ
-- Bulgu: birden çok bağımsız kaynak (Burdur akademik makalesi + Üste 2006 tez başlığı +
-  WebSearch'te tekrarlayan "1934/1938/1942 tek parti dönemi 2., 3. ve 4. yerel seçimler"
-  ifadeleri) bu üç seçimin var olduğunu tutarlı biçimde doğruluyor: 1934 (CHF tek başına,
-  "ikinci yerel seçim"), 1938 (Ekim, "üçüncü"), 1942 (Ekim, "dördüncü", II. Dünya Savaşı
-  gölgesinde).
-- **Sorun:** bu görevde her üçü için de gün/ay düzeyinde kesin tarih, Vikipedi dışı **iki**
-  bağımsız kaynakla doğrulanamadı (yalnızca "1934 yılı" gibi yıl düzeyinde bilgiye ulaşıldı;
-  Ekim ayı iddiaları büyük ölçüde arama sentezlerinde Vikipedi'ye dayanıyordu, kural gereği
-  kullanılmadı). 1580 sayılı Belediye Kanunu'nun metni (Madde 20) yalnızca "dört sene"lik
-  seçim devresini belirtiyor, belirli bir ay şartı koymuyor.
-- Sonuç: `id`/`tarih` alanları için gerekli asgari doğrulama sağlanamadığından bu üç kayıt
-  **`veri/sandik.js`'e eklenmedi**. Kullanıcıya sunulacaklar bölümünde ayrıca belirtildi —
-  ileride ayrı bir araştırma turuyla (TBMM ZC veya dönemin Resmî Gazete/gazete arşivi taraması)
-  tamamlanabilir.
-- Erişim: 2026-09-11.
+### 1934-10-yerel, 1938-10-yerel, 1942-10-yerel
+**Düzeltme turu 1 (2026-09-12) — odaklı arama turu sonucu BULUNDU ve eklendi.** Önceki turda
+(2026-09-11) bu üç seçimin varlığı doğrulanmış ama gün/ay düzeyinde kesin tarih Vikipedi dışı
+iki kaynakla doğrulanamamıştı; kullanıcı kararıyla artık `tarih` alanı `"YYYY-AA"` (ay
+hassasiyetli) yazılabildiğinden bu engel kalktı ve aşağıdaki kaynakla ay düzeyinde tarih
+bulundu.
+
+- **[B] Ayşe (Rabia) Bahar ÜSTE, "Yerel Seçimlerin Cinsiyeti: Seçimler ve Kadın Temsili",
+  *Dokuz Eylül Üniversitesi İşletme Fakültesi Dergisi***
+  (`https://dergipark.org.tr/tr/download/article-file/312360`, `pdftotext -layout -enc UTF-8`
+  ile okundu) — dönemin gazetelerine dayanarak (Cumhuriyet, Ulus, Anadolu, Halkın Sesi,
+  Hakimiyet-i Milliye, Son Posta, Yeni Sabah, Tan; her alıntının gazete adı ve tarihi
+  dipnotlarda) üç seçimin de ülke geneli zaman aralığını veriyor:
+  - **1934:** "Tüm yurtta 2 Ekim 1934 günü başlayan seçimler, çeşitli tarihlerde
+    sonuçlanmış, İzmir seçimleri 10 Ekim 1934 günü bitmiştir." → `tarih:"1934-10"`.
+  - **1938:** "1938 yerel seçimleri tüm yurtta Ekim ayının ilk haftası başlamıştır. Ankara'da
+    29 Eylül 1938 günü başlayan seçimler, 8 Ekim 1938 tarihinde tamamlanmıştır... İstanbul'da
+    seçimler 1 Ekim tarihinde başlamış ve 10 Ekim 1938 tarihinde tamamlanmıştır." →
+    `tarih:"1938-10"` (Ankara'nın 29 Eylül'de başlaması `not` alanında belirtildi).
+  - **1942:** "İstanbul'da seçimler 1 Ekim'de başlamış ve 11 Ekim 1942 tarihinde
+    sonuçlanmıştır." (Ankara ve İzmir için de Eylül sonu-Ekim ortası benzer takvim) →
+    `tarih:"1942-10"`.
+- **İkinci kaynak/çapraz doğrulama (1934 için):** "1934 Yılı Amasya Vilayeti Belediye Meclisi
+  Seçimleri" (dergipark, `egitimvetoplum`, `article/1814471`) — "18 Ekim 1934 tarihli
+  belediye meclisi toplantısında Amasya Belediye Başkanlığına seçildi" ifadesi, meclis
+  üyelerinin bu tarihte zaten göreve başlamış olduğunu, dolayısıyla seçimin Ekim 1934 içinde
+  tamamlandığını doğruluyor.
+- **Ülke geneli oy sayısı hiçbirinde bulunamadı** → `sonuc: []`, `kayitli`/`kullanilan`/
+  `gecerli`: `null` (1930 kaydıyla aynı kural, spesifikasyon §5.3). `buyuksehir` yazılmadı
+  (1963 öncesi kuralı, Görev 1'de doğrulandı).
+- Uyuşmazlık: yok (üç seçim de aynı kaynakta tutarlı; İstanbul'un her yıl 1 Ekim'de
+  başlaması ve 10-11 Ekim'de bitmesi düzenli bir örüntü oluşturuyor, 1930'un 5-18 Ekim'i ile
+  de uyumlu).
+- Erişim: 2026-09-12.
 
 ### hukumet-1
 Bkz. yukarıdaki ortak blok. I. İnönü Hükümeti, 30.10.1923-06.03.1924, tip: tek-parti.
 
 ### hukumet-2
 Bkz. yukarıdaki ortak blok. II. İnönü Hükümeti, 06.03.1924-22.11.1924, tip: tek-parti.
 
 ### hukumet-3
 Bkz. yukarıdaki ortak blok. Okyar Hükümeti (Ali Fethi Okyar), 22.11.1924-03.03.1925,
 tip: tek-parti.
diff --git a/araclar/test/dogrula.test.js b/araclar/test/dogrula.test.js
index 02d02d1..9972374 100644
--- a/araclar/test/dogrula.test.js
+++ b/araclar/test/dogrula.test.js
@@ -103,10 +103,21 @@ test("ittifak listesinden seçilenler liste partisini aşarsa uyarı, — sayıs
 test("soyağacında olmayan ama sandalye kazanan parti uyarılır", () => {
   const S = kopya();
   const k = bul(S, "1999-04-genel");
   k.sonuc.push({ ad: "Sahte Parti", oy: 0, sandalye: 0 });   // sandalyesiz: uyarı yok
   assert.doesNotMatch(uyarilar(S), /Sahte Parti/);
   k.sonuc[k.sonuc.length - 1].sandalye = 1;
   k.meclis = 11;                                               // toplam tutsun, yalnızca uyarı sınansın
   assert.match(uyarilar(S), /soyağacında olmayan ama sandalye kazanan: Sahte Parti \(1999-04-genel\)/);
   assert.doesNotMatch(uyarilar(S), /sandalye kazanan: Bağımsız/);
 });
+
+test("tarih biçimi: ay hassasiyeti kabul, bozuk biçim hata", () => {
+  const S = kopya();
+  bul(S, "1927-09-genel").tarih = "1927-09";          // günü bilinmeyen kayıt
+  assert.doesNotMatch(hatalar(S), /geçersiz tarih biçimi/);
+  bul(S, "1999-04-genel").tarih = "1999-4-18";
+  assert.match(hatalar(S), /geçersiz tarih biçimi: 1999-04-genel/);
+  const T = kopya();
+  T.hukumetler[0].baslangic = "1999-05";
+  assert.match(hatalar(T), /hükümet tarihi gün dahil olmalı: 57/);
+});
diff --git a/araclar/test/ortak.test.js b/araclar/test/ortak.test.js
index 531b7f1..beb8869 100644
--- a/araclar/test/ortak.test.js
+++ b/araclar/test/ortak.test.js
@@ -20,10 +20,15 @@ test("sayiYaz binlik noktayla yazar", () => {
   assert.equal(O.sayiYaz(1234567), "1.234.567");
   assert.equal(O.sayiYaz(null), "—");
 });
 
 test("hashOku yalnızca güvenli kimlikleri kabul eder", () => {
   assert.equal(O.hashOku("#1950-05-genel"), "1950-05-genel");
   assert.equal(O.hashOku("#akp"), "akp");
   assert.equal(O.hashOku("#<img>"), null);
   assert.equal(O.hashOku(""), null);
 });
+
+test("tarihYaz günü bilinmeyen tarihi ay ve yılla yazar", () => {
+  assert.equal(O.tarihYaz("1923-06"), "Haziran 1923");
+  assert.equal(O.tarihYaz("1923-06", true), "Haz 1923");
+});
diff --git a/ortak.js b/ortak.js
index 93d7e05..d5c3c02 100644
--- a/ortak.js
+++ b/ortak.js
@@ -3,23 +3,23 @@
 (function (kok, fabrika) {
   var Ortak = fabrika();
   if (typeof module === "object" && module.exports) module.exports = Ortak;
   else kok.Ortak = Ortak;
 })(typeof window !== "undefined" ? window : this, function () {
   const AYLAR = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz",
                  "Ağustos","Eylül","Ekim","Kasım","Aralık"];
 
   function tarihYaz(iso, kisa) {
     if (!iso) return "—";
-    const [y, a, g] = iso.split("-").map(Number);
-    const ay = kisa ? AYLAR[a - 1].slice(0, 3) : AYLAR[a - 1];
-    return g + " " + ay + " " + y;
+    const p = iso.split("-").map(Number);
+    const ay = kisa ? AYLAR[p[1] - 1].slice(0, 3) : AYLAR[p[1] - 1];
+    return (p.length > 2 ? p[2] + " " : "") + ay + " " + p[0];
   }
   function yuzde(pay, payda) {
     if (pay == null || payda == null || payda === 0) return null;
     return pay / payda * 100;
   }
   function yuzdeYaz(y) {
     return y == null ? "—" : "%" + y.toFixed(1).replace(".", ",");
   }
   function sayiYaz(n) {
     return n == null ? "—" : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
diff --git a/veri/sandik.js b/veri/sandik.js
index 5c0dfb9..222eea6 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -1,22 +1,22 @@
 /* Sandık verisi: seçimler, referandumlar, hükümetler.
    Kurallar: docs/superpowers/specs/2026-09-11-sandik-design.md §5 ve §8.
    Her değerin kaynağı araclar/kaynak-defteri.md'dedir. null = doğrulanamadı (ekranda —). */
 window.SANDIK = {
   secimler: [
     // --- dönem 0 (1923 – 1945) ---
 
     // kaynak: araclar/kaynak-defteri.md#1923-06-genel
-    { id: "1923-06-genel", tur: "genel", tarih: "1923-06-01", tekParti: true,
+    { id: "1923-06-genel", tur: "genel", tarih: "1923-06", tekParti: true,
       meclis: 287, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
       sonuc: [ { parti: "chp23", oy: null, sandalye: 287 } ],
-      not: "Seçim tarihi kaynaklarda yalnızca \"Haziran–Temmuz 1923\" olarak veriliyor (il il farklı günlerde, iki dereceli); gösterilen gün yaklaşıktır." },
+      not: "Seçim il il farklı günlerde ve iki dereceli yapıldı; kaynaklar yalnızca Haziran–Temmuz 1923 aralığını veriyor, tek bir gün yok." },
 
     // kaynak: araclar/kaynak-defteri.md#1923-10-cb-tbmm
     { id: "1923-10-cb-tbmm", tur: "cb-tbmm", tarih: "1923-10-29",
       secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
       not: "Cumhuriyet'in ilanıyla aynı gün, tek aday olarak oybirliğiyle seçildi (158 oy)." },
 
     // kaynak: araclar/kaynak-defteri.md#1927-09-genel
     { id: "1927-09-genel", tur: "genel", tarih: "1927-09-02", tekParti: true,
       meclis: 316, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
       sonuc: [ { parti: "chp23", oy: null, sandalye: 316 } ],
@@ -38,47 +38,68 @@ window.SANDIK = {
     { id: "1931-04-genel", tur: "genel", tarih: "1931-04-25", tekParti: true,
       meclis: 317, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
       sonuc: [ { parti: "chp23", oy: null, sandalye: 317 } ],
       not: "İkinci seçmenler 7–10 Nisan, milletvekilleri 25 Nisan 1931'de seçildi." },
 
     // kaynak: araclar/kaynak-defteri.md#1931-05-cb-tbmm
     { id: "1931-05-cb-tbmm", tur: "cb-tbmm", tarih: "1931-05-04",
       secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
       not: "Atatürk 3. kez, tek aday, oybirliğiyle seçildi (289 oy)." },
 
+    // kaynak: araclar/kaynak-defteri.md#1934-10-yerel
+    { id: "1934-10-yerel", tur: "yerel", tarih: "1934-10",
+      olcu: "belediye-meclisi",
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [],
+      not: "Tek parti döneminin ikinci ülke geneli belediye seçimiydi; ülke geneli oy sayısı bulunamadı." },
+
     // kaynak: araclar/kaynak-defteri.md#1935-02-genel
     { id: "1935-02-genel", tur: "genel", tarih: "1935-02-08", tekParti: true,
       meclis: 399, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
       sonuc: [ { parti: "chp23", oy: null, sandalye: 399 } ],
       not: null },
 
     // kaynak: araclar/kaynak-defteri.md#1935-03-cb-tbmm
     { id: "1935-03-cb-tbmm", tur: "cb-tbmm", tarih: "1935-03-01",
       secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
       not: "Atatürk 4. ve son kez, tek aday, oybirliğiyle seçildi (386 oy)." },
 
+    // kaynak: araclar/kaynak-defteri.md#1938-10-yerel
+    { id: "1938-10-yerel", tur: "yerel", tarih: "1938-10",
+      olcu: "belediye-meclisi",
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [],
+      not: "Tek parti döneminin üçüncü ülke geneli belediye seçimiydi (Ankara 29 Eylül–8 Ekim, İstanbul 1–10 Ekim 1938); ülke geneli oy sayısı bulunamadı." },
+
     // kaynak: araclar/kaynak-defteri.md#1938-11-cb-tbmm
     { id: "1938-11-cb-tbmm", tur: "cb-tbmm", tarih: "1938-11-11",
       secilen: "İsmet İnönü", turSayisi: 1,
       not: "Atatürk'ün 10 Kasım 1938'deki ölümü üzerine olağanüstü toplanan TBMM'de, tek aday, oybirliğiyle seçildi (348 oy)." },
 
     // kaynak: araclar/kaynak-defteri.md#1939-03-genel
     { id: "1939-03-genel", tur: "genel", tarih: "1939-03-26", tekParti: true,
       meclis: 429, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
       sonuc: [ { parti: "chp23", oy: null, sandalye: 429 } ],
       not: null },
 
     // kaynak: araclar/kaynak-defteri.md#1939-04-cb-tbmm
     { id: "1939-04-cb-tbmm", tur: "cb-tbmm", tarih: "1939-04-03",
       secilen: "İsmet İnönü", turSayisi: 1,
       not: "İnönü 2. kez, tek aday, oybirliğiyle seçildi (413 oy)." },
 
+    // kaynak: araclar/kaynak-defteri.md#1942-10-yerel
+    { id: "1942-10-yerel", tur: "yerel", tarih: "1942-10",
+      olcu: "belediye-meclisi",
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [],
+      not: "Tek parti döneminin dördüncü ve son ülke geneli belediye seçimiydi (İstanbul 1–11 Ekim 1942); ülke geneli oy sayısı bulunamadı." },
+
     // kaynak: araclar/kaynak-defteri.md#1943-02-genel
     { id: "1943-02-genel", tur: "genel", tarih: "1943-02-28", tekParti: true,
       meclis: 455, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
       sonuc: [ { parti: "chp23", oy: null, sandalye: 455 } ],
       not: "İkinci Dünya Savaşı'nın en yoğun döneminde yapılan, tek parti döneminin son genel seçimidir." },
 
     // kaynak: araclar/kaynak-defteri.md#1943-03-cb-tbmm
     { id: "1943-03-cb-tbmm", tur: "cb-tbmm", tarih: "1943-03-08",
       secilen: "İsmet İnönü", turSayisi: 1,
       not: "İnönü 3. kez, tek aday, oybirliğiyle seçildi (435 oy)." }
```
