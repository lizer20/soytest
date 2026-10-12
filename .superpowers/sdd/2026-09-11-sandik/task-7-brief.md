# Görev 7 — brief (kaynak: docs/superpowers/plans/2026-09-11-sandik.md)

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

### Görev 7: Sandık sayfası (`sandik.html`, `sandik-sayfa.js`, `sandik.css`)

**Files:**
- Create: `sandik.html`, `sandik-sayfa.js`, `sandik.css`, `araclar/denetim/fikstur.html`, `araclar/denetim/sandik.js`
- Modify: `index.html` (araç çubuğu stilleri çıkar), `ortak.css` (araç çubuğu stilleri girer)

**Interfaces:**
- Consumes: `window.PARTILER`, `window.SANDIK`, `Ortak.bantKur/bantDurum/panelKur/hashOku`, `SandikMantik.olustur(P,O)` → `kronoloji`, `kartHTML`, `seritHTML`, `panelHTML`, `kacis` (Görev 2–6).
- Produces:
  - Sayfa iskeleti kimlikleri: `#turlar`, `#yilKaydirici`, `#yilDeger`, `#filtreTemizle`, `#rows`, `#perde`, `#panel`, `#kapat`, `#p-govde`.
  - DOM sözleşmesi: her dönem = `.banner` + `.s-donem#donem-<i>`; her kayıt/hükümet = `.s-oge[data-tur][data-bas][data-bit]` (hükümette ek sınıf `.s-oge-serit`); kesinti = `.banner.kesinti`; askerî yönetim kabı = `.s-kap`; boş dönem = `.s-bos`.
  - `sandik.html#<kimlik>` paneli açar; panel kapanınca hash temizlenir.

- [ ] **Adım 1: Tarayıcı denetimini ve fikstür sayfasını yaz (başarısız test)**

`araclar/denetim/sandik.js`:

```js
// Sandık sayfası denetimi — araclar/denetim/fikstur.html üzerinde, javascript_tool ile
// değerlendirilir. Beklenen değerler plan Görev 7 / Adım 7'de.
(() => {
  const r = {};
  const ogeId = x => { const k = x.querySelector("[data-id]"); return k ? k.dataset.id : "serit"; };
  r.kart = document.querySelectorAll(".s-kart").length;
  r.serit = document.querySelectorAll(".s-serit").length;
  r.bant = document.querySelectorAll(".banner:not(.kesinti)").length;
  r.kesinti = document.querySelectorAll(".banner.kesinti").length;
  r.bos = document.querySelectorAll(".s-bos").length;
  const d = document.querySelector('.tur-dugme[data-tur="hukumet"]');
  d.click();
  r.hukumetKapali = { gizli: [...document.querySelectorAll(".s-oge-serit")].every(x => x.hidden),
                      basili: d.getAttribute("aria-pressed") };
  d.click();
  const y = document.getElementById("yilKaydirici");
  y.value = 2003; y.dispatchEvent(new Event("input", { bubbles: true }));
  r.yil2003 = [...document.querySelectorAll(".s-oge.sonuc")].map(ogeId);
  y.value = y.max; y.dispatchEvent(new Event("input", { bubbles: true }));
  r.yilEnSag = document.getElementById("rows").classList.contains("filtreli");
  const k = document.querySelector('[data-id="1999-04-genel"]');
  k.focus(); k.click();
  const p = document.getElementById("panel");
  r.panel = { acik: p.classList.contains("acik"), baslik: document.getElementById("p-kisa").textContent, hash: location.hash };
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
  r.kapaninca = { inert: p.hasAttribute("inert"), odakGeri: document.activeElement === k, hash: location.hash };
  const b = document.querySelector(".banner:not(.kesinti)");
  b.click();
  r.bantKapali = document.getElementById(b.getAttribute("aria-controls")).offsetHeight;
  b.click();
  return r;
})()
```

`araclar/denetim/fikstur.html`:

