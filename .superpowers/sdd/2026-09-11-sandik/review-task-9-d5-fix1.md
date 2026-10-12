# İnceleme paketi: task-9-d5-fix1 (701533f..1404cf8)

## Commitler
```
1404cf8 Düzeltme: dönem 5 — hükümet kayıtlarına ikinci kaynak
```
## Özet
```
 araclar/kaynak-defteri.md | 151 ++++++++++++++++++++++++++++++++++++++++++++++
 veri/sandik.js            |   6 +-
 2 files changed, 154 insertions(+), 3 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index 29f3e2f..61aee42 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -2505,10 +2505,161 @@ görüşmeleri / Cumhurbaşkanlığı tezkereleri.
 - **Cilt 9 ve Cilt 10'da** (19., 20. ve 21. dönemler) yapılmış bir milletvekili ara seçimine dair
   tek bir kayıt yok (yalnızca 1979 Senato ara seçimlerine geçmişe dönük bir atıf var).
 - **İkinci kaynak (derleme):** TESAV'ın "Milletvekili Ara Seçim Sonuçları" başlıklı derlemesi
   yıl listesini **1947, 1948, 1949, 1951, 1966, 1968, 1975, 1979, 1986, 2003** olarak veriyor —
   1986 ile 2003 arasında ara seçim yok.
 - **Sonuç:** dönem 5'e (1991–2000) hiçbir `ara` kaydı eklenmedi; Görev 12'ye devredilecek
   doğrulanamamış ara seçim de yok.
 - Erişim: 2026-09-23.
 
 ---
+
+## Düzeltme turu 1 (2026-09-23) — dönem 5 controller incelemesi sonrası (SPEC ❌ → düzeltildi)
+
+İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d5-verdict.md`.
+Bulgular: **Important #1** (hükümet 47–57'nin `partiler`/`tip`/`bitisNedeni` alanları tek kaynak
+ailesinden — TBMM Hükümetler Cilt 8/9/10 — türetilmişti), **Important #2** (48'in
+`bitisNedeni:"secim"` doğrulanmamış bir kategori iddiasıydı), **Minor #3** (1991-10-genel `not`
+iki cümleydi), **Minor/kanıt #4** (1991 RP-MÇP-IDP ortak listesi hiç araştırılmamıştı).
+
+### Kullanılan ikinci kaynaklar (dönem 5 hükümetleri)
+
+- **(K1) TBMM, *Koalisyon Hükümetleri, Koalisyon Protokolleri, Hükümet Programları ve Genel Kurul
+  Görüşmeleri* — Cilt 2** (`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/874b1bb8-73c2-4847-8d40-01866e87ca4a.pdf`,
+  1048 s.). Önsöz: "Bu eserde, 1961-2002 yılları arasında **koalisyon hükümeti olarak görev
+  yapan** … VII. Demirel Hükümeti, I. Çiller Hükümeti, III. Çiller Hükümeti, II. Yılmaz Hükümeti,
+  Erbakan Hükümeti, III. Yılmaz Hükümeti ve V. Ecevit Hükümeti'nde görev alan Bakanlar Kurulu
+  üyeleri… yer almaktadır." İçindekiler dönem 5 için: VII. Demirel (20.11.1991-25.06.1993),
+  I. Çiller (25.06.1993-05.10.1995), III. Çiller (30.10.1995-06.03.1996), II. Yılmaz
+  (06.03.1996-28.06.1996), Erbakan (28.06.1996-30.06.1997), III. Yılmaz (30.06.1997-11.01.1999),
+  V. Ecevit. **Tarihler Cilt 8/9/10 ile birebir aynı.** Ayrıca bu cilt **I. Yılmaz (48),
+  II. Çiller (51) ve IV. Ecevit (56) hükümetlerini içermiyor** — bu üçünün koalisyon olmadığının
+  bağımsız (negatif) doğrulaması. (Not: bu yayın da Neziroğlu & Yılmaz editörlüğünde; TBMM
+  yayını olmakla birlikte Hükümetler ciltleriyle aynı editör ailesinden — bu yüzden aşağıda her
+  hükümet için ayrıca TBMM dışı bir kaynak da arandı.)
+- **(K2) Özhan DEMİRKOL, "1923'ten 2018'e Türkiye'de Hükümet ve Bakanlıklar"**, *Fiscaoeconomia*
+  7(1), 2023, s. 365-390 (dönem 0'da da kullanılan kaynak): "1988'de Anavatan Partisi (ANAP)
+  lideri Turgut Özal'ın Cumhurbaşkanı seçilmesi nedeniyle **ANAP** genel başkanlığına seçilen
+  **Yıldırım Akbulut tarafından 47. hükümet** kurulmuştur."; "1993 yılında Doğru Yol Partisi
+  (DYP) lideri Süleyman Demirel'in **Cumhurbaşkanı seçilmesi sonrasında** yeni DYP lideri Tansu
+  Çiller tarafından **50. Hükümet** kurulmuştur."; "**ANAP-DYP azınlık koalisyonu (53. Hükümet)**
+  kurulmuştur… yerini **RP-DYP koalisyonuna (54. Hükümet)** bırakmıştır."; "…**ANAP-Demokratik Sol
+  Parti (DSP)-Demokrat Türkiye Partisi (DTP) azınlık koalisyonuna (55. Hükümet)** ve DSP lideri
+  Bülent Ecevit tarafından kurulan **azınlık hükümetine (56. Hükümet)** bırakmıştır."; "…1995
+  **(51. Hükümet)**, 1999 **(56. Hükümet)** yıllarında kurulan **tek parti azınlık hükümetleri**…";
+  "38 bakanlık ile **ANAP-DSP-DTP koalisyonu (55. Hükümet)** ve **DSP-Milliyetçi Hareket Partisi
+  (MHP)-ANAP koalisyonu (57. Hükümet)**"; "50. Hükümet döneminde **koalisyon ortağı SHP'nin
+  CHP'yle birleşmesi**…"
+- **(K3) Enes Malik ÇAKIR, "1991–2002 Yılları Arasında Koalisyon Hükümetleri Yönetimi"**,
+  *IBAD Sosyal Bilimler Dergisi*, (6), 2020, s. 19-37 (`dergipark.org.tr/tr/download/article-file/942492`):
+  "**ANAP genel başkanı Mesut Yılmaz**, daha sonra Özal'a istifasını vermiştir. DYP genel başkanı
+  Süleyman Demirel ise koalisyon için üçüncü alternatif parti olan **SHP ile anlaşmış**, güvenoyu
+  da alarak hükümeti kurmuştur."; "Mecliste cumhurbaşkanı adayları arasında yapılan oylamada en
+  yüksek oyu alan **Süleyman Demirel başbakanlıktan istifa etmiş, cumhurbaşkanlığı sıfatını
+  almıştır**."; "**DYP-SHP koalisyonu 49. hükümeti kurmuş**, Turgut Özal'ın vefatıyla 1993-1995
+  yılları arasında ise **50. hükümeti** kurmuştur."; "Seçim öncesi koalisyon hükümeti kuran **DYP
+  ve CHP**…"; "**5 ay süren DYP-CHP koalisyon hükümeti**…"; "Anayasa Mahkemesi tarafından
+  güvenoyunun iptal edilmesi **ANAP-DYP arasındaki koalisyonu sonlandırmıştır**."
+- **(K4) Yeter SOLAK – Murat KARATAŞ, "Türkiye'nin Koalisyonlu Yılları (1991-2002)"**,
+  *21. Yüzyılda Eğitim ve Toplum*, 14(41), 2025, s. ~300-320
+  (`dergipark.org.tr/en/download/article-file/4855196`): "**TBMM'den 20 Kasım 1991'de güvenoyu
+  alan DYP-SHP koalisyon hükümeti** göreve başladı."; "Süleyman Demirel… TBMM'de yapılan **3. Tur
+  oylamada 244 oy** alarak Türkiye Cumhuriyeti'nin **9. Cumhurbaşkanı** seçildi. Diğer adaylar
+  İsmail Cem 27, Kamran İnan 94, Lütfi Doğan 47 oy aldılar."; "Deniz Baykal, **20 Eylül günü
+  koalisyondan çekildiklerini açıkladı**. Bundan sonra **Tansu Çiller bir azınlık hükümeti kurmayı
+  denediyse de Meclis'ten güvenoyu alamadı.**"; "**DYP-CHP Koalisyon Hükümeti** 5 Kasım[1995]'da
+  TBMM'den güvenoyu aldı ve **seçim sonrası yeni hükümet iş başına geçene kadar** ülkeyi
+  yönetti."; "12 Mart 1996'da **ANAP-DYP (ANAYOL) koalisyon hükümeti**… güvenoyu alarak çalışmaya
+  başladı… **DYP'nin koalisyondan çekilme kararı alması Anayol hükümetinin sonunu getirdi.**";
+  "Başbakan Necmettin Erbakan 18 Haziran'da **Refahyol hükümetinin istifa ettiğini** kamuoyuna
+  açıklamak zorunda kaldı."; "Meclis'te Türkbank ihalesine ilişkin verilen **gensoru önergesinin
+  kabul edilmesiyle hükümet düştü**… Türk siyasi tarihinde **gensoru ile düşürülen ikinci
+  hükümet**"; "DSP lideri Bülent Ecevit, **ANAP ve DYP'nin dışarıdan desteklediği bir azınlık
+  hükümetini** kurdu."; "**DSP-MHP-ANAP koalisyon hükümeti** 9 Haziran 1999'da Meclis'ten 354 evet
+  şeklinde güvenoyu alarak çalışmaya başladı."
+- **(K5) Anadolu Ajansı**, "Eski başbakanlardan Yıldırım Akbulut hayatını kaybetti"
+  (`aa.com.tr/tr/turkiye/eski-basbakanlardan-yildirim-akbulut-hayatini-kaybetti/2208908`):
+  "Akbulut, **15 Haziran 1991'de gerçekleştirilen ANAP Kongresi'nde Mesut Yılmaz'a yenilerek genel
+  başkanlık ve başbakanlıktan ayrıldı.**"
+- **(K6) Yeni [B] birincil kaynaklar — seçim/yenileme kararları:**
+  - **Kanun No 3757**, "2839 Sayılı Milletvekili Seçimi Kanununda Değişiklik Yapılması ve
+    **XIX uncu Dönem Milletvekili Genel Seçiminde Uygulanacak Hükümler** Hakkında Kanun",
+    Kabul 24.8.1991, **RG 26.8.1991 / 20972**
+    (`www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc074/kanuntbmmc074/kanuntbmmc07403757.pdf`)
+    — "MADDE 15. — Türkiye Büyük Millet Meclisi XIX uncu Dönem Milletvekili Genel Seçimi için
+    **oy verme günü 20 Ekim 1991 Pazar günüdür.**"
+  - **TBMM Kararı No 384**, Karar Tarihi 27.10.1995, **RG 31.10.1995 / 22449 Mükerrer**
+    (`…/kanuntbmmc078/karartbmmc078/karartbmmc07800384.pdf`) — "Türkiye Büyük Millet Meclisi
+    Genel **Seçimlerinin Yenilenmesine** ve Seçimlerin **24 Aralık 1995** Pazar günü yapılmasına…"
+  - **TBMM Kararı No 590**, Karar Tarihi 30.7.1998, **RG 2.8.1998 / 23421**
+    (`…/kanuntbmmc081/karartbmmc081/karartbmmc08100590.pdf`) — "Türkiye Büyük Millet Meclisi genel
+    **seçimlerinin yenilenmesine** ve seçimlerin, **mahalli idareler genel seçimleri ile birlikte
+    18 Nisan 1999** Pazar günü yapılmasına…" (bu aynı zamanda `1999-04-genel` ve `1999-04-yerel`
+    kayıtlarının aynı gün yapıldığının [B] doğrulamasıdır.)
+  - **TBMM Kararı No 745**, Kabul Tarihi 31.7.2002, **RG 2.8.2002 / 24834**
+    (`…/kanuntbmmc086/karartbmmc086/karartbmmc08600744.pdf` — dosya adı numarası bir kayık)
+    — "Türkiye Büyük Millet Meclisi genel **seçimlerinin yenilenmesine** ve seçimin **3 Kasım
+    2002** Pazar günü yapılmasına…"
+- **(K7) İsmail Doğan (?), "Türkiye'de Seçim Kararının Mahiyeti"**, dergipark
+  (`dergipark.org.tr/en/download/article-file/1093821`), dipnot: "Zira **1987 ve 1991 milletvekili
+  erken genel seçim kararı**, parlamento kararı biçiminde değil, **kanun ile** olmuştur. Bkz. …
+  **3757 sayılı Kanun** … m. 15. RG No: 20972, RG T: 26.08.1991." (1982 Anayasası döneminde
+  alınan bütün seçim yenileme kararlarının künyelerini veren tablo bu makaleden alındı.)
+
+### Alan alan ikinci kaynak eşleşmesi
+
+| Hük. | `partiler` | `tip` | `bitisNedeni` | Eşleşme |
+|---|---|---|---|---|
+| 47 | K2 (ANAP, Akbulut) | K1 (koalisyon cildinde yok) | **K5** (kurultayda yenilerek başbakanlıktan ayrıldı) ↔ [B] tezkere "istifa etmiş" | tam |
+| 48 | K3, K5 (ANAP Genel Başkanı Yılmaz) | K1 (koalisyon cildinde yok) | **K6 Kanun 3757 [B]** + K7 ("erken genel seçim kararı") | tam |
+| 49 | K3 ("DYP-SHP koalisyonu 49. hükümeti"), K4 | K1, K3, K4 | K2, K3, K4 (Demirel'in CB seçilmesi) | tam |
+| 50 | K3 ("50. hükümeti"), K2 (ortak SHP) | K1, K3 | K4 (Baykal 20 Eylül'de koalisyondan çekildi) ↔ [B] "20 Eylül 1995'te 50'nci Hükümetin istifası" | tam |
+| 51 | K4 ("Tansu Çiller bir azınlık hükümeti") | K2 ("1995 … tek parti azınlık"), K1'de yok | K4 ("Meclis'ten güvenoyu alamadı") | tam |
+| 52 | K3, K4 ("DYP-CHP koalisyon hükümeti") | K1, K3, K4 | **K6 Karar 384 [B]** + K4 ("seçim sonrası yeni hükümet iş başına geçene kadar") | tam |
+| 53 | K2, K4 ("ANAP-DYP / ANAYOL") | K1, K2, K4 | K3/K4 ↔ [B] "istifa etmek zorunda kalmıştır" — **kısmi uyuşmazlık** (aşağıda) | kısmi |
+| 54 | K2, K4 ("RP-DYP / REFAHYOL") | K1, K2, K4 | K4 ("Refahyol hükümetinin istifa ettiğini … açıkladı") | tam |
+| 55 | K2 ("ANAP-DSP-DTP"), K4 | K1, K2, K4 | K4 ("gensoru önergesinin kabul edilmesiyle hükümet düştü") ↔ [B] "güven oylaması ile düşürülmesi" | tam |
+| 56 | K2, K4 ("DSP azınlık hükümeti") | K2 ("1999 … tek parti azınlık"), K1'de yok | **K6 Karar 590 [B]** + K4 | tam |
+| 57 | K2 ("DSP-MHP-ANAP koalisyonu"), K4 | K1, K2, K4 | **K6 Karar 745 [B]** | tam |
+
+- **53'ün `bitisNedeni` — kısmi uyuşmazlık, yine de `istifa`:** [B] Cilt 9 (basılı s. 7452)
+  "yargı kararıyla, güvenoyu almadığı için **istifa** etmek zorunda kalmıştır"; K3 "Anayasa
+  Mahkemesi tarafından güvenoyunun iptal edilmesi koalisyonu sonlandırmıştır"; K4 "Anayasa
+  Mahkemesi'nin güvenoyunu **iptal etmesi öncesinde**, DYP'nin koalisyondan çekilme kararı alması
+  Anayol hükümetinin sonunu getirdi". Üç kaynak **tetikleyicide** ayrışıyor (AYM iptali mi,
+  DYP'nin çekilmesi mi) ama **mekanizmada** (hükümetin güvenoylamasıyla düşürülmesi değil, görevi
+  bırakması) birleşiyor → `bitisNedeni: "istifa"` korundu, ayrışma burada kayıtlı.
+
+### Yapılan veri değişiklikleri
+
+1. **`hukumetler` no. 48 — `bitisNedeni: "secim"` → `"erken-secim"`.** İnceleme `null` öneriyordu
+   ama bu turda **[B] kanıt bulundu**: 20 Ekim 1991 seçimi, 18. Dönem'in 29 Kasım 1987'de
+   başlayan beş yıllık süresi dolmadan, **3757 sayılı Kanun'un 15. maddesiyle** (RG 26.8.1991 /
+   20972) öne alınmış bir genel seçimdir; K7 bu düzenlemeyi açıkça "1991 milletvekili **erken
+   genel seçim kararı**" diye adlandırıyor. (Beş yıllık süre: [B] TÜİK Açıklama s. 13 — "Yeni
+   Anayasa, seçimlerin … 5 yılda bir yapılmasını hükme bağlamıştır".) Kaydın `not` cümlesi de
+   buna göre güncellendi.
+2. **`1991-10-genel.not` tek cümleye indirildi** ve RP-MÇP-IDP ortak listesi eklendi (aşağıda).
+
+### 1991 RP-MÇP-IDP ortak listesi — araştırıldı, `not`a eklendi
+
+- **[B] TÜİK, Tablo 1 (PDF s. 22):** 1991 seçimine katılan partiler yalnızca "ANAP, RP, SP, DYP,
+  DSP, SHP" (6 parti) — 1987'de ayrı ayrı yer alan **MÇP ve IDP, 1991 listesinde yok**; TÜİK
+  Tablo 24'te de 1991 sütununda MÇP ve IDP satırları boş. Yani iki parti 1991'de kendi listeleriyle
+  seçime girmemiştir.
+- **[B] TBMM Tutanak (Cilt 8, I. Çiller Hükümeti program görüşmesi, 19. Dönem):** "Sayın Muharrem
+  Şemsek, buyurunuz. (**MÇP sıralarından alkışlar**)" — MÇP'nin 19. Dönem TBMM'sinde kendi
+  sıraları/grubu vardı; yani kendi listesiyle seçime girmediği halde MÇP'li milletvekilleri
+  meclise girmiştir. Bu iki [B] olgu birlikte ortak liste uygulamasını gösteriyor.
+- **İkinci kaynak (haber/analiz arşivi): Medyascope**, "Gomaşinen (6) – Cumhur İttifakı'nın
+  provası: 20 Ekim 1991 seçimlerinde Erbakan-Türkeş ittifakı" — "**Refah Partisi çatısı altında,
+  Milliyetçi Çalışma Partisi ve … Islahatçı Demokrasi Partisi birlikte seçim kararı aldılar**";
+  "Necmettin Erbakan'ın Refah Partisi, Milliyetçi Çalışma Partisi ve Islahatçı Demokrasi Partisi
+  ile girdiği seçimde **62 milletvekili** kazandı — %16,87, 4 milyon 120 bin oyla" (YSK/TÜİK'in
+  4.121.355 oy / %16,9 / 62 sandalye rakamlarıyla tolerans içinde eşleşiyor).
+- **Veriye yazılmayanlar:** ittifakın 62 sandalyesinin partilere dağılımı (RP/MÇP/IDP) yalnızca
+  tek bir haber özetinde geçtiğinden **yazılmadı**; `sonuc` satırı kaynaktaki gibi tek "RP"
+  satırıdır. `ittifak` alanı spesifikasyon §5.2 gereği yalnızca 2018 ve sonrası için kullanılır,
+  bu kayda yazılmadı.
+- Erişim: 2026-09-23.
+
+---
diff --git a/veri/sandik.js b/veri/sandik.js
index 69eb963..d243a79 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -325,21 +325,21 @@ window.SANDIK = {
     { id: "1989-10-cb-tbmm", tur: "cb-tbmm", tarih: "1989-10-31",
       secilen: "Turgut Özal", turSayisi: 3,
       not: "1. tur (20 Ekim, 247 oy) ve 2. tur (24 Ekim, 256 oy) 2/3 çoğunluğu (300) sağlayamadı; 3. turda (31 Ekim) salt çoğunlukla (263 oy) seçildi. SHP ve DYP oylamalara katılmadı." },
 
     // --- dönem 5 (1991 – 2000) ---
 
     // kaynak: araclar/kaynak-defteri.md#1991-10-genel
     { id: "1991-10-genel", tur: "genel", tarih: "1991-10-20", tekParti: false,
       meclis: 450, kayitli: 29979123, kullanilan: 25157089, gecerli: 24416666, baraj: 10,
       sonuc: [ { parti: "dyp", oy: 6600726, sandalye: 178 }, { parti: "anap", oy: 5862623, sandalye: 115 }, { parti: "shp", oy: 5066571, sandalye: 88 }, { parti: "rp", oy: 4121355, sandalye: 62 }, { parti: "dsp", oy: 2624301, sandalye: 7 }, { ad: "Diğer", partiSayisi: 1, oy: 108369, sandalye: 0 }, { ad: "Bağımsız", oy: 32721, sandalye: 0 } ],
-      not: "Hiçbir parti tek başına hükümet kuracak çoğunluğu sağlayamadı; seçimden sonra DYP–SHP koalisyonu kuruldu. Sayılar il ve gümrük kapısı oylarının toplamıdır." },
+      not: "RP listesinde MÇP ve IDP adaylarının da yer aldığı bu seçimde hiçbir parti tek başına hükümet kuracak çoğunluğu sağlayamadı; sayılar il ve gümrük kapısı oylarının toplamıdır." },
 
     // kaynak: araclar/kaynak-defteri.md#1993-05-cb-tbmm
     { id: "1993-05-cb-tbmm", tur: "cb-tbmm", tarih: "1993-05-16",
       secilen: "Süleyman Demirel", turSayisi: 3,
       not: "İlk iki turda Anayasa'nın 102. maddesindeki 2/3 çoğunluk sağlanamadı; 431 üyenin katıldığı üçüncü turda Demirel 244 oyla 9. Cumhurbaşkanı seçildi." },
 
     // kaynak: araclar/kaynak-defteri.md#1994-03-yerel
     { id: "1994-03-yerel", tur: "yerel", tarih: "1994-03-27",
       olcu: "belediye-meclisi",
       kayitli: null, kullanilan: null, gecerli: null,
@@ -618,22 +618,22 @@ window.SANDIK = {
 
     // kaynak: araclar/kaynak-defteri.md#hukumetler-45-47
     { no: 47, basbakan: "Yıldırım Akbulut", partiler: ["anap"],
       baslangic: "1989-11-09", bitis: "1991-06-23", tip: "tek-parti", bitisNedeni: "istifa",
       not: "Özal'ın cumhurbaşkanı seçilmesinin ardından ANAP grubu içinden kuruldu; Akbulut'un başbakanlıktan istifasının kabulüyle sona erdi." },
 
     // --- dönem 5 (1991 – 2000) ---
 
     // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
     { no: 48, basbakan: "Mesut Yılmaz", partiler: ["anap"],
-      baslangic: "1991-06-23", bitis: "1991-11-20", tip: "tek-parti", bitisNedeni: "secim",
-      not: "Akbulut'un istifası üzerine ANAP Genel Başkanı sıfatıyla görevlendirilen Yılmaz'ın kurduğu hükümet, 20 Ekim 1991 genel seçiminin ardından yerini koalisyona bıraktı." },
+      baslangic: "1991-06-23", bitis: "1991-11-20", tip: "tek-parti", bitisNedeni: "erken-secim",
+      not: "Akbulut'un istifası üzerine ANAP Genel Başkanı sıfatıyla görevlendirilen Yılmaz'ın kurduğu hükümet, 3757 sayılı Kanunla 20 Ekim 1991'e alınan erken genel seçimin ardından yerini koalisyona bıraktı." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
     { no: 49, basbakan: "Süleyman Demirel", partiler: ["dyp", "shp"],
       baslangic: "1991-11-20", bitis: "1993-06-25", tip: "koalisyon", bitisNedeni: "cumhurbaskani-secimi",
       not: "19 Kasım 1991 tarihli DYP–SHP koalisyon protokolüyle kuruldu; Demirel'in 16 Mayıs 1993'te cumhurbaşkanı seçilmesinin ardından sona erdi." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
     { no: 50, basbakan: "Tansu Çiller", partiler: ["dyp", "shp"],
       baslangic: "1993-06-25", bitis: "1995-10-05", tip: "koalisyon", bitisNedeni: "istifa",
       not: "Yeni bir DYP–SHP koalisyon protokolüyle kuruldu; SHP'nin CHP'ye katılmasından sonra aynı Bakanlar Kurulu listesinde bakanlar CHP etiketiyle sürdü ve hükümet 20 Eylül 1995'te istifa etti." },
```
