/* ======================= RELOJ ======================= */
function clkCfg(){ if (!S.x.clk) S.x.clk = { h24:false, sec:true, chip:true, next:true }; return S.x.clk; }
function clkParts(d){
  const c = clkCfg(); let h = d.getHours(); const m = pad2(d.getMinutes()), s = pad2(d.getSeconds());
  if (c.h24) return { hm:`${pad2(h)}:${m}`, s, ap:`` };
  const ap = h >= 12 ? `p. m.` : `a. m.`; h = h % 12 || 12; return { hm:`${h}:${m}`, s, ap };
}
function clkShort(d){ const p = clkParts(d); return p.hm + (p.ap ? ` ` + p.ap : ``); }
function nextEvent(){
  const now = new Date(), today = todayStr();
  const list = (S.x.ev || []).filter(e => e.date && (e.date > today || (e.date === today && (!e.time || e.time >= `${pad2(now.getHours())}:${pad2(now.getMinutes())}`))));
  list.sort((a, b) => (a.date + (a.time || `99`)).localeCompare(b.date + (b.time || `99`)));
  return list[0] || null;
}
function nextEventText(){
  const e = nextEvent(); if (!e) return ``;
  const dd = dayDiff(todayStr(), e.date), t = e.time ? fmtTime(e.time) : ``;
  let w = dd === 0 ? (t ? `hoy a las ${t}` : `hoy`) : dd === 1 ? (t ? `mañana a las ${t}` : `mañana`) : `en ${dd} días`;
  if (dd === 0 && e.time){ const [h, m] = e.time.split(`:`).map(Number); const n = new Date(); const mins = h * 60 + m - (n.getHours() * 60 + n.getMinutes()); if (mins <= 90) w = mins <= 0 ? `ahora` : `en ${mins} min`; }
  return `${e.title} ${w}`;
}
function clockBig(){
  const b = btn(``, `clockbig`); b.dataset.clock = `big`; b.title = `Ajustes del reloj`; b.setAttribute(`aria-label`, `Reloj. Toca para ajustarlo`);
  b.onclick = openClockSettings; paintClock(b); return b;
}
function paintClock(h){
  const d = new Date(), p = clkParts(d), c = clkCfg(), kind = h.dataset.clock;
  if (kind === `chip`){ h.innerHTML = `🕒 <span>${innerWidth > 700 ? clkShort(d) : p.hm}</span>`; return; }
  if (kind === `focus`){ h.innerHTML = `${p.hm}${c.sec ? `<span class="sec">:${p.s}</span>` : ``}${p.ap ? ` <small>${p.ap}</small>` : ``}`; return; }
  const DIA = DIAS[d.getDay()]; const nx = c.next ? nextEventText() : ``;
  const ps = S.x.pst, pr = ps && ps.run ? `🍅 ${ps.phase === `study` ? `Estudio` : `Descanso`} · quedan ${fmtSec(pomoLeft())}` : ``;
  h.innerHTML = `<span class="t">${p.hm}${c.sec ? `<span class="sec">:${p.s}</span>` : ``}${p.ap ? `<small>${p.ap}</small>` : ``}</span><span class="side"><span class="d">${DIA[0].toUpperCase() + DIA.slice(1)} ${d.getDate()} de ${MESES[d.getMonth()]}</span>${nx ? `<span class="n">${nx}</span>` : ``}${pr ? `<span class="n pr">${pr}</span>` : ``}</span>`;
}
function updateClocks(){ document.querySelectorAll(`[data-clock]`).forEach(paintClock); }
function addHeadClock(){
  const top = $(`#head .top`); if (!top) return; const tools = top.querySelector(`.tools`);
  if (S.mode === `notas`){ const h1 = $(`#head h1`); if (h1) h1.textContent = `Mis notas`; const k = $(`#head .top .k`); if (k) k.textContent = `Inicio · ${curCiclo() ? curCiclo().name : `Notas`}`; document.querySelectorAll(`#head .chips, #head .hstat`).forEach(x => x.remove()); }
  if (S.mode === `inicio`){
    const k = $(`#head .top .k`); if (k) k.textContent = `Química · Laboratorio Clínico`;
    const w = el(`div`, `clockwrap`); w.append(clockBig()); if (typeof motLine === `function`) w.append(motLine());
    if (innerWidth <= 700) top.after(w); else top.insertBefore(w, tools);
  } else if (clkCfg().chip && tools){ const c = btn(``, `hbtn hclock`); c.dataset.clock = `chip`; c.title = `Hora · ajustes del reloj`; c.onclick = openClockSettings; paintClock(c); tools.prepend(c); }
}
const _renderHead = renderHead;
renderHead = function(){ _renderHead(); addHeadClock(); };
const _openFocus = openFocus;
openFocus = function(){ _openFocus(); const f = $(`#focusroot .focus`); if (f){ const c = el(`div`, `fclock`); c.dataset.clock = `focus`; paintClock(c); f.prepend(c); } };
function openClockSettings(){
  const c = clkCfg(); const done = () => { save(); renderHead(); updateClocks(); };
  openSheet(`Reloj`, b => {
    b.append(fld(`Formato de 24 horas`, toggleBtn(c.h24, v => { c.h24 = v; done(); }), `22:38 en lugar de 10:38 p. m.`));
    b.append(fld(`Mostrar segundos`, toggleBtn(c.sec, v => { c.sec = v; done(); }), `En Inicio y en modo concentración`));
    b.append(fld(`Próximo evento de la agenda`, toggleBtn(c.next, v => { c.next = v; done(); }), `Ej.: "Parcial en 7 días" o "Laboratorio en 40 min"`));
    b.append(fld(`Reloj en las demás secciones`, toggleBtn(c.chip, v => { c.chip = v; done(); }), `Hora pequeña arriba en Estudiar, Practicar, Examen y Preguntar`));
  });
}
setInterval(updateClocks, 1000);
