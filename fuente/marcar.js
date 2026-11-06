/* ======================= MIS APUNTES EN EL REPASO + MARCAR TEXTO =======================
   · Pestaña “Mis apuntes”: el editor del Cuaderno dentro del Repaso (páginas del tema).
   · Al seleccionar texto de una ficha sale un menú: marcar con color, ⭐ importante, duda al Cuaderno,
     pasar a mis apuntes, repasar luego (pendiente), preguntar, escuchar y copiar.
   · Los marcados se guardan por ficha en S.x.hl[hash(título)] = [{ id, q, s, c, t }] y se sincronizan.     */
const HLC = [[`y`, `Amarillo`], [`g`, `Verde`], [`p`, `Rosa`], [`b`, `Azul`]];
const hlKey = it => hash(it.title);
const hlOf = it => ((S.x.hl || {})[hlKey(it)] || []);
function repCur(){ if (S.mode !== `repaso` || S.x.rall) return null; const all = filt(ALL.REPASO); if (!all.length) return null; return all[Math.max(0, Math.min(S.x.rpos[selKey()] || 0, all.length - 1))]; }

/* ---------- páginas del Cuaderno para un tema ---------- */
function apSec(t){
  const C = cn(); let s = t ? C.sec.find(x => x.t === t) : C.sec.find(x => !x.t);
  if (!s){ const q = C.nb[0]; s = { id:nid(), nb:q.id, name:t && TOPICS[t] ? `${TOPICS[t].n} · ${TOPICS[t].name}` : `Apuntes de clase`, color:q.color, order:C.sec.filter(x => x.nb === q.id).length, t:t || `` }; C.sec.push(s); cnSave(true); }
  return s;
}
function apNew(t, title, html, ap){
  const s = apSec(t), p = { id:nid(), sec:s.id, title, html, snip:``, pinned:false, created:Date.now(), updated:Date.now() };
  if (ap) p.ap = ap; p.snip = cnText(html).slice(0, 120); cn().pg.push(p); cnSave(true); return p;
}
function apPage(t, kind){
  const s = apSec(t), tn = t && TOPICS[t] ? TOPICS[t].n : `General`;
  let p = cn().pg.find(x => x.sec === s.id && x.ap === kind);
  if (!p) p = kind === `dudas`
    ? apNew(t, `Dudas · ${tn}`, `<p>Dudas que marcaste al leer. Marca ☑ cuando la resuelvas.</p><ul class="cklist"><li><br></li></ul>`, `dudas`)
    : apNew(t, `Apuntes · ${tn}`, (CNTPL.find(x => x[0] === `apuntes`) || CNTPL[0])[4](t && TOPICS[t] ? `${TOPICS[t].n} · ${TOPICS[t].name}` : ``), `apuntes`);
  return p;
}
function apAppend(p, html, toList){
  cnFlush();
  const d = document.createElement(`div`); d.innerHTML = p.html || ``;
  if (toList){
    let ul = [...d.querySelectorAll(`ul.cklist`)].pop(); if (!ul){ ul = document.createElement(`ul`); ul.className = `cklist`; d.append(ul); }
    [...ul.children].forEach(li => { if (!li.textContent.trim() && !li.querySelector(`img`)) li.remove(); });
    const li = document.createElement(`li`); li.innerHTML = html; ul.append(li);
  } else { d.insertAdjacentHTML(`beforeend`, html); }
  p.html = d.innerHTML; p.snip = cnText(p.html).slice(0, 120); p.updated = Date.now(); cnSave(true);
  // si esa página está abierta en un editor, se vuelve a pintar
  if (CN_ED && CN_ED.ed && CN_ED.ed.isConnected && document.querySelector(`.cned`) && S.mode !== `cuaderno`) renderView();
}

