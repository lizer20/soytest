# İnceleme paketi: task-1-fix1 (676621c..HEAD)

## Commitler
```
c846dc2 Düzeltme: Refah Partisi kapatma tarihi resmi TBMM tutanağıyla doğrulandı
```
## Özet
```
 araclar/kaynak-defteri.md                          | 41 +++++++++++++---------
 docs/superpowers/specs/2026-09-11-sandik-design.md |  8 ++---
 2 files changed, 29 insertions(+), 20 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index 24d2e0b..8d488d5 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -14,55 +14,64 @@ Birincil kaynak **[B]** ile işaretlenir. "hesaplandı" = resmî il tablosundan
 | Hükümetler 1920–1995 | TBMM *Hükümetler, Programları ve Genel Kurul Görüşmeleri* cilt 1–8 (`acikerisim.tbmm.gov.tr`, `cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/…`, cilt 8: `https://www5.tbmm.gov.tr/yayinlar/hukumetler/hukumetler_cilt_8.pdf`) | TBMM *Koalisyon Hükümetleri, Koalisyon Protokolleri* `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/874b1bb8-73c2-4847-8d40-01866e87ca4a.pdf` | TBMM hükümetler HTML sayfası artık ana sayfaya yönleniyor (ölü). |
 | Hükümetler 1995– | Cilt 9 bulundu (Görev 1, Adım 3.2): `acikerisim.tbmm.gov.tr/items/2305701f-7bde-4344-bfbe-4166743fe1e2`, 30 Ekim 1995 – 11 Ocak 1999 aralığını kapsıyor; bitstream: `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/ed9cef72-34f2-44bc-9a66-e77e6c0aab99/content`. 1999 sonrası ciltler Görev'in ilgili veri adımında ayrıca aranmalı (bkz. Kayıtlar, Adım 3.2). | Akademik derleme "1923'ten 2018'e Türkiye'de Hükümet ve Bakanlıklar" | `hukumetler_cilt_9.pdf` adresi (www5 alan adında) yok (ana sayfaya yönleniyor); dosya `acikerisim.tbmm.gov.tr` üzerinde farklı bir adres yapısıyla duruyor. |
 | TBMM CB seçimleri | TBMM tutanakları; TBMM *Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler (1923–1980)* | Cumhurbaşkanlığı (tccb.gov.tr) | — |
 | Karşılaştırma | Vikipedi (tr/en) | — | Hiçbir zaman tek ya da ikinci kaynak sayılmaz. |
 
 ## Doğrulanan iddialar
 
 Bunlar spesifikasyon §8.5'te "hafızadan" olarak işaretlenmiş, Görev 1'de doğrulanan iddialardır.
 Ayrıntılı kaynaklar için `## Kayıtlar` altındaki ilgili başlığa bakın.
 
-1. **Refah Partisi'nin AYM kapatma kararının tarihi: 16 Ocak 1998** (Esas 1997/1, Karar 1998/1;
-   RG yayım tarihi 22 Şubat 1998) — DOĞRULANDI (erişim sınırlı; ayrıntı: Kayıtlar).
+1. **Refah Partisi'nin AYM kapatma kararının tarihi: 16 Ocak 1998** (ikincil kaynaklara göre Esas
+   1997/1, Karar 1998/1; RG yayım tarihi 22 Şubat 1998) — DOĞRULANDI ([B] TBMM Tutanak Dergisi,
+   Cilt 43, 44. Birleşim, 20.1.1998 + ikincil kaynaklar; ayrıntı: Kayıtlar).
 2. **1960 ve 1980 `yonetim` aralıklarının bitiş tarihleri** (geçiş genel seçiminden bir gün önce):
    - 27 Mayıs 1960 kabı: geçiş seçimi 15 Ekim 1961 → `bit: "1961-10-14"` — DOĞRULANDI.
    - 12 Eylül 1980 kabı: geçiş seçimi 6 Kasım 1983 → `bit: "1983-11-05"` — DOĞRULANDI.
 3. **MDP'nin 1983 genel seçiminde meclise girmesi** (71 sandalye, üçüncü parti) — DOĞRULANDI.
 4. **Belediye başkanlarının ilk kez doğrudan halk oyuyla seçildiği seçim: 17 Kasım 1963 yerel
    seçimi** (307 sayılı Kanun, 1961 Anayasası'nın öngördüğü tek dereceli doğrudan seçim ilk kez
    bu seçimde uygulandı) — DOĞRULANDI.
 
 ## Kayıtlar
 
 <!-- Şablon:
 ### 1999-04-genel
 - [B] TÜİK 1923–2011, Tablo 24, s. N — erişim 2026-MM-GG
 - TBMM seçim sorgusu p_secim_yili=1999 — erişim 2026-MM-GG
 - Uyuşmazlık: (yoksa "yok")
 -->
 
 ### Adım 2, madde 1 — Refah Partisi kapatma tarihi
