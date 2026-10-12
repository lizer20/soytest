# Görev 9 — Dönem 3 (1972–1980, 12 Eylül kabı dahil) raporu

Tamamlandı: grup 1 (genel+CB+hükümetler), grup 2 (yerel/ara+12 Eylül kabı+1982 referandumu) ve
hükümet tarihlerinin TBMM ciltleriyle doğrulanıp düzeltilmesi — üç ayrı commit.

## 1. Yapılanlar (adım adım)

### Adım 1 — Envanter doğrulama
- TÜİK *Milletvekili Genel Seçimleri 1923–2011* Ek-1 (PDF s. 277, basılı s. 259) ile genel
  seçim tarihleri doğrulandı: 14 Ekim 1973 (13. Dönem), 5 Haziran 1977 (15. Dönem — 14. Dönem
  satırı tablo hizalama sorunuyla boş görünüyor, dönem 2'de de karşılaşılan bir durum, sorun
  teşkil etmedi çünkü yalnızca tarihler kullanıldı).
- Aday liste (1973, 1977 genel; 1973, 1977 yerel; TBMM CB — 1973 ve 1980 sonuçsuz süreç dahil;
  ara seçimler; hükümetler; 12 Eylül kabında askerî dönem hükümeti + 1982 anayasa referandumu)
  büyük ölçüde kaynakla doğrulandı; ayrıntılar aşağıda adım adım.

### Adım 2 — Genel seçim sayıları
- **[B] TÜİK, Tablo 1 (PDF s. 22, basılı s. 4, `pdftotext -table`)** ve **Tablo 23 "...TÜRKİYE"
  (PDF s. 43, basılı s. 25, `pdftotext -table`)** — bu sayfa doğrudan ülke geneli toplamı
  veriyor (il tablosu değil), `topla.js` gerekmedi.
  - 1973: kayıtlı 16.798.164, kullanılan 11.223.843, katılım %66,8, geçerli 10.723.658 (parti
    oyları toplamı **tam eşit**), meclis 450, baraj yok.
  - 1977: kayıtlı 21.207.303, kullanılan 15.358.210, katılım %72,4, geçerli 14.827.172 (parti
    oyları toplamı **tam eşit**), meclis 450, baraj yok.
- İkinci kaynak: **TBMM seçim sorgusu** (`secim_sorgu.secimdeki_partiler?p_secim_yili=1973/1977`)
  — bütün parti oy sayıları TÜİK ile **birebir** eşleşti. Uyuşmazlık: yok.
- Sandalye toplamları her iki yılda da meclise (450) tam eşit.

### Adım 3 — Diğer kayıtlar
- **CB (TBMM) 1973:** Fahri Korutürk, 13 Mart – 6 Nisan 1973 arası 15 turluk maraton seçim,
  6 Nisan 1973'te 365 oyla seçildi. Birincil TBMM tutanağına bu turda doğrudan erişilemedi;
  AA (resmî haber ajansı) ve dergipark akademik makalesi (Yıldız ve Edi, 2021 — TBMM Zabıt
  Ceridesi'ni doğrudan kaynak gösteriyor) birebir eşleşti.
- **CB (TBMM) 1980:** sonuçsuz süreç, 25 Mart 1980'de başladı, 100'den fazla turda sonuç
  alınamadı (AA "115 tur" derken akademik kaynak yalnızca "100'den fazlası" diyor — tam sayı
  uyuşmadığı için `turSayisi:null`), 12 Eylül 1980 darbesiyle TBMM kapatılınca kendiliğinden
  sona erdi.
- **Hükümetler 35-44:** İlk turda TBMM'nin *Koalisyon Hükümetleri, Koalisyon Protokolleri...*
  kitabı 4 hükümetin (36 Talu, 37 I.Ecevit, 39 IV.Demirel/1.MC, 41 V.Demirel/2.MC) tarihini
  [B] doğrudan verdi; diğer 6'sı (35 Melen, 38 Irmak, 40 II.Ecevit, 42 III.Ecevit, 43 VI.Demirel,
  44 Ulusu) ikincil/akademik kaynaklarla girildi. **Bu, düzeltme turunda TBMM'nin Cilt 5/6/7'siyle
  (birincil [B]) baştan sona yeniden doğrulandı — bkz. aşağıdaki "5. Hükümet tarihlerinin TBMM
  ciltleriyle doğrulanması" bölümü.** 35-43 için hiçbir fark çıkmadı; yalnızca 44. (Ulusu)
  hükümetin başlangıcı "21.09.1980"den TBMM cildindeki resmî "20.09.1980" tarihine düzeltildi.
  12 Eylül kabı: 44. Ulusu Hükümeti (20.09.1980-13.12.1983), MGK döneminin hükümeti; `tip:"mbk"`
  kullanıldı (veri modelinde ayrı bir "mgk" kodu yok, bu fark `not`ta belirtildi — bkz. Endişeler).
  Ayrıntılı kaynaklar: `araclar/kaynak-defteri.md` "Görev 9 — Dönem 3" bölümü.

