# Görev 2 — brief (kaynak: docs/superpowers/plans/2026-09-11-sandik.md)

## Global Constraints

- Site `file://` ile çift tıklanıp açıldığında çalışmalı; `fetch`, ES modülü, harici istek YOK.
- Yükleme sırası: `veri/partiler.js` → `veri/sandik.js` → `ortak.js` → `sandik-mantik.js` → sayfa kodu (`sandik.html`'de `sandik-sayfa.js`, `index.html`'de satır içi betik).
- Global ad alanları: `window.PARTILER`, `window.SANDIK`, `window.Ortak`, `window.SandikMantik`.
- Arayüz dili Türkçe; kod adlandırması mevcut koddaki gibi Türkçe (`ac`, `kapat`, `ciz`, `bul`…).
- **Bilgi uydurulmaz:** hiçbir seçim/hükümet sayısı hafızadan yazılmaz. Doğrulanamayan sayı `null` → ekranda `—`.
- Ham sayı tutulur, yüzde ekranda hesaplanır; yalnızca yüzde yayımlanmışsa `oyYuzde` / `katilimYuzde` yedeği.
- Kimlik biçimi `YYYY-AA-tür`; türler: `genel` · `yerel` · `referandum` · `cb-halk` · `cb-tbmm` · `ara`.
- Mobil kırılım `max-width:760px` (mevcut soyağacıyla aynı).
- Soyağacında kart sayısı 66, bağ sayısı 73 — kullanıcı onaylı parti eklemeleri dışında değişmez.
- Yerel ara seçimler kapsam dışı (2019 İstanbul yenilemesi hariç).
- Yerel seçimler bulunabilen en eski belediye seçiminden başlar; 1963 öncesi kayıtlarda bulunamayan her alan `null`, ülke geneli oy yoksa `sonuc: []`.
- Her görev bir commit ile biter; commit mesajı Türkçe, sonunda `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.

### Görev 2: Soyağacı verisini `veri/partiler.js`'e taşımak

**Files:**
- Create: `veri/partiler.js`, `araclar/yukle.js`, `araclar/dogrula.js`, `araclar/test/partiler.test.js`, `araclar/denetim/soyagaci.js`
- Modify: `index.html:294-574` (veri blokları çıkar), `index.html:625-629` (kesinti metni)

**Interfaces:**
- Consumes: Görev 1'in `## Doğrulanan iddialar` bölümü (28 Şubat metni ve `yonetim` tarihleri).
- Produces:
  - `window.PARTILER = {AILE, BILGI, DONEMLER, N, E, ROZET}` — alan adları ve biçimleri `index.html`'deki mevcut sabitlerle birebir aynı; tek fark `DONEMLER[i].kesinti` artık `null` ya da `{tarih:"YYYY-AA-GG", metin:string, yonetim?:{bas:"YYYY-AA-GG", bit:"YYYY-AA-GG"}}`.
  - `require("./yukle").yukle(dosyalar: string[]) → window` — Node'da veri dosyalarını çalıştırır.
  - `require("./dogrula").dogrulaPartiler(P) → {hatalar:string[], uyarilar:string[]}`.
  - `araclar/denetim/soyagaci.js` — tarayıcıda değerlendirilince JSON nesnesi döndüren tek bir ifade.

- [ ] **Adım 1: Gerileme denetimini yaz ve bugünkü durumu kaydet**

`araclar/denetim/soyagaci.js`:

```js
// Soyağacı gerileme denetimi. Claude Browser'da javascript_tool ile değerlendirilir
// (1400px genişlik). Beklenen değerler plan Görev 2 / Adım 1'de.
(() => {
  const r = {};
  r.kart = document.querySelectorAll('.kart').length;
  r.kenar = document.querySelectorAll('#edges path').length;
  r.bant = document.querySelectorAll('.banner:not(.kesinti)').length;
  r.kesinti = [...document.querySelectorAll('.banner.kesinti .ad')].map(x => x.textContent);
  const b = document.querySelector('.banner:not(.kesinti)');
  const s = document.getElementById(b.getAttribute('aria-controls'));
  b.click();
  r.bantKapaninca = { yukseklik: s.offsetHeight, kenar: document.querySelectorAll('#edges path').length };
  b.click();
  const k = document.querySelector('[data-id="akp"]');
  k.focus(); k.click();
  const p = document.getElementById('panel');
  r.panelAcik = { acik: p.classList.contains('acik'), inert: p.hasAttribute('inert'), odak: document.activeElement.id };
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  r.panelKapali = { inert: p.hasAttribute('inert'), odakGeri: document.activeElement === k };
  k.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
  r.vurgu = document.querySelectorAll('#edges path.aktif').length;
  k.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
  return r;
})()
```

