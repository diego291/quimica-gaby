/* ======================= PANTALLA COMPLETA DEL REPASO =======================
   Solo la ficha: sin menú, sin panel ni pestañas de sección.
   PC: libro abierto (texto a la izquierda, dibujo a la derecha) con flechas a los lados y lista de fichas desplegable.
   Teléfono: lectura enfocada (texto y dibujo uno sobre otro) con barra fija abajo.                                   */
let LECT_FS = false;
function lectOn(){
  S.x.lect = true; save();
  const d = document.documentElement;
  if (d.requestFullscreen && !document.fullscreenElement) d.requestFullscreen({ navigationUI:`hide` }).then(() => { LECT_FS = true; }).catch(() => {});
  if (S.mode !== `repaso`) go(`repaso`); else { renderAll(); topScroll(); }
}
function lectOff(){
  S.x.lect = false; save(); lectCerrarLista();
  if (document.fullscreenElement && LECT_FS) document.exitFullscreen().catch(() => {}); LECT_FS = false;
  renderAll(); topScroll();
}
document.addEventListener(`fullscreenchange`, () => { if (!document.fullscreenElement && LECT_FS){ LECT_FS = false; if (S.x.lect) lectOff(); } });
document.addEventListener(`keydown`, e => {
  if (!S.x.lect || S.mode !== `repaso` || document.querySelector(`.lupa`) || SH) return;
  const t = e.target; if (t && (t.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(t.tagName))) return;
  if (e.key === `Escape` && !document.fullscreenElement) lectOff();   // ← → ya los maneja init.js
});
function lectCerrarLista(){ document.querySelectorAll(`.lfichas`).forEach(x => x.remove()); }
function lectLista(anchor){
  if (document.querySelector(`.lfichas`)){ lectCerrarLista(); return; }
  const all = filt(ALL.REPASO), key = selKey(), cur = all[Math.min(S.x.rpos[key] || 0, all.length - 1)];
  const box = el(`div`, `lfichas`); box.setAttribute(`role`, `dialog`); box.setAttribute(`aria-label`, `Fichas`);
  const temas = [...new Set(all.map(x => x.t))];
  temas.forEach(t => {
    box.append(el(`div`, `lfh`, `${TOPICS[t].n} · ${TOPICS[t].name}`));
    all.filter(x => x.t === t).forEach((x, j) => {
      const b = btn(`<span class="n">${S.x.seen[hash(x.title)] ? `✓` : j + 1}</span><span>${x.title}</span>`, `lfi` + (x === cur ? ` on` : ``) + (S.x.seen[hash(x.title)] ? ` ok` : ``), () => { lectCerrarLista(); S.x.rpos[key] = all.indexOf(x); save(); renderView(); topScroll(); });
      if (x === cur) b.setAttribute(`aria-current`, `true`); box.append(b);
    });
  });
  document.body.append(box);
  const r = anchor.getBoundingClientRect(), z = +S.x.zoom || 1;
  box.style.top = `${Math.round(r.bottom + 8)}px`; const bw = box.getBoundingClientRect().width; box.style.left = `${Math.round(Math.max(8, Math.min(r.right - bw, innerWidth - bw - 8)))}px`;
  const c = box.querySelector(`.on`); if (c) box.scrollTop = c.offsetTop - box.clientHeight / 2;
  setTimeout(() => { const f = e => { if (!box.contains(e.target) && !anchor.contains(e.target)){ lectCerrarLista(); document.removeEventListener(`pointerdown`, f, true); } }; document.addEventListener(`pointerdown`, f, true); }, 0);
}
const _vRepasoL = vRepaso;
vRepaso = function(v){
  _vRepasoL(v);
  const all = filt(ALL.REPASO);
  if (!S.x.lect){
    const tools = v.querySelector(`.rtools`);
    if (tools && all.length && !S.x.rall){ const b = btn(icon(`full`) + ` Pantalla completa`, `btn ghost`, lectOn); b.title = `Leer en pantalla completa, solo la ficha`; tools.append(b); }
    return;
  }
  if (!all.length || S.x.rall) return;
  const key = selKey(), i = Math.min(S.x.rpos[key] || 0, all.length - 1), it = all[i];
  const tema = all.filter(x => x.t === it.t), ti = tema.indexOf(it), phone = bp() === `phone`;
  v.querySelectorAll(`.rtop, .rsq, .rtit, .rsub, .intro`).forEach(x => x.remove());
  // barra de arriba
  const bar = el(`div`, `lbar`);
  const x = btn(`✕<span class="lrl"> Salir</span>`, `lb`, lectOff); x.title = `Salir de pantalla completa`; x.setAttribute(`aria-label`, x.title);
  const tt = el(`div`, `ltt`, `<b>${it.title}</b><small>${TOPICS[it.t].n} · Ficha ${ti + 1} de ${tema.length} · ${it.src}</small>`);
  bar.append(x, tt);
  if (ERRATA[it.title]){ const eb = btn(`⚠`, `lb errlb`, () => errModal(it)); eb.title = `Corrección del material en esta ficha`; eb.setAttribute(`aria-label`, eb.title); bar.append(eb); }
  const fl = btn(`☰<span class="lrl"> Fichas</span>`, `lb`, e => lectLista(fl)); fl.title = `Ver todas las fichas`; fl.setAttribute(`aria-label`, fl.title); fl.setAttribute(`aria-haspopup`, `dialog`);
  const zm = (+S.x.zoom || 1);
  const am = btn(`A−`, `lb`, () => { const k = ZOOMS.findIndex(v => v >= zm - .001); setZoom(ZOOMS[Math.max(0, k - 1)] || .9); }); am.setAttribute(`aria-label`, `Letra más pequeña`);
  const ap = btn(`A+`, `lb`, () => { const k = ZOOMS.findIndex(v => v > zm + .001); setZoom(k < 0 ? 2 : ZOOMS[k]); }); ap.setAttribute(`aria-label`, `Letra más grande`);
  const th = btn(icon(isDark() ? `sun` : `moon`), `lb`, () => { toggleTheme(); renderView(); }); th.setAttribute(`aria-label`, `Cambiar a modo ${isDark() ? `día` : `noche`}`);
  bar.append(fl, am, ap); if (!phone) bar.append(th);
  const pr = el(`div`, `lprog`, `<i style="width:${Math.round((ti + 1) / tema.length * 100)}%"></i>`);
  v.prepend(bar, pr);
  // flechas grandes a los lados (PC)
  if (!phone){
    const mk = (d, lbl) => { const b = btn(icon(d < 0 ? `left` : `right`), `lside ${d < 0 ? `l` : `r`}`, () => { const n = $(`.rdock [data-nav="${d < 0 ? `prev` : `next`}"]`); if (n && !n.disabled) n.click(); }); b.setAttribute(`aria-label`, lbl); b.disabled = d < 0 ? i === 0 : false; return b; };
    v.append(mk(-1, `Ficha anterior`), mk(1, i === all.length - 1 ? `Ir a Fichas` : `Ficha siguiente`));
  }
};
/* salir del modo al cambiar de sección */
const _goL = go;
go = function(mode){ if (S.x.lect && mode !== `repaso`){ S.x.lect = false; lectCerrarLista(); if (document.fullscreenElement && LECT_FS) document.exitFullscreen().catch(() => {}); LECT_FS = false; } return _goL.apply(this, arguments); };
const _renderAllL = renderAll;
renderAll = function(){ const on = !!S.x.lect && S.mode === `repaso`; document.documentElement.classList.toggle(`lect`, on); if (!on) lectCerrarLista(); return _renderAllL.apply(this, arguments); };
document.documentElement.classList.toggle(`lect`, !!S.x.lect && S.mode === `repaso`);