### Adım 4 — `veri/sandik.js`'e yazma (grup 1)
- `secimler` dizisine tarih sırasıyla eklendi: 1973-04-cb-tbmm, 1973-10-genel, 1977-06-genel,
  1980-03-cb-tbmm.
- `hukumetler` dizisine `baslangic` sırasıyla eklendi: hükümet no. 35-44.
- Her kayıt üstünde `// kaynak: araclar/kaynak-defteri.md#<kimlik>` yorumu var.

### Adım 5 — Denetle (grup 1)
```
node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
```
Sonuç: **PASS** (54/54 test), `dogrula.js` **hata yok**. Tam çıktı:
```
uyarı: 1950-09-yerel: yüzdelerin toplamı 95.1
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1954-05-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Hürriyet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1965-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1973-10-genel)
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
uyarı: — sayısı: genel bant 3: 0
uyarı: — sayısı: cb-tbmm bant 3: 0
uyarı: hükümetler arasında boşluk: 23 → 24
uyarı: hükümetler arasında boşluk: 43 → 44
hata yok
```
Yeni uyarı: `soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1973-10-genel)`
(1 sandalye) — bilinen liste zaten TBP'yi içeriyordu (1969'dan), yeni bir dönem eklendi.
Yeni "hükümetler arasında boşluk: 43 → 44" uyarısı beklenen (12-20 Eylül 1980 arası MGK
doğrudan yönetimi, dönem 1'deki 23→24 örüntüsüyle aynı; bu turda "21 Eylül" olarak girilmiş,
düzeltme turunda "20 Eylül"e çekildi — bkz. bölüm 5).

**Tarayıcı denetimi:** `http://localhost:8123/sandik.html`, 1400×900.
- Dönem 3 bandı ("1972 – 1980 · Koalisyonlar ve Milliyetçi Cephe hükümetleri") doğru
  kronolojik konumda; içindeki kayıtlar tarih sırasında: 35.Hükümet Melen → 6 Nis 1973 CB·TBMM
  Korutürk → 36.Hükümet Talu → 14 Eki 1973 GENEL → 37-39.Hükümet → 5 Haz 1977 GENEL →
  40-43.Hükümet → 25 Mar 1980 CB·TBMM "sonuçsuz" → **kırmızı kesinti bandı** → 44.Hükümet Ulusu.
  Kesinti bandı tam beklenen yerde (43.Hükümet'in bitişiyle 44.Hükümet'in başlangıcı arasında).
- `#1973-10-genel` kartı tıklanarak panel açıldı; panel içeriği (`document.body.innerText`
  ile okundu) kaynak defteriyle **birebir eşleşti**: 450 sandalye, katılım %66,8, CHP
  %33,3/3.570.583/185, AP %29,8/3.197.897/149, MSP %11,8/1.265.771/48, DP %11,9/1.275.502/45,
  CGP %5,3/564.343/13, MHP %3,4/362.208/3, Türkiye Birlik Partisi %1,1/121.759/1 (meclise
  girenler); Millet Partisi %0,6/62.377 (giremeyenler, 0 sandalye); Bağımsız %2,8/303.218/6;
  "BU SEÇİMDEN SONRA KURULAN HÜKÜMETLER" bölümü 37-39'u doğru listeliyor.
- Konsol hatası yok (`read_console_messages` boş döndü).

