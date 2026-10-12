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
    const p = iso.split("-").map(Number);
    const ay = kisa ? AYLAR[p[1] - 1].slice(0, 3) : AYLAR[p[1] - 1];
    return (p.length > 2 ? p[2] + " " : "") + ay + " " + p[0];
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
      if (k && !o.panel.contains(k)) sonOdak = k;
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

  /* ---- sonradan yüklenen veri dosyası: fetch değil <script> olduğu için file:// üzerinde de çalışır.
     Aynı dosya bir kez yüklenir; sıra gerekiyorsa sözler zincirlenir. ---- */
  const yuklenenler = {};
  function betikYukle(src) {
    if (!yuklenenler[src]) yuklenenler[src] = new Promise((tamam, hata) => {
      const b = document.createElement("script");
      b.src = src;
      b.onload = () => tamam();
      b.onerror = () => { delete yuklenenler[src]; hata(new Error(src + " yüklenemedi")); };
      document.head.appendChild(b);
    });
    return yuklenenler[src];
  }

  return { tarihYaz, yuzde, yuzdeYaz, sayiYaz, hashOku, bantDurum, bantKur, panelKur, betikYukle };
});
