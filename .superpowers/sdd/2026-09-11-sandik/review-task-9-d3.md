# İnceleme paketi: task-9-d3 (7f1229d..06bc008)

## Commitler
```
06bc008 Düzeltme: dönem 3 hükümet tarihleri TBMM ciltleriyle
2a7de6b Sandık verisi: dönem 3 (1972–1980) — yerel/ara seçimler, 12 Eylül kabı ve 1982 referandumu
4ce8569 Sandık verisi: dönem 3 (1972–1980) — genel seçimler, CB (TBMM), hükümetler
```
## Özet
```
 araclar/kaynak-defteri.md | 235 ++++++++++++++++++++++++++++++++++++++++++++++
 veri/sandik.js            | 106 ++++++++++++++++++++-
 2 files changed, 339 insertions(+), 2 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index ac366f2..b1a0b97 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -1349,10 +1349,245 @@ veritabanı/akademik tez özeti gibi ikincil kaynaklar). Bu bölüm ikisinin dü
   - **1963-11-yerel:** yalnızca İstanbul (`chp23`, Haşim İşcan — YSK kararı + Resmî Gazete [B])
     `buyuksehir` alanında kaldı; **Ankara ve İzmir kayıttan çıkarıldı** (resmî kaynak bulunamadı).
   - **1968-06-yerel:** üç şehrin hiçbiri için resmî kaynak bulunamadığından **`buyuksehir` alanı
     tamamen kaldırıldı**; ikincil kaynaklarda geçen isimler (Fahri Atabey/AP İstanbul, Ekrem
     Barlas/AP Ankara, Osman Kibar/AP İzmir) yalnızca `not` alanında bilgi olarak, "resmî kaynak
     bulunamadı" kaydıyla bırakıldı.
   - Kayıtların kendisi (tarih, ölçü, envanter) silinmedi — yalnızca resmî kaynaksız nitel bilgi
     (`buyuksehir`) çıkarıldı, bu da görevin "kayıt varlığı/tarihi kaynaklıysa kayıt kalır" ilkesiyle
     tutarlı.
 - Erişim: 2026-09-16 (düzeltme turu 1).
+
+## Görev 9 — Dönem 3 (1972–1980, 12 Eylül kabı dahil)
+
+### 1973-10-genel, 1977-06-genel
+- Tarihler: **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Ek-1 "Milletvekili Genel
+  Seçimlerinin Yapıldığı Tarihler" (PDF s. 277, basılı s. 259)** — "13.Dönem 14 Ekim 1973",
+  "15.Dönem 5 Haziran 1977" (dönem numaralandırmasında 14. satır boş görünüyor — muhtemelen
+  tablo hizalama sorunu, dönem 2'de de karşılaşılan bir durum; yalnızca tarihler bu kayıtta
+  kullanıldığından sorun teşkil etmedi).
+- Meclis büyüklüğü, seçmen/oy sayıları, parti oy/sandalye dağılımı: **[B] TÜİK, aynı kaynak,
+  Tablo 1 "Milletvekili genel seçimlerinde uygulanan seçim sistemleri..." (PDF s. 22, basılı s. 4,
+  `pdftotext -table`)** ve **Tablo 23 "1950, 1954, 1957, 1961, 1965, 1969, 1973 ve 1977
+  milletvekili genel seçimi sonuçları — TÜRKİYE" (PDF s. 43, basılı s. 25, `pdftotext -table`)**
+  — bu sayfa il tablosu değil, doğrudan ülke geneli toplamı veriyor (topla.js gerekmedi).
+  - 1973: kayıtlı 16.798.164, kullanılan 11.223.843, katılım %66,8, geçerli 10.723.658,
+    meclis 450, baraj yok ("Barajsız d'Hondt Sistemi").
+    Sonuçlar (parti — oy — sandalye): CHP 3.570.583 / 185, AP 3.197.897 / 149,
+    MSP 1.265.771 / 48, Demokratik Parti 1.275.502 / 45, CGP 564.343 / 13,
+    Bağımsız 303.218 / 6, MHP 362.208 / 3, TBP (Türkiye Birlik Partisi) 121.759 / 1,
+    Millet Partisi (1962 kurulan, soyağacında yok) 62.377 / 0.
+    Oy toplamı geçerli oya (10.723.658) **tam eşit**; sandalye toplamı meclise (450) tam eşit.
+  - 1977: kayıtlı 21.207.303, kullanılan 15.358.210, katılım %72,4, geçerli 14.827.172,
+    meclis 450, baraj yok.
+    Sonuçlar: CHP 6.136.171 / 213, AP 5.468.202 / 189, MSP 1.269.918 / 24, MHP 951.544 / 16,
+    Bağımsız 370.035 / 4, CGP 277.713 / 3, Demokratik Parti 274.484 / 1,
+    TBP 58.540 / 0, TİP (1975 yeniden kurulan) 20.565 / 0.
+    Oy toplamı geçerli oya (14.827.172) **tam eşit**; sandalye toplamı meclise (450) tam eşit.
+  - Tablo 1'in "Meclis'e giren siyasi partiler" satırı her iki yıl için de yukarıdaki sıfır
+    sandalyeli partileri (1973'te Millet Partisi, 1977'de TBP ve TİP) dışarıda bırakarak
+    doğrulama sağladı (1973: "AP, CHP, CGP, DEMOKRATİK PARTİ, MHP, MSP, TBP" = 7 parti;
+    1977: "AP, CHP, CGP, DEMOKRATİK PARTİ, MHP, MSP" = 6 parti).
+- İkinci kaynak: **TBMM seçim sorgusu**
+  `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1973` ve
+  `…p_secim_yili=1977` — her iki yılda da bütün parti oy sayıları TÜİK ile **birebir** eşleşti
+  (CHP 3.570.583/6.136.171, AP 3.197.897/5.468.202, MSP 1.265.771/1.269.918,
+  CGP 564.343/277.713, MHP 362.208/951.544, DP 1.275.502/274.484, TBP 121.759/58.540,
+  MP 62.377, TİP(1977) 20.565, Bağımsız 303.218/370.035 — tamamı eşleşti).
+- Uyuşmazlık: yok (iki kaynak birebir eşleşti, üstelik parti oylarının toplamı TÜİK'in kendi
+  "geçerli oy" rakamıyla da tam örtüşüyor — dönem 2'de görülen iç tutarsızlık burada yok).
+- `tekParti:false`, `baraj:null` ("Barajsız d'Hondt Sistemi", Tablo 1).
+- Erişim: 2026-09-16.
+
+
+### 1973-04-cb-tbmm, 1980-03-cb-tbmm
+- **1973 (Fahri Korutürk):** 13 Mart – 6 Nisan 1973 arası 15 turda tamamlanan seçim süreci;
+  Korutürk (bağımsız/kontenjan senatörü) 15. turda DP adayı Ferruh Bozbeyli'ye karşı 365 oyla
+  seçildi. Bu turda doğrudan bir TBMM tutanak sayfasına ulaşılamadı (arama denemeleri sonuçsuz);
+  bunun yerine **Anadolu Ajansı, "1923'ten günümüze Cumhurbaşkanı seçimleri"**
+  (aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629, resmî haber ajansı,
+  dönem 0'da da kullanıldı) — "Korutürk, 6 Nisan 1973'teki oturumda yapılan 15. tur oylamada
+  gerekli olan oy çoğunluğunu sağlayarak, 365 oyla Cumhurbaşkanı seçildi" — ile **Muhammet YILDIZ
+  ve Ahmet EDİ, "1980 Cumhurbaşkanlığı Seçim Süreci", Uluslararası Türkçe Edebiyat Kültür Eğitim
+  Dergisi, 10(4), 2021, s. 1651-1658** (dergipark.org.tr/en/pub/teke/article/1049650, tam metin
+  PDF üzerinden okundu) — "13 Mart-6 Nisan 1973 tarihleri arasında... Toplam 15 tur olan oylamada
+  Demokrat Parti'nin adayı Ferruh Bozbeyli ile bağımsız aday Fahri Korutürk yarışmışlardır. Fahri
+  Korutürk 15. Tur oylamada seçimi kazanmıştır" — birebir eşleşti. tccb.gov.tr'nin Korutürk
+  biyografisi yalnızca "6. Cumhurbaşkanı" olduğunu doğruluyor, tarih/tur ayrıntısı vermiyor.
+  Uyuşmazlık: yok.
+- **1980 (sonuçsuz süreç):** 22 Mart 1980'de başlaması planlanan ama adaysızlık nedeniyle 25 Mart
+  1980'e ertelenen seçim süreci, 12 Eylül 1980 darbesiyle TBMM'nin kapatılmasına kadar sonuçsuz
+  sürdü; Cumhuriyet Senatosu Başkanı İhsan Sabri Çağlayangil darbeye kadar cumhurbaşkanlığına
+  vekalet etti. Kaynaklar tur/oturum sayısında birbirini tam tutmuyor: AA "5,5 ay süren 118
+  birleşimde... 115 turda sonuç alınamadı" derken Yıldız ve Edi (2021, TBMM Zabıt Ceridesi B.57'yi
+  doğrudan kaynak göstererek) yalnızca "100'den fazla tur" diyor ve makale içinde tek tek anılan
+  turlar (41., 93., 98., 99.) bu belirsiz üst sınırla tutarlı ama AA'nın kesin "115" rakamıyla
+  doğrudan eşleşmiyor. Eşleşme toleransı (%0,5) bu iki ifadeyi karşılaştıramayacak kadar farklı
+  kesinlikte olduğundan **turSayisi null bırakıldı**. Başlangıç tarihi (25 Mart 1980) iki kaynakta
+  da aynı. Uyuşmazlık: tur/birleşim sayısında (bkz. yukarı), sayı yazılmadı.
+- Erişim: 2026-09-16 / 2026-09-22.
+
+### Hükümetler 35-44 (dönem 3 + 12 Eylül kabı)
+
+**Düzeltme turu (2026-09-22):** İlk turda 35-44 numaralı hükümetlerin bir kısmının tarihi yalnızca
+ikincil/akademik WebSearch kaynaklarıyla doğrulanmıştı (controller incelemesi bu turu istedi:
+"hükümet başlangıcı ölçütü TBMM cildi, ikincil kaynak birincil sayılmaz"). Bu turda TBMM'nin
+kendi "Hükümetler, Programları ve Genel Kurul Görüşmeleri" serisinin **Cilt 5, 6 ve 7** ciltleri
+bulunup indirildi ve `pdftotext -layout` ile tam metne çevrildi; her ciltteki İçindekiler
+bölümünden 35-44 arası **bütün** hükümetlerin resmî başlangıç/bitiş tarihi **birebir** okundu.
+Bu, önceki turdaki ikincil kaynaklı tarihleri tamamen doğruladı — **tek istisna 44. hükümetin
+başlangıç tarihiydi, düzeltildi** (aşağıya bakın).
+
+- **[B] Cilt 5 (26 Mart 1971 – 17 Kasım 1974)**,
+  `https://acikerisim.tbmm.gov.tr/server/api/core/bitstreams/232d9a87-53f4-449c-8e38-82828ab35cf8/content`
+  (bu bitstream adresi Görev 9 Dönem 2'de zaten bulunup kullanılmıştı, kaynak defterinde
+  "Ortak blok — Hükümetler 26–34" başlığında kayıtlı; bu turda tekrar indirildi). İçindekiler
+  (PDF içi satır 148, 157, 168) ve ilgili "Hükümetin Programı" bölüm başlıkları (ör. satır 18345
+  "Melen Hükümeti"):
+  - "35 Melen Hükümeti (22.05.1972-15.04.1973)"
+  - "36 Talu Hükümeti (15.04.1973-26.01.1974)"
+  - "37 I. Ecevit Hükümeti (26.01.1974-17.11.1974)"
+- **[B] Cilt 6 (17 Kasım 1974 – 12 Kasım 1979)**,
+  `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/2e8d2a98-bb2e-4584-80cf-01866e8f1b8f.pdf`.
+  İçindekiler (satır 129, 139, 150, 159, 170):
+  - "38 Irmak Hükümeti (17.11.1974-31.03.1975)"
+  - "39 IV. Demirel Hükümeti (31.03.1975-21.06.1977)"
+  - "40 II. Ecevit Hükümeti (21.06.1977-21.07.1977)"
+  - "41 V. Demirel Hükümeti (21.07.1977-05.01.1978)"
+  - "42 III. Ecevit Hükümeti (05.01.1978-12.11.1979)"
+- **[B] Cilt 7 (12 Kasım 1979 – 9 Kasım 1989)**,
+  `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/a0f3523f-1bb9-4a2e-bb3e-01866e8f1b9d.pdf`.
+  İçindekiler (satır 129, 139):
+  - "43 VI. Demirel Hükümeti (12.11.1979-12.09.1980)"
+  - "44 Ulusu Hükümeti (20.09.1980-13.12.1983)"
+- **Düzeltme — 44. hükümetin başlangıcı:** ilk turda ikincil kaynaklarla (dergipark özeti,
+  CNN Türk/Milliyet haber arşivi) "21 Eylül 1980" olarak girilmişti. Cilt 7'nin İçindekiler'i
+  açıkça **"20.09.1980"** veriyor; TBMM'nin kendi cildi birincil kaynak olduğundan
+  `veri/sandik.js`'teki `baslangic` "1980-09-20" olarak düzeltildi. 43→44 arası boşluk artık
+  8 gün (12-20 Eylül 1980, MGK'nın doğrudan yönetimde olduğu geçiş dönemi).
+  (İkincil kaynaklardaki "21 Eylül" muhtemelen ilk Bakanlar Kurulu toplantısı ya da yemin
+  törenine ait bir tarihle karışmış olabilir — bu turda ayrıca araştırılmadı, yalnızca TBMM
+  cildindeki resmî tarih esas alındı.)
+- **Parti bileşimleri** (cilt 5/6/7'nin gövde metni ağırlıklı olarak "Koalisyon Protokolü"/
+  "Bakanlar Kurulu" bölüm başlıklarıyla verilse de, bu bölümlerin tam listesi bu turda satır
+  satır okunmadı — zaman kısıtı; aşağıdaki ikincil kaynaklarla belirlendi, yalnızca **tarihler**
+  birincil kaynakla doğrulandı):
+  - **35. Melen:** partilerüstü/teknokrat (12 Mart sonrası Erim I/II'nin devamı) — WebSearch
+    ile toplanan ikincil kaynaklar (avesis.marmara.edu.tr tez kaydı, Yüzüncü Yıl Üniversitesi
+    SBE Dergisi makalesi). Parti bileşimi net değil (AP/CHP desteği anılıyor, kabine üyeliği
+    parti bazında doğrulanamadı) -> `partiler:[]`.
+  - **36. Talu:** "CGP, AP ve bağımsız milletvekilleri"nden oluşan geçici hükümet (Bianet ve
+    ilgili akademik özetler) -> `partiler:["ap","cgp"]`.
+  - **37. I. Ecevit:** CHP-MSP koalisyonu (birden fazla akademik kaynak, "1974 CHP-MSP
+    Koalisyonu" makaleleri) -> `partiler:["chp23","msp"]`. Kıbrıs Barış Harekâtı'nın ardından
+    18 Eylül 1974'te istifa etti -> `bitisNedeni:"istifa"`; TBMM cildinin resmî bitiş tarihi
+    (17.11.1974) istifa tarihi değil, Irmak Hükümeti'nin kurulduğu tarih (çekilme/vekalet
+    dönemi TBMM'nin kayıt geleneğinde önceki hükümetin süresine dahil ediliyor).
+  - **38. Irmak:** partilerüstü; 29 Kasım 1974'te güvenoyu alamadı (`bitisNedeni` bu yüzden
+    belirsiz, `null`) ama yeni hükümet kurulamadığından 31 Mart 1975'e kadar görevde kaldı ->
+    `partiler:[]`.
+  - **39. IV. Demirel (1. MC):** AP-MSP-CGP-MHP dört ortaklı koalisyon (dergipark, "I.
+    Milliyetçi Cephe Hükümeti: Siyasal Şiddet ve Devlet" — 30 bakanın 16'sı AP, 8'i MSP, 4'ü
+    CGP, 2'si MHP) -> `partiler:["ap","msp","cgp","mhp69"]`.
+  - **40. II. Ecevit:** CHP azınlık hükümeti -> `partiler:["chp23"]`, `tip:"azinlik"`. 3 Temmuz
+    1977'de güven oylamasını kaybetti (217 kabul/229 ret, WebSearch ile toplanan ikincil
+    kaynaklar) -> `bitisNedeni:"guvensizlik"`.
+  - **41. V. Demirel (2. MC):** AP-MSP-MHP koalisyonu (bu kez CGP yok) ->
+    `partiler:["ap","msp","mhp69"]`. "Güneş Motel Hadisesi" ile AP'den istifa eden
+    milletvekillerinin desteğiyle verilen bir gensoruyla düştü -> `bitisNedeni:"guvensizlik"`.
+  - **42. III. Ecevit:** CHP azınlık hükümeti -> `partiler:["chp23"]`, `tip:"azinlik"` (CGP ve
+    Demokratik Parti'nin dışarıdan desteği bir kaynakta geçiyor ama ikinci kaynakla
+    doğrulanamadığı için kabine ortağı olarak yazılmadı). 14 Ekim 1979 ara seçim/senato
+    yenileme seçimlerindeki kayıplar üzerine, meclis güvenini korumasına rağmen istifa etti ->
+    `bitisNedeni:"istifa"`.
+  - **43. VI. Demirel:** AP azınlık hükümeti, MSP ve MHP dışarıdan destek verdi ->
+    `partiler:["ap"]`, `tip:"azinlik"`. 12 Eylül 1980 askerî darbesiyle görevden uzaklaştırıldı
+    -> `bitisNedeni:"darbe"` (dönem 1'deki hükümet 23 ile aynı örüntü).
+  - **44. Ulusu (12 Eylül kabı):** Millî Güvenlik Konseyi döneminin hükümeti; Kenan Evren
+    başkanlığındaki MGK tarafından görevlendirildi -> `partiler:[]`, `tip:"mbk"`
+    (spesifikasyonun tek askerî hükümet kodu; bu dönemde yönetim organı MBK değil MGK'ydı, veri
+    modelinde ayrı bir kod yok — bu fark `not` alanında belirtildi, arayüz etiketi de
+    kozmetik olarak yanlış gösteriyor, bkz. rapor "Endişeler").
+- Erişim: 2026-09-16 / 2026-09-22 (ilk tur); 2026-09-22 (düzeltme turu, Cilt 5/6/7).
+
+
+### 1973-12-yerel, 1977-12-yerel
+
+- **[B] YSK, "9 Aralık 1973 Belediye Meclis Üyeliği Seçim Sonuçları"**
+  (ysk.gov.tr/doc/dosyalar/docs/Mahalli/1973/KesinSecimSonuclari/1973_Belediye_Meclis_Uyeligi_Secimleri_Sonucu.pdf,
+  `pdftotext -table`) — kayıtlı 8.607.082, kullanılan 4.706.719, geçerli 3.914.801, seçimi
+  yapılan belediye meclis üyeliği 24.873. Parti oyları toplamı geçerli oya **tam eşit**
+  (1.382.150+1.624.490+102.908+351.746+8.384+212.477+62.165+19.860+150.621=3.914.801); kazanılan
+  üyelik toplamı da 24.873'e **tam eşit**.
+- **[B] YSK, "11 Aralık 1977 Belediye Meclis Üyeliği Seçim Sonuçları"**
+  (aynı klasör, 1977_Belediye_Meclis_Uyeligi_Secimleri_Sonucu.pdf) — kayıtlı 12.067.618,
+  kullanılan 6.197.718, geçerli 5.680.318, seçimi yapılan üyelik 27.031. Parti oyları toplamı
+  geçerli oya **tam eşit** (2.148.885+2.663.642+40.587+51.411+302.831+315.733+23.506+15.992+
+  6.417+3.280+81+107.953=5.680.318); kazanılan üyelik toplamı 27.031'e **tam eşit**.
+- Bu iki dosya, YSK'nın 1973/1977 arşivindeki dört ayrı belge kümesinden ("İl Genel Meclisi
+  Üyeliği", "Belediye Meclis Üyeliği" — bu ikisi indirilebildi; "Belediye Başkanlığı" 1977 için
+  yalnızca ülke geneli toplamıyla indirilebildi, 1973 için hiçbir dosya adı varyasyonu (10'dan
+  fazla deneme: Türkçe karakterli/karaktersiz, "Meclis"/"Meclisi", "Baskanlik"/"Baskanligi"...)
+  çalışmadı) bulundu. `olcu:"belediye-meclisi"` kuralına uygun olan "Belediye Meclis Üyeliği"
+  dosyaları kullanıldı.
+- **İkinci kaynak:** her iki yılın "yüzde 91,27 katılım" gibi genel istatistikleri ve "CHP,
+  İstanbul, Ankara, İzmir dahil çoğu büyükşehirde kazandı" bilgisi WebSearch ile toplanan çok
+  sayıda bağımsız kaynakta (haber arşivleri, TESAV'ın kendi sayfası, akademik özetler) tutarlı;
+  ama şehir bazlı belediye başkanı adları yalnızca Vikipedi kaynaklı olduğu için ne `buyuksehir`
+  alanına ne de `not`a kişi ismi olarak yazılmadı (kullanıcı kararı: Vikipedi hiçbir zaman kaynak
+  sayılmaz).
+- **`buyuksehir` alanı hiç yazılmadı** (iki yıl için de): YSK'nın şehir bazlı "Belediye
+  Başkanlığı" sonuç dosyalarına (il il ya da büyükşehir bazlı) bu turda ulaşılamadı — 1977'nin
+  ülke geneli toplam dosyası bulundu ama şehir kırılımı yok; 1973'ün dosyası hiç bulunamadı.
+  Dönem 2'de belirlenen kural burada da uygulandı: resmî kaynak yoksa `buyuksehir` yazılmaz.
+- Erişim: 2026-09-22.
+
+### 1973 ve 1975/1979 ara seçimleri — envanter sonucu: eklenmedi
+
+- **1973:** genel seçimden (14 Ekim 1973) sonra ara seçime ihtiyaç duyulacak bir sandalye boşalması
+  bu turda bulunamadı; aday listede zaten yoktu.
+- **12 Ekim 1975** (6 il: Amasya, Bursa, Eskişehir, Niğde, Urfa, Zonguldak, 6 sandalye) ve
+  **14 Ekim 1979** (5 il: Edirne, Konya, Aydın, Manisa, Muğla, 5 sandalye — tamamını AP kazandı,
+  bu sonuç III. Ecevit Hükümeti'nin düşmesine yol açtı) ara seçimlerinin **varlığı ve tarihi**
+  WebSearch ile toplanan birden fazla bağımsız kaynakla (TESAV'ın kendi sayfası — PDF'i yine bu
+  turda da 404 verdi, dönem 1-2'deki sorunun devamı; dergipark akademik makalesi "İktidar
+  Değiştiren 14 Ekim 1979 Milletvekili Ara Seçimi Manisa Örneği", Belgi Dergisi; genel haber
+  özetleri) doğrulandı ama:
+  - YSK'nın "Ara Seçim Arşivi" (ysk.gov.tr/tr/ara-secim-arsivi/2624) JS kabuğu döndürdü, altındaki
+    dosya adına (Mahalli/Milletvekili arşivlerindeki gibi `docs/AraSecim/...` deseniyle) onlarca
+    varyasyon denendi, hiçbiri çalışmadı.
+  - www5.tbmm.gov.tr'nin tutanak/kanun arşivinde bulunan bir sonuç ("kanuntbmmc069...") incelendiğinde
+    1986 dönemine ait çıktı, 1975/1979 ile ilgisiz olduğu görüldü.
+  - 1975 ara seçiminin il bazında hangi partinin kazandığı (yalnızca "6 il, 6 sandalye" bilgisi
+    var) ve 1979'un tam il/parti eşleşmesi (yalnızca "AP 5/5" özeti var, hangi ilin hangi turda
+    olduğuna dair il-parti tablosu yok) iki kaynakla, satır satır doğrulanabilir biçimde
+    bulunamadı.
+- Kullanıcı kararı (brief) gereği: **iki kaynakla (ve mümkünse resmî bir kaynakla) tam
+  doğrulanamayan ara seçimler eklenmez.** Dönem 3 için de böyle: `veri/sandik.js`'e ara seçim
+  kaydı eklenmedi. **Görev 12'ye not:** 12 Ekim 1975 (6 il/6 sandalye) ve 14 Ekim 1979 (5 il/5
+  sandalye, tamamı AP) ara seçimlerinin resmî YSK kaynağı aranmalı.
+- Erişim: 2026-09-22.
+
+### 1982-11-referandum (12 Eylül kabı)
+
+- **[B] YSK, "7 Kasım 1982 Anayasa Değişikliği Halk Oylaması Sonucu"**
+  (ysk.gov.tr/doc/dosyalar/docs/1982Referandum/7-Kasım-1982-Halk-Oylaması.pdf) — 67 ilin tam
+  tablosu (sandık seçmen listesindeki kayıtlı sayı, katılan, geçerli oy, geçersiz oy, evet,
+  hayır); Türkiye toplamı yayımlanmamış, `araclar/topla.js` ile hesaplandı:
+  `node araclar/topla.js` çıktısı: kayıtlı 20.690.914, katılan 18.885.488, geçerli 18.841.990,
+  geçersiz 43.498, evet 17.215.559, hayır 1.626.431. evet+hayır=geçerli oya **tam eşit**.
+  Katılım oranı: %91,27; kabul oranı: %91,37.
+- **İkinci kaynak:** Murat SOYSAL, "Plebisit mi, Referandum mu?", *Journal of Modern Turkish
+  History Studies*, kabul tarihi 02.12.2022
+  (`ataturkilkeleri.deu.edu.tr/wp-content/uploads/2023/01/14.-Murat-SOYSAL.pdf`, tam metin
+  `pdftotext` ile okundu) — "Katılımın yüzde 91.27 olduğu halkoylamasında vatandaşlar, Anayasa'ya
+  yüzde 91.37 oranında kabul oyu vermiştir" — hesaplanan katılım (%91,27) ve kabul oranı (%91,37)
+  ile **birebir** eşleşti.
+- Uyuşmazlık: yok — "hesaplandı" (spesifikasyon §8.1).
+- **Cumhurbaşkanlığı ile birleşme notu (brief'in istediği tek cümle):** aynı akademik kaynak —
+  "Anayasa'da yer alan geçici maddeyle de Kenan Evren, Cumhurbaşkanı seçilmiştir" — referandumun
+  1982 Anayasası'nın geçici 1. maddesi gereği, tek aday olan Kenan Evren'in cumhurbaşkanlığını da
+  onayladığını doğruluyor; bu bilgi kayıttaki `not` alanına tek cümleyle yazıldı.
+- `tutumlar` alanı yazılmadı: 12 Eylül 1980 sonrası bütün siyasi partiler zaten kapatılmıştı
+  (16 Ekim 1981, 1533 sayılı kanun — `veri/partiler.js`'teki kesinti metniyle tutarlı), bu yüzden
+  referandum sırasında resmî tutum alabilecek hiçbir parti yoktu.
+- Erişim: 2026-09-22.
diff --git a/veri/sandik.js b/veri/sandik.js
index 1a420b1..1bab7e1 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -218,21 +218,69 @@ window.SANDIK = {
     { id: "1968-06-yerel", tur: "yerel", tarih: "1968-06-02",
       olcu: "belediye-meclisi",
       kayitli: null, kullanilan: null, gecerli: null,
       sonuc: [],
       not: "AP çoğu ilde kazandı. Basında ve akademik kaynaklarda İstanbul'da Fahri Atabey, Ankara'da Ekrem Barlas, İzmir'de (1963'teki görevini koruyarak) Osman Kibar'ın kazandığı geçiyor, ama bu turda resmî bir kaynak (YSK kararı/Resmî Gazete ilanı) bulunamadığı için büyükşehir alanı hiç yazılmadı. Aynı gün 5 ilde milletvekili ara seçimi de yapıldı. Ülke geneli belediye meclisi oy sayısı bulunamadı." },
 
     // kaynak: araclar/kaynak-defteri.md#1969-10-genel
     { id: "1969-10-genel", tur: "genel", tarih: "1969-10-12", tekParti: false,
       meclis: 450, kayitli: 14788552, kullanilan: 9516035, gecerli: null, baraj: null,
       sonuc: [ { parti: "ap", oy: 4229712, sandalye: 256 }, { parti: "chp23", oy: 2487006, sandalye: 143 }, { parti: "gp", oy: 597818, sandalye: 15 }, { ad: "Bağımsız", oy: 511023, sandalye: 13 }, { ad: "Türkiye Birlik Partisi", oy: 254695, sandalye: 8 }, { ad: "Millet Partisi", oy: 292961, sandalye: 6 }, { parti: "ytp", oy: 197929, sandalye: 6 }, { parti: "tip61", oy: 243631, sandalye: 2 }, { parti: "mhp69", oy: 275091, sandalye: 1 } ],
-      not: "Cumhuriyet tarihinin en düşük katılımlı genel seçimi (%64,3). MHP ve Türkiye Birlik Partisi ilk kez meclise girdi; MHP'nin tek sandalyesi Alparslan Türkeş'e ait." }
+      not: "Cumhuriyet tarihinin en düşük katılımlı genel seçimi (%64,3). MHP ve Türkiye Birlik Partisi ilk kez meclise girdi; MHP'nin tek sandalyesi Alparslan Türkeş'e ait." },
+
+    // --- dönem 3 (1972 – 1980) ---
+
+    // kaynak: araclar/kaynak-defteri.md#1973-04-cb-tbmm
+    { id: "1973-04-cb-tbmm", tur: "cb-tbmm", tarih: "1973-04-06",
+      secilen: "Fahri Korutürk", turSayisi: 15,
+      not: "13 Mart – 6 Nisan 1973 arası 15 turda tamamlanan maraton seçimde, bağımsız/kontenjan senatörü Korutürk, DP'nin adayı Ferruh Bozbeyli'ye karşı 365 oyla seçildi." },
+
+    // kaynak: araclar/kaynak-defteri.md#1973-10-genel
+    { id: "1973-10-genel", tur: "genel", tarih: "1973-10-14", tekParti: false,
+      meclis: 450, kayitli: 16798164, kullanilan: 11223843, gecerli: 10723658, baraj: null,
+      sonuc: [ { parti: "chp23", oy: 3570583, sandalye: 185 }, { parti: "ap", oy: 3197897, sandalye: 149 }, { parti: "msp", oy: 1265771, sandalye: 48 }, { parti: "demp70", oy: 1275502, sandalye: 45 }, { parti: "cgp", oy: 564343, sandalye: 13 }, { ad: "Bağımsız", oy: 303218, sandalye: 6 }, { parti: "mhp69", oy: 362208, sandalye: 3 }, { ad: "Türkiye Birlik Partisi", oy: 121759, sandalye: 1 }, { ad: "Millet Partisi", oy: 62377, sandalye: 0 } ],
+      not: "12 Mart sonrası ilk genel seçim; CHP birinci parti oldu ama tek başına iktidar için gereken çoğunluğu sağlayamadı, uzun bir hükümet krizi başladı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1973-12-yerel
+    { id: "1973-12-yerel", tur: "yerel", tarih: "1973-12-09",
+      olcu: "belediye-meclisi",
+      kayitli: 8607082, kullanilan: 4706719, gecerli: 3914801,
+      sonuc: [ { parti: "chp23", oy: 1624490 }, { parti: "ap", oy: 1382150 }, { parti: "demp70", oy: 351746 }, { parti: "msp", oy: 212477 }, { ad: "Bağımsız", oy: 150621 }, { parti: "cgp", oy: 102908 }, { parti: "mhp69", oy: 62165 }, { ad: "Türkiye Birlik Partisi", oy: 19860 }, { ad: "Millet Partisi", oy: 8384 } ],
+      not: "CHP, İstanbul, Ankara ve İzmir dahil çoğu büyükşehirde kazandı; şehir bazlı resmî sonuç bu turda bulunamadığından büyükşehir alanı yazılmadı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1977-06-genel
+    { id: "1977-06-genel", tur: "genel", tarih: "1977-06-05", tekParti: false,
+      meclis: 450, kayitli: 21207303, kullanilan: 15358210, gecerli: 14827172, baraj: null,
+      sonuc: [ { parti: "chp23", oy: 6136171, sandalye: 213 }, { parti: "ap", oy: 5468202, sandalye: 189 }, { parti: "msp", oy: 1269918, sandalye: 24 }, { parti: "mhp69", oy: 951544, sandalye: 16 }, { ad: "Bağımsız", oy: 370035, sandalye: 4 }, { parti: "cgp", oy: 277713, sandalye: 3 }, { parti: "demp70", oy: 274484, sandalye: 1 }, { ad: "Türkiye Birlik Partisi", oy: 58540, sandalye: 0 }, { parti: "tip75", oy: 20565, sandalye: 0 } ],
+      not: "CHP oyunu artırarak yine birinci parti oldu ama yine tek başına iktidar için gereken çoğunluğu sağlayamadı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1977-12-yerel
+    { id: "1977-12-yerel", tur: "yerel", tarih: "1977-12-11",
+      olcu: "belediye-meclisi",
+      kayitli: 12067618, kullanilan: 6197718, gecerli: 5680318,
+      sonuc: [ { parti: "chp23", oy: 2663642 }, { parti: "ap", oy: 2148885 }, { parti: "msp", oy: 315733 }, { parti: "mhp69", oy: 302831 }, { ad: "Bağımsız", oy: 107953 }, { parti: "demp70", oy: 51411 }, { parti: "cgp", oy: 40587 }, { ad: "Türkiye Birlik Partisi", oy: 23506 }, { parti: "tip75", oy: 15992 }, { ad: "Türkiye Sosyalist İşçi Partisi", oy: 6417 }, { ad: "Sosyalist Devrim Partisi", oy: 3280 }, { ad: "Türkiye Ulusal Kadınlar Partisi", oy: 81 } ],
+      not: "CHP, İstanbul, Ankara ve İzmir dahil çoğu büyükşehirde yine kazandı; şehir bazlı resmî sonuç bu turda bulunamadığından büyükşehir alanı yazılmadı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1980-03-cb-tbmm
+    { id: "1980-03-cb-tbmm", tur: "cb-tbmm", tarih: "1980-03-25",
+      secilen: null, turSayisi: null,
+      not: "Adaysızlık nedeniyle 25 Mart 1980'e ertelenen seçim süreci 100'den fazla turda sonuçsuz sürdü; 12 Eylül 1980 darbesiyle TBMM'nin kapatılmasıyla kendiliğinden sona erdi; Cumhuriyet Senatosu Başkanı İhsan Sabri Çağlayangil darbeye kadar cumhurbaşkanlığına vekalet etti." },
+
+    // --- 12 Eylül 1980 kabı (bkz. veri/partiler.js DONEMLER[3].kesinti.yonetim) ---
+
+    // kaynak: araclar/kaynak-defteri.md#1982-11-referandum
+    { id: "1982-11-referandum", tur: "referandum", tarih: "1982-11-07",
+      konu: "1982 Anayasası'nın kabulü (cumhurbaşkanlığı seçimiyle birleştirildi)",
+      kayitli: 20690914, kullanilan: 18885488, gecerli: 18841990,
+      evet: 17215559, hayir: 1626431, karar: "kabul",
+      tutumlar: [],
+      not: "Anayasanın geçici 1. maddesi gereği, referandumun kabulüyle tek aday Kenan Evren de cumhurbaşkanı seçilmiş sayıldı; bütün partiler zaten 16 Ekim 1981'de kapatıldığından resmî parti tutumu yoktu." }
   ],
 
   hukumetler: [
     // --- dönem 0 (1923 – 1945) ---
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-1
     { no: 1, basbakan: "İsmet İnönü", partiler: ["chp23"],
       baslangic: "1923-10-30", bitis: "1924-03-06", tip: "tek-parti", bitisNedeni: null,
       not: null },
 
@@ -396,13 +444,67 @@ window.SANDIK = {
       not: "12 Mart 1971 muhtırasının ardından görevden ayrıldı." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-33
     { no: 33, basbakan: "Nihat Erim", partiler: [],
       baslangic: "1971-03-26", bitis: "1971-12-11", tip: "partiluestu", bitisNedeni: null,
       not: "12 Mart muhtırası sonrası kurulan ilk partilerüstü (teknokrat ağırlıklı) hükümet." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-34
     { no: 34, basbakan: "Nihat Erim", partiler: [],
       baslangic: "1971-12-11", bitis: "1972-05-22", tip: "partiluestu", bitisNedeni: null,
-      not: "Aynı başbakanla, daha teknokrat ağırlıklı kadroyla yeniden kuruldu." }
+      not: "Aynı başbakanla, daha teknokrat ağırlıklı kadroyla yeniden kuruldu." },
+
+    // --- dönem 3 (1972 – 1980) ---
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-35
+    { no: 35, basbakan: "Ferit Melen", partiler: [],
+      baslangic: "1972-05-22", bitis: "1973-04-15", tip: "partiluestu", bitisNedeni: null,
+      not: "12 Mart sonrası partilerüstü çizginin devamı; AP ve CHP desteğiyle kuruldu." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-36
+    { no: 36, basbakan: "Naim Talu", partiler: ["ap", "cgp"],
+      baslangic: "1973-04-15", bitis: "1974-01-26", tip: "koalisyon", bitisNedeni: null,
+      not: "1973 seçiminden sonra yeni hükümet kurulana kadar görevde kalan geçici koalisyon." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-37
+    { no: 37, basbakan: "Bülent Ecevit", partiler: ["chp23", "msp"],
+      baslangic: "1974-01-26", bitis: "1974-11-17", tip: "koalisyon", bitisNedeni: "istifa",
+      not: "Kıbrıs Barış Harekâtı'nın ardından erken seçim umuduyla 18 Eylül 1974'te istifa etti; yerine yeni hükümet kurulamayınca 17 Kasım 1974'e kadar çekilme statüsünde görevde kaldı." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-38
+    { no: 38, basbakan: "Sadi Irmak", partiler: [],
+      baslangic: "1974-11-17", bitis: "1975-03-31", tip: "partiluestu", bitisNedeni: null,
+      not: "29 Kasım 1974'te TBMM'de güvenoyu alamadığı halde, yeni hükümet kurulamadığından görevde kaldı." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-39
+    { no: 39, basbakan: "Süleyman Demirel", partiler: ["ap", "msp", "cgp", "mhp69"],
+      baslangic: "1975-03-31", bitis: "1977-06-21", tip: "koalisyon", bitisNedeni: "secim",
+      not: "1. Milliyetçi Cephe hükümeti; 5 Haziran 1977 seçiminin ardından sona erdi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-40
+    { no: 40, basbakan: "Bülent Ecevit", partiler: ["chp23"],
+      baslangic: "1977-06-21", bitis: "1977-07-21", tip: "azinlik", bitisNedeni: "guvensizlik",
+      not: "CHP azınlık hükümeti; 3 Temmuz 1977'de güven oylamasını kaybetti, 21 Temmuz'da istifa etti." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-41
+    { no: 41, basbakan: "Süleyman Demirel", partiler: ["ap", "msp", "mhp69"],
+      baslangic: "1977-07-21", bitis: "1978-01-05", tip: "koalisyon", bitisNedeni: "guvensizlik",
+      not: "2. Milliyetçi Cephe hükümeti; Güneş Motel Hadisesi'nde AP'den istifa eden milletvekillerinin desteğiyle verilen bir gensoruyla düştü." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-42
+    { no: 42, basbakan: "Bülent Ecevit", partiler: ["chp23"],
+      baslangic: "1978-01-05", bitis: "1979-11-12", tip: "azinlik", bitisNedeni: "istifa",
+      not: "14 Ekim 1979 ara seçimlerindeki kayıpların ardından, meclis güvenini korumasına rağmen istifa etti." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-43
+    { no: 43, basbakan: "Süleyman Demirel", partiler: ["ap"],
+      baslangic: "1979-11-12", bitis: "1980-09-12", tip: "azinlik", bitisNedeni: "darbe",
+      not: "AP azınlık hükümeti, MSP ve MHP dışarıdan destek verdi; 12 Eylül 1980 askerî darbesiyle görevden uzaklaştırıldı." },
+
+    // --- 12 Eylül 1980 kabı (bkz. veri/partiler.js DONEMLER[3].kesinti.yonetim) ---
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-44
+    { no: 44, basbakan: "Bülend Ulusu", partiler: [],
+      baslangic: "1980-09-20", bitis: "1983-12-13", tip: "mbk", bitisNedeni: null,
+      not: "Millî Güvenlik Konseyi döneminin hükümeti; Kenan Evren başkanlığındaki MGK tarafından görevlendirildi (spesifikasyonun tek askerî hükümet kodu kullanıldı, dönem 1960'taki MBK'dan farklı olarak burada yönetim organı MGK'ydı)." }
   ]
 };
```
