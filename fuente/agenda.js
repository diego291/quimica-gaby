/* ======================= ORGANIZAR · AGENDA =======================
   Calendario tipo Google Calendar (Día · Semana · Mes · Lista) sincronizado con su Google Calendar.
   Los eventos propios viven en S.x.ev (los mismos que ya usaban la agenda, el plan de repaso y los avisos).
   Campos nuevos: edate, etime, allDay, rrule, rems [min], loc, desc, gid, gupd.
   "De la app" (punteado, no se edita aquí): plan de repaso, pendientes con fecha, repasos y Pomodoro.   */
const esc = s => String(s == null ? `` : s).replace(/[&<>"']/g, c => ({ '&':`&amp;`, '<':`&lt;`, '>':`&gt;`, '"':`&quot;`, "'":`&#39;` })[c]);
const GPAL = { 1:`#7986CB`, 2:`#33B679`, 3:`#8E24AA`, 4:`#E67C73`, 5:`#F6BF26`, 6:`#F4511E`, 7:`#039BE5`, 8:`#616161`, 9:`#3F51B5`, 10:`#0B8043`, 11:`#D50000` };
const GPALN = { 1:`Lavanda`, 2:`Salvia`, 3:`Uva`, 4:`Flamenco`, 5:`Plátano`, 6:`Mandarina`, 7:`Pavo real`, 8:`Grafito`, 9:`Arándano`, 10:`Albahaca`, 11:`Tomate` };
const CAT0 = [[`parcial`,`Parcial`,4],[`lab`,`Laboratorio`,2],[`tarea`,`Tarea`,7],[`clase`,`Clase`,1],[`estudio`,`Estudio`,10],[`personal`,`Personal`,5],[`otro`,`Otro`,8],[`google`,`Mi calendario`,9]];
const HPX = 46; // alto de una hora en la cuadrícula
const HC = { t:0, v:null };
function agcal(){
  if (!S.x.agcal) S.x.agcal = { cats: CAT0.map(([k, n, c]) => ({ k, n, c })), hidden:[] };
  const a = S.x.agcal; CAT0.forEach(([k, n, c]) => { if (!a.cats.some(x => x.k === k)) a.cats.push({ k, n, c }); }); a.hidden = a.hidden || [];
  return a;
}
const catOf = k => agcal().cats.find(c => c.k === k) || agcal().cats.find(c => c.k === `otro`);
const catColor = k => GPAL[catOf(k).c] || GPAL[8];
function syncETYPE(){ agcal().cats.forEach(c => { ETYPE[c.k] = [c.n, GPAL[c.c]]; }); }
const tzName = () => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || `America/El_Salvador`; } catch(e){ return `America/El_Salvador`; } };
const tmin = t => { if (!t) return 0; const [h, m] = t.split(`:`).map(Number); return h * 60 + m; };
const mtime = m => { m = Math.max(0, Math.min(24 * 60 - 1, Math.round(m))); return `${pad2(Math.floor(m / 60))}:${pad2(m % 60)}`; };
const nowMin = () => { const d = new Date(); return d.getHours() * 60 + d.getMinutes(); };
const remTxt = m => m === 0 ? `A la hora` : m < 60 ? `${m} min antes` : m < 1440 ? `${m / 60} h antes` : m % 10080 === 0 ? `${m / 10080} semana${m > 10080 ? `s` : ``} antes` : `${m / 1440} día${m > 1440 ? `s` : ``} antes`;
const REMS = [0, 5, 10, 15, 30, 60, 120, 1440, 2880, 10080];
function gRems(rems){ const ms = [...new Set(rems || [])].sort((x, y) => x - y), out = [];
  ms.forEach(m => { if (out.length < 5) out.push({ method:`popup`, minutes:m }); if (S.x.agMail && out.length < 5) out.push({ method:`email`, minutes:m }); });
  return { useDefault:false, overrides:out }; }

/* ---------- repeticiones (RRULE) ---------- */
const BYD = [`SU`,`MO`,`TU`,`WE`,`TH`,`FR`,`SA`];
const BYDN = { MO:`L`, TU:`M`, WE:`X`, TH:`J`, FR:`V`, SA:`S`, SU:`D` };
function parseRR(s){ const o = {}; String(s || ``).replace(/^RRULE:/, ``).split(`;`).forEach(p => { const [k, v] = p.split(`=`); if (k && v) o[k] = v; }); return o; }
function rrDates(start, rr, from, to){
  const o = parseRR(rr), f = o.FREQ, iv = Math.max(1, +(o.INTERVAL || 1)), cnt = o.COUNT ? +o.COUNT : null;
  const until = o.UNTIL ? `${o.UNTIL.slice(0, 4)}-${o.UNTIL.slice(4, 6)}-${o.UNTIL.slice(6, 8)}` : null;
  const out = [], sd = pdate(start); let n = 0;
  const take = ds => { if (until && ds > until) return false; if (cnt && n >= cnt) return false; n++; if (ds >= from && ds <= to) out.push(ds); return ds <= to; };
  if (f === `WEEKLY`){
    const days = (o.BYDAY ? o.BYDAY.split(`,`) : [BYD[sd.getDay()]]).map(d => BYD.indexOf(d.slice(-2))).filter(x => x >= 0);
    const wk = new Date(sd); wk.setDate(wk.getDate() - (wk.getDay() + 6) % 7);
    for (let w = 0; w < 600; w++){
      for (const wd of [1, 2, 3, 4, 5, 6, 0]){ if (!days.includes(wd)) continue; const d = new Date(wk); d.setDate(wk.getDate() + (wd + 6) % 7); const ds = dstr(d); if (ds < start) continue; if (!take(ds)) return out; }
      wk.setDate(wk.getDate() + 7 * iv);
    }
    return out;
  }
  for (let i = 0; i < 2000; i++){
    const d = f === `DAILY` ? new Date(sd.getFullYear(), sd.getMonth(), sd.getDate() + i * iv) : f === `MONTHLY` ? new Date(sd.getFullYear(), sd.getMonth() + i * iv, sd.getDate()) : f === `YEARLY` ? new Date(sd.getFullYear() + i * iv, sd.getMonth(), sd.getDate()) : null;
    if (!d) { take(start); break; }
    if (f !== `DAILY` && d.getDate() !== sd.getDate()) continue; // 31 en meses cortos: se salta, como Google
    if (!take(dstr(d))) break;
  }
  return out;
}
function rrText(rr, start){
  if (!rr) return `No se repite`; const o = parseRR(rr), iv = +(o.INTERVAL || 1);
  const U = { DAILY:[`día`,`días`], WEEKLY:[`semana`,`semanas`], MONTHLY:[`mes`,`meses`], YEARLY:[`año`,`años`] }[o.FREQ] || [`vez`,`veces`];
  let t = iv === 1 ? `Cada ${U[0]}` : `Cada ${iv} ${U[1]}`;
  if (o.FREQ === `WEEKLY`){ const ds = (o.BYDAY || BYD[pdate(start).getDay()]).split(`,`); const N = { MO:`lunes`, TU:`martes`, WE:`miércoles`, TH:`jueves`, FR:`viernes`, SA:`sábado`, SU:`domingo` }; t += ` el ${ds.map(d => N[d]).join(`, `)}`; }
  if (o.COUNT) t += ` · ${o.COUNT} veces`; else if (o.UNTIL) t += ` · hasta ${fmtDay(`${o.UNTIL.slice(0, 4)}-${o.UNTIL.slice(4, 6)}-${o.UNTIL.slice(6, 8)}`)}`;
  return t;
}

