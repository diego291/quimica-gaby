/* ======================= SINCRONIZACIÓN EN LA NUBE (Firebase) =======================
   Solo se activa si existe window.FB_CONFIG (archivo firebase-config.js del sitio).
   Guarda en users/{uid}: { datos:{clave:texto}, updated:ms, dev:texto }.            */
const SYNC_META = `quimica_sync`;
const SY = { on:false, user:null, db:null, state:`off`, err:``, timer:null, applying:false, boot:Date.now(), busy:false };
function syncMeta(){ try { return JSON.parse(localStorage.getItem(SYNC_META) || `{}`) || {}; } catch(e){ return {}; } }
function setMeta(m){ try { localStorage.setItem(SYNC_META, JSON.stringify(m)); } catch(e){} }
function syncAvailable(){ return !!(window.FB_CONFIG && window.FB_CONFIG.apiKey) && /^https?:$/.test(location.protocol); }
function devName(){ const u = navigator.userAgent; return /iPad|Tablet/i.test(u) || (/Android/i.test(u) && !/Mobile/i.test(u)) ? `tablet` : /Android|iPhone|Mobile/i.test(u) ? `teléfono` : `computadora`; }
function loadScript(src){ return new Promise((ok, no) => { const s = document.createElement(`script`); s.src = src; s.onload = ok; s.onerror = () => no(new Error(`sin conexión`)); document.head.append(s); }); }
function localData(){ const d = {}; BACKUP_KEYS.forEach(k => { try { const x = localStorage.getItem(k); if (x != null) d[k] = x; } catch(e){} }); return d; }
function hasProgress(){ return Object.keys(S.st).length > 0 || (S.x.ev || []).length > 0 || (S.x.plog || []).length > 0 || Object.keys(S.box).length > 0; }
function setSync(st, err){ SY.state = st; SY.err = err || ``; renderSyncHosts(); }

/* cada escritura real marca "pendiente de subir" (se ignoran las del arranque) */
(function(){
  if (Storage.prototype.__set) return;
  const orig = Storage.prototype.setItem; Storage.prototype.__set = orig;
  Storage.prototype.setItem = function(k, v){ orig.call(this, k, v); if (this === window.localStorage && BACKUP_KEYS.includes(k) && !SY.applying && Date.now() - SY.boot > 1500) syncDirty(); };
})();
function syncDirty(){ const m = syncMeta(); m.dirty = true; m.changed = Date.now(); setMeta(m); if (SY.user){ clearTimeout(SY.timer); SY.timer = setTimeout(() => { SY.timer = null; syncPush(); }, 2000); setSync(`pend`); } }

async function syncInit(){
  if (!syncAvailable()) return;
  setSync(`load`);
  try {
    if (!window.firebase){ await loadScript(`lib/firebase-app-compat.js`); await loadScript(`lib/firebase-auth-compat.js`); await loadScript(`lib/firebase-firestore-compat.js`); }
    if (!firebase.apps.length) firebase.initializeApp(window.FB_CONFIG);
    SY.db = firebase.firestore(); SY.on = true;
    firebase.auth().onAuthStateChanged(u => { SY.user = u; if (SY.unsub){ SY.unsub(); SY.unsub = null; } if (u){ syncPull().then(syncListen); } else setSync(`out`); });
  } catch(e){ setSync(`offline`); }
}
function syncLogin(){
  const p = new firebase.auth.GoogleAuthProvider(); p.setCustomParameters({ prompt:`select_account` });
  setSync(`sync`);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => firebase.auth().signInWithPopup(p)).catch(e => {
    const c = e && e.code || ``;
    setSync(`out`, c.includes(`popup-closed`) || c.includes(`cancelled`) ? `` : c.includes(`unauthorized-domain`) ? `Este dominio no está autorizado en Firebase.` : c.includes(`popup-blocked`) ? `El navegador bloqueó la ventana. Permite ventanas emergentes e inténtalo de nuevo.` : `No se pudo iniciar sesión (${c || e.message}).`);
  });
}
function syncLogout(){ firebase.auth().signOut(); const m = syncMeta(); delete m.rev; delete m.uid; setMeta(m); }
function docRef(){ return SY.db.collection(`users`).doc(SY.user.uid); }

/* ---------- mezcla automática entre dispositivos (ya no se pregunta qué progreso conservar) ----------
   · Respuestas y contadores (S.st): se suma lo mejor de ambos (máximo de cada contador).
   · Listas con id (eventos, pendientes, notas, páginas del cuaderno): por elemento, gana el cambio más reciente;
     lo borrado en cualquier dispositivo queda borrado (x.del / cuaderno.del).
   · "Comprueba lo que leíste" (x.chk) y "Continúa donde quedaste" (x.last): gana el avance más reciente.
   · Lo que es solo de la pantalla (temas elegidos, pestañas abiertas, vista de la agenda): se queda el de cada dispositivo.
   · Todo lo demás: gana el valor del dispositivo que cambió más recientemente.                                      */
