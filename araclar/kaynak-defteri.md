# Kaynak defteri

Sitede gösterilmez. Her sayının hangi kaynaktan geldiğini kaydeder (spesifikasyon §8.3).
Birincil kaynak **[B]** ile işaretlenir. "hesaplandı" = resmî il tablosundan `araclar/topla.js` ile.

## Kaynak haritası

| Konu | Birincil (resmî) | İkinci kaynak | Erişim notu |
|---|---|---|---|
| Genel seçim 1923–2011 | TÜİK *Milletvekili Genel Seçimleri 1923–2011* — `https://www.ysk.gov.tr/doc/dosyalar/1923-2011-MVSecimleri-Tuik.pdf` | 1950–1999: TBMM seçim sorgusu `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=YYYY` (oy + %; sandalye yok) | PDF metin katmanlı; `pdftotext -layout -enc UTF-8`. Türkçe harfler bozuk (ş→ú, ğ→÷, İ→ø) **yalnızca çok sütunlu veri tablolarında** (Tablo 1, Tablo 23/24); önsöz, içindekiler ve Ek bölümleri (s. 259 dahil) düzgün UTF-8 ile çıkıyor. Rakamlar her durumda ASCII. Tablo 1 s.22, Tablo 2–3 s.23, il/parti sonuçları Tablo 23 (s.25–92, 1950–1977) ve Tablo 24 (s.93–258, 1983–2011), Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" s.259 (PDF sayfa numarası ≠ basılı sayfa numarası; içindekiler tablosundaki basılı numaraya göre ara). TÜİK 1961 öncesini arşiv taramasıyla derlemiş — o dönemde TBMM ikinci kaynak olarak zorunlu. WebFetch bağlantıyı zaman zaman sıfırlıyor; yeniden dene. Görev 1'de doğrulandı (2026-09-11): yerel kopya `C:/Users/Lizer/.claude/projects/C--Users-Lizer-Desktop-projects-siyasi-parti/c2b2a5af-348d-45d1-aacb-260f42e6e083/tool-results/webfetch-1789121603458-3nc85e.pdf`. |
| Genel seçim 2015–2023 | YSK kesin sonuç kararları (Resmî Gazete) | TÜİK/YSK istatistik yayınları | YSK seçim sayfaları JS kabuğu; doğrudan `ysk.gov.tr/doc/…` PDF'leri ve Resmî Gazete kullanılır. `acikveri.ysk.gov.tr` yoklamada bağlantıyı düşürdü (Görev 1: 3 deneme sonrası da erişilemedi — 2× ECONNRESET, 1× yalnızca JS kabuğu; bkz. Kayıtlar altında "Adım 3.1"). |
| Referandum | YSK Halkoylaması Arşivi `https://www.ysk.gov.tr/tr/halkoylamasi-arsivi/2648`; 1982: `…/doc/dosyalar/docs/1982Referandum/7-Kas%C4%B1m-1982-Halk-Oylamas%C4%B1.pdf` | Resmî Gazete ilanı / TÜİK | 1982 PDF'i il satırları içerir, Türkiye toplamı yok → `araclar/topla.js` ile toplanır ve ikinci kaynakla eşleştirilir. |
| Yerel seçim | YSK Mahalli İdareler Arşivi `https://www.ysk.gov.tr/tr/mahalli-idareler-genel-secimleri-arsivi/2650`; TÜİK mahalli idareler yayınları (örn. `…/doc/dosyalar/1989Mahalli-Tuik.pdf`) | Resmî Gazete | Arşiv sayfası JS kabuğu; doğrudan PDF adresleri arama ile bulunur. Belediye başkanlarının doğrudan halk oyuyla seçimi **17 Kasım 1963 yerel seçiminden itibaren** geçerli (Görev 1'de doğrulandı — bkz. Kayıtlar). |
| Hükümetler 1920–1995 | TBMM *Hükümetler, Programları ve Genel Kurul Görüşmeleri* cilt 1–8 (`acikerisim.tbmm.gov.tr`, `cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/…`, cilt 8: `https://www5.tbmm.gov.tr/yayinlar/hukumetler/hukumetler_cilt_8.pdf`) | TBMM *Koalisyon Hükümetleri, Koalisyon Protokolleri* `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/874b1bb8-73c2-4847-8d40-01866e87ca4a.pdf` | TBMM hükümetler HTML sayfası artık ana sayfaya yönleniyor (ölü). |
| Hükümetler 1995– | Cilt 9 bulundu (Görev 1, Adım 3.2): `acikerisim.tbmm.gov.tr/items/2305701f-7bde-4344-bfbe-4166743fe1e2`, 30 Ekim 1995 – 11 Ocak 1999 aralığını kapsıyor; bitstream: `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/ed9cef72-34f2-44bc-9a66-e77e6c0aab99/content`. 1999 sonrası ciltler Görev'in ilgili veri adımında ayrıca aranmalı (bkz. Kayıtlar, Adım 3.2). | Akademik derleme "1923'ten 2018'e Türkiye'de Hükümet ve Bakanlıklar" | `hukumetler_cilt_9.pdf` adresi (www5 alan adında) yok (ana sayfaya yönleniyor); dosya `acikerisim.tbmm.gov.tr` üzerinde farklı bir adres yapısıyla duruyor. |
| TBMM CB seçimleri | TBMM tutanakları; TBMM *Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler (1923–1980)* | Cumhurbaşkanlığı (tccb.gov.tr) | — |
| Karşılaştırma | Vikipedi (tr/en) | — | Hiçbir zaman tek ya da ikinci kaynak sayılmaz. |

## Doğrulanan iddialar

Bunlar spesifikasyon §8.5'te "hafızadan" olarak işaretlenmiş, Görev 1'de doğrulanan iddialardır.
Ayrıntılı kaynaklar için `## Kayıtlar` altındaki ilgili başlığa bakın.

1. **Refah Partisi'nin AYM kapatma kararının tarihi: 16 Ocak 1998** (ikincil kaynaklara göre Esas
   1997/1, Karar 1998/1; RG yayım tarihi 22 Şubat 1998) — DOĞRULANDI ([B] TBMM Tutanak Dergisi,
   Cilt 43, 44. Birleşim, 20.1.1998 + ikincil kaynaklar; ayrıntı: Kayıtlar).
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
- Sonuç: **16 Ocak 1998 (Cuma)**.
- **[B] T.B.M.M. Tutanak Dergisi, Cilt 43, 44. Birleşim, 20.1.1998 Salı** (Dönem 20, Yasama Yılı 3)
  — `https://cdn.tbmm.gov.tr/TbmmWeb/Tutanak20230120/20/3/44/6ac1c7c2-378e-4cdc-b9f2-03b26ca674ef.html`.
  Bu resmî TBMM tutanağında, kapatma kararından 4 gün sonraki genel kurul oturumunda Kayseri
  Milletvekili Abdullah Gül'ün konuşmasında geçen ifade: "Refah Partisinin, Anayasa Mahkemesi
  tarafından 16 Ocak 1998 Cuma günü kapatılmasıyla ilgili söz almış bulunuyorum." Tutanak resmî
  karar/esas numarasını içermiyor, yalnızca tarihi doğruluyor (iç tutarlılık kontrolü: 16 Ocak
  1998 gerçekten Cuma gününe denk geliyor).
- İkinci kaynak (tarih + esas/karar no. + RG tarihi için): hukukansiklopedisi.com/refah-partisi-kapatma-karari/
  (esas 1997/1, karar 1998/1, RG 22 Şubat 1998) + WebSearch ile toplanan 5 bağımsız haber kaynağı
  (yenisafak.com, milliyet.com.tr, hicrethaber.com, refahmedya.com, memurlar.net'in AYM'den
  doğrudan alıntısı: "[AYM, E.1997/1, K.1998/1, 16/1/1998]") — hepsi 16 Ocak 1998 tarihinde ve
  esas/karar numaralarında birleşiyor.
- Uyuşmazlık: hukukansiklopedisi.com sayfasının gövde metninde bir cümle "Karar, 9 Ocak 1998
  tarihinde verilmiş" diyor — aynı sayfanın başlığıyla, TBMM tutanağıyla ve bütün diğer
  kaynaklarla çelişiyor; tek ve iç tutarsız olduğu için dikkate alınmadı, 16 Ocak 1998 esas alındı.
- **Düzeltme turu 1 notu (2026-09-11):** İlk yoklamada AYM/Resmî Gazete'nin kendi sitelerine
  (`anayasa.gov.tr`, `kararlaryeni.anayasa.gov.tr`, `kararlarbilgibankasi.anayasa.gov.tr`,
  `resmigazete.gov.tr`) doğrudan erişilemediği için bu iddia yalnızca ikincil kaynaklarla işaretlenmişti.
  İkinci yoklamada TBMM'nin kendi tutanak arşivi (`cdn.tbmm.gov.tr`) üzerinden resmî bir kaynağa
  ulaşıldı; ayrıntılı deneme kaydı için `.superpowers/sdd/2026-09-11-sandik/task-1-report.md`
  içindeki "Düzeltme turu 1" bölümüne bakın.
- Erişim: 2026-09-11 (ilk yoklama); 2026-09-11 (düzeltme turu 1, TBMM tutanağı).

### Adım 2, madde 2 — 1960 ve 1980 `yonetim` aralıklarının geçiş seçimi tarihleri
- Sonuç: 27 Mayıs 1960 kabı → geçiş seçimi 15 Ekim 1961 → `bit = 1961-10-14`.
  12 Eylül 1980 kabı → geçiş seçimi 6 Kasım 1983 → `bit = 1983-11-05`.
- [B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Ek-1 "Milletvekili Genel Seçimlerinin
  Yapıldığı Tarihler", s. 259 (basılı sayfa numarası; PDF'te `pdftotext -layout` tam metinde
  "10.Dönem  15 Ekim 1961" ve "16.Dönem  6 Kasım 1983" satırları okundu — bu bölüm garbled değil).
- TBMM seçim sorgusu `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1961`
  — 15 Ekim 1961 tarihini doğruladı (parti dağılımında TÜİK Tablo 1'in 1961 satırıyla küçük bir
  uyuşmazlık var, bkz. aşağı; tarih kendisi uyuşuyor).
  6 Kasım 1983 için ikinci kaynak: YSK'nın resmi 1983 seçim sonuçları PDF'i (aşağıdaki madde 3 ile
  aynı belge) + WebSearch ile bulunan çok sayıda bağımsız kaynak (secim.star.com.tr,
  secim.aksam.com.tr, Vikipedi — Vikipedi tek başına sayılmadı, yalnızca çapraz kontrol).
- Uyuşmazlık: TÜİK Tablo 1'in 1961 satırı OCR/tablo hizalama sorunuyla "2 CHP, DP" giren parti
  sayısı gösteriyor gibi okunuyor; oysa hem TBMM seçim sorgusu hem tarihsel kayıt 1961'de 4 partinin
  (CHP, AP, CKMP, YTP) meclise girdiğini gösteriyor. Bu, `pdftotext -layout`'ın çok satırlı
  hücreleri yanlış hizalamasından kaynaklanıyor (Tablo 1, çok satırlı bir tablo); yalnızca **tarih**
  doğrulaması bu görevin kapsamında olduğundan parti dağılımı uyuşmazlığı burada çözülmedi — Görev
  2'de 1961 kaydı yazılırken Tablo 1 yerine Tablo 23 (il/parti sonuçları, s. 25-92) kullanılmalı.
- Erişim: 2026-09-11.

### Adım 2, madde 3 — MDP'nin 1983 genel seçiminde meclise girmesi
- Sonuç: Doğru. MDP, ANAP ve HP ile birlikte meclise giren 3 partiden biri; 71 sandalye, %23,27 oy,
  üçüncü sırada (ANAP 211/45,14%, HP 117/30,46%, MDP 71/23,27%).
- [B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 1, s. 22 — `pdftotext -f 22 -l 22 -layout
  -enc UTF-8`, 1983 satırı: "3  ANAP, HP, MDP" (meclise giren siyasi parti sayısı ve isimleri).
- [B] YSK'nın resmi "6 KASIM 1983 MİLLETVEKİLİ GENEL SEÇİMİ SONUÇLARI" PDF'i
  (`https://www.ysk.gov.tr/doc/dosyalar/docs/1983MilletvekiliSecimi/1983_Secim_Sonuclari.pdf`,
  ilk WebFetch denemesi ECONNRESET verdi, ikinci deneme başarılı oldu ve dosya diske kaydedildi) —
  il il "MİLLİYETÇİ DEMOKRASİ PARTİSİ" (MDP) oy sütunu, MDP'nin ülke genelinde oy aldığını
  doğruluyor.
- Üçüncü çapraz kontrol: secim.star.com.tr/secim/6-kasim-1983-genel-secimleri,
  secim.aksam.com.tr/secim/6-kasim-1983-genel-secimleri (71 sandalye, %23,27).
- Uyuşmazlık: yok.
- Erişim: 2026-09-11.

### Adım 2, madde 4 — Belediye başkanlarının ilk kez doğrudan halk oyuyla seçimi
- Sonuç: 17 Kasım 1963 yerel seçimi — daha önce belediye meclisi tarafından seçilen belediye
  başkanları, bu seçimden itibaren doğrudan, tek dereceli genel oyla seçildi.
- [B] 307 sayılı "Belediye Kanununda değişiklik yapılmasına dair Kanun" — Kabul tarihi 19.7.1963,
  Resmî Gazete ile yayımı 27.7.1963, Sayı 11465. TBMM'nin resmi tutanak PDF'i:
  `https://www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc046/kanuntbmmc046/kanuntbmmc04600307.pdf`
  (text katmanlı, doğrudan okundu). Alıntı: "Her iki seçim, serbest, eşit, gizli, tek dereceli
  genel oy... yapılır" (EK MADDE 1), önceki durumdan (belediye meclisi tarafından seçim) farkı
  açıkça ortaya koyuyor.
- İkinci kaynak: dergipark akademik makalesi "Sandıkta Bitmeyen Seçim: 17 Kasım 1963 İstanbul
  Belediye Başkanlığı Seçimi" (Uluslararası Anadolu Sosyal Bilimler Dergisi,
  `https://dergipark.org.tr/tr/pub/ulasbid/issue/64402/1025285`) — makale bu seçimi "belediye
  başkanının halk tarafından ilk defa doğrudan seçildiği seçim" olarak tanımlıyor.
- Uyuşmazlık: yok.
- Etki: `buyuksehir` alanı 17 Kasım 1963 yerel seçiminden itibaren yazılabilir; öncesinde (1963
  öncesi kayıtlarda) yazılmaz (tasarım §5.3 kuralının dayanağı artık doğrulanmış durumda).
- Erişim: 2026-09-11.

### Adım 3.1 — acikveri.ysk.gov.tr yoklaması
- 3 WebFetch denemesi yapıldı: ilk ikisinde `ECONNRESET`, üçüncüsünde sayfa yüklendi ama YSK'nın
  diğer arşiv sayfaları gibi yalnızca JS kabuğu döndü (`[](#page-top)` dışında içerik yok) — veri
  seti listesi/biçimi bu görevde tespit edilemedi.
- Sonuç: kaynak haritasına "Görev 1: 3 deneme sonrası da erişilemedi (2× ECONNRESET, 1× JS kabuğu)"
  notu eklendi. Sonraki veri görevlerinde tekrar denenebilir; birincil kaynak olarak
  `ysk.gov.tr/doc/dosyalar/…` PDF'leri ve Resmî Gazete kullanılmaya devam edilecek (kaynak
  haritasındaki mevcut plan değişmedi).
- Erişim: 2026-09-11.

### Adım 3.2 — 1995 sonrası hükümetler için TBMM ciltleri
- WebSearch `"Hükümetler Programları ve Genel Kurul Görüşmeleri" cilt 9`:
  - Cilt 9 bulundu: `acikerisim.tbmm.gov.tr/items/2305701f-7bde-4344-bfbe-4166743fe1e2`
    (bitstream: `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/ed9cef72-34f2-44bc-9a66-e77e6c0aab99/content`),
    kapsadığı aralık: 30 Ekim 1995 – 11 Ocak 1999.
  - `www5.tbmm.gov.tr/yayinlar/hukumetler/hukumetler_cilt_9.pdf` adresi yok (brief'te zaten
    belirtilmişti); dosya yalnızca `acikerisim.tbmm.gov.tr` üzerinde farklı bir yapıda duruyor.
  - 1999 sonrasını (özellikle 2002– AKP dönemi) kapsayan bir sonraki cilt bu görevde
    doğrulanamadı — kaynak haritasına "Görev'in ilgili veri adımında ayrıca aranmalı" notu
    eklendi; ilgili dönem verisi toplanırken `acikerisim.tbmm.gov.tr` içinde arama yapılmalı.
- Sonuç: kaynak haritası güncellendi (bkz. yukarıdaki tablo, "Hükümetler 1995–" satırı).
- Erişim: 2026-09-11.

## Görev 9 — Dönem 0 (1923–1945)

**Hükümet `baslangic` ölçütü (ilk kayıtta seçildi, bütün dönemlerde aynı kullanılacak):**
TBMM'nin *Hükümetler, Programları ve Genel Kurul Görüşmeleri* cildinde verilen "hükümetin
kurulduğu tarih" (Bakanlar Kurulu'nun teşekkül edip yemin ettiği/göreve başladığı tarih)
kullanılıyor — bu tarih genelde Resmî Gazete yayım tarihinden birkaç gün önce olabiliyor,
ama TBMM cildi bu dönem için tek tutarlı, sayfa numarasıyla izlenebilir kaynak. Resmî Gazete
1923–1930 arası dönemde bazı hükümetler için taranabilir/erişilebilir değil.

### Ortak blok — 1923-1943 genel seçimleri (tek parti): envanter, tarihler, meclis büyüklüğü
Aşağıdaki 6 kayıt (`1923-06-genel`, `1927-09-genel`, `1931-04-genel`, `1935-02-genel`,
`1939-03-genel`, `1943-02-genel`) aynı kaynak kümesini paylaşıyor; ayrıntı bu blokta, her
kayıt için ayrı kısa başlık aşağıda.
- Sonuç: aday liste birebir doğrulandı — 1923, 1927, 1931, 1935, 1939, 1943; hepsinde tek
  parti CHP (Cumhuriyet Halk Fırkası/Partisi), sonuç tamamı CHP (`sandalye` = `meclis`).
- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 1 (PDF s. 22, basılı s. 4)** —
  `pdftotext -f 22 -l 22 -layout -enc UTF-8`: "1923 İki Dereceli Seçim Sistemi 1 CHP ... 1 CHP";
  aynı desen 1927, 1931, 1935, 1939, 1943 için tekrarlanıyor (ham metinde net, `-layout`
  hizalaması kayıyor ama `pdftotext -enc UTF-8` (layout'suz) ham akışta "1 CHP" / "1 CHP"
  çiftleri her yıl için ayrı ayrı doğrulandı).
- **[B] TÜİK Tablo 5 "Tek parti döneminde illerin çıkardığı milletvekili sayısı" (PDF s. 25,
  basılı s. 7)**, "Toplam" satırı: 1923=287, 1927=316, 1931=317, 1935=399, 1939=429, 1943=455.
- **İkinci kaynak (çapraz doğrulama):** Taner LÜLECİ, "İsmet İnönü'nün Cumhurbaşkanlığı
  Seçimleri", *Gazi Akademik Bakış*, Sayı 32, Cilt 16, Yaz 2023, s. 173–185
  (`dergipark.org.tr/tr/download/article-file/3212364`) — TBMM Zabıt Ceridesi'ne dayanarak
  her cumhurbaşkanlığı seçiminde toplam meclis üyesi sayısını da veriyor: 1927→316,
  1931→317, 1935→399, 1939→429, 1943→455 — TÜİK Tablo 5 ile birebir eşleşiyor (bağımsız
  çapraz doğrulama).
- Tarihler **[B] TÜİK Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" (PDF s. 277,
  basılı s. 259 — sayfa altbilgisi "259"; offset PDF=basılı+18 doğrulandı)**: sıralı liste
  (dönem numarası etiketleri `-layout`'ta kaymış ama tarihlerin kendi sırası bozulmamış):
  Mart 1920 (İlk Meclis) · Haziran–Temmuz 1923 · 2 Eylül 1927 · 25 Nisan 1931 · 8 Şubat 1935 ·
  26 Mart 1939 · 28 Şubat 1943 · 21 Temmuz 1946 · …
- **İkinci kaynak (tarihler):** Kenan OLGUN, "Türkiye'de Cumhuriyetin İlanından 1950'ye Genel
  Seçim Uygulamaları", *Atatürk Araştırma Merkezi Dergisi* (`atamdergi.gov.tr/tam-metin/99/tur`,
  ayrıca `dergipark.org.tr/tr/download/article-file/676405`) — 1927: "30 Temmuz-5 Ağustos
  arasında ikinci seçmen seçimleri, milletvekilliği seçimi 2-6 Eylül" (TÜİK'in "2 Eylül"ü bu
  aralığın ilk günü); 1931: "7-10 Nisan ikinci seçmen, milletvekili seçimi 25 Nisan" (TÜİK'le
  birebir); 1935: "8 Şubat 1935"; 1939: "26 Mart 1939"; 1943: "28 Şubat 1943" (hepsi TÜİK'le
  birebir eşleşiyor).
- **1923 istisnası:** her iki kaynak da (TÜİK Ek-1 ve Olgun/ATAM Dergisi) yalnızca
  "Haziran–Temmuz 1923" aralığını veriyor, tek gün yok — seçim il il farklı tarihlerde,
  iki dereceli olarak yapıldı (Wikipedia "28 Haziran 1923" diyor ama kural gereği Vikipedi
  kaynak sayılmıyor; bu iddiayı doğrulayan Vikipedi-dışı bir kaynak bulunamadı). Kayıtta
  `tarih:"1923-06-01"` kullanıldı (doğrulanan aralığın ilk ayının ilk günü, biçimsel bir
  yer tutucu) ve `not` alanında bu belirsizlik açıkça belirtildi.
- Uyuşmazlık: yok (1923 hariç, yukarıda açıklandı).
- Erişim: 2026-09-11.

### 1923-06-genel
- Bkz. yukarıdaki ortak blok. **Düzeltme turu 1 (2026-09-12):** `tarih` alanı `"1923-06"` olarak
  düzeltildi (önceki tur `"1923-06-01"` yazmıştı — kaynakta olmayan, inşa edilmiş bir gündü;
  kullanıcı kararıyla artık ay hassasiyetli tarih `"YYYY-AA"` biçiminde yazılabiliyor, bkz.
  `ortak.js#tarihYaz`). TÜİK Ek-1 ve Olgun/ATAM Dergisi yalnızca "Haziran–Temmuz 1923"
  aralığını veriyor, tek gün Vikipedi-dışı kaynakla doğrulanamadı.
- **`meclis:287` — ikinci kaynak (Düzeltme turu 1'de bizzat açılıp doğrulandı):**
  **[İkinci kaynak] TESAV (Toplumsal Ekonomik Siyasal Araştırmalar Vakfı), "TBMM ve
  Cumhuriyet Dönemlerinde Milletvekili ve Senatör Sayıları"**
  (`https://www.tesav.org.tr/wp-content/uploads/2020/02/tbmmvecumhuriyetdonemlerindemv.vesenatorsayilari.pdf`,
  indirilip `pdftotext -layout -enc UTF-8` ile okundu) — tablo satırı: "2. (1923 – 1927) 287"
  (TBMM'nin 2. Dönemi, 1923 seçimiyle kurulan meclis, 287 milletvekili). TÜİK Tablo 5'teki
  287 rakamıyla birebir eşleşiyor.
  Aynı tablo, dönem 0'daki diğer beş tek parti seçiminin `meclis` değerlerini de bağımsız
  olarak doğruluyor: "3. (1927–1931) 316", "4. (1931–1935) 317", "5. (1935–1939) 399",
  "6. (1939–1943) 424 + 5(*)" (toplam 429; sayfada (*) dipnotu açıklaması yok ama toplam
  TÜİK'in 429'uyla eşleşiyor), "7. (1943–1946) 455" — hepsi TÜİK Tablo 5 ve Lüleci (2023) ile
  üçüncü kez çapraz doğrulanmış oldu.
- Erişim (düzeltme turu 1): 2026-09-12.

### 1927-09-genel
- Bkz. yukarıdaki ortak blok. `tarih:"1927-09-02"` (TÜİK Ek-1; Olgun/ATAM: "milletvekilliği
  seçimi 2-6 Eylül" — TÜİK'in verdiği ilk gün). `meclis:316`.

### 1931-04-genel
- Bkz. yukarıdaki ortak blok. `tarih:"1931-04-25"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor:
  "milletvekili seçimi 25 Nisan"). `meclis:317`.

### 1935-02-genel
- Bkz. yukarıdaki ortak blok. `tarih:"1935-02-08"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor).
  `meclis:399`.

### 1939-03-genel
- Bkz. yukarıdaki ortak blok. `tarih:"1939-03-26"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor).
  `meclis:429`.

### 1943-02-genel
- Bkz. yukarıdaki ortak blok. `tarih:"1943-02-28"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor).
  `meclis:455`. Lüleci (2023): "Bu seçim, Türkiye'nin tek partili son seçimidir."

### Ortak blok — 1923-1943 TBMM cumhurbaşkanlığı seçimleri (cb-tbmm)
Aşağıdaki 7 kayıt (`1923-10-cb-tbmm`, `1927-11-cb-tbmm`, `1931-05-cb-tbmm`, `1935-03-cb-tbmm`,
`1938-11-cb-tbmm`, `1939-04-cb-tbmm`, `1943-03-cb-tbmm`) aynı kaynak kümesini paylaşıyor;
ayrıntı bu blokta, her kayıt için ayrı kısa başlık aşağıda.
- Sonuç: dönem 0'da 7 kayıt — 29.10.1923 (Mustafa Kemal Paşa, kurucu), 01.11.1927 (Atatürk,
  2. kez), 04.05.1931 (Atatürk, 3. kez), 01.03.1935 (Atatürk, 4. ve son kez), 11.11.1938
  (İsmet İnönü, Atatürk'ün ölümü üzerine, olağanüstü), 03.04.1939 (İnönü, 2. kez), 08.03.1943
  (İnönü, 3. kez). Hepsi 1. turda, tek adayla, oybirliğiyle sonuçlandı.
- **[B] TBMM Zabıt Ceridesi**, Taner LÜLECİ'nin "İsmet İnönü'nün Cumhurbaşkanlığı Seçimleri"
  (*Gazi Akademik Bakış*, Sayı 32/Cilt 16, Yaz 2023, s. 173–185,
  `dergipark.org.tr/tr/download/article-file/3212364`) makalesinde doğrudan alıntılanan ZC
  sayfa referanslarıyla:
  - 29 Ekim 1923: TBMM ZC Devre II, Cilt 3, 29 Teşrinievvel 1339 Pazartesi — "333 milletvekilinden
    158'i geldi... oy kullanan 158 milletvekilinin tamamının oyunu alarak Cumhurbaşkanı seçilmiştir".
  - 1 Kasım 1927: TBMM ZC Cilt 1, İnikat 1, 1 Teşrinisani 1927 Salı — "316 milletvekilinden
    seçime katılan 288'inin tamamının oyunu alarak 1. turda ikinci defa".
  - 4 Mayıs 1931: TBMM ZC Devre IV, Fevkalade İçtima, Cilt 1, İnikat 1, s.6 — "317
    milletvekilinden seçime katılan 289'unun tamamının oyunu alarak 1. turda üçüncü defa".
  - 1 Mart 1935: TBMM ZC Devre I, Cilt 1, Fevkalade İçtima, s.3-4 — "399 milletvekilinden
    seçime katılan 386'sının tamamının oyunu alarak 1. turda dördüncü ve son defa".
  - 11 Kasım 1938 (Cuma, saat 11.12–11.45): TBMM ZC Devre V, Cilt 27, İçtima 4, s.16-18 —
    Atatürk'ün 10.11.1938 vefatı üzerine olağanüstü toplanan Meclis'te "348 arkadaş
    iştirak etmiştir. 348 reyle ve müttefikan Malatya mebusu İsmet İnönü Reis-i cumhur
    intihâb edilmiştir" (1. tur).
  - 3 Nisan 1939 (Pazartesi): TBMM ZC Devre VI, İçtima F., Cilt 1, İnikat 1 (3.4.1939),
    s.2-4 — "429 milletvekilinden reye iştirak eden 413'dür, 413 reyle ve müttefikan Ankara
    mebusu İsmet İnönü (1. turda) Reis-i cumhur seçilmiştir".
  - 8 Mart 1943 (Pazartesi): TBMM ZC Devre VII, İçtima F., Cilt 1, İnikat 1 (8.3.1943),
    s.1-4 — "455 vekilden seçime iştirak eden 435 milletvekilinin tamamının oyunu alarak
    müttefikan Reis-i cumhur seçilmiş" (3. kez, 1. tur).
- **İkinci kaynak:** Anadolu Ajansı, "1923'ten günümüze Cumhurbaşkanı seçimleri"
  (`aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629`) — tarih, kişi,
  oy sayısı ve tur bilgisi bütün 7 kayıt için TBMM ZC alıntılarıyla birebir eşleşiyor (158,
  288, 289, 386, 348, 413, 435 oyları; hepsi 1. tur).
- **Ek çapraz doğrulama:** T.C. Cumhurbaşkanlığı resmî sitesi (tccb.gov.tr, sertifika hatası
  nedeniyle `curl -k` ile erişildi) Atatürk biyografisinde "29 Ekim 1923 günü ... Mustafa
  Kemal de oybirliğiyle ilk Cumhurbaşkanı seçildi" ve "1938'deki ölümüne dek arka arkaya
  dört kez cumhurbaşkanı seçilen Atatürk" ifadeleriyle 1923 tarihini ve toplam 4 seçim
  sayısını (1923/1927/1931/1935) doğruluyor.
- Uyuşmazlık: yok.
- Erişim: 2026-09-11.

### 1923-10-cb-tbmm
- Bkz. yukarıdaki ortak blok. 29 Ekim 1923, Mustafa Kemal Paşa, kurucu CB, 1. tur, 158/333 oy.

### 1927-11-cb-tbmm
- Bkz. yukarıdaki ortak blok. 1 Kasım 1927, Atatürk 2. kez, 1. tur, 288/316 oy.

### 1931-05-cb-tbmm
- Bkz. yukarıdaki ortak blok. 4 Mayıs 1931, Atatürk 3. kez, 1. tur, 289/317 oy.

### 1935-03-cb-tbmm
- Bkz. yukarıdaki ortak blok. 1 Mart 1935, Atatürk 4. ve son kez, 1. tur, 386/399 oy.

### 1938-11-cb-tbmm
- Bkz. yukarıdaki ortak blok. 11 Kasım 1938, İsmet İnönü (Atatürk'ün 10.11.1938 ölümü üzerine
  olağanüstü toplantı), 1. tur, 348 oy (oybirliği).

### 1939-04-cb-tbmm
- Bkz. yukarıdaki ortak blok. 3 Nisan 1939, İnönü 2. kez, 1. tur, 413/429 oy.

### 1943-03-cb-tbmm
- Bkz. yukarıdaki ortak blok. 8 Mart 1943, İnönü 3. kez, 1. tur, 435/455 oy.

### Ara seçimler (1923–1945) — envanter sonucu: kayıt bulunamadı
- TBMM'nin resmi *Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler (1923-1980)* yayını
  (`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/ed1d2982-f225-4467-a4ab-707f4cc471dc.pdf`, tam metin
  `pdftotext -layout` ile çıkarıldı, 58856 satır) yalnızca toplu bir rakam veriyor: "TBMM 2.
  Dönem (1923-1927) boyunca 20 vekil istifa etti, 2 vekilin vekilliği düşürüldü, 25 vekil
  öldü (6'sı idam); boşalan 47 koltuk için ara seçimler yapıldı" — tarihsiz, toplu bir sayı.
- WebSearch ile tek tek yıl aranan sorgular ("1931 ara seçimi", "1933 ara seçimi", "1937 ara
  seçimi", "1941 ara seçimi" TBMM milletvekili) tarihli, ikinci kaynakla doğrulanabilir tek
  bir ara seçim kaydına ulaşmadı.
- Sonuç: dönem 0 için kaynaktan doğrulanabilir, tarihli bir ara seçim kaydı **bulunamadı**.
  Tek parti dönemi iki dereceli seçim sisteminde boşalan koltuklar dönem içi tamamlama
  seçimleriyle dolduruluyordu ama bunlar münferit, rekabetsiz (tek aday) işlemlerdi ve
  erişilebilir ikincil kaynaklarda tarihleriyle derlenmiş halde bulunamadı. `veri/sandik.js`'e
  dönem 0 için ara seçim kaydı eklenmedi.
- Erişim: 2026-09-11.

### Ortak blok — Hükümetler 1923–1946 (no. 1–14, dönem 0 bandına düşenler)
Aşağıdaki 14 hükümet kaydı (`hukumet-1`..`hukumet-14`) aynı kaynak kümesini paylaşıyor;
ayrıntı bu blokta, her kayıt için ayrı kısa başlık aşağıda.
- **[B] TBMM Başkanlığı Yayınları, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*,
  Cilt 1 (24 Nisan 1920 – 22 Mayıs 1950)**, hazırlayanlar Dr. İrfan Neziroğlu ve Dr. Tuncer
  Yılmaz — `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/c52e0723-d073-4331-8a8a-01866e8f1b30.pdf`
  (indirilip `pdftotext -layout -enc UTF-8` ile tam metne çevrildi, 34572 satır). İçindekiler
  bölümü "CUMHURİYET HÜKÜMETLERİ" başlığı altında resmî sıra numarası, başbakan/hükümet adı
  ve başlangıç–bitiş tarihlerini veriyor:
  1. I. İnönü Hükümeti (30.10.1923-06.03.1924)
  2. II. İnönü Hükümeti (06.03.1924-22.11.1924)
  3. Okyar Hükümeti [Ali Fethi Okyar] (22.11.1924-03.03.1925)
  4. III. İnönü Hükümeti (03.03.1925-01.11.1927)
  5. IV. İnönü Hükümeti (01.11.1927-27.09.1930)
  6. V. İnönü Hükümeti (27.09.1930-04.05.1931)
  7. VI. İnönü Hükümeti (04.05.1931-01.03.1935)
  8. VII. İnönü Hükümeti (01.03.1935-01.11.1937)
  9. I. Bayar Hükümeti [Celâl Bayar] (01.11.1937-11.11.1938)
  10. II. Bayar Hükümeti (11.11.1938-25.01.1939)
  11. I. Saydam Hükümeti [Refik Saydam] (25.01.1939-03.04.1939)
  12. II. Saydam Hükümeti (03.04.1939-09.07.1942)
  13. I. Saraçoğlu Hükümeti [Şükrü Saraçoğlu] (09.07.1942-09.03.1943)
  14. II. Saraçoğlu Hükümeti (09.03.1943-07.08.1946) — `baslangic` dönem 0 bandına düşüyor
      (1923–1945), `bitis` dönem 1'e taşıyor; kayıt dönem 0'da tutuldu (spesifikasyon §6.3:
      bant yerleşimi `baslangic`'e göre).
  Bütün tarihler 1923-1943 genel seçim ve CB seçimi tarihleriyle iç tutarlı: hükümet
  başlangıçları CB seçim tarihleriyle (1.11.1927, 4.5.1931, 1.3.1935, 3.4.1939, 8.3.1943 —
  bir gün farkla 9.3.1943) örtüşüyor.
- **İkinci kaynak (hükümet tipi çapraz doğrulama):** Özhan DEMİRKOL, "1923'ten 2018'e
  Türkiye'de Hükümet ve Bakanlıklar", *Fiscaoeconomia*, 7(1), 2023, s. 365-390
  (`dergipark.org.tr/tr/download/article-file/2660114`) — Tablo 2: "Tek Parti: 18 Hükümet"
  (1923-1950 arası tek parti dönemi hükümetlerinin toplam sayısı) — dönem 0'daki 14 kayıt bu
  18'in içinde, `tip:"tek-parti"` sınıflamasını doğruluyor.
- **`bitisNedeni` — yalnızca doğrulanabilenler dolduruldu, gerisi `null`:**
  - **no. 9 → "istifa"**: Demirkol (2023), s. 540 civarı — "1938'de Cumhuriyet Halk Partisi
    (CHP) lideri ve Cumhurbaşkanı Mustafa Kemal Atatürk'ün ölümü sonrasında Celal Bayar
    Başbakanlığındaki 9. Hükümet istifasını sunmuştur."
  - **no. 10 → "istifa"**: Taner LÜLECİ (2023, yukarıda CB seçimleri kaydında tam künye) —
    "Parti divanı 24 Ocak 1939 tarihli toplantısında seçimleri yenileme kararı aldı. 25
    Ocak'ta Celal Bayar hükümeti istifa etti. Yerine Dr. Refik Saydam hükümeti kuruldu."
  - **no. 12 → "olum"**: Başbakan Dr. Refik Saydam 8 Temmuz 1942'de (hükümetin resmî bitiş
    tarihi 9.7.1942 ile bir gün farkla tutarlı) kalp krizinden İstanbul'da vefat etti.
    [B] `ataturkansiklopedisi.gov.tr/detay/738/İbrahim-Refik-Saydam-(1881-1942)` (Atatürk
    Kültür, Dil ve Tarih Yüksek Kurumu — resmî/akademik ansiklopedi) + ikinci kaynak
    Darüşşafaka Cemiyeti, "Dr. Refik Saydam'ın Darüşşafaka Sevgisi ve 8 Temmuz 1942'deki
    Vefatı" (`darussafaka.org/hakkimizda/cemiyet/tarihimizde-bu-ay/temmuz/...`) — ikisi de
    8 Temmuz 1942, kalp krizi/ani rahatsızlık üzerinde birleşiyor.
  - **no. 1-8, 11, 13, 14 → `null`**: bu araştırma turunda ikinci kaynakla doğrulanabilir,
    spesifik bir bitiş nedeni bulunamadı (genel tarihsel bilgi olarak dönem içi Parti Divanı
    kararları/CB döneminin başlangıcı gibi nedenler akla yatkın ama tek bir açık ifadeyle
    doğrulanamadı; hafızadan doldurulmadı).
- **`baslangic` ölçütü kararı (bu görevde seçildi, sonraki dönemlerde de kullanılacak):**
  TBMM cildindeki "hükümetin resmen kurulduğu/göreve başladığı tarih" kullanılıyor
  (Resmî Gazete yayım tarihi değil) — 1920'ler-1940'lar için Resmî Gazete'nin bu ayrıntı
  düzeyinde bu ortamdan taranabilir/erişilebilir olmaması ve TBMM cildinin tek, sayfa
  numarasıyla izlenebilir, tutarlı bir kaynak sunması nedeniyle.
- Uyuşmazlık: yok.
- Erişim: 2026-09-11.

### 1930-10-yerel

> **Görev 12 (2026-09-27) — İstanbul sayılarına iki bağımsız kaynak daha:** Mehmet Ali DURAN, "1930
> İstanbul Belediye Seçimlerinde Serbest Cumhuriyet Fırkası'nın Yahudi Adayları ve Yahudi Seçmenler",
> *Atatürk Yolu* 71 (2022), s. 124-145 (`dergipark.org.tr/en/download/article-file/2470500`):
> "seçmenlerden 35.934'ü CHF'ye oy verdiğini, 12.813 kişinin ise SCF'ye" (dn. 80: *Vakit*, 20.10.1930);
> "1930 İstanbul Belediye Seçimlerinde Gayrimüslimler", *YYÜ Sosyal Bilimler Enstitüsü Dergisi* 42
> (2018), s. 321-344 (`dergipark.org.tr/en/download/article-file/657412`): "35.934 CHF'ye, 12.813'ü de
> SCF'ye oy verdi (Vakit, …)". `not`'taki İstanbul rakamları artık üç kaynaklı; ülke geneli sayılar
> hâlâ yok.
- Tek parti dönemi ilk ülke geneli belediye meclisi seçimi.
- Sonuç: 5 Ekim 1930 Pazar günü başladı (bazı bölgelerde 18 Ekim'e kadar sürdü); 1930 tarihli,
  3 Nisan 1930 kabul edilen 1580 sayılı Belediye Kanunu'nun getirdiği, Cumhuriyet tarihinin ilk
  tek dereceli (doğrudan) belediye meclisi seçimi — kadınlar da ilk kez oy kullandı. Ülke
  genelinde yapıldı; Serbest Cumhuriyet Fırkası'nın (kuruluşu Ağustos 1930) tek katıldığı genel
  nitelikli seçim olması nedeniyle CHF-SCF arasında gerçek bir yarışma oldu.
- **[B] Ahmet GÜLEN, "1930 İstanbul Belediye Seçimleri", *Atatürk Araştırma Merkezi Dergisi*,
  Mayıs 2023, Cilt XXXIX, Sayı 107 (`atamdergi.gov.tr/tam-metin/1095/tur`)** — "İstanbul
  belediye seçimleri 5 Ekim 1930 Pazar günü başlamıştır... kullanılan oy sayısı 49.204'tür...
  CHF'nin aldığı 35.934 oyuna karşılık SCF 12.813 oy almıştır" (İstanbul'a özgü rakamlar;
  makale seçimin ülke genelinde yapıldığını, ama ayrıntılı sonuçları yalnızca İstanbul için
  verdiğini belirtiyor). Aynı makale: "İstanbullu seçmenler birden fazla partinin yer alacağı
  bir sonraki seçimi ancak 1945 yılı sonrasında görebilecektir" — 1934/1938/1942
  seçimlerinin (aşağıya bakın) tek parti (yalnız CHP) ile yapıldığını dolaylı doğruluyor.
- **İkinci kaynak (serinin varlığı):** [Niğde Ömer Halisdemir Üniversitesi Sosyal Bilimler
  Enstitüsü Dergisi, "Burdur Vilayeti'nde 1934 Belediye Seçimleri"]
  (`dergipark.org.tr/tr/pub/nohusosbil/article/1818045`) — "Tek parti döneminin siyasal
  sürecinde gerçekleştirilen 1934 belediye seçimleri, Türkiye Cumhuriyeti tarihinin **ikinci**
  yerel seçimleri" ifadesiyle 1930'un ilk olduğunu doğruluyor; kaynakçasında Üste, R. B.
  (2006), *Tek Partili Dönemde Yerel Seçimler 1930-1934-1938-1942* (yüksek lisans tezi)
  referansı, dört seçimlik serinin (1930/1934/1938/1942) akademik literatürde kabul edilmiş
  bir envanter olduğunu gösteriyor.
- **Ülke geneli oy sayısı:** bulunamadı — resmî bir kaynakta 502 seçim çevresinin tam il/ilçe
  tablosu bu görevde erişilemedi, bu yüzden `araclar/topla.js` ile hesaplama da yapılamadı.
  `sonuc: []`, `kayitli`/`kullanilan`/`gecerli`: `null` (spesifikasyon §5.3, 1963 öncesi
  kuralı). İstanbul'a özgü rakam (CHF 35.934, SCF 12.813) `not` alanında bilgi olarak
  aktarıldı; `buyuksehir` alanı yazılmadı (1930'da İstanbul belediye başkanı atamayla
  geliyordu — doğrudan seçim yok, Görev 1'de doğrulanan 1963 kuralı).
- Uyuşmazlık: yok.
- Erişim: 2026-09-11.

### 1934-10-yerel, 1938-10-yerel, 1942-10-yerel
**Düzeltme turu 1 (2026-09-12) — odaklı arama turu sonucu BULUNDU ve eklendi.** Önceki turda
(2026-09-11) bu üç seçimin varlığı doğrulanmış ama gün/ay düzeyinde kesin tarih Vikipedi dışı
iki kaynakla doğrulanamamıştı; kullanıcı kararıyla artık `tarih` alanı `"YYYY-AA"` (ay
hassasiyetli) yazılabildiğinden bu engel kalktı ve aşağıdaki kaynakla ay düzeyinde tarih
bulundu.

- **[B] Ayşe (Rabia) Bahar ÜSTE, "Yerel Seçimlerin Cinsiyeti: Seçimler ve Kadın Temsili",
  *Dokuz Eylül Üniversitesi İşletme Fakültesi Dergisi***
  (`https://dergipark.org.tr/tr/download/article-file/312360`, `pdftotext -layout -enc UTF-8`
  ile okundu) — dönemin gazetelerine dayanarak (Cumhuriyet, Ulus, Anadolu, Halkın Sesi,
  Hakimiyet-i Milliye, Son Posta, Yeni Sabah, Tan; her alıntının gazete adı ve tarihi
  dipnotlarda) üç seçimin de ülke geneli zaman aralığını veriyor:
  - **1934:** "Tüm yurtta 2 Ekim 1934 günü başlayan seçimler, çeşitli tarihlerde
    sonuçlanmış, İzmir seçimleri 10 Ekim 1934 günü bitmiştir." → `tarih:"1934-10"`.
  - **1938:** "1938 yerel seçimleri tüm yurtta Ekim ayının ilk haftası başlamıştır. Ankara'da
    29 Eylül 1938 günü başlayan seçimler, 8 Ekim 1938 tarihinde tamamlanmıştır... İstanbul'da
    seçimler 1 Ekim tarihinde başlamış ve 10 Ekim 1938 tarihinde tamamlanmıştır." →
    `tarih:"1938-10"` (Ankara'nın 29 Eylül'de başlaması `not` alanında belirtildi).
  - **1942:** "İstanbul'da seçimler 1 Ekim'de başlamış ve 11 Ekim 1942 tarihinde
    sonuçlanmıştır." (Ankara ve İzmir için de Eylül sonu-Ekim ortası benzer takvim) →
    `tarih:"1942-10"`.
- **İkinci kaynak/çapraz doğrulama (1934 için):** "1934 Yılı Amasya Vilayeti Belediye Meclisi
  Seçimleri" (dergipark, `egitimvetoplum`, `article/1814471`) — "18 Ekim 1934 tarihli
  belediye meclisi toplantısında Amasya Belediye Başkanlığına seçildi" ifadesi, meclis
  üyelerinin bu tarihte zaten göreve başlamış olduğunu, dolayısıyla seçimin Ekim 1934 içinde
  tamamlandığını doğruluyor.
- **Ülke geneli oy sayısı hiçbirinde bulunamadı** → `sonuc: []`, `kayitli`/`kullanilan`/
  `gecerli`: `null` (1930 kaydıyla aynı kural, spesifikasyon §5.3). `buyuksehir` yazılmadı
  (1963 öncesi kuralı, Görev 1'de doğrulandı).
- Uyuşmazlık: yok (üç seçim de aynı kaynakta tutarlı; İstanbul'un her yıl 1 Ekim'de
  başlaması ve 10-11 Ekim'de bitmesi düzenli bir örüntü oluşturuyor, 1930'un 5-18 Ekim'i ile
  de uyumlu).
- Erişim: 2026-09-12.

### 1938-10-yerel

Kaynaklar yukarıdaki ortak başlıkta: "1934-10-yerel, 1938-10-yerel, 1942-10-yerel".

### 1942-10-yerel

Kaynaklar yukarıdaki ortak başlıkta: "1934-10-yerel, 1938-10-yerel, 1942-10-yerel".

### hukumet-1
Bkz. yukarıdaki ortak blok. I. İnönü Hükümeti, 30.10.1923-06.03.1924, tip: tek-parti.

### hukumet-2
Bkz. yukarıdaki ortak blok. II. İnönü Hükümeti, 06.03.1924-22.11.1924, tip: tek-parti.

### hukumet-3
Bkz. yukarıdaki ortak blok. Okyar Hükümeti (Ali Fethi Okyar), 22.11.1924-03.03.1925,
tip: tek-parti.

### hukumet-4
Bkz. yukarıdaki ortak blok. III. İnönü Hükümeti, 03.03.1925-01.11.1927, tip: tek-parti.

### hukumet-5
Bkz. yukarıdaki ortak blok. IV. İnönü Hükümeti, 01.11.1927-27.09.1930, tip: tek-parti.

### hukumet-6
Bkz. yukarıdaki ortak blok. V. İnönü Hükümeti, 27.09.1930-04.05.1931, tip: tek-parti.

### hukumet-7
Bkz. yukarıdaki ortak blok. VI. İnönü Hükümeti, 04.05.1931-01.03.1935, tip: tek-parti.

### hukumet-8
Bkz. yukarıdaki ortak blok. VII. İnönü Hükümeti, 01.03.1935-01.11.1937, tip: tek-parti.

### hukumet-9
Bkz. yukarıdaki ortak blok. I. Bayar Hükümeti (Celâl Bayar), 01.11.1937-11.11.1938,
tip: tek-parti, bitisNedeni: istifa (Demirkol 2023).

### hukumet-10
Bkz. yukarıdaki ortak blok. II. Bayar Hükümeti, 11.11.1938-25.01.1939, tip: tek-parti,
bitisNedeni: istifa (Lüleci 2023: "25 Ocak'ta Celal Bayar hükümeti istifa etti").

### hukumet-11
Bkz. yukarıdaki ortak blok. I. Saydam Hükümeti (Refik Saydam), 25.01.1939-03.04.1939,
tip: tek-parti.

### hukumet-12
Bkz. yukarıdaki ortak blok. II. Saydam Hükümeti, 03.04.1939-09.07.1942, tip: tek-parti,
bitisNedeni: olum (Refik Saydam 8 Temmuz 1942'de görev başında vefat etti —
ataturkansiklopedisi.gov.tr + darussafaka.org).

### hukumet-13
Bkz. yukarıdaki ortak blok. I. Saraçoğlu Hükümeti (Şükrü Saraçoğlu), 09.07.1942-09.03.1943,
tip: tek-parti.

### hukumet-14
Bkz. yukarıdaki ortak blok. II. Saraçoğlu Hükümeti, 09.03.1943-07.08.1946, tip: tek-parti.
`baslangic` dönem 0 bandına (1923-1945) düşüyor, `bitis` dönem 1'e taşıyor.

### Adım 3.3 — Güncellik: 2026-09-11 sonrası seçim/referandum ilanı var mı?
- WebSearch `YSK 2026 seçim takvimi halkoylaması referandum`.
- Sonuç: Yeni bir referandum ya da erken genel/CB seçimi ilanına rastlanmadı. Bulunan tek yakın
  tarihli olay, spesifikasyon §8.5'te zaten kapsam dışı olarak işaretlenmiş 7 Haziran 2026 yerel
  ara seçimiydi (bu görev bunu yeniden doğruladı, yeni bir bulgu değil). Olağan genel/CB seçim
  takvimi (2028) ve referandum yasal usulü (kabul kanununun RG yayımından 60 gün sonraki ilk
  Pazar) hakkında genel bilgi dışında 2026-09-11 sonrasına dair somut bir ilan bulunamadı.
- Erişim: 2026-09-11.

## Görev 9 — Dönem 1 (1946–1960) ve 27 Mayıs 1960 kabı

**Düzeltme turu 1 (2026-09-12) — yeni eşleşme kuralı (kullanıcı kararı):** İki kaynak aynı sayıyı
birebir vermiyorsa: birincil resmî kaynağın sayısı yazılır; ikinci kaynakla fark **%0,5'e kadarsa**
"eşleşti" sayılır ve fark deftere "Uyuşmazlık: X vs Y (%Z)" diye yazılır. Fark **%0,5'ten büyükse
sayı `null` olur**. Bu kural aşağıdaki bütün kayıtlara yeniden uygulandı; ayrıntı her kaydın kendi
başlığında ve bu turun sonundaki "Düzeltme turu 1" özetinde.

**Not (ilk turdan, düzeltme turu 1'de genişletildi):** TÜİK *Milletvekili Genel Seçimleri
1923–2011* Tablo 23 (s. 25, PDF s. 43), "TÜRKİYE" ulusal toplam sayfası, 1950/1954/1957 için
partilerin oy sayısını "Not.1"e göre **ortalama oy sayısı** (seçime katılan adayların toplam
oyunun aday sayısına bölünmesiyle) veriyor, gerçek toplam oy değil — bu, TÜİK'in kendi dipnotunda
**üç yıl için birden** (yalnızca 1950 için değil) açıkça belirtiliyor. İlk turda 1954 ve 1957 için
akademik atıfların (Yılmaz 2010, Özdurğun 2021) TÜİK'le birebir eşleştiği düşünülerek TÜİK
kullanılmıştı; **düzeltme turu 1'de bu atıfların aslında TÜİK'i doğrudan kaynak göstererek
aktardığı** (Özdurğun 2021: "Kaynak: TÜİK"; Yılmaz 2010: Tuncer/TESAV'a atfen ama sayı TÜİK'le
birebir) fark edildi — yani bunlar TÜİK'ten **bağımsız bir ikinci ölçüm değil**, TÜİK'in kendi
tekrarı. Buna karşılık TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler`), 1950/1954/1957'nin
üçünde de TÜİK'ten sistematik olarak **%1-10 arası düşük** rakamlar veriyor — bu, TÜİK'in
"ortalama oy" yönteminin üç yılda da (yalnızca 1950'de değil) geçerli olmasıyla tutarlı. Yeni
%0,5 eşiği bu iki kaynak grubuna uygulanınca: **1950 DP/CHP** için TBMM ile bağımsız bir üçüncü
kaynak (Olgun/ATAM Dergisi, TBMM Zabıt Ceridesi'ne dayanan Güneş 1991) %0,5'in altında eşleşiyor
→ TBMM'nin sayısı kullanıldı. **1954 ve 1957'nin bütün parti oy sayılarında** TÜİK ile TBMM
arasındaki fark %0,5'i (aslında %1-10 aralığında, çok daha büyük) aştığı ve TÜİK'ten bağımsız
üçüncü bir kaynak bulunamadığı için **`oy` alanları `null` yapıldı** — yalnızca `sandalye`
(gerçek/sertifiye edilmiş sonuç, ortalama yönteminden etkilenmeyen bir kategori) ve TÜİK Tablo
2'nin `kayitli`/`kullanilan`/`katılım` sayıları (bunlar parti oyu değil, seçmen sayımı; TÜİK'in
"ortalama" dipnotu bunları kapsamıyor) korundu.

### 1946-05-yerel
- Sonuç: 26 Mayıs 1946, ülke geneli belediye meclisi seçimi; çok partili hayatın ilk yerel seçimi.
- **[B] Yasin KAYIŞ, "1946 Belediye Seçimleri ve Basın", *Çağdaş Türkiye Tarihi Araştırmaları
  Dergisi*, C. 7, S. 16 (Haziran 2008)** (`dergipark.org.tr/tr/download/article-file/233367`,
  `pdftotext -layout` ile okundu) — "5.1. Belediye Seçimlerinin Yapılması (26 Mayıs 1946)" başlığı;
  "DP, belediye seçimlerine katılmayacağını ilan ediyor" (DP örgütlenme yetersizliği ve seçim
  güvenliği eksikliğini gerekçe gösterdi).
- **İkinci kaynak: Bilal NERGİZ, "1945-1960 Arası Yerel Seçimlerde Doğu ve Güneydoğu Anadolu'da
  CHP-DP Mücadelesi"** (`dergipark.org.tr/tr/download/article-file/1099381`) — "1946'daki belediye
  meclisi seçimleri çok partili hayatın ilk seçimleri olmuştu. Fakat bu seçim, DP'nin katılmaması ve
  Milli Kalkınma Partisi'nin seçim günü yarıştan çekilmesi ile tek partili bir seçime dönüşmüştü."
  — Kayış (2008) ile birebir örtüşüyor.
- Ülke geneli oy sayısı: bulunamadı (`sonuc: []`, seçmen sayıları `null`, 1963 öncesi kuralı).
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### 1946-07-genel
- Sonuç: 21 Temmuz 1946 (Pazar), tek dereceli, açık oy-gizli tasnif; 465 sandalye; CHP 397, DP 61,
  Bağımsız 7.
- Tarih: **[B] Osman AKANDERE, "1946 Genel Seçimleri ve Sonuçları Üzerinde İktidar ve Muhalefet
  Partileri Arasında Yapılan Tartışmalar II", *Atatürk Araştırma Merkezi Dergisi*, C. XXVI, S. 76
  (Ocak 2010)** (`atamdergi.gov.tr/tam-metin-pdf/109/tur`, indirilip `pdftotext -layout` ile
  okundu) — "Ülke genelinde 6 siyasi partinin katılımıyla gerçekleşen seçimlerde 465
  milletvekilinin 397'sini CHP, 61'ini DP, 7'sini ise bağımsızlar kazanmıştır" (dipnot 107:
  Tuncer, *1946 Seçimleri*, TESAV, 2008, s. ...). Aynı makale: "1946 seçimlerinin ülke genelindeki
  ve iller düzeyindeki sayısal sonuçları yayınlanmamıştır. O nedenle seçimlere katılım oranı,
  geçerli oy oranı, oyların siyasi partilere ve bağımsızlara dağılımı hakkında kesin yargılara
  ulaşmak mümkün değildir" — bu nedenle `kayitli`/`kullanilan`/`gecerli`/`oy` alanları `null`.
- İkinci kaynak: Anadolu Ajansı, "Çok partili demokrasinin ilk sınavı: 21 Temmuz 1946 seçimleri"
  (`aa.com.tr/tr/politika/cok-partili-demokrasinin-ilk-sinavi-21-temmuz-1946-secimleri/1209212`) —
  aynı 397/61/7 dağılımını doğruluyor.
- Meclis büyüklüğü (465): **[B] TÜİK Tablo 3** (bu görevde doğrulandı) — "Toplam milletvekili
  sayısı" ve "Erkek/Kadın" sütunlarından ayrıştırıldı: 1946 satırında toplam-erkek=kadın
  (465-456=9) ilişkisi, TÜİK'in ayrı yayımladığı "Kadın milletvekili sayısı" (9) ve "Erkek temsil
  oranı" (%98,1=456/465) sütunlarıyla birebir tutarlı (bkz. aşağıdaki "Ortak blok" notu).
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### Ortak blok — TÜİK Tablo 3 (PDF s. 23, basılı s. 5): 1946/1950/1954/1957 meclis büyüklüğü
- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 3** — `pdftotext` (layout'suz, ham
  akış) ile okunduğunda "Toplam milletvekili sayısı" ve "Erkek" sütunları 1935'ten 2011'e kadar 20
  yıl için ardışık çift olarak diziliyor (`399,381 / 429,413 / 455,439 / 465,456 / 487,484 /
  541,537 / 610,602 / ...`); "Kadın" sütunu ayrıca veriliyor (`18,16,16,9,3,4,8,...`) ve her yılda
  toplam−erkek=kadın eşitliği sağlanıyor (1946: 465−456=9 ✓; 1950: 487−484=3 ✓; 1954: 541−537=4 ✓;
  1957: 610−602=8 ✓). "Erkek temsil oranı (%)" sütunu da (98,1/99,4/99,3/98,7) bağımsız olarak
  erkek/toplam oranına eşit çıkıyor — tablo kendi içinde dörtlü çapraz tutarlı, `-layout`
  hizalama sorunu bu tabloda yaşanmıyor (ham akış sırası korunuyor).
  Sonuç: `meclis` — 1946:465, 1950:487, 1954:541, 1957:610.
- Erişim: 2026-09-12.

### 1946-08-cb-tbmm
- Sonuç: 5 Ağustos 1946 (Pazar), İnönü 4. ve son kez seçildi (388 oy), Fevzi Çakmak 59, Yusuf Kemal
  Tengirşenk 2, boş 2 (toplam 451/465 katıldı).
- **[B] TBMM Zabıt Ceridesi, Devre VIII, İçtima: Fevkalade, Cilt 1 (5.8.1946), s. 2-4** — Taner
  LÜLECİ, "İsmet İnönü'nün Cumhurbaşkanlığı Seçimleri" (*Gazi Akademik Bakış*, S. 32/C. 16, Yaz
  2023, `dergipark.org.tr/tr/download/article-file/3212364`, aynı dosya dönem 0'da da kullanıldı)
  içinde doğrudan alıntılanan ZC sayfası: "İsmet İnönü'nün dördüncü ve son Cumhurbaşkanlığı
  seçimi 1946 yılında... VIII. Dönem Milletvekili seçimlerinden sonra TBMM 5 Ağustos 1946
  Pazar... İsmet İnönü, Demokrat Parti adına İstanbul Milletvekili Mustafa Fevzi Çakmak ve Sinop
  Milletvekili Yusuf Kemal Tengirşenk aday gösterilmiştir... 388, Fevzi Çakmak'a 59, Yusuf Kemal
  Tengirşenk'e 2 oy verilmiş ve 2 oy da (boş)".
- İkinci kaynak: Anadolu Ajansı, "1923'ten günümüze Cumhurbaşkanı seçimleri"
  (`aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629`) — tarih ve oy
  sayılarıyla birebir eşleşiyor (451 katılımcı, 388 oy).
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### 1950-05-genel
**Düzeltme turu 2 (2026-09-12) — MP ve Bağımsız `oy` değerleri `null` yapıldı (tek kaynaklı).**
- Sonuç: 14 Mayıs 1950; DP 4.241.393 oy (%52,68) / 408 sandalye, CHP 3.176.561 oy (%39,45) / 69
  sandalye, MP 1 sandalye (oy sayısı `null`), Bağımsız 9 sandalye (oy sayısı `null`) — toplam
  408+69+1+9=487=meclis ✓ (sandalyeler değişmedi).
- **[B, düzeltme turu 1'de kod TEKRAR TBMM'nin sayılarına döndürüldü — ilk turda kaynak
  defterindeki karar doğruydu ama `veri/sandik.js`'e yanlışlıkla TÜİK'in "ortalama oy" satırı
  (DP 4.391.694 / CHP 3.148.626 / MP 368.537) yazılmıştı; bu turda TBMM seçim sorgusu sayfası
  yeniden açılıp kod düzeltildi]:** `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1950`
  — DP 4.241.393 (%52,68), CHP 3.176.561 (%39,45), Bağımsız 383.282 (%4,76), MP 250.414 (%3,11).
- **İkinci kaynak (DP/CHP için): Kenan OLGUN (2010)**, aynı makale (bkz. dönem 0, "1923-1943 genel
  seçimleri" ortak blok künyesi) — "14 Mayıs 1950 Milletvekili seçimlerine... seçimlere toplam
  8.905.576 seçmenden 7.916.091'i katılmış olup katılım oranı %88,88 olmuştur. DP 4.242.831 oyla
  408 milletvekili kazanırken CHP 3.165.096 oyla 69 milletvekili kazanmıştır. Bu seçimlerde MP 1,
  bağımsızlarda 9 milletvekilliği elde etmiştir" (kaynağı: Güneş, 1991, SBF Dergisi, s. 798) —
  TBMM'den bağımsız, TBMM Zabıt Ceridesi tabanlı ayrı bir derleme.
  - Uyuşmazlık: **DP 4.241.393 (TBMM) vs 4.242.831 (Olgun) — %0,034** → eşleşti, TBMM'nin sayısı
    yazıldı.
  - Uyuşmazlık: **CHP 3.176.561 (TBMM) vs 3.165.096 (Olgun) — %0,36** → eşleşti (0,5 eşiğinin
    altında), TBMM'nin sayısı yazıldı.
  - Sandalye sayıları (408/69/1/9) TBMM ile Olgun arasında birebir eşleşiyor (fark yok) ve
    toplamı 487'ye (meclis) tam eşitliyor — bu aritmetik eşitlik, TÜİK Tablo 23'ün aynı satır
    için verdiği "416" sandalye rakamının (69+1+9+416=495>487 olduğu için imkânsız olduğu
    anlaşılan, çok satırlı hücre hizalama hatasından kaynaklandığı değerlendirilen)
    kullanılmadığını doğruluyor.
- **MP ve Bağımsız oy sayıları — `oy: null` (düzeltme turu 2).** TBMM seçim sorgusu MP için
  250.414 (%3,11), Bağımsız için 383.282 (%4,76) veriyor, ama bu turda da ikinci bir kaynak
  bulunamadı:
  - Kenan OLGUN (2010) MP ve Bağımsız için yalnızca sandalye sayısını (1 ve 9) veriyor, oy sayısı
    vermiyor (yukarıda zaten not edilmişti).
  - Bu turda ayrıca denendi: WebSearch ile "1950 seçimi Millet Partisi oy sayısı 250.414" ve
    "1950 milletvekili seçimi bağımsızlar oy sayısı 383.282" sorguları — ilkinde alakasız bir
    rakam (TÜİK Tablo 23'ün 1965 satırındaki 582.704, Bölükbaşı'nın MP'yle özdeşleştiği farklı
    bir yıla ait) çıktı, gerçek bir ikinci kaynak yok; ikincisinde yalnızca Ekşi Sözlük (forum,
    kaynak sayılmaz) ve İngilizce Vikipedi (kaynak sayılmaz, üstelik 44.537 gibi TÜİK'in
    "BÖMZ" satırıyla örtüşen farklı bir rakam veriyor — üç kaynak üç farklı sayı, hiçbiri
    doğrulanmış değil) çıktı.
  - **Sonuç: spesifikasyon §8.1'in "en az bir resmî kaynak + eşleşen ikinci kaynak" kuralına göre
    bu iki sayı tek kaynaklı (yalnızca TBMM) kaldığı için `oy: null` yapıldı.** Sandalye sayıları
    (MP 1, Bağımsız 9) değişmedi — bunlar Olgun (2010) ile bağımsız olarak doğrulanmış durumda.
- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** (PDF s. 23, ham akış) — kayıtlı 8.905.743,
  kullanılan 7.953.085, katılım %89,3 (7.953.085/8.905.743=%89,30 iç tutarlı).
  - Uyuşmazlık: **kayıtlı 8.905.743 (TÜİK) vs 8.905.576 (Olgun) — %0,0019** → eşleşti.
  - Uyuşmazlık: **kullanılan 7.953.085 (TÜİK) vs 7.916.091 (Olgun) — %0,465** → eşleşti (eşiğin
    hemen altında).
  - TÜİK'in bu iki sayısı parti oyu değil seçmen sayımı olduğu için "ortalama oy" yönteminin
    kapsamı dışında; TÜİK burada birincil kaynak olarak kaldı.
- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1, TBMM sayfası yeniden açıldı).

### 1950-05-cb-tbmm
- Sonuç: 22 Mayıs 1950 (Pazartesi), saat 13:00; 487 milletvekilinden 453'ü katıldı; Celâl Bayar
  387 oyla, İsmet İnönü 64 oy, Halil Özyürek 1 oy aldı; Bayar 3. Cumhurbaşkanı seçildi.
- **[B] Selma GÖKTÜRK ÇETİNKAYA, "Demokrat Parti Dönemi'nde Celal Bayar'ın Cumhurbaşkanlığı
  Seçimleri", *Manisa Celal Bayar Üniversitesi Sosyal Bilimler Dergisi*, 2024**
  (`dergipark.org.tr/tr/download/article-file/4056369`, `pdftotext -layout` ile okundu) —
  "Cumhurbaşkanlığı seçimine 453 milletvekili katılmıştır... İstanbul Mebusu Celal Bayar için 387
  mebus rey kullanmıştır. İsmet İnönü için 64 mebus rey kullanmıştır. Halil Özyürek için 1 mebus
  rey kullanmıştır... 387 rey alan İstanbul Mebusu Celal Bayar, cumhurbaşkanı seçilmiştir."
- İkinci kaynak: Zafer gazetesi, 22 Mayıs 1950, s. 1 (makale içinde alıntılanıyor); tarih ayrıca
  1950-05-genel kaydının kaynağı olan TBMM seçim sorgusu sayfasının seçim tarihini teyit ettiği 14
  Mayıs 1950'den 8 gün sonrasına denk düşüyor (iç tutarlılık).
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### 1950-09-yerel
- Sonuç: 3 Eylül 1950, ülke geneli belediye meclisi seçimi (1950'de yapılan 3 ayrı yerel seçimden
  ikincisi — 13 Ağustos 1950 muhtar/ihtiyar heyeti ve 15 Ekim 1950 il genel meclisi seçimleri
  `sandık`'ın `yerel`/`belediye-meclisi` ölçüsü kapsamında değil, bu nedenle kayıt olarak
  eklenmedi). DP oy oranı %57,6, CHP %37,5; DP 600'den fazla belediyeden 560'ından fazlasını kazandı.
- **[B] Başbakanlık Cumhuriyet Arşivi (BCA), Yer Kodu: 031.01, Fon Kodu: 51.309.4** — Bilal
  NERGİZ, "1945-1960 Arası Yerel Seçimlerde Doğu ve Güneydoğu Anadolu'da CHP-DP Mücadelesi"
  (`dergipark.org.tr/tr/download/article-file/1099381`) makalesinde alıntılanıyor: "1950 yılında
  yapılan ikinci yerel seçim, belediye meclisi seçimleriydi... Seçimler 3 Eylül 1950 tarihinde
  yapılmıştı... Seçim sonucunda DP'nin Türkiye genelinde aldığı oy oranı %57,6, CHP'nin %37,5'ti."
- **İkinci kaynak: Cemil EROĞUL**, *Demokrat Parti (Tarihi ve İdeolojisi)* (aynı makalede dipnot
  63-64'te alıntılanıyor) — "DP ülke çapında 600'den fazla belediyeden 560'ını almıştı" (s. 103).
- Ülke geneli oy sayısı (ham): bulunamadı, yalnızca yüzde yayımlı → `oyYuzde` kullanıldı (kural:
  "Yüzde yalnızca kaynak sayı vermiyorsa yazılır").
- Uyuşmazlık: yok (yüzdelerin toplamı **%95,1** — 2026-09-27 düzeltmesi: önceki metinde yanlışlıkla
  %94,1 yazıyordu. Kalan %4,9'un dağılımını kaynaklar vermiyor; bu `not` alanında açıkça yazıldı.
  `dogrula.js` bunu uyarı olarak işaretliyor, hata değil).
- Erişim: 2026-09-12.

### 1951-09-ara
- Sonuç: 16 Eylül 1951, 17 ilde (Aydın, Balıkesir, Bilecik, Bitlis, Bursa, Çanakkale, Denizli,
  Eskişehir, Gümüşhane, İstanbul, İzmir, Kastamonu, Kırşehir, Muğla, Sivas, Sinop, Zonguldak)
  boşalan 20 milletvekilliği için yapıldı (İstanbul 2, Aydın 3, diğerleri 1'er). Bilecik'te DP
  adayı Yümni Üresin, CHP'nin yeni genel sekreteri Kasım Gülek'e karşı kazandı.
- **[B] Selma Göktürk ÇETİNKAYA, Birkan VURAL, "Genelin Yerelden Okunması: 1951 Ara Seçimleri ve
  Bilecik", *Van İnsani ve Sosyal Bilimler Dergisi*, S. 7 (2024), s. 41-65**
  (`dergipark.org.tr/tr/download/article-file/3876384`, `pdftotext -layout` ile okundu) — "16
  Eylül 1951 günü Aydın, Balıkesir, Bilecik, Bitlis, Bursa, Çanakkale, Denizli, Eskişehir,
  Gümüşhane, İstanbul, İzmir, Kastamonu, Kırşehir, Muğla, Sivas, Sinop, Zonguldak illerinde boşta
  bulunan 20 vekillik için gerçekleştirilmiş; bu 17 ilden İstanbul için iki, Aydın içinse üç
  milletvekili seçimine gidilmiştir" (CA, 12.01.1952; Cumhuriyet, 18.07.1951 künyeleriyle) ve
  "Bilecik'te kazanan taraf DP olmuştur" (TBMMTD, 30.06.1954: 319: "bu seçimleri Demokrat Parti
  kazandı").
- İkinci kaynak: aynı makalenin dipnot 4'ü, Cüneyt ARCAYÜREK (1983, s. 243) ve Cumhuriyet gazetesi
  (13.08.1951) — il/sandalye sayısında küçük farklı rivayetler olduğunu ("22 şehir/22 vekillik"
  ya da "19 il/21 vekillik") **ayrıca not ediyor**; makale yazarları 17 il/20 sandalyeyi CA
  (Cumhuriyet Arşivi) belgesine dayanarak esas almış.
- **Düzeltme turu 1 (2026-09-12) — `sandalyeSayisi` `null` yapıldı (F3).** İlk turda "20" yazılmıştı
  ama bu, makalenin CA (Cumhuriyet Arşivi) belgesine dayanarak seçtiği TEK rivayetti; makalenin
  kendi dipnot 4'ü döneminin basınında **üç farklı sayı** verildiğini gösteriyor: 17 il/20
  sandalye (Cumhuriyet, 18.07.1951; CA, 12.01.1952), 19 il/21 sandalye (Cumhuriyet, 13.08.1951),
  22 şehir/22 sandalye (Arcayürek, 1983: 243). Bu üç rakam arasındaki farklar (20→21: %5;
  20→22: %10) yeni %0,5 eşiğini açıkça aşıyor ve makale bunlardan birini "resmî" olarak
  damgalamıyor (yalnızca CA belgesini tercih ediyor). TBMM tutanağı, Resmî Gazete ya da TBMM
  *Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler*'de bu seçime özgü bir sandalye sayısı bu
  turda da bulunamadı (bkz. Görev 9 Dönem 1 ortak arama notu — bu kaynak yalnızca toplu, tarihsiz
  rakamlar veriyor). Bu nedenle `sandalyeSayisi: null` yapıldı; `bolge:"17 il"` bırakıldı (CA
  belgesine dayanan en sık atıf edilen rakam, ama kesin değil — `not` alanında belirsizlik
  açıkça yazıldı) ve kayıt silinmedi.
- İl bazında kazanan partilerin tam listesi (DP/CHP/MP dağılımı, toplam sandalye) bu turda da iki
  kaynakla doğrulanamadı → `sonuc: []` bırakıldı.
- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1).

### 1954-05-genel
**Düzeltme turu 1 (2026-09-12) — DP sandalyesi ve oy sayıları yeniden değerlendirildi.**
- Sonuç: 2 Mayıs 1954; DP **503** sandalye, CHP 31 sandalye, Cumhuriyetçi Millet Partisi (CMP) 5
  sandalye, Bağımsız sandalyesi kesinleştirilemedi. Bütün partilerin `oy` sayısı, TÜİK ile TBMM
  arasındaki %0,5'i aşan farklar nedeniyle `null`.
- **Sandalye — [B] TÜİK Tablo 23, "TÜRKİYE", C sütunü (PDF s. 43)**: DP satırı 1950/1954/1957
  için `416 / 503 / 424` veriyor (1950'nin "416"sı ayrı bir hizalama hatası olarak zaten
  reddedildi, bkz. 1950-05-genel); 1954 için **503**. CHP satırı `69/31/178` (1954→**31**). CMP
  satırı (1954/1957) `5/4` (1954→**5**).
  - **İkinci kaynak: Ensar YILMAZ (2010, künye altta)** — "541 mebusluktan **504**'ünü Demokrat
    parti, 31'ini CHP, 5'ini CMP, 1'ini de bağımsız aday kazanmıştı."
  - Uyuşmazlık: **DP sandalyesi 503 (TÜİK) vs 504 (Yılmaz) — %0,199** → eşiğin altında, "eşleşti"
    sayıldı; birincil kaynağın (TÜİK) sayısı olan **503** yazıldı.
  - CHP (31) ve CMP (5) iki kaynakta da birebir aynı (fark yok).
  - **Bağımsız sandalyesi çözülemedi**: TÜİK'in DP=503 satırıyla toplam 541'i tutturmak için
    bağımsıza 541−503−31−5=**2** sandalye kalıyor; Yılmaz'ın DP=504 satırıyla ise bağımsıza
    yalnızca **1** kalıyor. İki olası bağımsız sayısı (1 ve 2) birbirinden çok farklı bir oranda
    ayrışıyor (fark %100) ve hangisinin doğru olduğunu gösteren üçüncü bir kaynak bu turda
    bulunamadı; talimat gereği (F2) bu satırın `sandalye` değeri **`null`** yapıldı.
- **Oy sayıları — TÜİK vs TBMM karşılaştırması (yeni %0,5 kuralı ilk kez tam uygulandı):**
  TÜİK Tablo 23'ün "A" satırı: DP 5.313.659 (%58,4), CHP 3.193.471 (%35,1), CMP 480.249 (%5,3).
  TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler?p_secim_yili=1954`, bu görevde ilk turda
  zaten açılmıştı): DP 5.151.550 (%57,61), CHP 3.161.696 (%35,36), CMP 434.085 (%4,85).
  - Uyuşmazlık: **DP 5.313.659 (TÜİK) vs 5.151.550 (TBMM) — %3,05** → eşik aşıldı, `oy: null`.
  - Uyuşmazlık: **CHP 3.193.471 (TÜİK) vs 3.161.696 (TBMM) — %1,00** → eşik aşıldı, `oy: null`.
  - Uyuşmazlık: **CMP 480.249 (TÜİK/Yılmaz) vs 434.085 (TBMM) — %9,61** → eşik aşıldı, `oy: null`.
  - Yılmaz'ın (2010) CMP için verdiği 480.249 rakamı TÜİK'inkiyle birebir aynı olduğu için
    **bağımsız bir ikinci ölçüm sayılmadı** (muhtemelen aynı TÜİK/Tuncer tablosunun tekrarı);
    DP için makalede hem %57,6 hem %58,4 geçiyor (kendi içinde tutarsız, çözülemedi).
  - İlk turda bu üç sayı TÜİK'ten yazılmıştı (Yılmaz'ın atfını yanlışlıkla "bağımsız ikinci kaynak"
    sayarak); düzeltme turu 1'de bu hata görülüp `null` yapıldı.
- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 23, "TÜRKİYE" (PDF s. 43, basılı
  s. 25)** — `pdftotext` (ham akış) ile satır satır okundu; DP/CHP/CMP satırları parti adı
  listesiyle (AP, CHP, CGP, CKMP, CMP, DP, ...) blok sırasıyla eşleştirildi. Bu liste **"CMP" ile
  "MİLLET PARTİSİ"ni ayrı, birbirinden bağımsız satırlar olarak veriyor** — bu, 1954/1957'deki CMP
  sonuçlarının `mp48` (Millet Partisi) soyağacı düğümüne değil, ayrı bir `ad:"Cumhuriyetçi Millet
  Partisi"` satırına yazılması gerektiğini doğruluyor (bkz. aşağıdaki "CMP ayrımı" notu).
- **İkinci kaynak (yalnızca sandalye ve tarih için): Ensar YILMAZ, "1954 Seçimlerinin Önemi, Öne
  Çıkan Özellikleri ve Siyasi Sonuçları", *e-Journal of New World Sciences Academy*, 2010, C. 5,
  S. 4** (`dergipark.org.tr/en/download/article-file/186769`, `pdftotext -layout` ile okundu).
- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** — kayıtlı 10.262.063, kullanılan
  9.095.617, katılım %88,6; Yılmaz (2010) makalesinde de birebir aynı rakamlar geçiyor ("toplam
  10.262.063 seçmenden, 9.095.617'si 43.174 sandıkta oy kullandı. Katılım oranı %88,6") — bu ikisi
  parti oyu değil seçmen sayımı olduğundan "ortalama oy" yöntemi kapsamına girmiyor, TÜİK'in
  tekrarı sayılsa da rakamı değiştirecek bir TBMM alternatifi yok, TÜİK esas alındı.
- **CMP ayrımı (F4, kullanıcı kararı, düzeltme turu 1):** 1954 sonucundaki CMP satırı artık
  `parti:"mp48"` değil `ad:"Cumhuriyetçi Millet Partisi"` — TÜİK Tablo 23'ün kendi parti adı
  listesi CMP'yi Millet Partisi'nden ayrı bir satır olarak veriyor (yukarıda). Soyağacına
  eklenmedi; Görev 10 listesine Hürriyet Partisi'nin yanına eklendi.
- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1).

### 1954-05-cb-tbmm
- Sonuç: 14 Mayıs 1954 saat 15:00 toplanan 10. Dönem Meclisi'nde Celâl Bayar 486 oyla (513
  milletvekili katıldı) yeniden (2. kez) Cumhurbaşkanı seçildi.
- **[B] TBMM Zabıt Ceridesi, X. Dönem, Cilt 1, Toplantı: F, Birleşim: 1 (14.5.1954), s. 7-8** —
  Selma Göktürk ÇETİNKAYA (2024, künye yukarıda) makalesinde alıntılanıyor: "Celal Bayar, 486
  oyla... yeniden cumhurbaşkanı seçilmiştir."
- İkinci kaynak: Ensar YILMAZ (2010, künye yukarıda) — "14 Mayıs'ta Cumhurbaşkanı seçiminde 513
  milletvekili reyini kullandı ve 486 reyle Cumhurbaşkanlığına Celal Bayar seçildi" — birebir
  eşleşiyor (bağımsız iki makale aynı TBMM oturumunu doğruluyor).
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### 1957-10-genel
**Düzeltme turu 1 (2026-09-12) — oy sayıları TÜİK-TBMM karşılaştırmasıyla yeniden değerlendirildi.**
- Sonuç: 27 Ekim 1957; DP 424 sandalye, CHP 178 sandalye, Cumhuriyetçi Millet Partisi (CMP) 4
  sandalye, Hürriyet Partisi 4 sandalye (toplam 424+178+4+4=610=meclis ✓, sandalyelerde uyuşmazlık
  yok). Bütün partilerin `oy` sayısı `null` (aşağıda gerekçe).
- **Sandalye — [B] TÜİK Tablo 23, "TÜRKİYE", C sütunü (PDF s. 43)**: DP 424, CHP 178, CMP 4,
  Hürriyet Partisi 4; toplam 610'a (meclis) tam eşit, tek bir ikinci kaynakla da (WebSearch'te
  bulunan çok sayıda bağımsız akademik atıf: dergipark `article-file/1382433`, `article-file/1244894`)
  fark yok. Sandalye sayılarında uyuşmazlık yok.
- **Oy sayıları — TÜİK vs TBMM karşılaştırması:** TÜİK Tablo 23 "A" satırı: DP 4.497.811 (%48,6),
  CHP 3.825.267 (%41,4), CMP 604.087 (%6,5), Hürriyet Partisi 321.471 (%3,5). TBMM seçim sorgusu
  (`secim_sorgu.secimdeki_partiler?p_secim_yili=1957`, ilk turda açılmıştı): DP 4.372.621
  (%47,88), CHP 3.753.136 (%41,09), CMP 652.064 (%7,14), Hürriyet Partisi 350.597 (%3,84).
  - Uyuşmazlık: **DP 4.497.811 (TÜİK) vs 4.372.621 (TBMM) — %2,78** → eşik aşıldı, `oy: null`.
  - Uyuşmazlık: **CHP 3.825.267 (TÜİK) vs 3.753.136 (TBMM) — %1,89** → eşik aşıldı, `oy: null`.
  - Uyuşmazlık: **CMP 604.087 (TÜİK) vs 652.064 (TBMM) — %7,94** → eşik aşıldı, `oy: null`.
  - Uyuşmazlık: **Hürriyet Partisi 321.471 (TÜİK) vs 350.597 (TBMM) — %9,06** → eşik aşıldı,
    `oy: null`.
  - İlk turda bu dört sayı TÜİK'ten yazılmış ve Yunus ÖZDURĞUN'un (2021, künye altta) makalesi
    "bağımsız ikinci kaynak" sayılmıştı; ancak makale sayıların hemen yanına **"Kaynak: TÜİK"**
    yazıyor — yani TÜİK'i doğrudan alıntılıyor, bağımsız bir ikinci ölçüm sunmuyor. Düzeltme turu
    1'de bu hata görülüp gerçek ikinci kaynak (TBMM) ile karşılaştırıldı ve fark %0,5'i aştığı
    için `null` yapıldı.
- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 23, "TÜRKİYE" (PDF s. 43)**.
- **İkinci kaynak (yalnızca kayıtlı/kullanılan/katılım ve sandalye için, oy sayıları için değil):
  Yunus ÖZDURĞUN, "Türk Siyasi Hayatında 1957 Seçimleri: Beyanatlar ve Tartışmalar", *Van Yüzüncü
  Yıl Üniversitesi Sosyal Bilimler Enstitüsü Dergisi*, S. 51 (2021), s. 465-480**
  (`dergipark.org.tr/tr/download/article-file/1679167`, `pdftotext -layout` ile okundu) — "Tablo
  1: 1957 Seçim Sonuçları — Kayıtlı Seçmen Sayısı: 12.078.623. Oy Kullanan Seçmen Sayısı ve Oranı:
  9.250.949 (%76,6)... Kaynak: TÜİK."
- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** — 12.078.623 / 9.250.949 / %76,6; bunlar
  parti oyu değil seçmen sayımı olduğundan "ortalama oy" yöntemi kapsamına girmiyor, alternatif
  bir TBMM rakamı da yok; TÜİK esas alındı (Özdurğun'un tekrarı, ama rakamı değiştirecek bir
  ikinci ölçüm yok).
- **Hürriyet Partisi soyağacında yok** — bu görevde doğrulandı: 1955'te DP'den ayrılan Fevzi Lütfi
  Karaosmanoğlu önderliğindeki milletvekillerince kurulmuş, 1957 seçiminde 4 sandalye kazanmış,
  1958'de CHP'ye katılarak kapanmıştır (bkz. TÜİK Tablo 23 parti listesi + Özdurğun 2021). `ad:`
  ile yazıldı, Görev 10 listesine eklendi.
- **CMP ayrımı (F4, kullanıcı kararı, düzeltme turu 1):** 1957 sonucundaki CMP satırı artık
  `parti:"mp48"` değil `ad:"Cumhuriyetçi Millet Partisi"` — bkz. 1954-05-genel kaydındaki
  gerekçe. Soyağacına eklenmedi; Görev 10 listesine Hürriyet Partisi'nin yanına eklendi.
- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1).

### 1957-11-cb-tbmm
- Sonuç: 1 Kasım 1957, Meclis açıldığı gün; Celâl Bayar 602 milletvekilinden 413'ünün oyunu
  alarak 3. ve son kez Cumhurbaşkanı seçildi; muhalefet milletvekilleri oylama sırasında Meclis'i
  terk etti.
- **[B] Cumhuriyet gazetesi, 2 Kasım 1957, s. 1** — Selma Göktürk ÇETİNKAYA (2024) makalesinde
  alıntılanıyor: "Celal Bayar, 602 milletvekilinden, 413'ünün oyunu alarak yeniden cumhurbaşkanı
  seçilmiştir. Muhalefet milletvekilleri, cumhurbaşkanlığı seçimi yapıldığı esnada Meclisi terk
  etmiştir."
- İkinci kaynak: Akşam gazetesi, 2 Kasım 1957, s. 1 ("Bayar Reisicumhur oldu") — aynı makalede
  alıntılanıyor, aynı olayı ve tarihi doğruluyor.
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### Ortak blok — Hükümetler 1946–1960 (no. 15–23, dönem 1 bandına düşenler)
**Düzeltme turu 1 (2026-09-12) — F: Cilt 2 tekrar indirilip 19-23 numaralı hükümetlerin tarihleri
bağımsız olarak yeniden doğrulandı.** İncelemenin "cilt indirilmemiş olabilir" endişesi üzerine
Cilt 2 bitstream'i (`52561ed5-f329-4bbc-95ce-e65fe3fb450b`) `curl` ile yeniden indirildi (6,06 MB,
gerçek PDF — `%PDF-1.3` başlığı doğrulandı) ve `pdftotext -f 1 -l 8 -layout` ile İçindekiler
bölümü doğrudan okundu (ilk turdaki WebFetch özetine güvenmek yerine ham metin bizzat görüldü).
Sonuç birebir aynı çıktı: 19 (22.05.1950-09.03.1951), 20 (09.03.1951-17.05.1954), 21
(17.05.1954-09.12.1955), 22 (09.12.1955-25.11.1957), 23 (25.11.1957-27.05.1960); 24
(30.05.1960-05.01.1961) ve 25 (05.01.1961-20.11.1961) de aynı şekilde teyit edildi. Tarihler
değiştirilmedi.
- **[B] TBMM Başkanlığı Yayınları, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*, Cilt 1
  (24 Nisan 1920 – 22 Mayıs 1950) ve Cilt 2 (22 Mayıs 1950 – 20 Kasım 1961)** — Cilt 1 dönem 0'da
  da kullanılan dosya (`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/c52e0723-d073-4331-8a8a-01866e8f1b30.pdf`).
  **Cilt 2 bu görevde bulundu**: `acikerisim.tbmm.gov.tr` üzerindeki tek bir "item"
  (`items/2305701f-7bde-4344-bfbe-4166743fe1e2`) aslında **10 cildin tamamını** (c1–c10) ayrı
  bitstream olarak barındırıyor — Görev 1'de yalnızca c9'un bitstream'i bulunmuştu, bu görevde
  bundle listesi (`server/api/core/bundles/88774567-.../bitstreams`) sorgulanarak tüm ciltlerin
  doğrudan indirme adresleri tespit edildi (kaynak haritası aşağıda güncellendi). Cilt 2 bitstream:
  `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/52561ed5-f329-4bbc-95ce-e65fe3fb450b/content`
  (`201400884-c2.pdf`, 5,8 MB). İçindekiler bölümü:
  15. Peker Hükümeti (07.08.1946-10.09.1947)
  16. I. Saka Hükümeti (10.09.1947-10.06.1948)
  17. II. Saka Hükümeti (10.06.1948-16.01.1949)
  18. Günaltay Hükümeti (16.01.1949-22.05.1950)
  19. I. Menderes Hükümeti (22.05.1950-09.03.1951)
  20. II. Menderes Hükümeti (09.03.1951-17.05.1954)
  21. III. Menderes Hükümeti (17.05.1954-09.12.1955)
  22. IV. Menderes Hükümeti (09.12.1955-25.11.1957)
  23. V. Menderes Hükümeti (25.11.1957-27.05.1960)
  Tarihler genel seçim tarihleriyle (14.5.1950, 2.5.1954, 27.10.1957) ve V. Menderes'in bitiş
  tarihi 27 Mayıs 1960 darbesiyle iç tutarlı.
- **İkinci kaynak (hükümet tipi ve sayı çapraz doğrulama): Özhan DEMİRKOL (2023)**, dönem 0'da
  kullanılan aynı makale, Tablo 2: dönem 1'deki 9 hükümetin (15-23) hepsi CHP ya da DP'nin **tek
  başına** kurduğu hükümetler (koalisyon yok) — bu, `tip:"tek-parti"` sınıflamasını doğruluyor
  (15-18 CHP çoğunluk hükümeti, 19-23 DP çoğunluk hükümeti; her iki dönemde de meclis çoğunluğu
  tek partide olduğu için `partiler` tek elemanlı).
- **`bitisNedeni` — yalnızca seçim sonrası kabine yenilenmesi doğrulanabilenler `"secim"`, darbe
  doğrulanan `"darbe"`, gerisi `null`:**
  - **no. 18 → "secim"**: Günaltay hükümeti 22 Mayıs 1950'de, DP'nin 14 Mayıs 1950 seçimini
    kazanmasının hemen ardından sona erdi (bkz. 1950-05-genel kaydı, "İktidar ilk kez seçim
    yoluyla el değiştirdi"); Cilt 2'nin 19. hükümet bölümü doğrudan bu seçimin ardından başlıyor.
  - **no. 20 → "secim"**: 2 Mayıs 1954 seçiminden 15 gün sonra (17 Mayıs 1954) yeni kabine
    kuruldu; Selma Göktürk Çetinkaya (2024) ve Ensar Yılmaz (2010) makaleleri bu geçişi ayrıntılı
    anlatıyor (bkz. 1954-05-cb-tbmm kaydı).
  - **no. 22 → "secim"**: 27 Ekim 1957 seçiminden 1 ay sonra (25 Kasım 1957) yeni kabine kuruldu;
    Cilt 2'nin 23. hükümet bölümü doğrudan bu seçimin ardından başlıyor.
  - **no. 23 → "darbe"**: 27 Mayıs 1960 askerî darbesiyle görevden uzaklaştırıldı — bu tarih
    zaten spesifikasyon §8.5'te ("1960 ve 1980 yonetim aralıkları") Görev 1'de doğrulanmış bir
    iddia; TBMM Cilt 2'nin V. Menderes bölümünün bitiş tarihi (27.05.1960) bu tarihle birebir
    eşleşiyor.
  - **no. 15-17, 19, 21 → `null`**: bu araştırma turunda ikinci kaynakla doğrulanabilir, spesifik
    bir bitiş nedeni (istifa/reshuffle gerekçesi) bulunamadı; hafızadan doldurulmadı.
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### hukumet-15 — hukumet-23
Bkz. yukarıdaki ortak blok.
- 15: Recep Peker, 07.08.1946-10.09.1947, tek-parti (CHP).
- 16: Hasan Saka (I), 10.09.1947-10.06.1948, tek-parti (CHP).
- 17: Hasan Saka (II), 10.06.1948-16.01.1949, tek-parti (CHP).
- 18: Şemsettin Günaltay, 16.01.1949-22.05.1950, tek-parti (CHP), bitisNedeni: secim.
- 19: Adnan Menderes (I), 22.05.1950-09.03.1951, tek-parti (DP).
- 20: Adnan Menderes (II), 09.03.1951-17.05.1954, tek-parti (DP), bitisNedeni: secim.
- 21: Adnan Menderes (III), 17.05.1954-09.12.1955, tek-parti (DP).
- 22: Adnan Menderes (IV), 09.12.1955-25.11.1957, tek-parti (DP), bitisNedeni: secim.
- 23: Adnan Menderes (V), 25.11.1957-27.05.1960, tek-parti (DP), bitisNedeni: darbe.

### Ortak blok — Hükümetler 24–25 (27 Mayıs 1960 kabı, MBK dönemi)
- **[B] TBMM Cilt 2** (yukarıdaki künye), İçindekiler:
  24. I. Gürsel Hükümeti (30.05.1960-05.01.1961)
  25. II. Gürsel Hükümeti (05.01.1961-20.11.1961)
  Her iki hükümetin başbakanı/MBK Başkanı Cemal Gürsel; `partiler: []` (partilerüstü/MBK dönemi,
  bütün siyasi partiler 27 Mayıs sonrası kapatıldı), `tip: "mbk"`.
- Her iki hükümetin `baslangic` tarihi `yonetim` aralığı (1960-05-27 – 1961-10-14) içinde
  olduğundan spesifikasyon §6.3 kuralı gereği 27 Mayıs 1960 kabına yerleştirildi (bant yerleşimi
  `baslangic`'e göre); hükümet 25'in `bitis`i (20.11.1961) kap sınırının dışına taşsa da bu kuralı
  değiştirmiyor.
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### hukumet-24, hukumet-25
Bkz. yukarıdaki ortak blok.

### 1961-07-referandum

> **Görev 12 düzeltmesi (2026-09-27) — ham sayılar eklendi, katılım düzeltildi.**
> - **[B] YSK, "9 Temmuz 1961 Anayasa Değişikliği Halk Oylaması Sonucu"**
>   (`https://www.ysk.gov.tr/doc/dosyalar/docs/1961Referandum/9-Temmuz-1961-Halk-Oylaması.pdf`,
>   YSK Halkoylaması Arşivi, 2 s., `pdftotext -layout`): 67 ilin tablosu, Türkiye toplamı yok →
>   il satırları toplandı ("hesaplandı"): kayıtlı **12.747.901**, katılan **10.321.111**, geçerli
>   **10.282.036**, geçersiz 39.075, evet **6.348.092** (%61,74), hayır **3.933.944** (%38,26),
>   katılım %80,96. Her ilde katılan = geçerli + geçersiz ve geçerli = evet + hayır (67/67).
>   "Hayır" çoğunluklu iller (hesaplandı): Aydın, **Bolu**, Bursa, Çorum, Denizli, İzmir,
>   Kütahya, Manisa, Sakarya, Samsun, Zonguldak — önceki turda eksik kalan 11. il Bolu.
> - **İkinci kaynak (evet/hayır): Fatih TUĞLUOĞLU, "1961 Anayasa Referandumu ve DP Tabanı",
>   *Gazi Akademik Bakış* 12/24 (2019), s. 149-150**
>   (`https://www.gaziakademikbakis.com/dosyalar/210bdc57-6dd2-49b9-ae5d-b441212e4707.pdf`):
>   "YSK 15 Temmuz günü halkoylamasının geçici sonuçlarını açıklamıştı … evet oylarının toplamı
>   6.348.715, hayır oylarının toplamı ise 3.935.253" — fark %0,01 / %0,03, eşleşiyor (resmî
>   kesin sayı yazıldı). "Evet çoğunluğuna sahip il sayısı 56, hayır … 11" — eşleşiyor.
> - **İkinci kaynak (katılım): Yeni Şafak, "İlk halk oylaması: 1961 anayasa referandumu"**
>   (`https://www.yenisafak.com/secim-referandum-1961`): "Sandığa gitmeyenlerin oranı ise yüzde
>   19'du" → katılım ~%81; hesaplanan %80,96 ile eşleşiyor.
> - **Düzeltme:** önceki `not`'taki "katılım yaklaşık %88" (Ağrı makalesinin TÜİK 2008'e atfen
>   verdiği rakam) resmî tabloyla çelişiyor ve kaldırıldı; Tuğluoğlu'nun aktardığı Ulus
>   haberindeki %89,21 de yalnızca 60 ilin ilk telgraf sonuçlarına ait. Kabul oranı artık
>   ham sayılardan hesaplanarak gösteriliyor.
- Sonuç: 9 Temmuz 1961 (Pazar), 1961 Anayasası'nın kabulü; ülke geneli katılım ~%88, kabul (evet)
  oranı %61,7, ret (hayır) oranı %38,3; en az 10 il (Aydın, Bursa, Çorum, Denizli, İzmir, Kütahya,
  Manisa, Sakarya, Samsun, Zonguldak) çoğunlukla "hayır" oyu verdi. Sonuç 20 Temmuz 1961 tarih ve
  10859 sayılı Resmî Gazete'de yayımlandı.
- **[B] Türkiye İstatistik Kurumu, *Halkoylaması Sonuçları 2007, 1988, 1987, 1982, 1961*, Ankara:
  TÜİK Yayınları, 2008, s. 197, 199** — doğrudan erişilemedi; "Türkiye'de Yapılan Halkoylamaları ve
  Bunların Ağrı'daki Yansımaları" (`dergipark.org.tr/tr/download/article-file/2277549`) makalesinde
  "Tablo 1: 9 Temmuz 1961 Anayasa Halkoylamasının Türkiye ve Ağrı'daki Sonuçları (Kaynak: TÜİK,
  2008: 197, 199)" olarak alıntılanıyor — "Türkiye genelinde 1961 Anayasası'na evet oyu
  verenlerin oranı %61,7... Türkiye genelinde katılım %88... ülke genelinde 11 vilayetin tamamı
  Anayasa'ya hayır oyu vermiştir: Aydın (%56 hayır), Bursa (%52,9), Çorum (%52,2), Denizli
  (%51,3), İzmir (%50,2), Kütahya (%58,2), Manisa (%56,1), Sakarya (%52,8), Samsun (%57),
  Zonguldak (%53,1)" (10 il sayılıyor, makale "11 vilayet" diyor ama listede 10 tane var —
  11.'si makalede belirtilmemiş).
- **İkinci kaynak: Şerif DEMİR, "9 Temmuz 1961 Anayasa Referandumu"**
  (`dergipark.org.tr/en/download/article-file/1871984`) — "Türkiye genelinde Evet oyu %61,7, Hayır
  oyu %38,3 olarak gerçekleşti" ve "bütün siyasi partilerin zorunlu olarak 'evet' dediği bir
  ortamda" ifadesiyle CHP ve AP'nin ikisinin de resmî olarak "evet" çağrısı yaptığını (AP üzerinde
  askerî baskı olduğu, bazı üyelerinin isteksiz olduğu notuyla) doğruluyor.
- **Üçüncü kaynak (RG): anayasa.gen.tr** — "9 Temmuz 1961 günü yapılan halkoylaması ile %61,7
  oranında 'evet' oyu ile kabul edilmiş ve 20 Temmuz 1961 tarih ve 10859 sayılı Resmî Gazete'de
  yayınlanmıştır."
- **Kayıtlı seçmen/kullanılan/geçerli/evet/hayır ham sayıları bu turda bulunamadı** — TÜİK'in 2008
  tarihli kitabındaki Tablo 1 görselinin sayısal içeriği, onu alıntılayan makalede tablo görüntü
  olarak kaldığı için metne dönüşmemiş; `kayitli`, `kullanilan`, `gecerli`, `evet`, `hayir`
  alanları `null` bırakıldı, `%61,7`/`%88` bilgisi `not` alanında düz metin olarak aktarıldı
  (referandum türünde bu iki alan için bir yüzde-yedek alanı tanımlı değil, spesifikasyon §5.4).
- `tutumlar`: CHP ve AP için `"evet"` — yukarıdaki Demir (2021) kaynağıyla.
- Uyuşmazlık: yok (11. "hayır" ili adı ikinci bir kaynakla tamamlanamadı, bu nedenle `not`'ta "en
  az 10 il" ifadesi kullanıldı).
- Erişim: 2026-09-12.

### Kaynak haritası güncellemesi — TBMM Hükümetler cildi bitstream'leri (Görev 9, Dönem 1)
- `acikerisim.tbmm.gov.tr` üzerindeki item `items/2305701f-7bde-4344-bfbe-4166743fe1e2` aslında
  *Hükümetler, Programları ve Genel Kurul Görüşmeleri*'nin **10 cildinin tamamını** (Cilt 1-10)
  ayrı bitstream olarak barındırıyor. Bundle listesi:
  `acikerisim.tbmm.gov.tr/server/api/core/bundles/88774567-0d57-4e64-8a8e-bf03cfb196f7/bitstreams`
  — c1: `da6ec562-5a81-451e-a22c-d1b94666dd1d`, c2: `52561ed5-f329-4bbc-95ce-e65fe3fb450b`, c3:
  `cdfb671f-f82b-4373-8db9-fad3ee50ed12`, c4: `2a72b8f8-b477-4c0b-ba7d-7ec0b448147c`, c5:
  `232d9a87-53f4-449c-8e38-82828ab35cf8`, c6: `04e5853c-8b3b-4ccb-add2-43e1b53cd8d8`, c7:
  `7c3fc30f-4941-4abd-989e-c34eda60de81`, c8: `bfe1edae-c4f8-4520-801f-92cefd45e253`, c9 (Görev
  1'de zaten bulunmuştu): `ed9cef72-34f2-44bc-9a66-e77e6c0aab99`, c10:
  `1bb4bf9a-a93e-40ff-852c-8d5d07c890b7`. Her biri
  `.../server/api/core/bitstreams/<uuid>/content` adresinden doğrudan indirilebiliyor. Sonraki
  dönemlerin hükümet verisi toplanırken bu liste doğrudan kullanılabilir — ayrıca arama
  yapılmasına gerek yok.
- Erişim: 2026-09-12.

### Bulunamayan/ertelenen kayıtlar (dönem 1)
- **1947, 1948, 1949 ara seçimleri**: TESAV'ın "Milletvekili Ara Seçim Sonuçları (1947, 1948,
  1949, 1951, ...)" başlıklı yayınının varlığı doğrulandı ama doğrudan PDF adresi
  (`tesav.org.tr/wp-content/uploads/2017/03/17.-Milletvekili-Ara-Seçim-Sonuçları.pdf`) artık 404
  veriyor; alternatif adres bu turda bulunamadı. Vikipedi'nin tek başına doğruladığı sayfalar
  (`1947/1948/1949 Türkiye milletvekili ara seçimleri`) kural gereği kaynak sayılmadı. Bu üç ara
  seçim `veri/sandik.js`'e eklenmedi.
- (**Görev 12'de 2026-09-26 eklendi** — bkz. "### 1955-11-yerel".) **1955 yerel seçimi (il genel meclisi + belediye meclisi)**: CHP ve CMP'nin bu seçime
  katılmadığı, katılım oranının %38,34'te kaldığı Bilal NERGİZ (yukarıdaki makale) ile doğrulandı
  ("BCA, Yer Kodu: 030.01, Fon Kodu: 51.309.8"), ama seçimin **tam tarihi** (gün/ay) bu turda
  yalnızca Vikipedi'de bulundu (25 Eylül / 13 Kasım 1955) — kural gereği Vikipedi tek kaynak
  sayılmadığından tarih doğrulanamadı ve kayıt eklenmedi.
- Sonraki bir turda bu üç kayıt için ek kaynak taraması yapılabilir.
- Erişim: 2026-09-12.

## Görev 9 — Dönem 2 (1961–1971)

**Kaynak notu:** Bu dönemden itibaren TÜİK Tablo 23'ün (PDF s. 43, basılı s. 25) `-table` bayrağı
(`pdftotext -table`, "-layout"ten farklı, tablo hizalamasına özel bir mod) ile okunması dönem 1'de
yaşanan çok satırlı hücre kayması sorununu tamamen çözdü — sütunlar (yıl başına A/B/C: oy sayısı/
oy oranı/milletvekili sayısı) tam hizalı çıktı. Her yıl için parti–sayı eşleşmesi, sandalyelerin
toplamının `meclis`e (450) tam eşit çıkmasıyla ayrıca doğrulandı (1961: 173+158+65+54+0=450;
1965: 240+134+31+19+14+11+1=450; 1969: 256+143+15+13+8+6+6+2+1=450).
İkinci kaynak olarak hem TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler`) hem de TBMM'nin
kendi resmî yayını **T.B.M.M. Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler (1923-1980)**
(`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/ed1d2982-f225-4467-a4ab-707f4cc471dc.pdf`, tam metin
`pdftotext -layout` ile çıkarıldı) kullanıldı — bu kitap 1961/1965/1969 seçimlerini ayrı ayrı
bölümlerde ele alıp aynı parti–oy–sandalye üçlülerini tekrarlıyor (bölüm 4.3.1–4.3.3, s. 61-69),
üstelik resmî sonuç ilanının Resmî Gazete tarih/sayısını da veriyor (1961: 17.11.1961/10960;
1965: 19.10.1965/12130; 1969: 20.10.1969/13331) — bu, TÜİK'in tek kaynak olmadığını doğruluyor.

### 1961-10-genel
- Sonuç: 15 Ekim 1961, meclis 450, kayıtlı 12.925.395, kullanılan 10.522.716 (katılım %81,4).
  CHP 3.724.752 oy/173 sandalye, AP 3.527.435/158, YTP 1.391.934/65, CKMP 1.415.390/54,
  Bağımsız 81.732/0.
- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 23, "TÜRKİYE" (PDF s. 43, `pdftotext
  -table -enc UTF-8`)** — kayıtlı/kullanılan/katılım/geçerli/meclis satırları ve parti satırları
  (AP, CHP, CKMP, YTP, BÖMZ — bu son satır "Bağımsız/diğer" toplamını temsil ediyor, tablo
  başlığı "Siyasi parti ve bağımsızlar").
- **İkinci kaynak (WebFetch ile doğrudan açıldı):**
  `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1961` —
  CHP 3.724.752 (%36,74), AP 3.527.435 (%34,79), CKMP 1.415.390 (%13,96), YTP 1.391.934 (%13,73),
  Bağımsız 81.732 (%0,81) — TÜİK ile **birebir aynı** (fark yok, tek kaynağın iki farklı yayını
  olabileceği ama sayıların bağımsız olarak yeniden derlendiği görülüyor).
- **Üçüncü çapraz doğrulama:** TBMM *Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler* kitabı
  (yukarıda künyesi verildi), s. 61-63 (bölüm 4.3.1, "17 Ekim 1961 Milletvekili Genel Seçimleri" —
  başlıktaki "17" bir yazım hatası, metnin kendisi "15.10.1961 tarihinde" diyor, TÜİK Ek-1'le
  tutarlı) — aynı dört parti + bağımsız rakamlarını birebir veriyor, ayrıca Resmî Gazete
  17.11.1961/10960 sayılı ilanı kaynak gösteriyor.
- **`gecerli` alanı `null` yapıldı:** TÜİK'in bastığı "Geçerli oy sayısı" rakamı (10.138.035),
  yine TÜİK'in aynı tablosundaki beş parti/bağımsız satırının toplamıyla (10.141.243) tam
  örtüşmüyor — fark 3.208 (%0,03), kaynağın kendi iç tutarsızlığı (muhtemelen tabloya
  girmeyen çok küçük bir kalem). `araclar/dogrula.js` bütün satırlar bilinen bir kayıtta oy
  toplamının `gecerli`ye tam eşit olmasını zorunlu kılıyor; iki resmî rakam kendi içinde
  uyuşmadığından `gecerli: null` bırakıldı (§8.1 "hafızadan sayı yazılmaz" ilkesiyle tutarlı —
  hangi rakamın "doğru" olduğuna karar verecek üçüncü bir kaynak bulunamadı).
- `baraj: null` — 1961'de ulusal bir yüzde barajı yoktu, "çevre barajlı d'Hondt" yapısal bir
  bölge barajıydı, tek bir yüzde ile ifade edilebilir bir rakam değil.
- Uyuşmazlık: yok (TÜİK ve TBMM sorgusu birebir eşleşti); `gecerli` uyuşmazlığı yukarıda ayrı
  ele alındı.
- Erişim: 2026-09-12.

### 1965-10-genel
- Sonuç: 10 Ekim 1965, meclis 450, kayıtlı 13.679.753, kullanılan 9.748.678 (katılım %71,3),
  geçerli 9.307.563. AP 4.921.235/240, CHP 2.675.785/134, Millet Partisi 582.704/31,
  YTP 346.514/19, TİP 276.101/14, CKMP 208.696/11, Bağımsız 296.528/1.
- **[B] TÜİK Tablo 23** (yukarıdaki künye) — bütün rakamlar buradan.
- **İkinci kaynak:** `secim_sorgu.secimdeki_partiler?p_secim_yili=1965` — AP 4.921.235 (%52,87),
  CHP 2.675.785 (%28,75), Millet Partisi 582.704 (%6,26), YTP 346.514 (%3,72),
  Bağımsız 296.528 (%3,19), TİP 276.101 (%2,97), CKMP 208.696 (%2,24) — **birebir aynı**,
  fark yok.
- **Üçüncü çapraz doğrulama:** TBMM kitabı, s. 64 (bölüm 4.3.2) — aynı yedi rakamı birebir
  veriyor; ayrıca "geçerli oy sayısı" olarak TÜİK'in 9.307.563 rakamını dolaylı doğruluyor
  (kendi toplamları TÜİK'inkiyle örtüşüyor: 4.921.235+2.675.785+582.704+346.514+276.101+
  208.696+296.528=9.307.563 — **tam eşit**, bu seçimde iç tutarsızlık yok).
- **TİP'in soyağacındaki BILGI metniyle küçük bir fark:** `veri/partiler.js`teki `tip61` notu
  "1965'te 15 milletvekili kazandı" diyor; TÜİK/TBMM'nin resmî Millet Meclisi sandalye sayısı
  ise **14**. TBMM kitabı (s. 65) bu farkı açıklıyor: "Türkiye İşçi Partisi, 1965 tarihinde
  yapılan milletvekili genel seçimlerinde **15 (14 MV +1 Senatör)** milletvekili kazanarak
  parlamentoda bir grup kurmuştur" — yani 15 rakamı Millet Meclisi + Cumhuriyet Senatosu
  toplamı, 14'ü ise yalnızca Millet Meclisi (bu görevin kapsadığı `genel` türü, senato seçimleri
  kapsam dışı). `veri/sandik.js`'e TÜİK/TBMM'nin Millet Meclisi rakamı olan **14** yazıldı;
  `veri/partiler.js`teki metin bu görevin dosya listesinde değil, değiştirilmedi — kullanıcıya
  bilgi olarak sunuluyor (Adım 6).
- **"Millet Partisi" ayrımı (CMP emsaliyle aynı mantık):** Bu satır `parti:"mp48"` değil
  `ad:"Millet Partisi"` ile yazıldı. Osman Bölükbaşı'nın 1948-1958 Millet Partisi'si (mp48)
  1958'de CKMP'ye dönüşerek soyağacındaki kaydına göre sona ermişti; 1965/1969 tablosundaki
  "Millet Partisi" ise Bölükbaşı'nın 1962'de CKMP'den ayrılıp aynı adla yeniden kurduğu **ayrı,
  hukuken farksız bir parti** (TÜİK'in kendi parti listesi CKMP ve "Millet Partisi"ni ayrı
  satırlar olarak veriyor, yukarıdaki tabloya bakınız). Soyağacına eklenmedi; Görev 10 listesine
  yazıldı — bu dönemde **31 sandalyeyle** (1965) önemli bir eksik.
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### 1966-03-cb-tbmm
- Sonuç: 28 Mart 1966, Cevdet Sunay TBMM birleşik toplantısında 1. turda Cumhurbaşkanı seçildi;
  CKMP Genel Başkanı Alparslan Türkeş de aday oldu. Cemal Gürsel'in sağlık sorunları nedeniyle
  görevi bırakmasının ardından yapıldı; hem AP hem CHP resmen destek verdi.
- **Tarih ve tur sayısı için üç kaynak birleşiyor:** AA, "1923'ten günümüze Cumhurbaşkanı
  seçimleri" (`aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629`);
  TDV İslam Ansiklopedisi, "SUNAY, Cevdet" maddesi (`islamansiklopedisi.org.tr/sunay-cevdet`);
  T.C. Cumhurbaşkanlığı resmî sitesi biyografi sayfası (başlıkta anıldı, sertifika hatası
  nedeniyle bu turda doğrudan açılamadı) — üçü de tarih ve "1. turda seçildi" bilgisinde
  birleşiyor.
- **Oy sayısı yazılmadı — kaynaklar arasında büyük fark var, veri modelinde de bu alan yok:**
  AA'nın kendi sayfası "650 üyeli TBMM'de 477 üyenin oyu" derken, TDV İslam Ansiklopedisi "532
  oydan 461'ini alarak" diyor — iki rakam da toplam katılımcı sayısında (650 vs 532) ve Sunay'ın
  aldığı oyda (477 vs 461) birbirinden **%3-4** oranında farklı, %0,5 eşiğini açıkça aşıyor.
  TBMM'nin kendi tutanak arşivinde (28.3.1966 tarihli TBMM Birleşik Toplantısı) bu turda ayrı bir
  seri olarak bulunamadı (Cumhuriyet Senatosu'nun kendi tutanak dizini — cs__05031fih.pdf —
  incelendi, o tarihe ait bir "Cumhurbaşkanlığı seçimi" kaydı yoktu; büyük ihtimalle birleşik
  toplantı ayrı bir "TBMM Birleşik Toplantısı Tutanak Dergisi" serisinde, bu turda adresi
  bulunamadı). **Spesifikasyon §5.6'da `cb-tbmm` alanları yalnızca `secilen`/`turSayisi`/`not`;
  oy sayısı için bir alan zaten yok** — bu yüzden uyuşan bir sayı bulunamadığından `not`'a da
  belirli bir oy rakamı yazılmadı, yalnızca 1. tur ve destek veren partiler belirtildi.
- Uyuşmazlık: oy sayısı (477/650 vs 461/532) — veri modelinde karşılığı olmadığı için kayda
  yansımadı, yalnızca burada not edildi.
- Erişim: 2026-09-12.

### 1969-10-genel
- Sonuç: 12 Ekim 1969, meclis 450, kayıtlı 14.788.552, kullanılan 9.516.035 (katılım %64,3,
  Cumhuriyet tarihinin en düşük katılımlı genel seçimi). AP 4.229.712/256, CHP 2.487.006/143,
  Güven Partisi 597.818/15, Bağımsız 511.023/13, Türkiye Birlik Partisi 254.695/8,
  Millet Partisi 292.961/6, YTP 197.929/6, TİP 243.631/2, MHP 275.091/1.
- **[B] TÜİK Tablo 23** (yukarıdaki künye).
- **İkinci kaynak:** `secim_sorgu.secimdeki_partiler?p_secim_yili=1969` — AP 4.229.945 (%46,55),
  CHP 2.487.163 (%27,37), GP 598.013 (%6,58), Bağımsız 511.097 (%5,62), Millet Partisi 293.849
  (%3,23), MHP 274.225 (%3,02), Türkiye Birlik Partisi 254.708 (%2,80), TİP 243.797 (%2,68),
  YTP 197.912 (%2,18).
  - Uyuşmazlık: AP %0,0055, CHP %0,0063, GP %0,033, Bağımsız %0,014, Millet Partisi %0,30,
    MHP %0,31, Türkiye Birlik Partisi %0,005, TİP %0,068, YTP %0,009 — **hepsi %0,5 eşiğinin
    altında**, eşleşti sayıldı; TÜİK'in (birincil) sayıları yazıldı.
- **Üçüncü çapraz doğrulama:** TBMM kitabı, s. 68-69 (bölüm 4.3.3) — dokuz partinin oy/oran/
  sandalye üçlüsünü birebir TÜİK'le aynı veriyor; ayrıca "Güven Partisi"nin CGP satırında
  gösterildiğini (dipnot 2), Türkiye Birlik Partisi'nin ayrı bir parti olduğunu (17.10.1966
  kuruldu, 27.11.1971'de adı "Türkiye Birlik Partisi" oldu) ve "Millet Partisi"nin CKMP'den 1962
  ayrılan Bölükbaşı kanadı olduğunu doğruluyor.
- **`gecerli` alanı `null` yapıldı** — aynı 1961 gerekçesiyle: TÜİK'in geçerli oy rakamı
  (9.086.296) dokuz satırın toplamıyla (9.089.866) tam örtüşmüyor (fark 3.570, %0,04);
  `dogrula.js`nin katı eşitlik kuralı nedeniyle `null` bırakıldı.
- **Güven Partisi → `parti:"gp"`:** soyağacında zaten var (donem 2, 1967-1973). TBMM kitabının
  dipnot 2'si ("1969 yılında Güven Partisi (GP) tarafından alınan oy miktarı CGP satırında
  gösterilmiştir") bu eşleşmeyi doğruluyor.
- **Türkiye Birlik Partisi ve (yeniden) Millet Partisi soyağacında yok** — Görev 10 listesine
  eklendi (TBP 8 sandalye, MP 6 sandalye — MP zaten 1965 kaydında da listelenmişti).
- Uyuşmazlık: yukarıda satır satır listelendi, hepsi eşik altında.
- Erişim: 2026-09-12.

### Ortak blok — Hükümetler 26–34 (dönem 2 bandına düşenler)
- **[B] TBMM Başkanlığı Yayınları, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*,
  Cilt 3 (20 Kasım 1961 – 27 Ekim 1965), Cilt 4 (27 Ekim 1965 – 26 Mart 1971) ve Cilt 5
  (26 Mart 1971 – 17 Kasım 1974)** — bitstream adresleri kaynak haritasındaki listeden
  (Görev 9 Dönem 1'de bulundu): c3 `cdfb671f-f82b-4373-8db9-fad3ee50ed12`, c4
  `2a72b8f8-b477-4c0b-ba7d-7ec0b448147c`, c5 `232d9a87-53f4-449c-8e38-82828ab35cf8`
  (`.../server/api/core/bitstreams/<uuid>/content`), `pdftotext -layout -enc UTF-8` ile tam
  metne çevrildi. İçindekiler bölümlerinden hükümet no./ad/tarih:
  26 VIII. İnönü Hükümeti (20.11.1961-25.06.1962)
  27 IX. İnönü Hükümeti (25.06.1962-25.12.1963)
  28 X. İnönü Hükümeti (25.12.1963-20.02.1965)
  29 Ürgüplü Hükümeti (20.02.1965-27.10.1965)
  30 I. Demirel Hükümeti (27.10.1965-03.11.1969)
  31 II. Demirel Hükümeti (03.11.1969-06.03.1970)
  32 III. Demirel Hükümeti (06.03.1970-26.03.1971)
  33 I. Erim Hükümeti (26.03.1971-11.12.1971)
  34 II. Erim Hükümeti (11.12.1971-22.05.1972)
  Tarihler zincirleme sürekli (bir hükümetin bitişi bir sonrakinin başlangıcı) ve dönem 1'in son
  kaydı olan hukumet-25'in bitişiyle (1961-11-20) tam örtüşüyor.
- **Koalisyon/parti bileşimi — her hükümetin "Koalisyon Protokolü" ya da "Bakanlar Kurulu"
  bölümünden bizzat okunarak doğrulandı** (parti etiketleri bakan isimlerinin yanında
  parantez içinde veriliyor):
  - **26 (VIII. İnönü):** "Koalisyon Protokolü (CHP-AP)" başlığı ve metni birebir — "C.H.P. ile
    A.P. ... bir karma hükümet kurmaya müştereken karar vermişlerdir." `partiler:["chp23","ap"]`.
  - **27 (IX. İnönü):** "Koalisyon Protokolü (CHP-CKMP-YTP-Bağımsızlar)" — "CHP ve CKMP, YTP
    temsilcileri ile TBMM Bağımsız üyelerinin bir temsilcisinden meydana gelen heyetimiz..."
    `partiler:["chp23","ckmp","ytp"]`; bağımsızlar da katıldı ama soyağacı id'si olmadığından
    diziye yazılmadı, `not`a değil ayrıca not düşülmedi (kısa tutuldu).
  - **28 (X. İnönü):** Bakanlar Kurulu bölümünde koalisyon protokolü yok; hükümet programı
    görüşmelerinde muhalefet defalarca "C.H.P. azınlık Hükümeti" ifadesini kullanıyor (bizzat
    tutanakta 10'dan fazla geçiş, örn. "Halk çoğunluğunun desteğinden mahrum C.H.P. azınlık
    Hükümetinin..."). `tip:"azinlik"`, `partiler:["chp23"]`.
  - **29 (Ürgüplü):** Bakanlar Kurulu listesinde bakanların yanında parti etiketleri (AP, CKMP,
    YTP, MP, Bağımsız) açıkça yazılı; başbakan Suat Hayri Ürgüplü "(C.S. Kayseri Üyesi,
    Bağımsız)" — partisiz bir senatör. `partiler:["ap","ckmp","ytp"]` (MP soyağacında yok,
    bağımsız bakanlar da var — `not`ta belirtildi); `tip:"koalisyon"`.
  - **30-32 (I-III. Demirel):** Bakanlar Kurulu listelerinde parti etiketi hiç yok (tek parti
    olduğunda TBMM cildi etiketi atlıyor, dönem 1'deki Menderes hükümetleriyle aynı biçim) ve
    metinde "Koalisyon Protokolü" başlığı da yok (yalnızca geçmiş koalisyonlara atıf var) —
    AP tek başına iktidar, meclis çoğunluğu 1965 seçiminden geliyor. `tip:"tek-parti"`,
    `partiler:["ap"]`.
  - **33-34 (I-II. Erim):** Bakanlar Kurulu listesinde hiçbir bakanın yanında parti etiketi yok,
    çoğu "TBMM dışından" ya da bağımsız senatör/milletvekili; 12 Mart Muhtırası sonrası
    partilerüstü/teknokrat formülüyle kuruldu (TBMM kitabının kendi başlığı da bu dönemi
    "partiler üstü hükümet modeli" diye tanımlıyor — Karataş, 2022, *ABAD* 5(10), s. 387-422,
    `dergipark.org.tr/en/download/article-file/2522863`). `tip:"partiluestu"`,
    `partiler:[]`.
- **`bitisNedeni`:**
  - **29 → "secim"**: Ürgüplü hükümeti, TBMM kitabının kendi tarihlemesiyle 10 Ekim 1965
    seçiminin hemen ardından (27 Ekim 1965) sona erdi ve yerini seçim sonucuna göre kurulan
    I. Demirel Hükümeti'ne bıraktı.
  - **30 → "secim"**: I. Demirel Hükümeti, 12 Ekim 1969 seçiminin 3 hafta sonrasında
    (3 Kasım 1969) yenilendi.
  - **32 → "muhtira"**: III. Demirel Hükümeti, TBMM kitabının kendi bölüm başlığında da
    ("12 Mart Muhtırası ile 12 Eylül Darbesi Arası Dönem") doğrulandığı gibi 12 Mart 1971
    muhtırasının ardından 26 Mart 1971'de görevi bıraktı; bu tarih aynı zamanda
    `DONEMLER[2].kesinti.tarih` (12 Mart 1971) ile tutarlı.
  - **26, 27, 28, 31, 33, 34 → `null`**: bu turda ikinci kaynakla (TBMM tutanağı ya da akademik
    makale) doğrulanabilir, tek cümleyle ifade edilebilir bir bitiş nedeni bulunamadı. 31
    (II. Demirel) için web taramasında "14 Şubat 1970'te 1970 bütçesinin 41 AP'li milletvekilinin
    ret oyuyla reddedilmesi üzerine istifa etti" bilgisi birden fazla haber kaynağında ve bir
    dergipark makalesinin (Karataş, 2022, yukarıda) arama özetinde geçiyor, ama makalenin
    kendisi (tam metin okundu) bu olayı ayrıntılı anlatmıyor ve TBMM cildinde de bu turda
    doğrudan bir "istifa" ifadesi bulunamadı; tek doğrulanabilir kaynak resmî/birincil olmadığı
    için `bitisNedeni: null` bırakıldı, olay `not` alanına da yazılmadı.
- Uyuşmazlık: yok (hükümet tarihleri tek kaynaktan, TBMM cildinden; parti bileşimi de aynı
  ciltten okundu, ikinci kaynak gerektirmiyor — nitel/yapısal bilgi, "sayı" değil).
- Erişim: 2026-09-12.

### hukumet-26 — hukumet-34
Bkz. yukarıdaki ortak blok.

### 1963-11-yerel
- Sonuç: 17 Kasım 1963, 1961 Anayasası sonrası ilk yerel seçim ve belediye başkanlarının 307
  sayılı Kanun uyarınca ilk kez tek dereceli doğrudan halk oyuyla seçildiği seçim (Görev 1'de
  doğrulanan iddia, bkz. yukarıdaki "Doğrulanan iddialar" listesi, madde 4).
- **İstanbul — [B] Yüksek Seçim Kurulu kararı + Resmî Gazete, 13 Aralık 1963:** en çok oyu alan
  AP adayı Nuri Eroğan (128.785 oy, %40,29), Denizcilik Bankası'ndaki hukuk müşavirliği görevinden
  22 Eylül 1963'e kadar (kanunun öngördüğü süre içinde) istifa etmediği gerekçesiyle önce İl Seçim
  Kurulu (2 Aralık 1963), itirazı üzerine YSK tarafından da diskalifiye edildi; ikinci sıradaki CHP
  adayı Haşim İşcan (111.686 oy, %34,91) belediye başkanı sayıldı ve 10 Aralık 1963'te mazbatasını
  aldı.
  **[B] Meltem ERDEM, "Sandıkta Bitmeyen Seçim: 17 Kasım 1963 İstanbul Belediye Başkanlığı
  Seçimi", *Uluslararası Anadolu Sosyal Bilimler Dergisi*, C. 5, S. 4 (2021), s. 1521-1540**
  (`dergipark.org.tr/tr/download/article-file/2087799`, `pdftotext -layout -enc UTF-8` ile
  okundu) — YSK kararının doğrudan alıntısı: "...22 Eylül 1963 gününe kadar hizmetli bulunduğu
  görevden çekilmemiş bulunmasına binaen SEÇİLME YETERLİLİĞİ mevcut olmadığından adaylığının
  iptaline... kendisinden sonra en yüksek oyu alan Haşim İşcan'ın belediye başkanı sayılmasına
  karar vermiştir" (Erdem, 2009'dan alıntı; makale ayrıca Resmî Gazete 13.12.1963 tarihli kararı
  ve "İşcan 10 Aralık sabahı mazbatasını alarak göreve başlamıştır (Tercüman, 11 Aralık 1963:1-7)"
  bilgisini veriyor) — hem birincil (YSK kararı/Resmî Gazete) hem akademik kaynak olarak kullanıldı.
  Aynı makalenin Tablo 1'i (kaynağı D.İ.E., 1965:34/2,3,4,5,6 — Devlet İstatistik Enstitüsü'nün
  1965 tarihli resmî yayını) İstanbul'a özgü belediye başkanlığı/belediye meclisi/il genel meclisi
  oy dağılımını da veriyor.
- **Ankara — Halil Sezai Erkut (CHP):** Biyografya.com biyografik sözlüğü
  (`biyografya.com/tr/biographies/halil-sezai-erkut-b5422745`) — "1963 yerel seçimlerinde Ankara
  Belediye Başkanı seçildi" (CHP). İkinci kaynak: yeniankara.com.tr, "Ankara'nın başkanları!
  Siyasetçi ve hukukçu Halil Sezai Erkut" — 17 Kasım 1963 seçimini kazanarak Ankara'nın tek
  dereceli seçimle belirlenen ilk belediye başkanı olduğunu doğruluyor (haber veritabanı,
  yalnızca ikinci kaynak olarak kullanıldı).
- **İzmir — Osman Kibar (AP):** Ege Üniversitesi Açık Erişim, "Osman Kibar ve belediye
  başkanlığı dönemi" (`acikerisim.ege.edu.tr/items/567e6194-aa27-4962-a98c-0961660ce664`,
  akademik tez özeti) — Kibar'ın 1963-1973 arası İzmir belediye başkanlığı yaptığını ve Adalet
  Partili olduğunu doğruluyor. İkinci kaynak: WebSearch ile toplanan haber kaynakları (Kibar'ın
  1963 seçiminde CHP'li Rebii Başol'u yendiği bilgisi).
- **Ülke geneli belediye meclisi oy sayısı bulunamadı** → `sonuc: []`, `kayitli`/`kullanilan`/
  `gecerli`: `null`. Bulunabilen tek ülke geneli rakam **il genel meclisi** ölçüsünde (belediye
  meclisi değil, spesifikasyonun ölçüsüyle uyuşmuyor, kayda yazılmadı) ve "kaç il belediyesi
  kazanıldı" biçiminde: **Ayşenur ÖZTÜRK, "Türkiye'de Belediye Başkanlığı Seçimlerinde Yenilenme
  (1963-2014)", *Manisa Celal Bayar Üniversitesi Sosyal Bilimler Dergisi*, C. 15, S. 4 (2017),
  s. 329-352** (`dergipark.org.tr/tr/download/article-file/395864`) Tablo 1-2 — belediye
  başkanlığı seçimlerinde ülke geneli katılım **%69,31** (kaynağı: *Yerel Seçimler Panoraması*,
  Ed. Oya Çitçi) ve 67 il belediyesinden AP 40, CHP 24, YTP 1, Bağımsız 2 kazandığı bilgisi
  `not` alanına bilgi olarak aktarıldı (`Tablo 2`'nin kaynağı: A. E. Turan, *Türkiye'de Yerel
  Seçimler*).
- `buyuksehir` alanı bu seçimden itibaren yazılabiliyor (Görev 1'de doğrulandı, 307 sayılı Kanun).
- Uyuşmazlık: yok.
- Erişim: 2026-09-16.

### 1968-06-yerel
- Sonuç: 2 Haziran 1968. AP İstanbul (Fahri Atabey), Ankara (Ekrem Barlas) ve İzmir'i (Osman
  Kibar, 1963'te seçildiği görevi koruyarak) kazandı.
- **İstanbul — Fahri Atabey (AP):** SETA, "Geçmiş Seçimlerde İstanbul'a Kim Ne Vadetti?"
  (`setav.org/gecmis-secimlerde-istanbula-kim-ne-vadetti/`, düşünce kuruluşu yayını) — Atabey'in
  1968 İstanbul seçiminde AP adayı olduğunu ve seçim vaatlerini (su, kanalizasyon, çöp,
  Alibeyköy'den boru döşenmesi) doğruluyor. İkinci kaynak (haber veritabanı): secim.milliyet.com.tr
  / secim.hurriyet.com.tr üzerinden derlenen "İstanbul Belediye Başkanlığı'na AP'li Fahri Atabey...
  seçildi" bilgisi + haberler.com'un İstanbul belediye başkanları listesi (8 Haziran 1968 –
  9 Aralık 1973 arası görev süresi, %48,8 oy).
- **Ankara — Ekrem Barlas (AP):** sonsoz.com.tr, "Ankara Belediye Başkanları -1963-2024-
  (Bölüm-1)" — Barlas'ın (AP) 1973'te Vedat Dalokay'a (CHP) kaybetmeden önce belediye başkanı
  olduğunu doğruluyor. İkinci kaynak (haber veritabanı): secim.milliyet.com.tr /
  secim.hurriyet.com.tr üzerinden derlenen "Ankara Belediye Başkanlığına Adalet Partili Ekrem
  Barlas... seçildi" bilgisi.
- **İzmir — Osman Kibar (AP):** yukarıdaki 1963-11-yerel kaydındaki Ege Üniversitesi tez özeti
  (1963-1973 aralıksız görev) + secim.milliyet.com.tr/secim.hurriyet.com.tr'nin "İzmir Belediye
  Başkanlığına... Osman Kibar... seçildi" bilgisi.
- **Aynı gün milletvekili ara seçimi de yapıldı** (Adana, Urfa, Çorum, Diyarbakır, İstanbul —
  bkz. aşağıdaki "Ara seçimler" bölümü); bu, kaydın `not` alanında belirtildi.
- **Ülke geneli belediye meclisi oy sayısı bulunamadı** → `sonuc: []`, seçmen sayıları `null`.
  Yukarıdaki ÖZTÜRK (2017) makalesinin Tablo 1-2'si 1968 için de ülke geneli katılım **%59,47**
  (belediye başkanlığı) ve 67 il belediyesinden AP 33, CHP 20, GP (Güven Partisi) 3, Bağımsız 11
  kazandığı bilgisini veriyor; bu görevde `sonuc` alanına değil yalnızca 1968 kaydının araştırma
  notuna (bu başlığa) düşüldü, `veri/sandik.js`'e yazılmadı (spesifikasyon ölçüsü belediye
  meclisi, il belediyesi sayısı değil).
- Uyuşmazlık: yok.
- Erişim: 2026-09-16.

### Ara seçimler (1961–1971) — envanter bulundu, sonuç doğrulanamadı

> **Görev 12'de (2026-09-26) 1966 ve 1968 eklendi** — bkz. "Görev 12 — Ara seçimler".
- WebSearch ile: TESAV'ın "Milletvekili Ara Seçim Sonuçları (1947, 1948, 1949, 1951, 1966, 1968,
  1975, 1979, 1986, 2003)" başlıklı yayınının dönem 2'de **1966 ve 1968** ara seçimlerinin
  yapıldığını gösterdiği görüldü — ama dönem 1'de de karşılaşılan sorun tekrarladı: yayının
  kendi PDF adresi (`tesav.org.tr/wp-content/uploads/2017/03/17.-Milletvekili-Ara-Seçim-
  Sonuçları.pdf`, Türkçe karakterler yüzde kodlamasıyla da denendi) 404 veriyor; TESAV'ın
  "Yayınlarımız" sayfası da bu dosyaya güncel bir bağlantı sunmuyor.
- **1966 ara seçimi:** 5 Haziran 1966, Hatay ilinde, Budak Mursaloğlu'nun 12 Ekim 1965'teki
  ölümüyle boşalan tek milletvekilliği için yapıldı; kazananın adı (Şemsettin Mursaloğlu) birden
  fazla WebSearch sonucunda geçiyor ama **kaynakların hiçbiri Vikipedi-dışı, açıp okunabilir bir
  belge değildi** (arama motoru özetleri); hangi partiden seçildiği hiçbir turda doğrulanamadı.
- **1968 ara seçimi:** 2 Haziran 1968, yerel seçimle aynı gün, 5 ilde (Adana, Urfa, Çorum,
  Diyarbakır, İstanbul) boşalan 5 milletvekilliği için yapıldı (millî bakiye sisteminin
  kaldırılmasının ardından); il/parti/sandalye dağılımı bu turda da doğrulanamadı.
- TBMM'nin resmi *Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler (1923-1980)* kitabının tam
  metninde ("ara seçim" araması) dönem 2'ye özgü bir ayrıntı bulunamadı (kitap ara seçimleri
  ayrıntılı işlemiyor). TBMM'nin Cumhuriyet Senatosu tutanak dizini (cs__05031fih.pdf) ve genel
  arama denemeleri de tarihli, iki kaynakla doğrulanabilir bir il/parti/sandalye dağılımına
  ulaşamadı.
- Sonuç: dönem 2 için kaynaktan **tarihi ve kapsamı** (hangi iller, kaç sandalye) doğrulanabilen
  ama **il/parti/sandalye dağılımı** iki kaynakla doğrulanamayan iki ara seçim envanteri var
  (1966 Hatay, 1968 Adana/Urfa/Çorum/Diyarbakır/İstanbul). Spesifikasyonun ara seçim veri modeli
  (`bolge`, `sandalyeSayisi`, `sonuc`) bu ayrıntı olmadan anlamlı doldurulamayacağından ve tek
  kaynaklı (yalnızca WebSearch özeti, açılıp okunmuş bir belge değil) bilgiyle kayıt eklemek
  §8.1 kuralını ihlal edeceğinden, **`veri/sandik.js`'e dönem 2 için ara seçim kaydı eklenmedi**
  (dönem 1'deki 1947-49 ara seçimleriyle aynı muamele).
- Erişim: 2026-09-16.

### Düzeltme turu 1 (2026-09-16) — inceleme sonrası

**Bağlam:** Görevin ilk turunda iki hata bulundu (bkz. `.superpowers/sdd/2026-09-11-sandik/
review-task-9-d2-verdict.md`): (1) 1961 TBMM CB seçiminin varlığı yanlış reddedilmişti — "Gürsel
geçici maddeyle otomatik cumhurbaşkanı sayıldı" iddiası kaynaksız ve yanlıştı; (2) 1963/1968
yerel kayıtlarının büyükşehir sonuçlarının çoğunda resmî [B] kaynak yoktu (yalnızca haber
veritabanı/akademik tez özeti gibi ikincil kaynaklar). Bu bölüm ikisinin düzeltmesini kaydeder.

#### 1961-10-cb-tbmm (yeni eklendi)
- Sonuç: 26 Ekim 1961, Cemal Gürsel, 1961 Anayasası'nın kabulünün ardından oluşan yeni TBMM'nin
  ortak/birleşik toplantısında **tek aday olarak** (rakip aday Ali Fuat Başgil, Millî Birlik
  Komitesi baskısıyla adaylıktan çekilmişti) 1. turda Türkiye'nin 4. Cumhurbaşkanı seçildi.
- **[B] T.C. Cumhurbaşkanlığı resmî sitesi, "Cemal Gürsel" biyografisi**
  (`tccb.gov.tr/cumhurbaskanlarimiz/cemal_gursel/`, WebFetch ile doğrudan açıldı — önceki turda
  bağlantı zaman aşımına uğramıştı, bu turda başarılı oldu) — "Halkoyuna sunulan ve kabul edilen
  bu Anayasa gereğince ... yapılan seçimlerden sonra oluşturulan Türkiye Büyük Millet Meclisi
  tarafından Türkiye'nin dördüncü cumhurbaşkanı seçildi." Sayfa kesin gün vermiyor.
- **İkinci kaynak: TDV İslam Ansiklopedisi, "GÜRSEL, Cemal" maddesi**
  (`islamansiklopedisi.org.tr/gursel-cemal`) — "anayasaya göre Cumhuriyet Senatosu'nun tabii üyesi
  olan Gürsel tek aday olarak **26 Ekim 1961**'de Türkiye Büyük Millet Meclisi'nin ortak
  toplantısında Türkiye Cumhuriyeti'nin dördüncü cumhurbaşkanı seçildi" — gün, "tek aday" ve
  "ortak toplantı" bilgilerini veriyor; tccb.gov.tr'nin "TBMM tarafından seçildi" ifadesiyle
  tutarlı.
- **Üçüncü çapraz doğrulama:** WebSearch ile toplanan çok sayıda bağımsız kaynak (haber ve
  ansiklopedi siteleri) aynı 26 Ekim 1961 tarihini ve Başgil'in MBK baskısıyla çekildiği bilgisini
  tekrarlıyor; oy sayısı (434/607) yalnızca Vikipedi'de bulundu, kural gereği kullanılmadı ve
  zaten veri modelinde (§5.6) `cb-tbmm` için oy sayısı alanı yok.
- **Önceki turun hatası:** rapor, "Cemal Gürsel'in 1961 Anayasası'nın geçici maddeleriyle otomatik
  cumhurbaşkanı sayıldığı, TBMM'de ayrı bir seçim yapılmadığı" iddiasını kaynak göstermeden ileri
  sürmüş ve bu nedenle kaydı eklememişti — bu turda **yanlış olduğu doğrulandı**, iki bağımsız
  kaynak (biri resmî) gerçek bir seçim/oylama yapıldığını gösteriyor. Kayıt eklendi.
- Uyuşmazlık: yok (tarih iki kaynakta da aynı).
- Erişim: 2026-09-16.

#### 1963-11-yerel ve 1968-06-yerel — büyükşehir sonuçlarının resmî kaynak eksiği
- **Sorun:** İlk turda Ankara/İzmir (1963) ve İstanbul/Ankara/İzmir (1968) için yalnızca ikincil
  kaynaklar (Biyografya.com, yeniankara.com.tr, sonsoz.com.tr, SETA, Ege Üniversitesi Açık Erişim
  tez özeti, haber veritabanları) kullanılmıştı — hiçbirinde resmî bir kaynak (YSK kararı, TÜİK/
  DİE yayını, Resmî Gazete) yoktu. Bu, §8.1'in "her nitel bilgi bir resmî [B] kaynak + ikinci
  kaynak" kuralını ihlal ediyordu (yalnızca 1963 İstanbul, YSK kararı + Resmî Gazete ile doğru
  kaynaklanmıştı).
- **Bu turda aranan resmî kaynaklar ve sonucu:**
  - YSK Mahalli İdareler Arşivi sayfaları (`ysk.gov.tr/tr/17-kasim-1963-...`,
    `ysk.gov.tr/tr/2-haziran-1968-...`) — WebFetch ile açıldı, ikisi de yalnızca genel YSK ana
    sayfa kabuğunu döndürdü (JS kabuğu / zaman zaman ECONNRESET), il/şehir bazlı bir PDF
    bağlantısı içermiyordu.
  - Resmî istatistik kaynağı **Devlet İstatistik Enstitüsü (DİE), *Mahalli Seçimler Sonuçları,
    17 Kasım 1963* (Ankara: DİE, 1965) ve *Mahalli Seçimler Sonuçları, 2 Haziran 1968* (Ankara:
    DİE, 1969)** — bu iki kitabın varlığı ve tam künyesi, Tayfun ÇINAR'ın "Yerel Seçimlerde Kent
    Büyüklüğü ile Oy Vermenin Yönü Arasındaki İlişki: Türkiye Örneği 1963-1999" (*Ankara
    Üniversitesi SBF Dergisi*, C. 62, S. 3, 2007, s. 141-165,
    `dspace.ankara.edu.tr/server/api/core/bitstreams/bb0cfa85-8e57-4845-9944-f43b349df363/content`)
    makalesinin kaynakçasında doğrulandı (DİE'nin bu iki kitabı gerçekten bu isimle, bu yılda
    basılmış) — **ama kitapların kendisi dijitalleşmemiş/çevrimiçi bulunamadı**, yalnızca künyesi
    doğrulanabildi. Makalenin kendi metni de şehir/aday bazlı değil, toplu istatistiksel bir
    analiz (kent büyüklüğü ~ oy yönü), Ankara/İzmir/İstanbul'un kazananlarının adını vermiyor.
  - Resmî Gazete'nin ilgili tarihli sayıları (1963 İstanbul'daki gibi bir mazbata ilanı olabilir)
    bu ortamdan doğrudan taranamadı (bilinen erişim kısıtı); bu üç şehir için ilan tarih/sayısını
    veren ikincil bir kaynak da bulunamadı.
  - Dergipark'ta Ankara/İzmir/İstanbul(1968) belediye başkanlığı seçimlerine özgü, Istanbul 1963
    örneğindeki gibi (Erdem, 2021) YSK kararını ya da Resmî Gazete'yi doğrudan alıntılayan bir
    akademik makale bu turda da bulunamadı.
- **Sonuç (kullanıcı talimatı gereği — "bulamazsan o sayılar null"):**
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

## Görev 9 — Dönem 3 (1972–1980, 12 Eylül kabı dahil)

### 1973-10-genel, 1977-06-genel
- Tarihler: **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Ek-1 "Milletvekili Genel
  Seçimlerinin Yapıldığı Tarihler" (PDF s. 277, basılı s. 259)** — "13.Dönem 14 Ekim 1973",
  "15.Dönem 5 Haziran 1977" (dönem numaralandırmasında 14. satır boş görünüyor — muhtemelen
  tablo hizalama sorunu, dönem 2'de de karşılaşılan bir durum; yalnızca tarihler bu kayıtta
  kullanıldığından sorun teşkil etmedi).
- Meclis büyüklüğü, seçmen/oy sayıları, parti oy/sandalye dağılımı: **[B] TÜİK, aynı kaynak,
  Tablo 1 "Milletvekili genel seçimlerinde uygulanan seçim sistemleri..." (PDF s. 22, basılı s. 4,
  `pdftotext -table`)** ve **Tablo 23 "1950, 1954, 1957, 1961, 1965, 1969, 1973 ve 1977
  milletvekili genel seçimi sonuçları — TÜRKİYE" (PDF s. 43, basılı s. 25, `pdftotext -table`)**
  — bu sayfa il tablosu değil, doğrudan ülke geneli toplamı veriyor (topla.js gerekmedi).
  - 1973: kayıtlı 16.798.164, kullanılan 11.223.843, katılım %66,8, geçerli 10.723.658,
    meclis 450, baraj yok ("Barajsız d'Hondt Sistemi").
    Sonuçlar (parti — oy — sandalye): CHP 3.570.583 / 185, AP 3.197.897 / 149,
    MSP 1.265.771 / 48, Demokratik Parti 1.275.502 / 45, CGP 564.343 / 13,
    Bağımsız 303.218 / 6, MHP 362.208 / 3, TBP (Türkiye Birlik Partisi) 121.759 / 1,
    Millet Partisi (1962 kurulan, soyağacında yok) 62.377 / 0.
    Oy toplamı geçerli oya (10.723.658) **tam eşit**; sandalye toplamı meclise (450) tam eşit.
  - 1977: kayıtlı 21.207.303, kullanılan 15.358.210, katılım %72,4, geçerli 14.827.172,
    meclis 450, baraj yok.
    Sonuçlar: CHP 6.136.171 / 213, AP 5.468.202 / 189, MSP 1.269.918 / 24, MHP 951.544 / 16,
    Bağımsız 370.035 / 4, CGP 277.713 / 3, Demokratik Parti 274.484 / 1,
    TBP 58.540 / 0, TİP (1975 yeniden kurulan) 20.565 / 0.
    Oy toplamı geçerli oya (14.827.172) **tam eşit**; sandalye toplamı meclise (450) tam eşit.
  - Tablo 1'in "Meclis'e giren siyasi partiler" satırı her iki yıl için de yukarıdaki sıfır
    sandalyeli partileri (1973'te Millet Partisi, 1977'de TBP ve TİP) dışarıda bırakarak
    doğrulama sağladı (1973: "AP, CHP, CGP, DEMOKRATİK PARTİ, MHP, MSP, TBP" = 7 parti;
    1977: "AP, CHP, CGP, DEMOKRATİK PARTİ, MHP, MSP" = 6 parti).
- İkinci kaynak: **TBMM seçim sorgusu**
  `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1973` ve
  `…p_secim_yili=1977` — her iki yılda da bütün parti oy sayıları TÜİK ile **birebir** eşleşti
  (CHP 3.570.583/6.136.171, AP 3.197.897/5.468.202, MSP 1.265.771/1.269.918,
  CGP 564.343/277.713, MHP 362.208/951.544, DP 1.275.502/274.484, TBP 121.759/58.540,
  MP 62.377, TİP(1977) 20.565, Bağımsız 303.218/370.035 — tamamı eşleşti).
- Uyuşmazlık: yok (iki kaynak birebir eşleşti, üstelik parti oylarının toplamı TÜİK'in kendi
  "geçerli oy" rakamıyla da tam örtüşüyor — dönem 2'de görülen iç tutarsızlık burada yok).
- `tekParti:false`, `baraj:null` ("Barajsız d'Hondt Sistemi", Tablo 1).
- Erişim: 2026-09-16.


### 1977-06-genel

Kaynaklar yukarıdaki ortak başlıkta: "1973-10-genel, 1977-06-genel".

### 1973-04-cb-tbmm, 1980-03-cb-tbmm
- **1973 (Fahri Korutürk):** 13 Mart – 6 Nisan 1973 arası 15 turda tamamlanan seçim süreci;
  Korutürk (bağımsız/kontenjan senatörü) 15. turda DP adayı Ferruh Bozbeyli'ye karşı 365 oyla
  seçildi. Bu turda doğrudan bir TBMM tutanak sayfasına ulaşılamadı (arama denemeleri sonuçsuz);
  bunun yerine **Anadolu Ajansı, "1923'ten günümüze Cumhurbaşkanı seçimleri"**
  (aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629, resmî haber ajansı,
  dönem 0'da da kullanıldı) — "Korutürk, 6 Nisan 1973'teki oturumda yapılan 15. tur oylamada
  gerekli olan oy çoğunluğunu sağlayarak, 365 oyla Cumhurbaşkanı seçildi" — ile **Muhammet YILDIZ
  ve Ahmet EDİ, "1980 Cumhurbaşkanlığı Seçim Süreci", Uluslararası Türkçe Edebiyat Kültür Eğitim
  Dergisi, 10(4), 2021, s. 1651-1658** (dergipark.org.tr/en/pub/teke/article/1049650, tam metin
  PDF üzerinden okundu) — "13 Mart-6 Nisan 1973 tarihleri arasında... Toplam 15 tur olan oylamada
  Demokrat Parti'nin adayı Ferruh Bozbeyli ile bağımsız aday Fahri Korutürk yarışmışlardır. Fahri
  Korutürk 15. Tur oylamada seçimi kazanmıştır" — birebir eşleşti. tccb.gov.tr'nin Korutürk
  biyografisi yalnızca "6. Cumhurbaşkanı" olduğunu doğruluyor, tarih/tur ayrıntısı vermiyor.
  Uyuşmazlık: yok.
- **1980 (sonuçsuz süreç):** 22 Mart 1980'de başlaması planlanan ama adaysızlık nedeniyle 25 Mart
  1980'e ertelenen seçim süreci, 12 Eylül 1980 darbesiyle TBMM'nin kapatılmasına kadar sonuçsuz
  sürdü; Cumhuriyet Senatosu Başkanı İhsan Sabri Çağlayangil darbeye kadar cumhurbaşkanlığına
  vekalet etti. Kaynaklar tur/oturum sayısında birbirini tam tutmuyor: AA "5,5 ay süren 118
  birleşimde... 115 turda sonuç alınamadı" derken Yıldız ve Edi (2021, TBMM Zabıt Ceridesi B.57'yi
  doğrudan kaynak göstererek) yalnızca "100'den fazla tur" diyor ve makale içinde tek tek anılan
  turlar (41., 93., 98., 99.) bu belirsiz üst sınırla tutarlı ama AA'nın kesin "115" rakamıyla
  doğrudan eşleşmiyor. Eşleşme toleransı (%0,5) bu iki ifadeyi karşılaştıramayacak kadar farklı
  kesinlikte olduğundan **turSayisi null bırakıldı**. Başlangıç tarihi (25 Mart 1980) iki kaynakta
  da aynı. Uyuşmazlık: tur/birleşim sayısında (bkz. yukarı), sayı yazılmadı.
- Erişim: 2026-09-16 / 2026-09-22.

### 1980-03-cb-tbmm

Kaynaklar yukarıdaki ortak başlıkta: "1973-04-cb-tbmm, 1980-03-cb-tbmm".

### Hükümetler 35-44 (dönem 3 + 12 Eylül kabı)

**Düzeltme turu (2026-09-22):** İlk turda 35-44 numaralı hükümetlerin bir kısmının tarihi yalnızca
ikincil/akademik WebSearch kaynaklarıyla doğrulanmıştı (controller incelemesi bu turu istedi:
"hükümet başlangıcı ölçütü TBMM cildi, ikincil kaynak birincil sayılmaz"). Bu turda TBMM'nin
kendi "Hükümetler, Programları ve Genel Kurul Görüşmeleri" serisinin **Cilt 5, 6 ve 7** ciltleri
bulunup indirildi ve `pdftotext -layout` ile tam metne çevrildi; her ciltteki İçindekiler
bölümünden 35-44 arası **bütün** hükümetlerin resmî başlangıç/bitiş tarihi **birebir** okundu.
Bu, önceki turdaki ikincil kaynaklı tarihleri tamamen doğruladı — **tek istisna 44. hükümetin
başlangıç tarihiydi, düzeltildi** (aşağıya bakın).

- **[B] Cilt 5 (26 Mart 1971 – 17 Kasım 1974)**,
  `https://acikerisim.tbmm.gov.tr/server/api/core/bitstreams/232d9a87-53f4-449c-8e38-82828ab35cf8/content`
  (bu bitstream adresi Görev 9 Dönem 2'de zaten bulunup kullanılmıştı, kaynak defterinde
  "Ortak blok — Hükümetler 26–34" başlığında kayıtlı; bu turda tekrar indirildi). İçindekiler
  (PDF içi satır 148, 157, 168) ve ilgili "Hükümetin Programı" bölüm başlıkları (ör. satır 18345
  "Melen Hükümeti"):
  - "35 Melen Hükümeti (22.05.1972-15.04.1973)"
  - "36 Talu Hükümeti (15.04.1973-26.01.1974)"
  - "37 I. Ecevit Hükümeti (26.01.1974-17.11.1974)"
- **[B] Cilt 6 (17 Kasım 1974 – 12 Kasım 1979)**,
  `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/2e8d2a98-bb2e-4584-80cf-01866e8f1b8f.pdf`.
  İçindekiler (satır 129, 139, 150, 159, 170):
  - "38 Irmak Hükümeti (17.11.1974-31.03.1975)"
  - "39 IV. Demirel Hükümeti (31.03.1975-21.06.1977)"
  - "40 II. Ecevit Hükümeti (21.06.1977-21.07.1977)"
  - "41 V. Demirel Hükümeti (21.07.1977-05.01.1978)"
  - "42 III. Ecevit Hükümeti (05.01.1978-12.11.1979)"
- **[B] Cilt 7 (12 Kasım 1979 – 9 Kasım 1989)**,
  `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/a0f3523f-1bb9-4a2e-bb3e-01866e8f1b9d.pdf`.
  İçindekiler (satır 129, 139):
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
- **Parti bileşimleri ve bitiş nedenleri — düzeltme turu 1 (2026-09-22, controller incelemesi
  C1/I2 bulgularına yanıt):** İlk turda bu alanlar yalnızca ikincil/akademik kaynaklarla
  girilmişti (controller haklı olarak reddetti). Bu turda **aynı Cilt 5/6/7 metinlerinin gövdesi**
  — her hükümetin "Bakanlar Kurulu" (bakan adı + il/seçim çevresi + **parti**) ve varsa
  "Koalisyon Protokolü" bölümü — `grep`/`sed` ile bulunup satır satır okundu. Sayfa numaraları
  aşağıda cildin kendi İçindekiler'inden alınan **basılı sayfa numarasıdır** (`pdftotext`
  çıktısındaki gerçek sayfa altbilgileriyle doğrulandı).

  - **35. Ferit Melen (Cilt 5, s. 3629-3630, Bakanlar Kurulu):** Bakanlar Kurulu listesi
    tek tek okundu — Başbakan Ferit MELEN (C.S. Van, **MGP**); bakanlar arasında Doğan KİTAPLI
    (Samsun, **AP**), Ali Mesut EREZ (Kütahya, **AP**), Haydar ÖZALP (Niğde, **AP**), İlyas
    KARAÖZ (**AP**), Rıfkı DANIŞMAN (**AP**), Erol Yılmaz AKÇAL (**AP**), Hayrettin Turgut TOKER
    (**AP**) — 7 AP'li; İsmail Hakkı ARAR (İstanbul, **CHP**), Mukadder ÖZTEKİN (**CHP**), Kemal
    DEMİR (**CHP**), Ali Rıza UZUNER (**CHP**), Mehmet Nuri KODAMANOĞLU (**CHP**) — 5 CHP'li;
    Hasan Fehmi ALPASLAN (**MGP**) — 1 daha MGP'li; geri kalanı "TBMM dışından" ya da kontenjan
    senatörü (parti etiketsiz, ör. Mehmet İZMEN, Mehmet Naim TALU). **Koalisyon Protokolü yok**
    (yalnızca "Bakanlar Kurulu" bölümü var, "Talu Hükümeti"nden farklı olarak) — bu, hükümetin
    resmî bir parti koalisyonu değil, birden fazla partiden ve bağımsız/teknokrat isimlerden
    oluşan **partilerüstü** bir kabine olduğunu doğruluyor. Spesifikasyon §5.8'in kendi örneği
    de "partiler:[...] partilerüstü/MBK hükümetlerinde boş dizi" diyor — `partiler:[]` bu
    kuralla tutarlı ve artık [B] kaynaklı: birden fazla parti kabinede temsil edildi ama resmî
    koalisyon protokolü yoktu. `bitisNedeni:null` korundu (Cilt 5/6'da Melen'in düşüş nedenine
    dair açık bir ifade bulunamadı).

  - **36. Naim Talu (Cilt 5, s. 3801-3804, Bakanlar Kurulu + Koalisyon Protokolü):**
    "**Koalisyon Protokolü (AP-CGP-Bağımsızlar)**" başlığı **birebir** böyle yazıyor (s. 3803-3804).
    Bakanlar Kurulu listesi de tutarlı: Nizamettin ERKMEN (Giresun, AP), İsmail Hakkı TEKİNEL
    (İstanbul, AP), Sadık Tekin MÜFTÜOĞLU (Zonguldak, AP) vb. çoğunluk AP; Kemal SATIR (Adana,
    CGP), İlhan ÖZTRAK (CGP), Fethi ÇELİKBAŞ (CGP), Vefa TANIR (Konya, CGP) vb. CGP; birkaç
    bakan "Bağımsız" etiketli (protokol başlığındaki "Bağımsızlar" ile tutarlı, ama bağımsızlar
    parti soyağacında olmadığından `partiler` alanına eklenmedi). -> `partiler:["ap","cgp"]`
    **[B] doğrulandı**, değişmedi. `bitisNedeni:null` korundu (Cilt 5'te bu hükümetin düşüş
    nedenine dair açık bir ifade bulunamadı; yalnızca yerine I. Ecevit Hükümeti'nin kurulduğu
    biliniyor).

  - **37. I. Ecevit (Cilt 5, s. 3968-3971, Bakanlar Kurulu + Koalisyon Protokolü):**
    "**Koalisyon Protokolü (CHP-MSP)**" başlığı **birebir** (s. 3970-3971). Bakanlar Kurulu
    tamamen CHP ve MSP'den: Bülent ECEVİT (Zonguldak, CHP, Başbakan), Necmettin ERBAKAN (Konya,
    MSP, Başbakan Yrd.), Orhan Ferruh EYÜPOĞLU (CHP), İsmail Hakkı BİRLER (CHP), Süleyman Arif
    EMRE (MSP), Şevket KAZAN (MSP), Hasan Esat IŞIK (CHP), Oğuzhan ASİLTÜRK (MSP), Turan GÜNEŞ
    (CHP), Deniz BAYKAL (CHP), Fehim ADAK (MSP), Mahmut TÜRKMENOĞLU (CHP) vb. -> `partiler:
    ["chp23","msp"]` **[B] doğrulandı**, değişmedi. **`bitisNedeni:"istifa"`** doğrulandı: Cilt
    6'nın Irmak Hükümeti bölümü (s. 4369 sonrası, Hükümet Programının Görüşülmesi kısmı, ör.
    "Sayın Ecevit Hükümetinin istifasından sonra, yeni bir..." ve "...ortaya çıkan Hükümet
    bunalımı...") istifayı açıkça doğruluyor (tarih detayı — 18 Eylül 1974 — bu ciltte açık
    yazmıyor, ikincil kaynaktan kaldı, ama neden/istifa olgusu [B]).

  - **38. Sadi Irmak (Cilt 6, s. 4369-4370, Bakanlar Kurulu):** Bakanlar Kurulu listesinde
    **hiçbir bakanın parti etiketi yok** — tamamı "TBMM dışından", "C.S. Kontenjan Üyesi" ya da
    yalnızca il adıyla (parti belirtilmeden) yazılmış (ör. Mahmut Sadi IRMAK, Zeyyat BAYKARA,
    Melih ESENBEL, Bedri GÜRSOY...). **Koalisyon Protokolü de yok.** Bu, [B] kaynakla doğrulanmış
    tam bir partilerüstü kabine -> `partiler:[]` doğrulandı. `bitisNedeni:null` korundu: Cilt
    6'nın metninde "29 Kasım 1974'te güvenoyu alamadı" bilgisine karşılık gelen açık bir tutanak
    ifadesi bu turda bulunamadı (yalnızca "Sayın Ecevit Hükümetinin istifasından sonra ortaya
    çıkan Hükümet bunalımı" bağlamı var); dogrula.js'in kapalı enum listesinde bu durumu tam
    karşılayan bir değer de yok, `null` en doğru seçim.

  - **39. IV. Demirel — 1. Milliyetçi Cephe (Cilt 6, s. 4591-4594, Bakanlar Kurulu + Koalisyon
    Protokolü):** "**Koalisyon Protokolü (AP-MSP-MHP-CGP)**" başlığı **birebir** (s. 4593-4594),
    metin: "Adalet Partisi, Milli Selamet Partisi, Cumhuriyetçi Güven Partisi ve Milliyetçi
    Hareket Partisi... bir Koalisyon Hükümeti kurarak..." Dört Başbakan Yardımcısı da dört
    partiyi temsil ediyor: Necmettin ERBAKAN (MSP), Turhan FEYZİOĞLU (CGP), Alparslan TÜRKEŞ
    (MHP), başbakan Süleyman DEMİREL (AP). -> `partiler:["ap","msp","cgp","mhp69"]` **[B]
    doğrulandı**, değişmedi. **`bitisNedeni:"secim"`** doğrulandı: Cilt 6'nın II. Ecevit
    Hükümeti bölümü açılış konuşmalarında "5 Haziran 1977 seçimleri ardından kurulan..." ifadesi
    geçiyor, IV. Demirel'in tam bu seçimin ardından (21.06.1977) sona erdiği bağlamıyla tutarlı.

  - **40. II. Ecevit (Cilt 6, s. 4937-4938, Bakanlar Kurulu; Güvenoylaması s. 5074):** Bakanlar
    Kurulu listesinde bu kez parti etiketi hiç yok (yalnızca isim+il) — CHP'nin kendi azınlık
    hükümeti olduğu, metindeki tartışma bölümünde açıkça geçiyor: "...Cumhuriyet Halk Partisi
    kurarsa bu azınlık Hükümeti olurmuş..." (s. 5074 civarı, Hükümet Programının Görüşülmesi).
    -> `partiler:["chp23"]`, `tip:"azinlik"` **[B] doğrulandı**. **`bitisNedeni:"guvensizlik"`**
    **[B] tam doğrulandı** — Güvenoylaması bölümünde (s. 5074) tutanağın kendi oylama sonucu
    satır satır yazıyor: **"Oy sayısı 448, kabul 217, ret 229, çekinser 2."** (ikincil
    kaynaklardaki "217 kabul/229 ret" rakamı burada birebir teyit edildi).

  - **41. V. Demirel — 2. Milliyetçi Cephe (Cilt 6, s. 5087-5090, Bakanlar Kurulu + Koalisyon
    Protokolü):** "**Koalisyon Protokolü (AP-MSP-MHP)**" başlığı **birebir** (s. 5089-5090) —
    CGP bu kez yok, üç partili koalisyon. Bakanlar Kurulu da tutarlı: Süleyman DEMİREL (AP),
    Necmettin ERBAKAN (MSP), Alparslan TÜRKEŞ (MHP) üç Başbakan Yardımcısı. -> `partiler:
    ["ap","msp","mhp69"]` **[B] doğrulandı**, değişmedi. **`bitisNedeni:"guvensizlik"`**
    doğrulandı: Cilt 6'nın III. Ecevit Hükümeti bölümünde (s. 5391 sonrası) "Tarih, gensoru ile
    düşürülmüş Hükümeti nasıl bağışlanmaz suçlarla yargılayabilir..." ifadesi, V. Demirel'in bir
    gensoru (censure motion) ile düşürüldüğünü [B] doğruluyor (tam oylama tablosu bu turda
    bulunamadı, ama "gensoru ile düşürüldü" ifadesi `bitisNedeni:"guvensizlik"` için yeterli).
    "Güneş Motel Hadisesi" ayrıntısı (AP'den istifa eden milletvekillerinin desteği) hâlâ
    ikincil kaynaklı, yalnızca `not` alanındaki renk bilgisi.

  - **42. III. Ecevit (Cilt 6, s. 5391-5392, Bakanlar Kurulu):** Bakanlar Kurulu listesi bu kez
    parti etiketli ve **CHP tek başına değil**: Bülent ECEVİT (CHP, Başbakan); Turhan FEYZİOĞLU
    (Kayseri, **CGP**, Başbakan Yrd.); Mehmet Faruk SÜKAN (Konya, **DP**, Başbakan Yrd.); Mehmet
    Salih YILDIZ (Van, **CGP**); geri kalan çoğunluk CHP (Orhan Ferruh EYÜPOĞLU, Hikmet ÇETİN,
    Şerafettin ELÇİ, Deniz BAYKAL, Ahmet Gündüz ÖKÇÜN, Ziya MÜEZZİNOĞLU vb.); birkaçı "Bağımsız"
    (Enver AKOVA, Ali Rıza SEPTİOĞLU, Mustafa KILIÇ, Mete TAN, Tuncay MATARACI, Güneş ÖNGÜT,
    Orhan ALP, Ahmet KARAASLAN). **Bu, ilk turdaki "CGP ve Demokratik Parti'nin dışarıdan
    desteği ikinci kaynakla doğrulanamadı" notunu düzeltiyor: CGP ve DP'den bakanlar bizzat
    kabinede görev aldı, dışarıdan destek değil.** -> `partiler` **["chp23","cgp","demp70"]**
    olarak düzeltildi (`veri/sandik.js`'te güncellendi). **`tip`: kullanıcı kararı (dönem 3 durağı, 2026-09-22) — ölçüt kabinenin
    parti bileşimidir; kabinede birden fazla parti varsa `koalisyon`. Bu yüzden `"azinlik"` →
    `"koalisyon"`.** `not`taki "meclis güvenini korumasına rağmen" ifadesi [B] kaynaksız olduğu için çıkarıldı. **`bitisNedeni:"istifa"`** [B] tam
    doğrulandı: Cilt 7'nin VI. Demirel Hükümeti bölümü açılışında (s. 5583 civarı) "...
    yorumlanmış ve Hükümet **16 Ekim 1979** günü istifa etmiştir." ifadesi hem nedeni hem tam
    tarihi veriyor (ikincil kaynaklardaki "14 Ekim ara seçimi sonrası istifa" genel çerçevesiyle
    tutarlı, ama istifanın kendisi 16 Ekim'de gerçekleşmiş — `not` alanı bu ayrıntıyla
    güncellendi).

  - **43. VI. Demirel (Cilt 7, s. 5583-5584, Bakanlar Kurulu):** Bakanlar Kurulu listesinde de
    parti etiketi yok, ama Hükümet Programının Görüşülmesi bölümünün en başında (s. 5586
    civarı) doğrudan şu ifadeler var: "Millet Meclisinde hiçbir parti tek başına Hükümeti
    kuracak kadar güce sahip [değildi]... Hükümetin **Adalet Partisi** tarafından kurulması
    gerek[tiği]... Milliyetçi Hareket Partisi... Adalet Partisi tarafından kurulacak bir
    hükümeti **destekleyeceğini** açıkladı... [Milli Selamet Partisi de] 'Hükümet Adalet
    Partisi tarafından kurulmalıdır' dedik." — yani hükümet yalnızca **AP tarafından kuruldu**,
    MSP ve MHP yalnızca dışarıdan destek verdi, kabineye katılmadı. -> `partiler:["ap"]`,
    `tip:"azinlik"` **[B] doğrulandı**, değişmedi. `bitisNedeni:"darbe"` zaten apaçık (12 Eylül
    1980 darbesiyle aynı gün sona erdi, ayrıca kaynak gerektirmiyor — dönem 1'deki hükümet 23
    ile aynı örüntü).

  - **44. Ulusu — 12 Eylül kabı (Cilt 7, s. 5943-5944, Bakanlar Kurulu):** Bakanlar Kurulu
    listesinde **hiçbir parti etiketi yok** (bütün partiler zaten kapatılmıştı) -> `partiler:[]`
    **[B] doğrulandı**, değişmedi. `bitisNedeni:null` korundu (13 Aralık 1983'te I. Özal
    Hükümeti'nin kurulmasıyla, yani genel seçimin ardından olağan biçimde sona erdi; ama bu
    turda "secim" değerini destekleyecek açık bir tutanak ifadesi aranmadı, `null` bırakıldı).

- Erişim (ilk tur): 2026-09-16 / 2026-09-22. Erişim (düzeltme turu 1, Cilt 5/6/7 gövde metni):
  2026-09-22.


### 1973-12-yerel, 1977-12-yerel

- **[B] YSK, "9 Aralık 1973 Belediye Meclis Üyeliği Seçim Sonuçları"**
  (ysk.gov.tr/doc/dosyalar/docs/Mahalli/1973/KesinSecimSonuclari/1973_Belediye_Meclis_Uyeligi_Secimleri_Sonucu.pdf,
  `pdftotext -table`) — kayıtlı 8.607.082, kullanılan 4.706.719, geçerli 3.914.801, seçimi
  yapılan belediye meclis üyeliği 24.873. Parti oyları toplamı geçerli oya **tam eşit**
  (1.382.150+1.624.490+102.908+351.746+8.384+212.477+62.165+19.860+150.621=3.914.801); kazanılan
  üyelik toplamı da 24.873'e **tam eşit**.
- **[B] YSK, "11 Aralık 1977 Belediye Meclis Üyeliği Seçim Sonuçları"**
  (aynı klasör, 1977_Belediye_Meclis_Uyeligi_Secimleri_Sonucu.pdf) — kayıtlı 12.067.618,
  kullanılan 6.197.718, geçerli 5.680.318, seçimi yapılan üyelik 27.031. Parti oyları toplamı
  geçerli oya **tam eşit** (2.148.885+2.663.642+40.587+51.411+302.831+315.733+23.506+15.992+
  6.417+3.280+81+107.953=5.680.318); kazanılan üyelik toplamı 27.031'e **tam eşit**.
- Bu iki dosya, YSK'nın 1973/1977 arşivindeki dört ayrı belge kümesinden ("İl Genel Meclisi
  Üyeliği", "Belediye Meclis Üyeliği" — bu ikisi indirilebildi; "Belediye Başkanlığı" 1977 için
  yalnızca ülke geneli toplamıyla indirilebildi, 1973 için hiçbir dosya adı varyasyonu (10'dan
  fazla deneme: Türkçe karakterli/karaktersiz, "Meclis"/"Meclisi", "Baskanlik"/"Baskanligi"...)
  çalışmadı) bulundu. `olcu:"belediye-meclisi"` kuralına uygun olan "Belediye Meclis Üyeliği"
  dosyaları kullanıldı.
- **İkinci kaynak:** her iki yılın "yüzde 91,27 katılım" gibi genel istatistikleri ve "CHP,
  İstanbul, Ankara, İzmir dahil çoğu büyükşehirde kazandı" bilgisi WebSearch ile toplanan çok
  sayıda bağımsız kaynakta (haber arşivleri, TESAV'ın kendi sayfası, akademik özetler) tutarlı;
  ama şehir bazlı belediye başkanı adları yalnızca Vikipedi kaynaklı olduğu için ne `buyuksehir`
  alanına ne de `not`a kişi ismi olarak yazılmadı (kullanıcı kararı: Vikipedi hiçbir zaman kaynak
  sayılmaz).
- **`buyuksehir` alanı hiç yazılmadı** (iki yıl için de): YSK'nın şehir bazlı "Belediye
  Başkanlığı" sonuç dosyalarına (il il ya da büyükşehir bazlı) bu turda ulaşılamadı — 1977'nin
  ülke geneli toplam dosyası bulundu ama şehir kırılımı yok; 1973'ün dosyası hiç bulunamadı.
  Dönem 2'de belirlenen kural burada da uygulandı: resmî kaynak yoksa `buyuksehir` yazılmaz.
- Erişim: 2026-09-22.

### 1977-12-yerel

Kaynaklar yukarıdaki ortak başlıkta: "1973-12-yerel, 1977-12-yerel".

### 1973 ve 1975/1979 ara seçimleri — envanter sonucu: eklenmedi

> **Görev 12'de (2026-09-26) 1975 ve 1979 eklendi** — bkz. "Görev 12 — Ara seçimler".

- **1973:** genel seçimden (14 Ekim 1973) sonra ara seçime ihtiyaç duyulacak bir sandalye boşalması
  bu turda bulunamadı; aday listede zaten yoktu.
- **12 Ekim 1975** (6 il: Amasya, Bursa, Eskişehir, Niğde, Urfa, Zonguldak, 6 sandalye) ve
  **14 Ekim 1979** (5 il: Edirne, Konya, Aydın, Manisa, Muğla, 5 sandalye — tamamını AP kazandı,
  bu sonuç III. Ecevit Hükümeti'nin düşmesine yol açtı) ara seçimlerinin **varlığı ve tarihi**
  WebSearch ile toplanan birden fazla bağımsız kaynakla (TESAV'ın kendi sayfası — PDF'i yine bu
  turda da 404 verdi, dönem 1-2'deki sorunun devamı; dergipark akademik makalesi "İktidar
  Değiştiren 14 Ekim 1979 Milletvekili Ara Seçimi Manisa Örneği", Belgi Dergisi; genel haber
  özetleri) doğrulandı ama:
  - YSK'nın "Ara Seçim Arşivi" (ysk.gov.tr/tr/ara-secim-arsivi/2624) JS kabuğu döndürdü, altındaki
    dosya adına (Mahalli/Milletvekili arşivlerindeki gibi `docs/AraSecim/...` deseniyle) onlarca
    varyasyon denendi, hiçbiri çalışmadı.
  - www5.tbmm.gov.tr'nin tutanak/kanun arşivinde bulunan bir sonuç ("kanuntbmmc069...") incelendiğinde
    1986 dönemine ait çıktı, 1975/1979 ile ilgisiz olduğu görüldü.
  - 1975 ara seçiminin il bazında hangi partinin kazandığı (yalnızca "6 il, 6 sandalye" bilgisi
    var) ve 1979'un tam il/parti eşleşmesi (yalnızca "AP 5/5" özeti var, hangi ilin hangi turda
    olduğuna dair il-parti tablosu yok) iki kaynakla, satır satır doğrulanabilir biçimde
    bulunamadı.
- Kullanıcı kararı (brief) gereği: **iki kaynakla (ve mümkünse resmî bir kaynakla) tam
  doğrulanamayan ara seçimler eklenmez.** Dönem 3 için de böyle: `veri/sandik.js`'e ara seçim
  kaydı eklenmedi. **Görev 12'ye not:** 12 Ekim 1975 (6 il/6 sandalye) ve 14 Ekim 1979 (5 il/5
  sandalye, tamamı AP) ara seçimlerinin resmî YSK kaynağı aranmalı.
- Erişim: 2026-09-22.

### 1982-11-referandum (12 Eylül kabı)

- **[B] YSK, "7 Kasım 1982 Anayasa Değişikliği Halk Oylaması Sonucu"**
  (ysk.gov.tr/doc/dosyalar/docs/1982Referandum/7-Kasım-1982-Halk-Oylaması.pdf) — 67 ilin tam
  tablosu (sandık seçmen listesindeki kayıtlı sayı, katılan, geçerli oy, geçersiz oy, evet,
  hayır); Türkiye toplamı yayımlanmamış, `araclar/topla.js` ile hesaplandı:
  `node araclar/topla.js` çıktısı: kayıtlı 20.690.914, katılan 18.885.488, geçerli 18.841.990,
  geçersiz 43.498, evet 17.215.559, hayır 1.626.431. evet+hayır=geçerli oya **tam eşit**.
  Katılım oranı: %91,27; kabul oranı: %91,37.
- **İkinci kaynak:** Murat SOYSAL, "Plebisit mi, Referandum mu?", *Journal of Modern Turkish
  History Studies*, kabul tarihi 02.12.2022
  (`ataturkilkeleri.deu.edu.tr/wp-content/uploads/2023/01/14.-Murat-SOYSAL.pdf`, tam metin
  `pdftotext` ile okundu) — "Katılımın yüzde 91.27 olduğu halkoylamasında vatandaşlar, Anayasa'ya
  yüzde 91.37 oranında kabul oyu vermiştir" — hesaplanan katılım (%91,27) ve kabul oranı (%91,37)
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

---

## Görev 9 — Dönem 4 (1983–1990)

### 1983-11-genel

- **[B] TÜİK, *Milletvekili Genel Seçimleri 1923-2011*, Tablo 24 "TÜRKİYE" (PDF s. 111-112,
  basılı s. 93-94, `pdftotext -table`, yerel kopya:
  `C:/Users/Lizer/.claude/projects/.../tool-results/webfetch-1789121603458-3nc85e.pdf`)** —
  kayıtlı 19.767.366, kullanılan 18.238.362 (katılım %92,3), geçerli 17.351.510, meclis 399,
  baraj %10 (aynı yayının s. 13'ünde "ülke barajlı (%10)" sisteminin 1983'ten itibaren
  uygulandığı doğrulandı). ANAP 7.833.148 (%45,1) 211 sandalye, HP 5.285.804 (%30,5) 117
  sandalye, MDP 4.036.970 (%23,3) 71 sandalye, Bağımsız 195.588 (%1,1) 0 sandalye. Parti+bağımsız
  oy toplamı geçerliye tam eşit (7.833.148+5.285.804+4.036.970+195.588=17.351.510); sandalye
  toplamı (211+117+71=399) meclise tam eşit.
- **İkinci kaynak: TBMM seçim sorgusu**
  (`https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1983`,
  WebFetch bu alan adına bağlanamadı — "ECONNREFUSED"; `curl` ile erişildi, sayfa ISO-8859-9
  kodlu, `iconv` ile UTF-8'e çevrildi) — ANAP 7.833.148 (%45,14), HP 5.285.804 (%30,46), MDP
  4.036.970 (%23,27), BAĞIMSIZ 195.588 (%1,13). TÜİK ile birebir eşleşti (yüzdelerdeki küçük fark
  yuvarlamadan; oy sayıları birebir aynı). Uyuşmazlık: yok.
- MDP'nin tam adı ("Milliyetçi Demokrasi Partisi") YSK'nın 1989 tarihli DİE/TÜİK "Mahallî
  İdareler Seçimi Sonuçları" yayınının Kısaltmalar sayfasından [B] alındı. MDP soyağacında
  (`veri/partiler.js`) yok — Görev 10 listesine eklendi.
- `tarih`: 6 Kasım 1983 — TÜİK Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" (PDF
  s. 277, basılı s. 259) "16.Dönem 6 Kasım 1983" satırıyla [B] doğrulandı (dönem 3'te de aynı
  kaynakla kısmen doğrulanmıştı).
- Erişim: 2026-09-22.

### 1987-11-genel

- **[B] TÜİK, Tablo 24 "TÜRKİYE" (aynı sayfa, PDF s. 111-112)** — kayıtlı 26.376.926, kullanılan
  24.603.541 (katılım %93,3), geçerli oy sayısı (gümrük kapıları hariç) 23.923.687, gümrük
  kapıları geçerli oyu 47.942, toplam geçerli oy 23.971.629 (yüzdeler bu toplama göre
  hesaplanmış — ANAP %36,3 = 8.704.335/23.971.629), meclis 450, baraj %10. ANAP 8.704.335
  (%36,3) 292 sandalye, DYP 4.587.062 (%19,1) 59 sandalye, SHP 5.931.000 (%24,8) 99 sandalye, RP
  1.717.425 (%7,2) 0, MÇP 701.538 (%2,9) 0, DSP 2.044.576 (%8,5) 0, IDP 196.272 (%0,8) 0,
  Bağımsız 89.421 (%0,4) 0. Parti+bağımsız toplamı (8.704.335+4.587.062+5.931.000+1.717.425+
  701.538+2.044.576+196.272+89.421) = 23.971.629, toplam geçerliye tam eşit. Sandalye toplamı
  (292+59+99=450) meclise tam eşit.
- **İkinci kaynak: TBMM seçim sorgusu** (`p_secim_yili=1987`, `curl`+`iconv`) — ANAP 8.704.335
  (%36,31), SHP 5.931.000 (%24,74), DYP 4.587.062 (%19,14), DSP 2.044.576 (%8,53), RP 1.717.425
  (%7,16), MÇP 701.538 (%2,93), IDP 196.272 (%0,82), BAĞIMSIZ 89.421 (%0,37). TÜİK ile birebir
  eşleşti. Uyuşmazlık: yok.
- IDP (Islahatçı Demokrasi Partisi) soyağacında yok ve oy oranı %1'in altında (%0,82) →
  spesifikasyon §5.2 "Diğer" kuralı gereği `{ad:"Diğer", partiSayisi:1, oy:196272}` olarak
  yazıldı, ayrı satır açılmadı.
- `tarih`: 29 Kasım 1987 — aynı TÜİK Ek-1 tablosunda "17.Dönem 29 Kasım 1987" satırıyla [B]
  doğrulandı.
- Erişim: 2026-09-22.

### 1984-03-yerel

> **2026-09-26:** ülke geneli sayılar YSK'nın Resmî Gazete ilanından yazıldı (kullanıcı kararı) — bkz. "Görev 12 — 1955 yerel seçimi ve 1984–1999 yerel ülke geneli".

- **[B] YSK, "25 MART 1984 BELEDİYE MECLİS ÜYELİĞİ SEÇİMİ SONUÇLARI"**
  (`ysk.gov.tr/doc/dosyalar/docs/Mahalli/1984/KesinSecimSonuclari/1984-Belediye-Meclis-Uyeligi-
  Secimleri-Sonucu.pdf`, `pdftotext -raw`) — 67 ilin tam tablosu, ülke toplamı yok,
  `araclar/topla.js` ile hesaplandı ("hesaplandı"): kayıtlı 11.981.906, kullanılan 10.499.457,
  geçerli 9.923.877 (parti oyları toplamına göre — bkz. aşağıdaki not). ANAP 4.219.115 (%42,5),
  DYP 1.163.110 (%11,7), HP 778.033 (%7,8), MDP 544.385 (%5,5, ad — soyağacında yok), RP 479.977
  (%4,8), SDP(=SODEP) 2.314.738 (%23,3), Bağımsız 110.474 (%1,1), "Diğer" 314.045 (%3,2).
  ADANA ilinin parti sütunları kaynak PDF'inde iç tutarsız (HP/MDP/RP/SDP hücreleri o ilin kendi
  geçerli oyunu 2-9 kat aşıyor; hem `pdftotext -table` hem `-raw` modunda birebir aynı anormal
  değerler çıktı — yani metin çıkarma hatası değil, kaynağın kendi PDF'inde bir hata/karışma
  var). Adana'nın SANDIK/SEÇMEN/OY KULLANAN/GEÇERLİ sütunları (1.288/422.333/361.328/336.078)
  kendi içinde tutarlı olduğundan ülke toplamına dahil edildi; parti kırılımı güvenilmediği için
  "Diğer"e (314.045 = Adana'nın 336.078 geçerli oyu eksi diğer 66 ilin küçük toplam-parça
  farkları) eklendi.
  - Diğer 66 ilin her birinde parti oyları toplamı o ilin geçerli oyuna küçük farklarla (genelde
    <%0,5, birkaç yüz-birkaç bin oy) yaklaşıyor — bu, tabloya girmeyen küçük/bağımsız listelerin
    kalıntısı olarak değerlendirildi, "Diğer" toplamına dahil.
- **İkinci kaynak (yalnızca bütünlük/mantıklılık denetimi — bkz. aşağıdaki kısıt):** aynı YSK/TÜİK
  yayınının Tablo 1'i ("İllere göre 25 Mart 1984 ve 26 Mart 1989 İl Genel Meclisi Üyeleri Seçimi
  Sonuçları", RG 28.5.1989/20178 kaynaklı ulusal toplam) farklı bir ölçü (il genel meclisi,
  köyler dahil — belediye meclisinden farklı bir seçmen kütlesi). Bu ölçüde ANAP'ın ülke genelinde
  birinci parti olduğu ve haber kaynaklarının aktardığı yüzde (~%41,5) benzer bir bantta olduğu
  görüldü — ama belediye meclisi ölçüsü için gerçekten bağımsız, aynı ölçüyü veren ikinci bir
  ulusal kaynak bu turda bulunamadı. Bu, spesifikasyon §8.1'in "hesaplanmış toplamlar... ikinci
  bir kaynağın ulusal rakamıyla eşleşmelidir" kuralını tam karşılamıyor — rapora ve kullanıcıya
  açıkça bildirildi (bkz. rapor "Endişeler").
- Erişim: 2026-09-22.

### 1984-03-yerel — büyükşehir (İstanbul, Ankara, İzmir)

- **[B] YSK, "25 MART 1984 BÜYÜKŞEHİR BELEDİYE BAŞKANLIĞI SEÇİMİ SONUÇLARI"**
  (`ysk.gov.tr/doc/dosyalar/docs/Mahalli/1984/KesinSecimSonuclari/1984-Buyuksehir-Belediye-
  Baskanligi-Secimleri-Sonucu.pdf`, `pdftotext -table`) — üç ilin tam satırı, parti oyları
  toplamı her satırda geçerli oya tam eşit çıktı (Ankara: 391.975+30.034+32.278+18.240+20.167+
  243.354+1.162=737.210=geçerli; İstanbul ve İzmir de aynı şekilde tam eşit). Ankara: ANAP
  391.975 kazandı (seçmen 921.111, kullanılan 779.368, geçerli 737.210). İstanbul: ANAP 939.190
  kazandı (seçmen 2.391.942, kullanılan 2.015.895, geçerli 1.890.000). İzmir: ANAP 279.456
  kazandı (seçmen 682.917, kullanılan 615.640, geçerli 582.779).
  Not: bu seçim, 3030 sayılı Büyükşehir Belediyesi Kanunu'nun Resmî Gazete'de yayımından
  (9.7.1984/18453) önce yapılmış olmasına rağmen YSK'nın resmî belgesi doğrudan "büyükşehir
  belediye başkanlığı" başlığını taşıyor; muhtemelen daha önceki bir KHK ile düzenlenmişti — bu
  ayrıntı bu turda ayrıca araştırılmadı, yalnızca sonuçların varlığı ve sayıları esas alındı.
- `aday` alanı yazılmadı — adaylar (ör. Bedrettin Dalan) yalnızca haber/Vikipedi kaynaklarında
  geçiyor, [B]+ikinci kaynak kuralına uymuyor.
- Erişim: 2026-09-22.

### 1989-03-yerel

> **2026-09-26:** ülke geneli sayılar YSK'nın Resmî Gazete ilanından yazıldı (kullanıcı kararı) — bkz. "Görev 12 — 1955 yerel seçimi ve 1984–1999 yerel ülke geneli".

- **[B] YSK, "26 MART 1989 BELEDİYE MECLİS ÜYELİĞİ SEÇİMİ SONUÇLARI"**
  (`ysk.gov.tr/doc/dosyalar/docs/Mahalli/1989/KesinSecimSonuclari/1989-Belediye-Meclis-Uyeligi-
  Secimleri-Sonucu.pdf`, `pdftotext -raw`) — 67 ilin tam tablosu (bu turda 3 ilde — BOLU, BURDUR,
  ÇORUM — satır sonunda Bağımsız hücresi boş bırakılmış, kaynağın kendi biçimlendirme
  tutarsızlığı; bu üç il için Bağımsız=0 kabul edildi), ülke toplamı yok, `araclar/topla.js` ile
  hesaplandı: kayıtlı 18.091.625, kullanılan 14.067.380. Kaynağın "GEÇERLİ OY TOPLAMI" sütununun
  il bazlı toplamı 13.241.345; parti oyları toplamı 13.241.347 (2 oyluk fark, %0,00002 —
  tolerans içinde). İç tutarlılık için (dogrula.js'in "oy toplamı ≠ geçerli" hata kuralı gereği)
  `gecerli` alanına parti oyları toplamı (13.241.347) yazıldı. ANAP 3.112.613 (%23,5), DSP
  890.507 (%6,7), DYP 3.138.260 (%23,7), MÇP 445.065 (%3,4), RP 1.196.876 (%9,0), SHP 4.368.018
  (%33,0 — kaynakta sütun başlığı "SODEP" yazıyor; 1989'da SODEP diye ayrı bir parti yoktu
  (Kasım 1985'te SHP'ye katılmıştı, bkz. `veri/partiler.js` `sodep` kartı "1983–1985"), bu
  yüzden sütun SHP'nin oyu olarak değerlendirildi — aynı YSK'nın 1989 büyükşehir belgesinde
  parti sütunu doğrudan "SHP" yazıyor, tutarlı), Bağımsız 20.543 (%0,2), "Diğer" (IDP, %0,52 —
  soyağacında yok ve <%1) 69.465.
- Erişim: 2026-09-22.

### 1989-03-yerel — büyükşehir (İstanbul, Ankara, İzmir)

- **[B] YSK, "26 MART 1989 BÜYÜKŞEHİR BELEDİYE BAŞKANLIĞI SEÇİMİ SONUÇLARI"** (`pdftotext -table`)
  — sekiz ilin (Adana, Ankara, Bursa, Gaziantep, İstanbul, İzmir, Kayseri, Konya) tam satırı;
  yalnızca İstanbul/Ankara/İzmir kullanıldı (spesifikasyon kapsamı). Her üç satırda parti oyları
  toplamı geçerli oya tam eşit. İstanbul: SHP 818.756 kazandı (seçmen 3.520.723, kullanılan
  2.393.003, geçerli 2.277.364; ANAP 594.845, DSP 278.294, DYP 315.591, IDP 7.241, MÇP 22.278,
  RP 238.745, Bağımsız 1.614). Ankara: SHP 474.349 kazandı (seçmen 1.382.505, kullanılan
  1.126.031, geçerli 1.074.252; ANAP 216.485, DSP 53.776, DYP 218.893, IDP 5.554, MÇP 41.694, RP
  62.968, Bağımsız 533). İzmir: SHP 365.980 kazandı (seçmen 981.771, kullanılan 727.077, geçerli
  698.389; ANAP 169.672, DSP 39.186, DYP 97.183, IDP 2.227, MÇP 5.326, RP 18.815, Bağımsız 0).
- `aday` alanı yazılmadı (bkz. 1984 büyükşehir maddesi — aynı gerekçe).
- Erişim: 2026-09-22.

### 1987-09-referandum

- **Ham sayılar — bianet.org, "1987 Referandumu: Özal 75 Bin Oyla Kaybetti"**
  (`bianet.org/1/17/183220-1987-referandumu-ozal-75-bin-oyla-kaybetti`) — kullanılan 24.436.821,
  geçerli 23.347.856, evet 11.711.461 (%50,16), hayır 11.636.395 (%49,84), fark 75.066 oy.
  evet+hayır=geçerli tam eşit (11.711.461+11.636.395=23.347.856).
- **İkinci/üçüncü kaynak (akademik, TÜİK atıflı):**
  - Yeliz Karadeniz, "Demokratik Referandum İlkeleri Işığı Altında Türkiye'deki 1987
    Halkoylamasına Yönelik Bir Analiz", Uluslararası Politik Araştırmalar Dergisi, Ağustos 2018,
    Cilt 4 Sayı 2 (`dergipark.org.tr/tr/download/article-file/601773`) — "referanduma katılım
    oranı % 93,6 olmuş, ...%50.16 evet oyu ve %49.84 hayır oyu ile sonuçlanmış (www.tuik.gov.tr)".
  - Kerem Yavaşça, "ANAP İktidarında Sonun Başlangıcı: 25 Eylül 1988 Referandumu", Akademik
    Hassasiyetler, 2023 (`dergipark.org.tr/tr/download/article-file/3122086`) — "6 Eylül'de
    gerçekleşen referandumda 23.347.856 geçerli oy verilmiş ve evet-hayır oyları arasındaki fark
    evet oyları lehine yalnızca 75.000 civarında olmuştur" — bianet ile birebir eşleşti.
  - İki akademik kaynak da bianet'le tam eşleşti. Uyuşmazlık: yok (bkz. aşağıdaki reddedilen
    kaynak).
- **Reddedilen kaynak:** secim.yenisafak.com/referandum/secim-1987/secim-sonuclari — "Toplam
  seçmen 25.924.682, Kullanılan oy 24.218.800, Geçerli oy 23.136.218, evet 11.618.106 (%50,2),
  hayır 11.519.393 (%49,8), katılım %93,4" — bianet+2 akademik kaynağa göre ~%0,8-0,9 sapıyor
  (tolerans %0,5'i aşıyor), azınlıkta kaldığı için kullanılmadı.
- `kayitli`: hiçbir kaynak doğrudan birincil bir rakam vermiyor (yalnızca türetilmiş/yuvarlanmış
  25,9-26,1 milyon bandında tahminler var, kaynaktan kaynağa değişiyor) → null.
- `tutumlar` — **historystudies.net, "Siyasi Yasakların Sonu: 6 Eylül 1987 Referandumunda Erdal
  İnönü ve Bülent Ecevit'in Faaliyetleri"**
  (`historystudies.net/dergi/siyasi-yasaklarin-sonu-6-eylul-1987-referandumunda-erdal-inonu-ve-
  bulent-ecevitin-faaliyetleri20210160c59df.pdf`) — "4 yasaklı liderin yürüttüğü 'Evet'
  kampanyasını... DYP, Demirel'e; DSP, Ecevit'e; MÇP, Türkeş'e; RP de Erbakan'a destek vermiştir...
  'Evet' için çalışmışlardır. Ayrıca SHP gibi hiçbir yasaklı liderin güdümünde olmayan bir ana
  muhalefet partisi de... 6 Eylül için 'Evet' oyu verilmesi çağrısında bulunmuş... ANAP ve
  Başbakan Turgut Özal... açıktan 'Turuncu – Hayır' kampanyası yürütmüştür." → dyp:evet, dsp:evet,
  mcp:evet, rp:evet, shp:evet, anap:hayır.
  İkinci kaynak: Karadeniz (2018) — "İktidar partisinin [ANAP'ın] yasakların kalkmasına karşı
  çıktığı, diğer partilerin ise 'evet' kampanyası yürüttüğü" — birebir tutarlı.
- Erişim: 2026-09-22.

### 1988-09-referandum

- **Ham sayılar — secim.yenisafak.com/referandum/secim-1988/secim-sonuclari** — kayıtlı
  26.795.661, kullanılan 23.810.814, geçerli 23.006.345, katılım %88,9. Evet/hayır ham sayıları
  güvenilmedi: sayfadan çekilen evet 8.039.044 + hayır 14.869.166 = 22.908.210, geçerliye
  (23.006.345) tam oturmuyor (98.135 fark, %0,4) — WebFetch özetleme aracının sayfa içeriğini tam
  doğru ayrıştıramamış olması ihtimaline karşı ham evet/hayır sayıları kullanılmadı, yalnızca
  yüzdeler alındı.
- **İki bağımsız akademik kaynak (TÜİK atıflı), birebir eşleşti:**
  - Kerem Yavaşça (2023, yukarıdaki tam künye) — "25 Eylül'de gerçekleşen referandum % 35 evet
    oyuna karşılık, % 65 hayır oyuyla sonuçlanmıştır."
  - Karadeniz (2018) — "Bu referanduma % 88,82 oranında katılım olmuş ancak %35 evet %65 hayır
    oyuyla sonuçlanmıştır (www.tuik.gov.tr)."
- **Karar:** "ret" — iki kaynakta da "Türkiye'de yapılan tüm referandumlar içinde hayır çıkan tek
  referandum" (Karadeniz 2018) / "ret çıkan ilk halk oylaması" (Yavaşça 2023) olarak özellikle
  vurgulanıyor.
- **Uygulanan yöntem (emsal: `1961-07-referandum` kaydı) —** iki kaynak da yalnızca yüzde
  veriyor, ham evet/hayır sayısı iki kaynakla doğrulanamadığından `kayitli`, `kullanilan`,
  `gecerli`, `evet`, `hayir` alanlarının hepsi null bırakıldı; %35/%65/%88,82 bilgisi `not`
  alanına düz metin olarak yazıldı (spesifikasyon §5.4'te bu alanlar için ayrı bir yüzde-yedek
  tanımlı değil).
- `tutumlar` — Yavaşça (2023): "Değişiklik teklifinin Meclis oylamasında SHP karşı oy kullanmış;
  DYP ise oylamalara katılmamıştır" (TBMM oylaması) + "ANAP tek başına evet oyunu savunurken,
  muhalefet ise hayır oyunu savunmuştur... DYP ve SHP ise referandumu hükümete yönelik bir
  güvenoylaması haline dönüştürmek istemiştir" (referandum kampanyası) → anap:evet, shp:hayır,
  dyp:hayır. RP, MÇP, DSP'nin bu referandumdaki tutumu iki kaynakla doğrulanamadı, listeye
  yazılmadı.
- Erişim: 2026-09-22.

### 1989-10-cb-tbmm

- **[B] TBMM Tutanak Dergisi, Dönem 18, Cilt 33** (`www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/
  d18/c033/tbmm180330NN.pdf`, `curl`+`pdftotext -layout`, üç ayrı birleşim indirilip okundu):
  - **20. Birleşim (20.10.1989 Cuma), 1. tur:** "Cumhurbaşkanı seçimi için yapılan 1 inci tur
    oylamaya 285 üye katılmış" — Turgut özal: 247, Fethi Çelikbaş: 18. 2/3 çoğunluk (300)
    sağlanamadı.
  - **21. Birleşim (24.10.1989 Salı), 2. tur:** "Cumhurbaşkanı seçimi için yapılan 2 nci tur
    oylamaya 284 üye katılmış" — Turgut Özal: 256, Fethi Çelikbaş: 17, Boş: 9, Geçersiz: 2. Yine
    2/3 çoğunluk sağlanamadı; 3. tur 31 Ekim 1989'a ertelendi.
  - **24. Birleşim (31.10.1989 Salı), 3. tur:** "Cumhurbaşkanı seçimi için yapılan üçüncü tur
    oylamaya 285 üye katılmış" — Turgut Özal: 263 (ANAP sıralarından "Bravo" sesleri), Fethi
    Çelikbaş: 14. "Anayasanın 102 nci maddesinde üçüncü oylama için öngörülen salt çoğunluğu
    [226] sağlamış ve 263 oyla, Türkiye Cumhuriyetinin Sekizinci Cumhurbaşkanı seçilmiş
    bulunmaktadır."
- **İkinci kaynak: tccb.gov.tr, "Turgut ÖZAL" biyografi sayfası**
  (`tccb.gov.tr/cumhurbaskanlarimiz/turgut_ozal/`) — "31 Ekim 1989'da Türkiye Büyük Millet
  Meclisi tarafından Türkiye Cumhuriyeti'nin sekizinci cumhurbaşkanı olarak seçilen Özal 9 Kasım
  1989 günü bu görevine başladı" — tarih ve TBMM'ce seçilme birebir doğrulandı (tur sayısı ve oy
  dökümü bu sayfada yok, yalnızca TBMM tutanağında var).
- `secilen`: "Turgut Özal", `turSayisi`: 3.
- Erişim: 2026-09-22.

### 1986 ara seçimi (28 Eylül 1986) — eklenmedi

> **Görev 12'de (2026-09-26) eklendi** — bkz. "Görev 12 — Ara seçimler".

- **[B] Resmî Gazete, 12.7.1986 tarih 19162 sayı, Kanun No 3309** ("Türkiye Büyük Millet Meclisi
  XVII nci Dönem Milletvekili Ara Seçimi Hakkında Kanun",
  `www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc069/kanuntbmmc069/
  kanuntbmmc06903309.pdf`) — Madde 1: "oy verme günü 28 Eylül 1986 Pazar günüdür." Bu kanun
  yalnızca seçimin usulünü düzenliyor; il-parti-sandalye sonucu içermiyor.
- İl-parti-sandalye kırılımı için denenen kaynaklar:
  - TESAV, "Milletvekili Ara Seçim Sonuçları (1947...1986, 2003)"
    (`tesav.org.tr/wp-content/uploads/2017/03/17.-Milletvekili-Ara-Seçim-Sonuçları.pdf`) —
    404/yönlendirme sayfası döndü (dönem 1-3'ten beri bilinen, süregelen sorun).
  - YSK'nın ara seçim arşiv sayfası — JS kabuğu döndürdü, doğrudan PDF adı WebSearch ile de
    bulunamadı.
  - Yalnızca Vikipedi kaynaklı bir il-parti-sandalye dökümü bulunabildi (kullanıcı kararı gereği
    Vikipedi hiçbir zaman kaynak sayılmaz, ne tek ne ikinci kaynak).
- **Brief'in doğrudan öngördüğü gibi ("İki kaynakla doğrulanamayan ara seçim eklenmez (1986 ara
  seçimi dahil)")**, bu kayıt `veri/sandik.js`'e eklenmedi.
- **Görev 12'ye not:** 28 Eylül 1986 ara seçimi (17. Dönem, 10 il / 11 sandalye) — varlığı ve
  tarihi RG ile [B] doğrulandı; il-parti-sandalye kırılımı için resmî YSK kaynağı bulunamadı.
  Yeni bir turda `ysk.gov.tr/tr/ara-secimler-arsivi/...` benzeri bir arşiv adresi ya da
  Cumhuriyet/Milliyet gazete arşivi (haber veritabanı, ikinci kaynak) aranabilir.
- Erişim: 2026-09-22.

### Hükümetler 45-47

- **[B] TBMM, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*, Cilt 7** (12 Kasım 1979 –
  9 Kasım 1989; `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/
  7c3fc30f-4941-4abd-989e-c34eda60de81/content` — dönem 3'ün indirdiği kopya bu turda yeniden
  kullanıldı, `pdftotext -layout`). İçindekiler (satır 144, 150):
  - "45 I. Özal Hükümeti (13.12.1983-21.12.1987)" — Bakanlar Kurulu listesi (Başbakan Turgut ÖZAL
    dahil bütün bakanlar) satır satır okundu, hiçbir bakan başka parti etiketi taşımıyor →
    `partiler: ["anap"]`, koalisyon protokolü yok (tek parti kabine).
  - "46 II. Özal Hükümeti (21.12.1987-09.11.1989)" — aynı şekilde Bakanlar Kurulu tamamen ANAP'lı
    → `partiler: ["anap"]`.
  - **45'in bitiş nedeni (erken seçim):** II. Özal Hükümeti program görüşmesinde (Cilt 7),
    Özal'ın kendi konuşması: "Hatırladığım kadarıyla, referanduma giderken, erken seçim isteği
    muhalefetten geldi... 8 Kasım 1987 tarihinde seçimin yapılması için... Doğru Yol Partisi
    Grubu önerge verdi... Referandumdan, zaten bir gün evvel... 'Bizim söyleyeceğimiz önemli bir
    konu var ama şu anda söyleyemem' dedim; ertesi gün, sandıklar kapandığı saatte basın
    açıklamasını yaptım... erken seçim müjdesini orada verdim." (6 Eylül 1987 referandumunun
    ertesi günü, akşamı) → `bitisNedeni: "erken-secim"`.
- **[B] TBMM Cilt 8** (9 Kasım 1989 – 30 Ekim 1995;
  `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/bfe1edae-c4f8-4520-801f-92cefd45e253/
  content` — "Hükümetler, programları ve genel kurul görüşmeleri" koleksiyon öğesinin
  (`/items/2305701f-7bde-4344-bfbe-4166743fe1e2`) ORIGINAL paketindeki 10 cildin sekizincisi,
  `bundles`/`bitstreams` REST uç noktalarıyla bulundu — acikerisim.tbmm.gov.tr bağlantısı zaman
  zaman ECONNREFUSED veriyor, birkaç denemede başarılı oldu):
  - "47 Akbulut Hükümeti (09.11.1989-23.06.1991)" — Bakanlar Kurulu tamamen ANAP'lı →
    `partiler: ["anap"]`.
  - **46'nın bitiş nedeni (cumhurbaşkanı seçimi):** Akbulut Hükümeti'nin program görüşmesinde
    (13.11.1989, 31. Birleşim), Akbulut'un kendi konuşması: "9 Kasım 1989 günü Sayın
    Cumhurbaşkanı, yeni hükümeti kurma görevini şahsıma tevdi ettiler. 46'ncı Cumhuriyet
    Hükümetinin Başbakanı Sayın Turgut Özal'ın, 31 Ekim 1989 tarihinde Cumhurbaşkanlığına
    seçilmesi münasebetiyle... Hükümet listesini Sayın Cumhurbaşkanına sundum. Liste kabul
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

---

## Düzeltme turu 1 (2026-09-22) — controller incelemesi sonrası (SPEC ❌ → düzeltildi)

İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d4-verdict.md`. Bulgular:
**Critical #1** (1987/1988 referandumlarının [B] kaynaksız olması), **Critical #2** (1984/1989
yerel ulusal toplamların ikinci kaynaksız kalması), **Important** (Adana kırılımı, 1988 katılım
yüzdesi, büyükşehir ikinci kaynağı). Aşağıda her biri ayrı ayrı ele alınıyor.

### Critical #1 — 1987-09-referandum ve 1988-09-referandum: [B] YSK kaynağı bulundu

Önceki turda yalnızca haber siteleri + akademik makaleler kullanılmıştı ([B] değil). Bu turda
**YSK Halkoylaması Arşivi** (`ysk.gov.tr/tr/halkoylamasi-arsivi/2648`) tarayıcıyla açılıp
(ilk turda denenmemişti — bu bir eksiklikti) "İncele" bağlantılarının gerçek PDF adresleri DOM'dan
okundu:

- **[B] 6 Eylül 1987:** `https://www.ysk.gov.tr/doc/dosyalar/docs/1987Referandum/
  6-Eylul-1987-Halkoylamas%C4%B1.pdf` — 67 ilin tam tablosu (SANDIK SAYISI, SANDIK SEÇMEN
  LİSTESİNDE KAYITLI OLANLARIN SAYISI, KATILANLARIN SAYISI, GEÇERSİZ OY, GEÇERLİ OY, EVET, HAYIR)
  + ayrı bir "GÜMRÜK TOPLAM" satırı (sandık 45, seçmen/katılan 253.725, geçersiz 8.817, geçerli
  244.908, evet 106.044, hayır 138.864). `pdftotext -raw` ile okunup `araclar/topla.js` ile
  hesaplandı: 67 il toplamı kayıtlı 25.841.905, kullanılan 24.183.096, geçerli 23.102.948, evet
  11.605.417, hayır 11.497.531. **İl toplamı + gümrük toplamı** = kayıtlı 26.095.630, kullanılan
  24.436.821, geçerli 23.347.856, evet 11.711.461, hayır 11.636.395 — bu, önceki turda ikinci
  kaynak olarak kullanılan bianet.org rakamlarıyla (kullanılan, geçerli, evet, hayır) **birebir**
  eşleşti (4 ayrı sayının aynı anda tesadüfen eşleşmesi mümkün değil — YSK'nın resmî basın
  bültenindeki toplamın il+gümrük dahil olduğunu doğruluyor). `kayitli` alanı da artık [B]
  kaynaklı: 26.095.630 (önceki turda hiçbir kaynakta bulunamamıştı).
  - Uyuşmazlık: yok (evet+hayır=geçerli tam eşit: 11.711.461+11.636.395=23.347.856; geçerli+
    geçersiz=katılan tam eşit).
  - İkinci kaynak (artık doğrulama amaçlı): bianet.org + 2 akademik makale (Karadeniz 2018,
    Yavaşça 2023) — hepsi [B]'nin ürettiği rakamlarla birebir tutarlı.
- **[B] 25 Eylül 1988:** `https://www.ysk.gov.tr/doc/dosyalar/docs/1988Referandum/
  25-Eylul-1988-Halk-Oylamas%C4%B1.pdf` — aynı biçimde 67 il + ayrı "GÜMRÜK SONUÇLARI" sayfası
  (4 gümrük kapısı: Ankara-Esenboğa, Edirne-Kapıkule, İstanbul-Atatürk, İzmir-Adnan Menderes).
  `topla.js` ile yalnızca **67 il toplamı** (gümrük hariç) hesaplandı: kayıtlı 26.739.227,
  kullanılan 23.750.873, geçersiz 793.995, geçerli 22.956.878, evet 8.034.933, hayır 14.921.945.
  Katılım oranı = 23.750.873/26.739.227 = **%88,82** — bu, iki bağımsız akademik kaynağın
  (Yavaşça 2023, Karadeniz 2018) verdiği "%88,82" rakamıyla **virgülden sonra iki hane dahil
  birebir** eşleşti. Gümrük dahil edilseydi oran %88,84 çıkıyordu (akademik kaynaklarla
  uyuşmuyor) — bu yüzden 1988 için **il toplamı (gümrüksüz)** esas alındı; 1987'de tam tersi
  (gümrük dahil rakam bianet'le eşleşiyordu) — YSK'nın iki referandumun resmî basın bültenini
  farklı kapsamda hazırlamış olabileceği değerlendirildi, her ikisi de kendi ikinci kaynağıyla
  birebir eşleştiği için ayrı ayrı kabul edildi.
  - Uyuşmazlık: yok (evet+hayır=geçerli tam eşit: 8.034.933+14.921.945=22.956.878).
- Bu değişiklikle 1988 referandumunun katılım bilgisi artık `not`taki düz metin yerine gerçek
  `kayitli`/`kullanilan` sayılarından otomatik hesaplanıyor (kart artık `—` değil gerçek yüzde
  gösteriyor) — Important bulgusu (katılımYuzde) böylece aşıldı, ayrı bir alan eklemeye gerek
  kalmadı.
- Erişim: 2026-09-22.

### Critical #2 — 1984-03-yerel ve 1989-03-yerel: ulusal toplam ikinci kaynaksız kaldığı için null

Bağımsız, aynı ölçüyü (belediye meclisi) veren ikinci bir ulusal kaynak aranmaya devam edildi:
TÜİK'in aynı "Mahallî İdareler Seçimi Sonuçları" yayınının kendi açıklama sayfası ("Bu yayında
beş tablo yer almaktadır") incelendi — **belediye meclisi için hiçbir "Türkiye toplamı" tablosu
yok**, yalnızca Tablo 1 (İl Genel Meclisi) için RG kaynaklı ulusal toplam var; bu, DİE'nin bu
ölçü için hiç ulusal toplam yayımlamadığını gösteriyor. Ayrıca denendi: "1980 Askeri
Müdahalesinden Mahalli Seçimlere (1984 Mahalli İdareler Seçimleri Üzerine Bir Değerlendirme)"
(dergipark, Akademi Sosyal Bilimler Dergisi) — bu makale yalnızca **belediye başkanlığı**
(9.999.065 toplam oy, ANAP 4.323.420) ve **büyükşehir belediye başkanlığı** ulusal toplamlarını
veriyor, **belediye meclisi** için vermiyor — farklı bir ölçü olduğundan kullanılamadı. "1984
Yerel Seçimleri" (ResearchGate), "GENEL SEÇİMLER-YEREL SEÇİMLER İLİŞKİSİ" (acarindex) ve
"1973'ten Günümüze Yerel Seçim Sonuçları..." (dergipark) denendi — sırasıyla erişim engeli
(403), erişilemeyen/bozuk dosya ve boş metin çıkışı verdi.
- **Karar (controller talimatı gereği, koşulsuz uygulandı):** `1984-03-yerel` ve `1989-03-yerel`
  kayıtlarının `kayitli`, `kullanilan`, `gecerli` ve bütün `sonuc[].oy` alanları **null** yapıldı.
  Hangi partilerin seçime katıldığı (`parti`/`ad` alanları) korundu — bu bilgi [B] YSK
  kaynağından geliyor ve sayısal bir "eşleşme" gerektirmiyor. `sonuc` dizisindeki "Diğer" ve
  "Adana" ile ilgili özel satırlar da kaldırıldı (anlamsız hale geldiler — bkz. aşağıdaki Adana
  maddesi).
- Bu iki kaydın YSK il tablosundan `topla.js` ile hesaplanmış (ama artık siteye yazılmayan) ham
  değerleri ileride bir ikinci kaynak bulunursa kullanılmak üzere burada saklanıyor:
  - 1984: kayıtlı 11.981.906, kullanılan 10.499.457, geçerli 9.923.877 (parti oyları toplamına
    göre); ANAP 4.219.115, SODEP 2.314.738, DYP 1.163.110, HP 778.033, MDP 544.385, RP 479.977,
    Bağımsız 110.474, "Diğer/Adana" 314.045.
  - 1989: kayıtlı 18.091.625, kullanılan 14.067.380, geçerli 13.241.347; ANAP 3.112.613, DSP
    890.507, DYP 3.138.260, MÇP 445.065, RP 1.196.876, SHP 4.368.018, Bağımsız 20.543,
    "Diğer" (IDP) 69.465.
- Erişim: 2026-09-22.

### Important — 1984-03-yerel Adana ili kırılımı: artık ayrıca sorun değil

Critical #2'nin çözümüyle (bütün `sonuc[].oy` alanları null) Adana'nın bozuk parti kırılımı
sorunu da otomatik olarak ortadan kalktı — hiçbir partinin ulusal `oy` değeri artık Adana'nın
eksik/yanlış payını içermiyor. Adana'nın kendi SANDIK/SEÇMEN/OY KULLANAN/GEÇERLİ sütunları
(1.288/422.333/361.328/336.078) hâlâ tutarlı görünüyor ama bu ayrıntı artık siteye hiç
yazılmıyor.

### Important — 1988-09-referandum katılım yüzdesi

Critical #1'in çözümüyle (gerçek `kayitli`/`kullanilan` sayıları eklendi) bu bulgu da otomatik
çözüldü — `katilimYuzde` alanına ayrıca gerek kalmadı, katılım oranı artık ham sayılardan
hesaplanıyor (%88,82).

### Important — 1984/1989 büyükşehir: ikinci kaynak arandı, altısından beşi doğrulandı

**1984 (üçü de doğrulandı, [B] YSK + haber arşivi ikinci kaynak):**
- İstanbul: euronews.com, "Son 35 yılda İstanbul seçimlerinde en fazla oyu İmamoğlu aldı"
  (`tr.euronews.com/2019/06/24/...`) — "1984 seçimlerinde Anavatan adayı Bedrettin Dalan yüzde
  49,69 ile en fazla oyu almıştı." YSK hesabı: 939.190/1.890.000=%49,69 — **birebir**.
- Ankara: yeniankara.com.tr, "Ankara'nın ilk Büyükşehir Belediye Başkanı: Mehmet Altınsoy"
  (`yeniankara.com.tr/ankara/...-118679`) — "Mehmet Altınsoy... Ankara'da 391 bin 975 oy alarak
  yüzde 53,17'lik bir oranla seçimi kazandı." YSK: 391.975 oy (**birebir aynı sayı**), oran
  %53,16 — eşleşti (tolerans içinde).
- İzmir: ensonhaber.com, "Burhan Özfatura hayatını kaybetti" (`ensonhaber.com/burhan-ozfatura-
  hayatini-kaybetti-...-h1567378`) — "Özfatura... 1984 yerel seçimlerinde yüzde 47,9 oy alarak
  İzmir Büyükşehir Belediye Başkanlığına seçildi." YSK: 279.456/582.779=%47,96 — eşleşti
  (tolerans içinde).

**1989 (İstanbul ve İzmir doğrulandı, Ankara doğrulanamadı):**
- İstanbul: dunya.com köşe yazısı, "1989 ve 1994'te İstanbul belediye seçimlerinde yaşanan iki
  sürpriz" (`dunya.com/kose-yazisi/...-438457`) — "SHP adayı Nurettin Sözen yüzde 35.95 oyla
  seçimi kazanırken, ANAP adayı Dalan yüzde 26.12, DYP adayı Vural Arıkan yüzde 13.86, DSP adayı
  Mukbil Zırtıloğlu yüzde 12,22 ve Refah adayı Bahri Zengin yüzde 10.48 oy aldı." YSK'nın 5
  partisiyle (SHP %35,95, ANAP %26,12, DYP %13,86, DSP %12,22, RP %10,48) **birebir, 5 sayının
  tamamında** eşleşti. (Not: euronews.com'un aynı konudaki başka bir yazısı yanlışlıkla "%39,95"
  yazmış — dunya.com ve YSK'nın 5 partilik tam eşleşmesi karşısında bu tek, izole, muhtemelen
  yazım hatası olan rakam reddedildi.)
- İzmir: Nedim Yalansız, "İzmir'de 1989 Yerel Seçimleri", *Tarih Okulu Dergisi*
  (`dergipark.org.tr/tr/download/article-file/144651`, dipnot 50: `www.tuik.gov.tr`) —
  "Büyükşehir Belediye Başkanlığı Seçiminde 698.389 geçerli oyun, 365980'ini SHP(%52,4),
  169672'sini ANAP(%24,2), 97183'ünü DYP(%13,9), 39186'sını DSP(%5,6), 18815'ini RP(2,6)
  alıyordu." YSK ile **6 sayının tamamında birebir** eşleşti (geçerli oy + 5 parti).
- **Ankara: ikinci kaynak bulunamadı.** Murat Karayalçın'ın (SHP) kazandığı [B] YSK kaynağından
  kesin ama oy sayısı/yüzdesi hiçbir haber arşivi, akademik makale ya da ansiklopedi sayfasında
  (Hürriyet, Bilkent tez deposu, Vikipedi hariç taranan onlarca kaynak) bulunamadı. **Bu yüzden
  `1989-03-yerel` kaydının `buyuksehir` alanından `ankara` satırı kaldırıldı**, yalnızca
  `istanbul` ve `izmir` kaldı; `not` alanında Ankara'nın da SHP'de kaldığı [B] kaynağa dayanarak
  (ama sayısız) belirtildi.
- Erişim: 2026-09-22.
- **Controller düzeltmesi (dönem 4 yeniden incelemesi sonrası):** `buyuksehir` alanı yalnızca kazanan
  partiyi tutar, oy sayısı tutmaz. Kazanan için [B] YSK + ikinci kaynak: Hürriyet, Sedat Ergin,
  "Sosyal demokratlar Ankara'yı çok sever" (`hurriyet.com.tr/sosyal-demokratlar-ankarayi-cok-sever-204386`)
  — 1989'da SHP'nin Ankara Büyükşehir Belediyesi'ni sosyal demokratlara geri kazandırdığını yazıyor.
  → `ankara: { parti: "shp" }` geri eklendi. Aynı turda `sonuc`a YSK kaynağındaki "IDP" satırı `oy:null`
  ile geri eklendi (diğer partiler gibi); 1987/1988 referandum `not`larına sayıların kapsamı
  (gümrük dahil / il toplamı) yazıldı. Erişim: 2026-09-22.

### Testler ve denetim (düzeltme turu 1)

```
$ node --check veri/sandik.js && node --test "araclar/test/*.test.js" && node araclar/dogrula.js
...
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

## Görev 9 — Dönem 5 (1991–2000)

### 1991-10-genel

- **[B] TÜİK, *Milletvekili Genel Seçimleri 1923–2011*, Tablo 24 "TÜRKİYE"** (PDF s. 111–112,
  basılı s. 93–94, yerel kopya, `pdftotext -table -enc UTF-8`) — kayıtlı 29.979.123, kullanılan
  25.157.089 (katılım %83,9), geçerli oy (gümrük kapıları hariç) 24.371.474, gümrük kapıları
  geçerli oyu 45.192, **toplam geçerli oy 24.416.666** (veriye bu yazıldı — 1987 kaydındaki
  emsalle aynı; TBMM'nin yayımladığı oy oranları da bu paydayı kullanıyor: 6.600.726/24.416.666 =
  %27,03 = TBMM'nin verdiği oran), milletvekili sayısı 450.
  DYP 6.600.726 (%27,0) 178 sandalye, ANAP 5.862.623 (%24,0) 115, SHP 5.066.571 (%20,8) 88,
  RP 4.121.355 (%16,9) 62, DSP 2.624.301 (%10,8) 7, SP (Sosyalist Parti) 108.369 (%0,4) 0,
  Bağımsız 32.721 (%0,1) 0.
  **İç tutarlılık (hesaplandı):** parti+bağımsız oy toplamı = 24.416.666, toplam geçerliye tam
  eşit; sandalye toplamı 178+115+88+62+7 = 450, meclise tam eşit.
- **İkinci kaynak: TBMM seçim sorgusu** (`www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1991`,
  `curl -k`) — DYP 6.600.726 (%27,03), ANAP 5.862.623 (%24,01), SHP 5.066.571 (%20,75),
  RP 4.121.355 (%16,88), DSP 2.624.301 (%10,75), SP 108.369 (%0,44), BAĞIMSIZ 32.721 (%0,13).
  Yedi satırın tamamı TÜİK ile **birebir** eşleşti. Uyuşmazlık: yok.
- **`baraj: 10`** — [B] TÜİK Açıklama (PDF s. 13, basılı XIII): 2839 sayılı Kanun'la 1983'ten
  itibaren "ülke barajlı (%10) ve seçim çevresi barajlı nispi temsil (d'Hondt)"; aynı sayfa:
  "1987 ve 1991 milletvekili seçimlerinde… çifte barajlı d'Hondt seçim sisteminin yanısıra
  kontenjan uygulaması getirilmiş, 1991 seçimlerinde de seçmen yaşı 20, milletvekili sayısı 450
  olarak kabul edilmiştir."
- **`tarih`: 20 Ekim 1991** — [B] TÜİK Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler"
  (PDF s. 277, basılı s. 259): "18.Dönem 20 Ekim 1991".
- **SP = Sosyalist Parti** — [B] TÜİK "Simge ve Kısaltmalar" (PDF s. 7, basılı VII). Soyağacında
  yok (`veri/partiler.js`'teki `sp` id'si **Saadet Partisi**'nindir, 2001) ve oyu %1'in altında
  (%0,44) → spesifikasyon §5.2 "Diğer" kuralı gereği `{ad:"Diğer", partiSayisi:1, oy:108369}`.
- **`not` cümlesi:** "hiçbir parti tek başına hükümet kuracak çoğunluğu sağlayamadı" ifadesi
  [B] TBMM Cilt 8, VII. Demirel Hükümeti'nin DYP–SHP koalisyon protokolü girişinden (basılı
  s. 6532–6533): "20 Ekim 1991 Genel seçimleri, DYP'yi birinci parti olarak çıkarmış, fakat
  hiçbir siyasi gruba tek başına hükümet kurma olanağı vermemiştir."
- Erişim: 2026-09-22/23.

### 1995-12-genel

- **[B] TÜİK Tablo 24 "TÜRKİYE"** (aynı sayfalar) — kayıtlı 34.155.981, kullanılan 29.101.469
  (katılım %85,2), geçerli oy 28.040.392, gümrük kapıları 86.601, **toplam geçerli oy
  28.126.993**, milletvekili sayısı 550.
  RP 6.012.450 (%21,4) 158 sandalye, ANAP 5.527.288 (%19,6) 132, DYP 5.396.009 (%19,2) 135,
  DSP 4.118.025 (%14,6) 76, CHP 3.011.076 (%10,7) 49, MHP 2.301.343 (%8,2) 0, HADEP 1.171.623
  (%4,2) 0, YDH 133.889 (%0,5) 0, MİLLET PARTİSİ 127.630 (%0,5) 0, YDP 95.484 (%0,3) 0,
  İP 61.428 (%0,2) 0, YENİ PARTİ 36.853 (%0,1) 0, Bağımsız 133.895 (%0,5) 0.
  **İç tutarlılık (hesaplandı):** oy toplamı = 28.126.993 (toplam geçerliye tam eşit);
  sandalye toplamı 158+132+135+76+49 = 550 (meclise tam eşit).
- **İkinci kaynak: TBMM seçim sorgusu** (`p_secim_yili=1995`) — 13 satırın tamamı (RP, ANAP, DYP,
  DSP, CHP, MHP, HADEP, BAĞIMSIZ, YDH, MP, YDP, İP, YP) TÜİK ile **birebir** eşleşti.
  Uyuşmazlık: yok.
- **`baraj: 10` ve `meclis: 550`** — [B] TÜİK Açıklama (PDF s. 14, basılı XIV): "Kontenjan aday
  uygulaması ve seçim çevresi barajı, 1995 milletvekili seçimleri öncesi yapılan yasal değişikle
  kaldırılmıştır. Bunun yerine, ülke barajlı (%10) d'Hondt seçim sistemi getirilmiştir. Bunun
  yanısıra, 1987 yılında 450 olarak belirlenen milletvekili sayısı 550'ye çıkarılmış, seçmen yaşı
  18'e indirilmiş…" (kaydın `not` cümlesi birebir bu paragrafa dayanır). Tablo 24'ün
  "Milletvekili sayısı" satırı da 550 veriyor.
- **`tarih`: 24 Aralık 1995** — [B] TÜİK Ek-1: "19.Dönem 24 Aralık 1995".
- **"Diğer" (partiSayisi 3, oy 259.967):** MİLLET PARTİSİ 127.630 + YDP (Yeniden Doğuş Partisi)
  95.484 + YENİ PARTİ 36.853 — üçü de soyağacında yok ve üçünün de oyu %1'in altında.
  Kısaltmaların açılımı [B] TÜİK "Simge ve Kısaltmalar" (PDF s. 7). YDH ve İP soyağacında var
  (`ydh`, `ip92`) → %1'in altında olsalar da ayrı satırda tutuldular (spesifikasyon §5.2 "Diğer"
  yalnızca **soyağacında olmayan** küçük partiler için).
- Erişim: 2026-09-22/23.

### 1999-04-genel

- **[B] TÜİK Tablo 24 "TÜRKİYE"** (aynı sayfalar) — kayıtlı 37.495.217, kullanılan 32.656.070
  (katılım %87,1), geçerli oy 31.119.242, gümrük kapıları 65.254, **toplam geçerli oy
  31.184.496**, milletvekili sayısı 550.
  DSP 6.919.670 (%22,2) 136 sandalye, MHP 5.606.583 (%18,0) 129, FP 4.805.381 (%15,4) 111,
  ANAP 4.122.929 (%13,2) 86, DYP 3.745.417 (%12,0) 85, CHP 2.716.094 (%8,7) 0, HADEP 1.482.196
  (%4,7) 0, BBP 456.353 (%1,5) 0, ÖDP 248.553 (%0,8) 0, DTP 179.871 (%0,6) 0, LDP 127.174 (%0,4) 0,
  DP 92.093 (%0,3) 0, MİLLET PARTİSİ 79.370 (%0,3) 0, BP 78.922 (%0,2) 0, İP 57.607 (%0,2) 0,
  EMEP 51.756 (%0,2) 0, YDP 44.787 (%0,1) 0, SİP 37.680 (%0,1) 0, DEPAR 37.175 (%0,1) 0,
  DBP 24.620 (%0,1) 0, Bağımsız 270.265 (%0,9) **3 sandalye**.
  **İç tutarlılık (hesaplandı):** oy toplamı = 31.184.496 (toplam geçerliye tam eşit);
  sandalye toplamı 136+129+111+86+85+3 = 550 (meclise tam eşit).
- **İkinci kaynak: TBMM seçim sorgusu** (`p_secim_yili=1999`) — 21 satırın tamamı TÜİK ile
  **birebir** eşleşti. Uyuşmazlık: yok.
- **`baraj: 10`** — [B] TÜİK Açıklama (PDF s. 14): "1999, 2002, 2007 ve 2011 yıllarında yapılan
  milletvekili seçimlerinde de 1995 yılı seçimindeki uygulamalar aynen devam etmiştir."
- **`tarih`: 18 Nisan 1999** — [B] TÜİK Ek-1: "20.Dönem 18 Nisan 1999".
- **Soyağacı eşlemesi:** MHP→`mhp93`, CHP→`chp92`, DTP (Demokrat Türkiye Partisi)→`dtp97`,
  DP (Demokrat Parti, 1992)→`dp92`, İP→`ip92`, diğerleri doğrudan. Kısaltma açılımları [B] TÜİK
  "Simge ve Kısaltmalar" (PDF s. 7): DTP = Demokrat Türkiye Partisi, DP = Demokrat Parti,
  BP = Barış Partisi, DBP = Demokrasi ve Barış Partisi, DEPAR = Değişen Türkiye Partisi,
  SİP = Sosyalist İktidar Partisi, YDP = Yeniden Doğuş Partisi.
- **"Diğer" (partiSayisi 6, oy 302.554):** MİLLET PARTİSİ 79.370 + BP 78.922 + YDP 44.787 +
  SİP 37.680 + DEPAR 37.175 + DBP 24.620 — altısı da soyağacında yok ve altısının da oyu %1'in
  altında. ÖDP (`odp`), LDP (`ldp`), EMEP (`emep`), DP (`dp92`), İP (`ip92`), DTP (`dtp97`)
  soyağacında olduğu için %1'in altında olsalar da ayrı satırda.
- **`not` cümlesi:** "genel seçim ile mahalli idareler seçimi aynı gün yapıldı" — [B] TBMM Cilt 10,
  IV. Ecevit Hükümeti program metni: "18 Nisanda yapılacak milletvekili genel seçimlerine ve
  yerel yönetim seçimlerine…", "birlikte yapılacak olan genel ve yerel seçimler". CHP'nin baraj
  altında kalması kaydın kendi sayılarından görülüyor (%8,7 < %10, 0 sandalye).
- Erişim: 2026-09-22/23.

### 1993-05-cb-tbmm

- **[B] TBMM Tutanak Dergisi, Dönem 19, Cilt 35, 103. Birleşim (16.5.1993 Pazar)**
  (`www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/d19/c035/tbmm19035103.pdf`, basılı s. 507–508):
  Tasnif Komisyonu tutanağı — "Cumhurbaşkanı Seçimi için yapılan **üçüncü tur** oylamaya
  **431 üye** katılmış…" Süleyman Demirel **244**, Kâmran İnan 94, Lütfi Doğan 47, İsmail Cem 27,
  Boş 19. Başkan: "…Süleyman Demirel, Anayasanın 102 nci maddesinde üçüncü oylama için öngörülen
  salt çoğunluğu sağlamış, 244 oyla Türkiye Cumhuriyetinin 9 uncu Cumhurbaşkanı seçilmiş
  bulunmaktadır."
  Aynı birleşimin "Geçen Tutanak Özeti"nde (s. 504): "Cumhurbaşkanı seçimi için yapılan **ikinci
  tur** oylamada, gösterilen adaylardan hiçbiri, Anayasanın 102 nci maddesinde öngörülen üçte iki
  çoğunluğu sağlayamadığından…" → ilk iki tur başarısız, `turSayisi: 3`.
  (İlgili birleşimler: 101. Birleşim 8.5.1993 ve 102. Birleşim 12.5.1993 — ikisinin de gündeminde
  "Cumhurbaşkanı Seçimi" var; kayda yalnızca tur sayısı yazıldı, tur tarihleri yazılmadı.)
- **İkinci kaynak: Cumhurbaşkanlığı (tccb.gov.tr), Süleyman Demirel sayfası** — "Demirel was
  elected as the ninth President of Turkey by the TBMM on 16 May 1993 and left the Office after
  his seven year term on 16 May 2000." Tarih, seçen merci (TBMM) ve sıra (9.) birebir eşleşti.
  Uyuşmazlık: yok.
- Erişim: 2026-09-22/23.

### 2000-05-cb-tbmm

- **[B] TBMM Tutanak Dergisi, Dönem 21, Cilt 32, 90. Birleşim (5.5.2000)**
  (`www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/d21/c032/tbmm21032090.pdf`): Başkan "Şimdi,
  **üçüncü tur** oylamayı yapacağız" dedikten sonra Tasnif Komisyonu tutanağı —
  "Cumhurbaşkanlığı için yapılan üçüncü oylamaya **533 üye** katılmış…": Ahmet Necdet Sezer
  **330**, Nevzat Yalçıntaş 113, Sadi Somuncuoğlu 43, Rasim Zaimoğlu 24. Başkan: "…Anayasa
  Mahkemesi Başkanı Sayın Ahmet Necdet Sezer, Anayasanın 102 nci maddesine göre üçüncü oylama
  için öngörülen salt çoğunluğu sağlamış ve 330 oyla, Türkiye Cumhuriyetinin 10 uncu
  Cumhurbaşkanı seçilmiş bulunmaktadır." Ayrıca: "Sayın Cumhurbaşkanının andiçme töreni, Genel
  Kurulun **16 Mayıs 2000** tarihli birleşiminde yapılacaktır." Aynı birleşimin geçen tutanak
  özeti ikinci turun 2/3 çoğunluğu sağlayamadığını yazıyor → `turSayisi: 3`.
- **İkinci kaynak: TBMM Kararı No. 695, Kabul tarihi 5.5.2000, Resmî Gazete 6.5.2000 / 24041**
  (`www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc084/karartbmmc084/karartbmmc08400695.pdf`)
  — "Türkiye Büyük Millet Meclisi Genel Kurulunun 5.5.2000 tarihli 90 inci Birleşiminde, Anayasa
  Mahkemesi Başkam Necdet Sezer (330) oy ile Türkiye Cumhurbaşkanı seçilmiştir." Tutanaklar
  dipnotu: Cilt 32, Birleşim **88, 89, 90** (üç tur). Tarih ve oy sayısı birebir eşleşti.
  Uyuşmazlık: yok.
- **Dönem kararı:** 2000 CB seçimi 5 Mayıs 2000'de yapıldığı (andiçme 16 Mayıs 2000) için
  1991–2000 aralığına düşüyor → dönem 5'e eklendi.
- Erişim: 2026-09-23.

### Hükümetler 48-57

Ölçüt (dönem 3'te seçilip bütün dönemlerde uygulanan): `baslangic`/`bitis` = TBMM
*Hükümetler, Programları ve Genel Kurul Görüşmeleri* cildinin içindekiler/başlık satırındaki
kuruluş–bitiş tarihleri; `partiler` ve `tip` = aynı cildin **Bakanlar Kurulu listesindeki parti
etiketleri** ve varsa **koalisyon protokolü** başlığı; `bitisNedeni` = aynı cildin program
görüşmeleri / Cumhurbaşkanlığı tezkereleri.

**Kaynak ciltler:**
- **[B] Cilt 8** (9 Kasım 1989 – 30 Ekim 1995) — `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/bfe1edae-c4f8-4520-801f-92cefd45e253/content`
  (dönem 4'ün indirdiği kopya).
- **[B] Cilt 9** (30 Ekim 1995 – 11 Ocak 1999) — bitstream
  `ed9cef72-34f2-44bc-9a66-e77e6c0aab99` (dosya adı `201400891-c9.pdf`). **Görev 1'in "cilt 9
  adresi yok" notu düzeltildi:** cilt 9 ve 10, `hukumetler_cilt_9.pdf` gibi doğrudan bir adresle
  değil, koleksiyon öğesinin (`/items/2305701f-7bde-4344-bfbe-4166743fe1e2`) ORIGINAL
  paketindeki bitstream listesinden
  (`/core/bundles/88774567-0d57-4e64-8a8e-bf03cfb196f7/bitstreams?size=50`) bulunuyor.
- **[B] Cilt 10** (11 Ocak 1999 – ) — bitstream `1bb4bf9a-a93e-40ff-852c-8d5d07c890b7`
  (`201400892-c10.pdf`).

**İçindekiler satırları (başlangıç/bitiş tarihleri, basılı sayfa):**
- Cilt 8: "48 I. Yılmaz Hükümeti (23.06.1991-20.11.1991) … 6407"; "49 VII. Demirel Hükümeti
  (20.11.1991-25.06.1993) … 6529"; "50 I. Çiller Hükümeti (25.06.1993-05.10.1995) … 6717";
  "51 II. Çiller Hükümeti (05.10.1995-30.10.1995) … 6919".
- Cilt 9: "52 III. Çiller Hükümeti (30.10.1995-06.03.1996) … 7063"; "53 II. Yılmaz Hükümeti
  (06.03.1996-28.06.1996) … 7205"; "54 Erbakan Hükümeti (28.06.1996-30.06.1997) … 7395";
  "55 III. Yılmaz Hükümeti (30.06.1997-11.01.1999) … 7567".
- Cilt 10: "56 IV. Ecevit Hükümeti (11.01.1999-28.05.1999) … 7767"; "57 V. Ecevit Hükümeti
  (28.05.1999-18.11.2002) … 7875".
- **Zincirleme:** 47 (bitiş 23.06.1991) → 48 → 49 → 50 → 51 → 52 → 53 → 54 → 55 → 56 → 57,
  her birinin bitişi bir sonrakinin başlangıcına tam eşit; `dogrula.js` boşluk uyarısı vermiyor.

**Parti bileşimi ve `tip` (kabine bileşimi ölçütü):**
- **48 (Mesut Yılmaz):** Cilt 8 s. 6408–6409 Bakanlar Kurulu listesinde hiçbir bakan parti
  etiketi taşımıyor (tek parti kabinesi; birkaç bakan "TBMM dışından"), koalisyon protokolü yok →
  `partiler: ["anap"]`. 1987 seçiminde ANAP 292/450 (meclis çoğunluğu) → `tip: "tek-parti"`.
- **49 (Demirel):** Cilt 8 s. 6530–6531'de her bakanın yanında parti etiketi var (DYP/SHP),
  ardından "Koalisyon Protokolü (DYP - SHP)" → `partiler: ["dyp","shp"]`, `tip: "koalisyon"`.
  `not`taki "19 Kasım 1991 tarihli protokol" ifadesi, 50'nin protokol girişinde geçen "önceki
  DYP-SHP Ortak Hükümetinin oluşumunu düzenleyen 19 Kasım 1991 tarihli Protokolü" ibaresinden.
- **50 (Çiller):** Cilt 8 s. 6718–6721 listesinde DYP ve SHP etiketleri; s. 6721'de "Koalisyon
  Protokolü (DYP - SHP)" → `partiler: ["dyp","shp"]`, `tip: "koalisyon"`. Aynı listede 1994 sonu
  ve 1995 tarihli değişikliklerde SHP'li bakanların yerine geçenler **CHP** etiketli (ör. "Hikmet
  ÇETİN (Gaziantep, CHP) 27.12.1994-27.03.1995") — kaydın `not` cümlesi buna dayanıyor.
  Kuruluş bileşimi DYP+SHP olduğu için `partiler` iki partiyle yazıldı.
- **51 (Çiller):** Cilt 8 s. 6920–6921 listesinde **hiç parti etiketi yok** (tek parti kabinesi).
  Partisi ve azınlık niteliği [B] olarak Cilt 9'daki III. Çiller program görüşmesinden (basılı
  s. 7113): "Doğru Yol Partisi, Hükümetin istifasından sonra, Sayın Başbakana Cumhurbaşkanımız
  tarafından görev verilmesi üzerine, haliyle, bir azınlık hükümeti kurma çabası içerisine
  girecekti… bu hükümet kurulmuştur; ancak, Türkiye Büyük Millet Meclisinde güvenoyu
  alamamıştır." → `partiler: ["dyp"]`, `tip: "azinlik"` (DYP 1991'de 178/450).
- **52 (Çiller):** Cilt 9 s. 7064–7065 listesinde DYP ve CHP etiketleri; s. 7066'da "Koalisyon
  Protokolü (DYP - CHP) — Yazılı protokol metni yoktur…" → `partiler: ["dyp","chp92"]`,
  `tip: "koalisyon"`; `not`taki "yazılı metni olmayan" ifadesi buradan.
- **53 (Yılmaz):** Cilt 9 s. 7208'de "Koalisyon Protokolü (ANAP-DYP)"; Bakanlar Kurulu listesinde
  ANAP ve DYP etiketleri → `partiler: ["anap","dyp"]`, `tip: "koalisyon"`.
- **54 (Erbakan):** Cilt 9 s. 7398'de "Koalisyon Protokolü (RP-DYP)"; listede RP ve DYP
  etiketleri → `partiler: ["rp","dyp"]`, `tip: "koalisyon"`.
- **55 (Yılmaz):** Cilt 9 s. 7571'de "Koalisyon Protokolü (ANAP-DSP-DTP)" ve girişi: "Anavatan
  Partisi, Demokratik Sol Parti ve Demokrat Türkiye Partisi…"; Bakanlar Kurulu listesinde 21 ANAP,
  11 DSP, 6 DTP etiketi (bir bakan "Bağımsız") → `partiler: ["anap","dsp","dtp97"]`,
  `tip: "koalisyon"`. Kaydın `not`undaki "üç partili azınlık hükümeti" ifadesi [B] Cilt 10'daki
  Ecevit'in program konuşmasından: "Üç partili bir azınlık hükümeti olmasına karşın, 55'inci
  hükümet…". (Kullanıcı kararı gereği `tip` ölçütü kabine bileşimi olduğundan `koalisyon` yazıldı.)
- **56 (Ecevit):** Cilt 10 s. 7768–7769 listesinde hiç parti etiketi yok. Partisi ve niteliği
  [B] olarak Ecevit'in kendi program konuşmasından: "Anavatan Partisi ile Doğru Yol Partisinin
  dışarıdan destek sözü verdikleri **Demokratik Sol Parti azınlık hükümeti kurulmuştur.**" →
  `partiler: ["dsp"]`, `tip: "azinlik"` (DSP 1995'te 76/550).
- **57 (Ecevit):** Cilt 10 s. 7875'te bölüm başlığı "V. Ecevit Hükümeti (**DSP-MHP-ANAP
  Koalisyonu**)"; Bakanlar Kurulu listesinde 14 ANAP, 11 DSP, 11 MHP etiketi →
  `partiler: ["dsp","mhp93","anap"]`, `tip: "koalisyon"`.

**Bitiş nedenleri:**
- **47 → `istifa` (dönem 4'ten devralınan boşluk dolduruldu):** [B] Cilt 8 s. 6410–6411,
  TBMM Tutanak Dergisi Dönem 18 Cilt 61 Birleşim 129 (Olağanüstü, 30.06.1991) — Cumhurbaşkanlığı
  tezkeresi: "Başbakan Erzincan Milletvekili Sayın Yıldırım Akbulut Başbakanlık görevinden
  **istifa etmiş ve istifası kabul olunmuştur.**" (Turgut Özal). Ertesi tezkere (17 Haziran 1991):
  "İlgi yazı ile istifası bildirilmiş olan Bakanlar Kurulunun yeniden teşkili için… Rize
  Milletvekili ve **Anavatan Partisi Genel Başkanı** A. Mesut Yılmaz'ı görevlendirdim." — 48'in
  `not` cümlesi de buna dayanır. (ANAP kurultayı tarihi/ayrıntısı yalnızca haber ve ansiklopedi
  kaynaklarında bulunabildiği için veriye **yazılmadı**; yalnızca "istifa" olgusu [B] kaynaklıdır.)
- **48 → `secim`:** Cilt 8'deki DYP–SHP koalisyon protokolü girişi (s. 6532): "20 Ekim 1991
  Millet Meclisi Genel seçimlerinin kesin sonuçları ilan edilmiş… Sayın Cumhurbaşkanı… DYP Genel
  Başkanı Sayın Demirel'i hükümet kurmakla görevlendirmiştir." **Sınırlılık:** 1991 seçiminin
  "yenileme/erken seçim" olduğunu söyleyen bir [B] ifade bu turda bulunamadı (Meclis'in yenileme
  kararına dair Resmî Gazete metnine erişilemedi; resmigazete.gov.tr arşivi `curl` ile yanıt
  vermedi) → daha güçlü olan `erken-secim` yerine `secim` yazıldı.
- **49 → `cumhurbaskani-secimi`:** [B] Cilt 8 s. 6733, Çiller'in program konuşması: "Yedi kez
  Başbakan olarak ülkemize büyük hizmetler vermiş bulunan Sayın Süleyman Demirel'in ülkemizin
  **Cumhurbaşkanlığına seçilişi ertesinde** DYP Genel Başkanlığı'nı üstlenerek, yeni Hükümeti
  kurmakla görevlendirildim."
- **50 → `istifa`:** [B] Cilt 9, III. Çiller program görüşmesi (basılı s. 7067 ve 7113):
  "**20 Eylül 1995 tarihinde 50'nci Hükümetin istifasıyla** ve 51'inci Hükümetin Türkiye Büyük
  Millet Meclisinden güvenoyu alamaması nedeniyle…"
- **51 → `guvensizlik`:** aynı cümle — "51'inci Hükümetin Türkiye Büyük Millet Meclisinden
  **güvenoyu alamaması**".
- **52 → `erken-secim`:** [B] Cilt 9 s. 7114: "**24 Aralıkta seçimlerin yenilenmesine karar alan
  bir meclis** ve siyasî partilerin durumu nedeniyle…"; aynı görüşmede: "27.10.1995 tarih ve 2125
  sayılı Yasayla, 24 Aralık 1995 tarihinde seçimlere karar verdik. Ayrıca, aynı gün, seçimlerin
  yenilenmesine karar aldık." 52'nin kendisi de aynı görüşmede "esas itibariyle bir seçim
  hükümeti" olarak tanımlanıyor (s. 7113).
- **53 → `istifa`:** [B] Cilt 9 s. 7452, 54. Hükümet'in program görüşmesi: "Türk siyasî tarihinde
  ilk defa bir hükümet, **yargı kararıyla, güvenoyu almadığı için istifa etmek zorunda
  kalmıştır.** İstifa eden bir hükümetin yerine bugün, çoğunluğa dayanan bir Hükümet kurulmuştur.
  Elbette, burada Anayasa Mahkemesinin tarafsız ve adil tutumunu da zikretmek istiyorum."
- **54 → `istifa`:** [B] Cilt 9, 55. Hükümet'in program görüşmesi — "bu Hükümet, bir süre önce
  işbaşında bulunan **Refahyol Hükümetinin, çok özel koşullarda istifa ederek**, Hükümeti
  boşaltmak zorunda kalması sonucunda ortaya çıkmıştır" ve ayrı bir konuşmacı: "bugünkü Hükümet,
  **Refah Partisi ve Doğru Yol Partisi Hükümetinin istifasından sonra** kurulmuştur." (Kaydın
  `not` cümlesi "olağandışı koşullarda istifa" ifadesiyle sınırlı tutuldu; 28 Şubat süreciyle
  nedensel bağ kurmak yorum olacağından yazılmadı.)
- **55 → `guvensizlik`:** [B] Cilt 10, Ecevit'in 56. Hükümet program konuşması: "**55'inci
  cumhuriyet hükümetinin güven oylaması ile düşürülmesi** üzerine ortaya çıkan hükümet sorunu…"
- **56 → `erken-secim`:** [B] Cilt 10, Ecevit'in kendi konuşması: "Büyük Millet Meclisimiz…
  nisan ayında seçimlerin yapılmasını kararlaştırmıştı… Tabiî, **18 Nisanda - yani, bir erkene
  alınmış - seçim** yapılmalı mıydı…" Aynı konuşma 56'nın "yaklaşan seçimlerle sınırlı bir ömrü
  olacağı"nı söylüyor; bir başka konuşmacı: "56'ncı hükümet, **18 Nisan seçimlerine kadar** görev
  yapacaktır."
- **57 → `erken-secim`:** [B] Cilt 10, 58. Hükümet (Gül) program görüşmesi: "**21'inci Dönem
  Meclisi erken seçim kararı aldıktan sonra**, erken seçimin ertelenmesinde…"; seçim tarihi
  (3 Kasım 2002) [B] TÜİK Ek-1 listesinde. 57'nin `baslangic`'ı 1991–2000 aralığında olduğu için
  kayıt dönem 5'te yazıldı; `bitis` tarihi (18.11.2002) dönem 6'ya taşar.
- Erişim: 2026-09-22/23.

---

### 1994-03-yerel

> **2026-09-26:** ülke geneli sayılar YSK'nın Resmî Gazete ilanından yazıldı (kullanıcı kararı) — bkz. "Görev 12 — 1955 yerel seçimi ve 1984–1999 yerel ülke geneli".

- **Envanter [B]:** YSK Mahalli İdareler Genel Seçimleri Arşivi (`ysk.gov.tr/tr/mahalli-idareler-genel-secimleri-arsivi/2650`,
  tarayıcıyla açılıp DOM'dan okundu — sayfa JS kabuğu olduğu için `curl` yalnızca boş kabuk
  döndürüyor): "**27 Mart 1994** Mahalli İdareler Genel Seçimleri". Seçim sayfası
  (`/tr/27-mart-1994-mahalli-idareler-genel-secimi/2804`) dört PDF veriyor: İl Genel Meclisi
  Üyeliği, Büyükşehir Belediye Başkanlığı, Belediye Başkanlığı, Belediye Meclis Üyeliği.
- **[B] YSK, "27 MART 1994 BELEDİYE MECLİS ÜYELİĞİ SEÇİMİ SONUÇLARI"**
  (`ysk.gov.tr/doc/dosyalar/docs/Mahalli/1994/KesinSecimSonuclari/1994-Belediye-Meclis-Uyeligi-Secimleri-Sonucu.pdf`,
  `pdftotext -table`, 3 sayfa, **76 ilin tamamı** — 1994'te Türkiye'de 76 il vardı). Türkiye
  toplamı satırı **yok**; `araclar/topla.js` ile hesaplandı ("hesaplandı"):
  kayıtlı 23.305.825, kullanılan 21.099.154, geçerli 19.730.006;
  ANAP 4.512.609, RP 3.783.195, DYP 3.718.962, SHP 3.302.166, DSP 1.642.727, MHP 1.501.038,
  CHP 847.672, BBP 211.021, DP 65.062, YDP 34.664, MİLLET PARTİSİ 34.217, İP 33.056,
  SBP 21.866, Bağımsız 21.037. (Parti oyları toplamı 19.729.292 — kaynağın kendi "geçerli oy
  toplamı" sütun toplamından **714 oy** eksik; fark tek bir ilden, ANTALYA'dan geliyor: o ilin
  satırında bağımsızlar hücresi boş ve parti toplamı ilin geçerli oyundan 714 eksik. Oran
  %0,004 — tolerans içinde, kaynağın kendi iç tutarsızlığı.)
- **Ulusal toplam veriye YAZILMADI (null).** Spesifikasyon §8.1: il tablosundan hesaplanan ulusal
  toplam **aynı ölçüyü veren bağımsız bir ikinci ulusal kaynakla** eşleşmek zorunda. Aranan ve
  bulunamayan kaynaklar: TÜİK'in `1994Mahalli-Tuik.pdf` benzeri yayını (1989 için var, 1994/1999
  için yok — YSK sunucusu SPA kabuğu döndürüyor); TÜİK 2009 mahalli idareler CD'si
  (`tuik.gov.tr/indir/secim_2009/aklama.pdf`) — açıklamasında "tablolarında yer alan Türkiye
  toplam sonuçları… YSK tarafından Resmi Gazete'de ilan edilen sonuçlardan" alındığı yazıyor ama
  **çok yıllı karşılaştırma tablosu yalnızca İl Genel Meclisi için** (Tablo 1.1: 1984, 1989, 1994,
  1999, 2004, 2009); Belediye Meclisi tablosu (4.1) yalnızca 2009'u kapsıyor. Resmî Gazete arşivi
  (`resmigazete.gov.tr/arsiv/…`) `curl` ile yanıt vermedi. Dönem 4'ün 1984/1989 kayıtlarında
  uygulanan (ve controller incelemesiyle onaylanan) emsale uyularak `kayitli`/`kullanilan`/
  `gecerli` ve bütün `sonuc[].oy` alanları **null** yapıldı; hangi partilerin seçime katıldığı
  (YSK tablosunun sütun başlıkları) korundu, satır sırası yukarıdaki hesaplanmış toplamlara göre.
- **Kısaltmalar:** MİLLET PARTİSİ = Millet Partisi, YDP = Yeniden Doğuş Partisi (ikisi de [B]
  TÜİK "Simge ve Kısaltmalar", PDF s. 7); **SBP** TÜİK'in kısaltma listesinde yok, açılımı için
  [B] kaynak bulunamadı → veriye `ad:"SBP"` olarak, kaynaktaki haliyle yazıldı.
  Soyağacında olmayanlar: Millet Partisi, Yeniden Doğuş Partisi, SBP.
- Erişim: 2026-09-23.

### 1994-03-yerel — büyükşehir (İstanbul, Ankara, İzmir)

- **[B] YSK, "27 MART 1994 BÜYÜKŞEHİR BELEDİYE BAŞKANLIĞI SEÇİMİ SONUÇLARI"**
  (`…/1994/KesinSecimSonuclari/1994-Buyuksehir-Belediye-Baskanligi-Secimleri-Sonucu.pdf`,
  `pdftotext -table`, 16 büyükşehir). Sütun başlıkları alfabetik: ANAP, BBP, CHP, DP, DSP, DYP,
  İP, MİLLET PARTİSİ, MHP, RP, SBP, SHP, YDP, BAĞIMSIZLAR. Üç şehrin satır toplamı, kaynağın
  kendi "GEÇERLİ OY TOPLAMI" sütunuyla **tam eşit** çıktı (sütun eşlemesinin doğruluk denetimi):
  - **İSTANBUL** (geçerli 3.865.126): **RP 973.704**, ANAP 855.897, SHP 784.693, DSP 597.461,
    DYP 478.612, MHP 72.121, CHP 54.028, … → kazanan **RP**.
  - **ANKARA** (geçerli 1.439.838): **RP 393.623**, SHP 387.152, ANAP 268.519, DYP 119.824,
    DSP 111.740, MHP 104.304, … → kazanan **RP**.
  - **İZMİR** (geçerli 1.061.184): **DYP 294.647**, SHP 281.721, ANAP 208.607, DSP 159.394,
    RP 74.120, CHP 26.909, … → kazanan **DYP**.
- **İkinci kaynaklar (haber arşivi):**
  - İstanbul + Ankara: Medyascope, "Gomaşinen (25): 27 Mart 1994 yerel seçimleri: Refah ve
    Erdoğan'ın zaferi" — "6 Büyükşehir kazanmış: **İstanbul, Ankara**, Diyarbakır, Erzurum,
    Konya, Kayseri" (Refah Partisi). TRT Haber, "Geçmişten günümüze İstanbul seçimleri" —
    "Refah Partisi'nin adayı Recep Tayyip Erdoğan… seçimi kazanmayı başardı."
  - İzmir: Karar, "Eski İzmir Büyükşehir Belediye Başkanı Burhan Özfatura vefat etti" —
    "**1994'te Doğru Yol Partisi'nden (DYP)** yeniden aday oldu ve İzmir Büyükşehir Belediye
    Başkanlığı görevine ikinci kez seçildi." YSK'nın DYP sütunundaki birincilikle eşleşti.
  - Uyuşmazlık: yok. (`buyuksehir` yalnızca kazanan partiyi tutar; oy sayısı yazılmaz.)
- Erişim: 2026-09-23.

### 1999-04-yerel

> **2026-09-26:** ülke geneli sayılar YSK'nın Resmî Gazete ilanından yazıldı (kullanıcı kararı) — bkz. "Görev 12 — 1955 yerel seçimi ve 1984–1999 yerel ülke geneli".

- **Envanter [B]:** YSK Mahalli İdareler arşivi: "**18 Nisan 1999** Mahalli İdareler Genel
  Seçimleri" (`/tr/18-nisan-1999-mahalli-idareler-genel-secimi/2805`). Genel seçimle aynı gün
  yapıldığı ayrıca [B] TBMM Cilt 10'da (IV. Ecevit Hükümeti program metni): "18 Nisanda yapılacak
  milletvekili genel seçimlerine ve yerel yönetim seçimlerine…".
- **[B] YSK, "18 NİSAN 1999 BELEDİYE MECLİS ÜYELİĞİ SEÇİMİ SONUCU"**
  (`ysk.gov.tr/doc/dosyalar/docs/Mahalli/1999/KesinSecimsonuclar/Belediye-Meclis-Uyeligi-Secimleri-Sonucu.pdf`)
  — **kaynak eksik:** PDF yalnızca **76 il** içeriyor; 1999'da Türkiye'de 80 il vardı ve
  **HATAY, HAKKÂRİ, TRABZON, TUNCELİ** satırları belgede hiç yok (`-table`, `-layout` ve `-raw`
  modlarının üçünde de yok; aynı seçimin İl Genel Meclisi PDF'inde 79 il var). Brief'in kuralı
  gereği ("bir ilin kırılımı okunamıyorsa onu 'Diğer'e gömme — etkilenen değerler null olur")
  ülke geneli sayıların tamamı **null** yapıldı.
- Yine de kayıt altına alınması için, **76 ilden** hesaplanan (eksik, veriye yazılmamış) toplamlar:
  kayıtlı 27.833.812, kullanılan 23.735.076, geçerli 22.435.196; FP 4.109.576, ANAP 3.774.759,
  DSP 3.696.999, MHP 3.540.964, CHP 2.942.754, DYP 2.802.292, HADEP 771.173, BBP 297.388,
  DTP 149.417, ÖDP 148.176, MİLLET PARTİSİ 35.631, BP 34.888, DP 32.783, EMEP 20.500,
  LDP 20.230, İP 20.024, Bağımsız 16.369, YDP 13.270, DBP 3.267, DEPAR 3.221, SİP 1.046,
  DEHAP 115. (Bu eksik toplamlar yalnızca `sonuc` satırlarının **sıralaması** için kullanıldı;
  hiçbiri veriye yazılmadı. 76 ilin 4'ünde kaynağın kendi geçerli-oy sütunu parti toplamından
  27–227 oy farklı — kaynağın iç tutarsızlığı, oran %0,001–%0,1.)
- **Kısaltmalar** [B] TÜİK "Simge ve Kısaltmalar" (PDF s. 7): BP = Barış Partisi, DBP = Demokrasi
  ve Barış Partisi, DEPAR = Değişen Türkiye Partisi, SİP = Sosyalist İktidar Partisi,
  YDP = Yeniden Doğuş Partisi, MİLLET PARTİSİ = Millet Partisi. Soyağacında olmayanlar: Millet
  Partisi, Barış Partisi, Demokrasi ve Barış Partisi, Değişen Türkiye Partisi, Sosyalist İktidar
  Partisi, Yeniden Doğuş Partisi.
- Erişim: 2026-09-23.

### 1999-04-yerel — büyükşehir (İstanbul, Ankara, İzmir)

- **[B] YSK, "18 NİSAN 1999 BÜYÜKŞEHİR BELEDİYE BAŞKANLIĞI SEÇİMİ SONUÇLARI"**
  (`…/1999/KesinSecimsonuclar/Buyuksehir-Belediye-Baskanligi-Secimleri-Sonucu.pdf`,
  `pdftotext -table`). Üç şehrin satır toplamı kaynağın kendi geçerli oy sütunuyla **tam eşit**:
  - **İSTANBUL** (geçerli 4.368.656): **FP 1.202.050**, ANAP 977.920, DYP 882.923, CHP 607.895,
    MHP 320.734, DSP 165.114, … → kazanan **FP**.
  - **ANKARA** (geçerli 1.602.528): **FP 541.515**, CHP 512.083, MHP 189.400, DSP 169.490,
    ANAP 106.540, DYP 42.128, … → kazanan **FP**.
  - **İZMİR** (geçerli 1.206.091): **DSP 367.553**, ANAP 230.673, CHP 217.337, DYP 197.169,
    MHP 82.140, HADEP 45.559, FP 41.200, … → kazanan **DSP**.
- **İkinci kaynaklar:**
  - Ankara: Sputnik Türkiye / anlatilaninotesi.com.tr, "Ankara'da belediye başkanlığı yarışında
    önceki 5 seçimin karnesi" — 1999 için kayıtlı 1.924.115, oy kullanan 1.690.527, geçerli
    1.602.528, **Fazilet Partisi'nden Melih Gökçek 541.515**, CHP (Murat Karayalçın) 512.083,
    MHP 189.400, DSP 169.490. YSK ile **yedi sayının tamamında birebir** eşleşti — bu aynı zamanda
    `-table` sütun eşlemesinin bağımsız doğrulaması oldu. Uyuşmazlık: yok.
  - İstanbul: TRT Haber, "Geçmişten günümüze İstanbul seçimleri" — "**Fazilet Partisi'nin adayı
    Ali Müfit Gürtuna** yüzde 27,52 oy ile büyükşehir belediyesinin dördüncü başkanı oldu."
    (YSK: 1.202.050/4.368.656 = %27,52 — birebir.)
  - İzmir: Hürriyet, "Ahmet Piriştina vefat etti" — "1999 seçimlerinde **DSP'den İzmir Büyükşehir
    Belediye Başkanı seçilmiş**".
- Erişim: 2026-09-23.

### Ara seçimler (1991–2000) — envanter sonucu: dönem 5'te ara seçim YOK

- **[B] TBMM Cilt 8** (18. Dönem genel kurul görüşmeleri, basılı s. ~6500 ve 6690 civarı) — bir
  milletvekilinin konuşması: "…1991'e çok yaklaştık; kasıma kadar milletvekili ara seçimi
  yapılmazsa… Bugüne kadar, milletvekili ara seçimi için Meclis kararı [alınmadı]… milletvekili
  ara seçimi çoktan yapılmış olmalıydı; ama, yapılmamasının kusuru…"; başka bir birleşimde:
  "Gelin ara seçim yapın… Anayasaya göre, yapmak zorundasınız." Aynı cildin ilerleyen
  bölümlerinde: "ara seçim bir anayasal zorunluluk olduğu halde… anayasa ihlali yaparak ara
  seçimlere gitmeyen…". → 18. Dönem'de ara seçim yapılmadığı [B] kaynaktan.
- **Cilt 9 ve Cilt 10'da** (19., 20. ve 21. dönemler) yapılmış bir milletvekili ara seçimine dair
  tek bir kayıt yok (yalnızca 1979 Senato ara seçimlerine geçmişe dönük bir atıf var).
- **İkinci kaynak (derleme):** TESAV'ın "Milletvekili Ara Seçim Sonuçları" başlıklı derlemesi
  yıl listesini **1947, 1948, 1949, 1951, 1966, 1968, 1975, 1979, 1986, 2003** olarak veriyor —
  1986 ile 2003 arasında ara seçim yok.
- **Sonuç:** dönem 5'e (1991–2000) hiçbir `ara` kaydı eklenmedi; Görev 12'ye devredilecek
  doğrulanamamış ara seçim de yok.
- Erişim: 2026-09-23.

---

## Düzeltme turu 1 (2026-09-23) — dönem 5 controller incelemesi sonrası (SPEC ❌ → düzeltildi)

İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d5-verdict.md`.
Bulgular: **Important #1** (hükümet 47–57'nin `partiler`/`tip`/`bitisNedeni` alanları tek kaynak
ailesinden — TBMM Hükümetler Cilt 8/9/10 — türetilmişti), **Important #2** (48'in
`bitisNedeni:"secim"` doğrulanmamış bir kategori iddiasıydı), **Minor #3** (1991-10-genel `not`
iki cümleydi), **Minor/kanıt #4** (1991 RP-MÇP-IDP ortak listesi hiç araştırılmamıştı).

### Kullanılan ikinci kaynaklar (dönem 5 hükümetleri)

- **(K1) TBMM, *Koalisyon Hükümetleri, Koalisyon Protokolleri, Hükümet Programları ve Genel Kurul
  Görüşmeleri* — Cilt 2** (`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/874b1bb8-73c2-4847-8d40-01866e87ca4a.pdf`,
  1048 s.). Önsöz: "Bu eserde, 1961-2002 yılları arasında **koalisyon hükümeti olarak görev
  yapan** … VII. Demirel Hükümeti, I. Çiller Hükümeti, III. Çiller Hükümeti, II. Yılmaz Hükümeti,
  Erbakan Hükümeti, III. Yılmaz Hükümeti ve V. Ecevit Hükümeti'nde görev alan Bakanlar Kurulu
  üyeleri… yer almaktadır." İçindekiler dönem 5 için: VII. Demirel (20.11.1991-25.06.1993),
  I. Çiller (25.06.1993-05.10.1995), III. Çiller (30.10.1995-06.03.1996), II. Yılmaz
  (06.03.1996-28.06.1996), Erbakan (28.06.1996-30.06.1997), III. Yılmaz (30.06.1997-11.01.1999),
  V. Ecevit. **Tarihler Cilt 8/9/10 ile birebir aynı.** Ayrıca bu cilt **I. Yılmaz (48),
  II. Çiller (51) ve IV. Ecevit (56) hükümetlerini içermiyor** — bu üçünün koalisyon olmadığının
  bağımsız (negatif) doğrulaması. (Not: bu yayın da Neziroğlu & Yılmaz editörlüğünde; TBMM
  yayını olmakla birlikte Hükümetler ciltleriyle aynı editör ailesinden — bu yüzden aşağıda her
  hükümet için ayrıca TBMM dışı bir kaynak da arandı.)
- **(K2) Özhan DEMİRKOL, "1923'ten 2018'e Türkiye'de Hükümet ve Bakanlıklar"**, *Fiscaoeconomia*
  7(1), 2023, s. 365-390 (dönem 0'da da kullanılan kaynak): "1988'de Anavatan Partisi (ANAP)
  lideri Turgut Özal'ın Cumhurbaşkanı seçilmesi nedeniyle **ANAP** genel başkanlığına seçilen
  **Yıldırım Akbulut tarafından 47. hükümet** kurulmuştur."; "1993 yılında Doğru Yol Partisi
  (DYP) lideri Süleyman Demirel'in **Cumhurbaşkanı seçilmesi sonrasında** yeni DYP lideri Tansu
  Çiller tarafından **50. Hükümet** kurulmuştur."; "**ANAP-DYP azınlık koalisyonu (53. Hükümet)**
  kurulmuştur… yerini **RP-DYP koalisyonuna (54. Hükümet)** bırakmıştır."; "…**ANAP-Demokratik Sol
  Parti (DSP)-Demokrat Türkiye Partisi (DTP) azınlık koalisyonuna (55. Hükümet)** ve DSP lideri
  Bülent Ecevit tarafından kurulan **azınlık hükümetine (56. Hükümet)** bırakmıştır."; "…1995
  **(51. Hükümet)**, 1999 **(56. Hükümet)** yıllarında kurulan **tek parti azınlık hükümetleri**…";
  "38 bakanlık ile **ANAP-DSP-DTP koalisyonu (55. Hükümet)** ve **DSP-Milliyetçi Hareket Partisi
  (MHP)-ANAP koalisyonu (57. Hükümet)**"; "50. Hükümet döneminde **koalisyon ortağı SHP'nin
  CHP'yle birleşmesi**…"
- **(K3) Enes Malik ÇAKIR, "1991–2002 Yılları Arasında Koalisyon Hükümetleri Yönetimi"**,
  *IBAD Sosyal Bilimler Dergisi*, (6), 2020, s. 19-37 (`dergipark.org.tr/tr/download/article-file/942492`):
  "**ANAP genel başkanı Mesut Yılmaz**, daha sonra Özal'a istifasını vermiştir. DYP genel başkanı
  Süleyman Demirel ise koalisyon için üçüncü alternatif parti olan **SHP ile anlaşmış**, güvenoyu
  da alarak hükümeti kurmuştur."; "Mecliste cumhurbaşkanı adayları arasında yapılan oylamada en
  yüksek oyu alan **Süleyman Demirel başbakanlıktan istifa etmiş, cumhurbaşkanlığı sıfatını
  almıştır**."; "**DYP-SHP koalisyonu 49. hükümeti kurmuş**, Turgut Özal'ın vefatıyla 1993-1995
  yılları arasında ise **50. hükümeti** kurmuştur."; "Seçim öncesi koalisyon hükümeti kuran **DYP
  ve CHP**…"; "**5 ay süren DYP-CHP koalisyon hükümeti**…"; "Anayasa Mahkemesi tarafından
  güvenoyunun iptal edilmesi **ANAP-DYP arasındaki koalisyonu sonlandırmıştır**."
- **(K4) Yeter SOLAK – Murat KARATAŞ, "Türkiye'nin Koalisyonlu Yılları (1991-2002)"**,
  *21. Yüzyılda Eğitim ve Toplum*, 14(41), 2025, s. ~300-320
  (`dergipark.org.tr/en/download/article-file/4855196`): "**TBMM'den 20 Kasım 1991'de güvenoyu
  alan DYP-SHP koalisyon hükümeti** göreve başladı."; "Süleyman Demirel… TBMM'de yapılan **3. Tur
  oylamada 244 oy** alarak Türkiye Cumhuriyeti'nin **9. Cumhurbaşkanı** seçildi. Diğer adaylar
  İsmail Cem 27, Kamran İnan 94, Lütfi Doğan 47 oy aldılar."; "Deniz Baykal, **20 Eylül günü
  koalisyondan çekildiklerini açıkladı**. Bundan sonra **Tansu Çiller bir azınlık hükümeti kurmayı
  denediyse de Meclis'ten güvenoyu alamadı.**"; "**DYP-CHP Koalisyon Hükümeti** 5 Kasım[1995]'da
  TBMM'den güvenoyu aldı ve **seçim sonrası yeni hükümet iş başına geçene kadar** ülkeyi
  yönetti."; "12 Mart 1996'da **ANAP-DYP (ANAYOL) koalisyon hükümeti**… güvenoyu alarak çalışmaya
  başladı… **DYP'nin koalisyondan çekilme kararı alması Anayol hükümetinin sonunu getirdi.**";
  "Başbakan Necmettin Erbakan 18 Haziran'da **Refahyol hükümetinin istifa ettiğini** kamuoyuna
  açıklamak zorunda kaldı."; "Meclis'te Türkbank ihalesine ilişkin verilen **gensoru önergesinin
  kabul edilmesiyle hükümet düştü**… Türk siyasi tarihinde **gensoru ile düşürülen ikinci
  hükümet**"; "DSP lideri Bülent Ecevit, **ANAP ve DYP'nin dışarıdan desteklediği bir azınlık
  hükümetini** kurdu."; "**DSP-MHP-ANAP koalisyon hükümeti** 9 Haziran 1999'da Meclis'ten 354 evet
  şeklinde güvenoyu alarak çalışmaya başladı."
- **(K5) Anadolu Ajansı**, "Eski başbakanlardan Yıldırım Akbulut hayatını kaybetti"
  (`aa.com.tr/tr/turkiye/eski-basbakanlardan-yildirim-akbulut-hayatini-kaybetti/2208908`):
  "Akbulut, **15 Haziran 1991'de gerçekleştirilen ANAP Kongresi'nde Mesut Yılmaz'a yenilerek genel
  başkanlık ve başbakanlıktan ayrıldı.**"
- **(K6) Yeni [B] birincil kaynaklar — seçim/yenileme kararları:**
  - **Kanun No 3757**, "2839 Sayılı Milletvekili Seçimi Kanununda Değişiklik Yapılması ve
    **XIX uncu Dönem Milletvekili Genel Seçiminde Uygulanacak Hükümler** Hakkında Kanun",
    Kabul 24.8.1991, **RG 26.8.1991 / 20972**
    (`www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc074/kanuntbmmc074/kanuntbmmc07403757.pdf`)
    — "MADDE 15. — Türkiye Büyük Millet Meclisi XIX uncu Dönem Milletvekili Genel Seçimi için
    **oy verme günü 20 Ekim 1991 Pazar günüdür.**"
  - **TBMM Kararı No 384**, Karar Tarihi 27.10.1995, **RG 31.10.1995 / 22449 Mükerrer**
    (`…/kanuntbmmc078/karartbmmc078/karartbmmc07800384.pdf`) — "Türkiye Büyük Millet Meclisi
    Genel **Seçimlerinin Yenilenmesine** ve Seçimlerin **24 Aralık 1995** Pazar günü yapılmasına…"
  - **TBMM Kararı No 590**, Karar Tarihi 30.7.1998, **RG 2.8.1998 / 23421**
    (`…/kanuntbmmc081/karartbmmc081/karartbmmc08100590.pdf`) — "Türkiye Büyük Millet Meclisi genel
    **seçimlerinin yenilenmesine** ve seçimlerin, **mahalli idareler genel seçimleri ile birlikte
    18 Nisan 1999** Pazar günü yapılmasına…" (bu aynı zamanda `1999-04-genel` ve `1999-04-yerel`
    kayıtlarının aynı gün yapıldığının [B] doğrulamasıdır.)
  - **TBMM Kararı No 745**, Kabul Tarihi 31.7.2002, **RG 2.8.2002 / 24834**
    (`…/kanuntbmmc086/karartbmmc086/karartbmmc08600744.pdf` — dosya adı numarası bir kayık)
    — "Türkiye Büyük Millet Meclisi genel **seçimlerinin yenilenmesine** ve seçimin **3 Kasım
    2002** Pazar günü yapılmasına…"
- **(K7) İsmail Doğan (?), "Türkiye'de Seçim Kararının Mahiyeti"**, dergipark
  (`dergipark.org.tr/en/download/article-file/1093821`), dipnot: "Zira **1987 ve 1991 milletvekili
  erken genel seçim kararı**, parlamento kararı biçiminde değil, **kanun ile** olmuştur. Bkz. …
  **3757 sayılı Kanun** … m. 15. RG No: 20972, RG T: 26.08.1991." (1982 Anayasası döneminde
  alınan bütün seçim yenileme kararlarının künyelerini veren tablo bu makaleden alındı.)

### Alan alan ikinci kaynak eşleşmesi

| Hük. | `partiler` | `tip` | `bitisNedeni` | Eşleşme |
|---|---|---|---|---|
| 47 | K2 (ANAP, Akbulut) | K1 (koalisyon cildinde yok) | **K5** (kurultayda yenilerek başbakanlıktan ayrıldı) ↔ [B] tezkere "istifa etmiş" | tam |
| 48 | K3, K5 (ANAP Genel Başkanı Yılmaz) | K1 (koalisyon cildinde yok) | **K6 Kanun 3757 [B]** + K7 ("erken genel seçim kararı") | tam |
| 49 | K3 ("DYP-SHP koalisyonu 49. hükümeti"), K4 | K1, K3, K4 | K2, K3, K4 (Demirel'in CB seçilmesi) | tam |
| 50 | K3 ("50. hükümeti"), K2 (ortak SHP) | K1, K3 | K4 (Baykal 20 Eylül'de koalisyondan çekildi) ↔ [B] "20 Eylül 1995'te 50'nci Hükümetin istifası" | tam |
| 51 | K4 ("Tansu Çiller bir azınlık hükümeti") | K2 ("1995 … tek parti azınlık"), K1'de yok | K4 ("Meclis'ten güvenoyu alamadı") | tam |
| 52 | K3, K4 ("DYP-CHP koalisyon hükümeti") | K1, K3, K4 | **K6 Karar 384 [B]** + K4 ("seçim sonrası yeni hükümet iş başına geçene kadar") | tam |
| 53 | K2, K4 ("ANAP-DYP / ANAYOL") | K1, K2, K4 | K3/K4 ↔ [B] "istifa etmek zorunda kalmıştır" — **kısmi uyuşmazlık** (aşağıda) | kısmi |
| 54 | K2, K4 ("RP-DYP / REFAHYOL") | K1, K2, K4 | K4 ("Refahyol hükümetinin istifa ettiğini … açıkladı") | tam |
| 55 | K2 ("ANAP-DSP-DTP"), K4 | K1, K2, K4 | K4 ("gensoru önergesinin kabul edilmesiyle hükümet düştü") ↔ [B] "güven oylaması ile düşürülmesi" | tam |
| 56 | K2, K4 ("DSP azınlık hükümeti") | K2 ("1999 … tek parti azınlık"), K1'de yok | **K6 Karar 590 [B]** + K4 | tam |
| 57 | K2 ("DSP-MHP-ANAP koalisyonu"), K4 | K1, K2, K4 | **K6 Karar 745 [B]** | tam |

- **53'ün `bitisNedeni` — kısmi uyuşmazlık, yine de `istifa`:** [B] Cilt 9 (basılı s. 7452)
  "yargı kararıyla, güvenoyu almadığı için **istifa** etmek zorunda kalmıştır"; K3 "Anayasa
  Mahkemesi tarafından güvenoyunun iptal edilmesi koalisyonu sonlandırmıştır"; K4 "Anayasa
  Mahkemesi'nin güvenoyunu **iptal etmesi öncesinde**, DYP'nin koalisyondan çekilme kararı alması
  Anayol hükümetinin sonunu getirdi". Üç kaynak **tetikleyicide** ayrışıyor (AYM iptali mi,
  DYP'nin çekilmesi mi) ama **mekanizmada** (hükümetin güvenoylamasıyla düşürülmesi değil, görevi
  bırakması) birleşiyor → `bitisNedeni: "istifa"` korundu, ayrışma burada kayıtlı.

### Yapılan veri değişiklikleri

1. **`hukumetler` no. 48 — `bitisNedeni: "secim"` → `"erken-secim"`.** İnceleme `null` öneriyordu
   ama bu turda **[B] kanıt bulundu**: 20 Ekim 1991 seçimi, 18. Dönem'in 29 Kasım 1987'de
   başlayan beş yıllık süresi dolmadan, **3757 sayılı Kanun'un 15. maddesiyle** (RG 26.8.1991 /
   20972) öne alınmış bir genel seçimdir; K7 bu düzenlemeyi açıkça "1991 milletvekili **erken
   genel seçim kararı**" diye adlandırıyor. (Beş yıllık süre: [B] TÜİK Açıklama s. 13 — "Yeni
   Anayasa, seçimlerin … 5 yılda bir yapılmasını hükme bağlamıştır".) Kaydın `not` cümlesi de
   buna göre güncellendi.
2. **`1991-10-genel.not` tek cümleye indirildi** ve RP-MÇP-IDP ortak listesi eklendi (aşağıda).

### 1991 RP-MÇP-IDP ortak listesi — araştırıldı, `not`a eklendi

- **[B] TÜİK, Tablo 1 (PDF s. 22):** 1991 seçimine katılan partiler yalnızca "ANAP, RP, SP, DYP,
  DSP, SHP" (6 parti) — 1987'de ayrı ayrı yer alan **MÇP ve IDP, 1991 listesinde yok**; TÜİK
  Tablo 24'te de 1991 sütununda MÇP ve IDP satırları boş. Yani iki parti 1991'de kendi listeleriyle
  seçime girmemiştir.
- **[B] TBMM Tutanak (Cilt 8, I. Çiller Hükümeti program görüşmesi, 19. Dönem):** "Sayın Muharrem
  Şemsek, buyurunuz. (**MÇP sıralarından alkışlar**)" — MÇP'nin 19. Dönem TBMM'sinde kendi
  sıraları/grubu vardı; yani kendi listesiyle seçime girmediği halde MÇP'li milletvekilleri
  meclise girmiştir. Bu iki [B] olgu birlikte ortak liste uygulamasını gösteriyor.
- **İkinci kaynak (haber/analiz arşivi): Medyascope**, "Gomaşinen (6) – Cumhur İttifakı'nın
  provası: 20 Ekim 1991 seçimlerinde Erbakan-Türkeş ittifakı" — "**Refah Partisi çatısı altında,
  Milliyetçi Çalışma Partisi ve … Islahatçı Demokrasi Partisi birlikte seçim kararı aldılar**";
  "Necmettin Erbakan'ın Refah Partisi, Milliyetçi Çalışma Partisi ve Islahatçı Demokrasi Partisi
  ile girdiği seçimde **62 milletvekili** kazandı — %16,87, 4 milyon 120 bin oyla" (YSK/TÜİK'in
  4.121.355 oy / %16,9 / 62 sandalye rakamlarıyla tolerans içinde eşleşiyor).
- **Veriye yazılmayanlar:** ittifakın 62 sandalyesinin partilere dağılımı (RP/MÇP/IDP) yalnızca
  tek bir haber özetinde geçtiğinden **yazılmadı**; `sonuc` satırı kaynaktaki gibi tek "RP"
  satırıdır. `ittifak` alanı spesifikasyon §5.2 gereği yalnızca 2018 ve sonrası için kullanılır,
  bu kayda yazılmadı.
- Erişim: 2026-09-23.

---

## Görev 9 — Dönem 6 (2001–2015)

**Kaynak ailesi notu:** 2002–2011 genel seçimlerinde birincil kaynak TÜİK, ikinci kaynak YSK'nın
kendi kesin sonuç yayınlarıdır (iki ayrı kurumun ayrı yayınları). 2015'in iki seçiminde birincil
kaynak YSK'nın Örnek 96/D–E duyuruları, ikinci kaynak TÜİK Veri Portalı'nın
*Milletvekili Genel Seçimi Sonuçları (1983-2018)* tablosudur. Hükümetlerde birincil kaynak
**Resmî Gazete**'dir: TBMM'nin *Hükümetler, Programları ve Genel Kurul Görüşmeleri* dizisi
**Cilt 10 ile (57. Hükümet, 2002) bitiyor** — koleksiyon öğesinin ORIGINAL paketinde
(`/core/bundles/88774567-0d57-4e64-8a8e-bf03cfb196f7/bitstreams?size=50`) yalnızca 10 cilt var
(`201400883-c1.pdf` … `201400892-c10.pdf`), 11. cilt yok. Bu yüzden 58–64 için ölçüt,
plandaki ölçütün ikinci seçeneği olan **"Bakanlar Kurulu'nun Resmî Gazete'de yayımlanan atanma
işlemi (Cumhurbaşkanlığı tezkeresi) tarihi"**dir; bu tarih 57. hükümete kadar ciltlerdeki
kuruluş tarihiyle aynı ölçüdür (57: 28.05.1999).

### 2002-11-genel

- **[B] TÜİK, *Milletvekili Genel Seçimleri 1923–2011*, Tablo 24 "TÜRKİYE"** (PDF s. 111–112,
  basılı s. 93–94, `pdftotext -table`): kayıtlı 41.407.027, kullanılan 32.768.161 (katılım %79,1),
  geçerli oy 31.414.748, gümrük kapıları 114.035, **toplam geçerli oy 31.528.783**,
  milletvekili sayısı 550.
  AK PARTİ 10.808.229 (%34,3) **363**, CHP 6.113.352 (%19,4) **178**, DYP 3.008.942 (%9,5),
  MHP 2.635.787 (%8,4), GENÇ PARTİ 2.285.598 (%7,2), DEHAP 1.960.660 (%6,2),
  ANAP 1.618.465 (%5,1), SAADET PARTİSİ 785.489 (%2,5), DSP 384.009 (%1,2), YTP 363.869 (%1,2),
  BBP 322.093 (%1,0), İP 159.843 (%0,5), ÖDP 106.023 (%0,3), LDP 89.331 (%0,3),
  YP 294.909 (%0,9), BTP 150.482 (%0,5), MİLLET PARTİSİ 68.271 (%0,2), TKP 59.180 (%0,2),
  BAĞIMSIZ 314.251 (%1,0) **9**.
- **İkinci kaynak [B]: YSK**, `…/docs/2002MilletvekiliSecimi/gumrukdahil/gumrukdahil.pdf` ve
  `…/turkiye/milletvekilisayisi.pdf` — her ikisi de künyesinde
  "**09 Kasım 2002 tarih ve 883 sayılı YSK Kararı / 10 Kasım 2002 tarih ve 24932 sayılı Resmi
  Gazete**" diyor: kayıtlı 41.407.027, kullanan 32.768.161, geçerli 31.528.783, katılma %79,14;
  18 partinin ve bağımsızların oy sayıları **birebir** TÜİK ile aynı; sandalye: CHP 178,
  AK PARTİ 363, BAĞIMSIZLAR 9, TÜRKİYE TOPLAMI 550. Uyuşmazlık: yok.
- **İç tutarlılık (hesaplandı):** 18 parti + bağımsız oy toplamı = 31.528.783 (toplam geçerliye
  tam eşit); sandalye toplamı 363+178+9 = 550 (`meclis`e tam eşit).
- **`baraj: 10` ve `meclis: 550`** — [B] TÜİK Açıklama (PDF s. 14): "**1999, 2002, 2007 ve 2011**
  yıllarında yapılan milletvekili seçimlerinde de 1995 yılı seçimindeki uygulamalar aynen devam
  etmiştir." (1995 uygulaması: ülke barajlı (%10) d'Hondt, 550 milletvekili.)
- **`tarih`: 3 Kasım 2002** — [B] TÜİK Ek-1 (PDF s. 277): "3 Kasım 2002".
- **"Diğer" (partiSayisi 4, oy 572.842):** YP (Yurt Partisi) 294.909 + BTP (Bağımsız Türkiye
  Partisi) 150.482 + MİLLET PARTİSİ 68.271 + TKP 59.180. Dördü de soyağacında yok ve dördünün de
  oyu %1'in altında. Kısaltmaların açılımı [B] TÜİK "Simge ve Kısaltmalar" (PDF s. 7).
  **GENÇ PARTİ** soyağacında yok ama oyu %7,25 olduğu için `ad:` ile ayrı satırda tutuldu.
  **TKP** için soyağacındaki `tkp20` kullanılmadı: o kayıt 1920–1988 arası Türkiye Komünist
  Partisi'nindir, 2002'de yarışan TKP ayrı bir tüzel kişiliktir.
- **`not` cümlesi:** "seçime katılan 18 partiden yalnızca ikisi barajı aştı" — [B] TÜİK Tablo 1
  (PDF s. 22): 2002 satırı "Ülke Barajlı d'Hondt Sistemi, **18** seçime katılan parti, **2**
  Meclis'e giren parti (AK PARTİ, CHP)". "Tek başına iktidar": 363 > 550/2.
- Erişim: 2026-09-23.

### 2007-04-cb-tbmm (sonuçsuz süreç)

- **[B] TBMM Tutanak Dergisi, Dönem 22, Cilt 155, 96. Birleşim (27.4.2007)**
  (`www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/d22/c155/tbmm22155096.pdf`): Tasnif Komisyonu
  tutanağı — "Cumhurbaşkanlığı seçimi için yapılan **birinci oylamada 361 milletvekili oy
  kullanmış**…"; **Abdullah Gül: 357**, İptal 3, Boş 1, Toplam 361. Başkan: "Bu sonuca göre,
  Cumhurbaşkanı seçimi için Anayasa'nın 102'nci maddesinde öngörülen **üçte 2 çoğunluğu
  sağlanamamıştır**."
- **[B] Anayasa Mahkemesi, E. 2007/45, K. 2007/54, Karar Günü 1/5/2007**
  (Resmî Gazete 27.6.2007, `resmigazete.gov.tr/eskiler/2007/06/20070627-17.htm`): "SONUÇ —
  Türkiye Büyük Millet Meclisi'nin eylemli içtüzük değişikliği niteliğinde olan **27.4.2007
  günlü, 96. birleşiminde** alınan 11. Cumhurbaşkanı'nın seçiminde gözetilmesi gereken **toplantı
  yeter sayısı** ile ilgili kararının Anayasa'ya aykırı olduğuna ve **İPTALİNE** … 1.5.2007
  gününde karar verildi." (Ayrıca yürürlüğü durdurma kararı: E. 2007/45, K. 2007/21,
  RG 3.5.2007.)
- **[B] TBMM Tutanak Dergisi, Dönem 22, Cilt 156, 101. Birleşim (6.5.2007)**
  (`…/d22/c156/tbmm22156101.pdf`): "Anayasa Mahkemesi, … 96'ncı Birleşiminde alınan 11'inci
  Cumhurbaşkanı seçiminde gözetilmesi gereken toplantı yeter sayısıyla ilgili kararını, eylemli
  İç Tüzük değişikliği niteliğinde görmüş ve Anayasaya aykırı bularak iptal etmiştir."; sonra
  "birinci yoklamada **356**, ikinci yoklamada **358** sayın milletvekili bulunmaktadır. Bu
  yoklamada da Cumhurbaşkanı seçimi için Anayasa Mahkemesi kararında öngörülen toplantı yeter
  sayısı, yani, **367** bulunamadığından, … Cumhurbaşkanı seçimini yapamayacağız."
- **[B] TBMM Kararı No. 891, 3/5/2007** (RG 3.5.2007 / 26511 mükerrer): "Türkiye Büyük Millet
  Meclisi genel seçimlerinin yenilenmesine ve seçimin **22 Temmuz 2007 Pazar** günü yapılmasına,
  … 98 inci Birleşiminde (458) kabul oyuyla karar verilmiştir." → süreç sonuçsuz kaldı, seçim
  yenilendi.
- **`turSayisi: 1`** — fiilen yalnızca **bir** oylama yapıldı (27 Nisan); 6 Mayıs'taki ikinci
  oylama toplantı yeter sayısı sağlanamadığı için hiç yapılamadı. `secilen: null`.
- Erişim: 2026-09-23.

### 2007-07-genel

- **[B] TÜİK Tablo 24 "TÜRKİYE"** (aynı sayfalar): kayıtlı 42.799.303, kullanılan 36.056.293
  (katılım %84,2), geçerli oy 34.822.907, gümrük kapıları 226.784, **toplam geçerli oy
  35.049.691**, milletvekili sayısı 550.
  AK PARTİ 16.327.291 (%46,6) **341**, CHP 7.317.808 (%20,9) **112**, MHP 5.001.869 (%14,3)
  **71**, DP 1.898.873 (%5,4), GENÇ PARTİ 1.064.871 (%3,0), SAADET PARTİSİ 820.289 (%2,3),
  BTP 182.095 (%0,5), HYP 179.010 (%0,5), İP 128.148 (%0,4), ATP 100.982 (%0,3),
  TKP 79.258 (%0,2), ÖDP 52.055 (%0,2), LDP 35.364 (%0,1), EMEP 26.292 (%0,1),
  BAĞIMSIZ 1.835.486 (%5,2) **26**.
- **İkinci kaynak [B]: YSK**, `…/docs/2007MilletvekiliSecimi/gumrukdahil/gumrukdahil.pdf`
  (30/07/2007): kayıtlı 42.799.303, kullanan 36.056.293, geçerli 35.049.691, katılma %84,25;
  14 partinin ve bağımsızların oy sayıları **birebir** TÜİK ile aynı.
- **Uyuşmazlık — MHP'nin sandalye sayısı (çözüldü, TÜİK yazıldı):** YSK'nın
  `…/turkiye/milletvekilisayisi.pdf` ve `…/turkiye/cevremilletvekilisayisi.pdf` belgeleri
  (30/07/2007) CHP 112, **MHP 70**, AK PARTİ 341, BAĞIMSIZLAR 26, **TOPLAM 549** veriyor.
  TÜİK Tablo 21 (PDF s. 41) ise Toplam 550 / MHP 71 veriyor ve **dipnotunda nedenini yazıyor**:
  "2007 milletvekili genel seçiminde **550 milletvekili seçilmiştir**. Ancak **İstanbul'dan
  seçilen MHP milletvekillerinden bir milletvekilinin ölümü nedeniyle** Meclis'te bulunan
  milletvekili sayısı 549 olmuştur." TÜİK Tablo 21'de İstanbul MHP 7, YSK'nın çevre tablosunda
  İstanbul (01)+(02)+(03) MHP 2+2+2 = 6 — fark tam olarak o bir sandalye. Spesifikasyon §8.1
  "sandalyelerde toplamın meclis büyüklüğüne eşitliği belirleyicidir" kuralı gereği **TÜİK'in
  550'ye tamamlanan dağılımı** yazıldı; iki kaynak çelişmiyor, farklı anları ölçüyor.
- **İç tutarlılık (hesaplandı):** oy toplamı = 35.049.691 (toplam geçerliye tam eşit);
  sandalye toplamı 341+112+71+26 = 550.
- **`baraj: 10`, `meclis: 550`** — [B] TÜİK Açıklama s. 14 (yukarıda).
- **`tarih`: 22 Temmuz 2007** — [B] TÜİK Ek-1 + [B] TBMM Kararı 891 (RG 3.5.2007/26511 mükerrer).
- **"Diğer" (partiSayisi 4, oy 541.345):** BTP 182.095 + HYP (Halkın Yükselişi Partisi) 179.010 +
  ATP (Aydınlık Türkiye Partisi) 100.982 + TKP 79.258 — dördü de soyağacında yok, dördü de %1'in
  altında. GENÇ PARTİ (%3,0) soyağacında yok ama %1'in üstünde olduğu için ayrı satırda.
  **DP → `dp07`**: soyağacındaki kayıt "Demokrat Parti, 2007 –, DYP'nin ad değişikliği".
- **`not` cümlesi (DTP ve BBP'nin bağımsız aday yolu):**
  - [B] TÜİK Tablo 1 (PDF s. 22): 2007'de seçime katılan **14** parti sayılıyor — DTP ve BBP bu
    listede **yok**; Tablo 24'ün 2007 sütununda da bu iki partinin satırları boş.
  - [B] TBMM Tutanak Dergisi D23 C1 B4 (20.8.2007) ve B6 (28.8.2007): 23. Dönem'de
    "**DTP Grubu**" ve "DTP Grubu Başkanvekili" var, "(AK Parti ve **DTP sıralarından** alkışlar)".
  - İkinci kaynak: **Erol TUNCER (TESAV Başkanı), "22 Temmuz 2007 Seçimleri: Genel Bir
    Değerlendirme"** (`dergipark.org.tr/en/download/article-file/211086`): "BBP ve DTP ise
    **bağımsız adaylar yoluyla TBMM'ye girmeyi** amaçladıkları için, seçime girmemiştir.";
    "DTP'nin desteklediği bağımsız adaylardan **22'si milletvekili seçildi**… Diğer 21 milletvekili
    ise yeniden DTP'ye katılarak partinin Meclis Grubunu oluşturdu."; "Seçime katılmayan BBP'nin
    Genel Başkanı Muhsin Yazıcıoğlu Sivas'tan, 16 BBP'li aday ise değişik illerden bağımsız aday
    oldular."
  - Veriye yalnızca resmî bağımsız toplamı (1.835.486 oy, 26 sandalye) yazıldı; 26 sandalyenin
    partilere dağılımı veriye **yazılmadı**. `ittifak` alanı spesifikasyon §5.2 gereği yalnızca
    2018+ için olduğundan kullanılmadı.
- Erişim: 2026-09-23.

### 2007-08-cb-tbmm

- **[B] TBMM Tutanak Dergisi, Dönem 23, Cilt 1, 6. Birleşim (28.8.2007)**
  (`www5.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/d23/c001/tbmm23001006.pdf`): "Bir önceki birleşimde
  yapılan ikinci oylamada sonuç alınamamıştı. Şimdi **üçüncü oylamayı** yapacağız."; Tasnif
  Komisyonu tutanağı — "Cumhurbaşkanı seçimi için yapılan üçüncü oylamaya **448 üye** katılmış…":
  Sabahattin Çakmakoğlu 70, **Abdullah Gül 339**, Hüseyin Tayfun İçli 13, Boş 24. Başkan:
  "…Kayseri Milletvekili Sayın Abdullah Gül, Anayasa'nın 102'nci maddesinde üçüncü tur oylama
  için öngörülen üye tam sayısının salt çoğunluğunu sağlamış ve **339 oyla Türkiye
  Cumhuriyetinin 11'inci Cumhurbaşkanı seçilmiş** bulunmaktadır." Aynı birleşimin Danışma Kurulu
  önerisi turların 20 / 24 / 28 Ağustos 2007 tarihlerini veriyor → `turSayisi: 3`.
- **İkinci kaynak [B]: TBMM Kararı No. 898, Karar Tarihi 28/8/2007, Resmî Gazete 28.8.2007 /
  26627 mükerrer** (`resmigazete.gov.tr/eskiler/2007/08/20070828M1-1.htm`): "Türkiye Büyük Millet
  Meclisi Genel Kurulunun **28/8/2007 tarihli 6 ncı Birleşiminde**, Kayseri Milletvekili
  Abdullah GÜL (**339**) oy ile Türkiye Cumhurbaşkanı seçilmiştir." Tarih, birleşim ve oy sayısı
  birebir eşleşti. Uyuşmazlık: yok.
- Erişim: 2026-09-23.

### 2011-06-genel

- **[B] TÜİK Tablo 24 "TÜRKİYE"** (aynı sayfalar): kayıtlı 52.806.322, kullanılan 43.914.948
  (katılım %83,2), geçerli oy 42.813.896, gümrük kapıları 127.867, **toplam geçerli oy
  42.941.763**, milletvekili sayısı 550.
  AK PARTİ 21.399.082 (%49,8) **327**, CHP 11.155.972 (%26,0) **135**, MHP 5.585.513 (%13,0)
  **53**, SAADET PARTİSİ 543.454 (%1,3), HAS PARTİ 329.723 (%0,8), BBP 323.251 (%0,8),
  DP 279.480 (%0,7), HEPAR 124.415 (%0,3), DSP 108.089 (%0,3), DYP 64.607 (%0,2),
  TKP 64.006 (%0,1), MİLLET PARTİSİ 60.716 (%0,1), MMP 36.188 (%0,1), EMEP 32.128 (%0,1),
  LDP 15.222 (%0,0), BAĞIMSIZ 2.819.917 (%6,6) **35**.
- **İkinci kaynak [B]: YSK**, `…/docs/2011MilletvekiliSecimi/gumrukdahil/gumrukdahil.pdf` ve
  `…/turkiye/milletvekilisayisi.pdf` — künyeleri "**22 Haziran 2011 tarih ve 1070 sayılı YSK
  Kararı / 23 Haziran 2011 tarih ve 27973 sayılı Resmi Gazete**": kayıtlı 52.806.322,
  kullanan 43.914.948, geçerli 42.941.763, katılma %83,16; 15 partinin ve bağımsızların oyları
  **birebir** TÜİK ile aynı; sandalye AK PARTİ 327, CHP 135, MHP 53, BAĞIMSIZLAR 35,
  TÜRKİYE TOPLAMI 550. Uyuşmazlık: yok.
- **İç tutarlılık (hesaplandı):** oy toplamı = 42.941.763; sandalye toplamı 327+135+53+35 = 550.
- **"Diğer" (partiSayisi 5, oy 349.932):** HEPAR (Hak ve Eşitlik Partisi) 124.415 + TKP 64.006 +
  DYP 64.607 + MİLLET PARTİSİ 60.716 + MMP (Milliyetçi ve Muhafazakâr Parti) 36.188.
  **DYP neden "Diğer"de:** soyağacındaki `dyp` kaydı 1983–2007 arasını kapsıyor ve 2007'de
  Demokrat Parti'ye (`dp07`) dönüştü; 2011 pusulasındaki Doğru Yol Partisi soyağacında yoktur ve
  oyu %0,15'tir.
- **`not` cümlesi (BDP'nin bağımsız aday yolu):** [B] TÜİK Tablo 1: 2011'de seçime katılan **15**
  parti sayılıyor, BDP listede **yok**; [B] TÜİK/YSK: bağımsızlar 35 sandalye. İkinci kaynak —
  **TEPAV Politika Notu N201143 (Haziran 2011), Türkmen Göksel & Yetkin Çınar, "12 Haziran 2011
  Seçiminde Seçim Sisteminin Parlamento Yapısına Etkileri"**: "iki muhalefet partisi, CHP ile MHP
  ve **BDP'nin desteklediği bağımsızların** yer bulabildiği mecliste, seçime katılan diğer
  partiler … temsil olanağı bulamadılar." 35 sandalyenin partilere dağılımı veriye yazılmadı.
- Erişim: 2026-09-23.

### 2014-08-cb-halk

- **[B] YSK Örnek: 416/D "Yurt içi, yurt dışı ve gümrük sandıkları dahil Cumhurbaşkanı seçim
  sonucu"** (`…/docs/2014CB/2014CB-Kesin-416_d_Genel.xlsx`, `openpyxl` ile okundu):
  kayıtlı seçmen **55.692.841**, oy kullanan **41.283.627**, geçerli oy **40.545.911**,
  geçersiz 737.716, katılma oranı **%74,13**.
  Recep Tayyip ERDOĞAN 21.000.143 (%51,79), Ekmeleddin Mehmet İHSANOĞLU 15.587.720 (%38,44),
  Selahattin DEMİRTAŞ 3.958.048 (%9,76); GENEL TOPLAM 40.545.911.
  **İç tutarlılık (hesaplandı):** 21.000.143 + 15.587.720 + 3.958.048 = 40.545.911, tam eşit.
- **İkinci kaynak [B]: YSK Kararı 2014/3719, 15/08/2014**
  (`…/docs/Kararlar/2014Pdf/2014-3719.pdf`): "10 Ağustos 2014 Pazar günü yapılan Cumhurbaşkanı
  Seçimi kesin sonuçlarının tespitine … **geçerli oyların salt çoğunluğunu alan Recep Tayyip
  ERDOĞAN'ın 12. Türkiye Cumhurbaşkanı seçildiğinin tespitine**"; aynı karar 416/A-B-C-D
  cetvellerinin içeriğini madde madde tarif ediyor. Ayrıca **YSK Kararı 2014/3227 (10/7/2014,
  RG 11.7.2014/29054)**: kesin aday listesi — İhsanoğlu, Erdoğan, Demirtaş (üç aday).
- **Tek tur:** ikinci oylama 24 Ağustos 2014'e hazırlanmıştı ([B] YSK 2014/3227: "ilk oylamada
  geçerli oyların salt çoğunluğu sağlanamadığı takdirde ikinci oylaması 24 Ağustos 2014") ama
  salt çoğunluk ilk turda sağlandığı için yapılmadı → `turlar` dizisinde tek öğe.
- **Adayların parti/destek bilgisi (iki kaynak):**
  - [B] **YSK Kararı 2014/3579 (7/8/2014)**: AK Parti Genel Başkan Yardımcısı'nın dilekçesinde
    "partilerinin pankartın sahibi adayı desteklemediği, **Cumhurbaşkanı adayı Başbakan Recep
    Tayyip ERDOĞAN'ı desteklediğinin** her türlü izahtan vareste olduğu"; İhsanoğlu "**rakip
    partilerin adayı**" olarak anılıyor. → Erdoğan = AK Parti adayı.
  - İkinci kaynak (akademik): **Selçuk İletişim**, "2014 Cumhurbaşkanlığı Seçimindeki
    Cumhurbaşkanı Adaylarının Karikatürlere Yansıması"
    (`dergipark.org.tr/tr/download/article-file/178268`): "…tin Demirtaş, **MHP ve CHP'nin ortak
    adayları ise, Ekmeleddin İhsanoğlu** olmuştur"; İngilizce özet: "…Erdoğan **for the Ak Party**,
    Selahattin Demirtaş **for the HDP**, Ekmeleddin İhsanoğlu…"
  - Üçüncü kaynak (akademik): **Bekir Berat Özipek, "Türkiye Siyasetinde 2014 Cumhurbaşkanlığı
    Seçimi"** (`dergipark.org.tr/en/download/article-file/790586`): "…İhsanoğlu ve üçüncüsü de
    **HDP adayı Selahattin Demirtaş**'tı."
  - Veriye: Erdoğan `parti:"akp"`, Demirtaş `parti:"hdp"`, İhsanoğlu
    `destek:"CHP ve MHP'nin ortak adayı"`.
- Erişim: 2026-09-23.

### 2015-06-genel

- **[B] YSK, "Örnek: 96/D — Yurt içi, yurt dışı ve gümrük sandıkları dahil milletvekili genel
  seçimi sonucu"** (`…/docs/Milletvekili/7Haziran2015/KesinSecimSonuclari/ResmiGazete/D.pdf`,
  18/06/2015): kayıtlı **56.608.817**, oy kullanan **47.507.467**, geçerli **46.163.243**,
  geçersiz 1.344.224, katılma **%83,92**.
  AK PARTİ 18.867.411 (%40,87), CHP 11.518.139 (%24,95), MHP 7.520.006 (%16,29),
  HDP 6.058.489 (%13,12), SAADET PARTİSİ 949.178 (%2,06), BAĞIMSIZLAR 488.226 (%1,06),
  VATAN PARTİSİ 161.674 (%0,35), BTP 96.475 (%0,21), DSP 85.810 (%0,19), DP 75.784 (%0,16),
  TOPLUMSAL UZLAŞMA REFORM VE KALKINMA PARTİSİ 72.701 (%0,16), HALKIN KURTULUŞ PARTİSİ
  60.396 (%0,13), HAK VE ÖZGÜRLÜKLER PARTİSİ 58.716 (%0,13), DYP 28.852 (%0,06),
  ANADOLU PARTİSİ 27.688 (%0,06), LDP 26.500 (%0,06), MERKEZ PARTİ 20.945 (%0,05),
  MİLLET PARTİSİ 17.473 (%0,04), KOMÜNİST PARTİ 13.780 (%0,03), YURT PARTİSİ 9.289 (%0,02),
  HAK VE ADALET PARTİSİ 5.711 (%0,01); GENEL TOPLAM 46.163.243.
- **[B] YSK "Örnek: 96/E"** (`…/ResmiGazete/E.pdf`): MHP **80**, HDP **80**, CHP **132**,
  AK PARTİ **258**, BAĞIMSIZLAR **0**, TÜRKİYE TOPLAMI **550**.
- **İkinci kaynak: TÜİK Veri Portalı, "Milletvekili Genel Seçimi Sonuçları (1983-2018)"**
  (`veriportali.tuik.gov.tr/api/tr/data/downloads?t=i&p=B%2B7BcTpVqmcAfR87BdvmFXicKhEH5TYNgOO…`,
  sayfa `42_t4`, `xlrd` ile okundu; tablonun kaynağı "Yüksek Seçim Kurulu"):
  7.6.2015 sütunu — kayıtlı 56.608.817, oy kullanan 47.507.467, katılım %83,9, geçerli
  (yurt içi) 45.121.773, yurt dışı/gümrük 1.041.470, **toplam geçerli 46.163.243**,
  milletvekili 550; AK PARTİ 18.867.411 / C 258, CHP 11.518.139 / C 132, MHP 7.520.006 / C 80,
  HDP 6.058.489 / C 80, SAADET 949.178, VATAN 161.674, BTP 96.475, DSP 85.810, DP 75.784,
  TURK Parti 72.701, HKP 60.396, HAK-PAR 58.716, DYP 28.852, ANADOLU 27.688, LDP 26.500,
  MERKEZ 20.945, MİLLET P. 17.473, KOMÜNİST P. 13.780, YURT P. 9.289, HAK VE ADALET P. 5.711,
  BAĞIMSIZLAR 488.226. **21 satırın tamamı birebir** eşleşti. Uyuşmazlık: yok.
- **İç tutarlılık (hesaplandı):** oy toplamı = 46.163.243; sandalye toplamı 258+132+80+80 = 550.
- **"Diğer" (partiSayisi 10, oy 384.338):** DYP 28.852 + BTP 96.475 + Hak ve Özgürlükler P.
  58.716 + Komünist Parti 13.780 + Millet Partisi 17.473 + Hak ve Adalet Partisi 5.711 +
  Merkez Parti 20.945 + Toplumsal Uzlaşma Reform ve Kalkınma Partisi 72.701 + Halkın Kurtuluş
  Partisi 60.396 + Yurt Partisi 9.289 — onu da soyağacında yok ve onunun da oyu %1'in altında.
- **`not` cümlesi:** HDP'nin **parti olarak** girip barajı aşması [B] YSK 96/D–E ile
  (parti satırı + 80 sandalye) doğrudan kanıtlı; "hiçbir parti tek başına hükümet kuracak
  çoğunluğu sağlayamadı" — AK PARTİ 258 < 276 ([B] YSK 96/E) ve ikinci kaynak Demirkol (2023),
  s. 374: "1961-65, 1973-80, 1991-2002 ve **2015 Haziran-2015 Kasım genel seçimleri arası
  dönemde hiçbir parti tek başına mecliste hükümet** [kuracak çoğunluğu elde edememiştir]".
- **`baraj: 10`, `meclis: 550`** — [B] YSK 96/E (TÜRKİYE TOPLAMI 550) + [B] TÜİK xls
  ("Milletvekili sayısı 550"); %10'luk ülke barajı 2839 sayılı Kanun'la 1983'ten beri
  yürürlüktedir ([B] TÜİK Açıklama s. 13–14) ve 2015'te de uygulanmıştır — [B] YSK 96/D–E'de
  %10'un altında kalan bütün partiler sandalyesizdir.
- Erişim: 2026-09-23.

### 2015-11-genel

- **[B] YSK, "Örnek: 96/D"** (`…/docs/Milletvekili/1Kasim2015/KesinSecimSonuclari/96-D.pdf`,
  11/11/2015): kayıtlı **56.949.009**, oy kullanan **48.537.695**, geçerli **47.840.231**,
  geçersiz 697.464, katılma **%85,23**.
  AK PARTİ 23.681.926 (%49,50), CHP 12.111.812 (%25,32), MHP 5.694.136 (%11,90),
  HDP 5.148.085 (%10,76), SAADET PARTİSİ 325.978 (%0,68), BBP 253.204 (%0,53),
  VATAN PARTİSİ 118.803 (%0,25), HAK VE ÖZGÜRLÜKLER PARTİSİ 108.583 (%0,23),
  HALKIN KURTULUŞ PARTİSİ 83.057 (%0,17), DEMOKRAT PARTİ 69.319 (%0,14),
  KOMÜNİST PARTİ 52.527 (%0,11), BAĞIMSIZLAR 51.038 (%0,11), BTP 49.297 (%0,10),
  DSP 31.805 (%0,07), LDP 26.816 (%0,06), MİLLET PARTİSİ 19.714 (%0,04), DYP 14.131 (%0,03);
  GENEL TOPLAM 47.840.231.
- **[B] YSK "Örnek: 96/E"** (`…/96-E.pdf`): CHP **134**, MHP **40**, HDP **59**,
  AK PARTİ **317**, BAĞIMSIZLAR **0**, TÜRKİYE TOPLAMI **550**.
- **İkinci kaynak: TÜİK Veri Portalı "Milletvekili Genel Seçimi Sonuçları (1983-2018)"**,
  1.11.2015 sütunu: kayıtlı 56.949.009, oy kullanan 48.537.695, katılım %85,2, geçerli
  (yurt içi) 46.555.267, yurt dışı/gümrük 1.284.964, **toplam geçerli 47.840.231**,
  milletvekili 550; AK PARTİ 23.681.926 / C 317, CHP 12.111.812 / C 134, HDP 5.148.085 / C 59,
  MHP 5.694.136 / C 40, SAADET 325.978, BBP 253.204, VATAN 118.803, HAK-PAR 108.583,
  HKP 83.057, DP 69.319, KOMÜNİST P. 52.527, BTP 49.297, DSP 31.805, LDP 26.816,
  MİLLET P. 19.714, DYP 14.131, BAĞIMSIZLAR 51.038. **17 satırın tamamı birebir** eşleşti.
  Uyuşmazlık: yok.
- **İç tutarlılık (hesaplandı):** oy toplamı = 47.840.231; sandalye toplamı 317+134+59+40 = 550.
- **"Diğer" (partiSayisi 6, oy 327.309):** Millet Partisi 19.714 + Hak ve Özgürlükler Partisi
  108.583 + BTP 49.297 + Halkın Kurtuluş Partisi 83.057 + Komünist Parti 52.527 + DYP 14.131.
- **`not` cümlesi (yenileme seçimi):** [B] Resmî Gazete 28.8.2015 / 29459 4. mükerrer, Başbakanlık
  tezkeresi: "Türkiye Cumhuriyeti **Anayasasının 116 ncı maddesi uyarınca seçimlerin
  yenilenmesine** dair ilgi (a) kararınızdan sonra, … **geçici Bakanlar Kurulunu** kurmak üzere
  Başbakan olarak atanmış bulunmaktayım." + [B] YSK 96/E (AK PARTİ 317 > 276 → tek başına
  iktidar).
- Erişim: 2026-09-23.

### Hükümetler 58-64

**Ölçüt (dönem 6):** `baslangic` = Bakanlar Kurulu'nun atanmasına dair **Cumhurbaşkanlığı
tezkeresinin tarihi** (Resmî Gazete'de yayımlanan "Bakanlar Kurulunun Atanmasına Dair İşlem");
`bitis` = bir sonraki hükümetin aynı ölçüyle bulunan başlangıcı; `partiler` ve `tip` = aynı
Resmî Gazete metnindeki Bakanlar Kurulu listesi ve tezkere başlıkları; `bitisNedeni` = Resmî
Gazete'deki tezkere/TBMM kararı metinleri. 57. Hükümet'in bitişi (18.11.2002) ile 58'in
başlangıcı **tam çakışıyor**, zincir boşluksuz.

| No | Başbakan | RG tarihi/sayısı | Kaynak adresi |
|---|---|---|---|
| 58 | Abdullah Gül | 19.11.2002 / 24941 | `resmigazete.gov.tr/eskiler/2002/11/20021119.htm` |
| 59 | R. Tayyip Erdoğan | 14.3.2003 / 25048 mükerrer | `…/2003/03/20030314M1.htm` |
| 60 | R. Tayyip Erdoğan | 29.8.2007 / 26628 mükerrer | `…/2007/08/20070829M1-1.htm` |
| 61 | R. Tayyip Erdoğan | 6.7.2011 / 27986 mükerrer | `…/2011/07/20110706M1-1.htm` |
| 62 | Ahmet Davutoğlu | 29.8.2014 mükerrer | `…/2014/08/20140829M1-1.htm` |
| 63 | Ahmet Davutoğlu | 28.8.2015 / 29459 4. mükerrer | `…/2015/08/20150828M4-1.htm` |
| 64 | Ahmet Davutoğlu | 24.11.2015 mükerrer | `…/2015/11/20151124M1-1.htm` |
| (65) | Binali Yıldırım | 24.5.2016 / 29721 mükerrer | `…/2016/05/20160524M1-1.pdf` (64'ün bitişi) |

**[B] alıntılar (Resmî Gazete):**
- **58 — başlangıç 18.11.2002:** Cumhurbaşkanlığı tezkeresi "**18 Kasım 2002**
  B.01.0.KKB.01-08-3-2002-779 … Bakanlar Kurulu'nun **Kayseri Milletvekili Abdullah GÜL**
  tarafından kurulması ilgi (a) yazımızla uygun görülmüştü. İlgi (b) yazınızla yapmış olduğunuz
  öneri uygun bulunarak … onaylanmıştır." Bakanlar Kurulu listesinde başka parti etiketi yok.
- **58 — bitiş nedeni `istifa`:** RG 12.3.2003, Başbakanlık tezkeresi (11 Mart 2003): "Yeni bir
  hükümet kurulmasına imkan sağlamak için, başkanlığımda kurulmuş bulunan **58. Hükümetin
  istifasının kabulünü** saygılarımla arz ederim. Abdullah GÜL"; Cumhurbaşkanlığı: "Bakanlar
  Kurulu'nun **istifası kabul edilmiştir**… yeni Hükümet kuruluncaya kadar, göreve devam
  edilmesini rica ederim." Aynı gün: "Bakanlar Kurulu'nun yeniden kurulması için … **Siirt
  Milletvekili ve Adalet ve Kalkınma Partisi Genel Başkanı Sayın Recep Tayyip ERDOĞAN
  görevlendirilmiştir**." (Erdoğan'ın Siirt milletvekilliği 9 Mart 2003 ara seçimindendir.)
- **59 — başlangıç 14.3.2003:** "T.C. BAŞBAKANLIK … **14 Mart 2003** … Recep Tayyip ERDOĞAN
  Başbakan — BAKANLAR KURULU LİSTESİ"; Cumhurbaşkanlığı tezkeresi aynı gün.
- **59 — bitiş nedeni `erken-secim`:** [B] **TBMM Kararı 891 (3/5/2007, RG 3.5.2007/26511
  mükerrer)**: "Türkiye Büyük Millet Meclisi genel seçimlerinin **yenilenmesine** ve seçimin
  22 Temmuz 2007 Pazar günü yapılmasına … karar verilmiştir."
- **60 — başlangıç 29.8.2007:** "29 Ağustos 2007 … İlgi yazınızla **yeniden kurulması** için
  görevlendirildiğim Bakanlar Kurulunda… Recep Tayyip ERDOĞAN Başbakan"; Cumhurbaşkanlığı:
  "Bakanlar Kurulu'nun **İstanbul Milletvekili ve Adalet ve Kalkınma Partisi Genel Başkanı**
  Recep Tayyip ERDOĞAN tarafından kurulması…" Liste tek parti (AK Parti).
- **60 — bitiş nedeni `secim`:** 61'in başlangıcı 6.7.2011, 12 Haziran 2011 genel seçiminin
  ardından. 2011 seçimi için TBMM'nin bir **yenileme kararı yoktur**: Resmî Gazete'de 2010–2011
  taramasında 891 sayılı karara benzer bir "seçimlerin yenilenmesine dair karar" bulunmadı ve
  2007-10-referandumuyla milletvekili seçimleri dört yılda bire indirilmişti (22.7.2007 → yaklaşık
  dört yıl sonra 12.6.2011) → olağan takvim, `secim`.
- **61 — başlangıç 6.7.2011:** "B.02.0.PPG.0.12-300-01-7009 **6 Temmuz 2011** … Recep Tayyip
  ERDOĞAN Başbakan — BAKANLAR KURULU LİSTESİ" (26 üyenin tamamı milletvekili); mükerrer RG'nin
  kapağı: "**İstanbul Milletvekili ve Adalet ve Kalkınma Partisi Genel Başkanı** Recep Tayyip
  ERDOĞAN Başkanlığında Kurulan Bakanlar Kurulunun Atanmasına Dair Tezkere".
- **61 — bitiş nedeni `cumhurbaskani-secimi`:** [B] YSK Kararı 2014/3719: Erdoğan 10 Ağustos
  2014'te 12. Cumhurbaşkanı seçildi; 62. Hükümet 29 Ağustos 2014'te kuruldu. İkinci kaynak:
  Demirkol (2023), s. 374: "**Erdoğan'ın Cumhurbaşkanı seçilmesi ile AK Parti liderliğine geçen
  Ahmet Davutoğlu 62. Hükümeti kurmuştur**."
- **62 — başlangıç 29.8.2014:** "T.C. BAŞBAKANLIK **29 Ağustos 2014** … Ahmet DAVUTOĞLU
  Başbakan — BAKANLAR KURULU LİSTESİ" (26 üye; mükerrer RG kapağı "…Adalet ve Kalkınma Partisi
  Genel Başkanı Ahmet DAVUTOĞLU Başkanlığında Kurulan Bakanlar Kurulu").
- **62 — bitiş nedeni `erken-secim`:** [B] RG 28.8.2015/29459 4. mükerrer, Başbakanlık tezkeresi:
  "Türkiye Cumhuriyeti **Anayasasının 116 ncı maddesi uyarınca seçimlerin yenilenmesine** dair
  ilgi (a) kararınızdan sonra, ilgi (b) yazınız ile **geçici Bakanlar Kurulunu** kurmak üzere
  Başbakan olarak atanmış bulunmaktayım." İkinci kaynak: Demirkol (2023), s. 374: "**2015
  Haziran-2015 Kasım genel seçimleri arası dönemde hiçbir parti tek başına mecliste hükümet**
  [kuracak çoğunluğu elde edememiştir]". (62. Hükümet'in istifasına dair ayrı bir tezkere Resmî
  Gazete'de yayımlanmamıştır — Temmuz–Ağustos 2015 tarandı.)
- **63 — başlangıç 28.8.2015, `tip: koalisyon`, `partiler: [akp, hdp]`:**
  [B] RG 28.8.2015/29459 4. mükerrer, **"GEÇİCİ BAKANLAR KURULUNUN ATANMASINA DAİR İŞLEM"**:
  "Anayasanın **114 üncü maddesi** uyarınca; **Adalet, İçişleri ve Ulaştırma, Denizcilik ve
  Haberleşme Bakanları bağımsızlardan** olmak üzere, geçici Bakanlar Kuruluna **siyasi parti
  gruplarından oranlarına göre alınacak üye sayıları**, Türkiye Büyük Millet Meclisi Başkanı
  tarafından tespit edilerek şahsıma bildirilmiştir. Bu çerçevede, geçici Bakanlar Kurulu üyeliği
  için **partililere Bakanlık teklif edilmiş**; bu teklifi **kabul eden partililerden** ve teklif
  edilen Bakanlığı **kabul etmeyen partililer yerine bağımsızlardan** olmak üzere … üyeler
  belirlenmiştir." → kabinede birden fazla parti var (spesifikasyon §5.8 ölçütü: `koalisyon`).
  Kabine başkanı [B] RG kapağına göre "Konya Milletvekili ve **Adalet ve Kalkınma Partisi Genel
  Başkanı** Ahmet DAVUTOĞLU" → AK Parti.
  **Hangi partiler bakan verdi:** ikinci kaynak **Demirkol (2023), s. 381**: "2015 yılında
  kurulan seçim hükümetinde de **muhalefetteki CHP ve MHP 63. Hükümete bakan vermeyi reddettiği**
  için atanmış bakan oranı %53,6 olmuştur." 25. Dönem TBMM'sinde grubu olan partiler [B] YSK
  96/E'ye göre AK PARTİ, CHP, MHP ve HDP'dir; CHP ile MHP bakan vermediğine göre AK Parti dışında
  bakan veren tek grup **HDP**'dir. Listede AK Parti dışından iki milletvekili bakan vardır:
  **Kocaeli Milletvekili Ali Haydar KONCA** (Avrupa Birliği Bakanı) ve **İzmir Milletvekili
  Müslüm DOĞAN** (Kalkınma Bakanı); [B] YSK "25. Dönem Milletvekili Genel Seçimi — Partilerin
  Kazandığı Milletvekili Sayıları" (`…/7Haziran2015/2015-MV_dagilimlari.pdf`) Kocaeli'de HDP 1,
  İzmir-1 ve İzmir-2'de HDP 1'er milletvekili gösteriyor.
  ~~**Sınırlılık:** bu iki bakanın HDP'li olduğunu adıyla söyleyen bir [B] belge bulunamadı.~~
  **→ Düzeltme turu 1 (2026-09-25) madde 4: YSK'nın 7 Haziran 2015 Kesin Aday Listesi ve
  milletvekili dağılımı tablosuyla iki bakanın HDP milletvekili olduğu [B] kanıtlandı.**
- **63 — bitiş nedeni `erken-secim`:** 1 Kasım 2015 yenileme seçimi yapıldı ([B] YSK 96/D–E) ve
  64. Hükümet 24 Kasım 2015'te kuruldu. Demirkol (2023) 63'ü "**2015 yılında kurulan seçim
  hükümeti**" diye anıyor (s. 375, 381).
- **64 — başlangıç 24.11.2015:** [B] RG 24.11.2015 mükerrer: "T.C. BAŞBAKANLIK **24 Kasım
  2015** … Ahmet DAVUTOĞLU Başbakan — BAKANLAR KURULU LİSTESİ" (27 üyenin tamamı milletvekili,
  mükerrer kapağı "…Adalet ve Kalkınma Partisi Genel Başkanı Ahmet DAVUTOĞLU"). `tip: tek-parti`
  ([B] YSK 96/E: AK Parti 317/550 çoğunluk).
- **64 — bitiş 24.5.2016, `bitisNedeni: null`:** [B] RG 24.5.2016/29721 mükerrer, "**İzmir
  Milletvekili ve Adalet ve Kalkınma Partisi Genel Başkanı Binali YILDIRIM** Başkanlığında
  Kurulan Bakanlar Kurulunun Atanmasına Dair Tezkere" → 65. hükümetin kuruluşu. 64. Hükümet'in
  **istifasına dair bir tezkere Resmî Gazete'de yayımlanmamıştır** (Mayıs 2016'nın tamamı
  tarandı) → bitiş nedeni doğrulanamadı, `null` bırakıldı (dönem 7'ye devredildi).

**`tip` gerekçeleri (kabine bileşimi + meclis çoğunluğu):** 58–62 ve 64'te Bakanlar Kurulu
listelerinde tek parti (AK Parti) var ve AK Parti'nin meclis çoğunluğu [B] seçim kayıtlarından
geliyor (2002: 363/550, 2007: 341/550, 2011: 327/550, 2015 Kasım: 317/550) → `tek-parti`.
63'te kabine çok partili → `koalisyon`.

**İkinci kaynak (nitel alanlar, akademik):** Özhan DEMİRKOL, "1923'ten 2018'e Türkiye'de Hükümet
ve Bakanlıklar", *Fiscaoeconomia* 7(1), 2023, s. 365-390
(`dergipark.org.tr/en/download/article-file/2660114`): "**2002 yılında Abdullah Gül tarafından
kurulan 58. Hükümet**, Adalet ve Kalkınma Partisi (AK Parti) lideri Recep Tayyip Erdoğan'ın
**milletvekili olarak seçilmesi sonrası yerini Erdoğan liderliğindeki 59. Hükümete bırakmıştır**.
Erdoğan'ın Cumhurbaşkanı seçilmesi ile AK Parti liderliğine geçen **Ahmet Davutoğlu 62. Hükümeti
kurmuştur**." (s. 374); "En uzun süre görev yapan hükümet **1.629 gün ile 1. Erdoğan hükümeti
(59. hükümet)**" (s. 375 — 14.3.2003'ten 29.8.2007'ye tam 1.629 gün vardır; hesaplandı,
tarihlerin bağımsız doğrulaması); "2015 yılında kurulan **seçim hükümetinin (63. Hükümet)**"
(s. 375).
- Erişim: 2026-09-23.

**Araç uyarısı — `cb-halk` adaylarında `parti` alanı kullanılamadı:** spesifikasyon §5.5 aday
satırını `{ad:"…", parti:"akp", oy:…}` diye tanımlıyor ve `sandik-mantik.js` de `a.parti`
varsa soyağacı bağı, yoksa `a.destek` metnini çiziyor. Ama `araclar/dogrula.js` (satır 40) aday
satırlarını genel seçim `sonuc` satırlarıyla aynı işlevde denetlediği için `parti` ile `ad`ı aynı
satırda görünce **hata** veriyor ("satırda hem parti hem ad"). Bu görevde yalnızca `veri/sandik.js`
ve bu defter değiştirilebildiğinden, üç adayın tamamı `destek:` ile yazıldı ("AK Parti",
"CHP ve MHP'nin ortak adayı", "HDP"); böylece `dogrula.js` "hata yok" diyor ama Erdoğan ve
Demirtaş satırlarında soyağacı bağı (ve `cb-halk` kartının parti rengi) oluşmuyor. Çözüm
`dogrula.js`'te tek satırlık bir düzeltmedir (aday satırlarını bu denetimden muaf tutmak) ve
ayrı bir göreve bırakıldı.

### 2004-03-yerel

- **[B] YSK, "C-) Belediye Başkanlığı ve Belediye Meclisi Üyeliği Seçimleri"**
  (`ysk.gov.tr/doc/dosyalar/docs/2004MahalliIdareler/belediyebsk/Belediyebsk.pdf`), künyesi:
  "**Kaynak: 11 Mayıs 2004 tarih ve 2002 sayılı YSK Kararı / 12 Mayıs 2004 tarih ve 25460 sayılı
  Resmi Gazete**". Belediye **meclis üyeliği** bölümü: kayıtlı seçmen **34.213.138**,
  üyelik için oy kullanan **25.067.950** (katılma %73,270), **üyelik seçiminde geçerli oy
  23.893.656**, seçimi yapılan üyelik 34.477.
  AK PARTİ 9.635.145 (%40,325), CHP 4.912.313 (%20,559), MHP 2.500.601 (%10,466),
  DYP 2.286.020 (%9,567), SOSYALDEMOKRAT HALK PARTİSİ 1.204.431 (%5,041),
  SAADET PARTİSİ 1.111.017 (%4,650), ANAVATAN PARTİSİ 682.264 (%2,855),
  GENÇ PARTİ 607.847 (%2,544), DEMOKRATİK SOL PARTİ 484.555 (%2,028),
  BÜYÜK BİRLİK PARTİSİ 179.090 (%0,750), BAĞIMSIZ TÜRKİYE PARTİSİ 66.582 (%0,279),
  YENİ TÜRKİYE PARTİSİ 56.912 (%0,238), BAĞIMSIZLAR 39.968 (%0,167),
  İŞÇİ PARTİSİ 33.770 (%0,141), ÖZGÜRLÜK VE DAYANIŞMA PARTİSİ 29.269 (%0,122),
  EMEĞİN PARTİSİ 28.011 (%0,117), MİLLET PARTİSİ 12.223 (%0,051),
  TÜRKİYE KOMÜNİST PARTİSİ 12.139 (%0,051), AYDINLIK TÜRKİYE PARTİSİ 7.366 (%0,031),
  DEMOKRAT PARTİ 3.742 (%0,016), LİBERAL DEMOKRAT PARTİ 391 (%0,002);
  **T O P L A M 23.893.656**.
- **İç tutarlılık (hesaplandı):** 20 parti + bağımsız oy toplamı = **23.893.656**, belgenin kendi
  toplamına tam eşit.
- **`ad:` ile yazılanlar:** *Sosyaldemokrat Halk Partisi* (2002'de kurulan SHP; soyağacındaki
  `shp` kaydı 1985–1995 arası **Sosyaldemokrat Halkçı Parti**'nindir, ayrı tüzel kişilik) ve
  *Genç Parti* — ikisinin de oyu %1'in üstünde olduğu için ayrı satırda.
  **"Diğer" (partiSayisi 4, oy 98.310):** BTP 66.582 + Millet Partisi 12.223 + TKP 12.139 +
  Aydınlık Türkiye Partisi 7.366.
- **Büyükşehir — [B] TÜİK Mahalli İdareler Seçim Sonuçları Veri Tabanı**
  (`biruni.tuik.gov.tr/secimdagitimapp/yerel.zul` → "Büyükşehir belediye başkanlığı / Belediye
  sonucu / 2004 / Tüm iller"; üretilen rapor `rapory.tuik.gov.tr/...html`),
  "Belediyelere göre 28 Mart 2004 Büyükşehir Belediye Başkanlığı Seçimi sonucu":
  - **İstanbul** (geçerli 4.231.487): **AK PARTİ 1.917.577**, CHP 1.223.856, SAADET 228.615,
    DYP 206.410, MHP 173.274, SHP 153.840, GENÇ P. 145.120 → AK Parti kazandı.
  - **Ankara** (geçerli 1.636.633): **AK PARTİ 901.001**, SHP 341.231, CHP 206.630,
    MHP 74.815, DYP 32.376 → AK Parti kazandı.
  - **İzmir** (geçerli 1.192.541): **CHP 562.561**, AK PARTİ 388.336, GENÇ P. 71.671,
    MHP 48.535, SHP 49.382 → CHP kazandı.
  - **Çapraz doğrulama:** aynı raporun "Türkiye" satırı (kayıtlı 15.426.031, kullanan 10.891.703,
    geçerli 10.468.870; AK PARTİ 4.822.636, CHP 2.560.382, SHP 769.187, DYP 565.626,
    MHP 535.426, SAADET 423.014, GENÇ P. 317.128, DSP 237.509, ANAP 81.141, BBP 45.815,
    BTP 28.487, İP 18.802, TKP 17.965, ATP 11.189, YTP 10.667, MP 6.512, BAĞIMSIZ 16.244,
    EMEP 1.140) **[B] YSK "B-) Büyükşehir Belediyesi Başkanlığı Seçimi Sonucu"**
    (`…/2004MahalliIdareler/buyuksehir/Buyuksehir.pdf`, aynı YSK kararı/RG künyesi) ile
    **22 satırın tamamında birebir** aynıdır. YSK bu ölçüyü yalnızca ülke toplamı olarak,
    TÜİK ise şehir şehir yayımlıyor.
  - ~~**Sınırlılık:** üç şehrin şehir bazındaki rakamlarını yayımlayan ikinci bir kurum
    bulunamadı.~~ **→ Düzeltme turu 1 (2026-09-25) madde 3: YSK'nın kendi şehir bazlı 2004
    büyükşehir dosyaları bulundu, alan artık iki [B] kaynaklı.**
- **`tarih`: 28 Mart 2004** — [B] YSK belgesinin başlığı ve "1- Bu tesbitler, **28 Mart 2004
  günü** sandık kurullarınca düzenlenip…" açıklaması.
- Erişim: 2026-09-23.

### 2009-03-yerel

- **[B] YSK, "LİSTE - 4 / 29.03.2009 Genel Mahalli İdareler Seçim Sonucu — Belediye Meclisi
  Üyeliği Seçimleri Sonucu"**
  (`…/docs/2009MahalliIdareler/ResmiGazete/BelediyeMeclisUyeligi.pdf`):
  kayıtlı seçmen (cezaevi seçmenleri dahil) **39.787.986**, oy kullanan **33.447.257**
  (katılma %84,06), **geçerli oy 32.072.363**, seçimi yapılan üyelik 32.392.
  AK PARTİ 12.237.325 (%38,16), CHP 7.966.710 (%24,84), MHP 5.336.695 (%16,64),
  SAADET PARTİSİ 1.807.745 (%5,64), DEMOKRATİK TOPLUM PARTİSİ 1.687.733 (%5,26),
  DEMOKRAT PARTİ 1.181.074 (%3,68), DEMOKRATİK SOL PARTİ 945.722 (%2,95),
  BÜYÜK BİRLİK PARTİSİ 508.055 (%1,58), ANAVATAN PARTİSİ 202.976 (%0,63),
  BAĞIMSIZ TÜRKİYE PARTİSİ 82.848 (%0,26), BAĞIMSIZ 43.633 (%0,14),
  ÖZGÜRLÜK VE DAYANIŞMA PARTİSİ 25.557 (%0,08), EMEK PARTİSİ 21.100 (%0,07),
  MİLLET PARTİSİ 6.685 (%0,02), HALKIN YÜKSELİŞİ PARTİSİ 5.566 (%0,02),
  HAK VE ÖZGÜRLÜKLER PARTİSİ 4.618 (%0,01), TÜRKİYE KOMÜNİST PARTİSİ 3.409 (%0,01),
  LİBERAL DEMOKRAT PARTİ 2.451 (%0,01), İŞÇİ PARTİSİ 2.258 (%0,01),
  BARIŞ VE DEMOKRASİ PARTİSİ 203 (%0,00); **TOPLAM 32.072.363**.
- **İç tutarlılık (hesaplandı):** oy toplamı = **32.072.363**, belgenin kendi toplamına tam eşit.
- **"Diğer" (partiSayisi 5, oy 103.126):** BTP 82.848 + Millet Partisi 6.685 + HYP 5.566 +
  Hak ve Özgürlükler Partisi 4.618 + TKP 3.409.
- **Büyükşehir — iki kaynak:**
  - **[B] YSK, "Büyükşehir Belediye Başkanlıklarının Siyasi Partilere Dağılımı (29 Mart 2009)"**
    (`…/2009MahalliIdareler/SecimSonuclari/Buyuksehir.pdf`): İSTANBUL **AK PARTİ**,
    ANKARA **AK PARTİ**, İZMİR **CHP** (tablo her il için tek bir "1" işareti koyuyor).
  - **[B] TÜİK Mahalli İdareler Seçim Sonuçları Veri Tabanı**, "Belediyelere göre 29 Mart 2009
    Büyükşehir Belediye Başkanlığı Seçimi sonucu": İstanbul (geçerli 6.946.435)
    **AK PARTİ 3.105.555** > CHP 2.568.710; Ankara (geçerli 2.440.455) **AK PARTİ 940.230** >
    CHP 763.879 > MHP 667.871; İzmir (geçerli 1.972.359) **CHP 1.107.562** > AK PARTİ 599.395.
    Uyuşmazlık: yok.
- Erişim: 2026-09-23.

### 2014-03-yerel

- **[B] YSK, "LİSTE-4 / 30 Mart 2014 Mahalli İdareler Genel Seçimi — Belediye Meclisi Üyeliği
  Seçimleri Sonucu"** (`…/docs/2014MahalliIdareler/BelediyeMeclisUyeligi2014.pdf`):
  kayıtlı seçmen (cezaevi seçmenleri dahil) **48.843.157**, oy kullanan **43.543.717**
  (katılma %89,15), **geçerli oy 41.527.387**, seçimi yapılan üyelik 20.500.
  AK PARTİ 17.802.976 (%42,87), CHP 10.938.262 (%26,34), MHP 7.399.119 (%17,82),
  BARIŞ VE DEMOKRASİ PARTİSİ 1.729.297 (%4,16), SAADET PARTİSİ 1.180.322 (%2,84),
  HALKLARIN DEMOKRATİK PARTİSİ 881.830 (%2,12), BÜYÜK BİRLİK PARTİSİ 628.729 (%1,51),
  DEMOKRAT PARTİ 287.209 (%0,69), DEMOKRATİK SOL PARTİ 144.337 (%0,35),
  İŞÇİ PARTİSİ 100.021 (%0,24), HÜR DAVA PARTİSİ 87.726 (%0,21),
  BAĞIMSIZ TÜRKİYE PARTİSİ 82.768 (%0,20), TÜRKİYE KOMÜNİST PARTİSİ 60.298 (%0,15),
  BAĞIMSIZ 49.594 (%0,12), ÖZGÜRLÜK VE DAYANIŞMA PARTİSİ 45.204 (%0,11),
  HAK VE ÖZGÜRLÜKLER PARTİSİ 35.256 (%0,08), HAK VE EŞİTLİK PARTİSİ 34.125 (%0,08),
  MİLLET PARTİSİ 15.068 (%0,04), DOĞRU YOL PARTİSİ 11.029 (%0,03),
  LİBERAL DEMOKRAT PARTİ 9.122 (%0,02), YURT PARTİSİ 3.364 (%0,01),
  TOPLUMSAL UZLAŞMA REFORM VE KALKINMA PARTİSİ 1.242 (%0,00), EMEK PARTİSİ 489 (%0,00);
  ayrıca oy alamayan (0) beş parti (Alternatif Parti, Halkın Kurtuluş Partisi, Genç Parti,
  Muhafazakâr Yükseliş Partisi). **TOPLAM 41.527.387**.
- **İç tutarlılık (hesaplandı):** oy toplamı = **41.527.387**, belgenin kendi toplamına tam eşit.
- **"Diğer" (partiSayisi 9, oy 330.876):** Hür Dava Partisi 87.726 + BTP 82.768 + TKP 60.298 +
  Hak ve Özgürlükler Partisi 35.256 + Hak ve Eşitlik Partisi 34.125 + Millet Partisi 15.068 +
  DYP 11.029 + Yurt Partisi 3.364 + Toplumsal Uzlaşma Reform ve Kalkınma Partisi 1.242
  (oy almayan beş parti "Diğer"e sayılmadı, çünkü oyları sıfır).
- **Büyükşehir — iki kaynak:**
  - **[B] YSK, "30 Mart 2014 Mahalli İdareler Genel Seçimleri — Büyükşehir Belediye Başkanlığını
    Kazanan Adaylar"** (`…/2014MahalliIdareler/Buyuksehir-KazananAdaylar.xlsx`):
    "İSTANBUL | ADALET VE KALKINMA PARTİSİ | KADİR TOPBAŞ", "ANKARA | ADALET VE KALKINMA
    PARTİSİ | İBRAHİM MELİH GÖKÇEK", "İZMİR | CUMHURİYET HALK PARTİSİ | AZİZ KOCAOĞLU".
  - **[B] TÜİK Mahalli İdareler Seçim Sonuçları Veri Tabanı**, "Belediyelere göre 30 Mart 2014
    Büyükşehir Belediye Başkanlığı Seçimi sonucu": İstanbul (geçerli 8.553.814)
    **AK PARTİ 4.101.906** > CHP 3.428.454; Ankara (geçerli 3.162.112) **AK PARTİ 1.417.212** >
    CHP 1.385.576 (fark 31.636); İzmir (geçerli 2.637.550) **CHP 1.308.134** > AK PARTİ 947.516.
    Aynı raporun "Türkiye" satırı (kayıtlı 40.727.194, kullanan 36.440.968, geçerli 34.913.716;
    AK PARTİ 15.898.025, CHP 10.835.876, MHP 4.764.833, BDP 1.079.026, HDP 817.494,
    SAADET 579.231, BBP 248.169 …) **[B] YSK "LİSTE-2 Büyükşehir Belediye Başkanlığı Seçimleri
    Sonucu"** ile birebir aynıdır. Uyuşmazlık: yok.
  - **Ankara itirazı:** kayıttaki değer YSK'nın **kesinleşmiş** sonucudur (yukarıdaki "Kazanan
    Adaylar" listesi); itiraz süreci kaynak belgelere yansımadığı için `not` alanına yazılmadı.
- Erişim: 2026-09-23.

**Yerel seçimlerde ikinci kaynak sorunu (2004, 2009, 2014) — açık uyarı** (→ **Düzeltme turu 1 madde 2: ikinci kaynak bulunamadı, ulusal sayılar `null` yapıldı**)**:** ülke geneli
**belediye meclisi** rakamlarının birincil kaynağı YSK'nın kesin sonuç ilanıdır (2004'te
belgenin künyesinde YSK Kararı 2002 ve Resmî Gazete 12.5.2004/25460 yazılı; 2009 ve 2014
belgeleri YSK'nın "ResmiGazete" klasöründen alınmıştır). Bu ölçüyü (belediye meclisi) ülke
geneli olarak yayımlayan **YSK dışında bir kurum bulunamadı**: TÜİK'in Veri Portalı yalnızca
İl Genel Meclisi tablolarını indirilebilir yapıyor, TÜİK'in Mahalli İdareler Veri Tabanı'nda
belediye meclisi için ülke toplamı üreten bir rapor seçeneği yok (yalnızca il/ilçe ve belediye
kırılımı; "Bölge sonucu" yalnızca 2014–2024). Yapılan doğrulama, her üç belgenin **kendi parti
satırlarının toplamının belgenin kendi "TOPLAM" satırına tam eşit** olmasıdır (üçünde de fark
sıfır). Büyükşehir ölçüsünde ise TÜİK ile YSK'nın ülke toplamları **birebir** örtüşüyor
(2004 ve 2014 için satır satır doğrulandı), yani iki kurum aynı resmî veriyi yayımlıyor.

### 2007-10-referandum

- **[B] YSK, "Anayasa Değişikliği Halkoylaması Sonuç Tutanağı", 30/10/2007**
  (`…/docs/2007Referandum/Sonuc/sonuc.pdf`): ülke geneli sandık seçmen listesine kayıtlı
  (gümrük dahil) **42.690.252**, halkoylamasına katılanlar **28.819.319** (katılma **%67,51**),
  geçerli oyların toplamı **28.167.661**, **evet 19.422.714** (%68,95),
  **hayır 8.744.947** (%31,05). Metin: "21/10/2007 Pazar günü **5678 sayılı kanunla yapılan
  Anayasa Değişikliğinin** halkoylamasına sunulması sonucu ülke genelinde geçerli oyların
  yarısından çoğunun (%68.95) **EVET** olduğu tespit edilmiş…" → `karar: "kabul"`.
- **İkinci kaynak — [B] YSK il tablosu + gümrük tablosu, toplamı hesaplandı:**
  `…/2007Referandum/iller/turkiye.pdf` (81 ilin satırı; belgenin kendi TOPLAM satırı: kayıtlı
  42.665.149, katılan 28.794.216, geçerli 28.142.781, evet 19.403.987, hayır 8.738.794 — 81 il
  satırının betikle toplamı bu satıra **tam eşit**) ve `…/2007Referandum/Gumruk/gumruk.pdf`
  (9 gümrük kapısı, TOPLAM: 25.103 / 25.103 / 24.880 / evet 18.727 / hayır 6.153).
  **İl + gümrük toplamları ulusal tutanağın beş rakamını da tam veriyor:**
  42.665.149+25.103 = 42.690.252; 28.794.216+25.103 = 28.819.319;
  28.142.781+24.880 = 28.167.661; 19.403.987+18.727 = 19.422.714;
  8.738.794+6.153 = 8.744.947. Uyuşmazlık: yok.
- **`konu` alanı — [B] 5678 sayılı Kanun** (RG 16.6.2007): "Türkiye Cumhuriyeti Anayasasının
  Bazı Maddelerinde Değişiklik Yapılması Hakkında Kanun"; MADDE 1 Anayasa'nın 77. maddesindeki
  "beş" ibaresini "dört" yapıyor, değişik MADDE 101 "Cumhurbaşkanı … **halk tarafından
  seçilir**" diyor.
- **`not` — sayıların kapsamı:** ulusal tutanağın "kayıtlı" satırı **gümrük kapıları dahildir**
  (tutanakta açıkça "(Gümrük Dahil)" yazıyor) ve yukarıdaki toplama bunu doğruluyor.
- **`tutumlar` yazılmadı:** partilerin evet/hayır tutumlarını iki kaynakla doğrulayacak bir
  tarama bu turda yapılamadı; spesifikasyon §5.4 "tutumu kaynaklarla doğrulanamayan parti
  listeye hiç yazılmaz" gereği alan boş bırakıldı (Görev 12'ye devredildi).
- Erişim: 2026-09-23.

### 2010-09-referandum

- **[B] YSK, "Anayasa Değişikliklerinin Halkoylaması Sonuç Tutanağı", 22.09.2010**
  (`…/docs/2010Referandum/KesinSonuc/Sonuc.pdf`): ülke geneli sandık seçmen listesine kayıtlı
  **52.051.828**, halkoylamasına katılanlar **38.369.099** (katılma **%73,71**), geçerli oyların
  toplamı **37.644.037**, **evet 21.787.244** (%57,88), **hayır 15.856.793** (%42,12).
  Metin: "**07.05.2010 tarih ve 5982 sayılı Kanun** ile Türkiye Cumhuriyeti Anayasasının bazı
  maddelerinde yapılan değişikliklerin … 12/09/2010 Pazar günü yapılan halkoylaması sonucu,
  Ülke geneli geçerli oyların yarısından çoğunun 21.787.244 EVET oyu (%57,88) olarak
  gerçekleştiği, **Anayasa Değişikliklerinin Türk Milleti adına kabul edilmiş** olduğu…"
  → `karar: "kabul"`. Tutanağın notu: "**Gümrük Kapıları ve Ceza İnfaz Kurumlarında kullanılan
  oylar dahil edilmiştir.**"
- **İkinci kaynak — [B] YSK il tablosu + gümrük tablosu, toplamı hesaplandı:**
  `…/2010Referandum/KesinSonuc/ilSonuclari.pdf` (81 il; belgenin TOPLAM satırı kayıtlı
  49.495.493, katılan 38.172.800, geçerli 37.449.300, evet 21.667.427, hayır 15.781.873 — 81 il
  satırının betikle toplamı bu satıra **tam eşit**) ve `…/KesinSonuc/Gumruk.pdf`
  (39 gümrük kapısı; TOPLAM katılan 196.299, geçerli 194.737, geçersiz 1.562, evet 119.817,
  hayır 74.920; **NOT: "YURTDIŞI SEÇMEN KÜTÜĞÜNE KAYITLI SEÇMEN SAYISI 2.556.335'DİR."**).
  **Toplamlar ulusal tutanağı tam veriyor:** 49.495.493 + 2.556.335 = **52.051.828**;
  38.172.800 + 196.299 = **38.369.099**; 37.449.300 + 194.737 = **37.644.037**;
  21.667.427 + 119.817 = **21.787.244**; 15.781.873 + 74.920 = **15.856.793**.
  Uyuşmazlık: yok.
- **`not` — sayıların kapsamı:** `kayitli` yurt dışı seçmen kütüğündeki 2.556.335 seçmeni de
  içeriyor; bu seçmenler yalnızca gümrük kapılarında oy kullanabildiği için katılım oranı
  buna göre okunmalıdır.
- **`konu`:** [B] tutanaktaki ifade (5982 sayılı Kanun'la Anayasa'nın bazı maddelerinde yapılan
  değişiklikler).
- **`tutumlar` yazılmadı** (2007 kaydındaki gerekçeyle aynı).
- Erişim: 2026-09-23.

### 2003 Siirt seçimi — eklenmedi (Görev 12'ye devredildi)

- **Bulunanlar:** [B] Resmî Gazete 12.3.2003, Cumhurbaşkanlığı tezkeresi: "Bakanlar Kurulu'nun
  yeniden kurulması için … **Siirt Milletvekili** ve Adalet ve Kalkınma Partisi Genel Başkanı
  Sayın **Recep Tayyip ERDOĞAN** görevlendirilmiştir." → Erdoğan'ın Siirt milletvekilliği
  resmî olarak doğrulandı. [B] Resmî Gazete 12.3.2003 künye satırı: "**11/3/2003 Tarihli ve
  25045 Mükerrer sayılı Resmî Gazete'de, 212 sayılı Yüksek Seçim Kurulu Kararı
  yayımlanmıştır.**"
- **Bulunamayanlar:** seçimin **günü/ayı**, **seçim çevresi başına sandalye sayısı** ve
  **sonucu** hiçbir okunabilir resmî belgede bulunamadı. 11.3.2003 mükerrer Resmî Gazete
  (`resmigazete.gov.tr/eskiler/2003/03/20030311M1.htm`) yalnızca **taranmış görüntülerden**
  (`20030311M1-1.gif`, `20030311M1-2.gif`) oluşuyor, metin katmanı yok; YSK'nın karar arşivinde
  `Kararlar/2003Pdf/2003-212.pdf` adresi PDF döndürmüyor; YSK'nın "Ara Seçim Arşivi" sayfası
  yalnızca 2009 ve sonrasındaki **mahalli idareler** ara seçimlerini listeliyor.
- Bu yüzden `2003-03-ara` kaydı **eklenmedi**. Bir sonraki turda denenecekler: 11.3.2003
  mükerrer RG görüntülerinin OCR'ı; TBMM 22. Dönem tutanaklarında yeni Siirt milletvekillerinin
  andiçme birleşimi; YSK'nın karar arama motoru (`ysk.gov.tr/tr/ysk-kararlari/1524`).
- Erişim: 2026-09-23.

## Düzeltme turu 1 (2026-09-25) — dönem 6 controller incelemesi sonrası (SPEC ❌ → düzeltildi)

İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d6-verdict.md`.
Bulgular: **Important #1** (2014 CB adayları `destek:` ile yazılmış), **#2** (yerel ulusal
belediye meclisi sayıları tek kaynaklı), **#3** (2004 büyükşehir tek kaynaklı),
**#4** (hükümet 63'ün `partiler` alanı çıkarım), **#5** (referandum `tutumlar` boş),
ayrıca ham kaynak kanıtı ve 2003 Siirt iddiasının kanıtlanması.

### 1. `2014-08-cb-halk` adayları — `parti:` ile bağlandı (çözüldü)

`araclar/dogrula.js` commit `00573ad` ile düzeltildiği için aday satırında `ad:` (kişi adı) ve
`parti:` birlikte kullanılabiliyor. Veri güncellendi:
- **Recep Tayyip Erdoğan → `parti: "akp"`.** [B] YSK Kararı 2014/3579 (7/8/2014): AK Parti Genel
  Başkan Yardımcısı'nın dilekçesinde "…partilerinin pankartın sahibi adayı desteklemediği,
  **Cumhurbaşkanı adayı Başbakan Recep Tayyip ERDOĞAN'ı desteklediğinin** her türlü izahtan
  vareste olduğu…". İkinci kaynak: Selçuk İletişim (karikatür makalesi) İngilizce özeti —
  "…Erdoğan **for the Ak Party**…".
- **Selahattin Demirtaş → `parti: "hdp"`** ~~(çatı aday değil, HDP adayı)~~
  **→ Düzeltme turu 2 (2026-09-25) madde 1: resmî belgelerde parti kaydı bulunmadığı için
  `destek: "HDP adayı"` olarak değiştirildi.** İki bağımsız akademik kaynak: (a) **Bekir Berat Özipek, "Türkiye Siyasetinde 2014 Cumhurbaşkanlığı Seçimi"**
  (`dergipark.org.tr/en/download/article-file/790586`): "…İhsanoğlu ve üçüncüsü de **HDP adayı
  Selahattin Demirtaş**'tı."; (b) **Selçuk İletişim**, "2014 Cumhurbaşkanlığı Seçimindeki
  Cumhurbaşkanı Adaylarının Karikatürlere Yansıması"
  (`dergipark.org.tr/tr/download/article-file/178268`), İngilizce özet: "…**Selahattin Demirtaş
  for the HDP**…" ve Türkçe metin: "…tin Demirtaş, **MHP ve CHP'nin ortak adayları ise,
  Ekmeleddin İhsanoğlu** olmuştur." (aynı cümle Demirtaş'ı İhsanoğlu'ndan ayırıyor: ortak aday
  yalnızca İhsanoğlu'dur).
- **Ekmeleddin Mehmet İhsanoğlu → `destek: "CHP ve MHP'nin ortak adayı"`** (tek bir partinin
  adayı olmadığı için `parti:` yazılmadı; yukarıdaki iki akademik kaynak + [B] YSK 2014/3579'un
  "rakip partilerin adayı" ifadesi).

### 2. Yerel seçimlerin ülke geneli belediye meclisi sayıları — `null`'a çekildi (çözüldü)

**Aranan yerler ve bulunan:**
- **TÜİK Veri Portalı** (`veriportali.tuik.gov.tr`, "belediye meclisi" ve "halkoylaması"
  aramaları): indirilebilir tablolar yalnızca **İl Genel Meclisi Üyeleri Seçimi Sonuçları
  (1963-1977 / 1984-2009 / 2014)** — belediye meclisi için ulusal tablo yok.
- **TÜİK Mahalli İdareler Seçim Sonuçları Veri Tabanı**
  (`biruni.tuik.gov.tr/secimdagitimapp/yerel.zul`): "Belediye meclisi üyeliği" seçildiğinde
  "Belediye sonucu / Bölge sonucu / Sandık sonucu / Kazanan adayların listesi" alt seçenekleri
  çıkıyor ama **"İl seçimi" listesi doğrudan "Adana" ile başlıyor; "<< Tüm iller >>" seçeneği
  YOK** (aynı liste "Büyükşehir belediye başkanlığı"nda "<< Tüm iller >>" ile başlıyor ve
  "Türkiye" satırlı rapor üretiyor). "Bölge sonucu" yalnızca 2024/2019/2014 sunuyor ve bölge
  seçimi istiyor. Dolayısıyla TÜİK bu ölçü için **ülke toplamı üretmiyor**.
- **TÜİK yayını No. 3584, *Mahalli İdareler Seçimi 29.03.2009*** (`tuik.gov.tr/indir/secim_2009/aklama.pdf`,
  11 s., `pdftotext -layout`): İÇİNDEKİLER'de belediye meclisi için üç tablo var
  ("4.1 Belediyelere göre…", "4.2 Sandık kurullarına göre…", "4.3 …kazanan belediye meclisi
  üyeleri") — **Türkiye toplamı tablosu yok**. Aynı yayının "3.1 Veri derleme tekniği" bölümü
  ayrıca şunu söylüyor: "2009 seçimlerine kadar, tablolarında yer alan **Türkiye toplam
  sonuçları**, il seçim kurulları tarafından YSK'ya gönderilen ve **YSK tarafından Resmi
  Gazete'de ilan edilen sonuçlardan** … üzerinde hiçbir değişiklik yapılmaksızın … aynen
  yayımlanmıştır." — yani TÜİK'in ulusal rakamları zaten YSK'nın rakamlarının aynen
  tekrarıdır, bağımsız bir ikinci kaynak değildir.
- **Resmî Gazete:** 2004 için YSK belgesinin künyesindeki 12.5.2004/25460 sayısı açıldı;
  ilgili "Yüksek Seçim Kurulunun No: 2002 Sayılı Kararı" sayfa içi bir bağlantı (`#23`) ve
  metin katmanı vermiyor.
- **Sonuç:** bağımsız ikinci kaynak bulunamadı. Spesifikasyon §8.1 ve dönem 4/5 emsali gereği
  `2004-03-yerel`, `2009-03-yerel` ve `2014-03-yerel` kayıtlarının `kayitli`, `kullanilan`,
  `gecerli` alanları ve bütün `sonuc` satırlarının `oy` değerleri **`null`** yapıldı; parti
  listesi (ve "Diğer"in `partiSayisi` değeri) korundu. Hesaplanan ham sayılar bu defterin
  yukarıdaki dönem 6 bölümünde kayıtlıdır ve kaynak bulunduğunda doğrudan geri yazılabilir.
- **1984/1989/1994/1999 boşluğu:** aynı arama bu yıllar için de sonuç vermedi (TÜİK'in ulusal
  belediye meclisi tablosu hiçbir yıl için yok). Buna karşılık YSK'nın
  `doc/dosyalar/docs/Mahalli/<yıl>/BelediyeMeclis/Pdf/<yıl>Mahalli-BelediyeMeclis-<İl>.pdf`
  ağacının **1994 ve 1999 için de** var olduğu bu turda tespit edildi (arama motoru üzerinden:
  `…/Mahalli/1994/BelediyeMeclis/Pdf/1994Mahalli-BelediyeMeclis-istanbul.pdf`,
  `…/Mahalli/1999/BelediyeMeclis/Pdf/1999Mahalli-BelediyeMeclis-Adana.pdf`). Bu il dosyaları
  dönem 5'in "1999'da dört il eksik" sorununu çözebilir ama **yine YSK kaynağıdır**, ikinci
  kaynak sorununu çözmez; bu yüzden dönem 4/5 kayıtlarına dokunulmadı ve bulgu Görev 12'ye not
  edildi.

### 3. `2004-03-yerel.buyuksehir` — ikinci kaynak bulundu (çözüldü, alan korundu)

YSK'nın 2004 arşiv sayfasında görünmeyen ama sunucuda duran bir dosya ağacı bulundu:
`https://www.ysk.gov.tr/doc/dosyalar/docs/Mahalli/2004/Buyuksehir/Pdf/2004Mahalli-Buyuksehir-<İl>.pdf`
(dosya adlarında il adı; `istanbul`, `izmir` küçük harfle, `Ankara` büyük harfle). Üç şehrin
"Belediyelere göre Büyükşehir Belediye Başkanlığı Seçimi sonucu" tablosunun toplam satırı
(`pdftotext -table`):

| | Geçerli oy | AK PARTİ | CHP | SHP | MHP | DYP | GENÇ P. |
|---|---|---|---|---|---|---|---|
| **İstanbul** | 4.231.487 | **1.917.577** | 1.223.856 | 153.840 | 173.274 | 206.410 | 145.120 |
| **Ankara** | 1.636.633 | **901.001** | 206.630 | 341.231 | 74.815 | 32.376 | 26.477 |
| **İzmir** | 1.192.541 | 388.336 | **562.561** | 49.382 | 48.535 | 32.708 | 71.671 |

Bu üç tablo, daha önce ikinci kaynak olarak kullanılan **TÜİK Mahalli İdareler Seçim Sonuçları
Veri Tabanı**'nın "Belediyelere göre 28 Mart 2004 Büyükşehir Belediye Başkanlığı Seçimi sonucu"
raporundaki İstanbul/Ankara/İzmir satırlarıyla **bütün sütunlarda birebir** aynıdır.
→ `buyuksehir` alanı artık **[B] YSK + [B] TÜİK** (iki ayrı kurum, iki ayrı yayın) ile
karşılanıyor; İstanbul AK Parti, Ankara AK Parti, İzmir CHP. Alan kaldırılmadı.

### 4. Hükümet 63'ün `partiler` alanı — [B] kanıt bulundu (çıkarım kaldırıldı)

Artık üç [B] belgeye dayanıyor:
1. **[B] Resmî Gazete 28.8.2015 / 29459 4. mükerrer**, "GEÇİCİ BAKANLAR KURULU LİSTESİ":
   "8 **Kocaeli Milletvekili Ali Haydar KONCA** Avrupa Birliği Bakanı", "19 **İzmir Milletvekili
   Müslüm DOĞAN** Kalkınma Bakanı"; kabine başkanı "Konya Milletvekili ve **Adalet ve Kalkınma
   Partisi Genel Başkanı** Ahmet DAVUTOĞLU"; ayrıca "Adalet, İçişleri ve Ulaştırma, Denizcilik
   ve Haberleşme Bakanları **bağımsızlardan**".
2. **[B] YSK, 7 Haziran 2015 Milletvekili Seçimleri Kesin Aday Listesi (Örnek: 41)**
   (`…/Milletvekili/7Haziran2015/2015MV-KesinAdayListesi.pdf`, `pdftotext -table`):
   - "KOCAELİ İLİ SEÇİM ÇEVRESİ … **HALKLARIN DEMOKRATİK PARTİSİ** … 1 **ALİ HAYDAR KONCA**
     YÜKSEK HUKUKÇU" (PDF s. 240–245).
   - "İZMİR-2 NOLU SEÇİM ÇEVRESİ … **HALKLARIN DEMOKRATİK PARTİSİ** … 1 **MÜSLÜM DOĞAN**
     YÜKSEK MÜHENDİS" (PDF s. 200–206).
3. **[B] YSK, "25. Dönem Milletvekili Genel Seçimi (7 Haziran 2015) — Partilerin Kazandığı
   Milletvekili Sayıları"** (`…/7Haziran2015/2015-MV_dagilimlari.pdf`): "56 KOCAELİ … HDP **1**
   … TOPLAM 11"; "45 İZMİR-2 … HDP **1** … TOPLAM 13". Her iki çevrede HDP listesinden yalnızca
   **birinci sıradaki** aday seçilebildiğine göre, RG'de adı geçen iki bakan HDP
   milletvekilidir.

→ `partiler: ["akp","hdp"]` artık çıkarım değil, [B] belgelerle kurulmuş bir zincirdir.
İkinci kaynak (akademik) olarak Demirkol (2023), s. 381 aynı yönde: "2015 yılında kurulan seçim
hükümetinde de **muhalefetteki CHP ve MHP 63. Hükümete bakan vermeyi reddettiği** için atanmış
bakan oranı %53,6 olmuştur." Kaydın `not` cümlesi de güncellendi: "…geçici seçim hükümetinde
AK Parti'nin yanında **iki HDP milletvekili bakan oldu**, Adalet, İçişleri ve Ulaştırma
bakanlıkları ise bağımsızlara verildi."

### 5. Referandum `tutumlar`

**2010-09-referandum — dört parti yazıldı** (her biri en az iki bağımsız akademik kaynakla):
- **AK Parti → `evet`:** (a) Neslihan YOLÇU, "12 Eylül Anayasa Referandumunda Siyasal Partilerin
  İnternet Kullanımı ve Kampanya Söylemleri", *AJIT-e*
  (`dergipark.org.tr/tr/download/article-file/1114492`): "…yer verilmiştir. **Ak Parti
  seçmenlerden referandumda evet oyu**, CHP ile MHP ise hayır oyları [istemiştir]";
  (b) Yönetim Bilimleri Dergisi 9(2) 2011 (`…/article-file/705499`): "araştırmada '**evet**'
  oylarının büyük oranda '**AKP iktidarının**' …".
- **CHP → `hayir`:** (a) YOLÇU, aynı cümle ("**CHP ile MHP ise hayır oyları**");
  (b) Yönetim Bilimleri 9(2): "Referandum, **CHP ve MHP'nin 'hayır' kampanyası**" çerçevesinde…".
- **MHP → `hayir`:** (a) YOLÇU, aynı cümle; (b) Yönetim Bilimleri 9(2), aynı cümle; ayrıca
  (c) Levent YAYLAGÜL & Cengiz ÇİÇEK, "12 Eylül 2010 Referandum Sürecinin Türkiye'deki Yazılı
  Basında Sunumu", *folklor/edebiyat* 17(68), 2011 (`…/article-file/255368`): "Cumhuriyet
  **MHP**, DP, İP, TKP gibi siyasi partilerin savunduğu '**Hayır**'cı …".
- **BDP → `boykot`:** (a) YOLÇU: "**Barış ve Demokrasi Partisi (BDP) ise boykot etme kararı
  alarak**, [seçmenlerinden] sandığa gitmeyerek boykot etmelerini [istemiştir]";
  (b) YAYLAGÜL & ÇİÇEK: "**Söylem III- (Boykotçu Kamp): Siyasal yaşamda BDP**";
  (c) Yönetim Bilimleri 9(2): "…referandumu **boykot çağrısıyla** karşılayan **BDP** gibi
  muhalefet partileri…".
- **Yazılmayanlar:** DP, İP, TKP, BBP, Saadet Partisi, ÖDP, EMEP. Bunlar tek bir kaynakta
  (YAYLAGÜL & ÇİÇEK'te bir cümlede) anılıyor; ikinci kaynakla doğrulanamadıkları için
  spesifikasyon §5.4 gereği listeye **hiç yazılmadı**.

**2007-10-referandum — `tutumlar` yazılmadı (bulunamadı).** Yapılan tarama:
- `dergipark.org.tr` üzerinde "21 Ekim 2007 halkoylaması / anayasa değişikliği / partilerin
  tutumu" aramaları; indirilip `pdftotext` ile taranan makaleler: Cem EROĞUL, "2007
  Cumhurbaşkanı Seçimi Bunalımından Çıkarılabilecek Dersler" (*AÜ SBF*), "Türkiye Cumhuriyeti
  Anayasalarında Cumhurbaşkanlığı Makamının Önemi ve 2007 Yılı Anayasa Değişiklikleri…"
  (`…/article-file/288967`), TUNÇ & ÇELİK, "Türkiye'de Yapılan Halkoylamaları ve Bunların
  Ağrı'daki Yansımaları" (*Karadeniz Araştırmaları* XVIII/71, `…/article-file/2277549`),
  Abdullah MENEK, "367 Garabeti ve 2007 Referandumu" (`…/article-file/1871993`).
- Bunlardan **yalnızca MENEK** bir parti tutumu veriyor: "**CHP bu referandumda da hayır oyu
  kullandı**, fakat akıntıya karşı kürek sallamanın da anlamsızlığının farkındaydı." Tek kaynak
  olduğu için yazılmadı.
- **2007'de TBMM oylaması kaynak olarak kullanılamaz:** 5678 sayılı Kanun TBMM'de MHP'nin de
  oylarıyla kabul edilmişti, oysa MHP referandum kampanyasında farklı bir tutum açıkladı;
  yani TBMM tutanağı bu referandumdaki `tutum` için geçerli bir kanıt değildir. Bu yüzden
  2007'nin `tutumlar` alanı boş bırakıldı ve Görev 12'ye devredildi.

**Görev 12 güncellemesi (2026-09-26) — 2007 `tutumlar`: yalnızca `chp92: hayir` yazıldı.**
- **CHP → hayır**, iki bağımsız kaynak:
  - [Parti belgesi] CHP, *Parti Meclisi Toplantısına Sunulan MYK Raporu, 5 Aralık 2007*
    (`https://chp.org.tr/yayin/myk-raporu---5-aralik-2007/Open`, 285 s. PDF), PM bildirisi
    madde 6: "21 Ekim 2007 Pazar günü yapılacak olan referandum oylamasına dileyenlerin
    katılmamasını, oy vermeye gidenlerin HAYIR oyu vermesini istiyoruz." (Baykal'ın aynı
    rapordaki konuşması da "gidenler de hayır" diyor.) Boykot yalnızca "dileyenlere" bırakılmış,
    oy verenlere çağrı "hayır" olduğu için tutum `hayir` sayıldı.
  - [Akademik] MENEK (yukarıda): "CHP bu referandumda da hayır oyu kullandı".
  - [Haber, destekleyici] Medyascope, "3 Kasım 2002'den bugüne AKP ve Erdoğan'ın 20 yıllık
    seçim tarihi" (3.11.2022): "referandum sürecinde aktif 'Hayır' kampanyası yürüten tek
    parti, CHP oldu."
- **MHP → hayır: yazılmadı (tek kaynak).** MHP'nin kendi sitesindeki Bahçeli'nin 23.10.2007
  TBMM grup konuşması (`https://www.mhp.org.tr/htmldocs/genel_baskan/konusma/406/index.html`):
  "partimiz … tercihini hayır yönünde kullanmıştır." Bağımsız ikinci kaynak bulunamadı:
  Dünya Bülteni haberi (alan adı el değiştirmiş, sayfa yok), T24 derlemesi (Cloudflare, açılmadı),
  Vikipedi (kural gereği sayılmaz). 4.10.2007 MHP yazılı açıklaması tutum bildirmiyor.
- **AK Parti → evet: yazılmadı (tek kaynak).** Açıkça yazan yalnızca Medyascope ("AKP 'Evet'
  oyunu savunurken"); ikinci bir metin bulunamadı.
- DTP'nin "evet" dediği yalnızca arama motoru özetinde geçti; açılıp okunan bir kaynak yok.
- Kayda `not` eklendi: "Partilerin tutumlarından yalnızca iki bağımsız kaynakla doğrulanabilen
  listelenmiştir." — okuyucu listede olmayan partilerin tutumsuz olduğunu sanmasın diye.
- Erişim: 2026-09-26.

### 6. 2003 Siirt seçimi — "taranmış GIF" iddiasının kanıtı

- **[B] Resmî Gazete 12.3.2003 künye satırı:** "**11/3/2003 Tarihli ve 25045 Mükerrer sayılı
  Resmî Gazete'de, 212 sayılı Yüksek Seçim Kurulu Kararı yayımlanmıştır.**"
- **O mükerrer sayının tamamı** (`https://www.resmigazete.gov.tr/eskiler/2003/03/20030311M1.htm`,
  **3.023 bayt**) yalnızca üç `<img>` etiketi içeriyor, metin yok:
  ```html
  <img border="0" src="T.C.-resmi-gazete.gif" width="357" height="110">
  <img border="0" src="20030311M1-1.gif" width="630" height="640">
  <img border="0" src="20030311M1-2.gif" width="630" height="766">
  ```
  İki görüntü indirilip türü doğrulandı:
  `20030311M1-1.gif -> GIF image data, version 89a, 630 x 640`,
  `20030311M1-2.gif -> GIF image data, version 89a, 630 x 766`. Ortamda OCR aracı yok.
- **YSK karar arşivi:** `https://www.ysk.gov.tr/doc/dosyalar/docs/Kararlar/2003Pdf/2003-212.pdf`
  → HTTP 200 ama içerik **PDF değil**, YSK portalının 123.497 baytlık HTML hata sayfası
  (`<!DOCTYPE html> <html data-ng-app="yskWeb" …`). Aynı adres deseni 2002, 2007, 2010, 2011,
  2014 ve 2015 kararları için çalışıyor; 2003 klasörü yok.
- **YSK "Ara Seçim Arşivi"** (`ysk.gov.tr/tr/ara-secim-arsivi/2624`, tarayıcıyla DOM'dan
  okundu) yalnızca 2009, 2010, 2012, 2014, 2016, 2017 ve 2026 **mahalli idareler** ara
  seçimlerini listeliyor; milletvekili ara/yenileme seçimi yok.
→ `2003-03-ara` kaydı eklenmedi; Görev 12'ye devredildi.

## Düzeltme turu 2 (2026-09-25) — ikinci inceleme sonrası

İnceleme hükmü: `.superpowers/sdd/2026-09-11-sandik/review-task-9-d6-fix1-verdict.md`.
İki Important: (1) Demirtaş'ın `parti:"hdp"` değeri yalnızca akademik kaynaklı;
(2) 2004/2009/2014 büyükşehir sayılarında TÜİK–YSK örtüşmesinin bağımsızlığı kanıtlanamadı.

### 1. `2014-08-cb-halk`, Demirtaş satırı — `parti:"hdp"` → `destek:"HDP adayı"`

**Aranan [B] belgeler ve bulunanlar:**
- **YSK Kararı 2014/3227 (10/7/2014), tam metin** (`…/docs/Kararlar/2014Pdf/2014-3227.pdf`,
  `pdftotext -layout`, 68 satır): kararda "parti", "önerge", "imza" ya da "gösteren" sözcükleri
  hiç geçmiyor; yalnızca "aday **gösterilenlere** ilişkin 'KESİN ADAY LİSTESİ'" ifadesi ve üç
  adayın adı var. **Aday gösteren parti kaydı yok.**
- **Resmî Gazete 11.7.2014 / 29057**, kararın **eki** bulundu ve indirildi:
  `resmigazete.gov.tr/eskiler/2014/07/20140711-14-1.pdf` (72.781 bayt). Ham çıktı:
  ```
                CUMHURBAŞKANI SEÇİMİ KESİN ADAY LİSTESİ                       Örnek: 401
     ADI          SOYADI    DOĞUM TARİHİ         ÜNİVERSİTE            FAKÜLTE        BÖLÜM
  EKMELEDDİN MEHMET İHSANOĞLU  26/12/1943  MISIR AİN SHAMS ÜNİVERSİTESİ  FEN FAKÜLTESİ  KİMYA
  RECEP TAYYİP      ERDOĞAN    26/02/1954  MARMARA ÜNİVERSİTESİ                         İŞLETME
  SELAHATTİN        DEMİRTAŞ   10/04/1973  ANKARA ÜNİVERSİTESİ    İKTİSADİ VE İDARİ BİLİMLER
                                                                   FAKÜLTESİ / HUKUK FAKÜLTESİ
  ```
  → resmî **Örnek: 401** formunda **parti sütunu yok** (ad, soyad, doğum tarihi, üniversite,
  fakülte, bölüm).
- **Resmî Gazete 8.7.2014 / 29054**, "Geçici Aday Listesi" eki
  (`…/2014/07/20140708-13-1.pdf`, 73.600 bayt, **Örnek: 400**): aynı altı sütun, yine **parti
  sütunu yok**.
- **YSK 2014 karar arşivi taraması:** 2014/2913 (propaganda), 2014/3092 (seçime katılabilecek
  partiler), 2014/3123, 2014/3124, 2014/3136, 2014/3164–3167, 2014/3237, 2014/3579, 2014/3719
  açıldı; hiçbirinde "X partisi tarafından aday gösterilen Y" biçiminde bir kayıt yok.
  2014/3579 yalnızca **AK Parti'nin Erdoğan'ı desteklediğini** ve İhsanoğlu'nun "rakip
  partilerin adayı" olduğunu söylüyor.
- **Resmî Gazete 1–10 Temmuz 2014 taraması:** aday gösterme başvurularını parti adıyla ilan eden
  bir duyuru yok.
- **YSK `docs/2014CB/` ağacı:** `2014CB-KesinAdayListesi.pdf`, `2014CB-AdayListesi.pdf`,
  `2014CB-GeciciAdayListesi.pdf`, `2014CB-Adaylar.pdf` adreslerinin dördü de YSK portalının
  123.497 baytlık HTML hata sayfasını döndürüyor (dosya yok).

**Ek [B] bulgu — HDP'nin 2014'te parti olarak aday gösterme hakkı yoktu:**
- [B] **Anayasa m. 101** (5678 sayılı Kanunla değişik, RG 16.6.2007): "Cumhurbaşkanlığına …
  aday gösterilebilmesi **yirmi milletvekilinin yazılı teklifi** ile mümkündür. Ayrıca, en son
  yapılan milletvekili genel seçimlerinde geçerli oylar toplamı birlikte hesaplandığında
  **yüzde onu geçen siyasi partiler ortak aday gösterebilir**."
- [B] **TÜİK Tablo 1 (PDF s. 22) ve Tablo 24**: 2011 seçimine katılan **15 parti** arasında HDP
  **yok**; TÜİK Veri Portalı'nın 1983-2018 tablosunda da HDP'nin ilk oy satırı **2015**'tir.
  → HDP 2014'te "yüzde onu geçen siyasi parti" olamazdı; Demirtaş'ın adaylığı ancak yirmi
  milletvekilinin yazılı teklifiyle mümkündü. Yani "HDP adayı" siyasal bir niteleme olup
  belgelenmiş bir **parti adaylığı** değildir.

**Karar:** `parti: "hdp"` kaldırıldı, yerine kaynakların kendi ifadesiyle
`destek: "HDP adayı"` yazıldı. İkincil (akademik) kaynaklar: Özipek, "Türkiye Siyasetinde 2014
Cumhurbaşkanlığı Seçimi" — "…üçüncüsü de **HDP adayı Selahattin Demirtaş**'tı."; Selçuk İletişim
(karikatür makalesi) İngilizce özeti — "…**Selahattin Demirtaş for the HDP**…".
**Erdoğan'ın `parti:"akp"` değeri korundu:** AK Parti 2011'de %49,8 aldığı için ([B] TÜİK/YSK)
tek başına aday gösterme yetkisine sahipti ve [B] YSK Kararı 2014/3579 partinin adayının Erdoğan
olduğunu tutanağa geçiriyor. İhsanoğlu'nun `destek:"CHP ve MHP'nin ortak adayı"` ifadesi de
Anayasa m.101'in "ortak aday gösterebilir" kuralıyla ve iki akademik kaynakla uyumlu.

### 2. Büyükşehir kayıtlarında TÜİK–YSK bağımsızlığı — açık sınır notu ve yeni ikinci kaynaklar

**Sınır (2004-03-yerel, 2009-03-yerel, 2014-03-yerel `buyuksehir` alanları için geçerlidir):**
TÜİK'in kendi yayını **No. 3584, *Mahalli İdareler Seçimi 29.03.2009*, "3.1 Veri derleme
tekniği"** şunu yazıyor: *"2009 seçimlerine kadar, tablolarında yer alan Türkiye toplam
sonuçları, il seçim kurulları tarafından YSK'ya gönderilen ve **YSK tarafından Resmi Gazete'de
ilan edilen sonuçlardan**, ilçe ve belediye düzeyindeki bilgiler ise ilçe seçim kurulları
tarafından tanzim edilen ve ilçe seçim kurullarınca Kurumumuza gönderilen **birleştirme
tutanaklarından** … üzerinde hiçbir değişiklik yapılmaksızın … aynen yayımlanmıştır."*
→ TÜİK mahalli idareler verisini **bağımsız olarak toplamıyor**; ulusal toplamlar doğrudan
YSK/Resmî Gazete'den, alt kırılımlar ise ilçe seçim kurullarının tutanaklarından alınıyor.
Bu yüzden **TÜİK ile YSK'nın büyükşehir rakamlarının birebir örtüşmesi, bağımsız bir doğrulama
sayılmaz** — kopya da olsa örtüşür, ayrı ayrı derlense de örtüşür; ikisini ayırt etmez.
(Bu sınır, ulusal belediye meclisi sayılarının `null` yapılmasının da gerekçesidir; büyükşehir
alanı ise brief'in "[B] + ikinci kaynak" kuralını harfiyen karşıladığı için `null` yapılmadı.)

**Bu turda eklenen, YSK/TÜİK dışı ikinci kaynaklar (haber veritabanı — yalnızca ikinci kaynak):**
- **Anadolu Ajansı arşivi, "YEREL SEÇİMLER" (28 Mart 2004 sonuç tablosu)**
  (`aa.com.tr/tr/arsiv/-187nbsp-yerel-secimler/428569`):
  "**İSTANBUL (BŞ) AK PARTİ 45.31 Kadir Topbaş**", "**ANKARA (BŞ) AK PARTİ 55.03 İ. Melih
  Gökçek**", "**İZMİR (BŞ) CHP 47.18 Ahmet Piriştina**".
  Karşılaştırma (YSK/TÜİK şehir tablosundan hesaplandı): İstanbul 1.917.577/4.231.487 = %45,32
  (AA %45,31; fark %0,02), Ankara 901.001/1.636.633 = %55,05 (AA %55,03; fark %0,04),
  İzmir 562.561/1.192.541 = %47,17 (AA %47,18; fark %0,02) — üçü de %0,5 toleransının çok
  altında. **2004'ün üç şehri artık gerçekten bağımsız bir kaynakla da doğrulanmış durumda.**
  (AA'nın İzmir için verdiği ad **Ahmet Piriştina**'dır; kazanan parti CHP'dir. Kayda yalnızca
  parti yazıldığı için ad farkı veriyi etkilemiyor.)
- **TRT Haber, "Geçmişten günümüze İstanbul seçimleri"**
  (`trthaber.com/haber/gundem/gecmisten-gunumuze-istanbul-secimleri-420325.html`):
  2004 — "**Topbaş** oyların **yüzde 45,32**'sini alarak … birinci çıktı" (AK Parti);
  2009 — "**Topbaş, oyların yüzde 44,7'sini**, Kılıçdaroğlu ise yüzde 37'sini aldı";
  2014 — "**Topbaş yüzde 47,95 oy alarak** bir kez daha ipi göğüsledi".
  Karşılaştırma: 2009 İstanbul AK Parti 3.105.555/6.946.435 = **%44,71**;
  2014 İstanbul AK Parti 4.101.906/8.553.814 = **%47,95** — ikisi de birebir.
  **İstanbul'un üç yılı da YSK/TÜİK dışı bir kaynakla doğrulandı.**
- **Hâlâ yalnızca YSK + TÜİK ile duran:** **Ankara ve İzmir'in 2009 ve 2014 sonuçları.**
  (Ankara 2009 AK Parti 940.230/2.440.455 = %38,53; İzmir 2009 CHP 1.107.562/1.972.359 = %56,15;
  Ankara 2014 AK Parti 1.417.212/3.162.112 = %44,82; İzmir 2014 CHP 1.308.134/2.637.550 = %49,60.)
  Bu turda bu dört değer için YSK/TÜİK dışı, doğrudan alıntılanabilir bir kaynak bulunamadı;
  aranan yerler: TRT Haber'in Ankara/İzmir dosyaları, bianet "Yerel Seçimlerde İzmir",
  Doğruluk Payı bülteni, dergipark ("üç şehir üç başkan" makalesi 1989–1994 dönemini
  kapsıyor). Kazanan parti değerleri değiştirilmedi; sınır burada açıkça kayda geçirildi.

### Dönem 6 açık kalemi kapandı — 2009/2014 Ankara ve İzmir büyükşehir (2026-09-25)

Devir notu §9.2 / dönem 6 fix2 re-review'daki tek Important bulgu: `2009-03-yerel` ve
`2014-03-yerel` `buyuksehir.ankara` ile `buyuksehir.izmir` yalnızca YSK + TÜİK'e dayanıyordu.
Bu turda YSK/TÜİK dışı ikinci kaynaklar bulundu (yalnızca kazanan parti tutulduğu için oranlar
karşılaştırılmadı, ancak not edildi):

- **2009 Ankara — AK Parti:** Akşam seçim veritabanı ("haber veritabanı"; `secim.aksam.com.tr/secim/29-mart-2009-yerel-secimleri`):
  "Ankara — Adalet ve Kalkınma Partisi %38.50 — Cumhuriyet Halk Partisi %31.50" (YSK büyükşehir
  %38,53; fark 0,03 puan). Destekleyen: CNN Türk, "Ankara yönetimine 3 güçlü aday" (14.2.2009):
  "3 dönemdir Ankara'yı yöneten Melih Gökçek (AKP) … Murat Karayalçın (CHP) … Mansur Yavaş (MHP)";
  Yeni Asır (6.4.2014): "5'inci kez üst üste Büyükşehir Belediye Başkanlığı'na seçilen Melih Gökçek".
- **2009 İzmir — CHP:** Ege'de Son Söz, "2009'da İzmir'de neler oldu?" (`egedesonsoz.com/2009da-izmirde-neler-oldu63`):
  "29 Mart — İzmir'de CHP'nin zaferi … Büyükşehir dahil 31 belediyeden 29'unu kazandı. Büyükşehir
  Belediye Başkanı Aziz Kocaoğlu % 57 oyla yeniden başkan seçildi." Destekleyen: Hürriyet, "Aziz
  Kocaoğlu kimdir?" ("28 Mart 2004 seçiminde CHP'den … 29 Mart 2009 tarihinde yapılan yerel
  seçimlerde ikinci … dönem"). (Akşam veritabanı İzmir'de CHP %55.20 veriyor; YSK %56,15 — ölçü
  farkı olabilir, kazanan aynı.)
- **2014 Ankara — AK Parti:** memurlar.net seçim sayfası (`memurlar.net/secim/30-mart-2014-yerel-secim-sonuclari/default.html`):
  "Ankara | İBRAHİM MELİH GÖKÇEK | AK Parti | %44,61"; haberler.com, "2014 Yerel Seçim Sonuçları"
  (`haberler.com/2014-yerel-secim-sonuclari-6109703-haberi/`): "Ankara: AK Parti - Melih Gökçek".
- **2014 İzmir — CHP:** memurlar.net: "İzmir | AZİZ KOCAOĞLU | CHP | %49,64"; haberler.com:
  "İzmir: CHP - Aziz Kocaoğlu".

→ Dört değer [B] YSK + bağımsız ikinci kaynakla karşılanıyor; alanlar **korundu**. Dönem 6
tamamlandı.

## Görev 9 — Dönem 7 (2016–2026)

Erişim: 2026-09-25 (bulut oturumu). Resmî Gazete sayfaları tarayıcı kimliğiyle (`User-Agent`)
`curl` ile açıldı; YSK dosyaları `ysk.gov.tr/doc/...` yollarından, sayfa içerikleri
`ysk.gov.tr/doc/sayfa/<başlık>/<id>.html` parçalarından okundu. PDF'ler `pdftotext -layout` ile,
taranmış (metin katmanı olmayan) sayfalar `tesseract -l tur` ile okundu; OCR ile okunan her sayı
aynı belgenin alt toplamlarıyla (yurt içi + yurt dışı + gümrük = genel toplam) sağlandı ve
tablolarda görüntüye bakılarak doğrulandı.

Bu dönemin önceki (yarım kalmış, kaynaksız) turundan gelen beş kaydın bütün değerleri aşağıdaki
kaynaklarla **yeniden** doğrulandı; değişen alanlar ilgili başlıkta "Önceki turdan fark" diye
belirtildi. Yarım tur yedeği: `.superpowers/sdd/2026-09-11-sandik/donem7-yarim-is.patch`.

### Envanter (Adım 1)

- **[B] YSK Seçim Arşivi** (`ysk.gov.tr/doc/sayfa/{cumhurbaskani-secim-arsivi/2647,
  milletvekili-genel-secim-arsivi/2644, mahalli-idareler-genel-secimleri-arsivi/2650,
  halkoylamasi-arsivi/2648, ara-secim-arsivi/2624}.html`): 2016–2026 arasında **16 Nisan 2017
  halkoylaması**, **24 Haziran 2018** CB + 27. dönem MV, **31 Mart 2019** mahalli idareler (ve
  23 Haziran 2019 İstanbul BŞB yenilemesi), **14 Mayıs 2023** CB + 28. dönem MV (28 Mayıs ikinci
  oylama), **31 Mart 2024** mahalli idareler. Ara seçim arşivindeki 2016, 2017 ve 2026 kayıtları
  **mahalli idareler ara seçimleridir** (sayfa: "Mahalli idareler ara seçimleri her yıl haziran…")
  → kapsam dışı (spesifikasyon §2). Milletvekili ara seçimi yok.
- **[B] YSK seçim takvimi** (`ysk.gov.tr/doc/secim/secimTarihleri.txt`, 2026-09-25): Kasım
  2026'ya kadar yalnızca köy halkoylamaları ve muhtarlık/ihtiyar heyeti ara seçimleri var;
  ulusal seçim, referandum ya da milletvekili ara seçimi yok (güncellik kontrolü, Görev 12 Adım 1).
- Aday listeyle fark: yok. 2019 İstanbul yenilemesi ayrı kayıt (`2019-06-yerel`, spesifikasyon §5.3).

### 2017-04-referandum

- **[B] YSK Kararı 663 (27.04.2017)**, RG 27.04.2017/30050 mükerrer
  (`resmigazete.gov.tr/eskiler/2017/04/20170427M1.pdf`, taranmış; OCR): "Yurt İçi ve Yurt Dışı
  Seçmen Kütüğü dahil Ülke Geneli; **58.291.898** kayıtlı seçmenden **49.798.855**'inin oy
  kullandığı … kullanılan oylardan **48.936.604** oyun geçerli, 862.251 oyun geçersiz sayıldığı,
  geçerli oylardan **25.157.463** oyun "EVET" oyu, **23.779.141** oyun "HAYIR" oyu olduğu".
  Karardaki alt kırılım (OCR, hesaplandı): kayıtlı yurt içi 55.319.222 + yurt dışı 2.972.676 =
  58.291.898; oy kullanan 48.374.576 + 1.325.682 + 98.597 (gümrük) = 49.798.855; geçerli
  47.528.949 + 1.309.821 + 97.834 = 48.936.604; evet 24.325.633 + 778.833 + 52.997 = 25.157.463.
  Hepsi tutuyor → OCR okuması doğrulandı. Evet + hayır = geçerli.
- **İkinci kaynak:** Sputnik Türkiye, "YSK kesin sonuçları açıkladı: 'Evet' yüzde 51.41…"
  (`anlatilaninotesi.com.tr/20170427/ysk-baskani-guven-ret-gerekcesi-1028258134.html`, 27.04.2017):
  "toplam 58 milyon 291 bin 898 kayıtlı seçmenden 49 milyon 798 bin 855'inin oy kullandığı …
  48 milyon 936 bin 604'ü geçerli … 25 milyon 157 bin 463 oyun "evet" oyu, 23 milyon 779 bin
  141 oyun "hayır" oyu". Uyuşmazlık: yok.
- **`konu`:** [B] 6771 sayılı Kanun, RG 11.02.2017/29976 (`…/2017/02/20170211-1.htm`): "Kabul
  Tarihi: 21/01/2017"; 8. madde "Yürütme yetkisi Cumhurbaşkanına aittir"; geçici 21. madde (G)
  "Kanunlar ve diğer mevzuat ile Başbakanlık ve Bakanlar Kuruluna verilen yetkiler … Cumhurbaşkanı
  tarafından kullanılır". Kabul tarihi YSK 663'te de "21/01/2017". İkinci kaynak: Demirkol (2023,
  bkz. Hükümetler 58-64), s. 365: "2017 Anayasa referandumu ile kabul edilen Cumhurbaşkanlığı
  hükümet sistemi sonrasında Başbakanlık ve Bakanlar Kurulu kaldırılarak yetkileri
  Cumhurbaşkanlığına devredilmiştir."
- **`not`:** yurt içi + yurt dışı + gümrük toplamı: YSK 663 (yukarıdaki kırılım) + Sputnik
  ("Yurt içinde, yurt dışında ve gümrük kapılarında toplam…").
- **Önceki turdan fark:** `konu` yeniden yazıldı; `not`taki "kabul edilen değişiklikler …
  cumhurbaşkanının göreve başladığı tarihte yürürlüğe girmiştir" cümlesi **çıkarıldı**, çünkü
  6771'in 18. maddesi değişiklikleri üç ayrı tarihte (yayım tarihi, seçim takviminin başlangıcı,
  Cumhurbaşkanının göreve başlaması) yürürlüğe koyuyor — cümle eksik/yanıltıcıydı.
- **`tutumlar`** (yalnızca soyağacındaki partiler, iki kaynak):
  - Kaynak 1: Hürriyet, "Referandumda hangi parti ne oy kullanacak" (15.02.2017, Habertürk'ün
    Ahmet Küçük haberine dayanarak; `hurriyet.com.tr/gundem/referandumda-hangi-parti-ne-oy-kullanacak-40366885`):
    "AK Parti - EVET", "Milliyetçi Hareket Partisi - EVET", "Cumhuriyet Halk Partisi (CHP) …
    "hayır" kampanyası yapacak", "HDP de "hayır" için kampanya düzenleyecek", "Saadet Partisi …
    "Hayır" oyu vereceklerini açıklayan", "Vatan Partisi'nden … "Referandumda kesinlikle 'hayır'
    denilecek"", "Büyük Birlik Partisi - KARARSIZ".
  - Kaynak 2: Sözcü (İhlas Haber Ajansı), "Hangi parti referandumda ne oy kullanacak"
    (`sozcu.com.tr/2017/gundem/son-dakika-haberi-hangi-parti-referandumda-ne-oy-kullanacak-1661303`):
    "AK Parti ile … MHP, referandumda 'evet' oyu kullanacaklarını açıkladı. Buna karşılık … CHP
    ile … HDP ise 'hayır'"; "Saadet Partisi ile … Vatan Partisi referandumda 'hayır' diyecek";
    BBP için "istişareler devam ediyor".
  - Sonuç: akp evet, mhp93 evet, chp92 hayir, hdp hayir, sp hayir, vatan hayir. **BBP yazılmadı**
    (iki kaynakta da karar yok). HÜDA PAR (evet) ve BTP (serbest) soyağacında olmadığı için yazılmadı.

### 2018-06-genel

- **[B] YSK Örnek 96/C** "Yurt İçi, Yurt Dışı ve Gümrük Sandıkları Dahil Milletvekili Genel
  Seçimi Sonucu" (`ysk.gov.tr/doc/dosyalar/docs/24Haziran2018/KesinSecimSonuclari/2018MV-96C.pdf`):
  kayıtlı **59.367.469**, oy kullanan **51.189.444**, geçerli **50.137.175** (geçersiz 1.052.269).
  AK Parti 21.338.693, CHP 11.354.190, HDP 5.867.302, MHP 5.565.331, İYİ Parti 4.993.479,
  Saadet 672.139, Hür Dava Partisi 155.539, Vatan 114.872, Bağımsızlar 75.630; toplam 50.137.175
  (hesaplandı, tutuyor).
- **[B] YSK Örnek 96/D** (`…/2018MV-96D.pdf`): AK Parti 295, CHP 146, HDP 67, MHP 49, İYİ Parti 43,
  Bağımsızlar 0, "TÜRKİYE TOPLAMI : 600". YSK Kararı 953 (4.7.2018) kesin sonucun ilanı.
- **İkinci kaynak:** Hürriyet, "Son dakika: YSK, 2018 kesin seçim sonuçlarını açıkladı" (4.7.2018,
  `hurriyet.com.tr/gundem/son-dakika-ysk-2018-kesin-secim-sonuclarini-acikladi-40886560`): kayıtlı
  59.367.469, oy kullanan 51.189.444, geçerli 50.137.175; dokuz satırın "Türkiye geneli toplam"ı
  YSK ile birebir; sandalyeler "İYİ Parti: 43, Bağımsız: 0, Türkiye toplamı: 600". TRT Haber,
  "24 Haziran kesin seçim sonuçları Resmi Gazete'de"
  (`trthaber.com/haber/gundem/24-haziran-kesin-secim-sonuclari-resmi-gazetede-373622.html`):
  aynı toplamlar ve beş partinin oy/sandalyesi. Uyuşmazlık: yok. (Hürriyet'in yurt dışı alt
  satırlarında iki yazım hatası var — AK Parti 776.961, İYİ 60.696 — ama toplam sütunu YSK'yla
  aynı; veride yalnızca toplam tutulur.)
- **`meclis: 600`:** [B] 6771 md. 2: 75. maddedeki "beşyüzelli" ibaresi "altıyüz" + YSK 96/D.
- **`baraj: 10`:** [B] 7393 sayılı Kanun md. 1 (RG 6.4.2022/31801; bkz. 2023-05-genel):
  2839/33'teki "oyların %10'unu" ibaresini değiştiriyor → 2018'de yürürlükteki baraj %10.
  İkinci kaynak: TRT Haber (bkz. 2023-05-genel): "yüzde 10 olarak uygulanan ülke seçim barajı".
- **"Diğer" (partiSayisi 1, oy 155.539):** Hür Dava Partisi — %0,31, soyağacında yok, daha önce
  meclise girmemiş → "Diğer" (spesifikasyon §5.1). **Önceki turdan fark:** `{ad:"Hür Dava Partisi"}`
  satırı "Diğer"e alındı.
- **İttifak — oy pusulası:** [B] YSK "İttifakların ve Siyasi Partilerin Birleşik Oy Pusulasındaki
  Yerlerinin … Belirlenmesine İlişkin Tutanak" (20.5.2018,
  `…/24Haziran2018/2018CBMV-BirlesikOyPusulasi-KuraTutanagi.pdf`): "Cumhur İttifakı için Adalet ve
  Kalkınma Partisi, Milliyetçi Hareket Partisi, Millet İttifakı için Cumhuriyet Halk Partisi, İyi
  Parti ve Saadet Partisi". İkinci kaynak: TRT Haber, "Millet İttifakı protokolü YSK'ya sunuldu"
  (`trthaber.com/haber/gundem/millet-ittifaki-protokolu-yskya-sunuldu-364059.html`): "CHP, İYİ Parti
  ve Saadet Partisi; Millet İttifakı adı altında kendi amblemleriyle seçime girecek, Demokrat Parti
  de adaylarını İYİ Parti'nin listelerinden göstererek Millet İttifakı'nın parçası olacaktır";
  Habertürk aynı protokol metni; Hürriyet, "Millet ittifakı resmen kuruldu" (protokol, dört parti).
- **`ittifak` alanı:** `{ad:"Millet İttifakı", liste:"iyi", icinden:[{parti:"dp07", sandalye:null}]}`.
  DP'nin ayrı listesi yok ([B] YSK 96/C'de DP satırı yok; kura tutanağında pusulada yok); adaylarını
  İYİ Parti listesinden gösterdiği protokol metninden (TRT Haber, Habertürk, Hürriyet). DP'den kaç
  kişinin seçildiğine dair [B] kaynak yok → `sandalye: null`.
- **`not`:** CB seçimiyle birlikte (YSK 96/C başlığı "…Cumhurbaşkanı ve 27. Dönem Milletvekili Genel
  Seçimi"; TRT Haber), 600 (yukarıda), pusuladaki ittifaklar (yukarıda). **Önceki turdan fark:**
  "partiler ilk kez ittifakla girdi" ifadesi kaynaklanmadığı için çıkarıldı; Millet İttifakı'nın
  pusuladaki bileşimi YSK tutanağına göre yazıldı.

### 2018-06-cb-halk

- **[B] YSK Örnek 416/D** (`…/24Haziran2018/KesinSecimSonuclari/2018CB-416D.pdf`): kayıtlı
  **59.367.469**, oy kullanan **51.197.959**, geçerli **50.068.627**; Erdoğan 26.330.823 (%52,59),
  İnce 15.340.321, Demirtaş 4.205.794, Akşener 3.649.030, Karamollaoğlu 443.704, Perinçek 98.955;
  toplam 50.068.627. YSK Kararı 952 (4.7.2018).
- **İkinci kaynak (adaylar):** TRT Haber (yukarıdaki haber): altı adayın toplamları YSK ile birebir
  (Erdoğan 26 milyon 330 bin 823 … Perinçek 98 bin 955). Hürriyet 4.7.2018 geçerli oy "50 milyon
  068 bin 627" (Demirtaş'ı "4 milyon 205 bin 974" diye yazmış — rakam yer değiştirmesi; TRT Haber
  4.205.794 ile YSK'yı doğruluyor).
- **İkinci kaynak (seçmen sayıları):** VOA Türkçe, "YSK: 'Erdoğan Seçimde Yüzde 52,59 Oy Aldı'"
  (`voaturkce.com/a/ysk-erdoğan-seçimde-yüzde-52-59-oy-aldı-/4455271.html`): "kayıtlı 59 milyon 367
  bin 469 seçmenden 51 milyon 197 bin 832'si oy kullandı … 50 milyon 68 bin 418'i geçerli".
  **Uyuşmazlık: 51.197.959 vs 51.197.832 (%0,0002); 50.068.627 vs 50.068.418 (%0,0004)** — tolerans
  içinde, YSK'nın sayısı yazıldı (VOA'nınki kesinleşmemiş sonuçlar). Kayıtlı: uyuşmazlık yok.
- **Aday gösterme (`parti`/`destek`):** [B] YSK Kararı 426 (9.5.2018, geçici aday listesi,
  `ysk.gov.tr/doc/karar/dosya/77641/2018-426.pdf`): "Adalet ve Kalkınma Partisi Grubu ile Milliyetçi
  Hareket Partisi Grubu tarafından aday gösterilen Recep Tayyip ERDOĞAN", "Cumhuriyet Halk Partisi
  Grubu tarafından aday gösterilen Muharrem İNCE", "Halkların Demokratik Partisi Grubu tarafından aday
  gösterilen Selahattin DEMİRTAŞ"; "en az yüzbin seçmenin yazılı teklifiyle aday gösterilen
  Cumhurbaşkanı adaylarının Doğu PERİNÇEK, Meral AKŞENER ve Temel [KARAMOLLAOĞLU]". Kesin liste:
  Karar 472. İkinci kaynak: Habertürk, "100 bin imzada dikkat çeken detaylar"
  (`haberturk.com/son-dakika-100-bin-imzada-dikkat-ceken-detaylar-1958037`): "Cumhur İttifakı'nın
  adayı Erdoğan, CHP'nin adayı İnce, HDP'nin adayı Demirtaş ile 100 bin imzayı aşan Akşener,
  Karamollaoğlu ve Perinçek". → İnce `parti:"chp92"`, Demirtaş `parti:"hdp"`, Erdoğan
  `destek:"AK Parti ve MHP gruplarının adayı"`, diğer üçü `destek:"seçmenlerin yazılı teklifiyle aday"`.
  **Önceki turdan fark:** adaylarda `parti`/`destek` yoktu, eklendi.
- **`not`:** salt çoğunluk ilk oylamada (%52,59 > %50; [B] 416/D) — ikinci oylama yapılmadığı YSK
  arşivinde 2018 için ikinci oylama belgesi olmamasından ve TRT Haber'in "yüzde 52,59 alarak
  Cumhurbaşkanı seçildi" ifadesinden. **Önceki turdan fark:** 6771'in yürürlüğüne dair cümle
  hükümet kaydına taşındı.

### 2019-03-yerel

- **[B] YSK LİSTE-4** "Belediye Meclisi Üyeliği Seçimleri Sonucu"
  (`…/2019MahalliIdareler/KesinSecimSonuclari/2019Mahalli-Liste-4.pdf`; YSK Kararı 4577, 20.5.2019):
  kayıtlı 53.203.842, oy kullanan 44.881.860, geçerli 42.998.754; AK Parti 18.299.576, CHP
  12.625.346, MHP 3.209.416, İYİ Parti 3.142.757, HDP 2.409.485, Saadet 1.291.757, BBP 818.872,
  DSP 379.689, DP 378.093, TKP 125.109, BTP 115.466, Vatan 83.091, Hür Dava 0, Bağımsız 120.097.
- **Neden `null`:** dönem 6 kuralı (bkz. 2014-03-yerel ve "Büyükşehir kayıtlarında TÜİK–YSK
  bağımsızlığı"): ülke geneli belediye meclisi sayılarını yalnızca YSK yayımlıyor; TÜİK aynı veriyi
  YSK'dan alıyor. Bu turda aranan bağımsız yayınlar: TRT Haber, Yeni Şafak, Anka, Capital'in
  "kesin sonuçlar Resmî Gazete'de" haberleri (sayı vermiyor); Hürriyet, Milliyet, CNN Türk, Akşam,
  Sabah, memurlar.net seçim sayfaları (belediye başkanlığı ve il genel meclisi veriyor, belediye
  meclisi vermiyor). → `kayitli/kullanilan/gecerli` ve bütün `oy` değerleri `null`; parti listesi ve
  sıra YSK LİSTE-4'ten.
- **"Diğer" (partiSayisi 2):** TKP (%0,29) ve BTP (%0,27) — soyağacında yok, %1'in altında. Hür Dava
  Partisi 0 oy → sayılmadı (2014 emsali). DP ile DSP soyağacında olduğu için ayrı satırda.
- **Büyükşehir — [B] YSK "2009-2019 Seçim İstatistikleri"** (`…/docs/2009_2019_İSTATİSTİK_KİTABI.pdf`,
  s. 235, 4.2.7 "Nüfus Bakımından Üç Büyük İlde…"; pasta grafiklerin işaret renkleri görüntüden
  okundu): Ankara **CHP %50,9** – AK Parti %47,1; İzmir **CHP %58,1** – AK Parti %38,7; İstanbul
  (31 Mart) CHP %48,8 – AK Parti %48,6, dipnot "İstanbul'da yenileme seçimleri yapılmıştır".
- **Büyükşehir — ikinci kaynak:** Ankara: VOA Türkçe, "CHP'li Mansur Yavaş Resmen Ankara Belediye
  Başkanı" (`voaturkce.com/a/baskentte-chpli-mansur-yavas-liderler-istanbul-mesaisinde/4866178.html`):
  "Mansur Yavaş … mazbatasını aldı. Yavaş, Ankara Büyükşehir Belediye Başkanlığı'nı AKP'li Mustafa
  Tuna'dan devraldı." İzmir: Hürriyet/DHA, "İzmir Büyükşehir Belediye Başkanı Soyer, mazbatasını
  aldı" (`hurriyet.com.tr/gundem/izmir-buyuksehir-belediye-baskani-soyer-mazbatasini-aldi-41175972`):
  "İZMİR Büyükşehir Belediye Başkanı seçilen CHP'li Tunç Soyer … mazbatasını aldı".
- **İstanbul yazılmadı:** [B] YSK LİSTE-2 notu: "İstanbul Büyükşehir Belediye Başkanlığı seçiminin
  iptaline karar verildiğinden sonuçlara dahil edilmemiştir"; YSK Kararı 2019/4219 (6.5.2019).
  İkinci kaynak: Habertürk (bkz. 2019-06-yerel): "Yüksek Seçim Kurulunun (YSK) 6 Mayıs'ta verdiği,
  "İstanbul Büyükşehir Belediye Başkanlığı seçiminin yenilenmesi …" kararı".

### 2019-06-yerel

- **[B] YSK EK-1** "23 Haziran 2019 İstanbul Büyükşehir Belediye Başkanı Yenileme Seçimi"
  (`…/2019MahalliIdareler/KesinSecimSonuclari/2019Mahalli-IBB.pdf`): kayıtlı 10.560.963, oy kullanan
  8.925.166, geçerli 8.746.566; **CHP 4.742.082 (%54,22)**, AK Parti 3.936.068 (%45,00), Saadet
  47.832, Vatan 13.962, Bağımsız 6.622. Aynı sayılar YSK istatistik kitabı 6.2.1'de.
- **İkinci kaynak:** Habertürk, "İstanbul seçim sonuçları 2019 Ekrem İmamoğlu Binali Yıldırım…"
  (`haberturk.com/istanbul-kim-kazandi-…-2497921`): "Ekrem İmamoğlu İstanbul Büyükşehir Belediye
  Başkanı oldu"; "Millet İttifakı ve CHP adayı Ekrem İmamoğlu … 4 milyon 741 bin 868'e (% 54.0)"
  (sandıkların %99,9'u; kesin sonuçla fark %0,005).
- Spesifikasyon §5.3: `kapsam:"İstanbul"`, yalnızca `buyuksehir.istanbul`, `sonuc` yazılmaz.

### 2023-05-genel

- **[B] YSK MM/24** "Yurt İçi, Yurt Dışı ve Gümrük Sandıkları Dahil Milletvekili Genel Seçimi
  Sonucu" (`…/14Mayis2023/KesinSecimSonuclari/ULKE_GENELI_TOPLAMI_MM24.pdf`): oy kullanan
  **55.835.895**, geçerli **54.442.588** (geçersiz 1.393.307, katılma %87,05); 24 parti + bağımsızlar
  (AK Parti 19.392.462, CHP 13.802.183, MHP 5.484.820, İYİ 5.275.981, YSGP 4.803.922, YRP 1.527.048,
  Zafer 1.216.399, TİP 956.057, BBP 530.770, Memleket 502.669, Vatan 52.720, Bağımsızlar 226.831 …);
  toplam 54.442.588 (hesaplandı, tutuyor).
- **`kayitli` (hesaplandı):** MM/24 tablosunda kayıtlı seçmen satırı yok. [B] YSK MM/21 (yurt içi)
  kayıtlı **60.721.745** + [B] MM/22 (yurt dışı ve gümrük) kayıtlı **3.423.759** = **64.145.504**;
  MM/24'ün katılma oranıyla sağlama: 55.835.895 / 64.145.504 = %87,05 (tutuyor). Aynı sayı [B] YSK
  CM/5 (CB 1. oylama) kayıtlı seçmeninde de 64.145.504.
- **[B] YSK MM/25** (sandalyeler): AK Parti 268, YRP 5, MHP 50, YSGP 61, TİP 4, CHP 169, İYİ 43,
  Bağımsızlar 0; "TÜRKİYE TOPLAMI : 600".
- **İkinci kaynak:** memurlar.net, "YSK Milletvekili Seçimleri Kesin Sonuçlarını Açıkladı"
  (30.05.2023, `memurlar.net/haber/1066618/…`): "kayıtlı 64 milyon 145 bin 504 seçmenden 55 milyon
  835 bin 895'i oy kullandı. Oyların 54 milyon 442 bin 588'i geçerli"; yedi partinin oy ve sandalyesi
  (AK Parti 19.392.462/268, CHP 13.802.183/169, MHP 5.484.820/50, İYİ 5.275.981/43, YSGP
  4.803.922/61, YRP 1.527.048/5, TİP 956.057/4) ve meclis dışı 17 partinin oyları (Memleket 502.669,
  BBP 530.770, Vatan 52.720, Zafer 1.216.399 ve "Diğer"deki 13 partinin her biri) YSK ile birebir.
  Bağımsızlar (226.831) haberde yok → hesaplandı: 54.442.588 − parti oyları toplamı = 226.831.
  Uyuşmazlık: yok.
- **"Diğer" (partiSayisi 13, oy 670.726, hesaplandı):** Millet 52.315 + HAK-PAR 42.509 + TKP 63.809 +
  TKH 17.476 + Sol Parti 77.992 + Genç Parti 112.972 + Adalet Birlik 41.196 + Anavatan Partisi
  (2011–; soyağacındaki `anap` 1983–2009'dur) 66.102 + Yenilik 11.171 + HKP 31.831 + Milli Yol 17.758
  + Güç Birliği 26.359 + Adalet Partisi (soyağacındaki `ap` 1961–1981'dir) 109.236 = 670.726.
- **İttifaklar:** [B] YSK kura tutanağı (8.4.2023, `ysk.gov.tr/doc/karar/dosya/658968/2023-KuraTutanagi.pdf`):
  "Cumhur İttifakı için Adalet ve Kalkınma Partisi, Büyük Birlik Partisi, Milliyetçi Hareket
  Partisi, Yeniden Refah Partisi; Emek ve Özgürlük İttifakı için Türkiye İşçi Partisi, Yeşiller ve
  Sol Gelecek Partisi; Millet İttifakı için Cumhuriyet Halk Partisi, Demokrasi ve Atılım Partisi,
  Demokrat Parti, Gelecek Partisi, İyi Parti, Saadet Partisi" (Ata ve Sosyalist Güç Birliği
  ittifakları da var). İkinci kaynak: Yeni Şafak, "Hangi parti hangi ittifakta yer alıyor?"
  (`yenisafak.com/…-h-4520330`): aynı dört ve altı parti; "DEVA, Gelecek, Saadet ve Demokrat
  Parti seçime CHP listesinden girecek".
- **`ittifak` alanı:** `{ad:"Millet İttifakı", liste:"chp92", icinden:[deva, gelecek, sp, dp07]}`,
  hepsi `sandalye:null`. Dört partinin ayrı listesi yok ([B] MM/24'te satırları yok); CHP
  listesinden girdikleri Yeni Şafak ve AA'nın (NTV ve Yeni Şafak'ta yayımlanan) "Millet İttifakı
  partilerinden 39 aday, CHP listesinden Meclis'e girdi" haberinde. Sandalye sayıları (AA: DEVA 14,
  Gelecek 10, Saadet 10, DP 3, İYİ 1, TDP 1) **tek bir ajans haberine** dayanıyor, "kesin olmayan
  sandık sonuçlarına göre" ve resmî [B] karşılığı yok (YSK parti üyeliğini değil listeyi kaydeder);
  başka bir kaynakta DEVA 15 geçiyor → `null`. HÜDA PAR adaylarının AK Parti listesinden girdiği
  (Yeni Şafak) soyağacında olmadığı için yazılmadı (Görev 10 listesine).
- **`baraj: 7`:** [B] 7393 sayılı Kanun (kabul 31.3.2022, RG 6.4.2022,
  `resmigazete.gov.tr/eskiler/2022/04/20220406-1.htm`) md. 1: "2839 sayılı Milletvekili Seçimi
  Kanununun 33 üncü maddesinin birinci fıkrasında yer alan "oyların %10'unu" ibaresi "oyların yüzde
  yedisini" şeklinde". İkinci kaynak: TRT Haber, "Seçim kanununda değişiklik Resmi Gazete'de: Seçim
  barajı yüzde 7'ye indi" (`trthaber.com/…-670068.html`): "yüzde 10 olarak uygulanan ülke seçim
  barajı yüzde 7'ye indirildi".
- **Önceki turdan fark:** `not`taki Millet İttifakı "CHP ile İYİ Parti" diye eksikti — dört parti
  eklendi; `ittifak` alanı eklendi; sonuç satırları sandalyeye göre yeniden sıralandı (YSGP 61 > MHP 50).

### 2023-05-cb-halk

- **[B] YSK CM/5, birinci oylama** (`…/2023CB-TumSecimSonucu.pdf`): kayıtlı **64.145.504**, oy
  kullanan **55.833.153**, geçerli **54.796.049**; Erdoğan 27.133.849 (%49,52), Kılıçdaroğlu
  24.595.178, Oğan 2.831.239, İnce 235.783 (İnce adaylıktan çekildi ama pusulada kaldı; toplam tutuyor).
- **[B] YSK CM/5, ikinci oylama** (`…/2023CB-TumSecimSonucuIkinciTur.pdf`): kayıtlı **64.197.454**,
  oy kullanan **54.023.601**, geçerli **53.339.313**; Erdoğan 27.834.589 (%52,18), Kılıçdaroğlu 25.504.724.
- **İkinci kaynak (birinci oylama):** TRT Haber, "YSK kesin seçim sonuçlarını açıkladı"
  (`trthaber.com/haber/gundem/ysk-kesin-secim-sonuclarini-acikladi-768663.html`): "64 milyon 145 bin
  504 kayıtlı seçmenin 55 milyon 833 bin 153'ü oy kullandı. 54 milyon 796 bin 49'u geçerli";
  Erdoğan 27.133.849, Kılıçdaroğlu 24.595.178, Oğan 2.831.239 (yurt içi/dışı/gümrük kırılımıyla).
  İnce haberde yok → hesaplandı: 54.796.049 − 27.133.849 − 24.595.178 − 2.831.239 = **235.783**
  (YSK ile aynı). memurlar.net (`…/haber/1065475/…`) aynı metni veriyor.
- **İkinci kaynak (ikinci oylama):** Hürriyet, "Cumhurbaşkanlığı ikinci tur kesin seçim sonuçları
  Resmi Gazete'de yayımlandı" (`hurriyet.com.tr/gundem/…-42276898`): "Yurt içi ve yurt dışında
  toplam 54 milyon 23 bin 601 seçmenimizin oy"; Erdoğan "27 milyon 834 bin 589", Kılıçdaroğlu
  "25 milyon 504 bin 724". Geçerli oy hesaplandı: 27.834.589 + 25.504.724 = **53.339.313** (YSK ile
  aynı). Kayıtlı: SETA, "Cumhurbaşkanlığı Seçimleri: İki Tur, Adaylar ve Farklar"
  (`setav.org/cumhurbaskanligi-secimleri-iki-tur-adaylar-ve-farklar`): "birinci tur seçimlerinde 64
  milyon 145 bin 504 olan kayıtlı seçmen sayısı, ikinci turda 64 milyon 197 bin 454'e yükseldi".
  Uyuşmazlık: yok. (SETA'nın birinci tur aday sayıları — Erdoğan 27.133.837, Kılıçdaroğlu
  24.594.932 — kesinleşmemiş sonuçlardır; fark %0,001'in altında.)
- **Aday gösterme:** [B] YSK Kararı 2023/254 (24.3.2023): "Adalet ve Kalkınma Partisi Grubu ve
  Milliyetçi Hareket Partisi Grubu tarafından aday gösterilen Recep Tayyip ERDOĞAN'ın", "Cumhuriyet
  Halk Partisi Grubu ve İyi Parti Grubu tarafından aday gösterilen Kemal KILIÇDAROĞLU'nun"; [B] Karar
  2023/280: "en az yüzbin seçmenin yazılı teklifiyle aday gösterilen Cumhurbaşkanı adaylarının …
  Muharrem İNCE ve Sinan OĞAN". İkinci kaynak: Yeni Şafak (`…-h-4517313`): "Memleket Partisi Genel
  Başkanı Muharrem İnce ile ATA İttifakı'nın Cumhurbaşkanı adayı Sinan Oğan, YSK'nın verilerine göre
  100 bin imzaya ulaştı … Cumhur İttifakı adayı Cumhurbaşkanı Erdoğan ile Millet İttifakı adayı Kemal
  Kılıçdaroğlu". **Önceki turdan fark:** Oğan ve İnce'ye `destek` eklendi.
- **`not`:** ikinci oylama [B] YSK arşivi + Bloomberg HT (bkz. cb-kabine-2023): "28 Mayıs'ta
  düzenlenen Cumhurbaşkanlığı 2. tur seçimleri". **Önceki turdan fark:** kabineyle ilgili cümle
  hükümet kaydına taşındı.

### 2024-03-yerel

- **[B] YSK LİSTE-4** (`…/2024MahalliIdareler/2024KesinSecimSonucları/BELEDIYEMECLISUYELIGI.pdf`;
  YSK Kararı 2024/2367, 6.5.2024, RG 7.5.2024): kayıtlı 57.716.975, oy kullanan 45.079.928, geçerli
  42.848.693; CHP 15.200.699 (%35,48), AK Parti 13.874.511, YRP 2.991.882, MHP 2.508.414, DEM
  2.409.155, İYİ 1.967.898, Zafer 1.102.172, Saadet 561.064, BBP 525.400, Hür Dava 274.486, TİP
  261.656, DEVA 186.090, BTP 154.741, DP 145.134, TKP 126.166, Memleket 115.553, Sol Parti 54.930,
  DSP 50.925, Gelecek 47.867, Vatan 37.350, Emek 36.506, … Bağımsız 122.219.
- **Neden `null`:** 2019-03-yerel ile aynı (ikinci bağımsız kaynak yok; aranan yerler aynı).
- **"Diğer" (partiSayisi 16):** Hür Dava, BTP, TKP, Sol Parti, Anavatan (2011–), Millet, TKH,
  Milli Yol, Yeni Türkiye, HKP, Adalet Partisi, Anadolu Birliği, Adalet Birlik, Ocak, HAK-PAR,
  Aydınlık Demokrasi. Güç Birliği Partisi 0 oy → sayılmadı.
- **Büyükşehir — [B] YSK "2020-2024 Seçim İstatistikleri"** (`…/docs/YENİ-KAPAKLI-SEÇİM-İSTATİSTİK-2020_2024-TR-11-11-2025.pdf`,
  s. 126, 4.1.8; grafik görüntüden okundu): Ankara **CHP %60,5** – AK Parti %31,7; İstanbul
  **CHP %51,2** – AK Parti %39,6; İzmir **CHP %49** – AK Parti %37,1.
- **Büyükşehir — ikinci kaynak:** Habertürk, "31 Mart Yerel Seçim Sonuçları 2024 – … hangi ilde hangi
  aday kazandı" (`haberturk.com/…-scm04-3673566`): "Sandıktan çıkan oyların yüzde 51,09'unu alan CHP
  adayı Ekrem İmamoğlu İstanbul Büyükşehir Belediye Başkanı oldu"; "yüzde 60,35'ini alan CHP adayı
  Mansur Yavaş Ankara"; "yüzde 48,90'ını alan CHP adayı Cemil Tugay İzmir" (kesin olmayan sonuçlar;
  yalnızca kazanan parti tutuluyor).

### hukumet-65

- **Başlangıç 24.5.2016:** [B] RG 24.5.2016/29721 mükerrer, "İzmir Milletvekili ve Adalet ve Kalkınma
  Partisi Genel Başkanı Binali YILDIRIM Başkanlığında Kurulan Bakanlar Kurulunun Atanmasına Dair
  Tezkere" (`…/2016/05/20160524M1.htm`; bkz. Hükümetler 58-64). İkinci kaynak: NTV, "Yeni kabine
  belli oldu (65. Hükümet Bakanlar Kurulu listesi)" (24.05.2016): "AK Parti Genel Başkanı Binali
  Yıldırım, Cumhurbaşkanı Erdoğan'ın onayladığı yeni kabineyi Beştepe'de açıkladı … 65. Hükümet kuruldu."
- **`tip: tek-parti`, `partiler: [akp]`:** kabine tek parti (RG tezkere başlığı; NTV) ve AK Parti'nin
  meclis çoğunluğu [B] 2015-11-genel: 317/550.
- **Bitiş 9.7.2018, `bitisNedeni: sistem-degisikligi`:** [B] 6771 md. 18/a: Bakanlar Kuruluna ilişkin
  değişiklikler "birlikte yapılan Türkiye Büyük Millet Meclisi ve Cumhurbaşkanlığı seçimleri sonucunda
  Cumhurbaşkanının göreve başladığı tarihte" yürürlüğe girer; [B] Cumhurbaşkanlığı Kararı 2018/1
  (9 Temmuz 2018, RG 10.7.2018/30474, `…/2018/07/20180710-4.pdf`, görüntüden okundu): Cumhurbaşkanı
  yardımcısı ve bakanlar "Anayasasının 104 ve 106 ncı maddeleri gereğince atanmıştır". İkinci kaynak:
  Demirkol (2023), s. 365–366: "Bakanlar Kurulunun kaldırıldığı 2018 yılına dek kurulan 65 hükümet";
  s. 373: "Cumhurbaşkanlığı sistemine geçişin yaşandığı 10.07.2018 tarihine dek" (Demirkol RG yayım
  gününü kullanıyor; bu projenin ölçütü tezkere/karar tarihi → 9.7.2018, 58–64 ile aynı ölçüt).
- **64'ün bitiş nedeni — `istifa` (bu turda bulundu):** RG'de istifa tezkeresi yok, ama tezkere TBMM
  Genel Kurulunda okunmuş: [B] TBMM Tutanak Dergisi, 26. Dönem 1. Yasama Yılı 92. Birleşim
  (`cdn.tbmm.gov.tr/TbmmWeb/Tutanak20230120/26/1/92/e06649f3-70a0-470b-b38f-cff5363b0e8e.html`),
  Cumhurbaşkanlığı tezkeresi (3/789), "Sayı: 68244839-150.01-1-347 — 22/05/2016 … Türkiye
  Cumhuriyeti Anayasası'nın 104'üncü maddesi uyarınca, Bakanlar Kurulunun istifası kabul
  edilmiştir"; aynı birleşimde 109. madde uyarınca "İzmir Milletvekili ve Adalet ve Kalkınma …"
  Binali Yıldırım'ın görevlendirilmesi. İkinci kaynak: Hürriyet, "Başbakan Ahmet Davutoğlu istifasını
  sundu, Binali Yıldırım görevi aldı" (22.5.2016): "Cumhurbaşkanımız, Başbakan Davutoğlu tarafından
  sunulan Bakanlar Kurulu'nun istifasını kabul etmiştir". → `bitisNedeni: "istifa"` (DEVİR §9.4 kalemi kapandı).

### cb-kabine-2018

- **`no: null`, `baskan`:** spesifikasyon §5.8 — 2018 sonrası yapı için resmî bir numara yok; [B]
  kararların adı "Cumhurbaşkanı Yardımcılığına ve Bakanlıklara Yapılan Atamalar Hakkında Karar".
- **Başlangıç 9.7.2018:** [B] Karar 2018/1 (yukarıda). İkinci kaynak: Hürriyet, "Son dakika...
  Cumhurbaşkanı Erdoğan yeni kabineyi açıkladı" (oluşturulma 9 Temmuz 2018 22:33).
- **`partiler: []`:** Cumhurbaşkanlığı kabinesi partilerin kurduğu bir Bakanlar Kurulu değil; Hürriyet
  aynı haberde "“Partili bakan olmayacak”" ve milletvekili seçilen dört bakanın istifa edeceğini yazıyor.
  `tip: cumhurbaskanligi` (şerit "cumhurbaşkanlığı" etiketini gösterir).
- **Bitiş 3.6.2023, `bitisNedeni: erken-secim`:** [B] Cumhurbaşkanı Kararı 2023/121 (10 Mart 2023, RG
  10.3.2023/32128 mükerrer, `…/2023/03/20230310M1-1.pdf`, OCR): "Anayasasının 116 ncı maddesi uyarınca
  Türkiye Büyük Millet Meclisi genel seçimi ve Cumhurbaşkanlığı seçiminin **yenilenmesine** karar
  verilmiştir." (59 ve 62 emsali: "yenilenmesine" kararı → `erken-secim`.) İkinci kaynak: Bloomberg HT
  (aşağıda) seçim ve yeni kabine.

### cb-kabine-2023

- **Başlangıç 3.6.2023:** [B] Cumhurbaşkanlığı Kararı 2023/284 (3 Haziran 2023, RG 4.6.2023/32211,
  `…/2023/06/20230604-1.pdf`, görüntüden okundu): "3/6/2023 TARİHLİ VE 2023/284 SAYILI KARARIN EKİ
  LİSTE" (Cevdet Yılmaz Cumhurbaşkanı Yardımcısı ve 17 bakan). İkinci kaynak: Bloomberg HT, "Yeni
  dönem, yeni kabine" (giriş 03 Haziran 2023): "3 Haziran 2023 Cumartesi günü Meclis'te yemin ederek
  görevine resmen başlamasının ardından … yeni kabineyi açıkladı".
- **Bitiş:** görevde (`bitis: null`).

### Görev 10'a eklenecekler (dönem 7)

- **Hür Dava Partisi (HÜDA PAR):** 2018'de ayrı liste (%0,31, 0 sandalye → "Diğer"); 2023'te
  adayları AK Parti listesinden girdi (Yeni Şafak); 2024 yerelde 274.486 belediye meclisi oyu, 23
  üyelik ([B] YSK LİSTE-4). Sandalye sayısı [B] kaynakla doğrulanamadı.
- Dönem 7'de sandalye kazanıp soyağacında olmayan başka parti yok (2018: 5 parti, 2023: 7 parti; hepsi
  soyağacında).

## Soyağacı eklemeleri (Görev 10, 2026-09-25)

**Kullanıcı kararı (2026-09-25):** önerilen altı partinin hepsi eklensin (CMP, Hürriyet Partisi,
Millet Partisi 1962, Türkiye Birlik Partisi, Milliyetçi Demokrasi Partisi, Hür Dava Partisi); TİP
notu "14 + 1" diye açık yazılsın. Kaynak kısaltmaları:

- **[B] TBMM-P** — Mete Kaan Kaynar, Nurettin Kalkan, *Cumhuriyet Dönemi Partiler, Seçimler,
  Beyannameler (1923-1980)*, TBMM Yayınları (`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/ed1d2982-f225-4467-a4ab-707f4cc471dc.pdf`).
- **[B] YCB** — Yargıtay Cumhuriyet Başsavcılığı siyasi parti sicili (`yargitaycb.gov.tr/sipar/158`).
- **[B] RG-2533** — 2533 sayılı Siyasi Partilerin Feshine Dair Kanun, RG 16.10.1981/17486 mükerrer
  (`resmigazete.gov.tr/arsiv/17486_1.pdf`): "Kanun No. 2533 — Kabul Tarihi: 16.10.1981 — MADDE 1. —
  12 Eylül 1980 tarihine kadar kurulmuş olan ve faaliyetleri Milli Güvenlik Konseyinin 7 Numaralı
  Bildirisi ile yasaklanmış bulunan bütün Siyasi Partiler … feshedilmişlerdir."
- **İ&İ** — "27 Mayıs ile 12 Mart Arası Dönemde Muhalefetin Sembol İsmi: Osman Bölükbaşı",
  *İnsan & İnsan* 8(29), 2021 (`dergipark.org.tr/tr/download/article-file/1724591`).
- **TD** — Gül Tuba Taşpınar Dağcı, "Türk Siyasi Tarihinde Hürriyet Partisi'nin Yeri"
  (`dergipark.org.tr/tr/download/article-file/9887`); **AB** — Mustafa Albayrak, "Hürriyet Partisi'nin
  Türk Siyasî Tarihindeki Yeri ve Önemi", *AAMD* (`…/article-file/676953`); **KU** — Kadri Unat,
  "Seçim Afişleri Işığında Hürriyet Partisi'nin 1957 Genel Seçimi Kampanyası", *HÜTAD* (`…/article-file/3732278`).
- **ÇAB** — Çiçek, Aydın, Baran, "Gelenekle Sol Arasında Sıkışmış Bir Siyasal Hareket: (Türkiye)
  Birlik Partisi", *SİYASAL* 26(2), 2017 (`…/article-file/409411`); **TKHBVA** — "Türk Siyasetinde
  Alevi Kimliğinin Politik Temsil Deneyimi: (Türkiye) Birlik Partisi", *Türk Kültürü ve Hacı Bektaş
  Velî Araştırma Dergisi* 112, 2024 (`dergipark.org.tr/tr/pub/tkhcbva/article/1533742`).
- **JEBPIR** — "1983 Genel Seçimleri ve Anavatan Partisi", *JEBPIR* 8(1), 2022 (`…/article-file/1865436`);
  **RY** — Rezzan Yücer, "Siyasi Kimliği ile Necdet Calp ve Halkçı Parti (1983-1985)" (`…/article-file/4244382`);
  **KO** — Kutlu & Oğuz, "Otoriter Rejimlerin Konsolidasyonunda Cunta Partilerinin Rolü: DRP, Golkar
  ve MDP Örnekleri", *Akademik Hassasiyetler* 9(20), 2022 (`…/article-file/2667827`); **MA** — Fatma
  Okur Çakıcı, "Siyasi Parti Bölünmeleri…", *Mavi Atlas* 8(2), 2020 (`…/article-file/1157799`).
- **MI** — Muhittin Işık, "Kürt Muhalefet Partisi Olarak Hür Dava Partisi'nin (HÜDA PAR) Kürt
  Meselesine Yaklaşımı", *DÜİİBFD* 14(28), 2024 (`…/article-file/3976680`); **CUM** — Cumhuriyet,
  "HÜDA PAR'ın açılımı nedir? …" (`cumhuriyet.com.tr/turkiye/…-2060080`).

### cmp — Cumhuriyetçi Millet Partisi (1954 – 1958, devredildi, Milliyetçi, dönem 1)
- **Kuruluş 9.2.1954:** TBMM-P s. 52: "Cumhuriyetçi Millet Partisi, 09.02.1954 tarihinde Ahmet
  Tahtakılıç'ın genel başkanlığında kurulur" (dipnot: EGM'nin 1983 listesi 12.09.1954 diyor, "tüm diğer
  kaynaklarda … 09.02.1954"); İ&İ: "9 Şubat 1954'te CMP kurulmuştur".
- **1958 — CKMP'ye dönüşme (`durum: katildi`, bağ `cmp → ckmp` devam):** TBMM-P s. 53: "Cumhuriyetçi Millet
  Partisi, Türkiye Köylü Partisi ile birleşme kararı alır … 19.11.1958 … Bu birleşme ardından Cumhuriyetçi
  Millet Partisi adını Cumhuriyetçi Köylü Millet Partisi olarak değiştirecektir"; s. 54: "Milliyetçi Hareket
  Partisi, Cumhuriyetçi Millet Partisi'nin kurumsal kimliğindeki dönüşümden ortaya çıkmıştır"; İ&İ: "CMP,
  1958 yılında Cumhuriyetçi Köylü Partisi ile birleşerek iki parti CKMP … adıyla".
- **Bağ `mp48 → cmp` (devam):** TBMM-P s. 53: "kapatılan Millet Partisi'nin siyasî mirası üzerine teşkil
  edilmiştir"; İ&İ: "MP … 1954 yılında kapatılmış ve yerine … CMP … kurulmuştur".
- **`k`:** TBMM-P kurucular arasında "Osman Bölükbaşı" (s. 52) ve 1955'ten 1962'ye genel başkan; İ&İ:
  "Bölükbaşı başkanlığında CMP … kurulmuştur".
- **`o`:** "aynı yıl meclise girdi" — 1954-05-genel [B] (5 sandalye) + TBMM-P ("Cumhuriyetçi Millet Partisi
  (408.249 - % 5,3 - 5 MV)").
- **`aile: 3` gerekçesi:** CKMP (aile 3) ile aynı tüzel kişiliğin önceki adı (TBMM-P s. 53–54); mp48 (aile 3)
  kadrosu. Sütun ayrı bir ideoloji iddiası değil, aynı kurumsal hattın devamı.

### hurriyet — Hürriyet Partisi (1955 – 1958, devredildi, Liberal, dönem 1)
- **Kuruluş 20.12.1955:** TBMM-P s. 59: "Hürriyet Partisi, 20.12.1955 tarihinde kurulmuştu"; TD: "20 Aralık
  1955 günü HP resmen kurulmuştur"; AB: "20 Aralık 1955 tarihinde kurul[du]".
- **Fesih ve CHP'ye katılma 24.11.1958 (`durum: katildi`, bağ `hurriyet → chp23` katılma):** TBMM-P: "24.11.1958
  tarihinde toplanan Olağanüstü Kongrede … Hürriyet Partisi'nin feshine ve mallarının Cumhuriyet Halk
  Partisi'ne devrine karar verildi … büyük çoğunluk Cumhuriyet Halk Partisi'ne katıldı"; TD: "24 Kasım 1958
  tarihinde aldığı kararla kendisini fesh ederek CHP'ye katılmıştır"; AB ve KU aynı tarih.
- **Bağ `dp46 → hurriyet` (bölünme) ve `o`nun ilk cümlesi:** TBMM-P: "gazetecileri ispat hakkından yoksun
  bırakan düzenlemeye itiraz eden 19 milletvekilinin … Partilerinden ayrılan milletvekilleri ve partililer
  Hürriyet Partisi'ni kurdular"; KU: "Hürriyet Partisi, Demokrat Parti'den ihraç edilen ve istifa eden …".
- **"1957 seçiminde dört milletvekili":** 1957-10-genel [B] (4 sandalye) + TBMM-P ("Hürriyet Partisi
  (321.471 - % 3,5 - 4 MV)").
- **`k`:** TD kurucu listesi ("Ekrem Alican (Kocaeli), Turan Güneş (Kocaeli) … Fevzi Lütfi Karaosmanoğlu
  (Manisa)"; "Kuruculardan 28'i milletvekili"); TBMM-P: "Parti kapandığında genel başkanlık koltuğunda Fevzi
  Lütfi Karaosmanoğlu'nun oturduğu görülmektedir".
- **`aile: 6` (Liberal) gerekçesi:** TD: "HP, ekonomide nispeten liberal bir politikaya sahip iken, rejim
  bakımından … hürriyetleri genişleten bir politikaya sahiptir"; KU: DP'nin "liberal-demokrat vaatlerini
  ciddiye alan … liberal bir muhalefetin" 1955-1958'de faaliyet gösteren partisi; AB: "aydın ve liberal kanat".

### mp62 — Millet Partisi (1962 – 1981, kapatıldı, Milliyetçi, dönem 2)
- **Kuruluş 13.6.1962, bağ `ckmp → mp62` (bölünme):** TBMM-P s. 50–51: "Hacı Osman Bölükbaşı bir grup
  milletvekili ile partiden ayrılarak 13.06.1962 tarihinde Millet Partisi'ni tekrar kuracaktır. Bu kurulan
  Millet Partisi'nin, Ankara 4. Sulh Hukuk Mahkemesi tarafından kapatılan Millet Partisi'nin hukuki
  kurumsal değil sadece siyasî devamı olduğunu da hatırlatmak gerekiyor"; İ&İ: "CKMP içinde çıkan
  anlaşmazlıklar sonucunda Bölükbaşı bu partiden ayrılarak 1962 yılında tekrar MP'yi kurmuş".
  → 1948 MP'ye "devam" bağı çizilmedi (hukuki devam yok); CKMP'den bölünme olarak bağlandı.
- **Kapatma 16.10.1981:** TBMM-P s. 51: "10.10.1981 Tarih, 2533 sayılı Kanun ile 16.10.1981 tarihinde parti
  kapatılmıştır" + RG-2533 madde 1 (bütün partiler).
- **`k`:** TBMM-P (resmî ilk genel başkan Enis Akaygen, "05.07.1962 tarihinde görevini Hacı Osman Bölükbaşı'na
  devredecektir") + İ&İ ("Bölükbaşı … 1962 yılında tekrar MP'yi kurmuş").
- **`o`:** koalisyon gerekçesi TBMM-P ("İnönü'nün kurduğu ikinci koalisyon hükûmetine altı bakanla katılmıştır.
  Bu, parti yönetiminde anlaşmazlıklara yol açacak") + İ&İ ("CKMP içinde çıkan anlaşmazlıklar"); 1965'te
  31 milletvekili — 1965-10-genel [B].
- **`aile: 3`:** 1948 Millet Partisi'nin (aile 3) siyasî devamı (TBMM-P) ve aynı kurucu kadro (İ&İ).
- **Veri:** `1965-10-genel`, `1969-10-genel`, `1973-10-genel`, `1973-12-yerel` satırları `parti:"mp62"` oldu.
  **1994 ve 1999 yerel satırlarındaki "Millet Partisi" başka bir partidir** (TBMM-P s. 49: 1984'te kurulan
  Islahatçı Demokrasi Partisi'nin 1992'de aldığı ad; "hiçbirisinin bir diğeriyle hukuki, kurumsal ilişkisi
  mevcut değildir") → `ad:` olarak kaldı.

### tbp — Türkiye Birlik Partisi (1966 – 1981, kapatıldı, Cumhuriyetçi / sosyal demokrat, dönem 2)
- **Kuruluş 17.10.1966 ve ad değişikliği 27.11.1971:** TBMM-P s. 69: "Parti, 17.10.1966, tarihinde Hasan Tahsin
  Berkman liderliğinde kurulmuştur. Partinin ismi 27.11.1971 tarihinde … Türkiye Birlik Partisi olarak tadil
  edilmiştir"; ÇAB: "17 Ekim 1966'da bir grup Alevi kökenli siyaset adamının bir araya gelerek oluşturdukları
  BP … İlk genel başkan Hasan Tahsin Berkman"; TKHBVA: "17 Ekim 1966 tarihinde politik faaliyetlerine başlamış".
- **Kapatma 16.10.1981:** TBMM-P s. 70 + RG-2533.
- **`o`:** "Alevi kökenli" TBMM-P (dipnot 214) + ÇAB; "Atatürkçülük ve laiklik vurgusuyla başladı, zamanla sola
  kaydı" ÇAB ("BP'nin ilk programının Kemalist düşünce tarzının ürünü"; "bir sol parti hüviyeti kazanmıştır")
  + TKHBVA (bölüm başlığı "İdeolojik Paradigma Değişimi: Seküler Milliyetçilikten Demokratik Sola"); 1969'da
  8 milletvekili — 1969-10-genel [B] + ÇAB ("TBP 1969 seçimlerinde … parlamentoya 8 vekil göndererek").
- **`aile: 0` gerekçesi:** Atatürkçü program (ÇAB, TKHBVA) + tüzük çalışmalarında "İngiliz İşçi Partisi ile
  İsveç Sosyal Demokrat" örnekleri (ÇAB) ve "demokratik sol"a geçiş (TKHBVA) → Cumhuriyetçi / sosyal demokrat.
  Kimliğe göre değil ideolojiye göre sınıflandırıldı (kaynakca.html "Sınıflandırma ilkesi").
- Bağ yok: TBP bir partiden bölünmedi, bir partiye katılmadı (TBMM-P: 1970'te "partili bazı milletvekilleri
  Adalet Partisi'ne katılır" — örgütsel birleşme değil).

### mdp — Milliyetçi Demokrasi Partisi (1983 – 1986, feshedildi, Merkez sağ, dönem 4)
- **Kuruluş 16.5.1983:** JEBPIR: "ilk olarak 16 Mayıs 1983 günü Turgut Sunalp liderliğinde, askerin desteklediği
  parti olarak bilinen Milliyetçi Demokrasi Partisi (MDP) kuruldu"; KO: "Milliyetçi Demokrasi Partisi (MDP),
  16 Mayıs 1983'te kuruldu"; RY: "Siyasal Partiler Yasası'nın kabul edilmesinden sonra kurulan ilk parti".
- **Fesih 4.5.1986 (`durum: kapandi`):** KO: "parti 4 Mayıs 1986'daki olağanüstü kongreyle kendini feshetmiştir";
  MA: "MDP, 4 Mayıs 1986'da Olağanüstü Büyük Kongresi'ni toplamış … partinin kapatılması kararı alınmıştır".
  YCB sicili yalnızca faal partileri listeliyor; resmî [B] fesih kaydına erişilemedi (iki akademik kaynak).
- **Bağ yok:** MA: fesihten sonra "22 MDP'li vekil" Hür Demokrat Parti'ye, "20 MDP'li vekil DYP'ye", "23 vekil
  de Anavatan Partisi'ne" geçti — parti bir partiye katılmadı; Hür Demokrat Parti soyağacında yok.
- **`k`:** JEBPIR, RY ("Kurucusu Orgeneral Turgut Sunalp'dır"), KO.
- **`o`:** askerî destek JEBPIR + MA ("askerî kanadın desteği ile kurulan"); 71 sandalye üçüncü parti 1983-11-genel
  [B] + MA ("üçüncü parti").
- **`aile: 1` gerekçesi:** KO ("tabanda ise merkez sağ kitleyi bütünleştirecek bir parti"); RY ("üyeleri emekli
  askerler ve sağ görüşlü partilerin yasaklı olmayan politikacılarıdır"; "Süleyman Demirel'e muhalif olan
  Adalet Partililer").

### hudapar — Hür Dava Partisi (2012 –, faal, Milli Görüş / muhafazakâr, dönem 6)
- **Kuruluş 19.12.2012, kısa ad, genel başkan:** [B] YCB: "HÜDA PAR — Kuruluş Tarihi: 19.12.2012 — Başkan:
  ZEKERİYA YAPICIOĞLU"; MI: "Hür Dava Partisi, kısa adıyla HÜDA PAR, 19 Aralık 2012'de kurulmuştur … kurucu
  genel başkanı Mehmet Hüseyin Yılmaz"; CUM: "Hür Dava Partisi, 19 Aralık 2012 tarihinde kuruldu … Mustazaf-Der'in
  Genel Başkanı Mehmet Hüseyin Yılmaz tarafından kuruldu". Yapıcıoğlu ikinci kaynak: Hürriyet 15.02.2017 ("Hür
  Dava Partisi (HÜDA PAR) Genel Başkanı Zekeriya Yapıcıoğlu").
- **`o` — 2023 AK Parti listeleri:** Yeni Şafak ("HÜDA PAR, seçime AK Parti listelerinden gireceğini açıkladı");
  TGRT Haber, "3 HÜDA-PAR'lı isim AK Parti listelerinden Meclis'e girdi". Seçilen sayısı kaynaklarda 3 ile 4
  arasında değişiyor ve resmî kaynak yok → sayı yazılmadı; veride `2023-05-genel.ittifak`a
  `{ad:"AK Parti listesi", liste:"akp", icinden:[{parti:"hudapar", sandalye:null}]}` eklendi.
- **`aile: 2` gerekçesi (sınırlı):** MI: "Kürt kimliğiyle bütünleşmiş, muhafazakâr bir parti", parti programının
  "İslâmî referanslarla" çözüm önerdiği; aynı yazarın ikinci makalesi (İnsan ve Toplum): "İslâm ve Kürt
  kimliğini benimseyen bir muhalefet partisi"; MI'nın kaynakçasındaki Koç & Palabıyık (2016), "Türk siyasal
  yaşamında İslami Kürt bir muhalefet partisi: Hür Dava Partisi örneği" (metnine erişilemedi, başlık üzerinden).
  ⚠️ İkinci **bağımsız** tam metin kaynak bu turda açılamadı; `o`da ifade "akademik çalışmalarda … olarak
  tanımlanır" diye kaynağa atfen yazıldı.
- **Veri:** 2018-06-genel satırı `parti:"hudapar"` (önceden "Diğer"); 2014-03-yerel ve 2024-03-yerel'de
  "Diğer"den çıkarılıp ayrı satır oldu (partiSayisi 9→8, 16→15). 2019-03-yerel'de 0 oy → yazılmadı.

### Düzeltmeler (mevcut soyağacı metinleri)
- **mp48:** `yil` "1948 – 1958" → **"1948 – 1954"**; özetin son cümlesi "1958'de Köylü Partisi ile birleşerek
  CKMP'ye dönüştü" → "1954'te mahkeme kararıyla kapatıldı; kadrosu aynı yıl Cumhuriyetçi Millet Partisi'ni
  kurdu." Kaynak: TBMM-P s. 50 ("27.01.1954 tarihinde … Ankara 4. Sulh Hukuk Mahkemesinin (Esas: 1222, Karar:
  30 …) kararı ile kapatılmıştır") + İ&İ ("MP … 1954 yılında kapatılmış"). Bağ `mp48 → ckmp` kaldırıldı,
  yerine `mp48 → cmp → ckmp`.
- **ckmp:** özetin ilk cümlesi "Millet Partisi ile Türkiye Köylü Partisi'nin birleşmesiyle kuruldu" →
  "Cumhuriyetçi Millet Partisi'nin 1958'de Türkiye Köylü Partisi ile birleşmesiyle bu adı aldı." (TBMM-P + İ&İ).
- **tip61:** "1965'te 15 milletvekili kazandı" → **"1965'te Millet Meclisi'ne 14 milletvekili soktu."**
  Kullanıcı "14 + 1 (senatör)" yazılmasını seçmişti, ancak 15. üyenin kim olduğu kaynaklarda çelişiyor:
  TBMM-P s. 65 "15 (14 MV +1 Senatör)"; NTV, "Sosyalistler TBMM'ye nasıl girdi?": "TİP 14 milletvekilliği kazandı
  ve bu partinin listesinden bağımsız aday olup seçilen Çetin Altan'ın mecliste TİP grubuna katılmasıyla sayı
  15'e çıktı"; Milliyet: "TBMM'ye 15 milletvekili" (senatör Niyazi Ağırnaslı'nın TİP'e 1963'te katıldığını
  ayrıca yazıyor). İki kaynağın uyuştuğu **14** yazıldı; "+1" kullanıcıya bildirildi.
- **12 Eylül kesintisi ve kaynakca.html:** "1533 sayılı kanun" → **"2533 sayılı kanun"** (RG-2533; TBMM-P
  "10.10.1981 Tarih, 2533 sayılı Kanun ile 16.10.1981 tarihinde"). Önceki metin yazım hatasıydı.

## Görev 12 — Ara seçimler (2026-09-26)

**Ortak ikinci kaynak (T):** TESAV, "Çok Partili Dönemde Yapılan Milletvekili Ara Seçimi Sonuçları"
(*Osmanlı'dan Günümüze Seçimler 1877–2002*'den). Dönem 1–4'te 404 veren adresin **Internet Archive
kopyası** bulundu: `https://web.archive.org/web/20241117093349/https://www.tesav.org.tr/wp-content/
uploads/2017/03/17.-Milletvekili-Ara-Se%C3%A7im-Sonu%C3%A7lar%C4%B1.pdf` (8 s., `pdftotext -layout`).
TESAV bir vakıf yayını, resmî kaynak değil; her kayıtta **[B]** olarak aşağıdaki Resmî Gazete'de
yayımlanan YSK bildirisi kullanıldı (taranmış sayfalar `pdftoppm -r 300` + `tesseract -l tur` ile
okundu; iki sütunlu sayfalarda il–aday eşleşmesi parti oylarının il geçerli oyuna eşitlenmesiyle
denetlendi). Senato seçimiyle aynı gün yapılanlarda yalnız "Milletvekili Seçimi" bölümleri sayıldı.
Oy sayıları kayda yazılmadı (spesifikasyon §5.7: ara seçimde yalnız sandalye); aşağıdaki oy
toplamları yalnızca iki kaynağın aynı seçimi anlattığını göstermek içindir.

### 1966-06-ara
- **[B] RG 9.6.1966, sayı 12318, s. 6** (`https://www.resmigazete.gov.tr/arsiv/12318.pdf`), YSK
  kararı 8.6.1966: Hatay, seçilen Şemsettin Mursaloğlu, "Adalet Partisi". Kayıtlı 199.170, oy
  kullanan 105.530, geçerli 100.584; AP 44.598, CHP 36.096.
- **[T]** aynı rakamlar, AP 1 sandalye. Uyuşmazlık yok.

### 1968-06-ara
- **[B] RG 12.6.1968, sayı 12922, s. 15–16** (`…/arsiv/12922.pdf`): Adana (M. Kemâl Çetinsoy),
  Çorum (İhsan Tombuş), Diyarbakır (Abdüllâtif Ensarioğlu), İstanbul (Mehmet Mustafa Gürpınar),
  Urfa (Hüsamettin Koran) — hepsi Adalet Partisi. Toplam kayıtlı 2.131.869, oy kullanan
  1.139.945, geçerli 1.048.582; AP 507.241. (Urfa'da parti oyları toplamı basılı geçerli oydan 1
  fazla: 105.922 / 105.921 — kayda yazılan bir değeri etkilemiyor.)
- **[T]** 5 il, AP 5, aynı toplamlar. Uyuşmazlık yok. Aynı gün yapılan yerel seçim ayrı kayıt.

### 1975-10-ara
- **[B] RG 25.10.1975, sayı 15394, s. 11–15** (`…/arsiv/15394.pdf`): Amasya (Orhan Kayıhan, CHP),
  Bursa (Ali Elverdi, AP), Eskişehir (M. İsmet Angı, AP), Niğde (Hüseyin Avni Kavurmacıoğlu, AP),
  Urfa (Halil Millî, AP), Zonguldak (Sabati Ataman, AP). Toplam kayıtlı 1.743.152, oy kullanan
  1.120.415, geçerli 1.077.821; AP 524.001, CHP 409.387. Bildiri Cumhuriyet Senatosu üye
  seçimleriyle birlikte yayımlanmış.
- **[T]** 6 il, AP 5, CHP 1, aynı toplamlar. Uyuşmazlık yok. (Önceki "eklenmedi" kaydının yerini alır.)

### 1979-10-ara
- **[B] RG 8.11.1979, sayı 16803, s. 11, 14, 18, 19, 20; toplamlar s. 25** (`…/arsiv/16803.pdf`):
  Aydın (Selahittin Acar), Edirne (Ahmet İnceoğlu), Konya (Şaban Karataş), Manisa (Süleyman
  Çağlar), Muğla (Ünal Demir) — hepsi Adalet Partisi. Kayıtlı 1.727.069, oy kullanan 1.289.141,
  geçerli 1.252.427; parti oyları toplamı 1.252.210 (217 fark RG'nin kendisinde).
- **[T]** 5 il, AP 5; aynı 217 farkını not ediyor. TESAV'da TSİP 8.735 yazıyor, RG'de 6.735 —
  TESAV'ın kendi toplamı ancak 6.735 ile tutuyor (TESAV dizgi hatası; kayda oy yazılmadığı için
  etkisiz). RG'de Edirne geçerli oyu Erzincan'ınki (82.440) olarak basılmış — yine etkisiz.

### 1986-09-ara
- **[B] RG 10.10.1986, sayı 19247, s. 20–21** (`…/arsiv/19247.pdf`), YSK Duyuru 1986/15 (YSK karar
  400, 7.10.1986): Anavatan Partisi 6 (Ankara 2. bölge, Bingöl, Burdur, Gaziantep, İstanbul 6.
  bölge, Niğde); Doğru Yol Partisi 4 (Manisa 1. ve 2. bölge, Samsun 2. bölge, Zonguldak 2.
  bölge); Sosyal Demokrat Halkçı Parti 1 (İzmir 2. bölge, Erdal İnönü). Kayıtlı 2.950.154, oy
  kullanan 2.592.752, geçerli 2.507.212.
- **[T]** 10 il, 11 sandalye, ANAP 6, DYP 4, SHP 1, aynı toplamlar. Uyuşmazlık yok. Tarih ayrıca
  3309 sayılı Kanun'la (yukarıdaki "1986 ara seçimi" bölümü) doğrulanmıştı.

### 2003-03-ara
- **[B] RG 25045 mükerrer** (`https://www.resmigazete.gov.tr/eskiler/2003/03/20030311M1.htm`,
  sayfa görüntüleri `20030311M1-1.gif`, `-2.gif`, OCR ile okundu), YSK Karar No 212 (11.03.2003):
  "ADALET VE KALKINMA PARTİSİ – 3" (Recep Tayyip Erdoğan, Öner Gülyeşil, Öner Ergenç). Kayıtlı
  119.198, oy kullanan 73.624, geçerli 65.079; AKP 55.203, CHP 8.972. Sayfa başlığında "12 Mart
  2003 Salı" yazıyor, karar tarihi 11.03.2003 — tarih alanı seçim günü (9 Mart) olduğundan etkisiz.
- **[T]** aynı rakamlar, AK Parti 3; "2002 Siirt ili seçimlerinin itiraz üzerine iptal edilmesi
  nedeniyle yapılan yenileme seçimi". Uyuşmazlık yok. (§9.4'teki "yalnız taranmış GIF, OCR yok"
  engeli bu ortamda tesseract ile aşıldı.)

### 1951-09-ara — `sandalyeSayisi` 20 yapıldı
- **[B] TBMM Tutanak Dergisi, 9. dönem, cilt 10, birleşim 1 (1.XI.1951) ve 2 (9.XI.1951)**
  (`https://www.tbmm.gov.tr/tutanaklar/TUTANAK/TBMM/d09/c010/tbmm09010001.pdf`, `…/tbmm09010002.pdf`):
  andiçme listelerinde 17 ilden 20 yeni milletvekili — Aydın 3 (Nail Geveci, Lûtfi Ülkümen, Cevat
  Ülkü), İstanbul 2 (Hadi Hüsman, Seyfi Oran), Balıkesir, Bilecik, Bitlis, Bursa, Çanakkale,
  Denizli, Eskişehir, Gümüşane, İzmir, Kastamonu, Kırşehir, Muğla, Sinop, Sivas, Zonguldak 1'er.
- **[T]** 17 il, 20 milletvekili, aynı il listesi. Önceki turdaki üç rivayetten 17 il/20 sandalye
  resmî kayıtla doğrulandı; `sandalyeSayisi: 20`.
- Parti dağılımı (TESAV: DP 18, CHP 2) **yazılmadı**: tutanaklar parti belirtmiyor; RG 7906–7930
  sayıları (10.9–12.10.1951) tarandı, seçimle ilgili bildiri yok. TESAV'ın kaynağı olan "9. Dönem
  TBMM Ad Defteri" bu turda bulunamadı.

### 1947, 1948, 1949 ara seçimleri — yine eklenmedi
- **[T]** 6 Nisan 1947 (4 il, 9), 17 Ekim 1948 (13 il, 13), 16 Ekim 1949 (12 il, 14); hepsi CHP,
  DP katılmadı.
- TBMM Tutanak Dergisi andiçme kayıtları il ve sandalye sayılarını doğruluyor (8. dönem cilt 5,
  birleşim 49 ve 51; cilt 13, birleşim 2–3; cilt 21, birleşim 1), ancak **seçim günleri** ve
  **partiler** hiçbir resmî belgede bulunamadı (cilt 13'te yalnız "13 ilde yapılan Milletvekili
  ara seçimi" ifadesi var). Tarih kaydın kimliği olduğundan tek kaynakla kayıt açılmadı.
- Erişim (bu bölümün tamamı): 2026-09-26.

## Görev 12 — 1955 yerel seçimi ve 1984–1999 yerel ülke geneli (2026-09-26)

### 1955-11-yerel
- **`tarih` 13 Kasım 1955 — [B] 6555 sayılı Kanun** (kabul 11.5.1955), RG 18.5.1955 sayı 9009, s. 2
  (`https://www.resmigazete.gov.tr/arsiv/9009.pdf`): "Belediye meclislerinin seçimi her dört
  senede bir Kasım ayının 2 nci Pazarına rastlayan günde yapılır" ve mevcut meclislerin süresi
  "16 Kasım 1955 tarihine kadar devam eder" → Kasım 1955'in ikinci pazarı **13 Kasım**
  (hesaplandı). **[İkinci] TESAV, "1943–1980 Yılları Kronolojisi"**
  (`https://www.tesav.org.tr/wp-content/uploads/2018/02/1.-1943-1980yillarikronolojisi.pdf`):
  "13 Kasım 1955 — Belediye Seçimlerinin yapılması". Eşleşiyor.
- **İl genel meclisi 25 Eylül 1955** (`not`'ta) — [B] 6438 sayılı Kanun, RG 26.11.1954 sayı 8863,
  s. 2 (`…/arsiv/8863.pdf`): "Eylül ayının son Pazarına rastlıyan günde" → 25 Eylül 1955
  (hesaplandı); TESAV kronolojisi: "25 Eylül 1955 — İl Genel Meclisi Seçimlerinin yapılması".
- **Boykot** — TESAV kronolojisi: "3 Ağustos 1955 CMP'nin … katılmama kararı", "5 Ağustos 1955
  CHP'nin … katılmama kararı"; Bilal NERGİZ (dönem 1 bölümü): CHP ve CMP katılmadı.
- Katılım (%38,34, NERGİZ) tek kaynaklı ve hangi ölçüye ait olduğu belirsiz → yazılmadı.
  Oy sayıları aranmadı/bulunmadı → `sonuc: []`.

### 1984–1999 yerel — ülke geneli belediye meclisi: resmî rakamlar bulundu, yine `null`

> **Kullanıcı kararı (2026-09-26): "resmî ilanı yeterli say, 1984–1999 rakamlarını siteye işle."**
> Aşağıdaki rakamlar `1984-03-yerel`, `1989-03-yerel`, `1994-03-yerel`, `1999-04-yerel`
> kayıtlarına yazıldı (kayitli, kullanilan, gecerli ve bütün parti satırlarının `oy` değeri).
> Yazmadan önce denetlendi: dört yılda da parti oyları toplamı geçerli oya **tam eşit**; satırlar
> kayıtlardaki parti listesiyle birebir örtüşüyor; her sayı RG alıntı metninde (1994'te sayfa 18
> "Asıl üyelik … siyasi partilere dağılımı" tablosu, 28.691 üyelik) bulundu. Kayıtların `not`
> alanı sayıların yalnız YSK'nın RG ilanına dayandığını söylüyor. Bu karar yalnız bu dört kayıt
> içindir; 2004–2024 kayıtları için ayrıca sorulacak.
YSK'nın ülke geneli kararları Resmî Gazete'de bulundu (taranmış sayfa görüntüsüyle okundu; her
yılda parti oyları toplamı geçerli oya tam eşit). Tek ikinci kaynak DİE'nin *Mahalli İdareler
Seçimi Sonuçları* kitapları — DİE/TÜİK ulusal rakamları YSK ilanından **aynen** aldığını kendisi
yazıyor (yukarıdaki dönem 6 notu), yani bağımsız değil. Akademik/haber kaynağında bu sayılar
bulunamadı (tam sayılarla arama da sonuçsuz). Dönem 6 emsali gereği alanlar `null` kaldı;
bağımsız bir kaynak bulunursa aşağıdaki rakamlar doğrudan yazılabilir:
- **1984** — YSK Karar 1623 (22.5.1984), RG 26.5.1984/18412 s. 13–14, Liste 3: seçmen 12.341.328,
  oy kullanan 10.559.948 (PDF metin katmanında yanlışlıkla 10.659.948; görüntü ve %85,57 bunu
  doğruluyor), geçerli 9.873.876; ANAP 4.295.246, SODEP 2.521.392, DYP 1.189.978, HP 803.795,
  MDP 561.038, RP 384.201, Bağımsız 118.226. DİE kitabı (`ysk.gov.tr/doc/dosyalar/1984Mahalli-Tuik.pdf`
  Tablo 4) birebir aynı. (Önceki turda il tablosundan hesaplanan toplam bundan farklıydı — Adana
  hatası ve eksik satırlar yüzünden; resmî toplam budur.)
- **1989** — YSK Karar 735 (16.5.1989), RG 28.5.1989/20178 s. 11–12: seçmen 18.090.657, oy kullanan
  14.107.146, geçerli 13.237.086; SHP 4.389.132, DYP 3.137.522, ANAP 3.111.259, RP 1.181.950,
  DSP 890.164, MÇP 436.951, IDP 69.195, Bağımsız 20.913. DİE kitabı Tablo 5 birebir aynı.
- **1994** — YSK Karar 1369 (5.5.1994), RG 7.5.1994/21927 s. 17–18: seçmen 23.366.089, oy kullanan
  21.102.428, geçerli 19.734.355; ANAP 4.482.333, RP 3.776.425, DYP 3.728.521, SHP 3.316.716,
  DSP 1.649.104, MHP 1.508.713, CHP 851.232, BBP 211.136, DP 65.022, YDP 35.754, MP 34.197,
  İP 32.559, SBP 21.011, Bağımsız 21.632.
- **1999** — YSK Karar 1663 (25.5.1999), RG 26.5.1999/23706 s. 9–10: seçmen 28.889.819, oy kullanan
  24.527.241, geçerli 23.164.822; FP 4.225.409, ANAP 3.956.557, DSP 3.755.293, MHP 3.636.853,
  CHP 3.074.207, DYP 2.896.847, HADEP 800.599, BBP 302.651, Demokrat Türkiye P. 159.864, ÖDP
  152.030, BP 38.467, MP 33.338, DP 32.781, EMEP 22.398, İP 20.597, LDP 20.203, YDP 13.523,
  DBP 3.474, Değişen Türkiye P. 3.110, SİP 392, DHP 115, Bağımsız 16.114. (Önceki turdaki "dört
  il tabloda yok" sorunu resmî ülke toplamıyla aşıldı; kalan engel yalnız bağımsız ikinci kaynak.)
- Erişim: 2026-09-26. Dosyalar: oturum çalışma dizini `k/yerel/` (RG PDF'leri, OCR, alıntılar).

## Görev 12 — 2004–2024 yerel ülke geneli belediye meclisi sayıları yazıldı (2026-09-27)

**Kullanıcı kararı (2026-09-27): "evet, 2004–2024 için de resmî ilanı yeterli say."** Dönem 6 ve 7'de
yalnız YSK yayımladığı için `null` bırakılan ülke geneli sayılar, aynı kayıtların bu defterdeki [B]
YSK LİSTE-4 rakamlarından yazıldı: `2004-03-yerel`, `2009-03-yerel`, `2014-03-yerel`,
`2019-03-yerel`, `2024-03-yerel` (kayitli, kullanilan, gecerli ve bütün `oy` değerleri).
- **Denetim:** her yılda satırların toplamı (Diğer ve Bağımsız dahil) geçerli oya **tam eşit**;
  satır listesi kayıtla birebir aynı; yazılan her sayı bu defterdeki ilgili bölümde geçiyor.
- **2019 ve 2024 LİSTE-4 yeniden indirildi** (2026-09-27) ve tablolar tam okundu (defterdeki 2024
  listesi "…" ile kısaltılmıştı):
  - 2019 "Diğer" (2 parti) = TKP 125.109 + BTP 115.466 = **240.575**; Hür Dava 0 oy.
  - 2024 "Diğer" (15 parti) = Sol Parti 54.930 + Anavatan 21.582 + TKP 126.166 + Anadolu Birliği
    2.831 + HKP 3.240 + TKH 20.210 + BTP 154.741 + Yeni Türkiye 3.851 + HAK-PAR 1.366 + Ocak 1.698
    + Adalet Birlik 2.228 + Millet 21.028 + Milli Yol 12.072 + Adalet Partisi 2.889 + Aydınlık
    Demokrasi 880 = **429.712**; Güç Birliği Partisi 0 oy (sayılmadı). HÜDA PAR (274.486) Görev
    10'dan beri ayrı satırda.
  - 2024 LİSTE-4 notu: Aksaray-Güzelyurt, Kayseri-Pınarbaşı, Şanlıurfa-Hilvan, Sivas-Yıldızeli-
    Güneykaya belediye meclisi seçimleri iptal edildiği için sonuçlara dahil değil → kaydın `not`'una
    yazıldı.
- **2014 "Diğer":** defterdeki 9 partilik 330.876'dan HÜDA PAR (87.726, Görev 10'da ayrı satıra
  alındı) çıkarıldı → 8 parti, **243.150**.
- Kayıtların `not` alanındaki "boş bırakıldı" cümlesi, sayıların yalnız YSK ilanına dayandığını
  söyleyen cümleyle değiştirildi; `kaynakca.html` notu 1984–2024'ü kapsayacak biçimde genişletildi.

## Görev 12 — 1950–1969 genel seçim eksikleri (2026-09-27)

Araştırma dosyaları: oturum çalışma dizini `k/g5069/` (`extracts.txt` hepsini özetler).

### 1969-10-genel — `gecerli` 9.086.296
- **[B] RG 20.10.1969, sayı 13331, s. 13** (YSK Karar 1520 / Bildiri 37, "Geçerli oy puslası sayısı",
  sayfa görüntüsüyle denetlendi). TÜİK Tablo 23 ve YSK "1950–1977 Türkiye" tablosu aynı; TBMM 9.086.381 (%0,001).
- **İkinci kaynak:** Erkmen, *GAÜN Sosyal Bilimler Dergisi* (`dergipark.org.tr/.../article-file/504264`): 9.086.296.
- Parti oylarının toplamı (kayıttaki TÜİK sayıları) 9.089.866 → geçerliden 3.570 fazla; aynı fark RG
  ilanının kendi parti satırlarında da var. `dogrula.js` bu tür ≤ %0,5 farkı artık uyarı sayıyor.

### 1961-10-genel — `gecerli` 10.138.035
- **[B] TÜİK Tablo 23 (PDF s. 43)** = YSK "1950–1977 Türkiye" tablosu = TBMM özet sayfası ("DİE yayınlarından").
  İl satırlarının toplamı 10.137.435 (%0,006). RG'de 10930–10975 (Ekim–Aralık 1961) arasında sonuç ilanı yok
  (RG'de yayım 1968'de 1036 sayılı Kanun'la zorunlu oldu).
- **İkinci kaynak:** Erkmen (yukarıda): 10.138.035; Ünlükaplan (`…/article-file/50132`) parti toplamı 10.141.243
  (%0,03). Parti oyları toplamı geçerliden 3.208 fazla — kaynağın kendi farkı.

### 1950-05-genel — sandalye çelişkisi: bağımsız `null`
- **[B] YSK "1950–1977 Türkiye" tablosu = TÜİK Tablo 23:** DP **416**, CHP 69, MP 1, bağımsız **1** (toplam 487).
- **[B] TBMM seçim sorgusu + Olgun (2010) + Güneş (1991):** DP **408**, CHP 69, MP 1, bağımsız **9** (toplam 487).
- **Düzeltme:** bu bölümün yukarısındaki dönem 1 kaydında TÜİK'in 416'sı "69+1+9+416=495 > 487, imkânsız"
  diye elenmişti; bu yanlış bir karşılaştırmaydı (TÜİK'in kendi dağılımı 416+69+1+1=487 tutarlı). İki resmî
  seri 8 sandalyede ayrışıyor. Kural gereği (fark > %0,5) tartışmalı alan yazılmadı: bağımsız `sandalye: null`,
  DP iki serinin ortak kısmı **408** (her iki seriye göre de en az 408). Meclis çiziminde 9 sandalye boş halka;
  `not` iki sayımı açıkça veriyor. H. S. Türk (c.1970, `…/article-file/638270`) üçüncü bir sayı veriyor (3 bağımsız).

### 1950/1954/1957 — `gecerli` ve eksik parti oyları: yine `null`
- Resmî kaynakların hiçbiri bu üç seçim için geçerli oy pusulası sayısı vermiyor (TÜİK ve YSK tablosunda boş;
  TBMM'de 0; RG 7505–7545, 8696–8740, 9741–9775'te ilan yok).
- Parti oyları iki resmî seride de **aday oylarının ortalaması** (çok isimli liste sistemi; TÜİK Not 1):
  TÜİK/YSK ulusal serisi ile TBMM serisi (il ortalamalarının toplamı) birbirinden farklı; akademik "ikinci
  kaynaklar" TBMM serisini kopyalıyor (bağımsız değil). Bu yüzden eksik oylar (1950 MP ve bağımsız; 1954 DP,
  CHP, CMP, bağımsız; 1957 DP, CHP, CMP, HP) eklenmedi.
- **1954 bağımsız sandalyesi:** TÜİK 2 (Bingöl 1, Muş 1); Türk ve Yılmaz (2010) 1. Muş için ikinci kaynak var
  (Anemon, MAÜ SBD 2020: Gıyasettin Emre), Bingöl için yok → `null` kaldı.

## Harita — il il sonuçlar (2026-09-27)

**Kullanıcı isteği (2026-09-27):** genel ve yerel seçimlerin Türkiye haritası üzerinde il il gösterimi. Yerel
ülke toplamlarında verilen karar ("resmî ilan yeterli") il sonuçlarına da uygulandı: kaynak yalnız YSK/TÜİK;
ek denetim olarak il toplamları sitedeki (iki kaynaklı) ülke geneli sayılarla karşılaştırıldı.

### İl sınırları — `veri/iller.js`
- Natural Earth 1:10m admin-1 states/provinces
  (`raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson`,
  `adm0_a3 = TUR`, 81 il). Lisans (naturalearthdata.com/about/terms-of-use): "All versions of Natural Earth
  raster + vector map data … are in the public domain … No permission is needed". Plaka kodu `iso_3166_2`
  alanından; 25 ilin NE adı ASCII/yazım farklıydı (ör. "Zinguldak", "Kinkkale", "K. Maras"), plakaya göre
  resmî adla değiştirildi. Eşdikdörtgen izdüşüm (cos 39°), mapshaper visvalingam (komşu sınırlar ortak).

### Genel seçimler — `veri/il-sonuclari.js` (20 seçim, 1950–2023)
- **1950–2011: [B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*** (`ysk.gov.tr/doc/dosyalar/1923-2011-MVSecimleri-Tuik.pdf`),
  Tablo 23 (PDF s. 43–110) ve Tablo 24 (s. 111–274). Tablolar `pdftotext -bbox` kelime konumlarıyla okundu ve
  ayrı bir `-layout` ayrıştırmasıyla 4.614 parti satırının tamamı çapraz denetlendi (fark yok).
- **2015-06, 2015-11, 2018-06, 2023-05: [B] YSK sonuç sistemi** (`sonuc.ysk.gov.tr`, seçim çevresi başına
  satır; çevreler il olarak toplandı). 2015-11 YSK `2015MVES-SecimCevreleriOyKullanma.xlsx` ile birebir.
  Yalnız yurt içi sandıkları; 2018/2023'te "yalnız ittifak" oyları dağıtılmadan dışarıda bırakıldı
  (il birincisi değişmiyor; yüzdeler resmî parti sonucundan ~%1 düşük — seçim `not`'unda yazıyor).
- **Denetim (il toplamı ↔ ülke geneli kayıt):** 2015–2023 birebir; 1983–2011 birkaç oy (1983 HP +10,
  1991 RP −1, 1999 her parti ≤ 9 oy); 1961–1977 TÜİK'in kendi il satırlarında basım farkları (ör. 1977 Ankara
  +10.354, Kastamonu −5.248; görüntüden denetlendi) — basıldığı gibi bırakıldı, ulusal toplamlar yakın
  (≤ %0,04). 1950–1957: il oyları TÜİK "ortalama oy"; il `gecerli` yok → yüzde gösterilmez.
- **2002 Siirt:** TÜİK sütunu iptal edilen 3 Kasım 2002 sonucunu değil 9 Mart 2003 yenilemesini veriyor
  (AK Parti 55.203 / 65.079; bkz. 2003-03-ara) → haritada Siirt "bilinmiyor", ilde açıklama.
- **Sitede tutulan:** her ilde en çok oy alan ilk 5 parti (birinci ve ilk üç sıra etkilenmez) + il geçerli oyu.
  Partiler sitedeki kimliklerle; soyağacında olmayanlar kaynaktaki adla ("KP", "YDP", "SOL PARTİ" …).
- İl adları kaynaktaki gibi: 1950–1977 "Afyon" ve "İçel" → `harita-mantik.js` eski ad eşlemesi. İlk
  görünüşler: Uşak 1954; Adıyaman, Nevşehir, Sakarya 1957; Batman ve 6 il 1991; 5 il 1995; Osmaniye 1999;
  Düzce 2002 — tabloda olmayan il haritada "o tarihte ayrı il değildi" (taralı).
- Çalışma dosyaları ve yeniden üretim betikleri: oturum dizini `il-genel/` (`parse_tuik.py`, `build_tuik.js`,
  `build_ysk.js`, `check.js`, `kontrol.txt`) ve `il-genel-yaz.js`.

## Görev 12 — 1963 ve 1968 yerel ülke geneli, 1963–1977 büyükşehirler (2026-09-27)

Çalışma dosyaları: oturum dizini `k/y6368/` (`key_extracts.txt`, `19xx_bm.txt`, `rg/`, `tuik/`). Yerel ülke
toplamları için kullanıcı kararı ("resmî ilan yeterli") uygulandı.

### 1963-11-yerel — ülke geneli belediye meclisi
- **[B] YSK** `…/docs/Mahalli/1963/KesinSecimSonuclari/1963_Belediye_Meclis_Uyeligi_Secimleri_Sonucu.pdf`
  (arşiv sayfası 80092) = **RG 17.1.1964, sayı 11609, s. 3 (YSK Karar 1169)**: kayıtlı 5.861.239, oy kullanan
  3.937.626, geçerli 2.901.695; AP 1.356.610, CHP 1.037.939, YTP 122.459, MP 79.174, CKMP 63.113, TİP 18.397,
  Bağımsız 38.704.
- **İlanın kendi farkı:** parti oyları toplamı 2.716.396 (RG de "TOPLAM 2.716.396" basıyor), geçerli oydan
  **185.299 eksik**; RG yüzdeleri 2.901.695'e göre hesaplıyor. Fark uydurulmadı: kayda `kaynakFarki: 185299`
  yazıldı (`dogrula.js` toplamı buna göre denetliyor), `not` alanında açıkça söyleniyor.
- **İzmir → AP:** [B] DİE *1963 Mahalli İdareler Seçimi* (`kutuphane.tuik.gov.tr/pdf/0015160.pdf`, s. 35/2–3),
  "İzmir Şehir" satırı: AP 48.429, CHP 29.230. İkinci kaynak: yukarıdaki Ege Üniversitesi (Osman Kibar, AP).
- **Ankara yazılmadı:** DİE kitabında ancak dört ilçe satırı toplanarak CHP önde çıkıyor (63.684 / 57.527);
  belge kazananı açıkça göstermiyor.

### 1968-06-yerel — ülke geneli belediye meclisi
- **[B] YSK** `…/Mahalli/1968/KesinSecimSonuclari/1968_Belediye_Meclis_Uyeligi_Secimleri_Sonucu.pdf` (80091)
  = **RG sayı 13013 (Eylül 1968), s. 4 (YSK Karar 2046)**: kayıtlı 6.155.701, oy kullanan 3.498.737, geçerli
  2.848.207; AP 1.412.044, CHP 991.161, GP 126.384, MP 98.619, TİP 55.610, CKMP 42.506, BP (Birlik Partisi →
  `tbp`) 33.777, YTP 21.741, Bağımsız 66.365 — toplam geçerliye **tam eşit** (RG: geçerli = parti toplamı).
  DİE kitabındaki farklı toplamlar (geçerli 3.099.446) kullanılmadı.
- **Ankara → AP:** [B] RG 9.7.1968, sayı 12945, s. 6–8: YSK, CHP itirazını reddediyor; AP'li Ekrem Barlas
  71.050 – 69.014. İkinci kaynak: yukarıdaki 1968 bölümündeki sonsoz.com.tr / Hürriyet derlemesi.
- **İzmir → AP:** [B] DİE *1968* kitabı (`kutuphane.tuik.gov.tr/pdf/0015244.pdf`, PDF s. 757), İzmir satırı:
  AP 46.942, CHP 17.697. İkinci kaynak: Ege Üniversitesi tez özeti (Osman Kibar).
- ~~**İstanbul yazılmadı:** DİE'de yalnız 14 ilçe toplanarak AP önde çıkıyor; açıkça gösteren belge yok.~~
  **Güncelleme (2026-09-27, harita çalışması):** İstanbul → AP yazıldı. Gerekçe: aynı DİE tablosunda Ankara
  için kent ilçelerinin toplamı (AP 70.913 – CHP 68.923) YSK kararındaki resmî sonuca (71.050 – 69.014)
  çok yakın çıkıyor; yani ilçe toplamı yöntemi kazananı doğru veriyor. İstanbul'da fark büyük (AP 134.730 –
  CHP 99.313; Bakırköy gibi sınırda kalan ilçeler çıkarılsa da sonuç değişmiyor) ve ikincil kaynaklarla
  (AP'li Fahri Atabey) aynı. Aynı gerekçeyle 1963 Ankara → CHP (CHP 63.684 – AP 57.527; Halil Sezai Erkut).

### 1973-12-yerel ve 1977-12-yerel — büyükşehirler: üçü de CHP
- **1973: [B] DİE *1973 Mahalli İdareler Seçimi*** (`kutuphane.tuik.gov.tr/pdf/0015468.pdf`, s. 58–59, 90–91)
  kazananları adıyla veriyor: Ahmet İsvan (CHP, İstanbul), Vedat Dalokay (CHP, Ankara), İhsan Alyanak (CHP, İzmir).
- **1977: [B] DİE *1977*** (`kutuphane.tuik.gov.tr/pdf/0015740.pdf`, s. 50, 82, 84) şehir toplamı satırları:
  Ankara CHP 195.327 (%58,1) – AP 72.372; İstanbul CHP 331.258 (%59,1) – AP 172.995; İzmir CHP %55,1 – AP %41,9
  (kitap CHP'yi 140.209 basıyor, geçerliyi aştığı için dizgi hatası; ilçe satırları 104.209).
- Resmî şehir sonucu bulunduğu için dönem 3'teki "büyükşehir yazılmadı" kararı değişti; kullanıcı kararıyla
  resmî kaynak yeterli sayıldı (dönem 3'te CHP'nin üç şehri kazandığı çok sayıda haber kaynağında da geçiyordu).

### Yerel seçimler — `veri/il-sonuclari.js` (8 seçim, 1989–2024)
- **[B] TÜİK Mahalli İdareler Seçim Sonuçları Veri Tabanı** (`biruni.tuik.gov.tr/secimdagitimapp/yerel.zul`;
  üretilen raporlar `rapory.tuik.gov.tr/…html`, erişim 2026-09-27): her yıl için "Belediyelere göre … Belediye
  Başkanlığı Seçimi sonucu" (il/ilçe/belde satırları, parti oyları) ve "… Büyükşehir Belediye Başkanlığı Seçimi
  sonucu". İndirme betiği ve ham raporlar oturum dizini `il-yerel/` (`harvest.py`, `t2/`); ayrıştırma `tp2.py`,
  `cikar.py` → `yerel-ham.json`; siteye yazma `il-yerel-yaz.js`.
- **Ölçü:** büyükşehir illerinde (1989: 8, 1994/1999: 15, 2004/2009: 16, 2014+: 30) büyükşehir belediye
  başkanlığı; diğer illerde "Merkez" ilçe satırı (il merkezi belediyesi). Denetim: ilçe/belde satırlarının toplamı
  il toplamına eşit (1989, 2004–2024 tamamında; 1994/1999'da birkaç ilde fark, merkez satırlarını etkilemiyor) →
  ilçe satırları alt toplam değil, tek tek belediyeler. Aynı ilde iki "Merkez" satırı varsa (1994 Tokat, Nevşehir;
  1999 Afyon, Erzincan) büyük olan alındı (küçükler 0–41 oyluk dipnotlu satırlar).
- **Denetim:** İstanbul, Ankara, İzmir kazananları her yılda kayıtlardaki `buyuksehir` alanıyla birebir aynı;
  2014 İstanbul/Ankara/İzmir oyları defterdeki YSK/TÜİK sayılarıyla birebir.
- **Yenilenen seçimler (TÜİK yenileme sonucunu veriyor):** 1994 Nevşehir merkez (3.7.1994), 2014 Ağrı ve Yalova
  merkez (1.6.2014) → ilde açıklama. **2019 İstanbul:** TÜİK büyükşehir raporunda yok (31 Mart iptal) → haritada
  boş, açıklamalı.
- **Etiket eşlemesi:** "DP" 2007 öncesi `dp92`, sonrası `dp07`; "DTP" 2005 öncesi `dtp97`, sonrası `dtp`; "SHP"
  2000 öncesi `shp`, 2004'te Sosyaldemokrat Halk Partisi (ad); "MÇP" `mcp`; "BĞMZ"/"BAĞIMSIZLAR" Bağımsız.
  TÜİK 1989'da "Kastomonu" yazıyor → eşleme listesine eklendi.
- **1984 ve öncesi:** DİE kitaplarında il merkezi satırları ("MERKEZ-CENTRAL") var ama OCR metni bozuk; henüz
  işlenmedi.

## Harita — yalnızca seçim günü sonuçları; 1973 yerel haritası (2026-09-27)

Kullanıcı isteği: "sadece seçimde olanları sonradan olan değişimleri ekleme".

- **Yenilenen seçimler boşaltıldı.** TÜİK veri tabanı iptal edilip yenilenen il merkezlerinde yalnızca
  yenileme sonucunu veriyor; ilk seçimin il merkezi sonucu elimizde yok. Bu yüzden 1994 Nevşehir,
  2014 Ağrı, 2014 Yalova `kazanan:null` yapıldı, il notunda neden açıklandı. 2019 İstanbul zaten boştu.
- **1973-12-yerel eklendi.** Kaynak: DİE, *1973 Mahallî Seçimler Sonuçları*, Tablo 4 (s. 46–133).
  Bu tabloda her ilin "Merkez" satırında kazanan belediye başkanının adı ve partisi yazılıdır; kazanan bu
  addan alındı. Metin katmanında satırlar kaydığı için sol/sağ sayfa görüntüleri yan yana kırpılıp
  gözle okundu; Merkez satırında sol % + sağ % ≈ 100 denetimi yapıldı. Metin katmanıyla görüntünün
  çeliştiği 4 ilde (Amasya, Gaziantep, Giresun, İçel) görüntü esas alındı.
  - Dikkat: "Bağımsızlar" sütunu tek adayın değil, bütün bağımsız adayların toplamıdır (ör. Giresun'da
    bağımsızlar toplam %39 ama kazanan CHP). Adı verilmeyen kitaplarda bu yüzden bağımsızlar toplamı
    önde olan ve hiçbir partinin kesin önde olmadığı iller "bilinmiyor" bırakılır.
  - Ağrı: 9 Aralık 1973 seçimi 2 Haziran 1974'te yenilendi; kaynak yalnızca yenilemeyi verdiği için boş.
  - İstanbul, Ankara, İzmir: kentin belediye başkanlığı (üçü de CHP; ülke geneli kaydındaki büyükşehir
    alanıyla aynı).
  - Sonuç: 67 il; CHP 32, AP 22, Bağımsız 8, MSP 3, DP 1, bilinmiyor 1 (Ağrı).

## Harita — 1977 yerel haritası (2026-09-27)

Kaynak: DİE, *11 Aralık 1977 Yerel Seçim Sonuçları*, Tablo 2 "Belediye Başkanlığı Seçimi sonuçlarının
belediyelere göre dağılımı" (s. 40–118). Sol sayfa: AP, CHP, CGP; sağ sayfa: DP, MSP, MHP, SDP, TBP, TİP,
TSİP, Bağımsızlar (oy ve %). Kitap kazananın adını vermez.

- Yöntem: her ilin "Merkez" satırı (İstanbul, Ankara, İzmir'de "belediyesi toplamı" satırı) sol ve sağ
  sayfadan yan yana kırpılıp gözle okundu; her ilde sol % + sağ % toplamının ≈100 olduğu denetlendi
  (sağ sayfa taramasında soldaki CGP sütununun kenarı görünebiliyor; toplam denetimi bunu ayırdı).
- Kazanan kuralı: bir parti, hem her partiden hem de bağımsızların **toplamından** fazla oy aldıysa
  kesin kazanandır. Bağımsızlar toplamının önde olduğu 4 il boş bırakıldı: Diyarbakır (bağımsızlar %55,3),
  Elazığ (%25,4; AP %23,7), Malatya (%60,4), Tunceli (%68,1).
- Yakın sonuçlar (oy sayısıyla da denetlendi): Eskişehir AP 35 443 – CHP 35 320; Denizli CHP 18 240 –
  AP 18 021; Bingöl MHP 1 810 – CHP 1 745; Çankırı MHP %34,9 – AP %33,1; Burdur AP %48,6 – CHP %46,6.
- Sonuç: 67 il; CHP 41, AP 15, MHP 4 (Bingöl, Çankırı, Erzincan, Yozgat), MSP 3 (Adıyaman, Konya, Muş),
  bilinmiyor 4. Büyükşehirler ülke geneli kaydındaki alanla aynı (üçü de CHP).
- Afyon başlığı metin katmanında "A . Karahisar" olarak üç parçaya bölündüğü için elle bulundu (s. 48).

## Harita — 1963 yerel haritası (2026-09-27)

Kaynak: DİE, *17 Kasım 1963 Mahallî Seçimler* (il bölümleri NN/2–NN/3: "Belediye Başkanlığı Seçimi
Sonuçları"; sol sayfa belediye adları, sağ sayfa muteber oy, AP, CHP, CKMP, MP, TİP, YTP, Bağımsızlar —
mutlak oy). Kitap kazananın adını vermez; her ilin "<İl> Şehir" satırı gözle okundu.

- **Yanlış-doğru cetveli (kitap s. 5):** 09/3, 16/3, 19/3, 30/3, 31/3, 39/3, 42/3, 46/3, 47/3, 48/3,
  62/3, 66/3 sayfalarında başlıktaki "CHP – AP" sırası yanlış, doğrusu "AP – CHP". Bu illerde ilk sütun
  AP sayıldı (Aydın, Bursa, Çorum, Hakkâri, Hatay, Kırklareli, Konya, Maraş, Mardin, Muğla, Tunceli,
  Yozgat). Başlığı kırpıntıda görünmeyen Nevşehir, Rize, Tekirdağ, Tokat, Urfa, Uşak sayfalarının
  başlığı ayrıca açılıp AP–CHP sırası doğrulandı.
- **Sayfa düzeltmeleri:** Bolu'nun 14/2–14/3 sayfaları İl Genel Meclisi tablosu; belediye başkanlığı
  14/4–14/5 (s. 364–365). Bursa s. 410–411, Erzurum 656–657, Giresun 748–749, Gümüşhane 772–773,
  İzmir 898–899, Kastamonu 974–975 metin katmanında numarası okunamadığı için başlıktan bulundu.
- **Büyük kentler:** Ankara kenti = Ankara, Altındağ, Çankaya, Yenimahalle şehir satırlarının toplamı:
  CHP 63 684, AP 57 527 → CHP (ülke geneli kaydındaki ikincil kaynaklarla aynı: Halil Sezai Erkut).
  İstanbul kenti (Adalar, Beşiktaş, Beykoz, Beyoğlu, Eminönü, Eyüp, Fatih, Kadıköy, Sarıyer, Şişli,
  Üsküdar, Zeytinburnu): AP 119 179, CHP 104 128 → seçim günü AP; YSK kararıyla CHP'li Haşim İşcan başkan
  sayıldı. Kullanıcının "yalnızca seçim günü sonuçları" kuralı gereği haritada AP, karar il notunda.
  İzmir Şehir: AP 48 429, CHP 29 230 → AP.
- **Kitaptaki toplam farkları:** Kitap (Açıklama, madde 4) parti oyları toplamı ile muteber oy arasında
  "cüz'i farklar" olduğunu, bunların sonucu etkilemediğini ve tutanakların aynen alındığını söyler.
  Farkın birinci–ikinci arasındaki farktan büyük olduğu 10 ilde kitaptaki birinci gösterildi ve il
  notuna yazıldı: Adıyaman (YTP 1 612 – CHP 1 564; fark 226), Afyon (AP 3 213 – CKMP 2 817; 2 140),
  Amasya (CHP 2 724 – AP 2 718; 15), Çankırı (AP 1 825 – CHP 1 601; 269), Erzincan (AP 3 221 –
  CHP 2 932; 1 127), Giresun (CHP 3 386 – AP 3 272; 121), Hakkâri (CHP 388 – YTP 346; 99), Hatay
  (AP 6 672 – CHP 6 582; 487), Mardin (CHP 2 518 – YTP 2 341; 1 210), Sinop (AP 804 – CHP 767; 111).
- **Bilinmiyor (2):** Kastamonu (bağımsızlar toplamı 2 731; AP 1 536, CHP 1 394) ve Kırşehir
  (bağımsızlar 2 647; MP 1 836).
- Sonuç: 67 il; AP 40, CHP 24, YTP 1 (Adıyaman), bilinmiyor 2.

## Harita — 1968 yerel haritası; 1963 Ankara ve 1968 İstanbul büyükşehir alanı (2026-09-27)

Kaynak: DİE, *Mahallî Seçimler Sonuçları, 2 Haziran 1968* — her il bölümünün 2. sayfası "Belediye Başkanı
Seçimi Sonuçları" (tek sayfa; AP, BP, CHP, CKMP, GP, MP, TİP, YTP, Bağımsızlar — mutlak oy). İl merkezi
"00 <İl>" (bazı illerde "00 Merkez") satırı gözle okundu. Kitap kazananın adını vermez.
Sayfalar metin katmanındaki başlıktan bulundu (Balıkesir s. 230, Erzincan 536, Eskişehir 596, Maraş 1036,
Sivas 1272, Trabzon 1356 başlıkta "BAŞKAN" yazımı yüzünden elle).

- **Büyük kentler:** Ankara kenti = 00 Ankara + 01 Altındağ + 02 Çankaya + 03 Yenimahalle: AP 70 913,
  CHP 68 923 → AP (ülke geneli kaydıyla aynı). İstanbul kenti = 01 Adalar … 14 Zeytinburnu (14 ilçe
  belediyesi): AP 134 730, CHP 99 313 → AP. İzmir: 00 İzmir satırı AP 46 942, CHP 17 697 → AP
  (Karşıyaka ayrı belediye).
- Bu resmî tablo, 1968-06-yerel kaydında resmî kaynak bulunamadığı için boş bırakılan İstanbul
  büyükşehir alanını doldurdu (`istanbul: ap`). Aynı biçimde 1963 kitabındaki Ankara kent toplamı
  (CHP 63 684, AP 57 527) 1963-11-yerel kaydına `ankara: chp23` olarak eklendi.
- **Bilinmiyor (11), bağımsızlar toplamı önde:** Afyon, Balıkesir, Bitlis, Bursa, Çankırı, Elazığ,
  Kırklareli, Kırşehir, Nevşehir, Niğde (bağımsızlar 2 076 – CHP 1 874), Sinop (1 138 – CHP 1 114).
- **Kitaptaki toplam farkı birinci–ikinci farkından büyük (7 il; kitaptaki birinci gösterildi, il
  notunda yazılı):** Adana (CHP 22 197 – AP 20 721; fark 1 903), Amasya (AP 3 093 – CHP 2 942; 295),
  Artvin (CHP 1 135 – AP 1 099; 92), Bolu (AP 2 714 – CHP 2 699; 251), Çanakkale (CHP 1 863 –
  AP 1 324; 1 918), Gaziantep (AP 12 666 – CHP 11 994; 2 435), Ordu (AP 2 082 – CHP 1 863; 237).
- GP kazandığı iller: Hakkâri (GP 549 – AP 517, toplam tutuyor), Mardin (GP 3 298 – AP 2 376),
  Van (GP 2 568 – AP 1 943).
- Sonuç: 67 il; AP 33, CHP 20, GP 3, bilinmiyor 11.

## Harita — 1984 yerel haritası (2026-09-27)

Kaynak: DİE, *25 Mart 1984 Mahallî İdareler Seçim Sonuçları* (TÜİK taraması `1984Mahalli-Tuik.pdf`),
Tablo 3 "Belediye başkanlığı seçimi sonuçlarının belediyelere göre dağılımı" (s. 37–88; sol sayfa ANAP ve
DYP oyu, sağ sayfa DYP %, HP, MDP, RP, SODEP, Bağımsız). Her ilin "MERKEZ-CENTRAL" satırı sol ve sağ
sayfadan kırpılıp gözle okundu; her ilde sol ANAP % + sağ sayfadaki yüzdelerin toplamının 100 olduğu
denetlendi. 57/58 ve 85/86 gibi bazı sayfa çiftlerinde sağ sayfa bir satır kayık basıldığından doğru satır
bu toplam denetimiyle seçildi.

- İstanbul ve Ankara: Tablo 2 büyükşehir toplamı (Ankara ANAP %53,2; İstanbul ANAP %49,7) — ülke geneli
  kaydıyla aynı. İzmir: il merkezi satırı ANAP %50,6 (büyükşehir toplamı da ANAP %46,0).
- ANAP dışındaki kazananlar: SODEP — Artvin (%39,0 – ANAP %36,5), Bitlis (%36,0 – %30,4), Burdur
  (%34,4 – %32,5), Kars (%33,9 – %26,4), Kırklareli (%31,1 – DYP %21,2), Muğla (%42,8 – %39,7), Ordu
  (6 615 – ANAP 6 300); MDP — Adıyaman (%26,3 – ANAP %21,2), Niğde (%26,4 – ANAP %24,4); RP — Urfa
  (11 379, %34,7 – ANAP %21,9), Van (5 265, %23,1 – bağımsızlar toplamı %18,2).
- Bağımsızlar toplamı ikinci olan ama birinciyi geçmeyen iller kesin sayıldı: Diyarbakır (ANAP 14 262 –
  bağımsızlar 13 170), Muş (ANAP 2 129 – 1 970), Çanakkale (ANAP 5 126 – 4 249), Sinop, Mardin.
- **Bilinmiyor (1):** Tunceli (bağımsızlar toplamı %39,4, SODEP %35,7).
- Sonuç: 67 il; ANAP 55, SODEP 7, MDP 2, RP 2, bilinmiyor 1.
- 1930–1955 yerel seçimleri için il il sonuç veren bir kaynak bulunamadığından bu yıllara harita eklenmedi.

## Harita — referandum haritaları (2026-09-29)

Kaynak: YSK Halkoylaması Arşivi il tabloları (`ysk.gov.tr/doc/dosyalar/docs/…`): 1961
(`1961Referandum/9-Temmuz-1961-Halk-Oylaması.pdf`), 1982 (`1982Referandum/7-Kasım-1982-Halk-Oylaması.pdf`),
1987 (`1987Referandum/6-Eylul-1987-Halkoylaması.pdf`), 1988 (`1988Referandum/25-Eylul-1988-Halk-Oylaması.pdf`),
2007 (`2007Referandum/iller/turkiye.pdf`), 2010 (`2010Referandum/KesinSonuc/ilSonuclari.pdf`).
`pdftotext -layout` ile okundu; her satırda geçerli = evet + hayır denetlendi (hepsi tuttu).

- **İl toplamları (denetim):** 1961 evet 6.348.092 / hayır 3.933.944; 1982 17.215.559 / 1.626.431 —
  Sandık kayıtlarıyla birebir. 1987 67 il: 11.605.417 / 11.497.531 (kayıt il + gümrük). 2007 ve 2010:
  81 il toplamı belgelerin TOPLAM satırıyla birebir (19.403.987 / 8.738.794; 21.667.427 / 15.781.873).
- **1988 kaydında düzeltme:** 67 il toplamı evet 8.025.131, hayır 14.911.631; gümrük 4 kapı evet 9.802,
  hayır 10.314. Kayıttaki 8.034.933 / 14.921.945 (ve kayıtlı 26.739.227, kullanılan 23.750.873, geçerli
  22.956.878) il + gümrük toplamına **birebir** eşit. Yani sayılar doğru, ama kayıt notundaki ve bu
  defterin 1988 maddesindeki "yalnızca il toplamı, gümrük dahil değil" ifadesi yanlıştı (%88,82 katılım
  her iki kapsamda da aynı yuvarlanıyor). Not "67 ilin ve 4 gümrük kapısının toplamı" olarak düzeltildi.
- Haritada yalnızca il sandıkları var (gümrük kapısı, yurt dışı, ceza infaz kurumu oyları il değil).
- Çoğunluk sayıları: 1961 evet 56 – hayır 11 il (kayıt notuyla aynı); 1982 evet 67; 1987 evet 27 –
  hayır 40; 1988 evet 1 – hayır 66; 2007 evet 74 – hayır 7; 2010 evet 62 – hayır 19.
- **2017 (2026-09-30 eklendi):** YSK Sandık Sonuçları sistemi `sonuc.ysk.gov.tr` (bağlantı aralıklı; tekrar
  deneyerek). Seçim listesi `api/getSecimList?secimSayi=30&araSecim=0&yenilemeSecimi=0` → "2017 HALKOYLAMASI"
  `secim_ID` 15575 (sitenin kodunda kimlik `id*3+102` = 46827 olarak gönderiliyor), seçim türü 7 (HALKOYLAMASI).
  İl tablosu: `api/getSecimSandikSonucList?secimId=46827&secimTuru=7&yurtIciDisi=1&sorguTuru=2` (diğer
  parametreler boş) → 81 il birleştirme tutanağı; sütun başlıkları `api/getSandikSecimSonucBaslikList`:
  `bagimsiz1_ALDIGI_OY` = EVET, `bagimsiz2_ALDIGI_OY` = HAYIR. **Denetim:** her ilde evet + hayır = geçerli
  (81/81); 81 il toplamı geçerli 47.528.949, oy kullanan 48.374.576, geçersiz 845.627 — YSK'nın yurt içi
  sonucu (`api/getSecimSonucList`, aynı sistem) ve En. Vikipedi'nin YSK'ya dayanan yurt içi sütunuyla birebir.
  İl toplamı evet 24.325.633 / hayır 23.203.316; Sandık kaydı (yurt dışı + gümrük dahil) 25.157.463 /
  23.779.141. Çoğunluk: evet 48 il, hayır 33 il (haritadan sayılır). **Vikipedi il tablosu kullanılmadı:**
  Tr./En. Vikipedi'deki il sayıları gayriresmî sayıma dayanıyor — 77 ilde resmî sonuçtan onlarca/yüzlerce oy
  farklı, satırların çoğunda evet + hayır ≠ geçerli, Yalova evet "71,59"/7.159 (resmî 71.929), Niğde'de geçerli
  = oy kullanan. Ham dosyalar: `$SP/ref17/tablo.json`, `ysk2017.json`.
- Renkler: evet mavi (#C3D5E8 → #1F4A7A), hayır turuncu (#F2CDB8 → #7F2E14); basamaklar %50–55,
  %55–65, %65–80, %80 ve üstü.

## Yerel seçimler — kazanılan belediye başkanlığı sayıları (2026-09-29)

Alan: yerel kayıtlarda `belediye: { yapilan, sonuc: [{parti|ad, sayi}], buyuksehir?: [...], not }`.
`yapilan` = kaynağın "seçimi yapılan başkanlık sayısı"; `sonuc` = kazanılan başkanlıklar (il + ilçe + belde);
`buyuksehir` = ayrı listedeki büyükşehir belediye başkanlıkları. Sayılar belgede yazdığı gibi aktarıldı, hiçbiri
hesaplanmadı. Tarama bir yardımcı ajana yaptırıldı; 1984, 1989, 1999 ve 2024 sayıları Resmî Gazete metninden
ayrıca kontrol edildi (1989 ve 1999 metin katmanından birebir; 2024'te RG ile YSK bülteni ve yüzdeler tutarlı).

- **Kural:** "yalnızca seçim günü" ilkesi gereği 1984–2024'te RG kesin sonuç ilanı esas; Wikipedia/Çınar gibi
  derlemelerdeki (yenileme ve parti değişikliklerini içerdiği anlaşılan) daha yüksek toplamlar kullanılmadı.
- **2014:** RG (6.5.2014 mükerrer) AK Parti 799, DSP 6; YSK'nın 14.5.2014 web tablosu 800 / 5 — RG esas.
- **2019:** İstanbul büyükşehir seçimi iptal edildiği için büyükşehir listesi 29 başkanlık.
- **1963–1977:** RG ilanı bulunamadı; YSK'nın 2021'de yayımladığı "Kesin Seçim Sonuçları" PDF'leri (ysk.gov.tr/doc/
  dosyalar/docs/Mahalli/<yıl>/KesinSecimSonuclari/…). Seçim günü mü yenileme sonrası mı belirtilmiyor (kayıt notunda).
  **1973:** tablo başlığı 1.620, partilerin yazan değerleri toplamı 1.615; TBP satırı boş — fark notta belirtildi.

- **1963-11-yerel** — yapılan 1028; AP 505, CHP 335, Bağımsız 113, YTP 58, CKMP 9, MP 8. Kaynak: YSK, 17 Kasım 1963 Belediye Başkanlığı Seçim Sonuçları (YSK 2021 dijitalleştirme PDF'i; 'Kesin Seçim Sonuçları') (`https://www.ysk.gov.tr/doc/dosyalar/docs/Mahalli/1963/KesinSecimSonuclari/1963_Belediye_Baskanligi_Secimleri_Sonucu.pdf`, tek sayfa).
- **1968-06-yerel** — yapılan 1238; AP 693, CHP 292, Bağımsız 202, GP 23, MP 12, YTP 9, CKMP 7. Kaynak: YSK, 2 Haziran 1968 Belediye Başkanlığı Seçim Sonuçları (YSK 2021 dijitalleştirme PDF'i) (`https://www.ysk.gov.tr/doc/dosyalar/docs/Mahalli/1968/KesinSecimSonuclari/1968_Belediye_Ba%C5%9Fkanligi_Secimleri_Sonucu.pdf`, tek sayfa).
- **1973-12-yerel** — yapılan 1620; AP 643, CHP 554, Bağımsız 246, DP 104, CGP 37, MSP 31. Kaynak: YSK, 9 Aralık 1973 Belediye Başkanlığı Seçim Sonuçları (YSK 2021 dijitalleştirme PDF'i) (`https://www.ysk.gov.tr/doc/dosyalar/docs/Mahalli/1973/KesinSecimSonuclari/1973_Belediye_Baskanl%C4%B1g%C4%B1_Secimleri_Sonucu.pdf`, tek sayfa).
- **1977-12-yerel** — yapılan 1710; AP 708, CHP 707, Bağımsız 175, MHP 55, MSP 51, CGP 9, DP 4, TBP 1. Kaynak: YSK, 11 Aralık 1977 Belediye Başkanlığı Seçim Sonuçları (YSK 2021 dijitalleştirme PDF'i) (`https://www.ysk.gov.tr/doc/dosyalar/docs/Mahalli/1977/KesinSecimSonuclari/1977_Belediye_Baskanligi_Secimleri_Sonucu.pdf`, tek sayfa).
- **1984-03-yerel** — yapılan 1701; ANAP 883, SODEP 284, DYP 238, MDP 106, HP 94, Bağımsız 80, RP 16; büyükşehir: ANAP 3. Kaynak: Resmî Gazete 26 Mayıs 1984, sayı 18412, Yüksek Seçim Kurulu Kararı No 1623 (Liste 2 ve Liste 3) (`https://www.resmigazete.gov.tr/arsiv/18412.pdf`, RG s.13 (Liste 2) ve s.14 (Liste 3); PDF s.13-14).
- **1989-03-yerel** — yapılan 1976; SHP 650, ANAP 565, DYP 552, RP 74, Bağımsız 63, DSP 38, MÇP 24, IDP 6; büyükşehir: DYP 1, RP 1, SHP 6. Kaynak: Resmî Gazete 28 Mayıs 1989, sayı 20178, Yüksek Seçim Kurulu Kararı No 735 (Liste 2 ve Liste 3, Önemli Not) (`https://www.resmigazete.gov.tr/arsiv/20178.pdf`, RG s.10-12; PDF s.10-12 (Liste 2: s.11; Liste 3: s.11-12; Önemli Not: s.12)).
- **1994-03-yerel** — yapılan 2695; DYP 882, ANAP 789, SHP 432, RP 324, MHP 118, CHP 63, Bağımsız 44, DSP 23, BBP 11, DP 6; büyükşehir: ANAP 3, CHP 1, DYP 3, RP 6, SHP 2. Kaynak: Resmî Gazete 7 Mayıs 1994, sayı 21927, Yüksek Seçim Kurulu Kararı No 1369 (Liste 2, Liste 3, Önemli Not) (`https://www.resmigazete.gov.tr/arsiv/21927.pdf`, RG s.16 (Liste 2), s.17 (Liste 3), s.18 (Önemli Not); PDF s.16-18).
- **1999-04-yerel** — yapılan 3200; ANAP 778, DYP 737, MHP 499, FP 484, CHP 366, DSP 184, Bağımsız 52, HADEP 36, BBP 25, DTP (Demokrat Türkiye Partisi) 14, BP 6, DP 4, ÖDP 2, DBP 1; büyükşehir: ANAP 2, DSP 4, FP 4, CHP 3, HADEP 1, MHP 1. Kaynak: Resmî Gazete 26 Mayıs 1999, sayı 23706, Yüksek Seçim Kurulu Kararı No 1663 (Liste 2, Liste 3, Açıklama) (`https://www.resmigazete.gov.tr/arsiv/23706.pdf`, RG s.8 (Liste 2), s.9 (Liste 3), s.10 (Açıklama); PDF s.8-10).
- **2004-03-yerel** — yapılan 3193; AK PARTİ 1750, CHP 467, DYP 388, MHP 247, ANAP 100, SHP 64, SAADET 63, Bağımsız 52, DSP 30, GENÇ PARTİ 13, BBP 10, YTP 5, ÖDP 2, BTP 1, DP 1; büyükşehir: AK PARTİ 12, CHP 2, SHP 1, DSP 1. Kaynak: Resmî Gazete 12 Mayıs 2004, sayı 25460, YSK Kararı No 2002 (11.05.2004) - Liste 2 (20040512-32.gif), Liste 3 (20040512-33.gif), Açıklama (20040512-34.gif) (`https://www.resmigazete.gov.tr/eskiler/2004/05/20040512.htm`, 20040512-32.gif (Liste 2); 20040512-33.gif ve -34.gif (Liste 3 + Açıklama)).
- **2009-03-yerel** — yapılan 2903; AK PARTİ 1442, CHP 503, MHP 483, DP 148, DTP (Demokratik Toplum Partisi) 96, SAADET 80, DSP 60, Bağımsız 45, BBP 20, ANAP 16, ÖDP 4, BTP 4, EMEP 2; büyükşehir: AK PARTİ 10, CHP 3, MHP 1, DSP 1, DTP (Demokratik Toplum Partisi) 1. Kaynak: Resmî Gazete 11 Mayıs 2009 (mükerrer), sayı 27225, YSK Kararı No 1850 - Liste 2 ve Liste 3 (PDF ekleri), Liste 5 Açıklama (.doc) (`https://www.resmigazete.gov.tr/eskiler/2009/05/20090511M1-1.htm`, Liste-2: 20090511M1-1-2.pdf; Liste-3: 20090511M1-1-3.pdf; Açıklama: 20090511M1-1-5.doc (PDF'ler YSK'nın ResmiGazete/ klasöründeki PDF'lerle aynı, md5 eşit)).
- **2014-03-yerel** — yapılan 1351; AK PARTİ 799, CHP 226, MHP 166, BDP 97, SAADET 27, DP 14, DSP 6, BBP 6, Bağımsız 5, TKP 1, ÖDP 1, MİLLET 1, HAK-PAR 1, LDP 1; büyükşehir: AK PARTİ 18, BDP 2, CHP 6, MHP 3, Bağımsız 1. Kaynak: Resmî Gazete 6 Mayıs 2014 (mükerrer), YSK kesin sonuç ilanı - Liste 2, Liste 3, Liste 5 (Açıklama). (Mükerrer sayı numarası PDF'te görünmüyor; 7 Mayıs 2014 sayısı 28993 olduğundan bu, 6 Mayıs 2014 tarihli mükerrerdir.) (`https://www.resmigazete.gov.tr/eskiler/2014/05/20140506M1-1.pdf`, PDF s.2 (Liste-2 büyükşehir), s.3 (Liste-3 belediye), s.5 (Liste-5 Açıklama)).
- **2019-03-yerel** — yapılan 1355; AK PARTİ 742, CHP 240, MHP 233, HDP 57, İYİ PARTİ 24, SAADET 21, Bağımsız 13, BBP 10, DP 8, DSP 6, TKP 1; büyükşehir: AK PARTİ 15, CHP 10, HDP 3, MHP 1. Kaynak: Resmî Gazete 22 Mayıs 2019 (mükerrer), sayı 30781, YSK Kararı No 2019/4577 (20.05.2019) - Liste-2, Liste-3 (`https://www.resmigazete.gov.tr/eskiler/2019/05/20190522M1-1.pdf`, Karar PDF s.3 (Liste-2), s.4 (Liste-3); YSK sitesindeki kopya: karar/dosya/78050/2019-4577.pdf).
- **2024-03-yerel** — yapılan 1356; AK PARTİ 526, CHP 395, MHP 218, DEM PARTİ 74, YENİDEN REFAH 62, İYİ PARTİ 30, BÜYÜK BİRLİK 20, Bağımsız 11, DP 5, DEVA PARTİSİ 4, SAADET 4, SOL PARTİ 2, DSP 2, MEMLEKET 1, HÜDA PAR 1, TİP 1; büyükşehir: AK PARTİ 12, CHP 14, DEM PARTİ 3, YENİDEN REFAH 1. Kaynak: Resmî Gazete 7 Mayıs 2024, sayı 32539, YSK Kararı No 2024/2367 (6.5.2024) - Liste-2, Liste-3 (`https://www.resmigazete.gov.tr/eskiler/2024/05/20240507-5.pdf`, PDF s.4-5 (Liste-2 büyükşehir), s.6-7 (Liste-3 belediye başkanlığı)).

## Soyağacı eklemeleri — seçim verisinde geçen partiler (2026-09-29)

**Kullanıcı isteği (2026-09-29):** Genç Parti, ikinci SHP, Barış Partisi, Millet Partisi, Yeniden Doğuş Partisi,
Demokrasi ve Barış Partisi, Değişen Türkiye Partisi, Sosyalist İktidar Partisi, SBP, IDP, TSİP, Sosyalist Devrim
Partisi, Türkiye Ulusal Kadınlar Partisi ve "seçim ekranında görünüp ağaçta olmayan" bütün partiler eklensin; bir
yere bağlanmıyorsa yalnızca ideolojik sütununa konabilir. (Türkiye Değişim Partisi zaten `tdp` olarak ağaçtaydı.)
Tarama: `veri/sandik.js`'teki bütün `{ ad: … }` satırları (adaylar, "Diğer", "Bağımsız" hariç) → 20 ad, 17 parti.
Eklenen 18 düğüm (17 + bağlantı için EDP), 10 bağ; ÖDP "1996 – 2019, devredildi" oldu. Sandık'taki 30 adlı
satır parti kimliğine bağlandı.

Kaynak kısaltmaları:
- **[B] YCB-F** — Yargıtay Cumhuriyet Başsavcılığı, "Faaliyette olan siyasi partiler (kuruluş tarihine göre)",
  16.02.2026 (`yargitaycb.gov.tr/documents/16022026FaalPartiler-kuruluştarihinegöre-1771227999.pdf`; yerel
  kopya `$SP/B/faal.pdf`): Millet Partisi 22.03.1984, Genç Parti 26.11.1992, TSİP 03.01.1993, TKP 16.08.1993,
  Sol Parti 08.06.1994, BTP 25.09.2001, HAK-PAR 11.02.2002.
- **VP** — Türkçe Vikipedi madde metni (`tr.wikipedia.org/w/index.php?title=…&action=raw`); ikinci kaynak niteliğinde.
- **AYM** — Anayasa Mahkemesi siyasi parti kararları bilgi bankası (`siyasipartikararlar.anayasa.gov.tr/SP/1995/1/1`,
  "Sosyalist Birlik Partisi").
- **Haber** — Gazete Duvar "ÖDP'nin yeni adı Sol Parti oldu" (22.12.2019), Evrensel (`evrensel.net/haber/393673`),
  BirGün (`birgun.net/haber/alper-tas-sol-parti-yi-anlatti-281419`).

| Kimlik | Parti | Yıl · durum · sütun | Dayanak |
|---|---|---|---|
| tukp | Türkiye Ulusal Kadınlar Partisi | 1972–1981 · kapatıldı · Liberal | VP (17.11.1972; 16.10.1981'de kapatıldı; "ilk yasal kadın partisi"). **Sütun:** feminist, hak temelli parti; yedi sütundan hiçbirine tam uymuyor, en yakın Liberal. Tek kaynak. |
| tsip74 | Türkiye Sosyalist İşçi Partisi | 1974–1981 · kapatıldı · Sosyalist sol | VP (16.6.1974; kurucular; "12 Mart sonrası ilk sosyalist parti"); 1993'teki yeniden kuruluş YCB-F (03.01.1993) ile tutarlı. |
| sdp75 | Sosyalist Devrim Partisi | 1975–1981 · kapatıldı · Sosyalist sol | VP (30.5.1975 Sosyalist Parti; 1977'de SDP adı; Aybar). Tek kaynak. |
| idp → mp92 | IDP → Millet Partisi | 1984–1992 → 1992– · Milliyetçi | YCB-F (Millet Partisi kuruluş 22.03.1984 = IDP'nin kuruluşu) + VP (IDP 22.3.1984, 23.11.1992'de ad değişikliği). Bağ `idp→mp92` devam. |
| sbp91 | Sosyalist Birlik Partisi | 1991–1995 · kapatıldı · Sosyalist sol | VP (15.1.1991, Sadun Aren, AYM 19.7.1995) + AYM (1995/1 kaydı). Bağ yok (kurucuların hangi partilerden geldiği "kopan bir grup" diye belirsiz). |
| ydp → genc | Yeniden Doğuş → Genç Parti | 1992–2002 → 2002– · Merkez sağ | YCB-F (Genç Parti kuruluş 26.11.1992 = YDP) + VP (YDP 23.11.1992, ANAP'tan ayrılan Güzel; 23.8.2002 ad değişikliği; 2002'de %7,25 — Sandık kaydıyla tutarlı). Bağlar `anap→ydp` bölünme, `ydp→genc` devam. VP ideoloji: liberalizm / merkez sağ; Genç Parti: merkez ve merkez sağ. |
| sip93 → tkp01 | SİP → TKP | 1993–2001 → 2001– · Sosyalist sol | YCB-F (TKP kuruluş 16.08.1993 = SİP) + VP (SİP 16.8.1993, 11.11.2001'de TKP adı). 1920 TKP'siyle bağ kurulmadı (ayrı tüzel kişilik). |
| baris96 | Barış Partisi | 1996–1999 · feshedildi · Cumhuriyetçi/sosyal demokrat | VP (10.12.1996, Veziroğlu, 9.5.1999 fesih, "merkez sol"). 1999 yerel sonucu (6 başkanlık) RG ilanıyla tutarlı. Tek kaynak. |
| dbp96 | Demokrasi ve Barış Partisi | 1996–2002 · devredildi · Radikal sol (Kürt siyasi hareketi sütunu) | VP (11.3.1996, Karakoç, 2.3.2002'de HAK-PAR ile birleşti). Bağ `dbp96→hakpar` katılma. Tek kaynak. |
| depar | Değişen Türkiye Partisi | 1998–2002 · feshedildi · Cumhuriyetçi/sosyal demokrat | VP (24.2.1998, Çapoğlu DSP'den ayrıldı, "merkez sol", 3.3.2002 fesih). Bağ `dsp→depar` bölünme. Tek kaynak. |
| shp02 | Sosyaldemokrat Halk Partisi | 2002–2010 · devredildi · Cumhuriyetçi/sosyal demokrat | VP (24.5.2002, Karayalçın, 13.3.2010'da EDP ile birleşme). Bağ `shp02→edp` katılma. |
| btp | Bağımsız Türkiye Partisi | 2001– · faal · Milliyetçi | YCB-F (25.09.2001) + VP (Haydar Baş; Türk milliyetçiliği, ekonomik milliyetçilik). |
| hakpar | Hak ve Özgürlükler Partisi | 2002– · faal · Radikal sol (Kürt siyasi hareketi sütunu) | YCB-F (11.02.2002) + VP (Abdülmelik Fırat; federalizm). |
| edp | Eşitlik ve Demokrasi Partisi | 2010–2012 · devredildi · Sosyalist sol | VP (Mart 2010; ÖDP'den ayrılan Özgürlükçü Sol Hareket + SHP + ABF; 25.11.2012'de Yeşiller ile birleşip Yeşiller ve Sol Gelecek Partisi = `yesilsol`). Seçim verisinde geçmiyor; SHP (2002) ile YSP arasındaki bağ için eklendi. Bağlar `odp→edp` bölünme, `edp→yesilsol` katılma. |
| solparti | Sol Parti | 2019– · faal · Sosyalist sol | YCB-F (Sol Parti kuruluş 08.06.1994 = BSP/ÖDP tüzel kişiliği) + Haber (22.12.2019 8. Olağanüstü Kongre'de ÖDP'nin adı Sol Parti oldu). Bağ `odp→solparti` devam; `odp` artık "1996 – 2019, devredildi". |

- "Tek kaynak" işaretli satırlarda YCB'nin kapanmış partiler sayfalarına (sipar) bu ortamdan erişilemedi
  ("Sayfaya Erişiminiz Engellenmiştir"); ikinci kaynak sonraki bir turda aranabilir.
- Sandık'ta bağlanan adlar: Genç Parti, Yeniden Doğuş Partisi, Türkiye Komünist Partisi, Sosyaldemokrat Halk Partisi
  (2002), Millet Partisi (1994/1999 yerel; 2014 belediye), Demokrasi ve Barış Partisi, Bağımsız Türkiye Partisi, Barış
  Partisi, Türkiye Ulusal Kadınlar Partisi, TSİP, Sosyalist Devrim Partisi, Sosyalist İktidar Partisi, SBP, IDP /
  Islahatçı Demokrasi Partisi, Sol Parti, Hak ve Özgürlükler Partisi, Değişen Türkiye Partisi.

### Haritada (il ipuçlarında) geçen dört parti daha (2026-09-29)

`veri/il-sonuclari.js`'te kaynaktaki kısaltmayla duran anahtarlar da tarandı: KP (1954 genel, 19 il), VP (1957 genel,
İstanbul ve İzmir), TURK PARTİ (Haziran 2015, Kastamonu), HKP (Kasım 2015, 4 il); ayrıca BTP, HAK-PAR ve 2019
Tunceli kazananı TKP kimliklere bağlandı. Eklenen düğümler:

| Kimlik | Parti | Yıl · durum · sütun | Dayanak |
|---|---|---|---|
| tkp52 | Türkiye Köylü Partisi | 1952–1958 · devredildi · Milliyetçi | TBMM-P s. 53 (CMP'nin Türkiye Köylü Partisi ile birleşip CKMP adını alması, 19.11.1958 — bu defterin `cmp` maddesi) + VP (19.5.1952, Remzi Oğuz Arık; Türk milliyetçiliği, tarımcılık). Bağ `tkp52→ckmp` katılma. 1954 il tablosundaki "KP" TÜİK'in bu parti için kullandığı kısaltma. |
| vp54 | Vatan Partisi (1954) | 1954–1957 · kapatıldı · Sosyalist sol | VP (22.10.1954, Kıvılcımlı; 30.12.1957 İstanbul Sulh Ceza 57/227 kararıyla kapatıldı). 27.10.1957 seçimine katılması tarihle tutarlı. Tek kaynak. |
| turkparti | Toplumsal Uzlaşma Reform ve Kalkınma Partisi (TURK PARTİ) | 2010–2015 · feshedildi · Liberal | Sabah seçim sayfası (kısaltma TURK PARTİ; 2010; Özgüç; program: "insan haklarına kişisel özgürlüklere ilişkin öncelik") + VP (2.3.2010 Türkiye Hareketi; 5.12.2015 olağan kongre kararıyla fesih). **Çelişki:** bir web arama özeti "AYM 23.4.2022" diyordu; belgeye bağlanamadı, VP'deki fesih tarihi yazıldı. YCB-F'de (2026) yok — faal değil, tutarlı. |
| hkp | Halkın Kurtuluş Partisi | 2005– · faal · Sosyalist sol | YCB-F (15.06.2005) + VP (Nurullah Efe; komünizm; 1920 TKP'si ve 1954 Vatan Partisi'nin mirasçısı olduğunu ileri sürer — bağ kurulmadı, iddia tüzel bağ değil). |

## Tekrarlanan seçimler: ilk seçimin sonucu + "seçim tekrarlandı" dipnotu (2026-09-29)

**Kullanıcı kararı:** "31 Mart 2019 seçiminde İstanbul'u CHP olarak göster ve dipnot olarak seçim tekrarlandı olarak
kayda geçir … bütün yeniden yapılan seçimlere aynısını uygula." Önceki kural (yenilenen il boş) değişti: ilk seçimin
kazananı kaynakla kesinse o gösterilir; kesin değilse il boş kalır, not "seçim tekrarlandı: …" diye başlar
(harita tablosunda da "(seçim tekrarlandı)" yazar). Oy sayıları kaynaklar arasında tutmadığı için yazılmadı.

- **2019 İstanbul → CHP.** Tr. Vikipedi "2019 İstanbul ara yerel seçimi": YSK Başkanı'nın açıklamasına göre İmamoğlu
  4.159.650 oyla önde; 17 Nisan 2019'da mazbatasını aldı; YSK 6 Mayıs 2019'da 7'ye karşı 4 oyla iptal etti. VOA Türkçe
  ("İstanbul Seçimlerinde Kim Kazandı Kim Kaybetti?"): "Bir önceki seçimi yaklaşık 14 bin farkla önde bitiren İmamoğlu".
  Oy sayısı yazılmadı (bir arama özeti 4.169.765 – 4.156.036 veriyordu; tutmuyor). Harita il notu + Sandık
  `2019-03-yerel.buyuksehir.istanbul = { parti: "chp92", dipnot: "seçim tekrarlandı" }`; kart ve pencere dipnotu
  gösteriyor. Belediye sayıları (RG ilanı: 29 büyükşehir) değiştirilmedi — resmî ilan İstanbul'u saymıyor, not bunu söylüyor.
- **1994 Nevşehir → RP.** Anadolu Ajansı, "Siyasi tarihin en ilginç seçim iptali" (`aa.com.tr/tr/politika/…/1450658`):
  ilk seçimi RP adayı Yalçın Demir (~%32, ~9 bin oy) kazandı; DYP ambleminin ters basılması gerekçesiyle YSK 4'e
  karşı 3 oyla iptal etti; 3 Temmuz'da tekrarlanan seçimi yine Demir kazandı (~%45). Tek kaynak (yenileme sonucu
  TÜİK ile tutarlı).
- **2014 Yalova → boş.** Tr. Vikipedi: 30 Mart CHP (Salman) 27.229 – AK Parti (Koçal) 27.223 (CHP +6). En. Vikipedi:
  "subsequent recounts requested by the AKP put Koçal ahead by a single vote", kazanan belirlenemedi → çelişki.
  Yenileme 1.6.2014: CHP 29.227 – AK Parti 28.999.
- **2014 Ağrı → boş.** Tr. Vikipedi: 30 Mart AK Parti (Arslan) 20.616 – BDP (Sakık) 20.610 (AK Parti +6). Hürriyet
  "İşte Ağrı'da seçimi iptal ettiren yırtık torba": Sakık'ın "10 oy farkla kazandığı açıklanan" seçim; ilçe seçim
  kurulu 6 Nisan 2014'te iptal etti → çelişki. Yenileme 1.6.2014: BDP 23.460 – AK Parti 20.609.
- **1973 Ağrı → boş.** Tr. Vikipedi "Ağrı'da 1973 Türkiye yerel seçimleri" (arama özeti): ilk sayımda DP (Cevdet Elçi)
  CHP'yi 25 oyla geçti; il seçim kurulu 33 oyu iptal edince CHP kazanmış sayıldı; YSK DP itirazını haklı bulup seçimi
  yeniledi (2.6.1974, CHP kazandı). Seçim günü sonucu tek bir kazanana bağlanamıyor.

## Hükümet adları ve öne çıkan hükümetler {#hukumet-adlari} (2026-09-29)

**Kullanıcı isteği:** "hükümetlerin eğer halk arasında yaygın olarak bilinen bir adı varsa onu yanında belirt veya
hükümet diğerlerine göre çok büyük bir öneme sahipse o hükümeti diğerlerine göre biraz daha büyük göster ve adını
yanında belirt, mesela 1974 CHP–MSP veya Milliyetçi Cephe gibi."

**Kural:** `lakap` yalnızca en az iki bağımsız kaynakta o hükümetin adı olarak geçiyorsa yazılır. `onemli: true`
(şeritte daha büyük gösterim) yalnızca adı olan ve kullanıcının örneklerindeki gibi dönemine damga vuran
hükümetlere verildi: CHP–MSP (Kıbrıs Harekâtı), iki Milliyetçi Cephe, REFAHYOL (28 Şubat süreci), ANASOL-M
(verideki en uzun süreli koalisyon: 28.5.1999–18.11.2002). Adı olmayan bir hükümet "önemli" diye büyütülmedi
(doğrulayıcı bunu hata sayar); böyle bir öneri kullanıcı kararıdır.

| No | Ad | Büyük | Kaynaklar |
|---|---|---|---|
| 37 | CHP–MSP koalisyonu | evet | Tr. Vikipedi "37. Türkiye Hükûmeti" ("CHP ve MSP koalisyon hükûmetidir"); Gazete Vatan, "Türkiye'nin koalisyon hükümetleri" (7.7.2015): "CHP–MSP Koalisyonu" |
| 39 | I. Milliyetçi Cephe | evet | Tr. Vikipedi "39. Türkiye Hükûmeti" ("I. Milliyetçi Cephe Hükûmeti"); Gazete Vatan (7.7.2015): "1. MC"; YÖK Açık Bilim, tez "Birinci ve İkinci Milliyetçi Cephe Hükümetleri" |
| 41 | II. Milliyetçi Cephe | evet | Tr. Vikipedi "41. Türkiye Hükûmeti" ("II. Milliyetçi Cephe Hükûmeti"); YÖK Açık Bilim, tez "İkinci Milliyetçi Cephe Hükümeti (21.07.1977 - 05.01.1978)"; Yeni Akit, "31 Aralık 1977: 2. Milliyetçi Cephe Hükümetinin Bir Gensoru ile Düşürülmesi" |
| 53 | ANAYOL | hayır | Tr. Vikipedi "53. Türkiye Hükûmeti" ("ANAYOL Hükûmeti"); Milliyet, "Anayol bozulmadan Refahyol arayışı!" |
| 54 | REFAHYOL | evet | Tr. Vikipedi "54. Türkiye Hükûmeti" ("REFAHYOL Hükûmeti"); Gazete Vatan (7.7.2015): "REFAHYOL"; Milliyet (aynı haber) |
| 55 | ANASOL-D | hayır | Tr. Vikipedi "55. Türkiye Hükûmeti" ("ANASOL-D Hükûmeti"); Gazete Vatan (7.7.2015): "ANASOL–D" |
| 57 | ANASOL-M | evet | Tr. Vikipedi "57. Türkiye Hükûmeti" ("ANASOL-M Hükûmeti"); Vehbi Dinçerler (eski bakan) sitesi, "ANASOL-M Hükümeti (DSP-ANAP-MHP 28.06.1999-18.11.2002)" |
| 63 | Seçim hükümeti | hayır | Tr. Vikipedi "63. Türkiye Hükûmeti" ("Seçim Hükûmeti"); VOA Türkçe, "İlk 'Seçim Hükümeti' İlklerle Kuruldu" (2015) |

**Kullanıcı kararı (2026-09-30):** "26. hükümet ilk koalisyon olarak yazılsın, ANAYOL, ANASOL-D de eklensin" →
26. hükümete `lakap: "İlk koalisyon"` (bir lakap değil, kullanıcının istediği tanım) ve 26, 53, 55 büyük şeride
alındı (`onemli: true`). 26 için kaynaklar: Tr. Vikipedi "26. Türkiye Hükûmeti" ("Cumhuriyet tarihinin ilk
koalisyon hükûmetidir"); Gazete Vatan, "Türkiye'nin koalisyon hükümetleri" (7.7.2015) listesinin ilk kaydı
(VIII. İnönü, CHP–AP koalisyonu, 20.11.1961).

**Bilerek eklenmeyenler:**
- 42. hükümet "Motel Hükûmeti": yalnızca Tr. Vikipedi'de bulundu (SeçimTürk ve Düşünce Mektebi sayfaları adı
  kullanmıyor; soL haber sayfası erişilemedi). "Güneş Motel olayı" yaygın bilinse de hükümetin adı olarak ikinci
  kaynak yok.
- 33. hükümet "Beyin Takımı": Tr. Vikipedi maddesinde geçmiyor; kaynak bulunamadı.
- "I. Menderes", "V. Ecevit" gibi başbakan sıralı adlar: halk arasındaki ad değil, her hükümette var; eklenmedi.

**Harita (aynı gün):** yerel seçim haritası lejantında il kazanan partilerin yanında Türkiye geneli belediye
meclisi oy oranı ve kalanların toplamı "Diğer" gösterilir (genel seçimdeki gibi; oranlar Sandık kaydındaki
ülke geneli sonuçtan). 1963 resmî ilanında parti oyları toplamı geçerli oydan 185.299 eksik olduğundan "Diğer"
yalnızca ilanda sayılan partileri toplar.


## Genel başkanlar {#genel-baskanlar} (2026-09-30)

**Kullanıcı isteği:** parti pencerelerine genel başkanlar (görev yıllarıyla). Veri: `veri/genel-baskanlar.js`
(91 parti). Pencerede "Genel başkanlar" bölümü; ağaçtaki arama kutusu genel başkan adıyla da parti bulur.

**Yöntem ve kurallar**
- Ana kaynak: Türkçe Vikipedi'deki parti maddeleri (`action=raw`), çoğunda "Genel başkanlar" tablosu; tablo
  yoksa bilgi kutusu ve metindeki açık ifadeler ("… genel başkanlığa seçildi"). CHP ve AK Parti için ayrı
  "genel başkanları listesi" maddeleri. Ham dosyalar: `$SP/gb/raw/`, taslak `$SP/gb/taslak.py`.
- İkinci kaynak: İngilizce Vikipedi'deki karşılık maddeler (`$SP/gb/en/`), 51 partide adlar karşılaştırıldı
  (`$SP/gb/karsilastir.py`); hiçbir parti için **çelişki** çıkmadı — "geçmiyor" sonuçları İngilizce maddenin o
  kişiyi anmadığını gösterir, farklı bir ad vermediğini değil. Diğer partiler tek kaynaklıdır (tablo).
- Yalnızca yıl yazılır (gün/ay yok). Kaynakta yılı olmayan başkanda yıl `null` ("?" gösterilir), tahmin yok.
- Vekâleten (geçici) görev yapanlar listelenmez (CHP 1938 Bayar, 1972 Kırıkoğlu, 1980–81 Üstündağ; DYP 1993
  Gölhan; ANAP 2002–03 Pakdemirli, 2004–05 Özsoy; MHP 1997 Çolak, T. Türkeş; BBP 2011, 2015 Öznur; DSP 2009
  Başaran; CKMP 1962–64 Dinçer; Memleket 2025 Güven; HÜDA PAR 2018 Yavuz; Zafer 2025 Şehirlioğlu; ÖDP 2007–08
  Ulusaler); araya giren vekâlet ayrı satır açmıyorsa not'ta anılır (BBP, Zafer, ÖDP, SP).
- Aynı maddeyi paylaşan partiler dönemle ayrıldı: CHP 1923–1981 / 1992–; MHP 1969–1981 / 1993– (1983–1993
  MÇP ayrı); İP 1992–2015 / Vatan 2015–; ÖDP 1996–2019 / Sol Parti 2019–; TİP 1961–1971 / 1975–; Güven
  Partisi 1967–1973 / CGP 1973–; IDP 1984–1992 / Millet Partisi 1992–; HDP / DEM.
- **CHP 2026:** Tr. Vikipedi listesi: Özgür Özel 8.11.2023–21.5.2026; 21 Mayıs 2026'da Ankara Bölge Adliye
  Mahkemesi 36. Hukuk Dairesi 38. Olağan Kurultay'ın kesin hükümsüzlüğüne ve karar kesinleşene kadar genel
  başkanlığı Kemal Kılıçdaroğlu'nun tedbiren üstlenmesine karar verdi → Kılıçdaroğlu "2026 – görevde", not'la.
- Kararsız ya da iç çelişkili yerler: MP (1948) tablosunda Bayur'un bitişi (1.6.1952) ile Kentli'nin başlangıcı
  (1.5.1952) çakışıyor; metin Kentli'yi 1951 kongresine bağlıyor → yıllar tablodaki gibi, tek kaynak. TSİP'te
  Turgut Koçak'ın seçildiği cümle maddede "kaynak belirt" işaretli. HADEP maddesindeki listede Hatip Dicle de
  var, ama yılı yok ve HADEP genel başkanlığı İngilizce maddede de geçmiyor → doğrulanamadığı için alınmadı. TKP (2001): 2014–2017 bölünme ve "kolektif önderlik" dönemi; 2017 sonrası kolektif önderlik satırı
  yerine Kemal Okuyan (Yargıtay kaydında 2023'ten beri genel başkan) yazıldı.
- **Listesi olmayanlar:** TKP (1920) ve THİF (genel sekreterlikle yönetildi, dönem dönem liste yok), Yeşil Sol
  Parti (2012–2023 eş sözcülük; liste yok). DEP'in Tr. maddesinde başkan yok; genel denetimde (30 Eylül) En.
  Vikipedi "Democracy Party (Turkey)" bilgi kutusundan eklendi: Yaşar Kaya Haziran–Aralık 1993, Hatip Dicle Aralık
  1993 – Haziran 1994 (tek kaynak).

| Parti | Kısa | Ana kaynak | İkinci kaynak |
|---|---|---|---|
| `chp23` | CHP | Tr. Vikipedi "Cumhuriyet Halk Partisi genel başkanları listesi" | En. Vikipedi: 3/3 ad geçiyor |
| `tcf` | TCF | Tr. Vikipedi "Terakkiperver Cumhuriyet Fırkası" | — |
| `scf` | SCF | Tr. Vikipedi "Serbest Cumhuriyet Fırkası" | — |
| `dp46` | DP | Tr. Vikipedi "Demokrat Parti (1946)" | En. Vikipedi: 2/2 ad geçiyor |
| `mp48` | MP | Tr. Vikipedi "Millet Partisi (1948)" | En. Vikipedi: 4/4 ad geçiyor |
| `tkp52` | TKP | Tr. Vikipedi "Türkiye Köylü Partisi" | — |
| `cmp` | CMP | Tr. Vikipedi "Cumhuriyetçi Millet Partisi" | — |
| `hurriyet` | HP | Tr. Vikipedi "Hürriyet Partisi" | — |
| `ckmp` | CKMP | Tr. Vikipedi "Cumhuriyetçi Köylü Millet Partisi" | En. Vikipedi: 3/3 ad geçiyor |
| `ap` | AP | Tr. Vikipedi "Adalet Partisi (1961-1981)" | En. Vikipedi: 2/2 ad geçiyor |
| `ytp` | YTP | Tr. Vikipedi "Yeni Türkiye Partisi (1961)" | — |
| `demp70` | DP | Tr. Vikipedi "Demokratik Parti (Türkiye)" | En. Vikipedi: 2/2 ad geçiyor |
| `mhp69` | MHP | Tr. Vikipedi "Milliyetçi Hareket Partisi" | En. Vikipedi: 1/1 ad geçiyor |
| `mp62` | MP | Tr. Vikipedi "Millet Partisi (1962)" | — |
| `tbp` | TBP | Tr. Vikipedi "Türkiye Birlik Partisi" | — |
| `mnp` | MNP | Tr. Vikipedi "Millî Nizam Partisi" | — |
| `gp` | GP | Tr. Vikipedi "Cumhuriyetçi Güven Partisi" | En. Vikipedi: 1/1 ad geçiyor |
| `tip61` | TİP | Tr. Vikipedi "Türkiye İşçi Partisi (1961)" | En. Vikipedi: 2/5 ad geçiyor |
| `cp72` | CP | Tr. Vikipedi "Cumhuriyetçi Parti (Türkiye)" | — |
| `cgp` | CGP | Tr. Vikipedi "Cumhuriyetçi Güven Partisi" | En. Vikipedi: 1/1 ad geçiyor |
| `msp` | MSP | Tr. Vikipedi "Millî Selamet Partisi" | En. Vikipedi: 2/2 ad geçiyor |
| `tip75` | TİP | Tr. Vikipedi "Türkiye İşçi Partisi (1961)" | En. Vikipedi: 1/1 ad geçiyor |
| `hp83` | HP | Tr. Vikipedi "Halkçı Parti" | En. Vikipedi: 2/2 ad geçiyor |
| `sodep` | SODEP | Tr. Vikipedi "Sosyal Demokrasi Partisi" | En. Vikipedi: 1/1 ad geçiyor |
| `shp` | SHP | Tr. Vikipedi "Sosyaldemokrat Halkçı Parti" | En. Vikipedi: 3/3 ad geçiyor |
| `dsp` | DSP | Tr. Vikipedi "Demokratik Sol Parti" | En. Vikipedi: 7/7 ad geçiyor |
| `anap` | ANAP | Tr. Vikipedi "Anavatan Partisi" | En. Vikipedi: 7/7 ad geçiyor |
| `dyp` | DYP | Tr. Vikipedi "Doğru Yol Partisi" | En. Vikipedi: 6/6 ad geçiyor |
| `rp` | RP | Tr. Vikipedi "Refah Partisi" | En. Vikipedi: 3/3 ad geçiyor |
| `mcp` | MÇP | Tr. Vikipedi "Milliyetçi Çalışma Partisi" | En. Vikipedi: 2/5 ad geçiyor |
| `mdp` | MDP | Tr. Vikipedi "Milliyetçi Demokrasi Partisi" | En. Vikipedi: 2/2 ad geçiyor |
| `hep` | HEP | Tr. Vikipedi "Halkın Emek Partisi" | — |
| `tbkp` | TBKP | Tr. Vikipedi "Türkiye Birleşik Komünist Partisi" | — |
| `chp92` | CHP | Tr. Vikipedi "Cumhuriyet Halk Partisi genel başkanları listesi" | En. Vikipedi: 8/8 ad geçiyor |
| `dp92` | DP | Tr. Vikipedi "Demokrat Parti (1992)" | — |
| `dtp97` | DTP | Tr. Vikipedi "Demokrat Türkiye Partisi" | En. Vikipedi: 1/4 ad geçiyor |
| `ldp` | LDP | Tr. Vikipedi "Liberal Demokrat Parti (Türkiye)" | En. Vikipedi: 7/7 ad geçiyor |
| `ydh` | YDH | Tr. Vikipedi "Yeni Demokrasi Hareketi" | — |
| `mhp93` | MHP | Tr. Vikipedi "Milliyetçi Hareket Partisi" | En. Vikipedi: 2/2 ad geçiyor |
| `bbp` | BBP | Tr. Vikipedi "Büyük Birlik Partisi" | En. Vikipedi: 3/3 ad geçiyor |
| `fp` | FP | Tr. Vikipedi "Fazilet Partisi" | En. Vikipedi: 2/2 ad geçiyor |
| `dep` | DEP | En. Vikipedi "Democracy Party (Turkey)" (Tr. maddede yok) | — |
| `hadep` | HADEP | Tr. Vikipedi "Halkın Demokrasi Partisi" | — |
| `dehap` | DEHAP | Tr. Vikipedi "Demokratik Halk Partisi (Türkiye)" | — |
| `odp` | ÖDP | Tr. Vikipedi "Sol Parti (Türkiye)" | En. Vikipedi: 7/7 ad geçiyor |
| `emep` | EMEP | Tr. Vikipedi "Emek Partisi" | En. Vikipedi: 5/5 ad geçiyor |
| `ip92` | İP | Tr. Vikipedi "Vatan Partisi (2015)" | En. Vikipedi: 1/1 ad geçiyor |
| `akp` | AK Parti | Tr. Vikipedi "Adalet ve Kalkınma Partisi genel başkanları listesi" | En. Vikipedi: 4/4 ad geçiyor |
| `sp` | SP | Tr. Vikipedi "Saadet Partisi" | En. Vikipedi: 8/8 ad geçiyor |
| `has` | HAS Parti | Tr. Vikipedi "Halkın Sesi Partisi" | — |
| `ytp02` | YTP | Tr. Vikipedi "Yeni Türkiye Partisi (2002)" | — |
| `anadolu` | Anadolu P. | Tr. Vikipedi "Anadolu Partisi" | — |
| `dp07` | DP | Tr. Vikipedi "Demokrat Parti (2007)" | En. Vikipedi: 4/5 ad geçiyor |
| `dtp` | DTP | Tr. Vikipedi "Demokratik Toplum Partisi" | En. Vikipedi: 5/5 ad geçiyor |
| `bdp` | BDP | Tr. Vikipedi "Barış ve Demokrasi Partisi" | En. Vikipedi: 3/6 ad geçiyor |
| `hdp` | HDP | Tr. Vikipedi "Halkların Demokratik Partisi" | En. Vikipedi: 14/14 ad geçiyor |
| `hudapar` | HÜDA PAR | Tr. Vikipedi "Hür Dava Partisi" | En. Vikipedi: 2/4 ad geçiyor |
| `vatan` | Vatan P. | Tr. Vikipedi "Vatan Partisi (2015)" | En. Vikipedi: 1/1 ad geçiyor |
| `memleket` | Memleket P. | Tr. Vikipedi "Memleket Partisi" | En. Vikipedi: 1/1 ad geçiyor |
| `tdp` | TDP | Tr. Vikipedi "Türkiye Değişim Partisi" | — |
| `yeniparti` | Yeni Parti | Tr. Vikipedi "Yeni Parti (2026)" | — |
| `yrp` | YRP | Tr. Vikipedi "Yeniden Refah Partisi" | En. Vikipedi: 1/1 ad geçiyor |
| `gelecek` | Gelecek P. | Tr. Vikipedi "Gelecek Partisi" | En. Vikipedi: 1/1 ad geçiyor |
| `deva` | DEVA | Tr. Vikipedi "Demokrasi ve Atılım Partisi" | En. Vikipedi: 1/1 ad geçiyor |
| `yeniyol` | Yeni Yol | Tr. Vikipedi "Yeni Yol" | — |
| `iyi` | İYİ Parti | Tr. Vikipedi "İYİ Parti" | En. Vikipedi: 2/2 ad geçiyor |
| `zafer` | Zafer P. | Tr. Vikipedi "Zafer Partisi" | En. Vikipedi: 1/1 ad geçiyor |
| `anahtar` | A Parti | Tr. Vikipedi "Anahtar Parti" | — |
| `dem` | DEM Parti | Tr. Vikipedi "Halkların Eşitlik ve Demokrasi Partisi" | — |
| `tip17` | TİP | Tr. Vikipedi "Türkiye İşçi Partisi (2017)" | — |
| `tukp` | TUKP | Tr. Vikipedi "Türkiye Ulusal Kadınlar Partisi" | — |
| `tsip74` | TSİP | Tr. Vikipedi "Türkiye Sosyalist İşçi Partisi" | — |
| `sdp75` | SDP | Tr. Vikipedi "Sosyalist Devrim Partisi" | — |
| `idp` | IDP | Tr. Vikipedi "Islahatçı Demokrasi Partisi" | — |
| `mp92` | MP | Tr. Vikipedi "Millet Partisi (1992)" | — |
| `sbp91` | SBP | Tr. Vikipedi "Sosyalist Birlik Partisi (Türkiye)" | — |
| `ydp` | YDP | Tr. Vikipedi "Yeniden Doğuş Partisi (Türkiye)" | — |
| `sip93` | SİP | Tr. Vikipedi "Sosyalist İktidar Partisi" | — |
| `baris96` | BP | Tr. Vikipedi "Barış Partisi" | — |
| `dbp96` | DBP | Tr. Vikipedi "Demokrasi ve Barış Partisi" | — |
| `depar` | DEPAR | Tr. Vikipedi "Değişen Türkiye Partisi" | — |
| `genc` | Genç Parti | Tr. Vikipedi "Genç Parti" | En. Vikipedi: 3/3 ad geçiyor |
| `shp02` | SHP | Tr. Vikipedi "Sosyaldemokrat Halk Partisi" | En. Vikipedi: 2/3 ad geçiyor |
| `btp` | BTP | Tr. Vikipedi "Bağımsız Türkiye Partisi" | En. Vikipedi: 5/6 ad geçiyor |
| `tkp01` | TKP | Tr. Vikipedi "Türkiye Komünist Partisi (2001)" | En. Vikipedi: 3/3 ad geçiyor |
| `hakpar` | HAK-PAR | Tr. Vikipedi "Hak ve Özgürlükler Partisi" | En. Vikipedi: 8/8 ad geçiyor |
| `edp` | EDP | Tr. Vikipedi "Eşitlik ve Demokrasi Partisi" | — |
| `solparti` | SOL Parti | Tr. Vikipedi "Sol Parti (Türkiye)" | En. Vikipedi: 0/0 ad geçiyor |
| `vp54` | VP | Tr. Vikipedi "Vatan Partisi (1954)" | — |
| `turkparti` | TURK PARTİ | Tr. Vikipedi "Toplumsal Uzlaşma Reform ve Kalkınma Partisi" | — |
| `hkp` | HKP | Tr. Vikipedi "Halkın Kurtuluş Partisi" | — |

## Genel denetim (2026-09-30) — yapıldı ve kapatıldı

Kullanıcı kararı: "her şeyi bitirdikten sonra" genel denetim, ardından kalemin kapatılması. Çalışma dosyaları
`$SP/denetim/`, `$SP/gb/`.

1. **Doğrulayıcı ve testler:** `node araclar/dogrula.js` hata yok (uyarılar: 23→24 ve 43→44 hükümet boşlukları —
   27 Mayıs ve 12 Eylül darbeleri, beklenen); `node --test araclar/test/*.test.js` 89/89.
2. **Parti kuruluş/kapanış yılları ↔ Tr. Vikipedi bilgi kutuları (91 parti):** 6 fark. Dördü beklenen (Güven
   Partisi/CGP ve TİP 1961/1975 aynı maddeyi paylaşıyor; MÇP 1983'te Muhafazakâr Parti adıyla kuruldu, 1985'te
   ad değiştirdi). İki çelişki: DEP (Tr. 1991, "ek kaynak gerekli" işaretli; En. Vikipedi 7.5.1993) ve TKP 1920
   kapanışı (Tr. 8.10.1987 Brüksel duyurusu; En. Vikipedi 1988, gizli kongrede birleşme). İkisinde de ikinci kaynak
   bizim yılımızı (1993, 1988) destekliyor → değişiklik yok.
3. **Hükümet tarihleri (65) ↔ Tr. Vikipedi "Türkiye hükûmetleri listesi":** 14 hükümette gün farkı. Bizim tarihler
   TBMM Başkanlığı'nın *Hükümetler, Programları ve Genel Kurul Görüşmeleri* ciltlerinden ve "bitiş = sonraki
   hükümetin başlangıcı" kuralıyla; Vikipedi bazı yerlerde istifa/cumhurbaşkanı seçilme gününü bitiş alıyor
   (46, 49, 25, 63) → değişiklik yok.
4. **Genel seçim sandalye ve oy oranları (27 seçim) ↔ Tr. Vikipedi seçim maddeleri:** 1946–2023 arasında sandalye
   ve ilk dört oy oranı birebir (1969'daki fark bağımsızların Vikipedi kutusunda olmamasından). 1950'de DP 408 /
   416 farkı kayıt notunda zaten açıklanıyor (TBMM 408, YSK/TÜİK 416). 1923–1943 toplam milletvekili sayılarında
   Vikipedi farklı; bizim sayılar TÜİK Tablo 5, TESAV ve Lüleci (2023) ile üç kaynaklı → değişiklik yok.
5. **İl sonuçları ↔ ülke geneli:** il geçerli oy toplamı ülke toplamının %99,7–100'ü (2015 sonrası ~%97: yurt dışı
   oyları); referandumlarda %96,7–100 (gümrük, cezaevi, yurt dışı). İllerde ilk 5 parti tam tablolardan seçildiği
   için (`il-genel-yaz.js`) il birincileri güvenilir.
6. **Bağlantılar:** tarayıcıda 4 sayfa + 94 parti penceresi + bütün seçim ve harita pencereleri açıldı; 170 iç
   bağlantının hepsi var olan bir parti/seçim/haritaya gidiyor; konsol hatası yok.
7. **Soy bağları:** 13 bağ, öncülün kapanışından yıllar sonra kurulan partiye "fikrî soy" olarak gidiyor (CHP →
   HP/SODEP/DSP, AP → ANAP, TİP → YDH/ÖDP/EMEP/TİP 2017, DP 1946 → DP 1992, TKP → TBKP); tasarım gereği, değişiklik yok.
8. **Düzeltmeler:** (a) Parti penceresindeki "Kurucu" başlığı "Kurucu ve öncü isimler" oldu — MSP (kurucu Süleyman
   Arif Emre; yazan Erbakan), RP (Ali Türkmen/Ahmet Tekdal; Erbakan), FP (İsmail Alptekin; Kutan), DYP (Ahmet Nusret
   Tuna; Demirel/Çiller), MÇP (Mehmet Pamak/Ali Koç; Türkeş), BDP (Mustafa Ayzit; Demirtaş), DP 2007 ve DEP'te yazan
   isimler kurucu değil öne çıkan liderlerdi; kesin sıra artık "Genel başkanlar" listesinde. (b) DEP genel
   başkanları eklendi (yukarıda).

## Sonraki adımlar turu — kaynak araştırmaları (2026-10-12)

### Tek parti dönemi bağımsız (müstakil) milletvekilleri — 1931, 1935, 1939, 1943 düzeltildi

Önceki kayıtlarda bu dört seçimde bütün sandalyeler CHP'ye yazılmıştı (TÜİK Tablo 1 yalnızca "1 CHP"
gösterdiği ve Tablo 5 yalnızca toplamı verdiği için). TBMM'nin resmî "Türk Parlamento Tarihi" ciltleri
CHP'nin bazı illerde aday göstermeyip yerleri bağımsızlara bıraktığını ve bağımsızların seçildiğini
gösteriyor; kayıtlar buna göre düzeltildi. Toplamlar (`meclis`) değişmedi.

- **[B] TBMM, *Türk Parlamento Tarihi, TBMM IV. Dönem 1931–1935*, C. I** (Fahri Çoker, TBMM 1996;
  TBMM Açık Erişim `acikerisim.tbmm.gov.tr`, öğe 44c28248-508e-4eca-821a-e753570ec704, dosya 199701402-c1.pdf),
  s. 42: "C.H.F.'nin gösterdiği (287) aday, listede olduğu gibi seçilmiş, bağımsız olarak adaylığını
  koyacakların seçilmesi için boş bırakılan seçim çevrelerinden seçilen aşağıda seçim bölgeleri ve adları
  yazılı (20) milletvekili ile mevcut (307) olmuştur. … (10) milletvekilliği boş kalmıştır" (20 ad tek tek
  sayılıyor); s. 43: bu 10 yere CHP adaylarıyla ara seçim yapıldı.
- **[B] aynı dizi, *TBMM V. Dönem 1935–1939*, C. I** (İhsan Güneş, TBMM 2001; öğe 914d0658-…, 200604661-c1.pdf),
  s. 18: Atatürk'ün 3 Şubat 1935 bildirisi ("Fırka namzed listesinde 16 boş yer bırakmaya karar vermiştir");
  s. 39: "Berç Keresteciyan TÜRKER (Afyon), Nikola TAPTAS (Ankara), Tayfur SÖKMEN (Antalya), Mustafa Galib
  ÖNSAY (Çankırı), Şefik TURSAN (Denizli) İstamat Zihni ÖZDAMAR (Eskişehir), Refet BELE (İstanbul), Halil
  MENTEŞE (İzmir), Nuri TAMAÇ (Kastamonu), Ali Fuat CEBESOY (Konya), Hüsnü KİTAPÇI (Muğla), Abravaya
  MARMARALI (Niğde), Şükrü BLEDA (Sivas) bağımsız milletvekili olarak seçilmişlerdir" (13 kişi).
- **[B] aynı dizi, *TBMM VI. Dönem 1939–1943*, C. I** (İsmet Binark, TBMM 2004; öğe def233fe-…, 200405358-c1.pdf),
  s. 60: "Bu defa intihab olunan 424 mebustan … 420 C.H.P. … 4 Müstakil"; s. 212–213: Hatay'ın katılmasından
  sonra 5 Hatay milletvekili seçildi (mazbata tasdiki 20.XI.1939); dönem sonu toplamı 429.
- **[B] aynı dizi, *TBMM VII. Dönem 1943–1946*, C. I** (öğe 6336c461-…, 198907637-c1.pdf), "Müstakiller":
  "Büyük Millet Meclisinde 4 müstakil Mebus Vardır: Türker (Berç) Afyon Karahisar, Kayaoğlu (Mihal) Ankara,
  Özdamar (İstamat) Eskişehir, Bodrumlu (Avram Galanti) Niğde".
- **İkinci kaynak 1:** Kenan OLGUN, "Türkiye'de Cumhuriyetin İlanından 1950'ye Genel Seçim Uygulamaları",
  *ATAM Dergisi* (`dergipark.org.tr/tr/download/article-file/676405`), s. 15–19: 1931 "CHP'nin ilan ettiği
  287 aday seçilmiş, bağımsızlara bırakılan 30 milletvekilliğinden ancak 20'si seçilebilmiştir … 10 …
  milletvekilliği boş kalmıştır"; 1935 "30 olan sayı 16'ya düşürülmüştür … bağımsızların sayısı 13'e
  düşmüştür", "toplam 399 milletvekilinin katılımıyla açılan TBMM"; 1939 "420'sini CHP 4'ünü de bağımsız
  milletvekilleri kazanmıştır", "Hatay'ı temsilen seçilen 5 milletvekilinin de katılımıyla milletvekili
  sayısı 429 olmuştur".
- **İkinci kaynak 2:** Derya BALTACI, "Tek Parti Dönemi'nde Bağımsız Milletvekilliği Uygulaması ve Türk
  Siyaseti Üzerindeki Etkisi", *Topkapı Journal of Social Science* 3/1 (2024), s. 49–60
  (`dergipark.org.tr/tr/download/article-file/3626125`): 1931 "30 milletvekilliği için toplamda 20 bağımsız
  milletvekili seçimleri kazandı (Cumhuriyet, 26 Nisan 1931)"; 1935 "Meclise giren bu 13 bağımsız
  milletvekili"; 1939 "bağımsızlara ayrılan kontenjan 4'e düşürüldü"; 1943 "Ankara, Eskişehir, Niğde ve
  Afyonkarahisar'dan toplamda 4 kontenjan boş bırakıldı … 4 azınlık bağımsız aday seçilerek meclise girmeyi
  başardılar (Vakit, 1 Mart 1943)".
- **Yazılanlar:** 1931 CHP 287, Bağımsız 20, `sonradan: 10` (seçimde boş kalıp sonradan dolan); 1935 CHP 386
  (399 − 13), Bağımsız 13; 1939 CHP 420, Bağımsız 4, `sonradan: 5` (Hatay); 1943 CHP 451 (455 − 4),
  Bağımsız 4. Her kayda kısa `not` eklendi. Yeni `sonradan` alanı `dogrula.js`'te meclis toplamına katılır;
  arayüzde boş halka olarak çizilir ve "seçimde boştu, sonradan dolduruldu" diye açıklanır.
- Uyuşmazlık: yok. (TBMM IV. Dönem cildi 1931 seçim gününü "24 Nisan" yazıyor; TÜİK ve Olgun "25 Nisan";
  kayıttaki tarih değiştirilmedi.)
- Erişim: 2026-10-12.

### 2018/2023 ittifak listelerinden seçilen vekil sayıları — yine `null`

- Aranan: CHP (2023) ve İYİ Parti (2018) listelerinden seçilen DEVA, Gelecek, Saadet, DP vekillerinin ve AK Parti
  listesinden seçilen HÜDA PAR vekillerinin sayısı için resmî bir kaynak.
- **TBMM 28. Dönem Albümü** (`cdn.tbmm.gov.tr/TbmmWeb/Albumler/Mv_Albumu/28_donem_mv_album.pdf`, Aralık 2023):
  "21 Aralık 2023 tarihi itibarıyla" parti dağılımı (DEVA 15, Saadet 20, HÜDA PAR 4, DP 3; Gelecek Partisi
  satırı yok). Bu, seçim sonucundaki liste dağılımı değil, aralık 2023'teki üyelik dağılımıdır (Gelecek
  vekilleri o tarihte Saadet'te görünüyor); seçim anındaki sayıyı vermiyor.
- TBMM'nin "Sandalye Dağılımı" sayfasının Haziran 2023 kopyası Internet Archive'da var
  (`web.archive.org/web/20230605153742/https://www.tbmm.gov.tr/sandalyedagilimi`) ama web.archive.org bu
  çalışma ortamından açılmıyor (bağlantı sıfırlanıyor).
- Sonuç: tek ajans haberine (AA) dayanan sayılar ve sonraki tarihli üyelik tablosu iki kaynak kuralını
  karşılamadığı için değerler `null` kaldı.

### 2007 referandumu — MHP "hayır" ve AK Parti "evet" yine yazılmadı

- Bu turda da taranan: TESAV "21 Ekim 2007 Referandumunun Değerlendirilmesi" ve "21 Ekim 2007 Tarihli
  Halkoylaması" (parti tutumu yok), Yeni Şafak "Halkın demokrasi dersi: 2007 anayasa referandumu" (parti
  tutumu yok), dergipark ve haber aramaları. Bağımsız ikinci kaynak bulunamadı; iki tutum tek kaynaklı kaldı.
