# Görev 8 — brief (kaynak: docs/superpowers/plans/2026-09-11-sandik.md)

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

### Görev 8: Soyağacı entegrasyonu — künyede seçimler, `#parti` bağlantısı, menü

**Files:**
- Modify: `sandik-mantik.js` (`kunyeSecimleriHTML` eklenir), `araclar/test/sandik-html.test.js`, `index.html`, `kaynakca.html`

**Interfaces:**
- Consumes: `M.partininSecimleri`, `M.oyDegeri`, `M.partiAdi`, `M.kacis`, Görev 6'daki iç yardımcı `liste(baslik, satirlar)`; `Ortak.panelKur` (`kapaninca` seçeneği), `Ortak.hashOku`.
- Produces:
  - `M.kunyeSecimleriHTML(id: string, S) → string` — "Girdiği genel seçimler" ve "Girdiği yerel seçimler" listeleri; kaydı olmayan partide `""`. Her satır `sandik.html#<kimlik>`'e bağlanır. Aynı yıl aynı türde birden fazla kayıt varsa etiket `"Haz 2015"` biçimindedir, yoksa `"2015"`.
  - `index.html#<parti>` künyeyi açar; künye açıkken adres `#<parti>` olur, kapanınca temizlenir.
  - Üç sayfada da menü: Ana sayfa · Sandık · Kaynakça & metodoloji.

- [ ] **Adım 1: Başarısız testi yaz**

`araclar/test/sandik-html.test.js` dosyasının sonuna ekle:

```js
test("künye: girdiği genel seçimler (kendi listesi ve ittifak listesi) ve yerel seçimler", () => {
  const h = M.kunyeSecimleriHTML("dsp", F);
  assert.match(h, /Girdiği genel seçimler/);
  assert.match(h, /href="sandik\.html#1999-04-genel">1999</);
  assert.ok(h.includes("%42,9 · 6 sandalye"));
  assert.match(h, /href="sandik\.html#2002-11-genel">2002</);
  assert.ok(h.includes(M.kacis(kisa("chp92")) + " listesinden 2 vekil"));
  assert.match(h, /Girdiği yerel seçimler/);
  assert.match(h, /href="sandik\.html#2004-03-yerel">2004</);
  assert.ok(h.includes("%13,0"));
});

test("künye: aynı yıl aynı türde iki seçim ay adıyla ayrışır", () => {
  const S = structuredClone(F);
  const ikinci = structuredClone(S.secimler.find(k => k.id === "1999-04-genel"));
  ikinci.id = "1999-11-genel"; ikinci.tarih = "1999-11-07";
  S.secimler.splice(2, 0, ikinci);
  const h = M.kunyeSecimleriHTML("dsp", S);
  assert.match(h, />Nis 1999</);
  assert.match(h, />Kas 1999</);
});

test("künye: seçim kaydı olmayan partide boş", () => {
  assert.equal(M.kunyeSecimleriHTML("tcf", F), "");
});
```

Run: `node --test "araclar/test/*.test.js"`
Expected: FAIL — `M.kunyeSecimleriHTML is not a function`.

- [ ] **Adım 2: `kunyeSecimleriHTML`'i yaz**

`sandik-mantik.js`'te `olustur` içindeki `return { BAGIMSIZ, …` satırının hemen üstüne ekle (Görev 6'nın `liste` yardımcısından sonra gelmelidir):

```js
    /* ---- soyağacı künyesi: partinin girdiği seçimler ---- */
    function kunyeSecimleriHTML(id, S) {
      const s = partininSecimleri(id, S);
      const etiket = k => {
        const ayniYil = S.secimler.filter(x => x.tur === k.tur && x.tarih.slice(0, 4) === k.tarih.slice(0, 4));
        return ayniYil.length > 1 ? O.tarihYaz(k.tarih, true).replace(/^\d+ /, "") : k.tarih.slice(0, 4);
      };
      const bag = k => '<a class="p-git" href="sandik.html#' + k.id + '">' + etiket(k) + "</a>";
      const genel = s.genel.map(x => "<li>" + bag(x.kayit) + "<span>" + (x.satir
        ? O.yuzdeYaz(oyDegeri(x.satir, x.kayit)) + " · " + O.sayiYaz(x.satir.sandalye) + " sandalye"
        : kacis(partiAdi({ parti: x.ittifak.liste }).kisa) + " listesinden " + O.sayiYaz(x.ittifak.sandalye) + " vekil") +
        "</span></li>");
      const yerel = s.yerel.map(x => "<li>" + bag(x.kayit) + "<span>" + O.yuzdeYaz(oyDegeri(x.satir, x.kayit)) + "</span></li>");
      return liste("Girdiği genel seçimler", genel) + liste("Girdiği yerel seçimler", yerel);
    }
```