```html
<!DOCTYPE html>
<html lang="tr">
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>Sandık — SAHTE FİKSTÜR (test sayfası)</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../../ortak.css">
<link rel="stylesheet" href="../../sandik.css">
<div class="wrap">
  <p class="disclaimer"><b>SAHTE VERİ.</b> Bu sayfa yalnızca sandik-sayfa.js'i sınamak içindir; sayılar uydurmadır.</p>
  <div class="araclar">
    <div class="turlar" id="turlar" role="group" aria-label="Kayıt türleri"></div>
    <div class="yil-filtre"><span>yıl</span>
      <input id="yilKaydirici" type="range" step="1" aria-label="Yıl filtresi">
      <span id="yilDeger" class="yil-deger"></span></div>
    <button id="filtreTemizle" class="temizle-buton" type="button">filtreleri temizle</button>
  </div>
  <div id="rows"></div>
  <div id="perde"></div>
  <aside id="panel" role="dialog" aria-modal="true" aria-labelledby="p-kisa" inert aria-hidden="true">
    <button id="kapat" aria-label="Kapat">✕</button>
    <div id="p-govde"></div>
  </aside>
</div>
<script src="../../veri/partiler.js"></script>
<script src="../test/fikstur.js"></script>
<script src="../../ortak.js"></script>
<script src="../../sandik-mantik.js"></script>
<script src="../../sandik-sayfa.js"></script>
```

Önizlemede `http://localhost:8123/araclar/denetim/fikstur.html`'i aç (1400px). Expected: konsolda `Failed to load resource … sandik-sayfa.js` / `sandik.css` 404 — henüz yoklar.

- [ ] **Adım 2: Araç çubuğu stillerini `ortak.css`'e taşı**

