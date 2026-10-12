# İnceleme paketi: task-9-d0 (11b92a0..HEAD)

## Commitler
```
1727a29 Sandık verisi: dönem 0 (1923–1945)
```
## Özet
```
 araclar/kaynak-defteri.md | 313 ++++++++++++++++++++++++++++++++++++++++++++++
 veri/sandik.js            | 157 ++++++++++++++++++++++-
 2 files changed, 468 insertions(+), 2 deletions(-)
```
## Fark
```diff
diff --git a/araclar/kaynak-defteri.md b/araclar/kaynak-defteri.md
index 8d488d5..6e46cdf 100644
--- a/araclar/kaynak-defteri.md
+++ b/araclar/kaynak-defteri.md
@@ -135,18 +135,331 @@ Ayrıntılı kaynaklar için `## Kayıtlar` altındaki ilgili başlığa bakın.
     (bitstream: `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/ed9cef72-34f2-44bc-9a66-e77e6c0aab99/content`),
     kapsadığı aralık: 30 Ekim 1995 – 11 Ocak 1999.
   - `www5.tbmm.gov.tr/yayinlar/hukumetler/hukumetler_cilt_9.pdf` adresi yok (brief'te zaten
     belirtilmişti); dosya yalnızca `acikerisim.tbmm.gov.tr` üzerinde farklı bir yapıda duruyor.
   - 1999 sonrasını (özellikle 2002– AKP dönemi) kapsayan bir sonraki cilt bu görevde
     doğrulanamadı — kaynak haritasına "Görev'in ilgili veri adımında ayrıca aranmalı" notu
     eklendi; ilgili dönem verisi toplanırken `acikerisim.tbmm.gov.tr` içinde arama yapılmalı.
 - Sonuç: kaynak haritası güncellendi (bkz. yukarıdaki tablo, "Hükümetler 1995–" satırı).
 - Erişim: 2026-09-11.
 
