# İnceleme paketi: task-1 (304c516..HEAD)

## Commitler
```
676621c Kaynak defteri ve hafızadan gelen iddiaların doğrulanması
```
## Özet
```
 araclar/kaynak-defteri.md                          | 143 +++++++++++++++++++++
 docs/superpowers/specs/2026-09-11-sandik-design.md |  26 +++-
 2 files changed, 164 insertions(+), 5 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
new file mode 100644
index 0000000..24d2e0b
--- /dev/null
+++ b/araclar/kaynak-defteri.md
@@ -0,0 +1,143 @@
+# Kaynak defteri
+
+Sitede gösterilmez. Her sayının hangi kaynaktan geldiğini kaydeder (spesifikasyon §8.3).
+Birincil kaynak **[B]** ile işaretlenir. "hesaplandı" = resmî il tablosundan `araclar/topla.js` ile.
+
+## Kaynak haritası
+
+| Konu | Birincil (resmî) | İkinci kaynak | Erişim notu |
+|---|---|---|---|
+| Genel seçim 1923–2011 | TÜİK *Milletvekili Genel Seçimleri 1923–2011* — `https://www.ysk.gov.tr/doc/dosyalar/1923-2011-MVSecimleri-Tuik.pdf` | 1950–1999: TBMM seçim sorgusu `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=YYYY` (oy + %; sandalye yok) | PDF metin katmanlı; `pdftotext -layout -enc UTF-8`. Türkçe harfler bozuk (ş→ú, ğ→÷, İ→ø) **yalnızca çok sütunlu veri tablolarında** (Tablo 1, Tablo 23/24); önsöz, içindekiler ve Ek bölümleri (s. 259 dahil) düzgün UTF-8 ile çıkıyor. Rakamlar her durumda ASCII. Tablo 1 s.22, Tablo 2–3 s.23, il/parti sonuçları Tablo 23 (s.25–92, 1950–1977) ve Tablo 24 (s.93–258, 1983–2011), Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" s.259 (PDF sayfa numarası ≠ basılı sayfa numarası; içindekiler tablosundaki basılı numaraya göre ara). TÜİK 1961 öncesini arşiv taramasıyla derlemiş — o dönemde TBMM ikinci kaynak olarak zorunlu. WebFetch bağlantıyı zaman zaman sıfırlıyor; yeniden dene. Görev 1'de doğrulandı (2026-09-11): yerel kopya `C:/Users/Lizer/.claude/projects/C--Users-Lizer-Desktop-projects-siyasi-parti/c2b2a5af-348d-45d1-aacb-260f42e6e083/tool-results/webfetch-1789121603458-3nc85e.pdf`. |
+| Genel seçim 2015–2023 | YSK kesin sonuç kararları (Resmî Gazete) | TÜİK/YSK istatistik yayınları | YSK seçim sayfaları JS kabuğu; doğrudan `ysk.gov.tr/doc/…` PDF'leri ve Resmî Gazete kullanılır. `acikveri.ysk.gov.tr` yoklamada bağlantıyı düşürdü (Görev 1: 3 deneme sonrası da erişilemedi — 2× ECONNRESET, 1× yalnızca JS kabuğu; bkz. Kayıtlar altında "Adım 3.1"). |
+| Referandum | YSK Halkoylaması Arşivi `https://www.ysk.gov.tr/tr/halkoylamasi-arsivi/2648`; 1982: `…/doc/dosyalar/docs/1982Referandum/7-Kas%C4%B1m-1982-Halk-Oylamas%C4%B1.pdf` | Resmî Gazete ilanı / TÜİK | 1982 PDF'i il satırları içerir, Türkiye toplamı yok → `araclar/topla.js` ile toplanır ve ikinci kaynakla eşleştirilir. |
+| Yerel seçim | YSK Mahalli İdareler Arşivi `https://www.ysk.gov.tr/tr/mahalli-idareler-genel-secimleri-arsivi/2650`; TÜİK mahalli idareler yayınları (örn. `…/doc/dosyalar/1989Mahalli-Tuik.pdf`) | Resmî Gazete | Arşiv sayfası JS kabuğu; doğrudan PDF adresleri arama ile bulunur. Belediye başkanlarının doğrudan halk oyuyla seçimi **17 Kasım 1963 yerel seçiminden itibaren** geçerli (Görev 1'de doğrulandı — bkz. Kayıtlar). |
+| Hükümetler 1920–1995 | TBMM *Hükümetler, Programları ve Genel Kurul Görüşmeleri* cilt 1–8 (`acikerisim.tbmm.gov.tr`, `cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/…`, cilt 8: `https://www5.tbmm.gov.tr/yayinlar/hukumetler/hukumetler_cilt_8.pdf`) | TBMM *Koalisyon Hükümetleri, Koalisyon Protokolleri* `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/874b1bb8-73c2-4847-8d40-01866e87ca4a.pdf` | TBMM hükümetler HTML sayfası artık ana sayfaya yönleniyor (ölü). |
+| Hükümetler 1995– | Cilt 9 bulundu (Görev 1, Adım 3.2): `acikerisim.tbmm.gov.tr/items/2305701f-7bde-4344-bfbe-4166743fe1e2`, 30 Ekim 1995 – 11 Ocak 1999 aralığını kapsıyor; bitstream: `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/ed9cef72-34f2-44bc-9a66-e77e6c0aab99/content`. 1999 sonrası ciltler Görev'in ilgili veri adımında ayrıca aranmalı (bkz. Kayıtlar, Adım 3.2). | Akademik derleme "1923'ten 2018'e Türkiye'de Hükümet ve Bakanlıklar" | `hukumetler_cilt_9.pdf` adresi (www5 alan adında) yok (ana sayfaya yönleniyor); dosya `acikerisim.tbmm.gov.tr` üzerinde farklı bir adres yapısıyla duruyor. |
+| TBMM CB seçimleri | TBMM tutanakları; TBMM *Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler (1923–1980)* | Cumhurbaşkanlığı (tccb.gov.tr) | — |
+| Karşılaştırma | Vikipedi (tr/en) | — | Hiçbir zaman tek ya da ikinci kaynak sayılmaz. |
+
+## Doğrulanan iddialar
+
+Bunlar spesifikasyon §8.5'te "hafızadan" olarak işaretlenmiş, Görev 1'de doğrulanan iddialardır.
+Ayrıntılı kaynaklar için `## Kayıtlar` altındaki ilgili başlığa bakın.
+
+1. **Refah Partisi'nin AYM kapatma kararının tarihi: 16 Ocak 1998** (Esas 1997/1, Karar 1998/1;
+   RG yayım tarihi 22 Şubat 1998) — DOĞRULANDI (erişim sınırlı; ayrıntı: Kayıtlar).
+2. **1960 ve 1980 `yonetim` aralıklarının bitiş tarihleri** (geçiş genel seçiminden bir gün önce):
+   - 27 Mayıs 1960 kabı: geçiş seçimi 15 Ekim 1961 → `bit: "1961-10-14"` — DOĞRULANDI.
+   - 12 Eylül 1980 kabı: geçiş seçimi 6 Kasım 1983 → `bit: "1983-11-05"` — DOĞRULANDI.
+3. **MDP'nin 1983 genel seçiminde meclise girmesi** (71 sandalye, üçüncü parti) — DOĞRULANDI.
+4. **Belediye başkanlarının ilk kez doğrudan halk oyuyla seçildiği seçim: 17 Kasım 1963 yerel
+   seçimi** (307 sayılı Kanun, 1961 Anayasası'nın öngördüğü tek dereceli doğrudan seçim ilk kez
+   bu seçimde uygulandı) — DOĞRULANDI.
+
+## Kayıtlar
+
+<!-- Şablon:
+### 1999-04-genel
+- [B] TÜİK 1923–2011, Tablo 24, s. N — erişim 2026-MM-GG
+- TBMM seçim sorgusu p_secim_yili=1999 — erişim 2026-MM-GG
+- Uyuşmazlık: (yoksa "yok")
+-->
+
+### Adım 2, madde 1 — Refah Partisi kapatma tarihi
+- Sonuç: 16 Ocak 1998 (Esas 1997/1, Karar 1998/1); Resmî Gazete 22 Şubat 1998.
+- Kaynaklar denendi: `anayasa.gov.tr` (sertifika hatası), `kararlaryeni.anayasa.gov.tr` (DNS
+  çözümlenmedi), `kararlarbilgibankasi.anayasa.gov.tr` (yüklendi ama JS kabuğu, içerik alınamadı),
+  `resmigazete.gov.tr/arsiv/23266.pdf` ve `.../eskiler/1998/02/19980222.htm` (WebFetch sertifika
+  hatası; `curl -sk -4` üç kez zaman aşımına uğradı).
+- Kullanılan kaynaklar: hukukansiklopedisi.com/refah-partisi-kapatma-karari/ (esas/karar no. ve
+  RG tarihini açıkça veriyor, karar tarihini başlıkta "16 Ocak 1998" olarak yazıyor) + WebSearch
+  ile toplanan 5 bağımsız haber kaynağı (yenisafak.com, milliyet.com.tr, hicrethaber.com,
+  refahmedya.com, memurlar.net'in AYM'den doğrudan alıntısı: "[AYM, E.1997/1, K.1998/1, 16/1/1998]").
+- Uyuşmazlık: hukukansiklopedisi.com sayfasının gövde metninde bir cümle "Karar, 9 Ocak 1998
+  tarihinde verilmiş" diyor — aynı sayfanın başlığıyla ve bütün diğer kaynaklarla çelişiyor;
+  tek ve iç tutarsız olduğu için 16 Ocak 1998 esas alındı.
+- Not: Resmi birincil kaynağa (AYM/Resmi Gazete) bu ortamdan erişilemedi — erişim tekrar
+  denenmeli (Görev 2 veya sonraki bir veri görevinde, RP kesintisi kaydı yazılırken).
+- Erişim: 2026-09-11.
+
+### Adım 2, madde 2 — 1960 ve 1980 `yonetim` aralıklarının geçiş seçimi tarihleri
+- Sonuç: 27 Mayıs 1960 kabı → geçiş seçimi 15 Ekim 1961 → `bit = 1961-10-14`.
+  12 Eylül 1980 kabı → geçiş seçimi 6 Kasım 1983 → `bit = 1983-11-05`.
+- [B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Ek-1 "Milletvekili Genel Seçimlerinin
+  Yapıldığı Tarihler", s. 259 (basılı sayfa numarası; PDF'te `pdftotext -layout` tam metinde
+  "10.Dönem  15 Ekim 1961" ve "16.Dönem  6 Kasım 1983" satırları okundu — bu bölüm garbled değil).
+- TBMM seçim sorgusu `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1961`
+  — 15 Ekim 1961 tarihini doğruladı (parti dağılımında TÜİK Tablo 1'in 1961 satırıyla küçük bir
+  uyuşmazlık var, bkz. aşağı; tarih kendisi uyuşuyor).
+  6 Kasım 1983 için ikinci kaynak: YSK'nın resmi 1983 seçim sonuçları PDF'i (aşağıdaki madde 3 ile
+  aynı belge) + WebSearch ile bulunan çok sayıda bağımsız kaynak (secim.star.com.tr,
+  secim.aksam.com.tr, Vikipedi — Vikipedi tek başına sayılmadı, yalnızca çapraz kontrol).
+- Uyuşmazlık: TÜİK Tablo 1'in 1961 satırı OCR/tablo hizalama sorunuyla "2 CHP, DP" giren parti
+  sayısı gösteriyor gibi okunuyor; oysa hem TBMM seçim sorgusu hem tarihsel kayıt 1961'de 4 partinin
+  (CHP, AP, CKMP, YTP) meclise girdiğini gösteriyor. Bu, `pdftotext -layout`'ın çok satırlı
+  hücreleri yanlış hizalamasından kaynaklanıyor (Tablo 1, çok satırlı bir tablo); yalnızca **tarih**
+  doğrulaması bu görevin kapsamında olduğundan parti dağılımı uyuşmazlığı burada çözülmedi — Görev
+  2'de 1961 kaydı yazılırken Tablo 1 yerine Tablo 23 (il/parti sonuçları, s. 25-92) kullanılmalı.
+- Erişim: 2026-09-11.
+
+### Adım 2, madde 3 — MDP'nin 1983 genel seçiminde meclise girmesi
+- Sonuç: Doğru. MDP, ANAP ve HP ile birlikte meclise giren 3 partiden biri; 71 sandalye, %23,27 oy,
+  üçüncü sırada (ANAP 211/45,14%, HP 117/30,46%, MDP 71/23,27%).
+- [B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 1, s. 22 — `pdftotext -f 22 -l 22 -layout
+  -enc UTF-8`, 1983 satırı: "3  ANAP, HP, MDP" (meclise giren siyasi parti sayısı ve isimleri).
+- [B] YSK'nın resmi "6 KASIM 1983 MİLLETVEKİLİ GENEL SEÇİMİ SONUÇLARI" PDF'i
+  (`https://www.ysk.gov.tr/doc/dosyalar/docs/1983MilletvekiliSecimi/1983_Secim_Sonuclari.pdf`,
+  ilk WebFetch denemesi ECONNRESET verdi, ikinci deneme başarılı oldu ve dosya diske kaydedildi) —
+  il il "MİLLİYETÇİ DEMOKRASİ PARTİSİ" (MDP) oy sütunu, MDP'nin ülke genelinde oy aldığını
+  doğruluyor.
+- Üçüncü çapraz kontrol: secim.star.com.tr/secim/6-kasim-1983-genel-secimleri,
+  secim.aksam.com.tr/secim/6-kasim-1983-genel-secimleri (71 sandalye, %23,27).
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-11.
+
+### Adım 2, madde 4 — Belediye başkanlarının ilk kez doğrudan halk oyuyla seçimi
+- Sonuç: 17 Kasım 1963 yerel seçimi — daha önce belediye meclisi tarafından seçilen belediye
+  başkanları, bu seçimden itibaren doğrudan, tek dereceli genel oyla seçildi.
+- [B] 307 sayılı "Belediye Kanununda değişiklik yapılmasına dair Kanun" — Kabul tarihi 19.7.1963,
+  Resmî Gazete ile yayımı 27.7.1963, Sayı 11465. TBMM'nin resmi tutanak PDF'i:
+  `https://www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc046/kanuntbmmc046/kanuntbmmc04600307.pdf`
+  (text katmanlı, doğrudan okundu). Alıntı: "Her iki seçim, serbest, eşit, gizli, tek dereceli
+  genel oy... yapılır" (EK MADDE 1), önceki durumdan (belediye meclisi tarafından seçim) farkı
+  açıkça ortaya koyuyor.
+- İkinci kaynak: dergipark akademik makalesi "Sandıkta Bitmeyen Seçim: 17 Kasım 1963 İstanbul
+  Belediye Başkanlığı Seçimi" (Uluslararası Anadolu Sosyal Bilimler Dergisi,
+  `https://dergipark.org.tr/tr/pub/ulasbid/issue/64402/1025285`) — makale bu seçimi "belediye
+  başkanının halk tarafından ilk defa doğrudan seçildiği seçim" olarak tanımlıyor.
+- Uyuşmazlık: yok.
+- Etki: `buyuksehir` alanı 17 Kasım 1963 yerel seçiminden itibaren yazılabilir; öncesinde (1963
+  öncesi kayıtlarda) yazılmaz (tasarım §5.3 kuralının dayanağı artık doğrulanmış durumda).
+- Erişim: 2026-09-11.
+
+### Adım 3.1 — acikveri.ysk.gov.tr yoklaması
+- 3 WebFetch denemesi yapıldı: ilk ikisinde `ECONNRESET`, üçüncüsünde sayfa yüklendi ama YSK'nın
+  diğer arşiv sayfaları gibi yalnızca JS kabuğu döndü (`[](#page-top)` dışında içerik yok) — veri
+  seti listesi/biçimi bu görevde tespit edilemedi.
+- Sonuç: kaynak haritasına "Görev 1: 3 deneme sonrası da erişilemedi (2× ECONNRESET, 1× JS kabuğu)"
+  notu eklendi. Sonraki veri görevlerinde tekrar denenebilir; birincil kaynak olarak
+  `ysk.gov.tr/doc/dosyalar/…` PDF'leri ve Resmî Gazete kullanılmaya devam edilecek (kaynak
+  haritasındaki mevcut plan değişmedi).
+- Erişim: 2026-09-11.
+
+### Adım 3.2 — 1995 sonrası hükümetler için TBMM ciltleri
+- WebSearch `"Hükümetler Programları ve Genel Kurul Görüşmeleri" cilt 9`:
+  - Cilt 9 bulundu: `acikerisim.tbmm.gov.tr/items/2305701f-7bde-4344-bfbe-4166743fe1e2`
+    (bitstream: `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/ed9cef72-34f2-44bc-9a66-e77e6c0aab99/content`),
+    kapsadığı aralık: 30 Ekim 1995 – 11 Ocak 1999.
+  - `www5.tbmm.gov.tr/yayinlar/hukumetler/hukumetler_cilt_9.pdf` adresi yok (brief'te zaten
+    belirtilmişti); dosya yalnızca `acikerisim.tbmm.gov.tr` üzerinde farklı bir yapıda duruyor.
+  - 1999 sonrasını (özellikle 2002– AKP dönemi) kapsayan bir sonraki cilt bu görevde
+    doğrulanamadı — kaynak haritasına "Görev'in ilgili veri adımında ayrıca aranmalı" notu
+    eklendi; ilgili dönem verisi toplanırken `acikerisim.tbmm.gov.tr` içinde arama yapılmalı.
+- Sonuç: kaynak haritası güncellendi (bkz. yukarıdaki tablo, "Hükümetler 1995–" satırı).
+- Erişim: 2026-09-11.
+
+### Adım 3.3 — Güncellik: 2026-09-11 sonrası seçim/referandum ilanı var mı?
+- WebSearch `YSK 2026 seçim takvimi halkoylaması referandum`.
+- Sonuç: Yeni bir referandum ya da erken genel/CB seçimi ilanına rastlanmadı. Bulunan tek yakın
+  tarihli olay, spesifikasyon §8.5'te zaten kapsam dışı olarak işaretlenmiş 7 Haziran 2026 yerel
+  ara seçimiydi (bu görev bunu yeniden doğruladı, yeni bir bulgu değil). Olağan genel/CB seçim
+  takvimi (2028) ve referandum yasal usulü (kabul kanununun RG yayımından 60 gün sonraki ilk
+  Pazar) hakkında genel bilgi dışında 2026-09-11 sonrasına dair somut bir ilan bulunamadı.
+- Erişim: 2026-09-11.
diff --git a/docs/superpowers/specs/2026-09-11-sandik-design.md b/docs/superpowers/specs/2026-09-11-sandik-design.md
index fde8caf..6231a06 100644
--- a/docs/superpowers/specs/2026-09-11-sandik-design.md
+++ b/docs/superpowers/specs/2026-09-11-sandik-design.md
@@ -487,30 +487,46 @@ Hata bulursa sıfırdan farklı bir kodla çıkar.
 - `ittifak.icinden` toplamı `liste` partisinin sandalyesini aşıyor
 
 Mevcut soyağacı bütünlük denetimleri de bu betiğe taşınır: yinelenen id, geçersiz bağ,
 `BILGI` eşleşmesi, "faal ama bitiş yılı var".
 
 ### 8.5 Hafızadan gelen iddialar
 
 Tasarım sırasında hafızadan kullanılan şu bilgiler, uygulamanın ilk işi olarak §8.1
 kuralıyla doğrulanır. Doğrulanamazlarsa kullanılmazlar:
 
