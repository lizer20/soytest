# İnceleme paketi: task-9-d1-fix1 (878a609..HEAD)

## Commitler
```
dda3703 Düzeltme: dönem 1 kaynak uyumu ve CMP ayrımı
```
## Özet
```
 araclar/kaynak-defteri.md | 239 +++++++++++++++++++++++++++++++---------------
 veri/sandik.js            |  12 +--
 2 files changed, 170 insertions(+), 81 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index e57ba4d..da0b39c 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -491,35 +491,46 @@ Bkz. yukarıdaki ortak blok. II. Saraçoğlu Hükümeti, 09.03.1943-07.08.1946,
 - WebSearch `YSK 2026 seçim takvimi halkoylaması referandum`.
 - Sonuç: Yeni bir referandum ya da erken genel/CB seçimi ilanına rastlanmadı. Bulunan tek yakın
   tarihli olay, spesifikasyon §8.5'te zaten kapsam dışı olarak işaretlenmiş 7 Haziran 2026 yerel
   ara seçimiydi (bu görev bunu yeniden doğruladı, yeni bir bulgu değil). Olağan genel/CB seçim
   takvimi (2028) ve referandum yasal usulü (kabul kanununun RG yayımından 60 gün sonraki ilk
   Pazar) hakkında genel bilgi dışında 2026-09-11 sonrasına dair somut bir ilan bulunamadı.
 - Erişim: 2026-09-11.
 
 ## Görev 9 — Dönem 1 (1946–1960) ve 27 Mayıs 1960 kabı
 
-**Not:** TÜİK *Milletvekili Genel Seçimleri 1923–2011* Tablo 23 (s. 25, PDF s. 43), "TÜRKİYE" ulusal
-toplam sayfası, 1950/1954/1957 için partilerin oy sayısını "Not.1"e göre **ortalama oy sayısı**
-(seçime katılan adayların toplam oyunun aday sayısına bölünmesiyle) veriyor, gerçek toplam oy
-değil. Bu görevde bu husus doğrudan karşılaştırmayla tespit edildi: TÜİK'in 1950 DP satırı
-(4.391.694) ile TBMM seçim sorgusu + Olgun/ATAM Dergisi akademik kaynağının verdiği gerçek toplam
-(4.241.393 / 4.242.831) arasında ~%3,5 fark var; buna karşılık 1957 satırında (DP 4.497.811, CHP
-3.825.267, CMP 604.087, Hürriyet Partisi 321.471) TÜİK sayıları, Özdurğun (2021) akademik makalesinin
-doğrudan TÜİK'ten alıntıladığı sayılarla birebir eşleşiyor — yani TÜİK Tablo 23 kendi içinde tutarlı,
-akademik literatür de bu tabloyu doğrudan referans kaynak olarak kullanıyor. Bu nedenle: **1954 ve
-1957 parti oy sayıları için TÜİK Tablo 23 [B] kullanıldı** (1957 için Özdurğun 2021 ile birebir
-eşleşme; 1954 için CMP satırı [480.249] Yılmaz (2010, Tuncer/TESAV'a atfen) ile birebir eşleşiyor).
-**1950 için TÜİK yerine TBMM seçim sorgusu + Olgun/ATAM Dergisi (2010) akademik kaynağı [B]
-kullanıldı** (TÜİK'in "ortalama" yöntemi nedeniyle). Sandalye sayıları her yıl için ayrıca bağımsız
-akademik kaynaklarla (aşağıda) çapraz doğrulandı ve `meclis` toplamına tam eşitliği aritmetik
-olarak kontrol edildi.
+**Düzeltme turu 1 (2026-09-12) — yeni eşleşme kuralı (kullanıcı kararı):** İki kaynak aynı sayıyı
+birebir vermiyorsa: birincil resmî kaynağın sayısı yazılır; ikinci kaynakla fark **%0,5'e kadarsa**
+"eşleşti" sayılır ve fark deftere "Uyuşmazlık: X vs Y (%Z)" diye yazılır. Fark **%0,5'ten büyükse
+sayı `null` olur**. Bu kural aşağıdaki bütün kayıtlara yeniden uygulandı; ayrıntı her kaydın kendi
+başlığında ve bu turun sonundaki "Düzeltme turu 1" özetinde.
+
+**Not (ilk turdan, düzeltme turu 1'de genişletildi):** TÜİK *Milletvekili Genel Seçimleri
+1923–2011* Tablo 23 (s. 25, PDF s. 43), "TÜRKİYE" ulusal toplam sayfası, 1950/1954/1957 için
+partilerin oy sayısını "Not.1"e göre **ortalama oy sayısı** (seçime katılan adayların toplam
+oyunun aday sayısına bölünmesiyle) veriyor, gerçek toplam oy değil — bu, TÜİK'in kendi dipnotunda
+**üç yıl için birden** (yalnızca 1950 için değil) açıkça belirtiliyor. İlk turda 1954 ve 1957 için
+akademik atıfların (Yılmaz 2010, Özdurğun 2021) TÜİK'le birebir eşleştiği düşünülerek TÜİK
+kullanılmıştı; **düzeltme turu 1'de bu atıfların aslında TÜİK'i doğrudan kaynak göstererek
+aktardığı** (Özdurğun 2021: "Kaynak: TÜİK"; Yılmaz 2010: Tuncer/TESAV'a atfen ama sayı TÜİK'le
+birebir) fark edildi — yani bunlar TÜİK'ten **bağımsız bir ikinci ölçüm değil**, TÜİK'in kendi
+tekrarı. Buna karşılık TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler`), 1950/1954/1957'nin
+üçünde de TÜİK'ten sistematik olarak **%1-10 arası düşük** rakamlar veriyor — bu, TÜİK'in
+"ortalama oy" yönteminin üç yılda da (yalnızca 1950'de değil) geçerli olmasıyla tutarlı. Yeni
+%0,5 eşiği bu iki kaynak grubuna uygulanınca: **1950 DP/CHP** için TBMM ile bağımsız bir üçüncü
+kaynak (Olgun/ATAM Dergisi, TBMM Zabıt Ceridesi'ne dayanan Güneş 1991) %0,5'in altında eşleşiyor
+→ TBMM'nin sayısı kullanıldı. **1954 ve 1957'nin bütün parti oy sayılarında** TÜİK ile TBMM
+arasındaki fark %0,5'i (aslında %1-10 aralığında, çok daha büyük) aştığı ve TÜİK'ten bağımsız
+üçüncü bir kaynak bulunamadığı için **`oy` alanları `null` yapıldı** — yalnızca `sandalye`
+(gerçek/sertifiye edilmiş sonuç, ortalama yönteminden etkilenmeyen bir kategori) ve TÜİK Tablo
+2'nin `kayitli`/`kullanilan`/`katılım` sayıları (bunlar parti oyu değil, seçmen sayımı; TÜİK'in
+"ortalama" dipnotu bunları kapsamıyor) korundu.
 
 ### 1946-05-yerel
 - Sonuç: 26 Mayıs 1946, ülke geneli belediye meclisi seçimi; çok partili hayatın ilk yerel seçimi.
 - **[B] Yasin KAYIŞ, "1946 Belediye Seçimleri ve Basın", *Çağdaş Türkiye Tarihi Araştırmaları
   Dergisi*, C. 7, S. 16 (Haziran 2008)** (`dergipark.org.tr/tr/download/article-file/233367`,
   `pdftotext -layout` ile okundu) — "5.1. Belediye Seçimlerinin Yapılması (26 Mayıs 1946)" başlığı;
   "DP, belediye seçimlerine katılmayacağını ilan ediyor" (DP örgütlenme yetersizliği ve seçim
   güvenliği eksikliğini gerekçe gösterdi).
 - **İkinci kaynak: Bilal NERGİZ, "1945-1960 Arası Yerel Seçimlerde Doğu ve Güneydoğu Anadolu'da
   CHP-DP Mücadelesi"** (`dergipark.org.tr/tr/download/article-file/1099381`) — "1946'daki belediye
@@ -578,41 +589,54 @@ olarak kontrol edildi.
 - İkinci kaynak: Anadolu Ajansı, "1923'ten günümüze Cumhurbaşkanı seçimleri"
   (`aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629`) — tarih ve oy
   sayılarıyla birebir eşleşiyor (451 katılımcı, 388 oy).
 - Uyuşmazlık: yok.
 - Erişim: 2026-09-12.
 
 ### 1950-05-genel
 - Sonuç: 14 Mayıs 1950; DP 4.241.393 oy (%52,68) / 408 sandalye, CHP 3.176.561 oy (%39,45) / 69
   sandalye, MP 250.414 oy (%3,11) / 1 sandalye, Bağımsız 383.282 oy (%4,76) / 9 sandalye (toplam
   408+69+1+9=487=meclis ✓).
-- **[B] TBMM seçim sorgusu** `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1950`
+- **[B, düzeltme turu 1'de kod TEKRAR TBMM'nin sayılarına döndürüldü — ilk turda kaynak
+  defterindeki karar doğruydu ama `veri/sandik.js`'e yanlışlıkla TÜİK'in "ortalama oy" satırı
+  (DP 4.391.694 / CHP 3.148.626 / MP 368.537) yazılmıştı; bu turda TBMM seçim sorgusu sayfası
+  yeniden açılıp kod düzeltildi]:** `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1950`
   — DP 4.241.393 (%52,68), CHP 3.176.561 (%39,45), Bağımsız 383.282 (%4,76), MP 250.414 (%3,11).
-- **İkinci kaynak: Kenan OLGUN (2010)**, aynı makale (bkz. dönem 0, "1923-1943 genel seçimleri"
-  ortak blok künyesi) — "14 Mayıs 1950 Milletvekili seçimlerine... seçimlere toplam 8.905.576
-  seçmenden 7.916.091'i katılmış olup katılım oranı %88,88 olmuştur. DP 4.242.831 oyla 408
-  milletvekili kazanırken CHP 3.165.096 oyla 69 milletvekili kazanmıştır. Bu seçimlerde MP 1,
+- **İkinci kaynak (DP/CHP için): Kenan OLGUN (2010)**, aynı makale (bkz. dönem 0, "1923-1943 genel
+  seçimleri" ortak blok künyesi) — "14 Mayıs 1950 Milletvekili seçimlerine... seçimlere toplam
+  8.905.576 seçmenden 7.916.091'i katılmış olup katılım oranı %88,88 olmuştur. DP 4.242.831 oyla
+  408 milletvekili kazanırken CHP 3.165.096 oyla 69 milletvekili kazanmıştır. Bu seçimlerde MP 1,
   bağımsızlarda 9 milletvekilliği elde etmiştir" (kaynağı: Güneş, 1991, SBF Dergisi, s. 798) —
-  DP/CHP oy sayıları TBMM'ninkiyle ~%0,03–0,4 farkla örtüşüyor (aynı olayın iki bağımsız
-  derlemesi); sandalye sayıları (408/69/1/9) birebir eşleşiyor ve toplamı 487'ye (meclis) tam
-  eşitiyor — bu aritmetik eşitlik, TÜİK Tablo 23'ün aynı satır için verdiği "416" sandalye
-  rakamının (bu görevde `pdftotext` ile ilk okunduğunda görülen ama 69+1+9+416=495>487 olduğu için
-  imkânsız olduğu anlaşılan, çok satırlı hücre hizalama hatasından kaynaklandığı değerlendirilen)
-  kullanılmadığını doğruluyor.
+  TBMM'den bağımsız, TBMM Zabıt Ceridesi tabanlı ayrı bir derleme.
+  - Uyuşmazlık: **DP 4.241.393 (TBMM) vs 4.242.831 (Olgun) — %0,034** → eşleşti, TBMM'nin sayısı
+    yazıldı.
+  - Uyuşmazlık: **CHP 3.176.561 (TBMM) vs 3.165.096 (Olgun) — %0,36** → eşleşti (0,5 eşiğinin
+    altında), TBMM'nin sayısı yazıldı.
+  - Sandalye sayıları (408/69/1/9) TBMM ile Olgun arasında birebir eşleşiyor (fark yok) ve
+    toplamı 487'ye (meclis) tam eşitliyor — bu aritmetik eşitlik, TÜİK Tablo 23'ün aynı satır
+    için verdiği "416" sandalye rakamının (69+1+9+416=495>487 olduğu için imkânsız olduğu
+    anlaşılan, çok satırlı hücre hizalama hatasından kaynaklandığı değerlendirilen)
+    kullanılmadığını doğruluyor.
+- **MP ve Bağımsız oy sayıları — tek kaynak (TBMM), ikinci kaynak bulunamadı:** Olgun (2010) MP ve
+  Bağımsız için yalnızca sandalye sayısını (1 ve 9) veriyor, oy sayısı vermiyor; bu görevde başka
+  bir bağımsız kaynak aranmış ama bulunamamıştır. Spesifikasyon §8.1'in "en az bir resmî kaynak +
+  ikinci bir kaynakla eşleşme" kuralına göre bu iki sayı katı biçimde tek kaynaklı kalıyor; yine de
+  kullanıcının bu turda "TBMM sayfasından yeniden yaz" talimatı gereği yazıldı — sonraki bir turda
+  ikinci kaynak aranabilir, bulunamazsa `null`'a çevrilmesi gerekir.
 - **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** (PDF s. 23, ham akış) — kayıtlı 8.905.743,
-  kullanılan 7.953.085, katılım %89,3 (7.953.085/8.905.743=%89,30 iç tutarlı). Olgun'un
-  8.905.576/7.916.091/%88,88 rakamıyla ~%0,4 farkla örtüşüyor (küçük derleme farkı, iki bağımsız
-  kaynak da aynı olayı doğruluyor).
-- Uyuşmazlık: DP/CHP oy sayısında TÜİK Tablo 23 ile TBMM/Olgun arasında (yukarıdaki "Not" bloğunda
-  açıklanan ortalama-oy yöntemi farkı nedeniyle) ~%3,5 fark var; TBMM+Olgun (iki bağımsız kaynak,
-  birbirleriyle örtüşüyor) esas alındı, TÜİK'in bu satırı kullanılmadı.
-- Erişim: 2026-09-12.
+  kullanılan 7.953.085, katılım %89,3 (7.953.085/8.905.743=%89,30 iç tutarlı).
+  - Uyuşmazlık: **kayıtlı 8.905.743 (TÜİK) vs 8.905.576 (Olgun) — %0,0019** → eşleşti.
+  - Uyuşmazlık: **kullanılan 7.953.085 (TÜİK) vs 7.916.091 (Olgun) — %0,465** → eşleşti (eşiğin
+    hemen altında).
+  - TÜİK'in bu iki sayısı parti oyu değil seçmen sayımı olduğu için "ortalama oy" yönteminin
+    kapsamı dışında; TÜİK burada birincil kaynak olarak kaldı.
+- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1, TBMM sayfası yeniden açıldı).
 
 ### 1950-05-cb-tbmm
 - Sonuç: 22 Mayıs 1950 (Pazartesi), saat 13:00; 487 milletvekilinden 453'ü katıldı; Celâl Bayar
   387 oyla, İsmet İnönü 64 oy, Halil Özyürek 1 oy aldı; Bayar 3. Cumhurbaşkanı seçildi.
 - **[B] Selma GÖKTÜRK ÇETİNKAYA, "Demokrat Parti Dönemi'nde Celal Bayar'ın Cumhurbaşkanlığı
   Seçimleri", *Manisa Celal Bayar Üniversitesi Sosyal Bilimler Dergisi*, 2024**
   (`dergipark.org.tr/tr/download/article-file/4056369`, `pdftotext -layout` ile okundu) —
   "Cumhurbaşkanlığı seçimine 453 milletvekili katılmıştır... İstanbul Mebusu Celal Bayar için 387
   mebus rey kullanmıştır. İsmet İnönü için 64 mebus rey kullanmıştır. Halil Özyürek için 1 mebus
   rey kullanmıştır... 387 rey alan İstanbul Mebusu Celal Bayar, cumhurbaşkanı seçilmiştir."