const DEVID = (() => { try { let d = localStorage.getItem(`quimica_dev`); if (!d){ d = Math.random().toString(36).slice(2, 10); localStorage.setItem(`quimica_dev`, d); } return d; } catch(e){ return `x`; } })();
const LOCAL_X = [`sm`, `ptab`, `agv`, `cn`, `nrq`, `nrt`, `rtab`, `rtabFor`, `qw`, `qd`, `syncHide`, `figMode`, `figPos`, `figMin`, `panelOff`, `zoom`, `lect`];
const tsOf = o => (o && (o.upd || o.updated || o.t || o.created)) || 0;
function mergeVal(a, b, bn, del){
  if (a === undefined) return b; if (b === undefined) return a;
  if (Array.isArray(a) && Array.isArray(b)){
    const isId = arr => arr.length > 0 && arr.every(x => x && typeof x === `object` && !Array.isArray(x) && `id` in x);
    if ((isId(a) || isId(b)) && (isId(a) || !a.length) && (isId(b) || !b.length)){
      const m = new Map(), order = bn ? b.concat(a) : a.concat(b);
      order.forEach(x => { const y = m.get(x.id); if (!y) m.set(x.id, x); else { const tx = tsOf(x), ty = tsOf(y); if (tx > ty) m.set(x.id, x); } });
      const pick = new Map(); a.forEach(x => pick.set(x.id, x)); b.forEach(y => { const x = pick.get(y.id); if (!x || tsOf(y) > tsOf(x) || (tsOf(y) === tsOf(x) && bn)) pick.set(y.id, y); });
      return [...m.keys()].map(id => pick.get(id)).filter(x => !(del && del[x.id]));
    }
    return bn ? b : a;
  }
  if (a && b && typeof a === `object` && typeof b === `object`){ const o = {}; new Set(Object.keys(a).concat(Object.keys(b))).forEach(k => { o[k] = mergeVal(a[k], b[k], bn, del); }); return o; }
  return bn ? b : a;
}
const newest = (a, b, bn) => !a ? b : !b ? a : (tsOf(b) > tsOf(a) || (tsOf(b) === tsOf(a) && bn)) ? b : a;
function mergeState(L, R, bn){
  const o = Object.assign({}, R, L);
  o.sel = L.sel || R.sel; o.mode = L.mode || R.mode; o.simFb = L.simFb || R.simFb;
  o.st = {}; new Set(Object.keys(L.st || {}).concat(Object.keys(R.st || {}))).forEach(k => { const a = (L.st || {})[k], b = (R.st || {})[k];
    o.st[k] = Array.isArray(a) && Array.isArray(b) ? a.map((v, i) => Math.max(v || 0, b[i] || 0)) : typeof a === `number` && typeof b === `number` ? Math.max(a, b) : a === undefined ? b : a; });
  o.err = bn ? (R.err || []) : (L.err || []);
  o.box = mergeVal(L.box || {}, R.box || {}, bn);
  const lx = L.x || {}, rx = R.x || {}, del = Object.assign({}, rx.del || {}, lx.del || {});
  const cut = Date.now() - 90 * 864e5; Object.keys(del).forEach(k => { if (del[k] < cut) delete del[k]; });
  const x = {};
  new Set(Object.keys(lx).concat(Object.keys(rx))).forEach(k => {
    if (LOCAL_X.includes(k)) x[k] = k in lx ? lx[k] : rx[k];
    else if (k === `last`) x[k] = newest(lx[k], rx[k], bn);
    else if (k === `chk`){ const c = {}; new Set(Object.keys(lx.chk || {}).concat(Object.keys(rx.chk || {}))).forEach(q => { c[q] = newest((lx.chk || {})[q], (rx.chk || {})[q], bn); }); x[k] = c; }
    else if (k === `del`) x[k] = del;
    else x[k] = mergeVal(lx[k], rx[k], bn, del);
  });
  o.x = x; return o;
}
function mergeDatos(L, R, bn){
  const out = Object.assign({}, R, L);
  Object.keys(Object.assign({}, L, R)).forEach(k => {
    if (!(k in L)) return out[k] = R[k]; if (!(k in R) || L[k] === R[k]) return out[k] = L[k];
    let a, b; try { a = JSON.parse(L[k]); b = JSON.parse(R[k]); } catch(e){ return out[k] = bn ? R[k] : L[k]; }
    let m;
    if (k === KEY) m = mergeState(a || {}, b || {}, bn);
    else if (k === `quimica_cuaderno` && a && b){ const del = Object.assign({}, b.del || {}, a.del || {}); m = { nb:mergeVal(a.nb || [], b.nb || [], bn, del), sec:mergeVal(a.sec || [], b.sec || [], bn, del), pg:mergeVal(a.pg || [], b.pg || [], bn, del), del }; }
    else m = mergeVal(a, b, bn);
    out[k] = JSON.stringify(m);
  });
  return out;
}
/* aplica lo que llegó de la nube sin recargar la página */
function applyDatos(d){
  const prev = localData(), changed = Object.keys(d).filter(k => BACKUP_KEYS.includes(k) && d[k] !== prev[k]);
  if (!changed.length) return false;
  SY.applying = true; changed.forEach(k => { try { localStorage.setItem(k, d[k]); } catch(e){} }); SY.applying = false;
  if (changed.some(k => k !== KEY && k !== `quimica_cuaderno`)){ location.reload(); return true; } // videos, dudas o paquetes nuevos
  if (changed.includes(KEY)){ try { const o = JSON.parse(d[KEY]) || {}; S.st = o.st || {}; S.err = o.err || []; S.box = o.box || {}; S.x = o.x || {}; initX(); if (typeof syncETYPE === `function`) syncETYPE(); } catch(e){} }
  if (changed.includes(`quimica_cuaderno`)){ try { CN = JSON.parse(d.quimica_cuaderno); } catch(e){} }
  syncRefresh(); return true;
}
function syncRefresh(){
  const a = document.activeElement;
  if ((typeof SH !== `undefined` && SH) || (a && (a.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)))){ SY.later = true; return; }
  SY.later = false; const y = scrollY;
  try { renderHead(); renderView(); renderPanel(); renderBnav(); } catch(e){}
  scrollTo(0, y);
}
setInterval(() => { if (SY.later) syncRefresh(); }, 3000);
/* lo de la nube, mezclado con lo de este dispositivo */
function syncReceive(r){
  const m = syncMeta();
  if (!r || !r.datos) return false;
  if ((r.updated || 0) <= (m.rev || 0)) return false;
  if (r.devId === DEVID && r.updated === m.rev) return false;
  const local = localData();
  const merged = m.dirty || !m.rev ? mergeDatos(local, r.datos, (r.updated || 0) > (m.changed || 0)) : mergeDatos(local, r.datos, true);
  const igual = Object.keys(r.datos).every(k => !BACKUP_KEYS.includes(k) || merged[k] === r.datos[k]) && Object.keys(merged).every(k => k in r.datos);
  applyDatos(merged);
  const n = syncMeta(); n.uid = SY.user.uid; n.rev = r.updated; n.at = Date.now(); n.dirty = !igual; setMeta(n);
  return !igual;
}
async function syncPull(){
  if (!SY.user || SY.busy) return; SY.busy = true; setSync(`sync`);
  try {
    const snap = await docRef().get({ source:`server` }); const r = snap.exists ? snap.data() : null; const m = syncMeta();
    if (m.uid && m.uid !== SY.user.uid){ m.rev = 0; m.dirty = true; }
    m.uid = SY.user.uid; setMeta(m);
    SY.busy = false;
    if (!r || !r.datos) return syncPush();
    const falta = syncReceive(r);
    if (falta || syncMeta().dirty) return syncPush(); setSync(`ok`);
  } catch(e){ SY.busy = false; setSync(navigator.onLine ? `err` : `offline`, navigator.onLine ? `No se pudo leer la nube.` : ``); }
}
/* tiempo real: lo que se hace en un dispositivo aparece solo en los demás */
function syncListen(){
  if (!SY.user || SY.unsub) return;
  try {
    SY.unsub = docRef().onSnapshot(snap => {
      if (snap.metadata && (snap.metadata.hasPendingWrites || snap.metadata.fromCache)) return;
      const r = snap.exists ? snap.data() : null; if (!r || SY.busy) return;
      if (syncReceive(r)) syncDirty(); else if (!syncMeta().dirty) setSync(`ok`);
    }, () => { SY.unsub = null; });
  } catch(e){}
}
async function syncPush(){
  if (!SY.user) return; if (SY.busy){ SY.again = true; return; } SY.busy = true; setSync(`sync`);
  const m0 = syncMeta(), changed0 = m0.changed || 0;
  try {
    let merged = null, rev = 0;
    await SY.db.runTransaction(async tx => {
      merged = null; const ref = docRef(); const snap = await tx.get(ref); const r = snap.exists ? snap.data() : null; const m = syncMeta();
      let d = localData();
      if (r && r.datos && (r.updated || 0) > (m.rev || 0)){ d = mergeDatos(d, r.datos, (r.updated || 0) > (m.changed || 0)); merged = d; }
      rev = Math.max(Date.now(), ((r && r.updated) || 0) + 1);
      tx.set(ref, { datos:d, updated:rev, dev:devName(), devId:DEVID }, { merge:true });
    });
    if (merged) applyDatos(merged);
    const m = syncMeta(); const more = (m.changed || 0) > changed0;
    m.uid = SY.user.uid; m.rev = rev; m.at = Date.now(); m.dirty = more; setMeta(m);
    SY.busy = false; setSync(more ? `pend` : `ok`);
    if (more || SY.again){ SY.again = false; clearTimeout(SY.timer); SY.timer = setTimeout(() => { SY.timer = null; syncPush(); }, 1500); }
  } catch(e){ SY.busy = false; setSync(navigator.onLine ? `err` : `offline`, navigator.onLine ? `No se pudo guardar en la nube.` : ``); }
}
function syncApply(r){ syncReceive(r); }
function syncConflict(r){ syncReceive(r); syncPush(); }
function syncAgo(t){ if (!t) return ``; const s = Math.round((Date.now() - t) / 1000); return s < 60 ? `hace un momento` : s < 3600 ? `hace ${Math.round(s / 60)} min` : new Date(t).toLocaleString(`es`, { dateStyle:`short`, timeStyle:`short` }); }
const SYNC_TXT = { load:`Conectando…`, out:`Sin iniciar sesión`, sync:`Sincronizando…`, ok:`Guardado en la nube`, pend:`Cambios por subir…`, err:`Error al sincronizar`, offline:`Sin internet: se subirá al volver la conexión`, conf:`Elige qué progreso conservar` };
function syncLine(){ const m = syncMeta(); return SYNC_TXT[SY.state] + (SY.state === `ok` && m.at ? ` · ${syncAgo(m.at)}` : ``); }
function syncBox(host, compact){
  host.innerHTML = ``;
  if (!syncAvailable()) return;
  if (!SY.user){
    host.append(el(`h3`, ``, `Guardar en la nube`), el(`p`, `muted`, `Inicia sesión con tu cuenta de Google y tu progreso, fichas, agenda y Pomodoro se guardan solos y se sincronizan entre tu teléfono y tu computadora.`));
    const r = el(`div`, `btnrow`); r.append(btn(`Iniciar sesión con Google`, `btn acc`, () => { if (SY.on) syncLogin(); }));
    if (compact) r.append(btn(`Ahora no`, `btn ghost`, () => { S.x.syncHide = 1; save(); host.remove(); }));
    host.append(r);
    if (SY.state === `load`) host.append(el(`p`, `muted`, `Conectando…`));
    if (SY.state === `offline`) host.append(el(`p`, `muted`, `Sin internet: conéctate para iniciar sesión.`));
    if (SY.err) host.append(el(`p`, `trap`, SY.err));
    return;
  }
  if (compact){ host.hidden = true; return; }
  host.hidden = false;
  host.append(el(`h3`, ``, `Guardado en la nube`));
  host.append(el(`p`, ``, `${icon(SY.state === `ok` ? `bolt` : `timer`)} <b>${syncLine()}</b>`));
  host.append(el(`p`, `muted`, `Cuenta: ${SY.user.email || SY.user.displayName || `Google`}. Todo se guarda solo; no tienes que hacer nada.`));
  if (SY.err) host.append(el(`p`, `trap`, SY.err));
  { const r = el(`div`, `btnrow`); r.append(btn(`Sincronizar ahora`, `btn ghost`, () => { const m = syncMeta(); m.dirty ? syncPush() : syncPull(); }), btn(`Cerrar sesión`, `btn ghost`, syncLogout)); host.append(r); }
}
function renderSyncHosts(){ document.querySelectorAll(`[data-sync]`).forEach(h => syncBox(h, h.dataset.sync === `mini`)); const d = $(`#syncdot`); if (d) d.dataset.st = SY.user ? SY.state : `out`; }
function syncCard(compact){ const c = el(`article`, `card plain`); c.dataset.sync = compact ? `mini` : `full`; syncBox(c, compact); return c; }
window.addEventListener(`online`, () => { if (SY.user){ const m = syncMeta(); m.dirty ? syncPush() : syncPull(); } else if (syncAvailable() && !SY.on) syncInit(); });
document.addEventListener(`visibilitychange`, () => { if (document.visibilityState === `visible` && SY.user && !SY.busy) syncPull(); else if (document.visibilityState === `hidden` && SY.user && syncMeta().dirty){ clearTimeout(SY.timer); SY.timer = null; syncPush(); } });
