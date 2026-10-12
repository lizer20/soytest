/* Hızlı arama: her sayfada üst menüdeki düğme, "/" ya da Ctrl+K ile açılır. Partiler, genel başkanlar,
   seçimler ve hükümetler tek kutuda aranır; sonuç seçilince ilgili sayfada penceresi açılır.
   Sayfada olmayan veri dosyaları kutu ilk açıldığında <script> ile yüklenir (file:// uyumlu).
   Gerektirir: window.Ortak. */
(function () {
  const O = window.Ortak;
  const menu = document.querySelector(".ustmenu-ic");
  if (!O || !menu) return;
  const SAYFA = location.pathname.split("/").pop() || "index.html";
  const GRUPLAR = ["Sayfalar", "Partiler", "Genel başkanlar", "Seçimler", "Hükümetler"];
  const GRUP_SINIR = 6;
  const SAYFALAR = [
    ["Soyağacı", "partilerin kuruluş, bölünme ve katılma çizgileri", "index.html", "ana sayfa soyagaci sema"],
    ["Sandık", "seçimler, referandumlar ve hükümetler", "sandik.html", "secim hukumet referandum"],
    ["Harita", "il il kazanan parti, referandumda evet ve hayır", "harita.html", "il harita"],
    ["Kaynakça & metodoloji", "ölçüler, kurallar ve kaynaklar", "kaynakca.html", "kaynak metodoloji yontem"]
  ];
  const ORNEKLER = ["Demirel", "Refah", "1983", "referandum", "koalisyon"];

  /* ---- menü düğmesi ve iletişim kutusu ---- */
  const dugme = document.createElement("button");
  dugme.type = "button";
  dugme.className = "ustmenu-ara";
  dugme.setAttribute("aria-label", "Sitede ara");
  dugme.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><circle cx="6.8" cy="6.8" r="4.8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10.4 10.4 14.5 14.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>' +
    '<span class="ustmenu-ara-yazi">ara</span><kbd>/</kbd>';
  menu.appendChild(dugme);

  const kutu = document.createElement("dialog");
  kutu.className = "ha";
  kutu.setAttribute("aria-label", "Sitede ara");
  kutu.innerHTML =
    '<div class="ha-ust"><svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><circle cx="6.8" cy="6.8" r="4.8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10.4 10.4 14.5 14.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>' +
    '<input class="ha-girdi" type="search" placeholder="Parti, kişi, seçim ya da hükümet ara…" autocomplete="off" spellcheck="false" ' +
    'role="combobox" aria-expanded="true" aria-controls="haListe" aria-autocomplete="list" aria-label="Sitede ara">' +
    '<button type="button" class="ha-kapat" aria-label="Kapat">esc</button></div>' +
    '<div class="ha-liste" id="haListe" role="listbox" aria-label="Sonuçlar"></div>' +
    '<div class="ha-alt"><span><kbd>↑</kbd><kbd>↓</kbd> seç</span><span><kbd>↵</kbd> aç</span><span><kbd>esc</kbd> kapat</span></div>';
  document.body.appendChild(kutu);
  const girdi = kutu.querySelector(".ha-girdi"), liste = kutu.querySelector(".ha-liste");

  /* ---- veri: sayfada yoksa yüklenir, dizin bir kez kurulur ---- */
  let dizin = null, M = null, hazirlik = null;
  function hazirla() {
    if (hazirlik) return hazirlik;
    const yukle = (sinama, src) => () => sinama() ? Promise.resolve() : O.betikYukle(src);
    hazirlik = Promise.resolve()
      .then(yukle(() => window.PARTILER, "veri/partiler.js"))
      .then(yukle(() => window.SANDIK, "veri/sandik.js"))
      .then(yukle(() => window.GENEL_BASKANLAR, "veri/genel-baskanlar.js"))
      .then(yukle(() => window.SandikMantik, "sandik-mantik.js"))
      .then(dizinKur);
    hazirlik.catch(() => { hazirlik = null; });
    return hazirlik;
  }
  function dizinKur() {
    const P = window.PARTILER, S = window.SANDIK, GB = window.GENEL_BASKANLAR || {};
    M = window.SandikMantik.olustur(P, O);
    const n = M.aramaNormal, l = [];
    const ekle = (grup, bas, ek, href, renk, yan, sira) =>
      l.push({ grup, bas, ek, href, renk, sira: sira || "", ana: n(bas), yan: n(bas + " " + ek + " " + (yan || "")) });
    SAYFALAR.forEach(s => ekle(0, s[0], s[1], s[2], null, s[3]));
    P.N.forEach(p => ekle(1, p.kisa, p.ad + " · " + p.yil, "index.html#" + p.id, P.AILE[p.aile].ham,
      [p.sembol, P.AILE[p.aile].ad].join(" "), p.yil));
    Object.keys(GB).forEach(id => {
      const p = P.N.find(x => x.id === id); if (!p) return;
      GB[id].forEach(g => {
        const yil = M.baskanYili(g);
        ekle(2, g.ad, p.kisa + " genel başkanı" + (yil ? " · " + yil : ""), "index.html#" + id, P.AILE[p.aile].ham, p.ad, g.bas || "");
      });
    });
    const haritali = SAYFA === "harita.html" && window.IL_SONUCLARI ? window.IL_SONUCLARI : {};
    S.secimler.forEach(k => {
      const renk = k.tur === "genel" || k.tur === "yerel" || k.tur === "cb-halk" ? M.kartRengi(k) : null;
      ekle(3, k.tarih.slice(0, 4) + " " + M.TUR_AD[k.tur], O.tarihYaz(k.tarih) + (k.konu ? " · " + k.konu : ""),
        (haritali[k.id] ? "harita.html#" : "sandik.html#") + k.id, renk, M.aramaMetni(k), k.tarih);
    });
    S.hukumetler.forEach(h => {
      const kim = h.basbakan || h.baskan || "";
      ekle(4, M.hukumetAdi(h) + (kim ? " · " + kim : ""),
        O.tarihYaz(h.baslangic) + (h.bitis ? " – " + O.tarihYaz(h.bitis) : " – görevde") + (h.lakap ? " · " + h.lakap : ""),
        "sandik.html#" + M.hukumetId(h), M.hukumetRengi(h), M.aramaMetni(h), h.baslangic);
    });
    dizin = l;
  }

  /* ---- arama: her sözcük geçmeli; başlıkta geçen, sözcük başında geçen ve başlığın başında geçen öne çıkar ---- */
  function puan(x, sozler) {
    if (!sozler.every(w => x.yan.includes(w))) return 0;
    let p = sozler.every(w => x.ana.includes(w)) ? 100 : 10;
    if (x.ana.startsWith(sozler[0])) p += 30;
    sozler.forEach(w => { if (new RegExp("(^|[^a-z0-9])" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(x.ana)) p += 10; });
    return p;
  }
  // eşleşen parçalar <mark> ile işaretlenir; sadeleştirme harf sayısını değiştirmediği için yerler örtüşür
  function isaretle(metin, sozler) {
    const n = M.aramaNormal(metin), isaret = new Array(metin.length).fill(false);
    sozler.forEach(w => { let i = n.indexOf(w); while (i >= 0 && w) { for (let j = i; j < i + w.length; j++) isaret[j] = true; i = n.indexOf(w, i + w.length); } });
    if (n.length !== metin.length) return M.kacis(metin);
    let s = "", ac = false;
    for (let i = 0; i < metin.length; i++) {
      if (isaret[i] !== ac) { s += isaret[i] ? "<mark>" : "</mark>"; ac = isaret[i]; }
      s += M.kacis(metin[i]);
    }
    return s + (ac ? "</mark>" : "");
  }

  let sonuclar = [], secili = 0;
  function satirHTML(x, i, sozler) {
    return '<a class="ha-sonuc" role="option" id="ha-' + i + '" data-i="' + i + '" href="' + x.href + '" aria-selected="false">' +
      '<i class="ha-nokta"' + (x.renk ? ' style="background:' + x.renk + '"' : "") + "></i>" +
      '<span class="ha-bas">' + isaretle(x.bas, sozler) + '</span><span class="ha-ek">' + M.kacis(x.ek) + "</span></a>";
  }
  function ara() {
    const q = girdi.value.trim();
    if (!dizin) { liste.innerHTML = '<p class="ha-bilgi">yükleniyor…</p>'; return; }
    const sozler = M.aramaNormal(q).split(/\s+/).filter(Boolean);
    sonuclar = []; secili = 0;
    if (!sozler.length) { bosDurum(); return; }
    const gruplar = GRUPLAR.map(() => []);
    dizin.forEach(x => { const p = puan(x, sozler); if (p) gruplar[x.grup].push({ x, p }); });
    // grup içinde puan, eşitlikte yeniden eskiye; gruplar en iyi sonucuna göre sıralanır
    gruplar.forEach(g => g.sort((a, b) => b.p - a.p || (b.x.sira > a.x.sira ? 1 : b.x.sira < a.x.sira ? -1 : 0)));
    // yalnız ayrıntıda geçen (başlıkta geçmeyen) eşitlikte çok sonuçlu grup öne
    const sira = GRUPLAR.map((_, i) => i).filter(i => gruplar[i].length)
      .sort((a, b) => gruplar[b][0].p - gruplar[a][0].p ||
        (gruplar[a][0].p < 100 ? gruplar[b].length - gruplar[a].length : 0) || a - b);
    let html = "";
    sira.forEach(gi => {
      const g = gruplar[gi];
      html += '<div class="ha-grup" role="presentation">' + GRUPLAR[gi] + '<span>' + g.length + "</span></div>";
      const sinir = g.length === GRUP_SINIR + 1 ? g.length : GRUP_SINIR;   // "1 sonuç daha" yazmaktansa o da gösterilir
      g.slice(0, sinir).forEach(({ x }) => { html += satirHTML(x, sonuclar.length, sozler); sonuclar.push(x); });
      if (g.length > sinir) {
        const hedef = gi === 1 || gi === 2 ? "index.html" : gi >= 3 ? "sandik.html" : null;
        if (hedef) {
          const x = { href: hedef + "?ara=" + encodeURIComponent(q) };
          html += '<a class="ha-sonuc ha-tumu" role="option" id="ha-' + sonuclar.length + '" data-i="' + sonuclar.length + '" href="' + x.href +
            '" aria-selected="false">' + (g.length - GRUP_SINIR) + " sonuç daha · " + (hedef === "index.html" ? "soyağacında" : "Sandık'ta") + " süz →</a>";
          sonuclar.push(x);
        }
      }
    });
    liste.innerHTML = html || '<p class="ha-bilgi">“' + M.kacis(q) + '” için sonuç yok.</p>';
    sec(0);
  }
  function bosDurum() {
    let html = '<div class="ha-grup" role="presentation">Sayfalar</div>';
    dizin.filter(x => x.grup === 0).forEach(x => { html += satirHTML(x, sonuclar.length, []); sonuclar.push(x); });
    html += '<div class="ha-ipucu"><span>örnek:</span>' + ORNEKLER.map(o => '<button type="button" class="ha-ornek">' + o + "</button>").join("") + "</div>" +
      '<div class="ha-kisayol"><div class="ha-grup">Kısayollar</div><dl>' +
      "<dt><kbd>/</kbd> <kbd>Ctrl</kbd> <kbd>K</kbd></dt><dd>hızlı arama</dd>" +
      "<dt><kbd>←</kbd> <kbd>→</kbd></dt><dd>açık pencerede önceki / sonraki kayıt</dd>" +
      "<dt><kbd>esc</kbd></dt><dd>pencereyi ya da aramayı kapat</dd>" +
      (SAYFA === "harita.html" ? "<dt><kbd>←</kbd> <kbd>→</kbd></dt><dd>haritada önceki / sonraki seçim</dd>" : "") +
      "</dl></div>";
    liste.innerHTML = html;
    sec(0);
  }
  function sec(i) {
    if (!sonuclar.length) { girdi.removeAttribute("aria-activedescendant"); return; }
    secili = (i + sonuclar.length) % sonuclar.length;
    liste.querySelectorAll(".ha-sonuc").forEach(a => {
      const s = +a.dataset.i === secili;
      a.classList.toggle("secili", s); a.setAttribute("aria-selected", String(s));
      if (s) a.scrollIntoView({ block: "nearest" });
    });
    girdi.setAttribute("aria-activedescendant", "ha-" + secili);
  }
  function git(href) {
    kapat();
    const [dosya, hedef] = href.split("#");
    // aynı sayfadaki kayıt: adres değişince sayfanın kendi hashchange'i pencereyi açar
    if (dosya === SAYFA && hedef) {
      if (location.hash === "#" + hedef) window.dispatchEvent(new HashChangeEvent("hashchange"));
      else location.hash = hedef;
    } else location.href = href;
  }

  /* ---- açma, kapatma, tuşlar ---- */
  let oncekiOdak = null;
  function ac() {
    if (kutu.open) { girdi.select(); return; }
    oncekiOdak = document.activeElement;
    kutu.showModal();
    girdi.value = ""; girdi.focus();
    if (dizin) bosDurum(); else { liste.innerHTML = '<p class="ha-bilgi">yükleniyor…</p>'; hazirla().then(ara, () => { liste.innerHTML = '<p class="ha-bilgi">arama verisi yüklenemedi.</p>'; }); }
  }
  function kapat() {
    if (kutu.open) kutu.close();
  }
  // esc yalnız aramayı kapatsın, arkadaki açık pencereyi değil
  kutu.addEventListener("keydown", e => { if (e.key === "Escape") e.stopPropagation(); });
  kutu.addEventListener("close", () => {
    if (oncekiOdak && document.body.contains(oncekiOdak)) oncekiOdak.focus({ preventScroll: true });
  });
  dugme.addEventListener("click", ac);
  kutu.querySelector(".ha-kapat").addEventListener("click", kapat);
  kutu.addEventListener("click", e => {
    if (e.target === kutu) { kapat(); return; }   // kutunun dışı (arka perde)
    const o = e.target.closest(".ha-ornek");
    if (o) { girdi.value = o.textContent; ara(); girdi.focus(); return; }
    const a = e.target.closest(".ha-sonuc");
    if (a && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) { e.preventDefault(); git(a.getAttribute("href")); }
  });
  liste.addEventListener("mousemove", e => {
    const a = e.target.closest(".ha-sonuc"); if (a && +a.dataset.i !== secili) sec(+a.dataset.i);
  });
  girdi.addEventListener("input", ara);
  girdi.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { e.preventDefault(); sec(secili + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sec(secili - 1); }
    else if (e.key === "Enter") {
      e.preventDefault();
      const x = sonuclar[secili]; if (x) git(x.href);
    }
  });
  document.addEventListener("keydown", e => {
    if (kutu.open) return;
    const yaziyor = e.target.closest && e.target.closest("input, textarea, select, [contenteditable]");
    if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) { e.preventDefault(); ac(); }
    else if (e.key === "/" && !yaziyor && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); ac(); }
  });
  // arka planda, sayfa boşta kalınca veriyi hazırla: ilk açılış beklemesin
  (window.requestIdleCallback || (f => setTimeout(f, 1500)))(() => hazirla().catch(() => {}));

  /* ---- sayfa adresinde ?ara= varsa (hızlı aramadaki "sonuç daha" bağlantısı) sayfanın kendi arama kutusu doldurulur ---- */
  const q = new URLSearchParams(location.search).get("ara");
  const kendi = document.getElementById("ara");
  if (q && kendi) { kendi.value = q; kendi.dispatchEvent(new Event("input")); }
})();