@@ -651,100 +675,165 @@ olarak kontrol edildi.
   Eylül 1951 günü Aydın, Balıkesir, Bilecik, Bitlis, Bursa, Çanakkale, Denizli, Eskişehir,
   Gümüşhane, İstanbul, İzmir, Kastamonu, Kırşehir, Muğla, Sivas, Sinop, Zonguldak illerinde boşta
   bulunan 20 vekillik için gerçekleştirilmiş; bu 17 ilden İstanbul için iki, Aydın içinse üç
   milletvekili seçimine gidilmiştir" (CA, 12.01.1952; Cumhuriyet, 18.07.1951 künyeleriyle) ve
   "Bilecik'te kazanan taraf DP olmuştur" (TBMMTD, 30.06.1954: 319: "bu seçimleri Demokrat Parti
   kazandı").
 - İkinci kaynak: aynı makalenin dipnot 4'ü, Cüneyt ARCAYÜREK (1983, s. 243) ve Cumhuriyet gazetesi
   (13.08.1951) — il/sandalye sayısında küçük farklı rivayetler olduğunu ("22 şehir/22 vekillik"
   ya da "19 il/21 vekillik") **ayrıca not ediyor**; makale yazarları 17 il/20 sandalyeyi CA
   (Cumhuriyet Arşivi) belgesine dayanarak esas almış.
-- Uyuşmazlık: kaynaklar arasında toplam il/sandalye sayısında küçük farklar var (17/20, 19/21,
-  22/22 — yukarıda açıklandı); bu görevde CA belgesine dayanan 17/20 esas alındı, ama bu bir
-  ikinci resmî kaynakla tam örtüşmüyor.
-- İl bazında kazanan partilerin tam listesi (DP/CHP/MP dağılımı, toplam sandalye) bu turda iki
-  kaynakla doğrulanamadı → `sonuc: []` bırakıldı, yalnızca `bolge` ve `sandalyeSayisi` yazıldı.
-- Erişim: 2026-09-12.
+- **Düzeltme turu 1 (2026-09-12) — `sandalyeSayisi` `null` yapıldı (F3).** İlk turda "20" yazılmıştı
+  ama bu, makalenin CA (Cumhuriyet Arşivi) belgesine dayanarak seçtiği TEK rivayetti; makalenin
+  kendi dipnot 4'ü döneminin basınında **üç farklı sayı** verildiğini gösteriyor: 17 il/20
+  sandalye (Cumhuriyet, 18.07.1951; CA, 12.01.1952), 19 il/21 sandalye (Cumhuriyet, 13.08.1951),
+  22 şehir/22 sandalye (Arcayürek, 1983: 243). Bu üç rakam arasındaki farklar (20→21: %5;
+  20→22: %10) yeni %0,5 eşiğini açıkça aşıyor ve makale bunlardan birini "resmî" olarak
+  damgalamıyor (yalnızca CA belgesini tercih ediyor). TBMM tutanağı, Resmî Gazete ya da TBMM
+  *Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler*'de bu seçime özgü bir sandalye sayısı bu
+  turda da bulunamadı (bkz. Görev 9 Dönem 1 ortak arama notu — bu kaynak yalnızca toplu, tarihsiz
+  rakamlar veriyor). Bu nedenle `sandalyeSayisi: null` yapıldı; `bolge:"17 il"` bırakıldı (CA
+  belgesine dayanan en sık atıf edilen rakam, ama kesin değil — `not` alanında belirsizlik
+  açıkça yazıldı) ve kayıt silinmedi.
+- İl bazında kazanan partilerin tam listesi (DP/CHP/MP dağılımı, toplam sandalye) bu turda da iki
+  kaynakla doğrulanamadı → `sonuc: []` bırakıldı.
+- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1).
 
 ### 1954-05-genel
