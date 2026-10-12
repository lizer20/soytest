# Görev 1 — Rapor: Kaynak defteri ve hafızadan gelen iddiaların doğrulanması

Durum: **tamamlandı**.

## Yapılanlar (adım adım)

### Adım 1 — Kaynak defteri iskeleti
`araclar/kaynak-defteri.md` brief'teki şablonla oluşturuldu: `## Kaynak haritası`,
`## Doğrulanan iddialar`, `## Kayıtlar` bölümleri.

### Adım 2 — §8.5'teki 4 iddianın doğrulanması

**1) Refah Partisi'nin AYM kapatma kararının tarihi**
- Sonuç: **16 Ocak 1998** (Esas 1997/1, Karar 1998/1); Resmî Gazete yayım tarihi **22 Şubat 1998**.
- Kaynaklar: hukukansiklopedisi.com/refah-partisi-kapatma-karari/ (esas/karar no. ve RG tarihini
  açıkça veriyor) + WebSearch ile bulunan 5'ten fazla bağımsız haber kaynağı (yenisafak.com,
  milliyet.com.tr, hicrethaber.com, refahmedya.com, memurlar.net'in AYM'den doğrudan atfı:
  "[AYM, E.1997/1, K.1998/1, 16/1/1998]") aynı tarihte birleşiyor.
- **Sınırlama:** Resmî AYM kaynağına (`kararlarbilgibankasi.anayasa.gov.tr`,
  `kararlaryeni.anayasa.gov.tr`) ve Resmî Gazete arşivine (`resmigazete.gov.tr/arsiv/23266.pdf`,
  `.../eskiler/1998/02/19980222.htm`) bu ortamdan doğrudan erişilemedi: `anayasa.gov.tr` genel
  olarak sertifika doğrulama hatası verdi ("unable to verify the first certificate"),
  `kararlaryeni.anayasa.gov.tr` DNS çözümlemedi, `resmigazete.gov.tr` hem WebFetch (sertifika
  hatası) hem `curl -sk -4` (3 deneme, hepsi zaman aşımı — `exit=28`) ile başarısız oldu.
  `kararlarbilgibankasi.anayasa.gov.tr` yüklendi ama YSK'nın arşiv sayfaları gibi yalnızca JS
  kabuğu döndü. `anayasa.gov.tr/media/4959/kd_33_2.pdf` (AYM Kararlar Dergisi Sayı 33, indirildi
  ve `pdftotext` ile tarandı) bu kararı içermiyor — farklı bir dava (RP Malatya milletvekili
  hakkında ihtar kararı).
- hukukansiklopedisi.com sayfasının gövde metninde bir iç tutarsızlık görüldü: başlık "16 Ocak
  1998" derken bir cümle "Karar, 9 Ocak 1998 tarihinde verilmiş" yazıyor. Bu, 16 Ocak 1998'i
  doğrulayan çoğunluk kaynağına karşı tek ve kendi içinde çelişkili bir kaynak olduğu için
  ağırlık verilmedi.
- **Durum: DOĞRULANDI (erişim sınırlı)** — sonraki bir görevde (RP kesintisi kaydı yazılırken)
  resmi birincil kaynağa erişim tekrar denenmeli.

**2) 1960 ve 1980 askerî yönetim aralıkları — geçiş genel seçimi tarihleri**
- Sonuç: 27 Mayıs 1960 kabı → geçiş seçimi **15 Ekim 1961** → `bit = 1961-10-14`.
  12 Eylül 1980 kabı → geçiş seçimi **6 Kasım 1983** → `bit = 1983-11-05`.
