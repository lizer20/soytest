# Görev 7 — rapor: Sandık sayfası

## 1. Yapılanlar

- **Adım 1 (başarısız test):** `araclar/denetim/sandik.js` ve `araclar/denetim/fikstur.html` brief'teki koddan birebir oluşturuldu. `http://localhost:8123/araclar/denetim/fikstur.html` (1400px) açıldığında konsolda 2 adet `Failed to load resource … 404` görüldü (`sandik.css`, `sandik-sayfa.js` henüz yoktu) — beklenen sonuç.
- **Adım 2 (araç çubuğu stillerini taşıma):** `index.html`'in `<style>` bloğunda `.araclar{…}`, `.yil-filtre{…}`, `.yil-filtre input[type=range]{…}`, `.yil-deger{…}`, `.temizle-buton{…}`, `.temizle-buton:hover{…}`, `.temizle-buton.aktif{…}` kesilip `ortak.css`'teki "ortak bileşenler" başlığının hemen altına (114. satırdan sonra) yapıştırıldı. `.ara-kutu` kuralları `index.html`'de bırakıldı. Mobil sorgudaki `.araclar{gap:12px}`, `.yil-filtre{width:100%}`, `.yil-filtre input[type=range]{flex:1}` satırları `index.html`'den kesilip `ortak.css`'in dosya sonundaki mevcut `@media (max-width:760px)` bloğuna eklendi (yeni blok açılmadı); `.ara-kutu{width:100%;max-width:none}` `index.html`'in kendi mobil sorgusunda kaldı.
  - Kesmeden önce `index.html` 36–58. satırlar (brief'in belirttiği aralıkla birebir örtüştü, satır numaraları doğrulandı) ve mobil sorguda 125–128. satırlar idi.
  - Kestikten sonra `index.html`'in `<style>` bloğunda yalnızca `.ara-kutu` ve `.ara-kutu::placeholder`/`:focus-visible` kaldı; mobil sorguda yalnızca `.ara-kutu{width:100%;max-width:none}` kaldı.
  - `ortak.css`'e eklenenler "ortak bileşenler" başlığından hemen sonra (115–130. satırlar) ve dosya sonundaki `@media (max-width:760px)` bloğunun içine (244–246. satırlar, mevcut `#panel` kurallarından sonra) eklendi.
- **Adım 3:** `sandik.css` brief'teki kod birebir yazıldı.
- **Adım 4:** `sandik-sayfa.js` brief'teki kod birebir yazıldı.
- **Adım 5:** `sandik.html` brief'teki kod birebir yazıldı.
- **Adım 6:** `node --test "araclar/test/*.test.js"` → 48/48 PASS. `node araclar/dogrula.js` → `hata yok`.
- **Adım 7 (tarayıcı denetimleri):** aşağıda ayrıntılı.
- **Adım 8:** Commit yapıldı — `07ea1a6`.

## 2. Değişen / oluşan dosyalar

- Yeni: `sandik.html`, `sandik-sayfa.js`, `sandik.css`, `araclar/denetim/fikstur.html`, `araclar/denetim/sandik.js`
- Değişti: `index.html` (araç çubuğu stilleri çıkarıldı), `ortak.css` (araç çubuğu stilleri girdi)

## 3. Çalıştırılan komutlar ve çıktıları

### `node --test "araclar/test/*.test.js"`
```
ℹ tests 48
ℹ suites 0
ℹ pass 48
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
```
(`araclar/test/sandik-html.test.js` içindeki testler de bu 48'in içinde — "kacis HTML karakterlerini kaçırır", "genel seçim kartı: …", vb. isimleriyle geçti.)

### `node araclar/dogrula.js`
```
hata yok
```

### Tarayıcı denetimi 1 — `http://localhost:8123/araclar/denetim/fikstur.html` (1400px), `araclar/denetim/sandik.js` değerlendirildi
```json
{
  "kart": 5,
  "serit": 2,
  "bant": 8,
  "kesinti": 4,
  "bos": 5,
  "hukumetKapali": { "gizli": true, "basili": "false" },
  "yil2003": ["serit"],
  "yilEnSag": false,
  "panel": { "acik": true, "baslik": "1999 Genel Seçimi", "hash": "#1999-04-genel" },
  "kapaninca": { "inert": true, "odakGeri": true, "hash": "" },
  "bantKapali": 0
}
```
Beklenenle birebir eşleşti. Konsolda gerçek hata yok (görülen 404'ler bu sayfanın Adım 1'deki ilk — dosyalar henüz yokken yapılan — yüklemesinden kalan eski konsol kayıtlarıydı; `read_network_requests` ile bu son yüklemenin bütün isteklerinin 200 OK olduğu doğrulandı).

### Tarayıcı denetimi 2 — `http://localhost:8123/araclar/denetim/fikstur.html#2002-11-genel`
```json
{ "acik": true, "kisa": "2002 Genel Seçimi" }
```
Beklenenle eşleşti.

### Tarayıcı denetimi 3 — mobil (375×812)
`getComputedStyle(document.querySelector('.s-satir')).gridTemplateColumns` → `"347px"` (tek değer, tek sütun). Ekran görüntüsü alındı, tür düğmeleri, yıl kaydırıcı ve dönem bantları tek sütunda düzgün göründü.

### Tarayıcı denetimi 4 — `http://localhost:8123/sandik.html` (gerçek, boş veri)
```json
{ "bant": 8, "kesinti": 4, "bos": 8 }
```
Beklenenle eşleşti. Konsolda gerçek hata yok (aynı şekilde `read_network_requests` ile bu sayfanın bütün isteklerinin 200 OK olduğu doğrulandı).

**`file://` ikamesi** (panel `file://` sayfalarında betik çalıştırmadığından):
- `sandik.html`'deki betik sırası (grep ile doğrulandı):
  ```
  59:<script src="veri/partiler.js"></script>
  60:<script src="veri/sandik.js"></script>
  61:<script src="ortak.js"></script>
  62:<script src="sandik-mantik.js"></script>
  63:<script src="sandik-sayfa.js"></script>
  ```
  Brief'teki sırayla birebir aynı; hepsi göreli klasik `<script src>` (ES modülü yok).
- `sandik-sayfa.js` içinde `grep -n "fetch(\|import \|export "` → eşleşme yok.

### Tarayıcı denetimi 5 — `http://localhost:8123/index.html`, `araclar/denetim/soyagaci.js` çıktısı
```json
{
  "kart": 66,
  "kenar": 73,
  "bant": 8,
  "kesinti": [
    "27 Mayıs 1960 — DP kapatıldı, liderleri idam edildi",
    "12 Mart 1971 — TİP ve MNP kapatıldı",
    "12 Eylül 1980 — parti faaliyetleri yasaklandı; 16 Ekim 1981'de 1533 sayılı kanunla hepsi feshedildi",
    "28 Şubat 1997 — MGK kararları; Refah Partisi 16 Ocak 1998'de kapatıldı"
  ],
  "bantKapaninca": { "yukseklik": 0, "kenar": 63 },
  "panelAcik": { "acik": true, "inert": false, "odak": "kapat" },
  "panelKapali": { "inert": true, "odakGeri": true },
  "vurgu": 4
}
```
Görev 3'teki (kullanıcı mesajında verilen) beklenen değerlerle birebir eşleşti — araç çubuğu stillerinin taşınması soyağacı sayfasını bozmadı. `read_network_requests` ile `index.html`'in yüklediği tüm kaynakların (`ortak.css`, `veri/partiler.js`, `ortak.js`) 200 OK döndüğü doğrulandı.

## 4. Brief'ten sapmalar

Yok. Bütün dosyalar brief'teki kodla birebir yazıldı; Adım 2'deki taşıma brief'in tarif ettiği kural setiyle (satır numarası yerine içerikle) doğrulandı ve beklenen aralıklarla (36–58, 125–128) örtüştü.

## 5. Endişeler

- Tarayıcı paneli arka planda çalıştığından `read_console_messages` sekmenin tüm ömrü boyunca birikmiş hata kayıtlarını (Adım 1'deki kasıtlı 404'ler dahil) gösteriyor; her denetimde bunun yerine `read_network_requests` ile ilgili son sayfa yüklemesinin isteklerini ayrıca kontrol ettim — hepsi 200 OK. Gerçek/yeni bir konsol hatası gözlenmedi.
- Önizleme sunucusu talimata uygun olarak durdurulmadı (paylaşımlı, başka görevler kullanabilir).

## Kullanıcıya sunulacaklar

Yok.