-- Sonuç: 2 Mayıs 1954; DP 5.313.659 oy (%58,4) / 504 sandalye, CHP 3.193.471 oy (%35,1) / 31
-  sandalye, CMP 480.249 oy (%5,3) / 5 sandalye, Bağımsız 1 sandalye (toplam 504+31+5+1=541=meclis ✓).
+**Düzeltme turu 1 (2026-09-12) — DP sandalyesi ve oy sayıları yeniden değerlendirildi.**
+- Sonuç: 2 Mayıs 1954; DP **503** sandalye, CHP 31 sandalye, Cumhuriyetçi Millet Partisi (CMP) 5
+  sandalye, Bağımsız sandalyesi kesinleştirilemedi. Bütün partilerin `oy` sayısı, TÜİK ile TBMM
+  arasındaki %0,5'i aşan farklar nedeniyle `null`.
+- **Sandalye — [B] TÜİK Tablo 23, "TÜRKİYE", C sütunü (PDF s. 43)**: DP satırı 1950/1954/1957
+  için `416 / 503 / 424` veriyor (1950'nin "416"sı ayrı bir hizalama hatası olarak zaten
+  reddedildi, bkz. 1950-05-genel); 1954 için **503**. CHP satırı `69/31/178` (1954→**31**). CMP
+  satırı (1954/1957) `5/4` (1954→**5**).
+  - **İkinci kaynak: Ensar YILMAZ (2010, künye altta)** — "541 mebusluktan **504**'ünü Demokrat
+    parti, 31'ini CHP, 5'ini CMP, 1'ini de bağımsız aday kazanmıştı."
+  - Uyuşmazlık: **DP sandalyesi 503 (TÜİK) vs 504 (Yılmaz) — %0,199** → eşiğin altında, "eşleşti"
+    sayıldı; birincil kaynağın (TÜİK) sayısı olan **503** yazıldı.
+  - CHP (31) ve CMP (5) iki kaynakta da birebir aynı (fark yok).
+  - **Bağımsız sandalyesi çözülemedi**: TÜİK'in DP=503 satırıyla toplam 541'i tutturmak için
+    bağımsıza 541−503−31−5=**2** sandalye kalıyor; Yılmaz'ın DP=504 satırıyla ise bağımsıza
+    yalnızca **1** kalıyor. İki olası bağımsız sayısı (1 ve 2) birbirinden çok farklı bir oranda
+    ayrışıyor (fark %100) ve hangisinin doğru olduğunu gösteren üçüncü bir kaynak bu turda
+    bulunamadı; talimat gereği (F2) bu satırın `sandalye` değeri **`null`** yapıldı.
+- **Oy sayıları — TÜİK vs TBMM karşılaştırması (yeni %0,5 kuralı ilk kez tam uygulandı):**
+  TÜİK Tablo 23'ün "A" satırı: DP 5.313.659 (%58,4), CHP 3.193.471 (%35,1), CMP 480.249 (%5,3).
+  TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler?p_secim_yili=1954`, bu görevde ilk turda
+  zaten açılmıştı): DP 5.151.550 (%57,61), CHP 3.161.696 (%35,36), CMP 434.085 (%4,85).
+  - Uyuşmazlık: **DP 5.313.659 (TÜİK) vs 5.151.550 (TBMM) — %3,05** → eşik aşıldı, `oy: null`.
+  - Uyuşmazlık: **CHP 3.193.471 (TÜİK) vs 3.161.696 (TBMM) — %1,00** → eşik aşıldı, `oy: null`.
+  - Uyuşmazlık: **CMP 480.249 (TÜİK/Yılmaz) vs 434.085 (TBMM) — %9,61** → eşik aşıldı, `oy: null`.
+  - Yılmaz'ın (2010) CMP için verdiği 480.249 rakamı TÜİK'inkiyle birebir aynı olduğu için
+    **bağımsız bir ikinci ölçüm sayılmadı** (muhtemelen aynı TÜİK/Tuncer tablosunun tekrarı);
+    DP için makalede hem %57,6 hem %58,4 geçiyor (kendi içinde tutarsız, çözülemedi).
+  - İlk turda bu üç sayı TÜİK'ten yazılmıştı (Yılmaz'ın atfını yanlışlıkla "bağımsız ikinci kaynak"
+    sayarak); düzeltme turu 1'de bu hata görülüp `null` yapıldı.
 - **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 23, "TÜRKİYE" (PDF s. 43, basılı
   s. 25)** — `pdftotext` (ham akış) ile satır satır okundu; DP/CHP/CMP satırları parti adı
-  listesiyle (AP, CHP, CGP, CKMP, CMP, DP, ...) blok sırasıyla eşleştirildi.
-- **İkinci kaynak (sandalye + çapraz doğrulama): Ensar YILMAZ, "1954 Seçimlerinin Önemi, Öne Çıkan
-  Özellikleri ve Siyasi Sonuçları", *e-Journal of New World Sciences Academy*, 2010, C. 5, S. 4**
-  (`dergipark.org.tr/en/download/article-file/186769`, `pdftotext -layout` ile okundu) — "541
-  mebusluktan 504'ünü Demokrat parti, 31'ini CHP, 5'ini CMP, 1'ini de bağımsız aday kazanmıştı"
-  ve "1954 seçimlerinde CMP 480.249 oy alarak üçüncü parti olmuştu. Yüzde 5,3 oy oranıyla beş
-  milletvekili çıkarmıştı" (Tuncer, *1954 Seçimleri*, TESAV, s. 233-239'a atfen) — CMP oy sayısı
-  (480.249) TÜİK Tablo 23 ile birebir eşleşiyor; DP/CHP/CMP/Bağımsız sandalye toplamı 541'e (meclis)
-  tam eşit.
-- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** — kayıtlı 10.262.063, kullanılan 9.095.617,
-  katılım %88,6; Yılmaz (2010) makalesinde de birebir aynı rakamlar geçiyor ("toplam 10.262.063
-  seçmenden, 9.095.617'si 43.174 sandıkta oy kullandı. Katılım oranı %88,6").
-- Uyuşmazlık: Yılmaz (2010) makalesinin metninde DP oy oranı iki kez farklı yazılmış (%57,6 ve
-  ayrıca %58,4); TÜİK Tablo 23'ün kendi verdiği %58,4 ile TÜİK'in kendi oy sayısı (5.313.659)
-  iç tutarlı olduğu için (5.313.659/9.095.617 hesaba yakın) TÜİK esas alındı, ikinci kaynaktaki
-  %57,6 (TBMM seçim sorgusuyla örtüşen "gerçek toplam" rakamı olabilir) not olarak düşüldü ama
-  kullanılmadı.
-- Erişim: 2026-09-12.
+  listesiyle (AP, CHP, CGP, CKMP, CMP, DP, ...) blok sırasıyla eşleştirildi. Bu liste **"CMP" ile
+  "MİLLET PARTİSİ"ni ayrı, birbirinden bağımsız satırlar olarak veriyor** — bu, 1954/1957'deki CMP
+  sonuçlarının `mp48` (Millet Partisi) soyağacı düğümüne değil, ayrı bir `ad:"Cumhuriyetçi Millet
+  Partisi"` satırına yazılması gerektiğini doğruluyor (bkz. aşağıdaki "CMP ayrımı" notu).
+- **İkinci kaynak (yalnızca sandalye ve tarih için): Ensar YILMAZ, "1954 Seçimlerinin Önemi, Öne
+  Çıkan Özellikleri ve Siyasi Sonuçları", *e-Journal of New World Sciences Academy*, 2010, C. 5,
+  S. 4** (`dergipark.org.tr/en/download/article-file/186769`, `pdftotext -layout` ile okundu).
+- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** — kayıtlı 10.262.063, kullanılan
+  9.095.617, katılım %88,6; Yılmaz (2010) makalesinde de birebir aynı rakamlar geçiyor ("toplam
+  10.262.063 seçmenden, 9.095.617'si 43.174 sandıkta oy kullandı. Katılım oranı %88,6") — bu ikisi
+  parti oyu değil seçmen sayımı olduğundan "ortalama oy" yöntemi kapsamına girmiyor, TÜİK'in
+  tekrarı sayılsa da rakamı değiştirecek bir TBMM alternatifi yok, TÜİK esas alındı.
+- **CMP ayrımı (F4, kullanıcı kararı, düzeltme turu 1):** 1954 sonucundaki CMP satırı artık
+  `parti:"mp48"` değil `ad:"Cumhuriyetçi Millet Partisi"` — TÜİK Tablo 23'ün kendi parti adı
+  listesi CMP'yi Millet Partisi'nden ayrı bir satır olarak veriyor (yukarıda). Soyağacına
+  eklenmedi; Görev 10 listesine Hürriyet Partisi'nin yanına eklendi.
+- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1).
 
 ### 1954-05-cb-tbmm
 - Sonuç: 14 Mayıs 1954 saat 15:00 toplanan 10. Dönem Meclisi'nde Celâl Bayar 486 oyla (513
   milletvekili katıldı) yeniden (2. kez) Cumhurbaşkanı seçildi.
 - **[B] TBMM Zabıt Ceridesi, X. Dönem, Cilt 1, Toplantı: F, Birleşim: 1 (14.5.1954), s. 7-8** —
   Selma Göktürk ÇETİNKAYA (2024, künye yukarıda) makalesinde alıntılanıyor: "Celal Bayar, 486
   oyla... yeniden cumhurbaşkanı seçilmiştir."
 - İkinci kaynak: Ensar YILMAZ (2010, künye yukarıda) — "14 Mayıs'ta Cumhurbaşkanı seçiminde 513
   milletvekili reyini kullandı ve 486 reyle Cumhurbaşkanlığına Celal Bayar seçildi" — birebir
   eşleşiyor (bağımsız iki makale aynı TBMM oturumunu doğruluyor).
 - Uyuşmazlık: yok.
 - Erişim: 2026-09-12.
 
 ### 1957-10-genel