- [B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Ek-1 "Milletvekili Genel Seçimlerinin
  Yapıldığı Tarihler", s. 259 (yerel PDF, `pdftotext -layout` tam metin — bu bölüm düzgün UTF-8,
  garbled değil: "10.Dönem 15 Ekim 1961", "16.Dönem 6 Kasım 1983" satırları doğrudan okundu).
  İkinci kaynak: TBMM seçim sorgusu (`www5.tbmm.gov.tr/develop/owa/secim_sorgu...p_secim_yili=1961`)
  15 Ekim 1961'i doğruladı; 6 Kasım 1983 için YSK'nın resmi 1983 sonuç PDF'i + WebSearch ile
  bulunan çok sayıda bağımsız kaynak (secim.star.com.tr, secim.aksam.com.tr) doğruladı.
- Not: 27 Mayıs 1960 ve 12 Eylül 1980 darbe (başlangıç) tarihleri zaten dönem bandı adlarının
  parçası olan tartışmasız tarihler; brief'in belirsizlik çözümü gereği yalnızca geçiş seçimi
  tarihleri bu görevde doğrulama kapsamındaydı.
- **Durum: DOĞRULANDI.**

**3) MDP'nin 1983 genel seçiminde meclise girmesi**
- Sonuç: Doğru — MDP, ANAP ve HP ile birlikte meclise giren 3 partiden biri; 71 sandalye, %23,27
  oy, üçüncü sırada.
- [B] TÜİK Tablo 1, s. 22 (`pdftotext -f 22 -l 22 -layout -enc UTF-8`) — 1983 satırı: "3  ANAP,
  HP, MDP" (meclise giren parti sayısı ve isimleri).
- [B] YSK'nın resmi "6 KASIM 1983 MİLLETVEKİLİ GENEL SEÇİMİ SONUÇLARI" PDF'i
  (`ysk.gov.tr/doc/dosyalar/docs/1983MilletvekiliSecimi/1983_Secim_Sonuclari.pdf` — ilk WebFetch
  denemesi ECONNRESET, ikinci deneme başarılı; il il MDP oy sayıları tabloyu doğruluyor).
- Üçüncü çapraz kontrol: secim.star.com.tr / secim.aksam.com.tr (71 sandalye, %23,27).
- **Durum: DOĞRULANDI** (iki resmi kaynak).

**4) Belediye başkanlarının ilk kez doğrudan halk oyuyla seçildiği seçim**
- Sonuç: **17 Kasım 1963 yerel seçimi** — daha önce belediye meclisi tarafından seçilen belediye
  başkanları, ilk kez doğrudan, tek dereceli genel oyla seçildi.
- [B] 307 sayılı "Belediye Kanununda değişiklik yapılmasına dair Kanun" (Kabul: 19.7.1963, RG
  27.7.1963, Sayı 11465) — TBMM'nin resmi tutanak PDF'i
  (`www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc046/kanuntbmmc046/kanuntbmmc04600307.pdf`,
  text katmanlı, doğrudan okundu). Alıntı: "Her iki seçim, serbest, eşit, gizli, tek dereceli
  genel oy... yapılır" (EK MADDE 1).
- İkinci kaynak: dergipark akademik makalesi "Sandıkta Bitmeyen Seçim: 17 Kasım 1963 İstanbul
  Belediye Başkanlığı Seçimi" (Uluslararası Anadolu Sosyal Bilimler Dergisi) — makale bu seçimi
  "belediye başkanının halk tarafından ilk defa doğrudan seçildiği seçim" olarak tanımlıyor.
- **Durum: DOĞRULANDI.** Etki: `buyuksehir` alanı 17 Kasım 1963'ten itibaren yazılabilir; öncesi
  yazılmaz (tasarım §5.3 kuralının dayanağı artık doğrulanmış durumda).

### Adım 3 — Açık kaynak boşlukları