`index.html`'in `<style>` bloğundan şu kuralları kes ve `ortak.css`'teki "ortak bileşenler" başlığının altına yapıştır: `.araclar{…}`, `.yil-filtre{…}`, `.yil-filtre input[type=range]{…}`, `.yil-deger{…}`, `.temizle-buton{…}`, `.temizle-buton:hover{…}`, `.temizle-buton.aktif{…}` (bugünkü dosyada 36–39 ve 47–58. satırlar; `.ara-kutu` kuralları soyağacına özgüdür, `index.html`'de kalır). `index.html`'in mobil sorgusundaki `.araclar{gap:12px}`, `.yil-filtre{width:100%}` ve `.yil-filtre input[type=range]{flex:1}` satırlarını `ortak.css`'in `@media (max-width:760px)` bloğuna taşı.

- [ ] **Adım 3: `sandik.css`'i yaz**

```css
/* Sandık sayfasına özgü stiller. Ortak bileşenler (bant, kart kutusu, panel, araç çubuğu) ortak.css'te. */
.turlar{display:flex;flex-wrap:wrap;gap:6px}
.tur-dugme{
  font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.04em;
  padding:5px 9px;border:1px solid var(--cizgi);background:none;color:var(--soluk);cursor:pointer;
}
.tur-dugme[aria-pressed="true"]{border-color:var(--murekkep);color:var(--murekkep);background:rgba(21,24,16,.07);font-weight:600}
.tur-dugme:focus-visible{outline:2px solid var(--murekkep);outline-offset:2px}

#rows{max-width:1100px;margin:24px auto 0}
.s-donem.kapali{display:none}
.s-satir{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px;margin:0 0 14px}
.s-oge-serit{grid-column:1/-1}
.s-bos{font-size:12px;color:var(--soluk);font-style:italic;margin:0 0 14px}
.s-kap{border:1px dashed #7A1509;padding:10px 10px 0;margin:-8px 0 14px}

.s-kart{padding:9px 11px 10px}
.s-ust{
  display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:5px;
  font-family:"IBM Plex Mono",monospace;font-size:11px;color:var(--soluk);
}
.t-rozet{
  font-family:"IBM Plex Mono",monospace;font-size:9px;font-weight:600;letter-spacing:.07em;
  padding:1px 5px;border:1px solid currentColor;white-space:nowrap;
}
.s-baslik{font-family:"Fraunces",serif;font-weight:700;font-size:15px;line-height:1.15;color:var(--aile);margin-bottom:6px}
.cubuk{display:flex;height:9px;margin:4px 0;background:var(--kagit)}
.cubuk i{display:block;height:100%}
.cubuk-yok{font-size:10.5px;color:var(--soluk);font-style:italic;margin:4px 0}
.s-ilk3{list-style:none;margin:6px 0 0;padding:0;font-size:11.5px;color:#2A2E22}
.s-ilk3 li{display:inline;margin-right:9px}
.s-baraj,.s-not,.s-sehirler{font-size:10.5px;color:var(--soluk);margin-top:5px;line-height:1.4}
.s-kucuk .s-tek{font-size:12px;color:#2A2E22}

.s-serit{
  border-left:4px solid var(--aile);padding:5px 10px;font-size:12px;color:#2A2E22;
  background:rgba(245,245,240,.55);
}
.s-serit a{color:inherit;text-underline-offset:3px;text-decoration-color:var(--cizgi)}
.s-bitis{font-size:11px;color:var(--soluk);margin-top:2px}

#rows.filtreli .s-oge{opacity:.25}
#rows.filtreli .s-oge.sonuc{opacity:1}

@media (max-width:760px){
  .s-satir{grid-template-columns:1fr}
  .turlar{width:100%}
}
```

- [ ] **Adım 4: `sandik-sayfa.js`'i yaz**

```js
/* Sandık sayfasının DOM bağlaması.
   Gerektirir: window.PARTILER, window.SANDIK, window.Ortak, window.SandikMantik ve sayfada
   #turlar, #yilKaydirici, #yilDeger, #filtreTemizle, #rows, #perde, #panel, #kapat, #p-govde. */
(function () {
  const P = window.PARTILER, S = window.SANDIK, O = window.Ortak;
  const M = window.SandikMantik.olustur(P, O);
  const TURLER = [["genel", "Genel"], ["yerel", "Yerel"], ["referandum", "Referandum"],
    ["cb-halk", "CB (halk)"], ["cb-tbmm", "CB (TBMM)"], ["ara", "Ara seçim"], ["hukumet", "Hükümet"]];
  const acikTurler = new Set(TURLER.map(t => t[0]));
  let yilFiltre = null;

  const rows = document.getElementById("rows");
  const kr = M.kronoloji(S);

  /* ---- çizim ---- */
  function ogeHTML(o) {
    if (o.tur === "secim") {
      const y = o.tarih.slice(0, 4);
      return '<div class="s-oge" data-tur="' + o.kayit.tur + '" data-bas="' + y + '" data-bit="' + y + '">' +
        M.kartHTML(o.kayit) + "</div>";
    }
    const h = o.hukumet;
    return '<div class="s-oge s-oge-serit" data-tur="hukumet" data-bas="' + h.baslangic.slice(0, 4) +
      '" data-bit="' + (h.bitis ? h.bitis.slice(0, 4) : "9999") + '">' + M.seritHTML(h) + "</div>";
  }
  function satirHTML(ogeler) {
    return ogeler.length ? '<div class="s-satir">' + ogeler.map(ogeHTML).join("") + "</div>" : "";
  }
  function bantBul(donem) { return rows.querySelector('.banner[aria-controls="' + donem.id + '"]'); }

  P.DONEMLER.forEach((d, i) => {
    const b = document.createElement("div");
    b.className = "banner";
    b.innerHTML = '<span class="yil">' + d.yil + '</span><span class="ad">' + d.ad +
      '</span><span class="ok" aria-hidden="true">−</span>';
    const icerik = document.createElement("div");
    icerik.className = "s-donem"; icerik.id = "donem-" + i;
    const ogeler = kr.bantlar[i].ogeler, k = d.kesinti, kap = kr.kaplar[i] || [];
    // kesinti bandı dönemin sonunda değil, kendi tarihinde durur (spesifikasyon §6.3)
    const once = k ? ogeler.filter(o => o.tarih < k.tarih) : ogeler;
    const sonra = k ? ogeler.filter(o => o.tarih >= k.tarih) : [];
    let html = !ogeler.length && !kap.length ? '<p class="s-bos">bu dönem için henüz kayıt yok</p>' : "";
    html += satirHTML(once);
    if (k) {
      html += '<div class="banner kesinti"><span class="yil">⚡</span><span class="ad">' + M.kacis(k.metin) + "</span></div>";
      if (kap.length) html += '<div class="s-kap" role="group" aria-label="askerî yönetim dönemi">' + satirHTML(kap) + "</div>";
    }
    html += satirHTML(sonra);
    icerik.innerHTML = html;
    rows.appendChild(b); rows.appendChild(icerik);
    O.bantKur(b, icerik);
  });

  /* ---- araç çubuğu ---- */
  const turlar = document.getElementById("turlar");
  turlar.innerHTML = TURLER.map(t => '<button type="button" class="tur-dugme" data-tur="' + t[0] +
    '" aria-pressed="true">' + t[1] + "</button>").join("");
  turlar.addEventListener("click", e => {
    const d = e.target.closest(".tur-dugme"); if (!d) return;
    const t = d.dataset.tur;
    if (acikTurler.has(t)) acikTurler.delete(t); else acikTurler.add(t);
    d.setAttribute("aria-pressed", String(acikTurler.has(t)));
    uygula();
  });

  const yillar = P.DONEMLER.map(d => d.yil.split("–").map(x => +x.trim()));
  const YMIN = yillar[0][0], YMAX = yillar[yillar.length - 1][1];
  const kaydirici = document.getElementById("yilKaydirici"), yilDeger = document.getElementById("yilDeger");
  kaydirici.min = YMIN; kaydirici.max = YMAX; kaydirici.value = YMAX; yilDeger.textContent = YMAX;
  kaydirici.addEventListener("input", () => {
    const v = +kaydirici.value;
    yilFiltre = v === YMAX ? null : v;   // en sağ uç "filtre yok" demektir
    yilDeger.textContent = v;
    uygula();
  });

  const temizle = document.getElementById("filtreTemizle");
  temizle.addEventListener("click", () => {
    TURLER.forEach(t => acikTurler.add(t[0]));
    turlar.querySelectorAll(".tur-dugme").forEach(d => d.setAttribute("aria-pressed", "true"));
    yilFiltre = null; kaydirici.value = YMAX; yilDeger.textContent = YMAX;
    uygula();
  });

  function uygula() {
    rows.classList.toggle("filtreli", yilFiltre !== null);
    rows.querySelectorAll(".s-oge").forEach(el => {
      el.hidden = !acikTurler.has(el.dataset.tur);
      const tutar = yilFiltre !== null && +el.dataset.bas <= yilFiltre && yilFiltre <= +el.dataset.bit;
      el.classList.toggle("sonuc", tutar);
      const donem = el.closest(".s-donem");
      if (tutar && !el.hidden && donem.classList.contains("kapali")) O.bantDurum(bantBul(donem), donem, false);
    });
    temizle.classList.toggle("aktif", yilFiltre !== null || acikTurler.size < TURLER.length);
  }

  /* ---- panel ve doğrudan bağlantı ---- */
  const Panel = O.panelKur({
    panel: document.getElementById("panel"), perde: document.getElementById("perde"),
    govde: document.getElementById("p-govde"), kapatDugmesi: document.getElementById("kapat"),
    odakSecici: ".s-kart",
    kapaninca: () => history.replaceState(null, "", location.pathname + location.search)
  });
  function ac(id) {
    const k = S.secimler.find(x => x.id === id); if (!k) return;
    const p = M.panelHTML(k, S);
    Panel.ac(p.html, p.renk);
    history.replaceState(null, "", "#" + id);
  }
  rows.addEventListener("click", e => {
    const k = e.target.closest(".s-kart"); if (k) ac(k.dataset.id);
  });
  rows.addEventListener("keydown", e => {
    const k = e.target.closest(".s-kart");
    if (k && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); ac(k.dataset.id); }
  });
  function hashAc() {
    const id = O.hashOku(location.hash); if (!id) return;
    const el = rows.querySelector('[data-id="' + id + '"]'); if (!el) return;
    const donem = el.closest(".s-donem");
    if (donem.classList.contains("kapali")) O.bantDurum(bantBul(donem), donem, false);
    el.scrollIntoView({ block: "center" });
    el.focus();
    ac(id);
  }
  window.addEventListener("hashchange", hashAc);
  hashAc();
})();
```

- [ ] **Adım 5: `sandik.html`'i yaz**

```html
<!DOCTYPE html>
<html lang="tr">
<meta charset="utf-8">
<title>Sandık — Türkiye Siyasi Partileri Soyağacı</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="1923'ten bugüne Türkiye'deki genel ve yerel seçimler, referandumlar, cumhurbaşkanlığı seçimleri ve hükümetler tek kronolojide.">
<meta property="og:type" content="website">
<meta property="og:title" content="Sandık — Türkiye Siyasi Partileri Soyağacı">
<meta property="og:description" content="1923'ten bugüne seçimler, referandumlar ve hükümetler tek kronolojide.">
<meta property="og:locale" content="tr_TR">
<link rel="stylesheet" href="ortak.css">
<link rel="stylesheet" href="sandik.css">

<nav class="ustmenu">
  <div class="ustmenu-ic">
    <a href="index.html" class="ustmenu-link">Ana sayfa</a>
    <a href="sandik.html" class="ustmenu-link aktif">Sandık</a>
    <a href="kaynakca.html" class="ustmenu-link">Kaynakça &amp; metodoloji</a>
  </div>
</nav>
<div class="wrap">
  <header>
    <div class="eyebrow">1923 — 2026 · seçimler, referandumlar, hükümetler</div>
    <h1>Sandık<br><em>seçimler ve hükümetler</em></h1>
    <p class="lede">Genel ve yerel seçimler, referandumlar, cumhurbaşkanlığı seçimleri, ara seçimler ve
      kurulan hükümetler; soyağacıyla aynı dönem bantlarında, tarih sırasıyla.</p>
    <p class="disclaimer">"—" işareti, sayının iki kaynakla doğrulanamadığı anlamına gelir; tahmin
      yazılmaz. İttifak listelerinde YSK'nın resmî liste sonucu esas alınır; listeden seçilen başka
      parti vekilleri ayrıca belirtilir.</p>
  </header>

  <div class="araclar">
    <div class="turlar" id="turlar" role="group" aria-label="Kayıt türleri"></div>
    <div class="yil-filtre">
      <span>yıl</span>
      <input id="yilKaydirici" type="range" step="1" aria-label="Yıl filtresi">
      <span id="yilDeger" class="yil-deger"></span>
    </div>
    <button id="filtreTemizle" class="temizle-buton" type="button">filtreleri temizle</button>
  </div>

  <div id="rows"></div>

  <div id="perde"></div>
  <aside id="panel" role="dialog" aria-modal="true" aria-labelledby="p-kisa" inert aria-hidden="true">
    <button id="kapat" aria-label="Kapat">✕</button>
    <div id="p-govde"></div>
  </aside>

  <footer>
    <p><b>Okuma notu.</b> Seçimler tarihlerine, hükümetler kuruluş tarihlerine göre soyağacındaki
      dönem bantlarına yerleşir. Askerî yönetim dönemlerinde yapılanlar kırmızı kesinti bandının
      altında toplanır.</p>
    <p><b>Ölçüler ve kaynaklar.</b> Hangi sayının neye göre hesaplandığı
      <a href="kaynakca.html">kaynakça &amp; metodoloji</a> sayfasındadır.</p>
  </footer>
</div>

<script src="veri/partiler.js"></script>
<script src="veri/sandik.js"></script>
<script src="ortak.js"></script>
<script src="sandik-mantik.js"></script>
<script src="sandik-sayfa.js"></script>
```

- [ ] **Adım 6: Birim testleri ve veri denetimi hâlâ geçiyor mu**

Run: `node --test "araclar/test/*.test.js" && node araclar/dogrula.js`
Expected: bütün testler PASS; `hata yok`.

- [ ] **Adım 7: Tarayıcı denetimleri**

1. `http://localhost:8123/araclar/denetim/fikstur.html` (1400px) → `araclar/denetim/sandik.js`'i değerlendir. Beklenen:
   `kart:5, serit:2, bant:8, kesinti:4, bos:5, hukumetKapali:{gizli:true, basili:"false"}, yil2003:["serit"], yilEnSag:false, panel:{acik:true, baslik:"1999 Genel Seçimi", hash:"#1999-04-genel"}, kapaninca:{inert:true, odakGeri:true, hash:""}, bantKapali:0`. Konsolda hata yok.
2. `http://localhost:8123/araclar/denetim/fikstur.html#2002-11-genel` → panel açık, `#p-kisa` = `"2002 Genel Seçimi"`.
3. `resize_window {preset:"mobile"}` → `.s-satir` tek sütun (`getComputedStyle(document.querySelector('.s-satir')).gridTemplateColumns` tek değer); ekran görüntüsü al. `resize_window {preset:"desktop"}`.
4. `http://localhost:8123/sandik.html` (gerçek, henüz boş veri) → 8 bant, 4 kesinti, 8 `.s-bos`, konsol hatası yok. Aynı sayfayı `file:///…/sandik.html` ile de aç: 8 bant görünüyor.
5. `http://localhost:8123/index.html` → `araclar/denetim/soyagaci.js` çıktısı Görev 3'tekiyle aynı (araç çubuğu stilleri taşındı).

- [ ] **Adım 8: Commit**

```bash
git add sandik.html sandik-sayfa.js sandik.css index.html ortak.css araclar/denetim/fikstur.html araclar/denetim/sandik.js
git commit -F - <<'MSG'
Sandık sayfası: dönem bantları, kesinti kapları, filtreler, panel

sandik-sayfa.js kronolojiyi soyağacındaki bantlara çizer; kesintiler kendi
tarihinde durur, askerî yönetim dönemindeki kayıtlar kesinti kabında
toplanır. Tür düğmeleri, yıl kaydırıcısı ve #kimlik doğrudan bağlantısı
çalışır. Sahte fikstürle açılan test sayfası ve tarayıcı denetimi eklendi.
Menü bağlantısı henüz eklenmedi (Görev 8).

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
MSG
```

---

