# Türkiye Siyasi Partileri Soyağacı

Derlemesiz, bağımlılıksız statik bir site: **https://emrebiltekin.me/soyagaci/**

- **Soyağacı** (`index.html`) — 1923'ten bugüne partilerin kuruluş, bölünme, katılma ve
  kapatılma çizgileri; dönem bantları, kesintiler; parti pencerelerinde kurucular, genel başkanlar,
  girdiği seçimler ve haritada birinci çıktığı iller.
- **Sandık** (`sandik.html`) — genel ve yerel seçimler, referandumlar, cumhurbaşkanlığı seçimleri,
  ara seçimler ve hükümetler; dönem bantlarında yıl yıl zaman çizelgesi, seçim pencerelerinde meclis
  çizimi, sonuç tablosu ve il haritası.
- **Harita** (`harita.html`) — genel ve yerel seçimlerde il il kazanan parti, referandumlarda illerin
  evet/hayır oranı.
- **Kaynakça & metodoloji** (`kaynakca.html`) — ölçüler, kurallar ve kaynaklar.

## Temel ilke: bilgi uydurulmaz

Hiçbir sayı, tarih, isim ya da nitel bilgi hafızadan yazılmaz. Her değer **bir resmî kaynak**
(YSK, TÜİK, TBMM, Resmî Gazete, AYM, tccb.gov.tr) **ve ondan bağımsız bir ikinci kaynakla**
doğrulanır. Vikipedi hiçbir zaman kaynak sayılmaz; gazete ve ajans arşivleri yalnızca ikinci
kaynak olabilir. İki kaynak arasındaki fark %0,5'i geçerse değer yazılmaz. Doğrulanamayan değer
veride `null` kalır ve **sitede gösterilmez**: tablo hücresi boş kalır, hiçbir değeri bilinmeyen
satır ya da sütun çizilmez, ayrıntılı sonucu bulunamayan seçim kart yerine tek satır olur.

Her değerin kaynağı `araclar/kaynak-defteri.md` dosyasında, uyuşmazlıklar ve boş bırakma
gerekçeleriyle birlikte kayıtlıdır.

## Çalıştırma

Sunucu gerekmez; `index.html` dosyasına çift tıklamak yeterlidir (`file://` uyumlu: `fetch` yok,
ES modülü yok, harici istek yok; sonradan gereken veri dosyaları `<script>` ile yüklenir).
Yerel sunucuyla bakmak için:

```bash
npx -y http-server . -p 8123 -c-1
```

## Denetimler

```bash
node --test "araclar/test/*.test.js"
```

```bash
node araclar/dogrula.js
```

```bash
NODE_PATH=$(npm root -g) node araclar/denetim/site.js
```

1. **Birim testleri** (mantık, biçimleme, HTML üreticileri, harita, denetleyici, toplayıcı).
   Tırnaklar Node 24'te zorunludur.
2. **Veri denetimi**: kimlik ve tarih biçimi, sıra, sandalye toplamlarının meclis sayısına eşitliği,
   bilinmeyen parti referansları, hükümet zincirindeki boşluk ve çakışmalar, genel başkan listeleri.
3. **Site denetimi** (Playwright gerekir; Chromium yolu `PW_CHROMIUM` ile verilebilir): dört sayfa
   masaüstü ve telefon genişliğinde açılır; konsol hataları, Sandık'ın bütün kayıt pencereleri,
   bütün parti pencereleri ve bütün harita tablolarında değer yerine yazılmış "—"/"?", sayfalardaki
   ve pencerelerdeki iç bağlantılar denetlenir. `EKRAN=klasör` verilirse ekran görüntüleri alınır.

Üçü de her gönderimde GitHub Actions'ta çalışır (`.github/workflows/denetim.yml`).

## Dosya düzeni

| Yol | İş |
|---|---|
| `index.html`, `sandik.html`, `harita.html`, `kaynakca.html` | Sayfalar |
| `ortak.js`, `ortak.css` | Ortak bileşenler: panel, dönem bandı, biçimleme, sonradan yükleme; gömülü yazı tipleri |
| `sandik-mantik.js`, `sandik-sayfa.js`, `sandik.css` | Sandık bölümünün mantığı ve görünümü |
| `harita-mantik.js`, `harita-sayfa.js`, `harita.css` | Harita sayfası ve pencerelerdeki küçük harita |
| `veri/partiler.js` | Soyağacı verisi (`window.PARTILER`) |
| `veri/sandik.js` | Seçim ve hükümet verisi (`window.SANDIK`) |
| `veri/genel-baskanlar.js` | Partilerin genel başkanları (`window.GENEL_BASKANLAR`) |
| `veri/iller.js`, `veri/il-sonuclari.js` | İl sınırları (Natural Earth, kamu malı) ve il il sonuçlar |
| `paylasim/` | Paylaşım görselleri ve site simgesi (`araclar/kapak-uret.js` ile üretilir) |
| `araclar/kaynak-defteri.md` | Kaynak defteri — her değerin kaynağı ve gerekçesi |
| `araclar/dogrula.js`, `araclar/topla.js`, `araclar/yukle.js` | Denetleyici, il toplayıcı, Node yükleyicisi |
| `araclar/denetim/` | Tarayıcıda site denetimi (`site.js`) ve sahte veriyle Sandık sınaması |
| `araclar/font-incelt.py` | `ortak.css`'teki gömülü yazı tiplerini inceltme betiği |
| `araclar/eski-adres/` | Eski adresi (`/turkiye_siyasi_partiler_soyagaci/`) yeni adrese yönlendiren sayfalar ve kurulum notu |
| `araclar/test/` | Birim testleri (`fikstur.js` sahte veridir, siteye girmez) |
| `docs/superpowers/` | Spesifikasyon ve uygulama planı |
| `docs/DEVIR-NOTU.md` | İşin bugüne kadarki durumu, kullanıcı kararları ve açık işler |
| `docs/GOREV-*.md` | Tek tek görev turlarının kaydı (istek, ilerleme, değişiklik listesi) |

## Durum

Veri 1923'ten 2024 yerel seçimlerine ve bugünkü hükümete kadar kaynaklarıyla girilmiştir.
Yapılan işler ve kullanıcı kararları `docs/DEVIR-NOTU.md` dosyasında, son görev turları
`docs/GOREV-*.md` dosyalarındadır.