+## Görev 9 — Dönem 0 (1923–1945)
+
+**Hükümet `baslangic` ölçütü (ilk kayıtta seçildi, bütün dönemlerde aynı kullanılacak):**
+TBMM'nin *Hükümetler, Programları ve Genel Kurul Görüşmeleri* cildinde verilen "hükümetin
+kurulduğu tarih" (Bakanlar Kurulu'nun teşekkül edip yemin ettiği/göreve başladığı tarih)
+kullanılıyor — bu tarih genelde Resmî Gazete yayım tarihinden birkaç gün önce olabiliyor,
+ama TBMM cildi bu dönem için tek tutarlı, sayfa numarasıyla izlenebilir kaynak. Resmî Gazete
+1923–1930 arası dönemde bazı hükümetler için taranabilir/erişilebilir değil.
+
+### Ortak blok — 1923-1943 genel seçimleri (tek parti): envanter, tarihler, meclis büyüklüğü
+Aşağıdaki 6 kayıt (`1923-06-genel`, `1927-09-genel`, `1931-04-genel`, `1935-02-genel`,
+`1939-03-genel`, `1943-02-genel`) aynı kaynak kümesini paylaşıyor; ayrıntı bu blokta, her
+kayıt için ayrı kısa başlık aşağıda.
+- Sonuç: aday liste birebir doğrulandı — 1923, 1927, 1931, 1935, 1939, 1943; hepsinde tek
+  parti CHP (Cumhuriyet Halk Fırkası/Partisi), sonuç tamamı CHP (`sandalye` = `meclis`).
+- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 1 (PDF s. 22, basılı s. 4)** —
+  `pdftotext -f 22 -l 22 -layout -enc UTF-8`: "1923 İki Dereceli Seçim Sistemi 1 CHP ... 1 CHP";
+  aynı desen 1927, 1931, 1935, 1939, 1943 için tekrarlanıyor (ham metinde net, `-layout`
+  hizalaması kayıyor ama `pdftotext -enc UTF-8` (layout'suz) ham akışta "1 CHP" / "1 CHP"
+  çiftleri her yıl için ayrı ayrı doğrulandı).
+- **[B] TÜİK Tablo 5 "Tek parti döneminde illerin çıkardığı milletvekili sayısı" (PDF s. 25,
+  basılı s. 7)**, "Toplam" satırı: 1923=287, 1927=316, 1931=317, 1935=399, 1939=429, 1943=455.
+- **İkinci kaynak (çapraz doğrulama):** Taner LÜLECİ, "İsmet İnönü'nün Cumhurbaşkanlığı
+  Seçimleri", *Gazi Akademik Bakış*, Sayı 32, Cilt 16, Yaz 2023, s. 173–185
+  (`dergipark.org.tr/tr/download/article-file/3212364`) — TBMM Zabıt Ceridesi'ne dayanarak
+  her cumhurbaşkanlığı seçiminde toplam meclis üyesi sayısını da veriyor: 1927→316,
+  1931→317, 1935→399, 1939→429, 1943→455 — TÜİK Tablo 5 ile birebir eşleşiyor (bağımsız
+  çapraz doğrulama).
+- Tarihler **[B] TÜİK Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" (PDF s. 277,
+  basılı s. 259 — sayfa altbilgisi "259"; offset PDF=basılı+18 doğrulandı)**: sıralı liste
+  (dönem numarası etiketleri `-layout`'ta kaymış ama tarihlerin kendi sırası bozulmamış):
+  Mart 1920 (İlk Meclis) · Haziran–Temmuz 1923 · 2 Eylül 1927 · 25 Nisan 1931 · 8 Şubat 1935 ·
+  26 Mart 1939 · 28 Şubat 1943 · 21 Temmuz 1946 · …
+- **İkinci kaynak (tarihler):** Kenan OLGUN, "Türkiye'de Cumhuriyetin İlanından 1950'ye Genel
+  Seçim Uygulamaları", *Atatürk Araştırma Merkezi Dergisi* (`atamdergi.gov.tr/tam-metin/99/tur`,
+  ayrıca `dergipark.org.tr/tr/download/article-file/676405`) — 1927: "30 Temmuz-5 Ağustos
+  arasında ikinci seçmen seçimleri, milletvekilliği seçimi 2-6 Eylül" (TÜİK'in "2 Eylül"ü bu
+  aralığın ilk günü); 1931: "7-10 Nisan ikinci seçmen, milletvekili seçimi 25 Nisan" (TÜİK'le
+  birebir); 1935: "8 Şubat 1935"; 1939: "26 Mart 1939"; 1943: "28 Şubat 1943" (hepsi TÜİK'le
+  birebir eşleşiyor).
+- **1923 istisnası:** her iki kaynak da (TÜİK Ek-1 ve Olgun/ATAM Dergisi) yalnızca
+  "Haziran–Temmuz 1923" aralığını veriyor, tek gün yok — seçim il il farklı tarihlerde,
+  iki dereceli olarak yapıldı (Wikipedia "28 Haziran 1923" diyor ama kural gereği Vikipedi
+  kaynak sayılmıyor; bu iddiayı doğrulayan Vikipedi-dışı bir kaynak bulunamadı). Kayıtta
+  `tarih:"1923-06-01"` kullanıldı (doğrulanan aralığın ilk ayının ilk günü, biçimsel bir
+  yer tutucu) ve `not` alanında bu belirsizlik açıkça belirtildi.
+- Uyuşmazlık: yok (1923 hariç, yukarıda açıklandı).
+- Erişim: 2026-09-11.
+
+### 1923-06-genel
+- Bkz. yukarıdaki ortak blok. `tarih:"1923-06-01"` — TÜİK Ek-1 ve Olgun/ATAM Dergisi yalnızca
+  "Haziran–Temmuz 1923" aralığını veriyor, tek gün Vikipedi-dışı kaynakla doğrulanamadı; ilk
+  ay/gün yer tutucu olarak kullanıldı, `not` alanında belirtildi. `meclis:287` (TÜİK Tablo 5 +
+  Lüleci 2023 çapraz doğrulaması).
+
+### 1927-09-genel
+- Bkz. yukarıdaki ortak blok. `tarih:"1927-09-02"` (TÜİK Ek-1; Olgun/ATAM: "milletvekilliği
+  seçimi 2-6 Eylül" — TÜİK'in verdiği ilk gün). `meclis:316`.
+
+### 1931-04-genel
+- Bkz. yukarıdaki ortak blok. `tarih:"1931-04-25"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor:
+  "milletvekili seçimi 25 Nisan"). `meclis:317`.
+
+### 1935-02-genel
+- Bkz. yukarıdaki ortak blok. `tarih:"1935-02-08"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor).
+  `meclis:399`.
+
+### 1939-03-genel
+- Bkz. yukarıdaki ortak blok. `tarih:"1939-03-26"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor).
+  `meclis:429`.
+
+### 1943-02-genel
+- Bkz. yukarıdaki ortak blok. `tarih:"1943-02-28"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor).
+  `meclis:455`. Lüleci (2023): "Bu seçim, Türkiye'nin tek partili son seçimidir."
+
+### Ortak blok — 1923-1943 TBMM cumhurbaşkanlığı seçimleri (cb-tbmm)
+Aşağıdaki 7 kayıt (`1923-10-cb-tbmm`, `1927-11-cb-tbmm`, `1931-05-cb-tbmm`, `1935-03-cb-tbmm`,
+`1938-11-cb-tbmm`, `1939-04-cb-tbmm`, `1943-03-cb-tbmm`) aynı kaynak kümesini paylaşıyor;
+ayrıntı bu blokta, her kayıt için ayrı kısa başlık aşağıda.
+- Sonuç: dönem 0'da 7 kayıt — 29.10.1923 (Mustafa Kemal Paşa, kurucu), 01.11.1927 (Atatürk,
+  2. kez), 04.05.1931 (Atatürk, 3. kez), 01.03.1935 (Atatürk, 4. ve son kez), 11.11.1938
+  (İsmet İnönü, Atatürk'ün ölümü üzerine, olağanüstü), 03.04.1939 (İnönü, 2. kez), 08.03.1943
+  (İnönü, 3. kez). Hepsi 1. turda, tek adayla, oybirliğiyle sonuçlandı.
+- **[B] TBMM Zabıt Ceridesi**, Taner LÜLECİ'nin "İsmet İnönü'nün Cumhurbaşkanlığı Seçimleri"
+  (*Gazi Akademik Bakış*, Sayı 32/Cilt 16, Yaz 2023, s. 173–185,
+  `dergipark.org.tr/tr/download/article-file/3212364`) makalesinde doğrudan alıntılanan ZC
+  sayfa referanslarıyla:
+  - 29 Ekim 1923: TBMM ZC Devre II, Cilt 3, 29 Teşrinievvel 1339 Pazartesi — "333 milletvekilinden
+    158'i geldi... oy kullanan 158 milletvekilinin tamamının oyunu alarak Cumhurbaşkanı seçilmiştir".
+  - 1 Kasım 1927: TBMM ZC Cilt 1, İnikat 1, 1 Teşrinisani 1927 Salı — "316 milletvekilinden
+    seçime katılan 288'inin tamamının oyunu alarak 1. turda ikinci defa".
+  - 4 Mayıs 1931: TBMM ZC Devre IV, Fevkalade İçtima, Cilt 1, İnikat 1, s.6 — "317
+    milletvekilinden seçime katılan 289'unun tamamının oyunu alarak 1. turda üçüncü defa".
+  - 1 Mart 1935: TBMM ZC Devre I, Cilt 1, Fevkalade İçtima, s.3-4 — "399 milletvekilinden
+    seçime katılan 386'sının tamamının oyunu alarak 1. turda dördüncü ve son defa".
+  - 11 Kasım 1938 (Cuma, saat 11.12–11.45): TBMM ZC Devre V, Cilt 27, İçtima 4, s.16-18 —
+    Atatürk'ün 10.11.1938 vefatı üzerine olağanüstü toplanan Meclis'te "348 arkadaş
+    iştirak etmiştir. 348 reyle ve müttefikan Malatya mebusu İsmet İnönü Reis-i cumhur
+    intihâb edilmiştir" (1. tur).
+  - 3 Nisan 1939 (Pazartesi): TBMM ZC Devre VI, İçtima F., Cilt 1, İnikat 1 (3.4.1939),
+    s.2-4 — "429 milletvekilinden reye iştirak eden 413'dür, 413 reyle ve müttefikan Ankara
+    mebusu İsmet İnönü (1. turda) Reis-i cumhur seçilmiştir".
+  - 8 Mart 1943 (Pazartesi): TBMM ZC Devre VII, İçtima F., Cilt 1, İnikat 1 (8.3.1943),
+    s.1-4 — "455 vekilden seçime iştirak eden 435 milletvekilinin tamamının oyunu alarak
+    müttefikan Reis-i cumhur seçilmiş" (3. kez, 1. tur).
+- **İkinci kaynak:** Anadolu Ajansı, "1923'ten günümüze Cumhurbaşkanı seçimleri"
+  (`aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629`) — tarih, kişi,
+  oy sayısı ve tur bilgisi bütün 7 kayıt için TBMM ZC alıntılarıyla birebir eşleşiyor (158,
+  288, 289, 386, 348, 413, 435 oyları; hepsi 1. tur).
+- **Ek çapraz doğrulama:** T.C. Cumhurbaşkanlığı resmî sitesi (tccb.gov.tr, sertifika hatası
+  nedeniyle `curl -k` ile erişildi) Atatürk biyografisinde "29 Ekim 1923 günü ... Mustafa
+  Kemal de oybirliğiyle ilk Cumhurbaşkanı seçildi" ve "1938'deki ölümüne dek arka arkaya
+  dört kez cumhurbaşkanı seçilen Atatürk" ifadeleriyle 1923 tarihini ve toplam 4 seçim
+  sayısını (1923/1927/1931/1935) doğruluyor.
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-11.
+
+### 1923-10-cb-tbmm
+- Bkz. yukarıdaki ortak blok. 29 Ekim 1923, Mustafa Kemal Paşa, kurucu CB, 1. tur, 158/333 oy.
+
+### 1927-11-cb-tbmm
+- Bkz. yukarıdaki ortak blok. 1 Kasım 1927, Atatürk 2. kez, 1. tur, 288/316 oy.
+
+### 1931-05-cb-tbmm
+- Bkz. yukarıdaki ortak blok. 4 Mayıs 1931, Atatürk 3. kez, 1. tur, 289/317 oy.
+
+### 1935-03-cb-tbmm
+- Bkz. yukarıdaki ortak blok. 1 Mart 1935, Atatürk 4. ve son kez, 1. tur, 386/399 oy.
+
+### 1938-11-cb-tbmm
+- Bkz. yukarıdaki ortak blok. 11 Kasım 1938, İsmet İnönü (Atatürk'ün 10.11.1938 ölümü üzerine
+  olağanüstü toplantı), 1. tur, 348 oy (oybirliği).
+
+### 1939-04-cb-tbmm
+- Bkz. yukarıdaki ortak blok. 3 Nisan 1939, İnönü 2. kez, 1. tur, 413/429 oy.
+
+### 1943-03-cb-tbmm
+- Bkz. yukarıdaki ortak blok. 8 Mart 1943, İnönü 3. kez, 1. tur, 435/455 oy.
+
+### Ara seçimler (1923–1945) — envanter sonucu: kayıt bulunamadı
+- TBMM'nin resmi *Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler (1923-1980)* yayını
+  (`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/ed1d2982-f225-4467-a4ab-707f4cc471dc.pdf`, tam metin
+  `pdftotext -layout` ile çıkarıldı, 58856 satır) yalnızca toplu bir rakam veriyor: "TBMM 2.
+  Dönem (1923-1927) boyunca 20 vekil istifa etti, 2 vekilin vekilliği düşürüldü, 25 vekil
+  öldü (6'sı idam); boşalan 47 koltuk için ara seçimler yapıldı" — tarihsiz, toplu bir sayı.
+- WebSearch ile tek tek yıl aranan sorgular ("1931 ara seçimi", "1933 ara seçimi", "1937 ara
+  seçimi", "1941 ara seçimi" TBMM milletvekili) tarihli, ikinci kaynakla doğrulanabilir tek
+  bir ara seçim kaydına ulaşmadı.
+- Sonuç: dönem 0 için kaynaktan doğrulanabilir, tarihli bir ara seçim kaydı **bulunamadı**.
+  Tek parti dönemi iki dereceli seçim sisteminde boşalan koltuklar dönem içi tamamlama
+  seçimleriyle dolduruluyordu ama bunlar münferit, rekabetsiz (tek aday) işlemlerdi ve
+  erişilebilir ikincil kaynaklarda tarihleriyle derlenmiş halde bulunamadı. `veri/sandik.js`'e
+  dönem 0 için ara seçim kaydı eklenmedi.
+- Erişim: 2026-09-11.
+
+### Ortak blok — Hükümetler 1923–1946 (no. 1–14, dönem 0 bandına düşenler)
+Aşağıdaki 14 hükümet kaydı (`hukumet-1`..`hukumet-14`) aynı kaynak kümesini paylaşıyor;
+ayrıntı bu blokta, her kayıt için ayrı kısa başlık aşağıda.
+- **[B] TBMM Başkanlığı Yayınları, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*,
+  Cilt 1 (24 Nisan 1920 – 22 Mayıs 1950)**, hazırlayanlar Dr. İrfan Neziroğlu ve Dr. Tuncer
+  Yılmaz — `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/c52e0723-d073-4331-8a8a-01866e8f1b30.pdf`
+  (indirilip `pdftotext -layout -enc UTF-8` ile tam metne çevrildi, 34572 satır). İçindekiler
+  bölümü "CUMHURİYET HÜKÜMETLERİ" başlığı altında resmî sıra numarası, başbakan/hükümet adı
+  ve başlangıç–bitiş tarihlerini veriyor:
+  1. I. İnönü Hükümeti (30.10.1923-06.03.1924)
+  2. II. İnönü Hükümeti (06.03.1924-22.11.1924)
+  3. Okyar Hükümeti [Ali Fethi Okyar] (22.11.1924-03.03.1925)
+  4. III. İnönü Hükümeti (03.03.1925-01.11.1927)
+  5. IV. İnönü Hükümeti (01.11.1927-27.09.1930)
+  6. V. İnönü Hükümeti (27.09.1930-04.05.1931)
+  7. VI. İnönü Hükümeti (04.05.1931-01.03.1935)
+  8. VII. İnönü Hükümeti (01.03.1935-01.11.1937)
+  9. I. Bayar Hükümeti [Celâl Bayar] (01.11.1937-11.11.1938)
+  10. II. Bayar Hükümeti (11.11.1938-25.01.1939)
+  11. I. Saydam Hükümeti [Refik Saydam] (25.01.1939-03.04.1939)
+  12. II. Saydam Hükümeti (03.04.1939-09.07.1942)
+  13. I. Saraçoğlu Hükümeti [Şükrü Saraçoğlu] (09.07.1942-09.03.1943)
+  14. II. Saraçoğlu Hükümeti (09.03.1943-07.08.1946) — `baslangic` dönem 0 bandına düşüyor
+      (1923–1945), `bitis` dönem 1'e taşıyor; kayıt dönem 0'da tutuldu (spesifikasyon §6.3:
+      bant yerleşimi `baslangic`'e göre).
+  Bütün tarihler 1923-1943 genel seçim ve CB seçimi tarihleriyle iç tutarlı: hükümet
+  başlangıçları CB seçim tarihleriyle (1.11.1927, 4.5.1931, 1.3.1935, 3.4.1939, 8.3.1943 —
+  bir gün farkla 9.3.1943) örtüşüyor.
+- **İkinci kaynak (hükümet tipi çapraz doğrulama):** Özhan DEMİRKOL, "1923'ten 2018'e
+  Türkiye'de Hükümet ve Bakanlıklar", *Fiscaoeconomia*, 7(1), 2023, s. 365-390
+  (`dergipark.org.tr/tr/download/article-file/2660114`) — Tablo 2: "Tek Parti: 18 Hükümet"
+  (1923-1950 arası tek parti dönemi hükümetlerinin toplam sayısı) — dönem 0'daki 14 kayıt bu
+  18'in içinde, `tip:"tek-parti"` sınıflamasını doğruluyor.
+- **`bitisNedeni` — yalnızca doğrulanabilenler dolduruldu, gerisi `null`:**
+  - **no. 9 → "istifa"**: Demirkol (2023), s. 540 civarı — "1938'de Cumhuriyet Halk Partisi
+    (CHP) lideri ve Cumhurbaşkanı Mustafa Kemal Atatürk'ün ölümü sonrasında Celal Bayar
+    Başbakanlığındaki 9. Hükümet istifasını sunmuştur."
+  - **no. 10 → "istifa"**: Taner LÜLECİ (2023, yukarıda CB seçimleri kaydında tam künye) —
+    "Parti divanı 24 Ocak 1939 tarihli toplantısında seçimleri yenileme kararı aldı. 25
+    Ocak'ta Celal Bayar hükümeti istifa etti. Yerine Dr. Refik Saydam hükümeti kuruldu."
+  - **no. 12 → "olum"**: Başbakan Dr. Refik Saydam 8 Temmuz 1942'de (hükümetin resmî bitiş
+    tarihi 9.7.1942 ile bir gün farkla tutarlı) kalp krizinden İstanbul'da vefat etti.
+    [B] `ataturkansiklopedisi.gov.tr/detay/738/İbrahim-Refik-Saydam-(1881-1942)` (Atatürk
+    Kültür, Dil ve Tarih Yüksek Kurumu — resmî/akademik ansiklopedi) + ikinci kaynak
+    Darüşşafaka Cemiyeti, "Dr. Refik Saydam'ın Darüşşafaka Sevgisi ve 8 Temmuz 1942'deki
+    Vefatı" (`darussafaka.org/hakkimizda/cemiyet/tarihimizde-bu-ay/temmuz/...`) — ikisi de
+    8 Temmuz 1942, kalp krizi/ani rahatsızlık üzerinde birleşiyor.
+  - **no. 1-8, 11, 13, 14 → `null`**: bu araştırma turunda ikinci kaynakla doğrulanabilir,
+    spesifik bir bitiş nedeni bulunamadı (genel tarihsel bilgi olarak dönem içi Parti Divanı
+    kararları/CB döneminin başlangıcı gibi nedenler akla yatkın ama tek bir açık ifadeyle
+    doğrulanamadı; hafızadan doldurulmadı).
+- **`baslangic` ölçütü kararı (bu görevde seçildi, sonraki dönemlerde de kullanılacak):**
+  TBMM cildindeki "hükümetin resmen kurulduğu/göreve başladığı tarih" kullanılıyor
+  (Resmî Gazete yayım tarihi değil) — 1920'ler-1940'lar için Resmî Gazete'nin bu ayrıntı
+  düzeyinde bu ortamdan taranabilir/erişilebilir olmaması ve TBMM cildinin tek, sayfa
+  numarasıyla izlenebilir, tutarlı bir kaynak sunması nedeniyle.
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-11.
+
+### 1930-10-yerel
+- Tek parti dönemi ilk ülke geneli belediye meclisi seçimi.
+- Sonuç: 5 Ekim 1930 Pazar günü başladı (bazı bölgelerde 18 Ekim'e kadar sürdü); 1930 tarihli,
+  3 Nisan 1930 kabul edilen 1580 sayılı Belediye Kanunu'nun getirdiği, Cumhuriyet tarihinin ilk
+  tek dereceli (doğrudan) belediye meclisi seçimi — kadınlar da ilk kez oy kullandı. Ülke
+  genelinde yapıldı; Serbest Cumhuriyet Fırkası'nın (kuruluşu Ağustos 1930) tek katıldığı genel
+  nitelikli seçim olması nedeniyle CHF-SCF arasında gerçek bir yarışma oldu.
+- **[B] Ahmet GÜLEN, "1930 İstanbul Belediye Seçimleri", *Atatürk Araştırma Merkezi Dergisi*,
+  Mayıs 2023, Cilt XXXIX, Sayı 107 (`atamdergi.gov.tr/tam-metin/1095/tur`)** — "İstanbul
+  belediye seçimleri 5 Ekim 1930 Pazar günü başlamıştır... kullanılan oy sayısı 49.204'tür...
+  CHF'nin aldığı 35.934 oyuna karşılık SCF 12.813 oy almıştır" (İstanbul'a özgü rakamlar;
+  makale seçimin ülke genelinde yapıldığını, ama ayrıntılı sonuçları yalnızca İstanbul için
+  verdiğini belirtiyor). Aynı makale: "İstanbullu seçmenler birden fazla partinin yer alacağı
+  bir sonraki seçimi ancak 1945 yılı sonrasında görebilecektir" — 1934/1938/1942
+  seçimlerinin (aşağıya bakın) tek parti (yalnız CHP) ile yapıldığını dolaylı doğruluyor.
+- **İkinci kaynak (serinin varlığı):** [Niğde Ömer Halisdemir Üniversitesi Sosyal Bilimler
+  Enstitüsü Dergisi, "Burdur Vilayeti'nde 1934 Belediye Seçimleri"]
+  (`dergipark.org.tr/tr/pub/nohusosbil/article/1818045`) — "Tek parti döneminin siyasal
+  sürecinde gerçekleştirilen 1934 belediye seçimleri, Türkiye Cumhuriyeti tarihinin **ikinci**
+  yerel seçimleri" ifadesiyle 1930'un ilk olduğunu doğruluyor; kaynakçasında Üste, R. B.
+  (2006), *Tek Partili Dönemde Yerel Seçimler 1930-1934-1938-1942* (yüksek lisans tezi)
+  referansı, dört seçimlik serinin (1930/1934/1938/1942) akademik literatürde kabul edilmiş
+  bir envanter olduğunu gösteriyor.
+- **Ülke geneli oy sayısı:** bulunamadı — resmî bir kaynakta 502 seçim çevresinin tam il/ilçe
+  tablosu bu görevde erişilemedi, bu yüzden `araclar/topla.js` ile hesaplama da yapılamadı.
+  `sonuc: []`, `kayitli`/`kullanilan`/`gecerli`: `null` (spesifikasyon §5.3, 1963 öncesi
+  kuralı). İstanbul'a özgü rakam (CHF 35.934, SCF 12.813) `not` alanında bilgi olarak
+  aktarıldı; `buyuksehir` alanı yazılmadı (1930'da İstanbul belediye başkanı atamayla
+  geliyordu — doğrudan seçim yok, Görev 1'de doğrulanan 1963 kuralı).
+- Uyuşmazlık: yok.
+- Erişim: 2026-09-11.
+
+### 1934, 1938, 1942 belediye seçimleri — envanterde bulundu, kayıt EKLENMEDİ
+- Bulgu: birden çok bağımsız kaynak (Burdur akademik makalesi + Üste 2006 tez başlığı +
+  WebSearch'te tekrarlayan "1934/1938/1942 tek parti dönemi 2., 3. ve 4. yerel seçimler"
+  ifadeleri) bu üç seçimin var olduğunu tutarlı biçimde doğruluyor: 1934 (CHF tek başına,
+  "ikinci yerel seçim"), 1938 (Ekim, "üçüncü"), 1942 (Ekim, "dördüncü", II. Dünya Savaşı
+  gölgesinde).
+- **Sorun:** bu görevde her üçü için de gün/ay düzeyinde kesin tarih, Vikipedi dışı **iki**
+  bağımsız kaynakla doğrulanamadı (yalnızca "1934 yılı" gibi yıl düzeyinde bilgiye ulaşıldı;
+  Ekim ayı iddiaları büyük ölçüde arama sentezlerinde Vikipedi'ye dayanıyordu, kural gereği
+  kullanılmadı). 1580 sayılı Belediye Kanunu'nun metni (Madde 20) yalnızca "dört sene"lik
+  seçim devresini belirtiyor, belirli bir ay şartı koymuyor.
+- Sonuç: `id`/`tarih` alanları için gerekli asgari doğrulama sağlanamadığından bu üç kayıt
+  **`veri/sandik.js`'e eklenmedi**. Kullanıcıya sunulacaklar bölümünde ayrıca belirtildi —
+  ileride ayrı bir araştırma turuyla (TBMM ZC veya dönemin Resmî Gazete/gazete arşivi taraması)
+  tamamlanabilir.
+- Erişim: 2026-09-11.
+
+### hukumet-1
+Bkz. yukarıdaki ortak blok. I. İnönü Hükümeti, 30.10.1923-06.03.1924, tip: tek-parti.
+
+### hukumet-2
+Bkz. yukarıdaki ortak blok. II. İnönü Hükümeti, 06.03.1924-22.11.1924, tip: tek-parti.
+
+### hukumet-3
+Bkz. yukarıdaki ortak blok. Okyar Hükümeti (Ali Fethi Okyar), 22.11.1924-03.03.1925,
+tip: tek-parti.
+
+### hukumet-4
+Bkz. yukarıdaki ortak blok. III. İnönü Hükümeti, 03.03.1925-01.11.1927, tip: tek-parti.
+
+### hukumet-5
+Bkz. yukarıdaki ortak blok. IV. İnönü Hükümeti, 01.11.1927-27.09.1930, tip: tek-parti.
+
+### hukumet-6
+Bkz. yukarıdaki ortak blok. V. İnönü Hükümeti, 27.09.1930-04.05.1931, tip: tek-parti.
+
+### hukumet-7
+Bkz. yukarıdaki ortak blok. VI. İnönü Hükümeti, 04.05.1931-01.03.1935, tip: tek-parti.
+
+### hukumet-8
+Bkz. yukarıdaki ortak blok. VII. İnönü Hükümeti, 01.03.1935-01.11.1937, tip: tek-parti.
+
+### hukumet-9
+Bkz. yukarıdaki ortak blok. I. Bayar Hükümeti (Celâl Bayar), 01.11.1937-11.11.1938,
+tip: tek-parti, bitisNedeni: istifa (Demirkol 2023).
+
+### hukumet-10
+Bkz. yukarıdaki ortak blok. II. Bayar Hükümeti, 11.11.1938-25.01.1939, tip: tek-parti,
+bitisNedeni: istifa (Lüleci 2023: "25 Ocak'ta Celal Bayar hükümeti istifa etti").
+
+### hukumet-11
+Bkz. yukarıdaki ortak blok. I. Saydam Hükümeti (Refik Saydam), 25.01.1939-03.04.1939,
+tip: tek-parti.
+
+### hukumet-12
+Bkz. yukarıdaki ortak blok. II. Saydam Hükümeti, 03.04.1939-09.07.1942, tip: tek-parti,
+bitisNedeni: olum (Refik Saydam 8 Temmuz 1942'de görev başında vefat etti —
+ataturkansiklopedisi.gov.tr + darussafaka.org).
+
+### hukumet-13
+Bkz. yukarıdaki ortak blok. I. Saraçoğlu Hükümeti (Şükrü Saraçoğlu), 09.07.1942-09.03.1943,
+tip: tek-parti.
+
+### hukumet-14
+Bkz. yukarıdaki ortak blok. II. Saraçoğlu Hükümeti, 09.03.1943-07.08.1946, tip: tek-parti.
+`baslangic` dönem 0 bandına (1923-1945) düşüyor, `bitis` dönem 1'e taşıyor.
+
 ### Adım 3.3 — Güncellik: 2026-09-11 sonrası seçim/referandum ilanı var mı?
 - WebSearch `YSK 2026 seçim takvimi halkoylaması referandum`.
 - Sonuç: Yeni bir referandum ya da erken genel/CB seçimi ilanına rastlanmadı. Bulunan tek yakın
   tarihli olay, spesifikasyon §8.5'te zaten kapsam dışı olarak işaretlenmiş 7 Haziran 2026 yerel
   ara seçimiydi (bu görev bunu yeniden doğruladı, yeni bir bulgu değil). Olağan genel/CB seçim
   takvimi (2028) ve referandum yasal usulü (kabul kanununun RG yayımından 60 gün sonraki ilk
   Pazar) hakkında genel bilgi dışında 2026-09-11 sonrasına dair somut bir ilan bulunamadı.
 - Erişim: 2026-09-11.
diff --git a/veri/sandik.js b/veri/sandik.js
index 1364a60..5c0dfb9 100644
--- a/veri/sandik.js
+++ b/veri/sandik.js
@@ -1,7 +1,160 @@
 /* Sandık verisi: seçimler, referandumlar, hükümetler.
    Kurallar: docs/superpowers/specs/2026-09-11-sandik-design.md §5 ve §8.
    Her değerin kaynağı araclar/kaynak-defteri.md'dedir. null = doğrulanamadı (ekranda —). */
 window.SANDIK = {
-  secimler: [],
-  hukumetler: []
+  secimler: [
+    // --- dönem 0 (1923 – 1945) ---
+
+    // kaynak: araclar/kaynak-defteri.md#1923-06-genel
+    { id: "1923-06-genel", tur: "genel", tarih: "1923-06-01", tekParti: true,
+      meclis: 287, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
+      sonuc: [ { parti: "chp23", oy: null, sandalye: 287 } ],
+      not: "Seçim tarihi kaynaklarda yalnızca \"Haziran–Temmuz 1923\" olarak veriliyor (il il farklı günlerde, iki dereceli); gösterilen gün yaklaşıktır." },
+
+    // kaynak: araclar/kaynak-defteri.md#1923-10-cb-tbmm
+    { id: "1923-10-cb-tbmm", tur: "cb-tbmm", tarih: "1923-10-29",
+      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
+      not: "Cumhuriyet'in ilanıyla aynı gün, tek aday olarak oybirliğiyle seçildi (158 oy)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1927-09-genel
+    { id: "1927-09-genel", tur: "genel", tarih: "1927-09-02", tekParti: true,
+      meclis: 316, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
+      sonuc: [ { parti: "chp23", oy: null, sandalye: 316 } ],
+      not: "İkinci seçmenler 30 Temmuz–5 Ağustos, milletvekilleri 2–6 Eylül 1927 arasında seçildi." },
+
+    // kaynak: araclar/kaynak-defteri.md#1927-11-cb-tbmm
+    { id: "1927-11-cb-tbmm", tur: "cb-tbmm", tarih: "1927-11-01",
+      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
+      not: "Atatürk 2. kez, tek aday, oybirliğiyle seçildi (288 oy)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1930-10-yerel
+    { id: "1930-10-yerel", tur: "yerel", tarih: "1930-10-05",
+      olcu: "belediye-meclisi",
+      kayitli: null, kullanilan: null, gecerli: null,
+      sonuc: [],
+      not: "Serbest Cumhuriyet Fırkası'nın girdiği tek seçimdi; İstanbul'da CHF 35.934, SCF 12.813 oy aldı (ülke geneli toplam bulunamadı)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1931-04-genel
+    { id: "1931-04-genel", tur: "genel", tarih: "1931-04-25", tekParti: true,
+      meclis: 317, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
+      sonuc: [ { parti: "chp23", oy: null, sandalye: 317 } ],
+      not: "İkinci seçmenler 7–10 Nisan, milletvekilleri 25 Nisan 1931'de seçildi." },
+
+    // kaynak: araclar/kaynak-defteri.md#1931-05-cb-tbmm
+    { id: "1931-05-cb-tbmm", tur: "cb-tbmm", tarih: "1931-05-04",
+      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
+      not: "Atatürk 3. kez, tek aday, oybirliğiyle seçildi (289 oy)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1935-02-genel
+    { id: "1935-02-genel", tur: "genel", tarih: "1935-02-08", tekParti: true,
+      meclis: 399, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
+      sonuc: [ { parti: "chp23", oy: null, sandalye: 399 } ],
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#1935-03-cb-tbmm
+    { id: "1935-03-cb-tbmm", tur: "cb-tbmm", tarih: "1935-03-01",
+      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
+      not: "Atatürk 4. ve son kez, tek aday, oybirliğiyle seçildi (386 oy)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1938-11-cb-tbmm
+    { id: "1938-11-cb-tbmm", tur: "cb-tbmm", tarih: "1938-11-11",
+      secilen: "İsmet İnönü", turSayisi: 1,
+      not: "Atatürk'ün 10 Kasım 1938'deki ölümü üzerine olağanüstü toplanan TBMM'de, tek aday, oybirliğiyle seçildi (348 oy)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1939-03-genel
+    { id: "1939-03-genel", tur: "genel", tarih: "1939-03-26", tekParti: true,
+      meclis: 429, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
+      sonuc: [ { parti: "chp23", oy: null, sandalye: 429 } ],
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#1939-04-cb-tbmm
+    { id: "1939-04-cb-tbmm", tur: "cb-tbmm", tarih: "1939-04-03",
+      secilen: "İsmet İnönü", turSayisi: 1,
+      not: "İnönü 2. kez, tek aday, oybirliğiyle seçildi (413 oy)." },
+
+    // kaynak: araclar/kaynak-defteri.md#1943-02-genel
+    { id: "1943-02-genel", tur: "genel", tarih: "1943-02-28", tekParti: true,
+      meclis: 455, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
+      sonuc: [ { parti: "chp23", oy: null, sandalye: 455 } ],
+      not: "İkinci Dünya Savaşı'nın en yoğun döneminde yapılan, tek parti döneminin son genel seçimidir." },
+
+    // kaynak: araclar/kaynak-defteri.md#1943-03-cb-tbmm
+    { id: "1943-03-cb-tbmm", tur: "cb-tbmm", tarih: "1943-03-08",
+      secilen: "İsmet İnönü", turSayisi: 1,
+      not: "İnönü 3. kez, tek aday, oybirliğiyle seçildi (435 oy)." }
+  ],
+
+  hukumetler: [
+    // --- dönem 0 (1923 – 1945) ---
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-1
+    { no: 1, basbakan: "İsmet İnönü", partiler: ["chp23"],
+      baslangic: "1923-10-30", bitis: "1924-03-06", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-2
+    { no: 2, basbakan: "İsmet İnönü", partiler: ["chp23"],
+      baslangic: "1924-03-06", bitis: "1924-11-22", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-3
+    { no: 3, basbakan: "Ali Fethi Okyar", partiler: ["chp23"],
+      baslangic: "1924-11-22", bitis: "1925-03-03", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-4
+    { no: 4, basbakan: "İsmet İnönü", partiler: ["chp23"],
+      baslangic: "1925-03-03", bitis: "1927-11-01", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-5
+    { no: 5, basbakan: "İsmet İnönü", partiler: ["chp23"],
+      baslangic: "1927-11-01", bitis: "1930-09-27", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-6
+    { no: 6, basbakan: "İsmet İnönü", partiler: ["chp23"],
+      baslangic: "1930-09-27", bitis: "1931-05-04", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-7
+    { no: 7, basbakan: "İsmet İnönü", partiler: ["chp23"],
+      baslangic: "1931-05-04", bitis: "1935-03-01", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-8
+    { no: 8, basbakan: "İsmet İnönü", partiler: ["chp23"],
+      baslangic: "1935-03-01", bitis: "1937-11-01", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-9
+    { no: 9, basbakan: "Celâl Bayar", partiler: ["chp23"],
+      baslangic: "1937-11-01", bitis: "1938-11-11", tip: "tek-parti", bitisNedeni: "istifa",
+      not: "Atatürk'ün ölümü üzerine istifa etti." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-10
+    { no: 10, basbakan: "Celâl Bayar", partiler: ["chp23"],
+      baslangic: "1938-11-11", bitis: "1939-01-25", tip: "tek-parti", bitisNedeni: "istifa",
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-11
+    { no: 11, basbakan: "Refik Saydam", partiler: ["chp23"],
+      baslangic: "1939-01-25", bitis: "1939-04-03", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-12
+    { no: 12, basbakan: "Refik Saydam", partiler: ["chp23"],
+      baslangic: "1939-04-03", bitis: "1942-07-09", tip: "tek-parti", bitisNedeni: "olum",
+      not: "Başbakan Refik Saydam 8 Temmuz 1942'de görev başında vefat etti." },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-13
+    { no: 13, basbakan: "Şükrü Saraçoğlu", partiler: ["chp23"],
+      baslangic: "1942-07-09", bitis: "1943-03-09", tip: "tek-parti", bitisNedeni: null,
+      not: null },
+
+    // kaynak: araclar/kaynak-defteri.md#hukumet-14
+    { no: 14, basbakan: "Şükrü Saraçoğlu", partiler: ["chp23"],
+      baslangic: "1943-03-09", bitis: "1946-08-07", tip: "tek-parti", bitisNedeni: null,
+      not: null }
+  ]
 };
```
