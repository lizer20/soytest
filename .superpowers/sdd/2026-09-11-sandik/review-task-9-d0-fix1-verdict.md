# İnceleme hükmü: task-9-d0-fix1 (1727a29..HEAD, commit 4b75726 + 550ff0c)

## F1 — `1923-06-genel` tarihi inşa edilmiş gündü

**ADDRESSED.**

- `veri/sandik.js:9` — `tarih: "1923-06"` (üç haneli gün kaldırıldı).
- Ay hassasiyetli tarih desteği gerçek: `ortak.js#tarihYaz` artık 2 ya da 3 parçalı ISO
  kabul ediyor, gün yalnızca varsa yazılıyor (`ortak.js:14-16`); `araclar/dogrula.js:32`
  `/^\d{4}-\d{2}(-\d{2})?$/` ile biçimi denetliyor; `araclar/dogrula.js:120-121` hükümet
  `baslangic`/`bitis` alanlarının gün dahil kalmasını zorunlu kılıyor (kullanıcı kararıyla
  birebir uyumlu). Testler bunu doğruluyor: `araclar/test/ortak.test.js` (tarihYaz →
  "Haziran 1923" / "Haz 1923") ve `araclar/test/dogrula.test.js` (bozuk biçim → hata,
  hükümette ay-only → hata).
- `not` alanı (`veri/sandik.js:12`) artık "gösterilen gün yaklaşıktır" demiyor; yerine
  seçimin il il farklı günlerde ve iki dereceli yapıldığını, kaynağın yalnızca
  Haziran–Temmuz 1923 aralığı verdiğini söylüyor — uydurma gün izi kalmamış.
- `node --test "araclar/test/*.test.js"` → 54/54 PASS; `node araclar/dogrula.js` → hata yok.
  Bizzat çalıştırılıp doğrulandı (bu incelemede tekrar koşuldu).

## F2 — `meclis:287` ikinci kaynağı deftere yazılmamıştı

**ADDRESSED.**

- `araclar/kaynak-defteri.md:200-211` artık ikinci kaynağı açıkça veriyor: TESAV, "TBMM ve
  Cumhuriyet Dönemlerinde Milletvekili ve Senatör Sayıları"
  (`https://www.tesav.org.tr/wp-content/uploads/2020/02/tbmmvecumhuriyetdonemlerindemv.vesenatorsayilari.pdf`).
- **Bizzat doğrulandı (uygulayıcının sözüne değil):** PDF indirilip
  `pdftotext -layout -enc UTF-8` ile okundu. Tablo satırı birebir: `"2. ( 1923 – 1927 )   287"`.
  Deftede iddia edilen diğer beş çapraz değer de (`316`, `317`, `399`, `"424 + 5 (*)"` = 429,
  `455`) PDF'te birebir doğrulandı — uydurma ya da yaklaşık değer yok.

## Yeni kayıtlar (1934-10-yerel, 1938-10-yerel, 1942-10-yerel) — kaynak doğrulaması

**Doğrulandı, uydurma yok.**

- **Birincil kaynak** — Ayşe (Rabia) Bahar ÜSTE, "Yerel Seçimlerin Cinsiyeti..."
  (`dergipark.org.tr/tr/download/article-file/312360`): PDF indirilip `pdftotext -layout
  -enc UTF-8` ile bizzat okundu. Üç alıntı da birebir metinde bulundu:
  - "Tüm yurtta 2 Ekim 1934 günü başlayan seçimler, ... İzmir seçimleri 10 Ekim 1934 günü
    bitmiştir." → `tarih:"1934-10"` (`veri/sandik.js:49`) doğru.
  - "1938 yerel seçimleri tüm yurtta Ekim ayının ilk haftası başlamıştır. Ankara'da 29 Eylül
    1938 günü başlayan seçimler, 8 Ekim 1938 tarihinde tamamlanmıştır... İstanbul'da seçimler
    1 Ekim tarihinde başlamış ve 10 Ekim 1938 tarihinde tamamlanmıştır." → `tarih:"1938-10"`
    (`veri/sandik.js:67`) doğru; `not` alanındaki Ankara/İstanbul tarihleri birebir eşleşiyor.
  - "İstanbul'da seçimler 1 Ekim'de başlamış ve 11 Ekim 1942 tarihinde sonuçlanmıştır." →
    `tarih:"1942-10"` (`veri/sandik.js:90`) doğru; `not` alanı eşleşiyor.
- **İkinci kaynak (1934 çapraz doğrulama)** — "1934 Yılı Amasya Vilayeti Belediye Meclisi
  Seçimleri" (`dergipark.org.tr/tr/pub/egitimvetoplum/article/1814471`): sayfa bizzat açıldı,
  meta açıklamasında birebir "18 Ekim 1934 tarihli belediye meclisi toplantısında Amasya
  Belediye Başkanlığına seçildi" ifadesi ve tam başlık "1934 Yılı Amasya Vilayeti Belediye
  Meclisi Seçimleri" doğrulandı. (Not: defterdeki `article-file/1814471` biçimindeki bir
  indirme adresi 404 veriyor ama defterin kendisi doğru biçimde `article/1814471` — makale
  sayfası — adresini kullanıyor; kaynağın kendisi gerçek ve erişilebilir.)
- Üç kayıtta da `kayitli`/`kullanilan`/`gecerli`: `null`, `sonuc: []` — ülke geneli oy sayısı
  hiçbir kaynakta yok, hafızadan doldurulmamış; 1930 kaydıyla aynı, spesifikasyon §5.3 kuralına
  uygun. Yaklaşık/yer tutucu değer yok.

## Yeni kırılma taraması (yalnızca bu fark)

Yok. `dogrula.js`'e eklenen iki denetim (`geçersiz tarih biçimi`, `hükümet tarihi gün dahil
olmalı`) test edilmiş ve doğru konumlandırılmış (hükümet denetimi erken `return`'den önce,
son kayıt da kapsanıyor — `araclar/dogrula.js:116-124`). Yeni `"YYYY-AA"` tarihleri ile mevcut
tam tarihli kayıtlar arasındaki sıralama karşılaştırması (string karşılaştırma) bozulmuyor —
bizzat kontrol edildi (`1923-06` < `1923-10-29`, `1934-10` sırasıyla `1931-05-04` ve
`1935-02-08` arasında doğru konumlanıyor). `node --check` üç dosyada da temiz, 54/54 test PASS,
`node araclar/dogrula.js` → `hata yok` (bizzat çalıştırılıp doğrulandı).

## Kapsam dışı

F3 (1930-10-yerel ikinci kaynağının yalnızca varlığı doğrulaması) bu turda ele alınmadı —
brief'te zaten ertelenmiş, düzeltme kapsamına girmiyordu; bu farkta da dokunulmamış.
Spesifikasyon §5.1'in ay hassasiyetini henüz anlatmaması, görev talimatınca bu incelemenin
dışında tutuldu.

## Genel hüküm

**Tüm bulgular kapatıldı.** F1 ve F2 gerçek düzeltmelerle kapatılmış, yeni eklenen üç yerel
kayıt bizzat açılıp doğrulanan iki bağımsız kaynağa dayanıyor, farkta yeni bir kırılma yok.
