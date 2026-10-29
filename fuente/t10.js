const { chromium } = require('playwright');
const MOCK = `
const AUTH = { cb:null, onAuthStateChanged(cb){ this.cb = cb; const u = localStorage.getItem('mockuser'); setTimeout(() => cb(u ? JSON.parse(u) : null), 50); },
 setPersistence(){ return Promise.resolve(); }, signInWithPopup(){ const u = { uid:'gaby1', email:'gaby@gmail.com' }; localStorage.setItem('mockuser', JSON.stringify(u)); this.cb(u); return Promise.resolve({ user:u }); },
 signOut(){ localStorage.removeItem('mockuser'); this.cb(null); return Promise.resolve(); } };
const DB = { collection(){ return { doc(id){ return { get: async () => { const j = await (await fetch('/__cloud/' + id)).json(); return { exists:!!j, data:() => j }; }, set: async d => { await fetch('/__cloud/' + id, { method:'POST', body:JSON.stringify(d) }); } }; } }; } };
function GP(){ this.setCustomParameters = () => {}; }
window.firebase = { apps:[], initializeApp(c){ this.apps.push(c); }, auth: Object.assign(() => AUTH, { GoogleAuthProvider:GP, Auth:{ Persistence:{ LOCAL:'local' } } }), firestore: () => DB };`;
let cloud = {}; let writes = 0;
(async () => {
 const errs = []; const log = (...a) => console.log(...a);
 const b = await chromium.launch();
 async function mk(w, ua){
  const ctx = await b.newContext({ viewport:{ width:w, height:850 }, serviceWorkers:'block', userAgent:ua });
  await ctx.route(/lib\/firebase-(app|auth|firestore)-compat\.js/, r => r.fulfill({ contentType:'text/javascript', body: r.request().url().includes('app-compat') ? MOCK : '' }));
  await ctx.route(/__cloud\//, async r => { const id = r.request().url().split('/__cloud/')[1]; if (r.request().method() === 'POST'){ cloud[id] = JSON.parse(r.request().postData()); writes++; return r.fulfill({ body:'{}' }); } r.fulfill({ contentType:'application/json', body: JSON.stringify(cloud[id] || null) }); });
  const p = await ctx.newPage(); p.on('pageerror', e => errs.push(w + ' ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(w + ' ' + m.text()); });
  return p;
 }
 const U = 'http://localhost:8766/';
 const A = await mk(390, 'Mozilla/5.0 (Linux; Android 14) Mobile');
 await A.goto(U); await A.waitForTimeout(700);
 log('A card', await A.$$eval('[data-sync]', a => a.map(x => (x.hidden ? 'H:' : '') + x.textContent.slice(0, 40))));
 await A.screenshot({ path:'shots/sync_A_inicio.png' });
 await A.click('[data-sync] button:has-text("Iniciar sesión")'); await A.waitForTimeout(700);
 log('A after login, cloud', !!cloud.gaby1, cloud.gaby1 && cloud.gaby1.dev, 'state', await A.evaluate(() => SY.state));
 await A.waitForTimeout(1000);
 await A.evaluate(() => { S.st.q1 = { ok:3 }; S.x.ev = [{ id:'e1', title:'Parcial', type:'parcial', date:'2026-11-05' }]; save(); });
 await A.waitForTimeout(6000);
 log('cloud has q1', JSON.parse(cloud.gaby1.datos.parcialM4_v2).st.q1, 'writes', writes, await A.evaluate(() => SY.state));
 const B = await mk(1366, 'Mozilla/5.0 (X11; Linux x86_64)');
 await B.goto(U); await B.waitForTimeout(700);
 await B.click('#rail .ri:has-text("Inicio")'); await B.click('#subw .sb:has-text("Mi progreso")'); await B.waitForTimeout(200);
 await B.click('[data-sync] button:has-text("Iniciar sesión")'); await B.waitForTimeout(2000);
 log('B restored', await B.evaluate(() => JSON.stringify(S.st.q1) + ' ev ' + (S.x.ev || []).length + ' ' + SY.state));
 await B.click('#rail .ri:has-text("Inicio")'); await B.click('#subw .sb:has-text("Mi progreso")'); await B.waitForTimeout(300);
 await B.screenshot({ path:'shots/sync_B_progreso.png', fullPage:true });
 await B.evaluate(() => { S.st.q2 = { ok:1 }; save(); }); await B.waitForTimeout(6000);
 await A.evaluate(() => syncPull()); await A.waitForTimeout(1500);
 log('A got q2', await A.evaluate(() => JSON.stringify(S.st.q2)));
 // conflicto
 await A.waitForTimeout(1600); await A.evaluate(() => { S.st.qa = { ok:1 }; save(); clearTimeout(SY.timer); SY.timer = null; });
 await B.evaluate(() => { S.st.qb = { ok:1 }; save(); }); await B.waitForTimeout(6000);
 await A.evaluate(() => syncPull()); await A.waitForTimeout(800);
 log('conflict sheet', await A.$$eval('#sheetroot', s => s.map(x => x.textContent.slice(0, 120))));
 await A.screenshot({ path:'shots/sync_conflict.png' });
 await A.click('button:has-text("Conservar el de este dispositivo")'); await A.waitForTimeout(800);
 log('cloud now', Object.keys(JSON.parse(cloud.gaby1.datos.parcialM4_v2).st).join(','));
 log(errs.join('\n') || 'sin errores'); await b.close();
})();