/* ---------- elementos de la agenda en un rango ---------- */
const evAllDay = e => e.allDay != null ? !!e.allDay : !e.time;
function evEnd(e){ // fin (fecha inclusiva y hora) de la primera ocurrencia
  const ad = evAllDay(e); if (ad) return { edate: e.edate && e.edate >= e.date ? e.edate : e.date, etime:`` };
  let ed = e.edate && e.edate >= e.date ? e.edate : e.date, et = e.etime;
  if (!et || (ed === e.date && tmin(et) <= tmin(e.time))){ const m = tmin(e.time) + 60; if (m >= 1440){ et = `23:59`; } else et = mtime(m); }
  return { edate: ed, etime: et };
}
function occOf(e, from, to){
  const { edate, etime } = evEnd(e), span = dayDiff(e.date, edate), ex = new Set(e.ex || []);
  const starts = e.rrule ? rrDates(e.date, e.rrule, addDays(from, -span), to) : (e.date <= to && edate >= from ? [e.date] : []);
  return starts.filter(d => !ex.has(d)).map(d => ({ kind:`ev`, src:e, id:e.id, key:`${e.id}@${d}`, title:e.title || `(Sin título)`, cat:e.type || `otro`, date:d, edate:addDays(d, span), time: evAllDay(e) ? `` : e.time, etime: evAllDay(e) ? `` : etime, allDay:evAllDay(e), loc:e.loc, rec:!!e.rrule }));
}
function gcItems(){ try { return (JSON.parse(localStorage.getItem(`quimica_gcal`) || `{}`).items) || []; } catch(e){ return []; } }
function appItems(from, to){
  const out = [], today = todayStr();
  planItems().forEach(p => { if (p.date >= from && p.date <= to) out.push({ kind:`app`, app:`plan`, src:p, key:`plan@${p.date}@${p.title}`, title:p.title, cat:`estudio`, date:p.date, edate:p.date, allDay:true }); });
  (S.x.agn || []).filter(n => n.kind === `task` && n.date && n.date >= from && n.date <= to).forEach(n => out.push({ kind:`app`, app:`task`, src:n, key:`t@${n.id}`, title:n.text.split(`\n`)[0], cat:`tarea`, date:n.date, edate:n.date, time:n.time || ``, etime: n.time ? mtime(tmin(n.time) + 30) : ``, allDay:!n.time, done:n.done }));
  if (today >= from && today <= to && typeof hoyCounts === `function`){ if (!HC.t || Date.now() - HC.t > 8000){ HC.v = hoyCounts(); HC.t = Date.now(); } const k = HC.v; if (k.total) out.push({ kind:`app`, app:`srs`, key:`srs@${today}`, title:`${k.total} repaso${k.total === 1 ? `` : `s`} pendiente${k.total === 1 ? `` : `s`}`, cat:`estudio`, date:today, edate:today, allDay:true }); }
  Object.entries(S.x.plog || {}).forEach(([d, v]) => { if (d >= from && d <= to && v && v.min) out.push({ kind:`app`, app:`pomo`, key:`p@${d}`, title:`🍅 ${v.min} min de estudio`, cat:`estudio`, date:d, edate:d, allDay:true, done:true }); });
  return out;
}
function agItems(from, to, opts = {}){
  const hid = new Set(opts.all ? [] : agcal().hidden), done = S.x.caldone || {};
  let out = [];
  (S.x.ev || []).forEach(e => out.push(...occOf(e, from, to)));
  const locals = new Set((S.x.ev || []).map(e => e.id)), gids = new Set((S.x.ev || []).map(e => e.gid).filter(Boolean));
  gcItems().forEach(g => {
    if (g.mf && locals.has(g.mf)) return; if (gids.has(g.id) || (g.recId && gids.has(g.recId))) return;
    const ed = g.edate || g.date; if (g.date > to || ed < from) return;
    out.push({ kind:`g`, src:g, id:g.id, key:`g@${g.id}`, title:g.title || `(Sin título)`, cat:g.cat || `google`, date:g.date, edate:ed, time:g.time || ``, etime:g.etime || ``, allDay:!!g.allDay, loc:g.loc, rec:!!g.recId });
  });
  if (!opts.noApp) out.push(...appItems(from, to));
  out = out.filter(x => !hid.has(x.cat) || x.kind === `app` && !hid.has(`app`));
  if (hid.has(`app`)) out = out.filter(x => x.kind !== `app`);
  out.forEach(x => { if (x.kind !== `app`) x.done = !!done[x.key]; });
  return out.sort((a, b) => (a.date + (a.allDay ? `0` : `1`) + (a.time || ``)).localeCompare(b.date + (b.allDay ? `0` : `1`) + (b.time || ``)));
}
/* el resto de la página (mini calendario, Próximos, Inicio) también ve las repeticiones y lo de Google */
function allItems(){
  const t = todayStr(), its = agItems(addDays(t, -31), addDays(t, 200), { all:true, noApp:true });
  return its.map(x => Object.assign({}, x.src && x.kind === `ev` ? x.src : {}, { id:x.id || x.key, title:x.title, type:x.cat, date:x.date, time:x.time, _it:x, rem: x.kind === `ev` ? x.src.rem : -1, topics: x.kind === `ev` ? x.src.topics : [] })).concat(planItems()).sort((a, b) => (a.date + (a.time || `99`)).localeCompare(b.date + (b.time || `99`)));
}

/* ---------- abrir un elemento ---------- */
function openItem(x){
  if (!x) return;
  if (x.kind === `app`){
    if (x.app === `plan`){ const p = x.src; if (p.topics && p.topics.length) S.sel = new Set(p.topics); go(p.sim ? `simulacro` : p.mode || `repaso`); }
    else if (x.app === `task`) openNota(x.src);
    else if (x.app === `srs`) go(`hoy`);
    return;
  }
  if (x.kind === `g`) return openEv(null, { g:x.src });
  openEv(x.src, { occ:x.date });
}
function openEvent(ev, date){ if (ev && ev._it) return openItem(ev._it); return openEv(ev, { date }); }

/* ---------- guardar / borrar ---------- */
function evSaved(e, isNew){
  e.upd = Date.now(); const i = S.x.ev.findIndex(x => x.id === e.id); if (i >= 0) S.x.ev[i] = e; else S.x.ev.push(e);
  save(); gcQueue({ op:`up`, id:e.id }); afterAg();
}
function evDelete(e){ S.x.ev = S.x.ev.filter(x => x.id !== e.id); save(); if (e.gid) gcQueue({ op:`del`, id:e.id, gid:e.gid }); afterAg(); }
function afterAg(){ if (typeof renderAgendaHosts === `function`) renderAgendaHosts(); if ([`agenda`,`inicio`].includes(S.mode)) renderView(); renderHead(); if (bp() === `wide`) renderPanel(); }
function toggleDone(x){ S.x.caldone = S.x.caldone || {}; if (S.x.caldone[x.key]) delete S.x.caldone[x.key]; else S.x.caldone[x.key] = 1; save(); afterAg(); }

