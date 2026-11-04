// Envía las notificaciones de la página de estudio (se ejecuta cada 15 min en GitHub Actions).
// Necesita el secreto FIREBASE_SA (clave de cuenta de servicio de Firebase en formato JSON).
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://diego291.github.io/quimica-gaby/';
const here = path.dirname(fileURLToPath(import.meta.url));

/* frases: se leen del mismo archivo que usa la página */
function loadFrases(){
  const ctx = {};
  try { vm.runInNewContext(fs.readFileSync(path.join(here, '../../fuente/frases.js'), 'utf8') + ';this.F=FRASES;this.B=BIBLIA;this.C=CITAS;', ctx); } catch (e) { return { F:['Hoy es un buen día para avanzar. ¡Tú puedes!'], B:[], C:[] }; }
  return { F:ctx.F, B:ctx.B, C:ctx.C };
}
const FR = loadFrases();

/* fecha y hora local de la estudiante */
export function localNow(tz, d = new Date()){
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: tz || 'America/El_Salvador', year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', hourCycle:'h23' }).formatToParts(d).map(x => [x.type, x.value]));
  return { day:`${p.year}-${p.month}-${p.day}`, min: (+p.hour) * 60 + (+p.minute) };
}
const dayDiff = (a, b) => Math.round((Date.parse(b + 'T00:00:00Z') - Date.parse(a + 'T00:00:00Z')) / 864e5);
const fmtTime = t => { if (!t) return ''; let [h, m] = t.split(':').map(Number); const ap = h >= 12 ? 'p. m.' : 'a. m.'; h = h % 12 || 12; return `${h}:${String(m).padStart(2, '0')} ${ap}`; };
const GRACE = 120; // minutos de tolerancia por si GitHub se retrasa
const addD = (s, n) => { const d = new Date(Date.parse(s + 'T00:00:00Z') + n * 864e5); return d.toISOString().slice(0, 10); };
const tmin = t => { if (!t) return 0; const [h, m] = t.split(':').map(Number); return h * 60 + m; };
/* repeticiones (mismo formato RRULE que la página): fechas de inicio entre from y to */
export function rrDates(start, rr, from, to){
  const o = {}; String(rr || '').replace(/^RRULE:/, '').split(';').forEach(p => { const [k, v] = p.split('='); if (k && v) o[k] = v; });
  const f = o.FREQ, iv = Math.max(1, +(o.INTERVAL || 1)), cnt = o.COUNT ? +o.COUNT : null, until = o.UNTIL ? `${o.UNTIL.slice(0, 4)}-${o.UNTIL.slice(4, 6)}-${o.UNTIL.slice(6, 8)}` : null;
  const BYD = ['SU','MO','TU','WE','TH','FR','SA'], out = []; let n = 0;
  const take = ds => { if (until && ds > until) return false; if (cnt && n >= cnt) return false; n++; if (ds >= from && ds <= to) out.push(ds); return ds <= to; };
  const dow = s => new Date(s + 'T00:00:00Z').getUTCDay();
  if (f === 'WEEKLY'){
    const days = (o.BYDAY ? o.BYDAY.split(',') : [BYD[dow(start)]]).map(d => BYD.indexOf(d.slice(-2))).filter(x => x >= 0);
    let wk = addD(start, -((dow(start) + 6) % 7));
    for (let w = 0; w < 600; w++){ for (const wd of [1, 2, 3, 4, 5, 6, 0]){ if (!days.includes(wd)) continue; const ds = addD(wk, (wd + 6) % 7); if (ds < start) continue; if (!take(ds)) return out; } wk = addD(wk, 7 * iv); }
    return out;
  }
  const [Y, M, D] = start.split('-').map(Number);
  for (let i = 0; i < 2000; i++){
    let d;
    if (f === 'DAILY') d = addD(start, i * iv);
    else if (f === 'MONTHLY'){ const x = new Date(Date.UTC(Y, M - 1 + i * iv, D)); if (x.getUTCDate() !== D) continue; d = x.toISOString().slice(0, 10); }
    else if (f === 'YEARLY'){ const x = new Date(Date.UTC(Y + i * iv, M - 1, D)); if (x.getUTCDate() !== D) continue; d = x.toISOString().slice(0, 10); }
    else { take(start); break; }
    if (!take(d)) break;
  }
  return out;
}
const occStarts = (e, from, to) => (e.rrule ? rrDates(e.date, e.rrule, from, to) : (e.date >= from && e.date <= to ? [e.date] : [])).filter(d => !(e.ex || []).includes(d));
const remTxt = m => m === 0 ? 'ahora' : m < 60 ? `en ${m} min` : m < 1440 ? `en ${m / 60} h` : m < 2880 ? 'mañana' : `en ${Math.round(m / 1440)} días`;