/* ---------- pestaña “Mis apuntes” del Repaso ---------- */
function apuntesTab(it, rehacer){
  const w = el(`div`, `aptab`), t = it.t, pgs = cnPagesFor(t);
  S.x.apPg = S.x.apPg || {};
  let cur = cnPg(S.x.apPg[t]); if (!cur || !pgs.includes(cur)) cur = pgs[0];
  if (!cur){
    const e = el(`div`, `apempty`);
    e.append(el(`p`, ``, `Escribe aquí tus apuntes del <b>${TOPICS[t].n}</b> mientras lees. Se guardan en tu Cuaderno, en la sección del tema, y los ves también desde Organizar → Cuaderno.`));
    e.append(btn(`📝 Empezar mis apuntes del ${TOPICS[t].n}`, `btn acc`, () => { const p = apPage(t, `apuntes`); S.x.apPg[t] = p.id; save(); rehacer(); }));
    w.append(e);
  } else {
    const bar = el(`div`, `apbar`); bar.setAttribute(`role`, `tablist`);
    pgs.slice(0, 10).forEach(p => { const b = btn(`${p.ap === `dudas` ? `❓ ` : p.pinned ? `📌 ` : ``}${esc(p.title || `Sin título`)}`, `apch` + (p === cur ? ` on` : ``), () => { cnFlush(); S.x.apPg[t] = p.id; save(); rehacer(); }); b.setAttribute(`role`, `tab`); b.setAttribute(`aria-selected`, p === cur); bar.append(b); });
    bar.append(btn(`+ Página`, `apch add`, () => { cnFlush(); const p = apNew(t, `Apuntes · ${it.title}`, (CNTPL.find(x => x[0] === `apuntes`) || CNTPL[0])[4](`${TOPICS[t].n} · ${TOPICS[t].name}`)); S.x.apPg[t] = p.id; save(); rehacer(); }));
    w.append(bar, cnPaneEd(false, cur.id, { embed:true }));
  }
  // lo que marcó en esta ficha
  const hs = hlOf(it);
  const mk = el(`div`, `apmk`);
  mk.append(el(`h4`, ``, `Lo que marcaste en esta ficha${hs.length ? ` · ${hs.length}` : ``}`));
  if (!hs.length) mk.append(el(`p`, `muted`, `En “Leer”, selecciona un texto: puedes marcarlo con color, ⭐ como importante, guardarlo como duda o pasarlo a estos apuntes.`));
  hs.slice().sort((a, b) => (b.c === `i`) - (a.c === `i`) || a.s - b.s).forEach(h => {
    const r = el(`div`, `apmkr`);
    r.append(el(`mark`, `hl hl-${h.c}`, `${h.c === `i` ? `⭐ ` : ``}${esc(h.q)}`));
    const a = btn(`📝`, `apmkb`, () => { const p = cur || apPage(t, `apuntes`); apAppend(p, `<blockquote>${esc(h.q)}</blockquote><p><small>— ${esc(it.title)} · ${esc(it.src)}</small></p><p><br></p>`); S.x.apPg[t] = p.id; save(); toastMsg(`Pasado a “${p.title}”.`); rehacer(); }); a.title = `Pasar a mis apuntes`; a.setAttribute(`aria-label`, a.title);
    const x = btn(`✕`, `apmkb`, () => { hlDel(it, h.id); rehacer(); }); x.title = `Quitar marcado`; x.setAttribute(`aria-label`, x.title);
    r.append(a, x); mk.append(r);
  });
  w.append(mk);
  return w;
}

/* ---------- marcados ---------- */
function hlAdd(it, q, s, c){ S.x.hl = S.x.hl || {}; const k = hlKey(it); (S.x.hl[k] = S.x.hl[k] || []).push({ id:nid(), q, s, c, t:Date.now() }); save(); }
function hlDel(it, id){ if (typeof tomb === `function`) tomb(id); const k = hlKey(it); S.x.hl[k] = (S.x.hl[k] || []).filter(h => h.id !== id); save(); }
function hlSet(it, id, c){ const h = hlOf(it).find(x => x.id === id); if (h){ h.c = c; h.t = Date.now(); save(); } }
function txtNodes(root){ const L = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); let n, o = 0; while ((n = w.nextNode())){ L.push({ n, s:o }); o += n.data.length; } return L; }
function hlWrap(root, a, b, h){
  txtNodes(root).forEach(({ n, s }) => {
    const len = n.data.length, x0 = Math.max(a, s) - s, x1 = Math.min(b, s + len) - s; if (x1 <= x0) return;
    let node = n; if (x1 < len) node.splitText(x1); if (x0 > 0) node = node.splitText(x0);
    if (!node.data.trim() && node.parentNode && /^(UL|OL|TBODY|TR|TABLE)$/.test(node.parentNode.tagName)) return;
    const m = document.createElement(`mark`); m.className = `hl hl-${h.c}`; m.dataset.hl = h.id; node.parentNode.insertBefore(m, node); m.append(node);
  });
}
function hlPaint(root, it){
  root.querySelectorAll(`mark.hl`).forEach(m => { const p = m.parentNode; while (m.firstChild) p.insertBefore(m.firstChild, m); m.remove(); p.normalize(); });
  const full = txtNodes(root).map(x => x.n.data).join(``);
  hlOf(it).forEach(h => { let i = full.substr(h.s, h.q.length) === h.q ? h.s : full.indexOf(h.q); if (i < 0){ const z = full.replace(/\s+/g, ` `).indexOf(h.q); if (z < 0) return; i = z; } hlWrap(root, i, i + h.q.length, h); });
  root.dataset.hlx = `1`;
}
// cada vez que se pinta una ficha, se aplican sus marcados
let HL_T = 0;
new MutationObserver(() => { if (HL_T) return; HL_T = requestAnimationFrame(() => { HL_T = 0;
  const it = repCur(); if (!it) return;
  document.querySelectorAll(`#view .rleer:not([data-hlx])`).forEach(r => hlPaint(r, it));
  if (!S.x.selTip){ const r = document.querySelector(`#view .rleer`); const host = r && (r.closest(`.rlc`) || r); if (host && !document.querySelector(`#view .seltip`)){ const tip = el(`div`, `seltip`, `💡 Selecciona cualquier parte del texto para <b>marcarla</b>, guardarla como <b>duda</b> o pasarla a <b>Mis apuntes</b>.`); const x = btn(`Entendido`, `linkbtn`, () => { S.x.selTip = 1; save(); tip.remove(); }); tip.append(x); host.after(tip); } }
}); }).observe(document.getElementById(`view`), { childList:true, subtree:true });

