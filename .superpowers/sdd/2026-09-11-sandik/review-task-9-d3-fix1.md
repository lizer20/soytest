# İnceleme paketi: task-9-d3-fix1 (06bc008..4818d5f)

## Commitler
```
4818d5f Düzeltme: dönem 3 hükümet bileşimleri ve bitiş nedenleri TBMM ciltleriyle
```
## Özet
```
 araclar/kaynak-defteri.md | 165 ++++++++++++++++++++++++++++++++++------------
 veri/sandik.js            |   4 +-
 2 files changed, 126 insertions(+), 43 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index b1a0b97..016f517 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -1460,61 +1460,144 @@ başlangıç tarihiydi, düzeltildi** (aşağıya bakın).
   - "43 VI. Demirel Hükümeti (12.11.1979-12.09.1980)"
   - "44 Ulusu Hükümeti (20.09.1980-13.12.1983)"
 - **Düzeltme — 44. hükümetin başlangıcı:** ilk turda ikincil kaynaklarla (dergipark özeti,
   CNN Türk/Milliyet haber arşivi) "21 Eylül 1980" olarak girilmişti. Cilt 7'nin İçindekiler'i
   açıkça **"20.09.1980"** veriyor; TBMM'nin kendi cildi birincil kaynak olduğundan
   `veri/sandik.js`'teki `baslangic` "1980-09-20" olarak düzeltildi. 43→44 arası boşluk artık
   8 gün (12-20 Eylül 1980, MGK'nın doğrudan yönetimde olduğu geçiş dönemi).
   (İkincil kaynaklardaki "21 Eylül" muhtemelen ilk Bakanlar Kurulu toplantısı ya da yemin
   törenine ait bir tarihle karışmış olabilir — bu turda ayrıca araştırılmadı, yalnızca TBMM
   cildindeki resmî tarih esas alındı.)
-- **Parti bileşimleri** (cilt 5/6/7'nin gövde metni ağırlıklı olarak "Koalisyon Protokolü"/
-  "Bakanlar Kurulu" bölüm başlıklarıyla verilse de, bu bölümlerin tam listesi bu turda satır
-  satır okunmadı — zaman kısıtı; aşağıdaki ikincil kaynaklarla belirlendi, yalnızca **tarihler**
-  birincil kaynakla doğrulandı):
-  - **35. Melen:** partilerüstü/teknokrat (12 Mart sonrası Erim I/II'nin devamı) — WebSearch
-    ile toplanan ikincil kaynaklar (avesis.marmara.edu.tr tez kaydı, Yüzüncü Yıl Üniversitesi
-    SBE Dergisi makalesi). Parti bileşimi net değil (AP/CHP desteği anılıyor, kabine üyeliği
-    parti bazında doğrulanamadı) -> `partiler:[]`.
-  - **36. Talu:** "CGP, AP ve bağımsız milletvekilleri"nden oluşan geçici hükümet (Bianet ve
-    ilgili akademik özetler) -> `partiler:["ap","cgp"]`.
-  - **37. I. Ecevit:** CHP-MSP koalisyonu (birden fazla akademik kaynak, "1974 CHP-MSP
-    Koalisyonu" makaleleri) -> `partiler:["chp23","msp"]`. Kıbrıs Barış Harekâtı'nın ardından
-    18 Eylül 1974'te istifa etti -> `bitisNedeni:"istifa"`; TBMM cildinin resmî bitiş tarihi
-    (17.11.1974) istifa tarihi değil, Irmak Hükümeti'nin kurulduğu tarih (çekilme/vekalet
-    dönemi TBMM'nin kayıt geleneğinde önceki hükümetin süresine dahil ediliyor).
-  - **38. Irmak:** partilerüstü; 29 Kasım 1974'te güvenoyu alamadı (`bitisNedeni` bu yüzden
-    belirsiz, `null`) ama yeni hükümet kurulamadığından 31 Mart 1975'e kadar görevde kaldı ->
-    `partiler:[]`.
-  - **39. IV. Demirel (1. MC):** AP-MSP-CGP-MHP dört ortaklı koalisyon (dergipark, "I.
-    Milliyetçi Cephe Hükümeti: Siyasal Şiddet ve Devlet" — 30 bakanın 16'sı AP, 8'i MSP, 4'ü
-    CGP, 2'si MHP) -> `partiler:["ap","msp","cgp","mhp69"]`.
-  - **40. II. Ecevit:** CHP azınlık hükümeti -> `partiler:["chp23"]`, `tip:"azinlik"`. 3 Temmuz
-    1977'de güven oylamasını kaybetti (217 kabul/229 ret, WebSearch ile toplanan ikincil
-    kaynaklar) -> `bitisNedeni:"guvensizlik"`.
-  - **41. V. Demirel (2. MC):** AP-MSP-MHP koalisyonu (bu kez CGP yok) ->
-    `partiler:["ap","msp","mhp69"]`. "Güneş Motel Hadisesi" ile AP'den istifa eden
-    milletvekillerinin desteğiyle verilen bir gensoruyla düştü -> `bitisNedeni:"guvensizlik"`.
-  - **42. III. Ecevit:** CHP azınlık hükümeti -> `partiler:["chp23"]`, `tip:"azinlik"` (CGP ve
-    Demokratik Parti'nin dışarıdan desteği bir kaynakta geçiyor ama ikinci kaynakla
-    doğrulanamadığı için kabine ortağı olarak yazılmadı). 14 Ekim 1979 ara seçim/senato
-    yenileme seçimlerindeki kayıplar üzerine, meclis güvenini korumasına rağmen istifa etti ->
-    `bitisNedeni:"istifa"`.
-  - **43. VI. Demirel:** AP azınlık hükümeti, MSP ve MHP dışarıdan destek verdi ->
-    `partiler:["ap"]`, `tip:"azinlik"`. 12 Eylül 1980 askerî darbesiyle görevden uzaklaştırıldı
-    -> `bitisNedeni:"darbe"` (dönem 1'deki hükümet 23 ile aynı örüntü).
-  - **44. Ulusu (12 Eylül kabı):** Millî Güvenlik Konseyi döneminin hükümeti; Kenan Evren
-    başkanlığındaki MGK tarafından görevlendirildi -> `partiler:[]`, `tip:"mbk"`
-    (spesifikasyonun tek askerî hükümet kodu; bu dönemde yönetim organı MBK değil MGK'ydı, veri
-    modelinde ayrı bir kod yok — bu fark `not` alanında belirtildi, arayüz etiketi de
-    kozmetik olarak yanlış gösteriyor, bkz. rapor "Endişeler").
-- Erişim: 2026-09-16 / 2026-09-22 (ilk tur); 2026-09-22 (düzeltme turu, Cilt 5/6/7).
+- **Parti bileşimleri ve bitiş nedenleri — düzeltme turu 1 (2026-09-22, controller incelemesi
+  C1/I2 bulgularına yanıt):** İlk turda bu alanlar yalnızca ikincil/akademik kaynaklarla
+  girilmişti (controller haklı olarak reddetti). Bu turda **aynı Cilt 5/6/7 metinlerinin gövdesi**
+  — her hükümetin "Bakanlar Kurulu" (bakan adı + il/seçim çevresi + **parti**) ve varsa
+  "Koalisyon Protokolü" bölümü — `grep`/`sed` ile bulunup satır satır okundu. Sayfa numaraları
+  aşağıda cildin kendi İçindekiler'inden alınan **basılı sayfa numarasıdır** (`pdftotext`
+  çıktısındaki gerçek sayfa altbilgileriyle doğrulandı).
+
+  - **35. Ferit Melen (Cilt 5, s. 3629-3630, Bakanlar Kurulu):** Bakanlar Kurulu listesi
+    tek tek okundu — Başbakan Ferit MELEN (C.S. Van, **MGP**); bakanlar arasında Doğan KİTAPLI
+    (Samsun, **AP**), Ali Mesut EREZ (Kütahya, **AP**), Haydar ÖZALP (Niğde, **AP**), İlyas
+    KARAÖZ (**AP**), Rıfkı DANIŞMAN (**AP**), Erol Yılmaz AKÇAL (**AP**), Hayrettin Turgut TOKER
+    (**AP**) — 7 AP'li; İsmail Hakkı ARAR (İstanbul, **CHP**), Mukadder ÖZTEKİN (**CHP**), Kemal
+    DEMİR (**CHP**), Ali Rıza UZUNER (**CHP**), Mehmet Nuri KODAMANOĞLU (**CHP**) — 5 CHP'li;
+    Hasan Fehmi ALPASLAN (**MGP**) — 1 daha MGP'li; geri kalanı "TBMM dışından" ya da kontenjan
+    senatörü (parti etiketsiz, ör. Mehmet İZMEN, Mehmet Naim TALU). **Koalisyon Protokolü yok**
+    (yalnızca "Bakanlar Kurulu" bölümü var, "Talu Hükümeti"nden farklı olarak) — bu, hükümetin
+    resmî bir parti koalisyonu değil, birden fazla partiden ve bağımsız/teknokrat isimlerden
+    oluşan **partilerüstü** bir kabine olduğunu doğruluyor. Spesifikasyon §5.8'in kendi örneği
+    de "partiler:[...] partilerüstü/MBK hükümetlerinde boş dizi" diyor — `partiler:[]` bu
+    kuralla tutarlı ve artık [B] kaynaklı: birden fazla parti kabinede temsil edildi ama resmî
+    koalisyon protokolü yoktu. `bitisNedeni:null` korundu (Cilt 5/6'da Melen'in düşüş nedenine
+    dair açık bir ifade bulunamadı).
+
+  - **36. Naim Talu (Cilt 5, s. 3801-3804, Bakanlar Kurulu + Koalisyon Protokolü):**
+    "**Koalisyon Protokolü (AP-CGP-Bağımsızlar)**" başlığı **birebir** böyle yazıyor (s. 3803-3804).
+    Bakanlar Kurulu listesi de tutarlı: Nizamettin ERKMEN (Giresun, AP), İsmail Hakkı TEKİNEL
+    (İstanbul, AP), Sadık Tekin MÜFTÜOĞLU (Zonguldak, AP) vb. çoğunluk AP; Kemal SATIR (Adana,
+    CGP), İlhan ÖZTRAK (CGP), Fethi ÇELİKBAŞ (CGP), Vefa TANIR (Konya, CGP) vb. CGP; birkaç
+    bakan "Bağımsız" etiketli (protokol başlığındaki "Bağımsızlar" ile tutarlı, ama bağımsızlar
+    parti soyağacında olmadığından `partiler` alanına eklenmedi). -> `partiler:["ap","cgp"]`
+    **[B] doğrulandı**, değişmedi. `bitisNedeni:null` korundu (Cilt 5'te bu hükümetin düşüş
+    nedenine dair açık bir ifade bulunamadı; yalnızca yerine I. Ecevit Hükümeti'nin kurulduğu
+    biliniyor).
+
+  - **37. I. Ecevit (Cilt 5, s. 3968-3971, Bakanlar Kurulu + Koalisyon Protokolü):**
+    "**Koalisyon Protokolü (CHP-MSP)**" başlığı **birebir** (s. 3970-3971). Bakanlar Kurulu
+    tamamen CHP ve MSP'den: Bülent ECEVİT (Zonguldak, CHP, Başbakan), Necmettin ERBAKAN (Konya,
+    MSP, Başbakan Yrd.), Orhan Ferruh EYÜPOĞLU (CHP), İsmail Hakkı BİRLER (CHP), Süleyman Arif
+    EMRE (MSP), Şevket KAZAN (MSP), Hasan Esat IŞIK (CHP), Oğuzhan ASİLTÜRK (MSP), Turan GÜNEŞ
+    (CHP), Deniz BAYKAL (CHP), Fehim ADAK (MSP), Mahmut TÜRKMENOĞLU (CHP) vb. -> `partiler:
+    ["chp23","msp"]` **[B] doğrulandı**, değişmedi. **`bitisNedeni:"istifa"`** doğrulandı: Cilt
+    6'nın Irmak Hükümeti bölümü (s. 4369 sonrası, Hükümet Programının Görüşülmesi kısmı, ör.
+    "Sayın Ecevit Hükümetinin istifasından sonra, yeni bir..." ve "...ortaya çıkan Hükümet
+    bunalımı...") istifayı açıkça doğruluyor (tarih detayı — 18 Eylül 1974 — bu ciltte açık
+    yazmıyor, ikincil kaynaktan kaldı, ama neden/istifa olgusu [B]).
+
+  - **38. Sadi Irmak (Cilt 6, s. 4369-4370, Bakanlar Kurulu):** Bakanlar Kurulu listesinde
+    **hiçbir bakanın parti etiketi yok** — tamamı "TBMM dışından", "C.S. Kontenjan Üyesi" ya da
+    yalnızca il adıyla (parti belirtilmeden) yazılmış (ör. Mahmut Sadi IRMAK, Zeyyat BAYKARA,
+    Melih ESENBEL, Bedri GÜRSOY...). **Koalisyon Protokolü de yok.** Bu, [B] kaynakla doğrulanmış
+    tam bir partilerüstü kabine -> `partiler:[]` doğrulandı. `bitisNedeni:null` korundu: Cilt
+    6'nın metninde "29 Kasım 1974'te güvenoyu alamadı" bilgisine karşılık gelen açık bir tutanak
+    ifadesi bu turda bulunamadı (yalnızca "Sayın Ecevit Hükümetinin istifasından sonra ortaya
+    çıkan Hükümet bunalımı" bağlamı var); dogrula.js'in kapalı enum listesinde bu durumu tam
+    karşılayan bir değer de yok, `null` en doğru seçim.
+
+  - **39. IV. Demirel — 1. Milliyetçi Cephe (Cilt 6, s. 4591-4594, Bakanlar Kurulu + Koalisyon
+    Protokolü):** "**Koalisyon Protokolü (AP-MSP-MHP-CGP)**" başlığı **birebir** (s. 4593-4594),
+    metin: "Adalet Partisi, Milli Selamet Partisi, Cumhuriyetçi Güven Partisi ve Milliyetçi
+    Hareket Partisi... bir Koalisyon Hükümeti kurarak..." Dört Başbakan Yardımcısı da dört
+    partiyi temsil ediyor: Necmettin ERBAKAN (MSP), Turhan FEYZİOĞLU (CGP), Alparslan TÜRKEŞ
+    (MHP), başbakan Süleyman DEMİREL (AP). -> `partiler:["ap","msp","cgp","mhp69"]` **[B]
+    doğrulandı**, değişmedi. **`bitisNedeni:"secim"`** doğrulandı: Cilt 6'nın II. Ecevit
+    Hükümeti bölümü açılış konuşmalarında "5 Haziran 1977 seçimleri ardından kurulan..." ifadesi
+    geçiyor, IV. Demirel'in tam bu seçimin ardından (21.06.1977) sona erdiği bağlamıyla tutarlı.
+
+  - **40. II. Ecevit (Cilt 6, s. 4937-4938, Bakanlar Kurulu; Güvenoylaması s. 5074):** Bakanlar
+    Kurulu listesinde bu kez parti etiketi hiç yok (yalnızca isim+il) — CHP'nin kendi azınlık
+    hükümeti olduğu, metindeki tartışma bölümünde açıkça geçiyor: "...Cumhuriyet Halk Partisi
+    kurarsa bu azınlık Hükümeti olurmuş..." (s. 5074 civarı, Hükümet Programının Görüşülmesi).
+    -> `partiler:["chp23"]`, `tip:"azinlik"` **[B] doğrulandı**. **`bitisNedeni:"guvensizlik"`**
+    **[B] tam doğrulandı** — Güvenoylaması bölümünde (s. 5074) tutanağın kendi oylama sonucu
+    satır satır yazıyor: **"Oy sayısı 448, kabul 217, ret 229, çekinser 2."** (ikincil
+    kaynaklardaki "217 kabul/229 ret" rakamı burada birebir teyit edildi).
+
+  - **41. V. Demirel — 2. Milliyetçi Cephe (Cilt 6, s. 5087-5090, Bakanlar Kurulu + Koalisyon
+    Protokolü):** "**Koalisyon Protokolü (AP-MSP-MHP)**" başlığı **birebir** (s. 5089-5090) —
+    CGP bu kez yok, üç partili koalisyon. Bakanlar Kurulu da tutarlı: Süleyman DEMİREL (AP),
+    Necmettin ERBAKAN (MSP), Alparslan TÜRKEŞ (MHP) üç Başbakan Yardımcısı. -> `partiler:
+    ["ap","msp","mhp69"]` **[B] doğrulandı**, değişmedi. **`bitisNedeni:"guvensizlik"`**
+    doğrulandı: Cilt 6'nın III. Ecevit Hükümeti bölümünde (s. 5391 sonrası) "Tarih, gensoru ile
+    düşürülmüş Hükümeti nasıl bağışlanmaz suçlarla yargılayabilir..." ifadesi, V. Demirel'in bir
+    gensoru (censure motion) ile düşürüldüğünü [B] doğruluyor (tam oylama tablosu bu turda
+    bulunamadı, ama "gensoru ile düşürüldü" ifadesi `bitisNedeni:"guvensizlik"` için yeterli).
+    "Güneş Motel Hadisesi" ayrıntısı (AP'den istifa eden milletvekillerinin desteği) hâlâ
+    ikincil kaynaklı, yalnızca `not` alanındaki renk bilgisi.
+
+  - **42. III. Ecevit (Cilt 6, s. 5391-5392, Bakanlar Kurulu):** Bakanlar Kurulu listesi bu kez
+    parti etiketli ve **CHP tek başına değil**: Bülent ECEVİT (CHP, Başbakan); Turhan FEYZİOĞLU
+    (Kayseri, **CGP**, Başbakan Yrd.); Mehmet Faruk SÜKAN (Konya, **DP**, Başbakan Yrd.); Mehmet
+    Salih YILDIZ (Van, **CGP**); geri kalan çoğunluk CHP (Orhan Ferruh EYÜPOĞLU, Hikmet ÇETİN,
+    Şerafettin ELÇİ, Deniz BAYKAL, Ahmet Gündüz ÖKÇÜN, Ziya MÜEZZİNOĞLU vb.); birkaçı "Bağımsız"
+    (Enver AKOVA, Ali Rıza SEPTİOĞLU, Mustafa KILIÇ, Mete TAN, Tuncay MATARACI, Güneş ÖNGÜT,
+    Orhan ALP, Ahmet KARAASLAN). **Bu, ilk turdaki "CGP ve Demokratik Parti'nin dışarıdan
+    desteği ikinci kaynakla doğrulanamadı" notunu düzeltiyor: CGP ve DP'den bakanlar bizzat
+    kabinede görev aldı, dışarıdan destek değil.** -> `partiler` **["chp23","cgp","demp70"]**
+    olarak düzeltildi (`veri/sandik.js`'te güncellendi). **`bitisNedeni:"istifa"`** [B] tam
+    doğrulandı: Cilt 7'nin VI. Demirel Hükümeti bölümü açılışında (s. 5583 civarı) "...
+    yorumlanmış ve Hükümet **16 Ekim 1979** günü istifa etmiştir." ifadesi hem nedeni hem tam
+    tarihi veriyor (ikincil kaynaklardaki "14 Ekim ara seçimi sonrası istifa" genel çerçevesiyle
+    tutarlı, ama istifanın kendisi 16 Ekim'de gerçekleşmiş — `not` alanı bu ayrıntıyla
+    güncellendi).
+
+  - **43. VI. Demirel (Cilt 7, s. 5583-5584, Bakanlar Kurulu):** Bakanlar Kurulu listesinde de
+    parti etiketi yok, ama Hükümet Programının Görüşülmesi bölümünün en başında (s. 5586
+    civarı) doğrudan şu ifadeler var: "Millet Meclisinde hiçbir parti tek başına Hükümeti
+    kuracak kadar güce sahip [değildi]... Hükümetin **Adalet Partisi** tarafından kurulması
+    gerek[tiği]... Milliyetçi Hareket Partisi... Adalet Partisi tarafından kurulacak bir
+    hükümeti **destekleyeceğini** açıkladı... [Milli Selamet Partisi de] 'Hükümet Adalet
+    Partisi tarafından kurulmalıdır' dedik." — yani hükümet yalnızca **AP tarafından kuruldu**,
+    MSP ve MHP yalnızca dışarıdan destek verdi, kabineye katılmadı. -> `partiler:["ap"]`,
+    `tip:"azinlik"` **[B] doğrulandı**, değişmedi. `bitisNedeni:"darbe"` zaten apaçık (12 Eylül
+    1980 darbesiyle aynı gün sona erdi, ayrıca kaynak gerektirmiyor — dönem 1'deki hükümet 23
+    ile aynı örüntü).
+
+  - **44. Ulusu — 12 Eylül kabı (Cilt 7, s. 5943-5944, Bakanlar Kurulu):** Bakanlar Kurulu
+    listesinde **hiçbir parti etiketi yok** (bütün partiler zaten kapatılmıştı) -> `partiler:[]`
+    **[B] doğrulandı**, değişmedi. `bitisNedeni:null` korundu (13 Aralık 1983'te I. Özal
+    Hükümeti'nin kurulmasıyla, yani genel seçimin ardından olağan biçimde sona erdi; ama bu
+    turda "secim" değerini destekleyecek açık bir tutanak ifadesi aranmadı, `null` bırakıldı).
+
+- Erişim (ilk tur): 2026-09-16 / 2026-09-22. Erişim (düzeltme turu 1, Cilt 5/6/7 gövde metni):
+  2026-09-22.
 
 
 ### 1973-12-yerel, 1977-12-yerel
 
 - **[B] YSK, "9 Aralık 1973 Belediye Meclis Üyeliği Seçim Sonuçları"**
   (ysk.gov.tr/doc/dosyalar/docs/Mahalli/1973/KesinSecimSonuclari/1973_Belediye_Meclis_Uyeligi_Secimleri_Sonucu.pdf,
   `pdftotext -table`) — kayıtlı 8.607.082, kullanılan 4.706.719, geçerli 3.914.801, seçimi
   yapılan belediye meclis üyeliği 24.873. Parti oyları toplamı geçerli oya **tam eşit**
   (1.382.150+1.624.490+102.908+351.746+8.384+212.477+62.165+19.860+150.621=3.914.801); kazanılan
   üyelik toplamı da 24.873'e **tam eşit**.
diff --git a/veri/sandik.js b/veri/sandik.js
index 1bab7e1..76fe42e 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -484,23 +484,23 @@ window.SANDIK = {
     { no: 40, basbakan: "Bülent Ecevit", partiler: ["chp23"],
       baslangic: "1977-06-21", bitis: "1977-07-21", tip: "azinlik", bitisNedeni: "guvensizlik",
       not: "CHP azınlık hükümeti; 3 Temmuz 1977'de güven oylamasını kaybetti, 21 Temmuz'da istifa etti." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-41
     { no: 41, basbakan: "Süleyman Demirel", partiler: ["ap", "msp", "mhp69"],
       baslangic: "1977-07-21", bitis: "1978-01-05", tip: "koalisyon", bitisNedeni: "guvensizlik",
       not: "2. Milliyetçi Cephe hükümeti; Güneş Motel Hadisesi'nde AP'den istifa eden milletvekillerinin desteğiyle verilen bir gensoruyla düştü." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-42
-    { no: 42, basbakan: "Bülent Ecevit", partiler: ["chp23"],
+    { no: 42, basbakan: "Bülent Ecevit", partiler: ["chp23", "cgp", "demp70"],
       baslangic: "1978-01-05", bitis: "1979-11-12", tip: "azinlik", bitisNedeni: "istifa",
-      not: "14 Ekim 1979 ara seçimlerindeki kayıpların ardından, meclis güvenini korumasına rağmen istifa etti." },
+      not: "CHP'nin öncülüğünde CGP ve Demokratik Parti'den de bakanların katıldığı azınlık hükümeti; 14 Ekim 1979 ara seçimlerindeki kayıpların ardından, meclis güvenini korumasına rağmen 16 Ekim 1979'da istifa etti." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-43
     { no: 43, basbakan: "Süleyman Demirel", partiler: ["ap"],
       baslangic: "1979-11-12", bitis: "1980-09-12", tip: "azinlik", bitisNedeni: "darbe",
       not: "AP azınlık hükümeti, MSP ve MHP dışarıdan destek verdi; 12 Eylül 1980 askerî darbesiyle görevden uzaklaştırıldı." },
 
     // --- 12 Eylül 1980 kabı (bkz. veri/partiler.js DONEMLER[3].kesinti.yonetim) ---
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-44
     { no: 44, basbakan: "Bülend Ulusu", partiler: [],
```