/* ---------- editor de evento ---------- */
function openEv(ev, o = {}){
  const g = o.g, isNew = !ev && !g;
  let e;
  if (g) e = { id:`g:` + g.id, title:g.title, type:g.cat || `google`, date:g.date, edate:g.edate || g.date, time:g.time || ``, etime:g.etime || ``, allDay:!!g.allDay, rems: g.rems || [], loc:g.loc || ``, desc:g.desc || ``, rrule:g.rrule || ``, _g:true };
  else if (ev) e = JSON.parse(JSON.stringify(ev));
  else { const t = o.time || ``; e = { id:String(Date.now()), title:``, type:o.type || `clase`, date:o.date || todayStr(), edate:o.edate || o.date || todayStr(), time:t, etime:o.etime || (t ? mtime(tmin(t) + 60) : ``), allDay: o.allDay != null ? o.allDay : !t, topics:selList().length < TORDER.length ? selList() : [], rem:-1, rems:[30], loc:``, desc:``, rrule:``, plan:true }; }
  if (!e.rems) e.rems = e.rem >= 0 ? [e.rem * 1440] : [];
  if (e.allDay == null) e.allDay = !e.time;
  if (!e.edate) e.edate = e.date;
  if (!e.allDay && !e.etime) e.etime = evEnd(e).etime;
  const occKey = o.occ ? `${e.id}@${o.occ}` : g ? `g@${g.id}` : null;
  let rep = null; // estado del bloque "Personalizado"
  openSheet(isNew ? `Nuevo evento` : g ? `Evento de Google Calendar` : `Editar evento`, b => {
    const t = el(`input`, `inp`); t.placeholder = `Título (ej.: Laboratorio Q3)`; t.value = e.title; t.setAttribute(`aria-label`, `Título`); t.oninput = () => e.title = t.value; b.append(t);
    const cats = el(`div`, `pills agcats`);
    agcal().cats.filter(c => c.k !== `google` || e.type === `google`).forEach(c => { const x = btn(`<i style="background:${GPAL[c.c]}"></i>${esc(c.n)}`, ``, () => { e.type = c.k; drawSheet(); }); x.setAttribute(`aria-pressed`, e.type === c.k); cats.append(x); });
    b.append(cats);
    b.append(fld(`Todo el día`, toggleBtn(e.allDay, v => { e.allDay = v; if (!v && !e.time){ e.time = `08:00`; e.etime = `09:00`; } drawSheet(); })));
    const dIn = (val, f) => { const i = el(`input`, `inp sm`); i.type = `date`; i.value = val; i.onchange = () => f(i.value); return i; };
    const tIn = (val, f) => { const i = el(`input`, `inp sm`); i.type = `time`; i.step = 300; i.value = val; i.onchange = () => f(i.value); return i; };
    const row = (...k) => { const w = el(`span`, `agdt`); w.append(...k); return w; };
    b.append(fld(`Empieza`, row(dIn(e.date, v => { const sp = dayDiff(e.date, e.edate); e.date = v; e.edate = addDays(v, Math.max(0, sp)); drawSheet(); }), ...(e.allDay ? [] : [tIn(e.time, v => { const d = tmin(e.etime) - tmin(e.time); e.time = v; if (e.edate === e.date) e.etime = mtime(tmin(v) + Math.max(15, d)); drawSheet(); })]))));
    b.append(fld(`Termina`, row(dIn(e.edate, v => { e.edate = v < e.date ? e.date : v; drawSheet(); }), ...(e.allDay ? [] : [tIn(e.etime, v => { e.etime = v; })]))));
    // repetir
    const wd = BYD[pdate(e.date).getDay()], dn = DIAS[pdate(e.date).getDay()];
    const PRE = [[``, `No se repite`], [`FREQ=DAILY`, `Cada día`], [`FREQ=WEEKLY;BYDAY=${wd}`, `Cada semana el ${dn}`], [`FREQ=MONTHLY`, `Cada mes el día ${pdate(e.date).getDate()}`], [`FREQ=YEARLY`, `Cada año`], [`custom`, `Personalizado…`]];
    const rs = el(`select`, `inp sm`); rs.setAttribute(`aria-label`, `Repetir`);
    const cur = PRE.find(p => p[0] && p[0] === e.rrule) ? e.rrule : e.rrule ? `custom` : ``;
    PRE.forEach(([k, n]) => { const op = el(`option`, ``, esc(n)); op.value = k; if (k === cur) op.selected = true; rs.append(op); });
    if (cur === `custom` && !rep) rep = parseRR(e.rrule);
    rs.onchange = () => { if (rs.value === `custom`){ rep = Object.assign({ FREQ:`WEEKLY`, INTERVAL:`1`, BYDAY:wd }, parseRR(e.rrule)); e.rrule = buildRR(rep); } else { rep = null; e.rrule = rs.value; } drawSheet(); };
    b.append(fld(`Repetir`, rs, e.rrule ? rrText(e.rrule, e.date) : ``));
    if (rep){
      const box = el(`div`, `agrep`);
      const iv = el(`input`, `inp sm`); iv.type = `number`; iv.min = 1; iv.max = 30; iv.value = rep.INTERVAL || 1; iv.style.width = `64px`; iv.onchange = () => { rep.INTERVAL = String(Math.max(1, +iv.value || 1)); e.rrule = buildRR(rep); drawSheet(); };
      const fq = el(`select`, `inp sm`); [[`DAILY`,`días`],[`WEEKLY`,`semanas`],[`MONTHLY`,`meses`],[`YEARLY`,`años`]].forEach(([k, n]) => { const op = el(`option`, ``, n); op.value = k; if (rep.FREQ === k) op.selected = true; fq.append(op); }); fq.onchange = () => { rep.FREQ = fq.value; if (rep.FREQ !== `WEEKLY`) delete rep.BYDAY; else rep.BYDAY = rep.BYDAY || wd; e.rrule = buildRR(rep); drawSheet(); };
      const l1 = el(`div`, `agrow`); l1.append(el(`span`, ``, `Cada`), iv, fq); box.append(l1);
      if (rep.FREQ === `WEEKLY`){ const dd = el(`div`, `agdays`); const sel = new Set((rep.BYDAY || wd).split(`,`)); [`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`].forEach(d => { const x = btn(BYDN[d], ``, () => { sel.has(d) ? sel.delete(d) : sel.add(d); if (!sel.size) sel.add(wd); rep.BYDAY = [...sel].join(`,`); e.rrule = buildRR(rep); drawSheet(); }); x.setAttribute(`aria-pressed`, sel.has(d)); x.setAttribute(`aria-label`, d); dd.append(x); }); box.append(dd); }
      const fin = el(`div`, `agrow`); const fm = rep.COUNT ? `count` : rep.UNTIL ? `until` : `never`;
      const fs = el(`select`, `inp sm`); [[`never`,`Nunca termina`],[`until`,`Hasta una fecha`],[`count`,`Después de N veces`]].forEach(([k, n]) => { const op = el(`option`, ``, n); op.value = k; if (fm === k) op.selected = true; fs.append(op); });
      fs.onchange = () => { delete rep.COUNT; delete rep.UNTIL; if (fs.value === `count`) rep.COUNT = `10`; if (fs.value === `until`) rep.UNTIL = addDays(e.date, 90).replace(/-/g, ``); e.rrule = buildRR(rep); drawSheet(); };
      fin.append(el(`span`, ``, `Termina`), fs);
      if (fm === `count`){ const c = el(`input`, `inp sm`); c.type = `number`; c.min = 1; c.value = rep.COUNT; c.style.width = `70px`; c.onchange = () => { rep.COUNT = String(Math.max(1, +c.value || 1)); e.rrule = buildRR(rep); drawSheet(); }; fin.append(c, el(`span`, ``, `veces`)); }
      if (fm === `until`){ const u = el(`input`, `inp sm`); u.type = `date`; u.value = `${rep.UNTIL.slice(0, 4)}-${rep.UNTIL.slice(4, 6)}-${rep.UNTIL.slice(6, 8)}`; u.onchange = () => { rep.UNTIL = u.value.replace(/-/g, ``); e.rrule = buildRR(rep); drawSheet(); }; fin.append(u); }
      box.append(fin); b.append(box);
    }
    // recordatorios
    const rw = el(`div`, `agrems`);
    e.rems.slice().sort((a, b) => a - b).forEach(m => { const x = btn(`${remTxt(m)} <b aria-hidden="true">×</b>`, `chipx`, () => { e.rems = e.rems.filter(y => y !== m); drawSheet(); }); x.setAttribute(`aria-label`, `Quitar recordatorio ${remTxt(m)}`); rw.append(x); });
    const ad = el(`select`, `inp sm`); ad.setAttribute(`aria-label`, `Agregar recordatorio`); const o0 = el(`option`, ``, `+ Agregar`); o0.value = ``; ad.append(o0);
    REMS.filter(m => !e.rems.includes(m)).forEach(m => { const op = el(`option`, ``, remTxt(m)); op.value = m; ad.append(op); });
    ad.onchange = () => { if (ad.value !== ``){ e.rems.push(+ad.value); drawSheet(); } }; rw.append(ad);
    b.append(fld(`Recordatorios`, rw, S.x.agMail && gcOn() ? `Llegan al teléfono y por correo` : `Llegan como notificación al teléfono`));
    if (!e._g && [`parcial`,`estudio`,`tarea`,`lab`,`clase`].includes(e.type)){
      const tp = el(`div`, `pills`);
      TORDER.forEach(k => { const x = btn(k.slice(1), ``, () => { e.topics = (e.topics || []).includes(k) ? e.topics.filter(y => y !== k) : (e.topics || []).concat(k); drawSheet(); }); x.setAttribute(`aria-pressed`, (e.topics || []).includes(k)); x.title = TOPICS[k].name; tp.append(x); });
      b.append(fld(`Temas que incluye`, tp));
    }
    if (!e._g && e.type === `parcial`) b.append(fld(`Crear plan de repaso hasta esa fecha`, toggleBtn(e.plan !== false, v => { e.plan = v; }), `Reparte los temas en los días que faltan`));
    const lo = el(`input`, `inp`); lo.placeholder = `Ubicación`; lo.value = e.loc || ``; lo.oninput = () => e.loc = lo.value; lo.setAttribute(`aria-label`, `Ubicación`);
    const de = el(`textarea`, `inp`); de.placeholder = `Descripción`; de.rows = 2; de.value = e.desc || ``; de.oninput = () => e.desc = de.value; de.setAttribute(`aria-label`, `Descripción`);
    b.append(lo, de);
    const msg = el(`p`, `muted`);
    const r = el(`div`, `btnrow`); r.style.marginTop = `12px`;
    r.append(btn(isNew ? `Guardar evento` : `Guardar cambios`, `btn acc`, () => {
      e.title = t.value.trim(); if (!e.title){ msg.textContent = `Escribe un título.`; t.focus(); return; }
      if (!e.allDay && e.edate === e.date && tmin(e.etime) <= tmin(e.time)) e.etime = mtime(tmin(e.time) + 60);
      if (e.allDay){ e.time = ``; e.etime = ``; }
      e.rem = -1; // los avisos usan ahora "rems" (minutos)
      closeSheet();
      if (e._g) return gcEditGoogle(g, e);
      evSaved(e, isNew);
    }));
    if (occKey){ const dn = (S.x.caldone || {})[occKey]; r.append(btn(dn ? `Marcar como pendiente` : `Marcar como hecho`, `btn ghost`, () => { closeSheet(); toggleDone({ key:occKey }); })); }
    if (!isNew && !e._g && typeof cnNewFromEvent === `function`) r.append(btn(`📓 Apuntes en el Cuaderno`, `btn ghost`, () => { closeSheet(); cnNewFromEvent(e); }));
    if (!isNew && !e._g && e.type === `parcial`) r.append(btn(`Simulacro de este parcial`, `btn ghost`, () => { closeSheet(); simParcial(e, 20); }));
    if (!isNew) r.append(btn(`Eliminar`, `btn danger`, () => {
      if (!confirm(e.rrule ? `¿Eliminar este evento y todas sus repeticiones?` : `¿Eliminar este evento?`)) return;
      closeSheet(); if (e._g) gcDelGoogle(g); else evDelete(e);
    }));
    r.append(btn(`Cancelar`, `btn ghost`, closeSheet));
    b.append(r, msg);
    if (gcOn()) b.append(el(`p`, `muted agnote`, g ? `Los cambios se guardan en tu Google Calendar.` : `✓ Se guarda también en tu Google Calendar.`));
    if (isNew) setTimeout(() => { try { t.focus(); } catch(x){} }, 60);
  });
}
function buildRR(o){ return [`FREQ=${o.FREQ}`, +o.INTERVAL > 1 ? `INTERVAL=${o.INTERVAL}` : ``, o.FREQ === `WEEKLY` && o.BYDAY ? `BYDAY=${o.BYDAY}` : ``, o.COUNT ? `COUNT=${o.COUNT}` : ``, o.UNTIL ? `UNTIL=${o.UNTIL}` : ``].filter(Boolean).join(`;`); }

