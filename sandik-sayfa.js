/* Sandık sayfasının DOM bağlaması.
   Gerektirir: window.PARTILER, window.SANDIK, window.Ortak, window.SandikMantik ve sayfada
   #turlar, #yilKaydirici, #yilDeger, #filtreTemizle, #rows, #perde, #panel, #kapat, #p-govde;
   isteğe bağlı: #ara, #araSonuc (arama), #atla (dönem çubuğu). */
(function () {
  const P = window.PARTILER, S = window.SANDIK, O = window.Ortak;
  const M = window.SandikMantik.olustur(P, O);
  const TURLER = [["genel", "Genel"], ["yerel", "Yerel"], ["referandum", "Referandum"],
    ["cb-halk", "CB (halk)"], ["cb-tbmm", "CB (TBMM)"], ["ara", "Ara seçim"], ["hukumet", "Hükümet"]];
  const acikTurler = new Set(TURLER.map(t => t[0]));
  let yilFiltre = null;

  const rows = document.getElementById("rows");
  const kr = M.kronoloji(S);

  /* ---- çizim: her dönem bandında yıllara göre bir zaman çizelgesi. Ayrıntılı sonucu olan
     seçimler kart, hükümetler ve tek satırlık kayıtlar (TBMM'de cumhurbaşkanlığı, ara seçim,
     ayrıntısı bilinmeyen yerel seçim) kartların altında tarih sırasıyla satır olur. ---- */
  const kartMi = o => o.tur === "secim" && M.kartMi(o.kayit);
  function ogeHTML(o) {
    if (o.tur === "secim") {
      const y = o.tarih.slice(0, 4);
      return '<div class="s-oge' + (M.genisKartMi(o.kayit) ? " s-genis" : "") + '" data-k="' + o.kayit.id + '" data-tur="' + o.kayit.tur + '" data-bas="' + y + '" data-bit="' + y + '">' +
        (kartMi(o) ? M.kartHTML(o.kayit) : M.olayHTML(o.kayit)) + "</div>";
    }
    const h = o.hukumet;
    return '<div class="s-oge" data-k="' + M.hukumetId(h) + '" data-tur="hukumet" data-bas="' + h.baslangic.slice(0, 4) +
      '" data-bit="' + (h.bitis ? h.bitis.slice(0, 4) : "9999") + '">' + M.hukumetSatiriHTML(h) + "</div>";
  }
  function yillarHTML(ogeler) {
    return M.yilGruplari(ogeler).map(g => {
      const kartlar = g.ogeler.filter(kartMi), satirlar = g.ogeler.filter(o => !kartMi(o));
      return '<section class="s-yil"><h2 class="s-yil-no">' + g.yil + '</h2><div class="s-yil-ic">' +
        (kartlar.length ? '<div class="s-kartlar">' + kartlar.map(ogeHTML).join("") + "</div>" : "") +
        (satirlar.length ? '<div class="s-olaylar">' + satirlar.map(ogeHTML).join("") + "</div>" : "") + "</div></section>";
    }).join("");
  }
  // Ekran dışındaki yıllar ekrana yaklaşınca çizildiği için (sandik.css: content-visibility) kaydırmadan
  // sonra hedefin yeri birkaç piksel ya da ekranlarca kayabilir: kaydırma, hedef yerine oturana dek
  // birkaç karede tekrarlanır.
  function kaydir(el, blok) {
    let hedef, kare = 0, sakin = 0;
    const git = () => { el.scrollIntoView({ block: blok }); hedef = el.getBoundingClientRect().top; };
    // yeni çizilen içerik birkaç kare sonra yerleşebilir: hedef 8 kare yerinde kalana dek (en çok ~1 sn) izlenir
    const bak = () => requestAnimationFrame(() => {
      if (Math.abs(el.getBoundingClientRect().top - hedef) > 1) { git(); sakin = 0; } else sakin++;
      if (sakin < 8 && ++kare < 60) bak();
    });
    git(); bak();
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
    html += yillarHTML(once);
    if (k) {
      html += '<div class="banner kesinti"><span class="yil">⚡</span><span class="ad">' + M.kacis(k.metin) + "</span></div>";
      if (kap.length) html += '<div class="s-kap" role="group" aria-label="askerî yönetim dönemi">' + yillarHTML(kap) + "</div>";
    }
    html += yillarHTML(sonra);
    icerik.innerHTML = html;
    b.id = "bant-" + i;
    rows.appendChild(b); rows.appendChild(icerik);
    O.bantKur(b, icerik);
  });

  /* ---- dönemlere atlama çubuğu (sayfa kayarken üstte kalır; görünen dönem işaretlenir) ---- */
  const atla = document.getElementById("atla");
  if (atla) atlamaKur(atla);
  function atlamaKur(atla) {
    atla.innerHTML = '<span class="s-atla-et">dönem</span>' + P.DONEMLER.map((d, i) =>
      '<a href="#bant-' + i + '" data-i="' + i + '" title="' + M.kacis(d.ad) + '">' + d.yil.replace(/\s/g, "") + "</a>").join("");
    atla.addEventListener("click", e => {
      const a = e.target.closest("a[data-i]"); if (!a) return;
      e.preventDefault();   // adres çubuğundaki # seçim kimliği içindir, dönem için değiştirilmez
      const b = document.getElementById("bant-" + a.dataset.i), s = document.getElementById("donem-" + a.dataset.i);
      if (s.classList.contains("kapali")) O.bantDurum(b, s, false);
      kaydir(b, "start");
    });
    if ("IntersectionObserver" in window) {
      const isaretle = i => atla.querySelectorAll("a").forEach(a => {
        const aktif = a.dataset.i === String(i);
        a.classList.toggle("aktif", aktif);
        // dar ekranda çubuk yatay kayar: işaretli dönem görünür alana getirilir
        if (aktif && atla.scrollWidth > atla.clientWidth) atla.scrollLeft = a.offsetLeft - (atla.clientWidth - a.offsetWidth) / 2;
      });
      const gozcu = new IntersectionObserver(l => {
        for (const x of l) if (x.isIntersecting) isaretle(x.target.id.replace("donem-", ""));
      }, { rootMargin: "-45% 0px -50% 0px" });
      rows.querySelectorAll(".s-donem").forEach(d => gozcu.observe(d));
    }
  }

  /* ---- araç çubuğu ---- */
  const turlar = document.getElementById("turlar");
  const sayi = t => t === "hukumet" ? S.hukumetler.length : S.secimler.filter(k => k.tur === t).length;
  turlar.innerHTML = TURLER.map(t => '<button type="button" class="tur-dugme" data-tur="' + t[0] +
    '" aria-pressed="true">' + t[1] + ' <span class="tur-sayi">' + sayi(t[0]) + "</span></button>").join("");
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

  /* ---- arama: kayıtların ve hükümetlerin aranacak metni bir kez hazırlanır; her sözcük geçmeli,
     Türkçe harfler sadeleşir ("ozal" → Özal). Arama varken eşleşmeyenler ve boş kalan dönemler gizlenir. ---- */
  const araKutu = document.getElementById("ara"), araSonuc = document.getElementById("araSonuc");
  const aranacak = new Map();
  S.secimler.forEach(k => aranacak.set(k.id, M.aramaMetni(k)));
  S.hukumetler.forEach(h => aranacak.set(M.hukumetId(h), M.aramaMetni(h)));
  let arama = "";
  if (araKutu) araKutu.addEventListener("input", () => { arama = araKutu.value.trim(); uygula(); });

  const temizle = document.getElementById("filtreTemizle");
  temizle.addEventListener("click", () => {
    TURLER.forEach(t => acikTurler.add(t[0]));
    turlar.querySelectorAll(".tur-dugme").forEach(d => d.setAttribute("aria-pressed", "true"));
    yilFiltre = null; kaydirici.value = YMAX; yilDeger.textContent = YMAX;
    arama = ""; if (araKutu) araKutu.value = "";
    uygula();
  });

  function uygula() {
    const ara = arama.length >= 2 ? arama : "";
    let bulunan = 0;
    rows.classList.toggle("filtreli", yilFiltre !== null);
    rows.querySelectorAll(".s-oge").forEach(el => {
      el.hidden = !acikTurler.has(el.dataset.tur) || (!!ara && !M.aramaEslesir(aranacak.get(el.dataset.k) || "", ara));
      if (ara && !el.hidden) bulunan++;
      const tutar = yilFiltre !== null && +el.dataset.bas <= yilFiltre && yilFiltre <= +el.dataset.bit;
      el.classList.toggle("sonuc", tutar);
      const donem = el.closest(".s-donem");
      if ((tutar || ara) && !el.hidden && donem.classList.contains("kapali")) O.bantDurum(bantBul(donem), donem, false);
    });
    // görünür öğesi kalmayan kart/satır grubu, yıl ve askerî yönetim kutusu gizlenir; boş başlık kalmasın
    rows.querySelectorAll(".s-kartlar, .s-olaylar, .s-yil, .s-kap").forEach(el => {
      el.hidden = !el.querySelector(".s-oge:not([hidden])");
    });
    rows.querySelectorAll(".s-yil").forEach(el => {
      el.classList.toggle("sonuc", !!el.querySelector(".s-oge.sonuc:not([hidden])"));
    });
    // arama varken eşleşmesi olmayan dönem bandı ve kesinti bantları da gizlenir
    rows.querySelectorAll(".s-donem").forEach(d => {
      const bos = !!ara && !d.querySelector(".s-oge:not([hidden])");
      d.hidden = bos; bantBul(d).hidden = bos;
      d.querySelectorAll(".banner.kesinti, .s-bos").forEach(b => { b.hidden = !!ara; });
    });
    if (araSonuc) araSonuc.textContent = ara ? (bulunan ? bulunan + " sonuç" : "sonuç yok") : "";
    temizle.classList.toggle("aktif", yilFiltre !== null || acikTurler.size < TURLER.length || !!ara);
  }

  /* ---- panel ve doğrudan bağlantı ---- */
  const Panel = O.panelKur({
    panel: document.getElementById("panel"), perde: document.getElementById("perde"),
    govde: document.getElementById("p-govde"), kapatDugmesi: document.getElementById("kapat"),
    odakSecici: ".s-hk-ac, .s-ac",
    kapaninca: () => history.replaceState(null, "", location.pathname + location.search)
  });
  /* il haritası verisi (≈345 KB) sayfanın ilk çiziminde gerekmez: sayfa çizildikten sonra arka planda
     yüklenir. Pencere ondan önce açılırsa haritanın yeri ayrılır, veri gelince doldurulur. */
  let V = null, H = null;
  const haritaHazir = O.betikYukle("veri/iller.js").then(() => O.betikYukle("veri/il-sonuclari.js")).then(() => {
    V = window.IL_SONUCLARI || {};
    H = window.HaritaMantik && window.ILLER ? window.HaritaMantik.olustur(window.ILLER, M, O) : null;
  });
  haritaHazir.catch(() => {});   // yüklenemezse pencereler haritasız açılır
  function haritaHTML(k) {
    if (!V) return '<div class="p-harita-yer" data-id="' + k.id + '"></div>';
    if (!H || !V[k.id]) return "";
    return '<div class="p-etiket">' + (k.tur === "genel" ? "İllere göre birinci parti" : k.tur === "referandum" ? "İllere göre evet ve hayır" : "İl merkezi belediye başkanlıkları") +
      '</div><div class="p-harita">' + H.haritaSVG(k, V[k.id]) + '<div class="h-secili"></div>' + H.lejantHTML(k, V[k.id]) +
      '<div class="p-harita-bag"><a href="harita.html#' + k.id + '">büyük haritada aç →</a></div></div>';
  }
  function ac(id) {
    const h = S.hukumetler.find(x => M.hukumetId(x) === id);
    if (h) {
      const p = M.hukumetPanelHTML(h, S);
      Panel.ac(p.html, p.renk);
      history.replaceState(null, "", "#" + id);
      return;
    }
    const k = S.secimler.find(x => x.id === id); if (!k) return;
    const p = M.panelHTML(k, S, { harita: haritaHTML(k) });
    Panel.ac(p.html, p.renk);
    history.replaceState(null, "", "#" + id);
    if (!V) haritaHazir.then(() => {
      const yer = document.querySelector('#p-govde .p-harita-yer[data-id="' + k.id + '"]');
      if (yer) yer.outerHTML = haritaHTML(k);
    }, () => {});
  }
  rows.addEventListener("click", e => {
    if (e.target.closest("a")) return;   // satırdaki parti bağlantısı soyağacına gider
    const k = e.target.closest(".s-ac"); if (k) ac(k.dataset.id);
  });
  // paneldeki küçük haritada dokunulan ilin bilgisi haritanın altında yazılır (telefonda üzerine gelmek yok)
  function panelIl(e) {
    const yol = e.target.closest && e.target.closest(".p-harita .h-il"); if (!yol) return;
    const kap = yol.closest(".p-harita");
    kap.querySelectorAll(".h-secik").forEach(x => x.classList.remove("h-secik"));
    yol.classList.add("h-secik");
    const t = yol.querySelector("title");
    kap.querySelector(".h-secili").textContent = t ? t.textContent : "";
  }
  document.getElementById("p-govde").addEventListener("click", panelIl);
  // pencere içindeki hükümet satırı o hükümetin penceresini açar
  document.getElementById("p-govde").addEventListener("click", e => {
    if (e.target.closest("a")) return;
    const r = e.target.closest(".s-ac[data-id]"); if (r) ac(r.dataset.id);
  });
  document.getElementById("p-govde").addEventListener("mouseover", panelIl);
  rows.addEventListener("keydown", e => {
    const k = e.target.closest(".s-ac");
    if (k && e.target === k && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); ac(k.dataset.id); }
  });
  function hashAc() {
    const id = O.hashOku(location.hash); if (!id) return;
    const el = rows.querySelector('[data-id="' + id + '"]'); if (!el) return;
    const donem = el.closest(".s-donem");
    if (donem.classList.contains("kapali")) O.bantDurum(bantBul(donem), donem, false);
    if (!el.hidden && !el.closest("[hidden]")) {
      kaydir(el, "center");
      (el.querySelector(".s-hk-ac") || el).focus({ preventScroll: true });
    }
    ac(id);
  }
  window.addEventListener("hashchange", hashAc);
  hashAc();
})();
