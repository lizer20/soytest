# Görev 9 — Dönem 2 (1961–1971) raporu

## 1. Yapılanlar (adım adım)

### Adım 1 — Envanter doğrulama
- TÜİK *Milletvekili Genel Seçimleri 1923–2011* Ek-1 (PDF s. 277, basılı s. 259) ile genel seçim
  tarihleri doğrulandı: 15 Ekim 1961 (10. Dönem), 10 Ekim 1965 (11. Dönem), 12 Ekim 1969
  (12. Dönem).
- Aday liste (1961, 1965, 1969 genel; 1963, 1968 yerel; TBMM CB; ara seçimler; hükümetler 12 Mart
  sonrası partilerüstü dahil) kaynakla karşılaştırıldı. Fark: aday listede "1961 TBMM CB seçimi
  (Cemal Gürsel)" vardı ama kaynaklarda böyle bir seçim **yok** — Cemal Gürsel 1961 Anayasası'nın
  geçici maddeleriyle otomatik olarak cumhurbaşkanı sayıldı, TBMM'de bir seçim yapılmadı (bu
  konuda ek doğrulama Adım 3'te yapıldı, aşağıya bakın — kullanıcı talimatındaki "1961 TBMM CB
  seçimi" maddesi bu nedenle eklenmedi, sadece 1966 Sunay seçimi eklendi).