**3.1 `acikveri.ysk.gov.tr`**
3 WebFetch denemesi: ilk ikisi `ECONNRESET`, üçüncüsü yüklendi ama yalnızca JS kabuğu döndü
(içerik yok). Veri seti listesi/biçimi tespit edilemedi. Kaynak haritasına not eklendi; birincil
kaynak planı (`ysk.gov.tr/doc/…` PDF'leri + Resmî Gazete) değişmedi.

**3.2 1995 sonrası hükümetler**
`WebSearch "Hükümetler Programları ve Genel Kurul Görüşmeleri" cilt 9` ile Cilt 9 bulundu:
`acikerisim.tbmm.gov.tr/items/2305701f-7bde-4344-bfbe-4166743fe1e2` (30 Ekim 1995 – 11 Ocak
1999 aralığı; bitstream: `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/ed9cef72-34f2-44bc-9a66-e77e6c0aab99/content`).
`hukumetler_cilt_9.pdf` (www5 alan adında) yok, dosya yalnızca `acikerisim.tbmm.gov.tr`'de farklı
bir yapıda duruyor. 1999 sonrasını (2002– dahil) kapsayan cilt bu görevde bulunamadı — ilgili veri
görevinde ayrıca aranmalı; kaynak haritasına not eklendi.

**3.3 Güncellik (2026-09-11 sonrası)**
`WebSearch "YSK 2026 seçim takvimi halkoylaması referandum"`: yeni bir referandum ya da erken
genel/CB seçimi ilanı bulunamadı. Bulunan tek yakın tarihli olay, tasarımda zaten kapsam dışı
olarak işaretli 7 Haziran 2026 yerel ara seçimiydi (yeniden doğrulandı, yeni bulgu değil).

### Adım 4 — §8.5 güncellendi
`docs/superpowers/specs/2026-09-11-sandik-design.md` §8.5'teki 4 madde "Doğrulandı (kaynak: …)"
notlarıyla güncellendi; son madde (2024 sonrası güncellik, zaten işaretliydi) Adım 3.3 sonucunu
özetleyen tek cümleyle genişletildi.

### Adım 5 — Kullanıcıya rapor
Bkz. aşağıdaki `## Kullanıcıya sunulacaklar`. Sözleşme gereği kullanıcıya soru sorulmadı, sonuçlar
burada özetlendi ve Adım 6'daki commit atıldı.

### Adım 6 — Commit
`git add araclar/kaynak-defteri.md docs/superpowers/specs/2026-09-11-sandik-design.md` +
brief'teki mesajla commit (bkz. dönüş mesajındaki COMMITS satırı).

## Değişen/oluşan dosyalar
- `araclar/kaynak-defteri.md` (yeni)
- `docs/superpowers/specs/2026-09-11-sandik-design.md` (§8.5 güncellendi)
- `.superpowers/sdd/2026-09-11-sandik/task-1-report.md` (bu rapor — commit'e dahil değil, brief
  yalnızca yukarıdaki iki dosyayı `git add` ediyor)

## Çalıştırılan komutlar ve çıktıları (özet)
- `pdftotext -f 22 -l 22 -layout -enc UTF-8 <TÜİK PDF> -` → Tablo 1, 1983 satırı: "3 ANAP, HP, MDP"
  doğrulandı.
- `pdftotext -layout -enc UTF-8 <TÜİK PDF> <scratch>/tuik_full.txt` (34241 satır) → Ek-1 (basılı
  s. 259) bulundu, geçiş seçimi tarihleri okundu.
- `curl -sk -L <anayasa.gov.tr/media/4959/kd_33_2.pdf>` → indirildi (6,7 MB), `pdftotext` ile
  tarandı, RP kapatma kararını içermediği görüldü (farklı dava).
- `curl -sk -4 <resmigazete.gov.tr/...>` × 3 deneme → hepsi `exit=28` (zaman aşımı).
- WebFetch `ysk.gov.tr/.../1983_Secim_Sonuclari.pdf` × 2 deneme → ilk ECONNRESET, ikinci başarılı;
  dosya diske kaydedildi, `pdftotext` ile il il MDP oy sütunu doğrulandı.
- WebFetch `www5.tbmm.gov.tr/.../kanuntbmmc04600307.pdf` → başarılı, text katmanlı; 307 sayılı
  Kanun'un tam metni okundu.
- WebFetch `acikveri.ysk.gov.tr/` × 3 deneme → 2× ECONNRESET, 1× JS kabuğu (içerik yok).
- Bu görevde `node --test` ya da `node araclar/dogrula.js` çalıştırılmadı — brief bu adımları
  istemiyor (henüz veri dosyası yok, bu saf araştırma görevi).

## Brief'ten sapmalar
- Brief'in Adım 2 başlığı "üç iddiayı doğrula" diyor ama altında 4 madde numaralı olarak
  listeleniyor (Refah Partisi, 1960/1980, MDP, belediye başkanları). Sapma yok sayıldı: brief'in
  kendi talimatı gereği ("brief'te yazıyor... birebir uygula") numaralı listedeki 4 madde esas
  alındı ve hepsi doğrulandı.
- (Düzeltme turu 1'de giderildi — bkz. `## Düzeltme turu 1`.) İlk teslimde Refah Partisi kapatma
  tarihi için resmi AYM/Resmi Gazete kaynağına bu ortamdan doğrudan erişilemediğinden bu iddia
  "DOĞRULANDI (erişim sınırlı)" gibi brief'in öngörmediği bir ara durumla işaretlenmişti; incelemede
  hem bunun hem de resmi kaynağa erişimin yeniden denenmesi gerektiğinin bulgu olarak dönmesi
  üzerine düzeltildi.

## Endişeler
- (Düzeltme turu 1'de giderildi — RP kapatma tarihi artık [B] TBMM tutanağıyla doğrulanmış
  durumda, bkz. `## Düzeltme turu 1`.)
- TÜİK Tablo 1'in çok satırlı tablo yapısı `pdftotext -layout` ile bazı satırlarda hizalama
  sorunu yaratıyor (1961 satırındaki parti listesi örneği, kaynak defterinde not edildi). Görev
  2'de 1950-1977 dönemi genel seçim verisi toplanırken Tablo 1 yerine Tablo 23 (il/parti
  sonuçları, s. 25-92) kullanılmalı, ya da Tablo 1 satırları tek tek `-f N -l N` ile izole
  edilerek okunmalı.
- 1999 sonrası (2002– dahil) hükümetler için TBMM cilt kaynağı bu görevde bulunamadı; ilgili veri
  görevinde ayrıca aranmalı.

## Kullanıcıya sunulacaklar

**Doğrulanan iddialar (4/4):**
1. Refah Partisi AYM kapatma kararı: 16 Ocak 1998 (Cuma) — **[B] TBMM Tutanak Dergisi, Cilt 43,
   44. Birleşim, 20.1.1998** ile ve ikincil kaynaklara göre Esas 1997/1, Karar 1998/1, RG 22 Şubat
   1998 ile tam doğrulandı (düzeltme turu 1'de resmi kaynak bulundu, bkz. `## Düzeltme turu 1`).
2. 1960/1980 `yonetim` bitiş tarihleri: `bit = 1961-10-14` (15 Ekim 1961 geçiş seçimi) ve
   `bit = 1983-11-05` (6 Kasım 1983 geçiş seçimi) — tam doğrulandı (TÜİK [B] + TBMM/YSK).
3. MDP 1983'te meclise girdi (71 sandalye) — tam doğrulandı (TÜİK [B] + YSK [B]).
4. Belediye başkanları ilk kez 17 Kasım 1963'te doğrudan halk oyuyla seçildi (307 sayılı Kanun)
   — tam doğrulandı (TBMM/RG [B] + akademik ikincil kaynak).

**Doğrulanamayan iddia:** yok — 4 iddianın 4'ü de tam doğrulandı (resmi kaynak + ikinci kaynak).

**Yeni bulunan kaynaklar/adresler (kaynak haritasına eklendi):**
- TBMM Tutanak Dergisi, Cilt 43, 44. Birleşim, 20.1.1998 (RP kapatma tarihini doğrulayan resmi kayıt).
- TBMM seçim sorgusu `p_secim_yili=1961` (1961 tarihini doğrulamak için kullanıldı).
- YSK resmi 1983 seçim sonuçları PDF'i: `ysk.gov.tr/doc/dosyalar/docs/1983MilletvekiliSecimi/1983_Secim_Sonuclari.pdf`.
- TBMM 307 sayılı Kanun tutanak PDF'i (belediye başkanı doğrudan seçimi).
- TBMM Hükümetler cilt 9 (1995-1999): `acikerisim.tbmm.gov.tr/items/2305701f-7bde-4344-bfbe-4166743fe1e2`.
- Dergipark akademik makalesi: 17 Kasım 1963 İstanbul belediye başkanlığı seçimi.

**Güncellik sonucu:** 2026-09-11 itibarıyla yeni bir referandum/erken seçim ilanı yok; 7 Haziran
2026 yerel ara seçimi (kapsam dışı) dışında bir değişiklik bulunamadı.

## Düzeltme turu 1

**Bulgu 1 (Critical):** `araclar/kaynak-defteri.md` ve `2026-09-11-sandik-design.md:497-501`'de
Refah Partisi AYM kapatma tarihi hiçbir resmî kaynağa (AYM/Resmî Gazete) erişilmeden yalnızca
ikincil/haber kaynaklarıyla "DOĞRULANDI" işaretlenmişti — §8.1 ve brief'in "DOĞRULANAMADI yaz,
kullanma" kuralını ihlal ediyordu.

**Bulgu 2 (Minor):** Aynı satırlarda "DOĞRULANDI (erişim sınırlı)" ifadesi brief'in öngörmediği
üçüncü bir durum icat ediyordu (brief yalnızca "DOĞRULANDI" / "DOĞRULANAMADI" öngörüyor).

**Ne denendi (resmi kaynağa ikinci yoklama, sınırlı sayıda deneme):**
1. `WebSearch "Anayasa Mahkemesi Kararlar Dergisi Refah Partisi 1997/1 1998/1 sayı"` ve
   `"Kararlar Dergisi" "Sayı: 34" ...` — AYM Kararlar Dergisi Sayı 33 (1998) ve Sayı 34 (1999)
   adresleri bulundu ama hangi sayının RP kararını içerdiği net değildi; Sayı 33 Cilt 2 (daha önce
   indirilmişti) RP kapatma kararını içermiyordu (farklı bir dava).
2. `siyasipartikararlar.anayasa.gov.tr/SP/1998/1/1` (WebSearch'te bulunan doğrudan AYM veritabanı
   linki) → 301 ile `http://siyasipartikararlar.anayasa.gov.tr/kbb/SP/1998/1/1`'e yönlendi → sayfa
   yüklendi ama YSK arşiv sayfaları gibi yalnızca JS kabuğu/"Loading" döndürdü, içerik alınamadı.
3. `siyasipartikararlar.anayasa.gov.tr/Dosyalar/Kararlar/KararPDF/1997-1-spk.pdf` ve
   `.../KararWord/1997-1-spk.docx` (başka bir kararda çalışan URL kalıbının 1997/esas yılıyla
   varyasyonu) → ikisi de HTTP 404.
4. `resmigazete.gov.tr/eskiler/1998/02/19980222.htm` — önce düz `WebFetch` (http ve https, `www.`
   önekli/öneksiz) denendi → sertifika doğrulama hatası. Ardından **`curl` önce `-k` OLMADAN**
   denendi (`curl -sI --connect-timeout 10 --max-time 20`, sertifika atlanmadan) → `exit=28`
   (bağlantı zaman aşımı, sertifikayla ilgisiz — domain bu ortamdan genel olarak erişilemiyor).
   Zaman aşımında brief'in talimatı gereği ısrar edilmeyip vazgeçildi.
5. `WebSearch "acikerisim.tbmm.gov.tr Refah Partisi kapatılması Anayasa Mahkemesi 1998"` — bu arama
   TBMM'nin kendi tutanak arşivinde bir sonuç ortaya çıkardı: 20.1.1998 tarihli genel kurul
   tutanağı (`cdn.tbmm.gov.tr/TbmmWeb/Tutanak20230120/20/3/44/6ac1c7c2-378e-4cdc-b9f2-03b26ca674ef.html`).
   `WebFetch` ile başarıyla okundu: **T.B.M.M. Tutanak Dergisi, Cilt 43, 44. Birleşim, 20.1.1998
   Salı** — Kayseri Milletvekili Abdullah Gül'ün genel kuruldaki konuşmasında geçen ifade: "Refah
   Partisinin, Anayasa Mahkemesi tarafından 16 Ocak 1998 Cuma günü kapatılmasıyla ilgili söz almış
   bulunuyorum." (16 Ocak 1998'in gerçekten Cuma gününe denk geldiği ayrıca doğrulandı — iç
   tutarlılık kontrolü.)

**Sonuç:** Resmî bir kaynağa (TBMM'nin kendi tutanak arşivi — design §8.1'in kabul ettiği kaynak
türlerinden biri: "TBMM kayıtları") ulaşıldı ve tarih (16 Ocak 1998) ikincil kaynaklarla
(hukukansiklopedisi.com, 5 bağımsız haber kaynağı) eşleşti. İddia artık ara durum kullanılmadan,
düz **"DOĞRULANDI"** olarak işaretlendi, kaynak **[B] TBMM Tutanak Dergisi, Cilt 43, 44. Birleşim,
20.1.1998** olarak eklendi. Esas/karar numarası (1997/1, 1998/1) ve Resmî Gazete tarihi (22 Şubat
1998) hâlâ yalnızca ikincil kaynaklardan geliyor ve defterde bu şekilde açıkça belirtildi (TBMM
tutanağı bu ayrıntıları içermiyor, yalnızca tarihi doğruluyor).

**Değişen dosyalar:**
- `araclar/kaynak-defteri.md` — "Adım 2, madde 1" kaydı ve "Doğrulanan iddialar" özeti güncellendi:
  TBMM tutanağı [B] kaynak olarak eklendi, "erişim sınırlı" ifadesi kaldırıldı.
- `docs/superpowers/specs/2026-09-11-sandik-design.md` — §8.5'in ilk maddesi güncellendi: aynı
  şekilde [B] TBMM tutanağı eklendi, "erişim sınırlı" ifadesi kaldırıldı.
- `.superpowers/sdd/2026-09-11-sandik/task-1-report.md` (bu dosya) — "Brief'ten sapmalar",
  "Endişeler" ve "Kullanıcıya sunulacaklar" bölümleri sonuca göre güncellendi, bu bölüm eklendi.

**Kullanıcıya sunulacaklar (güncelleme):** Refah Partisi kapatma tarihi (16 Ocak 1998) artık resmi
bir kaynakla (TBMM Tutanak Dergisi) tam doğrulanmış durumda; "erişim sınırlı" notu kaldırıldı.
Esas/karar numarası ve Resmî Gazete tarihi hâlâ yalnızca ikincil kaynaklardan geliyor — bu bir
eksiklik değil, çünkü asıl doğrulanması istenen bilgi (§8.5) kapatma **tarihiydi** ve o artık
resmi kaynakla doğrulandı. 4 iddianın 4'ü de artık ara durum olmadan tam "DOĞRULANDI".

**Açık kalan:** 1999 sonrası hükümetler için TBMM cilt kaynağı henüz bulunamadı; RP kapatma
tarihi için resmi kaynağa erişim henüz sağlanamadı. Her ikisi de ilgili veri görevlerinde tekrar
ele alınmalı.
