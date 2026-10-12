# Görev 3 — rapor

## 1. Yapılanlar (brief adımlarıyla)

- **Adım 1 — Başarısız testi yaz.** `araclar/test/ortak.test.js` brief'teki içerikle birebir oluşturuldu.
- **Adım 2 — Başarısız olduğunu gör.** `node --test "araclar/test/*.test.js"` → `ortak.test.js` `Cannot find module '../../ortak'` ile FAIL; Görev 2'nin 5 testi PASS. Beklenenle eşleşti.
- **Adım 3 — `ortak.js`'i yaz.** Brief'teki kod birebir `ortak.js` olarak oluşturuldu (UMD sarmalayıcı; `tarihYaz`, `yuzde`, `yuzdeYaz`, `sayiYaz`, `hashOku`, `bantDurum`, `bantKur`, `panelKur`).
- **Adım 4 — Testleri geçir.** `node --test "araclar/test/*.test.js"` → 9/9 PASS (Görev 2'nin 5'i + bu görevin 4'ü).
- **Adım 5 — Bileşen stillerini `ortak.css`'e taşı.** Kesmeden önce tablodaki her aralığın ilk/son satırı doğrulandı (aşağıya bakınız — tümü tabloyla birebir eşleşti). Aralıklar **sondan başa** kesildi: 212–218 → 153–209 → 137–139 → 119–126 → 95–102 → 92 → 70–86. Her kesim ayrı bir `Edit` çağrısıyla yapıldı, aradan hiçbir satır numarası kaymadı (her kesim kendinden önceki satırları etkilemedi). Kesilen içerik `ortak.css`'e, `@media (prefers-reduced-motion:reduce)` satırının hemen üstüne, brief'teki başlık yorumuyla ve orijinal iç-yorumlar (`/* ---------- açıklama paneli ---------- */`) korunarak yapıştırıldı. Mobil `#panel` / `#panel.acik` kuralları dosyanın sonuna, brief'teki sarmalayıcıyla eklendi.
- **Adım 6 — `index.html`'i `Ortak`'a devret.**
  1. `<script src="ortak.js"></script>`, `veri/partiler.js`'in altına, satır içi betikten önce eklendi.
  2. Dönem bandı kurulumu (`b.tabIndex=0;` … `ackapa` dahil `keydown` dinleyicisinin sonuna kadar) `Ortak.bantKur(b, s, ciz);` ile değiştirildi (belirsizlik çözümüne göre `ciz` fonksiyon bildirimi olduğu için taşınmadı, çağrı sırası sorun olmadı).
  3. `filtreUygula` içindeki bant açma bloğu brief'teki `if(b) Ortak.bantDurum(b, s, false); else s.classList.remove("kapali");` ile değiştirildi.
  4. `let sonOdak=null;` satırı kaldırıldı; `const ETIKET=…` altına `Ortak.panelKur({panel, perde, govde, kapatDugmesi: document.getElementById("kapat"), odakSecici: ".kart"})` eklendi. `ac(id)` brief'teki gövdeyle değiştirildi (HTML bir değişkende toplanıp `Panel.ac(html, renk)`'e veriliyor). `kapat()` fonksiyonu, panelin Tab-tuzağı `keydown` dinleyicisi ve dosya sonundaki `kapat`/`perde`/`Escape` dinleyicileri silindi (artık `panelKur` içinde). `govde` tıklama dinleyicisindeki `sonOdak=hedef;` → `Panel.odakHedefi(hedef);` yapıldı.
- **Adım 7 — Gerileme denetimi.** Aşağıdaki "Çalıştırılan komutlar" bölümüne bakınız — testler ve `dogrula.js` PASS, tarayıcı denetimi Görev 2 Adım 8'deki JSON'la birebir aynı, konsol hatası yok, `grep -c "sonOdak\|function kapat" index.html` → `0`.
- **Adım 8 — Commit.** Brief'in listelediği 4 dosya (`ortak.js ortak.css index.html araclar/test/ortak.test.js`) `git add` edildi, brief'teki mesajla commit edildi: `9525c43`.