/* ---------- menú al seleccionar ---------- */
let SELM = null;
function selCerrar(){ if (SELM){ SELM.el.remove(); SELM = null; } }
function selInfo(){
  const s = getSelection(); if (!s.rangeCount || s.isCollapsed) return null;
  const r = s.getRangeAt(0), q = s.toString().replace(/\s+/g, ` `).trim(); if (q.length < 2) return null;
  const n = r.commonAncestorContainer, e = n.nodeType === 1 ? n : n.parentElement;
  if (!e || !e.closest(`#view`) || e.closest(`[contenteditable="true"], input, textarea, select, .selmenu, .lbar`)) return null;
  const sc = r.startContainer.nodeType === 1 ? r.startContainer : r.startContainer.parentElement, ec = r.endContainer.nodeType === 1 ? r.endContainer : r.endContainer.parentElement;
  let root = sc && sc.closest(`.rleer`); if (root && !root.contains(ec)) root = null;
  let off = 0; if (root){ const pre = document.createRange(); pre.setStart(root, 0); pre.setEnd(r.startContainer, r.startOffset); off = pre.toString().length; }
  return { q, raw:s.toString(), r, root, off, it:repCur() };
}
function selDuda(q, it){
  const t = it ? it.t : (selList().length === 1 ? selList()[0] : ``), p = apPage(t, `dudas`);
  apAppend(p, `“${esc(q)}”${it ? ` <small>— ${esc(it.title)} · ${esc(it.src)}</small>` : ``}`, true);
  toastMsg(`❓ Duda guardada en el Cuaderno → ${p.title}`);
}
function selApunte(q, it){
  const t = it ? it.t : (selList().length === 1 ? selList()[0] : ``); S.x.apPg = S.x.apPg || {};
  const pgs = t ? cnPagesFor(t) : []; let p = cnPg(S.x.apPg[t]); if (!p || !pgs.includes(p)) p = pgs.find(x => x.ap !== `dudas`) || apPage(t, `apuntes`);
  apAppend(p, `<blockquote>${esc(q)}</blockquote>${it ? `<p><small>— ${esc(it.title)} · ${esc(it.src)}</small></p>` : ``}<p><br></p>`);
  if (t){ S.x.apPg[t] = p.id; save(); }
  toastMsg(`📝 Pasado a tus apuntes → ${p.title}`);
}
function selRepasar(q, it){
  if (typeof nSave !== `function`) return;
  nSave({ id:nid(), kind:`task`, text:`Repasar: “${q.length > 140 ? q.slice(0, 140) + `…` : q}”${it ? ` (${it.title})` : ``}`, date:addDays(todayStr(), 1), time:``, color:``, tags:[], pinned:false, done:0, t:it ? it.t : ``, created:Date.now() });
  toastMsg(`📅 Agregado a Pendientes para mañana.`);
}
function selHablar(q){ try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(q); u.lang = `es-ES`; const v = speechSynthesis.getVoices().find(x => /^es/i.test(x.lang) && /natural|online|google/i.test(x.name)) || speechSynthesis.getVoices().find(x => /^es/i.test(x.lang)); if (v) u.voice = v; u.rate = .95; speechSynthesis.speak(u); } catch(e){} }
function selCopiar(q, it){ const t = q + (it ? `\n— ${it.title} (${it.src})` : ``); (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => toastMsg(`📋 Copiado.`)).catch(() => toastMsg(`No se pudo copiar.`)); }
function selMenu(info, mark){
  selCerrar();
  const m = el(`div`, `selmenu`); m.setAttribute(`role`, `toolbar`); m.setAttribute(`aria-label`, `Acciones con el texto seleccionado`);
  const it = info.it, q = info.q, fin = msg => { selCerrar(); try { getSelection().removeAllRanges(); } catch(e){} };
  const B = (html, tip, f, cls = ``) => { const b = btn(html, `smb ${cls}`, () => { f(); }); b.title = tip; b.setAttribute(`aria-label`, tip); m.append(b); return b; };
  const fila1 = el(`div`, `smrow`);
  if (it && (info.root || mark)){
    HLC.forEach(([c, n]) => { const b = btn(``, `smc hl-${c}` + (mark && mark.c === c ? ` on` : ``), () => {
      if (mark) hlSet(it, mark.id, c); else hlAdd(it, info.q, info.off, c);
      document.querySelectorAll(`#view .rleer`).forEach(r => hlPaint(r, it)); fin(); }); b.title = `Marcar en ${n.toLowerCase()}`; b.setAttribute(`aria-label`, b.title); fila1.append(b); });
    const imp = btn(`⭐ Importante`, `smb imp` + (mark && mark.c === `i` ? ` on` : ``), () => { if (mark) hlSet(it, mark.id, `i`); else hlAdd(it, info.q, info.off, `i`); document.querySelectorAll(`#view .rleer`).forEach(r => hlPaint(r, it)); fin(); toastMsg(`⭐ Marcado como importante. Lo ves en “Mis apuntes”.`); });
    imp.title = `Marcar como importante`; fila1.append(imp);
    if (mark){ const x = btn(`✕ Quitar`, `smb`, () => { hlDel(it, mark.id); document.querySelectorAll(`#view .rleer`).forEach(r => hlPaint(r, it)); fin(); }); x.title = `Quitar el marcado`; fila1.append(x); }
    m.append(fila1);
  }
  const fila2 = el(`div`, `smrow`); m.append(fila2);
  const B2 = (html, tip, f) => { const b = btn(html, `smb`, () => { f(); fin(); }); b.title = tip; b.setAttribute(`aria-label`, tip); fila2.append(b); };
  B2(`❓ Duda`, `Guardar como duda en el Cuaderno`, () => selDuda(q, it));
  B2(`📝 A mis apuntes`, `Pasar este texto a mis apuntes del tema`, () => selApunte(q, it));
  B2(`📅 Repasar luego`, `Agregar a Pendientes para mañana`, () => selRepasar(q, it));
  B2(`💬 Preguntar`, `Buscar una explicación en Preguntar`, () => { if (typeof ASK !== `undefined`){ ASK.q = q.slice(0, 160); ASK.tab = `mat`; } go(`preguntar`); });
  B2(`🔊`, `Escuchar en voz alta`, () => selHablar(q));
  B2(`📋`, `Copiar con la fuente`, () => selCopiar(q, it));
  // sin quitar la selección al tocar el menú
  m.addEventListener(`pointerdown`, e => { if (e.target.closest(`button`)) e.preventDefault(); });
  m.addEventListener(`mousedown`, e => e.preventDefault());
  document.body.append(m); SELM = { el:m, info, mark };
  selPos();
  if (!S.x.selTip){ S.x.selTip = 1; save(); const t = document.querySelector(`#view .seltip`); if (t) t.remove(); }
}
function selPos(){
  if (!SELM || (!SELM.markEl && !SELM.info.r)) return; const m = SELM.el;
  const rr = SELM.markEl ? SELM.markEl.getBoundingClientRect() : (() => { const rs = SELM.info.r.getClientRects(); return rs.length ? rs[rs.length - 1] : SELM.info.r.getBoundingClientRect(); })();
  const all = SELM.markEl ? rr : SELM.info.r.getBoundingClientRect();
  const mw = m.offsetWidth, mh = m.offsetHeight;
  let top = rr.bottom + 12; if (top + mh > innerHeight - 8) top = all.top - mh - 12; if (top < 8) top = Math.min(innerHeight - mh - 8, rr.bottom + 12);
  top = Math.max(8, Math.min(innerHeight - mh - 8, top));
  const cx = (rr.left + rr.right) / 2; m.style.top = `${Math.round(top)}px`; m.style.left = `${Math.round(Math.max(8, Math.min(innerWidth - mw - 8, cx - mw / 2)))}px`;
}
let SEL_T = null;
function selCheck(){ clearTimeout(SEL_T); SEL_T = setTimeout(() => { const i = selInfo(); if (!i){ if (SELM && !SELM.mark) selCerrar(); return; } if (SELM && !SELM.mark && SELM.info.q === i.q) { SELM.info = i; selPos(); return; } selMenu(i); }, 280); }
document.addEventListener(`selectionchange`, () => { if (SELM && SELM.mark) return; selCheck(); });
document.addEventListener(`pointerdown`, e => { if (SELM && !SELM.el.contains(e.target) && !e.target.closest(`mark.hl`)) selCerrar(); }, true);
addEventListener(`scroll`, () => { if (SELM) selPos(); }, { passive:true, capture:true });
addEventListener(`resize`, () => selCerrar());
document.addEventListener(`keydown`, e => { if (e.key === `Escape` && SELM) selCerrar(); });
// tocar un texto ya marcado: cambiar color, quitar o usarlo
document.addEventListener(`click`, e => {
  const mk = e.target.closest(`#view .rleer mark.hl`); if (!mk) return;
  const s = getSelection(); if (s && !s.isCollapsed) return;
  const it = repCur(); if (!it) return; const h = hlOf(it).find(x => x.id === mk.dataset.hl); if (!h) return;
  const parts = [...document.querySelectorAll(`#view mark.hl[data-hl="${h.id}"]`)];
  selMenu({ q:h.q, it, root:mk.closest(`.rleer`), off:h.s, r:null }, h); SELM.markEl = parts[parts.length - 1] || mk; selPos();
});

