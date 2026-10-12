# İnceleme paketi: task-9-d6 (1404cf8..6ed60d4)

## Commitler
```
6ed60d4 Sandık verisi: dönem 6 (2001–2015) — yerel seçimler, referandumlar, ara seçim
8018541 Sandık verisi: dönem 6 (2001–2015) — genel seçimler, CB seçimleri, hükümetler
```
## Özet
```
 araclar/kaynak-defteri.md | 625 ++++++++++++++++++++++++++++++++++++++++++++++
 veri/sandik.js            | 129 +++++++++-
 2 files changed, 752 insertions(+), 2 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index 61aee42..a7d39f6 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -2656,10 +2656,635 @@ iki cümleydi), **Minor/kanıt #4** (1991 RP-MÇP-IDP ortak listesi hiç araşt
   "Necmettin Erbakan'ın Refah Partisi, Milliyetçi Çalışma Partisi ve Islahatçı Demokrasi Partisi
   ile girdiği seçimde **62 milletvekili** kazandı — %16,87, 4 milyon 120 bin oyla" (YSK/TÜİK'in
   4.121.355 oy / %16,9 / 62 sandalye rakamlarıyla tolerans içinde eşleşiyor).
 - **Veriye yazılmayanlar:** ittifakın 62 sandalyesinin partilere dağılımı (RP/MÇP/IDP) yalnızca
   tek bir haber özetinde geçtiğinden **yazılmadı**; `sonuc` satırı kaynaktaki gibi tek "RP"
   satırıdır. `ittifak` alanı spesifikasyon §5.2 gereği yalnızca 2018 ve sonrası için kullanılır,
   bu kayda yazılmadı.
 - Erişim: 2026-09-23.
 
 ---
+
+## Görev 9 — Dönem 6 (2001–2015)
+
+**Kaynak ailesi notu:** 2002–2011 genel seçimlerinde birincil kaynak TÜİK, ikinci kaynak YSK'nın
+kendi kesin sonuç yayınlarıdır (iki ayrı kurumun ayrı yayınları). 2015'in iki seçiminde birincil
+kaynak YSK'nın Örnek 96/D–E duyuruları, ikinci kaynak TÜİK Veri Portalı'nın
+*Milletvekili Genel Seçimi Sonuçları (1983-2018)* tablosudur. Hükümetlerde birincil kaynak
+**Resmî Gazete**'dir: TBMM'nin *Hükümetler, Programları ve Genel Kurul Görüşmeleri* dizisi
+**Cilt 10 ile (57. Hükümet, 2002) bitiyor** — koleksiyon öğesinin ORIGINAL paketinde
+(`/core/bundles/88774567-0d57-4e64-8a8e-bf03cfb196f7/bitstreams?size=50`) yalnızca 10 cilt var
+(`201400883-c1.pdf` … `201400892-c10.pdf`), 11. cilt yok. Bu yüzden 58–64 için ölçüt,
+plandaki ölçütün ikinci seçeneği olan **"Bakanlar Kurulu'nun Resmî Gazete'de yayımlanan atanma
+işlemi (Cumhurbaşkanlığı tezkeresi) tarihi"**dir; bu tarih 57. hükümete kadar ciltlerdeki
+kuruluş tarihiyle aynı ölçüdür (57: 28.05.1999).
+
+### 2002-11-genel
+
+- **[B] TÜİK, *Milletvekili Genel Seçimleri 1923–2011*, Tablo 24 "TÜRKİYE"** (PDF s. 111–112,
+  basılı s. 93–94, `pdftotext -table`): kayıtlı 41.407.027, kullanılan 32.768.161 (katılım %79,1),
+  geçerli oy 31.414.748, gümrük kapıları 114.035, **toplam geçerli oy 31.528.783**,
+  milletvekili sayısı 550.
+  AK PARTİ 10.808.229 (%34,3) **363**, CHP 6.113.352 (%19,4) **178**, DYP 3.008.942 (%9,5),
+  MHP 2.635.787 (%8,4), GENÇ PARTİ 2.285.598 (%7,2), DEHAP 1.960.660 (%6,2),
+  ANAP 1.618.465 (%5,1), SAADET PARTİSİ 785.489 (%2,5), DSP 384.009 (%1,2), YTP 363.869 (%1,2),
+  BBP 322.093 (%1,0), İP 159.843 (%0,5), ÖDP 106.023 (%0,3), LDP 89.331 (%0,3),
+  YP 294.909 (%0,9), BTP 150.482 (%0,5), MİLLET PARTİSİ 68.271 (%0,2), TKP 59.180 (%0,2),
+  BAĞIMSIZ 314.251 (%1,0) **9**.
+- **İkinci kaynak [B]: YSK**, `…/docs/2002MilletvekiliSecimi/gumrukdahil/gumrukdahil.pdf` ve
+  `…/turkiye/milletvekilisayisi.pdf` — her ikisi de künyesinde
+  "**09 Kasım 2002 tarih ve 883 sayılı YSK Kararı / 10 Kasım 2002 tarih ve 24932 sayılı Resmi
+  Gazete**" diyor: kayıtlı 41.407.027, kullanan 32.768.161, geçerli 31.528.783, katılma %79,14;
+  18 partinin ve bağımsızların oy sayıları **birebir** TÜİK ile aynı; sandalye: CHP 178,
+  AK PARTİ 363, BAĞIMSIZLAR 9, TÜRKİYE TOPLAMI 550. Uyuşmazlık: yok.
+- **İç tutarlılık (hesaplandı):** 18 parti + bağımsız oy toplamı = 31.528.783 (toplam geçerliye
+  tam eşit); sandalye toplamı 363+178+9 = 550 (`meclis`e tam eşit).
+- **`baraj: 10` ve `meclis: 550`** — [B] TÜİK Açıklama (PDF s. 14): "**1999, 2002, 2007 ve 2011**
+  yıllarında yapılan milletvekili seçimlerinde de 1995 yılı seçimindeki uygulamalar aynen devam
+  etmiştir." (1995 uygulaması: ülke barajlı (%10) d'Hondt, 550 milletvekili.)
+- **`tarih`: 3 Kasım 2002** — [B] TÜİK Ek-1 (PDF s. 277): "3 Kasım 2002".
+- **"Diğer" (partiSayisi 4, oy 572.842):** YP (Yurt Partisi) 294.909 + BTP (Bağımsız Türkiye
+  Partisi) 150.482 + MİLLET PARTİSİ 68.271 + TKP 59.180. Dördü de soyağacında yok ve dördünün de
+  oyu %1'in altında. Kısaltmaların açılımı [B] TÜİK "Simge ve Kısaltmalar" (PDF s. 7).
+  **GENÇ PARTİ** soyağacında yok ama oyu %7,25 olduğu için `ad:` ile ayrı satırda tutuldu.
+  **TKP** için soyağacındaki `tkp20` kullanılmadı: o kayıt 1920–1988 arası Türkiye Komünist
+  Partisi'nindir, 2002'de yarışan TKP ayrı bir tüzel kişiliktir.
+- **`not` cümlesi:** "seçime katılan 18 partiden yalnızca ikisi barajı aştı" — [B] TÜİK Tablo 1
+  (PDF s. 22): 2002 satırı "Ülke Barajlı d'Hondt Sistemi, **18** seçime katılan parti, **2**
+  Meclis'e giren parti (AK PARTİ, CHP)". "Tek başına iktidar": 363 > 550/2.
+- Erişim: 2026-09-23.
+
+### 2007-04-cb-tbmm (sonuçsuz süreç)
+
+- **[B] TBMM Tutanak Dergisi, Dönem 22, Cilt 155, 96. Birleşim (27.4.2007)**
+  (`www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/d22/c155/tbmm22155096.pdf`): Tasnif Komisyonu
+  tutanağı — "Cumhurbaşkanlığı seçimi için yapılan **birinci oylamada 361 milletvekili oy
+  kullanmış**…"; **Abdullah Gül: 357**, İptal 3, Boş 1, Toplam 361. Başkan: "Bu sonuca göre,
+  Cumhurbaşkanı seçimi için Anayasa'nın 102'nci maddesinde öngörülen **üçte 2 çoğunluğu
+  sağlanamamıştır**."
+- **[B] Anayasa Mahkemesi, E. 2007/45, K. 2007/54, Karar Günü 1/5/2007**
+  (Resmî Gazete 27.6.2007, `resmigazete.gov.tr/eskiler/2007/06/20070627-17.htm`): "SONUÇ —
+  Türkiye Büyük Millet Meclisi'nin eylemli içtüzük değişikliği niteliğinde olan **27.4.2007
+  günlü, 96. birleşiminde** alınan 11. Cumhurbaşkanı'nın seçiminde gözetilmesi gereken **toplantı
+  yeter sayısı** ile ilgili kararının Anayasa'ya aykırı olduğuna ve **İPTALİNE** … 1.5.2007
+  gününde karar verildi." (Ayrıca yürürlüğü durdurma kararı: E. 2007/45, K. 2007/21,
+  RG 3.5.2007.)
+- **[B] TBMM Tutanak Dergisi, Dönem 22, Cilt 156, 101. Birleşim (6.5.2007)**
+  (`…/d22/c156/tbmm22156101.pdf`): "Anayasa Mahkemesi, … 96'ncı Birleşiminde alınan 11'inci
+  Cumhurbaşkanı seçiminde gözetilmesi gereken toplantı yeter sayısıyla ilgili kararını, eylemli
+  İç Tüzük değişikliği niteliğinde görmüş ve Anayasaya aykırı bularak iptal etmiştir."; sonra
+  "birinci yoklamada **356**, ikinci yoklamada **358** sayın milletvekili bulunmaktadır. Bu
+  yoklamada da Cumhurbaşkanı seçimi için Anayasa Mahkemesi kararında öngörülen toplantı yeter
+  sayısı, yani, **367** bulunamadığından, … Cumhurbaşkanı seçimini yapamayacağız."
+- **[B] TBMM Kararı No. 891, 3/5/2007** (RG 3.5.2007 / 26511 mükerrer): "Türkiye Büyük Millet
+  Meclisi genel seçimlerinin yenilenmesine ve seçimin **22 Temmuz 2007 Pazar** günü yapılmasına,
+  … 98 inci Birleşiminde (458) kabul oyuyla karar verilmiştir." → süreç sonuçsuz kaldı, seçim
+  yenilendi.
+- **`turSayisi: 1`** — fiilen yalnızca **bir** oylama yapıldı (27 Nisan); 6 Mayıs'taki ikinci
+  oylama toplantı yeter sayısı sağlanamadığı için hiç yapılamadı. `secilen: null`.
+- Erişim: 2026-09-23.
+
+### 2007-07-genel
+
+- **[B] TÜİK Tablo 24 "TÜRKİYE"** (aynı sayfalar): kayıtlı 42.799.303, kullanılan 36.056.293
+  (katılım %84,2), geçerli oy 34.822.907, gümrük kapıları 226.784, **toplam geçerli oy
+  35.049.691**, milletvekili sayısı 550.
+  AK PARTİ 16.327.291 (%46,6) **341**, CHP 7.317.808 (%20,9) **112**, MHP 5.001.869 (%14,3)
+  **71**, DP 1.898.873 (%5,4), GENÇ PARTİ 1.064.871 (%3,0), SAADET PARTİSİ 820.289 (%2,3),
+  BTP 182.095 (%0,5), HYP 179.010 (%0,5), İP 128.148 (%0,4), ATP 100.982 (%0,3),
+  TKP 79.258 (%0,2), ÖDP 52.055 (%0,2), LDP 35.364 (%0,1), EMEP 26.292 (%0,1),
+  BAĞIMSIZ 1.835.486 (%5,2) **26**.
+- **İkinci kaynak [B]: YSK**, `…/docs/2007MilletvekiliSecimi/gumrukdahil/gumrukdahil.pdf`
+  (30/07/2007): kayıtlı 42.799.303, kullanan 36.056.293, geçerli 35.049.691, katılma %84,25;
+  14 partinin ve bağımsızların oy sayıları **birebir** TÜİK ile aynı.
+- **Uyuşmazlık — MHP'nin sandalye sayısı (çözüldü, TÜİK yazıldı):** YSK'nın
+  `…/turkiye/milletvekilisayisi.pdf` ve `…/turkiye/cevremilletvekilisayisi.pdf` belgeleri
+  (30/07/2007) CHP 112, **MHP 70**, AK PARTİ 341, BAĞIMSIZLAR 26, **TOPLAM 549** veriyor.
+  TÜİK Tablo 21 (PDF s. 41) ise Toplam 550 / MHP 71 veriyor ve **dipnotunda nedenini yazıyor**:
+  "2007 milletvekili genel seçiminde **550 milletvekili seçilmiştir**. Ancak **İstanbul'dan
+  seçilen MHP milletvekillerinden bir milletvekilinin ölümü nedeniyle** Meclis'te bulunan
+  milletvekili sayısı 549 olmuştur." TÜİK Tablo 21'de İstanbul MHP 7, YSK'nın çevre tablosunda
+  İstanbul (01)+(02)+(03) MHP 2+2+2 = 6 — fark tam olarak o bir sandalye. Spesifikasyon §8.1
+  "sandalyelerde toplamın meclis büyüklüğüne eşitliği belirleyicidir" kuralı gereği **TÜİK'in
+  550'ye tamamlanan dağılımı** yazıldı; iki kaynak çelişmiyor, farklı anları ölçüyor.
+- **İç tutarlılık (hesaplandı):** oy toplamı = 35.049.691 (toplam geçerliye tam eşit);
+  sandalye toplamı 341+112+71+26 = 550.
+- **`baraj: 10`, `meclis: 550`** — [B] TÜİK Açıklama s. 14 (yukarıda).
+- **`tarih`: 22 Temmuz 2007** — [B] TÜİK Ek-1 + [B] TBMM Kararı 891 (RG 3.5.2007/26511 mükerrer).
+- **"Diğer" (partiSayisi 4, oy 541.345):** BTP 182.095 + HYP (Halkın Yükselişi Partisi) 179.010 +
+  ATP (Aydınlık Türkiye Partisi) 100.982 + TKP 79.258 — dördü de soyağacında yok, dördü de %1'in
+  altında. GENÇ PARTİ (%3,0) soyağacında yok ama %1'in üstünde olduğu için ayrı satırda.
+  **DP → `dp07`**: soyağacındaki kayıt "Demokrat Parti, 2007 –, DYP'nin ad değişikliği".
+- **`not` cümlesi (DTP ve BBP'nin bağımsız aday yolu):**
+  - [B] TÜİK Tablo 1 (PDF s. 22): 2007'de seçime katılan **14** parti sayılıyor — DTP ve BBP bu
+    listede **yok**; Tablo 24'ün 2007 sütununda da bu iki partinin satırları boş.
+  - [B] TBMM Tutanak Dergisi D23 C1 B4 (20.8.2007) ve B6 (28.8.2007): 23. Dönem'de
+    "**DTP Grubu**" ve "DTP Grubu Başkanvekili" var, "(AK Parti ve **DTP sıralarından** alkışlar)".
+  - İkinci kaynak: **Erol TUNCER (TESAV Başkanı), "22 Temmuz 2007 Seçimleri: Genel Bir
+    Değerlendirme"** (`dergipark.org.tr/en/download/article-file/211086`): "BBP ve DTP ise
+    **bağımsız adaylar yoluyla TBMM'ye girmeyi** amaçladıkları için, seçime girmemiştir.";
+    "DTP'nin desteklediği bağımsız adaylardan **22'si milletvekili seçildi**… Diğer 21 milletvekili
+    ise yeniden DTP'ye katılarak partinin Meclis Grubunu oluşturdu."; "Seçime katılmayan BBP'nin
+    Genel Başkanı Muhsin Yazıcıoğlu Sivas'tan, 16 BBP'li aday ise değişik illerden bağımsız aday
+    oldular."
+  - Veriye yalnızca resmî bağımsız toplamı (1.835.486 oy, 26 sandalye) yazıldı; 26 sandalyenin
+    partilere dağılımı veriye **yazılmadı**. `ittifak` alanı spesifikasyon §5.2 gereği yalnızca
+    2018+ için olduğundan kullanılmadı.
+- Erişim: 2026-09-23.
+
+### 2007-08-cb-tbmm
+
+- **[B] TBMM Tutanak Dergisi, Dönem 23, Cilt 1, 6. Birleşim (28.8.2007)**
+  (`www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/d23/c001/tbmm23001006.pdf`): "Bir önceki birleşimde
+  yapılan ikinci oylamada sonuç alınamamıştı. Şimdi **üçüncü oylamayı** yapacağız."; Tasnif
+  Komisyonu tutanağı — "Cumhurbaşkanı seçimi için yapılan üçüncü oylamaya **448 üye** katılmış…":
+  Sabahattin Çakmakoğlu 70, **Abdullah Gül 339**, Hüseyin Tayfun İçli 13, Boş 24. Başkan:
+  "…Kayseri Milletvekili Sayın Abdullah Gül, Anayasa'nın 102'nci maddesinde üçüncü tur oylama
+  için öngörülen üye tam sayısının salt çoğunluğunu sağlamış ve **339 oyla Türkiye
+  Cumhuriyetinin 11'inci Cumhurbaşkanı seçilmiş** bulunmaktadır." Aynı birleşimin Danışma Kurulu
+  önerisi turların 20 / 24 / 28 Ağustos 2007 tarihlerini veriyor → `turSayisi: 3`.
+- **İkinci kaynak [B]: TBMM Kararı No. 898, Karar Tarihi 28/8/2007, Resmî Gazete 28.8.2007 /
+  26627 mükerrer** (`resmigazete.gov.tr/eskiler/2007/08/20070828M1-1.htm`): "Türkiye Büyük Millet
+  Meclisi Genel Kurulunun **28/8/2007 tarihli 6 ncı Birleşiminde**, Kayseri Milletvekili
+  Abdullah GÜL (**339**) oy ile Türkiye Cumhurbaşkanı seçilmiştir." Tarih, birleşim ve oy sayısı
+  birebir eşleşti. Uyuşmazlık: yok.
+- Erişim: 2026-09-23.
+
+### 2011-06-genel
+
+- **[B] TÜİK Tablo 24 "TÜRKİYE"** (aynı sayfalar): kayıtlı 52.806.322, kullanılan 43.914.948
+  (katılım %83,2), geçerli oy 42.813.896, gümrük kapıları 127.867, **toplam geçerli oy
+  42.941.763**, milletvekili sayısı 550.
+  AK PARTİ 21.399.082 (%49,8) **327**, CHP 11.155.972 (%26,0) **135**, MHP 5.585.513 (%13,0)
+  **53**, SAADET PARTİSİ 543.454 (%1,3), HAS PARTİ 329.723 (%0,8), BBP 323.251 (%0,8),
+  DP 279.480 (%0,7), HEPAR 124.415 (%0,3), DSP 108.089 (%0,3), DYP 64.607 (%0,2),
+  TKP 64.006 (%0,1), MİLLET PARTİSİ 60.716 (%0,1), MMP 36.188 (%0,1), EMEP 32.128 (%0,1),
+  LDP 15.222 (%0,0), BAĞIMSIZ 2.819.917 (%6,6) **35**.
+- **İkinci kaynak [B]: YSK**, `…/docs/2011MilletvekiliSecimi/gumrukdahil/gumrukdahil.pdf` ve
+  `…/turkiye/milletvekilisayisi.pdf` — künyeleri "**22 Haziran 2011 tarih ve 1070 sayılı YSK
+  Kararı / 23 Haziran 2011 tarih ve 27973 sayılı Resmi Gazete**": kayıtlı 52.806.322,
+  kullanan 43.914.948, geçerli 42.941.763, katılma %83,16; 15 partinin ve bağımsızların oyları
+  **birebir** TÜİK ile aynı; sandalye AK PARTİ 327, CHP 135, MHP 53, BAĞIMSIZLAR 35,
+  TÜRKİYE TOPLAMI 550. Uyuşmazlık: yok.
+- **İç tutarlılık (hesaplandı):** oy toplamı = 42.941.763; sandalye toplamı 327+135+53+35 = 550.
+- **"Diğer" (partiSayisi 5, oy 349.932):** HEPAR (Hak ve Eşitlik Partisi) 124.415 + TKP 64.006 +
+  DYP 64.607 + MİLLET PARTİSİ 60.716 + MMP (Milliyetçi ve Muhafazakâr Parti) 36.188.
+  **DYP neden "Diğer"de:** soyağacındaki `dyp` kaydı 1983–2007 arasını kapsıyor ve 2007'de
+  Demokrat Parti'ye (`dp07`) dönüştü; 2011 pusulasındaki Doğru Yol Partisi soyağacında yoktur ve
+  oyu %0,15'tir.
+- **`not` cümlesi (BDP'nin bağımsız aday yolu):** [B] TÜİK Tablo 1: 2011'de seçime katılan **15**
+  parti sayılıyor, BDP listede **yok**; [B] TÜİK/YSK: bağımsızlar 35 sandalye. İkinci kaynak —
+  **TEPAV Politika Notu N201143 (Haziran 2011), Türkmen Göksel & Yetkin Çınar, "12 Haziran 2011
+  Seçiminde Seçim Sisteminin Parlamento Yapısına Etkileri"**: "iki muhalefet partisi, CHP ile MHP
+  ve **BDP'nin desteklediği bağımsızların** yer bulabildiği mecliste, seçime katılan diğer
+  partiler … temsil olanağı bulamadılar." 35 sandalyenin partilere dağılımı veriye yazılmadı.
+- Erişim: 2026-09-23.
+
+### 2014-08-cb-halk
+
+- **[B] YSK Örnek: 416/D "Yurt içi, yurt dışı ve gümrük sandıkları dahil Cumhurbaşkanı seçim
+  sonucu"** (`…/docs/2014CB/2014CB-Kesin-416_d_Genel.xlsx`, `openpyxl` ile okundu):
+  kayıtlı seçmen **55.692.841**, oy kullanan **41.283.627**, geçerli oy **40.545.911**,
+  geçersiz 737.716, katılma oranı **%74,13**.
+  Recep Tayyip ERDOĞAN 21.000.143 (%51,79), Ekmeleddin Mehmet İHSANOĞLU 15.587.720 (%38,44),
+  Selahattin DEMİRTAŞ 3.958.048 (%9,76); GENEL TOPLAM 40.545.911.
+  **İç tutarlılık (hesaplandı):** 21.000.143 + 15.587.720 + 3.958.048 = 40.545.911, tam eşit.
+- **İkinci kaynak [B]: YSK Kararı 2014/3719, 15/08/2014**
+  (`…/docs/Kararlar/2014Pdf/2014-3719.pdf`): "10 Ağustos 2014 Pazar günü yapılan Cumhurbaşkanı
+  Seçimi kesin sonuçlarının tespitine … **geçerli oyların salt çoğunluğunu alan Recep Tayyip
+  ERDOĞAN'ın 12. Türkiye Cumhurbaşkanı seçildiğinin tespitine**"; aynı karar 416/A-B-C-D
+  cetvellerinin içeriğini madde madde tarif ediyor. Ayrıca **YSK Kararı 2014/3227 (10/7/2014,
+  RG 11.7.2014/29054)**: kesin aday listesi — İhsanoğlu, Erdoğan, Demirtaş (üç aday).
+- **Tek tur:** ikinci oylama 24 Ağustos 2014'e hazırlanmıştı ([B] YSK 2014/3227: "ilk oylamada
+  geçerli oyların salt çoğunluğu sağlanamadığı takdirde ikinci oylaması 24 Ağustos 2014") ama
+  salt çoğunluk ilk turda sağlandığı için yapılmadı → `turlar` dizisinde tek öğe.
+- **Adayların parti/destek bilgisi (iki kaynak):**
+  - [B] **YSK Kararı 2014/3579 (7/8/2014)**: AK Parti Genel Başkan Yardımcısı'nın dilekçesinde
+    "partilerinin pankartın sahibi adayı desteklemediği, **Cumhurbaşkanı adayı Başbakan Recep
+    Tayyip ERDOĞAN'ı desteklediğinin** her türlü izahtan vareste olduğu"; İhsanoğlu "**rakip
+    partilerin adayı**" olarak anılıyor. → Erdoğan = AK Parti adayı.
+  - İkinci kaynak (akademik): **Selçuk İletişim**, "2014 Cumhurbaşkanlığı Seçimindeki
+    Cumhurbaşkanı Adaylarının Karikatürlere Yansıması"
+    (`dergipark.org.tr/tr/download/article-file/178268`): "…tin Demirtaş, **MHP ve CHP'nin ortak
+    adayları ise, Ekmeleddin İhsanoğlu** olmuştur"; İngilizce özet: "…Erdoğan **for the Ak Party**,
+    Selahattin Demirtaş **for the HDP**, Ekmeleddin İhsanoğlu…"
+  - Üçüncü kaynak (akademik): **Bekir Berat Özipek, "Türkiye Siyasetinde 2014 Cumhurbaşkanlığı
+    Seçimi"** (`dergipark.org.tr/en/download/article-file/790586`): "…İhsanoğlu ve üçüncüsü de
+    **HDP adayı Selahattin Demirtaş**'tı."
+  - Veriye: Erdoğan `parti:"akp"`, Demirtaş `parti:"hdp"`, İhsanoğlu
+    `destek:"CHP ve MHP'nin ortak adayı"`.
+- Erişim: 2026-09-23.
+
+### 2015-06-genel
+
+- **[B] YSK, "Örnek: 96/D — Yurt içi, yurt dışı ve gümrük sandıkları dahil milletvekili genel
+  seçimi sonucu"** (`…/docs/Milletvekili/7Haziran2015/KesinSecimSonuclari/ResmiGazete/D.pdf`,
+  18/06/2015): kayıtlı **56.608.817**, oy kullanan **47.507.467**, geçerli **46.163.243**,
+  geçersiz 1.344.224, katılma **%83,92**.
+  AK PARTİ 18.867.411 (%40,87), CHP 11.518.139 (%24,95), MHP 7.520.006 (%16,29),
+  HDP 6.058.489 (%13,12), SAADET PARTİSİ 949.178 (%2,06), BAĞIMSIZLAR 488.226 (%1,06),
+  VATAN PARTİSİ 161.674 (%0,35), BTP 96.475 (%0,21), DSP 85.810 (%0,19), DP 75.784 (%0,16),
+  TOPLUMSAL UZLAŞMA REFORM VE KALKINMA PARTİSİ 72.701 (%0,16), HALKIN KURTULUŞ PARTİSİ
+  60.396 (%0,13), HAK VE ÖZGÜRLÜKLER PARTİSİ 58.716 (%0,13), DYP 28.852 (%0,06),
+  ANADOLU PARTİSİ 27.688 (%0,06), LDP 26.500 (%0,06), MERKEZ PARTİ 20.945 (%0,05),
+  MİLLET PARTİSİ 17.473 (%0,04), KOMÜNİST PARTİ 13.780 (%0,03), YURT PARTİSİ 9.289 (%0,02),
+  HAK VE ADALET PARTİSİ 5.711 (%0,01); GENEL TOPLAM 46.163.243.
+- **[B] YSK "Örnek: 96/E"** (`…/ResmiGazete/E.pdf`): MHP **80**, HDP **80**, CHP **132**,
+  AK PARTİ **258**, BAĞIMSIZLAR **0**, TÜRKİYE TOPLAMI **550**.
+- **İkinci kaynak: TÜİK Veri Portalı, "Milletvekili Genel Seçimi Sonuçları (1983-2018)"**
+  (`veriportali.tuik.gov.tr/api/tr/data/downloads?t=i&p=B%2B7BcTpVqmcAfR87BdvmFXicKhEH5TYNgOO…`,
+  sayfa `42_t4`, `xlrd` ile okundu; tablonun kaynağı "Yüksek Seçim Kurulu"):
+  7.6.2015 sütunu — kayıtlı 56.608.817, oy kullanan 47.507.467, katılım %83,9, geçerli
+  (yurt içi) 45.121.773, yurt dışı/gümrük 1.041.470, **toplam geçerli 46.163.243**,
+  milletvekili 550; AK PARTİ 18.867.411 / C 258, CHP 11.518.139 / C 132, MHP 7.520.006 / C 80,
+  HDP 6.058.489 / C 80, SAADET 949.178, VATAN 161.674, BTP 96.475, DSP 85.810, DP 75.784,
+  TURK Parti 72.701, HKP 60.396, HAK-PAR 58.716, DYP 28.852, ANADOLU 27.688, LDP 26.500,
+  MERKEZ 20.945, MİLLET P. 17.473, KOMÜNİST P. 13.780, YURT P. 9.289, HAK VE ADALET P. 5.711,
+  BAĞIMSIZLAR 488.226. **21 satırın tamamı birebir** eşleşti. Uyuşmazlık: yok.
+- **İç tutarlılık (hesaplandı):** oy toplamı = 46.163.243; sandalye toplamı 258+132+80+80 = 550.
+- **"Diğer" (partiSayisi 10, oy 384.338):** DYP 28.852 + BTP 96.475 + Hak ve Özgürlükler P.
+  58.716 + Komünist Parti 13.780 + Millet Partisi 17.473 + Hak ve Adalet Partisi 5.711 +
+  Merkez Parti 20.945 + Toplumsal Uzlaşma Reform ve Kalkınma Partisi 72.701 + Halkın Kurtuluş
+  Partisi 60.396 + Yurt Partisi 9.289 — onu da soyağacında yok ve onunun da oyu %1'in altında.
+- **`not` cümlesi:** HDP'nin **parti olarak** girip barajı aşması [B] YSK 96/D–E ile
+  (parti satırı + 80 sandalye) doğrudan kanıtlı; "hiçbir parti tek başına hükümet kuracak
+  çoğunluğu sağlayamadı" — AK PARTİ 258 < 276 ([B] YSK 96/E) ve ikinci kaynak Demirkol (2023),
+  s. 374: "1961-65, 1973-80, 1991-2002 ve **2015 Haziran-2015 Kasım genel seçimleri arası
+  dönemde hiçbir parti tek başına mecliste hükümet** [kuracak çoğunluğu elde edememiştir]".
+- **`baraj: 10`, `meclis: 550`** — [B] YSK 96/E (TÜRKİYE TOPLAMI 550) + [B] TÜİK xls
+  ("Milletvekili sayısı 550"); %10'luk ülke barajı 2839 sayılı Kanun'la 1983'ten beri
+  yürürlüktedir ([B] TÜİK Açıklama s. 13–14) ve 2015'te de uygulanmıştır — [B] YSK 96/D–E'de
+  %10'un altında kalan bütün partiler sandalyesizdir.
+- Erişim: 2026-09-23.
+
+### 2015-11-genel
+
+- **[B] YSK, "Örnek: 96/D"** (`…/docs/Milletvekili/1Kasim2015/KesinSecimSonuclari/96-D.pdf`,
+  11/11/2015): kayıtlı **56.949.009**, oy kullanan **48.537.695**, geçerli **47.840.231**,
+  geçersiz 697.464, katılma **%85,23**.
+  AK PARTİ 23.681.926 (%49,50), CHP 12.111.812 (%25,32), MHP 5.694.136 (%11,90),
+  HDP 5.148.085 (%10,76), SAADET PARTİSİ 325.978 (%0,68), BBP 253.204 (%0,53),
+  VATAN PARTİSİ 118.803 (%0,25), HAK VE ÖZGÜRLÜKLER PARTİSİ 108.583 (%0,23),
+  HALKIN KURTULUŞ PARTİSİ 83.057 (%0,17), DEMOKRAT PARTİ 69.319 (%0,14),
+  KOMÜNİST PARTİ 52.527 (%0,11), BAĞIMSIZLAR 51.038 (%0,11), BTP 49.297 (%0,10),
+  DSP 31.805 (%0,07), LDP 26.816 (%0,06), MİLLET PARTİSİ 19.714 (%0,04), DYP 14.131 (%0,03);
+  GENEL TOPLAM 47.840.231.
+- **[B] YSK "Örnek: 96/E"** (`…/96-E.pdf`): CHP **134**, MHP **40**, HDP **59**,
+  AK PARTİ **317**, BAĞIMSIZLAR **0**, TÜRKİYE TOPLAMI **550**.
+- **İkinci kaynak: TÜİK Veri Portalı "Milletvekili Genel Seçimi Sonuçları (1983-2018)"**,
+  1.11.2015 sütunu: kayıtlı 56.949.009, oy kullanan 48.537.695, katılım %85,2, geçerli
+  (yurt içi) 46.555.267, yurt dışı/gümrük 1.284.964, **toplam geçerli 47.840.231**,
+  milletvekili 550; AK PARTİ 23.681.926 / C 317, CHP 12.111.812 / C 134, HDP 5.148.085 / C 59,
+  MHP 5.694.136 / C 40, SAADET 325.978, BBP 253.204, VATAN 118.803, HAK-PAR 108.583,
+  HKP 83.057, DP 69.319, KOMÜNİST P. 52.527, BTP 49.297, DSP 31.805, LDP 26.816,
+  MİLLET P. 19.714, DYP 14.131, BAĞIMSIZLAR 51.038. **17 satırın tamamı birebir** eşleşti.
+  Uyuşmazlık: yok.
+- **İç tutarlılık (hesaplandı):** oy toplamı = 47.840.231; sandalye toplamı 317+134+59+40 = 550.
+- **"Diğer" (partiSayisi 6, oy 327.309):** Millet Partisi 19.714 + Hak ve Özgürlükler Partisi
+  108.583 + BTP 49.297 + Halkın Kurtuluş Partisi 83.057 + Komünist Parti 52.527 + DYP 14.131.
+- **`not` cümlesi (yenileme seçimi):** [B] Resmî Gazete 28.8.2015 / 29459 4. mükerrer, Başbakanlık
+  tezkeresi: "Türkiye Cumhuriyeti **Anayasasının 116 ncı maddesi uyarınca seçimlerin
+  yenilenmesine** dair ilgi (a) kararınızdan sonra, … **geçici Bakanlar Kurulunu** kurmak üzere
+  Başbakan olarak atanmış bulunmaktayım." + [B] YSK 96/E (AK PARTİ 317 > 276 → tek başına
+  iktidar).
+- Erişim: 2026-09-23.
+
+### Hükümetler 58-64
+
+**Ölçüt (dönem 6):** `baslangic` = Bakanlar Kurulu'nun atanmasına dair **Cumhurbaşkanlığı
+tezkeresinin tarihi** (Resmî Gazete'de yayımlanan "Bakanlar Kurulunun Atanmasına Dair İşlem");
+`bitis` = bir sonraki hükümetin aynı ölçüyle bulunan başlangıcı; `partiler` ve `tip` = aynı
+Resmî Gazete metnindeki Bakanlar Kurulu listesi ve tezkere başlıkları; `bitisNedeni` = Resmî
+Gazete'deki tezkere/TBMM kararı metinleri. 57. Hükümet'in bitişi (18.11.2002) ile 58'in
+başlangıcı **tam çakışıyor**, zincir boşluksuz.
+
+| No | Başbakan | RG tarihi/sayısı | Kaynak adresi |
+|---|---|---|---|
+| 58 | Abdullah Gül | 19.11.2002 / 24941 | `resmigazete.gov.tr/eskiler/2002/11/20021119.htm` |
+| 59 | R. Tayyip Erdoğan | 14.3.2003 / 25048 mükerrer | `…/2003/03/20030314M1.htm` |
+| 60 | R. Tayyip Erdoğan | 29.8.2007 / 26628 mükerrer | `…/2007/08/20070829M1-1.htm` |
+| 61 | R. Tayyip Erdoğan | 6.7.2011 / 27986 mükerrer | `…/2011/07/20110706M1-1.htm` |
+| 62 | Ahmet Davutoğlu | 29.8.2014 mükerrer | `…/2014/08/20140829M1-1.htm` |
+| 63 | Ahmet Davutoğlu | 28.8.2015 / 29459 4. mükerrer | `…/2015/08/20150828M4-1.htm` |
+| 64 | Ahmet Davutoğlu | 24.11.2015 mükerrer | `…/2015/11/20151124M1-1.htm` |
+| (65) | Binali Yıldırım | 24.5.2016 / 29721 mükerrer | `…/2016/05/20160524M1-1.pdf` (64'ün bitişi) |
+
+**[B] alıntılar (Resmî Gazete):**
+- **58 — başlangıç 18.11.2002:** Cumhurbaşkanlığı tezkeresi "**18 Kasım 2002**
+  B.01.0.KKB.01-08-3-2002-779 … Bakanlar Kurulu'nun **Kayseri Milletvekili Abdullah GÜL**
+  tarafından kurulması ilgi (a) yazımızla uygun görülmüştü. İlgi (b) yazınızla yapmış olduğunuz
+  öneri uygun bulunarak … onaylanmıştır." Bakanlar Kurulu listesinde başka parti etiketi yok.
+- **58 — bitiş nedeni `istifa`:** RG 12.3.2003, Başbakanlık tezkeresi (11 Mart 2003): "Yeni bir
+  hükümet kurulmasına imkan sağlamak için, başkanlığımda kurulmuş bulunan **58. Hükümetin
+  istifasının kabulünü** saygılarımla arz ederim. Abdullah GÜL"; Cumhurbaşkanlığı: "Bakanlar
+  Kurulu'nun **istifası kabul edilmiştir**… yeni Hükümet kuruluncaya kadar, göreve devam
+  edilmesini rica ederim." Aynı gün: "Bakanlar Kurulu'nun yeniden kurulması için … **Siirt
+  Milletvekili ve Adalet ve Kalkınma Partisi Genel Başkanı Sayın Recep Tayyip ERDOĞAN
+  görevlendirilmiştir**." (Erdoğan'ın Siirt milletvekilliği 9 Mart 2003 ara seçimindendir.)
+- **59 — başlangıç 14.3.2003:** "T.C. BAŞBAKANLIK … **14 Mart 2003** … Recep Tayyip ERDOĞAN
+  Başbakan — BAKANLAR KURULU LİSTESİ"; Cumhurbaşkanlığı tezkeresi aynı gün.
+- **59 — bitiş nedeni `erken-secim`:** [B] **TBMM Kararı 891 (3/5/2007, RG 3.5.2007/26511
+  mükerrer)**: "Türkiye Büyük Millet Meclisi genel seçimlerinin **yenilenmesine** ve seçimin
+  22 Temmuz 2007 Pazar günü yapılmasına … karar verilmiştir."
+- **60 — başlangıç 29.8.2007:** "29 Ağustos 2007 … İlgi yazınızla **yeniden kurulması** için
+  görevlendirildiğim Bakanlar Kurulunda… Recep Tayyip ERDOĞAN Başbakan"; Cumhurbaşkanlığı:
+  "Bakanlar Kurulu'nun **İstanbul Milletvekili ve Adalet ve Kalkınma Partisi Genel Başkanı**
+  Recep Tayyip ERDOĞAN tarafından kurulması…" Liste tek parti (AK Parti).
+- **60 — bitiş nedeni `secim`:** 61'in başlangıcı 6.7.2011, 12 Haziran 2011 genel seçiminin
+  ardından. 2011 seçimi için TBMM'nin bir **yenileme kararı yoktur**: Resmî Gazete'de 2010–2011
+  taramasında 891 sayılı karara benzer bir "seçimlerin yenilenmesine dair karar" bulunmadı ve
+  2007-10-referandumuyla milletvekili seçimleri dört yılda bire indirilmişti (22.7.2007 → yaklaşık
+  dört yıl sonra 12.6.2011) → olağan takvim, `secim`.
+- **61 — başlangıç 6.7.2011:** "B.02.0.PPG.0.12-300-01-7009 **6 Temmuz 2011** … Recep Tayyip
+  ERDOĞAN Başbakan — BAKANLAR KURULU LİSTESİ" (26 üyenin tamamı milletvekili); mükerrer RG'nin
+  kapağı: "**İstanbul Milletvekili ve Adalet ve Kalkınma Partisi Genel Başkanı** Recep Tayyip
+  ERDOĞAN Başkanlığında Kurulan Bakanlar Kurulunun Atanmasına Dair Tezkere".
+- **61 — bitiş nedeni `cumhurbaskani-secimi`:** [B] YSK Kararı 2014/3719: Erdoğan 10 Ağustos
+  2014'te 12. Cumhurbaşkanı seçildi; 62. Hükümet 29 Ağustos 2014'te kuruldu. İkinci kaynak:
+  Demirkol (2023), s. 374: "**Erdoğan'ın Cumhurbaşkanı seçilmesi ile AK Parti liderliğine geçen
+  Ahmet Davutoğlu 62. Hükümeti kurmuştur**."
+- **62 — başlangıç 29.8.2014:** "T.C. BAŞBAKANLIK **29 Ağustos 2014** … Ahmet DAVUTOĞLU
+  Başbakan — BAKANLAR KURULU LİSTESİ" (26 üye; mükerrer RG kapağı "…Adalet ve Kalkınma Partisi
+  Genel Başkanı Ahmet DAVUTOĞLU Başkanlığında Kurulan Bakanlar Kurulu").
+- **62 — bitiş nedeni `erken-secim`:** [B] RG 28.8.2015/29459 4. mükerrer, Başbakanlık tezkeresi:
+  "Türkiye Cumhuriyeti **Anayasasının 116 ncı maddesi uyarınca seçimlerin yenilenmesine** dair
+  ilgi (a) kararınızdan sonra, ilgi (b) yazınız ile **geçici Bakanlar Kurulunu** kurmak üzere
+  Başbakan olarak atanmış bulunmaktayım." İkinci kaynak: Demirkol (2023), s. 374: "**2015
+  Haziran-2015 Kasım genel seçimleri arası dönemde hiçbir parti tek başına mecliste hükümet**
+  [kuracak çoğunluğu elde edememiştir]". (62. Hükümet'in istifasına dair ayrı bir tezkere Resmî
+  Gazete'de yayımlanmamıştır — Temmuz–Ağustos 2015 tarandı.)
+- **63 — başlangıç 28.8.2015, `tip: koalisyon`, `partiler: [akp, hdp]`:**
+  [B] RG 28.8.2015/29459 4. mükerrer, **"GEÇİCİ BAKANLAR KURULUNUN ATANMASINA DAİR İŞLEM"**:
+  "Anayasanın **114 üncü maddesi** uyarınca; **Adalet, İçişleri ve Ulaştırma, Denizcilik ve
+  Haberleşme Bakanları bağımsızlardan** olmak üzere, geçici Bakanlar Kuruluna **siyasi parti
+  gruplarından oranlarına göre alınacak üye sayıları**, Türkiye Büyük Millet Meclisi Başkanı
+  tarafından tespit edilerek şahsıma bildirilmiştir. Bu çerçevede, geçici Bakanlar Kurulu üyeliği
+  için **partililere Bakanlık teklif edilmiş**; bu teklifi **kabul eden partililerden** ve teklif
+  edilen Bakanlığı **kabul etmeyen partililer yerine bağımsızlardan** olmak üzere … üyeler
+  belirlenmiştir." → kabinede birden fazla parti var (spesifikasyon §5.8 ölçütü: `koalisyon`).
+  Kabine başkanı [B] RG kapağına göre "Konya Milletvekili ve **Adalet ve Kalkınma Partisi Genel
+  Başkanı** Ahmet DAVUTOĞLU" → AK Parti.
+  **Hangi partiler bakan verdi:** ikinci kaynak **Demirkol (2023), s. 381**: "2015 yılında
+  kurulan seçim hükümetinde de **muhalefetteki CHP ve MHP 63. Hükümete bakan vermeyi reddettiği**
+  için atanmış bakan oranı %53,6 olmuştur." 25. Dönem TBMM'sinde grubu olan partiler [B] YSK
+  96/E'ye göre AK PARTİ, CHP, MHP ve HDP'dir; CHP ile MHP bakan vermediğine göre AK Parti dışında
+  bakan veren tek grup **HDP**'dir. Listede AK Parti dışından iki milletvekili bakan vardır:
+  **Kocaeli Milletvekili Ali Haydar KONCA** (Avrupa Birliği Bakanı) ve **İzmir Milletvekili
+  Müslüm DOĞAN** (Kalkınma Bakanı); [B] YSK "25. Dönem Milletvekili Genel Seçimi — Partilerin
+  Kazandığı Milletvekili Sayıları" (`…/7Haziran2015/2015-MV_dagilimlari.pdf`) Kocaeli'de HDP 1,
+  İzmir-1 ve İzmir-2'de HDP 1'er milletvekili gösteriyor.
+  **Sınırlılık:** bu iki bakanın HDP'li olduğunu *adıyla* söyleyen bir [B] belge bulunamadı;
+  `partiler: ["akp","hdp"]` yukarıdaki iki bağımsız kaynağın (RG metni + Demirkol) kapsayıcı
+  çıkarımına dayanıyor. Haber kaynakları kullanılmadı.
+- **63 — bitiş nedeni `erken-secim`:** 1 Kasım 2015 yenileme seçimi yapıldı ([B] YSK 96/D–E) ve
+  64. Hükümet 24 Kasım 2015'te kuruldu. Demirkol (2023) 63'ü "**2015 yılında kurulan seçim
+  hükümeti**" diye anıyor (s. 375, 381).
+- **64 — başlangıç 24.11.2015:** [B] RG 24.11.2015 mükerrer: "T.C. BAŞBAKANLIK **24 Kasım
+  2015** … Ahmet DAVUTOĞLU Başbakan — BAKANLAR KURULU LİSTESİ" (27 üyenin tamamı milletvekili,
+  mükerrer kapağı "…Adalet ve Kalkınma Partisi Genel Başkanı Ahmet DAVUTOĞLU"). `tip: tek-parti`
+  ([B] YSK 96/E: AK Parti 317/550 çoğunluk).
+- **64 — bitiş 24.5.2016, `bitisNedeni: null`:** [B] RG 24.5.2016/29721 mükerrer, "**İzmir
+  Milletvekili ve Adalet ve Kalkınma Partisi Genel Başkanı Binali YILDIRIM** Başkanlığında
+  Kurulan Bakanlar Kurulunun Atanmasına Dair Tezkere" → 65. hükümetin kuruluşu. 64. Hükümet'in
+  **istifasına dair bir tezkere Resmî Gazete'de yayımlanmamıştır** (Mayıs 2016'nın tamamı
+  tarandı) → bitiş nedeni doğrulanamadı, `null` bırakıldı (dönem 7'ye devredildi).
+
+**`tip` gerekçeleri (kabine bileşimi + meclis çoğunluğu):** 58–62 ve 64'te Bakanlar Kurulu
+listelerinde tek parti (AK Parti) var ve AK Parti'nin meclis çoğunluğu [B] seçim kayıtlarından
+geliyor (2002: 363/550, 2007: 341/550, 2011: 327/550, 2015 Kasım: 317/550) → `tek-parti`.
+63'te kabine çok partili → `koalisyon`.
+
+**İkinci kaynak (nitel alanlar, akademik):** Özhan DEMİRKOL, "1923'ten 2018'e Türkiye'de Hükümet
+ve Bakanlıklar", *Fiscaoeconomia* 7(1), 2023, s. 365-390
+(`dergipark.org.tr/en/download/article-file/2660114`): "**2002 yılında Abdullah Gül tarafından
+kurulan 58. Hükümet**, Adalet ve Kalkınma Partisi (AK Parti) lideri Recep Tayyip Erdoğan'ın
+**milletvekili olarak seçilmesi sonrası yerini Erdoğan liderliğindeki 59. Hükümete bırakmıştır**.
+Erdoğan'ın Cumhurbaşkanı seçilmesi ile AK Parti liderliğine geçen **Ahmet Davutoğlu 62. Hükümeti
+kurmuştur**." (s. 374); "En uzun süre görev yapan hükümet **1.629 gün ile 1. Erdoğan hükümeti
+(59. hükümet)**" (s. 375 — 14.3.2003'ten 29.8.2007'ye tam 1.629 gün vardır; hesaplandı,
+tarihlerin bağımsız doğrulaması); "2015 yılında kurulan **seçim hükümetinin (63. Hükümet)**"
+(s. 375).
+- Erişim: 2026-09-23.
+
+**Araç uyarısı — `cb-halk` adaylarında `parti` alanı kullanılamadı:** spesifikasyon §5.5 aday
+satırını `{ad:"…", parti:"akp", oy:…}` diye tanımlıyor ve `sandik-mantik.js` de `a.parti`
+varsa soyağacı bağı, yoksa `a.destek` metnini çiziyor. Ama `araclar/dogrula.js` (satır 40) aday
+satırlarını genel seçim `sonuc` satırlarıyla aynı işlevde denetlediği için `parti` ile `ad`ı aynı
+satırda görünce **hata** veriyor ("satırda hem parti hem ad"). Bu görevde yalnızca `veri/sandik.js`
+ve bu defter değiştirilebildiğinden, üç adayın tamamı `destek:` ile yazıldı ("AK Parti",
+"CHP ve MHP'nin ortak adayı", "HDP"); böylece `dogrula.js` "hata yok" diyor ama Erdoğan ve
+Demirtaş satırlarında soyağacı bağı (ve `cb-halk` kartının parti rengi) oluşmuyor. Çözüm
+`dogrula.js`'te tek satırlık bir düzeltmedir (aday satırlarını bu denetimden muaf tutmak) ve
+ayrı bir göreve bırakıldı.
+
+### 2004-03-yerel
+
+- **[B] YSK, "C-) Belediye Başkanlığı ve Belediye Meclisi Üyeliği Seçimleri"**
+  (`ysk.gov.tr/doc/dosyalar/docs/2004MahalliIdareler/belediyebsk/Belediyebsk.pdf`), künyesi:
+  "**Kaynak: 11 Mayıs 2004 tarih ve 2002 sayılı YSK Kararı / 12 Mayıs 2004 tarih ve 25460 sayılı
+  Resmi Gazete**". Belediye **meclis üyeliği** bölümü: kayıtlı seçmen **34.213.138**,
+  üyelik için oy kullanan **25.067.950** (katılma %73,270), **üyelik seçiminde geçerli oy
+  23.893.656**, seçimi yapılan üyelik 34.477.
+  AK PARTİ 9.635.145 (%40,325), CHP 4.912.313 (%20,559), MHP 2.500.601 (%10,466),
+  DYP 2.286.020 (%9,567), SOSYALDEMOKRAT HALK PARTİSİ 1.204.431 (%5,041),
+  SAADET PARTİSİ 1.111.017 (%4,650), ANAVATAN PARTİSİ 682.264 (%2,855),
+  GENÇ PARTİ 607.847 (%2,544), DEMOKRATİK SOL PARTİ 484.555 (%2,028),
+  BÜYÜK BİRLİK PARTİSİ 179.090 (%0,750), BAĞIMSIZ TÜRKİYE PARTİSİ 66.582 (%0,279),
+  YENİ TÜRKİYE PARTİSİ 56.912 (%0,238), BAĞIMSIZLAR 39.968 (%0,167),
+  İŞÇİ PARTİSİ 33.770 (%0,141), ÖZGÜRLÜK VE DAYANIŞMA PARTİSİ 29.269 (%0,122),
+  EMEĞİN PARTİSİ 28.011 (%0,117), MİLLET PARTİSİ 12.223 (%0,051),
+  TÜRKİYE KOMÜNİST PARTİSİ 12.139 (%0,051), AYDINLIK TÜRKİYE PARTİSİ 7.366 (%0,031),
+  DEMOKRAT PARTİ 3.742 (%0,016), LİBERAL DEMOKRAT PARTİ 391 (%0,002);
+  **T O P L A M 23.893.656**.
+- **İç tutarlılık (hesaplandı):** 20 parti + bağımsız oy toplamı = **23.893.656**, belgenin kendi
+  toplamına tam eşit.
+- **`ad:` ile yazılanlar:** *Sosyaldemokrat Halk Partisi* (2002'de kurulan SHP; soyağacındaki
+  `shp` kaydı 1985–1995 arası **Sosyaldemokrat Halkçı Parti**'nindir, ayrı tüzel kişilik) ve
+  *Genç Parti* — ikisinin de oyu %1'in üstünde olduğu için ayrı satırda.
+  **"Diğer" (partiSayisi 4, oy 98.310):** BTP 66.582 + Millet Partisi 12.223 + TKP 12.139 +
+  Aydınlık Türkiye Partisi 7.366.
+- **Büyükşehir — [B] TÜİK Mahalli İdareler Seçim Sonuçları Veri Tabanı**
+  (`biruni.tuik.gov.tr/secimdagitimapp/yerel.zul` → "Büyükşehir belediye başkanlığı / Belediye
+  sonucu / 2004 / Tüm iller"; üretilen rapor `rapory.tuik.gov.tr/...html`),
+  "Belediyelere göre 28 Mart 2004 Büyükşehir Belediye Başkanlığı Seçimi sonucu":
+  - **İstanbul** (geçerli 4.231.487): **AK PARTİ 1.917.577**, CHP 1.223.856, SAADET 228.615,
+    DYP 206.410, MHP 173.274, SHP 153.840, GENÇ P. 145.120 → AK Parti kazandı.
+  - **Ankara** (geçerli 1.636.633): **AK PARTİ 901.001**, SHP 341.231, CHP 206.630,
+    MHP 74.815, DYP 32.376 → AK Parti kazandı.
+  - **İzmir** (geçerli 1.192.541): **CHP 562.561**, AK PARTİ 388.336, GENÇ P. 71.671,
+    MHP 48.535, SHP 49.382 → CHP kazandı.
+  - **Çapraz doğrulama:** aynı raporun "Türkiye" satırı (kayıtlı 15.426.031, kullanan 10.891.703,
+    geçerli 10.468.870; AK PARTİ 4.822.636, CHP 2.560.382, SHP 769.187, DYP 565.626,
+    MHP 535.426, SAADET 423.014, GENÇ P. 317.128, DSP 237.509, ANAP 81.141, BBP 45.815,
+    BTP 28.487, İP 18.802, TKP 17.965, ATP 11.189, YTP 10.667, MP 6.512, BAĞIMSIZ 16.244,
+    EMEP 1.140) **[B] YSK "B-) Büyükşehir Belediyesi Başkanlığı Seçimi Sonucu"**
+    (`…/2004MahalliIdareler/buyuksehir/Buyuksehir.pdf`, aynı YSK kararı/RG künyesi) ile
+    **22 satırın tamamında birebir** aynıdır. YSK bu ölçüyü yalnızca ülke toplamı olarak,
+    TÜİK ise şehir şehir yayımlıyor.
+  - **Sınırlılık:** üç şehrin **şehir bazındaki** rakamlarını yayımlayan ikinci bir kurum
+    bulunamadı (YSK 2004 sayfasında sadece 8 dosya var, il kırılımı yok); yukarıdaki birebir
+    örtüşme aynı resmî veri kümesinin iki kurumca yayımlandığını gösteriyor.
+- **`tarih`: 28 Mart 2004** — [B] YSK belgesinin başlığı ve "1- Bu tesbitler, **28 Mart 2004
+  günü** sandık kurullarınca düzenlenip…" açıklaması.
+- Erişim: 2026-09-23.
+
+### 2009-03-yerel
+
+- **[B] YSK, "LİSTE - 4 / 29.03.2009 Genel Mahalli İdareler Seçim Sonucu — Belediye Meclisi
+  Üyeliği Seçimleri Sonucu"**
+  (`…/docs/2009MahalliIdareler/ResmiGazete/BelediyeMeclisUyeligi.pdf`):
+  kayıtlı seçmen (cezaevi seçmenleri dahil) **39.787.986**, oy kullanan **33.447.257**
+  (katılma %84,06), **geçerli oy 32.072.363**, seçimi yapılan üyelik 32.392.
+  AK PARTİ 12.237.325 (%38,16), CHP 7.966.710 (%24,84), MHP 5.336.695 (%16,64),
+  SAADET PARTİSİ 1.807.745 (%5,64), DEMOKRATİK TOPLUM PARTİSİ 1.687.733 (%5,26),
+  DEMOKRAT PARTİ 1.181.074 (%3,68), DEMOKRATİK SOL PARTİ 945.722 (%2,95),
+  BÜYÜK BİRLİK PARTİSİ 508.055 (%1,58), ANAVATAN PARTİSİ 202.976 (%0,63),
+  BAĞIMSIZ TÜRKİYE PARTİSİ 82.848 (%0,26), BAĞIMSIZ 43.633 (%0,14),
+  ÖZGÜRLÜK VE DAYANIŞMA PARTİSİ 25.557 (%0,08), EMEK PARTİSİ 21.100 (%0,07),
+  MİLLET PARTİSİ 6.685 (%0,02), HALKIN YÜKSELİŞİ PARTİSİ 5.566 (%0,02),
+  HAK VE ÖZGÜRLÜKLER PARTİSİ 4.618 (%0,01), TÜRKİYE KOMÜNİST PARTİSİ 3.409 (%0,01),
+  LİBERAL DEMOKRAT PARTİ 2.451 (%0,01), İŞÇİ PARTİSİ 2.258 (%0,01),
+  BARIŞ VE DEMOKRASİ PARTİSİ 203 (%0,00); **TOPLAM 32.072.363**.
+- **İç tutarlılık (hesaplandı):** oy toplamı = **32.072.363**, belgenin kendi toplamına tam eşit.
+- **"Diğer" (partiSayisi 5, oy 103.126):** BTP 82.848 + Millet Partisi 6.685 + HYP 5.566 +
+  Hak ve Özgürlükler Partisi 4.618 + TKP 3.409.
+- **Büyükşehir — iki kaynak:**
+  - **[B] YSK, "Büyükşehir Belediye Başkanlıklarının Siyasi Partilere Dağılımı (29 Mart 2009)"**
+    (`…/2009MahalliIdareler/SecimSonuclari/Buyuksehir.pdf`): İSTANBUL **AK PARTİ**,
+    ANKARA **AK PARTİ**, İZMİR **CHP** (tablo her il için tek bir "1" işareti koyuyor).
+  - **[B] TÜİK Mahalli İdareler Seçim Sonuçları Veri Tabanı**, "Belediyelere göre 29 Mart 2009
+    Büyükşehir Belediye Başkanlığı Seçimi sonucu": İstanbul (geçerli 6.946.435)
+    **AK PARTİ 3.105.555** > CHP 2.568.710; Ankara (geçerli 2.440.455) **AK PARTİ 940.230** >
+    CHP 763.879 > MHP 667.871; İzmir (geçerli 1.972.359) **CHP 1.107.562** > AK PARTİ 599.395.
+    Uyuşmazlık: yok.
+- Erişim: 2026-09-23.
+
+### 2014-03-yerel
+
+- **[B] YSK, "LİSTE-4 / 30 Mart 2014 Mahalli İdareler Genel Seçimi — Belediye Meclisi Üyeliği
+  Seçimleri Sonucu"** (`…/docs/2014MahalliIdareler/BelediyeMeclisUyeligi2014.pdf`):
+  kayıtlı seçmen (cezaevi seçmenleri dahil) **48.843.157**, oy kullanan **43.543.717**
+  (katılma %89,15), **geçerli oy 41.527.387**, seçimi yapılan üyelik 20.500.
+  AK PARTİ 17.802.976 (%42,87), CHP 10.938.262 (%26,34), MHP 7.399.119 (%17,82),
+  BARIŞ VE DEMOKRASİ PARTİSİ 1.729.297 (%4,16), SAADET PARTİSİ 1.180.322 (%2,84),
+  HALKLARIN DEMOKRATİK PARTİSİ 881.830 (%2,12), BÜYÜK BİRLİK PARTİSİ 628.729 (%1,51),
+  DEMOKRAT PARTİ 287.209 (%0,69), DEMOKRATİK SOL PARTİ 144.337 (%0,35),
+  İŞÇİ PARTİSİ 100.021 (%0,24), HÜR DAVA PARTİSİ 87.726 (%0,21),
+  BAĞIMSIZ TÜRKİYE PARTİSİ 82.768 (%0,20), TÜRKİYE KOMÜNİST PARTİSİ 60.298 (%0,15),
+  BAĞIMSIZ 49.594 (%0,12), ÖZGÜRLÜK VE DAYANIŞMA PARTİSİ 45.204 (%0,11),
+  HAK VE ÖZGÜRLÜKLER PARTİSİ 35.256 (%0,08), HAK VE EŞİTLİK PARTİSİ 34.125 (%0,08),
+  MİLLET PARTİSİ 15.068 (%0,04), DOĞRU YOL PARTİSİ 11.029 (%0,03),
+  LİBERAL DEMOKRAT PARTİ 9.122 (%0,02), YURT PARTİSİ 3.364 (%0,01),
+  TOPLUMSAL UZLAŞMA REFORM VE KALKINMA PARTİSİ 1.242 (%0,00), EMEK PARTİSİ 489 (%0,00);
+  ayrıca oy alamayan (0) beş parti (Alternatif Parti, Halkın Kurtuluş Partisi, Genç Parti,
+  Muhafazakâr Yükseliş Partisi). **TOPLAM 41.527.387**.
+- **İç tutarlılık (hesaplandı):** oy toplamı = **41.527.387**, belgenin kendi toplamına tam eşit.
+- **"Diğer" (partiSayisi 9, oy 330.876):** Hür Dava Partisi 87.726 + BTP 82.768 + TKP 60.298 +
+  Hak ve Özgürlükler Partisi 35.256 + Hak ve Eşitlik Partisi 34.125 + Millet Partisi 15.068 +
+  DYP 11.029 + Yurt Partisi 3.364 + Toplumsal Uzlaşma Reform ve Kalkınma Partisi 1.242
+  (oy almayan beş parti "Diğer"e sayılmadı, çünkü oyları sıfır).
+- **Büyükşehir — iki kaynak:**
+  - **[B] YSK, "30 Mart 2014 Mahalli İdareler Genel Seçimleri — Büyükşehir Belediye Başkanlığını
+    Kazanan Adaylar"** (`…/2014MahalliIdareler/Buyuksehir-KazananAdaylar.xlsx`):
+    "İSTANBUL | ADALET VE KALKINMA PARTİSİ | KADİR TOPBAŞ", "ANKARA | ADALET VE KALKINMA
+    PARTİSİ | İBRAHİM MELİH GÖKÇEK", "İZMİR | CUMHURİYET HALK PARTİSİ | AZİZ KOCAOĞLU".
+  - **[B] TÜİK Mahalli İdareler Seçim Sonuçları Veri Tabanı**, "Belediyelere göre 30 Mart 2014
+    Büyükşehir Belediye Başkanlığı Seçimi sonucu": İstanbul (geçerli 8.553.814)
+    **AK PARTİ 4.101.906** > CHP 3.428.454; Ankara (geçerli 3.162.112) **AK PARTİ 1.417.212** >
+    CHP 1.385.576 (fark 31.636); İzmir (geçerli 2.637.550) **CHP 1.308.134** > AK PARTİ 947.516.
+    Aynı raporun "Türkiye" satırı (kayıtlı 40.727.194, kullanan 36.440.968, geçerli 34.913.716;
+    AK PARTİ 15.898.025, CHP 10.835.876, MHP 4.764.833, BDP 1.079.026, HDP 817.494,
+    SAADET 579.231, BBP 248.169 …) **[B] YSK "LİSTE-2 Büyükşehir Belediye Başkanlığı Seçimleri
+    Sonucu"** ile birebir aynıdır. Uyuşmazlık: yok.
+  - **Ankara itirazı:** kayıttaki değer YSK'nın **kesinleşmiş** sonucudur (yukarıdaki "Kazanan
+    Adaylar" listesi); itiraz süreci kaynak belgelere yansımadığı için `not` alanına yazılmadı.
+- Erişim: 2026-09-23.
+
+**Yerel seçimlerde ikinci kaynak sorunu (2004, 2009, 2014) — açık uyarı:** ülke geneli
+**belediye meclisi** rakamlarının birincil kaynağı YSK'nın kesin sonuç ilanıdır (2004'te
+belgenin künyesinde YSK Kararı 2002 ve Resmî Gazete 12.5.2004/25460 yazılı; 2009 ve 2014
+belgeleri YSK'nın "ResmiGazete" klasöründen alınmıştır). Bu ölçüyü (belediye meclisi) ülke
+geneli olarak yayımlayan **YSK dışında bir kurum bulunamadı**: TÜİK'in Veri Portalı yalnızca
+İl Genel Meclisi tablolarını indirilebilir yapıyor, TÜİK'in Mahalli İdareler Veri Tabanı'nda
+belediye meclisi için ülke toplamı üreten bir rapor seçeneği yok (yalnızca il/ilçe ve belediye
+kırılımı; "Bölge sonucu" yalnızca 2014–2024). Yapılan doğrulama, her üç belgenin **kendi parti
+satırlarının toplamının belgenin kendi "TOPLAM" satırına tam eşit** olmasıdır (üçünde de fark
+sıfır). Büyükşehir ölçüsünde ise TÜİK ile YSK'nın ülke toplamları **birebir** örtüşüyor
+(2004 ve 2014 için satır satır doğrulandı), yani iki kurum aynı resmî veriyi yayımlıyor.
+
+### 2007-10-referandum
+
+- **[B] YSK, "Anayasa Değişikliği Halkoylaması Sonuç Tutanağı", 30/10/2007**
+  (`…/docs/2007Referandum/Sonuc/sonuc.pdf`): ülke geneli sandık seçmen listesine kayıtlı
+  (gümrük dahil) **42.690.252**, halkoylamasına katılanlar **28.819.319** (katılma **%67,51**),
+  geçerli oyların toplamı **28.167.661**, **evet 19.422.714** (%68,95),
+  **hayır 8.744.947** (%31,05). Metin: "21/10/2007 Pazar günü **5678 sayılı kanunla yapılan
+  Anayasa Değişikliğinin** halkoylamasına sunulması sonucu ülke genelinde geçerli oyların
+  yarısından çoğunun (%68.95) **EVET** olduğu tespit edilmiş…" → `karar: "kabul"`.
+- **İkinci kaynak — [B] YSK il tablosu + gümrük tablosu, toplamı hesaplandı:**
+  `…/2007Referandum/iller/turkiye.pdf` (81 ilin satırı; belgenin kendi TOPLAM satırı: kayıtlı
+  42.665.149, katılan 28.794.216, geçerli 28.142.781, evet 19.403.987, hayır 8.738.794 — 81 il
+  satırının betikle toplamı bu satıra **tam eşit**) ve `…/2007Referandum/Gumruk/gumruk.pdf`
+  (9 gümrük kapısı, TOPLAM: 25.103 / 25.103 / 24.880 / evet 18.727 / hayır 6.153).
+  **İl + gümrük toplamları ulusal tutanağın beş rakamını da tam veriyor:**
+  42.665.149+25.103 = 42.690.252; 28.794.216+25.103 = 28.819.319;
+  28.142.781+24.880 = 28.167.661; 19.403.987+18.727 = 19.422.714;
+  8.738.794+6.153 = 8.744.947. Uyuşmazlık: yok.
+- **`konu` alanı — [B] 5678 sayılı Kanun** (RG 16.6.2007): "Türkiye Cumhuriyeti Anayasasının
+  Bazı Maddelerinde Değişiklik Yapılması Hakkında Kanun"; MADDE 1 Anayasa'nın 77. maddesindeki
+  "beş" ibaresini "dört" yapıyor, değişik MADDE 101 "Cumhurbaşkanı … **halk tarafından
+  seçilir**" diyor.
+- **`not` — sayıların kapsamı:** ulusal tutanağın "kayıtlı" satırı **gümrük kapıları dahildir**
+  (tutanakta açıkça "(Gümrük Dahil)" yazıyor) ve yukarıdaki toplama bunu doğruluyor.
+- **`tutumlar` yazılmadı:** partilerin evet/hayır tutumlarını iki kaynakla doğrulayacak bir
+  tarama bu turda yapılamadı; spesifikasyon §5.4 "tutumu kaynaklarla doğrulanamayan parti
+  listeye hiç yazılmaz" gereği alan boş bırakıldı (Görev 12'ye devredildi).
+- Erişim: 2026-09-23.
+
+### 2010-09-referandum
+
+- **[B] YSK, "Anayasa Değişikliklerinin Halkoylaması Sonuç Tutanağı", 22.09.2010**
+  (`…/docs/2010Referandum/KesinSonuc/Sonuc.pdf`): ülke geneli sandık seçmen listesine kayıtlı
+  **52.051.828**, halkoylamasına katılanlar **38.369.099** (katılma **%73,71**), geçerli oyların
+  toplamı **37.644.037**, **evet 21.787.244** (%57,88), **hayır 15.856.793** (%42,12).
+  Metin: "**07.05.2010 tarih ve 5982 sayılı Kanun** ile Türkiye Cumhuriyeti Anayasasının bazı
+  maddelerinde yapılan değişikliklerin … 12/09/2010 Pazar günü yapılan halkoylaması sonucu,
+  Ülke geneli geçerli oyların yarısından çoğunun 21.787.244 EVET oyu (%57,88) olarak
+  gerçekleştiği, **Anayasa Değişikliklerinin Türk Milleti adına kabul edilmiş** olduğu…"
+  → `karar: "kabul"`. Tutanağın notu: "**Gümrük Kapıları ve Ceza İnfaz Kurumlarında kullanılan
+  oylar dahil edilmiştir.**"
+- **İkinci kaynak — [B] YSK il tablosu + gümrük tablosu, toplamı hesaplandı:**
+  `…/2010Referandum/KesinSonuc/ilSonuclari.pdf` (81 il; belgenin TOPLAM satırı kayıtlı
+  49.495.493, katılan 38.172.800, geçerli 37.449.300, evet 21.667.427, hayır 15.781.873 — 81 il
+  satırının betikle toplamı bu satıra **tam eşit**) ve `…/KesinSonuc/Gumruk.pdf`
+  (39 gümrük kapısı; TOPLAM katılan 196.299, geçerli 194.737, geçersiz 1.562, evet 119.817,
+  hayır 74.920; **NOT: "YURTDIŞI SEÇMEN KÜTÜĞÜNE KAYITLI SEÇMEN SAYISI 2.556.335'DİR."**).
+  **Toplamlar ulusal tutanağı tam veriyor:** 49.495.493 + 2.556.335 = **52.051.828**;
+  38.172.800 + 196.299 = **38.369.099**; 37.449.300 + 194.737 = **37.644.037**;
+  21.667.427 + 119.817 = **21.787.244**; 15.781.873 + 74.920 = **15.856.793**.
+  Uyuşmazlık: yok.
+- **`not` — sayıların kapsamı:** `kayitli` yurt dışı seçmen kütüğündeki 2.556.335 seçmeni de
+  içeriyor; bu seçmenler yalnızca gümrük kapılarında oy kullanabildiği için katılım oranı
+  buna göre okunmalıdır.
+- **`konu`:** [B] tutanaktaki ifade (5982 sayılı Kanun'la Anayasa'nın bazı maddelerinde yapılan
+  değişiklikler).
+- **`tutumlar` yazılmadı** (2007 kaydındaki gerekçeyle aynı).
+- Erişim: 2026-09-23.
+
+### 2003 Siirt seçimi — eklenmedi (Görev 12'ye devredildi)
+
+- **Bulunanlar:** [B] Resmî Gazete 12.3.2003, Cumhurbaşkanlığı tezkeresi: "Bakanlar Kurulu'nun
+  yeniden kurulması için … **Siirt Milletvekili** ve Adalet ve Kalkınma Partisi Genel Başkanı
+  Sayın **Recep Tayyip ERDOĞAN** görevlendirilmiştir." → Erdoğan'ın Siirt milletvekilliği
+  resmî olarak doğrulandı. [B] Resmî Gazete 12.3.2003 künye satırı: "**11/3/2003 Tarihli ve
+  25045 Mükerrer sayılı Resmî Gazete'de, 212 sayılı Yüksek Seçim Kurulu Kararı
+  yayımlanmıştır.**"
+- **Bulunamayanlar:** seçimin **günü/ayı**, **seçim çevresi başına sandalye sayısı** ve
+  **sonucu** hiçbir okunabilir resmî belgede bulunamadı. 11.3.2003 mükerrer Resmî Gazete
+  (`resmigazete.gov.tr/eskiler/2003/03/20030311M1.htm`) yalnızca **taranmış görüntülerden**
+  (`20030311M1-1.gif`, `20030311M1-2.gif`) oluşuyor, metin katmanı yok; YSK'nın karar arşivinde
+  `Kararlar/2003Pdf/2003-212.pdf` adresi PDF döndürmüyor; YSK'nın "Ara Seçim Arşivi" sayfası
+  yalnızca 2009 ve sonrasındaki **mahalli idareler** ara seçimlerini listeliyor.
+- Bu yüzden `2003-03-ara` kaydı **eklenmedi**. Bir sonraki turda denenecekler: 11.3.2003
+  mükerrer RG görüntülerinin OCR'ı; TBMM 22. Dönem tutanaklarında yeni Siirt milletvekillerinin
+  andiçme birleşimi; YSK'nın karar arama motoru (`ysk.gov.tr/tr/ysk-kararlari/1524`).
+- Erişim: 2026-09-23.
diff --git a/veri/sandik.js b/veri/sandik.js
index d243a79..0060576 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -363,21 +363,108 @@ window.SANDIK = {
     { id: "1999-04-yerel", tur: "yerel", tarih: "1999-04-18",
       olcu: "belediye-meclisi",
       kayitli: null, kullanilan: null, gecerli: null,
       sonuc: [ { parti: "fp", oy: null }, { parti: "anap", oy: null }, { parti: "dsp", oy: null }, { parti: "mhp93", oy: null }, { parti: "chp92", oy: null }, { parti: "dyp", oy: null }, { parti: "hadep", oy: null }, { parti: "bbp", oy: null }, { parti: "dtp97", oy: null }, { parti: "odp", oy: null }, { ad: "Millet Partisi", oy: null }, { ad: "Barış Partisi", oy: null }, { parti: "dp92", oy: null }, { parti: "emep", oy: null }, { parti: "ldp", oy: null }, { parti: "ip92", oy: null }, { ad: "Yeniden Doğuş Partisi", oy: null }, { ad: "Demokrasi ve Barış Partisi", oy: null }, { ad: "Değişen Türkiye Partisi", oy: null }, { ad: "Sosyalist İktidar Partisi", oy: null }, { parti: "dehap", oy: null }, { ad: "Bağımsız", oy: null } ],
       buyuksehir: { istanbul: { parti: "fp" }, ankara: { parti: "fp" }, izmir: { parti: "dsp" } },
       not: "Genel seçimle aynı gün yapıldı; YSK'nın belediye meclisi tablosunda dört il (Hatay, Hakkâri, Trabzon, Tunceli) hiç yer almadığı için ülke geneli sayılar hesaplanamadı ve null bırakıldı." },
 
     // kaynak: araclar/kaynak-defteri.md#2000-05-cb-tbmm
     { id: "2000-05-cb-tbmm", tur: "cb-tbmm", tarih: "2000-05-05",
       secilen: "Ahmet Necdet Sezer", turSayisi: 3,
-      not: "Anayasa Mahkemesi Başkanı olan Sezer, 533 üyenin katıldığı üçüncü turda 330 oyla 10. Cumhurbaşkanı seçildi; andiçme töreni 16 Mayıs 2000'de yapıldı." }
+      not: "Anayasa Mahkemesi Başkanı olan Sezer, 533 üyenin katıldığı üçüncü turda 330 oyla 10. Cumhurbaşkanı seçildi; andiçme töreni 16 Mayıs 2000'de yapıldı." },
+
+    // --- dönem 6 (2001 – 2015) ---
+
+    // kaynak: araclar/kaynak-defteri.md#2002-11-genel
+    { id: "2002-11-genel", tur: "genel", tarih: "2002-11-03", tekParti: false,
+      meclis: 550, kayitli: 41407027, kullanilan: 32768161, gecerli: 31528783, baraj: 10,
+      sonuc: [ { parti: "akp", oy: 10808229, sandalye: 363 }, { parti: "chp92", oy: 6113352, sandalye: 178 }, { parti: "dyp", oy: 3008942, sandalye: 0 }, { parti: "mhp93", oy: 2635787, sandalye: 0 }, { ad: "Genç Parti", oy: 2285598, sandalye: 0 }, { parti: "dehap", oy: 1960660, sandalye: 0 }, { parti: "anap", oy: 1618465, sandalye: 0 }, { parti: "sp", oy: 785489, sandalye: 0 }, { parti: "dsp", oy: 384009, sandalye: 0 }, { parti: "ytp02", oy: 363869, sandalye: 0 }, { parti: "bbp", oy: 322093, sandalye: 0 }, { parti: "ip92", oy: 159843, sandalye: 0 }, { parti: "odp", oy: 106023, sandalye: 0 }, { parti: "ldp", oy: 89331, sandalye: 0 }, { ad: "Diğer", partiSayisi: 4, oy: 572842, sandalye: 0 }, { ad: "Bağımsız", oy: 314251, sandalye: 9 } ],
+      not: "Seçime katılan 18 partiden yalnızca ikisi %10'luk ülke barajını aşabildi ve AK Parti ilk seçiminde tek başına iktidar oldu; sayılar il ve gümrük kapısı oylarının toplamıdır." },
+
+    // kaynak: araclar/kaynak-defteri.md#2004-03-yerel
+    { id: "2004-03-yerel", tur: "yerel", tarih: "2004-03-28",
+      olcu: "belediye-meclisi",
+      kayitli: 34213138, kullanilan: 25067950, gecerli: 23893656,
+      sonuc: [ { parti: "akp", oy: 9635145 }, { parti: "chp92", oy: 4912313 }, { parti: "mhp93", oy: 2500601 }, { parti: "dyp", oy: 2286020 }, { ad: "Sosyaldemokrat Halk Partisi", oy: 1204431 }, { parti: "sp", oy: 1111017 }, { parti: "anap", oy: 682264 }, { ad: "Genç Parti", oy: 607847 }, { parti: "dsp", oy: 484555 }, { parti: "bbp", oy: 179090 }, { parti: "ytp02", oy: 56912 }, { parti: "ip92", oy: 33770 }, { parti: "odp", oy: 29269 }, { parti: "emep", oy: 28011 }, { parti: "dp92", oy: 3742 }, { parti: "ldp", oy: 391 }, { ad: "Diğer", partiSayisi: 4, oy: 98310 }, { ad: "Bağımsız", oy: 39968 } ],
+      buyuksehir: { istanbul: { parti: "akp" }, ankara: { parti: "akp" }, izmir: { parti: "chp92" } },
+      not: "AK Parti'nin ilk yerel seçiminde belediye meclisi oylarının %40'ını aldığı bu seçimde 3.193 belediye başkanlığı ve 34.477 meclis üyeliği için oy verildi." },
+
+    // kaynak: araclar/kaynak-defteri.md#2007-04-cb-tbmm
+    { id: "2007-04-cb-tbmm", tur: "cb-tbmm", tarih: "2007-04-27",
+      secilen: null, turSayisi: 1,
+      not: "361 üyenin katıldığı ilk turda Abdullah Gül 357 oy aldı ama Anayasa Mahkemesi 1 Mayıs 2007'de bu birleşimin toplantı yeter sayısı kararını iptal edince 6 Mayıs'ta 367 nisabı sağlanamadı ve süreç sonuçsuz kaldı." },
+
+    // kaynak: araclar/kaynak-defteri.md#2007-07-genel
+    { id: "2007-07-genel", tur: "genel", tarih: "2007-07-22", tekParti: false,
+      meclis: 550, kayitli: 42799303, kullanilan: 36056293, gecerli: 35049691, baraj: 10,
+      sonuc: [ { parti: "akp", oy: 16327291, sandalye: 341 }, { parti: "chp92", oy: 7317808, sandalye: 112 }, { parti: "mhp93", oy: 5001869, sandalye: 71 }, { parti: "dp07", oy: 1898873, sandalye: 0 }, { ad: "Genç Parti", oy: 1064871, sandalye: 0 }, { parti: "sp", oy: 820289, sandalye: 0 }, { parti: "ip92", oy: 128148, sandalye: 0 }, { parti: "odp", oy: 52055, sandalye: 0 }, { parti: "ldp", oy: 35364, sandalye: 0 }, { parti: "emep", oy: 26292, sandalye: 0 }, { ad: "Diğer", partiSayisi: 4, oy: 541345, sandalye: 0 }, { ad: "Bağımsız", oy: 1835486, sandalye: 26 } ],
+      not: "891 sayılı TBMM kararıyla 22 Temmuz 2007'ye alınan bu yenileme seçimine DTP ile BBP parti olarak girmeyip destekledikleri bağımsız adaylarla meclise girdi; sayılar il ve gümrük kapısı oylarının toplamıdır." },
+
+    // kaynak: araclar/kaynak-defteri.md#2007-08-cb-tbmm
+    { id: "2007-08-cb-tbmm", tur: "cb-tbmm", tarih: "2007-08-28",
+      secilen: "Abdullah Gül", turSayisi: 3,
+      not: "Yeni seçilen 23. Dönem Meclisi'nde 448 üyenin katıldığı üçüncü turda Gül 339 oyla 11. Cumhurbaşkanı seçildi." },
+
+    // kaynak: araclar/kaynak-defteri.md#2007-10-referandum
+    { id: "2007-10-referandum", tur: "referandum", tarih: "2007-10-21",
+      konu: "5678 sayılı Kanunla Anayasa'da yapılan ve cumhurbaşkanının halk tarafından seçilmesini, milletvekili seçim döneminin beş yıldan dört yıla inmesini öngören değişiklikler.",
+      kayitli: 42690252, kullanilan: 28819319, gecerli: 28167661,
+      evet: 19422714, hayir: 8744947, karar: "kabul",
+      not: "Kayıtlı seçmen ve oy sayıları gümrük kapılarında kullanılan oyları da içeriyor." },
+
+    // kaynak: araclar/kaynak-defteri.md#2009-03-yerel
+    { id: "2009-03-yerel", tur: "yerel", tarih: "2009-03-29",
+      olcu: "belediye-meclisi",
+      kayitli: 39787986, kullanilan: 33447257, gecerli: 32072363,
+      sonuc: [ { parti: "akp", oy: 12237325 }, { parti: "chp92", oy: 7966710 }, { parti: "mhp93", oy: 5336695 }, { parti: "sp", oy: 1807745 }, { parti: "dtp", oy: 1687733 }, { parti: "dp07", oy: 1181074 }, { parti: "dsp", oy: 945722 }, { parti: "bbp", oy: 508055 }, { parti: "anap", oy: 202976 }, { parti: "odp", oy: 25557 }, { parti: "emep", oy: 21100 }, { parti: "ldp", oy: 2451 }, { parti: "ip92", oy: 2258 }, { parti: "bdp", oy: 203 }, { ad: "Diğer", partiSayisi: 5, oy: 103126 }, { ad: "Bağımsız", oy: 43633 } ],
+      buyuksehir: { istanbul: { parti: "akp" }, ankara: { parti: "akp" }, izmir: { parti: "chp92" } },
+      not: "Kayıtlı seçmen sayısı cezaevi seçmenlerini de içeriyor; 32.392 belediye meclisi üyeliği için oy verildi." },
+
+    // kaynak: araclar/kaynak-defteri.md#2010-09-referandum
+    { id: "2010-09-referandum", tur: "referandum", tarih: "2010-09-12",
+      konu: "7 Mayıs 2010 tarihli 5982 sayılı Kanunla Türkiye Cumhuriyeti Anayasası'nın bazı maddelerinde yapılan değişiklikler.",
+      kayitli: 52051828, kullanilan: 38369099, gecerli: 37644037,
+      evet: 21787244, hayir: 15856793, karar: "kabul",
+      not: "Sayılara gümrük kapıları ve ceza infaz kurumlarında kullanılan oylar dahildir; kayıtlı seçmen sayısı yalnızca gümrük kapılarında oy kullanabilen 2.556.335 yurt dışı seçmeni de içeriyor." },
+
+    // kaynak: araclar/kaynak-defteri.md#2011-06-genel
+    { id: "2011-06-genel", tur: "genel", tarih: "2011-06-12", tekParti: false,
+      meclis: 550, kayitli: 52806322, kullanilan: 43914948, gecerli: 42941763, baraj: 10,
+      sonuc: [ { parti: "akp", oy: 21399082, sandalye: 327 }, { parti: "chp92", oy: 11155972, sandalye: 135 }, { parti: "mhp93", oy: 5585513, sandalye: 53 }, { parti: "sp", oy: 543454, sandalye: 0 }, { parti: "has", oy: 329723, sandalye: 0 }, { parti: "bbp", oy: 323251, sandalye: 0 }, { parti: "dp07", oy: 279480, sandalye: 0 }, { parti: "dsp", oy: 108089, sandalye: 0 }, { parti: "emep", oy: 32128, sandalye: 0 }, { parti: "ldp", oy: 15222, sandalye: 0 }, { ad: "Diğer", partiSayisi: 5, oy: 349932, sandalye: 0 }, { ad: "Bağımsız", oy: 2819917, sandalye: 35 } ],
+      not: "Parti olarak seçime girmeyen BDP'nin desteklediği bağımsız adaylar meclise girdi ve AK Parti üst üste üçüncü kez tek başına iktidar oldu; sayılar il ve gümrük kapısı oylarının toplamıdır." },
+
+    // kaynak: araclar/kaynak-defteri.md#2014-03-yerel
+    { id: "2014-03-yerel", tur: "yerel", tarih: "2014-03-30",
+      olcu: "belediye-meclisi",
+      kayitli: 48843157, kullanilan: 43543717, gecerli: 41527387,
+      sonuc: [ { parti: "akp", oy: 17802976 }, { parti: "chp92", oy: 10938262 }, { parti: "mhp93", oy: 7399119 }, { parti: "bdp", oy: 1729297 }, { parti: "sp", oy: 1180322 }, { parti: "hdp", oy: 881830 }, { parti: "bbp", oy: 628729 }, { parti: "dp07", oy: 287209 }, { parti: "dsp", oy: 144337 }, { parti: "ip92", oy: 100021 }, { parti: "odp", oy: 45204 }, { parti: "ldp", oy: 9122 }, { parti: "emep", oy: 489 }, { ad: "Diğer", partiSayisi: 9, oy: 330876 }, { ad: "Bağımsız", oy: 49594 } ],
+      buyuksehir: { istanbul: { parti: "akp" }, ankara: { parti: "akp" }, izmir: { parti: "chp92" } },
+      not: "Büyükşehir belediye başkanlığı seçimi bu kez 16 yerine 30 ilde yapıldı ve 20.500 belediye meclisi üyeliği için oy verildi; kayıtlı seçmen sayısı cezaevi seçmenlerini de içeriyor." },
+
+    // kaynak: araclar/kaynak-defteri.md#2014-08-cb-halk
+    { id: "2014-08-cb-halk", tur: "cb-halk", tarih: "2014-08-10",
+      turlar: [ { tarih: "2014-08-10", kayitli: 55692841, kullanilan: 41283627, gecerli: 40545911,
+        adaylar: [ { ad: "Recep Tayyip Erdoğan", destek: "AK Parti", oy: 21000143 }, { ad: "Ekmeleddin Mehmet İhsanoğlu", destek: "CHP ve MHP'nin ortak adayı", oy: 15587720 }, { ad: "Selahattin Demirtaş", destek: "HDP", oy: 3958048 } ] } ],
+      secilen: "Recep Tayyip Erdoğan",
+      not: "Cumhurbaşkanının ilk kez halk tarafından seçildiği bu seçimde Erdoğan geçerli oyların salt çoğunluğunu ilk turda aldığı için 24 Ağustos'a hazırlanan ikinci tura gerek kalmadı." },
+
+    // kaynak: araclar/kaynak-defteri.md#2015-06-genel
+    { id: "2015-06-genel", tur: "genel", tarih: "2015-06-07", tekParti: false,
+      meclis: 550, kayitli: 56608817, kullanilan: 47507467, gecerli: 46163243, baraj: 10,
+      sonuc: [ { parti: "akp", oy: 18867411, sandalye: 258 }, { parti: "chp92", oy: 11518139, sandalye: 132 }, { parti: "mhp93", oy: 7520006, sandalye: 80 }, { parti: "hdp", oy: 6058489, sandalye: 80 }, { parti: "sp", oy: 949178, sandalye: 0 }, { parti: "vatan", oy: 161674, sandalye: 0 }, { parti: "dsp", oy: 85810, sandalye: 0 }, { parti: "dp07", oy: 75784, sandalye: 0 }, { parti: "anadolu", oy: 27688, sandalye: 0 }, { parti: "ldp", oy: 26500, sandalye: 0 }, { ad: "Diğer", partiSayisi: 10, oy: 384338, sandalye: 0 }, { ad: "Bağımsız", oy: 488226, sandalye: 0 } ],
+      not: "HDP'nin ilk kez parti olarak girip barajı aştığı bu seçimde hiçbir parti tek başına hükümet kuracak çoğunluğu sağlayamadı; sayılar yurt içi, yurt dışı ve gümrük sandıklarının toplamıdır." },
+
+    // kaynak: araclar/kaynak-defteri.md#2015-11-genel
+    { id: "2015-11-genel", tur: "genel", tarih: "2015-11-01", tekParti: false,
+      meclis: 550, kayitli: 56949009, kullanilan: 48537695, gecerli: 47840231, baraj: 10,
+      sonuc: [ { parti: "akp", oy: 23681926, sandalye: 317 }, { parti: "chp92", oy: 12111812, sandalye: 134 }, { parti: "hdp", oy: 5148085, sandalye: 59 }, { parti: "mhp93", oy: 5694136, sandalye: 40 }, { parti: "sp", oy: 325978, sandalye: 0 }, { parti: "bbp", oy: 253204, sandalye: 0 }, { parti: "vatan", oy: 118803, sandalye: 0 }, { parti: "dp07", oy: 69319, sandalye: 0 }, { parti: "dsp", oy: 31805, sandalye: 0 }, { parti: "ldp", oy: 26816, sandalye: 0 }, { ad: "Diğer", partiSayisi: 6, oy: 327309, sandalye: 0 }, { ad: "Bağımsız", oy: 51038, sandalye: 0 } ],
+      not: "Anayasa'nın 116. maddesi uyarınca alınan yenileme kararıyla yapılan bu seçimde AK Parti yeniden tek başına iktidar oldu; sayılar yurt içi, yurt dışı ve gümrük sandıklarının toplamıdır." }
   ],
 
   hukumetler: [
     // --- dönem 0 (1923 – 1945) ---
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-1
     { no: 1, basbakan: "İsmet İnönü", partiler: ["chp23"],
       baslangic: "1923-10-30", bitis: "1924-03-06", tip: "tek-parti", bitisNedeni: null,
       not: null },
 
@@ -664,13 +751,51 @@ window.SANDIK = {
       not: "ANAP–DSP–DTP koalisyon protokolüyle kurulan üç partili azınlık hükümeti; güvenoylamasıyla düşürüldü." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
     { no: 56, basbakan: "Bülent Ecevit", partiler: ["dsp"],
       baslangic: "1999-01-11", bitis: "1999-05-28", tip: "azinlik", bitisNedeni: "erken-secim",
       not: "ANAP ile DYP'nin dışarıdan destek verdiği DSP azınlık hükümeti; öne alınan 18 Nisan 1999 genel ve yerel seçimlerini yaptırmak üzere kuruldu." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
     { no: 57, basbakan: "Bülent Ecevit", partiler: ["dsp", "mhp93", "anap"],
       baslangic: "1999-05-28", bitis: "2002-11-18", tip: "koalisyon", bitisNedeni: "erken-secim",
-      not: "DSP–MHP–ANAP koalisyonu; 21. Dönem Meclisi'nin erken seçim kararıyla 3 Kasım 2002'de yapılan genel seçimin ardından sona erdi." }
+      not: "DSP–MHP–ANAP koalisyonu; 21. Dönem Meclisi'nin erken seçim kararıyla 3 Kasım 2002'de yapılan genel seçimin ardından sona erdi." },
+
+
+    // --- dönem 6 (2001 – 2015) ---
+
+    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
+    { no: 58, basbakan: "Abdullah Gül", partiler: ["akp"],
+      baslangic: "2002-11-18", bitis: "2003-03-14", tip: "tek-parti", bitisNedeni: "istifa",
+      not: "3 Kasım 2002 seçiminden sonra AK Parti'nin kurduğu ilk hükümet; Recep Tayyip Erdoğan'ın milletvekili seçilmesiyle yeni bir hükümete imkân sağlamak için 11 Mart 2003'te istifa etti." },
+
+    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
+    { no: 59, basbakan: "Recep Tayyip Erdoğan", partiler: ["akp"],
+      baslangic: "2003-03-14", bitis: "2007-08-29", tip: "tek-parti", bitisNedeni: "erken-secim",
+      not: "Siirt ara seçimiyle milletvekili olan Erdoğan'ın kurduğu hükümet, 891 sayılı TBMM kararıyla 22 Temmuz 2007'ye alınan yenileme seçiminin ardından sona erdi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
+    { no: 60, basbakan: "Recep Tayyip Erdoğan", partiler: ["akp"],
+      baslangic: "2007-08-29", bitis: "2011-07-06", tip: "tek-parti", bitisNedeni: "secim",
+      not: "22 Temmuz 2007 seçiminin ardından kurulan ikinci Erdoğan hükümeti, 12 Haziran 2011 genel seçimiyle sona erdi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
+    { no: 61, basbakan: "Recep Tayyip Erdoğan", partiler: ["akp"],
+      baslangic: "2011-07-06", bitis: "2014-08-29", tip: "tek-parti", bitisNedeni: "cumhurbaskani-secimi",
+      not: "Erdoğan'ın 10 Ağustos 2014'te halk tarafından cumhurbaşkanı seçilmesinin ardından sona erdi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
+    { no: 62, basbakan: "Ahmet Davutoğlu", partiler: ["akp"],
+      baslangic: "2014-08-29", bitis: "2015-08-28", tip: "tek-parti", bitisNedeni: "erken-secim",
+      not: "Erdoğan'ın cumhurbaşkanı seçilmesiyle AK Parti genel başkanlığına gelen Davutoğlu'nun kurduğu hükümet, 7 Haziran 2015 seçiminden sonra hükümet kurulamayınca alınan seçim yenileme kararının ardından yerini geçici seçim hükümetine bıraktı." },
+
+    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
+    { no: 63, basbakan: "Ahmet Davutoğlu", partiler: ["akp", "hdp"],
+      baslangic: "2015-08-28", bitis: "2015-11-24", tip: "koalisyon", bitisNedeni: "erken-secim",
+      not: "Anayasa'nın 114. maddesine göre kurulan ve Adalet, İçişleri ile Ulaştırma bakanlıkları bağımsızlara verilen geçici seçim hükümeti, 1 Kasım 2015 yenileme seçiminin ardından görevi bıraktı." },
+
+    // kaynak: araclar/kaynak-defteri.md#hükümetler-58-64
+    { no: 64, basbakan: "Ahmet Davutoğlu", partiler: ["akp"],
+      baslangic: "2015-11-24", bitis: "2016-05-24", tip: "tek-parti", bitisNedeni: null,
+      not: "1 Kasım 2015 seçiminden sonra kurulan hükümet; görevi 24 Mayıs 2016'da kurulan 65. hükümete devretti." }
   ]
 };
```