## 2. Değişen/oluşan dosyalar
- `C:/Users/Lizer/Desktop/projects/siyasi parti/veri/sandik.js`
- `C:/Users/Lizer/Desktop/projects/siyasi parti/araclar/kaynak-defteri.md`
- Bu rapor dosyası.

## 3. İlk commit

```
4ce8569  Sandık verisi: dönem 3 (1972–1980) — genel seçimler, CB (TBMM), hükümetler
2 files changed, 223 insertions(+), 2 deletions(-)
```
Yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değişti.

## 4. Grup 2 — yerel/ara seçimler, 12 Eylül kabı, 1982 referandumu

### Adım 3 (devam) — yerel seçimler
- **1973-12-yerel (9 Aralık 1973)** ve **1977-12-yerel (11 Aralık 1977):** her ikisi de **[B] YSK**
  "Belediye Meclis Üyeliği Seçim Sonuçları" ülke geneli tablolarından (`ysk.gov.tr/doc/dosyalar/
  docs/Mahalli/<yıl>/KesinSecimSonuclari/<yıl>_Belediye_Meclis_Uyeligi_Secimleri_Sonucu.pdf`,
  `pdftotext -table`) alındı. Bu URL deseni (`docs/Mahalli/<yıl>/KesinSecimSonuclari/...`) YSK'nın
  1973/1977 mahalli seçim arşiv sayfalarına yapılan WebSearch aramasıyla bulundu; onlarca dosya
  adı varyasyonu denendi (Türkçe karakterli/karaktersiz, "Meclis"/"Meclisi" farkı) — çalışan
  adlar: `..._Belediye_Meclis_Uyeligi_Secimleri_Sonucu.pdf` (ikisi de), `..._Il_Genel_Meclisi_
  Uyeligi_Secimleri_Sonucu.pdf` (kullanılmadı, farklı ölçü), `1977_Belediye_Baskanligi_Secimleri_
  Sonucu.pdf` (yalnızca ülke geneli, şehir kırılımı yok, kullanılmadı). 1973'ün "Belediye
  Başkanlığı" (büyükşehir) dosyasına hiçbir adla ulaşılamadı.
  - 1973: kayıtlı 8.607.082, kullanılan 4.706.719, geçerli 3.914.801; parti oyları toplamı
    geçerli oya ve kazanılan üyelik toplamı (24.873) resmî toplama **tam eşit**.
  - 1977: kayıtlı 12.067.618, kullanılan 6.197.718, geçerli 5.680.318; parti oyları toplamı ve
    kazanılan üyelik toplamı (27.031) resmî toplama **tam eşit**.
  - **`buyuksehir` alanı ikisinde de yazılmadı:** İstanbul/Ankara/İzmir'in şehir bazlı resmî
    (YSK/Resmî Gazete) sonucu bu turda bulunamadı; yalnızca Vikipedi kaynaklı isimler (Ahmet
    İsvan, Vedat Dalokay, Aytekin Kotil, Ali Dinçer, İhsan Alyanak gibi) WebSearch özetlerinde
    çıktı, kullanıcı kararı gereği (Vikipedi hiçbir zaman kaynak sayılmaz) bunlar siteye hiç
    yazılmadı. `not` alanında yalnızca "CHP çoğu büyükşehirde kazandı" genel bilgisi var (birden
    fazla bağımsız kaynakta tutarlı).