Önizlemeyi başlat (`preview_start {name:"soyagaci"}`), `resize_window {width:1400,height:900}`, `http://localhost:8123/index.html`'e git ve dosyanın içeriğini `javascript_tool` ile değerlendir.

Beklenen (bugünkü durum):
`kart:66, kenar:73, bant:8, kesinti:` 4 metin, `bantKapaninca:{yukseklik:0, kenar:63}`, `panelAcik:{acik:true, inert:false, odak:"kapat"}`, `panelKapali:{inert:true, odakGeri:true}`, `vurgu:4`.
Ayrıca `read_console_messages {onlyErrors:true}` → boş. Çıktıyı sonraki karşılaştırma için not et.

- [ ] **Adım 2: Başarısız testi yaz**

`araclar/yukle.js`:

```js
// Tarayıcı için yazılmış dosyaları (window.X = …) Node'da çalıştırır.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const KOK = path.join(__dirname, "..");

function yukle(dosyalar) {
  const window = {};
  const ctx = vm.createContext({ window, console });
  for (const d of dosyalar) {
    const tam = path.join(KOK, d);
    if (!fs.existsSync(tam)) continue;
    vm.runInContext(fs.readFileSync(tam, "utf8"), ctx, { filename: d });
  }
  return window;
}

module.exports = { yukle, KOK };
```

`araclar/test/partiler.test.js`:

```js
const test = require("node:test");
const assert = require("node:assert/strict");
const { yukle } = require("../yukle");
const { dogrulaPartiler } = require("../dogrula");

const P = yukle(["veri/partiler.js"]).PARTILER;

test("PARTILER yüklenir ve soyağacının sayıları korunur", () => {
  assert.ok(P, "window.PARTILER tanımlı değil");
  assert.equal(P.N.length, 66);
  assert.equal(P.E.length, 73);
  assert.equal(P.AILE.length, 7);
  assert.equal(P.DONEMLER.length, 8);
  assert.deepEqual(Object.keys(P.ROZET).sort(), ["faal", "kapandi", "kapatildi", "katildi"]);
});

test("kesintiler null ya da {tarih, metin} nesnesi", () => {
  for (const d of P.DONEMLER) {
    if (d.kesinti === null) continue;
    assert.match(d.kesinti.tarih, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(typeof d.kesinti.metin, "string");
    if (d.kesinti.yonetim) {
      assert.match(d.kesinti.yonetim.bas, /^\d{4}-\d{2}-\d{2}$/);
      assert.match(d.kesinti.yonetim.bit, /^\d{4}-\d{2}-\d{2}$/);
      assert.ok(d.kesinti.yonetim.bas <= d.kesinti.yonetim.bit);
    }
  }
});

test("28 Şubat kesintisi Refah Partisi'nin kapatılmasını 1998'e koyar", () => {
  const k = P.DONEMLER.map(d => d.kesinti).find(k => k && k.tarih === "1997-02-28");
  assert.ok(k, "1997-02-28 tarihli kesinti yok");
  assert.match(k.metin, /Refah Partisi/);
  assert.match(k.metin, /1998/);
});

test("gerçek veri soyağacı denetiminden hatasız geçer", () => {
  assert.deepEqual(dogrulaPartiler(P).hatalar, []);
});

test("denetim bozuk veriyi yakalar", () => {
  const bozuk = structuredClone(P);
  bozuk.N.push({ ...bozuk.N[0] });                        // yinelenen id
  bozuk.E.push(["yok1", "yok2", "devam"]);                // bilinmeyen uç
  bozuk.E.push([bozuk.N[0].id, bozuk.N[1].id, "tuhaf"]);  // bilinmeyen tür
  delete bozuk.BILGI[bozuk.N[2].id];                      // künyesiz parti
  bozuk.N[3] = { ...bozuk.N[3], durum: "faal", yil: "1950 – 1960" }; // faal ama bitmiş
  const h = dogrulaPartiler(bozuk).hatalar.join("\n");
  assert.match(h, /yinelenen parti id/);
  assert.match(h, /bilinmeyen uç/);
  assert.match(h, /bilinmeyen bağ türü/);
  assert.match(h, /BILGI kaydı yok/);
  assert.match(h, /faal ama bitiş yılı var/);
});
```

