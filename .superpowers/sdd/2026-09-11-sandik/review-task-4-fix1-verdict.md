# Görev 4 — Düzeltme turu 1 hükmü (def57da)

İncelenen fark: `review-task-4-fix1.md` (3222139..def57da, tek commit `def57da`).
Doğrulama: `node --test "araclar/test/*.test.js"` → 23/23 PASS (tail çıktısı: `tests 23, pass 23, fail 0`).

## F1 — meclisDurumu `sandalye:null` satırları sessizce düşüyor

**ADDRESSED**

- `sandik-mantik.js:47`: `bilinmeyen: sirali.filter(s => s.sandalye == null)` eklendi — kullanıcının onayladığı çözümle birebir örtüşüyor (üçüncü ayrı liste, başka fonksiyon/fikstür değişmedi).
- `araclar/test/sandik-mantik.test.js:88-95`: yeni test `structuredClone` ile fikstürdeki `fp` satırının `sandalye`'sini `null` yapıp `meclisDurumu` çağırıyor; `bilinmeyen` listesinin `["fp"]` olduğunu, `giremeyenler`'in boş kaldığını, `girenler`'in `["dsp","mhp93"]` olarak değişmediğini doğruluyor. Düzeltme geri alınırsa (satır silinirse) bu test `d.bilinmeyen` `undefined` olduğundan `TypeError` ile kırılır — raporun "22/23 PASS, 1 FAIL" günlüğü bunu zaten gösteriyor. Testin gerçek bir doğrulaması var, boş/anlamsız değil.
- Orijinal `meclisDurumu` testi (satır 40-46) `bilinmeyen` alanına dokunmuyor ama etkilenmiyor da (fikstürdeki `fp.sandalye` hâlâ `0`), dolayısıyla regresyon yok.

## F2 — kronoloji "kaplar" (askerî yönetim) dalı fikstürde hiç tetiklenmiyordu

**ADDRESSED**

- Kod tarafında değişiklik yok (kaplar dalı zaten Adım 4'te vardı); eksik olan testti, o eklendi.
- `araclar/test/sandik-mantik.test.js:97-108`: gerçek `veri/partiler.js` verisindeki 1980-09-12 askerî yönetim aralığını (`P.DONEMLER[i].kesinti.yonetim = {bas:"1980-09-12", bit:"1983-11-05"}`, doğrulandı: `veri/partiler.js:91-92`) kullanarak, bu aralığın başlangıcında bir seçim ve bitişinde bir hükümet içeren sentetik bir `S` kuruyor. `kr.kaplar[i]` içinde her iki tarihin de bulunduğunu, `bantlar` toplamının `0` olduğunu ve `yersiz.length === 0` olduğunu doğruluyor.
- Bu test dalı gerçekten tetikliyor: `donemBul` her iki tarihi de `{tur:"yonetim", i}` olarak sınıflandırır (kod: `sandik-mantik.js:56-60`), `kronoloji` bunları `kaplar[i]`'ye iter (`sandik-mantik.js:77`). Kaplar dalı silinip normal `bantlar[i]`'ye düşürülseydi test `bantlar` toplamının `0` olması beklentisiyle kırılırdı — anlamsız/placeholder bir test değil.

## F3 — "aynı tarihte seçim hükümetten önce gelir" kuralı fikstürde hiç çakışmıyordu

**ADDRESSED**

- Kod değişmedi (kural zaten Adım 4'te comparator içindeydi: `sandik-mantik.js:71-72`); eksik olan çakışan tarihli testti, o eklendi.
- `araclar/test/sandik-mantik.test.js:110-117`: aynı tarihli (`"2002-11-18"`) bir seçim ve bir hükümet içeren sentetik `S` ile `kronoloji` çağrılıyor, `bantlar[6].ogeler` sırasının `["secim","hukumet"]` olduğu doğrulanıyor.
- Testin kendi yorumu (satır 111-112) dürüstçe belirtiyor: bugünkü davranış hem `concat` sırası (seçimler önce eklenir) hem de comparator'daki açık eşitlik kuralı ile garanti ediliyor; ikisinden yalnızca biri (örn. açık `tur` karşılaştırması kaldırılıp `concat` sırası korunursa) test'i kırmayabilir. Ancak arayüz sözleşmesi ("aynı tarihte seçim hükümetten önce gelir") gözlemlenebilir çıktı üzerinden test ediliyor — `concat` sırası tersine çevrilir *veya* eşitlik kuralı bozulursa (ikisinden biri) test kırılır; bu, saf mantık modülü için kabul edilebilir bir sözleşme testidir, boş/anlamsız değildir.

## Yeni kırılmalar (yalnızca def57da farkında)

Yok. Fark yalnızca `sandik-mantik.js`'e 1 satır (`bilinmeyen` alanı) ve test dosyasına 3 yeni test ekliyor; mevcut hiçbir davranış/imza değişmedi. `node --test` çalıştırıldığında 23/23 PASS.

## Kapsam dışı gözlemler (döngüyü uzatmaz)

- `meclisDurumu`'nun dönüş biçimi (`{girenler, giremeyenler, bagimsiz, diger}`) task-4-brief.md'deki arayüz satırında (`brief:32`) hâlâ `bilinmeyen` alanını içermiyor; ancak `docs/superpowers/specs/2026-09-11-sandik-design.md` bu fonksiyonun alan listesini hiç saymıyor (yalnızca dosya varlığından bahsediyor), dolayısıyla güncellenmesi gereken bir spesifikasyon satırı yok — brief'in kendisi görev tamamlandıktan sonra genelde güncellenmez, bu normal.
- Yeni test dosyasındaki sentetik hükümet kaydında `tip:"partiluestu"` yazımı muhtemelen "parti-üstü" için bir yazım tutarsızlığı, ama `kronoloji` bu alanı hiç okumadığından testin doğruluğunu etkilemiyor.

## Sonuç

Üç bulgu da (F1, F2, F3) düzeltilmiş ve gerçek, anlamlı testlerle kapatılmış. Farkta yeni bir kırılma yok. **VERDICT: all findings addressed.**
