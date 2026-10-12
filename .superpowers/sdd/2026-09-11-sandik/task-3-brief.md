# Görev 3 — brief (kaynak: docs/superpowers/plans/2026-09-11-sandik.md)

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

### Görev 3: `ortak.js` — panel, dönem bandı ve biçimleme

**Files:**
- Create: `ortak.js`, `araclar/test/ortak.test.js`
- Modify: `ortak.css` (bileşen stilleri eklenir), `index.html` (CSS blokları çıkar; panel/bant kodu `Ortak`'a devredilir)

**Interfaces:**
- Consumes: `window.PARTILER` (Görev 2).
- Produces (`window.Ortak`, Node'da `require("../../ortak")`):
  - `tarihYaz(iso: "YYYY-AA-GG", kisa?: boolean) → "14 Mayıs 1950"` / kisa: `"14 May 1950"`; `null` → `"—"`.
  - `yuzde(pay: number|null, payda: number|null) → number|null` (0–100).
  - `yuzdeYaz(y: number|null) → "%52,7"` / `"—"`.
  - `sayiYaz(n: number|null) → "1.234.567"` / `"—"`.
  - `hashOku(hash: string) → string|null` — yalnızca `[a-z0-9-]+` kabul eder.
  - `bantDurum(bant: Element, satir: Element, kapali: boolean) → void`.
  - `bantKur(bant: Element, satir: Element, degisince?: () => void) → void`.
  - `panelKur({panel, perde, govde, kapatDugmesi, odakSecici, kapaninca?}) → {ac(html: string, renk: string), kapat(), odakHedefi(el: Element), acikMi(): boolean}`.

- [ ] **Adım 1: Başarısız testi yaz**

`araclar/test/ortak.test.js`:

```js
const test = require("node:test");
const assert = require("node:assert/strict");
const O = require("../../ortak");

test("tarihYaz Türkçe ay adlarıyla yazar", () => {
  assert.equal(O.tarihYaz("1950-05-14"), "14 Mayıs 1950");
  assert.equal(O.tarihYaz("2002-11-03", true), "3 Kas 2002");
  assert.equal(O.tarihYaz(null), "—");
});

test("yuzde ve yuzdeYaz", () => {
  assert.equal(O.yuzde(1, 4), 25);
  assert.equal(O.yuzde(null, 4), null);
  assert.equal(O.yuzde(1, 0), null);
  assert.equal(O.yuzdeYaz(52.68), "%52,7");
  assert.equal(O.yuzdeYaz(null), "—");
});

test("sayiYaz binlik noktayla yazar", () => {
  assert.equal(O.sayiYaz(1234567), "1.234.567");
  assert.equal(O.sayiYaz(null), "—");
});

test("hashOku yalnızca güvenli kimlikleri kabul eder", () => {
  assert.equal(O.hashOku("#1950-05-genel"), "1950-05-genel");
  assert.equal(O.hashOku("#akp"), "akp");
  assert.equal(O.hashOku("#<img>"), null);
  assert.equal(O.hashOku(""), null);
});
```

- [ ] **Adım 2: Başarısız olduğunu gör**

Run: `node --test "araclar/test/*.test.js"`
Expected: FAIL — `Cannot find module '../../ortak'`.

- [ ] **Adım 3: `ortak.js`'i yaz**

```js
/* Ortak yardımcılar: biçimleme, dönem bandı, açıklama paneli, adres hash'i.
   index.html ve sandik.html paylaşır. Node'da da yüklenir (testler için). */
(function (kok, fabrika) {
  var Ortak = fabrika();
  if (typeof module === "object" && module.exports) module.exports = Ortak;
  else kok.Ortak = Ortak;
})(typeof window !== "undefined" ? window : this, function () {
  const AYLAR = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz",
                 "Ağustos","Eylül","Ekim","Kasım","Aralık"];

  function tarihYaz(iso, kisa) {
    if (!iso) return "—";
    const [y, a, g] = iso.split("-").map(Number);
    const ay = kisa ? AYLAR[a - 1].slice(0, 3) : AYLAR[a - 1];
    return g + " " + ay + " " + y;
  }
  function yuzde(pay, payda) {
    if (pay == null || payda == null || payda === 0) return null;
    return pay / payda * 100;
  }
  function yuzdeYaz(y) {
    return y == null ? "—" : "%" + y.toFixed(1).replace(".", ",");
  }
  function sayiYaz(n) {
    return n == null ? "—" : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function hashOku(h) {
    const s = decodeURIComponent(String(h || "").replace(/^#/, ""));
    return /^[a-z0-9-]+$/.test(s) ? s : null;
  }

  /* ---- dönem bandı ---- */
  function bantDurum(b, s, kapali) {
    s.classList.toggle("kapali", kapali);
    b.classList.toggle("kapali", kapali);
    b.setAttribute("aria-expanded", String(!kapali));
    const ok = b.querySelector(".ok");
    if (ok) ok.textContent = kapali ? "+" : "−";
  }
  function bantKur(b, s, degisince) {
    b.tabIndex = 0;
    b.setAttribute("role", "button");
    b.setAttribute("aria-controls", s.id);
    bantDurum(b, s, false);
    function ackapa() {
      bantDurum(b, s, !s.classList.contains("kapali"));
      if (degisince) degisince();
    }
    b.addEventListener("click", ackapa);
    b.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ackapa(); }
    });
  }

  /* ---- açıklama paneli: inert, odak tuzağı, odak iadesi ---- */
  function panelKur(o) {
    let sonOdak = null;
    function acikMi() { return o.panel.classList.contains("acik"); }
    function ac(html, renk) {
      o.panel.style.setProperty("--aile", renk);
      o.govde.innerHTML = html;
      // paneli açan öğeyi hatırla; panel içinden gelindiyse öncekini koru
      const a = document.activeElement;
      const k = a && a.closest ? a.closest(o.odakSecici) : null;
      if (k) sonOdak = k;
      o.panel.removeAttribute("inert");
      o.panel.removeAttribute("aria-hidden");
      o.panel.classList.add("acik"); o.perde.classList.add("acik");
      o.panel.scrollTop = 0;
      o.kapatDugmesi.focus();
    }
    function kapat() {
      if (!acikMi()) return;
      o.panel.classList.remove("acik"); o.perde.classList.remove("acik");
      o.panel.setAttribute("inert", "");
      o.panel.setAttribute("aria-hidden", "true");
      if (sonOdak && document.body.contains(sonOdak)) sonOdak.focus();
      sonOdak = null;
      if (o.kapaninca) o.kapaninca();
    }
    function odakHedefi(el) { sonOdak = el; }
    // açıkken odak panelin dışına kaçmasın (aria-modal'ın davranışsal karşılığı)
    o.panel.addEventListener("keydown", e => {
      if (e.key !== "Tab") return;
      const l = o.panel.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
      if (!l.length) return;
      const ilk = l[0], son = l[l.length - 1];
      if (e.shiftKey && document.activeElement === ilk) { e.preventDefault(); son.focus(); }
      else if (!e.shiftKey && document.activeElement === son) { e.preventDefault(); ilk.focus(); }
    });
    o.kapatDugmesi.addEventListener("click", kapat);
    o.perde.addEventListener("click", kapat);
    document.addEventListener("keydown", e => { if (e.key === "Escape") kapat(); });
    return { ac, kapat, odakHedefi, acikMi };
  }

  return { tarihYaz, yuzde, yuzdeYaz, sayiYaz, hashOku, bantDurum, bantKur, panelKur };
});
```

- [ ] **Adım 4: Testleri geçir**

Run: `node --test "araclar/test/*.test.js"`
Expected: tüm testler PASS (Görev 2'nin 5 testi + bu görevin 4 testi).

- [ ] **Adım 5: Bileşen stillerini `ortak.css`'e taşı**

`index.html`'in `<style>` bloğundan şu blokları **kes** (satır numaraları Görev 2 sonrası; Görev 2 yalnızca betik bölümünü değiştirdiği için CSS satırları aynıdır — yine de içeriğe bakarak doğrula):

| Satırlar | İçerik |
|---|---|
| 70–86 | `.banner` ve tüm `.banner …` kuralları |
| 92 | `.satir.kapali{display:none}` |
| 95–102 | `.kart{…}` temel kutu |
| 119–126 | `.rozet` ve `.r-kapatildi / .r-faal / .r-katildi` |
| 137–139 | `.kart{cursor:pointer}`, `.kart:hover`, `.kart:focus-visible` |
| 153–209 | panel bölümünün tamamı (`#perde` … `.p-git:hover`) |
| 212–218 | mobil sorgusunun içindeki `#panel{…}` ve `#panel.acik{…}` |

`ortak.css`'te `@media (prefers-reduced-motion:reduce)` satırının hemen üstüne şu başlıkla yapıştır:

```css
  /* ---------- ortak bileşenler: dönem bandı, kart kutusu, rozet, açıklama paneli ---------- */
```

Mobil panel kuralları `ortak.css`'in sonuna şu sarmalayıcıyla girer:

```css
  @media (max-width:760px){
    /* 212–218. satırlardaki #panel ve #panel.acik kuralları */
  }
```

(Yorum satırının yerine kesilen iki kural gelir.) `index.html`'deki mobil sorgusunda artık `#panel` kuralı kalmamalıdır.

- [ ] **Adım 6: `index.html`'i `Ortak`'a devret**

1. `<script src="veri/partiler.js"></script>` satırının altına `<script src="ortak.js"></script>` ekle.
2. Dönem bantlarının kurulumunda `b.tabIndex=0;` satırından `b.addEventListener("keydown",…);` bloğunun sonuna kadar olan kısmı (`ackapa` fonksiyonu dahil) şu tek satırla değiştir:

```js
    Ortak.bantKur(b, s, ciz);
```

3. `filtreUygula` içindeki bant açma satırlarını değiştir:

```js
        s.classList.remove("kapali");
        duzenDegisti=true;
        const b=document.querySelector('.banner[aria-controls="'+s.id+'"]');
        if(b){ b.classList.remove("kapali"); b.setAttribute("aria-expanded","true"); b.querySelector(".ok").textContent="−"; }
```

yerine:

```js
        duzenDegisti=true;
        const b=document.querySelector('.banner[aria-controls="'+s.id+'"]');
        if(b) Ortak.bantDurum(b, s, false); else s.classList.remove("kapali");
```

4. Panel bölümünde `let sonOdak=null;` satırını, `ac()` içindeki "paneli açan kartı hatırla" satırlarından `document.getElementById("kapat").focus();`'a kadar olan kısmı, `kapat()` fonksiyonunu, panelin `keydown` (Tab) dinleyicisini ve dosyanın sonundaki `kapat`/`perde`/`Escape` dinleyicilerini sil. Yerine, `const ETIKET=…` satırının altına:

```js
  const Panel = Ortak.panelKur({
    panel, perde, govde,
    kapatDugmesi: document.getElementById("kapat"),
    odakSecici: ".kart"
  });
```

`ac(id)`'in gövdesi HTML'i bir değişkende toplayıp panele verir:

```js
  function ac(id){
    const n=bul(id); if(!n) return;
    const b=BILGI[id]||{};
    const renk=AILE[n.aile].ham;
    const r=ROZET[n.durum];
    const oncul=E.filter(e=>e[1]===id).map(e=>({id:e[0],tur:ETIKET[e[2]]}));
    const ardil=E.filter(e=>e[0]===id).map(e=>({id:e[1],tur:ETIKET[e[2]]}));
    const html =
      '<div class="p-kisa" id="p-kisa" style="color:'+renk+'">'+n.kisa+'</div>'+
      '<div class="p-ad">'+n.ad+'</div>'+
      '<div class="p-meta">'+n.yil+' <span class="rozet '+r[1]+'">'+r[0]+'</span>'+
        ' · '+AILE[n.aile].ad+'</div>'+
      (b.k?'<div class="p-etiket">Kurucu</div><div class="p-kurucu">'+b.k+'</div>':'')+
      (b.o?'<div class="p-etiket">Özet</div><div class="p-ozet">'+b.o+'</div>':'')+
      (n.sembol?'<div class="p-etiket">Sembol</div><div class="p-sembol">'+n.sembol+'</div>':'')+
      (oncul.length?'<div class="p-etiket">Nereden geldi</div><ul>'+satirlar(oncul)+'</ul>':'')+
      (ardil.length?'<div class="p-etiket">Nereye gitti</div><ul>'+satirlar(ardil)+'</ul>':'');
    Panel.ac(html, renk);
  }
```

`govde` tıklama dinleyicisindeki `sonOdak=hedef;` ifadesini `Panel.odakHedefi(hedef);` yap.

- [ ] **Adım 7: Gerileme denetimi**

Run: `node --test "araclar/test/*.test.js" && node araclar/dogrula.js`
Expected: PASS; `hata yok`.

Tarayıcıda `index.html`'i yeniden yükle ve `araclar/denetim/soyagaci.js`'i değerlendir. Beklenen: Görev 2 Adım 8'deki çıktıyla birebir aynı. `read_console_messages {onlyErrors:true}` boş. `resize_window {preset:"mobile"}` → karta dokununca panel alttan açılıyor mu (`getComputedStyle(panel).transform` `translateY` içeriyor mu)? Sonra `resize_window {preset:"desktop"}`.

Run: `grep -c "sonOdak\|function kapat" index.html`
Expected: `0`.

- [ ] **Adım 8: Commit**

```bash
git add ortak.js ortak.css index.html araclar/test/ortak.test.js
git commit -F - <<'MSG'
Panel, dönem bandı ve biçimleme kodunu ortak.js'e taşı

index.html davranışı değişmedi (gerileme denetimi aynı çıktıyı verdi);
panel ve bant stilleri ortak.css'e geçti. sandik.html aynı kodu kullanacak.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```

---

