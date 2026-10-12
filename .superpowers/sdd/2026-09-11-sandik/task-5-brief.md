# Görev 5 — brief (kaynak: docs/superpowers/plans/2026-09-11-sandik.md)

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

### Görev 5: Sandık veri denetimi ve il tablosu toplayıcısı

**Files:**
- Modify: `araclar/dogrula.js`
- Create: `araclar/topla.js`, `araclar/test/dogrula.test.js`, `araclar/test/topla.test.js`

**Interfaces:**
- Consumes: `SandikMantik.olustur(P, O).donemBul` / `.kronoloji` (Görev 4), `araclar/test/fikstur.js` (Görev 4).
- Produces:
  - `require("./dogrula").dogrulaSandik(P, S) → {hatalar: string[], uyarilar: string[]}`; `dogrula(P, S)` artık iki denetimi birleştirir.
  - `require("./topla").sayiOku(metin: string) → number` — `"1.234.567"` → `1234567`; sayı değilse hata fırlatır.
  - `require("./topla").topla(satirlar: string[][]) → number[]` — her satırın 2. sütundan itibaren sayılarını sütun sütun toplar.
  - CLI: `node araclar/topla.js <dosya.tsv>` → `{"satir": n, "toplamlar": [...]}` (JSON).

- [ ] **Adım 1: Başarısız testleri yaz**

`araclar/test/dogrula.test.js`:

```js
const test = require("node:test");
const assert = require("node:assert/strict");
const { yukle } = require("../yukle");
const { dogrulaSandik } = require("../dogrula");
const F = require("./fikstur");

const P = yukle(["veri/partiler.js"]).PARTILER;
const kopya = () => structuredClone(F);
const hatalar = S => dogrulaSandik(P, S).hatalar.join("\n");
const uyarilar = S => dogrulaSandik(P, S).uyarilar.join("\n");
const bul = (S, id) => S.secimler.find(k => k.id === id);

test("geçerli fikstür hatasız geçer", () => {
  assert.equal(hatalar(kopya()), "");
});

test("kimlik biçimi ve tekrarı", () => {
  const S = kopya();
  bul(S, "1999-04-genel").id = "1999-05-genel";       // tarihle uyuşmuyor
  S.secimler.push(structuredClone(bul(S, "2002-11-genel")));
  const h = hatalar(S);
  assert.match(h, /kimlik tarihle uyuşmuyor: 1999-05-genel/);
  assert.match(h, /yinelenen kimlik: 2002-11-genel/);
});

test("sıra ve bilinmeyen değerler", () => {
  const S = kopya();
  S.secimler.reverse();
  S.hukumetler[0].tip = "tuhaf";
  S.hukumetler[0].bitisNedeni = "tuhaf";
  const h = hatalar(S);
  assert.match(h, /secimler tarih sırasında değil/);
  assert.match(h, /bilinmeyen hükümet tipi/);
  assert.match(h, /bilinmeyen bitiş nedeni/);
});

test("parti referansları", () => {
  const S = kopya();
  bul(S, "1999-04-genel").sonuc.push({ parti: "yok", ad: "X", oy: 0, sandalye: 0 });
  S.hukumetler[0].partiler.push("yok2");
  const h = hatalar(S);
  assert.match(h, /bilinmeyen parti: yok\b/);
  assert.match(h, /hem parti hem ad/);
  assert.match(h, /bilinmeyen parti: yok2/);
});

test("sandalye ve oy toplamları", () => {
  const S = kopya();
  bul(S, "1999-04-genel").sonuc[0].sandalye = 5;     // toplam 11 > 10
  bul(S, "2002-11-genel").sonuc[0].oy = 151;          // toplam 701 ≠ 700
  const h = hatalar(S);
  assert.match(h, /1999-04-genel: sandalye toplamı 11, meclis 10/);
  assert.match(h, /2002-11-genel: oy toplamı 701, geçerli 700/);
});

test("seçmen sayılarının tutarlılığı ve yedek alanların karışması", () => {
  const S = kopya();
  const k = bul(S, "2004-03-yerel");
  k.gecerli = 900;                                    // > kullanilan
  k.katilimYuzde = 70;                                // sayılarla birlikte
  k.sonuc[0].oyYuzde = 50;                            // oy ile birlikte
  const h = hatalar(S);
  assert.match(h, /2004-03-yerel: geçerli > kullanılan/);
  assert.match(h, /2004-03-yerel: seçmen sayıları ve katilimYuzde birlikte/);
  assert.match(h, /2004-03-yerel: aynı satırda oy ve oyYuzde/);
});

test("referandum: evet + hayır = geçerli, sonuç ve tutum değerleri", () => {
  const S = kopya();
  S.secimler.push({ id: "2010-09-referandum", tur: "referandum", tarih: "2010-09-12", konu: "sahte",
    kayitli: 100, kullanilan: 90, gecerli: 88, evet: 80, hayir: 9, karar: "belki",
    tutumlar: [{ parti: "akp", tutum: "kararsiz" }] });
  const h = hatalar(S);
  assert.match(h, /2010-09-referandum: evet \+ hayır 89, geçerli 88/);
  assert.match(h, /bilinmeyen referandum sonucu/);
  assert.match(h, /bilinmeyen tutum/);
});

test("hükümet çakışması hata, boşluk uyarı", () => {
  const S = kopya();
  S.hukumetler[0].bitis = "2002-12-01";
  assert.match(hatalar(S), /hükümetler çakışıyor: 57 \/ 58/);
  const T = kopya();
  T.hukumetler[0].bitis = "2002-11-01";
  assert.match(uyarilar(T), /hükümetler arasında boşluk: 57 → 58/);
});

test("hiçbir banda düşmeyen kayıt hata", () => {
  const S = kopya();
  S.secimler.unshift({ id: "1900-01-ara", tur: "ara", tarih: "1900-01-01", bolge: "x",
    sandalyeSayisi: 1, sonuc: [] });
  assert.match(hatalar(S), /yersiz kayıt: 1900-01-ara/);
});

test("ittifak listesinden seçilenler liste partisini aşarsa uyarı, — sayısı raporlanır", () => {
  const S = kopya();
  bul(S, "2002-11-genel").ittifak[0].icinden[0].sandalye = 6;
  const u = uyarilar(S);
  assert.match(u, /2002-11-genel: ittifak Sahte İttifak içinden 6 > liste partisi 5/);
  assert.match(uyarilar(kopya()), /— sayısı: genel/);
});
```