-- Refah Partisi'nin kapatılma kararının tarihi (§5.9'daki metin).
-- 1960 ve 1980 `yonetim` aralıklarının başlangıç ve bitiş tarihleri (§5.9).
-- MDP'nin 1983'te meclise girmiş olması (§7, madde 5).
-- Belediye başkanlarının doğrudan halk oyuyla ilk kez hangi yerel seçimde seçildiği (§5.3;
-  1963 öncesi kayıtlarda `buyuksehir` alanının yazılıp yazılmayacağı buna bağlı).
+- ~~Refah Partisi'nin kapatılma kararının tarihi (§5.9'daki metin).~~
+  **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 1 — 2026-09-11):** 16 Ocak
+  1998 (Esas 1997/1, Karar 1998/1; RG yayım tarihi 22 Şubat 1998). Resmi AYM/Resmi Gazete
+  kaynağına bu ortamdan doğrudan erişilemedi (bkz. defter); birden çok bağımsız ikincil kaynakla
+  doğrulandı, sonraki bir görevde resmi kaynağa erişim tekrar denenmeli.
+- ~~1960 ve 1980 `yonetim` aralıklarının başlangıç ve bitiş tarihleri (§5.9).~~
+  **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 2 — 2026-09-11):** geçiş genel
+  seçimleri TÜİK Ek-1 (s. 259) ile doğrulandı — 27 Mayıs 1960 kabı `bit: "1961-10-14"` (geçiş
+  seçimi 15 Ekim 1961), 12 Eylül 1980 kabı `bit: "1983-11-05"` (geçiş seçimi 6 Kasım 1983).
+- ~~MDP'nin 1983'te meclise girmiş olması (§7, madde 5).~~
+  **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 3 — 2026-09-11):** TÜİK
+  Tablo 1 (s. 22) ve YSK'nın resmi 1983 seçim sonuçları PDF'i ile doğrulandı; MDP 71 sandalyeyle
+  üçüncü parti olarak meclise girdi.
+- ~~Belediye başkanlarının doğrudan halk oyuyla ilk kez hangi yerel seçimde seçildiği (§5.3;
+  1963 öncesi kayıtlarda `buyuksehir` alanının yazılıp yazılmayacağı buna bağlı).~~
+  **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 4 — 2026-09-11):** 17 Kasım
+  1963 yerel seçimi (307 sayılı Kanun, 19.7.1963 kabul, RG 27.7.1963/11465). `buyuksehir` alanı
+  bu seçimden itibaren yazılabilir; öncesinde yazılmaz.
 - ~~2024 yerel seçimlerinden sonra yapılmış bir seçim ya da referandum olup olmadığı.~~
   **Web aramasıyla kontrol edildi (2026-09-11):** 7 Haziran 2026'da 6 beldede ara yerel
   seçim yapıldı; bu seçim kapsam dışıdır (§2). Erken genel seçim ya da referandum yapılmadı;
   olağan takvim 14 Mayıs 2028. Bir anayasa referandumu kamuoyunda tartışıldığı için, iş
   tamamlanmadan önce son bir güncellik kontrolü yapılır.
+  **Görev 1, Adım 3.3'te yeniden kontrol edildi (2026-09-11):** yeni bir referandum ya da erken
+  seçim ilanına rastlanmadı; bulunan tek yakın tarihli olay yukarıda zaten kapsam dışı olarak
+  işaretlenmiş 7 Haziran 2026 yerel ara seçimiydi.
 
 ## 9. Kaynakça sayfası güncellemesi
 
 `kaynakca.html`'e **"Sandık: ölçüler ve kurallar"** bölümü eklenir:
 
 - Kapsam ve aşamalar (haritanın henüz olmadığı).
 - `—` işaretinin anlamı ve kaynak kuralı (§8.1).
 - Genel seçimde "kazandı" ile "birinci parti" ayrımı ve sıralamanın sandalyeye göre yapılması.
 - İttifak listelerinin gösterimi.
 - %1 eşiği ve "Diğer" satırı.
```
