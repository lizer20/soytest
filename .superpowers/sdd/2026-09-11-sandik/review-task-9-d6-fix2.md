# İnceleme paketi: task-9-d6-fix2 (df8e6ae..57757f8)

## Commitler
```
57757f8 Düzeltme: dönem 6 — aday kaynağı ve büyükşehir kaynak notu
```
## Özet
```
 araclar/kaynak-defteri.md | 107 +++++++++++++++++++++++++++++++++++++++++++++-
 veri/sandik.js            |   2 +-
 2 files changed, 106 insertions(+), 3 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index 472aa82..fb03e39 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -3299,22 +3299,23 @@ ayrıca ham kaynak kanıtı ve 2003 Siirt iddiasının kanıtlanması.
 
 ### 1. `2014-08-cb-halk` adayları — `parti:` ile bağlandı (çözüldü)
 
 `araclar/dogrula.js` commit `00573ad` ile düzeltildiği için aday satırında `ad:` (kişi adı) ve
 `parti:` birlikte kullanılabiliyor. Veri güncellendi:
 - **Recep Tayyip Erdoğan → `parti: "akp"`.** [B] YSK Kararı 2014/3579 (7/8/2014): AK Parti Genel
   Başkan Yardımcısı'nın dilekçesinde "…partilerinin pankartın sahibi adayı desteklemediği,
   **Cumhurbaşkanı adayı Başbakan Recep Tayyip ERDOĞAN'ı desteklediğinin** her türlü izahtan
   vareste olduğu…". İkinci kaynak: Selçuk İletişim (karikatür makalesi) İngilizce özeti —
   "…Erdoğan **for the Ak Party**…".
-- **Selahattin Demirtaş → `parti: "hdp"`** (çatı aday değil, HDP adayı). İki bağımsız akademik
-  kaynak: (a) **Bekir Berat Özipek, "Türkiye Siyasetinde 2014 Cumhurbaşkanlığı Seçimi"**
+- **Selahattin Demirtaş → `parti: "hdp"`** ~~(çatı aday değil, HDP adayı)~~
+  **→ Düzeltme turu 2 (2026-09-25) madde 1: resmî belgelerde parti kaydı bulunmadığı için
+  `destek: "HDP adayı"` olarak değiştirildi.** İki bağımsız akademik kaynak: (a) **Bekir Berat Özipek, "Türkiye Siyasetinde 2014 Cumhurbaşkanlığı Seçimi"**
   (`dergipark.org.tr/en/download/article-file/790586`): "…İhsanoğlu ve üçüncüsü de **HDP adayı
   Selahattin Demirtaş**'tı."; (b) **Selçuk İletişim**, "2014 Cumhurbaşkanlığı Seçimindeki
   Cumhurbaşkanı Adaylarının Karikatürlere Yansıması"
   (`dergipark.org.tr/tr/download/article-file/178268`), İngilizce özet: "…**Selahattin Demirtaş
   for the HDP**…" ve Türkçe metin: "…tin Demirtaş, **MHP ve CHP'nin ortak adayları ise,
   Ekmeleddin İhsanoğlu** olmuştur." (aynı cümle Demirtaş'ı İhsanoğlu'ndan ayırıyor: ortak aday
   yalnızca İhsanoğlu'dur).
 - **Ekmeleddin Mehmet İhsanoğlu → `destek: "CHP ve MHP'nin ortak adayı"`** (tek bir partinin
   adayı olmadığı için `parti:` yazılmadı; yukarıdaki iki akademik kaynak + [B] YSK 2014/3579'un
   "rakip partilerin adayı" ifadesi).
@@ -3461,10 +3462,112 @@ bakanlıkları ise bağımsızlara verildi."
   `20030311M1-1.gif -> GIF image data, version 89a, 630 x 640`,
   `20030311M1-2.gif -> GIF image data, version 89a, 630 x 766`. Ortamda OCR aracı yok.
 - **YSK karar arşivi:** `https://www.ysk.gov.tr/doc/dosyalar/docs/Kararlar/2003Pdf/2003-212.pdf`
   → HTTP 200 ama içerik **PDF değil**, YSK portalının 123.497 baytlık HTML hata sayfası
   (`<!DOCTYPE html> <html data-ng-app="yskWeb" …`). Aynı adres deseni 2002, 2007, 2010, 2011,
   2014 ve 2015 kararları için çalışıyor; 2003 klasörü yok.
 - **YSK "Ara Seçim Arşivi"** (`ysk.gov.tr/tr/ara-secim-arsivi/2624`, tarayıcıyla DOM'dan
   okundu) yalnızca 2009, 2010, 2012, 2014, 2016, 2017 ve 2026 **mahalli idareler** ara
   seçimlerini listeliyor; milletvekili ara/yenileme seçimi yok.
 → `2003-03-ara` kaydı eklenmedi; Görev 12'ye devredildi.