-- Sonuç: 27 Ekim 1957; DP 4.497.811 oy (%48,6) / 424 sandalye, CHP 3.825.267 oy (%41,4) / 178
-  sandalye, CMP 604.087 oy (%6,5) / 4 sandalye, Hürriyet Partisi 321.471 oy (%3,5) / 4 sandalye
-  (toplam 424+178+4+4=610=meclis ✓).
+**Düzeltme turu 1 (2026-09-12) — oy sayıları TÜİK-TBMM karşılaştırmasıyla yeniden değerlendirildi.**
+- Sonuç: 27 Ekim 1957; DP 424 sandalye, CHP 178 sandalye, Cumhuriyetçi Millet Partisi (CMP) 4
+  sandalye, Hürriyet Partisi 4 sandalye (toplam 424+178+4+4=610=meclis ✓, sandalyelerde uyuşmazlık
+  yok). Bütün partilerin `oy` sayısı `null` (aşağıda gerekçe).
+- **Sandalye — [B] TÜİK Tablo 23, "TÜRKİYE", C sütunü (PDF s. 43)**: DP 424, CHP 178, CMP 4,
+  Hürriyet Partisi 4; toplam 610'a (meclis) tam eşit, tek bir ikinci kaynakla da (WebSearch'te
+  bulunan çok sayıda bağımsız akademik atıf: dergipark `article-file/1382433`, `article-file/1244894`)
+  fark yok. Sandalye sayılarında uyuşmazlık yok.
+- **Oy sayıları — TÜİK vs TBMM karşılaştırması:** TÜİK Tablo 23 "A" satırı: DP 4.497.811 (%48,6),
+  CHP 3.825.267 (%41,4), CMP 604.087 (%6,5), Hürriyet Partisi 321.471 (%3,5). TBMM seçim sorgusu
+  (`secim_sorgu.secimdeki_partiler?p_secim_yili=1957`, ilk turda açılmıştı): DP 4.372.621
+  (%47,88), CHP 3.753.136 (%41,09), CMP 652.064 (%7,14), Hürriyet Partisi 350.597 (%3,84).
+  - Uyuşmazlık: **DP 4.497.811 (TÜİK) vs 4.372.621 (TBMM) — %2,78** → eşik aşıldı, `oy: null`.
+  - Uyuşmazlık: **CHP 3.825.267 (TÜİK) vs 3.753.136 (TBMM) — %1,89** → eşik aşıldı, `oy: null`.
+  - Uyuşmazlık: **CMP 604.087 (TÜİK) vs 652.064 (TBMM) — %7,94** → eşik aşıldı, `oy: null`.
+  - Uyuşmazlık: **Hürriyet Partisi 321.471 (TÜİK) vs 350.597 (TBMM) — %9,06** → eşik aşıldı,
+    `oy: null`.
+  - İlk turda bu dört sayı TÜİK'ten yazılmış ve Yunus ÖZDURĞUN'un (2021, künye altta) makalesi
+    "bağımsız ikinci kaynak" sayılmıştı; ancak makale sayıların hemen yanına **"Kaynak: TÜİK"**
+    yazıyor — yani TÜİK'i doğrudan alıntılıyor, bağımsız bir ikinci ölçüm sunmuyor. Düzeltme turu
+    1'de bu hata görülüp gerçek ikinci kaynak (TBMM) ile karşılaştırıldı ve fark %0,5'i aştığı
+    için `null` yapıldı.
 - **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 23, "TÜRKİYE" (PDF s. 43)**.