/* ---------- libro: el texto cabe en la pantalla ----------
   Ajusta el tamaño de letra del texto (entre 15 y 21 px, por el zoom) para que toda la ficha
   se lea sin bajar; si aun con 15 px no cabe, se deja con scroll normal.                     */
function lectFit(){
  const w = document.querySelector(`#view .rlc.libro`); if (!w) return;
  const t = w.querySelector(`.rleer`); if (!t) return;
  const top = w.getBoundingClientRect().top + scrollY, dock = document.querySelector(`.rdock`);
  const avail = innerHeight / (+S.x.zoom || 1) - Math.max(0, top - scrollY) / (+S.x.zoom || 1) - 24;
  let fs = 21; t.style.fontSize = `${fs}px`;
  while (fs > 15 && t.scrollHeight > avail){ fs -= 0.5; t.style.fontSize = `${fs}px`; }
  w.classList.toggle(`cabe`, t.scrollHeight <= avail);
  w.style.setProperty(`--lh`, `${Math.max(320, avail)}px`);
}
let LF_T = 0;
new MutationObserver(() => { if (!S.x.lect || LF_T) return; LF_T = requestAnimationFrame(() => { LF_T = 0; const w = document.querySelector(`#view .rlc.libro:not([data-fit])`); if (w){ w.dataset.fit = `1`; lectFit(); } }); }).observe(document.getElementById(`view`), { childList:true, subtree:true });
addEventListener(`resize`, () => { if (S.x.lect) lectFit(); });
