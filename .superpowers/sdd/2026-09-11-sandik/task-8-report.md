# Görev 8 — rapor: Soyağacı entegrasyonu (künyede seçimler, #parti bağlantısı, menü)

## 1. Yapılanlar (adım adım)

**Ön kontrol (brief öncesi durum doğrulaması).** `sandik-mantik.js`'teki
`return { BAGIMSIZ, DIGER, NOTR, KESINTI, TUR_ETIKET, TUR_AD, BITIS_ETIKET, … panelHTML };`
ifadesi dosyada tam bir kez bulundu (grep ile doğrulandı, `liste(baslik, satirlar)`
yardımcısı bu `return`'ün üstünde, Görev 6'dan beri tanımlı) — brief'teki yama planı
doğrudan uygulanabilir durumdaydı.

- **Adım 1 — başarısız testi yaz:** `araclar/test/sandik-html.test.js` dosyasının
  sonuna brief'teki üç test birebir eklendi. `node --test "araclar/test/*.test.js"`
  çalıştırıldı: 48 PASS, 3 FAIL (`M.kunyeSecimleriHTML is not a function`) — beklenen.

- **Adım 2 — `kunyeSecimleriHTML` yazıldı:** `sandik-mantik.js`'te `olustur`
  içindeki eski dört satırlık `return` ifadesi, brief'teki `kunyeSecimleriHTML`
  fonksiyonu + genişletilmiş `return` ile değiştirildi (birebir brief metni).
  `node --test "araclar/test/*.test.js"`: **51/51 PASS**.

- **Adım 3 — `index.html`'e bağlandı:**
  1. `<script src="ortak.js"></script>` satırı brief'teki dört satırla değiştirildi
     (`veri/partiler.js` üstte kaldı; `veri/sandik.js` → `ortak.js` → `sandik-mantik.js` eklendi).
  2. IIFE başına `const SANDIK = window.SANDIK; const SM = SandikMantik.olustur(window.PARTILER, Ortak);` eklendi.
  3. `Ortak.panelKur({…})` çağrısına `kapaninca: () => history.replaceState(null, "", location.pathname + location.search)` eklendi.
  4. `ac(id)` içinde eski `Panel.ac(html, renk);` satırı silinip yerine brief'teki üç satır
     (`kunyeSecimleriHTML` çağrısı, `Panel.ac(html + secimler, renk);`, `history.replaceState(...)`) eklendi.
  5. `ciz();` çağrısının üstüne `hashAc()` fonksiyonu ve `hashchange` dinleyicisi brief'teki gibi eklendi.

- **Adım 4 — Menü:** `index.html` ve `kaynakca.html`'de `.ustmenu-ic` içindeki
  "Ana sayfa" bağlantısının altına `<a href="sandik.html" class="ustmenu-link">Sandık</a>`
  eklendi. `sandik.html`'e dokunulmadı (Görev 7'den beri kendi menüsü zaten var,
  grep ile doğrulandı: Ana sayfa · Sandık(aktif) · Kaynakça & metodoloji).

- **Adım 5 — Doğrulama:** aşağıda ayrıntılı.

- **Adım 6 — Commit:** aşağıda.

## 2. Değişen/oluşan dosyalar

- `sandik-mantik.js` — `kunyeSecimleriHTML` eklendi, `return` nesnesi genişletildi.
- `araclar/test/sandik-html.test.js` — 3 yeni test.
- `index.html` — betik sırası, `SM`/`SANDIK` tanımı, `kapaninca`, künye+seçimler birleşimi,
  `history.replaceState`, `hashAc`/`hashchange`, menüye "Sandık" bağlantısı.
- `kaynakca.html` — menüye "Sandık" bağlantısı.

`araclar/test/fikstur.js` içeriğine dokunulmadı (yalnızca brief'teki fikstür verisi okundu,
testlerin beklediği sayısal değerler — `%42,9 · 6 sandalye`, `%13,0`, `chp92 listesinden 2 vekil` —
fikstürle çapraz kontrol edilip uyduğu doğrulandı).

## 3. Çalıştırılan komutlar ve çıktıları

### Adım 1 — testler eklendikten hemen sonra (beklenen FAIL)
```
node --test "araclar/test/*.test.js"
...
ℹ tests 51
ℹ pass 48
ℹ fail 3
✖ künye: girdiği genel seçimler … TypeError: M.kunyeSecimleriHTML is not a function
✖ künye: aynı yıl aynı türde iki seçim … TypeError: M.kunyeSecimleriHTML is not a function
✖ künye: seçim kaydı olmayan partide boş … TypeError: M.kunyeSecimleriHTML is not a function
```