/* ======================= VIDEO DENTRO DE LA PÁGINA + NOTAS DEL VIDEO =======================
   El video de YouTube se ve aquí mismo (youtube-nocookie). Al lado, una página del Cuaderno para
   las notas de ese video; “⏱ Minuto” pega el minuto actual como enlace que salta a ese momento.       */
const VT = { cur:0, frame:null };
const ytEmbed = id => `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(location.origin)}`;
const mmss = s => { s = Math.max(0, Math.floor(s)); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return (h ? h + `:` + pad2(m) : m) + `:` + pad2(x); };
function ytFrame(v){
  const f = document.createElement(`iframe`); f.src = ytEmbed(v.id); f.title = v.title; f.className = `ytf`;
  f.setAttribute(`allow`, `accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen`); f.allowFullscreen = true; f.loading = `lazy`; f.referrerPolicy = `strict-origin-when-cross-origin`;
  f.addEventListener(`load`, () => { VT.frame = f; VT.cur = 0; try { f.contentWindow.postMessage(JSON.stringify({ event:`listening`, id:`q`, channel:`widget` }), `*`); } catch(e){} });
  return f;
}
addEventListener(`message`, e => { if (!/youtube(-nocookie)?\.com$/.test((e.origin || ``).replace(/^https?:\/\//, ``).replace(/^www\./, ``))) return; let d = e.data; try { if (typeof d === `string`) d = JSON.parse(d); } catch(x){ return; } if (d && d.info && typeof d.info.currentTime === `number`) VT.cur = d.info.currentTime; });
function ytCmd(func, args){ const f = VT.frame; if (!f || !f.isConnected) return false; try { f.contentWindow.postMessage(JSON.stringify({ event:`command`, func, args:args || [] }), `*`); return true; } catch(e){ return false; } }
function videoTab(it, vids, rehacer){
  const w = el(`div`, `vtab`), th = hlKey(it); S.x.vsel = S.x.vsel || {};
  let k = Math.min(S.x.vsel[th] || 0, vids.length - 1); const v = vids[k];
  if (vids.length > 1){ const ch = el(`div`, `apbar`); vids.forEach((x, j) => ch.append(btn(`▶ ${esc(x.title)}`, `apch` + (j === k ? ` on` : ``), () => { cnFlush(); S.x.vsel[th] = j; save(); rehacer(); }))); w.append(ch); }
  const g = el(`div`, `vgrid`);
  const col = el(`div`, `vcol`);
  const box = el(`div`, `vbox`); box.append(ytFrame(v)); col.append(box);
  col.append(el(`div`, `vmeta`, `<b>${esc(v.title)}</b><small>${esc(v.ch)} · refuerza: ${esc(v.src)}</small>`));
  const lk = el(`a`, `linkbtn`, `Abrir en YouTube ↗`); lk.href = ytUrl(v.id); lk.target = `_blank`; lk.rel = `noopener`; col.append(lk);
  // notas del video (página del Cuaderno)
  const nt = el(`div`, `vnotes`);
  const sec = it.t, find = () => cn().pg.find(p => p.vid === v.id);
  let p = find();
  const hd = el(`div`, `vnh`); hd.append(el(`b`, ``, `📝 Notas del video`));
  const min = btn(`⏱ Minuto`, `btn ghost sm`, () => {
    let pg = find(); if (!pg){ pg = mkPage(); rehacer(); setTimeout(() => insMin(), 120); return; } insMin();
  }); min.title = `Pegar el minuto actual del video en tus notas`; hd.append(min); nt.append(hd);
  function mkPage(){ const q = apNew(sec, `Notas de video · ${v.title}`, `<p><b>Video:</b> <a href="${ytUrl(v.id)}" target="_blank" rel="noopener">${esc(v.title)}</a> · ${esc(v.ch)}</p><ul><li><br></li></ul>`, `video`); q.vid = v.id; cnSave(true); return q; }
  function insMin(){
    const ed = document.querySelector(`.vnotes .cnedit`); if (!ed) return; const s = VT.cur, a = `<a class="ytt" data-t="${Math.floor(s)}" href="${ytUrl(v.id)}&t=${Math.floor(s)}s" target="_blank" rel="noopener">[${mmss(s)}]</a>&nbsp;`;
    ed.focus(); const sl = getSelection(); if (!sl.rangeCount || !ed.contains(sl.anchorNode)){ const r = document.createRange(); r.selectNodeContents(ed); r.collapse(false); sl.removeAllRanges(); sl.addRange(r); }
    document.execCommand(`insertHTML`, false, a); ed.dispatchEvent(new Event(`input`));
  }
  if (!p){
    const e = el(`div`, `apempty`); e.append(el(`p`, ``, `Anota lo que explica el video mientras lo ves. Se guarda en tu Cuaderno, en la sección del ${TOPICS[it.t].n}.`));
    e.append(btn(`📝 Tomar notas de este video`, `btn acc`, () => { mkPage(); rehacer(); setTimeout(() => { const ed = document.querySelector(`.vnotes .cnedit`); if (ed){ ed.focus(); const r = document.createRange(); r.selectNodeContents(ed); r.collapse(false); const sl = getSelection(); sl.removeAllRanges(); sl.addRange(r); } }, 120); }));
    nt.append(e);
  } else nt.append(cnPaneEd(false, p.id, { embed:true }));
  g.append(col, nt); w.append(g);
  w.append(el(`p`, `muted vtip`, `Tip: “⏱ Minuto” pega el momento del video en tus notas; al tocarlo, el video salta a ese momento.`));
  return w;
}
// tocar [mm:ss] en las notas: el video salta a ese momento
document.addEventListener(`click`, e => { const a = e.target.closest(`a.ytt[data-t]`); if (!a || !VT.frame || !VT.frame.isConnected) return; e.preventDefault(); ytCmd(`seekTo`, [+a.dataset.t, true]); ytCmd(`playVideo`); }, true);
// los enlaces de “Video de refuerzo” en otras pantallas abren el video aquí mismo
document.addEventListener(`click`, e => {
  const a = e.target.closest(`a.vidlink`); if (!a || e.ctrlKey || e.metaKey) return; const m = /[?&]v=([\w-]{6,})|youtu\.be\/([\w-]{6,})/.exec(a.href || ``); const id = m && (m[1] || m[2]); const v = id && VIDEOS.find(x => x.id === id); if (!v) return;
  e.preventDefault(); openSheet(v.title, b => { const bx = el(`div`, `vbox`); bx.append(ytFrame(v)); b.append(bx, el(`p`, `muted`, `${esc(v.ch)} · ${esc(v.src)}`)); const l = el(`a`, `linkbtn`, `Abrir en YouTube ↗`); l.href = ytUrl(v.id); l.target = `_blank`; l.rel = `noopener`; b.append(l); });
});
