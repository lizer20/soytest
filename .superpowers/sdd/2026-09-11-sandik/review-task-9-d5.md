# İnceleme paketi: task-9-d5 (cec5b26..701533f)

## Commitler
```
701533f Sandık verisi: dönem 5 (1991–2000) — yerel ve ara seçimler
a69e3bf Sandık verisi: dönem 5 (1991–2000) — genel seçimler, CB (TBMM), hükümetler
```
## Özet
```
 araclar/kaynak-defteri.md | 396 ++++++++++++++++++++++++++++++++++++++++++++++
 veri/sandik.js            | 104 +++++++++++-
 2 files changed, 497 insertions(+), 3 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index 2f3a498..29f3e2f 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -2109,10 +2109,406 @@ $ node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node ar
 ℹ tests 55
 ℹ pass 55
 ℹ fail 0
 ...
 uyarı: — sayısı: yerel bant 4: 20
 uyarı: — sayısı: referandum bant 4: 0
 ...
 hata yok
 ```
 (Tam çıktı rapor dosyasında.)
+
+## Görev 9 — Dönem 5 (1991–2000)
+
+### 1991-10-genel
+
+- **[B] TÜİK, *Milletvekili Genel Seçimleri 1923–2011*, Tablo 24 "TÜRKİYE"** (PDF s. 111–112,
+  basılı s. 93–94, yerel kopya, `pdftotext -table -enc UTF-8`) — kayıtlı 29.979.123, kullanılan
+  25.157.089 (katılım %83,9), geçerli oy (gümrük kapıları hariç) 24.371.474, gümrük kapıları
+  geçerli oyu 45.192, **toplam geçerli oy 24.416.666** (veriye bu yazıldı — 1987 kaydındaki
+  emsalle aynı; TBMM'nin yayımladığı oy oranları da bu paydayı kullanıyor: 6.600.726/24.416.666 =
+  %27,03 = TBMM'nin verdiği oran), milletvekili sayısı 450.
+  DYP 6.600.726 (%27,0) 178 sandalye, ANAP 5.862.623 (%24,0) 115, SHP 5.066.571 (%20,8) 88,
+  RP 4.121.355 (%16,9) 62, DSP 2.624.301 (%10,8) 7, SP (Sosyalist Parti) 108.369 (%0,4) 0,
+  Bağımsız 32.721 (%0,1) 0.
+  **İç tutarlılık (hesaplandı):** parti+bağımsız oy toplamı = 24.416.666, toplam geçerliye tam
+  eşit; sandalye toplamı 178+115+88+62+7 = 450, meclise tam eşit.
+- **İkinci kaynak: TBMM seçim sorgusu** (`www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1991`,
+  `curl -k`) — DYP 6.600.726 (%27,03), ANAP 5.862.623 (%24,01), SHP 5.066.571 (%20,75),
+  RP 4.121.355 (%16,88), DSP 2.624.301 (%10,75), SP 108.369 (%0,44), BAĞIMSIZ 32.721 (%0,13).
+  Yedi satırın tamamı TÜİK ile **birebir** eşleşti. Uyuşmazlık: yok.
+- **`baraj: 10`** — [B] TÜİK Açıklama (PDF s. 13, basılı XIII): 2839 sayılı Kanun'la 1983'ten
+  itibaren "ülke barajlı (%10) ve seçim çevresi barajlı nispi temsil (d'Hondt)"; aynı sayfa:
+  "1987 ve 1991 milletvekili seçimlerinde… çifte barajlı d'Hondt seçim sisteminin yanısıra
+  kontenjan uygulaması getirilmiş, 1991 seçimlerinde de seçmen yaşı 20, milletvekili sayısı 450
+  olarak kabul edilmiştir."
+- **`tarih`: 20 Ekim 1991** — [B] TÜİK Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler"
+  (PDF s. 277, basılı s. 259): "18.Dönem 20 Ekim 1991".
+- **SP = Sosyalist Parti** — [B] TÜİK "Simge ve Kısaltmalar" (PDF s. 7, basılı VII). Soyağacında
+  yok (`veri/partiler.js`'teki `sp` id'si **Saadet Partisi**'nindir, 2001) ve oyu %1'in altında
+  (%0,44) → spesifikasyon §5.2 "Diğer" kuralı gereği `{ad:"Diğer", partiSayisi:1, oy:108369}`.
+- **`not` cümlesi:** "hiçbir parti tek başına hükümet kuracak çoğunluğu sağlayamadı" ifadesi
+  [B] TBMM Cilt 8, VII. Demirel Hükümeti'nin DYP–SHP koalisyon protokolü girişinden (basılı
+  s. 6532–6533): "20 Ekim 1991 Genel seçimleri, DYP'yi birinci parti olarak çıkarmış, fakat
+  hiçbir siyasi gruba tek başına hükümet kurma olanağı vermemiştir."
+- Erişim: 2026-09-22/23.
+
+### 1995-12-genel
+
+- **[B] TÜİK Tablo 24 "TÜRKİYE"** (aynı sayfalar) — kayıtlı 34.155.981, kullanılan 29.101.469
+  (katılım %85,2), geçerli oy 28.040.392, gümrük kapıları 86.601, **toplam geçerli oy
+  28.126.993**, milletvekili sayısı 550.
+  RP 6.012.450 (%21,4) 158 sandalye, ANAP 5.527.288 (%19,6) 132, DYP 5.396.009 (%19,2) 135,
+  DSP 4.118.025 (%14,6) 76, CHP 3.011.076 (%10,7) 49, MHP 2.301.343 (%8,2) 0, HADEP 1.171.623
+  (%4,2) 0, YDH 133.889 (%0,5) 0, MİLLET PARTİSİ 127.630 (%0,5) 0, YDP 95.484 (%0,3) 0,
+  İP 61.428 (%0,2) 0, YENİ PARTİ 36.853 (%0,1) 0, Bağımsız 133.895 (%0,5) 0.
+  **İç tutarlılık (hesaplandı):** oy toplamı = 28.126.993 (toplam geçerliye tam eşit);
+  sandalye toplamı 158+132+135+76+49 = 550 (meclise tam eşit).
+- **İkinci kaynak: TBMM seçim sorgusu** (`p_secim_yili=1995`) — 13 satırın tamamı (RP, ANAP, DYP,
+  DSP, CHP, MHP, HADEP, BAĞIMSIZ, YDH, MP, YDP, İP, YP) TÜİK ile **birebir** eşleşti.
+  Uyuşmazlık: yok.
+- **`baraj: 10` ve `meclis: 550`** — [B] TÜİK Açıklama (PDF s. 14, basılı XIV): "Kontenjan aday
+  uygulaması ve seçim çevresi barajı, 1995 milletvekili seçimleri öncesi yapılan yasal değişikle
+  kaldırılmıştır. Bunun yerine, ülke barajlı (%10) d'Hondt seçim sistemi getirilmiştir. Bunun
+  yanısıra, 1987 yılında 450 olarak belirlenen milletvekili sayısı 550'ye çıkarılmış, seçmen yaşı
+  18'e indirilmiş…" (kaydın `not` cümlesi birebir bu paragrafa dayanır). Tablo 24'ün
+  "Milletvekili sayısı" satırı da 550 veriyor.
+- **`tarih`: 24 Aralık 1995** — [B] TÜİK Ek-1: "19.Dönem 24 Aralık 1995".
+- **"Diğer" (partiSayisi 3, oy 259.967):** MİLLET PARTİSİ 127.630 + YDP (Yeniden Doğuş Partisi)
+  95.484 + YENİ PARTİ 36.853 — üçü de soyağacında yok ve üçünün de oyu %1'in altında.
+  Kısaltmaların açılımı [B] TÜİK "Simge ve Kısaltmalar" (PDF s. 7). YDH ve İP soyağacında var
+  (`ydh`, `ip92`) → %1'in altında olsalar da ayrı satırda tutuldular (spesifikasyon §5.2 "Diğer"
+  yalnızca **soyağacında olmayan** küçük partiler için).
+- Erişim: 2026-09-22/23.
+
+### 1999-04-genel
+
+- **[B] TÜİK Tablo 24 "TÜRKİYE"** (aynı sayfalar) — kayıtlı 37.495.217, kullanılan 32.656.070
+  (katılım %87,1), geçerli oy 31.119.242, gümrük kapıları 65.254, **toplam geçerli oy
+  31.184.496**, milletvekili sayısı 550.
+  DSP 6.919.670 (%22,2) 136 sandalye, MHP 5.606.583 (%18,0) 129, FP 4.805.381 (%15,4) 111,
+  ANAP 4.122.929 (%13,2) 86, DYP 3.745.417 (%12,0) 85, CHP 2.716.094 (%8,7) 0, HADEP 1.482.196
+  (%4,7) 0, BBP 456.353 (%1,5) 0, ÖDP 248.553 (%0,8) 0, DTP 179.871 (%0,6) 0, LDP 127.174 (%0,4) 0,
+  DP 92.093 (%0,3) 0, MİLLET PARTİSİ 79.370 (%0,3) 0, BP 78.922 (%0,2) 0, İP 57.607 (%0,2) 0,
+  EMEP 51.756 (%0,2) 0, YDP 44.787 (%0,1) 0, SİP 37.680 (%0,1) 0, DEPAR 37.175 (%0,1) 0,
+  DBP 24.620 (%0,1) 0, Bağımsız 270.265 (%0,9) **3 sandalye**.
+  **İç tutarlılık (hesaplandı):** oy toplamı = 31.184.496 (toplam geçerliye tam eşit);
+  sandalye toplamı 136+129+111+86+85+3 = 550 (meclise tam eşit).
+- **İkinci kaynak: TBMM seçim sorgusu** (`p_secim_yili=1999`) — 21 satırın tamamı TÜİK ile
+  **birebir** eşleşti. Uyuşmazlık: yok.
+- **`baraj: 10`** — [B] TÜİK Açıklama (PDF s. 14): "1999, 2002, 2007 ve 2011 yıllarında yapılan
+  milletvekili seçimlerinde de 1995 yılı seçimindeki uygulamalar aynen devam etmiştir."
+- **`tarih`: 18 Nisan 1999** — [B] TÜİK Ek-1: "20.Dönem 18 Nisan 1999".
+- **Soyağacı eşlemesi:** MHP→`mhp93`, CHP→`chp92`, DTP (Demokrat Türkiye Partisi)→`dtp97`,
+  DP (Demokrat Parti, 1992)→`dp92`, İP→`ip92`, diğerleri doğrudan. Kısaltma açılımları [B] TÜİK
+  "Simge ve Kısaltmalar" (PDF s. 7): DTP = Demokrat Türkiye Partisi, DP = Demokrat Parti,
+  BP = Barış Partisi, DBP = Demokrasi ve Barış Partisi, DEPAR = Değişen Türkiye Partisi,
+  SİP = Sosyalist İktidar Partisi, YDP = Yeniden Doğuş Partisi.
+- **"Diğer" (partiSayisi 6, oy 302.554):** MİLLET PARTİSİ 79.370 + BP 78.922 + YDP 44.787 +
+  SİP 37.680 + DEPAR 37.175 + DBP 24.620 — altısı da soyağacında yok ve altısının da oyu %1'in
+  altında. ÖDP (`odp`), LDP (`ldp`), EMEP (`emep`), DP (`dp92`), İP (`ip92`), DTP (`dtp97`)
+  soyağacında olduğu için %1'in altında olsalar da ayrı satırda.
+- **`not` cümlesi:** "genel seçim ile mahalli idareler seçimi aynı gün yapıldı" — [B] TBMM Cilt 10,
+  IV. Ecevit Hükümeti program metni: "18 Nisanda yapılacak milletvekili genel seçimlerine ve
+  yerel yönetim seçimlerine…", "birlikte yapılacak olan genel ve yerel seçimler". CHP'nin baraj
+  altında kalması kaydın kendi sayılarından görülüyor (%8,7 < %10, 0 sandalye).
+- Erişim: 2026-09-22/23.
+
+### 1993-05-cb-tbmm
+
+- **[B] TBMM Tutanak Dergisi, Dönem 19, Cilt 35, 103. Birleşim (16.5.1993 Pazar)**
+  (`www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/d19/c035/tbmm19035103.pdf`, basılı s. 507–508):
+  Tasnif Komisyonu tutanağı — "Cumhurbaşkanı Seçimi için yapılan **üçüncü tur** oylamaya
+  **431 üye** katılmış…" Süleyman Demirel **244**, Kâmran İnan 94, Lütfi Doğan 47, İsmail Cem 27,
+  Boş 19. Başkan: "…Süleyman Demirel, Anayasanın 102 nci maddesinde üçüncü oylama için öngörülen
+  salt çoğunluğu sağlamış, 244 oyla Türkiye Cumhuriyetinin 9 uncu Cumhurbaşkanı seçilmiş
+  bulunmaktadır."
+  Aynı birleşimin "Geçen Tutanak Özeti"nde (s. 504): "Cumhurbaşkanı seçimi için yapılan **ikinci
+  tur** oylamada, gösterilen adaylardan hiçbiri, Anayasanın 102 nci maddesinde öngörülen üçte iki
+  çoğunluğu sağlayamadığından…" → ilk iki tur başarısız, `turSayisi: 3`.
+  (İlgili birleşimler: 101. Birleşim 8.5.1993 ve 102. Birleşim 12.5.1993 — ikisinin de gündeminde
+  "Cumhurbaşkanı Seçimi" var; kayda yalnızca tur sayısı yazıldı, tur tarihleri yazılmadı.)
+- **İkinci kaynak: Cumhurbaşkanlığı (tccb.gov.tr), Süleyman Demirel sayfası** — "Demirel was
+  elected as the ninth President of Turkey by the TBMM on 16 May 1993 and left the Office after
+  his seven year term on 16 May 2000." Tarih, seçen merci (TBMM) ve sıra (9.) birebir eşleşti.
+  Uyuşmazlık: yok.
+- Erişim: 2026-09-22/23.
+
+### 2000-05-cb-tbmm
+
+- **[B] TBMM Tutanak Dergisi, Dönem 21, Cilt 32, 90. Birleşim (5.5.2000)**
+  (`www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/d21/c032/tbmm21032090.pdf`): Başkan "Şimdi,
+  **üçüncü tur** oylamayı yapacağız" dedikten sonra Tasnif Komisyonu tutanağı —
+  "Cumhurbaşkanlığı için yapılan üçüncü oylamaya **533 üye** katılmış…": Ahmet Necdet Sezer
+  **330**, Nevzat Yalçıntaş 113, Sadi Somuncuoğlu 43, Rasim Zaimoğlu 24. Başkan: "…Anayasa
+  Mahkemesi Başkanı Sayın Ahmet Necdet Sezer, Anayasanın 102 nci maddesine göre üçüncü oylama
+  için öngörülen salt çoğunluğu sağlamış ve 330 oyla, Türkiye Cumhuriyetinin 10 uncu
+  Cumhurbaşkanı seçilmiş bulunmaktadır." Ayrıca: "Sayın Cumhurbaşkanının andiçme töreni, Genel
+  Kurulun **16 Mayıs 2000** tarihli birleşiminde yapılacaktır." Aynı birleşimin geçen tutanak
+  özeti ikinci turun 2/3 çoğunluğu sağlayamadığını yazıyor → `turSayisi: 3`.
+- **İkinci kaynak: TBMM Kararı No. 695, Kabul tarihi 5.5.2000, Resmî Gazete 6.5.2000 / 24041**
+  (`www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc084/karartbmmc084/karartbmmc08400695.pdf`)
+  — "Türkiye Büyük Millet Meclisi Genel Kurulunun 5.5.2000 tarihli 90 inci Birleşiminde, Anayasa
+  Mahkemesi Başkam Necdet Sezer (330) oy ile Türkiye Cumhurbaşkanı seçilmiştir." Tutanaklar
+  dipnotu: Cilt 32, Birleşim **88, 89, 90** (üç tur). Tarih ve oy sayısı birebir eşleşti.
+  Uyuşmazlık: yok.
+- **Dönem kararı:** 2000 CB seçimi 5 Mayıs 2000'de yapıldığı (andiçme 16 Mayıs 2000) için
+  1991–2000 aralığına düşüyor → dönem 5'e eklendi.
+- Erişim: 2026-09-23.
+
+### Hükümetler 48-57
+
+Ölçüt (dönem 3'te seçilip bütün dönemlerde uygulanan): `baslangic`/`bitis` = TBMM
+*Hükümetler, Programları ve Genel Kurul Görüşmeleri* cildinin içindekiler/başlık satırındaki
+kuruluş–bitiş tarihleri; `partiler` ve `tip` = aynı cildin **Bakanlar Kurulu listesindeki parti
+etiketleri** ve varsa **koalisyon protokolü** başlığı; `bitisNedeni` = aynı cildin program
+görüşmeleri / Cumhurbaşkanlığı tezkereleri.
+
+**Kaynak ciltler:**
+- **[B] Cilt 8** (9 Kasım 1989 – 30 Ekim 1995) — `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/bfe1edae-c4f8-4520-801f-92cefd45e253/content`
+  (dönem 4'ün indirdiği kopya).
+- **[B] Cilt 9** (30 Ekim 1995 – 11 Ocak 1999) — bitstream
+  `ed9cef72-34f2-44bc-9a66-e77e6c0aab99` (dosya adı `201400891-c9.pdf`). **Görev 1'in "cilt 9
+  adresi yok" notu düzeltildi:** cilt 9 ve 10, `hukumetler_cilt_9.pdf` gibi doğrudan bir adresle
+  değil, koleksiyon öğesinin (`/items/2305701f-7bde-4344-bfbe-4166743fe1e2`) ORIGINAL
+  paketindeki bitstream listesinden
+  (`/core/bundles/88774567-0d57-4e64-8a8e-bf03cfb196f7/bitstreams?size=50`) bulunuyor.
+- **[B] Cilt 10** (11 Ocak 1999 – ) — bitstream `1bb4bf9a-a93e-40ff-852c-8d5d07c890b7`
+  (`201400892-c10.pdf`).
+
+**İçindekiler satırları (başlangıç/bitiş tarihleri, basılı sayfa):**
+- Cilt 8: "48 I. Yılmaz Hükümeti (23.06.1991-20.11.1991) … 6407"; "49 VII. Demirel Hükümeti
+  (20.11.1991-25.06.1993) … 6529"; "50 I. Çiller Hükümeti (25.06.1993-05.10.1995) … 6717";
+  "51 II. Çiller Hükümeti (05.10.1995-30.10.1995) … 6919".
+- Cilt 9: "52 III. Çiller Hükümeti (30.10.1995-06.03.1996) … 7063"; "53 II. Yılmaz Hükümeti
+  (06.03.1996-28.06.1996) … 7205"; "54 Erbakan Hükümeti (28.06.1996-30.06.1997) … 7395";
+  "55 III. Yılmaz Hükümeti (30.06.1997-11.01.1999) … 7567".
+- Cilt 10: "56 IV. Ecevit Hükümeti (11.01.1999-28.05.1999) … 7767"; "57 V. Ecevit Hükümeti
+  (28.05.1999-18.11.2002) … 7875".
+- **Zincirleme:** 47 (bitiş 23.06.1991) → 48 → 49 → 50 → 51 → 52 → 53 → 54 → 55 → 56 → 57,
+  her birinin bitişi bir sonrakinin başlangıcına tam eşit; `dogrula.js` boşluk uyarısı vermiyor.
+
+**Parti bileşimi ve `tip` (kabine bileşimi ölçütü):**
+- **48 (Mesut Yılmaz):** Cilt 8 s. 6408–6409 Bakanlar Kurulu listesinde hiçbir bakan parti
+  etiketi taşımıyor (tek parti kabinesi; birkaç bakan "TBMM dışından"), koalisyon protokolü yok →
+  `partiler: ["anap"]`. 1987 seçiminde ANAP 292/450 (meclis çoğunluğu) → `tip: "tek-parti"`.
+- **49 (Demirel):** Cilt 8 s. 6530–6531'de her bakanın yanında parti etiketi var (DYP/SHP),
+  ardından "Koalisyon Protokolü (DYP - SHP)" → `partiler: ["dyp","shp"]`, `tip: "koalisyon"`.
+  `not`taki "19 Kasım 1991 tarihli protokol" ifadesi, 50'nin protokol girişinde geçen "önceki
+  DYP-SHP Ortak Hükümetinin oluşumunu düzenleyen 19 Kasım 1991 tarihli Protokolü" ibaresinden.
+- **50 (Çiller):** Cilt 8 s. 6718–6721 listesinde DYP ve SHP etiketleri; s. 6721'de "Koalisyon
+  Protokolü (DYP - SHP)" → `partiler: ["dyp","shp"]`, `tip: "koalisyon"`. Aynı listede 1994 sonu
+  ve 1995 tarihli değişikliklerde SHP'li bakanların yerine geçenler **CHP** etiketli (ör. "Hikmet
+  ÇETİN (Gaziantep, CHP) 27.12.1994-27.03.1995") — kaydın `not` cümlesi buna dayanıyor.
+  Kuruluş bileşimi DYP+SHP olduğu için `partiler` iki partiyle yazıldı.
+- **51 (Çiller):** Cilt 8 s. 6920–6921 listesinde **hiç parti etiketi yok** (tek parti kabinesi).
+  Partisi ve azınlık niteliği [B] olarak Cilt 9'daki III. Çiller program görüşmesinden (basılı
+  s. 7113): "Doğru Yol Partisi, Hükümetin istifasından sonra, Sayın Başbakana Cumhurbaşkanımız
+  tarafından görev verilmesi üzerine, haliyle, bir azınlık hükümeti kurma çabası içerisine
+  girecekti… bu hükümet kurulmuştur; ancak, Türkiye Büyük Millet Meclisinde güvenoyu
+  alamamıştır." → `partiler: ["dyp"]`, `tip: "azinlik"` (DYP 1991'de 178/450).
+- **52 (Çiller):** Cilt 9 s. 7064–7065 listesinde DYP ve CHP etiketleri; s. 7066'da "Koalisyon
+  Protokolü (DYP - CHP) — Yazılı protokol metni yoktur…" → `partiler: ["dyp","chp92"]`,
+  `tip: "koalisyon"`; `not`taki "yazılı metni olmayan" ifadesi buradan.
+- **53 (Yılmaz):** Cilt 9 s. 7208'de "Koalisyon Protokolü (ANAP-DYP)"; Bakanlar Kurulu listesinde
+  ANAP ve DYP etiketleri → `partiler: ["anap","dyp"]`, `tip: "koalisyon"`.
+- **54 (Erbakan):** Cilt 9 s. 7398'de "Koalisyon Protokolü (RP-DYP)"; listede RP ve DYP
+  etiketleri → `partiler: ["rp","dyp"]`, `tip: "koalisyon"`.
+- **55 (Yılmaz):** Cilt 9 s. 7571'de "Koalisyon Protokolü (ANAP-DSP-DTP)" ve girişi: "Anavatan
+  Partisi, Demokratik Sol Parti ve Demokrat Türkiye Partisi…"; Bakanlar Kurulu listesinde 21 ANAP,
+  11 DSP, 6 DTP etiketi (bir bakan "Bağımsız") → `partiler: ["anap","dsp","dtp97"]`,
+  `tip: "koalisyon"`. Kaydın `not`undaki "üç partili azınlık hükümeti" ifadesi [B] Cilt 10'daki
+  Ecevit'in program konuşmasından: "Üç partili bir azınlık hükümeti olmasına karşın, 55'inci
+  hükümet…". (Kullanıcı kararı gereği `tip` ölçütü kabine bileşimi olduğundan `koalisyon` yazıldı.)
+- **56 (Ecevit):** Cilt 10 s. 7768–7769 listesinde hiç parti etiketi yok. Partisi ve niteliği
+  [B] olarak Ecevit'in kendi program konuşmasından: "Anavatan Partisi ile Doğru Yol Partisinin
+  dışarıdan destek sözü verdikleri **Demokratik Sol Parti azınlık hükümeti kurulmuştur.**" →
+  `partiler: ["dsp"]`, `tip: "azinlik"` (DSP 1995'te 76/550).
+- **57 (Ecevit):** Cilt 10 s. 7875'te bölüm başlığı "V. Ecevit Hükümeti (**DSP-MHP-ANAP
+  Koalisyonu**)"; Bakanlar Kurulu listesinde 14 ANAP, 11 DSP, 11 MHP etiketi →
+  `partiler: ["dsp","mhp93","anap"]`, `tip: "koalisyon"`.
+
+**Bitiş nedenleri:**
+- **47 → `istifa` (dönem 4'ten devralınan boşluk dolduruldu):** [B] Cilt 8 s. 6410–6411,
+  TBMM Tutanak Dergisi Dönem 18 Cilt 61 Birleşim 129 (Olağanüstü, 30.06.1991) — Cumhurbaşkanlığı
+  tezkeresi: "Başbakan Erzincan Milletvekili Sayın Yıldırım Akbulut Başbakanlık görevinden
+  **istifa etmiş ve istifası kabul olunmuştur.**" (Turgut Özal). Ertesi tezkere (17 Haziran 1991):
+  "İlgi yazı ile istifası bildirilmiş olan Bakanlar Kurulunun yeniden teşkili için… Rize
+  Milletvekili ve **Anavatan Partisi Genel Başkanı** A. Mesut Yılmaz'ı görevlendirdim." — 48'in
+  `not` cümlesi de buna dayanır. (ANAP kurultayı tarihi/ayrıntısı yalnızca haber ve ansiklopedi
+  kaynaklarında bulunabildiği için veriye **yazılmadı**; yalnızca "istifa" olgusu [B] kaynaklıdır.)
+- **48 → `secim`:** Cilt 8'deki DYP–SHP koalisyon protokolü girişi (s. 6532): "20 Ekim 1991
+  Millet Meclisi Genel seçimlerinin kesin sonuçları ilan edilmiş… Sayın Cumhurbaşkanı… DYP Genel
+  Başkanı Sayın Demirel'i hükümet kurmakla görevlendirmiştir." **Sınırlılık:** 1991 seçiminin
+  "yenileme/erken seçim" olduğunu söyleyen bir [B] ifade bu turda bulunamadı (Meclis'in yenileme
+  kararına dair Resmî Gazete metnine erişilemedi; resmigazete.gov.tr arşivi `curl` ile yanıt
+  vermedi) → daha güçlü olan `erken-secim` yerine `secim` yazıldı.
+- **49 → `cumhurbaskani-secimi`:** [B] Cilt 8 s. 6733, Çiller'in program konuşması: "Yedi kez
+  Başbakan olarak ülkemize büyük hizmetler vermiş bulunan Sayın Süleyman Demirel'in ülkemizin
+  **Cumhurbaşkanlığına seçilişi ertesinde** DYP Genel Başkanlığı'nı üstlenerek, yeni Hükümeti
+  kurmakla görevlendirildim."
+- **50 → `istifa`:** [B] Cilt 9, III. Çiller program görüşmesi (basılı s. 7067 ve 7113):
+  "**20 Eylül 1995 tarihinde 50'nci Hükümetin istifasıyla** ve 51'inci Hükümetin Türkiye Büyük
+  Millet Meclisinden güvenoyu alamaması nedeniyle…"
+- **51 → `guvensizlik`:** aynı cümle — "51'inci Hükümetin Türkiye Büyük Millet Meclisinden
+  **güvenoyu alamaması**".
+- **52 → `erken-secim`:** [B] Cilt 9 s. 7114: "**24 Aralıkta seçimlerin yenilenmesine karar alan
+  bir meclis** ve siyasî partilerin durumu nedeniyle…"; aynı görüşmede: "27.10.1995 tarih ve 2125
+  sayılı Yasayla, 24 Aralık 1995 tarihinde seçimlere karar verdik. Ayrıca, aynı gün, seçimlerin
+  yenilenmesine karar aldık." 52'nin kendisi de aynı görüşmede "esas itibariyle bir seçim
+  hükümeti" olarak tanımlanıyor (s. 7113).
+- **53 → `istifa`:** [B] Cilt 9 s. 7452, 54. Hükümet'in program görüşmesi: "Türk siyasî tarihinde
+  ilk defa bir hükümet, **yargı kararıyla, güvenoyu almadığı için istifa etmek zorunda
+  kalmıştır.** İstifa eden bir hükümetin yerine bugün, çoğunluğa dayanan bir Hükümet kurulmuştur.
+  Elbette, burada Anayasa Mahkemesinin tarafsız ve adil tutumunu da zikretmek istiyorum."
+- **54 → `istifa`:** [B] Cilt 9, 55. Hükümet'in program görüşmesi — "bu Hükümet, bir süre önce
+  işbaşında bulunan **Refahyol Hükümetinin, çok özel koşullarda istifa ederek**, Hükümeti
+  boşaltmak zorunda kalması sonucunda ortaya çıkmıştır" ve ayrı bir konuşmacı: "bugünkü Hükümet,
+  **Refah Partisi ve Doğru Yol Partisi Hükümetinin istifasından sonra** kurulmuştur." (Kaydın
+  `not` cümlesi "olağandışı koşullarda istifa" ifadesiyle sınırlı tutuldu; 28 Şubat süreciyle
+  nedensel bağ kurmak yorum olacağından yazılmadı.)
+- **55 → `guvensizlik`:** [B] Cilt 10, Ecevit'in 56. Hükümet program konuşması: "**55'inci
+  cumhuriyet hükümetinin güven oylaması ile düşürülmesi** üzerine ortaya çıkan hükümet sorunu…"
+- **56 → `erken-secim`:** [B] Cilt 10, Ecevit'in kendi konuşması: "Büyük Millet Meclisimiz…
+  nisan ayında seçimlerin yapılmasını kararlaştırmıştı… Tabiî, **18 Nisanda - yani, bir erkene
+  alınmış - seçim** yapılmalı mıydı…" Aynı konuşma 56'nın "yaklaşan seçimlerle sınırlı bir ömrü
+  olacağı"nı söylüyor; bir başka konuşmacı: "56'ncı hükümet, **18 Nisan seçimlerine kadar** görev
+  yapacaktır."
+- **57 → `erken-secim`:** [B] Cilt 10, 58. Hükümet (Gül) program görüşmesi: "**21'inci Dönem
+  Meclisi erken seçim kararı aldıktan sonra**, erken seçimin ertelenmesinde…"; seçim tarihi
+  (3 Kasım 2002) [B] TÜİK Ek-1 listesinde. 57'nin `baslangic`'ı 1991–2000 aralığında olduğu için
+  kayıt dönem 5'te yazıldı; `bitis` tarihi (18.11.2002) dönem 6'ya taşar.
+- Erişim: 2026-09-22/23.
+
+---
+
+### 1994-03-yerel
+
+- **Envanter [B]:** YSK Mahalli İdareler Genel Seçimleri Arşivi (`ysk.gov.tr/tr/mahalli-idareler-genel-secimleri-arsivi/2650`,
+  tarayıcıyla açılıp DOM'dan okundu — sayfa JS kabuğu olduğu için `curl` yalnızca boş kabuk
+  döndürüyor): "**27 Mart 1994** Mahalli İdareler Genel Seçimleri". Seçim sayfası
+  (`/tr/27-mart-1994-mahalli-idareler-genel-secimi/2804`) dört PDF veriyor: İl Genel Meclisi
+  Üyeliği, Büyükşehir Belediye Başkanlığı, Belediye Başkanlığı, Belediye Meclis Üyeliği.
+- **[B] YSK, "27 MART 1994 BELEDİYE MECLİS ÜYELİĞİ SEÇİMİ SONUÇLARI"**
+  (`ysk.gov.tr/doc/dosyalar/docs/Mahalli/1994/KesinSecimSonuclari/1994-Belediye-Meclis-Uyeligi-Secimleri-Sonucu.pdf`,
+  `pdftotext -table`, 3 sayfa, **76 ilin tamamı** — 1994'te Türkiye'de 76 il vardı). Türkiye
+  toplamı satırı **yok**; `araclar/topla.js` ile hesaplandı ("hesaplandı"):
+  kayıtlı 23.305.825, kullanılan 21.099.154, geçerli 19.730.006;
+  ANAP 4.512.609, RP 3.783.195, DYP 3.718.962, SHP 3.302.166, DSP 1.642.727, MHP 1.501.038,
+  CHP 847.672, BBP 211.021, DP 65.062, YDP 34.664, MİLLET PARTİSİ 34.217, İP 33.056,
+  SBP 21.866, Bağımsız 21.037. (Parti oyları toplamı 19.729.292 — kaynağın kendi "geçerli oy
+  toplamı" sütun toplamından **714 oy** eksik; fark tek bir ilden, ANTALYA'dan geliyor: o ilin
+  satırında bağımsızlar hücresi boş ve parti toplamı ilin geçerli oyundan 714 eksik. Oran
+  %0,004 — tolerans içinde, kaynağın kendi iç tutarsızlığı.)
+- **Ulusal toplam veriye YAZILMADI (null).** Spesifikasyon §8.1: il tablosundan hesaplanan ulusal
+  toplam **aynı ölçüyü veren bağımsız bir ikinci ulusal kaynakla** eşleşmek zorunda. Aranan ve
+  bulunamayan kaynaklar: TÜİK'in `1994Mahalli-Tuik.pdf` benzeri yayını (1989 için var, 1994/1999
+  için yok — YSK sunucusu SPA kabuğu döndürüyor); TÜİK 2009 mahalli idareler CD'si
+  (`tuik.gov.tr/indir/secim_2009/aklama.pdf`) — açıklamasında "tablolarında yer alan Türkiye
+  toplam sonuçları… YSK tarafından Resmi Gazete'de ilan edilen sonuçlardan" alındığı yazıyor ama
+  **çok yıllı karşılaştırma tablosu yalnızca İl Genel Meclisi için** (Tablo 1.1: 1984, 1989, 1994,
+  1999, 2004, 2009); Belediye Meclisi tablosu (4.1) yalnızca 2009'u kapsıyor. Resmî Gazete arşivi
+  (`resmigazete.gov.tr/arsiv/…`) `curl` ile yanıt vermedi. Dönem 4'ün 1984/1989 kayıtlarında
+  uygulanan (ve controller incelemesiyle onaylanan) emsale uyularak `kayitli`/`kullanilan`/
+  `gecerli` ve bütün `sonuc[].oy` alanları **null** yapıldı; hangi partilerin seçime katıldığı
+  (YSK tablosunun sütun başlıkları) korundu, satır sırası yukarıdaki hesaplanmış toplamlara göre.
+- **Kısaltmalar:** MİLLET PARTİSİ = Millet Partisi, YDP = Yeniden Doğuş Partisi (ikisi de [B]
+  TÜİK "Simge ve Kısaltmalar", PDF s. 7); **SBP** TÜİK'in kısaltma listesinde yok, açılımı için
+  [B] kaynak bulunamadı → veriye `ad:"SBP"` olarak, kaynaktaki haliyle yazıldı.
+  Soyağacında olmayanlar: Millet Partisi, Yeniden Doğuş Partisi, SBP.
+- Erişim: 2026-09-23.
+
+### 1994-03-yerel — büyükşehir (İstanbul, Ankara, İzmir)
+
+- **[B] YSK, "27 MART 1994 BÜYÜKŞEHİR BELEDİYE BAŞKANLIĞI SEÇİMİ SONUÇLARI"**
+  (`…/1994/KesinSecimSonuclari/1994-Buyuksehir-Belediye-Baskanligi-Secimleri-Sonucu.pdf`,
+  `pdftotext -table`, 16 büyükşehir). Sütun başlıkları alfabetik: ANAP, BBP, CHP, DP, DSP, DYP,
+  İP, MİLLET PARTİSİ, MHP, RP, SBP, SHP, YDP, BAĞIMSIZLAR. Üç şehrin satır toplamı, kaynağın
+  kendi "GEÇERLİ OY TOPLAMI" sütunuyla **tam eşit** çıktı (sütun eşlemesinin doğruluk denetimi):
+  - **İSTANBUL** (geçerli 3.865.126): **RP 973.704**, ANAP 855.897, SHP 784.693, DSP 597.461,
+    DYP 478.612, MHP 72.121, CHP 54.028, … → kazanan **RP**.
+  - **ANKARA** (geçerli 1.439.838): **RP 393.623**, SHP 387.152, ANAP 268.519, DYP 119.824,
+    DSP 111.740, MHP 104.304, … → kazanan **RP**.
+  - **İZMİR** (geçerli 1.061.184): **DYP 294.647**, SHP 281.721, ANAP 208.607, DSP 159.394,
+    RP 74.120, CHP 26.909, … → kazanan **DYP**.
+- **İkinci kaynaklar (haber arşivi):**
+  - İstanbul + Ankara: Medyascope, "Gomaşinen (25): 27 Mart 1994 yerel seçimleri: Refah ve
+    Erdoğan'ın zaferi" — "6 Büyükşehir kazanmış: **İstanbul, Ankara**, Diyarbakır, Erzurum,
+    Konya, Kayseri" (Refah Partisi). TRT Haber, "Geçmişten günümüze İstanbul seçimleri" —
+    "Refah Partisi'nin adayı Recep Tayyip Erdoğan… seçimi kazanmayı başardı."
+  - İzmir: Karar, "Eski İzmir Büyükşehir Belediye Başkanı Burhan Özfatura vefat etti" —
+    "**1994'te Doğru Yol Partisi'nden (DYP)** yeniden aday oldu ve İzmir Büyükşehir Belediye
+    Başkanlığı görevine ikinci kez seçildi." YSK'nın DYP sütunundaki birincilikle eşleşti.
+  - Uyuşmazlık: yok. (`buyuksehir` yalnızca kazanan partiyi tutar; oy sayısı yazılmaz.)
+- Erişim: 2026-09-23.
+
+### 1999-04-yerel
+
+- **Envanter [B]:** YSK Mahalli İdareler arşivi: "**18 Nisan 1999** Mahalli İdareler Genel
+  Seçimleri" (`/tr/18-nisan-1999-mahalli-idareler-genel-secimi/2805`). Genel seçimle aynı gün
+  yapıldığı ayrıca [B] TBMM Cilt 10'da (IV. Ecevit Hükümeti program metni): "18 Nisanda yapılacak
+  milletvekili genel seçimlerine ve yerel yönetim seçimlerine…".
+- **[B] YSK, "18 NİSAN 1999 BELEDİYE MECLİS ÜYELİĞİ SEÇİMİ SONUCU"**
+  (`ysk.gov.tr/doc/dosyalar/docs/Mahalli/1999/KesinSecimsonuclar/Belediye-Meclis-Uyeligi-Secimleri-Sonucu.pdf`)
+  — **kaynak eksik:** PDF yalnızca **76 il** içeriyor; 1999'da Türkiye'de 80 il vardı ve
+  **HATAY, HAKKÂRİ, TRABZON, TUNCELİ** satırları belgede hiç yok (`-table`, `-layout` ve `-raw`
+  modlarının üçünde de yok; aynı seçimin İl Genel Meclisi PDF'inde 79 il var). Brief'in kuralı
+  gereği ("bir ilin kırılımı okunamıyorsa onu 'Diğer'e gömme — etkilenen değerler null olur")
+  ülke geneli sayıların tamamı **null** yapıldı.
+- Yine de kayıt altına alınması için, **76 ilden** hesaplanan (eksik, veriye yazılmamış) toplamlar:
+  kayıtlı 27.833.812, kullanılan 23.735.076, geçerli 22.435.196; FP 4.109.576, ANAP 3.774.759,
+  DSP 3.696.999, MHP 3.540.964, CHP 2.942.754, DYP 2.802.292, HADEP 771.173, BBP 297.388,
+  DTP 149.417, ÖDP 148.176, MİLLET PARTİSİ 35.631, BP 34.888, DP 32.783, EMEP 20.500,
+  LDP 20.230, İP 20.024, Bağımsız 16.369, YDP 13.270, DBP 3.267, DEPAR 3.221, SİP 1.046,
+  DEHAP 115. (Bu eksik toplamlar yalnızca `sonuc` satırlarının **sıralaması** için kullanıldı;
+  hiçbiri veriye yazılmadı. 76 ilin 4'ünde kaynağın kendi geçerli-oy sütunu parti toplamından
+  27–227 oy farklı — kaynağın iç tutarsızlığı, oran %0,001–%0,1.)
+- **Kısaltmalar** [B] TÜİK "Simge ve Kısaltmalar" (PDF s. 7): BP = Barış Partisi, DBP = Demokrasi
+  ve Barış Partisi, DEPAR = Değişen Türkiye Partisi, SİP = Sosyalist İktidar Partisi,
+  YDP = Yeniden Doğuş Partisi, MİLLET PARTİSİ = Millet Partisi. Soyağacında olmayanlar: Millet
+  Partisi, Barış Partisi, Demokrasi ve Barış Partisi, Değişen Türkiye Partisi, Sosyalist İktidar
+  Partisi, Yeniden Doğuş Partisi.
+- Erişim: 2026-09-23.
+
+### 1999-04-yerel — büyükşehir (İstanbul, Ankara, İzmir)
+
+- **[B] YSK, "18 NİSAN 1999 BÜYÜKŞEHİR BELEDİYE BAŞKANLIĞI SEÇİMİ SONUÇLARI"**
+  (`…/1999/KesinSecimsonuclar/Buyuksehir-Belediye-Baskanligi-Secimleri-Sonucu.pdf`,
+  `pdftotext -table`). Üç şehrin satır toplamı kaynağın kendi geçerli oy sütunuyla **tam eşit**:
+  - **İSTANBUL** (geçerli 4.368.656): **FP 1.202.050**, ANAP 977.920, DYP 882.923, CHP 607.895,
+    MHP 320.734, DSP 165.114, … → kazanan **FP**.
+  - **ANKARA** (geçerli 1.602.528): **FP 541.515**, CHP 512.083, MHP 189.400, DSP 169.490,
+    ANAP 106.540, DYP 42.128, … → kazanan **FP**.
+  - **İZMİR** (geçerli 1.206.091): **DSP 367.553**, ANAP 230.673, CHP 217.337, DYP 197.169,
+    MHP 82.140, HADEP 45.559, FP 41.200, … → kazanan **DSP**.
+- **İkinci kaynaklar:**
+  - Ankara: Sputnik Türkiye / anlatilaninotesi.com.tr, "Ankara'da belediye başkanlığı yarışında
+    önceki 5 seçimin karnesi" — 1999 için kayıtlı 1.924.115, oy kullanan 1.690.527, geçerli
+    1.602.528, **Fazilet Partisi'nden Melih Gökçek 541.515**, CHP (Murat Karayalçın) 512.083,
+    MHP 189.400, DSP 169.490. YSK ile **yedi sayının tamamında birebir** eşleşti — bu aynı zamanda
+    `-table` sütun eşlemesinin bağımsız doğrulaması oldu. Uyuşmazlık: yok.
+  - İstanbul: TRT Haber, "Geçmişten günümüze İstanbul seçimleri" — "**Fazilet Partisi'nin adayı
+    Ali Müfit Gürtuna** yüzde 27,52 oy ile büyükşehir belediyesinin dördüncü başkanı oldu."
+    (YSK: 1.202.050/4.368.656 = %27,52 — birebir.)
+  - İzmir: Hürriyet, "Ahmet Piriştina vefat etti" — "1999 seçimlerinde **DSP'den İzmir Büyükşehir
+    Belediye Başkanı seçilmiş**".
+- Erişim: 2026-09-23.
+
+### Ara seçimler (1991–2000) — envanter sonucu: dönem 5'te ara seçim YOK
+
+- **[B] TBMM Cilt 8** (18. Dönem genel kurul görüşmeleri, basılı s. ~6500 ve 6690 civarı) — bir
+  milletvekilinin konuşması: "…1991'e çok yaklaştık; kasıma kadar milletvekili ara seçimi
+  yapılmazsa… Bugüne kadar, milletvekili ara seçimi için Meclis kararı [alınmadı]… milletvekili
+  ara seçimi çoktan yapılmış olmalıydı; ama, yapılmamasının kusuru…"; başka bir birleşimde:
+  "Gelin ara seçim yapın… Anayasaya göre, yapmak zorundasınız." Aynı cildin ilerleyen
+  bölümlerinde: "ara seçim bir anayasal zorunluluk olduğu halde… anayasa ihlali yaparak ara
+  seçimlere gitmeyen…". → 18. Dönem'de ara seçim yapılmadığı [B] kaynaktan.
+- **Cilt 9 ve Cilt 10'da** (19., 20. ve 21. dönemler) yapılmış bir milletvekili ara seçimine dair
+  tek bir kayıt yok (yalnızca 1979 Senato ara seçimlerine geçmişe dönük bir atıf var).
+- **İkinci kaynak (derleme):** TESAV'ın "Milletvekili Ara Seçim Sonuçları" başlıklı derlemesi
+  yıl listesini **1947, 1948, 1949, 1951, 1966, 1968, 1975, 1979, 1986, 2003** olarak veriyor —
+  1986 ile 2003 arasında ara seçim yok.
+- **Sonuç:** dönem 5'e (1991–2000) hiçbir `ara` kaydı eklenmedi; Görev 12'ye devredilecek
+  doğrulanamamış ara seçim de yok.
+- Erişim: 2026-09-23.
+
+---
diff --git a/veri/sandik.js b/veri/sandik.js
index 85fe57c..69eb963 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -317,21 +317,67 @@ window.SANDIK = {
     { id: "1989-03-yerel", tur: "yerel", tarih: "1989-03-26",
       olcu: "belediye-meclisi",
       kayitli: null, kullanilan: null, gecerli: null,
       sonuc: [ { parti: "shp", oy: null }, { parti: "dyp", oy: null }, { parti: "anap", oy: null }, { parti: "rp", oy: null }, { parti: "dsp", oy: null }, { parti: "mcp", oy: null }, { ad: "IDP", oy: null }, { ad: "Bağımsız", oy: null } ],
       buyuksehir: { istanbul: { parti: "shp" }, ankara: { parti: "shp" }, izmir: { parti: "shp" } },
       not: "ANAP'ın 1984'e göre oy kaybettiği, SHP'nin İstanbul, Ankara ve İzmir'i kazandığı seçim. Ülke geneli belediye meclisi oy toplamı için bağımsız, aynı ölçüyü veren ikinci bir ulusal kaynak bulunamadığından sayılar null bırakıldı; hangi partilerin katıldığı biliniyor." },
 
     // kaynak: araclar/kaynak-defteri.md#1989-10-cb-tbmm
     { id: "1989-10-cb-tbmm", tur: "cb-tbmm", tarih: "1989-10-31",
       secilen: "Turgut Özal", turSayisi: 3,
-      not: "1. tur (20 Ekim, 247 oy) ve 2. tur (24 Ekim, 256 oy) 2/3 çoğunluğu (300) sağlayamadı; 3. turda (31 Ekim) salt çoğunlukla (263 oy) seçildi. SHP ve DYP oylamalara katılmadı." }
+      not: "1. tur (20 Ekim, 247 oy) ve 2. tur (24 Ekim, 256 oy) 2/3 çoğunluğu (300) sağlayamadı; 3. turda (31 Ekim) salt çoğunlukla (263 oy) seçildi. SHP ve DYP oylamalara katılmadı." },
+
+    // --- dönem 5 (1991 – 2000) ---
+
+    // kaynak: araclar/kaynak-defteri.md#1991-10-genel
+    { id: "1991-10-genel", tur: "genel", tarih: "1991-10-20", tekParti: false,
+      meclis: 450, kayitli: 29979123, kullanilan: 25157089, gecerli: 24416666, baraj: 10,
+      sonuc: [ { parti: "dyp", oy: 6600726, sandalye: 178 }, { parti: "anap", oy: 5862623, sandalye: 115 }, { parti: "shp", oy: 5066571, sandalye: 88 }, { parti: "rp", oy: 4121355, sandalye: 62 }, { parti: "dsp", oy: 2624301, sandalye: 7 }, { ad: "Diğer", partiSayisi: 1, oy: 108369, sandalye: 0 }, { ad: "Bağımsız", oy: 32721, sandalye: 0 } ],
+      not: "Hiçbir parti tek başına hükümet kuracak çoğunluğu sağlayamadı; seçimden sonra DYP–SHP koalisyonu kuruldu. Sayılar il ve gümrük kapısı oylarının toplamıdır." },
+
+    // kaynak: araclar/kaynak-defteri.md#1993-05-cb-tbmm
+    { id: "1993-05-cb-tbmm", tur: "cb-tbmm", tarih: "1993-05-16",
+      secilen: "Süleyman Demirel", turSayisi: 3,
+      not: "İlk iki turda Anayasa'nın 102. maddesindeki 2/3 çoğunluk sağlanamadı; 431 üyenin katıldığı üçüncü turda Demirel 244 oyla 9. Cumhurbaşkanı seçildi." },
+
+    // kaynak: araclar/kaynak-defteri.md#1994-03-yerel
+    { id: "1994-03-yerel", tur: "yerel", tarih: "1994-03-27",
+      olcu: "belediye-meclisi",
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [ { parti: "anap", oy: null }, { parti: "rp", oy: null }, { parti: "dyp", oy: null }, { parti: "shp", oy: null }, { parti: "dsp", oy: null }, { parti: "mhp93", oy: null }, { parti: "chp92", oy: null }, { parti: "bbp", oy: null }, { parti: "dp92", oy: null }, { ad: "Yeniden Doğuş Partisi", oy: null }, { ad: "Millet Partisi", oy: null }, { parti: "ip92", oy: null }, { ad: "SBP", oy: null }, { ad: "Bağımsız", oy: null } ],
+      buyuksehir: { istanbul: { parti: "rp" }, ankara: { parti: "rp" }, izmir: { parti: "dyp" } },
+      not: "Refah Partisi'nin İstanbul ve Ankara büyükşehir belediyelerini kazandığı seçim; ülke geneli belediye meclisi toplamı YSK'nın il tablosundan hesaplanabildi ama aynı ölçüyü veren bağımsız ikinci bir ulusal kaynak bulunamadığından sayılar null bırakıldı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1995-12-genel
+    { id: "1995-12-genel", tur: "genel", tarih: "1995-12-24", tekParti: false,
+      meclis: 550, kayitli: 34155981, kullanilan: 29101469, gecerli: 28126993, baraj: 10,
+      sonuc: [ { parti: "rp", oy: 6012450, sandalye: 158 }, { parti: "dyp", oy: 5396009, sandalye: 135 }, { parti: "anap", oy: 5527288, sandalye: 132 }, { parti: "dsp", oy: 4118025, sandalye: 76 }, { parti: "chp92", oy: 3011076, sandalye: 49 }, { parti: "mhp93", oy: 2301343, sandalye: 0 }, { parti: "hadep", oy: 1171623, sandalye: 0 }, { parti: "ydh", oy: 133889, sandalye: 0 }, { parti: "ip92", oy: 61428, sandalye: 0 }, { ad: "Diğer", partiSayisi: 3, oy: 259967, sandalye: 0 }, { ad: "Bağımsız", oy: 133895, sandalye: 0 } ],
+      not: "Bu seçimden önce kontenjan usulü ve seçim çevresi barajı kaldırılıp %10 ülke barajlı d'Hondt sistemine geçildi, milletvekili sayısı 450'den 550'ye çıkarıldı ve seçmen yaşı 18'e indirildi." },
+
+    // kaynak: araclar/kaynak-defteri.md#1999-04-genel
+    { id: "1999-04-genel", tur: "genel", tarih: "1999-04-18", tekParti: false,
+      meclis: 550, kayitli: 37495217, kullanilan: 32656070, gecerli: 31184496, baraj: 10,
+      sonuc: [ { parti: "dsp", oy: 6919670, sandalye: 136 }, { parti: "mhp93", oy: 5606583, sandalye: 129 }, { parti: "fp", oy: 4805381, sandalye: 111 }, { parti: "anap", oy: 4122929, sandalye: 86 }, { parti: "dyp", oy: 3745417, sandalye: 85 }, { parti: "chp92", oy: 2716094, sandalye: 0 }, { parti: "hadep", oy: 1482196, sandalye: 0 }, { parti: "bbp", oy: 456353, sandalye: 0 }, { parti: "odp", oy: 248553, sandalye: 0 }, { parti: "dtp97", oy: 179871, sandalye: 0 }, { parti: "ldp", oy: 127174, sandalye: 0 }, { parti: "dp92", oy: 92093, sandalye: 0 }, { parti: "ip92", oy: 57607, sandalye: 0 }, { parti: "emep", oy: 51756, sandalye: 0 }, { ad: "Diğer", partiSayisi: 6, oy: 302554, sandalye: 0 }, { ad: "Bağımsız", oy: 270265, sandalye: 3 } ],
+      not: "Genel seçim ile mahalli idareler seçimi aynı gün yapıldı; CHP %10'luk ülke barajını aşamayarak meclis dışında kaldı." },
+
+    // kaynak: araclar/kaynak-defteri.md#1999-04-yerel
+    { id: "1999-04-yerel", tur: "yerel", tarih: "1999-04-18",
+      olcu: "belediye-meclisi",
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [ { parti: "fp", oy: null }, { parti: "anap", oy: null }, { parti: "dsp", oy: null }, { parti: "mhp93", oy: null }, { parti: "chp92", oy: null }, { parti: "dyp", oy: null }, { parti: "hadep", oy: null }, { parti: "bbp", oy: null }, { parti: "dtp97", oy: null }, { parti: "odp", oy: null }, { ad: "Millet Partisi", oy: null }, { ad: "Barış Partisi", oy: null }, { parti: "dp92", oy: null }, { parti: "emep", oy: null }, { parti: "ldp", oy: null }, { parti: "ip92", oy: null }, { ad: "Yeniden Doğuş Partisi", oy: null }, { ad: "Demokrasi ve Barış Partisi", oy: null }, { ad: "Değişen Türkiye Partisi", oy: null }, { ad: "Sosyalist İktidar Partisi", oy: null }, { parti: "dehap", oy: null }, { ad: "Bağımsız", oy: null } ],
+      buyuksehir: { istanbul: { parti: "fp" }, ankara: { parti: "fp" }, izmir: { parti: "dsp" } },
+      not: "Genel seçimle aynı gün yapıldı; YSK'nın belediye meclisi tablosunda dört il (Hatay, Hakkâri, Trabzon, Tunceli) hiç yer almadığı için ülke geneli sayılar hesaplanamadı ve null bırakıldı." },
+
+    // kaynak: araclar/kaynak-defteri.md#2000-05-cb-tbmm
+    { id: "2000-05-cb-tbmm", tur: "cb-tbmm", tarih: "2000-05-05",
+      secilen: "Ahmet Necdet Sezer", turSayisi: 3,
+      not: "Anayasa Mahkemesi Başkanı olan Sezer, 533 üyenin katıldığı üçüncü turda 330 oyla 10. Cumhurbaşkanı seçildi; andiçme töreni 16 Mayıs 2000'de yapıldı." }
   ],
 
   hukumetler: [
     // --- dönem 0 (1923 – 1945) ---
 
     // kaynak: araclar/kaynak-defteri.md#hukumet-1
     { no: 1, basbakan: "İsmet İnönü", partiler: ["chp23"],
       baslangic: "1923-10-30", bitis: "1924-03-06", tip: "tek-parti", bitisNedeni: null,
       not: null },
 
@@ -565,14 +611,66 @@ window.SANDIK = {
       baslangic: "1983-12-13", bitis: "1987-12-21", tip: "tek-parti", bitisNedeni: "erken-secim",
       not: "6 Eylül 1987 referandumu akşamı Özal'ın erken seçim kararını açıklamasının ardından 29 Kasım 1987'de yapılan seçimle sona erdi." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumetler-45-47
     { no: 46, basbakan: "Turgut Özal", partiler: ["anap"],
       baslangic: "1987-12-21", bitis: "1989-11-09", tip: "tek-parti", bitisNedeni: "cumhurbaskani-secimi",
       not: "Özal'ın 31 Ekim 1989'da TBMM'de cumhurbaşkanı seçilmesinin ardından sona erdi." },
 
     // kaynak: araclar/kaynak-defteri.md#hukumetler-45-47
     { no: 47, basbakan: "Yıldırım Akbulut", partiler: ["anap"],
-      baslangic: "1989-11-09", bitis: "1991-06-23", tip: "tek-parti", bitisNedeni: null,
-      not: "Özal'ın cumhurbaşkanı seçilmesinin ardından ANAP grubu içinden kuruldu." }
+      baslangic: "1989-11-09", bitis: "1991-06-23", tip: "tek-parti", bitisNedeni: "istifa",
+      not: "Özal'ın cumhurbaşkanı seçilmesinin ardından ANAP grubu içinden kuruldu; Akbulut'un başbakanlıktan istifasının kabulüyle sona erdi." },
+
+    // --- dönem 5 (1991 – 2000) ---
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
+    { no: 48, basbakan: "Mesut Yılmaz", partiler: ["anap"],
+      baslangic: "1991-06-23", bitis: "1991-11-20", tip: "tek-parti", bitisNedeni: "secim",
+      not: "Akbulut'un istifası üzerine ANAP Genel Başkanı sıfatıyla görevlendirilen Yılmaz'ın kurduğu hükümet, 20 Ekim 1991 genel seçiminin ardından yerini koalisyona bıraktı." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
+    { no: 49, basbakan: "Süleyman Demirel", partiler: ["dyp", "shp"],
+      baslangic: "1991-11-20", bitis: "1993-06-25", tip: "koalisyon", bitisNedeni: "cumhurbaskani-secimi",
+      not: "19 Kasım 1991 tarihli DYP–SHP koalisyon protokolüyle kuruldu; Demirel'in 16 Mayıs 1993'te cumhurbaşkanı seçilmesinin ardından sona erdi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
+    { no: 50, basbakan: "Tansu Çiller", partiler: ["dyp", "shp"],
+      baslangic: "1993-06-25", bitis: "1995-10-05", tip: "koalisyon", bitisNedeni: "istifa",
+      not: "Yeni bir DYP–SHP koalisyon protokolüyle kuruldu; SHP'nin CHP'ye katılmasından sonra aynı Bakanlar Kurulu listesinde bakanlar CHP etiketiyle sürdü ve hükümet 20 Eylül 1995'te istifa etti." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
+    { no: 51, basbakan: "Tansu Çiller", partiler: ["dyp"],
+      baslangic: "1995-10-05", bitis: "1995-10-30", tip: "azinlik", bitisNedeni: "guvensizlik",
+      not: "DYP azınlık hükümeti; TBMM'den güvenoyu alamadığı için 25 gün sonra sona erdi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
+    { no: 52, basbakan: "Tansu Çiller", partiler: ["dyp", "chp92"],
+      baslangic: "1995-10-30", bitis: "1996-03-06", tip: "koalisyon", bitisNedeni: "erken-secim",
+      not: "Yazılı metni olmayan bir DYP–CHP koalisyonu; esas görevi 24 Aralık 1995 yenileme seçimini yaptırmak olan bir seçim hükümetiydi." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
+    { no: 53, basbakan: "Mesut Yılmaz", partiler: ["anap", "dyp"],
+      baslangic: "1996-03-06", bitis: "1996-06-28", tip: "koalisyon", bitisNedeni: "istifa",
+      not: "ANAP–DYP (ANAYOL) koalisyonu; güvenoylamasına ilişkin yargı kararının ardından istifa etmek zorunda kaldı." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
+    { no: 54, basbakan: "Necmettin Erbakan", partiler: ["rp", "dyp"],
+      baslangic: "1996-06-28", bitis: "1997-06-30", tip: "koalisyon", bitisNedeni: "istifa",
+      not: "RP–DYP (REFAHYOL) koalisyonu; bir yılın sonunda olağandışı koşullarda istifa ederek görevi bıraktı." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
+    { no: 55, basbakan: "Mesut Yılmaz", partiler: ["anap", "dsp", "dtp97"],
+      baslangic: "1997-06-30", bitis: "1999-01-11", tip: "koalisyon", bitisNedeni: "guvensizlik",
+      not: "ANAP–DSP–DTP koalisyon protokolüyle kurulan üç partili azınlık hükümeti; güvenoylamasıyla düşürüldü." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
+    { no: 56, basbakan: "Bülent Ecevit", partiler: ["dsp"],
+      baslangic: "1999-01-11", bitis: "1999-05-28", tip: "azinlik", bitisNedeni: "erken-secim",
+      not: "ANAP ile DYP'nin dışarıdan destek verdiği DSP azınlık hükümeti; öne alınan 18 Nisan 1999 genel ve yerel seçimlerini yaptırmak üzere kuruldu." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumetler-48-57
+    { no: 57, basbakan: "Bülent Ecevit", partiler: ["dsp", "mhp93", "anap"],
+      baslangic: "1999-05-28", bitis: "2002-11-18", tip: "koalisyon", bitisNedeni: "erken-secim",
+      not: "DSP–MHP–ANAP koalisyonu; 21. Dönem Meclisi'nin erken seçim kararıyla 3 Kasım 2002'de yapılan genel seçimin ardından sona erdi." }
   ]
 };
```
