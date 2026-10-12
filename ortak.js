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

  /* ---- açıklama paneli: inert, odak tuzağı, odak iadesi; üst çubukta önceki / sonraki kayıt, bağlantı ve
     kapat. Telefonda pencere alttan açılır ve aşağı çekilerek kapatılır. o.gezinti verilirse
     o.gezinti.komsu(id, ±1) → {id, ad} | null ve o.gezinti.git(id) ile kayıtlar arasında gezilir (← → tuşları). ---- */
  function panelKur(o) {
    let sonOdak = null, simdiki = null;
    const ust = document.createElement("div");
    ust.className = "p-ust";
    ust.innerHTML = '<span class="p-tutamak" aria-hidden="true"></span>' + (o.gezinti ?
      '<button type="button" class="p-dugme p-gez" data-yon="-1" aria-label="Önceki kayıt">‹</button>' +
      '<button type="button" class="p-dugme p-gez" data-yon="1" aria-label="Sonraki kayıt">›</button>' : "") +
      '<span class="p-bosluk"></span><button type="button" class="p-dugme p-bag"></button>';
    ust.appendChild(o.kapatDugmesi);
    o.kapatDugmesi.classList.add("p-dugme");
    o.panel.insertBefore(ust, o.panel.firstChild);
    const bagDugmesi = ust.querySelector(".p-bag");
    // dokunmatik aygıtta paylaşım menüsü, yoksa panoya kopyalama
    const paylas = !!navigator.share && window.matchMedia && matchMedia("(pointer:coarse)").matches;
    const BAG_YAZI = paylas ? "paylaş" : "bağlantıyı kopyala";
    bagDugmesi.textContent = BAG_YAZI;

    o.panel.addEventListener("scroll", () => ust.classList.toggle("golge", o.panel.scrollTop > 4), { passive: true });

    function acikMi() { return o.panel.classList.contains("acik"); }
    function gezintiyiGuncelle() {
      if (!o.gezinti) return;
      ust.querySelectorAll(".p-gez").forEach(d => {
        const k = simdiki ? o.gezinti.komsu(simdiki, +d.dataset.yon) : null;
        d.disabled = !k;
        d.dataset.hedef = k ? k.id : "";
        d.title = k ? (d.dataset.yon < 0 ? "Önceki: " : "Sonraki: ") + k.ad + " (" + (d.dataset.yon < 0 ? "←" : "→") + ")" : "";
      });
    }
    function ac(html, renk, id) {
      o.panel.style.setProperty("--aile", renk);
      o.govde.innerHTML = html;
      simdiki = id || null;
      gezintiyiGuncelle();
      bagDugmesi.textContent = BAG_YAZI;
      bagDugmesi.hidden = !simdiki;
      // paneli açan öğeyi hatırla; panel içinden gelindiyse öncekini koru
      const a = document.activeElement;
      const k = a && a.closest ? a.closest(o.odakSecici) : null;
      if (k && !o.panel.contains(k)) sonOdak = k;
      const zatenAcik = acikMi();
      o.panel.removeAttribute("inert");
      o.panel.removeAttribute("aria-hidden");
      o.panel.classList.add("acik"); o.perde.classList.add("acik");
      o.panel.scrollTop = 0;
      // gezinirken odak bastığı düğmede kalır; ilk açılışta kapat düğmesine gider
      if (!zatenAcik || !o.panel.contains(document.activeElement)) o.kapatDugmesi.focus();
      // açık pencerede içerik değişince (önceki / sonraki) yeni içerik hafifçe belirir
      if (zatenAcik && o.govde.animate && !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches))
        o.govde.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 180, easing: "ease-out" });
    }
    function kapat() {
      if (!acikMi()) return;
      o.panel.classList.remove("acik"); o.perde.classList.remove("acik");
      o.panel.setAttribute("inert", "");
      o.panel.setAttribute("aria-hidden", "true");
      if (sonOdak && document.body.contains(sonOdak)) sonOdak.focus({ preventScroll: true });
      sonOdak = null; simdiki = null;
      if (o.kapaninca) o.kapaninca();
    }
    function odakHedefi(el) { sonOdak = el; }
    function gez(yon) {
      const d = ust.querySelector('.p-gez[data-yon="' + yon + '"]');
      if (d && !d.disabled && d.dataset.hedef) o.gezinti.git(d.dataset.hedef);
    }
    ust.addEventListener("click", e => {
      const d = e.target.closest(".p-gez"); if (d) gez(+d.dataset.yon);
    });

    bagDugmesi.addEventListener("click", () => {
      if (!simdiki) return;
      const adres = location.href.split("#")[0] + "#" + simdiki;
      const bildir = yazi => {
        bagDugmesi.textContent = yazi;
        clearTimeout(bagDugmesi._t);
        bagDugmesi._t = setTimeout(() => { bagDugmesi.textContent = BAG_YAZI; }, 1800);
      };
      if (paylas) {
        const b = o.govde.querySelector("#p-kisa");
        navigator.share({ title: (b ? b.textContent + " — " : "") + document.title, url: adres }).catch(() => {});
        return;
      }
      kopyala(adres, o.panel).then(() => bildir("kopyalandı ✓"), () => bildir("kopyalanamadı"));
    });

    // açıkken odak panelin dışına kaçmasın (aria-modal'ın davranışsal karşılığı)
    o.panel.addEventListener("keydown", e => {
      if (e.key !== "Tab") return;
      const l = [...o.panel.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')]
        .filter(x => !x.disabled && !x.hidden);
      if (!l.length) return;
      const ilk = l[0], son = l[l.length - 1];
      if (e.shiftKey && document.activeElement === ilk) { e.preventDefault(); son.focus(); }
      else if (!e.shiftKey && document.activeElement === son) { e.preventDefault(); ilk.focus(); }
    });
    o.kapatDugmesi.addEventListener("click", kapat);
    o.perde.addEventListener("click", kapat);
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") { kapat(); return; }
      if (!acikMi() || !o.gezinti || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (e.target.closest && e.target.closest("input, select, textarea")) return;
      e.preventDefault();
      gez(e.key === "ArrowLeft" ? -1 : 1);
    });

    /* telefonda alttan açılan pencere: en üstteyken (ya da üst çubuktan) aşağı çekilirse kapanır */
    const dar = window.matchMedia ? matchMedia("(max-width:760px)") : { matches: false };
    let cek = null;
    o.panel.addEventListener("touchstart", e => {
      if (!dar.matches || e.touches.length !== 1) return;
      if (o.panel.scrollTop > 0 && !e.target.closest(".p-ust")) return;
      cek = { y: e.touches[0].clientY, t: Date.now(), dy: 0 };
    }, { passive: true });
    o.panel.addEventListener("touchmove", e => {
      if (!cek) return;
      const dy = e.touches[0].clientY - cek.y;
      if (dy <= 0 && !cek.dy) { cek = null; return; }   // yukarı itiş: olağan kaydırma
      cek.dy = Math.max(0, dy);
      if (e.cancelable) e.preventDefault();
      o.panel.style.transition = "none";
      o.panel.style.transform = "translateY(" + cek.dy + "px)";
    }, { passive: false });
    function birak(kapatilsin) {
      if (!cek) return;
      const hiz = cek.dy / Math.max(1, Date.now() - cek.t);
      o.panel.style.transition = ""; o.panel.style.transform = "";
      if (kapatilsin && (cek.dy > 110 || (cek.dy > 40 && hiz > 0.5))) kapat();
      cek = null;
    }
    o.panel.addEventListener("touchend", () => birak(true));
    o.panel.addEventListener("touchcancel", () => birak(false));

    return { ac, kapat, odakHedefi, acikMi };
  }

  /* panoya kopyalama: güvenli bağlamda Clipboard API, değilse (ör. file://) gizli metin alanı */
  function kopyala(metin, kap) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(metin);
    return new Promise((tamam, hata) => {
      const once = document.activeElement;
      const t = document.createElement("textarea");
      t.value = metin; t.setAttribute("readonly", "");
      t.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
      (kap || document.body).appendChild(t); t.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      t.remove();
      if (once && once.focus) once.focus();
      if (ok) tamam(); else hata(new Error("kopyalanamadı"));
    });
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
