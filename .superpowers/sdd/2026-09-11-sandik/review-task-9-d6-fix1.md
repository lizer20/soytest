# İnceleme paketi: task-9-d6-fix1 (6ed60d4..df8e6ae)

## Commitler
```
df8e6ae Düzeltme: dönem 6 — aday partileri, yerel toplamlar, referandum tutumları
00573ad Doğrulayıcı: cb-halk adaylarında ad kişi adıdır
```
## Özet
```
 araclar/dogrula.js           |  10 ++-
 araclar/kaynak-defteri.md    | 194 +++++++++++++++++++++++++++++++++++++++++--
 araclar/test/dogrula.test.js |  10 +++
 veri/sandik.js               |  23 ++---
 4 files changed, 216 insertions(+), 21 deletions(-)
```
## Fark
```diff
diff --git a/araclar/dogrula.js b/araclar/dogrula.js
index 448d616..9e6342a 100644
--- a/araclar/dogrula.js
+++ b/araclar/dogrula.js
@@ -27,24 +27,28 @@ function dogrulaSandik(P, S) {
     if (idler.has(k.id)) hatalar.push("yinelenen kimlik: " + k.id);
     idler.add(k.id);
     if (!TURLER.includes(k.tur)) hatalar.push("bilinmeyen tür: " + k.id + " → " + k.tur);
     if (!/^\d{4}-\d{2}-[a-z-]+$/.test(k.id) || k.id.slice(0, 7) !== k.tarih.slice(0, 7) ||
         k.id.slice(8) !== k.tur) hatalar.push("kimlik tarihle uyuşmuyor: " + k.id);
     if (!/^\d{4}-\d{2}(-\d{2})?$/.test(k.tarih)) hatalar.push("geçersiz tarih biçimi: " + k.id + " → " + k.tarih);
     if (i > 0 && S.secimler[i - 1].tarih > k.tarih) hatalar.push("secimler tarih sırasında değil: " + k.id);
   });
 
   // satır düzeyi denetimler
-  function satirlariDenetle(k, satirlar, gecerli, yer) {
+  function satirlariDenetle(k, satirlar, gecerli, yer, aday) {
     let toplam = 0, hepsi = true, yuzdeler = [];
     for (const s of satirlar) {
-      if (s.parti && s.ad) hatalar.push(k.id + ": satırda hem parti hem ad (" + s.parti + ")");
+      // Cumhurbaşkanı adaylarında `ad` kişinin adıdır; partisi `parti`, ittifakı `destek` ile yazılır.
+      if (aday) {
+        if (!s.ad) hatalar.push(k.id + ": adayın adı yok" + (yer ? " (" + yer + ")" : ""));
+        if (s.parti && s.destek) hatalar.push(k.id + ": adayda hem parti hem destek (" + s.ad + ")");
+      } else if (s.parti && s.ad) hatalar.push(k.id + ": satırda hem parti hem ad (" + s.parti + ")");
       partiDenetle(s.parti, k.id);
       if (s.oy != null && s.oyYuzde != null) hatalar.push(k.id + ": aynı satırda oy ve oyYuzde");
       if (s.oy == null) hepsi = false; else toplam += s.oy;
       if (s.oyYuzde != null) yuzdeler.push(s.oyYuzde);
     }
     if (gecerli != null && satirlar.length) {
       if (toplam > gecerli || (hepsi && toplam !== gecerli))
         hatalar.push(k.id + ": oy toplamı " + toplam + ", geçerli " + gecerli + (yer ? " (" + yer + ")" : ""));
     }
     if (yuzdeler.length && yuzdeler.length === satirlar.length) {
@@ -86,21 +90,21 @@ function dogrulaSandik(P, S) {
       if (!REF_SONUC.includes(k.karar)) hatalar.push(k.id + ": bilinmeyen referandum sonucu " + k.karar);
       if (k.evet != null && k.hayir != null && k.gecerli != null && k.evet + k.hayir !== k.gecerli)
         hatalar.push(k.id + ": evet + hayır " + (k.evet + k.hayir) + ", geçerli " + k.gecerli);
       for (const t of k.tutumlar || []) {
         partiDenetle(t.parti, k.id + " tutum");
         if (!TUTUMLAR.includes(t.tutum)) hatalar.push(k.id + ": bilinmeyen tutum " + t.tutum);
       }
     }
     if (k.tur === "cb-halk") (k.turlar || []).forEach((t, i) => {
       secmenDenetle(k, t, (i + 1) + ". tur");
-      satirlariDenetle(k, t.adaylar || [], t.gecerli, (i + 1) + ". tur");
+      satirlariDenetle(k, t.adaylar || [], t.gecerli, (i + 1) + ". tur", true);
     });
     if (k.tur === "ara") for (const s of k.sonuc || []) partiDenetle(s.parti, k.id);
 
     if (k.tur === "genel" || k.tur === "ara")
       for (const s of k.sonuc || [])
         if (s.ad && s.ad !== "Bağımsız" && s.ad !== "Diğer" && s.sandalye > 0)
           uyarilar.push("soyağacında olmayan ama sandalye kazanan: " + s.ad + " (" + k.id + ")");
 
     // — sayısı (bilinmeyen sayısal alanlar)
     const y = M.donemBul(k.tarih);
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index a7d39f6..472aa82 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -3025,23 +3025,23 @@ başlangıcı **tam çakışıyor**, zincir boşluksuz.
   Başkanı** Ahmet DAVUTOĞLU" → AK Parti.
   **Hangi partiler bakan verdi:** ikinci kaynak **Demirkol (2023), s. 381**: "2015 yılında
   kurulan seçim hükümetinde de **muhalefetteki CHP ve MHP 63. Hükümete bakan vermeyi reddettiği**
   için atanmış bakan oranı %53,6 olmuştur." 25. Dönem TBMM'sinde grubu olan partiler [B] YSK
   96/E'ye göre AK PARTİ, CHP, MHP ve HDP'dir; CHP ile MHP bakan vermediğine göre AK Parti dışında
   bakan veren tek grup **HDP**'dir. Listede AK Parti dışından iki milletvekili bakan vardır:
   **Kocaeli Milletvekili Ali Haydar KONCA** (Avrupa Birliği Bakanı) ve **İzmir Milletvekili
   Müslüm DOĞAN** (Kalkınma Bakanı); [B] YSK "25. Dönem Milletvekili Genel Seçimi — Partilerin
   Kazandığı Milletvekili Sayıları" (`…/7Haziran2015/2015-MV_dagilimlari.pdf`) Kocaeli'de HDP 1,
   İzmir-1 ve İzmir-2'de HDP 1'er milletvekili gösteriyor.
-  **Sınırlılık:** bu iki bakanın HDP'li olduğunu *adıyla* söyleyen bir [B] belge bulunamadı;
-  `partiler: ["akp","hdp"]` yukarıdaki iki bağımsız kaynağın (RG metni + Demirkol) kapsayıcı
-  çıkarımına dayanıyor. Haber kaynakları kullanılmadı.
+  ~~**Sınırlılık:** bu iki bakanın HDP'li olduğunu adıyla söyleyen bir [B] belge bulunamadı.~~
+  **→ Düzeltme turu 1 (2026-09-25) madde 4: YSK'nın 7 Haziran 2015 Kesin Aday Listesi ve
+  milletvekili dağılımı tablosuyla iki bakanın HDP milletvekili olduğu [B] kanıtlandı.**
 - **63 — bitiş nedeni `erken-secim`:** 1 Kasım 2015 yenileme seçimi yapıldı ([B] YSK 96/D–E) ve
   64. Hükümet 24 Kasım 2015'te kuruldu. Demirkol (2023) 63'ü "**2015 yılında kurulan seçim
   hükümeti**" diye anıyor (s. 375, 381).
 - **64 — başlangıç 24.11.2015:** [B] RG 24.11.2015 mükerrer: "T.C. BAŞBAKANLIK **24 Kasım
   2015** … Ahmet DAVUTOĞLU Başbakan — BAKANLAR KURULU LİSTESİ" (27 üyenin tamamı milletvekili,
   mükerrer kapağı "…Adalet ve Kalkınma Partisi Genel Başkanı Ahmet DAVUTOĞLU"). `tip: tek-parti`
   ([B] YSK 96/E: AK Parti 317/550 çoğunluk).
 - **64 — bitiş 24.5.2016, `bitisNedeni: null`:** [B] RG 24.5.2016/29721 mükerrer, "**İzmir
   Milletvekili ve Adalet ve Kalkınma Partisi Genel Başkanı Binali YILDIRIM** Başkanlığında
   Kurulan Bakanlar Kurulunun Atanmasına Dair Tezkere" → 65. hükümetin kuruluşu. 64. Hükümet'in
@@ -3113,23 +3113,23 @@ ayrı bir göreve bırakıldı.
   - **İzmir** (geçerli 1.192.541): **CHP 562.561**, AK PARTİ 388.336, GENÇ P. 71.671,
     MHP 48.535, SHP 49.382 → CHP kazandı.
   - **Çapraz doğrulama:** aynı raporun "Türkiye" satırı (kayıtlı 15.426.031, kullanan 10.891.703,
     geçerli 10.468.870; AK PARTİ 4.822.636, CHP 2.560.382, SHP 769.187, DYP 565.626,
     MHP 535.426, SAADET 423.014, GENÇ P. 317.128, DSP 237.509, ANAP 81.141, BBP 45.815,
     BTP 28.487, İP 18.802, TKP 17.965, ATP 11.189, YTP 10.667, MP 6.512, BAĞIMSIZ 16.244,
     EMEP 1.140) **[B] YSK "B-) Büyükşehir Belediyesi Başkanlığı Seçimi Sonucu"**
     (`…/2004MahalliIdareler/buyuksehir/Buyuksehir.pdf`, aynı YSK kararı/RG künyesi) ile
     **22 satırın tamamında birebir** aynıdır. YSK bu ölçüyü yalnızca ülke toplamı olarak,
     TÜİK ise şehir şehir yayımlıyor.
-  - **Sınırlılık:** üç şehrin **şehir bazındaki** rakamlarını yayımlayan ikinci bir kurum
-    bulunamadı (YSK 2004 sayfasında sadece 8 dosya var, il kırılımı yok); yukarıdaki birebir
-    örtüşme aynı resmî veri kümesinin iki kurumca yayımlandığını gösteriyor.
+  - ~~**Sınırlılık:** üç şehrin şehir bazındaki rakamlarını yayımlayan ikinci bir kurum
+    bulunamadı.~~ **→ Düzeltme turu 1 (2026-09-25) madde 3: YSK'nın kendi şehir bazlı 2004
+    büyükşehir dosyaları bulundu, alan artık iki [B] kaynaklı.**
 - **`tarih`: 28 Mart 2004** — [B] YSK belgesinin başlığı ve "1- Bu tesbitler, **28 Mart 2004
   günü** sandık kurullarınca düzenlenip…" açıklaması.
 - Erişim: 2026-09-23.
 
 ### 2009-03-yerel
 
 - **[B] YSK, "LİSTE - 4 / 29.03.2009 Genel Mahalli İdareler Seçim Sonucu — Belediye Meclisi
   Üyeliği Seçimleri Sonucu"**
   (`…/docs/2009MahalliIdareler/ResmiGazete/BelediyeMeclisUyeligi.pdf`):
   kayıtlı seçmen (cezaevi seçmenleri dahil) **39.787.986**, oy kullanan **33.447.257**
@@ -3192,21 +3192,21 @@ ayrı bir göreve bırakıldı.
     **AK PARTİ 4.101.906** > CHP 3.428.454; Ankara (geçerli 3.162.112) **AK PARTİ 1.417.212** >
     CHP 1.385.576 (fark 31.636); İzmir (geçerli 2.637.550) **CHP 1.308.134** > AK PARTİ 947.516.
     Aynı raporun "Türkiye" satırı (kayıtlı 40.727.194, kullanan 36.440.968, geçerli 34.913.716;
     AK PARTİ 15.898.025, CHP 10.835.876, MHP 4.764.833, BDP 1.079.026, HDP 817.494,
     SAADET 579.231, BBP 248.169 …) **[B] YSK "LİSTE-2 Büyükşehir Belediye Başkanlığı Seçimleri
     Sonucu"** ile birebir aynıdır. Uyuşmazlık: yok.
   - **Ankara itirazı:** kayıttaki değer YSK'nın **kesinleşmiş** sonucudur (yukarıdaki "Kazanan
     Adaylar" listesi); itiraz süreci kaynak belgelere yansımadığı için `not` alanına yazılmadı.
 - Erişim: 2026-09-23.
 
-**Yerel seçimlerde ikinci kaynak sorunu (2004, 2009, 2014) — açık uyarı:** ülke geneli
+**Yerel seçimlerde ikinci kaynak sorunu (2004, 2009, 2014) — açık uyarı** (→ **Düzeltme turu 1 madde 2: ikinci kaynak bulunamadı, ulusal sayılar `null` yapıldı**)**:** ülke geneli
 **belediye meclisi** rakamlarının birincil kaynağı YSK'nın kesin sonuç ilanıdır (2004'te
 belgenin künyesinde YSK Kararı 2002 ve Resmî Gazete 12.5.2004/25460 yazılı; 2009 ve 2014
 belgeleri YSK'nın "ResmiGazete" klasöründen alınmıştır). Bu ölçüyü (belediye meclisi) ülke
 geneli olarak yayımlayan **YSK dışında bir kurum bulunamadı**: TÜİK'in Veri Portalı yalnızca
 İl Genel Meclisi tablolarını indirilebilir yapıyor, TÜİK'in Mahalli İdareler Veri Tabanı'nda
 belediye meclisi için ülke toplamı üreten bir rapor seçeneği yok (yalnızca il/ilçe ve belediye
 kırılımı; "Bölge sonucu" yalnızca 2014–2024). Yapılan doğrulama, her üç belgenin **kendi parti
 satırlarının toplamının belgenin kendi "TOPLAM" satırına tam eşit** olmasıdır (üçünde de fark
 sıfır). Büyükşehir ölçüsünde ise TÜİK ile YSK'nın ülke toplamları **birebir** örtüşüyor
 (2004 ve 2014 için satır satır doğrulandı), yani iki kurum aynı resmî veriyi yayımlıyor.
@@ -3281,10 +3281,190 @@ sıfır). Büyükşehir ölçüsünde ise TÜİK ile YSK'nın ülke toplamları
 - **Bulunamayanlar:** seçimin **günü/ayı**, **seçim çevresi başına sandalye sayısı** ve
   **sonucu** hiçbir okunabilir resmî belgede bulunamadı. 11.3.2003 mükerrer Resmî Gazete
   (`resmigazete.gov.tr/eskiler/2003/03/20030311M1.htm`) yalnızca **taranmış görüntülerden**
   (`20030311M1-1.gif`, `20030311M1-2.gif`) oluşuyor, metin katmanı yok; YSK'nın karar arşivinde
   `Kararlar/2003Pdf/2003-212.pdf` adresi PDF döndürmüyor; YSK'nın "Ara Seçim Arşivi" sayfası
   yalnızca 2009 ve sonrasındaki **mahalli idareler** ara seçimlerini listeliyor.
 - Bu yüzden `2003-03-ara` kaydı **eklenmedi**. Bir sonraki turda denenecekler: 11.3.2003
   mükerrer RG görüntülerinin OCR'ı; TBMM 22. Dönem tutanaklarında yeni Siirt milletvekillerinin
   andiçme birleşimi; YSK'nın karar arama motoru (`ysk.gov.tr/tr/ysk-kararlari/1524`).
 - Erişim: 2026-09-23.
+
+## Düzeltme turu 1 (2026-09-25) — dönem 6 controller incelemesi sonrası (SPEC ❌ → düzeltildi)
+
+İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d6-verdict.md`.
+Bulgular: **Important #1** (2014 CB adayları `destek:` ile yazılmış), **#2** (yerel ulusal
+belediye meclisi sayıları tek kaynaklı), **#3** (2004 büyükşehir tek kaynaklı),
+**#4** (hükümet 63'ün `partiler` alanı çıkarım), **#5** (referandum `tutumlar` boş),
+ayrıca ham kaynak kanıtı ve 2003 Siirt iddiasının kanıtlanması.
+
+### 1. `2014-08-cb-halk` adayları — `parti:` ile bağlandı (çözüldü)
+
+`araclar/dogrula.js` commit `00573ad` ile düzeltildiği için aday satırında `ad:` (kişi adı) ve
+`parti:` birlikte kullanılabiliyor. Veri güncellendi:
+- **Recep Tayyip Erdoğan → `parti: "akp"`.** [B] YSK Kararı 2014/3579 (7/8/2014): AK Parti Genel
+  Başkan Yardımcısı'nın dilekçesinde "…partilerinin pankartın sahibi adayı desteklemediği,
+  **Cumhurbaşkanı adayı Başbakan Recep Tayyip ERDOĞAN'ı desteklediğinin** her türlü izahtan
+  vareste olduğu…". İkinci kaynak: Selçuk İletişim (karikatür makalesi) İngilizce özeti —
+  "…Erdoğan **for the Ak Party**…".
+- **Selahattin Demirtaş → `parti: "hdp"`** (çatı aday değil, HDP adayı). İki bağımsız akademik
+  kaynak: (a) **Bekir Berat Özipek, "Türkiye Siyasetinde 2014 Cumhurbaşkanlığı Seçimi"**
+  (`dergipark.org.tr/en/download/article-file/790586`): "…İhsanoğlu ve üçüncüsü de **HDP adayı
+  Selahattin Demirtaş**'tı."; (b) **Selçuk İletişim**, "2014 Cumhurbaşkanlığı Seçimindeki
+  Cumhurbaşkanı Adaylarının Karikatürlere Yansıması"
+  (`dergipark.org.tr/tr/download/article-file/178268`), İngilizce özet: "…**Selahattin Demirtaş
+  for the HDP**…" ve Türkçe metin: "…tin Demirtaş, **MHP ve CHP'nin ortak adayları ise,
+  Ekmeleddin İhsanoğlu** olmuştur." (aynı cümle Demirtaş'ı İhsanoğlu'ndan ayırıyor: ortak aday
+  yalnızca İhsanoğlu'dur).
+- **Ekmeleddin Mehmet İhsanoğlu → `destek: "CHP ve MHP'nin ortak adayı"`** (tek bir partinin
+  adayı olmadığı için `parti:` yazılmadı; yukarıdaki iki akademik kaynak + [B] YSK 2014/3579'un
+  "rakip partilerin adayı" ifadesi).
+
+### 2. Yerel seçimlerin ülke geneli belediye meclisi sayıları — `null`'a çekildi (çözüldü)
+
+**Aranan yerler ve bulunan:**
+- **TÜİK Veri Portalı** (`veriportali.tuik.gov.tr`, "belediye meclisi" ve "halkoylaması"
+  aramaları): indirilebilir tablolar yalnızca **İl Genel Meclisi Üyeleri Seçimi Sonuçları
+  (1963-1977 / 1984-2009 / 2014)** — belediye meclisi için ulusal tablo yok.
+- **TÜİK Mahalli İdareler Seçim Sonuçları Veri Tabanı**
+  (`biruni.tuik.gov.tr/secimdagitimapp/yerel.zul`): "Belediye meclisi üyeliği" seçildiğinde
+  "Belediye sonucu / Bölge sonucu / Sandık sonucu / Kazanan adayların listesi" alt seçenekleri
+  çıkıyor ama **"İl seçimi" listesi doğrudan "Adana" ile başlıyor; "<< Tüm iller >>" seçeneği
+  YOK** (aynı liste "Büyükşehir belediye başkanlığı"nda "<< Tüm iller >>" ile başlıyor ve
+  "Türkiye" satırlı rapor üretiyor). "Bölge sonucu" yalnızca 2024/2019/2014 sunuyor ve bölge
+  seçimi istiyor. Dolayısıyla TÜİK bu ölçü için **ülke toplamı üretmiyor**.
+- **TÜİK yayını No. 3584, *Mahalli İdareler Seçimi 29.03.2009*** (`tuik.gov.tr/indir/secim_2009/aklama.pdf`,
+  11 s., `pdftotext -layout`): İÇİNDEKİLER'de belediye meclisi için üç tablo var
+  ("4.1 Belediyelere göre…", "4.2 Sandık kurullarına göre…", "4.3 …kazanan belediye meclisi
+  üyeleri") — **Türkiye toplamı tablosu yok**. Aynı yayının "3.1 Veri derleme tekniği" bölümü
+  ayrıca şunu söylüyor: "2009 seçimlerine kadar, tablolarında yer alan **Türkiye toplam
+  sonuçları**, il seçim kurulları tarafından YSK'ya gönderilen ve **YSK tarafından Resmi
+  Gazete'de ilan edilen sonuçlardan** … üzerinde hiçbir değişiklik yapılmaksızın … aynen
+  yayımlanmıştır." — yani TÜİK'in ulusal rakamları zaten YSK'nın rakamlarının aynen
+  tekrarıdır, bağımsız bir ikinci kaynak değildir.
+- **Resmî Gazete:** 2004 için YSK belgesinin künyesindeki 12.5.2004/25460 sayısı açıldı;
+  ilgili "Yüksek Seçim Kurulunun No: 2002 Sayılı Kararı" sayfa içi bir bağlantı (`#23`) ve
+  metin katmanı vermiyor.
+- **Sonuç:** bağımsız ikinci kaynak bulunamadı. Spesifikasyon §8.1 ve dönem 4/5 emsali gereği
+  `2004-03-yerel`, `2009-03-yerel` ve `2014-03-yerel` kayıtlarının `kayitli`, `kullanilan`,
+  `gecerli` alanları ve bütün `sonuc` satırlarının `oy` değerleri **`null`** yapıldı; parti
+  listesi (ve "Diğer"in `partiSayisi` değeri) korundu. Hesaplanan ham sayılar bu defterin
+  yukarıdaki dönem 6 bölümünde kayıtlıdır ve kaynak bulunduğunda doğrudan geri yazılabilir.
+- **1984/1989/1994/1999 boşluğu:** aynı arama bu yıllar için de sonuç vermedi (TÜİK'in ulusal
+  belediye meclisi tablosu hiçbir yıl için yok). Buna karşılık YSK'nın
+  `doc/dosyalar/docs/Mahalli/<yıl>/BelediyeMeclis/Pdf/<yıl>Mahalli-BelediyeMeclis-<İl>.pdf`
+  ağacının **1994 ve 1999 için de** var olduğu bu turda tespit edildi (arama motoru üzerinden:
+  `…/Mahalli/1994/BelediyeMeclis/Pdf/1994Mahalli-BelediyeMeclis-istanbul.pdf`,
+  `…/Mahalli/1999/BelediyeMeclis/Pdf/1999Mahalli-BelediyeMeclis-Adana.pdf`). Bu il dosyaları
+  dönem 5'in "1999'da dört il eksik" sorununu çözebilir ama **yine YSK kaynağıdır**, ikinci
+  kaynak sorununu çözmez; bu yüzden dönem 4/5 kayıtlarına dokunulmadı ve bulgu Görev 12'ye not
+  edildi.
+
+### 3. `2004-03-yerel.buyuksehir` — ikinci kaynak bulundu (çözüldü, alan korundu)
+
+YSK'nın 2004 arşiv sayfasında görünmeyen ama sunucuda duran bir dosya ağacı bulundu:
+`https://www.ysk.gov.tr/doc/dosyalar/docs/Mahalli/2004/Buyuksehir/Pdf/2004Mahalli-Buyuksehir-<İl>.pdf`
+(dosya adlarında il adı; `istanbul`, `izmir` küçük harfle, `Ankara` büyük harfle). Üç şehrin
+"Belediyelere göre Büyükşehir Belediye Başkanlığı Seçimi sonucu" tablosunun toplam satırı
+(`pdftotext -table`):
+
+| | Geçerli oy | AK PARTİ | CHP | SHP | MHP | DYP | GENÇ P. |
+|---|---|---|---|---|---|---|---|
+| **İstanbul** | 4.231.487 | **1.917.577** | 1.223.856 | 153.840 | 173.274 | 206.410 | 145.120 |
+| **Ankara** | 1.636.633 | **901.001** | 206.630 | 341.231 | 74.815 | 32.376 | 26.477 |
+| **İzmir** | 1.192.541 | 388.336 | **562.561** | 49.382 | 48.535 | 32.708 | 71.671 |
+
+Bu üç tablo, daha önce ikinci kaynak olarak kullanılan **TÜİK Mahalli İdareler Seçim Sonuçları
+Veri Tabanı**'nın "Belediyelere göre 28 Mart 2004 Büyükşehir Belediye Başkanlığı Seçimi sonucu"
+raporundaki İstanbul/Ankara/İzmir satırlarıyla **bütün sütunlarda birebir** aynıdır.
+→ `buyuksehir` alanı artık **[B] YSK + [B] TÜİK** (iki ayrı kurum, iki ayrı yayın) ile
+karşılanıyor; İstanbul AK Parti, Ankara AK Parti, İzmir CHP. Alan kaldırılmadı.
+
+### 4. Hükümet 63'ün `partiler` alanı — [B] kanıt bulundu (çıkarım kaldırıldı)
+
+Artık üç [B] belgeye dayanıyor:
+1. **[B] Resmî Gazete 28.8.2015 / 29459 4. mükerrer**, "GEÇİCİ BAKANLAR KURULU LİSTESİ":
+   "8 **Kocaeli Milletvekili Ali Haydar KONCA** Avrupa Birliği Bakanı", "19 **İzmir Milletvekili
+   Müslüm DOĞAN** Kalkınma Bakanı"; kabine başkanı "Konya Milletvekili ve **Adalet ve Kalkınma
+   Partisi Genel Başkanı** Ahmet DAVUTOĞLU"; ayrıca "Adalet, İçişleri ve Ulaştırma, Denizcilik
+   ve Haberleşme Bakanları **bağımsızlardan**".
+2. **[B] YSK, 7 Haziran 2015 Milletvekili Seçimleri Kesin Aday Listesi (Örnek: 41)**
+   (`…/Milletvekili/7Haziran2015/2015MV-KesinAdayListesi.pdf`, `pdftotext -table`):
+   - "KOCAELİ İLİ SEÇİM ÇEVRESİ … **HALKLARIN DEMOKRATİK PARTİSİ** … 1 **ALİ HAYDAR KONCA**
+     YÜKSEK HUKUKÇU" (PDF s. 240–245).
+   - "İZMİR-2 NOLU SEÇİM ÇEVRESİ … **HALKLARIN DEMOKRATİK PARTİSİ** … 1 **MÜSLÜM DOĞAN**
+     YÜKSEK MÜHENDİS" (PDF s. 200–206).
+3. **[B] YSK, "25. Dönem Milletvekili Genel Seçimi (7 Haziran 2015) — Partilerin Kazandığı
+   Milletvekili Sayıları"** (`…/7Haziran2015/2015-MV_dagilimlari.pdf`): "56 KOCAELİ … HDP **1**
+   … TOPLAM 11"; "45 İZMİR-2 … HDP **1** … TOPLAM 13". Her iki çevrede HDP listesinden yalnızca
+   **birinci sıradaki** aday seçilebildiğine göre, RG'de adı geçen iki bakan HDP
+   milletvekilidir.
+
+→ `partiler: ["akp","hdp"]` artık çıkarım değil, [B] belgelerle kurulmuş bir zincirdir.
+İkinci kaynak (akademik) olarak Demirkol (2023), s. 381 aynı yönde: "2015 yılında kurulan seçim
+hükümetinde de **muhalefetteki CHP ve MHP 63. Hükümete bakan vermeyi reddettiği** için atanmış
+bakan oranı %53,6 olmuştur." Kaydın `not` cümlesi de güncellendi: "…geçici seçim hükümetinde
+AK Parti'nin yanında **iki HDP milletvekili bakan oldu**, Adalet, İçişleri ve Ulaştırma
+bakanlıkları ise bağımsızlara verildi."
+
+### 5. Referandum `tutumlar`
+
+**2010-09-referandum — dört parti yazıldı** (her biri en az iki bağımsız akademik kaynakla):
+- **AK Parti → `evet`:** (a) Neslihan YOLÇU, "12 Eylül Anayasa Referandumunda Siyasal Partilerin
+  İnternet Kullanımı ve Kampanya Söylemleri", *AJIT-e*
+  (`dergipark.org.tr/tr/download/article-file/1114492`): "…yer verilmiştir. **Ak Parti
+  seçmenlerden referandumda evet oyu**, CHP ile MHP ise hayır oyları [istemiştir]";
+  (b) Yönetim Bilimleri Dergisi 9(2) 2011 (`…/article-file/705499`): "araştırmada '**evet**'
+  oylarının büyük oranda '**AKP iktidarının**' …".
+- **CHP → `hayir`:** (a) YOLÇU, aynı cümle ("**CHP ile MHP ise hayır oyları**");
+  (b) Yönetim Bilimleri 9(2): "Referandum, **CHP ve MHP'nin 'hayır' kampanyası**" çerçevesinde…".
+- **MHP → `hayir`:** (a) YOLÇU, aynı cümle; (b) Yönetim Bilimleri 9(2), aynı cümle; ayrıca
+  (c) Levent YAYLAGÜL & Cengiz ÇİÇEK, "12 Eylül 2010 Referandum Sürecinin Türkiye'deki Yazılı
+  Basında Sunumu", *folklor/edebiyat* 17(68), 2011 (`…/article-file/255368`): "Cumhuriyet
+  **MHP**, DP, İP, TKP gibi siyasi partilerin savunduğu '**Hayır**'cı …".
+- **BDP → `boykot`:** (a) YOLÇU: "**Barış ve Demokrasi Partisi (BDP) ise boykot etme kararı
+  alarak**, [seçmenlerinden] sandığa gitmeyerek boykot etmelerini [istemiştir]";
+  (b) YAYLAGÜL & ÇİÇEK: "**Söylem III- (Boykotçu Kamp): Siyasal yaşamda BDP**";
+  (c) Yönetim Bilimleri 9(2): "…referandumu **boykot çağrısıyla** karşılayan **BDP** gibi
+  muhalefet partileri…".
+- **Yazılmayanlar:** DP, İP, TKP, BBP, Saadet Partisi, ÖDP, EMEP. Bunlar tek bir kaynakta
+  (YAYLAGÜL & ÇİÇEK'te bir cümlede) anılıyor; ikinci kaynakla doğrulanamadıkları için
+  spesifikasyon §5.4 gereği listeye **hiç yazılmadı**.
+
+**2007-10-referandum — `tutumlar` yazılmadı (bulunamadı).** Yapılan tarama:
+- `dergipark.org.tr` üzerinde "21 Ekim 2007 halkoylaması / anayasa değişikliği / partilerin
+  tutumu" aramaları; indirilip `pdftotext` ile taranan makaleler: Cem EROĞUL, "2007
+  Cumhurbaşkanı Seçimi Bunalımından Çıkarılabilecek Dersler" (*AÜ SBF*), "Türkiye Cumhuriyeti
+  Anayasalarında Cumhurbaşkanlığı Makamının Önemi ve 2007 Yılı Anayasa Değişiklikleri…"
+  (`…/article-file/288967`), TUNÇ & ÇELİK, "Türkiye'de Yapılan Halkoylamaları ve Bunların
+  Ağrı'daki Yansımaları" (*Karadeniz Araştırmaları* XVIII/71, `…/article-file/2277549`),
+  Abdullah MENEK, "367 Garabeti ve 2007 Referandumu" (`…/article-file/1871993`).
+- Bunlardan **yalnızca MENEK** bir parti tutumu veriyor: "**CHP bu referandumda da hayır oyu
+  kullandı**, fakat akıntıya karşı kürek sallamanın da anlamsızlığının farkındaydı." Tek kaynak
+  olduğu için yazılmadı.
+- **2007'de TBMM oylaması kaynak olarak kullanılamaz:** 5678 sayılı Kanun TBMM'de MHP'nin de
+  oylarıyla kabul edilmişti, oysa MHP referandum kampanyasında farklı bir tutum açıkladı;
+  yani TBMM tutanağı bu referandumdaki `tutum` için geçerli bir kanıt değildir. Bu yüzden
+  2007'nin `tutumlar` alanı boş bırakıldı ve Görev 12'ye devredildi.
+
+### 6. 2003 Siirt seçimi — "taranmış GIF" iddiasının kanıtı
+
+- **[B] Resmî Gazete 12.3.2003 künye satırı:** "**11/3/2003 Tarihli ve 25045 Mükerrer sayılı
+  Resmî Gazete'de, 212 sayılı Yüksek Seçim Kurulu Kararı yayımlanmıştır.**"
+- **O mükerrer sayının tamamı** (`https://www.resmigazete.gov.tr/eskiler/2003/03/20030311M1.htm`,
+  **3.023 bayt**) yalnızca üç `<img>` etiketi içeriyor, metin yok:
+  ```html
+  <img border="0" src="T.C.-resmi-gazete.gif" width="357" height="110">
+  <img border="0" src="20030311M1-1.gif" width="630" height="640">
+  <img border="0" src="20030311M1-2.gif" width="630" height="766">
+  ```
+  İki görüntü indirilip türü doğrulandı:
+  `20030311M1-1.gif -> GIF image data, version 89a, 630 x 640`,
+  `20030311M1-2.gif -> GIF image data, version 89a, 630 x 766`. Ortamda OCR aracı yok.
+- **YSK karar arşivi:** `https://www.ysk.gov.tr/doc/dosyalar/docs/Kararlar/2003Pdf/2003-212.pdf`
+  → HTTP 200 ama içerik **PDF değil**, YSK portalının 123.497 baytlık HTML hata sayfası
+  (`<!DOCTYPE html> <html data-ng-app="yskWeb" …`). Aynı adres deseni 2002, 2007, 2010, 2011,
+  2014 ve 2015 kararları için çalışıyor; 2003 klasörü yok.
+- **YSK "Ara Seçim Arşivi"** (`ysk.gov.tr/tr/ara-secim-arsivi/2624`, tarayıcıyla DOM'dan
+  okundu) yalnızca 2009, 2010, 2012, 2014, 2016, 2017 ve 2026 **mahalli idareler** ara
+  seçimlerini listeliyor; milletvekili ara/yenileme seçimi yok.
+→ `2003-03-ara` kaydı eklenmedi; Görev 12'ye devredildi.
diff --git a/araclar/test/dogrula.test.js b/araclar/test/dogrula.test.js
index 9972374..8125884 100644
--- a/araclar/test/dogrula.test.js
+++ b/araclar/test/dogrula.test.js
@@ -114,10 +114,20 @@ test("soyağacında olmayan ama sandalye kazanan parti uyarılır", () => {
 test("tarih biçimi: ay hassasiyeti kabul, bozuk biçim hata", () => {
   const S = kopya();
   bul(S, "1927-09-genel").tarih = "1927-09";          // günü bilinmeyen kayıt
   assert.doesNotMatch(hatalar(S), /geçersiz tarih biçimi/);
   bul(S, "1999-04-genel").tarih = "1999-4-18";
   assert.match(hatalar(S), /geçersiz tarih biçimi: 1999-04-genel/);
   const T = kopya();
   T.hukumetler[0].baslangic = "1999-05";
   assert.match(hatalar(T), /hükümet tarihi gün dahil olmalı: 57/);
 });
+
+test("cb-halk adayında ad kişinin adıdır; parti ile birlikte yazılabilir", () => {
+  const S = { secimler: [{ id: "2014-08-cb-halk", tur: "cb-halk", tarih: "2014-08-10",
+    turlar: [{ tarih: "2014-08-10", kayitli: null, kullanilan: null, gecerli: 100,
+      adaylar: [{ ad: "A", parti: "akp", oy: 60 }, { ad: "B", destek: "Çatı", oy: 40 }] }],
+    secilen: "A", not: null }], hukumetler: [] };
+  assert.deepEqual(dogrulaSandik(P, S).hatalar, []);
+  S.secimler[0].turlar[0].adaylar[1] = { ad: "B", parti: "chp92", destek: "Çatı", oy: 40 };
+  assert.match(dogrulaSandik(P, S).hatalar.join("|"), /hem parti hem destek/);
+});
diff --git a/veri/sandik.js b/veri/sandik.js
index 0060576..76a528a 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -376,24 +376,24 @@ window.SANDIK = {
 
     // kaynak: araclar/kaynak-defteri.md#2002-11-genel
     { id: "2002-11-genel", tur: "genel", tarih: "2002-11-03", tekParti: false,
       meclis: 550, kayitli: 41407027, kullanilan: 32768161, gecerli: 31528783, baraj: 10,
       sonuc: [ { parti: "akp", oy: 10808229, sandalye: 363 }, { parti: "chp92", oy: 6113352, sandalye: 178 }, { parti: "dyp", oy: 3008942, sandalye: 0 }, { parti: "mhp93", oy: 2635787, sandalye: 0 }, { ad: "Genç Parti", oy: 2285598, sandalye: 0 }, { parti: "dehap", oy: 1960660, sandalye: 0 }, { parti: "anap", oy: 1618465, sandalye: 0 }, { parti: "sp", oy: 785489, sandalye: 0 }, { parti: "dsp", oy: 384009, sandalye: 0 }, { parti: "ytp02", oy: 363869, sandalye: 0 }, { parti: "bbp", oy: 322093, sandalye: 0 }, { parti: "ip92", oy: 159843, sandalye: 0 }, { parti: "odp", oy: 106023, sandalye: 0 }, { parti: "ldp", oy: 89331, sandalye: 0 }, { ad: "Diğer", partiSayisi: 4, oy: 572842, sandalye: 0 }, { ad: "Bağımsız", oy: 314251, sandalye: 9 } ],
       not: "Seçime katılan 18 partiden yalnızca ikisi %10'luk ülke barajını aşabildi ve AK Parti ilk seçiminde tek başına iktidar oldu; sayılar il ve gümrük kapısı oylarının toplamıdır." },
 
     // kaynak: araclar/kaynak-defteri.md#2004-03-yerel
     { id: "2004-03-yerel", tur: "yerel", tarih: "2004-03-28",
       olcu: "belediye-meclisi",
-      kayitli: 34213138, kullanilan: 25067950, gecerli: 23893656,
-      sonuc: [ { parti: "akp", oy: 9635145 }, { parti: "chp92", oy: 4912313 }, { parti: "mhp93", oy: 2500601 }, { parti: "dyp", oy: 2286020 }, { ad: "Sosyaldemokrat Halk Partisi", oy: 1204431 }, { parti: "sp", oy: 1111017 }, { parti: "anap", oy: 682264 }, { ad: "Genç Parti", oy: 607847 }, { parti: "dsp", oy: 484555 }, { parti: "bbp", oy: 179090 }, { parti: "ytp02", oy: 56912 }, { parti: "ip92", oy: 33770 }, { parti: "odp", oy: 29269 }, { parti: "emep", oy: 28011 }, { parti: "dp92", oy: 3742 }, { parti: "ldp", oy: 391 }, { ad: "Diğer", partiSayisi: 4, oy: 98310 }, { ad: "Bağımsız", oy: 39968 } ],
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [ { parti: "akp", oy: null }, { parti: "chp92", oy: null }, { parti: "mhp93", oy: null }, { parti: "dyp", oy: null }, { ad: "Sosyaldemokrat Halk Partisi", oy: null }, { parti: "sp", oy: null }, { parti: "anap", oy: null }, { ad: "Genç Parti", oy: null }, { parti: "dsp", oy: null }, { parti: "bbp", oy: null }, { parti: "ytp02", oy: null }, { parti: "ip92", oy: null }, { parti: "odp", oy: null }, { parti: "emep", oy: null }, { parti: "dp92", oy: null }, { parti: "ldp", oy: null }, { ad: "Diğer", partiSayisi: 4, oy: null }, { ad: "Bağımsız", oy: null } ],
       buyuksehir: { istanbul: { parti: "akp" }, ankara: { parti: "akp" }, izmir: { parti: "chp92" } },
-      not: "AK Parti'nin ilk yerel seçiminde belediye meclisi oylarının %40'ını aldığı bu seçimde 3.193 belediye başkanlığı ve 34.477 meclis üyeliği için oy verildi." },
+      not: "AK Parti'nin ilk yerel seçiminde 3.193 belediye başkanlığı ve 34.477 belediye meclisi üyeliği için oy verildi; ülke geneli belediye meclisi sayılarını yalnızca YSK yayımladığı ve bağımsız ikinci bir kurumsal kaynakla eşleştirilemediği için bu sayılar boş bırakıldı." },
 
     // kaynak: araclar/kaynak-defteri.md#2007-04-cb-tbmm
     { id: "2007-04-cb-tbmm", tur: "cb-tbmm", tarih: "2007-04-27",
       secilen: null, turSayisi: 1,
       not: "361 üyenin katıldığı ilk turda Abdullah Gül 357 oy aldı ama Anayasa Mahkemesi 1 Mayıs 2007'de bu birleşimin toplantı yeter sayısı kararını iptal edince 6 Mayıs'ta 367 nisabı sağlanamadı ve süreç sonuçsuz kaldı." },
 
     // kaynak: araclar/kaynak-defteri.md#2007-07-genel
     { id: "2007-07-genel", tur: "genel", tarih: "2007-07-22", tekParti: false,
       meclis: 550, kayitli: 42799303, kullanilan: 36056293, gecerli: 35049691, baraj: 10,
       sonuc: [ { parti: "akp", oy: 16327291, sandalye: 341 }, { parti: "chp92", oy: 7317808, sandalye: 112 }, { parti: "mhp93", oy: 5001869, sandalye: 71 }, { parti: "dp07", oy: 1898873, sandalye: 0 }, { ad: "Genç Parti", oy: 1064871, sandalye: 0 }, { parti: "sp", oy: 820289, sandalye: 0 }, { parti: "ip92", oy: 128148, sandalye: 0 }, { parti: "odp", oy: 52055, sandalye: 0 }, { parti: "ldp", oy: 35364, sandalye: 0 }, { parti: "emep", oy: 26292, sandalye: 0 }, { ad: "Diğer", partiSayisi: 4, oy: 541345, sandalye: 0 }, { ad: "Bağımsız", oy: 1835486, sandalye: 26 } ],
@@ -407,50 +407,51 @@ window.SANDIK = {
     // kaynak: araclar/kaynak-defteri.md#2007-10-referandum
     { id: "2007-10-referandum", tur: "referandum", tarih: "2007-10-21",
       konu: "5678 sayılı Kanunla Anayasa'da yapılan ve cumhurbaşkanının halk tarafından seçilmesini, milletvekili seçim döneminin beş yıldan dört yıla inmesini öngören değişiklikler.",
       kayitli: 42690252, kullanilan: 28819319, gecerli: 28167661,
       evet: 19422714, hayir: 8744947, karar: "kabul",
       not: "Kayıtlı seçmen ve oy sayıları gümrük kapılarında kullanılan oyları da içeriyor." },
 
     // kaynak: araclar/kaynak-defteri.md#2009-03-yerel
     { id: "2009-03-yerel", tur: "yerel", tarih: "2009-03-29",
       olcu: "belediye-meclisi",
-      kayitli: 39787986, kullanilan: 33447257, gecerli: 32072363,
-      sonuc: [ { parti: "akp", oy: 12237325 }, { parti: "chp92", oy: 7966710 }, { parti: "mhp93", oy: 5336695 }, { parti: "sp", oy: 1807745 }, { parti: "dtp", oy: 1687733 }, { parti: "dp07", oy: 1181074 }, { parti: "dsp", oy: 945722 }, { parti: "bbp", oy: 508055 }, { parti: "anap", oy: 202976 }, { parti: "odp", oy: 25557 }, { parti: "emep", oy: 21100 }, { parti: "ldp", oy: 2451 }, { parti: "ip92", oy: 2258 }, { parti: "bdp", oy: 203 }, { ad: "Diğer", partiSayisi: 5, oy: 103126 }, { ad: "Bağımsız", oy: 43633 } ],
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [ { parti: "akp", oy: null }, { parti: "chp92", oy: null }, { parti: "mhp93", oy: null }, { parti: "sp", oy: null }, { parti: "dtp", oy: null }, { parti: "dp07", oy: null }, { parti: "dsp", oy: null }, { parti: "bbp", oy: null }, { parti: "anap", oy: null }, { parti: "odp", oy: null }, { parti: "emep", oy: null }, { parti: "ldp", oy: null }, { parti: "ip92", oy: null }, { parti: "bdp", oy: null }, { ad: "Diğer", partiSayisi: 5, oy: null }, { ad: "Bağımsız", oy: null } ],
       buyuksehir: { istanbul: { parti: "akp" }, ankara: { parti: "akp" }, izmir: { parti: "chp92" } },
-      not: "Kayıtlı seçmen sayısı cezaevi seçmenlerini de içeriyor; 32.392 belediye meclisi üyeliği için oy verildi." },
+      not: "32.392 belediye meclisi üyeliği için oy verildi; ülke geneli belediye meclisi sayılarını yalnızca YSK yayımladığı ve bağımsız ikinci bir kurumsal kaynakla eşleştirilemediği için bu sayılar boş bırakıldı." },
 
     // kaynak: araclar/kaynak-defteri.md#2010-09-referandum
     { id: "2010-09-referandum", tur: "referandum", tarih: "2010-09-12",
       konu: "7 Mayıs 2010 tarihli 5982 sayılı Kanunla Türkiye Cumhuriyeti Anayasası'nın bazı maddelerinde yapılan değişiklikler.",
       kayitli: 52051828, kullanilan: 38369099, gecerli: 37644037,
       evet: 21787244, hayir: 15856793, karar: "kabul",
+      tutumlar: [ { parti: "akp", tutum: "evet" }, { parti: "chp92", tutum: "hayir" }, { parti: "mhp93", tutum: "hayir" }, { parti: "bdp", tutum: "boykot" } ],
       not: "Sayılara gümrük kapıları ve ceza infaz kurumlarında kullanılan oylar dahildir; kayıtlı seçmen sayısı yalnızca gümrük kapılarında oy kullanabilen 2.556.335 yurt dışı seçmeni de içeriyor." },
 
     // kaynak: araclar/kaynak-defteri.md#2011-06-genel
     { id: "2011-06-genel", tur: "genel", tarih: "2011-06-12", tekParti: false,
       meclis: 550, kayitli: 52806322, kullanilan: 43914948, gecerli: 42941763, baraj: 10,
       sonuc: [ { parti: "akp", oy: 21399082, sandalye: 327 }, { parti: "chp92", oy: 11155972, sandalye: 135 }, { parti: "mhp93", oy: 5585513, sandalye: 53 }, { parti: "sp", oy: 543454, sandalye: 0 }, { parti: "has", oy: 329723, sandalye: 0 }, { parti: "bbp", oy: 323251, sandalye: 0 }, { parti: "dp07", oy: 279480, sandalye: 0 }, { parti: "dsp", oy: 108089, sandalye: 0 }, { parti: "emep", oy: 32128, sandalye: 0 }, { parti: "ldp", oy: 15222, sandalye: 0 }, { ad: "Diğer", partiSayisi: 5, oy: 349932, sandalye: 0 }, { ad: "Bağımsız", oy: 2819917, sandalye: 35 } ],
       not: "Parti olarak seçime girmeyen BDP'nin desteklediği bağımsız adaylar meclise girdi ve AK Parti üst üste üçüncü kez tek başına iktidar oldu; sayılar il ve gümrük kapısı oylarının toplamıdır." },
 
     // kaynak: araclar/kaynak-defteri.md#2014-03-yerel
     { id: "2014-03-yerel", tur: "yerel", tarih: "2014-03-30",
       olcu: "belediye-meclisi",
-      kayitli: 48843157, kullanilan: 43543717, gecerli: 41527387,
-      sonuc: [ { parti: "akp", oy: 17802976 }, { parti: "chp92", oy: 10938262 }, { parti: "mhp93", oy: 7399119 }, { parti: "bdp", oy: 1729297 }, { parti: "sp", oy: 1180322 }, { parti: "hdp", oy: 881830 }, { parti: "bbp", oy: 628729 }, { parti: "dp07", oy: 287209 }, { parti: "dsp", oy: 144337 }, { parti: "ip92", oy: 100021 }, { parti: "odp", oy: 45204 }, { parti: "ldp", oy: 9122 }, { parti: "emep", oy: 489 }, { ad: "Diğer", partiSayisi: 9, oy: 330876 }, { ad: "Bağımsız", oy: 49594 } ],
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [ { parti: "akp", oy: null }, { parti: "chp92", oy: null }, { parti: "mhp93", oy: null }, { parti: "bdp", oy: null }, { parti: "sp", oy: null }, { parti: "hdp", oy: null }, { parti: "bbp", oy: null }, { parti: "dp07", oy: null }, { parti: "dsp", oy: null }, { parti: "ip92", oy: null }, { parti: "odp", oy: null }, { parti: "ldp", oy: null }, { parti: "emep", oy: null }, { ad: "Diğer", partiSayisi: 9, oy: null }, { ad: "Bağımsız", oy: null } ],
       buyuksehir: { istanbul: { parti: "akp" }, ankara: { parti: "akp" }, izmir: { parti: "chp92" } },
-      not: "Büyükşehir belediye başkanlığı seçimi bu kez 16 yerine 30 ilde yapıldı ve 20.500 belediye meclisi üyeliği için oy verildi; kayıtlı seçmen sayısı cezaevi seçmenlerini de içeriyor." },
+      not: "Büyükşehir belediye başkanlığı seçimi bu kez 16 yerine 30 ilde yapıldı ve 20.500 belediye meclisi üyeliği için oy verildi; ülke geneli belediye meclisi sayılarını yalnızca YSK yayımladığı ve bağımsız ikinci bir kurumsal kaynakla eşleştirilemediği için bu sayılar boş bırakıldı." },
 
     // kaynak: araclar/kaynak-defteri.md#2014-08-cb-halk
     { id: "2014-08-cb-halk", tur: "cb-halk", tarih: "2014-08-10",
       turlar: [ { tarih: "2014-08-10", kayitli: 55692841, kullanilan: 41283627, gecerli: 40545911,
-        adaylar: [ { ad: "Recep Tayyip Erdoğan", destek: "AK Parti", oy: 21000143 }, { ad: "Ekmeleddin Mehmet İhsanoğlu", destek: "CHP ve MHP'nin ortak adayı", oy: 15587720 }, { ad: "Selahattin Demirtaş", destek: "HDP", oy: 3958048 } ] } ],
+        adaylar: [ { ad: "Recep Tayyip Erdoğan", parti: "akp", oy: 21000143 }, { ad: "Ekmeleddin Mehmet İhsanoğlu", destek: "CHP ve MHP'nin ortak adayı", oy: 15587720 }, { ad: "Selahattin Demirtaş", parti: "hdp", oy: 3958048 } ] } ],
       secilen: "Recep Tayyip Erdoğan",
       not: "Cumhurbaşkanının ilk kez halk tarafından seçildiği bu seçimde Erdoğan geçerli oyların salt çoğunluğunu ilk turda aldığı için 24 Ağustos'a hazırlanan ikinci tura gerek kalmadı." },
 
     // kaynak: araclar/kaynak-defteri.md#2015-06-genel
     { id: "2015-06-genel", tur: "genel", tarih: "2015-06-07", tekParti: false,
       meclis: 550, kayitli: 56608817, kullanilan: 47507467, gecerli: 46163243, baraj: 10,
       sonuc: [ { parti: "akp", oy: 18867411, sandalye: 258 }, { parti: "chp92", oy: 11518139, sandalye: 132 }, { parti: "mhp93", oy: 7520006, sandalye: 80 }, { parti: "hdp", oy: 6058489, sandalye: 80 }, { parti: "sp", oy: 949178, sandalye: 0 }, { parti: "vatan", oy: 161674, sandalye: 0 }, { parti: "dsp", oy: 85810, sandalye: 0 }, { parti: "dp07", oy: 75784, sandalye: 0 }, { parti: "anadolu", oy: 27688, sandalye: 0 }, { parti: "ldp", oy: 26500, sandalye: 0 }, { ad: "Diğer", partiSayisi: 10, oy: 384338, sandalye: 0 }, { ad: "Bağımsız", oy: 488226, sandalye: 0 } ],
       not: "HDP'nin ilk kez parti olarak girip barajı aştığı bu seçimde hiçbir parti tek başına hükümet kuracak çoğunluğu sağlayamadı; sayılar yurt içi, yurt dışı ve gümrük sandıklarının toplamıdır." },
 
     // kaynak: araclar/kaynak-defteri.md#2015-11-genel
@@ -784,18 +785,18 @@ window.SANDIK = {
       not: "Erdoğan'ın 10 Ağustos 2014'te halk tarafından cumhurbaşkanı seçilmesinin ardından sona erdi." },
 
     // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
     { no: 62, basbakan: "Ahmet Davutoğlu", partiler: ["akp"],
       baslangic: "2014-08-29", bitis: "2015-08-28", tip: "tek-parti", bitisNedeni: "erken-secim",
       not: "Erdoğan'ın cumhurbaşkanı seçilmesiyle AK Parti genel başkanlığına gelen Davutoğlu'nun kurduğu hükümet, 7 Haziran 2015 seçiminden sonra hükümet kurulamayınca alınan seçim yenileme kararının ardından yerini geçici seçim hükümetine bıraktı." },
 
     // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
     { no: 63, basbakan: "Ahmet Davutoğlu", partiler: ["akp", "hdp"],
       baslangic: "2015-08-28", bitis: "2015-11-24", tip: "koalisyon", bitisNedeni: "erken-secim",
-      not: "Anayasa'nın 114. maddesine göre kurulan ve Adalet, İçişleri ile Ulaştırma bakanlıkları bağımsızlara verilen geçici seçim hükümeti, 1 Kasım 2015 yenileme seçiminin ardından görevi bıraktı." },
+      not: "Anayasa'nın 114. maddesine göre kurulan geçici seçim hükümetinde AK Parti'nin yanında iki HDP milletvekili bakan oldu, Adalet, İçişleri ve Ulaştırma bakanlıkları ise bağımsızlara verildi." },
 
     // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
     { no: 64, basbakan: "Ahmet Davutoğlu", partiler: ["akp"],
       baslangic: "2015-11-24", bitis: "2016-05-24", tip: "tek-parti", bitisNedeni: null,
       not: "1 Kasım 2015 seçiminden sonra kurulan hükümet; görevi 24 Mayıs 2016'da kurulan 65. hükümete devretti." }
   ]
 };
```