/* decide qué avisos tocan ahora para una estudiante (función pura, se puede probar) */
export function plan(docData, now = new Date()){
  const push = docData.push || {}; const out = [];
  let S; try { S = JSON.parse((docData.datos || {}).parcialM4_v2 || '{}'); } catch (e) { return out; }
  const x = S.x || {}; const c = Object.assign({ hour:19, am:7, daily:true, ev:true, motiv:true }, x.push || {});
  const name = x.name || 'Gaby'; const { day, min } = localNow(push.tz, now); const sent = docData.pushSent || {};
  const inWin = target => min >= target && min < target + GRACE;
  const nm = t => t.replace(/\{n\}/g, name);
  const idx = Math.floor(Date.parse(day) / 864e5);
  // 1) mañana: frase + lo que hay hoy
  if (inWin(c.am * 60) && !sent['am:' + day]){
    const hoy = (x.ev || []).filter(e => occStarts(e, day, day).length).concat((x.agn || []).filter(n => n.kind === 'task' && !n.done && n.date === day).map(n => ({ title:n.text.split('\n')[0], time:n.time })));
    if (c.motiv || hoy.length){
      const pool = idx % 3 === 0 && FR.B.length ? FR.B.map(([t, s]) => `“${t}” (${s})`) : FR.F.map(nm);
      const fr = pool[idx % pool.length];
      const ag = hoy.length ? `Hoy: ${hoy.map(e => e.title + (e.time ? ' (' + fmtTime(e.time) + ')' : '')).join(' · ')}. ` : '';
      out.push({ key:'am:' + day, title:`Buenos días, ${name} ☀️`, body: ag + (c.motiv ? fr : '') });
    }
  }
  // 2) eventos de la agenda (según el recordatorio elegido) y parcial mañana
  // 2a) recordatorios en minutos (agenda nueva): uno por cada ocurrencia y cada recordatorio
  if (c.ev) (x.ev || []).forEach(e => {
    if (!e.date || !Array.isArray(e.rems) || !e.rems.length) return;
    const allDay = e.allDay != null ? e.allDay : !e.time, maxR = Math.max(...e.rems);
    occStarts(e, addD(day, -1), addD(day, Math.ceil(maxR / 1440) + 1)).forEach(d => {
      const start = dayDiff(day, d) * 1440 + (allDay ? c.am * 60 : tmin(e.time));
      e.rems.forEach(m => { const at = start - m, k = `evm:${e.id}:${d}:${m}`;
        if (min >= at && min < Math.min(at + GRACE, start + 10) && !sent[k]) out.push({ key:k, title:`${e.title} ${allDay ? (m >= 1440 ? remTxt(m) : 'hoy') : remTxt(m)}`, body:[allDay ? '' : 'Hora: ' + fmtTime(e.time), e.loc ? 'Lugar: ' + e.loc : '', e.type === 'parcial' ? `Haz un simulacro y repasa lo débil. ¡Tú puedes, ${name}!` : ''].filter(Boolean).join(' · ') || 'Revisa tu agenda.' }); });
    });
  });
  // 2b) pendientes con hora
  if (c.ev) (x.agn || []).forEach(n => { if (n.kind !== 'task' || n.done || n.date !== day || !n.time) return; const t = tmin(n.time), k = `tk:${n.id}:${day}`; if (min >= t && min < t + GRACE && !sent[k]) out.push({ key:k, title:`Pendiente: ${n.text.split('\n')[0]}`, body:`Lo anotaste para las ${fmtTime(n.time)}.` }); });
  if (c.ev) (x.ev || []).forEach(e => {
    if (Array.isArray(e.rems) && e.rems.length) return;
    if (!e.date || e.rem == null || e.rem < 0) return; const dd = dayDiff(day, e.date); if (dd < 0) return;
    const when = dd === 0 ? 'hoy' : dd === 1 ? 'mañana' : `en ${dd} días`;
    const due = dd >= 1 && (dd === e.rem || (dd === 1 && e.rem >= 1));
    if (due && inWin(dd === 1 ? c.hour * 60 + 30 : c.am * 60 + 15) && !sent[`ev:${e.id}:${dd}`])
      out.push({ key:`ev:${e.id}:${dd}`, title:`${e.title} ${when}`, body: e.type === 'parcial' ? `Haz un simulacro de los temas del parcial y repasa lo débil. ¡Tú puedes, ${name}!` : `${e.time ? 'Hora: ' + fmtTime(e.time) + ' · ' : ''}Prepárate con tiempo.` });
    if (dd === 0 && e.time){ const [h, m] = e.time.split(':').map(Number); const t = h * 60 + m; if (min >= t - 90 && min < t - 20 && !sent[`evh:${e.id}`]) out.push({ key:`evh:${e.id}`, title:`${e.title} en 1 hora`, body: e.type === 'parcial' ? `Respira profundo. Ya te preparaste: confía en lo que sabes. 💪` : `Hora: ${fmtTime(e.time)}` }); }
  });
  // 3) repaso diario pendiente
  if (c.daily && inWin(c.hour * 60) && !sent['d:' + day]){
    const due = Object.values(x.srs || {}).filter(r => r && r.due <= day).length;
    const studied = (x.plog || {})[day] || null;
    if (due > 0) out.push({ key:'d:' + day, title:`Tu repaso de hoy, ${name}`, body:`Tienes ${due} ${due === 1 ? 'pregunta' : 'preguntas'} por repasar (~${Math.max(1, Math.round(due * .5))} min). Un ratito hoy vale más que mucho mañana.` });
    else if (!studied) out.push({ key:'d:' + day, title:`¿Un pomodoro hoy, ${name}?`, body: nm(FR.F[(idx * 7) % FR.F.length]) });
  }
  return out;
}

