/* ======================= MOTIVACIÓN: frases y felicitaciones ======================= */
function motCfg(){ if (!S.x.mot) S.x.mot = { open:true, every:25, bib:true, cel:true, used:{}, ans:{}, cards:{}, run:0 }; const m = S.x.mot; m.used = m.used || {}; return m; }
const MOT = { streak:0, last:0, min:0, shownOpen:false };
const nm = t => t.replace(/\{n\}/g, S.x.name || `Gaby`);
/* elige sin repetir hasta agotar la lista */
function pickFrom(key, n){
  const m = motCfg(); let u = m.used[key] || [];
  if (u.length >= n) u = u.slice(-Math.min(5, n - 1));
  const free = []; for (let i = 0; i < n; i++) if (!u.includes(i)) free.push(i);
  const i = free[Math.floor(Math.random() * free.length)];
  u.push(i); m.used[key] = u; return i;
}
function frase(){
  const m = motCfg(); const r = Math.random();
  if (m.bib && r < .33) { const [t, s] = BIBLIA[pickFrom(`b`, BIBLIA.length)]; return { t, s, k:`b` }; }
  if (r < (m.bib ? .5 : .25)) { const [t, s] = CITAS[pickFrom(`c`, CITAS.length)]; return { t, s, k:`c` }; }
  return { t:nm(FRASES[pickFrom(`f`, FRASES.length)]), s:``, k:`f` };
}
function feli(kind, k){ const L = FELI[kind]; const t = L[pickFrom(`F_` + kind, L.length)]; return nm(t).replace(/\{k\}/g, k); }
/* ---- toast ---- */
function motToast(o){
  const old = $(`#motoast`); if (old) old.remove();
  const d = el(`div`, `motoast` + (o.big ? ` big` : ``)); d.id = `motoast`; d.setAttribute(`role`, `status`);
  d.innerHTML = `<span class="me">${o.e || `✨`}</span><span class="mt"><b>${o.h || ``}</b>${o.t}${o.s ? `<small>${o.s}</small>` : ``}</span>`;
  const x = btn(`×`, `xbtn`, () => d.remove()); x.setAttribute(`aria-label`, `Cerrar`); d.append(x);
  document.body.append(d);
  if (o.big) confetti();
  const ms = 6000 + Math.min(8000, o.t.length * 45); setTimeout(() => d.classList.add(`out`), ms); setTimeout(() => d.remove(), ms + 400);
}
function confetti(){
  if (matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
  const w = el(`div`, `confw`); const cols = [`var(--acc)`, `#F2AA86`, `#ABA8F2`, `#8DBBE8`, `#F5C451`, `#7CC9B5`];
  for (let i = 0; i < 26; i++){ const p = el(`i`); p.style.cssText = `left:${50 + (Math.random() - .5) * 40}%;background:${cols[i % cols.length]};--dx:${(Math.random() - .5) * 520}px;--dy:${-160 - Math.random() * 300}px;--r:${Math.random() * 720}deg;animation-delay:${Math.random() * .15}s`; w.append(p); }
  document.body.append(w); setTimeout(() => w.remove(), 1800);
}
function celebrate(kind, k, big){
  const m = motCfg(); if (!m.cel) return;
  const now = Date.now(); if (!big && now - MOT.last < 20000) return; MOT.last = now;
  const E = { racha:`🔥`, dia:`🎯`, pomo:`🍅`, repaso:`📚`, tarjetas:`📖`, simAlto:`🏆`, simBien:`🌟`, simBajo:`💪`, nota:`🎉`, notaTop:`🏆`, error:`🌱`, rato:`⏱️` };
  const H = { racha:`¡Racha!`, dia:`¡Meta del día!`, pomo:`¡Pomodoro listo!`, repaso:`¡Repaso completo!`, tarjetas:`¡Gran avance!`, simAlto:`¡Felicidades!`, simBien:`¡Bien hecho!`, simBajo:`¡Ánimo!`, nota:`¡Felicidades!`, notaTop:`¡Felicidades!`, error:``, rato:`¡Sigue así!` };
  const extra = kind === `error` || kind === `simBajo` ? frase() : null;
  motToast({ e:E[kind], h:``, t:feli(kind, k) + (extra ? `<em>“${extra.t}”${extra.s ? ` — ${extra.s}` : ``}</em>` : ``), big });
}
function motPhrase(prefix){ const f = frase(); motToast({ e: f.k === `b` ? `🙏` : f.k === `c` ? `💬` : `✨`, h:prefix || ``, t:`“${f.t}”`, s:f.s }); }
/* ---- ganchos ---- */
const _record = record;
record = function(it, ok){
  _record(it, ok);
  const m = motCfg(), d = todayStr(); if (m.ans.d !== d) m.ans = { d, n:0 }; m.ans.n++;
  if (ok){ MOT.streak++; if ([5, 10, 15, 20, 30, 40, 50, 75, 100].includes(MOT.streak)) return celebrate(`racha`, MOT.streak, MOT.streak >= 10); }
  else { const s = MOT.streak; MOT.streak = 0; if (s >= 3 || Math.random() < .2) return celebrate(`error`); }
  if ([10, 25, 50, 75, 100, 150, 200].includes(m.ans.n)) celebrate(`dia`, m.ans.n, m.ans.n >= 50);
};
const _pomoFinish = pomoFinish;
pomoFinish = function(){ const was = S.x.pst.phase === `study`; _pomoFinish(); if (was){ const n = ((S.x.plog || {})[todayStr()] || { n:1 }).n; celebrate(`pomo`, n, n % 4 === 0); } };
function motSeen(all, it, before){
  const m = motCfg(), d = todayStr(); if (m.cards.d !== d) m.cards = { d, n:0 };
  if (!before){ m.cards.n++; if ([10, 25, 50, 80, 120].includes(m.cards.n)) celebrate(`tarjetas`, m.cards.n); }
  const seen = all.filter(x => S.x.seen[hash(x.title)]).length;
  if (!before && seen === all.length && all.length >= 5) celebrate(`repaso`, all.length, true);
}
function motSim(nota){ celebrate(nota >= 8.5 ? `simAlto` : nota >= 6 ? `simBien` : `simBajo`, String(nota).replace(`.`, `.`), nota >= 8.5); }
function motNota(v, m){ if (v == null || !m) return; const min = m.min != null ? m.min : 6, sc = m.scale || 10; if (v >= sc * .9) celebrate(`notaTop`, nfmt(v), true); else if (v >= min) celebrate(`nota`, nfmt(v), true); }
/* ---- tiempo de estudio activo ---- */
setInterval(() => {
  if (document.visibilityState !== `visible`) return; const m = motCfg(); if (!m.every) return;
  MOT.min++; if (MOT.min % m.every === 0){ if (S.mode !== `simulacro` && !SIM.on) { if (MOT.min % (m.every * 2) === 0) celebrate(`rato`, MOT.min); else motPhrase(`Para ti, ${S.x.name || `Gaby`}: `); } }
}, 60000);
function greet(){ const h = new Date().getHours(); return h < 5 ? `Qué dedicación` : h < 12 ? `Buenos días` : h < 19 ? `Buenas tardes` : `Buenas noches`; }
function motOpen(){ const m = motCfg(); if (!m.open || MOT.shownOpen) return; MOT.shownOpen = true; setTimeout(() => motPhrase(`${greet()}, ${S.x.name || `Gaby`}. `), 1800); }
/* ---- tarjeta en Inicio ---- */
function motCard(){
  const m = motCfg(); if (!m.cur || Date.now() - (m.curT || 0) > 30 * 60000){ m.cur = frase(); m.curT = Date.now(); save(); }
  const c = el(`article`, `card plain motcard`);
  const paint = () => { const f = m.cur; c.innerHTML = `<div class="mk">${f.k === `b` ? `🙏 Palabra para hoy` : f.k === `c` ? `💬 Para inspirarte` : `✨ Para ti, ${S.x.name || `Gaby`}`}</div><p class="mq">“${f.t}”</p>${f.s ? `<p class="ms">— ${f.s}</p>` : ``}`;
    const r = el(`div`, `btnrow`); r.append(btn(`Otra frase`, `btn ghost`, () => { m.cur = frase(); m.curT = Date.now(); save(); paint(); }), btn(`Ajustes`, `btn ghost`, openMotSettings)); c.append(r); };
  paint(); return c;
}
const _vInicio = vInicio;
vInicio = function(v){ _vInicio(v); };
const _openFocus2 = openFocus;
openFocus = function(){ _openFocus2(); const f = $(`#focusroot .focus`); if (f && motCfg().open !== null){ const q = frase(); const p = el(`p`, `fquote`, `“${q.t}”${q.s ? `<small>— ${q.s}</small>` : ``}`); f.append(p); } };
function openMotSettings(){
  const m = motCfg(); const done = () => { save(); };
  openSheet(`Frases y felicitaciones`, b => {
    b.append(fld(`Frase al abrir la página`, toggleBtn(m.open, v => { m.open = v; done(); }), `Un saludo con una frase cada vez que entres`));
    b.append(fld(`Incluir versículos bíblicos`, toggleBtn(m.bib, v => { m.bib = v; done(); }), `Reina-Valera 1960`));
    b.append(fld(`Felicitaciones`, toggleBtn(m.cel, v => { m.cel = v; done(); }), `Rachas de aciertos, pomodoros, repasos completos, simulacros y buenas notas`));
    const s = document.createElement(`select`); s.className = `nedit`; s.innerHTML = `<option value="0">Nunca</option><option value="15">Cada 15 min</option><option value="25">Cada 25 min</option><option value="40">Cada 40 min</option><option value="60">Cada hora</option>`; s.value = String(m.every || 0); s.onchange = () => { m.every = +s.value; done(); };
    b.append(fld(`Frases mientras estudias`, s, `Aparecen abajo sin interrumpir`));
    b.append(el(`p`, `muted`, `Hay ${FRASES.length} frases, ${BIBLIA.length} versículos y ${CITAS.length} citas. No se repiten hasta que salgan todas.`));
  });
}

/* frase pequeña bajo el reloj de Inicio */
function motLine(){
  const m = motCfg(); if (!m.cur || Date.now() - (m.curT || 0) > 30 * 60000){ m.cur = frase(); m.curT = Date.now(); save(); }
  const w = el(`div`, `motline`);
  const paint = () => { const f = m.cur; w.innerHTML = `<span class="mq">${f.k === `b` ? `🙏` : `✨`} “${f.t}”${f.s ? ` <small>— ${f.s}</small>` : ``}</span>`;
    const r = btn(`↻`, `mbtn`, () => { m.cur = frase(); m.curT = Date.now(); save(); paint(); }); r.title = `Otra frase`; r.setAttribute(`aria-label`, `Otra frase`);
    const s = btn(``, `mbtn`, openMotSettings); s.innerHTML = icon(`gear`); s.title = `Ajustes de frases`; s.setAttribute(`aria-label`, `Ajustes de frases`);
    const a = el(`span`, `macts`); a.append(r, s); w.append(a); };
  paint(); return w;
}
