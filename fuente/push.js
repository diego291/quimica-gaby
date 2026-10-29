/* ======================= NOTIFICACIONES EN EL TELÉFONO (Firebase Cloud Messaging) =======================
   El token de cada dispositivo se guarda en users/{uid}.push.tokens. Un proceso automático en GitHub
   (cada 15 min) revisa la agenda y el repaso de hoy y envía los avisos, aunque la página esté cerrada.   */
function pushCfg(){ if (!S.x.push) S.x.push = { on:false, hour:19, am:7, daily:true, ev:true, motiv:true }; return S.x.push; }
function pushAvailable(){ return syncAvailable() && window.FB_VAPID && `Notification` in window && `serviceWorker` in navigator && `PushManager` in window; }
function isIOS(){ return /iPhone|iPad|iPod/.test(navigator.userAgent); }
function isStandalone(){ return matchMedia(`(display-mode: standalone)`).matches || navigator.standalone === true; }
async function pushEnable(msg){
  const say = t => { if (msg) msg.innerHTML = t; };
  if (!SY.user){ say(`Primero inicia sesión con Google en “Guardar en la nube”.`); return; }
  if (isIOS() && !isStandalone()){ say(`En iPhone primero instala la página: botón Compartir → <b>Agregar a pantalla de inicio</b>. Luego ábrela desde el ícono y activa aquí las notificaciones.`); return; }
  try {
    const perm = await Notification.requestPermission();
    if (perm !== `granted`){ say(`No diste permiso. Puedes activarlo en los ajustes del navegador para este sitio.`); return; }
    say(`Activando…`);
    if (!firebase.messaging) await loadScript(`lib/firebase-messaging-compat.js`);
    const reg = await navigator.serviceWorker.ready;
    const token = await firebase.messaging().getToken({ vapidKey:window.FB_VAPID, serviceWorkerRegistration:reg });
    if (!token) throw new Error(`sin token`);
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || `America/El_Salvador`;
    await docRef().set({ push:{ tokens:firebase.firestore.FieldValue.arrayUnion(token), tz } }, { merge:true });
    try { localStorage.setItem(`quimica_pushtoken`, token); } catch(e){}
    const c = pushCfg(); c.on = true; save();
    say(`¡Listo! Las notificaciones están activas en este dispositivo.`);
    setTimeout(renderView, 1200);
  } catch(e){ say(`No se pudo activar (${e.message || e}). Revisa tu conexión e inténtalo de nuevo.`); }
}
async function pushDisable(msg){
  let tk = null; try { tk = localStorage.getItem(`quimica_pushtoken`); } catch(e){}
  try { if (tk && SY.user) await docRef().set({ push:{ tokens:firebase.firestore.FieldValue.arrayRemove(tk) } }, { merge:true }); if (firebase.messaging) await firebase.messaging().deleteToken(); } catch(e){}
  try { localStorage.removeItem(`quimica_pushtoken`); } catch(e){}
  pushCfg().on = false; save(); renderView();
}
function pushTest(msg){
  navigator.serviceWorker.ready.then(r => r.showNotification(`Química · prueba`, { body:`Así se verán tus recordatorios, ${S.x.name || `Gaby`}.`, icon:`icons/icon-192.png`, badge:`icons/icon-192.png` })).catch(() => { if (msg) msg.textContent = `No se pudo mostrar la prueba.`; });
}
function pushCard(){
  if (!pushAvailable()) return null;
  const c = pushCfg(); const box = el(`article`, `card plain`);
  let mine = false; try { mine = !!localStorage.getItem(`quimica_pushtoken`) && Notification.permission === `granted`; } catch(e){}
  box.append(el(`h3`, ``, `Notificaciones en este dispositivo`));
  box.append(el(`p`, `muted`, `Te avisa aunque la página esté cerrada: tu repaso del día, tus parciales y eventos de la agenda, y una frase para empezar el día.`));
  const msg = el(`p`, `muted`); msg.setAttribute(`aria-live`, `polite`);
  const r = el(`div`, `btnrow`);
  if (!mine) r.append(btn(`Activar notificaciones`, `btn acc`, () => pushEnable(msg)));
  else r.append(btn(`Enviar prueba`, `btn ghost`, () => pushTest(msg)), btn(`Desactivar en este dispositivo`, `btn ghost`, () => pushDisable(msg)));
  box.append(r, msg);
  const hs = document.createElement(`select`); hs.className = `nedit`; hs.innerHTML = Array.from({ length:17 }, (_, i) => i + 6).map(h => `<option value="${h}">${h > 12 ? h - 12 : h}:00 ${h >= 12 ? `p. m.` : `a. m.`}</option>`).join(``); hs.value = String(c.hour); hs.onchange = () => { c.hour = +hs.value; save(); };
  const am = document.createElement(`select`); am.className = `nedit`; am.innerHTML = [5, 6, 7, 8, 9].map(h => `<option value="${h}">${h}:00 a. m.</option>`).join(``); am.value = String(c.am); am.onchange = () => { c.am = +am.value; save(); };
  box.append(fld(`Recordatorio de repaso diario`, toggleBtn(c.daily, v => { c.daily = v; save(); }), `Solo si tienes repasos pendientes`), fld(`Hora del recordatorio diario`, hs));
  box.append(fld(`Parciales y eventos de la agenda`, toggleBtn(c.ev, v => { c.ev = v; save(); }), `Según el recordatorio que elegiste en cada evento, y 1 hora antes si tiene hora`));
  box.append(fld(`Frase para empezar el día`, toggleBtn(c.motiv, v => { c.motiv = v; save(); })), fld(`Hora de la frase y avisos de la mañana`, am));
  box.append(el(`p`, `muted`, `Los avisos pueden llegar con unos minutos de diferencia. ${isIOS() ? `En iPhone solo funcionan con la página instalada en la pantalla de inicio.` : ``}`));
  return box;
}
