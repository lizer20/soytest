/* Harita sayfasının DOM bağlaması.
   Gerektirir: window.PARTILER, window.SANDIK, window.ILLER, window.IL_SONUCLARI, window.Ortak,
   window.SandikMantik, window.HaritaMantik. Adres: harita.html#<seçim kimliği>. */
(function () {
  const P = window.PARTILER, S = window.SANDIK, O = window.Ortak, V = window.IL_SONUCLARI || {};
  const M = window.SandikMantik.olustur(P, O);
  const H = window.HaritaMantik.olustur(window.ILLER, M, O);

  // yalnızca il verisi olan seçimler
  const secimler = S.secimler.filter(k => (k.tur === "genel" || k.tur === "yerel" || k.tur === "referandum") && V[k.id]);
  let tur = "genel";

  const sec = document.getElementById("hSecim");
  const cizim = document.getElementById("hCizim"), yan = document.getElementById("hYan");
  const baslik = document.getElementById("hBaslik"), tablo = document.getElementById("hTablo");
  const turDugmeleri = document.querySelectorAll(".tur-dugme");
  const seciliKutu = document.getElementById("hSecili");

  // Telefonda fareyle üzerine gelmek olmadığı için dokunulan (ya da üzerine gelinen) ilin bilgisi haritanın altında yazılır
  function ilGoster(yol) {
    cizim.querySelectorAll(".h-secik").forEach(e => e.classList.remove("h-secik"));
    if (!yol) { seciliKutu.textContent = "Sonucunu görmek için bir ile dokunun ya da üzerine gelin."; return; }
    yol.classList.add("h-secik");
    const t = yol.querySelector("title");
    seciliKutu.textContent = t ? t.textContent : "";
  }
  cizim.addEventListener("click", e => ilGoster(e.target.closest(".h-il")));
  cizim.addEventListener("mouseover", e => { const y = e.target.closest(".h-il"); if (y) ilGoster(y); });

  function liste() { return secimler.filter(k => k.tur === tur); }
  function seceneklerKur(secili) {
    const l = liste();
    sec.innerHTML = l.map(k => '<option value="' + k.id + '">' + O.tarihYaz(k.tarih) + "</option>").join("");
    if (!l.length) { goster(null); return; }
    sec.value = l.some(k => k.id === secili) ? secili : l[l.length - 1].id;
    goster(sec.value);
  }
  function goster(id) {
    const k = secimler.find(x => x.id === id);
    if (!k) {
      baslik.innerHTML = "";
      cizim.innerHTML = '<div class="h-bos-mesaj">Bu tür için henüz il il sonuç eklenmedi.</div>';
      yan.innerHTML = ""; tablo.innerHTML = ""; seciliKutu.textContent = "";
      return;
    }
    const v = V[id];
    const olcu = k.tur === "genel" ? "ilde en çok oyu alan parti" : k.tur === "referandum" ? "ilde evet ya da hayır oyunun oranı" : "il merkezi / büyükşehir belediye başkanlığı";
    baslik.innerHTML = "<b>" + k.tarih.slice(0, 4) + " " + M.TUR_AD[k.tur] + "</b><span>" + O.tarihYaz(k.tarih) +
      " · " + olcu + '</span><a href="sandik.html#' + k.id + '">seçimin ayrıntıları →</a>';
    cizim.innerHTML = H.haritaSVG(k, v, { buyuk: true });
    ilGoster(null);
    yan.innerHTML = (k.tur === "referandum" ? H.referandumOzetHTML(k) : "") +
      '<div class="p-etiket">' + (k.tur === "referandum" ? "İllerin oyu" : "İl kazanan") + '</div>' + H.lejantHTML(k, v) +
      (v.not ? '<div class="h-not">' + M.kacis(v.not) + "</div>" : "");
    tablo.innerHTML = H.tabloHTML(k, v);
    history.replaceState(null, "", "#" + id);
    const l = liste(), i = l.findIndex(x => x.id === id);
    document.getElementById("hOnceki").disabled = i <= 0;
    document.getElementById("hSonraki").disabled = i >= l.length - 1;
  }
  function turSec(t, secili) {
    tur = t;
    turDugmeleri.forEach(d => d.setAttribute("aria-pressed", String(d.dataset.tur === t)));
    seceneklerKur(secili);
  }

  turDugmeleri.forEach(d => d.addEventListener("click", () => turSec(d.dataset.tur)));
  sec.addEventListener("change", () => goster(sec.value));
  function kaydir(adim) {
    const l = liste(), i = l.findIndex(x => x.id === sec.value) + adim;
    if (i >= 0 && i < l.length) { sec.value = l[i].id; goster(sec.value); }
  }
  document.getElementById("hOnceki").addEventListener("click", () => kaydir(-1));
  document.getElementById("hSonraki").addEventListener("click", () => kaydir(1));

  function hashAc() {
    const id = O.hashOku(location.hash);
    const k = secimler.find(x => x.id === id);
    if (k) turSec(k.tur, k.id); else turSec(tur);
  }
  window.addEventListener("hashchange", hashAc);
  hashAc();
})();