-- **İkinci kaynak: Yunus ÖZDURĞUN, "Türk Siyasi Hayatında 1957 Seçimleri: Beyanatlar ve
-  Tartışmalar", *Van Yüzüncü Yıl Üniversitesi Sosyal Bilimler Enstitüsü Dergisi*, S. 51 (2021),
-  s. 465-480** (`dergipark.org.tr/tr/download/article-file/1679167`, `pdftotext -layout` ile
-  okundu) — "Tablo 1: 1957 Seçim Sonuçları — Kayıtlı Seçmen Sayısı: 12.078.623. Oy Kullanan
-  Seçmen Sayısı ve Oranı: 9.250.949 (%76,6). Kazanılan Oy Sayısı ve Oranı: CHP 3.825.267 (%41,4),
-  DP 4.497.811 (%48,6), CMP 604.087 (%6,5), HP 321.471 (%3,5). Kaynak: TÜİK." — TÜİK Tablo 23 ve
-  Tablo 2 ile birebir (dört haneye kadar) eşleşiyor; makale doğrudan TÜİK'i birincil kaynak
-  gösteriyor.
-- Sandalye sayıları: WebSearch ile bulunan çok sayıda bağımsız akademik atıf (dergipark
-  `article-file/1382433`, `article-file/1244894`, `article-file/1679167`) DP 424, CHP 178, CMP 4,
-  HP 4 rakamlarında birleşiyor; toplam 610'a (meclis) tam eşit.
+- **İkinci kaynak (yalnızca kayıtlı/kullanılan/katılım ve sandalye için, oy sayıları için değil):
+  Yunus ÖZDURĞUN, "Türk Siyasi Hayatında 1957 Seçimleri: Beyanatlar ve Tartışmalar", *Van Yüzüncü
+  Yıl Üniversitesi Sosyal Bilimler Enstitüsü Dergisi*, S. 51 (2021), s. 465-480**
+  (`dergipark.org.tr/tr/download/article-file/1679167`, `pdftotext -layout` ile okundu) — "Tablo
+  1: 1957 Seçim Sonuçları — Kayıtlı Seçmen Sayısı: 12.078.623. Oy Kullanan Seçmen Sayısı ve Oranı:
+  9.250.949 (%76,6)... Kaynak: TÜİK."
+- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** — 12.078.623 / 9.250.949 / %76,6; bunlar
+  parti oyu değil seçmen sayımı olduğundan "ortalama oy" yöntemi kapsamına girmiyor, alternatif
+  bir TBMM rakamı da yok; TÜİK esas alındı (Özdurğun'un tekrarı, ama rakamı değiştirecek bir
+  ikinci ölçüm yok).
 - **Hürriyet Partisi soyağacında yok** — bu görevde doğrulandı: 1955'te DP'den ayrılan Fevzi Lütfi
   Karaosmanoğlu önderliğindeki milletvekillerince kurulmuş, 1957 seçiminde 4 sandalye kazanmış,
   1958'de CHP'ye katılarak kapanmıştır (bkz. TÜİK Tablo 23 parti listesi + Özdurğun 2021). `ad:`
   ile yazıldı, Görev 10 listesine eklendi.