/* ---------- categorías ---------- */
function openCats(){
  openSheet(`Ajustes de la agenda`, b => {
    b.append(fld(`Recordatorios también por correo`, toggleBtn(!!S.x.agMail, v => { S.x.agMail = v; save(); (S.x.ev || []).filter(e => e.gid && (e.rems || []).length).forEach(e => gcQueue({ op:`up`, id:e.id }, true)); gcSync(); drawSheet(); }), gcOn() ? `Google Calendar te manda un correo con cada recordatorio de los eventos de la agenda` : `Funciona cuando conectes tu Google Calendar: Google manda el correo`));
    b.append(el(`h4`, `agh4`, `Categorías`));
    b.append(el(`p`, `muted`, `Toca el color para cambiarlo (son los colores de Google Calendar). El ojo muestra u oculta la categoría en el calendario.`));
    const a = agcal();
    a.cats.forEach(c => {
      const r = el(`div`, `agcatrow`);
      const sw = btn(``, `agsw`, () => { c.open = !c.open; drawSheet(); }); sw.style.background = GPAL[c.c]; sw.setAttribute(`aria-label`, `Color de ${c.n}: ${GPALN[c.c]}`);
      const nm = el(`input`, `inp sm`); nm.value = c.n; nm.setAttribute(`aria-label`, `Nombre`); nm.onchange = () => { c.n = nm.value.trim() || c.n; save(); syncETYPE(); };
      const hid = a.hidden.includes(c.k); const ey = btn(hid ? `Oculta` : `Visible`, `btn ghost`, () => { a.hidden = hid ? a.hidden.filter(x => x !== c.k) : a.hidden.concat(c.k); save(); drawSheet(); afterAg(); });
      r.append(sw, nm, ey); b.append(r);
      if (c.open){ const p = el(`div`, `agpal`); Object.keys(GPAL).forEach(k => { const x = btn(``, ``, () => { c.c = +k; delete c.open; save(); syncETYPE(); drawSheet(); afterAg(); gcRecolor(c.k); }); x.style.background = GPAL[k]; x.title = GPALN[k]; x.setAttribute(`aria-label`, GPALN[k]); x.setAttribute(`aria-pressed`, c.c === +k); p.append(x); }); b.append(p); }
    });
    const hid = a.hidden.includes(`app`); const r = el(`div`, `agcatrow`); r.append(el(`span`, `agsw dash`), el(`span`, `grow`, `De la app (plan de repaso, pendientes, repasos, Pomodoro)`), btn(hid ? `Oculta` : `Visible`, `btn ghost`, () => { a.hidden = hid ? a.hidden.filter(x => x !== `app`) : a.hidden.concat(`app`); save(); drawSheet(); afterAg(); })); b.append(r);
    const d = btn(`Listo`, `btn acc wide`, closeSheet); d.style.marginTop = `10px`; b.append(d);
  });
}

/* ======================= VISTA AGENDA ======================= */
function agState(){ S.x.agv = S.x.agv || { view: `week`, d: todayStr() }; if (!S.x.agv.d) S.x.agv.d = todayStr(); return S.x.agv; }
function agRange(){
  const st = agState(), v = st.view, d = st.d;
  if (v === `day`) return { from:d, to:d, n:1 };
  if (v === `week`){ if (bp() === `phone`) return { from:d, to:addDays(d, 2), n:3 }; const p = pdate(d), m = addDays(d, -((p.getDay() + 6) % 7)); return { from:m, to:addDays(m, 6), n:7 }; }
  if (v === `month`){ const p = pdate(d), f = new Date(p.getFullYear(), p.getMonth(), 1), off = (f.getDay() + 6) % 7, from = addDays(dstr(f), -off); return { from, to:addDays(from, 41), n:42, month:p.getMonth() }; }
  return { from:todayStr() > d ? d : d, to:addDays(d, 59), n:60 };
}
function agMove(dir){
  const st = agState(), r = agRange();
  if (st.view === `month`){ const p = pdate(st.d); st.d = dstr(new Date(p.getFullYear(), p.getMonth() + dir, 1)); }
  else if (st.view === `list`) st.d = addDays(st.d, dir * 30);
  else st.d = addDays(st.d, dir * r.n);
  save(); renderView();
}
function agTitle(){
  const st = agState(), r = agRange(), a = pdate(r.from), b = pdate(r.to), cap = s => s[0].toUpperCase() + s.slice(1);
  if (st.view === `month`){ const p = pdate(st.d); return `${cap(MESES[p.getMonth()])} ${p.getFullYear()}`; }
  if (st.view === `day`) return cap(fmtDay(st.d));
  if (a.getMonth() === b.getMonth()) return `${a.getDate()}–${b.getDate()} de ${MESES[a.getMonth()]} ${a.getFullYear()}`;
  return `${a.getDate()} ${MESES[a.getMonth()].slice(0, 3)} – ${b.getDate()} ${MESES[b.getMonth()].slice(0, 3)} ${b.getFullYear()}`;
}
function vAgenda(v){
  syncETYPE(); const st = agState();
  const bar = el(`div`, `agbar`);
  const nav = el(`div`, `agnav`);
  const hoy = btn(`Hoy`, `btn ghost`, () => { st.d = todayStr(); save(); renderView(); });
  const pv = btn(icon(`left`), `btn ghost icb`, () => agMove(-1)), nx = btn(icon(`right`), `btn ghost icb`, () => agMove(1)); pv.setAttribute(`aria-label`, `Anterior`); nx.setAttribute(`aria-label`, `Siguiente`);
  nav.append(hoy, pv, nx, el(`b`, `agtit`, agTitle())); bar.append(nav);
  const vw = el(`div`, `agviews`); vw.setAttribute(`role`, `tablist`);
  [[`day`,`Día`],[`week`,`Semana`],[`month`,`Mes`],[`list`,`Lista`]].forEach(([k, n]) => { const x = btn(n, ``, () => { st.view = k; save(); renderView(); }); x.setAttribute(`role`, `tab`); x.setAttribute(`aria-selected`, st.view === k); vw.append(x); });
  const tools = el(`div`, `agtools`); tools.append(vw, gcChip());
  const add = btn(icon(`plus`) + `<span class="lbl">Evento</span>`, `btn acc`, () => openEv(null, { date: st.view === `month` || st.view === `list` ? (st.d >= todayStr() ? st.d : todayStr()) : st.d })); add.setAttribute(`aria-label`, `Nuevo evento`);
  tools.append(add); bar.append(tools); v.append(bar);
  // filtro de categorías
  const cf = el(`div`, `agfilt`); const a = agcal();
  a.cats.filter(c => c.k !== `google` || gcOn() || gcItems().length).forEach(c => { const off = a.hidden.includes(c.k); const x = btn(`<i style="background:${GPAL[c.c]}"></i>${esc(c.n)}`, off ? `off` : ``, () => { a.hidden = off ? a.hidden.filter(y => y !== c.k) : a.hidden.concat(c.k); save(); renderView(); }); x.setAttribute(`aria-pressed`, !off); x.title = off ? `Mostrar ${c.n}` : `Ocultar ${c.n}`; cf.append(x); });
  const offA = a.hidden.includes(`app`); const xa = btn(`<i class="dash"></i>De la app`, offA ? `off` : ``, () => { a.hidden = offA ? a.hidden.filter(y => y !== `app`) : a.hidden.concat(`app`); save(); renderView(); }); xa.setAttribute(`aria-pressed`, !offA); cf.append(xa);
  const ed = btn(icon(`gear`), `agcfg`, openCats); ed.setAttribute(`aria-label`, `Ajustes de la agenda`); ed.title = `Ajustes de la agenda: categorías y correo`; cf.append(ed);
  v.append(cf);
  if (GC.err) v.append(el(`div`, `alert`, icon(`bell`) + `<span>${esc(GC.err)}</span>`));
  const r = agRange(), items = agItems(r.from, r.to);
  if (st.view === `month`) v.append(agMonth(r, items));
  else if (st.view === `list`) v.append(agList(r, items));
  else v.append(agGrid(r, items));
  if (gcOn() && gcReady() && Date.now() - GC.last > 60e3) gcSync();
}