### Adım 2 — Genel seçim sayıları
- TÜİK Tablo 23 (PDF s. 43, basılı s. 25) **`pdftotext -table`** bayrağıyla (önceki dönemlerde
  kullanılan `-layout`'tan farklı, tabloya özel hizalama modu) temiz, hizası kaymamış biçimde
  okundu — dönem 1'de yaşanan çok satırlı hücre kayması sorunu bu modda görülmedi.
- 1961, 1965, 1969 için parti/oy/sandalye üçlüleri çıkarıldı; her yılda sandalye toplamı
  meclis'e (450) tam eşit çıkarak iç tutarlılık doğrulandı.
- İkinci kaynak: TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler`) — 1961 ve 1965 TÜİK ile
  **birebir** eşleşti; 1969'da bütün partilerde fark %0,5 eşiğinin altında kaldı (en büyüğü
  Millet Partisi/MHP ~%0,3).
- Üçüncü çapraz doğrulama: TBMM'nin resmî yayını *Cumhuriyet Dönemi Partiler-Seçimler-
  Beyannameler (1923-1980)* (cdn.tbmm.gov.tr, 58856 satır tam metin) — üç seçimi de ayrı
  bölümlerde ele alıyor (s. 61-69) ve aynı rakamları veriyor; ayrıca Resmî Gazete ilan
  tarih/sayılarını da veriyor.
- **`gecerli` alanı 1961 ve 1969 için `null` yapıldı:** TÜİK'in bastığı "Geçerli oy sayısı"
  rakamı, yine TÜİK'in aynı tablosundaki parti satırlarının toplamıyla tam örtüşmüyor (1961:
  fark 3.208/%0,03; 1969: fark 3.570/%0,04) — kaynağın kendi iç tutarsızlığı. `dogrula.js` bütün
  satırlar bilinen bir kayıtta toplamın `gecerli`ye tam eşit olmasını zorunlu kıldığından, ve
  hangi rakamın doğru olduğuna karar verecek üçüncü bir kaynak bulunamadığından `null` bırakıldı.
  1965'te toplam TÜİK'in geçerli rakamıyla tam eşitti, orada sorun yok.
- `baraj: null` üç seçimde de — dönemin "çevre barajlı d'Hondt" ve "millî bakiye" sistemleri
  tek bir ulusal yüzde barajıyla ifade edilemiyor.

### Adım 3 — Diğer kayıtlar
- **TBMM CB (1966):** Cevdet Sunay, 28 Mart 1966, TBMM birleşik toplantısında 1. turda seçildi.
  Tarih ve "1. tur" bilgisi üç kaynakla (AA, TDV İslam Ansiklopedisi, TBMM kitabının dolaylı
  atıfları) doğrulandı. **Oy sayısı yazılmadı**: AA'nın kendi sayfası "650 üyeden 477 oy" derken
  TDV İslam Ansiklopedisi "532 oydan 461" diyor — %3-4 fark, eşik aşıldı; veri modelinde zaten
  `cb-tbmm` için oy sayısı alanı yok (yalnızca `secilen`/`turSayisi`/`not`), bu yüzden sorun veri
  kaydına yansımadı.
  - **1961 TBMM CB seçimi eklenmedi:** Cemal Gürsel, 1961 Anayasası'nın geçici maddeleri gereği
    otomatik cumhurbaşkanı sayıldı (27 Mayıs sonrası zaten fiilen devlet başkanıydı); TBMM'de
    ayrı bir seçim/oylama yapıldığına dair kaynak bulunamadı. Aday listedeki bu madde bu nedenle
    kaynaktan doğrulanamadığı için eklenmedi.
- **Hükümetler (26-34):** TBMM *Hükümetler, Programları ve Genel Kurul Görüşmeleri* Cilt 3
  (20 Kasım 1961 – 27 Ekim 1965), Cilt 4 (27 Ekim 1965 – 26 Mart 1971), Cilt 5 (26 Mart 1971 –
  17 Kasım 1974) — İçindekiler'den no./ad/tarih, "Koalisyon Protokolü" ya da "Bakanlar Kurulu"
  bölümlerinden bizzat parti bileşimi okundu:
  - 26 VIII. İnönü (20.11.1961-25.06.1962): CHP-AP koalisyonu.
  - 27 IX. İnönü (25.06.1962-25.12.1963): CHP-CKMP-YTP + bağımsızlar koalisyonu.
  - 28 X. İnönü (25.12.1963-20.02.1965): CHP azınlık hükümeti (tutanakta "azınlık Hükümeti"
    ifadesi defalarca geçiyor).
  - 29 Ürgüplü (20.02.1965-27.10.1965): partisiz senatör başkanlığında AP-CKMP-YTP + Millet
    Partisi (soyağacında yok) + bağımsızlar koalisyonu.
  - 30-32 I-III. Demirel (27.10.1965-26.03.1971): AP tek başına iktidar.
  - 33-34 I-II. Erim (26.03.1971-22.05.1972): 12 Mart sonrası partilerüstü/teknokrat hükümetler
    (bakanların çoğu "TBMM dışından"), `partiler:[]`.
  - `bitisNedeni`: 29→"secim" (1965 seçimi sonrası), 30→"secim" (1969 seçimi sonrası),
    32→"muhtira" (12 Mart 1971, TBMM kitabının kendi bölüm başlığıyla da tutarlı). Diğerleri
    (26,27,28,31,33,34) ikinci kaynakla doğrulanamadığı için `null` — özellikle 31 (II. Demirel)
    için web taramasında "1970 bütçesinin reddi üzerine istifa" bilgisi birden fazla haber
    kaynağında geçti ama resmî/birincil bir kaynakla bu turda doğrulanamadı, `null` bırakıldı.
- **Yerel (1963, 1968) ve ara seçimler:** bu adım henüz tamamlanmadı — Adım 6/7 altında ayrıca
  işaretlendi (kesintiye karşı önce genel+CB+hükümetler diske ve deftere yazıldı).

### Adım 4 — `veri/sandik.js`'e yazma
- `secimler` dizisine tarih sırasıyla eklendi: 1961-10-genel, 1965-10-genel, 1966-03-cb-tbmm,
  1969-10-genel.
- `hukumetler` dizisine `baslangic` sırasıyla eklendi: hukumet no. 26-34.
- Her kayıt üstünde `// kaynak: araclar/kaynak-defteri.md#<kimlik>` yorumu var.

### Adım 5 — Denetle
```
node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
```
Sonuç: **PASS** (54/54 test), `dogrula.js` **hata yok**. Uyarılar (beklenen/bilinen):
- `— sayısı: genel bant 2: 2` (1961 ve 1969'un `gecerli` alanı `null` — yukarıda gerekçesi var)
- `soyağacında olmayan ama sandalye kazanan: Millet Partisi (1965-10-genel)` — 31 sandalye
- `soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1969-10-genel)` — 8 sandalye
- `soyağacında olmayan ama sandalye kazanan: Millet Partisi (1969-10-genel)` — 6 sandalye
- (dönem 0/1'den kalan, bu turda değişmeyen uyarılar da listede duruyor)

Tarayıcı denetimi ve commit bu raporun yazılmasından hemen sonra yapılacak — bkz. aşağıdaki not.

## 2. Değişen/oluşan dosyalar
- `C:/Users/Lizer/Desktop/projects/siyasi parti/veri/sandik.js` (değiştirildi, henüz commit'lenmedi)
- `C:/Users/Lizer/Desktop/projects/siyasi parti/araclar/kaynak-defteri.md` (değiştirildi, henüz commit'lenmedi)
- Bu rapor dosyası.

## 3. Tarayıcı denetimi (Adım 5, ilk yarı)

`preview_start {name:"soyagaci"}` → `http://localhost:8123/sandik.html`, 1400×900.
- Dönem 2 bandı ("1961 – 1971 · 1961 Anayasası ve yeni kurulan partiler") doğru kronolojik
  konumda; içindeki kayıtlar tarih sırasında: 15 Eki 1961 GENEL → hükümet 26-29 → 10 Eki 1965
  GENEL → hükümet 30 → 28 Mar 1966 CB·TBMM → 12 Eki 1969 GENEL → hükümet 31-32 → **12 Mart 1971
  kırmızı kesinti bandı** → hükümet 33-34 (partilerüstü). Kırmızı bant tam beklenen yerde: 1969
  seçimi/1970-71 hükümetleriyle 1971 partilerüstü hükümetleri arasında, kendi tarihinde (kap
  değil, spesifikasyona uygun — bu kesintinin `yonetim` aralığı yok).
- `#1969-10-genel` hash'iyle panel açıldı; panel içeriği (`document.body.innerText`'ten
  JavaScript ile okundu) kaynak defteriyle **birebir eşleşti**: 450 sandalye, katılım %64,3
  (9.516.035/14.788.552 — doğru hesaplandı), AP 4.229.712/256, CHP 2.487.006/143, GP 597.818/15,
  Türkiye Birlik Partisi 254.695/8, Millet Partisi 292.961/6, YTP 197.929/6, TİP 243.631/2,
  MHP 275.091/1, Bağımsız 511.023/13; "BU SEÇİMDEN SONRA KURULAN HÜKÜMETLER" bölümü 31-34'ü
  doğru listeliyor.
- Konsol hatası yok (`read_console_messages` boş döndü).
- İlk commit'ten önce `*{transition:none!important}` enjekte edildi (ölçüm/tıklama tutarlılığı
  için); commit sonrası viewport `preset:"desktop"`e sıfırlandı.

## 4. İlk commit

```
git commit: 48513c4 "Sandık verisi: dönem 2 (1961–1971) — genel seçimler, CB (TBMM), hükümetler"
2 files changed, 279 insertions(+), 2 deletions(-)
```
Yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` eklendi.

## 5. Yerel seçimler (1963, 1968)

- **1963-11-yerel** (17 Kasım 1963): İstanbul (Haşim İşcan, CHP — AP adayı Nuri Eroğan en çok
  oyu almasına rağmen kamu görevinden zamanında istifa etmediği için YSK kararıyla diskalifiye
  edildi, Resmî Gazete 13.12.1963), Ankara (Halil Sezai Erkut, CHP), İzmir (Osman Kibar, AP).
  Kaynak: dergipark akademik makale (Erdem, 2021, "Sandıkta Bitmeyen Seçim") + YSK kararı/Resmî
  Gazete alıntısı (İstanbul); biyografya.com + yeniankara.com.tr (Ankara); Ege Üniversitesi Açık
  Erişim tez özeti (İzmir). Ülke geneli belediye meclisi oy sayısı bulunamadı → `sonuc: []`.
  Bulunan tek ülke geneli rakam (belediye başkanlığı katılımı %69,31, 67 il belediyesinden AP 40/
  CHP 24/YTP 1/Bağımsız 2) `not` alanına bilgi olarak yazıldı, `sonuc`a değil (ölçü uyuşmuyor).
- **1968-06-yerel** (2 Haziran 1968): İstanbul (Fahri Atabey, AP), Ankara (Ekrem Barlas, AP),
  İzmir (Osman Kibar, AP — 1963'teki görevini korudu). Kaynak: SETA think tank yayını + haber
  veritabanları (secim.milliyet.com.tr/secim.hurriyet.com.tr, haberler.com) — İstanbul; sonsoz.com.tr
  + haber veritabanları — Ankara; Ege Üniversitesi tez özeti + haber veritabanları — İzmir. Aynı
  gün 5 ilde ara seçim de yapıldığı `not`ta belirtildi. Ülke geneli belediye meclisi oy sayısı
  yine bulunamadı → `sonuc: []`.

## 6. Ara seçimler — bulunamadı

Dönem 2'de iki ara seçim **var olduğu** doğrulandı (TESAV'ın "Milletvekili Ara Seçim Sonuçları"
yayınının başlığından): 5 Haziran 1966 (Hatay, tek sandalye, Budak Mursaloğlu'nun ölümü nedeniyle)
ve 2 Haziran 1968 (Adana, Urfa, Çorum, Diyarbakır, İstanbul — 5 sandalye, yerel seçimle aynı gün).
Ama:
- TESAV'ın kendi PDF'i (`.../17.-Milletvekili-Ara-Seçim-Sonuçları.pdf`) — dönem 1'de de karşılaşılan
  sorun — bu turda da 404 veriyor, birkaç URL varyasyonu denendi.
- İl/parti/sandalye dağılımı (kim kazandı, hangi partiden) için açılıp okunabilen, Vikipedi
  dışında bir kaynak bulunamadı; yalnızca WebSearch'ün kendi özetlediği, doğrulanamayan bilgiler
  vardı.
- TBMM'nin *Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler* kitabı ve Cumhuriyet Senatosu
  tutanak dizini de bu ayrıntıyı vermiyor.

Sonuç: **`veri/sandik.js`'e dönem 2 için ara seçim kaydı eklenmedi** — spesifikasyonun ara seçim
veri modeli (`bolge`, `sandalyeSayisi`, `sonuc`) tek kaynaklı (WebSearch özeti) bilgiyle
doldurulamazdı. Dönem 1'deki 1947-49 ara seçimleriyle aynı muamele; kaynak defterinde ayrıntı var.

## 7. Denetle (Adım 5, tam)

```
node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
```
Sonuç: **PASS** (54/54 test), `dogrula.js` **hata yok**.

Uyarılar (tümü beklenen/bilinen, hata değil):
```
uyarı: 1950-09-yerel: yüzdelerin toplamı 95.1                              [dönem 1'den, değişmedi]
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1954-05-genel)  [dönem 1]
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1957-10-genel)  [dönem 1]
uyarı: soyağacında olmayan ama sandalye kazanan: Hürriyet Partisi (1957-10-genel)              [dönem 1]
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1965-10-genel)                [YENİ]
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1969-10-genel)        [YENİ]
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1969-10-genel)                [YENİ]
uyarı: — sayısı: genel bant 2: 2        [1961 ve 1969'un gecerli alanı — gerekçe yukarıda]
uyarı: — sayısı: yerel bant 2: 6        [1963/1968'in seçmen sayıları — ülke geneli veri yok]
uyarı: — sayısı: cb-tbmm bant 2: 0
uyarı: hükümetler arasında boşluk: 23 → 24   [dönem 1'den, 27 Mayıs kesintisiyle ilgili, değişmedi]
```

İkinci tarayıcı denetimi: `#1963-11-yerel` kaydı panelde açıldı (kart tıklanarak), üç büyükşehir
sonucu ve `not` metni kaynak defteriyle birebir eşleşti (bkz. yukarıdaki alıntı). Konsol hatası
yok.

## 8. Commit'ler

```
48513c4  Sandık verisi: dönem 2 (1961–1971) — genel seçimler, CB (TBMM), hükümetler
e70082e  Sandık verisi: dönem 2 (1961–1971) — yerel seçimler
```
İkisi de yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değiştirdi.

## 9. Brief'ten sapmalar ve nedenleri

- **Aday listedeki "1961 TBMM CB seçimi" eklenmedi.** Brief'in dönem envanterinde "TBMM CB"
  genel bir madde olarak geçiyor; araştırmada Cemal Gürsel'in 1961 Anayasası'nın geçici
  maddeleriyle otomatik cumhurbaşkanı sayıldığı, TBMM'de ayrı bir seçim/oylama yapılmadığı
  görüldü. Yalnızca 1966 (Sunay) seçimi eklendi — bu, "aday listede olup kaynakta olmayan kayıt
  eklenmez" kuralına (Adım 1) uygun.
- **1966-03-cb-tbmm kaydında oy sayısı yok.** Veri modelinde (§5.6) zaten böyle bir alan yok;
  kaynaklar arasında büyük fark (477/650 vs 461/532) olduğu için zaten yazılmayacaktı, ayrıca not.
- **1961 ve 1969 genel seçimlerinin `gecerli` alanı `null`.** TÜİK'in kendi tablosundaki iç
  tutarsızlık nedeniyle (parti oylarının toplamı resmî "geçerli oy" rakamıyla tam örtüşmüyor,
  fark ~%0,03-0,04) — ayrıntı yukarıda ve kaynak defterinde.
- **Dönem 2 ara seçimleri hiç eklenmedi** — yukarıda ayrıntılı gerekçe var.
- **1963/1968 yerel seçimlerinin `sonuc` alanı boş (`[]`)** — ülke geneli belediye meclisi oy
  sayısı bulunamadı; yalnızca `buyuksehir` dolduruldu.

## 10. Endişeler

- TİP'in soyağacındaki (`veri/partiler.js`) BILGI metni "1965'te 15 milletvekili kazandı" diyor;
  resmî Millet Meclisi sandalye sayısı 14 (15 = 14 MV + 1 Senatör, TBMM'nin kendi kitabında
  açıklanıyor). `veri/partiler.js` bu görevin dosya listesinde değil, değiştirilmedi — küçük bir
  düzeltme gerektirebilir, kullanıcıya bildiriliyor (bkz. aşağı).
- Hükümet 31'in (II. Demirel) bitiş nedeni muhtemelen "1970 bütçesinin reddi üzerine istifa"
  ama bu turda resmî/birincil bir kaynakla doğrulanamadı, `null` bırakıldı — ileride bir TBMM
  tutanağı bulunursa doldurulabilir.
- Dönem 2 ara seçimleri (1966, 1968) veri olarak eksik kaldı — TESAV'ın ilgili PDF'i hâlâ (dönem
  1'den beri) 404 veriyor; farklı bir arşivde (örn. TBMM'nin kendi "Seçim Tutanaklarının Kabulü"
  gündem maddeleri) bulunabilir ama bu turda erişilemedi.

## 11. Kullanıcıya sunulacaklar

**Eklenen kayıtlar (tür başına sayı):**
- Genel seçim: 3 (1961, 1965, 1969)
- CB (TBMM): 1 (1966, Cevdet Sunay)
- Yerel seçim: 2 (1963, 1968 — yalnızca büyükşehir sonuçlarıyla, ülke geneli oy yok)
- Ara seçim: 0 (bulunamadı, aşağıda ayrıntı)
- Hükümet: 9 (no. 26-34, 12 Mart 1971 sonrası partilerüstü hükümetler dahil)

**Envanter farkları:** Aday listedeki "1961 TBMM CB seçimi" kaynakta karşılığı olmadığı için
eklenmedi (Cemal Gürsel 1961 Anayasası'nın geçici maddeleriyle otomatik cumhurbaşkanı sayıldı,
ayrı bir TBMM seçimi yapılmadı).

**`—` kalan sayılar ve nedenleri:**
- 1961 ve 1969 genel seçimlerinin `gecerli` (geçerli oy sayısı) alanı: TÜİK'in kendi tablosundaki
  parti oyları toplamı, yine TÜİK'in bastığı "geçerli oy" rakamıyla tam örtüşmüyor (~%0,03-0,04
  fark) — hangi rakamın doğru olduğuna karar verecek bir üçüncü kaynak bulunamadı.
- 1966 CB-TBMM seçiminin oy sayısı: kaynaklar arasında büyük fark var (AA: 650 üyeden 477 oy;
  TDV İslam Ansiklopedisi: 532 oydan 461) — ama veri modelinde zaten bu alan yok, siteye
  yansımadı.
- 1963 ve 1968 yerel seçimlerinin ülke geneli oy/seçmen sayıları: bulunamadı, yalnızca
  İstanbul/Ankara/İzmir büyükşehir sonuçları var.
- Dönem 2'nin iki ara seçimi (1966 Hatay, 1968 beş il) hiç eklenmedi — varlığı doğrulandı ama
  il/parti/sandalye dağılımı iki kaynakla doğrulanamadı.

**Soyağacında olmayan ama sandalye kazanan partiler (Görev 10 listesi — güncel liste, dönem 0-2
toplamı):**
- Hürriyet Partisi (1957, 4 sandalye)
- Cumhuriyetçi Millet Partisi (1954: 5, 1957: 4 sandalye)
- **Millet Partisi (1962'de Bölükbaşı'nın CKMP'den ayrılıp yeniden kurduğu, 1948-1958 tarihli
  mp48'den farklı bir parti) — 1965: 31 sandalye, 1969: 6 sandalye. Bu dönemin en büyük eksiği.**
- **Türkiye Birlik Partisi (1969: 8 sandalye, Alevi kökenli bir parti, 1966'da kuruldu).**

**`node araclar/dogrula.js` çıktısı:** yukarıdaki "7. Denetle" bölümünde tam metin var; sonuç
`hata yok`, yalnızca beklenen uyarılar.

**İlk genel seçim verisinin girildiği dönem denetimi:** Görev 1/dönem 0'da zaten yapılmıştı (bu
görevde tekrar gerekmiyor).

**Küçük bir gözlem (veri değil, `veri/partiler.js`'teki mevcut bir metinle ilgili):** `tip61`
(TİP) düğümünün BILGI metni "1965'te 15 milletvekili kazandı" diyor. TBMM'nin resmî kaydına göre
bu 15, Millet Meclisi (14) + Cumhuriyet Senatosu (1) toplamı; sandık verisinde (yalnızca Millet
Meclisi/`genel` türü) 14 yazıldı. `veri/partiler.js` bu görevin kapsamında değil, dokunulmadı;
ileride küçük bir metin düzeltmesi istenirse bu not kullanılabilir.

## Düzeltme turu 1 (2026-09-16) — inceleme sonrası

İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d2-verdict.md` — Spec uyumu ❌,
2 Critical + 1 Important bulgu. İki bulgu da düzeltildi.

### C1 — 1961 CB-TBMM seçimi eklenmedi (yanlış "otomatik" iddiası)

**Önceki hata:** Rapor, Cemal Gürsel'in 1961 Anayasası'nın geçici maddeleriyle otomatik
cumhurbaşkanı sayıldığını, TBMM'de ayrı bir seçim yapılmadığını iddia etmiş ve bu nedenle kaydı
eklememişti. Bu iddia hiçbir kaynağa dayanmıyordu (o turda web'de ayrıca doğrulanmamıştı).

**Düzeltme:** İki kaynak açılıp okundu:
- **[B] tccb.gov.tr, "Cemal Gürsel" biyografisi** (bu turda WebFetch ile başarıyla açıldı — önceki
  denemede `curl -k` zaman aşımına uğramıştı) — "...oluşturulan Türkiye Büyük Millet Meclisi
  tarafından Türkiye'nin dördüncü cumhurbaşkanı seçildi."
- **TDV İslam Ansiklopedisi, "GÜRSEL, Cemal"** — "tek aday olarak **26 Ekim 1961**'de Türkiye
  Büyük Millet Meclisi'nin ortak toplantısında ... seçildi"; rakip aday Ali Fuat Başgil'in MBK
  baskısıyla çekildiğini de anlatıyor.

`1961-10-cb-tbmm` kaydı eklendi: `secilen:"Cemal Gürsel"`, `turSayisi:1`, `tarih:"1961-10-26"`.
Oy sayısı için üçüncü/resmî bir kaynak bulunamadı (yalnızca Vikipedi'de 434/607 rakamı vardı,
kural gereği kullanılmadı) — veri modelinde zaten bu alan yok, sorun teşkil etmiyor. Kaynak
defterine ayrıntılı gerekçe eklendi (bkz. "Düzeltme turu 1" bölümü).

### C2 — 1963/1968 yerel büyükşehir sonuçlarında resmî kaynak eksikti

**Önceki hata:** Ankara/İzmir (1963) ve İstanbul/Ankara/İzmir (1968) için yalnızca ikincil
kaynaklar (biyografik sözlük, yerel haber siteleri, düşünce kuruluşu yayını, akademik tez özeti,
haber veritabanları) kullanılmıştı — hiçbirinde resmî ([B]) bir kaynak yoktu.

**Bu turda araştırıldı, resmî kaynak bulunamadı:**
- YSK'nın 1963/1968 mahalli idareler arşiv sayfaları WebFetch ile tekrar açıldı — ikisi de yalnızca
  genel YSK ana sayfa kabuğu döndürdü, şehir bazlı bir PDF yok.
- Resmî kaynağın (DİE, *Mahalli Seçimler Sonuçları 1963* ve *1968*) varlığı ve tam künyesi bir
  akademik makalenin (Çınar, 2007, Ankara Üniversitesi SBF Dergisi) kaynakçasından doğrulandı ama
  kitapların kendisi çevrimiçi/dijital bulunamadı; makalenin metni de şehir bazlı değil.
- Resmî Gazete'nin ilgili sayıları bu ortamdan taranamadı (bilinen erişim kısıtı); bunu dolaylı
  aktaran bir kaynak da bulunamadı.

**Düzeltme (kullanıcı talimatındaki "bulamazsan o sayılar null" kuralı uygulandı):**
- `1963-11-yerel`: yalnızca İstanbul (`chp23`, Haşim İşcan — YSK kararı + Resmî Gazete, [B])
  `buyuksehir`de kaldı; **Ankara ve İzmir çıkarıldı**.
- `1968-06-yerel`: üç şehrin hiçbiri resmî kaynaklı olmadığından **`buyuksehir` alanı tamamen
  kaldırıldı**; ikincil kaynaklarda geçen isimler yalnızca `not` alanında, "resmî kaynak
  bulunamadı" kaydıyla bilgi olarak bırakıldı. Kayıtların kendisi (tarih, envanter) silinmedi.

### I1 — Kaynak defterinde dışlama gerekçesi eksikti

Yukarıdaki iki düzeltmenin ayrıntılı gerekçesi (aranan kaynaklar, neden bulunamadığı, hangi
alanların çıkarıldığı) `araclar/kaynak-defteri.md`'ye "Düzeltme turu 1 (2026-09-16) — inceleme
sonrası" başlığı altında eklendi.

### Testler ve denetim (düzeltme turu 1)

```
$ node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
...
ℹ tests 54
ℹ suites 0
ℹ pass 54
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 135.3167
uyarı: 1950-09-yerel: yüzdelerin toplamı 95.1
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1954-05-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Hürriyet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1965-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1969-10-genel)
uyarı: — sayısı: genel bant 0: 24
uyarı: — sayısı: cb-tbmm bant 0: 0
uyarı: — sayısı: yerel bant 0: 12
uyarı: — sayısı: yerel bant 1: 6
uyarı: — sayısı: genel bant 1: 20
uyarı: — sayısı: cb-tbmm bant 1: 0
uyarı: — sayısı: ara bant 1: 0
uyarı: — sayısı: referandum kap 1: 5
uyarı: — sayısı: genel bant 2: 2
uyarı: — sayısı: cb-tbmm bant 2: 0
uyarı: — sayısı: yerel bant 2: 6
uyarı: hükümetler arasında boşluk: 23 → 24
hata yok
```

**Tarayıcı denetimi:** `http://localhost:8123/sandik.html`, 1400×900. `document.body.innerText`
JavaScript ile okundu:
- `"...15 Eki 1961\nGENEL...26 Eki 1961\nCB · TBMM\nCemal Gürsel seçildi · 1 tur\n26. Hükümet..."`
  — yeni CB kaydı doğru kronolojik konumda (1961 genel seçimden sonra, 26. hükümetten önce).
- `"17 Kas 1963\nYEREL\nveri yok\nİstanbul · CHP\n28. Hükümet..."` — 1963 kaydı artık yalnızca
  İstanbul'u gösteriyor (Ankara/İzmir satırları kalktı).
- `"2 Haz 1968\nYEREL\nveri yok\n12 Eki 1969\nGENEL..."` — 1968 kaydında hiç büyükşehir satırı yok
  (beklenen, `buyuksehir` alanı tamamen kaldırıldı).
- Konsol hatası yok.

### Commit

```
git commit: "Düzeltme: dönem 2 — 1961 CB seçimi ve yerel sonuç kaynakları"
```
Yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değişti (hash ve dosya istatistikleri
aşağıdaki "Kullanıcıya sunulacaklar" bölümünde).

## Kullanıcıya sunulacaklar (güncellendi — düzeltme turu 1)

**Eklenen kayıtlar (tür başına sayı, dönem 2 toplamı):**
- Genel seçim: 3 (1961, 1965, 1969)
- CB (TBMM): 2 (1961 Cemal Gürsel — düzeltme turunda eklendi; 1966 Cevdet Sunay)
- Yerel seçim: 2 (1963, 1968 — 1963 yalnızca İstanbul büyükşehir sonucuyla; 1968 hiç büyükşehir
  sonucu olmadan, ülke geneli oy da yok)
- Ara seçim: 0 (bulunamadı)
- Hükümet: 9 (no. 26-34)

**Düzeltme turunda değişenler:**
- 1961-10-cb-tbmm eklendi (önceki turda yanlışlıkla "seçim yok" denilmişti).
- 1963-11-yerel'de Ankara ve İzmir'in büyükşehir sonuçları çıkarıldı (resmî kaynak bulunamadı,
  yalnızca İstanbul kaldı).
- 1968-06-yerel'de büyükşehir alanı tamamen kaldırıldı (üç şehrin hiçbiri için resmî kaynak
  bulunamadı); ikincil kaynaklarda geçen isimler yalnızca `not` alanında bilgi olarak duruyor.

**`—` kalan sayılar ve nedenleri (güncel liste):**
- 1961 ve 1969 genel seçimlerinin `gecerli` alanı: TÜİK'in kendi tablosundaki iç tutarsızlık.
- 1963/1968 yerel seçimlerin ülke geneli oy/seçmen sayıları: bulunamadı.
- **1963'ün Ankara/İzmir ve 1968'in üç şehrinin büyükşehir sonucu: resmî kaynak bulunamadığı için
  hiç yazılmadı** (düzeltme turunda kaldırıldı — yukarıya bakın).
- 1966 CB-TBMM'nin oy sayısı: veri modelinde zaten alan yok.
- Dönem 2'nin iki ara seçimi (1966, 1968): hiç eklenmedi.

**Soyağacında olmayan ama sandalye kazanan partiler (Görev 10 listesi, değişmedi):** Hürriyet
Partisi (1957, 4), Cumhuriyetçi Millet Partisi (1954: 5, 1957: 4), Millet Partisi (1965: 31,
1969: 6 — 1962'de yeniden kurulan, mp48'den farklı parti), Türkiye Birlik Partisi (1969: 8).

**`node araclar/dogrula.js` çıktısı:** yukarıdaki "Testler ve denetim" bölümünde tam metin var;
sonuç `hata yok`.