### Adım 5 — CSS aralığı doğrulaması (kesmeden önce)

| Aralık | İlk satır | Son satır | Tabloyla eşleşti mi |
|---|---|---|---|
| 70–86 | `  .banner{` | `  .banner.kesinti .ad{opacity:1;...}` | Evet |
| 92 | `  .satir.kapali{display:none}` | (tek satır) | Evet |
| 95–102 | `  .kart{` | `  }` (temel kutu) | Evet |
| 119–126 | `  .rozet{` | `  .r-katildi{color:#5C5F52}` | Evet |
| 137–139 | `  .kart{cursor:pointer}` | `  .kart:focus-visible{...}` | Evet |
| 153–209 | `  /* ---------- açıklama paneli ---------- */` | `  .p-git:hover{text-decoration-color:currentColor}` | Evet |
| 212–218 | `    #panel{` (mobil) | `    #panel.acik{transform:translateY(0)}` | Evet |

Tüm aralıklar Görev 2 sonrası dosyayla birebir eşleşti; ek doğrulama gerekmedi.

## 2. Değişen/oluşan dosyalar

- Yeni: `C:/Users/Lizer/Desktop/projects/siyasi parti/ortak.js`, `C:/Users/Lizer/Desktop/projects/siyasi parti/araclar/test/ortak.test.js`
- Değişti: `C:/Users/Lizer/Desktop/projects/siyasi parti/ortak.css` (bileşen stilleri eklendi), `C:/Users/Lizer/Desktop/projects/siyasi parti/index.html` (CSS blokları çıktı; panel/bant JS kodu `Ortak`'a devredildi)

## 3. Çalıştırılan komutlar ve çıktıları

### Adım 2 — testler (ortak.js yazılmadan önce)

```
✖ araclar\test\ortak.test.js  → Cannot find module '../../ortak'
✔ PARTILER yüklenir ve soyağacının sayıları korunur
✔ kesintiler null ya da {tarih, metin} nesnesi
✔ 28 Şubat kesintisi Refah Partisi'nin kapatılmasını 1998'e koyar
✔ gerçek veri soyağacı denetiminden hatasız geçer
✔ denetim bozuk veriyi yakalar
tests 6, pass 5, fail 1
```

### Adım 4 — testler (ortak.js yazıldıktan sonra)

```
✔ tarihYaz Türkçe ay adlarıyla yazar
✔ yuzde ve yuzdeYaz
✔ sayiYaz binlik noktayla yazar
✔ hashOku yalnızca güvenli kimlikleri kabul eder
✔ PARTILER yüklenir ve soyağacının sayıları korunur
✔ kesintiler null ya da {tarih, metin} nesnesi
✔ 28 Şubat kesintisi Refah Partisi'nin kapatılmasını 1998'e koyar
✔ gerçek veri soyağacı denetiminden hatasız geçer
✔ denetim bozuk veriyi yakalar
tests 9, pass 9, fail 0
```

### Adım 7 — Gerileme denetimi

`node --test "araclar/test/*.test.js" && node araclar/dogrula.js`:

```
tests 9, pass 9, fail 0
hata yok
```

Tarayıcı denetimi (`http://localhost:8123/index.html`, 1400×900, `araclar/denetim/soyagaci.js` değerlendirildi):

```json
{
  "bant": 8,
  "bantKapaninca": { "kenar": 63, "yukseklik": 0 },
  "kart": 66,
  "kenar": 73,
  "kesinti": [
    "27 Mayıs 1960 — DP kapatıldı, liderleri idam edildi",
    "12 Mart 1971 — TİP ve MNP kapatıldı",
    "12 Eylül 1980 — parti faaliyetleri yasaklandı; 16 Ekim 1981'de 1533 sayılı kanunla hepsi feshedildi",
    "28 Şubat 1997 — MGK kararları; Refah Partisi 16 Ocak 1998'de kapatıldı"
  ],
  "panelAcik": { "acik": true, "inert": false, "odak": "kapat" },
  "panelKapali": { "inert": true, "odakGeri": true },
  "vurgu": 4
}
```

Görev 2 Adım 8'deki çıktıyla (`task-2-report.md`) birebir aynı. `read_console_messages {onlyErrors:true}` → boş.

**Mobil kontrol** (`resize_window {preset:"mobile"}`, sayfa yeniden yüklendi, `[data-id="akp"]` karta tıklandı):

- `panel.classList.contains("acik")` → `true`.
- `getComputedStyle(panel).transform` (tıklamadan hemen sonra) → `matrix(1, 0, 0, 1, 0, 646.027)` — bu, panelin **kapalı** konumuna karşılık gelen değer (102% × 633px yükseklik ≈ 646px), 400ms beklendikten sonra bile değişmedi.
- Nedeni araştırıldı: `document.hidden` / `document.visibilityState` → `true`/`"hidden"` (bu tarayıcı panel sekmesi arka planda/odak dışı çalışıyor; brief'in "Tarayıcı paneli odakta olmayabilir" notuyla aynı durum, Chromium arka plandaki sekmelerde CSS geçişlerini ilerletmiyor). `panel.style.transition='none'` ile geçiş devre dışı bırakılıp zorla yeniden hesaplatıldığında hedef değer doğru çıktı: `matrix(1, 0, 0, 1, 0, 0)` = `translateY(0)`. Aynı doğrulama masaüstünde (1400px, gerçek genişlik) de yapıldı: geçişsiz hedef değer `matrix(1, 0, 0, 1, 0, 0)` = `translateX(0)`, yani `ortak.css`'teki hem masaüstü hem mobil `#panel.acik` kuralı doğru kaskadla eşleşiyor ve doğru değere çözümleniyor. **Sapma yok** — gözlenen "hareketsiz" değer yalnızca sekmenin arka planda olmasından kaynaklanan bir geçiş-zamanlama artefaktı, CSS kuralı doğru.
- `resize_window {preset:"desktop"}` ile geri alındı.

`grep -c "sonOdak\|function kapat" index.html` → `0` (beklenen).

`grep -n "fetch(\|import \|export " ortak.js` → boş (temiz) — `file://` uyumluluğu için harici istek/ES modülü yok.

Script sırası (`grep -n "<script" index.html`):
```
189:<script src="veri/partiler.js"></script>
190:<script src="ortak.js"></script>
191:<script>
```
`ortak.js`, `veri/partiler.js`'ten sonra ve satır içi betikten önce yükleniyor — brief'in global yükleme sırasıyla uyumlu.

### Adım 8 — Commit

```
git add ortak.js ortak.css index.html araclar/test/ortak.test.js
[sandik-asama1 9525c43] Panel, dönem bandı ve biçimleme kodunu ortak.js'e taşı
 4 files changed, 249 insertions(+), 160 deletions(-)
 create mode 100644 araclar/test/ortak.test.js
 create mode 100644 ortak.js
```

## 4. Brief'ten sapmalar ve nedenleri

Yok. Tüm adımlar brief'teki kodla ve komutlarla birebir uygulandı.

## 5. Endişeler

- Mobil/masaüstü panel geçiş testinde ilk ölçüm beklenmedik bir "kapalı" transform değeri verdi; kök neden araştırıldı ve tarayıcı panelinin arka planda (`document.hidden=true`) çalışmasından kaynaklanan bir CSS-geçiş zamanlama artefaktı olduğu doğrulandı (bkz. Adım 7, "Mobil kontrol"). `transition:none` ile zorlanan ölçüm hem mobilde (`translateY(0)`) hem masaüstünde (`translateX(0)`) doğru hedef değeri verdi — gerçek bir davranış sapması yok, yalnızca otomasyon ortamının bir yan etkisi. Kullanıcı gerçek bir tarayıcıda (sekme odakta/görünür) test ederse bu artefakt oluşmaz.
- Önizleme sunucusu durdurulmadı (görev talimatına uygun).
