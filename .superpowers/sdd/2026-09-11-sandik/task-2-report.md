# Görev 2 — rapor

## 1. Yapılanlar (brief adım numaralarıyla)

- **Adım 1 — Gerileme denetimini yaz ve bugünkü durumu kaydet.** `araclar/denetim/soyagaci.js` brief'teki
  kodla birebir oluşturuldu. `preview_start {name:"soyagaci"}` ile sunucu başlatıldı (zaten çalışmıyordu),
  `resize_window {width:1400,height:900}`, `http://localhost:8123/index.html`'e gidildi, denetim betiği
  `javascript_tool` ile **index.html'e hiçbir değişiklik yapılmadan önce** değerlendirildi. Sonuç beklenen
  değerlerle birebir eşleşti (bkz. §3). `read_console_messages {onlyErrors:true}` boş döndü.
- **Adım 2 — Başarısız testi yaz.** `araclar/yukle.js` ve `araclar/test/partiler.test.js` brief'teki
  kodla birebir oluşturuldu.
- **Adım 3 — Testin başarısız olduğunu gör.** `node --test "araclar/test/*.test.js"` çalıştırıldı;
  beklendiği gibi `Cannot find module '../dogrula'` ile FAIL verdi.
- **Adım 4 — `araclar/dogrula.js`'i yaz.** Brief'teki kodla birebir oluşturuldu. Testler yeniden
  çalıştırıldı; beklendiği gibi 5 test de `window.PARTILER tanımlı değil` / ilişkili hatalarla FAIL verdi
  (veri henüz taşınmamıştı).
- **Adım 5 — Veriyi betikle taşı.** `S=296`, `B=574` (brief'in "bugünkü dosyada" beklentisiyle birebir
  aynı). Silmeden önce ilk/son satırlar kontrol edildi: ilk satır `  const AILE = [`, son satır `  };`
  (279 satır). Brief'teki bash bloğu birebir çalıştırılarak `veri/partiler.js` kuruldu ve `index.html`'den
  296–574 satırları silindi. `index.html`'de silinen bloğun yerine (IIFE açılışının hemen altına)
  `const {AILE, BILGI, DONEMLER, N, E, ROZET} = window.PARTILER;` eklendi; `<script>` etiketinin hemen
  üstüne `<script src="veri/partiler.js"></script>` eklendi.
- **Adım 6 — Kesintileri nesneye çevir.** `veri/partiler.js`'teki dört `kesinti:"…"` değeri nesneye
  çevrildi; `1960-05-27`/`1980-09-12` kesintilerine Görev 1'in doğrulanmış `yonetim.bit` tarihleri
  (`1961-10-14`, `1983-11-05`) eklendi; 28 Şubat metni Görev 1'in doğrulanmış tarihiyle
  `"28 Şubat 1997 — MGK kararları; Refah Partisi 16 Ocak 1998'de kapatıldı"` olarak yazıldı (üç değer de
  doğrulanmış olduğu için "doğrulanamadıysa…" dalı uygulanmadı). `index.html`'deki kesinti çizim kodu
  `d.kesinti` → `d.kesinti.metin` olacak şekilde güncellendi.
- **Adım 7 — Testleri geçir.** `node --test "araclar/test/*.test.js" && node araclar/dogrula.js`
  çalıştırıldı: 5 test PASS, `hata yok`.
- **Adım 8 — Gerileme denetimi.** `grep -n "<Görev" veri/partiler.js || echo temiz` → `temiz`. Tarayıcıda
  `http://localhost:8123/index.html` yeniden yüklendi, denetim betiği tekrar değerlendirildi: Adım 1'deki
  çıktıyla birebir aynı, tek fark `kesinti[3]`'ün yeni 28 Şubat metnini taşıması (bkz. §3). Konsol hatası
  yok. `file://` kontrolü, brief'in belirsizlik çözümüne göre ikame edildi (bkz. "file:// ikamesi").
- **Adım 9 — Commit.** Yalnızca brief'in listelediği 6 dosya `git add` edildi ve brief'teki mesajla
  commit edildi: `dc0764b`.

## 2. Değişen/oluşan dosyalar

- Yeni: `veri/partiler.js`, `araclar/yukle.js`, `araclar/dogrula.js`, `araclar/test/partiler.test.js`,
  `araclar/denetim/soyagaci.js`
- Değişti: `index.html` (294–297. satırlar arası script-tag + destructuring eklendi, 296–574 arası eski
  veri bloğu silindi, kesinti çizim satırı `d.kesinti` → `d.kesinti.metin`)