/* ---------- Día / Semana ---------- */
function layoutCols(list){
  // reparte en columnas los que se traslapan (como Google Calendar)
  const ev = list.map(w => ({ x:w.x, s:w.s, e:Math.max(w.e, w.s + 20) })).sort((a, b) => a.s - b.s || b.e - a.e);
  let group = [], end = -1; const groups = [];
  ev.forEach(o => { if (o.s >= end && group.length){ groups.push(group); group = []; } group.push(o); end = Math.max(end, o.e); });
  if (group.length) groups.push(group);
  groups.forEach(g => { const cols = []; g.forEach(o => { let c = cols.findIndex(e => e <= o.s); if (c < 0){ c = cols.length; cols.push(0); } cols[c] = o.e; o.c = c; }); g.forEach(o => { o.n = cols.length; }); });
  return ev;
}
function agGrid(r, items){
  const st = agState(), days = []; for (let i = 0; i < r.n; i++) days.push(addDays(r.from, i));
  const today = todayStr(), w = el(`div`, `aggrid`); w.style.setProperty(`--n`, r.n);
  const hd = el(`div`, `agdh`); hd.append(el(`span`));
  days.forEach(d => { const p = pdate(d); const x = btn(`${DIAS[p.getDay()].slice(0, 3)}<b>${p.getDate()}</b>`, d === today ? `hoy` : ``, () => { st.view = `day`; st.d = d; save(); renderView(); }); x.setAttribute(`aria-label`, fmtDay(d)); hd.append(x); });
  w.append(hd);
  // fila "Todo el día" con barras que cruzan días
  const ad = items.filter(x => x.allDay || x.edate > x.date);
  const lanes = []; const bars = [];
  ad.forEach(x => { const a = Math.max(0, dayDiff(r.from, x.date)), b = Math.min(r.n - 1, dayDiff(r.from, x.edate)); if (b < 0 || a > r.n - 1) return; let l = lanes.findIndex(z => z < a); if (l < 0){ l = lanes.length; lanes.push(-1); } lanes[l] = b; bars.push({ x, a, b, l }); });
  const MAXL = bp() === `phone` ? 2 : 3, adr = el(`div`, `agad`); adr.style.height = `${Math.max(1, Math.min(MAXL, lanes.length)) * 20 + 6 + (lanes.length > MAXL ? 16 : 0)}px`;
  adr.append(el(`span`, `l`, `Todo el día`));
  bars.forEach(o => { if (o.l >= MAXL) return; const b = itemEl(o.x, `bars`); b.style.cssText += `;left:calc(var(--gut) + (100% - var(--gut)) * ${o.a} / var(--n) + 2px);width:calc((100% - var(--gut)) * ${o.b - o.a + 1} / var(--n) - 4px);top:${3 + o.l * 20}px`; adr.append(b); });
  if (lanes.length > MAXL) days.forEach((d, i) => { const hidden = bars.filter(o => o.l >= MAXL && o.a <= i && o.b >= i).length; if (hidden){ const m = btn(`+${hidden}`, `agmore`, () => dayPop(d)); m.style.cssText = `left:calc(var(--gut) + (100% - var(--gut)) * ${i} / var(--n) + 2px);top:${3 + MAXL * 20}px`; adr.append(m); } });
  w.append(adr);
  // cuadrícula por horas
  const sc = el(`div`, `agsc`); const body = el(`div`, `agbody`); body.style.height = `${24 * HPX}px`;
  const hrs = el(`div`, `aghrs`); for (let h = 1; h < 24; h++){ const s = el(`span`, ``, `${h % 12 || 12} ${h < 12 ? `am` : `pm`}`); s.style.top = `${h * HPX}px`; hrs.append(s); } body.append(hrs);
  days.forEach((d, i) => {
    const col = el(`div`, `agcol` + (d === today ? ` hoy` : ``)); col.dataset.i = i; col.dataset.d = d;
    const timed = items.filter(x => !x.allDay && x.edate === x.date && x.date === d).map(x => ({ x, s:tmin(x.time), e:tmin(x.etime) || tmin(x.time) + 60 }));
    // eventos con hora que cruzan medianoche: se ven en cada día
    items.filter(x => !x.allDay && x.edate > x.date && x.date <= d && x.edate >= d).forEach(x => timed.push({ x, s: x.date === d ? tmin(x.time) : 0, e: x.edate === d ? tmin(x.etime) : 1440 }));
    layoutCols(timed).forEach(o => { const b = itemEl(o.x, `blk`); b.style.top = `${o.s / 60 * HPX}px`; b.style.height = `${Math.max(18, (o.e - o.s) / 60 * HPX - 2)}px`; b.style.left = `calc(${o.c} * 100% / ${o.n} + 1px)`; b.style.width = `calc(100% / ${o.n} - 3px)`; if (o.e - o.s < 40) b.classList.add(`short`); col.append(b); });
    if (d === today){ const nl = el(`div`, `agnow`); nl.style.top = `${nowMin() / 60 * HPX}px`; col.append(nl); }
    body.append(col);
  });
  sc.append(body); w.append(sc);
  agDrag(body, days);
  requestAnimationFrame(() => { sc.scrollTop = Math.max(0, (days.includes(today) ? nowMin() / 60 - 1.5 : 7) * HPX); });
  return w;
}
function itemEl(x, kind){
  const c = catColor(x.cat), b = el(`div`, `agit ${kind}` + (x.kind === `app` ? ` aa` : ``) + (x.done ? ` done` : ``) + (x.kind === `g` ? ` gg` : ``));
  b.style.setProperty(`--c`, c); b.tabIndex = 0; b.setAttribute(`role`, `button`);
  const tm = x.allDay ? `` : `${fmtTime(x.time)}${x.etime ? `–${fmtTime(x.etime)}` : ``}`;
  b.setAttribute(`aria-label`, `${x.title}${tm ? `, ${tm}` : ``}${x.kind === `app` ? `, de la app` : ``}${x.done ? `, hecho` : ``}`);
  b.innerHTML = kind === `blk` ? `<b>${esc(x.title)}</b><span>${tm}${x.loc ? ` · ${esc(x.loc)}` : ``}</span>${x.kind !== `app` && !x.rec ? `<i class="rs" data-rs="1"></i>` : ``}` : kind === `pill` && !x.allDay && x.edate === x.date ? `<u></u>${x.time ? `<small>${fmtTime(x.time).replace(` `, ``)}</small> ` : ``}${esc(x.title)}` : `${esc(x.title)}`;
  if (kind === `pill` && (x.allDay || x.edate > x.date)) b.classList.add(`agfill`);
  b._it = x;
  b.onclick = ev => { if (b._dragged){ b._dragged = false; return; } ev.stopPropagation(); openItem(x); };
  b.onkeydown = ev => { if (ev.key === `Enter` || ev.key === ` `){ ev.preventDefault(); openItem(x); } };
  return b;
}
/* arrastrar: crear sobre horas vacías, mover un evento o cambiar su duración.
   En pantallas táctiles hay que mantener presionado un momento (así el dedo sigue sirviendo para desplazarse). */
