# İnceleme paketi: task-9-d2-fix1 (e70082e..7f1229d)

## Commitler
```
7f1229d Düzeltme: dönem 2 — 1961 CB seçimi ve yerel sonuç kaynakları
```
## Özet
```
 araclar/kaynak-defteri.md | 74 +++++++++++++++++++++++++++++++++++++++++++++++
 veri/sandik.js            | 18 +++++-------
 2 files changed, 82 insertions(+), 10 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index e346527..ac366f2 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -1275,10 +1275,84 @@ Bkz. yukarıdaki ortak blok.
   arama denemeleri de tarihli, iki kaynakla doğrulanabilir bir il/parti/sandalye dağılımına
   ulaşamadı.
 - Sonuç: dönem 2 için kaynaktan **tarihi ve kapsamı** (hangi iller, kaç sandalye) doğrulanabilen
   ama **il/parti/sandalye dağılımı** iki kaynakla doğrulanamayan iki ara seçim envanteri var
   (1966 Hatay, 1968 Adana/Urfa/Çorum/Diyarbakır/İstanbul). Spesifikasyonun ara seçim veri modeli
   (`bolge`, `sandalyeSayisi`, `sonuc`) bu ayrıntı olmadan anlamlı doldurulamayacağından ve tek
   kaynaklı (yalnızca WebSearch özeti, açılıp okunmuş bir belge değil) bilgiyle kayıt eklemek
   §8.1 kuralını ihlal edeceğinden, **`veri/sandik.js`'e dönem 2 için ara seçim kaydı eklenmedi**
   (dönem 1'deki 1947-49 ara seçimleriyle aynı muamele).
 - Erişim: 2026-09-16.
+
+### Düzeltme turu 1 (2026-09-16) — inceleme sonrası
+
+**Bağlam:** Görevin ilk turunda iki hata bulundu (bkz. `.superpowers/sdd/2026-09-11-sandik/
+review-task-9-d2-verdict.md`): (1) 1961 TBMM CB seçiminin varlığı yanlış reddedilmişti — "Gürsel
+geçici maddeyle otomatik cumhurbaşkanı sayıldı" iddiası kaynaksız ve yanlıştı; (2) 1963/1968
+yerel kayıtlarının büyükşehir sonuçlarının çoğunda resmî [B] kaynak yoktu (yalnızca haber
+veritabanı/akademik tez özeti gibi ikincil kaynaklar). Bu bölüm ikisinin düzeltmesini kaydeder.
+
+#### 1961-10-cb-tbmm (yeni eklendi)
+- Sonuç: 26 Ekim 1961, Cemal Gürsel, 1961 Anayasası'nın kabulünün ardından oluşan yeni TBMM'nin
+  ortak/birleşik toplantısında **tek aday olarak** (rakip aday Ali Fuat Başgil, Millî Birlik
+  Komitesi baskısıyla adaylıktan çekilmişti) 1. turda Türkiye'nin 4. Cumhurbaşkanı seçildi.
+- **[B] T.C. Cumhurbaşkanlığı resmî sitesi, "Cemal Gürsel" biyografisi**
+  (`tccb.gov.tr/cumhurbaskanlarimiz/cemal_gursel/`, WebFetch ile doğrudan açıldı — önceki turda
+  bağlantı zaman aşımına uğramıştı, bu turda başarılı oldu) — "Halkoyuna sunulan ve kabul edilen
+  bu Anayasa gereğince ... yapılan seçimlerden sonra oluşturulan Türkiye Büyük Millet Meclisi
+  tarafından Türkiye'nin dördüncü cumhurbaşkanı seçildi." Sayfa kesin gün vermiyor.
+- **İkinci kaynak: TDV İslam Ansiklopedisi, "GÜRSEL, Cemal" maddesi**
+  (`islamansiklopedisi.org.tr/gursel-cemal`) — "anayasaya göre Cumhuriyet Senatosu'nun tabii üyesi
+  olan Gürsel tek aday olarak **26 Ekim 1961**'de Türkiye Büyük Millet Meclisi'nin ortak
+  toplantısında Türkiye Cumhuriyeti'nin dördüncü cumhurbaşkanı seçildi" — gün, "tek aday" ve
+  "ortak toplantı" bilgilerini veriyor; tccb.gov.tr'nin "TBMM tarafından seçildi" ifadesiyle
+  tutarlı.
+- **Üçüncü çapraz doğrulama:** WebSearch ile toplanan çok sayıda bağımsız kaynak (haber ve
+  ansiklopedi siteleri) aynı 26 Ekim 1961 tarihini ve Başgil'in MBK baskısıyla çekildiği bilgisini
+  tekrarlıyor; oy sayısı (434/607) yalnızca Vikipedi'de bulundu, kural gereği kullanılmadı ve
+  zaten veri modelinde (§5.6) `cb-tbmm` için oy sayısı alanı yok.
+- **Önceki turun hatası:** rapor, "Cemal Gürsel'in 1961 Anayasası'nın geçici maddeleriyle otomatik
+  cumhurbaşkanı sayıldığı, TBMM'de ayrı bir seçim yapılmadığı" iddiasını kaynak göstermeden ileri
+  sürmüş ve bu nedenle kaydı eklememişti — bu turda **yanlış olduğu doğrulandı**, iki bağımsız
+  kaynak (biri resmî) gerçek bir seçim/oylama yapıldığını gösteriyor. Kayıt eklendi.
+- Uyuşmazlık: yok (tarih iki kaynakta da aynı).
+- Erişim: 2026-09-16.
+
+#### 1963-11-yerel ve 1968-06-yerel — büyükşehir sonuçlarının resmî kaynak eksiği
+- **Sorun:** İlk turda Ankara/İzmir (1963) ve İstanbul/Ankara/İzmir (1968) için yalnızca ikincil
+  kaynaklar (Biyografya.com, yeniankara.com.tr, sonsoz.com.tr, SETA, Ege Üniversitesi Açık Erişim
+  tez özeti, haber veritabanları) kullanılmıştı — hiçbirinde resmî bir kaynak (YSK kararı, TÜİK/
+  DİE yayını, Resmî Gazete) yoktu. Bu, §8.1'in "her nitel bilgi bir resmî [B] kaynak + ikinci
+  kaynak" kuralını ihlal ediyordu (yalnızca 1963 İstanbul, YSK kararı + Resmî Gazete ile doğru
+  kaynaklanmıştı).
+- **Bu turda aranan resmî kaynaklar ve sonucu:**
+  - YSK Mahalli İdareler Arşivi sayfaları (`ysk.gov.tr/tr/17-kasim-1963-...`,
+    `ysk.gov.tr/tr/2-haziran-1968-...`) — WebFetch ile açıldı, ikisi de yalnızca genel YSK ana
+    sayfa kabuğunu döndürdü (JS kabuğu / zaman zaman ECONNRESET), il/şehir bazlı bir PDF
+    bağlantısı içermiyordu.
+  - Resmî istatistik kaynağı **Devlet İstatistik Enstitüsü (DİE), *Mahalli Seçimler Sonuçları,
+    17 Kasım 1963* (Ankara: DİE, 1965) ve *Mahalli Seçimler Sonuçları, 2 Haziran 1968* (Ankara:
+    DİE, 1969)** — bu iki kitabın varlığı ve tam künyesi, Tayfun ÇINAR'ın "Yerel Seçimlerde Kent
+    Büyüklüğü ile Oy Vermenin Yönü Arasındaki İlişki: Türkiye Örneği 1963-1999" (*Ankara
+    Üniversitesi SBF Dergisi*, C. 62, S. 3, 2007, s. 141-165,
+    `dspace.ankara.edu.tr/server/api/core/bitstreams/bb0cfa85-8e57-4845-9944-f43b349df363/content`)
+    makalesinin kaynakçasında doğrulandı (DİE'nin bu iki kitabı gerçekten bu isimle, bu yılda
+    basılmış) — **ama kitapların kendisi dijitalleşmemiş/çevrimiçi bulunamadı**, yalnızca künyesi
+    doğrulanabildi. Makalenin kendi metni de şehir/aday bazlı değil, toplu istatistiksel bir
+    analiz (kent büyüklüğü ~ oy yönü), Ankara/İzmir/İstanbul'un kazananlarının adını vermiyor.
+  - Resmî Gazete'nin ilgili tarihli sayıları (1963 İstanbul'daki gibi bir mazbata ilanı olabilir)
+    bu ortamdan doğrudan taranamadı (bilinen erişim kısıtı); bu üç şehir için ilan tarih/sayısını
+    veren ikincil bir kaynak da bulunamadı.
+  - Dergipark'ta Ankara/İzmir/İstanbul(1968) belediye başkanlığı seçimlerine özgü, Istanbul 1963
+    örneğindeki gibi (Erdem, 2021) YSK kararını ya da Resmî Gazete'yi doğrudan alıntılayan bir
+    akademik makale bu turda da bulunamadı.
+- **Sonuç (kullanıcı talimatı gereği — "bulamazsan o sayılar null"):**
+  - **1963-11-yerel:** yalnızca İstanbul (`chp23`, Haşim İşcan — YSK kararı + Resmî Gazete [B])
+    `buyuksehir` alanında kaldı; **Ankara ve İzmir kayıttan çıkarıldı** (resmî kaynak bulunamadı).
+  - **1968-06-yerel:** üç şehrin hiçbiri için resmî kaynak bulunamadığından **`buyuksehir` alanı
+    tamamen kaldırıldı**; ikincil kaynaklarda geçen isimler (Fahri Atabey/AP İstanbul, Ekrem
+    Barlas/AP Ankara, Osman Kibar/AP İzmir) yalnızca `not` alanında bilgi olarak, "resmî kaynak
+    bulunamadı" kaydıyla bırakıldı.
+  - Kayıtların kendisi (tarih, ölçü, envanter) silinmedi — yalnızca resmî kaynaksız nitel bilgi
+    (`buyuksehir`) çıkarıldı, bu da görevin "kayıt varlığı/tarihi kaynaklıysa kayıt kalır" ilkesiyle
+    tutarlı.
+- Erişim: 2026-09-16 (düzeltme turu 1).
diff --git a/veri/sandik.js b/veri/sandik.js
index 8609c9a..1a420b1 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -181,54 +181,52 @@ window.SANDIK = {
       not: "Milli Birlik Komitesi döneminde yapıldı; ülke geneli katılım yaklaşık %88, kabul oranı %61,7 oldu (TÜİK, 2008). 11 il 'hayır' oyu verdi; kesin sayılar bu turda bulunamadı." },
 
     // --- dönem 2 (1961 – 1971) ---
 
     // kaynak: araclar/kaynak-defteri.md#1961-10-genel
     { id: "1961-10-genel", tur: "genel", tarih: "1961-10-15", tekParti: false,
       meclis: 450, kayitli: 12925395, kullanilan: 10522716, gecerli: null, baraj: null,
       sonuc: [ { parti: "chp23", oy: 3724752, sandalye: 173 }, { parti: "ap", oy: 3527435, sandalye: 158 }, { parti: "ytp", oy: 1391934, sandalye: 65 }, { parti: "ckmp", oy: 1415390, sandalye: 54 }, { ad: "Bağımsız", oy: 81732, sandalye: 0 } ],
       not: "27 Mayıs sonrası ilk genel seçim; ilk kez nispi temsil (çevre barajlı d'Hondt) uygulandı. Hiçbir parti tek başına çoğunluk sağlayamadı, Cumhuriyet tarihinin ilk koalisyon dönemi bu seçimle başladı." },
 
+    // kaynak: araclar/kaynak-defteri.md#1961-10-cb-tbmm
+    { id: "1961-10-cb-tbmm", tur: "cb-tbmm", tarih: "1961-10-26",
+      secilen: "Cemal Gürsel", turSayisi: 1,
+      not: "1961 Anayasası'nın kabulünün ardından oluşan yeni TBMM'nin ortak toplantısında, tek aday olarak seçildi; rakip aday Ali Fuat Başgil, MBK baskısıyla adaylıktan çekilmişti." },
+
     // kaynak: araclar/kaynak-defteri.md#1963-11-yerel
     { id: "1963-11-yerel", tur: "yerel", tarih: "1963-11-17",
       olcu: "belediye-meclisi",
       kayitli: null, kullanilan: null, gecerli: null,
       sonuc: [],
       buyuksehir: {
-        istanbul: { parti: "chp23", aday: "Haşim İşcan" },
-        ankara: { parti: "chp23", aday: "Halil Sezai Erkut" },
-        izmir: { parti: "ap", aday: "Osman Kibar" }
+        istanbul: { parti: "chp23", aday: "Haşim İşcan" }
       },
-      not: "1961 Anayasası sonrası belediye başkanlarının ilk doğrudan halk oyuyla seçildiği yerel seçim. İstanbul'da en çok oyu alan AP adayı Nuri Eroğan, adaylık için öngörülen sürede kamu görevinden istifa etmediği gerekçesiyle YSK kararıyla diskalifiye edildi; ikinci sıradaki CHP adayı Haşim İşcan belediye başkanı sayıldı (Resmî Gazete, 13.12.1963). Ülke geneli belediye meclisi oy sayısı bulunamadı." },
+      not: "1961 Anayasası sonrası belediye başkanlarının ilk doğrudan halk oyuyla seçildiği yerel seçim. İstanbul'da en çok oyu alan AP adayı Nuri Eroğan, adaylık için öngörülen sürede kamu görevinden istifa etmediği gerekçesiyle YSK kararıyla diskalifiye edildi; ikinci sıradaki CHP adayı Haşim İşcan belediye başkanı sayıldı (Resmî Gazete, 13.12.1963). Ankara ve İzmir'in kazananı için resmî bir kaynak (YSK kararı/Resmî Gazete ilanı) bu turda bulunamadı, bu iki şehir kayda yazılmadı. Ülke geneli belediye meclisi oy sayısı bulunamadı." },
 
     // kaynak: araclar/kaynak-defteri.md#1965-10-genel
     { id: "1965-10-genel", tur: "genel", tarih: "1965-10-10", tekParti: false,
       meclis: 450, kayitli: 13679753, kullanilan: 9748678, gecerli: 9307563, baraj: null,
       sonuc: [ { parti: "ap", oy: 4921235, sandalye: 240 }, { parti: "chp23", oy: 2675785, sandalye: 134 }, { ad: "Millet Partisi", oy: 582704, sandalye: 31 }, { parti: "ytp", oy: 346514, sandalye: 19 }, { parti: "tip61", oy: 276101, sandalye: 14 }, { parti: "ckmp", oy: 208696, sandalye: 11 }, { ad: "Bağımsız", oy: 296528, sandalye: 1 } ],
       not: "Millî bakiye (ulusal artık) sistemiyle yapılan tek seçim. AP tek başına iktidara geldi; TİP ilk kez meclise girdi (14 sandalye + 1 senatörlük)." },
 
     // kaynak: araclar/kaynak-defteri.md#1966-03-cb-tbmm
     { id: "1966-03-cb-tbmm", tur: "cb-tbmm", tarih: "1966-03-28",
       secilen: "Cevdet Sunay", turSayisi: 1,
       not: "Cemal Gürsel'in sağlık nedeniyle görevi bırakmasının ardından, AP ve CHP'nin ortak desteğiyle 1. turda seçildi; CKMP lideri Alparslan Türkeş de aday oldu." },
 
     // kaynak: araclar/kaynak-defteri.md#1968-06-yerel
     { id: "1968-06-yerel", tur: "yerel", tarih: "1968-06-02",
       olcu: "belediye-meclisi",
       kayitli: null, kullanilan: null, gecerli: null,
       sonuc: [],
-      buyuksehir: {
-        istanbul: { parti: "ap", aday: "Fahri Atabey" },
-        ankara: { parti: "ap", aday: "Ekrem Barlas" },
-        izmir: { parti: "ap", aday: "Osman Kibar" }
-      },
-      not: "AP İstanbul, Ankara ve İzmir dahil çoğu ilde kazandı; İzmir'de Osman Kibar 1963'te seçildiği görevi korudu. Aynı gün 5 ilde milletvekili ara seçimi de yapıldı. Ülke geneli belediye meclisi oy sayısı bulunamadı." },
+      not: "AP çoğu ilde kazandı. Basında ve akademik kaynaklarda İstanbul'da Fahri Atabey, Ankara'da Ekrem Barlas, İzmir'de (1963'teki görevini koruyarak) Osman Kibar'ın kazandığı geçiyor, ama bu turda resmî bir kaynak (YSK kararı/Resmî Gazete ilanı) bulunamadığı için büyükşehir alanı hiç yazılmadı. Aynı gün 5 ilde milletvekili ara seçimi de yapıldı. Ülke geneli belediye meclisi oy sayısı bulunamadı." },
 
     // kaynak: araclar/kaynak-defteri.md#1969-10-genel
     { id: "1969-10-genel", tur: "genel", tarih: "1969-10-12", tekParti: false,
       meclis: 450, kayitli: 14788552, kullanilan: 9516035, gecerli: null, baraj: null,
       sonuc: [ { parti: "ap", oy: 4229712, sandalye: 256 }, { parti: "chp23", oy: 2487006, sandalye: 143 }, { parti: "gp", oy: 597818, sandalye: 15 }, { ad: "Bağımsız", oy: 511023, sandalye: 13 }, { ad: "Türkiye Birlik Partisi", oy: 254695, sandalye: 8 }, { ad: "Millet Partisi", oy: 292961, sandalye: 6 }, { parti: "ytp", oy: 197929, sandalye: 6 }, { parti: "tip61", oy: 243631, sandalye: 2 }, { parti: "mhp69", oy: 275091, sandalye: 1 } ],
       not: "Cumhuriyet tarihinin en düşük katılımlı genel seçimi (%64,3). MHP ve Türkiye Birlik Partisi ilk kez meclise girdi; MHP'nin tek sandalyesi Alparslan Türkeş'e ait." }
   ],
 
   hukumetler: [
     // --- dönem 0 (1923 – 1945) ---
```
