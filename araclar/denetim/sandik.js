// Sandık sayfası denetimi — araclar/denetim/fikstur.html üzerinde, javascript_tool ile
// değerlendirilir. Beklenen değerler plan Görev 7 / Adım 7'de.
(() => {
  const r = {};
  const ogeId = x => { const k = x.querySelector("[data-id]"); return k ? k.dataset.id : "serit"; };
  r.kart = document.querySelectorAll(".s-kart").length;
  r.serit = document.querySelectorAll(".s-hukumet").length;
  r.bant = document.querySelectorAll(".banner:not(.kesinti)").length;
  r.kesinti = document.querySelectorAll(".banner.kesinti").length;
  r.bos = document.querySelectorAll(".s-bos").length;
  const d = document.querySelector('.tur-dugme[data-tur="hukumet"]');
  d.click();
  r.hukumetKapali = { gizli: [...document.querySelectorAll('.s-oge[data-tur="hukumet"]')].every(x => x.hidden),
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