### Adım 2 — `kunyeSecimleriHTML` yazıldıktan sonra
```
node --test "araclar/test/*.test.js"
ℹ tests 51
ℹ pass 51
ℹ fail 0
```

### Adım 5.5 (dogrula)
```
node --test "araclar/test/*.test.js" && node araclar/dogrula.js
→ 51/51 PASS
→ hata yok
```

### Adım 5.1 — tarayıcı denetimi (`http://localhost:8123/index.html`, 1400×900)
`araclar/denetim/soyagaci.js` içeriği + panel kapandıktan sonra `location.hash` kontrolü
`javascript_tool` ile çalıştırıldı:
```json
{
  "kart": 66, "kenar": 73, "bant": 8,
  "kesinti": [
    "27 Mayıs 1960 — DP kapatıldı, liderleri idam edildi",
    "12 Mart 1971 — TİP ve MNP kapatıldı",
    "12 Eylül 1980 — parti faaliyetleri yasaklandı; 16 Ekim 1981'de 1533 sayılı kanunla hepsi feshedildi",
    "28 Şubat 1997 — MGK kararları; Refah Partisi 16 Ocak 1998'de kapatıldı"
  ],
  "bantKapaninca": { "yukseklik": 0, "kenar": 63 },
  "panelAcik": { "acik": true, "inert": false, "odak": "kapat" },
  "panelKapali": { "inert": true, "odakGeri": true },
  "hashSonrasi": "",
  "vurgu": 4
}
```
Tüm değerler brief'teki beklenenlerle birebir eşleşti; `hashSonrasi` (panel kapandıktan
sonraki `location.hash`) boş dize — beklenen ek kontrol karşılandı.

### Adım 5.2 — `index.html#akp` doğrudan bağlantı
```
navigate → http://localhost:8123/index.html#akp
javascript_tool sonucu:
{ "hash": "#akp", "panelAcik": true, "kisa": "AK Parti", "resources404": [] }
```
Panel otomatik açılıyor, `#p-kisa` metni "AK Parti".

### Adım 5.3 — üç sayfada menü sayısı
```
index.html    → count:3, aktif:"Ana sayfa"
sandik.html   → count:3, aktif:"Sandık"
kaynakca.html → count:3, aktif:"Kaynakça & metodoloji"
```

### Adım 5.4 — konsol hataları ve "file:// ikamesi"
`read_console_messages {onlyErrors:true}`: iki `Failed to load resource: 404` mesajı.
`fetch('/favicon.ico')` ile doğrulandı → `{status:404}` — bu, brief'in önceden var olduğunu
belirttiği ve bu görevle ilgisiz favicon eksikliği (sitede favicon dosyası yok). Ağ isteği
listesinde (`read_network_requests`) bu oturumdaki gezinmelerde favicon dışında **başka hiçbir
404 veya hata yok**; `resources404` boş dizi döndü. Konsolda favicon dışında hata yok.

**file:// ikamesi** (Claude Browser `file://` sayfalarında betik çalıştırmadığından, brief'in
öngördüğü gibi betik sırası grep ile doğrulandı):
```
$ grep -n '^<script src=' index.html
171:<script src="veri/partiler.js"></script>
172:<script src="veri/sandik.js"></script>
173:<script src="ortak.js"></script>
174:<script src="sandik-mantik.js"></script>
```
(satır 175'ten itibaren satır içi betik başlıyor). Brief'teki beklenen sıra:
`veri/partiler.js` → `veri/sandik.js` → `ortak.js` → `sandik-mantik.js` → satır içi betik —
birebir uyuyor.

### Adım 6 — commit
```
git add sandik-mantik.js araclar/test/sandik-html.test.js index.html kaynakca.html
git commit -F - <<'MSG' ...
[sandik-asama1 43794b8] Künyede girdiği seçimler, index.html#parti bağlantısı ve Sandık menüsü
 4 files changed, 71 insertions(+), 3 deletions(-)
```
(CRLF/LF uyarıları git'in satır sonu normalizasyonundan; hata değil.)

## 4. Brief'ten sapmalar ve nedenleri

Sapma yok. Kod blokları (`kunyeSecimleriHTML`, `index.html` değişiklikleri, testler, menü
satırı, commit mesajı) brief'ten birebir kopyalandı.

## 5. Endişeler

Yok. `veri/sandik.js` hâlâ boş olduğu için künyedeki "Girdiği genel/yerel seçimler"
bölümleri tarayıcıda gerçek partilerde görünmüyor (`kunyeSecimleriHTML` boş dize
döndürüyor) — bu, brief'in belirttiği gibi beklenen durum ve denetimi Görev 9'a bırakılmış.

## Kullanıcıya sunulacaklar

Yok — onay gerektiren bir adım yoktu.