## 3. Çalıştırılan komutlar ve çıktıları

### Adım 1 — Tarayıcı denetimi (index.html değişmeden önce)

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
    "28 Şubat 1997 — Refah Partisi kapatıldı"
  ],
  "panelAcik": { "acik": true, "inert": false, "odak": "kapat" },
  "panelKapali": { "inert": true, "odakGeri": true },
  "vurgu": 4
}
```

Beklenenle birebir eşleşti. `read_console_messages {onlyErrors:true}` → boş.

### Adım 3 — testin başarısız olduğunu gör

`node --test "araclar/test/*.test.js"` → `Cannot find module '../dogrula'`, 1 fail (beklenen).

### Adım 4 sonrası — ikinci FAIL

`node --test "araclar/test/*.test.js"` → 5 test, hepsi FAIL, ilk hata:
`AssertionError: window.PARTILER tanımlı değil` (beklenen).

### Adım 5 — S/B kontrolü

```
S=296  B=574
head -1: "  const AILE = ["
tail -1: "  };"
(279 satır)
```

Bugünkü dosyada beklenen `S=296, B=574` ile birebir aynı.

### Adım 7 — testler ve denetim

`node --test "araclar/test/*.test.js"`:
```
✔ PARTILER yüklenir ve soyağacının sayıları korunur
✔ kesintiler null ya da {tarih, metin} nesnesi
✔ 28 Şubat kesintisi Refah Partisi'nin kapatılmasını 1998'e koyar
✔ gerçek veri soyağacı denetiminden hatasız geçer
✔ denetim bozuk veriyi yakalar
tests 5, pass 5, fail 0
```

`node araclar/dogrula.js`:
```
hata yok
```
(exit 0; `veri/sandik.js` henüz yok, `yukle()` bunu sessizce atlıyor — brief'te beklenen davranış.)

### Adım 8 — placeholder / gerileme / file:// ikamesi

`grep -n "<Görev" veri/partiler.js || echo temiz` → `temiz`

Tarayıcı denetimi (index.html değiştikten sonra, yeniden yükleme sonrası):

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

Adım 1'deki çıktıyla birebir aynı; tek fark `kesinti[3]` (beklenen). `read_console_messages {onlyErrors:true}` → boş.

**file:// ikamesi** (Claude Browser panelinin `file://` adreslerini betik çalıştırmadan statik görüntü
olarak açması nedeniyle brief'in belirsizlik çözümüne göre yapılan ikame kontrolü):

```
$ grep -n "fetch(" index.html || echo yok
yok
$ grep -n 'type="module"' index.html || echo yok
yok
$ grep -n "^import \| import \|import(" index.html || echo yok
yok
$ grep -n "<script" index.html
294:<script src="veri/partiler.js"></script>
295:<script>
```

`fetch(`, `type="module"` ve `import` kullanılmıyor; `veri/partiler.js` göreli klasik
`<script src="veri/partiler.js">` ile ve satır içi betikten (295. satır) önce (294. satır) yükleniyor —
dosya `file://` ile çift tıklanıp açıldığında da bu kayıt sırası korunacak.

### Adım 9 — commit

```
$ git add veri/partiler.js index.html araclar/yukle.js araclar/dogrula.js araclar/test/partiler.test.js araclar/denetim/soyagaci.js
$ git commit -F - <<'MSG' ...
[sandik-asama1 dc0764b] Soyağacı verisini veri/partiler.js'e taşı, veri denetimi ekle
 6 files changed, 434 insertions(+), 280 deletions(-)
$ git status
nothing to commit, working tree clean
```

## 4. Brief'ten sapmalar ve nedenleri

Sapma yok. Görev 1'in defterinde üç değer de (RP kapatma tarihi, 1960 ve 1980 `yonetim.bit` tarihleri)
doğrulanmış durumda olduğu için brief'in "doğrulanamadıysa…" dalı hiç devreye girmedi; `yonetim` alanları
yazıldı ve 28 Şubat testi (Adım 2) olduğu gibi kaldı.

## 5. Endişeler

Yok. Tüm adımlar beklenen çıktılarla birebir eşleşti; preview sunucusu (`soyagaci`, port 8123) diğer
görevler kullanabilsin diye durdurulmadı; tarayıcı viewport'u iş bitince `preset:"desktop"`e sıfırlandı.

## 6. Kullanıcıya sunulacaklar

Yok — brief'te kullanıcıya sunum gerektiren bir adım yoktu.