- [ ] **Adım 3: Testin başarısız olduğunu gör**

Run: `node --test "araclar/test/*.test.js"`
Expected: FAIL — `Cannot find module '../dogrula'`.

- [ ] **Adım 4: `araclar/dogrula.js`'i yaz**

```js
#!/usr/bin/env node
// Veri denetimi: node araclar/dogrula.js  (hata varsa çıkış kodu 1)
const { yukle } = require("./yukle");

const BAG_TURLERI = ["devam", "bolunme", "katilma"];

function dogrulaPartiler(P) {
  const hatalar = [], uyarilar = [];
  const idler = new Set();
  for (const n of P.N) {
    if (idler.has(n.id)) hatalar.push("yinelenen parti id: " + n.id);
    idler.add(n.id);
    if (!P.BILGI[n.id]) hatalar.push("BILGI kaydı yok: " + n.id);
    if (!P.ROZET[n.durum]) hatalar.push("bilinmeyen durum: " + n.id + " → " + n.durum);
    if (n.aile < 0 || n.aile >= P.AILE.length) hatalar.push("geçersiz aile: " + n.id);
    if (n.donem < 0 || n.donem >= P.DONEMLER.length) hatalar.push("geçersiz dönem: " + n.id);
    if (n.durum === "faal" && /–\s*\d{4}/.test(n.yil)) hatalar.push("faal ama bitiş yılı var: " + n.id);
  }
  for (const k of Object.keys(P.BILGI)) if (!idler.has(k)) hatalar.push("parti olmayan BILGI kaydı: " + k);
  const kenarlar = new Set();
  for (const e of P.E) {
    if (!idler.has(e[0]) || !idler.has(e[1])) hatalar.push("bilinmeyen uç: " + e.join(" > "));
    if (!BAG_TURLERI.includes(e[2])) hatalar.push("bilinmeyen bağ türü: " + e.join(" > "));
    const a = e.join(">");
    if (kenarlar.has(a)) hatalar.push("yinelenen bağ: " + a);
    kenarlar.add(a);
  }
  return { hatalar, uyarilar };
}

function dogrula(P, S) {
  return dogrulaPartiler(P);   // Görev 5 Sandık kurallarını ekler
}

module.exports = { dogrula, dogrulaPartiler };

if (require.main === module) {
  const w = yukle(["veri/partiler.js", "veri/sandik.js"]);
  const { hatalar, uyarilar } = dogrula(w.PARTILER, w.SANDIK);
  uyarilar.forEach(u => console.log("uyarı: " + u));
  hatalar.forEach(h => console.log("HATA:  " + h));
  console.log(hatalar.length ? hatalar.length + " hata" : "hata yok");
  process.exit(hatalar.length ? 1 : 0);
}
```

Run: `node --test "araclar/test/*.test.js"`
Expected: FAIL — `window.PARTILER tanımlı değil` (veri henüz taşınmadı).

- [ ] **Adım 5: Veriyi betikle taşı (elle kopyalama yok)**

```bash
# S: AILE'nin ilk satırı. B: ROZET'in kapanışı = "const GUNCEL_YIL" satırından 2 önceki satır
# (arada bir boş satır var).
S=$(grep -n "  const AILE = \[" index.html | cut -d: -f1)
B=$(( $(grep -n "const GUNCEL_YIL" index.html | cut -d: -f1) - 2 ))
G=$(mktemp)
sed -n "${S},${B}p" index.html > "$G"
head -1 "$G"; tail -1 "$G"
```

Expected: ilk satır `  const AILE = [`, son satır `  };` (ROZET kapanışı). Bugünkü dosyada `S=296`, `B=574`. Değilse `grep -n` çıktısına bakarak düzelt.

Sonra `veri/partiler.js`'i kur:

```bash
mkdir -p veri
{
  echo "/* Türkiye Siyasi Partileri Soyağacı — ortak veri."
  echo "   index.html ve sandik.html tarafından paylaşılır; tek kaynak burasıdır. */"
  echo "window.PARTILER = (function(){"
  cat "$G"
  echo "  return {AILE, BILGI, DONEMLER, N, E, ROZET};"
  echo "})();"
} > veri/partiler.js
sed -i "${S},${B}d" index.html
rm -f "$G"
```

