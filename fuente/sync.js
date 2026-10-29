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
function syncDirty(){ const m = syncMeta(); if (!m.dirty){ m.dirty = true; setMeta(m); } if (SY.user && !SY.timer) SY.timer = setTimeout(() => { SY.timer = null; syncPush(); }, 5000); if (SY.user) setSync(`pend`); }

async function syncInit(){
  if (!syncAvailable()) return;
  setSync(`load`);
  try {
    if (!window.firebase){ await loadScript(`lib/firebase-app-compat.js`); await loadScript(`lib/firebase-auth-compat.js`); await loadScript(`lib/firebase-firestore-compat.js`); }
    if (!firebase.apps.length) firebase.initializeApp(window.FB_CONFIG);
    SY.db = firebase.firestore(); SY.on = true;
    firebase.auth().onAuthStateChanged(u => { SY.user = u; if (u) syncPull(); else setSync(`out`); });
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

async function syncPull(){
  if (!SY.user || SY.busy) return; SY.busy = true; setSync(`sync`);
  try {
    const snap = await docRef().get({ source:`server` }); const r = snap.exists ? snap.data() : null; const m = syncMeta();
    if (m.uid && m.uid !== SY.user.uid){ m.rev = 0; }
    m.uid = SY.user.uid; setMeta(m);
    if (!r || !r.datos){ SY.busy = false; return syncPush(true); }
    const remoteNewer = (r.updated || 0) > (m.rev || 0);
    if (!remoteNewer){ SY.busy = false; return m.dirty ? syncPush() : setSync(`ok`); }
    if (!m.rev && !hasProgress()) return syncApply(r);
    if (m.rev && !m.dirty) return syncApply(r);
    SY.busy = false; syncConflict(r);
  } catch(e){ SY.busy = false; setSync(navigator.onLine ? `err` : `offline`, navigator.onLine ? `No se pudo leer la nube.` : ``); }
}
function syncApply(r){
  SY.applying = true;
  for (const k in r.datos){ if (BACKUP_KEYS.includes(k)) try { localStorage.setItem(k, r.datos[k]); } catch(e){} }
  setMeta({ uid:SY.user.uid, rev:r.updated, dirty:false, at:Date.now() });
  location.reload();
}
async function syncPush(force){
  if (!SY.user) return; if (SY.busy && !force) return; SY.busy = true; setSync(`sync`);
  try {
    const m = syncMeta();
    if (!force){ const snap = await docRef().get({ source:`server` }); const r = snap.exists ? snap.data() : null; if (r && (r.updated || 0) > (m.rev || 0)){ SY.busy = false; return syncConflict(r); } }
    const now = Date.now();
    await docRef().set({ datos:localData(), updated:now, dev:devName() }, { merge:true });
    setMeta({ uid:SY.user.uid, rev:now, dirty:false, at:now }); SY.busy = false; setSync(`ok`);
  } catch(e){ SY.busy = false; setSync(navigator.onLine ? `err` : `offline`, navigator.onLine ? `No se pudo guardar en la nube.` : ``); }
}
function syncConflict(r){
  setSync(`conf`);
  openSheet(`¿Qué progreso conservo?`, b => {
    b.append(el(`p`, ``, `Hay cambios en este dispositivo que no estaban en la nube, y la nube tiene progreso guardado desde tu <b>${r.dev || `otro dispositivo`}</b> el <b>${new Date(r.updated).toLocaleString(`es`, { dateStyle:`medium`, timeStyle:`short` })}</b>.`));
    b.append(el(`p`, `muted`, `Elige cuál usar. El otro se reemplaza. Si no estás segura, descarga primero un respaldo de este dispositivo en Mi progreso.`));
    const row = el(`div`, `btnrow`);
    row.append(btn(`Usar el de la nube`, `btn acc`, () => { closeSheet(); syncApply(r); }), btn(`Conservar el de este dispositivo`, `btn ghost`, () => { closeSheet(); syncPush(true); }));
    b.append(row);
  });
}
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
