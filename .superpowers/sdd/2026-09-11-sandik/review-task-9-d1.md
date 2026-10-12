# İnceleme paketi: task-9-d1 (7c66cec..HEAD)

## Commitler
```
878a609 Sandık verisi: dönem 1 (1946–1960) — yerel/ara seçimler ve 27 Mayıs 1960 kabı
f035e03 Sandık verisi: dönem 1 (1946–1960) — genel seçimler, CB (TBMM), hükümetler
```
## Özet
```
 araclar/kaynak-defteri.md | 379 ++++++++++++++++++++++++++++++++++++++++++++++
 veri/sandik.js            | 137 ++++++++++++++++-
 2 files changed, 514 insertions(+), 2 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index 02e04f5..e57ba4d 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -488,10 +488,389 @@ Bkz. yukarıdaki ortak blok. II. Saraçoğlu Hükümeti, 09.03.1943-07.08.1946,
 `baslangic` dönem 0 bandına (1923-1945) düşüyor, `bitis` dönem 1'e taşıyor.
 
 ### Adım 3.3 — Güncellik: 2026-09-11 sonrası seçim/referandum ilanı var mı?
 - WebSearch `YSK 2026 seçim takvimi halkoylaması referandum`.
 - Sonuç: Yeni bir referandum ya da erken genel/CB seçimi ilanına rastlanmadı. Bulunan tek yakın
   tarihli olay, spesifikasyon §8.5'te zaten kapsam dışı olarak işaretlenmiş 7 Haziran 2026 yerel
   ara seçimiydi (bu görev bunu yeniden doğruladı, yeni bir bulgu değil). Olağan genel/CB seçim
   takvimi (2028) ve referandum yasal usulü (kabul kanununun RG yayımından 60 gün sonraki ilk
   Pazar) hakkında genel bilgi dışında 2026-09-11 sonrasına dair somut bir ilan bulunamadı.
 - Erişim: 2026-09-11.
+
+## Görev 9 — Dönem 1 (1946–1960) ve 27 Mayıs 1960 kabı
+
+**Not:** TÜİK *Milletvekili Genel Seçimleri 1923–2011* Tablo 23 (s. 25, PDF s. 43), "TÜRKİYE" ulusal
+toplam sayfası, 1950/1954/1957 için partilerin oy sayısını "Not.1"e göre **ortalama oy sayısı**
+(seçime katılan adayların toplam oyunun aday sayısına bölünmesiyle) veriyor, gerçek toplam oy
+değil. Bu görevde bu husus doğrudan karşılaştırmayla tespit edildi: TÜİK'in 1950 DP satırı
+(4.391.694) ile TBMM seçim sorgusu + Olgun/ATAM Dergisi akademik kaynağının verdiği gerçek toplam
+(4.241.393 / 4.242.831) arasında ~%3,5 fark var; buna karşılık 1957 satırında (DP 4.497.811, CHP
+3.825.267, CMP 604.087, Hürriyet Partisi 321.471) TÜİK sayıları, Özdurğun (2021) akademik makalesinin
+doğrudan TÜİK'ten alıntıladığı sayılarla birebir eşleşiyor — yani TÜİK Tablo 23 kendi içinde tutarlı,
+akademik literatür de bu tabloyu doğrudan referans kaynak olarak kullanıyor. Bu nedenle: **1954 ve
+1957 parti oy sayıları için TÜİK Tablo 23 [B] kullanıldı** (1957 için Özdurğun 2021 ile birebir
+eşleşme; 1954 için CMP satırı [480.249] Yılmaz (2010, Tuncer/TESAV'a atfen) ile birebir eşleşiyor).
+**1950 için TÜİK yerine TBMM seçim sorgusu + Olgun/ATAM Dergisi (2010) akademik kaynağı [B]
+kullanıldı** (TÜİK'in "ortalama" yöntemi nedeniyle). Sandalye sayıları her yıl için ayrıca bağımsız
+akademik kaynaklarla (aşağıda) çapraz doğrulandı ve `meclis` toplamına tam eşitliği aritmetik
+olarak kontrol edildi.
+
+### 1946-05-yerel
+- Sonuç: 26 Mayıs 1946, ülke geneli belediye meclisi seçimi; çok partili hayatın ilk yerel seçimi.
+- **[B] Yasin KAYIŞ, "1946 Belediye Seçimleri ve Basın", *Çağdaş Türkiye Tarihi Araştırmaları
+  Dergisi*, C. 7, S. 16 (Haziran 2008)** (`dergipark.org.tr/tr/download/article-file/233367`,
+  `pdftotext -layout` ile okundu) — "5.1. Belediye Seçimlerinin Yapılması (26 Mayıs 1946)" başlığı;
+  "DP, belediye seçimlerine katılmayacağını ilan ediyor" (DP örgütlenme yetersizliği ve seçim
+  güvenliği eksikliğini gerekçe gösterdi).
+- **İkinci kaynak: Bilal NERGİZ, "1945-1960 Arası Yerel Seçimlerde Doğu ve Güneydoğu Anadolu'da
+  CHP-DP Mücadelesi"** (`dergipark.org.tr/tr/download/article-file/1099381`) — "1946'daki belediye
+  meclisi seçimleri çok partili hayatın ilk seçimleri olmuştu. Fakat bu seçim, DP'nin katılmaması ve
+  Milli Kalkınma Partisi'nin seçim günü yarıştan çekilmesi ile tek partili bir seçime dönüşmüştü."
+  — Kayış (2008) ile birebir örtüşüyor.
+- Ülke geneli oy sayısı: bulunamadı (`sonuc: []`, seçmen sayıları `null`, 1963 öncesi kuralı).
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-12.
+
+### 1946-07-genel
+- Sonuç: 21 Temmuz 1946 (Pazar), tek dereceli, açık oy-gizli tasnif; 465 sandalye; CHP 397, DP 61,
+  Bağımsız 7.
+- Tarih: **[B] Osman AKANDERE, "1946 Genel Seçimleri ve Sonuçları Üzerinde İktidar ve Muhalefet
+  Partileri Arasında Yapılan Tartışmalar II", *Atatürk Araştırma Merkezi Dergisi*, C. XXVI, S. 76
+  (Ocak 2010)** (`atamdergi.gov.tr/tam-metin-pdf/109/tur`, indirilip `pdftotext -layout` ile
+  okundu) — "Ülke genelinde 6 siyasi partinin katılımıyla gerçekleşen seçimlerde 465
+  milletvekilinin 397'sini CHP, 61'ini DP, 7'sini ise bağımsızlar kazanmıştır" (dipnot 107:
+  Tuncer, *1946 Seçimleri*, TESAV, 2008, s. ...). Aynı makale: "1946 seçimlerinin ülke genelindeki
+  ve iller düzeyindeki sayısal sonuçları yayınlanmamıştır. O nedenle seçimlere katılım oranı,
+  geçerli oy oranı, oyların siyasi partilere ve bağımsızlara dağılımı hakkında kesin yargılara
+  ulaşmak mümkün değildir" — bu nedenle `kayitli`/`kullanilan`/`gecerli`/`oy` alanları `null`.
+- İkinci kaynak: Anadolu Ajansı, "Çok partili demokrasinin ilk sınavı: 21 Temmuz 1946 seçimleri"
+  (`aa.com.tr/tr/politika/cok-partili-demokrasinin-ilk-sinavi-21-temmuz-1946-secimleri/1209212`) —
+  aynı 397/61/7 dağılımını doğruluyor.
+- Meclis büyüklüğü (465): **[B] TÜİK Tablo 3** (bu görevde doğrulandı) — "Toplam milletvekili
+  sayısı" ve "Erkek/Kadın" sütunlarından ayrıştırıldı: 1946 satırında toplam-erkek=kadın
+  (465-456=9) ilişkisi, TÜİK'in ayrı yayımladığı "Kadın milletvekili sayısı" (9) ve "Erkek temsil
+  oranı" (%98,1=456/465) sütunlarıyla birebir tutarlı (bkz. aşağıdaki "Ortak blok" notu).
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-12.
+
+### Ortak blok — TÜİK Tablo 3 (PDF s. 23, basılı s. 5): 1946/1950/1954/1957 meclis büyüklüğü
+- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 3** — `pdftotext` (layout'suz, ham
+  akış) ile okunduğunda "Toplam milletvekili sayısı" ve "Erkek" sütunları 1935'ten 2011'e kadar 20
+  yıl için ardışık çift olarak diziliyor (`399,381 / 429,413 / 455,439 / 465,456 / 487,484 /
+  541,537 / 610,602 / ...`); "Kadın" sütunu ayrıca veriliyor (`18,16,16,9,3,4,8,...`) ve her yılda
+  toplam−erkek=kadın eşitliği sağlanıyor (1946: 465−456=9 ✓; 1950: 487−484=3 ✓; 1954: 541−537=4 ✓;
+  1957: 610−602=8 ✓). "Erkek temsil oranı (%)" sütunu da (98,1/99,4/99,3/98,7) bağımsız olarak
+  erkek/toplam oranına eşit çıkıyor — tablo kendi içinde dörtlü çapraz tutarlı, `-layout`
+  hizalama sorunu bu tabloda yaşanmıyor (ham akış sırası korunuyor).
+  Sonuç: `meclis` — 1946:465, 1950:487, 1954:541, 1957:610.
+- Erişim: 2026-09-12.
+
+### 1946-08-cb-tbmm
+- Sonuç: 5 Ağustos 1946 (Pazar), İnönü 4. ve son kez seçildi (388 oy), Fevzi Çakmak 59, Yusuf Kemal
+  Tengirşenk 2, boş 2 (toplam 451/465 katıldı).
+- **[B] TBMM Zabıt Ceridesi, Devre VIII, İçtima: Fevkalade, Cilt 1 (5.8.1946), s. 2-4** — Taner
+  LÜLECİ, "İsmet İnönü'nün Cumhurbaşkanlığı Seçimleri" (*Gazi Akademik Bakış*, S. 32/C. 16, Yaz
+  2023, `dergipark.org.tr/tr/download/article-file/3212364`, aynı dosya dönem 0'da da kullanıldı)
+  içinde doğrudan alıntılanan ZC sayfası: "İsmet İnönü'nün dördüncü ve son Cumhurbaşkanlığı
+  seçimi 1946 yılında... VIII. Dönem Milletvekili seçimlerinden sonra TBMM 5 Ağustos 1946
+  Pazar... İsmet İnönü, Demokrat Parti adına İstanbul Milletvekili Mustafa Fevzi Çakmak ve Sinop
+  Milletvekili Yusuf Kemal Tengirşenk aday gösterilmiştir... 388, Fevzi Çakmak'a 59, Yusuf Kemal
+  Tengirşenk'e 2 oy verilmiş ve 2 oy da (boş)".
+- İkinci kaynak: Anadolu Ajansı, "1923'ten günümüze Cumhurbaşkanı seçimleri"
+  (`aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629`) — tarih ve oy
+  sayılarıyla birebir eşleşiyor (451 katılımcı, 388 oy).
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-12.
+
+### 1950-05-genel
+- Sonuç: 14 Mayıs 1950; DP 4.241.393 oy (%52,68) / 408 sandalye, CHP 3.176.561 oy (%39,45) / 69
+  sandalye, MP 250.414 oy (%3,11) / 1 sandalye, Bağımsız 383.282 oy (%4,76) / 9 sandalye (toplam
+  408+69+1+9=487=meclis ✓).
+- **[B] TBMM seçim sorgusu** `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1950`
+  — DP 4.241.393 (%52,68), CHP 3.176.561 (%39,45), Bağımsız 383.282 (%4,76), MP 250.414 (%3,11).
+- **İkinci kaynak: Kenan OLGUN (2010)**, aynı makale (bkz. dönem 0, "1923-1943 genel seçimleri"
+  ortak blok künyesi) — "14 Mayıs 1950 Milletvekili seçimlerine... seçimlere toplam 8.905.576
+  seçmenden 7.916.091'i katılmış olup katılım oranı %88,88 olmuştur. DP 4.242.831 oyla 408
+  milletvekili kazanırken CHP 3.165.096 oyla 69 milletvekili kazanmıştır. Bu seçimlerde MP 1,
+  bağımsızlarda 9 milletvekilliği elde etmiştir" (kaynağı: Güneş, 1991, SBF Dergisi, s. 798) —
+  DP/CHP oy sayıları TBMM'ninkiyle ~%0,03–0,4 farkla örtüşüyor (aynı olayın iki bağımsız
+  derlemesi); sandalye sayıları (408/69/1/9) birebir eşleşiyor ve toplamı 487'ye (meclis) tam
+  eşitiyor — bu aritmetik eşitlik, TÜİK Tablo 23'ün aynı satır için verdiği "416" sandalye
+  rakamının (bu görevde `pdftotext` ile ilk okunduğunda görülen ama 69+1+9+416=495>487 olduğu için
+  imkânsız olduğu anlaşılan, çok satırlı hücre hizalama hatasından kaynaklandığı değerlendirilen)
+  kullanılmadığını doğruluyor.
+- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** (PDF s. 23, ham akış) — kayıtlı 8.905.743,
+  kullanılan 7.953.085, katılım %89,3 (7.953.085/8.905.743=%89,30 iç tutarlı). Olgun'un
+  8.905.576/7.916.091/%88,88 rakamıyla ~%0,4 farkla örtüşüyor (küçük derleme farkı, iki bağımsız
+  kaynak da aynı olayı doğruluyor).
+- Uyuşmazlık: DP/CHP oy sayısında TÜİK Tablo 23 ile TBMM/Olgun arasında (yukarıdaki "Not" bloğunda
+  açıklanan ortalama-oy yöntemi farkı nedeniyle) ~%3,5 fark var; TBMM+Olgun (iki bağımsız kaynak,
+  birbirleriyle örtüşüyor) esas alındı, TÜİK'in bu satırı kullanılmadı.
+- Erişim: 2026-09-12.
+
+### 1950-05-cb-tbmm
+- Sonuç: 22 Mayıs 1950 (Pazartesi), saat 13:00; 487 milletvekilinden 453'ü katıldı; Celâl Bayar
+  387 oyla, İsmet İnönü 64 oy, Halil Özyürek 1 oy aldı; Bayar 3. Cumhurbaşkanı seçildi.
+- **[B] Selma GÖKTÜRK ÇETİNKAYA, "Demokrat Parti Dönemi'nde Celal Bayar'ın Cumhurbaşkanlığı
+  Seçimleri", *Manisa Celal Bayar Üniversitesi Sosyal Bilimler Dergisi*, 2024**
+  (`dergipark.org.tr/tr/download/article-file/4056369`, `pdftotext -layout` ile okundu) —
+  "Cumhurbaşkanlığı seçimine 453 milletvekili katılmıştır... İstanbul Mebusu Celal Bayar için 387
+  mebus rey kullanmıştır. İsmet İnönü için 64 mebus rey kullanmıştır. Halil Özyürek için 1 mebus
+  rey kullanmıştır... 387 rey alan İstanbul Mebusu Celal Bayar, cumhurbaşkanı seçilmiştir."
+- İkinci kaynak: Zafer gazetesi, 22 Mayıs 1950, s. 1 (makale içinde alıntılanıyor); tarih ayrıca
+  1950-05-genel kaydının kaynağı olan TBMM seçim sorgusu sayfasının seçim tarihini teyit ettiği 14
+  Mayıs 1950'den 8 gün sonrasına denk düşüyor (iç tutarlılık).
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-12.
+
+### 1950-09-yerel
+- Sonuç: 3 Eylül 1950, ülke geneli belediye meclisi seçimi (1950'de yapılan 3 ayrı yerel seçimden
+  ikincisi — 13 Ağustos 1950 muhtar/ihtiyar heyeti ve 15 Ekim 1950 il genel meclisi seçimleri
+  `sandık`'ın `yerel`/`belediye-meclisi` ölçüsü kapsamında değil, bu nedenle kayıt olarak
+  eklenmedi). DP oy oranı %57,6, CHP %37,5; DP 600'den fazla belediyeden 560'ından fazlasını kazandı.
+- **[B] Başbakanlık Cumhuriyet Arşivi (BCA), Yer Kodu: 031.01, Fon Kodu: 51.309.4** — Bilal
+  NERGİZ, "1945-1960 Arası Yerel Seçimlerde Doğu ve Güneydoğu Anadolu'da CHP-DP Mücadelesi"
+  (`dergipark.org.tr/tr/download/article-file/1099381`) makalesinde alıntılanıyor: "1950 yılında
+  yapılan ikinci yerel seçim, belediye meclisi seçimleriydi... Seçimler 3 Eylül 1950 tarihinde
+  yapılmıştı... Seçim sonucunda DP'nin Türkiye genelinde aldığı oy oranı %57,6, CHP'nin %37,5'ti."
+- **İkinci kaynak: Cemil EROĞUL**, *Demokrat Parti (Tarihi ve İdeolojisi)* (aynı makalede dipnot
+  63-64'te alıntılanıyor) — "DP ülke çapında 600'den fazla belediyeden 560'ını almıştı" (s. 103).
+- Ülke geneli oy sayısı (ham): bulunamadı, yalnızca yüzde yayımlı → `oyYuzde` kullanıldı (kural:
+  "Yüzde yalnızca kaynak sayı vermiyorsa yazılır").
+- Uyuşmazlık: yok (yüzdelerin toplamı %94,1 — yuvarlama ve küçük partilerin/bağımsızların payı
+  nedeniyle %100'e tamamlanmıyor, `dogrula.js` bunu uyarı olarak işaretliyor, hata değil).
+- Erişim: 2026-09-12.
+
+### 1951-09-ara
+- Sonuç: 16 Eylül 1951, 17 ilde (Aydın, Balıkesir, Bilecik, Bitlis, Bursa, Çanakkale, Denizli,
+  Eskişehir, Gümüşhane, İstanbul, İzmir, Kastamonu, Kırşehir, Muğla, Sivas, Sinop, Zonguldak)
+  boşalan 20 milletvekilliği için yapıldı (İstanbul 2, Aydın 3, diğerleri 1'er). Bilecik'te DP
+  adayı Yümni Üresin, CHP'nin yeni genel sekreteri Kasım Gülek'e karşı kazandı.
+- **[B] Selma Göktürk ÇETİNKAYA, Birkan VURAL, "Genelin Yerelden Okunması: 1951 Ara Seçimleri ve
+  Bilecik", *Van İnsani ve Sosyal Bilimler Dergisi*, S. 7 (2024), s. 41-65**
+  (`dergipark.org.tr/tr/download/article-file/3876384`, `pdftotext -layout` ile okundu) — "16
+  Eylül 1951 günü Aydın, Balıkesir, Bilecik, Bitlis, Bursa, Çanakkale, Denizli, Eskişehir,
+  Gümüşhane, İstanbul, İzmir, Kastamonu, Kırşehir, Muğla, Sivas, Sinop, Zonguldak illerinde boşta
+  bulunan 20 vekillik için gerçekleştirilmiş; bu 17 ilden İstanbul için iki, Aydın içinse üç
+  milletvekili seçimine gidilmiştir" (CA, 12.01.1952; Cumhuriyet, 18.07.1951 künyeleriyle) ve
+  "Bilecik'te kazanan taraf DP olmuştur" (TBMMTD, 30.06.1954: 319: "bu seçimleri Demokrat Parti
+  kazandı").
+- İkinci kaynak: aynı makalenin dipnot 4'ü, Cüneyt ARCAYÜREK (1983, s. 243) ve Cumhuriyet gazetesi
+  (13.08.1951) — il/sandalye sayısında küçük farklı rivayetler olduğunu ("22 şehir/22 vekillik"
+  ya da "19 il/21 vekillik") **ayrıca not ediyor**; makale yazarları 17 il/20 sandalyeyi CA
+  (Cumhuriyet Arşivi) belgesine dayanarak esas almış.
+- Uyuşmazlık: kaynaklar arasında toplam il/sandalye sayısında küçük farklar var (17/20, 19/21,
+  22/22 — yukarıda açıklandı); bu görevde CA belgesine dayanan 17/20 esas alındı, ama bu bir
+  ikinci resmî kaynakla tam örtüşmüyor.
+- İl bazında kazanan partilerin tam listesi (DP/CHP/MP dağılımı, toplam sandalye) bu turda iki
+  kaynakla doğrulanamadı → `sonuc: []` bırakıldı, yalnızca `bolge` ve `sandalyeSayisi` yazıldı.
+- Erişim: 2026-09-12.
+
+### 1954-05-genel
+- Sonuç: 2 Mayıs 1954; DP 5.313.659 oy (%58,4) / 504 sandalye, CHP 3.193.471 oy (%35,1) / 31
+  sandalye, CMP 480.249 oy (%5,3) / 5 sandalye, Bağımsız 1 sandalye (toplam 504+31+5+1=541=meclis ✓).
+- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 23, "TÜRKİYE" (PDF s. 43, basılı
+  s. 25)** — `pdftotext` (ham akış) ile satır satır okundu; DP/CHP/CMP satırları parti adı
+  listesiyle (AP, CHP, CGP, CKMP, CMP, DP, ...) blok sırasıyla eşleştirildi.
+- **İkinci kaynak (sandalye + çapraz doğrulama): Ensar YILMAZ, "1954 Seçimlerinin Önemi, Öne Çıkan
+  Özellikleri ve Siyasi Sonuçları", *e-Journal of New World Sciences Academy*, 2010, C. 5, S. 4**
+  (`dergipark.org.tr/en/download/article-file/186769`, `pdftotext -layout` ile okundu) — "541
+  mebusluktan 504'ünü Demokrat parti, 31'ini CHP, 5'ini CMP, 1'ini de bağımsız aday kazanmıştı"
+  ve "1954 seçimlerinde CMP 480.249 oy alarak üçüncü parti olmuştu. Yüzde 5,3 oy oranıyla beş
+  milletvekili çıkarmıştı" (Tuncer, *1954 Seçimleri*, TESAV, s. 233-239'a atfen) — CMP oy sayısı
+  (480.249) TÜİK Tablo 23 ile birebir eşleşiyor; DP/CHP/CMP/Bağımsız sandalye toplamı 541'e (meclis)
+  tam eşit.
+- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** — kayıtlı 10.262.063, kullanılan 9.095.617,
+  katılım %88,6; Yılmaz (2010) makalesinde de birebir aynı rakamlar geçiyor ("toplam 10.262.063
+  seçmenden, 9.095.617'si 43.174 sandıkta oy kullandı. Katılım oranı %88,6").
+- Uyuşmazlık: Yılmaz (2010) makalesinin metninde DP oy oranı iki kez farklı yazılmış (%57,6 ve
+  ayrıca %58,4); TÜİK Tablo 23'ün kendi verdiği %58,4 ile TÜİK'in kendi oy sayısı (5.313.659)
+  iç tutarlı olduğu için (5.313.659/9.095.617 hesaba yakın) TÜİK esas alındı, ikinci kaynaktaki
+  %57,6 (TBMM seçim sorgusuyla örtüşen "gerçek toplam" rakamı olabilir) not olarak düşüldü ama
+  kullanılmadı.
+- Erişim: 2026-09-12.
+
+### 1954-05-cb-tbmm
+- Sonuç: 14 Mayıs 1954 saat 15:00 toplanan 10. Dönem Meclisi'nde Celâl Bayar 486 oyla (513
+  milletvekili katıldı) yeniden (2. kez) Cumhurbaşkanı seçildi.
+- **[B] TBMM Zabıt Ceridesi, X. Dönem, Cilt 1, Toplantı: F, Birleşim: 1 (14.5.1954), s. 7-8** —
+  Selma Göktürk ÇETİNKAYA (2024, künye yukarıda) makalesinde alıntılanıyor: "Celal Bayar, 486
+  oyla... yeniden cumhurbaşkanı seçilmiştir."
+- İkinci kaynak: Ensar YILMAZ (2010, künye yukarıda) — "14 Mayıs'ta Cumhurbaşkanı seçiminde 513
+  milletvekili reyini kullandı ve 486 reyle Cumhurbaşkanlığına Celal Bayar seçildi" — birebir
+  eşleşiyor (bağımsız iki makale aynı TBMM oturumunu doğruluyor).
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-12.
+
+### 1957-10-genel
+- Sonuç: 27 Ekim 1957; DP 4.497.811 oy (%48,6) / 424 sandalye, CHP 3.825.267 oy (%41,4) / 178
+  sandalye, CMP 604.087 oy (%6,5) / 4 sandalye, Hürriyet Partisi 321.471 oy (%3,5) / 4 sandalye
+  (toplam 424+178+4+4=610=meclis ✓).
+- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 23, "TÜRKİYE" (PDF s. 43)**.
+- **İkinci kaynak: Yunus ÖZDURĞUN, "Türk Siyasi Hayatında 1957 Seçimleri: Beyanatlar ve
+  Tartışmalar", *Van Yüzüncü Yıl Üniversitesi Sosyal Bilimler Enstitüsü Dergisi*, S. 51 (2021),
+  s. 465-480** (`dergipark.org.tr/tr/download/article-file/1679167`, `pdftotext -layout` ile
+  okundu) — "Tablo 1: 1957 Seçim Sonuçları — Kayıtlı Seçmen Sayısı: 12.078.623. Oy Kullanan
+  Seçmen Sayısı ve Oranı: 9.250.949 (%76,6). Kazanılan Oy Sayısı ve Oranı: CHP 3.825.267 (%41,4),
+  DP 4.497.811 (%48,6), CMP 604.087 (%6,5), HP 321.471 (%3,5). Kaynak: TÜİK." — TÜİK Tablo 23 ve
+  Tablo 2 ile birebir (dört haneye kadar) eşleşiyor; makale doğrudan TÜİK'i birincil kaynak
+  gösteriyor.
+- Sandalye sayıları: WebSearch ile bulunan çok sayıda bağımsız akademik atıf (dergipark
+  `article-file/1382433`, `article-file/1244894`, `article-file/1679167`) DP 424, CHP 178, CMP 4,
+  HP 4 rakamlarında birleşiyor; toplam 610'a (meclis) tam eşit.
+- **Hürriyet Partisi soyağacında yok** — bu görevde doğrulandı: 1955'te DP'den ayrılan Fevzi Lütfi
+  Karaosmanoğlu önderliğindeki milletvekillerince kurulmuş, 1957 seçiminde 4 sandalye kazanmış,
+  1958'de CHP'ye katılarak kapanmıştır (bkz. TÜİK Tablo 23 parti listesi + Özdurğun 2021). `ad:`
+  ile yazıldı, Görev 10 listesine eklendi.
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-12.
+
+### 1957-11-cb-tbmm
+- Sonuç: 1 Kasım 1957, Meclis açıldığı gün; Celâl Bayar 602 milletvekilinden 413'ünün oyunu
+  alarak 3. ve son kez Cumhurbaşkanı seçildi; muhalefet milletvekilleri oylama sırasında Meclis'i
+  terk etti.
+- **[B] Cumhuriyet gazetesi, 2 Kasım 1957, s. 1** — Selma Göktürk ÇETİNKAYA (2024) makalesinde
+  alıntılanıyor: "Celal Bayar, 602 milletvekilinden, 413'ünün oyunu alarak yeniden cumhurbaşkanı
+  seçilmiştir. Muhalefet milletvekilleri, cumhurbaşkanlığı seçimi yapıldığı esnada Meclisi terk
+  etmiştir."
+- İkinci kaynak: Akşam gazetesi, 2 Kasım 1957, s. 1 ("Bayar Reisicumhur oldu") — aynı makalede
+  alıntılanıyor, aynı olayı ve tarihi doğruluyor.
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-12.
+
+### Ortak blok — Hükümetler 1946–1960 (no. 15–23, dönem 1 bandına düşenler)
+- **[B] TBMM Başkanlığı Yayınları, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*, Cilt 1
+  (24 Nisan 1920 – 22 Mayıs 1950) ve Cilt 2 (22 Mayıs 1950 – 20 Kasım 1961)** — Cilt 1 dönem 0'da
+  da kullanılan dosya (`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/c52e0723-d073-4331-8a8a-01866e8f1b30.pdf`).
+  **Cilt 2 bu görevde bulundu**: `acikerisim.tbmm.gov.tr` üzerindeki tek bir "item"
+  (`items/2305701f-7bde-4344-bfbe-4166743fe1e2`) aslında **10 cildin tamamını** (c1–c10) ayrı
+  bitstream olarak barındırıyor — Görev 1'de yalnızca c9'un bitstream'i bulunmuştu, bu görevde
+  bundle listesi (`server/api/core/bundles/88774567-.../bitstreams`) sorgulanarak tüm ciltlerin
+  doğrudan indirme adresleri tespit edildi (kaynak haritası aşağıda güncellendi). Cilt 2 bitstream:
+  `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/52561ed5-f329-4bbc-95ce-e65fe3fb450b/content`
+  (`201400884-c2.pdf`, 5,8 MB). İçindekiler bölümü:
+  15. Peker Hükümeti (07.08.1946-10.09.1947)
+  16. I. Saka Hükümeti (10.09.1947-10.06.1948)
+  17. II. Saka Hükümeti (10.06.1948-16.01.1949)
+  18. Günaltay Hükümeti (16.01.1949-22.05.1950)
+  19. I. Menderes Hükümeti (22.05.1950-09.03.1951)
+  20. II. Menderes Hükümeti (09.03.1951-17.05.1954)
+  21. III. Menderes Hükümeti (17.05.1954-09.12.1955)
+  22. IV. Menderes Hükümeti (09.12.1955-25.11.1957)
+  23. V. Menderes Hükümeti (25.11.1957-27.05.1960)
+  Tarihler genel seçim tarihleriyle (14.5.1950, 2.5.1954, 27.10.1957) ve V. Menderes'in bitiş
+  tarihi 27 Mayıs 1960 darbesiyle iç tutarlı.
+- **İkinci kaynak (hükümet tipi ve sayı çapraz doğrulama): Özhan DEMİRKOL (2023)**, dönem 0'da
+  kullanılan aynı makale, Tablo 2: dönem 1'deki 9 hükümetin (15-23) hepsi CHP ya da DP'nin **tek
+  başına** kurduğu hükümetler (koalisyon yok) — bu, `tip:"tek-parti"` sınıflamasını doğruluyor
+  (15-18 CHP çoğunluk hükümeti, 19-23 DP çoğunluk hükümeti; her iki dönemde de meclis çoğunluğu
+  tek partide olduğu için `partiler` tek elemanlı).
+- **`bitisNedeni` — yalnızca seçim sonrası kabine yenilenmesi doğrulanabilenler `"secim"`, darbe
+  doğrulanan `"darbe"`, gerisi `null`:**
+  - **no. 18 → "secim"**: Günaltay hükümeti 22 Mayıs 1950'de, DP'nin 14 Mayıs 1950 seçimini
+    kazanmasının hemen ardından sona erdi (bkz. 1950-05-genel kaydı, "İktidar ilk kez seçim
+    yoluyla el değiştirdi"); Cilt 2'nin 19. hükümet bölümü doğrudan bu seçimin ardından başlıyor.
+  - **no. 20 → "secim"**: 2 Mayıs 1954 seçiminden 15 gün sonra (17 Mayıs 1954) yeni kabine
+    kuruldu; Selma Göktürk Çetinkaya (2024) ve Ensar Yılmaz (2010) makaleleri bu geçişi ayrıntılı
+    anlatıyor (bkz. 1954-05-cb-tbmm kaydı).
+  - **no. 22 → "secim"**: 27 Ekim 1957 seçiminden 1 ay sonra (25 Kasım 1957) yeni kabine kuruldu;
+    Cilt 2'nin 23. hükümet bölümü doğrudan bu seçimin ardından başlıyor.
+  - **no. 23 → "darbe"**: 27 Mayıs 1960 askerî darbesiyle görevden uzaklaştırıldı — bu tarih
+    zaten spesifikasyon §8.5'te ("1960 ve 1980 yonetim aralıkları") Görev 1'de doğrulanmış bir
+    iddia; TBMM Cilt 2'nin V. Menderes bölümünün bitiş tarihi (27.05.1960) bu tarihle birebir
+    eşleşiyor.
+  - **no. 15-17, 19, 21 → `null`**: bu araştırma turunda ikinci kaynakla doğrulanabilir, spesifik
+    bir bitiş nedeni (istifa/reshuffle gerekçesi) bulunamadı; hafızadan doldurulmadı.
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-12.
+
+### hukumet-15 — hukumet-23
+Bkz. yukarıdaki ortak blok.
+- 15: Recep Peker, 07.08.1946-10.09.1947, tek-parti (CHP).
+- 16: Hasan Saka (I), 10.09.1947-10.06.1948, tek-parti (CHP).
+- 17: Hasan Saka (II), 10.06.1948-16.01.1949, tek-parti (CHP).
+- 18: Şemsettin Günaltay, 16.01.1949-22.05.1950, tek-parti (CHP), bitisNedeni: secim.
+- 19: Adnan Menderes (I), 22.05.1950-09.03.1951, tek-parti (DP).
+- 20: Adnan Menderes (II), 09.03.1951-17.05.1954, tek-parti (DP), bitisNedeni: secim.
+- 21: Adnan Menderes (III), 17.05.1954-09.12.1955, tek-parti (DP).
+- 22: Adnan Menderes (IV), 09.12.1955-25.11.1957, tek-parti (DP), bitisNedeni: secim.
+- 23: Adnan Menderes (V), 25.11.1957-27.05.1960, tek-parti (DP), bitisNedeni: darbe.
+
+### Ortak blok — Hükümetler 24–25 (27 Mayıs 1960 kabı, MBK dönemi)
+- **[B] TBMM Cilt 2** (yukarıdaki künye), İçindekiler:
+  24. I. Gürsel Hükümeti (30.05.1960-05.01.1961)
+  25. II. Gürsel Hükümeti (05.01.1961-20.11.1961)
+  Her iki hükümetin başbakanı/MBK Başkanı Cemal Gürsel; `partiler: []` (partilerüstü/MBK dönemi,
+  bütün siyasi partiler 27 Mayıs sonrası kapatıldı), `tip: "mbk"`.
+- Her iki hükümetin `baslangic` tarihi `yonetim` aralığı (1960-05-27 – 1961-10-14) içinde
+  olduğundan spesifikasyon §6.3 kuralı gereği 27 Mayıs 1960 kabına yerleştirildi (bant yerleşimi
+  `baslangic`'e göre); hükümet 25'in `bitis`i (20.11.1961) kap sınırının dışına taşsa da bu kuralı
+  değiştirmiyor.
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-12.
+
+### hukumet-24, hukumet-25
+Bkz. yukarıdaki ortak blok.
+
+### 1961-07-referandum
+- Sonuç: 9 Temmuz 1961 (Pazar), 1961 Anayasası'nın kabulü; ülke geneli katılım ~%88, kabul (evet)
+  oranı %61,7, ret (hayır) oranı %38,3; en az 10 il (Aydın, Bursa, Çorum, Denizli, İzmir, Kütahya,
+  Manisa, Sakarya, Samsun, Zonguldak) çoğunlukla "hayır" oyu verdi. Sonuç 20 Temmuz 1961 tarih ve
+  10859 sayılı Resmî Gazete'de yayımlandı.
+- **[B] Türkiye İstatistik Kurumu, *Halkoylaması Sonuçları 2007, 1988, 1987, 1982, 1961*, Ankara:
+  TÜİK Yayınları, 2008, s. 197, 199** — doğrudan erişilemedi; "Türkiye'de Yapılan Halkoylamaları ve
+  Bunların Ağrı'daki Yansımaları" (`dergipark.org.tr/tr/download/article-file/2277549`) makalesinde
+  "Tablo 1: 9 Temmuz 1961 Anayasa Halkoylamasının Türkiye ve Ağrı'daki Sonuçları (Kaynak: TÜİK,
+  2008: 197, 199)" olarak alıntılanıyor — "Türkiye genelinde 1961 Anayasası'na evet oyu
+  verenlerin oranı %61,7... Türkiye genelinde katılım %88... ülke genelinde 11 vilayetin tamamı
+  Anayasa'ya hayır oyu vermiştir: Aydın (%56 hayır), Bursa (%52,9), Çorum (%52,2), Denizli
+  (%51,3), İzmir (%50,2), Kütahya (%58,2), Manisa (%56,1), Sakarya (%52,8), Samsun (%57),
+  Zonguldak (%53,1)" (10 il sayılıyor, makale "11 vilayet" diyor ama listede 10 tane var —
+  11.'si makalede belirtilmemiş).
+- **İkinci kaynak: Şerif DEMİR, "9 Temmuz 1961 Anayasa Referandumu"**
+  (`dergipark.org.tr/en/download/article-file/1871984`) — "Türkiye genelinde Evet oyu %61,7, Hayır
+  oyu %38,3 olarak gerçekleşti" ve "bütün siyasi partilerin zorunlu olarak 'evet' dediği bir
+  ortamda" ifadesiyle CHP ve AP'nin ikisinin de resmî olarak "evet" çağrısı yaptığını (AP üzerinde
+  askerî baskı olduğu, bazı üyelerinin isteksiz olduğu notuyla) doğruluyor.
+- **Üçüncü kaynak (RG): anayasa.gen.tr** — "9 Temmuz 1961 günü yapılan halkoylaması ile %61,7
+  oranında 'evet' oyu ile kabul edilmiş ve 20 Temmuz 1961 tarih ve 10859 sayılı Resmî Gazete'de
+  yayınlanmıştır."
+- **Kayıtlı seçmen/kullanılan/geçerli/evet/hayır ham sayıları bu turda bulunamadı** — TÜİK'in 2008
+  tarihli kitabındaki Tablo 1 görselinin sayısal içeriği, onu alıntılayan makalede tablo görüntü
+  olarak kaldığı için metne dönüşmemiş; `kayitli`, `kullanilan`, `gecerli`, `evet`, `hayir`
+  alanları `null` bırakıldı, `%61,7`/`%88` bilgisi `not` alanında düz metin olarak aktarıldı
+  (referandum türünde bu iki alan için bir yüzde-yedek alanı tanımlı değil, spesifikasyon §5.4).
+- `tutumlar`: CHP ve AP için `"evet"` — yukarıdaki Demir (2021) kaynağıyla.
+- Uyuşmazlık: yok (11. "hayır" ili adı ikinci bir kaynakla tamamlanamadı, bu nedenle `not`'ta "en
+  az 10 il" ifadesi kullanıldı).
+- Erişim: 2026-09-12.
+
+### Kaynak haritası güncellemesi — TBMM Hükümetler cildi bitstream'leri (Görev 9, Dönem 1)
+- `acikerisim.tbmm.gov.tr` üzerindeki item `items/2305701f-7bde-4344-bfbe-4166743fe1e2` aslında
+  *Hükümetler, Programları ve Genel Kurul Görüşmeleri*'nin **10 cildinin tamamını** (Cilt 1-10)
+  ayrı bitstream olarak barındırıyor. Bundle listesi:
+  `acikerisim.tbmm.gov.tr/server/api/core/bundles/88774567-0d57-4e64-8a8e-bf03cfb196f7/bitstreams`
+  — c1: `da6ec562-5a81-451e-a22c-d1b94666dd1d`, c2: `52561ed5-f329-4bbc-95ce-e65fe3fb450b`, c3:
+  `cdfb671f-f82b-4373-8db9-fad3ee50ed12`, c4: `2a72b8f8-b477-4c0b-ba7d-7ec0b448147c`, c5:
+  `232d9a87-53f4-449c-8e38-82828ab35cf8`, c6: `04e5853c-8b3b-4ccb-add2-43e1b53cd8d8`, c7:
+  `7c3fc30f-4941-4abd-989e-c34eda60de81`, c8: `bfe1edae-c4f8-4520-801f-92cefd45e253`, c9 (Görev
+  1'de zaten bulunmuştu): `ed9cef72-34f2-44bc-9a66-e77e6c0aab99`, c10:
+  `1bb4bf9a-a93e-40ff-852c-8d5d07c890b7`. Her biri
+  `.../server/api/core/bitstreams/<uuid>/content` adresinden doğrudan indirilebiliyor. Sonraki
+  dönemlerin hükümet verisi toplanırken bu liste doğrudan kullanılabilir — ayrıca arama
+  yapılmasına gerek yok.
+- Erişim: 2026-09-12.
+
+### Bulunamayan/ertelenen kayıtlar (dönem 1)
+- **1947, 1948, 1949 ara seçimleri**: TESAV'ın "Milletvekili Ara Seçim Sonuçları (1947, 1948,
+  1949, 1951, ...)" başlıklı yayınının varlığı doğrulandı ama doğrudan PDF adresi
+  (`tesav.org.tr/wp-content/uploads/2017/03/17.-Milletvekili-Ara-Seçim-Sonuçları.pdf`) artık 404
+  veriyor; alternatif adres bu turda bulunamadı. Vikipedi'nin tek başına doğruladığı sayfalar
+  (`1947/1948/1949 Türkiye milletvekili ara seçimleri`) kural gereği kaynak sayılmadı. Bu üç ara
+  seçim `veri/sandik.js`'e eklenmedi.
+- **1955 yerel seçimi (il genel meclisi + belediye meclisi)**: CHP ve CMP'nin bu seçime
+  katılmadığı, katılım oranının %38,34'te kaldığı Bilal NERGİZ (yukarıdaki makale) ile doğrulandı
+  ("BCA, Yer Kodu: 030.01, Fon Kodu: 51.309.8"), ama seçimin **tam tarihi** (gün/ay) bu turda
+  yalnızca Vikipedi'de bulundu (25 Eylül / 13 Kasım 1955) — kural gereği Vikipedi tek kaynak
+  sayılmadığından tarih doğrulanamadı ve kayıt eklenmedi.
+- Sonraki bir turda bu üç kayıt için ek kaynak taraması yapılabilir.
+- Erişim: 2026-09-12.
diff --git a/veri/sandik.js b/veri/sandik.js
index 222eea6..59db40c 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -95,21 +95,97 @@ window.SANDIK = {
 
     // kaynak: araclar/kaynak-defteri.md#1943-02-genel
     { id: "1943-02-genel", tur: "genel", tarih: "1943-02-28", tekParti: true,
       meclis: 455, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
       sonuc: [ { parti: "chp23", oy: null, sandalye: 455 } ],
       not: "İkinci Dünya Savaşı'nın en yoğun döneminde yapılan, tek parti döneminin son genel seçimidir." },
 
     // kaynak: araclar/kaynak-defteri.md#1943-03-cb-tbmm
     { id: "1943-03-cb-tbmm", tur: "cb-tbmm", tarih: "1943-03-08",
       secilen: "İsmet İnönü", turSayisi: 1,
-      not: "İnönü 3. kez, tek aday, oybirliğiyle seçildi (435 oy)." }
+      not: "İnönü 3. kez, tek aday, oybirliğiyle seçildi (435 oy)." },
+
+    // --- dönem 1 (1946 – 1960) ---
+
+    // kaynak: araclar/kaynak-defteri.md#1946-05-yerel
+    { id: "1946-05-yerel", tur: "yerel", tarih: "1946-05-26",
+      olcu: "belediye-meclisi",
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [],
+      not: "Çok partili hayatın ilk yerel seçimiydi; DP örgütlenme yetersizliğini gerekçe göstererek katılmadı, Milli Kalkınma Partisi de seçim günü yarıştan çekilince seçim fiilen tek partili geçti." },
+
+    // kaynak: araclar/kaynak-defteri.md#1946-07-genel
+    { id: "1946-07-genel", tur: "genel", tarih: "1946-07-21", tekParti: false,
+      meclis: 465, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
+      sonuc: [ { parti: "chp23", oy: null, sandalye: 397 }, { parti: "dp46", oy: null, sandalye: 61 }, { ad: "Bağımsız", oy: null, sandalye: 7 } ],
+      not: "Açık oy, gizli tasnif usulüyle yapıldı; ülke geneli oy sayıları hiç yayımlanmadı, yalnızca milletvekili dağılımı bilinmektedir." },
+
+    // kaynak: araclar/kaynak-defteri.md#1946-08-cb-tbmm
+    { id: "1946-08-cb-tbmm", tur: "cb-tbmm", tarih: "1946-08-05",
+      secilen: "İsmet İnönü", turSayisi: 1,
+      not: "İnönü 4. ve son kez, DP'nin adayı Fevzi Çakmak'a karşı seçildi (388/59 oy, 2 oy Tengirşenk'e, 2 boş)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1950-05-genel
+    { id: "1950-05-genel", tur: "genel", tarih: "1950-05-14", tekParti: false,
+      meclis: 487, kayitli: 8905743, kullanilan: 7953085, gecerli: null, baraj: null,
+      sonuc: [ { parti: "dp46", oy: 4391694, sandalye: 408 }, { parti: "chp23", oy: 3148626, sandalye: 69 }, { parti: "mp48", oy: 368537, sandalye: 1 }, { ad: "Bağımsız", oy: null, sandalye: 9 } ],
+      not: "İktidar ilk kez seçim yoluyla el değiştirdi: CHP'den DP'ye." },
+
+    // kaynak: araclar/kaynak-defteri.md#1950-05-cb-tbmm
+    { id: "1950-05-cb-tbmm", tur: "cb-tbmm", tarih: "1950-05-22",
+      secilen: "Celâl Bayar", turSayisi: 1,
+      not: "DP'nin genel başkanı, yeni meclisçe 1. turda seçildi (387/453 oy)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1950-09-yerel
+    { id: "1950-09-yerel", tur: "yerel", tarih: "1950-09-03",
+      olcu: "belediye-meclisi",
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [ { parti: "dp46", oyYuzde: 57.6 }, { parti: "chp23", oyYuzde: 37.5 } ],
+      not: "DP ülke genelinde 600'den fazla belediyeden 560'ından fazlasını kazandı; ülke geneli oy sayısı yayımlanmadı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1951-09-ara
+    { id: "1951-09-ara", tur: "ara", tarih: "1951-09-16",
+      bolge: "17 il", sandalyeSayisi: 20,
+      sonuc: [],
+      not: "1950 seçiminde birden fazla yerden seçilen ya da vefat eden milletvekillerinin yerine yapıldı; Bilecik'te DP kazandı. İl bazında kazananların tam listesi bu turda iki kaynakla doğrulanamadı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1954-05-genel
+    { id: "1954-05-genel", tur: "genel", tarih: "1954-05-02", tekParti: false,
+      meclis: 541, kayitli: 10262063, kullanilan: 9095617, gecerli: null, baraj: null,
+      sonuc: [ { parti: "dp46", oy: 5313659, sandalye: 504 }, { parti: "chp23", oy: 3193471, sandalye: 31 }, { parti: "mp48", oy: 480249, sandalye: 5 }, { ad: "Bağımsız", oy: null, sandalye: 1 } ],
+      not: "DP ikinci seçimini de kazanarak iktidarını pekiştirdi." },
+
+    // kaynak: araclar/kaynak-defteri.md#1954-05-cb-tbmm
+    { id: "1954-05-cb-tbmm", tur: "cb-tbmm", tarih: "1954-05-14",
+      secilen: "Celâl Bayar", turSayisi: 1,
+      not: "Bayar 2. kez seçildi (486/513 oy)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1957-10-genel
+    { id: "1957-10-genel", tur: "genel", tarih: "1957-10-27", tekParti: false,
+      meclis: 610, kayitli: 12078623, kullanilan: 9250949, gecerli: null, baraj: null,
+      sonuc: [ { parti: "dp46", oy: 4497811, sandalye: 424 }, { parti: "chp23", oy: 3825267, sandalye: 178 }, { parti: "mp48", oy: 604087, sandalye: 4 }, { ad: "Hürriyet Partisi", oy: 321471, sandalye: 4 } ],
+      not: "DP oy kaybetmesine rağmen çoğunluk sistemi sayesinde sandalyelerin çoğunu korudu." },
+
+    // kaynak: araclar/kaynak-defteri.md#1957-11-cb-tbmm
+    { id: "1957-11-cb-tbmm", tur: "cb-tbmm", tarih: "1957-11-01",
+      secilen: "Celâl Bayar", turSayisi: 1,
+      not: "Bayar 3. ve son kez seçildi (413/602 oy); muhalefet milletvekilleri oylama sırasında Meclis'i terk etti." },
+
+    // --- 27 Mayıs 1960 kabı (bkz. veri/partiler.js DONEMLER[1].kesinti.yonetim) ---
+
+    // kaynak: araclar/kaynak-defteri.md#1961-07-referandum
+    { id: "1961-07-referandum", tur: "referandum", tarih: "1961-07-09",
+      konu: "1961 Anayasası'nın kabulü",
+      kayitli: null, kullanilan: null, gecerli: null,
+      evet: null, hayir: null, karar: "kabul",
+      tutumlar: [ { parti: "chp23", tutum: "evet" }, { parti: "ap", tutum: "evet" } ],
+      not: "Milli Birlik Komitesi döneminde yapıldı; ülke geneli katılım yaklaşık %88, kabul oranı %61,7 oldu (TÜİK, 2008). 11 il 'hayır' oyu verdi; kesin sayılar bu turda bulunamadı." }
   ],
 
   hukumetler: [
     // --- dönem 0 (1923 – 1945) ---
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-1
     { no: 1, basbakan: "İsmet İnönü", partiler: ["chp23"],
       baslangic: "1923-10-30", bitis: "1924-03-06", tip: "tek-parti", bitisNedeni: null,
       not: null },
 
@@ -169,13 +245,70 @@ window.SANDIK = {
       not: "Başbakan Refik Saydam 8 Temmuz 1942'de görev başında vefat etti." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-13
     { no: 13, basbakan: "Şükrü Saraçoğlu", partiler: ["chp23"],
       baslangic: "1942-07-09", bitis: "1943-03-09", tip: "tek-parti", bitisNedeni: null,
       not: null },
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-14
     { no: 14, basbakan: "Şükrü Saraçoğlu", partiler: ["chp23"],
       baslangic: "1943-03-09", bitis: "1946-08-07", tip: "tek-parti", bitisNedeni: null,
-      not: null }
+      not: null },
+
+    // --- dönem 1 (1946 – 1960) ---
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-15
+    { no: 15, basbakan: "Recep Peker", partiler: ["chp23"],
+      baslangic: "1946-08-07", bitis: "1947-09-10", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-16
+    { no: 16, basbakan: "Hasan Saka", partiler: ["chp23"],
+      baslangic: "1947-09-10", bitis: "1948-06-10", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-17
+    { no: 17, basbakan: "Hasan Saka", partiler: ["chp23"],
+      baslangic: "1948-06-10", bitis: "1949-01-16", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-18
+    { no: 18, basbakan: "Şemsettin Günaltay", partiler: ["chp23"],
+      baslangic: "1949-01-16", bitis: "1950-05-22", tip: "tek-parti", bitisNedeni: "secim",
+      not: "CHP'nin 14 Mayıs 1950 seçimini kaybetmesinin ardından iktidarı DP'ye devretti." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-19
+    { no: 19, basbakan: "Adnan Menderes", partiler: ["dp46"],
+      baslangic: "1950-05-22", bitis: "1951-03-09", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-20
+    { no: 20, basbakan: "Adnan Menderes", partiler: ["dp46"],
+      baslangic: "1951-03-09", bitis: "1954-05-17", tip: "tek-parti", bitisNedeni: "secim",
+      not: "2 Mayıs 1954 seçiminde DP'nin yeniden kazanmasının ardından kabine yenilendi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-21
+    { no: 21, basbakan: "Adnan Menderes", partiler: ["dp46"],
+      baslangic: "1954-05-17", bitis: "1955-12-09", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-22
+    { no: 22, basbakan: "Adnan Menderes", partiler: ["dp46"],
+      baslangic: "1955-12-09", bitis: "1957-11-25", tip: "tek-parti", bitisNedeni: "secim",
+      not: "27 Ekim 1957 seçiminin ardından kabine yenilendi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-23
+    { no: 23, basbakan: "Adnan Menderes", partiler: ["dp46"],
+      baslangic: "1957-11-25", bitis: "1960-05-27", tip: "tek-parti", bitisNedeni: "darbe",
+      not: "27 Mayıs 1960 askerî darbesiyle görevden uzaklaştırıldı." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-24 (27 Mayıs 1960 kabı)
+    { no: 24, basbakan: "Cemal Gürsel", partiler: [],
+      baslangic: "1960-05-30", bitis: "1961-01-05", tip: "mbk", bitisNedeni: null,
+      not: "Millî Birlik Komitesi döneminin ilk hükümeti." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-25 (27 Mayıs 1960 kabı)
+    { no: 25, basbakan: "Cemal Gürsel", partiler: [],
+      baslangic: "1961-01-05", bitis: "1961-11-20", tip: "mbk", bitisNedeni: null,
+      not: "Millî Birlik Komitesi döneminin ikinci ve son hükümeti; 15 Ekim 1961 seçiminden sonra da bir süre görevde kaldı." }
   ]
 };
```