`index.html`'de silinen bloğun yerine (IIFE'nin ilk satırı `(function(){`'in hemen altı) şunu ekle:

```js
  const {AILE, BILGI, DONEMLER, N, E, ROZET} = window.PARTILER;
```

ve `<script>` etiketinin (IIFE'yi açan) hemen üstüne:

```html
<script src="veri/partiler.js"></script>
```

- [ ] **Adım 6: Kesintileri nesneye çevir**

`veri/partiler.js`'teki `DONEMLER` satırlarında `kesinti:"…"` değerlerini şu biçime çevir (`bit` tarihleri ve 28 Şubat'taki RP tarihi Görev 1'deki doğrulanmış değerlerdir; doğrulanamadıysa `yonetim` alanını hiç yazma ve 28 Şubat metnini değiştirme — o zaman Adım 2'deki 28 Şubat testi kullanıcıya bildirilerek kaldırılır):

```js
{yil:"1946 – 1960", ad:"Çok partili hayata geçiş",
 kesinti:{tarih:"1960-05-27", metin:"27 Mayıs 1960 — DP kapatıldı, liderleri idam edildi",
          yonetim:{bas:"1960-05-27", bit:"<Görev 1'deki doğrulanmış tarih>"}}},
{yil:"1961 – 1971", ad:"1961 Anayasası ve yeni kurulan partiler",
 kesinti:{tarih:"1971-03-12", metin:"12 Mart 1971 — TİP ve MNP kapatıldı"}},
{yil:"1972 – 1980", ad:"Koalisyonlar ve Milliyetçi Cephe hükümetleri",
 kesinti:{tarih:"1980-09-12", metin:"12 Eylül 1980 — parti faaliyetleri yasaklandı; 16 Ekim 1981'de 1533 sayılı kanunla hepsi feshedildi",
          yonetim:{bas:"1980-09-12", bit:"<Görev 1'deki doğrulanmış tarih>"}}},
{yil:"1991 – 2000", ad:"Koalisyonlar ve kapatma davaları",
 kesinti:{tarih:"1997-02-28", metin:"28 Şubat 1997 — MGK kararları; Refah Partisi <Görev 1'deki doğrulanmış tarih>'de kapatıldı"}},
```

(Açılı parantezli üç değer, bu adım yürütülürken Görev 1'in defterinden okunup yazılır; commit edilen dosyada açılı parantez kalmaz — Adım 8'deki `grep` bunu denetler.)

`index.html`'deki kesinti çizimini güncelle:

```js
    if(d.kesinti){
      const k=document.createElement("div"); k.className="banner kesinti";
      k.innerHTML='<span class="yil">⚡</span><span class="ad">'+d.kesinti.metin+'</span>';
      rows.appendChild(k);
    }
```

- [ ] **Adım 7: Testleri geçir**

Run: `node --test "araclar/test/*.test.js" && node araclar/dogrula.js`
Expected: 5 test PASS; `hata yok`.

- [ ] **Adım 8: Gerileme denetimi**

Run: `grep -n "<Görev" veri/partiler.js || echo temiz`
Expected: `temiz`.

Tarayıcıda `http://localhost:8123/index.html`'i yeniden yükle, `araclar/denetim/soyagaci.js`'i değerlendir. Beklenen: Adım 1'deki çıktıyla birebir aynı; tek fark `kesinti[3]` artık yeni 28 Şubat metni. Konsol hatası yok. Ayrıca `file:///…/index.html` ile aç: kart sayısı 66 (dosya protokolünde `<script src>` çalışıyor mu?).

- [ ] **Adım 9: Commit**

```bash
git add veri/partiler.js index.html araclar/yukle.js araclar/dogrula.js araclar/test/partiler.test.js araclar/denetim/soyagaci.js
git commit -F - <<'MSG'
Soyağacı verisini veri/partiler.js'e taşı, veri denetimi ekle

Kesinti bantları tarih taşıyan nesnelere dönüştü; 28 Şubat metni
doğrulanmış kapatma tarihiyle düzeltildi. node araclar/dogrula.js ve
node --test "araclar/test/*.test.js" eklendi.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```

---