async function main(){
  if (!process.env.FIREBASE_SA){ console.log('Falta el secreto FIREBASE_SA: no se envía nada.'); return; }
  const { default: admin } = await import('firebase-admin');
  admin.initializeApp({ credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SA)) });
  const db = admin.firestore(), fcm = admin.messaging();
  const snap = await db.collection('users').get(); let total = 0;
  for (const doc of snap.docs){
    const d = doc.data(); const tokens = (d.push && d.push.tokens) || []; if (!tokens.length) continue;
    const msgs = plan(d); if (!msgs.length) continue;
    const upd = {}; const bad = new Set();
    for (const m of msgs){
      const r = await fcm.sendEachForMulticast({ tokens, webpush:{ notification:{ title:m.title, body:m.body, icon: SITE + 'icons/icon-192.png', tag:m.key }, fcmOptions:{ link: SITE } }, data:{ link: SITE, tag:m.key } });
      r.responses.forEach((x, i) => { if (!x.success && /not-registered|invalid-registration|invalid-argument/.test(x.error && x.error.code || '')) bad.add(tokens[i]); });
      upd['pushSent.' + m.key] = new Date().toISOString().slice(0, 10); total += r.successCount;
    }
    // limpia lo enviado hace más de 5 días
    const old = Object.entries(d.pushSent || {}).filter(([k, v]) => Date.now() - Date.parse(v) > 5 * 864e5).map(([k]) => k);
    old.forEach(k => upd['pushSent.' + k] = admin.firestore.FieldValue.delete());
    if (bad.size) upd['push.tokens'] = admin.firestore.FieldValue.arrayRemove(...bad);
    await doc.ref.update(upd);
  }
  console.log('Notificaciones enviadas:', total);
}
if (process.argv[1] && process.argv[1].endsWith('notificar.mjs')) main().catch(e => { console.error(e); process.exit(1); });