-- Sonuç: 16 Ocak 1998 (Esas 1997/1, Karar 1998/1); Resmî Gazete 22 Şubat 1998.
-- Kaynaklar denendi: `anayasa.gov.tr` (sertifika hatası), `kararlaryeni.anayasa.gov.tr` (DNS
-  çözümlenmedi), `kararlarbilgibankasi.anayasa.gov.tr` (yüklendi ama JS kabuğu, içerik alınamadı),
-  `resmigazete.gov.tr/arsiv/23266.pdf` ve `.../eskiler/1998/02/19980222.htm` (WebFetch sertifika
-  hatası; `curl -sk -4` üç kez zaman aşımına uğradı).
-- Kullanılan kaynaklar: hukukansiklopedisi.com/refah-partisi-kapatma-karari/ (esas/karar no. ve
-  RG tarihini açıkça veriyor, karar tarihini başlıkta "16 Ocak 1998" olarak yazıyor) + WebSearch
-  ile toplanan 5 bağımsız haber kaynağı (yenisafak.com, milliyet.com.tr, hicrethaber.com,
-  refahmedya.com, memurlar.net'in AYM'den doğrudan alıntısı: "[AYM, E.1997/1, K.1998/1, 16/1/1998]").
+- Sonuç: **16 Ocak 1998 (Cuma)**.
+- **[B] T.B.M.M. Tutanak Dergisi, Cilt 43, 44. Birleşim, 20.1.1998 Salı** (Dönem 20, Yasama Yılı 3)
+  — `https://cdn.tbmm.gov.tr/TbmmWeb/Tutanak20230120/20/3/44/6ac1c7c2-378e-4cdc-b9f2-03b26ca674ef.html`.
+  Bu resmî TBMM tutanağında, kapatma kararından 4 gün sonraki genel kurul oturumunda Kayseri
+  Milletvekili Abdullah Gül'ün konuşmasında geçen ifade: "Refah Partisinin, Anayasa Mahkemesi
+  tarafından 16 Ocak 1998 Cuma günü kapatılmasıyla ilgili söz almış bulunuyorum." Tutanak resmî
+  karar/esas numarasını içermiyor, yalnızca tarihi doğruluyor (iç tutarlılık kontrolü: 16 Ocak
+  1998 gerçekten Cuma gününe denk geliyor).
+- İkinci kaynak (tarih + esas/karar no. + RG tarihi için): hukukansiklopedisi.com/refah-partisi-kapatma-karari/
+  (esas 1997/1, karar 1998/1, RG 22 Şubat 1998) + WebSearch ile toplanan 5 bağımsız haber kaynağı
+  (yenisafak.com, milliyet.com.tr, hicrethaber.com, refahmedya.com, memurlar.net'in AYM'den
+  doğrudan alıntısı: "[AYM, E.1997/1, K.1998/1, 16/1/1998]") — hepsi 16 Ocak 1998 tarihinde ve
+  esas/karar numaralarında birleşiyor.
 - Uyuşmazlık: hukukansiklopedisi.com sayfasının gövde metninde bir cümle "Karar, 9 Ocak 1998