`araclar/test/topla.test.js`:

```js
const test = require("node:test");
const assert = require("node:assert/strict");
const { sayiOku, topla } = require("../topla");

test("sayiOku binlik noktalı sayıyı okur", () => {
  assert.equal(sayiOku("2.197"), 2197);
  assert.equal(sayiOku("642.708"), 642708);
  assert.equal(sayiOku("1110"), 1110);
  assert.throws(() => sayiOku("12a"), /sayı değil/);
});

test("topla il satırlarını sütun sütun toplar (ilk sütun il adı)", () => {
  assert.deepEqual(topla([["A", "1.000", "10"], ["B", "2.500", "5"]]), [3500, 15]);
});

test("topla sütun sayısı tutmayan satırı reddeder", () => {
  assert.throws(() => topla([["A", "1", "2"], ["B", "1"]]), /satır 2: sütun sayısı/);
});
```

- [ ] **Adım 2: Başarısız olduğunu gör**

Run: `node --test "araclar/test/*.test.js"`
Expected: FAIL — `dogrulaSandik is not a function` ve `Cannot find module '../topla'`.

- [ ] **Adım 3: `araclar/topla.js`'i yaz**

```js
#!/usr/bin/env node
// Resmî il tablosundan ulusal toplam (spesifikasyon §8.1 "hesaplanmış toplamlar").
// Girdi: sekmeyle ayrılmış satırlar; 1. sütun il adı, sonrakiler sayılar ("1.234" biçimi).
const fs = require("fs");

function sayiOku(m) {
  const t = String(m).trim();
  if (!/^\d{1,3}(\.\d{3})*$|^\d+$/.test(t)) throw new Error("sayı değil: " + m);
  return Number(t.replace(/\./g, ""));
}

function topla(satirlar) {
  const n = satirlar[0].length;
  const toplam = new Array(n - 1).fill(0);
  satirlar.forEach((s, i) => {
    if (s.length !== n) throw new Error("satır " + (i + 1) + ": sütun sayısı " + s.length + ", beklenen " + n);
    for (let j = 1; j < n; j++) toplam[j - 1] += sayiOku(s[j]);
  });
  return toplam;
}

module.exports = { sayiOku, topla };

if (require.main === module) {
  const satirlar = fs.readFileSync(process.argv[2], "utf8").split(/\r?\n/)
    .filter(Boolean).map(l => l.split("\t"));
  console.log(JSON.stringify({ satir: satirlar.length, toplamlar: topla(satirlar) }));
}
```

- [ ] **Adım 4: `araclar/dogrula.js`'e Sandık kurallarını ekle**

Dosyanın başındaki `require` satırının altına:

```js
const Ortak = require("../ortak");
const SandikMantik = require("../sandik-mantik");

const TURLER = ["genel", "yerel", "referandum", "cb-halk", "cb-tbmm", "ara"];
const TIPLER = ["tek-parti", "koalisyon", "azinlik", "partiluestu", "mbk", "cumhurbaskanligi"];
const BITIS = ["secim", "erken-secim", "guvensizlik", "istifa", "darbe", "muhtira",
               "cumhurbaskani-secimi", "olum", "sistem-degisikligi", "diger"];
const TUTUMLAR = ["evet", "hayir", "boykot", "serbest"];
const REF_SONUC = ["kabul", "ret"];
const SAYISAL = ["kayitli", "kullanilan", "gecerli", "oy", "sandalye", "evet", "hayir"];

function gunFarki(a, b) { return (Date.parse(b) - Date.parse(a)) / 86400000; }

function dogrulaSandik(P, S) {
  const hatalar = [], uyarilar = [];
  const M = SandikMantik.olustur(P, Ortak);
  const partiVar = id => P.N.some(n => n.id === id);
  const partiDenetle = (id, yer) => { if (id && !partiVar(id)) hatalar.push("bilinmeyen parti: " + id + " (" + yer + ")"); };

  // kimlik, sıra, tür
  const idler = new Set();
  S.secimler.forEach((k, i) => {
    if (idler.has(k.id)) hatalar.push("yinelenen kimlik: " + k.id);
    idler.add(k.id);
    if (!TURLER.includes(k.tur)) hatalar.push("bilinmeyen tür: " + k.id + " → " + k.tur);
    if (!/^\d{4}-\d{2}-[a-z-]+$/.test(k.id) || k.id.slice(0, 7) !== k.tarih.slice(0, 7) ||
        k.id.slice(8) !== k.tur) hatalar.push("kimlik tarihle uyuşmuyor: " + k.id);
    if (i > 0 && S.secimler[i - 1].tarih > k.tarih) hatalar.push("secimler tarih sırasında değil: " + k.id);
  });

  // satır düzeyi denetimler
  function satirlariDenetle(k, satirlar, gecerli, yer) {
    let toplam = 0, hepsi = true, yuzdeler = [];
    for (const s of satirlar) {
      if (s.parti && s.ad) hatalar.push(k.id + ": satırda hem parti hem ad (" + s.parti + ")");
      partiDenetle(s.parti, k.id);
      if (s.oy != null && s.oyYuzde != null) hatalar.push(k.id + ": aynı satırda oy ve oyYuzde");
      if (s.oy == null) hepsi = false; else toplam += s.oy;
      if (s.oyYuzde != null) yuzdeler.push(s.oyYuzde);
    }
    if (gecerli != null && satirlar.length) {
      if (toplam > gecerli || (hepsi && toplam !== gecerli))
        hatalar.push(k.id + ": oy toplamı " + toplam + ", geçerli " + gecerli + (yer ? " (" + yer + ")" : ""));
    }
    if (yuzdeler.length && yuzdeler.length === satirlar.length) {
      const t = yuzdeler.reduce((a, b) => a + b, 0);
      if (t < 98 || t > 102) uyarilar.push(k.id + ": yüzdelerin toplamı " + t.toFixed(1));
    }
  }
  function secmenDenetle(k, x, yer) {
    const ad = k.id + (yer ? " (" + yer + ")" : "");
    if (x.gecerli != null && x.kullanilan != null && x.gecerli > x.kullanilan) hatalar.push(ad + ": geçerli > kullanılan");
    if (x.kullanilan != null && x.kayitli != null && x.kullanilan > x.kayitli) hatalar.push(ad + ": kullanılan > kayıtlı");
    if (x.katilimYuzde != null && (x.kayitli != null || x.kullanilan != null))
      hatalar.push(ad + ": seçmen sayıları ve katilimYuzde birlikte");
  }

  const nullSayisi = {};
  for (const k of S.secimler) {
    if (k.tur === "genel" || k.tur === "yerel") {
      secmenDenetle(k, k);
      satirlariDenetle(k, k.sonuc || [], k.gecerli);
    }
    if (k.tur === "genel" && k.meclis != null) {
      const bilinen = (k.sonuc || []).filter(s => s.sandalye != null);
      const t = bilinen.reduce((a, s) => a + s.sandalye, 0);
      if (t > k.meclis || (bilinen.length === k.sonuc.length && t !== k.meclis))
        hatalar.push(k.id + ": sandalye toplamı " + t + ", meclis " + k.meclis);
    }
    if (k.tur === "genel") for (const it of k.ittifak || []) {
      partiDenetle(it.liste, k.id + " ittifak");
      const liste = (k.sonuc || []).find(s => s.parti === it.liste);
      const ic = it.icinden.reduce((a, x) => { partiDenetle(x.parti, k.id + " ittifak"); return a + (x.sandalye || 0); }, 0);
      if (liste && liste.sandalye != null && ic > liste.sandalye)
        uyarilar.push(k.id + ": ittifak " + it.ad + " içinden " + ic + " > liste partisi " + liste.sandalye);
    }
    if (k.tur === "yerel" && k.buyuksehir)
      for (const sehir of Object.keys(k.buyuksehir)) partiDenetle(k.buyuksehir[sehir].parti, k.id + " " + sehir);
    if (k.tur === "referandum") {
      secmenDenetle(k, k);
      if (!REF_SONUC.includes(k.karar)) hatalar.push(k.id + ": bilinmeyen referandum sonucu " + k.karar);
      if (k.evet != null && k.hayir != null && k.gecerli != null && k.evet + k.hayir !== k.gecerli)
        hatalar.push(k.id + ": evet + hayır " + (k.evet + k.hayir) + ", geçerli " + k.gecerli);
      for (const t of k.tutumlar || []) {
        partiDenetle(t.parti, k.id + " tutum");
        if (!TUTUMLAR.includes(t.tutum)) hatalar.push(k.id + ": bilinmeyen tutum " + t.tutum);
      }
    }
    if (k.tur === "cb-halk") (k.turlar || []).forEach((t, i) => {
      secmenDenetle(k, t, (i + 1) + ". tur");
      satirlariDenetle(k, t.adaylar || [], t.gecerli, (i + 1) + ". tur");
    });
    if (k.tur === "ara") for (const s of k.sonuc || []) partiDenetle(s.parti, k.id);

    // — sayısı (bilinmeyen sayısal alanlar)
    const y = M.donemBul(k.tarih);
    const anahtar = k.tur + " " + (y ? (y.tur === "yonetim" ? "kap " : "bant ") + y.i : "yersiz");
    let n = 0;
    const say = o => SAYISAL.forEach(a => { if (a in o && o[a] == null) n++; });
    say(k); (k.sonuc || []).forEach(say); (k.turlar || []).forEach(t => { say(t); (t.adaylar || []).forEach(say); });
    nullSayisi[anahtar] = (nullSayisi[anahtar] || 0) + n;
  }
  for (const a of Object.keys(nullSayisi)) uyarilar.push("— sayısı: " + a + ": " + nullSayisi[a]);

  // hükümetler
  S.hukumetler.forEach((h, i) => {
    if (!TIPLER.includes(h.tip)) hatalar.push("bilinmeyen hükümet tipi: " + h.no + " → " + h.tip);
    if (h.bitisNedeni != null && !BITIS.includes(h.bitisNedeni)) hatalar.push("bilinmeyen bitiş nedeni: " + h.no + " → " + h.bitisNedeni);
    (h.partiler || []).forEach(p => partiDenetle(p, "hükümet " + h.no));
    const s = S.hukumetler[i + 1];
    if (!s) return;
    if (h.baslangic > s.baslangic) hatalar.push("hukumetler tarih sırasında değil: " + h.no + " / " + s.no);
    if (h.bitis == null) hatalar.push("bitişi olmayan hükümetten sonra hükümet var: " + h.no);
    else if (h.bitis > s.baslangic) hatalar.push("hükümetler çakışıyor: " + h.no + " / " + s.no);
    else if (gunFarki(h.bitis, s.baslangic) > 1) uyarilar.push("hükümetler arasında boşluk: " + h.no + " → " + s.no);
  });

  // yerleşim
  for (const o of M.kronoloji(S).yersiz)
    hatalar.push("yersiz kayıt: " + (o.tur === "secim" ? o.kayit.id : "hükümet " + o.hukumet.no));

  return { hatalar, uyarilar };
}
```

`dogrula` fonksiyonunu ve dışa aktarımı değiştir:

```js
function dogrula(P, S) {
  const a = dogrulaPartiler(P);
  if (!S) return a;
  const b = dogrulaSandik(P, S);
  return { hatalar: a.hatalar.concat(b.hatalar), uyarilar: a.uyarilar.concat(b.uyarilar) };
}

module.exports = { dogrula, dogrulaPartiler, dogrulaSandik };
```

- [ ] **Adım 5: Testleri geçir**

Run: `node --test "araclar/test/*.test.js" && node araclar/dogrula.js`
Expected: bütün testler PASS; `hata yok` (veri/sandik.js boş olduğu için Sandık uyarısı da yok).

- [ ] **Adım 6: Commit**

```bash
git add araclar/dogrula.js araclar/topla.js araclar/test/dogrula.test.js araclar/test/topla.test.js
git commit -F - <<'MSG'
Sandık veri denetimi ve il tablosu toplayıcısı

dogrula.js spesifikasyon §8.4'teki hata ve uyarı kurallarını uygular;
topla.js resmî il tablolarından ulusal toplamı betikle hesaplar.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```

---