### Adım 3 (devam) — ara seçimler: envanter sonucu — eklenmedi
- 12 Ekim 1975 (6 il: Amasya, Bursa, Eskişehir, Niğde, Urfa, Zonguldak, 6 sandalye) ve 14 Ekim
  1979 (5 il: Edirne, Konya, Aydın, Manisa, Muğla, 5 sandalye — tümünü AP kazandı, bu sonuç III.
  Ecevit Hükümeti'nin düşmesine yol açtı) ara seçimlerinin **varlığı ve tarihi** doğrulandı ama
  il-parti-sandalye kırılımı iki kaynakla (mümkünse resmî) doğrulanamadı — YSK'nın Ara Seçim
  Arşivi JS kabuğu döndürdü, TESAV'ın ilgili PDF'i yine 404 verdi (dönem 1-2'den beri süren
  sorun). Kullanıcı kararı gereği eklenmedi; ayrıntı `araclar/kaynak-defteri.md`'de.

### Adım 3 (devam) — 1982 referandumu (12 Eylül kabı)
- **[B] YSK, "7 Kasım 1982 Anayasa Değişikliği Halk Oylaması Sonucu"** — 67 ilin tam tablosu
  (`pdftotext -table`), Türkiye toplamı `araclar/topla.js` ile hesaplandı: kayıtlı 20.690.914,
  kullanılan 18.885.488, geçerli 18.841.990, evet 17.215.559, hayır 1.626.431 (evet+hayır=geçerli,
  **tam eşit**). Katılım %91,27, kabul %91,37.
- İkinci kaynak: Murat SOYSAL, "Plebisit mi, Referandum mu?" (*Journal of Modern Turkish History
  Studies*) — "%91,27 katılım... %91,37 kabul" ifadesiyle **birebir** eşleşti; aynı makale,
  referandumun cumhurbaşkanlığı seçimiyle birleştirildiğini ve Kenan Evren'in geçici madde
  gereği cumhurbaşkanı seçildiğini doğruladı — bu bilgi `not` alanına tek cümleyle yazıldı (brief
  Adım 3'ün istediği gibi).
- `tutumlar` yazılmadı: bütün partiler zaten 16 Ekim 1981'de (1533 sayılı kanun) kapatılmıştı.

### Adım 4 (grup 2) — `veri/sandik.js`'e yazma
- `secimler`e eklendi: 1973-12-yerel, 1977-12-yerel, 1982-11-referandum (12 Eylül kabında,
  hükümet 44'ten sonra).

### Adım 5 (grup 2) — Denetle
```
node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
```
Sonuç: **PASS** (54/54), `dogrula.js` **hata yok**. Yeni uyarılar: `— sayısı: yerel bant 3: 0`,
`— sayısı: referandum kap 3: 0` (ikisi de "eksik yok" anlamında, beklenen).

**Tarayıcı denetimi:** 1400×900. `#1973-12-yerel`/`#1982-11-referandum` civarı
`document.body.innerText` ile okundu: "9 Ara 1973 YEREL CHP %41,5 AP %35,3 DP %9,0", "11 Ara
1977 YEREL CHP %46,9 AP %37,8 MSP %5,6", 1982 referandumu kartı 44. Hükümet'ten sonra, kırmızı
kesinti bandının **altında** doğru yerde. Panel açılıp (`#1982-11-referandum` kartı tıklanarak)
içerik kontrol edildi: "1982 Referandumu ... katılım %91,3 · kabul ... Evet %91,4 · 17.215.559
oy ... Hayır %8,6 · 1.626.431 oy ... NOT: Anayasanın geçici 1. maddesi gereği..." — kaynak
defteriyle birebir eşleşti. Konsol hatası yok.

## 5. Hükümet tarihlerinin TBMM ciltleriyle doğrulanması (düzeltme turu)

Controller incelemesi, 35-44 arası hükümetlerin bir kısmının (35 Melen, 38 Irmak, 40, 42, 43, 44)
yalnızca ikincil/akademik kaynaklarla doğrulanmış olmasını **kabul edilemez** buldu (kural:
hükümet başlangıç ölçütü TBMM cildi, ikincil kaynak birincil sayılmaz). Bu turda:

- TBMM'nin *Hükümetler, Programları ve Genel Kurul Görüşmeleri* serisinin **Cilt 5** (26 Mart
  1971 – 17 Kasım 1974 — bitstream adresi Görev 9 Dönem 2'nin kaynak defteri kaydında zaten
  vardı), **Cilt 6** (17 Kasım 1974 – 12 Kasım 1979) ve **Cilt 7** (12 Kasım 1979 – 9 Kasım
  1989) bulunup indirildi, `pdftotext -layout` ile tam metne çevrildi (üçü de gerçek metin
  katmanlı, taranmış görüntü değil — ilk turda denenen "Koalisyon Hükümetleri" derlemesinin
  aksine).
- Her cildin İçindekiler bölümünden **35-44 arası bütün hükümetlerin** resmî başlangıç/bitiş
  tarihi birebir okundu. **35-43 için önceki turdaki (ikincil kaynaklı) tarihlerin tamamı
  birebir doğrulandı** — hiçbir fark çıkmadı.
- **44. (Ulusu) hükümetin başlangıcı düzeltildi:** ilk turda "21 Eylül 1980" yazılmıştı
  (ikincil kaynaklardan); Cilt 7'nin İçindekiler'i açıkça **"20.09.1980"** veriyor. TBMM
  cildi birincil kaynak olduğundan `veri/sandik.js`'teki `baslangic` **"1980-09-20"**ye
  düzeltildi (43→44 arası boşluk artık 8 gün, önceden 9 gündü).
- Parti bileşimleri (partiler:[...]) bu turda cilt 5/6/7'nin "Koalisyon Protokolü"/"Bakanlar
  Kurulu" bölümlerinden satır satır yeniden doğrulanmadı (zaman kısıtı) — ilk turdaki ikincil
  kaynaklı bileşimler korundu, kaynak defterinde bu açıkça belirtiliyor.

**Denetle:**
```
node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
```
Sonuç: **PASS** (54/54), `dogrula.js` **hata yok** (tam çıktı yukarıdaki grup 2 çıktısıyla aynı,
yalnızca "hükümetler arasında boşluk: 43 → 44" uyarısı kalıyor — beklenen).

**Tarayıcı denetimi:** sayfa `20 Eyl 1980` metnini içeriyor, `21 Eyl 1980` içermiyor (JS ile
doğrulandı). Konsol hatası yok.

## 6. Endişeler

- **44. Ulusu Hükümeti'nin `tip` alanı `"mbk"`** — veri modelinin (spesifikasyon §5.8) askerî
  hükümet için tek kodu bu; ama 1980-83 döneminde yönetim organı Millî Birlik Komitesi değil
  Millî Güvenlik Konseyi'ydi (MGK). Arayüz bu kodu "Millî Birlik Komitesi" metnine çeviriyor
  (bkz. tarayıcı denetimi çıktısı: "44. Hükümet · Bülend Ulusu · Millî Birlik Komitesi..."),
  bu **kozmetik olarak yanlış** ama kod dosyalarına dokunma yetkim olmadığından (`ortak.js`/
  `sandik-mantik.js` bu görevin kapsamında değil) düzeltemedim. `not` alanında bu fark
  belirtildi. Kullanıcıya/controller'a bildiriliyor — Görev 12 ya da ilgili bir kod görevinde
  ya taksonomiye "mgk" değeri eklenmeli ya da etiket metni genelleştirilmeli.
- **(Çözüldü — düzeltme turunda)** 35-44 arası hükümetlerin tarihleri artık TBMM'nin kendi Cilt
  5/6/7'siyle (birincil [B]) doğrulandı; yalnızca 44'ün başlangıcında 1 günlük bir düzeltme
  gerekti (bkz. yukarıdaki "5. Hükümet tarihlerinin TBMM ciltleriyle doğrulanması"). Parti
  bileşimleri (`partiler:[...]`) hâlâ ikincil/akademik kaynaklara dayanıyor — cilt 5/6/7'nin
  "Koalisyon Protokolü"/"Bakanlar Kurulu" bölümleri satır satır okunmadı (zaman kısıtı);
  ileride bir düzeltme turunda bu da birincil kaynakla teyit edilebilir.
- 1982 referandumunun `tutumlar` alanı boş bırakıldı çünkü bütün partiler zaten kapatılmıştı;
  bu, spesifikasyonun "yalnızca soyağacındaki partiler, yalnızca doğrulanmış tutumlar" kuralına
  uygun ama dikkat çekici bir durum (referandum kaydı ilk kez hiç `tutumlar` içermiyor).
- 1973/1977 yerel seçimlerinin `buyuksehir` alanı hiç yazılmadı (İstanbul/Ankara/İzmir'in resmî
  sonucu bulunamadı) — ülke geneli `sonuc` verisi tam ve iki kaynaklı olsa da, kartta büyükşehir
  satırları görünmeyecek.
- Ara seçimler (1975, 1979) hiç eklenmedi; varlığı/tarihi/il listesi biliniyor ama il-parti-
  sandalye kırılımı iki kaynakla (mümkünse resmî YSK) doğrulanamadı. Görev 12'ye not düşüldü.

## 7. Commit'ler

```
4ce8569  Sandık verisi: dönem 3 (1972–1980) — genel seçimler, CB (TBMM), hükümetler
2a7de6b  Sandık verisi: dönem 3 (1972–1980) — yerel/ara seçimler, 12 Eylül kabı ve 1982 referandumu
06bc008  Düzeltme: dönem 3 hükümet tarihleri TBMM ciltleriyle
```
Üçü de yalnızca `veri/sandik.js` ve `araclar/kaynak-defteri.md` değiştirdi.

## 8. Brief'ten sapmalar ve nedenleri

- Ara seçimler (1975, 1979) brief'in aday listesinde vardı ama eklenmedi — iki kaynakla tam
  doğrulanamadı (yukarıda ayrıntılı gerekçe).
- 1973/1977 yerel seçimlerinin `buyuksehir` alanı hiç yazılmadı — resmî kaynak bulunamadı (dönem
  2'de belirlenen kuralla aynı).
- 1980 CB-TBMM kaydının `turSayisi` alanı `null` — kaynaklar arasında kesin sayı uyuşmuyor.
- Hükümetlerin `partiler` alanı TBMM ciltlerinin "Koalisyon Protokolü" bölümleriyle satır satır
  yeniden doğrulanmadı, ikincil kaynaklara dayanıyor (yalnızca tarihler birincil kaynaklı).

## 9. Kullanıcıya sunulacaklar

**Eklenen kayıtlar (tür başına sayı, dönem 3 toplamı):**
- Genel seçim: 2 (1973, 1977)
- CB (TBMM): 2 (1973 Fahri Korutürk — 15 tur; 1980 sonuçsuz süreç)
- Yerel seçim: 2 (1973, 1977 — ülke geneli belediye meclisi oylarıyla; büyükşehir sonucu yok)
- Referandum: 1 (1982 Anayasası, %91,37 kabul, 12 Eylül kabında)
- Ara seçim: 0 (1975 ve 1979 ara seçimleri varlığı doğrulandı ama il-parti kırılımı iki kaynakla
  doğrulanamadığı için eklenmedi)
- Hükümet: 10 (no. 35-44; 44. Ulusu Hükümeti 12 Eylül kabında)

**Envanter farkları:** Aday listedeki her iki ara seçim (1975, 1979) kaynakta varlığı doğrulandı
ama veri modelinin istediği ayrıntı (il-parti-sandalye) iki kaynakla bulunamadı, eklenmedi.

**`—` kalan sayılar ve nedenleri:**
- 1980 CB-TBMM sürecinin `turSayisi`: kaynaklar arasında (AA "115", akademik kaynak "100'den
  fazla") kesin sayı uyuşmuyor.
- 1973/1977 yerel seçimlerinin `buyuksehir` alanı: hiç yazılmadı (resmî şehir bazlı kaynak
  bulunamadı, alan tamamen boş — "—" değil, alanın kendisi yok).

**Soyağacında olmayan ama sandalye kazanan partiler (Görev 10 listesi — güncel, dönem 0-3
toplamı):** Hürriyet Partisi (1957, 4), Cumhuriyetçi Millet Partisi (1954: 5, 1957: 4), Millet
Partisi (1965: 31, 1969: 6, 1973: 0 sandalye — 1973'te sandalye kazanmadı, listede yeni bir satır
gerekmiyor), Türkiye Birlik Partisi (1969: 8, 1973: 1 sandalye — **yeni**).

**`node araclar/dogrula.js` çıktısı (son hali, düzeltme turu sonrası):**
```
uyarı: 1950-09-yerel: yüzdelerin toplamı 95.1
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1954-05-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Hürriyet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1965-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1973-10-genel)
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
uyarı: — sayısı: cb-tbmm bant 3: 0
uyarı: — sayısı: genel bant 3: 0
uyarı: — sayısı: yerel bant 3: 0
uyarı: — sayısı: referandum kap 3: 0
uyarı: hükümetler arasında boşluk: 23 → 24
uyarı: hükümetler arasında boşluk: 43 → 44
hata yok
```

**Özel dikkat gerektiren nokta — 44. Ulusu Hükümeti'nin `tip:"mbk"` etiketi:** arayüz bu kodu
"Millî Birlik Komitesi" metnine çeviriyor ama 1980-83 döneminde yönetim organı Millî Güvenlik
Konseyi'ydi (MGK). Veri modelinde (spesifikasyon §5.8) askerî hükümet için tek kod `"mbk"` olduğu
için kod dosyalarına dokunmadan bu düzeltilemedi; `not` alanında fark belirtildi. Bu görevin
kapsamı dışında bir kod/taksonomi düzeltmesi gerektiriyor (Görev 12 ya da ilgili bir kod görevi).

**İlk genel seçim verisinin girildiği dönem denetimi:** Görev 1/dönem 0'da zaten yapılmıştı, bu
görevde tekrar gerekmiyor.

## Düzeltme turu 1 (2026-09-22) — controller incelemesi sonrası (SPEC ❌ → düzeltildi)

İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d3-verdict.md`. Bulgular:
**C1 (Critical)** — hükümet 35-44'ün `partiler` alanı resmî [B] kaynaksız (yalnızca ikincil/
akademik kaynaklarla girilmişti, kaynak defteri bunu "zaman kısıtı" ile açıkça itiraf ediyordu).
**I2 (Important)** — `bitisNedeni` alanı da aynı kök nedenle yalnızca ikincil kaynaklı. **I1**
(`tip:"mbk"` etiketi) kapsam dışı bırakıldı, dokunulmadı (controller ayrı bir kod görevinde ele
alacak).

### Yapılanlar

Önceki turda zaten indirilmiş olan TBMM Cilt 5 (`cilt5.txt`), Cilt 6 (`cilt6.txt`), Cilt 7
(`cilt7.txt`) tam metinleri (`pdftotext -layout`, scratchpad'te duruyordu) kullanılarak, her
hükümetin **"Bakanlar Kurulu"** (bakan adı + seçim çevresi/il + **parti**) ve varsa **"Koalisyon
Protokolü"** bölümü `grep -n`/`sed -n` ile bulunup satır satır okundu — TOC'un verdiği basılı
sayfa numaraları (İçindekiler'den) kaynak defterine kaydedildi.

**Sonuç — 8 hükümette hiçbir değişiklik gerekmedi (ilk turdaki `partiler`/`bitisNedeni` [B]
kaynakla birebir doğrulandı):** 35 (Melen, partilerüstü — birden fazla parti kabinede ama
Koalisyon Protokolü yok, `partiler:[]` spec §5.8 kuralıyla da tutarlı), 36 (Talu, "Koalisyon
Protokolü (AP-CGP-Bağımsızlar)" başlığı birebir), 37 (I.Ecevit, "Koalisyon Protokolü (CHP-MSP)"
birebir + istifa Cilt 6'da doğrulandı), 38 (Irmak, Bakanlar Kurulu'nda hiç parti etiketi yok,
tam partilerüstü), 39 (1.MC, "Koalisyon Protokolü (AP-MSP-MHP-CGP)" birebir + "secim" bitişi
Cilt 6'daki bağlamla tutarlı), 40 (II.Ecevit, Cilt 6 Güvenoylaması bölümünde **"Oy sayısı 448,
kabul 217, ret 229, çekinser 2"** tutanağıyla `guvensizlik` tam doğrulandı), 41 (2.MC,
"Koalisyon Protokolü (AP-MSP-MHP)" birebir + "gensoru ile düşürülmüş Hükümet" ifadesiyle
`guvensizlik` doğrulandı), 43 (VI.Demirel, tutanaktaki "Hükümetin Adalet Partisi tarafından
kurulması... MSP/MHP... destekleyeceğini açıkladı" ifadesiyle yalnızca AP'nin kabinede olduğu
doğrulandı).

**Sonuç — 1 hükümette düzeltme yapıldı:**
- **42. III. Ecevit:** Bakanlar Kurulu listesi, ilk turdaki varsayımın aksine, CGP (Turhan
  Feyzioğlu — Başbakan Yardımcısı, Mehmet Salih Yıldız) ve Demokratik Parti'den (Mehmet Faruk
  Sükan — Başbakan Yardımcısı) bakanların **bizzat kabinede görev aldığını** gösteriyor (dışarıdan
  destek değil). `partiler` **`["chp23"]`**'ten **`["chp23","cgp","demp70"]`**'e düzeltildi.
  `bitisNedeni:"istifa"` zaten doğruydu, ama Cilt 7'nin VI. Demirel bölümü istifanın tam tarihini
  de verdi: **16 Ekim 1979** (14 Ekim'deki ara seçim sonrası); `not` alanı bu ayrıntıyla
  güncellendi.

**Değişmeyen ama artık [B] kaynaklı olan alanlar:** 44 (Ulusu — Bakanlar Kurulu'nda hiç parti
etiketi yok, `partiler:[]` doğrulandı; `bitisNedeni:null` korundu, açık bir tutanak ifadesi
bulunamadı).

Ayrıntılı sayfa numaraları ve alıntılar `araclar/kaynak-defteri.md`'nin "Hükümetler 35-44"
bölümündeki yeni "Parti bileşimleri ve bitiş nedenleri — düzeltme turu 1" alt başlığında.

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
uyarı: 1950-09-yerel: yüzdelerin toplamı 95.1
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1954-05-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Cumhuriyetçi Millet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Hürriyet Partisi (1957-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1965-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Millet Partisi (1969-10-genel)
uyarı: soyağacında olmayan ama sandalye kazanan: Türkiye Birlik Partisi (1973-10-genel)
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
uyarı: — sayısı: cb-tbmm bant 3: 0
uyarı: — sayısı: genel bant 3: 0
uyarı: — sayısı: yerel bant 3: 0
uyarı: — sayısı: referandum kap 3: 0
uyarı: hükümetler arasında boşluk: 23 → 24
uyarı: hükümetler arasında boşluk: 43 → 44
hata yok
```

**Tarayıcı denetimi:** `http://localhost:8123/sandik.html`, `document.body.innerText` ile
okundu: `"42. Hükümet · Bülent Ecevit · CHP–CGP–DP · 5 Oca 1978 – 12 Kas 1979\nbitti: istifa"` —
güncellenmiş parti bileşimi doğru görünüyor. Konsol hatası yok.

### Commit (düzeltme turu 1)

```
git commit: "Düzeltme: dönem 3 hükümet bileşimleri ve bitiş nedenleri TBMM ciltleriyle"
```
Yalnızca `veri/sandik.js` (hükümet 42'nin `partiler`/`not` alanı) ve `araclar/kaynak-defteri.md`
değişti.

## Kullanıcıya sunulacaklar (güncellendi — düzeltme turu 1)

**Değişen:** Hükümet 35-44'ün `partiler` ve `bitisNedeni` alanları artık TBMM Cilt 5/6/7'nin
"Bakanlar Kurulu"/"Koalisyon Protokolü" bölümleriyle [B] doğrulandı (cilt no + basılı sayfa
numarasıyla, `araclar/kaynak-defteri.md`'de). Tek veri değişikliği: **42. III. Ecevit
Hükümeti'nin `partiler` alanı `["chp23"]`'ten `["chp23","cgp","demp70"]`'e düzeltildi** — Cilt
6'nın Bakanlar Kurulu listesi, CGP'den Turhan Feyzioğlu ve Demokratik Parti'den Mehmet Faruk
Sükan'ın Başbakan Yardımcısı olarak bizzat kabinede görev aldığını gösteriyor (ilk turda
"dışarıdan destek, ikinci kaynakla doğrulanamadı" denilmişti — bu yanlıştı, düzeltildi).

**Hâlâ `null` kalan/kapsam dışı bırakılan alanlar (gerekçeli):**
- 35 Melen, 36 Talu, 38 Irmak, 44 Ulusu'nun `bitisNedeni`: Cilt 5/6/7'de bu hükümetlerin düşüş
  nedenine dair açık bir tutanak ifadesi bulunamadı, `null` bırakıldı (doğru davranış).
- `tip:"mbk"` (44. hükümet) — controller'ın talimatıyla bu turda dokunulmadı, ayrı bir kod
  görevinde ele alınacak.

**`node araclar/dogrula.js` çıktısı:** yukarıdaki "Testler ve denetim" bölümünde tam metin var;
sonuç `hata yok`.
