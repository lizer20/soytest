# İnceleme paketi: task-9-d2 (a1fdc80..HEAD)

## Commitler
```
e70082e Sandık verisi: dönem 2 (1961–1971) — yerel seçimler
48513c4 Sandık verisi: dönem 2 (1961–1971) — genel seçimler, CB (TBMM), hükümetler
```
## Özet
```
 araclar/kaynak-defteri.md | 309 ++++++++++++++++++++++++++++++++++++++++++++++
 veri/sandik.js            | 100 ++++++++++++++-
 2 files changed, 407 insertions(+), 2 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index cb30637..e346527 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -966,10 +966,319 @@ Bkz. yukarıdaki ortak blok.
   veriyor; alternatif adres bu turda bulunamadı. Vikipedi'nin tek başına doğruladığı sayfalar
   (`1947/1948/1949 Türkiye milletvekili ara seçimleri`) kural gereği kaynak sayılmadı. Bu üç ara
   seçim `veri/sandik.js`'e eklenmedi.
 - **1955 yerel seçimi (il genel meclisi + belediye meclisi)**: CHP ve CMP'nin bu seçime
   katılmadığı, katılım oranının %38,34'te kaldığı Bilal NERGİZ (yukarıdaki makale) ile doğrulandı
   ("BCA, Yer Kodu: 030.01, Fon Kodu: 51.309.8"), ama seçimin **tam tarihi** (gün/ay) bu turda
   yalnızca Vikipedi'de bulundu (25 Eylül / 13 Kasım 1955) — kural gereği Vikipedi tek kaynak
   sayılmadığından tarih doğrulanamadı ve kayıt eklenmedi.
 - Sonraki bir turda bu üç kayıt için ek kaynak taraması yapılabilir.
 - Erişim: 2026-09-12.
+
+## Görev 9 — Dönem 2 (1961–1971)
+
+**Kaynak notu:** Bu dönemden itibaren TÜİK Tablo 23'ün (PDF s. 43, basılı s. 25) `-table` bayrağı
+(`pdftotext -table`, "-layout"ten farklı, tablo hizalamasına özel bir mod) ile okunması dönem 1'de
+yaşanan çok satırlı hücre kayması sorununu tamamen çözdü — sütunlar (yıl başına A/B/C: oy sayısı/
+oy oranı/milletvekili sayısı) tam hizalı çıktı. Her yıl için parti–sayı eşleşmesi, sandalyelerin
+toplamının `meclis`e (450) tam eşit çıkmasıyla ayrıca doğrulandı (1961: 173+158+65+54+0=450;
+1965: 240+134+31+19+14+11+1=450; 1969: 256+143+15+13+8+6+6+2+1=450).
+İkinci kaynak olarak hem TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler`) hem de TBMM'nin
+kendi resmî yayını **T.B.M.M. Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler (1923-1980)**
+(`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/ed1d2982-f225-4467-a4ab-707f4cc471dc.pdf`, tam metin
+`pdftotext -layout` ile çıkarıldı) kullanıldı — bu kitap 1961/1965/1969 seçimlerini ayrı ayrı
+bölümlerde ele alıp aynı parti–oy–sandalye üçlülerini tekrarlıyor (bölüm 4.3.1–4.3.3, s. 61-69),
+üstelik resmî sonuç ilanının Resmî Gazete tarih/sayısını da veriyor (1961: 17.11.1961/10960;
+1965: 19.10.1965/12130; 1969: 20.10.1969/13331) — bu, TÜİK'in tek kaynak olmadığını doğruluyor.
+
+### 1961-10-genel
+- Sonuç: 15 Ekim 1961, meclis 450, kayıtlı 12.925.395, kullanılan 10.522.716 (katılım %81,4).
+  CHP 3.724.752 oy/173 sandalye, AP 3.527.435/158, YTP 1.391.934/65, CKMP 1.415.390/54,
+  Bağımsız 81.732/0.
+- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 23, "TÜRKİYE" (PDF s. 43, `pdftotext
+  -table -enc UTF-8`)** — kayıtlı/kullanılan/katılım/geçerli/meclis satırları ve parti satırları
+  (AP, CHP, CKMP, YTP, BÖMZ — bu son satır "Bağımsız/diğer" toplamını temsil ediyor, tablo
+  başlığı "Siyasi parti ve bağımsızlar").
+- **İkinci kaynak (WebFetch ile doğrudan açıldı):**
+  `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1961` —
+  CHP 3.724.752 (%36,74), AP 3.527.435 (%34,79), CKMP 1.415.390 (%13,96), YTP 1.391.934 (%13,73),
+  Bağımsız 81.732 (%0,81) — TÜİK ile **birebir aynı** (fark yok, tek kaynağın iki farklı yayını
+  olabileceği ama sayıların bağımsız olarak yeniden derlendiği görülüyor).
+- **Üçüncü çapraz doğrulama:** TBMM *Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler* kitabı
+  (yukarıda künyesi verildi), s. 61-63 (bölüm 4.3.1, "17 Ekim 1961 Milletvekili Genel Seçimleri" —
+  başlıktaki "17" bir yazım hatası, metnin kendisi "15.10.1961 tarihinde" diyor, TÜİK Ek-1'le
+  tutarlı) — aynı dört parti + bağımsız rakamlarını birebir veriyor, ayrıca Resmî Gazete
+  17.11.1961/10960 sayılı ilanı kaynak gösteriyor.
+- **`gecerli` alanı `null` yapıldı:** TÜİK'in bastığı "Geçerli oy sayısı" rakamı (10.138.035),
+  yine TÜİK'in aynı tablosundaki beş parti/bağımsız satırının toplamıyla (10.141.243) tam
+  örtüşmüyor — fark 3.208 (%0,03), kaynağın kendi iç tutarsızlığı (muhtemelen tabloya
+  girmeyen çok küçük bir kalem). `araclar/dogrula.js` bütün satırlar bilinen bir kayıtta oy
+  toplamının `gecerli`ye tam eşit olmasını zorunlu kılıyor; iki resmî rakam kendi içinde
+  uyuşmadığından `gecerli: null` bırakıldı (§8.1 "hafızadan sayı yazılmaz" ilkesiyle tutarlı —
+  hangi rakamın "doğru" olduğuna karar verecek üçüncü bir kaynak bulunamadı).
+- `baraj: null` — 1961'de ulusal bir yüzde barajı yoktu, "çevre barajlı d'Hondt" yapısal bir
+  bölge barajıydı, tek bir yüzde ile ifade edilebilir bir rakam değil.
+- Uyuşmazlık: yok (TÜİK ve TBMM sorgusu birebir eşleşti); `gecerli` uyuşmazlığı yukarıda ayrı
+  ele alındı.
+- Erişim: 2026-09-12.
+
+### 1965-10-genel
+- Sonuç: 10 Ekim 1965, meclis 450, kayıtlı 13.679.753, kullanılan 9.748.678 (katılım %71,3),
+  geçerli 9.307.563. AP 4.921.235/240, CHP 2.675.785/134, Millet Partisi 582.704/31,
+  YTP 346.514/19, TİP 276.101/14, CKMP 208.696/11, Bağımsız 296.528/1.
+- **[B] TÜİK Tablo 23** (yukarıdaki künye) — bütün rakamlar buradan.
+- **İkinci kaynak:** `secim_sorgu.secimdeki_partiler?p_secim_yili=1965` — AP 4.921.235 (%52,87),
+  CHP 2.675.785 (%28,75), Millet Partisi 582.704 (%6,26), YTP 346.514 (%3,72),
+  Bağımsız 296.528 (%3,19), TİP 276.101 (%2,97), CKMP 208.696 (%2,24) — **birebir aynı**,
+  fark yok.
+- **Üçüncü çapraz doğrulama:** TBMM kitabı, s. 64 (bölüm 4.3.2) — aynı yedi rakamı birebir
+  veriyor; ayrıca "geçerli oy sayısı" olarak TÜİK'in 9.307.563 rakamını dolaylı doğruluyor
+  (kendi toplamları TÜİK'inkiyle örtüşüyor: 4.921.235+2.675.785+582.704+346.514+276.101+
+  208.696+296.528=9.307.563 — **tam eşit**, bu seçimde iç tutarsızlık yok).
+- **TİP'in soyağacındaki BILGI metniyle küçük bir fark:** `veri/partiler.js`teki `tip61` notu
+  "1965'te 15 milletvekili kazandı" diyor; TÜİK/TBMM'nin resmî Millet Meclisi sandalye sayısı
+  ise **14**. TBMM kitabı (s. 65) bu farkı açıklıyor: "Türkiye İşçi Partisi, 1965 tarihinde
+  yapılan milletvekili genel seçimlerinde **15 (14 MV +1 Senatör)** milletvekili kazanarak
+  parlamentoda bir grup kurmuştur" — yani 15 rakamı Millet Meclisi + Cumhuriyet Senatosu
+  toplamı, 14'ü ise yalnızca Millet Meclisi (bu görevin kapsadığı `genel` türü, senato seçimleri
+  kapsam dışı). `veri/sandik.js`'e TÜİK/TBMM'nin Millet Meclisi rakamı olan **14** yazıldı;
+  `veri/partiler.js`teki metin bu görevin dosya listesinde değil, değiştirilmedi — kullanıcıya
+  bilgi olarak sunuluyor (Adım 6).
+- **"Millet Partisi" ayrımı (CMP emsaliyle aynı mantık):** Bu satır `parti:"mp48"` değil
+  `ad:"Millet Partisi"` ile yazıldı. Osman Bölükbaşı'nın 1948-1958 Millet Partisi'si (mp48)
+  1958'de CKMP'ye dönüşerek soyağacındaki kaydına göre sona ermişti; 1965/1969 tablosundaki
+  "Millet Partisi" ise Bölükbaşı'nın 1962'de CKMP'den ayrılıp aynı adla yeniden kurduğu **ayrı,
+  hukuken farksız bir parti** (TÜİK'in kendi parti listesi CKMP ve "Millet Partisi"ni ayrı
+  satırlar olarak veriyor, yukarıdaki tabloya bakınız). Soyağacına eklenmedi; Görev 10 listesine
+  yazıldı — bu dönemde **31 sandalyeyle** (1965) önemli bir eksik.
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-12.
+
+### 1966-03-cb-tbmm
+- Sonuç: 28 Mart 1966, Cevdet Sunay TBMM birleşik toplantısında 1. turda Cumhurbaşkanı seçildi;
+  CKMP Genel Başkanı Alparslan Türkeş de aday oldu. Cemal Gürsel'in sağlık sorunları nedeniyle
+  görevi bırakmasının ardından yapıldı; hem AP hem CHP resmen destek verdi.
+- **Tarih ve tur sayısı için üç kaynak birleşiyor:** AA, "1923'ten günümüze Cumhurbaşkanı
+  seçimleri" (`aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629`);
+  TDV İslam Ansiklopedisi, "SUNAY, Cevdet" maddesi (`islamansiklopedisi.org.tr/sunay-cevdet`);
+  T.C. Cumhurbaşkanlığı resmî sitesi biyografi sayfası (başlıkta anıldı, sertifika hatası
+  nedeniyle bu turda doğrudan açılamadı) — üçü de tarih ve "1. turda seçildi" bilgisinde
+  birleşiyor.
+- **Oy sayısı yazılmadı — kaynaklar arasında büyük fark var, veri modelinde de bu alan yok:**
+  AA'nın kendi sayfası "650 üyeli TBMM'de 477 üyenin oyu" derken, TDV İslam Ansiklopedisi "532
+  oydan 461'ini alarak" diyor — iki rakam da toplam katılımcı sayısında (650 vs 532) ve Sunay'ın
+  aldığı oyda (477 vs 461) birbirinden **%3-4** oranında farklı, %0,5 eşiğini açıkça aşıyor.
+  TBMM'nin kendi tutanak arşivinde (28.3.1966 tarihli TBMM Birleşik Toplantısı) bu turda ayrı bir
+  seri olarak bulunamadı (Cumhuriyet Senatosu'nun kendi tutanak dizini — cs__05031fih.pdf —
+  incelendi, o tarihe ait bir "Cumhurbaşkanlığı seçimi" kaydı yoktu; büyük ihtimalle birleşik
+  toplantı ayrı bir "TBMM Birleşik Toplantısı Tutanak Dergisi" serisinde, bu turda adresi
+  bulunamadı). **Spesifikasyon §5.6'da `cb-tbmm` alanları yalnızca `secilen`/`turSayisi`/`not`;
+  oy sayısı için bir alan zaten yok** — bu yüzden uyuşan bir sayı bulunamadığından `not`'a da
+  belirli bir oy rakamı yazılmadı, yalnızca 1. tur ve destek veren partiler belirtildi.
+- Uyuşmazlık: oy sayısı (477/650 vs 461/532) — veri modelinde karşılığı olmadığı için kayda
+  yansımadı, yalnızca burada not edildi.
+- Erişim: 2026-09-12.
+
+### 1969-10-genel
+- Sonuç: 12 Ekim 1969, meclis 450, kayıtlı 14.788.552, kullanılan 9.516.035 (katılım %64,3,
+  Cumhuriyet tarihinin en düşük katılımlı genel seçimi). AP 4.229.712/256, CHP 2.487.006/143,
+  Güven Partisi 597.818/15, Bağımsız 511.023/13, Türkiye Birlik Partisi 254.695/8,
+  Millet Partisi 292.961/6, YTP 197.929/6, TİP 243.631/2, MHP 275.091/1.
+- **[B] TÜİK Tablo 23** (yukarıdaki künye).
+- **İkinci kaynak:** `secim_sorgu.secimdeki_partiler?p_secim_yili=1969` — AP 4.229.945 (%46,55),
+  CHP 2.487.163 (%27,37), GP 598.013 (%6,58), Bağımsız 511.097 (%5,62), Millet Partisi 293.849
+  (%3,23), MHP 274.225 (%3,02), Türkiye Birlik Partisi 254.708 (%2,80), TİP 243.797 (%2,68),
+  YTP 197.912 (%2,18).
+  - Uyuşmazlık: AP %0,0055, CHP %0,0063, GP %0,033, Bağımsız %0,014, Millet Partisi %0,30,
+    MHP %0,31, Türkiye Birlik Partisi %0,005, TİP %0,068, YTP %0,009 — **hepsi %0,5 eşiğinin
+    altında**, eşleşti sayıldı; TÜİK'in (birincil) sayıları yazıldı.
+- **Üçüncü çapraz doğrulama:** TBMM kitabı, s. 68-69 (bölüm 4.3.3) — dokuz partinin oy/oran/
+  sandalye üçlüsünü birebir TÜİK'le aynı veriyor; ayrıca "Güven Partisi"nin CGP satırında
+  gösterildiğini (dipnot 2), Türkiye Birlik Partisi'nin ayrı bir parti olduğunu (17.10.1966
+  kuruldu, 27.11.1971'de adı "Türkiye Birlik Partisi" oldu) ve "Millet Partisi"nin CKMP'den 1962
+  ayrılan Bölükbaşı kanadı olduğunu doğruluyor.
+- **`gecerli` alanı `null` yapıldı** — aynı 1961 gerekçesiyle: TÜİK'in geçerli oy rakamı
+  (9.086.296) dokuz satırın toplamıyla (9.089.866) tam örtüşmüyor (fark 3.570, %0,04);
+  `dogrula.js`nin katı eşitlik kuralı nedeniyle `null` bırakıldı.
+- **Güven Partisi → `parti:"gp"`:** soyağacında zaten var (donem 2, 1967-1973). TBMM kitabının
+  dipnot 2'si ("1969 yılında Güven Partisi (GP) tarafından alınan oy miktarı CGP satırında
+  gösterilmiştir") bu eşleşmeyi doğruluyor.
+- **Türkiye Birlik Partisi ve (yeniden) Millet Partisi soyağacında yok** — Görev 10 listesine
+  eklendi (TBP 8 sandalye, MP 6 sandalye — MP zaten 1965 kaydında da listelenmişti).
+- Uyuşmazlık: yukarıda satır satır listelendi, hepsi eşik altında.
+- Erişim: 2026-09-12.
+
+### Ortak blok — Hükümetler 26–34 (dönem 2 bandına düşenler)
+- **[B] TBMM Başkanlığı Yayınları, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*,
+  Cilt 3 (20 Kasım 1961 – 27 Ekim 1965), Cilt 4 (27 Ekim 1965 – 26 Mart 1971) ve Cilt 5
+  (26 Mart 1971 – 17 Kasım 1974)** — bitstream adresleri kaynak haritasındaki listeden
+  (Görev 9 Dönem 1'de bulundu): c3 `cdfb671f-f82b-4373-8db9-fad3ee50ed12`, c4
+  `2a72b8f8-b477-4c0b-ba7d-7ec0b448147c`, c5 `232d9a87-53f4-449c-8e38-82828ab35cf8`
+  (`.../server/api/core/bitstreams/<uuid>/content`), `pdftotext -layout -enc UTF-8` ile tam
+  metne çevrildi. İçindekiler bölümlerinden hükümet no./ad/tarih:
+  26 VIII. İnönü Hükümeti (20.11.1961-25.06.1962)
+  27 IX. İnönü Hükümeti (25.06.1962-25.12.1963)
+  28 X. İnönü Hükümeti (25.12.1963-20.02.1965)
+  29 Ürgüplü Hükümeti (20.02.1965-27.10.1965)
+  30 I. Demirel Hükümeti (27.10.1965-03.11.1969)
+  31 II. Demirel Hükümeti (03.11.1969-06.03.1970)
+  32 III. Demirel Hükümeti (06.03.1970-26.03.1971)
+  33 I. Erim Hükümeti (26.03.1971-11.12.1971)
+  34 II. Erim Hükümeti (11.12.1971-22.05.1972)
+  Tarihler zincirleme sürekli (bir hükümetin bitişi bir sonrakinin başlangıcı) ve dönem 1'in son
+  kaydı olan hukumet-25'in bitişiyle (1961-11-20) tam örtüşüyor.
+- **Koalisyon/parti bileşimi — her hükümetin "Koalisyon Protokolü" ya da "Bakanlar Kurulu"
+  bölümünden bizzat okunarak doğrulandı** (parti etiketleri bakan isimlerinin yanında
+  parantez içinde veriliyor):
+  - **26 (VIII. İnönü):** "Koalisyon Protokolü (CHP-AP)" başlığı ve metni birebir — "C.H.P. ile
+    A.P. ... bir karma hükümet kurmaya müştereken karar vermişlerdir." `partiler:["chp23","ap"]`.
+  - **27 (IX. İnönü):** "Koalisyon Protokolü (CHP-CKMP-YTP-Bağımsızlar)" — "CHP ve CKMP, YTP
+    temsilcileri ile TBMM Bağımsız üyelerinin bir temsilcisinden meydana gelen heyetimiz..."
+    `partiler:["chp23","ckmp","ytp"]`; bağımsızlar da katıldı ama soyağacı id'si olmadığından
+    diziye yazılmadı, `not`a değil ayrıca not düşülmedi (kısa tutuldu).
+  - **28 (X. İnönü):** Bakanlar Kurulu bölümünde koalisyon protokolü yok; hükümet programı
+    görüşmelerinde muhalefet defalarca "C.H.P. azınlık Hükümeti" ifadesini kullanıyor (bizzat
+    tutanakta 10'dan fazla geçiş, örn. "Halk çoğunluğunun desteğinden mahrum C.H.P. azınlık
+    Hükümetinin..."). `tip:"azinlik"`, `partiler:["chp23"]`.
+  - **29 (Ürgüplü):** Bakanlar Kurulu listesinde bakanların yanında parti etiketleri (AP, CKMP,
+    YTP, MP, Bağımsız) açıkça yazılı; başbakan Suat Hayri Ürgüplü "(C.S. Kayseri Üyesi,
+    Bağımsız)" — partisiz bir senatör. `partiler:["ap","ckmp","ytp"]` (MP soyağacında yok,
+    bağımsız bakanlar da var — `not`ta belirtildi); `tip:"koalisyon"`.
+  - **30-32 (I-III. Demirel):** Bakanlar Kurulu listelerinde parti etiketi hiç yok (tek parti
+    olduğunda TBMM cildi etiketi atlıyor, dönem 1'deki Menderes hükümetleriyle aynı biçim) ve
+    metinde "Koalisyon Protokolü" başlığı da yok (yalnızca geçmiş koalisyonlara atıf var) —
+    AP tek başına iktidar, meclis çoğunluğu 1965 seçiminden geliyor. `tip:"tek-parti"`,
+    `partiler:["ap"]`.
+  - **33-34 (I-II. Erim):** Bakanlar Kurulu listesinde hiçbir bakanın yanında parti etiketi yok,
+    çoğu "TBMM dışından" ya da bağımsız senatör/milletvekili; 12 Mart Muhtırası sonrası
+    partilerüstü/teknokrat formülüyle kuruldu (TBMM kitabının kendi başlığı da bu dönemi
+    "partiler üstü hükümet modeli" diye tanımlıyor — Karataş, 2022, *ABAD* 5(10), s. 387-422,
+    `dergipark.org.tr/en/download/article-file/2522863`). `tip:"partiluestu"`,
+    `partiler:[]`.
+- **`bitisNedeni`:**
+  - **29 → "secim"**: Ürgüplü hükümeti, TBMM kitabının kendi tarihlemesiyle 10 Ekim 1965
+    seçiminin hemen ardından (27 Ekim 1965) sona erdi ve yerini seçim sonucuna göre kurulan
+    I. Demirel Hükümeti'ne bıraktı.
+  - **30 → "secim"**: I. Demirel Hükümeti, 12 Ekim 1969 seçiminin 3 hafta sonrasında
+    (3 Kasım 1969) yenilendi.
+  - **32 → "muhtira"**: III. Demirel Hükümeti, TBMM kitabının kendi bölüm başlığında da
+    ("12 Mart Muhtırası ile 12 Eylül Darbesi Arası Dönem") doğrulandığı gibi 12 Mart 1971
+    muhtırasının ardından 26 Mart 1971'de görevi bıraktı; bu tarih aynı zamanda
+    `DONEMLER[2].kesinti.tarih` (12 Mart 1971) ile tutarlı.
+  - **26, 27, 28, 31, 33, 34 → `null`**: bu turda ikinci kaynakla (TBMM tutanağı ya da akademik
+    makale) doğrulanabilir, tek cümleyle ifade edilebilir bir bitiş nedeni bulunamadı. 31
+    (II. Demirel) için web taramasında "14 Şubat 1970'te 1970 bütçesinin 41 AP'li milletvekilinin
+    ret oyuyla reddedilmesi üzerine istifa etti" bilgisi birden fazla haber kaynağında ve bir
+    dergipark makalesinin (Karataş, 2022, yukarıda) arama özetinde geçiyor, ama makalenin
+    kendisi (tam metin okundu) bu olayı ayrıntılı anlatmıyor ve TBMM cildinde de bu turda
+    doğrudan bir "istifa" ifadesi bulunamadı; tek doğrulanabilir kaynak resmî/birincil olmadığı
+    için `bitisNedeni: null` bırakıldı, olay `not` alanına da yazılmadı.
+- Uyuşmazlık: yok (hükümet tarihleri tek kaynaktan, TBMM cildinden; parti bileşimi de aynı
+  ciltten okundu, ikinci kaynak gerektirmiyor — nitel/yapısal bilgi, "sayı" değil).
+- Erişim: 2026-09-12.
+
+### hukumet-26 — hukumet-34
+Bkz. yukarıdaki ortak blok.
+
+### 1963-11-yerel
+- Sonuç: 17 Kasım 1963, 1961 Anayasası sonrası ilk yerel seçim ve belediye başkanlarının 307
+  sayılı Kanun uyarınca ilk kez tek dereceli doğrudan halk oyuyla seçildiği seçim (Görev 1'de
+  doğrulanan iddia, bkz. yukarıdaki "Doğrulanan iddialar" listesi, madde 4).
+- **İstanbul — [B] Yüksek Seçim Kurulu kararı + Resmî Gazete, 13 Aralık 1963:** en çok oyu alan
+  AP adayı Nuri Eroğan (128.785 oy, %40,29), Denizcilik Bankası'ndaki hukuk müşavirliği görevinden
+  22 Eylül 1963'e kadar (kanunun öngördüğü süre içinde) istifa etmediği gerekçesiyle önce İl Seçim
+  Kurulu (2 Aralık 1963), itirazı üzerine YSK tarafından da diskalifiye edildi; ikinci sıradaki CHP
+  adayı Haşim İşcan (111.686 oy, %34,91) belediye başkanı sayıldı ve 10 Aralık 1963'te mazbatasını
+  aldı.
+  **[B] Meltem ERDEM, "Sandıkta Bitmeyen Seçim: 17 Kasım 1963 İstanbul Belediye Başkanlığı
+  Seçimi", *Uluslararası Anadolu Sosyal Bilimler Dergisi*, C. 5, S. 4 (2021), s. 1521-1540**
+  (`dergipark.org.tr/tr/download/article-file/2087799`, `pdftotext -layout -enc UTF-8` ile
+  okundu) — YSK kararının doğrudan alıntısı: "...22 Eylül 1963 gününe kadar hizmetli bulunduğu
+  görevden çekilmemiş bulunmasına binaen SEÇİLME YETERLİLİĞİ mevcut olmadığından adaylığının
+  iptaline... kendisinden sonra en yüksek oyu alan Haşim İşcan'ın belediye başkanı sayılmasına
+  karar vermiştir" (Erdem, 2009'dan alıntı; makale ayrıca Resmî Gazete 13.12.1963 tarihli kararı
+  ve "İşcan 10 Aralık sabahı mazbatasını alarak göreve başlamıştır (Tercüman, 11 Aralık 1963:1-7)"
+  bilgisini veriyor) — hem birincil (YSK kararı/Resmî Gazete) hem akademik kaynak olarak kullanıldı.
+  Aynı makalenin Tablo 1'i (kaynağı D.İ.E., 1965:34/2,3,4,5,6 — Devlet İstatistik Enstitüsü'nün
+  1965 tarihli resmî yayını) İstanbul'a özgü belediye başkanlığı/belediye meclisi/il genel meclisi
+  oy dağılımını da veriyor.
+- **Ankara — Halil Sezai Erkut (CHP):** Biyografya.com biyografik sözlüğü
+  (`biyografya.com/tr/biographies/halil-sezai-erkut-b5422745`) — "1963 yerel seçimlerinde Ankara
+  Belediye Başkanı seçildi" (CHP). İkinci kaynak: yeniankara.com.tr, "Ankara'nın başkanları!
+  Siyasetçi ve hukukçu Halil Sezai Erkut" — 17 Kasım 1963 seçimini kazanarak Ankara'nın tek
+  dereceli seçimle belirlenen ilk belediye başkanı olduğunu doğruluyor (haber veritabanı,
+  yalnızca ikinci kaynak olarak kullanıldı).
+- **İzmir — Osman Kibar (AP):** Ege Üniversitesi Açık Erişim, "Osman Kibar ve belediye
+  başkanlığı dönemi" (`acikerisim.ege.edu.tr/items/567e6194-aa27-4962-a98c-0961660ce664`,
+  akademik tez özeti) — Kibar'ın 1963-1973 arası İzmir belediye başkanlığı yaptığını ve Adalet
+  Partili olduğunu doğruluyor. İkinci kaynak: WebSearch ile toplanan haber kaynakları (Kibar'ın
+  1963 seçiminde CHP'li Rebii Başol'u yendiği bilgisi).
+- **Ülke geneli belediye meclisi oy sayısı bulunamadı** → `sonuc: []`, `kayitli`/`kullanilan`/
+  `gecerli`: `null`. Bulunabilen tek ülke geneli rakam **il genel meclisi** ölçüsünde (belediye
+  meclisi değil, spesifikasyonun ölçüsüyle uyuşmuyor, kayda yazılmadı) ve "kaç il belediyesi
+  kazanıldı" biçiminde: **Ayşenur ÖZTÜRK, "Türkiye'de Belediye Başkanlığı Seçimlerinde Yenilenme
+  (1963-2014)", *Manisa Celal Bayar Üniversitesi Sosyal Bilimler Dergisi*, C. 15, S. 4 (2017),
+  s. 329-352** (`dergipark.org.tr/tr/download/article-file/395864`) Tablo 1-2 — belediye
+  başkanlığı seçimlerinde ülke geneli katılım **%69,31** (kaynağı: *Yerel Seçimler Panoraması*,
+  Ed. Oya Çitçi) ve 67 il belediyesinden AP 40, CHP 24, YTP 1, Bağımsız 2 kazandığı bilgisi
+  `not` alanına bilgi olarak aktarıldı (`Tablo 2`'nin kaynağı: A. E. Turan, *Türkiye'de Yerel
+  Seçimler*).
+- `buyuksehir` alanı bu seçimden itibaren yazılabiliyor (Görev 1'de doğrulandı, 307 sayılı Kanun).
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-16.
+
+### 1968-06-yerel
+- Sonuç: 2 Haziran 1968. AP İstanbul (Fahri Atabey), Ankara (Ekrem Barlas) ve İzmir'i (Osman
+  Kibar, 1963'te seçildiği görevi koruyarak) kazandı.
+- **İstanbul — Fahri Atabey (AP):** SETA, "Geçmiş Seçimlerde İstanbul'a Kim Ne Vadetti?"
+  (`setav.org/gecmis-secimlerde-istanbula-kim-ne-vadetti/`, düşünce kuruluşu yayını) — Atabey'in
+  1968 İstanbul seçiminde AP adayı olduğunu ve seçim vaatlerini (su, kanalizasyon, çöp,
+  Alibeyköy'den boru döşenmesi) doğruluyor. İkinci kaynak (haber veritabanı): secim.milliyet.com.tr
+  / secim.hurriyet.com.tr üzerinden derlenen "İstanbul Belediye Başkanlığı'na AP'li Fahri Atabey...
+  seçildi" bilgisi + haberler.com'un İstanbul belediye başkanları listesi (8 Haziran 1968 –
+  9 Aralık 1973 arası görev süresi, %48,8 oy).
+- **Ankara — Ekrem Barlas (AP):** sonsoz.com.tr, "Ankara Belediye Başkanları -1963-2024-
+  (Bölüm-1)" — Barlas'ın (AP) 1973'te Vedat Dalokay'a (CHP) kaybetmeden önce belediye başkanı
+  olduğunu doğruluyor. İkinci kaynak (haber veritabanı): secim.milliyet.com.tr /
+  secim.hurriyet.com.tr üzerinden derlenen "Ankara Belediye Başkanlığına Adalet Partili Ekrem
+  Barlas... seçildi" bilgisi.
+- **İzmir — Osman Kibar (AP):** yukarıdaki 1963-11-yerel kaydındaki Ege Üniversitesi tez özeti
+  (1963-1973 aralıksız görev) + secim.milliyet.com.tr/secim.hurriyet.com.tr'nin "İzmir Belediye
+  Başkanlığına... Osman Kibar... seçildi" bilgisi.
+- **Aynı gün milletvekili ara seçimi de yapıldı** (Adana, Urfa, Çorum, Diyarbakır, İstanbul —
+  bkz. aşağıdaki "Ara seçimler" bölümü); bu, kaydın `not` alanında belirtildi.
+- **Ülke geneli belediye meclisi oy sayısı bulunamadı** → `sonuc: []`, seçmen sayıları `null`.
+  Yukarıdaki ÖZTÜRK (2017) makalesinin Tablo 1-2'si 1968 için de ülke geneli katılım **%59,47**
+  (belediye başkanlığı) ve 67 il belediyesinden AP 33, CHP 20, GP (Güven Partisi) 3, Bağımsız 11
+  kazandığı bilgisini veriyor; bu görevde `sonuc` alanına değil yalnızca 1968 kaydının araştırma
+  notuna (bu başlığa) düşüldü, `veri/sandik.js`'e yazılmadı (spesifikasyon ölçüsü belediye
+  meclisi, il belediyesi sayısı değil).
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-16.
+
+### Ara seçimler (1961–1971) — envanter bulundu, sonuç doğrulanamadı
+- WebSearch ile: TESAV'ın "Milletvekili Ara Seçim Sonuçları (1947, 1948, 1949, 1951, 1966, 1968,
+  1975, 1979, 1986, 2003)" başlıklı yayınının dönem 2'de **1966 ve 1968** ara seçimlerinin
+  yapıldığını gösterdiği görüldü — ama dönem 1'de de karşılaşılan sorun tekrarladı: yayının
+  kendi PDF adresi (`tesav.org.tr/wp-content/uploads/2017/03/17.-Milletvekili-Ara-Seçim-
+  Sonuçları.pdf`, Türkçe karakterler yüzde kodlamasıyla da denendi) 404 veriyor; TESAV'ın
+  "Yayınlarımız" sayfası da bu dosyaya güncel bir bağlantı sunmuyor.
+- **1966 ara seçimi:** 5 Haziran 1966, Hatay ilinde, Budak Mursaloğlu'nun 12 Ekim 1965'teki
+  ölümüyle boşalan tek milletvekilliği için yapıldı; kazananın adı (Şemsettin Mursaloğlu) birden
+  fazla WebSearch sonucunda geçiyor ama **kaynakların hiçbiri Vikipedi-dışı, açıp okunabilir bir
+  belge değildi** (arama motoru özetleri); hangi partiden seçildiği hiçbir turda doğrulanamadı.
+- **1968 ara seçimi:** 2 Haziran 1968, yerel seçimle aynı gün, 5 ilde (Adana, Urfa, Çorum,
+  Diyarbakır, İstanbul) boşalan 5 milletvekilliği için yapıldı (millî bakiye sisteminin
+  kaldırılmasının ardından); il/parti/sandalye dağılımı bu turda da doğrulanamadı.
+- TBMM'nin resmi *Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler (1923-1980)* kitabının tam
+  metninde ("ara seçim" araması) dönem 2'ye özgü bir ayrıntı bulunamadı (kitap ara seçimleri
+  ayrıntılı işlemiyor). TBMM'nin Cumhuriyet Senatosu tutanak dizini (cs__05031fih.pdf) ve genel
+  arama denemeleri de tarihli, iki kaynakla doğrulanabilir bir il/parti/sandalye dağılımına
+  ulaşamadı.
+- Sonuç: dönem 2 için kaynaktan **tarihi ve kapsamı** (hangi iller, kaç sandalye) doğrulanabilen
+  ama **il/parti/sandalye dağılımı** iki kaynakla doğrulanamayan iki ara seçim envanteri var
+  (1966 Hatay, 1968 Adana/Urfa/Çorum/Diyarbakır/İstanbul). Spesifikasyonun ara seçim veri modeli
+  (`bolge`, `sandalyeSayisi`, `sonuc`) bu ayrıntı olmadan anlamlı doldurulamayacağından ve tek
+  kaynaklı (yalnızca WebSearch özeti, açılıp okunmuş bir belge değil) bilgiyle kayıt eklemek
+  §8.1 kuralını ihlal edeceğinden, **`veri/sandik.js`'e dönem 2 için ara seçim kaydı eklenmedi**
+  (dönem 1'deki 1947-49 ara seçimleriyle aynı muamele).
+- Erişim: 2026-09-16.
diff --git a/veri/sandik.js b/veri/sandik.js
index e0d36e3..8609c9a 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -171,21 +171,70 @@ window.SANDIK = {
       not: "Bayar 3. ve son kez seçildi (413/602 oy); muhalefet milletvekilleri oylama sırasında Meclis'i terk etti." },
 
     // --- 27 Mayıs 1960 kabı (bkz. veri/partiler.js DONEMLER[1].kesinti.yonetim) ---
 
     // kaynak: araclar/kaynak-defteri.md#1961-07-referandum
     { id: "1961-07-referandum", tur: "referandum", tarih: "1961-07-09",
       konu: "1961 Anayasası'nın kabulü",
       kayitli: null, kullanilan: null, gecerli: null,
       evet: null, hayir: null, karar: "kabul",
       tutumlar: [ { parti: "chp23", tutum: "evet" }, { parti: "ap", tutum: "evet" } ],
-      not: "Milli Birlik Komitesi döneminde yapıldı; ülke geneli katılım yaklaşık %88, kabul oranı %61,7 oldu (TÜİK, 2008). 11 il 'hayır' oyu verdi; kesin sayılar bu turda bulunamadı." }
+      not: "Milli Birlik Komitesi döneminde yapıldı; ülke geneli katılım yaklaşık %88, kabul oranı %61,7 oldu (TÜİK, 2008). 11 il 'hayır' oyu verdi; kesin sayılar bu turda bulunamadı." },
+
+    // --- dönem 2 (1961 – 1971) ---
+
+    // kaynak: araclar/kaynak-defteri.md#1961-10-genel
+    { id: "1961-10-genel", tur: "genel", tarih: "1961-10-15", tekParti: false,
+      meclis: 450, kayitli: 12925395, kullanilan: 10522716, gecerli: null, baraj: null,
+      sonuc: [ { parti: "chp23", oy: 3724752, sandalye: 173 }, { parti: "ap", oy: 3527435, sandalye: 158 }, { parti: "ytp", oy: 1391934, sandalye: 65 }, { parti: "ckmp", oy: 1415390, sandalye: 54 }, { ad: "Bağımsız", oy: 81732, sandalye: 0 } ],
+      not: "27 Mayıs sonrası ilk genel seçim; ilk kez nispi temsil (çevre barajlı d'Hondt) uygulandı. Hiçbir parti tek başına çoğunluk sağlayamadı, Cumhuriyet tarihinin ilk koalisyon dönemi bu seçimle başladı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1963-11-yerel
+    { id: "1963-11-yerel", tur: "yerel", tarih: "1963-11-17",
+      olcu: "belediye-meclisi",
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [],
+      buyuksehir: {
+        istanbul: { parti: "chp23", aday: "Haşim İşcan" },
+        ankara: { parti: "chp23", aday: "Halil Sezai Erkut" },
+        izmir: { parti: "ap", aday: "Osman Kibar" }
+      },
+      not: "1961 Anayasası sonrası belediye başkanlarının ilk doğrudan halk oyuyla seçildiği yerel seçim. İstanbul'da en çok oyu alan AP adayı Nuri Eroğan, adaylık için öngörülen sürede kamu görevinden istifa etmediği gerekçesiyle YSK kararıyla diskalifiye edildi; ikinci sıradaki CHP adayı Haşim İşcan belediye başkanı sayıldı (Resmî Gazete, 13.12.1963). Ülke geneli belediye meclisi oy sayısı bulunamadı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1965-10-genel
+    { id: "1965-10-genel", tur: "genel", tarih: "1965-10-10", tekParti: false,
+      meclis: 450, kayitli: 13679753, kullanilan: 9748678, gecerli: 9307563, baraj: null,
+      sonuc: [ { parti: "ap", oy: 4921235, sandalye: 240 }, { parti: "chp23", oy: 2675785, sandalye: 134 }, { ad: "Millet Partisi", oy: 582704, sandalye: 31 }, { parti: "ytp", oy: 346514, sandalye: 19 }, { parti: "tip61", oy: 276101, sandalye: 14 }, { parti: "ckmp", oy: 208696, sandalye: 11 }, { ad: "Bağımsız", oy: 296528, sandalye: 1 } ],
+      not: "Millî bakiye (ulusal artık) sistemiyle yapılan tek seçim. AP tek başına iktidara geldi; TİP ilk kez meclise girdi (14 sandalye + 1 senatörlük)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1966-03-cb-tbmm
+    { id: "1966-03-cb-tbmm", tur: "cb-tbmm", tarih: "1966-03-28",
+      secilen: "Cevdet Sunay", turSayisi: 1,
+      not: "Cemal Gürsel'in sağlık nedeniyle görevi bırakmasının ardından, AP ve CHP'nin ortak desteğiyle 1. turda seçildi; CKMP lideri Alparslan Türkeş de aday oldu." },
+
+    // kaynak: araclar/kaynak-defteri.md#1968-06-yerel
+    { id: "1968-06-yerel", tur: "yerel", tarih: "1968-06-02",
+      olcu: "belediye-meclisi",
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [],
+      buyuksehir: {
+        istanbul: { parti: "ap", aday: "Fahri Atabey" },
+        ankara: { parti: "ap", aday: "Ekrem Barlas" },
+        izmir: { parti: "ap", aday: "Osman Kibar" }
+      },
+      not: "AP İstanbul, Ankara ve İzmir dahil çoğu ilde kazandı; İzmir'de Osman Kibar 1963'te seçildiği görevi korudu. Aynı gün 5 ilde milletvekili ara seçimi de yapıldı. Ülke geneli belediye meclisi oy sayısı bulunamadı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1969-10-genel
+    { id: "1969-10-genel", tur: "genel", tarih: "1969-10-12", tekParti: false,
+      meclis: 450, kayitli: 14788552, kullanilan: 9516035, gecerli: null, baraj: null,
+      sonuc: [ { parti: "ap", oy: 4229712, sandalye: 256 }, { parti: "chp23", oy: 2487006, sandalye: 143 }, { parti: "gp", oy: 597818, sandalye: 15 }, { ad: "Bağımsız", oy: 511023, sandalye: 13 }, { ad: "Türkiye Birlik Partisi", oy: 254695, sandalye: 8 }, { ad: "Millet Partisi", oy: 292961, sandalye: 6 }, { parti: "ytp", oy: 197929, sandalye: 6 }, { parti: "tip61", oy: 243631, sandalye: 2 }, { parti: "mhp69", oy: 275091, sandalye: 1 } ],
+      not: "Cumhuriyet tarihinin en düşük katılımlı genel seçimi (%64,3). MHP ve Türkiye Birlik Partisi ilk kez meclise girdi; MHP'nin tek sandalyesi Alparslan Türkeş'e ait." }
   ],
 
   hukumetler: [
     // --- dönem 0 (1923 – 1945) ---
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-1
     { no: 1, basbakan: "İsmet İnönü", partiler: ["chp23"],
       baslangic: "1923-10-30", bitis: "1924-03-06", tip: "tek-parti", bitisNedeni: null,
       not: null },
 
@@ -302,13 +351,60 @@ window.SANDIK = {
       not: "27 Mayıs 1960 askerî darbesiyle görevden uzaklaştırıldı." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-24 (27 Mayıs 1960 kabı)
     { no: 24, basbakan: "Cemal Gürsel", partiler: [],
       baslangic: "1960-05-30", bitis: "1961-01-05", tip: "mbk", bitisNedeni: null,
       not: "Millî Birlik Komitesi döneminin ilk hükümeti." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-25 (27 Mayıs 1960 kabı)
     { no: 25, basbakan: "Cemal Gürsel", partiler: [],
       baslangic: "1961-01-05", bitis: "1961-11-20", tip: "mbk", bitisNedeni: null,
-      not: "Millî Birlik Komitesi döneminin ikinci ve son hükümeti; 15 Ekim 1961 seçiminden sonra da bir süre görevde kaldı." }
+      not: "Millî Birlik Komitesi döneminin ikinci ve son hükümeti; 15 Ekim 1961 seçiminden sonra da bir süre görevde kaldı." },
+
+    // --- dönem 2 (1961 – 1971) ---
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-26
+    { no: 26, basbakan: "İsmet İnönü", partiler: ["chp23", "ap"],
+      baslangic: "1961-11-20", bitis: "1962-06-25", tip: "koalisyon", bitisNedeni: null,
+      not: "Cumhuriyet tarihinin ilk koalisyon hükümeti." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-27
+    { no: 27, basbakan: "İsmet İnönü", partiler: ["chp23", "ckmp", "ytp"],
+      baslangic: "1962-06-25", bitis: "1963-12-25", tip: "koalisyon", bitisNedeni: null,
+      not: "İkinci İnönü koalisyonu; bağımsız milletvekillerinin de desteğiyle kuruldu." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-28
+    { no: 28, basbakan: "İsmet İnönü", partiler: ["chp23"],
+      baslangic: "1963-12-25", bitis: "1965-02-20", tip: "azinlik", bitisNedeni: null,
+      not: "CHP azınlık hükümeti." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-29
+    { no: 29, basbakan: "Suat Hayri Ürgüplü", partiler: ["ap", "ckmp", "ytp"],
+      baslangic: "1965-02-20", bitis: "1965-10-27", tip: "koalisyon", bitisNedeni: "secim",
+      not: "Partisiz senatör Ürgüplü başkanlığında AP, CKMP, YTP, Millet Partisi (soyağacında yok) ve bağımsızların katılımıyla kuruldu; 10 Ekim 1965 seçiminin ardından sona erdi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-30
+    { no: 30, basbakan: "Süleyman Demirel", partiler: ["ap"],
+      baslangic: "1965-10-27", bitis: "1969-11-03", tip: "tek-parti", bitisNedeni: "secim",
+      not: "12 Ekim 1969 seçiminin ardından kabine yenilendi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-31
+    { no: 31, basbakan: "Süleyman Demirel", partiler: ["ap"],
+      baslangic: "1969-11-03", bitis: "1970-03-06", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-32
+    { no: 32, basbakan: "Süleyman Demirel", partiler: ["ap"],
+      baslangic: "1970-03-06", bitis: "1971-03-26", tip: "tek-parti", bitisNedeni: "muhtira",
+      not: "12 Mart 1971 muhtırasının ardından görevden ayrıldı." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-33
+    { no: 33, basbakan: "Nihat Erim", partiler: [],
+      baslangic: "1971-03-26", bitis: "1971-12-11", tip: "partiluestu", bitisNedeni: null,
+      not: "12 Mart muhtırası sonrası kurulan ilk partilerüstü (teknokrat ağırlıklı) hükümet." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-34
+    { no: 34, basbakan: "Nihat Erim", partiler: [],
+      baslangic: "1971-12-11", bitis: "1972-05-22", tip: "partiluestu", bitisNedeni: null,
+      not: "Aynı başbakanla, daha teknokrat ağırlıklı kadroyla yeniden kuruldu." }
   ]
 };
```
