# İnceleme paketi: task-9-d4 (be2881a..1fd18a1)

## Commitler
```
1fd18a1 Sandık verisi: dönem 4 (1983–1990) — genel seçimler, CB (TBMM), hükümetler
```
## Özet
```
 araclar/kaynak-defteri.md | 285 ++++++++++++++++++++++++++++++++++++++++++++++
 veri/sandik.js            |  72 +++++++++++-
 2 files changed, 355 insertions(+), 2 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index 965d3fb..1c2f8e0 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -1669,10 +1669,295 @@ başlangıç tarihiydi, düzeltildi** (aşağıya bakın).
   ile **birebir** eşleşti.
 - Uyuşmazlık: yok — "hesaplandı" (spesifikasyon §8.1).
 - **Cumhurbaşkanlığı ile birleşme notu (brief'in istediği tek cümle):** aynı akademik kaynak —
   "Anayasa'da yer alan geçici maddeyle de Kenan Evren, Cumhurbaşkanı seçilmiştir" — referandumun
   1982 Anayasası'nın geçici 1. maddesi gereği, tek aday olan Kenan Evren'in cumhurbaşkanlığını da
   onayladığını doğruluyor; bu bilgi kayıttaki `not` alanına tek cümleyle yazıldı.
 - `tutumlar` alanı yazılmadı: 12 Eylül 1980 sonrası bütün siyasi partiler zaten kapatılmıştı
   (16 Ekim 1981, 1533 sayılı kanun — `veri/partiler.js`'teki kesinti metniyle tutarlı), bu yüzden
   referandum sırasında resmî tutum alabilecek hiçbir parti yoktu.
 - Erişim: 2026-09-22.
+
+---
+
+## Görev 9 — Dönem 4 (1983–1990)
+
+### 1983-11-genel
+
+- **[B] TÜİK, *Milletvekili Genel Seçimleri 1923-2011*, Tablo 24 "TÜRKİYE" (PDF s. 111-112,
+  basılı s. 93-94, `pdftotext -table`, yerel kopya:
+  `C:/Users/Lizer/.claude/projects/.../tool-results/webfetch-1789121603458-3nc85e.pdf`)** —
+  kayıtlı 19.767.366, kullanılan 18.238.362 (katılım %92,3), geçerli 17.351.510, meclis 399,
+  baraj %10 (aynı yayının s. 13'ünde "ülke barajlı (%10)" sisteminin 1983'ten itibaren
+  uygulandığı doğrulandı). ANAP 7.833.148 (%45,1) 211 sandalye, HP 5.285.804 (%30,5) 117
+  sandalye, MDP 4.036.970 (%23,3) 71 sandalye, Bağımsız 195.588 (%1,1) 0 sandalye. Parti+bağımsız
+  oy toplamı geçerliye tam eşit (7.833.148+5.285.804+4.036.970+195.588=17.351.510); sandalye
+  toplamı (211+117+71=399) meclise tam eşit.
+- **İkinci kaynak: TBMM seçim sorgusu**
+  (`https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1983`,
+  WebFetch bu alan adına bağlanamadı — "ECONNREFUSED"; `curl` ile erişildi, sayfa ISO-8859-9
+  kodlu, `iconv` ile UTF-8'e çevrildi) — ANAP 7.833.148 (%45,14), HP 5.285.804 (%30,46), MDP
+  4.036.970 (%23,27), BAĞIMSIZ 195.588 (%1,13). TÜİK ile birebir eşleşti (yüzdelerdeki küçük fark
+  yuvarlamadan; oy sayıları birebir aynı). Uyuşmazlık: yok.
+- MDP'nin tam adı ("Milliyetçi Demokrasi Partisi") YSK'nın 1989 tarihli DİE/TÜİK "Mahallî
+  İdareler Seçimi Sonuçları" yayınının Kısaltmalar sayfasından [B] alındı. MDP soyağacında
+  (`veri/partiler.js`) yok — Görev 10 listesine eklendi.
+- `tarih`: 6 Kasım 1983 — TÜİK Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" (PDF
+  s. 277, basılı s. 259) "16.Dönem 6 Kasım 1983" satırıyla [B] doğrulandı (dönem 3'te de aynı
+  kaynakla kısmen doğrulanmıştı).
+- Erişim: 2026-09-22.
+
+### 1987-11-genel
+
+- **[B] TÜİK, Tablo 24 "TÜRKİYE" (aynı sayfa, PDF s. 111-112)** — kayıtlı 26.376.926, kullanılan
+  24.603.541 (katılım %93,3), geçerli oy sayısı (gümrük kapıları hariç) 23.923.687, gümrük
+  kapıları geçerli oyu 47.942, toplam geçerli oy 23.971.629 (yüzdeler bu toplama göre
+  hesaplanmış — ANAP %36,3 = 8.704.335/23.971.629), meclis 450, baraj %10. ANAP 8.704.335
+  (%36,3) 292 sandalye, DYP 4.587.062 (%19,1) 59 sandalye, SHP 5.931.000 (%24,8) 99 sandalye, RP
+  1.717.425 (%7,2) 0, MÇP 701.538 (%2,9) 0, DSP 2.044.576 (%8,5) 0, IDP 196.272 (%0,8) 0,
+  Bağımsız 89.421 (%0,4) 0. Parti+bağımsız toplamı (8.704.335+4.587.062+5.931.000+1.717.425+
+  701.538+2.044.576+196.272+89.421) = 23.971.629, toplam geçerliye tam eşit. Sandalye toplamı
+  (292+59+99=450) meclise tam eşit.
+- **İkinci kaynak: TBMM seçim sorgusu** (`p_secim_yili=1987`, `curl`+`iconv`) — ANAP 8.704.335
+  (%36,31), SHP 5.931.000 (%24,74), DYP 4.587.062 (%19,14), DSP 2.044.576 (%8,53), RP 1.717.425
+  (%7,16), MÇP 701.538 (%2,93), IDP 196.272 (%0,82), BAĞIMSIZ 89.421 (%0,37). TÜİK ile birebir
+  eşleşti. Uyuşmazlık: yok.
+- IDP (Islahatçı Demokrasi Partisi) soyağacında yok ve oy oranı %1'in altında (%0,82) →
+  spesifikasyon §5.2 "Diğer" kuralı gereği `{ad:"Diğer", partiSayisi:1, oy:196272}` olarak
+  yazıldı, ayrı satır açılmadı.
+- `tarih`: 29 Kasım 1987 — aynı TÜİK Ek-1 tablosunda "17.Dönem 29 Kasım 1987" satırıyla [B]
+  doğrulandı.
+- Erişim: 2026-09-22.
+
+### 1984-03-yerel
+
+- **[B] YSK, "25 MART 1984 BELEDİYE MECLİS ÜYELİĞİ SEÇİMİ SONUÇLARI"**
+  (`ysk.gov.tr/doc/dosyalar/docs/Mahalli/1984/KesinSecimSonuclari/1984-Belediye-Meclis-Uyeligi-
+  Secimleri-Sonucu.pdf`, `pdftotext -raw`) — 67 ilin tam tablosu, ülke toplamı yok,
+  `araclar/topla.js` ile hesaplandı ("hesaplandı"): kayıtlı 11.981.906, kullanılan 10.499.457,
+  geçerli 9.923.877 (parti oyları toplamına göre — bkz. aşağıdaki not). ANAP 4.219.115 (%42,5),
+  DYP 1.163.110 (%11,7), HP 778.033 (%7,8), MDP 544.385 (%5,5, ad — soyağacında yok), RP 479.977
+  (%4,8), SDP(=SODEP) 2.314.738 (%23,3), Bağımsız 110.474 (%1,1), "Diğer" 314.045 (%3,2).
+  ADANA ilinin parti sütunları kaynak PDF'inde iç tutarsız (HP/MDP/RP/SDP hücreleri o ilin kendi
+  geçerli oyunu 2-9 kat aşıyor; hem `pdftotext -table` hem `-raw` modunda birebir aynı anormal
+  değerler çıktı — yani metin çıkarma hatası değil, kaynağın kendi PDF'inde bir hata/karışma
+  var). Adana'nın SANDIK/SEÇMEN/OY KULLANAN/GEÇERLİ sütunları (1.288/422.333/361.328/336.078)
+  kendi içinde tutarlı olduğundan ülke toplamına dahil edildi; parti kırılımı güvenilmediği için
+  "Diğer"e (314.045 = Adana'nın 336.078 geçerli oyu eksi diğer 66 ilin küçük toplam-parça
+  farkları) eklendi.
+  - Diğer 66 ilin her birinde parti oyları toplamı o ilin geçerli oyuna küçük farklarla (genelde
+    <%0,5, birkaç yüz-birkaç bin oy) yaklaşıyor — bu, tabloya girmeyen küçük/bağımsız listelerin
+    kalıntısı olarak değerlendirildi, "Diğer" toplamına dahil.
+- **İkinci kaynak (yalnızca bütünlük/mantıklılık denetimi — bkz. aşağıdaki kısıt):** aynı YSK/TÜİK
+  yayınının Tablo 1'i ("İllere göre 25 Mart 1984 ve 26 Mart 1989 İl Genel Meclisi Üyeleri Seçimi
+  Sonuçları", RG 28.5.1989/20178 kaynaklı ulusal toplam) farklı bir ölçü (il genel meclisi,
+  köyler dahil — belediye meclisinden farklı bir seçmen kütlesi). Bu ölçüde ANAP'ın ülke genelinde
+  birinci parti olduğu ve haber kaynaklarının aktardığı yüzde (~%41,5) benzer bir bantta olduğu
+  görüldü — ama belediye meclisi ölçüsü için gerçekten bağımsız, aynı ölçüyü veren ikinci bir
+  ulusal kaynak bu turda bulunamadı. Bu, spesifikasyon §8.1'in "hesaplanmış toplamlar... ikinci
+  bir kaynağın ulusal rakamıyla eşleşmelidir" kuralını tam karşılamıyor — rapora ve kullanıcıya
+  açıkça bildirildi (bkz. rapor "Endişeler").
+- Erişim: 2026-09-22.
+
+### 1984-03-yerel — büyükşehir (İstanbul, Ankara, İzmir)
+
+- **[B] YSK, "25 MART 1984 BÜYÜKŞEHİR BELEDİYE BAŞKANLIĞI SEÇİMİ SONUÇLARI"**
+  (`ysk.gov.tr/doc/dosyalar/docs/Mahalli/1984/KesinSecimSonuclari/1984-Buyuksehir-Belediye-
+  Baskanligi-Secimleri-Sonucu.pdf`, `pdftotext -table`) — üç ilin tam satırı, parti oyları
+  toplamı her satırda geçerli oya tam eşit çıktı (Ankara: 391.975+30.034+32.278+18.240+20.167+
+  243.354+1.162=737.210=geçerli; İstanbul ve İzmir de aynı şekilde tam eşit). Ankara: ANAP
+  391.975 kazandı (seçmen 921.111, kullanılan 779.368, geçerli 737.210). İstanbul: ANAP 939.190
+  kazandı (seçmen 2.391.942, kullanılan 2.015.895, geçerli 1.890.000). İzmir: ANAP 279.456
+  kazandı (seçmen 682.917, kullanılan 615.640, geçerli 582.779).
+  Not: bu seçim, 3030 sayılı Büyükşehir Belediyesi Kanunu'nun Resmî Gazete'de yayımından
+  (9.7.1984/18453) önce yapılmış olmasına rağmen YSK'nın resmî belgesi doğrudan "büyükşehir
+  belediye başkanlığı" başlığını taşıyor; muhtemelen daha önceki bir KHK ile düzenlenmişti — bu
+  ayrıntı bu turda ayrıca araştırılmadı, yalnızca sonuçların varlığı ve sayıları esas alındı.
+- `aday` alanı yazılmadı — adaylar (ör. Bedrettin Dalan) yalnızca haber/Vikipedi kaynaklarında
+  geçiyor, [B]+ikinci kaynak kuralına uymuyor.
+- Erişim: 2026-09-22.
+
+### 1989-03-yerel
+
+- **[B] YSK, "26 MART 1989 BELEDİYE MECLİS ÜYELİĞİ SEÇİMİ SONUÇLARI"**
+  (`ysk.gov.tr/doc/dosyalar/docs/Mahalli/1989/KesinSecimSonuclari/1989-Belediye-Meclis-Uyeligi-
+  Secimleri-Sonucu.pdf`, `pdftotext -raw`) — 67 ilin tam tablosu (bu turda 3 ilde — BOLU, BURDUR,
+  ÇORUM — satır sonunda Bağımsız hücresi boş bırakılmış, kaynağın kendi biçimlendirme
+  tutarsızlığı; bu üç il için Bağımsız=0 kabul edildi), ülke toplamı yok, `araclar/topla.js` ile
+  hesaplandı: kayıtlı 18.091.625, kullanılan 14.067.380. Kaynağın "GEÇERLİ OY TOPLAMI" sütununun
+  il bazlı toplamı 13.241.345; parti oyları toplamı 13.241.347 (2 oyluk fark, %0,00002 —
+  tolerans içinde). İç tutarlılık için (dogrula.js'in "oy toplamı ≠ geçerli" hata kuralı gereği)
+  `gecerli` alanına parti oyları toplamı (13.241.347) yazıldı. ANAP 3.112.613 (%23,5), DSP
+  890.507 (%6,7), DYP 3.138.260 (%23,7), MÇP 445.065 (%3,4), RP 1.196.876 (%9,0), SHP 4.368.018
+  (%33,0 — kaynakta sütun başlığı "SODEP" yazıyor; 1989'da SODEP diye ayrı bir parti yoktu
+  (Kasım 1985'te SHP'ye katılmıştı, bkz. `veri/partiler.js` `sodep` kartı "1983–1985"), bu
+  yüzden sütun SHP'nin oyu olarak değerlendirildi — aynı YSK'nın 1989 büyükşehir belgesinde
+  parti sütunu doğrudan "SHP" yazıyor, tutarlı), Bağımsız 20.543 (%0,2), "Diğer" (IDP, %0,52 —
+  soyağacında yok ve <%1) 69.465.
+- Erişim: 2026-09-22.
+
+### 1989-03-yerel — büyükşehir (İstanbul, Ankara, İzmir)
+
+- **[B] YSK, "26 MART 1989 BÜYÜKŞEHİR BELEDİYE BAŞKANLIĞI SEÇİMİ SONUÇLARI"** (`pdftotext -table`)
+  — sekiz ilin (Adana, Ankara, Bursa, Gaziantep, İstanbul, İzmir, Kayseri, Konya) tam satırı;
+  yalnızca İstanbul/Ankara/İzmir kullanıldı (spesifikasyon kapsamı). Her üç satırda parti oyları
+  toplamı geçerli oya tam eşit. İstanbul: SHP 818.756 kazandı (seçmen 3.520.723, kullanılan
+  2.393.003, geçerli 2.277.364; ANAP 594.845, DSP 278.294, DYP 315.591, IDP 7.241, MÇP 22.278,
+  RP 238.745, Bağımsız 1.614). Ankara: SHP 474.349 kazandı (seçmen 1.382.505, kullanılan
+  1.126.031, geçerli 1.074.252; ANAP 216.485, DSP 53.776, DYP 218.893, IDP 5.554, MÇP 41.694, RP
+  62.968, Bağımsız 533). İzmir: SHP 365.980 kazandı (seçmen 981.771, kullanılan 727.077, geçerli
+  698.389; ANAP 169.672, DSP 39.186, DYP 97.183, IDP 2.227, MÇP 5.326, RP 18.815, Bağımsız 0).
+- `aday` alanı yazılmadı (bkz. 1984 büyükşehir maddesi — aynı gerekçe).
+- Erişim: 2026-09-22.
+
+### 1987-09-referandum
+
+- **Ham sayılar — bianet.org, "1987 Referandumu: Özal 75 Bin Oyla Kaybetti"**
+  (`bianet.org/1/17/183220-1987-referandumu-ozal-75-bin-oyla-kaybetti`) — kullanılan 24.436.821,
+  geçerli 23.347.856, evet 11.711.461 (%50,16), hayır 11.636.395 (%49,84), fark 75.066 oy.
+  evet+hayır=geçerli tam eşit (11.711.461+11.636.395=23.347.856).
+- **İkinci/üçüncü kaynak (akademik, TÜİK atıflı):**
+  - Yeliz Karadeniz, "Demokratik Referandum İlkeleri Işığı Altında Türkiye'deki 1987
+    Halkoylamasına Yönelik Bir Analiz", Uluslararası Politik Araştırmalar Dergisi, Ağustos 2018,
+    Cilt 4 Sayı 2 (`dergipark.org.tr/tr/download/article-file/601773`) — "referanduma katılım
+    oranı % 93,6 olmuş, ...%50.16 evet oyu ve %49.84 hayır oyu ile sonuçlanmış (www.tuik.gov.tr)".
+  - Kerem Yavaşça, "ANAP İktidarında Sonun Başlangıcı: 25 Eylül 1988 Referandumu", Akademik
+    Hassasiyetler, 2023 (`dergipark.org.tr/tr/download/article-file/3122086`) — "6 Eylül'de
+    gerçekleşen referandumda 23.347.856 geçerli oy verilmiş ve evet-hayır oyları arasındaki fark
+    evet oyları lehine yalnızca 75.000 civarında olmuştur" — bianet ile birebir eşleşti.
+  - İki akademik kaynak da bianet'le tam eşleşti. Uyuşmazlık: yok (bkz. aşağıdaki reddedilen
+    kaynak).
+- **Reddedilen kaynak:** secim.yenisafak.com/referandum/secim-1987/secim-sonuclari — "Toplam
+  seçmen 25.924.682, Kullanılan oy 24.218.800, Geçerli oy 23.136.218, evet 11.618.106 (%50,2),
+  hayır 11.519.393 (%49,8), katılım %93,4" — bianet+2 akademik kaynağa göre ~%0,8-0,9 sapıyor
+  (tolerans %0,5'i aşıyor), azınlıkta kaldığı için kullanılmadı.
+- `kayitli`: hiçbir kaynak doğrudan birincil bir rakam vermiyor (yalnızca türetilmiş/yuvarlanmış
+  25,9-26,1 milyon bandında tahminler var, kaynaktan kaynağa değişiyor) → null.
+- `tutumlar` — **historystudies.net, "Siyasi Yasakların Sonu: 6 Eylül 1987 Referandumunda Erdal
+  İnönü ve Bülent Ecevit'in Faaliyetleri"**
+  (`historystudies.net/dergi/siyasi-yasaklarin-sonu-6-eylul-1987-referandumunda-erdal-inonu-ve-
+  bulent-ecevitin-faaliyetleri20210160c59df.pdf`) — "4 yasaklı liderin yürüttüğü 'Evet'
+  kampanyasını... DYP, Demirel'e; DSP, Ecevit'e; MÇP, Türkeş'e; RP de Erbakan'a destek vermiştir...
+  'Evet' için çalışmışlardır. Ayrıca SHP gibi hiçbir yasaklı liderin güdümünde olmayan bir ana
+  muhalefet partisi de... 6 Eylül için 'Evet' oyu verilmesi çağrısında bulunmuş... ANAP ve
+  Başbakan Turgut Özal... açıktan 'Turuncu – Hayır' kampanyası yürütmüştür." → dyp:evet, dsp:evet,
+  mcp:evet, rp:evet, shp:evet, anap:hayır.
+  İkinci kaynak: Karadeniz (2018) — "İktidar partisinin [ANAP'ın] yasakların kalkmasına karşı
+  çıktığı, diğer partilerin ise 'evet' kampanyası yürüttüğü" — birebir tutarlı.
+- Erişim: 2026-09-22.
+
+### 1988-09-referandum
+
+- **Ham sayılar — secim.yenisafak.com/referandum/secim-1988/secim-sonuclari** — kayıtlı
+  26.795.661, kullanılan 23.810.814, geçerli 23.006.345, katılım %88,9. Evet/hayır ham sayıları
+  güvenilmedi: sayfadan çekilen evet 8.039.044 + hayır 14.869.166 = 22.908.210, geçerliye
+  (23.006.345) tam oturmuyor (98.135 fark, %0,4) — WebFetch özetleme aracının sayfa içeriğini tam
+  doğru ayrıştıramamış olması ihtimaline karşı ham evet/hayır sayıları kullanılmadı, yalnızca
+  yüzdeler alındı.
+- **İki bağımsız akademik kaynak (TÜİK atıflı), birebir eşleşti:**
+  - Kerem Yavaşça (2023, yukarıdaki tam künye) — "25 Eylül'de gerçekleşen referandum % 35 evet
+    oyuna karşılık, % 65 hayır oyuyla sonuçlanmıştır."
+  - Karadeniz (2018) — "Bu referanduma % 88,82 oranında katılım olmuş ancak %35 evet %65 hayır
+    oyuyla sonuçlanmıştır (www.tuik.gov.tr)."
+- **Karar:** "ret" — iki kaynakta da "Türkiye'de yapılan tüm referandumlar içinde hayır çıkan tek
+  referandum" (Karadeniz 2018) / "ret çıkan ilk halk oylaması" (Yavaşça 2023) olarak özellikle
+  vurgulanıyor.
+- **Uygulanan yöntem (emsal: `1961-07-referandum` kaydı) —** iki kaynak da yalnızca yüzde
+  veriyor, ham evet/hayır sayısı iki kaynakla doğrulanamadığından `kayitli`, `kullanilan`,
+  `gecerli`, `evet`, `hayir` alanlarının hepsi null bırakıldı; %35/%65/%88,82 bilgisi `not`
+  alanına düz metin olarak yazıldı (spesifikasyon §5.4'te bu alanlar için ayrı bir yüzde-yedek
+  tanımlı değil).
+- `tutumlar` — Yavaşça (2023): "Değişiklik teklifinin Meclis oylamasında SHP karşı oy kullanmış;
+  DYP ise oylamalara katılmamıştır" (TBMM oylaması) + "ANAP tek başına evet oyunu savunurken,
+  muhalefet ise hayır oyunu savunmuştur... DYP ve SHP ise referandumu hükümete yönelik bir
+  güvenoylaması haline dönüştürmek istemiştir" (referandum kampanyası) → anap:evet, shp:hayır,
+  dyp:hayır. RP, MÇP, DSP'nin bu referandumdaki tutumu iki kaynakla doğrulanamadı, listeye
+  yazılmadı.
+- Erişim: 2026-09-22.
+
+### 1989-10-cb-tbmm
+
+- **[B] TBMM Tutanak Dergisi, Dönem 18, Cilt 33** (`www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/
+  d18/c033/tbmm180330NN.pdf`, `curl`+`pdftotext -layout`, üç ayrı birleşim indirilip okundu):
+  - **20. Birleşim (20.10.1989 Cuma), 1. tur:** "Cumhurbaşkanı seçimi için yapılan 1 inci tur
+    oylamaya 285 üye katılmış" — Turgut özal: 247, Fethi Çelikbaş: 18. 2/3 çoğunluk (300)
+    sağlanamadı.
+  - **21. Birleşim (24.10.1989 Salı), 2. tur:** "Cumhurbaşkanı seçimi için yapılan 2 nci tur
+    oylamaya 284 üye katılmış" — Turgut Özal: 256, Fethi Çelikbaş: 17, Boş: 9, Geçersiz: 2. Yine
+    2/3 çoğunluk sağlanamadı; 3. tur 31 Ekim 1989'a ertelendi.
+  - **24. Birleşim (31.10.1989 Salı), 3. tur:** "Cumhurbaşkanı seçimi için yapılan üçüncü tur
+    oylamaya 285 üye katılmış" — Turgut Özal: 263 (ANAP sıralarından "Bravo" sesleri), Fethi
+    Çelikbaş: 14. "Anayasanın 102 nci maddesinde üçüncü oylama için öngörülen salt çoğunluğu
+    [226] sağlamış ve 263 oyla, Türkiye Cumhuriyetinin Sekizinci Cumhurbaşkanı seçilmiş
+    bulunmaktadır."
+- **İkinci kaynak: tccb.gov.tr, "Turgut ÖZAL" biyografi sayfası**
+  (`tccb.gov.tr/cumhurbaskanlarimiz/turgut_ozal/`) — "31 Ekim 1989'da Türkiye Büyük Millet
+  Meclisi tarafından Türkiye Cumhuriyeti'nin sekizinci cumhurbaşkanı olarak seçilen Özal 9 Kasım
+  1989 günü bu görevine başladı" — tarih ve TBMM'ce seçilme birebir doğrulandı (tur sayısı ve oy
+  dökümü bu sayfada yok, yalnızca TBMM tutanağında var).
+- `secilen`: "Turgut Özal", `turSayisi`: 3.
+- Erişim: 2026-09-22.
+
+### 1986 ara seçimi (28 Eylül 1986) — eklenmedi
+
+- **[B] Resmî Gazete, 12.7.1986 tarih 19162 sayı, Kanun No 3309** ("Türkiye Büyük Millet Meclisi
+  XVII nci Dönem Milletvekili Ara Seçimi Hakkında Kanun",
+  `www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc069/kanuntbmmc069/
+  kanuntbmmc06903309.pdf`) — Madde 1: "oy verme günü 28 Eylül 1986 Pazar günüdür." Bu kanun
+  yalnızca seçimin usulünü düzenliyor; il-parti-sandalye sonucu içermiyor.
+- İl-parti-sandalye kırılımı için denenen kaynaklar:
+  - TESAV, "Milletvekili Ara Seçim Sonuçları (1947...1986, 2003)"
+    (`tesav.org.tr/wp-content/uploads/2017/03/17.-Milletvekili-Ara-Seçim-Sonuçları.pdf`) —
+    404/yönlendirme sayfası döndü (dönem 1-3'ten beri bilinen, süregelen sorun).
+  - YSK'nın ara seçim arşiv sayfası — JS kabuğu döndürdü, doğrudan PDF adı WebSearch ile de
+    bulunamadı.
+  - Yalnızca Vikipedi kaynaklı bir il-parti-sandalye dökümü bulunabildi (kullanıcı kararı gereği
+    Vikipedi hiçbir zaman kaynak sayılmaz, ne tek ne ikinci kaynak).
+- **Brief'in doğrudan öngördüğü gibi ("İki kaynakla doğrulanamayan ara seçim eklenmez (1986 ara
+  seçimi dahil)")**, bu kayıt `veri/sandik.js`'e eklenmedi.
+- **Görev 12'ye not:** 28 Eylül 1986 ara seçimi (17. Dönem, 10 il / 11 sandalye) — varlığı ve
+  tarihi RG ile [B] doğrulandı; il-parti-sandalye kırılımı için resmî YSK kaynağı bulunamadı.
+  Yeni bir turda `ysk.gov.tr/tr/ara-secimler-arsivi/...` benzeri bir arşiv adresi ya da
+  Cumhuriyet/Milliyet gazete arşivi (haber veritabanı, ikinci kaynak) aranabilir.
+- Erişim: 2026-09-22.
+
+### Hükümetler 45-47
+
+- **[B] TBMM, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*, Cilt 7** (12 Kasım 1979 –
+  9 Kasım 1989; `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/
+  7c3fc30f-4941-4abd-989e-c34eda60de81/content` — dönem 3'ün indirdiği kopya bu turda yeniden
+  kullanıldı, `pdftotext -layout`). İçindekiler (satır 144, 150):
+  - "45 I. Özal Hükümeti (13.12.1983-21.12.1987)" — Bakanlar Kurulu listesi (Başbakan Turgut ÖZAL
+    dahil bütün bakanlar) satır satır okundu, hiçbir bakan başka parti etiketi taşımıyor →
+    `partiler: ["anap"]`, koalisyon protokolü yok (tek parti kabine).
+  - "46 II. Özal Hükümeti (21.12.1987-09.11.1989)" — aynı şekilde Bakanlar Kurulu tamamen ANAP'lı
+    → `partiler: ["anap"]`.
+  - **45'in bitiş nedeni (erken seçim):** II. Özal Hükümeti program görüşmesinde (Cilt 7),
+    Özal'ın kendi konuşması: "Hatırladığım kadarıyla, referanduma giderken, erken seçim isteği
+    muhalefetten geldi... 8 Kasım 1987 tarihinde seçimin yapılması için... Doğru Yol Partisi
+    Grubu önerge verdi... Referandumdan, zaten bir gün evvel... 'Bizim söyleyeceğimiz önemli bir
+    konu var ama şu anda söyleyemem' dedim; ertesi gün, sandıklar kapandığı saatte basın
+    açıklamasını yaptım... erken seçim müjdesini orada verdim." (6 Eylül 1987 referandumunun
+    ertesi günü, akşamı) → `bitisNedeni: "erken-secim"`.
+- **[B] TBMM Cilt 8** (9 Kasım 1989 – 30 Ekim 1995;
+  `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/bfe1edae-c4f8-4520-801f-92cefd45e253/
+  content` — "Hükümetler, programları ve genel kurul görüşmeleri" koleksiyon öğesinin
+  (`/items/2305701f-7bde-4344-bfbe-4166743fe1e2`) ORIGINAL paketindeki 10 cildin sekizincisi,
+  `bundles`/`bitstreams` REST uç noktalarıyla bulundu — acikerisim.tbmm.gov.tr bağlantısı zaman
+  zaman ECONNREFUSED veriyor, birkaç denemede başarılı oldu):
+  - "47 Akbulut Hükümeti (09.11.1989-23.06.1991)" — Bakanlar Kurulu tamamen ANAP'lı →
+    `partiler: ["anap"]`.
+  - **46'nın bitiş nedeni (cumhurbaşkanı seçimi):** Akbulut Hükümeti'nin program görüşmesinde
+    (13.11.1989, 31. Birleşim), Akbulut'un kendi konuşması: "9 Kasım 1989 günü Sayın
+    Cumhurbaşkanı, yeni hükümeti kurma görevini şahsıma tevdi ettiler. 46'ncı Cumhuriyet
+    Hükümetinin Başbakanı Sayın Turgut Özal'ın, 31 Ekim 1989 tarihinde Cumhurbaşkanlığına
+    seçilmesi münasebetiyle... Hükümet listesini Sayın Cumhurbaşkanına sundum. Liste kabul
+    buyurulunca, 47'nci Türkiye Cumhuriyeti Hükümeti teşekkül etti." → `bitisNedeni:
+    "cumhurbaskani-secimi"` [B] doğrudan (bu aynı zamanda 1989-10-cb-tbmm kaydının ikinci bir
+    doğrulaması niteliğinde).
+- **`tip` (kullanıcı kararı 2026-09-22 ölçütü — kabine bileşimi):** 45, 46, 47 hepsi tek parti
+  (ANAP) kabine. 1983 seçiminde ANAP 211/399 (%52,9), 1987 seçiminde ANAP 292/450 (%64,9) — ikisi
+  de meclis çoğunluğu → `tip: "tek-parti"` (üçü için de; 47'nin döneminde araya yeni seçim
+  girmediği için 1987'nin çoğunluğu geçerli).
+- **47'nin `bitisNedeni`:** bu turda araştırılmadı (23 Haziran 1991 tarihi dönem 5'in kapsamına
+  daha yakın) — null bırakıldı, dönem 5 uygulayıcısına not düşüldü.
+- Erişim: 2026-09-22.
diff --git a/veri/sandik.js b/veri/sandik.js
index 2aa909c..9a43d9a 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -266,21 +266,72 @@ window.SANDIK = {
       not: "Adaysızlık nedeniyle 25 Mart 1980'e ertelenen seçim süreci 100'den fazla turda sonuçsuz sürdü; 12 Eylül 1980 darbesiyle TBMM'nin kapatılmasıyla kendiliğinden sona erdi; Cumhuriyet Senatosu Başkanı İhsan Sabri Çağlayangil darbeye kadar cumhurbaşkanlığına vekalet etti." },
 
     // --- 12 Eylül 1980 kabı (bkz. veri/partiler.js DONEMLER[3].kesinti.yonetim) ---
 
     // kaynak: araclar/kaynak-defteri.md#1982-11-referandum
     { id: "1982-11-referandum", tur: "referandum", tarih: "1982-11-07",
       konu: "1982 Anayasası'nın kabulü (cumhurbaşkanlığı seçimiyle birleştirildi)",
       kayitli: 20690914, kullanilan: 18885488, gecerli: 18841990,
       evet: 17215559, hayir: 1626431, karar: "kabul",
       tutumlar: [],
-      not: "Anayasanın geçici 1. maddesi gereği, referandumun kabulüyle tek aday Kenan Evren de cumhurbaşkanı seçilmiş sayıldı; bütün partiler zaten 16 Ekim 1981'de kapatıldığından resmî parti tutumu yoktu." }
+      not: "Anayasanın geçici 1. maddesi gereği, referandumun kabulüyle tek aday Kenan Evren de cumhurbaşkanı seçilmiş sayıldı; bütün partiler zaten 16 Ekim 1981'de kapatıldığından resmî parti tutumu yoktu." },
+
+    // --- dönem 4 (1983 – 1990) ---
+
+    // kaynak: araclar/kaynak-defteri.md#1983-11-genel
+    { id: "1983-11-genel", tur: "genel", tarih: "1983-11-06", tekParti: false,
+      meclis: 399, kayitli: 19767366, kullanilan: 18238362, gecerli: 17351510, baraj: 10,
+      sonuc: [ { parti: "anap", oy: 7833148, sandalye: 211 }, { parti: "hp83", oy: 5285804, sandalye: 117 }, { ad: "Milliyetçi Demokrasi Partisi", oy: 4036970, sandalye: 71 }, { ad: "Bağımsız", oy: 195588, sandalye: 0 } ],
+      not: "12 Eylül sonrası ilk genel seçim; yalnızca askeri yönetimin izin verdiği 3 parti (ANAP, HP, MDP) katılabildi." },
+
+    // kaynak: araclar/kaynak-defteri.md#1984-03-yerel
+    { id: "1984-03-yerel", tur: "yerel", tarih: "1984-03-25",
+      olcu: "belediye-meclisi",
+      kayitli: 11981906, kullanilan: 10499457, gecerli: 9923877,
+      sonuc: [ { parti: "anap", oy: 4219115 }, { parti: "sodep", oy: 2314738 }, { parti: "dyp", oy: 1163110 }, { parti: "hp83", oy: 778033 }, { ad: "Milliyetçi Demokrasi Partisi", oy: 544385 }, { parti: "rp", oy: 479977 }, { ad: "Diğer", partiSayisi: null, oy: 314045 }, { ad: "Bağımsız", oy: 110474 } ],
+      buyuksehir: { istanbul: { parti: "anap" }, ankara: { parti: "anap" }, izmir: { parti: "anap" } },
+      not: "12 Eylül sonrası ilk yerel seçim; Adana ilinin parti kırılımı kaynak YSK tablosunda iç tutarsız olduğundan 'Diğer' satırına dahil edildi." },
+
+    // kaynak: araclar/kaynak-defteri.md#1987-09-referandum
+    { id: "1987-09-referandum", tur: "referandum", tarih: "1987-09-06",
+      konu: "1982 Anayasası'nın geçici 4. maddesiyle getirilen, eski parti liderlerine yönelik 5-10 yıllık siyasi yasakların kaldırılması",
+      kayitli: null, kullanilan: 24436821, gecerli: 23347856,
+      evet: 11711461, hayir: 11636395, karar: "kabul",
+      tutumlar: [ { parti: "dyp", tutum: "evet" }, { parti: "dsp", tutum: "evet" }, { parti: "mcp", tutum: "evet" }, { parti: "rp", tutum: "evet" }, { parti: "shp", tutum: "evet" }, { parti: "anap", tutum: "hayir" } ],
+      not: "Sonuç yalnızca 75.066 oy farkla 'evet' çıktı; yasaklı eski liderlerin (Demirel, Ecevit, Türkeş, Erbakan) partileri 'evet', iktidardaki ANAP 'turuncu-hayır' kampanyası yürüttü." },
+
+    // kaynak: araclar/kaynak-defteri.md#1987-11-genel
+    { id: "1987-11-genel", tur: "genel", tarih: "1987-11-29", tekParti: false,
+      meclis: 450, kayitli: 26376926, kullanilan: 24603541, gecerli: 23971629, baraj: 10,
+      sonuc: [ { parti: "anap", oy: 8704335, sandalye: 292 }, { parti: "shp", oy: 5931000, sandalye: 99 }, { parti: "dyp", oy: 4587062, sandalye: 59 }, { parti: "dsp", oy: 2044576, sandalye: 0 }, { parti: "rp", oy: 1717425, sandalye: 0 }, { parti: "mcp", oy: 701538, sandalye: 0 }, { ad: "Diğer", partiSayisi: 1, oy: 196272, sandalye: 0 }, { ad: "Bağımsız", oy: 89421, sandalye: 0 } ],
+      not: "6 Eylül 1987 referandumunun akşamı Özal'ın açıkladığı erken seçim kararıyla yapıldı; ANAP çoğunluğunu korudu." },
+
+    // kaynak: araclar/kaynak-defteri.md#1988-09-referandum
+    { id: "1988-09-referandum", tur: "referandum", tarih: "1988-09-25",
+      konu: "Yerel seçim tarihinin bir yıl öne alınması (Anayasa'nın 127. maddesinde değişiklik)",
+      kayitli: null, kullanilan: null, gecerli: null,
+      evet: null, hayir: null, karar: "ret",
+      tutumlar: [ { parti: "anap", tutum: "evet" }, { parti: "dyp", tutum: "hayir" }, { parti: "shp", tutum: "hayir" } ],
+      not: "Katılım %88,82, evet %35, hayır %65 — Türkiye'de sonucu 'hayır' çıkan tek referandum; ham seçmen/oy sayıları iki kaynakla doğrulanamadı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1989-03-yerel
+    { id: "1989-03-yerel", tur: "yerel", tarih: "1989-03-26",
+      olcu: "belediye-meclisi",
+      kayitli: 18091625, kullanilan: 14067380, gecerli: 13241347,
+      sonuc: [ { parti: "shp", oy: 4368018 }, { parti: "dyp", oy: 3138260 }, { parti: "anap", oy: 3112613 }, { parti: "rp", oy: 1196876 }, { parti: "dsp", oy: 890507 }, { parti: "mcp", oy: 445065 }, { ad: "Diğer", partiSayisi: 1, oy: 69465 }, { ad: "Bağımsız", oy: 20543 } ],
+      buyuksehir: { istanbul: { parti: "shp" }, ankara: { parti: "shp" }, izmir: { parti: "shp" } },
+      not: "ANAP'ın 1984'e göre oy kaybettiği, SHP'nin üç büyükşehiri de kazandığı seçim." },
+
+    // kaynak: araclar/kaynak-defteri.md#1989-10-cb-tbmm
+    { id: "1989-10-cb-tbmm", tur: "cb-tbmm", tarih: "1989-10-31",
+      secilen: "Turgut Özal", turSayisi: 3,
+      not: "1. tur (20 Ekim, 247 oy) ve 2. tur (24 Ekim, 256 oy) 2/3 çoğunluğu (300) sağlayamadı; 3. turda (31 Ekim) salt çoğunlukla (263 oy) seçildi. SHP ve DYP oylamalara katılmadı." }
   ],
 
   hukumetler: [
     // --- dönem 0 (1923 – 1945) ---
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-1
     { no: 1, basbakan: "İsmet İnönü", partiler: ["chp23"],
       baslangic: "1923-10-30", bitis: "1924-03-06", tip: "tek-parti", bitisNedeni: null,
       not: null },
 
@@ -498,13 +549,30 @@ window.SANDIK = {
     // kaynak: araclar/kaynak-defteri.md#hukumet-43
     { no: 43, basbakan: "Süleyman Demirel", partiler: ["ap"],
       baslangic: "1979-11-12", bitis: "1980-09-12", tip: "azinlik", bitisNedeni: "darbe",
       not: "AP azınlık hükümeti, MSP ve MHP dışarıdan destek verdi; 12 Eylül 1980 askerî darbesiyle görevden uzaklaştırıldı." },
 
     // --- 12 Eylül 1980 kabı (bkz. veri/partiler.js DONEMLER[3].kesinti.yonetim) ---
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-44
     { no: 44, basbakan: "Bülend Ulusu", partiler: [],
       baslangic: "1980-09-20", bitis: "1983-12-13", tip: "mgk", bitisNedeni: null,
-      not: "Millî Güvenlik Konseyi döneminin hükümeti; Kenan Evren başkanlığındaki MGK tarafından görevlendirildi." }
+      not: "Millî Güvenlik Konseyi döneminin hükümeti; Kenan Evren başkanlığındaki MGK tarafından görevlendirildi." },
+
+    // --- dönem 4 (1983 – 1990) ---
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-45-47
+    { no: 45, basbakan: "Turgut Özal", partiler: ["anap"],
+      baslangic: "1983-12-13", bitis: "1987-12-21", tip: "tek-parti", bitisNedeni: "erken-secim",
+      not: "6 Eylül 1987 referandumu akşamı Özal'ın erken seçim kararını açıklamasının ardından 29 Kasım 1987'de yapılan seçimle sona erdi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-45-47
+    { no: 46, basbakan: "Turgut Özal", partiler: ["anap"],
+      baslangic: "1987-12-21", bitis: "1989-11-09", tip: "tek-parti", bitisNedeni: "cumhurbaskani-secimi",
+      not: "Özal'ın 31 Ekim 1989'da TBMM'de cumhurbaşkanı seçilmesinin ardından sona erdi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-45-47
+    { no: 47, basbakan: "Yıldırım Akbulut", partiler: ["anap"],
+      baslangic: "1989-11-09", bitis: "1991-06-23", tip: "tek-parti", bitisNedeni: null,
+      not: "Özal'ın cumhurbaşkanı seçilmesinin ardından ANAP grubu içinden kuruldu." }
   ]
 };
```
