# İnceleme paketi: task-9-d4-fix1 (1fd18a1..3af6141)

## Commitler
```
3af6141 Düzeltme: dönem 4 — referandum kaynakları ve yerel seçim toplamları
```
## Özet
```
 araclar/kaynak-defteri.md | 148 ++++++++++++++++++++++++++++++++++++++++++++++
 veri/sandik.js            |  22 +++----
 2 files changed, 159 insertions(+), 11 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index 1c2f8e0..043f4fb 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -1954,10 +1954,158 @@ başlangıç tarihiydi, düzeltildi** (aşağıya bakın).
     buyurulunca, 47'nci Türkiye Cumhuriyeti Hükümeti teşekkül etti." → `bitisNedeni:
     "cumhurbaskani-secimi"` [B] doğrudan (bu aynı zamanda 1989-10-cb-tbmm kaydının ikinci bir
     doğrulaması niteliğinde).
 - **`tip` (kullanıcı kararı 2026-09-22 ölçütü — kabine bileşimi):** 45, 46, 47 hepsi tek parti
   (ANAP) kabine. 1983 seçiminde ANAP 211/399 (%52,9), 1987 seçiminde ANAP 292/450 (%64,9) — ikisi
   de meclis çoğunluğu → `tip: "tek-parti"` (üçü için de; 47'nin döneminde araya yeni seçim
   girmediği için 1987'nin çoğunluğu geçerli).
 - **47'nin `bitisNedeni`:** bu turda araştırılmadı (23 Haziran 1991 tarihi dönem 5'in kapsamına
   daha yakın) — null bırakıldı, dönem 5 uygulayıcısına not düşüldü.
 - Erişim: 2026-09-22.
+
+---
+
+## Düzeltme turu 1 (2026-09-22) — controller incelemesi sonrası (SPEC ❌ → düzeltildi)
+
+İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d4-verdict.md`. Bulgular:
+**Critical #1** (1987/1988 referandumlarının [B] kaynaksız olması), **Critical #2** (1984/1989
+yerel ulusal toplamların ikinci kaynaksız kalması), **Important** (Adana kırılımı, 1988 katılım
+yüzdesi, büyükşehir ikinci kaynağı). Aşağıda her biri ayrı ayrı ele alınıyor.
+
+### Critical #1 — 1987-09-referandum ve 1988-09-referandum: [B] YSK kaynağı bulundu
+
+Önceki turda yalnızca haber siteleri + akademik makaleler kullanılmıştı ([B] değil). Bu turda
+**YSK Halkoylaması Arşivi** (`ysk.gov.tr/tr/halkoylamasi-arsivi/2648`) tarayıcıyla açılıp
+(ilk turda denenmemişti — bu bir eksiklikti) "İncele" bağlantılarının gerçek PDF adresleri DOM'dan
+okundu:
+
+- **[B] 6 Eylül 1987:** `https://www.ysk.gov.tr/doc/dosyalar/docs/1987Referandum/
+  6-Eylul-1987-Halkoylamas%C4%B1.pdf` — 67 ilin tam tablosu (SANDIK SAYISI, SANDIK SEÇMEN
+  LİSTESİNDE KAYITLI OLANLARIN SAYISI, KATILANLARIN SAYISI, GEÇERSİZ OY, GEÇERLİ OY, EVET, HAYIR)
+  + ayrı bir "GÜMRÜK TOPLAM" satırı (sandık 45, seçmen/katılan 253.725, geçersiz 8.817, geçerli
+  244.908, evet 106.044, hayır 138.864). `pdftotext -raw` ile okunup `araclar/topla.js` ile
+  hesaplandı: 67 il toplamı kayıtlı 25.841.905, kullanılan 24.183.096, geçerli 23.102.948, evet
+  11.605.417, hayır 11.497.531. **İl toplamı + gümrük toplamı** = kayıtlı 26.095.630, kullanılan
+  24.436.821, geçerli 23.347.856, evet 11.711.461, hayır 11.636.395 — bu, önceki turda ikinci
+  kaynak olarak kullanılan bianet.org rakamlarıyla (kullanılan, geçerli, evet, hayır) **birebir**
+  eşleşti (4 ayrı sayının aynı anda tesadüfen eşleşmesi mümkün değil — YSK'nın resmî basın
+  bültenindeki toplamın il+gümrük dahil olduğunu doğruluyor). `kayitli` alanı da artık [B]
+  kaynaklı: 26.095.630 (önceki turda hiçbir kaynakta bulunamamıştı).
+  - Uyuşmazlık: yok (evet+hayır=geçerli tam eşit: 11.711.461+11.636.395=23.347.856; geçerli+
+    geçersiz=katılan tam eşit).
+  - İkinci kaynak (artık doğrulama amaçlı): bianet.org + 2 akademik makale (Karadeniz 2018,
+    Yavaşça 2023) — hepsi [B]'nin ürettiği rakamlarla birebir tutarlı.
+- **[B] 25 Eylül 1988:** `https://www.ysk.gov.tr/doc/dosyalar/docs/1988Referandum/
+  25-Eylul-1988-Halk-Oylamas%C4%B1.pdf` — aynı biçimde 67 il + ayrı "GÜMRÜK SONUÇLARI" sayfası
+  (4 gümrük kapısı: Ankara-Esenboğa, Edirne-Kapıkule, İstanbul-Atatürk, İzmir-Adnan Menderes).
+  `topla.js` ile yalnızca **67 il toplamı** (gümrük hariç) hesaplandı: kayıtlı 26.739.227,
+  kullanılan 23.750.873, geçersiz 793.995, geçerli 22.956.878, evet 8.034.933, hayır 14.921.945.
+  Katılım oranı = 23.750.873/26.739.227 = **%88,82** — bu, iki bağımsız akademik kaynağın
+  (Yavaşça 2023, Karadeniz 2018) verdiği "%88,82" rakamıyla **virgülden sonra iki hane dahil
+  birebir** eşleşti. Gümrük dahil edilseydi oran %88,84 çıkıyordu (akademik kaynaklarla
+  uyuşmuyor) — bu yüzden 1988 için **il toplamı (gümrüksüz)** esas alındı; 1987'de tam tersi
+  (gümrük dahil rakam bianet'le eşleşiyordu) — YSK'nın iki referandumun resmî basın bültenini
+  farklı kapsamda hazırlamış olabileceği değerlendirildi, her ikisi de kendi ikinci kaynağıyla
+  birebir eşleştiği için ayrı ayrı kabul edildi.
+  - Uyuşmazlık: yok (evet+hayır=geçerli tam eşit: 8.034.933+14.921.945=22.956.878).
+- Bu değişiklikle 1988 referandumunun katılım bilgisi artık `not`taki düz metin yerine gerçek
+  `kayitli`/`kullanilan` sayılarından otomatik hesaplanıyor (kart artık `—` değil gerçek yüzde
+  gösteriyor) — Important bulgusu (katılımYuzde) böylece aşıldı, ayrı bir alan eklemeye gerek
+  kalmadı.
+- Erişim: 2026-09-22.
+
+### Critical #2 — 1984-03-yerel ve 1989-03-yerel: ulusal toplam ikinci kaynaksız kaldığı için null
+
+Bağımsız, aynı ölçüyü (belediye meclisi) veren ikinci bir ulusal kaynak aranmaya devam edildi:
+TÜİK'in aynı "Mahallî İdareler Seçimi Sonuçları" yayınının kendi açıklama sayfası ("Bu yayında
+beş tablo yer almaktadır") incelendi — **belediye meclisi için hiçbir "Türkiye toplamı" tablosu
+yok**, yalnızca Tablo 1 (İl Genel Meclisi) için RG kaynaklı ulusal toplam var; bu, DİE'nin bu
+ölçü için hiç ulusal toplam yayımlamadığını gösteriyor. Ayrıca denendi: "1980 Askeri
+Müdahalesinden Mahalli Seçimlere (1984 Mahalli İdareler Seçimleri Üzerine Bir Değerlendirme)"
+(dergipark, Akademi Sosyal Bilimler Dergisi) — bu makale yalnızca **belediye başkanlığı**
+(9.999.065 toplam oy, ANAP 4.323.420) ve **büyükşehir belediye başkanlığı** ulusal toplamlarını
+veriyor, **belediye meclisi** için vermiyor — farklı bir ölçü olduğundan kullanılamadı. "1984
+Yerel Seçimleri" (ResearchGate), "GENEL SEÇİMLER-YEREL SEÇİMLER İLİŞKİSİ" (acarindex) ve
+"1973'ten Günümüze Yerel Seçim Sonuçları..." (dergipark) denendi — sırasıyla erişim engeli
+(403), erişilemeyen/bozuk dosya ve boş metin çıkışı verdi.
+- **Karar (controller talimatı gereği, koşulsuz uygulandı):** `1984-03-yerel` ve `1989-03-yerel`
+  kayıtlarının `kayitli`, `kullanilan`, `gecerli` ve bütün `sonuc[].oy` alanları **null** yapıldı.
+  Hangi partilerin seçime katıldığı (`parti`/`ad` alanları) korundu — bu bilgi [B] YSK
+  kaynağından geliyor ve sayısal bir "eşleşme" gerektirmiyor. `sonuc` dizisindeki "Diğer" ve
+  "Adana" ile ilgili özel satırlar da kaldırıldı (anlamsız hale geldiler — bkz. aşağıdaki Adana
+  maddesi).
+- Bu iki kaydın YSK il tablosundan `topla.js` ile hesaplanmış (ama artık siteye yazılmayan) ham
+  değerleri ileride bir ikinci kaynak bulunursa kullanılmak üzere burada saklanıyor:
+  - 1984: kayıtlı 11.981.906, kullanılan 10.499.457, geçerli 9.923.877 (parti oyları toplamına
+    göre); ANAP 4.219.115, SODEP 2.314.738, DYP 1.163.110, HP 778.033, MDP 544.385, RP 479.977,
+    Bağımsız 110.474, "Diğer/Adana" 314.045.
+  - 1989: kayıtlı 18.091.625, kullanılan 14.067.380, geçerli 13.241.347; ANAP 3.112.613, DSP
+    890.507, DYP 3.138.260, MÇP 445.065, RP 1.196.876, SHP 4.368.018, Bağımsız 20.543,
+    "Diğer" (IDP) 69.465.
+- Erişim: 2026-09-22.
+
+### Important — 1984-03-yerel Adana ili kırılımı: artık ayrıca sorun değil
+
+Critical #2'nin çözümüyle (bütün `sonuc[].oy` alanları null) Adana'nın bozuk parti kırılımı
+sorunu da otomatik olarak ortadan kalktı — hiçbir partinin ulusal `oy` değeri artık Adana'nın
+eksik/yanlış payını içermiyor. Adana'nın kendi SANDIK/SEÇMEN/OY KULLANAN/GEÇERLİ sütunları
+(1.288/422.333/361.328/336.078) hâlâ tutarlı görünüyor ama bu ayrıntı artık siteye hiç
+yazılmıyor.
+
+### Important — 1988-09-referandum katılım yüzdesi
+
+Critical #1'in çözümüyle (gerçek `kayitli`/`kullanilan` sayıları eklendi) bu bulgu da otomatik
+çözüldü — `katilimYuzde` alanına ayrıca gerek kalmadı, katılım oranı artık ham sayılardan
+hesaplanıyor (%88,82).
+
+### Important — 1984/1989 büyükşehir: ikinci kaynak arandı, altısından beşi doğrulandı
+
+**1984 (üçü de doğrulandı, [B] YSK + haber arşivi ikinci kaynak):**
+- İstanbul: euronews.com, "Son 35 yılda İstanbul seçimlerinde en fazla oyu İmamoğlu aldı"
+  (`tr.euronews.com/2019/06/24/...`) — "1984 seçimlerinde Anavatan adayı Bedrettin Dalan yüzde
+  49,69 ile en fazla oyu almıştı." YSK hesabı: 939.190/1.890.000=%49,69 — **birebir**.
+- Ankara: yeniankara.com.tr, "Ankara'nın ilk Büyükşehir Belediye Başkanı: Mehmet Altınsoy"
+  (`yeniankara.com.tr/ankara/...-118679`) — "Mehmet Altınsoy... Ankara'da 391 bin 975 oy alarak
+  yüzde 53,17'lik bir oranla seçimi kazandı." YSK: 391.975 oy (**birebir aynı sayı**), oran
+  %53,16 — eşleşti (tolerans içinde).
+- İzmir: ensonhaber.com, "Burhan Özfatura hayatını kaybetti" (`ensonhaber.com/burhan-ozfatura-
+  hayatini-kaybetti-...-h1567378`) — "Özfatura... 1984 yerel seçimlerinde yüzde 47,9 oy alarak
+  İzmir Büyükşehir Belediye Başkanlığına seçildi." YSK: 279.456/582.779=%47,96 — eşleşti
+  (tolerans içinde).
+
+**1989 (İstanbul ve İzmir doğrulandı, Ankara doğrulanamadı):**
+- İstanbul: dunya.com köşe yazısı, "1989 ve 1994'te İstanbul belediye seçimlerinde yaşanan iki
+  sürpriz" (`dunya.com/kose-yazisi/...-438457`) — "SHP adayı Nurettin Sözen yüzde 35.95 oyla
+  seçimi kazanırken, ANAP adayı Dalan yüzde 26.12, DYP adayı Vural Arıkan yüzde 13.86, DSP adayı
+  Mukbil Zırtıloğlu yüzde 12,22 ve Refah adayı Bahri Zengin yüzde 10.48 oy aldı." YSK'nın 5
+  partisiyle (SHP %35,95, ANAP %26,12, DYP %13,86, DSP %12,22, RP %10,48) **birebir, 5 sayının
+  tamamında** eşleşti. (Not: euronews.com'un aynı konudaki başka bir yazısı yanlışlıkla "%39,95"
+  yazmış — dunya.com ve YSK'nın 5 partilik tam eşleşmesi karşısında bu tek, izole, muhtemelen
+  yazım hatası olan rakam reddedildi.)
+- İzmir: Nedim Yalansız, "İzmir'de 1989 Yerel Seçimleri", *Tarih Okulu Dergisi*
+  (`dergipark.org.tr/tr/download/article-file/144651`, dipnot 50: `www.tuik.gov.tr`) —
+  "Büyükşehir Belediye Başkanlığı Seçiminde 698.389 geçerli oyun, 365980'ini SHP(%52,4),
+  169672'sini ANAP(%24,2), 97183'ünü DYP(%13,9), 39186'sını DSP(%5,6), 18815'ini RP(2,6)
+  alıyordu." YSK ile **6 sayının tamamında birebir** eşleşti (geçerli oy + 5 parti).
+- **Ankara: ikinci kaynak bulunamadı.** Murat Karayalçın'ın (SHP) kazandığı [B] YSK kaynağından
+  kesin ama oy sayısı/yüzdesi hiçbir haber arşivi, akademik makale ya da ansiklopedi sayfasında
+  (Hürriyet, Bilkent tez deposu, Vikipedi hariç taranan onlarca kaynak) bulunamadı. **Bu yüzden
+  `1989-03-yerel` kaydının `buyuksehir` alanından `ankara` satırı kaldırıldı**, yalnızca
+  `istanbul` ve `izmir` kaldı; `not` alanında Ankara'nın da SHP'de kaldığı [B] kaynağa dayanarak
+  (ama sayısız) belirtildi.
+- Erişim: 2026-09-22.
+
+### Testler ve denetim (düzeltme turu 1)
+
+```
+$ node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
+...
+ℹ tests 55
+ℹ pass 55
+ℹ fail 0
+...
+uyarı: — sayısı: yerel bant 4: 20
+uyarı: — sayısı: referandum bant 4: 0
+...
+hata yok
+```
+(Tam çıktı rapor dosyasında.)
diff --git a/veri/sandik.js b/veri/sandik.js
index 9a43d9a..ddfebef 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -279,54 +279,54 @@ window.SANDIK = {
 
     // kaynak: araclar/kaynak-defteri.md#1983-11-genel
     { id: "1983-11-genel", tur: "genel", tarih: "1983-11-06", tekParti: false,
       meclis: 399, kayitli: 19767366, kullanilan: 18238362, gecerli: 17351510, baraj: 10,
       sonuc: [ { parti: "anap", oy: 7833148, sandalye: 211 }, { parti: "hp83", oy: 5285804, sandalye: 117 }, { ad: "Milliyetçi Demokrasi Partisi", oy: 4036970, sandalye: 71 }, { ad: "Bağımsız", oy: 195588, sandalye: 0 } ],
       not: "12 Eylül sonrası ilk genel seçim; yalnızca askeri yönetimin izin verdiği 3 parti (ANAP, HP, MDP) katılabildi." },
 
     // kaynak: araclar/kaynak-defteri.md#1984-03-yerel
     { id: "1984-03-yerel", tur: "yerel", tarih: "1984-03-25",
       olcu: "belediye-meclisi",
-      kayitli: 11981906, kullanilan: 10499457, gecerli: 9923877,
-      sonuc: [ { parti: "anap", oy: 4219115 }, { parti: "sodep", oy: 2314738 }, { parti: "dyp", oy: 1163110 }, { parti: "hp83", oy: 778033 }, { ad: "Milliyetçi Demokrasi Partisi", oy: 544385 }, { parti: "rp", oy: 479977 }, { ad: "Diğer", partiSayisi: null, oy: 314045 }, { ad: "Bağımsız", oy: 110474 } ],
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [ { parti: "anap", oy: null }, { parti: "sodep", oy: null }, { parti: "dyp", oy: null }, { parti: "hp83", oy: null }, { ad: "Milliyetçi Demokrasi Partisi", oy: null }, { parti: "rp", oy: null }, { ad: "Bağımsız", oy: null } ],
       buyuksehir: { istanbul: { parti: "anap" }, ankara: { parti: "anap" }, izmir: { parti: "anap" } },
-      not: "12 Eylül sonrası ilk yerel seçim; Adana ilinin parti kırılımı kaynak YSK tablosunda iç tutarsız olduğundan 'Diğer' satırına dahil edildi." },
+      not: "12 Eylül sonrası ilk yerel seçim. Ülke geneli belediye meclisi oy toplamı YSK'nın il tablosundan script ile hesaplanabildi ama bağımsız, aynı ölçüyü veren ikinci bir ulusal kaynak bulunamadığından (ayrıca Adana ilinin parti kırılımı kaynakta iç tutarsızdı) sayılar null bırakıldı; hangi partilerin katıldığı biliniyor." },
 
     // kaynak: araclar/kaynak-defteri.md#1987-09-referandum
     { id: "1987-09-referandum", tur: "referandum", tarih: "1987-09-06",
       konu: "1982 Anayasası'nın geçici 4. maddesiyle getirilen, eski parti liderlerine yönelik 5-10 yıllık siyasi yasakların kaldırılması",
-      kayitli: null, kullanilan: 24436821, gecerli: 23347856,
+      kayitli: 26095630, kullanilan: 24436821, gecerli: 23347856,
       evet: 11711461, hayir: 11636395, karar: "kabul",
       tutumlar: [ { parti: "dyp", tutum: "evet" }, { parti: "dsp", tutum: "evet" }, { parti: "mcp", tutum: "evet" }, { parti: "rp", tutum: "evet" }, { parti: "shp", tutum: "evet" }, { parti: "anap", tutum: "hayir" } ],
       not: "Sonuç yalnızca 75.066 oy farkla 'evet' çıktı; yasaklı eski liderlerin (Demirel, Ecevit, Türkeş, Erbakan) partileri 'evet', iktidardaki ANAP 'turuncu-hayır' kampanyası yürüttü." },
 
     // kaynak: araclar/kaynak-defteri.md#1987-11-genel
     { id: "1987-11-genel", tur: "genel", tarih: "1987-11-29", tekParti: false,
       meclis: 450, kayitli: 26376926, kullanilan: 24603541, gecerli: 23971629, baraj: 10,
       sonuc: [ { parti: "anap", oy: 8704335, sandalye: 292 }, { parti: "shp", oy: 5931000, sandalye: 99 }, { parti: "dyp", oy: 4587062, sandalye: 59 }, { parti: "dsp", oy: 2044576, sandalye: 0 }, { parti: "rp", oy: 1717425, sandalye: 0 }, { parti: "mcp", oy: 701538, sandalye: 0 }, { ad: "Diğer", partiSayisi: 1, oy: 196272, sandalye: 0 }, { ad: "Bağımsız", oy: 89421, sandalye: 0 } ],
       not: "6 Eylül 1987 referandumunun akşamı Özal'ın açıkladığı erken seçim kararıyla yapıldı; ANAP çoğunluğunu korudu." },
 
     // kaynak: araclar/kaynak-defteri.md#1988-09-referandum
     { id: "1988-09-referandum", tur: "referandum", tarih: "1988-09-25",
       konu: "Yerel seçim tarihinin bir yıl öne alınması (Anayasa'nın 127. maddesinde değişiklik)",
-      kayitli: null, kullanilan: null, gecerli: null,
-      evet: null, hayir: null, karar: "ret",
+      kayitli: 26739227, kullanilan: 23750873, gecerli: 22956878,
+      evet: 8034933, hayir: 14921945, karar: "ret",
       tutumlar: [ { parti: "anap", tutum: "evet" }, { parti: "dyp", tutum: "hayir" }, { parti: "shp", tutum: "hayir" } ],
-      not: "Katılım %88,82, evet %35, hayır %65 — Türkiye'de sonucu 'hayır' çıkan tek referandum; ham seçmen/oy sayıları iki kaynakla doğrulanamadı." },
+      not: "Katılım %88,8 — Türkiye'de sonucu 'hayır' çıkan tek referandum." },
 
     // kaynak: araclar/kaynak-defteri.md#1989-03-yerel
     { id: "1989-03-yerel", tur: "yerel", tarih: "1989-03-26",
       olcu: "belediye-meclisi",
-      kayitli: 18091625, kullanilan: 14067380, gecerli: 13241347,
-      sonuc: [ { parti: "shp", oy: 4368018 }, { parti: "dyp", oy: 3138260 }, { parti: "anap", oy: 3112613 }, { parti: "rp", oy: 1196876 }, { parti: "dsp", oy: 890507 }, { parti: "mcp", oy: 445065 }, { ad: "Diğer", partiSayisi: 1, oy: 69465 }, { ad: "Bağımsız", oy: 20543 } ],
-      buyuksehir: { istanbul: { parti: "shp" }, ankara: { parti: "shp" }, izmir: { parti: "shp" } },
-      not: "ANAP'ın 1984'e göre oy kaybettiği, SHP'nin üç büyükşehiri de kazandığı seçim." },
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [ { parti: "shp", oy: null }, { parti: "dyp", oy: null }, { parti: "anap", oy: null }, { parti: "rp", oy: null }, { parti: "dsp", oy: null }, { parti: "mcp", oy: null }, { ad: "Bağımsız", oy: null } ],
+      buyuksehir: { istanbul: { parti: "shp" }, izmir: { parti: "shp" } },
+      not: "ANAP'ın 1984'e göre oy kaybettiği, SHP'nin İstanbul ve İzmir'i kazandığı seçim (Ankara da SHP'nin oldu, ama Ankara büyükşehir sonucu için bağımsız ikinci kaynak bulunamadığından alan yazılmadı). Ülke geneli belediye meclisi oy toplamı için bağımsız, aynı ölçüyü veren ikinci bir ulusal kaynak bulunamadığından sayılar null bırakıldı; hangi partilerin katıldığı biliniyor." },
 
     // kaynak: araclar/kaynak-defteri.md#1989-10-cb-tbmm
     { id: "1989-10-cb-tbmm", tur: "cb-tbmm", tarih: "1989-10-31",
       secilen: "Turgut Özal", turSayisi: 3,
       not: "1. tur (20 Ekim, 247 oy) ve 2. tur (24 Ekim, 256 oy) 2/3 çoğunluğu (300) sağlayamadı; 3. turda (31 Ekim) salt çoğunlukla (263 oy) seçildi. SHP ve DYP oylamalara katılmadı." }
   ],
 
   hukumetler: [
     // --- dönem 0 (1923 – 1945) ---
 
```
