/* ======================= MEMORIZAR (por ficha) =======================
   Todo sale del texto de la misma ficha (material del docente) y de sus preguntas:
   idea clave · glosario · palabras clave · fórmulas y datos · ojo · lo que te preguntan · tarjetas.   */
const MEMO_SKIP = /^(nota|error del material|ojo|ejemplo|ejemplos|los \d+ pasos.*|pasos.*)$/i;
const limpiaT = s => String(s || ``).replace(/\s+/g, ` `).trim();
const cap1 = s => s ? s[0].toUpperCase() + s.slice(1) : s;
function memoData(it){
  if (it._memo) return it._memo;
  const d = document.createElement(`div`); d.innerHTML = it.body || ``;
  const glos = [], seen = new Set(), add = (t, def, how) => { t = limpiaT(t).replace(/[:：.]\s*$/, ``); def = limpiaT(def).replace(/^[:：—–\-,]\s*/, ``); const k = t.toLowerCase(); if (!t || !def || def.length < 4 || t.length > 70 || seen.has(k) || MEMO_SKIP.test(t)) return; seen.add(k); glos.push({ t, d:cap1(def), how }); };
  // definición de la ficha: primer párrafo que no empieza en negrita
  const p0 = [...d.children].find(x => x.tagName === `P` && !x.classList.contains(`note`) && !x.classList.contains(`fx`));
  if (p0){ const f = p0.firstChild; const startsB = f && f.nodeType === 1 && /^(B|STRONG)$/.test(f.tagName); if (!startsB){ const s1 = limpiaT(p0.textContent).split(/(?<=\.)\s+(?=[A-ZÁÉÍÓÚÑ])/)[0]; add(it.title.replace(/\s*\(.*?\)\s*$/, ``) + (/\((.*?)\)/.exec(it.title) ? ` (${/\((.*?)\)/.exec(it.title)[1]})` : ``), s1); } }
  // “Término: definición” en listas y párrafos
  d.querySelectorAll(`li, p`).forEach(n => {
    if (n.classList.contains(`note`)) return;
    const b = n.firstElementChild; if (!b || !/^(B|STRONG)$/.test(b.tagName)) return;
    let pre = ``; for (const c of n.childNodes){ if (c === b) break; pre += c.textContent; } if (pre.trim()) return;
    const term = limpiaT(b.textContent), rest = limpiaT(n.textContent.slice(n.textContent.indexOf(b.textContent) + b.textContent.length));
    if (/:$/.test(term) || /^[:—–]/.test(rest)) add(term, rest);
    else if (term.length <= 60 && /^(es|son|=|significa|indica)\b/i.test(rest)) add(term, rest);
  });
  // tablas: primera columna = término; las demás con su encabezado
  d.querySelectorAll(`table`).forEach(tb => {
    const hs = [...tb.querySelectorAll(`thead th, tr:first-child th`)].map(x => limpiaT(x.textContent));
    [...tb.querySelectorAll(`tbody tr`)].filter(r => r.querySelector(`td`)).slice(0, 10).forEach(r => {
      const c = [...r.children].map(x => limpiaT(x.textContent)); if (c.length < 2) return;
      add(c[0], c.slice(1).map((v, i) => hs[i + 1] && c.length > 2 ? `${hs[i + 1]}: ${v}` : v).join(` · `), `tabla`);
    });
  });
  // palabras clave = lo que el docente puso en negrita
  const kw = [], ks = new Set();
  d.querySelectorAll(`b, strong`).forEach(b => { const t = limpiaT(b.textContent).replace(/[:：.,;]\s*$/, ``); const k = t.toLowerCase(); if (t.length < 2 || t.length > 42 || ks.has(k) || MEMO_SKIP.test(t) || /^\d+([.,]\d+)?$/.test(t)) return; ks.add(k); kw.push(t); });
  // contexto de cada palabra clave (la oración donde aparece)
  const texto = limpiaT(d.textContent), oraciones = texto.split(/(?<=[.;:])\s+/);
  const ctx = w => oraciones.find(o => o.toLowerCase().includes(w.toLowerCase())) || ``;
  // fórmulas y datos con números
  const fx = [], fs = new Set(), addF = s => { s = limpiaT(s); const k = s.toLowerCase(); if (s.length < 3 || s.length > 220 || fs.has(k)) return; fs.add(k); fx.push(s); };
  d.querySelectorAll(`.fx`).forEach(n => addF(n.textContent));
  oraciones.forEach(o => { if (/[=⇌→]/.test(o) || /\d\s?(°C|g\/mol|mol|M\b|mL|L\b|%|atm|K\b|nm|kPa|mmHg)/.test(o) || /\bpH\s?[=<>≈]?\s?\d/.test(o)) addF(o); });
  // ojo: notas y errores del material
  const ojo = [...d.querySelectorAll(`.note`)].map(n => limpiaT(n.textContent)).filter(Boolean);
  // preguntas de esta ficha (las que se usan en Comprobar)
  let qs = []; try { qs = (typeof propias === `function` ? propias(it) : []).filter(q => q && q.q && Array.isArray(q.o) && q.o.length); } catch(e){}
  return (it._memo = { glos, kw, ctx, fx:fx.slice(0, 10), ojo, qs });
}
function memoTab(it){
  const D = memoData(it), w = el(`div`, `mtab`);
  w.append(el(`p`, `muted msrc`, `Todo sale de esta ficha · ${esc(it.src)}`));
  // 1. idea clave
  if (it.memo){
    const c = el(`section`, `mcard mkey`); c.append(el(`h4`, ``, `🧠 Idea clave`));
    const m = el(`div`, `mhid`); m.append(el(`p`, `muted`, `Antes de verla, dila en voz alta.`), btn(`Mostrar la idea clave`, `btn acc`, () => { m.innerHTML = `<p class="mbig">${it.memo}</p>`; }));
    c.append(m); w.append(c);
  }
  // 2. glosario
  if (D.glos.length){
    const c = el(`section`, `mcard`); const h = el(`div`, `mh`); h.append(el(`h4`, ``, `📖 Glosario · ${D.glos.length}`));
    const tg = btn(`Tapar definiciones`, `linkbtn`, () => { c.classList.toggle(`tapa`); tg.textContent = c.classList.contains(`tapa`) ? `Mostrar definiciones` : `Tapar definiciones`; }); h.append(tg); c.append(h);
    const dl = el(`dl`, `mglos`); D.glos.forEach(g => { const dt = el(`dt`, ``, esc(g.t)), dd = el(`dd`, ``, esc(g.d)); dd.title = `Toca para ver`; dd.onclick = () => dd.classList.add(`ver`); dl.append(dt, dd); }); c.append(dl);
    c.append(el(`p`, `muted mtip`, `Tip: “Tapar definiciones” y trata de decirlas antes de tocar cada una.`)); w.append(c);
  }
  // 3. palabras clave
  if (D.kw.length){
    const c = el(`section`, `mcard`); c.append(el(`h4`, ``, `🔑 Palabras clave · ${D.kw.length}`));
    const box = el(`div`, `mkw`), sh = el(`p`, `mkwc muted`, `Toca una palabra para ver dónde aparece en la ficha.`);
    D.kw.forEach(k => { const b = btn(esc(k), `mchip`, () => { box.querySelectorAll(`.on`).forEach(x => x.classList.remove(`on`)); b.classList.add(`on`); const o = D.ctx(k); sh.classList.remove(`muted`); sh.innerHTML = o ? esc(o).replace(new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`), `i`), m => `<mark class="hl hl-y">${m}</mark>`) : `—`; }); box.append(b); });
    c.append(box, sh); w.append(c);
  }
  // 4. fórmulas y datos
  if (D.fx.length){ const c = el(`section`, `mcard`); c.append(el(`h4`, ``, `🔢 Fórmulas y datos que debes manejar`)); const ul = el(`ul`, `mfx`); D.fx.forEach(f => ul.append(el(`li`, ``, esc(f)))); c.append(ul); w.append(c); }
  // 5. ojo
  if (D.ojo.length){ const c = el(`section`, `mcard mojo`); c.append(el(`h4`, ``, `⚠️ Ojo (errores frecuentes y aclaraciones)`)); D.ojo.forEach(o => c.append(el(`p`, ``, esc(o)))); w.append(c); }
  // 6. lo que te preguntan
  if (D.qs.length){
    const c = el(`section`, `mcard`); c.append(el(`h4`, ``, `❓ Lo que te pueden preguntar · ${D.qs.length}`));
    const list = el(`div`, `mqs`); let n = 0;
    const more = () => { D.qs.slice(n, n + 6).forEach(q => { const r = el(`div`, `mq`); r.append(el(`p`, `mqq`, q.q)); const a = el(`div`, `mqa`); a.append(btn(`Ver respuesta`, `linkbtn`, () => { a.innerHTML = `<b>${q.o[0]}</b>${q.e ? `<small>${q.e}</small>` : ``}`; })); r.append(a); list.append(r); }); n += 6; mb.hidden = n >= D.qs.length; };
    const mb = btn(`Ver más`, `btn ghost`, more); c.append(list, mb); more(); w.append(c);
  }
  // 7. tarjetas
  const cards = D.glos.map(g => [esc(g.t), esc(g.d)]).concat(D.qs.map(q => [q.q, q.o[0]])).concat(it.memo ? [[`Idea clave de “${esc(it.title)}”`, it.memo]] : []);
  if (cards.length){ const b = btn(`🃏 Repasar con tarjetas (${cards.length})`, `btn acc wide`, () => memoCards(it, cards)); b.style.marginTop = `4px`; w.append(b); }
  if (!D.glos.length && !D.kw.length && !it.memo) w.append(el(`p`, `muted`, `Esta ficha no tiene datos para memorizar.`));
  return w;
}
function memoCards(it, all){
  let L = shuf(all.slice()), i = 0, ok = 0, flip = false; const otra = [];
  openSheet(`Tarjetas · ${it.title}`, b => {
    if (i >= L.length){
      if (otra.length){ b.append(el(`p`, ``, `Te supiste <b>${ok}</b>. Quedan <b>${otra.length}</b> para repasar otra vez.`)); b.append(btn(`Repasar las que fallé`, `btn acc wide`, () => { L = shuf(otra.splice(0)); i = 0; ok = 0; flip = false; drawSheet(); })); }
      else b.append(el(`p`, ``, `¡Listo! Te las supiste todas. 🎉`));
      b.append(btn(`Empezar de nuevo`, `btn ghost wide`, () => { L = shuf(all.slice()); i = 0; ok = 0; otra.length = 0; flip = false; drawSheet(); })); return;
    }
    const [f, r] = L[i];
    b.append(el(`p`, `muted`, `Tarjeta ${i + 1} de ${L.length} · toca la tarjeta para voltearla`));
    const c = btn(``, `mflip` + (flip ? ` on` : ``), () => { flip = !flip; drawSheet(); });
    c.innerHTML = flip ? `<small>Respuesta</small><span>${r}</span>` : `<small>Pregunta / término</small><span>${f}</span>`; b.append(c);
    if (flip){ const row = el(`div`, `mrow`); row.append(btn(`↻ Repasar otra vez`, `btn ghost`, () => { otra.push(L[i]); i++; flip = false; drawSheet(); }), btn(`✓ Me la sé`, `btn acc`, () => { ok++; i++; flip = false; drawSheet(); })); b.append(row); }
  });
}

/* ======================= BARRA DE FICHAS (Anterior · Comprobar · Siguiente) =======================
   Más delgada; se puede minimizar, hacer transparente y mover libremente. Se recuerda en este dispositivo. */
function dockCfg(){ const k = S.x.dk = S.x.dk || { m:`fijo`, o:1 }; if (k.m === `mini`){ k.m = `fijo`; k.mini = true; } return k; }
function dockEnhance(dock){
  const k = dockCfg(); dock.classList.remove(`mini`, `libre`); dock.style.cssText = ``;
  dock.classList.add(`dkx`); if (k.mini) dock.classList.add(`mini`); if (k.m === `libre`) dock.classList.add(`libre`);
  dock.style.setProperty(`--dko`, k.o || 1);
  const grip = btn(`⠿`, `dkgrip`, () => {}); grip.title = `Arrastra para mover la barra`; grip.setAttribute(`aria-label`, grip.title);
  const opt = btn(`⋯`, `dkopt`, () => dockMenu(opt, dock)); opt.title = `Ajustes de la barra`; opt.setAttribute(`aria-label`, opt.title);
  dock.prepend(grip); dock.append(opt);
  if (k.mini){ const mid = dock.querySelector(`.rmid`); if (mid){ mid.dataset.full = mid.textContent; mid.title = mid.textContent; mid.setAttribute(`aria-label`, mid.textContent); mid.textContent = /comprob/i.test(mid.textContent) ? `✓` : /volver/i.test(mid.textContent) ? `📖` : `›`; } }
  if (k.m === `libre`) dockPlace(dock);
  grip.addEventListener(`pointerdown`, ev => {
    ev.preventDefault(); grip.setPointerCapture(ev.pointerId);
    const r0 = dock.getBoundingClientRect(), dx = ev.clientX - r0.left, dy = ev.clientY - r0.top;
    if (k.m !== `libre`){ k.m = `libre`; k.x = r0.left; k.y = r0.top; dock.classList.add(`libre`); dockPlace(dock); }
    const mv = e => { k.x = e.clientX - dx; k.y = e.clientY - dy; dockPlace(dock); };
    const up = () => { grip.removeEventListener(`pointermove`, mv); grip.removeEventListener(`pointerup`, up); save(); };
    grip.addEventListener(`pointermove`, mv); grip.addEventListener(`pointerup`, up);
  });
}
function dockPlace(dock){ const k = dockCfg(), w = dock.offsetWidth || 300, h = dock.offsetHeight || 56; k.x = Math.max(6, Math.min(innerWidth - w - 6, k.x == null ? innerWidth - w - 20 : k.x)); k.y = Math.max(6, Math.min(innerHeight - h - 6, k.y == null ? innerHeight - h - 90 : k.y)); dock.style.left = `${k.x}px`; dock.style.top = `${k.y}px`; }
addEventListener(`resize`, () => { const d = document.querySelector(`.rdock.libre`); if (d) dockPlace(d); });
function dockMenu(anchor, dock){
  document.querySelectorAll(`.dkpop`).forEach(x => x.remove());
  const k = dockCfg(), m = el(`div`, `dkpop`); m.setAttribute(`role`, `dialog`); m.setAttribute(`aria-label`, `Ajustes de la barra`);
  const set = (mode) => { k.m = mode; save(); m.remove(); renderView(); };
  m.append(el(`b`, ``, `Barra de fichas`));
  const opt2 = (l, on, f) => { const b = btn(l, `dkm` + (on ? ` on` : ``), () => { f(); save(); m.remove(); renderView(); }); b.setAttribute(`aria-pressed`, !!on); m.append(b); };
  m.append(el(`small`, `muted`, `Tamaño`));
  opt2(`▭ Completa`, !k.mini, () => { k.mini = false; }); opt2(`▁ Pequeña (solo ‹ ✓ ›)`, k.mini, () => { k.mini = true; });
  m.append(el(`small`, `muted`, `Lugar`));
  opt2(`⬇ Fija abajo`, k.m !== `libre`, () => { k.m = `fijo`; k.x = k.y = null; }); opt2(`✥ Moverla libremente`, k.m === `libre`, () => { k.m = `libre`; });
  const lab = el(`label`, `dkop`, `<span>Opacidad</span>`); const r = el(`input`); r.type = `range`; r.min = `25`; r.max = `100`; r.step = `5`; r.value = Math.round((k.o || 1) * 100); r.setAttribute(`aria-label`, `Opacidad de la barra`);
  const out = el(`small`, ``, `${r.value}%`); r.oninput = () => { k.o = r.value / 100; out.textContent = `${r.value}%`; dock.style.setProperty(`--dko`, k.o); }; r.onchange = () => save();
  lab.append(r, out); m.append(lab, el(`p`, `muted`, `Al pasar el mouse o tocarla se ve completa. Arrastra ⠿ para moverla.`));
  document.body.append(m); const a = anchor.getBoundingClientRect(); const mw = m.offsetWidth, mh = m.offsetHeight;
  m.style.left = `${Math.max(8, Math.min(innerWidth - mw - 8, a.right - mw))}px`; m.style.top = `${a.top - mh - 10 < 8 ? a.bottom + 10 : a.top - mh - 10}px`;
  setTimeout(() => document.addEventListener(`pointerdown`, function f(e){ if (!m.contains(e.target) && e.target !== anchor){ m.remove(); document.removeEventListener(`pointerdown`, f, true); } }, true), 0);
}