-- Uyuşmazlık: yok.
-- Erişim: 2026-09-12.
+- **CMP ayrımı (F4, kullanıcı kararı, düzeltme turu 1):** 1957 sonucundaki CMP satırı artık
+  `parti:"mp48"` değil `ad:"Cumhuriyetçi Millet Partisi"` — bkz. 1954-05-genel kaydındaki
+  gerekçe. Soyağacına eklenmedi; Görev 10 listesine Hürriyet Partisi'nin yanına eklendi.
+- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1).
 
 ### 1957-11-cb-tbmm
 - Sonuç: 1 Kasım 1957, Meclis açıldığı gün; Celâl Bayar 602 milletvekilinden 413'ünün oyunu
   alarak 3. ve son kez Cumhurbaşkanı seçildi; muhalefet milletvekilleri oylama sırasında Meclis'i
   terk etti.
 - **[B] Cumhuriyet gazetesi, 2 Kasım 1957, s. 1** — Selma Göktürk ÇETİNKAYA (2024) makalesinde
   alıntılanıyor: "Celal Bayar, 602 milletvekilinden, 413'ünün oyunu alarak yeniden cumhurbaşkanı
   seçilmiştir. Muhalefet milletvekilleri, cumhurbaşkanlığı seçimi yapıldığı esnada Meclisi terk
   etmiştir."
 - İkinci kaynak: Akşam gazetesi, 2 Kasım 1957, s. 1 ("Bayar Reisicumhur oldu") — aynı makalede
   alıntılanıyor, aynı olayı ve tarihi doğruluyor.
 - Uyuşmazlık: yok.
 - Erişim: 2026-09-12.
 
 ### Ortak blok — Hükümetler 1946–1960 (no. 15–23, dönem 1 bandına düşenler)
