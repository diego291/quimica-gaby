/* ======================= AUDIO-REPASO (lectura en voz alta) ======================= */
const AU = { on:false, cards:[], ci:0, si:0, sents:[], voices:[], sleepEnd:0, token:0 };
function auCfg(){ if (!S.x.au) S.x.au = { rate:1, voice:``, check:true, pause:2, pos:{} }; return S.x.au; }
const AU_SUP = { '⁰':`0`, '¹':`1`, '²':`2`, '³':`3`, '⁴':`4`, '⁵':`5`, '⁶':`6`, '⁷':`7`, '⁸':`8`, '⁹':`9` };
const AU_SUB = { '₀':`0`, '₁':`1`, '₂':`2`, '₃':`3`, '₄':`4`, '₅':`5`, '₆':`6`, '₇':`7`, '₈':`8`, '₉':`9` };
function speakable(html){
  const d = document.createElement(`div`); d.innerHTML = html; d.querySelectorAll(`svg,script,style`).forEach(x => x.remove());
  d.querySelectorAll(`li`).forEach(li => li.append(`. `)); d.querySelectorAll(`p,h3,h4,tr,div`).forEach(x => x.append(` `));
  let t = d.textContent.replace(/\s+/g, ` `).trim();
  t = t.replace(/10\^?⁻([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (m, e) => `diez a la menos ${[...e].map(c => AU_SUP[c]).join(``)}`)
       .replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹]*)⁺/g, (m, e) => ` ${e ? [...e].map(c => AU_SUP[c]).join(``) + ` ` : ``}más `).replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹]*)⁻/g, (m, e) => ` ${e ? [...e].map(c => AU_SUP[c]).join(``) + ` ` : ``}menos `)
       .replace(/²/g, ` al cuadrado`).replace(/³/g, ` al cubo`).replace(/[⁰¹⁴⁵⁶⁷⁸⁹]/g, c => ` a la ${AU_SUP[c]}`)
       .replace(/[₀-₉]/g, c => AU_SUB[c]);
  const R = [[/⇌|⇄/g, ` en equilibrio con `], [/→|⟶/g, ` produce `], [/←/g, ` viene de `], [/≈/g, ` aproximadamente `], [/≠/g, ` distinto de `], [/≥/g, ` mayor o igual que `], [/≤/g, ` menor o igual que `], [/±/g, ` más o menos `], [/×/g, ` por `], [/·/g, `, `], [/°C/g, ` grados Celsius`], [/\bK\b(?=[\s.,;)])/g, ` kelvin`], [/Δ/g, ` delta `], [/α/g, ` alfa `], [/β/g, ` beta `], [/π/g, ` pi `], [/σ/g, ` sigma `],
    [/\bmol\/L\b/g, ` moles por litro`], [/\bg\/mL\b/g, ` gramos por mililitro`], [/\bg\/mol\b/g, ` gramos por mol`], [/\bg\/L\b/g, ` gramos por litro`], [/\bEq\/L\b/g, ` equivalentes por litro`], [/\bmEq\/L\b/g, ` miliequivalentes por litro`], [/\bmg\/dL\b/g, ` miligramos por decilitro`],
    [/(\d)\s?mL\b/g, `$1 mililitros`], [/(\d)\s?L\b/g, `$1 litros`], [/(\d)\s?mg\b/g, `$1 miligramos`], [/(\d)\s?kg\b/g, `$1 kilogramos`], [/(\d)\s?g\b/g, `$1 gramos`], [/(\d)\s?M\b/g, `$1 molar`], [/(\d)\s?N\b/g, `$1 normal`], [/(\d)\s?m\b/g, `$1 molal`], [/(\d)\s?atm\b/g, `$1 atmósferas`], [/(\d)\s?mmHg\b/g, `$1 milímetros de mercurio`],
    [/\bpKa\b/g, `pe ka`], [/\bpKb\b/g, `pe ka be`], [/\bpKw\b/g, `pe ka uve doble`], [/\bpOH\b/g, `pe o hache`], [/\bpH\b/g, `pe hache`], [/\bKa\b/g, `ka a`], [/\bKb\b/g, `ka be`], [/\bKw\b/g, `ka uve doble`], [/\bIUPAC\b/g, `iupac`], [/\bR−/g, `R `], [/−/g, ` `], [/\s=\s/g, ` igual a `], [/\//g, ` entre `]];
  R.forEach(([a, b]) => t = t.replace(a, b));
  // fórmulas químicas: separa los símbolos para que se lean (CH3CH2OH → C H 3 C H 2 O H)
  t = t.replace(/\b(?:[A-Z][a-z]?\d*){2,}\b/g, m => /^[A-Z][a-z]+$/.test(m) ? m : m.match(/[A-Z][a-z]?|\d+/g).join(` `));
  return t.replace(/\s+/g, ` `).replace(/\s([.,;:])/g, `$1`).replace(/([.:;])(\s*\.)+/g, `$1`).trim();
}
function splitSents(t){ return (t.match(/[^.!?;:]+[.!?;:]*/g) || [t]).map(s => s.trim()).filter(s => s.length > 1).reduce((a, s) => { if (a.length && (a[a.length - 1].length < 40)) a[a.length - 1] += ` ` + s; else a.push(s); return a; }, []); }
function cardScript(it){
  const c = auCfg(); const parts = [`${TOPICS[it.t].n}. ${it.title}.`];
  parts.push(speakable(it.body || ``));
  if (it.fig && FIG[it.fig] && FIG[it.fig].cap) parts.push(`En el dibujo: ` + speakable(FIG[it.fig].cap));
  if (c.check){ const q = checkQ(it); if (q){ parts.push(`Pregunta de repaso: ` + speakable(q.q)); parts.push({ wait:4 }); parts.push(`Respuesta: ` + speakable(q.o[0]) + `. ` + speakable(q.e || ``)); } }
  const out = []; parts.forEach(p => typeof p === `string` ? splitSents(p).forEach(s => out.push(s)) : out.push(p)); return out;
}
function auLoadVoices(){ try { AU.voices = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang)); } catch(e){ AU.voices = []; } }
if (`speechSynthesis` in window){ auLoadVoices(); speechSynthesis.onvoiceschanged = () => { auLoadVoices(); if (S.mode === `escuchar`) renderView(); }; }
function auVoice(){ const c = auCfg(); return AU.voices.find(v => v.voiceURI === c.voice) || AU.voices.find(v => /es[-_](MX|US|419|SV|CO|AR)/i.test(v.lang)) || AU.voices[0] || null; }
function auKey(){ return selKey(); }
function auStop(){ AU.on = false; AU.token++; try { speechSynthesis.cancel(); } catch(e){} auPaint(); }
function auPlay(){
  if (!(`speechSynthesis` in window)) return;
  AU.on = true; const tk = ++AU.token; try { speechSynthesis.cancel(); } catch(e){}
  if (`mediaSession` in navigator){ try { navigator.mediaSession.metadata = new MediaMetadata({ title: AU.cards[AU.ci] ? AU.cards[AU.ci].title : `Repaso`, artist:`Química · Audio-repaso` }); navigator.mediaSession.setActionHandler(`play`, auPlay); navigator.mediaSession.setActionHandler(`pause`, auStop); navigator.mediaSession.setActionHandler(`nexttrack`, () => auJump(1)); navigator.mediaSession.setActionHandler(`previoustrack`, () => auJump(-1)); } catch(e){} }
  auStep(tk);
}
function auStep(tk){
  if (tk !== AU.token || !AU.on) return;
  if (AU.sleepEnd && Date.now() > AU.sleepEnd){ AU.sleepEnd = 0; auStop(); return; }
  if (AU.ci >= AU.cards.length){ auStop(); AU.ci = 0; AU.si = 0; auSavePos(); celebrate(`repaso`, AU.cards.length, true); renderView(); return; }
  if (!AU.sents.length) AU.sents = cardScript(AU.cards[AU.ci]);
  if (AU.si >= AU.sents.length){ S.x.seen[hash(AU.cards[AU.ci].title)] = 1; AU.ci++; AU.si = 0; AU.sents = []; auSavePos(); auRender(); setTimeout(() => auStep(tk), auCfg().pause * 1000); return; }
  const s = AU.sents[AU.si]; auPaint();
  if (typeof s === `object`){ setTimeout(() => { if (tk !== AU.token) return; AU.si++; auStep(tk); }, s.wait * 1000); return; }
  const u = new SpeechSynthesisUtterance(s); u.lang = `es-ES`; const v = auVoice(); if (v){ u.voice = v; u.lang = v.lang; } u.rate = auCfg().rate;
  u.onend = () => { if (tk !== AU.token) return; AU.si++; auStep(tk); };
  u.onerror = e => { if (tk !== AU.token) return; if (e.error === `interrupted` || e.error === `canceled`) return; AU.si++; auStep(tk); };
  speechSynthesis.speak(u);
}
function auJump(d){ const was = AU.on; auStop(); AU.ci = Math.max(0, Math.min(AU.cards.length - 1, AU.ci + d)); AU.si = 0; AU.sents = []; auSavePos(); auRender(); if (was) auPlay(); }
function auSavePos(){ auCfg().pos[auKey()] = AU.ci; save(); }
function auPaint(){
  const h = $(`#auread`); if (!h || !AU.cards[AU.ci]) return;
  if (!AU.sents.length) AU.sents = cardScript(AU.cards[AU.ci]);
  h.innerHTML = AU.sents.map((s, i) => typeof s === `object` ? `<span class="aw ${i === AU.si && AU.on ? `cur` : ``}">⏸ piensa la respuesta…</span>` : `<span class="${i === AU.si && AU.on ? `cur` : i < AU.si ? `past` : ``}">${s} </span>`).join(``);
  const cur = h.querySelector(`.cur`); if (cur && AU.on) cur.scrollIntoView({ block:`nearest`, behavior:`smooth` });
  const pb = $(`#auplay`); if (pb) pb.innerHTML = AU.on ? `⏸ Pausar` : `▶ Escuchar`;
}
function auRender(){ if (S.mode === `escuchar`) renderView(); }
function vEscuchar(v){
  if (!(`speechSynthesis` in window)){ v.append(el(`div`, `empty`, `Este navegador no puede leer en voz alta. Prueba con Chrome, Edge o Safari actualizados.`)); return; }
  const c = auCfg(); const all = filt(ALL.REPASO);
  if (!all.length){ v.append(el(`div`, `empty`, `No hay tarjetas de repaso en los temas elegidos.`)); return; }
  const k = auKey(); if (AU.key !== k){ auStop(); AU.key = k; AU.cards = all; AU.ci = Math.min(c.pos[k] || 0, all.length - 1); AU.si = 0; AU.sents = []; }
  const it = AU.cards[AU.ci];
  const p = el(`article`, `card plain aup`); p.style.setProperty(`--c`, `var(--${it.t})`);
  p.innerHTML = `<div class="aumeta"><span class="chip">${TOPICS[it.t].n}</span><span class="muted">Tarjeta ${AU.ci + 1} de ${AU.cards.length}</span></div><h3>${it.title}</h3><div class="bar"><i style="width:${(AU.ci) / AU.cards.length * 100}%"></i></div>`;
  const ctr = el(`div`, `auctr`);
  const prev = btn(`⏮`, `btn ghost`, () => auJump(-1)); prev.setAttribute(`aria-label`, `Tarjeta anterior`);
  const play = btn(AU.on ? `⏸ Pausar` : `▶ Escuchar`, `btn acc auplay`, () => AU.on ? auStop() : auPlay()); play.id = `auplay`;
  const nxt = btn(`⏭`, `btn ghost`, () => auJump(1)); nxt.setAttribute(`aria-label`, `Tarjeta siguiente`);
  ctr.append(prev, play, nxt); p.append(ctr);
  const opts = el(`div`, `auopts`);
  const rs = document.createElement(`select`); rs.className = `nedit`; rs.setAttribute(`aria-label`, `Velocidad`); rs.innerHTML = [.8, .9, 1, 1.15, 1.3, 1.5].map(r => `<option value="${r}">${r}×</option>`).join(``); rs.value = String(c.rate); rs.onchange = () => { c.rate = +rs.value; save(); if (AU.on){ auStop(); auPlay(); } };
  const vs = document.createElement(`select`); vs.className = `nedit`; vs.setAttribute(`aria-label`, `Voz`); vs.innerHTML = AU.voices.length ? AU.voices.map(x => `<option value="${x.voiceURI}">${x.name.replace(/Microsoft |Google /, ``)} (${x.lang})</option>`).join(``) : `<option>Voz del sistema</option>`; const cv = auVoice(); if (cv) vs.value = cv.voiceURI; vs.onchange = () => { c.voice = vs.value; save(); if (AU.on){ auStop(); auPlay(); } };
  const sl = document.createElement(`select`); sl.className = `nedit`; sl.setAttribute(`aria-label`, `Apagar en`); sl.innerHTML = `<option value="0">Sin temporizador</option><option value="15">Apagar en 15 min</option><option value="30">Apagar en 30 min</option><option value="60">Apagar en 1 hora</option>`; sl.value = AU.sleepEnd ? String(AU.sleepMin || 0) : `0`; sl.onchange = () => { AU.sleepMin = +sl.value; AU.sleepEnd = AU.sleepMin ? Date.now() + AU.sleepMin * 60000 : 0; };
  opts.append(fld(`Velocidad`, rs), fld(`Voz`, vs), fld(`Temporizador`, sl), fld(`Preguntarme al final de cada tarjeta`, toggleBtn(c.check, x => { c.check = x; AU.sents = []; save(); auPaint(); }), `Lee una pregunta, te da 4 segundos para pensar y luego la respuesta`));
  p.append(opts); v.append(p);
  const rd = el(`div`, `card plain auread`); rd.id = `auread`; v.append(rd);
  v.append(el(`p`, `muted`, `Consejo: usa audífonos y deja la pantalla encendida. En algunos teléfonos la lectura se detiene al bloquear la pantalla o al cambiar de app; si pasa, vuelve a tocar Escuchar y sigue donde quedó.`));
  setTimeout(auPaint, 0);
}
/* botón "Escuchar desde aquí" en el repaso */
const _vRepasoA = vRepaso;
vRepaso = function(v){ _vRepasoA(v); const bar = v.querySelector(`.deckbar, .dbar`) || v.firstElementChild; if (!bar || !(`speechSynthesis` in window)) return; const b = btn(`🔊 Escuchar`, `btn ghost`, () => { const all = filt(ALL.REPASO); const i = S.x.rpos[selKey()] || 0; auCfg().pos[selKey()] = i; AU.key = null; save(); go(`escuchar`); setTimeout(auPlay, 200); }); b.title = `Escuchar el repaso desde esta tarjeta`; bar.append(b); };
document.addEventListener(`visibilitychange`, () => { if (document.visibilityState === `visible` && AU.on && !speechSynthesis.speaking){ AU.sents = []; auPlay(); } });