`return` nesnesine `kunyeSecimleriHTML` ekle:

```js
    return { BAGIMSIZ, DIGER, NOTR, KESINTI, TUR_ETIKET, TUR_AD, BITIS_ETIKET,
             partiAdi, oyDegeri, katilimDegeri, siralaGenel, baslikGenel, meclisDurumu,
             donemBul, kronoloji, sonrakiHukumetler, partininSecimleri,
             kacis, rozetHTML, cubukHTML, kartHTML, seritHTML, panelHTML, kunyeSecimleriHTML };
```

Run: `node --test "araclar/test/*.test.js"`
Expected: bütün testler PASS.

- [ ] **Adım 3: `index.html`'e bağla**

1. `<script src="ortak.js"></script>` satırını şu dört satırla değiştir (sıra önemli):

```html
<script src="veri/sandik.js"></script>
<script src="ortak.js"></script>
<script src="sandik-mantik.js"></script>
```

(`veri/partiler.js` satırı bunların üstünde kalır.)

2. IIFE'nin başındaki `const {AILE, BILGI, DONEMLER, N, E, ROZET} = window.PARTILER;` satırının altına:

```js
  const SANDIK = window.SANDIK;
  const SM = SandikMantik.olustur(window.PARTILER, Ortak);
```

3. `Ortak.panelKur({…})` çağrısına `kapaninca` ekle:

```js
  const Panel = Ortak.panelKur({
    panel, perde, govde,
    kapatDugmesi: document.getElementById("kapat"),
    odakSecici: ".kart",
    kapaninca: () => history.replaceState(null, "", location.pathname + location.search)
  });
```

4. `ac(id)` içinde `html` değişkeninin son satırından (`… 'Nereye gitti' …`) sonra, `Panel.ac(html, renk);` satırından önce:

```js
    const secimler = SM.kunyeSecimleriHTML(id, SANDIK);
    Panel.ac(html + secimler, renk);
    history.replaceState(null, "", "#" + id);
```

ve eski `Panel.ac(html, renk);` satırını sil.

5. Dosyanın sonundaki `ciz();` satırının üstüne:

```js
  /* ---- doğrudan bağlantı: index.html#<parti> ---- */
  function hashAc(){
    const id = Ortak.hashOku(location.hash);
    if(!id || !bul(id)) return;
    const el = chart.querySelector('[data-id="'+id+'"]');
    const s = el.closest(".satir");
    if(s.classList.contains("kapali")){
      const b = document.querySelector('.banner[aria-controls="'+s.id+'"]');
      Ortak.bantDurum(b, s, false); ciz();
    }
    el.scrollIntoView({block:"center", inline:"center"});
    el.focus();
    ac(id);
  }
  window.addEventListener("hashchange", hashAc);
  hashAc();
```

- [ ] **Adım 4: Menü**

`index.html` ve `kaynakca.html`'deki `<div class="ustmenu-ic">` içinde "Ana sayfa" bağlantısının hemen altına:

```html
    <a href="sandik.html" class="ustmenu-link">Sandık</a>
```

- [ ] **Adım 5: Doğrula**

Run: `node --test "araclar/test/*.test.js" && node araclar/dogrula.js`
Expected: PASS; `hata yok`.

Tarayıcıda (1400px):
1. `index.html` → `araclar/denetim/soyagaci.js` çıktısı Görev 7'dekiyle aynı; ek olarak `r.panelKapali` sonrası `location.hash === ""`.
2. `index.html#akp` → panel açık, `document.getElementById("p-kisa").textContent === "AK Parti"`; Escape → `location.hash === ""`.
3. Üç sayfada `document.querySelectorAll(".ustmenu-link").length === 3` ve etkin bağlantı doğru sayfada.
4. Konsol hatası yok; `file://` ile `index.html#akp` da künyeyi açıyor.

(Künyedeki seçim bölümleri gerçek veri girildiğinde tarayıcıda Görev 9 / Adım 6'da ayrıca denetlenir; burada `veri/sandik.js` henüz boş.)

- [ ] **Adım 6: Commit**

```bash
git add sandik-mantik.js araclar/test/sandik-html.test.js index.html kaynakca.html
git commit -F - <<'MSG'
Künyede girdiği seçimler, index.html#parti bağlantısı ve Sandık menüsü

Künye paneli partinin genel ve yerel seçimlerini sandik.html#kimlik
bağlantılarıyla listeler; ittifak listesinden seçilen vekiller ayrıca
yazılır. Üç sayfada menü: Ana sayfa · Sandık · Kaynakça & metodoloji.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```

---