+
+## Düzeltme turu 2 (2026-09-25) — ikinci inceleme sonrası
+
+İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d6-fix1-verdict.md`.
+İki Important: (1) Demirtaş'ın `parti:"hdp"` değeri yalnızca akademik kaynaklı;
+(2) 2004/2009/2014 büyükşehir sayılarında TÜİK–YSK örtüşmesinin bağımsızlığı kanıtlanamadı.
+
+### 1. `2014-08-cb-halk`, Demirtaş satırı — `parti:"hdp"` → `destek:"HDP adayı"`
+
+**Aranan [B] belgeler ve bulunanlar:**
+- **YSK Kararı 2014/3227 (10/7/2014), tam metin** (`…/docs/Kararlar/2014Pdf/2014-3227.pdf`,
+  `pdftotext -layout`, 68 satır): kararda "parti", "önerge", "imza" ya da "gösteren" sözcükleri
+  hiç geçmiyor; yalnızca "aday **gösterilenlere** ilişkin 'KESİN ADAY LİSTESİ'" ifadesi ve üç
+  adayın adı var. **Aday gösteren parti kaydı yok.**
+- **Resmî Gazete 11.7.2014 / 29057**, kararın **eki** bulundu ve indirildi:
+  `resmigazete.gov.tr/eskiler/2014/07/20140711-14-1.pdf` (72.781 bayt). Ham çıktı:
+  ```
+                CUMHURBAŞKANI SEÇİMİ KESİN ADAY LİSTESİ                       Örnek: 401
+     ADI          SOYADI    DOĞUM TARİHİ         ÜNİVERSİTE            FAKÜLTE        BÖLÜM
+  EKMELEDDİN MEHMET İHSANOĞLU  26/12/1943  MISIR AİN SHAMS ÜNİVERSİTESİ  FEN FAKÜLTESİ  KİMYA
+  RECEP TAYYİP      ERDOĞAN    26/02/1954  MARMARA ÜNİVERSİTESİ                         İŞLETME
+  SELAHATTİN        DEMİRTAŞ   10/04/1973  ANKARA ÜNİVERSİTESİ    İKTİSADİ VE İDARİ BİLİMLER
+                                                                   FAKÜLTESİ / HUKUK FAKÜLTESİ
+  ```
+  → resmî **Örnek: 401** formunda **parti sütunu yok** (ad, soyad, doğum tarihi, üniversite,
+  fakülte, bölüm).
+- **Resmî Gazete 8.7.2014 / 29054**, "Geçici Aday Listesi" eki
+  (`…/2014/07/20140708-13-1.pdf`, 73.600 bayt, **Örnek: 400**): aynı altı sütun, yine **parti
+  sütunu yok**.
+- **YSK 2014 karar arşivi taraması:** 2014/2913 (propaganda), 2014/3092 (seçime katılabilecek
+  partiler), 2014/3123, 2014/3124, 2014/3136, 2014/3164–3167, 2014/3237, 2014/3579, 2014/3719
+  açıldı; hiçbirinde "X partisi tarafından aday gösterilen Y" biçiminde bir kayıt yok.
+  2014/3579 yalnızca **AK Parti'nin Erdoğan'ı desteklediğini** ve İhsanoğlu'nun "rakip
+  partilerin adayı" olduğunu söylüyor.
+- **Resmî Gazete 1–10 Temmuz 2014 taraması:** aday gösterme başvurularını parti adıyla ilan eden
+  bir duyuru yok.
+- **YSK `docs/2014CB/` ağacı:** `2014CB-KesinAdayListesi.pdf`, `2014CB-AdayListesi.pdf`,
+  `2014CB-GeciciAdayListesi.pdf`, `2014CB-Adaylar.pdf` adreslerinin dördü de YSK portalının
+  123.497 baytlık HTML hata sayfasını döndürüyor (dosya yok).
+
+**Ek [B] bulgu — HDP'nin 2014'te parti olarak aday gösterme hakkı yoktu:**
+- [B] **Anayasa m. 101** (5678 sayılı Kanunla değişik, RG 16.6.2007): "Cumhurbaşkanlığına …
+  aday gösterilebilmesi **yirmi milletvekilinin yazılı teklifi** ile mümkündür. Ayrıca, en son
+  yapılan milletvekili genel seçimlerinde geçerli oylar toplamı birlikte hesaplandığında
+  **yüzde onu geçen siyasi partiler ortak aday gösterebilir**."
+- [B] **TÜİK Tablo 1 (PDF s. 22) ve Tablo 24**: 2011 seçimine katılan **15 parti** arasında HDP
+  **yok**; TÜİK Veri Portalı'nın 1983-2018 tablosunda da HDP'nin ilk oy satırı **2015**'tir.
+  → HDP 2014'te "yüzde onu geçen siyasi parti" olamazdı; Demirtaş'ın adaylığı ancak yirmi
+  milletvekilinin yazılı teklifiyle mümkündü. Yani "HDP adayı" siyasal bir niteleme olup
+  belgelenmiş bir **parti adaylığı** değildir.
+
+**Karar:** `parti: "hdp"` kaldırıldı, yerine kaynakların kendi ifadesiyle
+`destek: "HDP adayı"` yazıldı. İkincil (akademik) kaynaklar: Özipek, "Türkiye Siyasetinde 2014
+Cumhurbaşkanlığı Seçimi" — "…üçüncüsü de **HDP adayı Selahattin Demirtaş**'tı."; Selçuk İletişim
+(karikatür makalesi) İngilizce özeti — "…**Selahattin Demirtaş for the HDP**…".
+**Erdoğan'ın `parti:"akp"` değeri korundu:** AK Parti 2011'de %49,8 aldığı için ([B] TÜİK/YSK)
+tek başına aday gösterme yetkisine sahipti ve [B] YSK Kararı 2014/3579 partinin adayının Erdoğan
+olduğunu tutanağa geçiriyor. İhsanoğlu'nun `destek:"CHP ve MHP'nin ortak adayı"` ifadesi de
+Anayasa m.101'in "ortak aday gösterebilir" kuralıyla ve iki akademik kaynakla uyumlu.
+
+### 2. Büyükşehir kayıtlarında TÜİK–YSK bağımsızlığı — açık sınır notu ve yeni ikinci kaynaklar
+
+**Sınır (2004-03-yerel, 2009-03-yerel, 2014-03-yerel `buyuksehir` alanları için geçerlidir):**
+TÜİK'in kendi yayını **No. 3584, *Mahalli İdareler Seçimi 29.03.2009*, "3.1 Veri derleme
+tekniği"** şunu yazıyor: *"2009 seçimlerine kadar, tablolarında yer alan Türkiye toplam
+sonuçları, il seçim kurulları tarafından YSK'ya gönderilen ve **YSK tarafından Resmi Gazete'de
+ilan edilen sonuçlardan**, ilçe ve belediye düzeyindeki bilgiler ise ilçe seçim kurulları
+tarafından tanzim edilen ve ilçe seçim kurullarınca Kurumumuza gönderilen **birleştirme
+tutanaklarından** … üzerinde hiçbir değişiklik yapılmaksızın … aynen yayımlanmıştır."*
+→ TÜİK mahalli idareler verisini **bağımsız olarak toplamıyor**; ulusal toplamlar doğrudan
+YSK/Resmî Gazete'den, alt kırılımlar ise ilçe seçim kurullarının tutanaklarından alınıyor.
+Bu yüzden **TÜİK ile YSK'nın büyükşehir rakamlarının birebir örtüşmesi, bağımsız bir doğrulama
+sayılmaz** — kopya da olsa örtüşür, ayrı ayrı derlense de örtüşür; ikisini ayırt etmez.
+(Bu sınır, ulusal belediye meclisi sayılarının `null` yapılmasının da gerekçesidir; büyükşehir
+alanı ise brief'in "[B] + ikinci kaynak" kuralını harfiyen karşıladığı için `null` yapılmadı.)
+
+**Bu turda eklenen, YSK/TÜİK dışı ikinci kaynaklar (haber veritabanı — yalnızca ikinci kaynak):**
+- **Anadolu Ajansı arşivi, "YEREL SEÇİMLER" (28 Mart 2004 sonuç tablosu)**
+  (`aa.com.tr/tr/arsiv/-187nbsp-yerel-secimler/428569`):
+  "**İSTANBUL (BŞ) AK PARTİ 45.31 Kadir Topbaş**", "**ANKARA (BŞ) AK PARTİ 55.03 İ. Melih
+  Gökçek**", "**İZMİR (BŞ) CHP 47.18 Ahmet Piriştina**".
+  Karşılaştırma (YSK/TÜİK şehir tablosundan hesaplandı): İstanbul 1.917.577/4.231.487 = %45,32
+  (AA %45,31; fark %0,02), Ankara 901.001/1.636.633 = %55,05 (AA %55,03; fark %0,04),
+  İzmir 562.561/1.192.541 = %47,17 (AA %47,18; fark %0,02) — üçü de %0,5 toleransının çok
+  altında. **2004'ün üç şehri artık gerçekten bağımsız bir kaynakla da doğrulanmış durumda.**
+  (AA'nın İzmir için verdiği ad **Ahmet Piriştina**'dır; kazanan parti CHP'dir. Kayda yalnızca
+  parti yazıldığı için ad farkı veriyi etkilemiyor.)
+- **TRT Haber, "Geçmişten günümüze İstanbul seçimleri"**
+  (`trthaber.com/haber/gundem/gecmisten-gunumuze-istanbul-secimleri-420325.html`):
+  2004 — "**Topbaş** oyların **yüzde 45,32**'sini alarak … birinci çıktı" (AK Parti);
+  2009 — "**Topbaş, oyların yüzde 44,7'sini**, Kılıçdaroğlu ise yüzde 37'sini aldı";
+  2014 — "**Topbaş yüzde 47,95 oy alarak** bir kez daha ipi göğüsledi".
+  Karşılaştırma: 2009 İstanbul AK Parti 3.105.555/6.946.435 = **%44,71**;
+  2014 İstanbul AK Parti 4.101.906/8.553.814 = **%47,95** — ikisi de birebir.
+  **İstanbul'un üç yılı da YSK/TÜİK dışı bir kaynakla doğrulandı.**
+- **Hâlâ yalnızca YSK + TÜİK ile duran:** **Ankara ve İzmir'in 2009 ve 2014 sonuçları.**
+  (Ankara 2009 AK Parti 940.230/2.440.455 = %38,53; İzmir 2009 CHP 1.107.562/1.972.359 = %56,15;
+  Ankara 2014 AK Parti 1.417.212/3.162.112 = %44,82; İzmir 2014 CHP 1.308.134/2.637.550 = %49,60.)
+  Bu turda bu dört değer için YSK/TÜİK dışı, doğrudan alıntılanabilir bir kaynak bulunamadı;
+  aranan yerler: TRT Haber'in Ankara/İzmir dosyaları, bianet "Yerel Seçimlerde İzmir",
+  Doğruluk Payı bülteni, dergipark ("üç şehir üç başkan" makalesi 1989–1994 dönemini
+  kapsıyor). Kazanan parti değerleri değiştirilmedi; sınır burada açıkça kayda geçirildi.
diff --git a/veri/sandik.js b/veri/sandik.js
index 76a528a..d0b73cb 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -437,21 +437,21 @@ window.SANDIK = {
     { id: "2014-03-yerel", tur: "yerel", tarih: "2014-03-30",
       olcu: "belediye-meclisi",
       kayitli: null, kullanilan: null, gecerli: null,
       sonuc: [ { parti: "akp", oy: null }, { parti: "chp92", oy: null }, { parti: "mhp93", oy: null }, { parti: "bdp", oy: null }, { parti: "sp", oy: null }, { parti: "hdp", oy: null }, { parti: "bbp", oy: null }, { parti: "dp07", oy: null }, { parti: "dsp", oy: null }, { parti: "ip92", oy: null }, { parti: "odp", oy: null }, { parti: "ldp", oy: null }, { parti: "emep", oy: null }, { ad: "Diğer", partiSayisi: 9, oy: null }, { ad: "Bağımsız", oy: null } ],
       buyuksehir: { istanbul: { parti: "akp" }, ankara: { parti: "akp" }, izmir: { parti: "chp92" } },
       not: "Büyükşehir belediye başkanlığı seçimi bu kez 16 yerine 30 ilde yapıldı ve 20.500 belediye meclisi üyeliği için oy verildi; ülke geneli belediye meclisi sayılarını yalnızca YSK yayımladığı ve bağımsız ikinci bir kurumsal kaynakla eşleştirilemediği için bu sayılar boş bırakıldı." },
 
     // kaynak: araclar/kaynak-defteri.md#2014-08-cb-halk
     { id: "2014-08-cb-halk", tur: "cb-halk", tarih: "2014-08-10",
       turlar: [ { tarih: "2014-08-10", kayitli: 55692841, kullanilan: 41283627, gecerli: 40545911,
-        adaylar: [ { ad: "Recep Tayyip Erdoğan", parti: "akp", oy: 21000143 }, { ad: "Ekmeleddin Mehmet İhsanoğlu", destek: "CHP ve MHP'nin ortak adayı", oy: 15587720 }, { ad: "Selahattin Demirtaş", parti: "hdp", oy: 3958048 } ] } ],
+        adaylar: [ { ad: "Recep Tayyip Erdoğan", parti: "akp", oy: 21000143 }, { ad: "Ekmeleddin Mehmet İhsanoğlu", destek: "CHP ve MHP'nin ortak adayı", oy: 15587720 }, { ad: "Selahattin Demirtaş", destek: "HDP adayı", oy: 3958048 } ] } ],
       secilen: "Recep Tayyip Erdoğan",
       not: "Cumhurbaşkanının ilk kez halk tarafından seçildiği bu seçimde Erdoğan geçerli oyların salt çoğunluğunu ilk turda aldığı için 24 Ağustos'a hazırlanan ikinci tura gerek kalmadı." },
 
     // kaynak: araclar/kaynak-defteri.md#2015-06-genel
     { id: "2015-06-genel", tur: "genel", tarih: "2015-06-07", tekParti: false,
       meclis: 550, kayitli: 56608817, kullanilan: 47507467, gecerli: 46163243, baraj: 10,
       sonuc: [ { parti: "akp", oy: 18867411, sandalye: 258 }, { parti: "chp92", oy: 11518139, sandalye: 132 }, { parti: "mhp93", oy: 7520006, sandalye: 80 }, { parti: "hdp", oy: 6058489, sandalye: 80 }, { parti: "sp", oy: 949178, sandalye: 0 }, { parti: "vatan", oy: 161674, sandalye: 0 }, { parti: "dsp", oy: 85810, sandalye: 0 }, { parti: "dp07", oy: 75784, sandalye: 0 }, { parti: "anadolu", oy: 27688, sandalye: 0 }, { parti: "ldp", oy: 26500, sandalye: 0 }, { ad: "Diğer", partiSayisi: 10, oy: 384338, sandalye: 0 }, { ad: "Bağımsız", oy: 488226, sandalye: 0 } ],
       not: "HDP'nin ilk kez parti olarak girip barajı aştığı bu seçimde hiçbir parti tek başına hükümet kuracak çoğunluğu sağlayamadı; sayılar yurt içi, yurt dışı ve gümrük sandıklarının toplamıdır." },
 
     // kaynak: araclar/kaynak-defteri.md#2015-11-genel
```