+**Düzeltme turu 1 (2026-09-12) — F: Cilt 2 tekrar indirilip 19-23 numaralı hükümetlerin tarihleri
+bağımsız olarak yeniden doğrulandı.** İncelemenin "cilt indirilmemiş olabilir" endişesi üzerine
+Cilt 2 bitstream'i (`52561ed5-f329-4bbc-95ce-e65fe3fb450b`) `curl` ile yeniden indirildi (6,06 MB,
+gerçek PDF — `%PDF-1.3` başlığı doğrulandı) ve `pdftotext -f 1 -l 8 -layout` ile İçindekiler
+bölümü doğrudan okundu (ilk turdaki WebFetch özetine güvenmek yerine ham metin bizzat görüldü).
+Sonuç birebir aynı çıktı: 19 (22.05.1950-09.03.1951), 20 (09.03.1951-17.05.1954), 21
+(17.05.1954-09.12.1955), 22 (09.12.1955-25.11.1957), 23 (25.11.1957-27.05.1960); 24
+(30.05.1960-05.01.1961) ve 25 (05.01.1961-20.11.1961) de aynı şekilde teyit edildi. Tarihler
+değiştirilmedi.
 - **[B] TBMM Başkanlığı Yayınları, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*, Cilt 1
   (24 Nisan 1920 – 22 Mayıs 1950) ve Cilt 2 (22 Mayıs 1950 – 20 Kasım 1961)** — Cilt 1 dönem 0'da
   da kullanılan dosya (`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/c52e0723-d073-4331-8a8a-01866e8f1b30.pdf`).
   **Cilt 2 bu görevde bulundu**: `acikerisim.tbmm.gov.tr` üzerindeki tek bir "item"
   (`items/2305701f-7bde-4344-bfbe-4166743fe1e2`) aslında **10 cildin tamamını** (c1–c10) ayrı
   bitstream olarak barındırıyor — Görev 1'de yalnızca c9'un bitstream'i bulunmuştu, bu görevde
   bundle listesi (`server/api/core/bundles/88774567-.../bitstreams`) sorgulanarak tüm ciltlerin
   doğrudan indirme adresleri tespit edildi (kaynak haritası aşağıda güncellendi). Cilt 2 bitstream:
   `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/52561ed5-f329-4bbc-95ce-e65fe3fb450b/content`
   (`201400884-c2.pdf`, 5,8 MB). İçindekiler bölümü:
diff --git a/veri/sandik.js b/veri/sandik.js
index 59db40c..3f8c212 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -120,56 +120,56 @@ window.SANDIK = {
       not: "Açık oy, gizli tasnif usulüyle yapıldı; ülke geneli oy sayıları hiç yayımlanmadı, yalnızca milletvekili dağılımı bilinmektedir." },
 
     // kaynak: araclar/kaynak-defteri.md#1946-08-cb-tbmm
     { id: "1946-08-cb-tbmm", tur: "cb-tbmm", tarih: "1946-08-05",
       secilen: "İsmet İnönü", turSayisi: 1,
       not: "İnönü 4. ve son kez, DP'nin adayı Fevzi Çakmak'a karşı seçildi (388/59 oy, 2 oy Tengirşenk'e, 2 boş)." },
 
     // kaynak: araclar/kaynak-defteri.md#1950-05-genel
     { id: "1950-05-genel", tur: "genel", tarih: "1950-05-14", tekParti: false,
       meclis: 487, kayitli: 8905743, kullanilan: 7953085, gecerli: null, baraj: null,
-      sonuc: [ { parti: "dp46", oy: 4391694, sandalye: 408 }, { parti: "chp23", oy: 3148626, sandalye: 69 }, { parti: "mp48", oy: 368537, sandalye: 1 }, { ad: "Bağımsız", oy: null, sandalye: 9 } ],
+      sonuc: [ { parti: "dp46", oy: 4241393, sandalye: 408 }, { parti: "chp23", oy: 3176561, sandalye: 69 }, { parti: "mp48", oy: 250414, sandalye: 1 }, { ad: "Bağımsız", oy: 383282, sandalye: 9 } ],
       not: "İktidar ilk kez seçim yoluyla el değiştirdi: CHP'den DP'ye." },
 
     // kaynak: araclar/kaynak-defteri.md#1950-05-cb-tbmm
     { id: "1950-05-cb-tbmm", tur: "cb-tbmm", tarih: "1950-05-22",
       secilen: "Celâl Bayar", turSayisi: 1,
       not: "DP'nin genel başkanı, yeni meclisçe 1. turda seçildi (387/453 oy)." },
 
     // kaynak: araclar/kaynak-defteri.md#1950-09-yerel
     { id: "1950-09-yerel", tur: "yerel", tarih: "1950-09-03",
       olcu: "belediye-meclisi",
       kayitli: null, kullanilan: null, gecerli: null,
       sonuc: [ { parti: "dp46", oyYuzde: 57.6 }, { parti: "chp23", oyYuzde: 37.5 } ],
       not: "DP ülke genelinde 600'den fazla belediyeden 560'ından fazlasını kazandı; ülke geneli oy sayısı yayımlanmadı." },
 
     // kaynak: araclar/kaynak-defteri.md#1951-09-ara
     { id: "1951-09-ara", tur: "ara", tarih: "1951-09-16",
-      bolge: "17 il", sandalyeSayisi: 20,
+      bolge: "17 il", sandalyeSayisi: null,
       sonuc: [],
-      not: "1950 seçiminde birden fazla yerden seçilen ya da vefat eden milletvekillerinin yerine yapıldı; Bilecik'te DP kazandı. İl bazında kazananların tam listesi bu turda iki kaynakla doğrulanamadı." },
+      not: "1950 seçiminde birden fazla yerden seçilen ya da vefat eden milletvekillerinin yerine yapıldı; Bilecik'te DP kazandı. Dönemin basınında sandalye sayısı için üç farklı rivayet var (17 il/20 sandalye, 19 il/21 sandalye, 22 il/22 sandalye); resmî bir kaynakla (TBMM tutanağı ya da Resmî Gazete) kesinleştirilemediği için sandalye sayısı ve il bazında dağılım yazılmadı." },
 
     // kaynak: araclar/kaynak-defteri.md#1954-05-genel
     { id: "1954-05-genel", tur: "genel", tarih: "1954-05-02", tekParti: false,
       meclis: 541, kayitli: 10262063, kullanilan: 9095617, gecerli: null, baraj: null,
-      sonuc: [ { parti: "dp46", oy: 5313659, sandalye: 504 }, { parti: "chp23", oy: 3193471, sandalye: 31 }, { parti: "mp48", oy: 480249, sandalye: 5 }, { ad: "Bağımsız", oy: null, sandalye: 1 } ],
-      not: "DP ikinci seçimini de kazanarak iktidarını pekiştirdi." },
+      sonuc: [ { parti: "dp46", oy: null, sandalye: 503 }, { parti: "chp23", oy: null, sandalye: 31 }, { ad: "Cumhuriyetçi Millet Partisi", oy: null, sandalye: 5 }, { ad: "Bağımsız", oy: null, sandalye: null } ],
+      not: "DP ikinci seçimini de kazanarak iktidarını pekiştirdi. Bağımsızların kazandığı sandalye sayısı (TÜİK'e göre 503+31+5'ten geriye kalan 2, Yılmaz 2010'a göre 1) kaynaklar arasındaki DP sandalyesi uyuşmazlığı nedeniyle kesinleştirilemedi." },
 
     // kaynak: araclar/kaynak-defteri.md#1954-05-cb-tbmm
     { id: "1954-05-cb-tbmm", tur: "cb-tbmm", tarih: "1954-05-14",
       secilen: "Celâl Bayar", turSayisi: 1,
       not: "Bayar 2. kez seçildi (486/513 oy)." },
 
     // kaynak: araclar/kaynak-defteri.md#1957-10-genel
     { id: "1957-10-genel", tur: "genel", tarih: "1957-10-27", tekParti: false,
       meclis: 610, kayitli: 12078623, kullanilan: 9250949, gecerli: null, baraj: null,
-      sonuc: [ { parti: "dp46", oy: 4497811, sandalye: 424 }, { parti: "chp23", oy: 3825267, sandalye: 178 }, { parti: "mp48", oy: 604087, sandalye: 4 }, { ad: "Hürriyet Partisi", oy: 321471, sandalye: 4 } ],
+      sonuc: [ { parti: "dp46", oy: null, sandalye: 424 }, { parti: "chp23", oy: null, sandalye: 178 }, { ad: "Cumhuriyetçi Millet Partisi", oy: null, sandalye: 4 }, { ad: "Hürriyet Partisi", oy: null, sandalye: 4 } ],
       not: "DP oy kaybetmesine rağmen çoğunluk sistemi sayesinde sandalyelerin çoğunu korudu." },
 
     // kaynak: araclar/kaynak-defteri.md#1957-11-cb-tbmm
     { id: "1957-11-cb-tbmm", tur: "cb-tbmm", tarih: "1957-11-01",
       secilen: "Celâl Bayar", turSayisi: 1,
       not: "Bayar 3. ve son kez seçildi (413/602 oy); muhalefet milletvekilleri oylama sırasında Meclis'i terk etti." },
 
     // --- 27 Mayıs 1960 kabı (bkz. veri/partiler.js DONEMLER[1].kesinti.yonetim) ---
 
     // kaynak: araclar/kaynak-defteri.md#1961-07-referandum
```
