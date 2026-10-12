// Soyağacı gerileme denetimi. Claude Browser'da javascript_tool ile değerlendirilir
// (1400px genişlik). Beklenen değerler plan Görev 2 / Adım 1'de.
(() => {
  const r = {};
  r.kart = document.querySelectorAll('.kart').length;
  r.kenar = document.querySelectorAll('#edges path').length;
  r.bant = document.querySelectorAll('.banner:not(.kesinti)').length;
  r.kesinti = [...document.querySelectorAll('.banner.kesinti .ad')].map(x => x.textContent);
  const b = document.querySelector('.banner:not(.kesinti)');
  const s = document.getElementById(b.getAttribute('aria-controls'));
  b.click();
  r.bantKapaninca = { yukseklik: s.offsetHeight, kenar: document.querySelectorAll('#edges path').length };
  b.click();
  const k = document.querySelector('[data-id="akp"]');
  k.focus(); k.click();
  const p = document.getElementById('panel');
  r.panelAcik = { acik: p.classList.contains('acik'), inert: p.hasAttribute('inert'), odak: document.activeElement.id };
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  r.panelKapali = { inert: p.hasAttribute('inert'), odakGeri: document.activeElement === k };
  k.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
  r.vurgu = document.querySelectorAll('#edges path.aktif').length;
  k.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
  return r;
})()