function agDrag(body, days){
  let D = null;
  const snap = m => Math.round(m / 15) * 15;
  const pos = ev => { const r = body.getBoundingClientRect(), cols = body.querySelectorAll(`.agcol`), c0 = cols[0].getBoundingClientRect(); const cw = c0.width; const i = Math.max(0, Math.min(days.length - 1, Math.floor((ev.clientX - c0.left) / cw))); return { i, m: Math.max(0, Math.min(1440, (ev.clientY - r.top) / HPX * 60)) }; };
  const start = (ev, kind, node) => {
    const p = pos(ev); D = { kind, node, p0:p, ev0:ev, id:ev.pointerId, touch: ev.pointerType === `touch`, on:false, moved:false };
    D.cw = body.querySelector(`.agcol`).getBoundingClientRect().width;
    if (node){ const it = node._it; D.it = it; D.s = tmin(it.time); D.e = tmin(it.etime) || D.s + 60; }
    if (D.touch) D.timer = setTimeout(() => { if (D && !D.moved){ D.on = true; try { body.setPointerCapture(D.id); } catch(e){} if (navigator.vibrate) navigator.vibrate(15); begin(); } }, 380);
  };
  const begin = () => {
    if (D.kind === `new`){ D.ghost = el(`div`, `agit blk ghost`); D.ghost.style.setProperty(`--c`, catColor(`clase`)); body.querySelectorAll(`.agcol`)[D.p0.i].append(D.ghost); }
    else D.node.classList.add(`drag`);
  };
  const move = ev => {
    if (!D || ev.pointerId !== D.id) return;
    const dx = ev.clientX - D.ev0.clientX, dy = ev.clientY - D.ev0.clientY;
    if (!D.on){ if (Math.hypot(dx, dy) > 6){ if (D.touch){ clearTimeout(D.timer); D = null; return; } D.on = true; try { body.setPointerCapture(D.id); } catch(e){} begin(); } else return; }
    D.moved = true; const p = pos(ev);
    if (D.kind === `new`){ const a = snap(Math.min(D.p0.m, p.m)), b = Math.max(a + 15, snap(Math.max(D.p0.m, p.m))); D.a = a; D.b = b; D.ghost.style.top = `${a / 60 * HPX}px`; D.ghost.style.height = `${(b - a) / 60 * HPX - 2}px`; D.ghost.innerHTML = `<b>Nuevo evento</b><span>${fmtTime(mtime(a))}–${fmtTime(mtime(b))}</span>`; }
    else if (D.kind === `move`){ const dm = snap(p.m - D.p0.m), di = p.i - D.p0.i; D.dm = dm; D.di = di; const ns = Math.max(0, Math.min(1440 - 15, D.s + dm)); D.node.style.top = `${ns / 60 * HPX}px`; D.node.style.transform = `translateX(${di * D.cw}px)`; D.node.querySelector(`span`).textContent = `${fmtTime(mtime(ns))}–${fmtTime(mtime(ns + D.e - D.s))}`; }
    else if (D.kind === `rs`){ const ne = Math.max(D.s + 15, Math.min(1440, snap(p.m))); D.ne = ne; D.node.style.height = `${(ne - D.s) / 60 * HPX - 2}px`; D.node.querySelector(`span`).textContent = `${fmtTime(mtime(D.s))}–${fmtTime(mtime(ne))}`; }
    ev.preventDefault();
  };
  const end = ev => {
    if (!D || (ev && ev.pointerId !== D.id)) return; clearTimeout(D.timer); const d = D; D = null;
    if (!d.on || !d.moved){ if (d.ghost) d.ghost.remove(); if (d.node) d.node.classList.remove(`drag`); if (!d.on && d.kind === `new` && ev && ev.type === `pointerup` && !d.touch){ const m = Math.floor(d.p0.m / 60) * 60; openEv(null, { date:days[d.p0.i], time:mtime(Math.max(0, m)), etime:mtime(Math.max(0, m) + 60), allDay:false }); } else if (d.on && d.kind === `new` && d.touch){ const m = Math.floor(d.p0.m / 60) * 60; openEv(null, { date:days[d.p0.i], time:mtime(Math.max(0, m)), etime:mtime(Math.max(0, m) + 60), allDay:false }); } return; }
    if (d.node) d.node._dragged = true;
    if (d.kind === `new`){ d.ghost.remove(); openEv(null, { date:days[d.p0.i], time:mtime(d.a), etime:mtime(d.b), allDay:false }); return; }
    const it = d.it;
    if (d.kind === `move`){ const ns = Math.max(0, Math.min(1440 - 15, d.s + (d.dm || 0))), date = addDays(it.date, d.di || 0), dur = d.e - d.s; applyTimes(it, date, mtime(ns), mtime(Math.min(1439, ns + dur))); }
    if (d.kind === `rs`) applyTimes(it, it.date, it.time, mtime(Math.min(1439, d.ne)));
  };
  body.addEventListener(`pointerdown`, ev => {
    if (ev.button > 0) return; const n = ev.target.closest(`.agit`);
    if (n){ const it = n._it; if (!it || it.kind === `app` || it.rec || it.allDay) return; start(ev, ev.target.dataset.rs ? `rs` : `move`, n); return; }
    if (ev.target.closest(`.agcol`)) start(ev, `new`, null);
  });
  body.addEventListener(`pointermove`, move);
  body.addEventListener(`pointerup`, end); body.addEventListener(`pointercancel`, () => { if (D){ clearTimeout(D.timer); if (D.ghost) D.ghost.remove(); if (D.node){ D.node.classList.remove(`drag`); D.node.style.transform = ``; } D = null; } });
  body.addEventListener(`touchmove`, ev => { if (D && D.on) ev.preventDefault(); }, { passive:false });
  body.addEventListener(`contextmenu`, ev => { if (D) ev.preventDefault(); });
}
function applyTimes(it, date, t1, t2){
  if (it.kind === `g`){ const g = it.src; gcEditGoogle(g, { title:g.title, type:g.cat, date, edate:date, time:t1, etime:t2, allDay:false, loc:g.loc, desc:g.desc, rems:g.rems }); return; }
  const e = it.src; e.date = date; e.edate = date; e.time = t1; e.etime = t2; e.allDay = false; evSaved(e);
}
function dayPop(d){
  openSheet(fmtDay(d)[0].toUpperCase() + fmtDay(d).slice(1), b => {
    const its = agItems(d, d); if (!its.length) b.append(el(`p`, `muted`, `Nada en este día.`));
    its.forEach(x => b.append(rowItem(x, d)));
    const r = el(`div`, `btnrow`); r.style.marginTop = `10px`; r.append(btn(`+ Evento este día`, `btn acc`, () => { closeSheet(); openEv(null, { date:d }); }), btn(`Ver el día`, `btn ghost`, () => { closeSheet(); const st = agState(); st.view = `day`; st.d = d; save(); if (S.mode !== `agenda`) go(`agenda`); else renderView(); }));
    b.append(r);
  });
}
function rowItem(x, d){
  const r = btn(``, `agrowit` + (x.kind === `app` ? ` aa` : ``) + (x.done ? ` done` : ``), () => { if (SH) closeSheet(); openItem(x); });
  r.style.setProperty(`--c`, catColor(x.cat));
  const tm = x.allDay ? (x.edate > x.date ? `${pdate(x.date).getDate()}–${pdate(x.edate).getDate()} ${MESES[pdate(x.edate).getMonth()].slice(0, 3)}` : `Todo el día`) : `${fmtTime(x.time)}${x.etime ? `–${fmtTime(x.etime)}` : ``}`;
  r.innerHTML = `<i></i><span class="tm">${tm}</span><span class="tx">${esc(x.title)}<small>${[x.kind === `app` ? `De la app` : x.kind === `g` ? `Google Calendar` : catOf(x.cat).n, x.loc ? esc(x.loc) : ``, x.rec ? `se repite` : ``].filter(Boolean).join(` · `)}</small></span>`;
  return r;
}
/* ---------- Mes ---------- */
function agMonth(r, items){
  const st = agState(), today = todayStr(), w = el(`div`, `agmonth`);
  const hd = el(`div`, `agmwd`); [`L`,`M`,`M`,`J`,`V`,`S`,`D`].forEach(x => hd.append(el(`span`, ``, x))); w.append(hd);
  const MAXL = bp() === `phone` ? 3 : 4;
  for (let wk = 0; wk < 6; wk++){
    const w0 = addDays(r.from, wk * 7), w6 = addDays(w0, 6);
    if (wk === 5 && pdate(w0).getMonth() !== r.month) break;
    const row = el(`div`, `agmrow`);
    for (let i = 0; i < 7; i++){ const d = addDays(w0, i), p = pdate(d); const c = el(`div`, `agmd` + (p.getMonth() !== r.month ? ` o` : ``) + (d === today ? ` hoy` : ``)); const n = btn(String(p.getDate()), `n`, () => { st.view = `day`; st.d = d; save(); renderView(); }); n.setAttribute(`aria-label`, fmtDay(d)); c.append(n); c.onclick = ev => { if (ev.target === c) openEv(null, { date:d }); }; row.append(c); }
    const wi = items.filter(x => x.date <= w6 && x.edate >= w0).sort((a, b) => (b.edate > b.date || b.allDay) - (a.edate > a.date || a.allDay) || a.date.localeCompare(b.date) || dayDiff(b.date, b.edate) - dayDiff(a.date, a.edate) || (a.time || ``).localeCompare(b.time || ``));
    const lanes = [[], [], [], [], [], [], []], hidden = [0, 0, 0, 0, 0, 0, 0];
    wi.forEach(x => {
      const a = Math.max(0, dayDiff(w0, x.date)), b = Math.min(6, dayDiff(w0, x.edate));
      let l = 0; while (true){ let free = true; for (let i = a; i <= b; i++) if (lanes[i][l]){ free = false; break; } if (free) break; l++; }
      if (l >= MAXL){ for (let i = a; i <= b; i++) hidden[i]++; return; }
      for (let i = a; i <= b; i++) lanes[i][l] = 1;
      const p = itemEl(x, `pill`); p.style.cssText += `;left:calc(100% * ${a} / 7 + 2px);width:calc(100% * ${b - a + 1} / 7 - 4px);top:${22 + l * 18}px`; row.append(p);
    });
    hidden.forEach((h, i) => { if (h){ const m = btn(`+${h} más`, `agmore`, () => dayPop(addDays(w0, i))); m.style.cssText = `left:calc(100% * ${i} / 7 + 2px);top:${22 + MAXL * 18}px`; row.append(m); } });
    w.append(row);
  }
  return w;
}
/* ---------- Lista ---------- */
function agList(r, items){
  const w = el(`div`, `aglist`), today = todayStr(); const by = {};
  items.forEach(x => { const d = x.date < r.from ? r.from : x.date; (by[d] = by[d] || []).push(x); });
  const ds = Object.keys(by).sort();
  if (!ds.length) w.append(el(`p`, `muted`, `No hay nada en los próximos 60 días.`));
  ds.forEach(d => { const p = pdate(d); const h = el(`div`, `aglh` + (d === today ? ` hoy` : ``), `<b>${p.getDate()}</b><span>${DIAS[p.getDay()]}<small>${MESES[p.getMonth()]}${d === today ? ` · hoy` : dayDiff(today, d) === 1 ? ` · mañana` : ``}</small></span>`); w.append(h); by[d].forEach(x => w.append(rowItem(x, d))); });
  return w;
}