-  tarihinde verilmiş" diyor — aynı sayfanın başlığıyla ve bütün diğer kaynaklarla çelişiyor;
-  tek ve iç tutarsız olduğu için 16 Ocak 1998 esas alındı.
-- Not: Resmi birincil kaynağa (AYM/Resmi Gazete) bu ortamdan erişilemedi — erişim tekrar
-  denenmeli (Görev 2 veya sonraki bir veri görevinde, RP kesintisi kaydı yazılırken).
-- Erişim: 2026-09-11.
+  tarihinde verilmiş" diyor — aynı sayfanın başlığıyla, TBMM tutanağıyla ve bütün diğer
+  kaynaklarla çelişiyor; tek ve iç tutarsız olduğu için dikkate alınmadı, 16 Ocak 1998 esas alındı.
+- **Düzeltme turu 1 notu (2026-09-11):** İlk yoklamada AYM/Resmî Gazete'nin kendi sitelerine
+  (`anayasa.gov.tr`, `kararlaryeni.anayasa.gov.tr`, `kararlarbilgibankasi.anayasa.gov.tr`,
+  `resmigazete.gov.tr`) doğrudan erişilemediği için bu iddia yalnızca ikincil kaynaklarla işaretlenmişti.
+  İkinci yoklamada TBMM'nin kendi tutanak arşivi (`cdn.tbmm.gov.tr`) üzerinden resmî bir kaynağa
+  ulaşıldı; ayrıntılı deneme kaydı için `.superpowers/sdd/2026-09-11-sandik/task-1-report.md`
+  içindeki "Düzeltme turu 1" bölümüne bakın.
+- Erişim: 2026-09-11 (ilk yoklama); 2026-09-11 (düzeltme turu 1, TBMM tutanağı).
 
 ### Adım 2, madde 2 — 1960 ve 1980 `yonetim` aralıklarının geçiş seçimi tarihleri
 - Sonuç: 27 Mayıs 1960 kabı → geçiş seçimi 15 Ekim 1961 → `bit = 1961-10-14`.
   12 Eylül 1980 kabı → geçiş seçimi 6 Kasım 1983 → `bit = 1983-11-05`.
 - [B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Ek-1 "Milletvekili Genel Seçimlerinin
   Yapıldığı Tarihler", s. 259 (basılı sayfa numarası; PDF'te `pdftotext -layout` tam metinde
   "10.Dönem  15 Ekim 1961" ve "16.Dönem  6 Kasım 1983" satırları okundu — bu bölüm garbled değil).
 - TBMM seçim sorgusu `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1961`
   — 15 Ekim 1961 tarihini doğruladı (parti dağılımında TÜİK Tablo 1'in 1961 satırıyla küçük bir
   uyuşmazlık var, bkz. aşağı; tarih kendisi uyuşuyor).
diff --git a/docs/superpowers/specs/2026-09-11-sandik-design.md b/docs/superpowers/specs/2026-09-11-sandik-design.md
index 6231a06..6b09439 100644
--- a/docs/superpowers/specs/2026-09-11-sandik-design.md
+++ b/docs/superpowers/specs/2026-09-11-sandik-design.md
@@ -488,24 +488,24 @@ Hata bulursa sıfırdan farklı bir kodla çıkar.
 
 Mevcut soyağacı bütünlük denetimleri de bu betiğe taşınır: yinelenen id, geçersiz bağ,
 `BILGI` eşleşmesi, "faal ama bitiş yılı var".
 
 ### 8.5 Hafızadan gelen iddialar
 
 Tasarım sırasında hafızadan kullanılan şu bilgiler, uygulamanın ilk işi olarak §8.1
 kuralıyla doğrulanır. Doğrulanamazlarsa kullanılmazlar:
 
 - ~~Refah Partisi'nin kapatılma kararının tarihi (§5.9'daki metin).~~
-  **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 1 — 2026-09-11):** 16 Ocak
-  1998 (Esas 1997/1, Karar 1998/1; RG yayım tarihi 22 Şubat 1998). Resmi AYM/Resmi Gazete
-  kaynağına bu ortamdan doğrudan erişilemedi (bkz. defter); birden çok bağımsız ikincil kaynakla
-  doğrulandı, sonraki bir görevde resmi kaynağa erişim tekrar denenmeli.
+  **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 1 — 2026-09-11, düzeltme
+  turu 1):** 16 Ocak 1998 (Cuma). [B] TBMM Tutanak Dergisi, Cilt 43, 44. Birleşim, 20.1.1998
+  (Abdullah Gül'ün genel kuruldaki konuşması bu tarihi doğruluyor) + ikincil kaynaklara göre
+  Esas 1997/1, Karar 1998/1, RG yayım tarihi 22 Şubat 1998.
 - ~~1960 ve 1980 `yonetim` aralıklarının başlangıç ve bitiş tarihleri (§5.9).~~
   **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 2 — 2026-09-11):** geçiş genel
   seçimleri TÜİK Ek-1 (s. 259) ile doğrulandı — 27 Mayıs 1960 kabı `bit: "1961-10-14"` (geçiş
   seçimi 15 Ekim 1961), 12 Eylül 1980 kabı `bit: "1983-11-05"` (geçiş seçimi 6 Kasım 1983).
 - ~~MDP'nin 1983'te meclise girmiş olması (§7, madde 5).~~
   **Doğrulandı (kaynak: `araclar/kaynak-defteri.md`, Adım 2 madde 3 — 2026-09-11):** TÜİK
   Tablo 1 (s. 22) ve YSK'nın resmi 1983 seçim sonuçları PDF'i ile doğrulandı; MDP 71 sandalyeyle
   üçüncü parti olarak meclise girdi.
 - ~~Belediye başkanlarının doğrudan halk oyuyla ilk kez hangi yerel seçimde seçildiği (§5.3;
   1963 öncesi kayıtlarda `buyuksehir` alanının yazılıp yazılmayacağı buna bağlı).~~
```
