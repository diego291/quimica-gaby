/* ======================= LUPA Y TAMAÑO DE LETRA =======================
   Para ver mejor: 🔍 arriba cambia el tamaño de todo el contenido (se guarda en cada dispositivo)
   y cualquier dibujo se abre en pantalla completa para acercarlo y moverlo.                        */
const ZOOMS = [1, 1.15, 1.3, 1.5, 1.75, 2];
function applyZoom(){ const z = +S.x.zoom || 1; document.documentElement.style.setProperty(`--z`, z); document.documentElement.classList.toggle(`zoomed`, z !== 1); }
function setZoom(z){ S.x.zoom = Math.round(Math.max(0.9, Math.min(2, z)) * 100) / 100; save(); applyZoom(); renderAll ? renderAll() : renderView(); }
function openZoom(){
  openSheet(`Ver más grande`, b => {
    const z = +S.x.zoom || 1;
    b.append(el(`p`, `muted`, `Agranda la letra, los botones y los dibujos de toda la página. Se guarda en este dispositivo.`));
    const row = el(`div`, `zrow`);
    const m = btn(`A−`, `zbt sm`, () => { const i = ZOOMS.findIndex(v => v >= z - .001); setZoom(ZOOMS[Math.max(0, i - 1)] || .9); drawSheet(); }); m.setAttribute(`aria-label`, `Letra más pequeña`);
    const p = btn(`A+`, `zbt lg`, () => { const i = ZOOMS.findIndex(v => v > z + .001); setZoom(i < 0 ? 2 : ZOOMS[i]); drawSheet(); }); p.setAttribute(`aria-label`, `Letra más grande`);
    row.append(m, el(`div`, `zval`, `${Math.round(z * 100)} %`), p); b.append(row);
    const ch = el(`div`, `zchips`);
    ZOOMS.forEach(v => { const c = btn(`${Math.round(v * 100)} %`, `zchip` + (Math.abs(v - z) < .01 ? ` on` : ``), () => { setZoom(v); drawSheet(); }); c.setAttribute(`aria-pressed`, Math.abs(v - z) < .01); ch.append(c); });
    b.append(ch);
    b.append(el(`div`, `zprev reptext`, `<p>Ejemplo: el <b>pH</b> = −log [H<sub>3</sub>O<sup>+</sup>]. Una solución con pH 3 es <b>ácida</b>.</p>`));
    b.append(el(`p`, `muted`, `🔍 en cualquier dibujo: lo abre en pantalla completa. Ahí puedes acercar con + / −, con la rueda del ratón o con dos dedos, y moverlo arrastrando.`));
  });
}
/* Visor de dibujos a pantalla completa */
function lupa(fig){
  if (!fig) return; const svg = fig.querySelector(`svg`); if (!svg) return;
  const cap = fig.querySelector(`figcaption`);
  const ov = el(`div`, `lupa`); ov.setAttribute(`role`, `dialog`); ov.setAttribute(`aria-modal`, `true`); ov.setAttribute(`aria-label`, `Dibujo en grande`);
  const top = el(`div`, `lupab`), stage = el(`div`, `lupas`), inner = el(`div`, `lupai`);
  inner.append(svg.cloneNode(true)); stage.append(inner);
  let k = 1, x = 0, y = 0; const pinta = () => { inner.style.transform = `translate(${x}px,${y}px) scale(${k})`; val.textContent = `${Math.round(k * 100)} %`; };
  const zoomA = (nk, cx, cy) => { nk = Math.max(1, Math.min(6, nk)); const r = stage.getBoundingClientRect(); cx = cx == null ? r.width / 2 : cx - r.left; cy = cy == null ? r.height / 2 : cy - r.top; x = cx - (cx - x) * nk / k; y = cy - (cy - y) * nk / k; k = nk; if (k === 1){ x = 0; y = 0; } pinta(); };
  const B = (t, l, f) => { const b = btn(t, `lbt`, f); b.title = l; b.setAttribute(`aria-label`, l); return b; };
  const val = el(`span`, `lval`, `100 %`);
  const cerrar = () => { ov.remove(); document.removeEventListener(`keydown`, kd); };
  top.append(el(`b`, ``, `Dibujo`), B(`−`, `Alejar`, () => zoomA(k / 1.4)), val, B(`+`, `Acercar`, () => zoomA(k * 1.4)), B(`↺`, `Ajustar a la pantalla`, () => { k = 1; x = 0; y = 0; pinta(); }), B(`✕`, `Cerrar`, cerrar));
  ov.append(top, stage);
  if (cap){ const c = el(`div`, `lupac`, cap.innerHTML); ov.append(c); }
  const kd = e => { if (e.key === `Escape`) cerrar(); else if (e.key === `+` || e.key === `=`) zoomA(k * 1.4); else if (e.key === `-`) zoomA(k / 1.4); };
  document.addEventListener(`keydown`, kd);
  stage.addEventListener(`wheel`, e => { e.preventDefault(); zoomA(k * (e.deltaY < 0 ? 1.15 : 1 / 1.15), e.clientX, e.clientY); }, { passive:false });
  // arrastrar y pellizcar
  const pts = new Map(); let d0 = 0, k0 = 1;
  stage.addEventListener(`pointerdown`, e => { stage.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x:e.clientX, y:e.clientY }); if (pts.size === 2){ const [a, b] = [...pts.values()]; d0 = Math.hypot(a.x - b.x, a.y - b.y); k0 = k; } });
  stage.addEventListener(`pointermove`, e => { const p = pts.get(e.pointerId); if (!p) return;
    if (pts.size === 1){ x += e.clientX - p.x; y += e.clientY - p.y; pinta(); }
    pts.set(e.pointerId, { x:e.clientX, y:e.clientY });
    if (pts.size === 2 && d0){ const [a, b] = [...pts.values()]; zoomA(k0 * Math.hypot(a.x - b.x, a.y - b.y) / d0, (a.x + b.x) / 2, (a.y + b.y) / 2); } });
  const fin = e => { pts.delete(e.pointerId); if (pts.size < 2) d0 = 0; };
  stage.addEventListener(`pointerup`, fin); stage.addEventListener(`pointercancel`, fin);
  stage.addEventListener(`dblclick`, e => zoomA(k > 1.5 ? 1 : 2.5, e.clientX, e.clientY));
  document.body.append(ov); pinta(); setTimeout(() => top.querySelector(`button:last-child`).focus(), 30);
}
/* 🔍 en cada dibujo de la página */
const _figureL = figure;
figure = function(key, small){
  const d = _figureL(key, small); if (!d) return d;
  const z = btn(`🔍`, `figz`, e => { e.stopPropagation(); lupa(d); }); z.title = `Ver en grande`; z.setAttribute(`aria-label`, `Ver el dibujo en grande`);
  d.append(z); return d;
};
/* botón 🔍 arriba */
const _renderHeadZ = renderHead;
renderHead = function(){
  _renderHeadZ();
  const tools = $(`#head .top .tools`); if (!tools) return;
  const z = +S.x.zoom || 1; const b = btn(`🔍${z !== 1 ? `<i>${Math.round(z * 100)}</i>` : ``}`, `hbtn hzoom`, openZoom);
  b.title = `Ver más grande (tamaño de letra y lupa)`; b.setAttribute(`aria-label`, b.title); tools.prepend(b);
};
applyZoom();
/* la ventana flotante del dibujo se quita al salir del Repaso */
const _renderViewL = renderView;
renderView = function(){ _renderViewL.apply(this, arguments); if (!document.querySelector(`#view .rlc.m-flota`)) document.querySelectorAll(`body > .rfig.flt`).forEach(x => x.remove()); };