/* ======================= GOOGLE CALENDAR ======================= */
const GC = { tok:null, exp:0, busy:false, err:``, last:0, timer:null };
const GSCOPE = `https://www.googleapis.com/auth/calendar.events`;
function gcOn(){ return !!S.x.gcalOn; }
function gcReady(){ if (!GC.tok){ try { const t = JSON.parse(sessionStorage.getItem(`quimica_gtok`) || `null`); if (t && t.exp > Date.now() + 60e3){ GC.tok = t.tok; GC.exp = t.exp; } } catch(e){} } return !!GC.tok && GC.exp > Date.now() + 30e3; }
function gcChip(){
  const b = btn(``, `btn ghost gcchip`, () => gcReady() ? gcSync(true) : gcConnect());
  if (!syncAvailable()){ b.innerHTML = `Google Calendar`; b.onclick = () => openSheet(`Google Calendar`, x => x.append(el(`p`, ``, `Para conectar tu Google Calendar primero abre la página desde su dirección en internet e inicia sesión con Google en “Guardar en la nube”.`))); return b; }
  if (!gcOn()){ b.innerHTML = `🔗 <span class="lbl">Conectar </span>Google`; b.title = `Conectar con tu Google Calendar`; return b; }
  b.innerHTML = GC.busy ? `🔄 <span class="lbl">Sincronizando…</span>` : gcReady() ? `🔄 <span class="lbl">Google </span>✓` : `🔄 <span class="lbl">Google: </span>actualizar`;
  b.title = gcReady() ? `Sincronizado con Google Calendar${GC.last ? ` · ${new Date(GC.last).toLocaleTimeString()}` : ``}. Toca para actualizar ahora.` : `Toca para volver a conectar con Google Calendar`;
  if (!gcReady()) b.classList.add(`warn`);
  return b;
}
function gcPaint(){ document.querySelectorAll(`.gcchip`).forEach(c => c.replaceWith(gcChip())); }
async function gcConnect(){
  if (!syncAvailable()) return;
  GC.err = ``;
  try {
    if (!window.firebase || !firebase.apps.length){ await syncInit(); }
    const p = new firebase.auth.GoogleAuthProvider(); p.addScope(GSCOPE);
    const u = firebase.auth().currentUser; if (u && u.email) p.setCustomParameters({ login_hint:u.email });
    const r = u ? await u.reauthenticateWithPopup(p) : await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => firebase.auth().signInWithPopup(p));
    const tok = r && r.credential && r.credential.accessToken; if (!tok) throw new Error(`Google no entregó el permiso del calendario.`);
    GC.tok = tok; GC.exp = Date.now() + 55 * 60e3; try { sessionStorage.setItem(`quimica_gtok`, JSON.stringify({ tok, exp:GC.exp })); } catch(e){}
    if (!S.x.gcalOn){ S.x.gcalOn = true; (S.x.ev || []).forEach(e => { if (!e.gid && e.date >= addDays(todayStr(), -30)) gcQueue({ op:`up`, id:e.id }, true); }); save(); }
    await gcSync(true);
  } catch(e){
    const c = e && e.code || ``;
    GC.err = c.includes(`popup-closed`) || c.includes(`cancelled`) ? `` : c.includes(`user-mismatch`) ? `Elige la misma cuenta de Google con la que guardas tu progreso.` : c.includes(`popup-blocked`) ? `El navegador bloqueó la ventana de Google. Permite ventanas emergentes e inténtalo de nuevo.` : `No se pudo conectar con Google Calendar (${c || e.message}).`;
    gcPaint(); if (S.mode === `agenda`) renderView();
  }
}
function gcDisconnect(){ S.x.gcalOn = false; GC.tok = null; try { sessionStorage.removeItem(`quimica_gtok`); localStorage.removeItem(`quimica_gcal`); } catch(e){} save(); afterAg(); }
async function gapi(method, path, body, qs){
  const u = `https://www.googleapis.com/calendar/v3/calendars/primary/${path}${qs ? `?` + new URLSearchParams(qs) : ``}`;
  const r = await fetch(u, { method, headers:{ Authorization:`Bearer ${GC.tok}`, 'Content-Type':`application/json` }, body: body ? JSON.stringify(body) : undefined });
  if (r.status === 401){ GC.tok = null; try { sessionStorage.removeItem(`quimica_gtok`); } catch(e){} const er = new Error(`auth`); er.auth = true; throw er; }
  if (r.status === 204 || r.status === 410) return null;
  const j = await r.json().catch(() => ({}));
  if (!r.ok){ const er = new Error((j.error && j.error.message) || `Error ${r.status}`); er.status = r.status; throw er; }
  return j;
}
function gcQueue(op, quiet){
  if (!gcOn()) return; S.x.gq = (S.x.gq || []).filter(x => x.id !== op.id); S.x.gq.push(op); save();
  if (!quiet){ clearTimeout(GC.timer); GC.timer = setTimeout(() => gcSync(), 1200); }
}
function toG(e){
  const tz = tzName(), { edate, etime } = evEnd(e), ad = evAllDay(e);
  return { summary:e.title, location:e.loc || ``, description:e.desc || ``, colorId:String(catOf(e.type).c),
    start: ad ? { date:e.date } : { dateTime:`${e.date}T${e.time}:00`, timeZone:tz },
    end: ad ? { date:addDays(edate, 1) } : { dateTime:`${edate}T${etime}:00`, timeZone:tz },
    recurrence: e.rrule ? [`RRULE:` + e.rrule] : [],
    reminders:gRems(e.rems),
    extendedProperties:{ private:{ mf:e.id, qtype:e.type || `otro` } } };
}
function fromG(g){
  const ad = !!(g.start && g.start.date), s = ad ? g.start.date : (g.start && g.start.dateTime || ``), en = ad ? (g.end && g.end.date) : (g.end && g.end.dateTime || ``);
  const loc = dt => { const d = new Date(dt); return { d:dstr(d), t:`${pad2(d.getHours())}:${pad2(d.getMinutes())}` }; };
  let date, edate, time = ``, etime = ``;
  if (ad){ date = s; edate = addDays(en || s, -1); if (edate < date) edate = date; }
  else { const a = loc(s), b = loc(en || s); date = a.d; time = a.t; edate = b.d; etime = b.t; if (etime === `00:00` && edate > date){ edate = addDays(edate, -1); etime = `23:59`; } }
  const cats = agcal().cats, pv = (g.extendedProperties && g.extendedProperties.private) || {};
  const cat = pv.qtype && cats.some(c => c.k === pv.qtype) ? pv.qtype : g.colorId ? ((cats.find(c => c.c === +g.colorId && c.k !== `google`) || {}).k || `google`) : `google`;
  return { id:g.id, recId:g.recurringEventId || null, mf:pv.mf || null, title:g.summary || ``, date, edate, time, etime, allDay:ad, cat, loc:g.location || ``, desc:g.description || ``,
    rems: g.reminders && g.reminders.overrides ? [...new Set(g.reminders.overrides.map(o => o.minutes))] : [], rrule:(g.recurrence || []).map(x => x.replace(/^RRULE:/, ``)).find(x => /FREQ=/.test(x)) || ``, updated:g.updated, link:g.htmlLink };
}
async function gcFlush(){
  const q = (S.x.gq || []).slice();
  for (const op of q){
    try {
      if (op.op === `up`){
        const e = (S.x.ev || []).find(x => x.id === op.id); if (e){
          let gid = e.gid;
          if (!gid){ const f = await gapi(`GET`, `events`, null, { privateExtendedProperty:`mf=${e.id}`, maxResults:5 }); const hit = f && f.items && f.items.find(x => x.status !== `cancelled`); if (hit) gid = hit.id; }
          let res;
          if (gid){ try { res = await gapi(`PUT`, `events/${encodeURIComponent(gid)}`, toG(e)); } catch(er){ if (er.status === 404 || er.status === 410) res = await gapi(`POST`, `events`, toG(e)); else throw er; } }
          else res = await gapi(`POST`, `events`, toG(e));
          if (res){ e.gid = res.id; e.gupd = res.updated; }
        }
      } else if (op.op === `del`){ if (op.gid) try { await gapi(`DELETE`, `events/${encodeURIComponent(op.gid)}`); } catch(er){ if (er.status !== 404 && er.status !== 410) throw er; } }
      else if (op.op === `gpatch`) await gapi(`PATCH`, `events/${encodeURIComponent(op.gid)}`, op.body);
      else if (op.op === `gdel`) try { await gapi(`DELETE`, `events/${encodeURIComponent(op.gid)}`); } catch(er){ if (er.status !== 404 && er.status !== 410) throw er; }
      S.x.gq = (S.x.gq || []).filter(x => x !== op); save();
    } catch(er){ if (er.auth) throw er; GC.err = `No se pudo guardar “${op.id}” en Google: ${er.message}`; }
  }
}
async function gcPull(){
  const from = new Date(); from.setDate(from.getDate() - 30); const to = new Date(); to.setDate(to.getDate() + 180);
  let items = [], page = null, n = 0;
  do { const j = await gapi(`GET`, `events`, null, Object.assign({ timeMin:from.toISOString(), timeMax:to.toISOString(), singleEvents:`true`, orderBy:`startTime`, maxResults:`2500` }, page ? { pageToken:page } : {})); items = items.concat((j && j.items) || []); page = j && j.nextPageToken; n++; } while (page && n < 5);
  const all = items.filter(g => g.status !== `cancelled`).map(fromG);
  // los eventos creados por la página: si se cambiaron en Google, se actualizan aquí
  const pend = new Set((S.x.gq || []).map(x => x.id)); const seen = new Set();
  all.forEach(g => {
    if (!g.mf) return; const e = (S.x.ev || []).find(x => x.id === g.mf); if (!e) return; seen.add(e.id);
    if (g.recId){ e.gid = g.recId; return; } e.gid = g.id;
    if (pend.has(e.id)) return;
    if (g.updated && (!e.gupd || Date.parse(g.updated) > Date.parse(e.gupd) + 2000)){
      Object.assign(e, { title:g.title, date:g.date, edate:g.edate, time:g.time, etime:g.etime, allDay:g.allDay, loc:g.loc, desc:g.desc, rems:g.rems, rrule: e.rrule && !g.rrule ? e.rrule : g.rrule || e.rrule });
      if (g.cat !== `google`) e.type = g.cat; e.gupd = g.updated;
    }
  });
  // borrados en Google (solo los que no se repiten y caen dentro del rango revisado)
  const f0 = dstr(from), t0 = dstr(to);
  S.x.ev = (S.x.ev || []).filter(e => !(e.gid && !e.rrule && !pend.has(e.id) && !seen.has(e.id) && e.date >= f0 && e.date <= t0));
  try { localStorage.setItem(`quimica_gcal`, JSON.stringify({ t:Date.now(), items: all.filter(g => !g.mf || !(S.x.ev || []).some(e => e.id === g.mf)) })); } catch(e){}
  save();
}
async function gcSync(force){
  if (!gcOn() || GC.busy) return; if (!gcReady()){ gcPaint(); return; }
  GC.busy = true; gcPaint();
  GC.err = ``;
  try { await gcFlush(); await gcPull(); GC.last = Date.now(); }
  catch(e){ if (!e.auth) GC.err = `No se pudo sincronizar con Google Calendar: ${e.message}`; }
  GC.busy = false; gcPaint();
  if (S.mode === `agenda` && !SH) renderView(); if (S.mode === `inicio`) renderView(); renderHead();
}
function gcEditGoogle(g, e){
  const tz = tzName(), body = { summary:e.title, location:e.loc || ``, description:e.desc || ``,
    start: e.allDay ? { date:e.date } : { dateTime:`${e.date}T${e.time}:00`, timeZone:tz }, end: e.allDay ? { date:addDays(e.edate || e.date, 1) } : { dateTime:`${e.edate || e.date}T${e.etime}:00`, timeZone:tz },
    reminders:gRems(e.rems) };
  if (e.type && e.type !== `google`) body.colorId = String(catOf(e.type).c);
  // se ve al instante; luego se confirma con Google
  try { const c = JSON.parse(localStorage.getItem(`quimica_gcal`) || `{}`); const it = (c.items || []).find(x => x.id === g.id); if (it) Object.assign(it, { title:e.title, date:e.date, edate:e.edate || e.date, time:e.allDay ? `` : e.time, etime:e.allDay ? `` : e.etime, allDay:e.allDay, loc:e.loc, desc:e.desc, rems:e.rems, cat:e.type }); localStorage.setItem(`quimica_gcal`, JSON.stringify(c)); } catch(x){}
  gcQueue({ op:`gpatch`, id:`g:` + g.id, gid:g.id, body }); afterAg();
}
function gcDelGoogle(g){
  try { const c = JSON.parse(localStorage.getItem(`quimica_gcal`) || `{}`); c.items = (c.items || []).filter(x => x.id !== g.id); localStorage.setItem(`quimica_gcal`, JSON.stringify(c)); } catch(x){}
  gcQueue({ op:`gdel`, id:`g:` + g.id, gid:g.id }); afterAg();
}
function gcRecolor(k){ (S.x.ev || []).filter(e => e.type === k && e.gid).forEach(e => gcQueue({ op:`up`, id:e.id }, true)); gcSync(); }
setInterval(() => { if (document.visibilityState === `visible` && gcOn() && gcReady() && Date.now() - GC.last > 90e3) gcSync(); }, 30e3);
