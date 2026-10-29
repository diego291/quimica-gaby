const APPVER = `__BUILD__`;
/* ======================= PAQUETES DE MATERIAL =======================
   Cada tema nuevo llega como un archivo que llama a registerPack({...}).
   Formato:
   registerPack({
     id:`t29`, version:1,
     topic:{ t:`t29`, n:`Tema 29`, name:`Aldehídos y cetonas`, unit:`Unidad VII · Funciones oxigenadas`, color:[`#día`,`#noche`] },
     REPASO:[], MCQ:[], ABIERTAS:[], EJ:[], FORM:[], FICHAS:[], FQ:[], VIDEOS:[], GENS:[], GUIA:[], SYN:{},
     figs(F, AR){ F.clave = { src, cap, svg }; }      // opcional
   });
*/
const PACK_KEY = `quimica_packs`;
const PK = { list:{}, src:{}, err:[] };
function registerPack(p){
  try {
    if (!p || !p.id || !p.topic || !p.topic.t) throw new Error(`Paquete sin id o sin tema`);
    const cur = PK.list[p.id];
    if (cur && (cur.version || 0) > (p.version || 0)) return;
    p.__from = PK.loading || `sitio`;
    PK.list[p.id] = p;
  } catch (e){ PK.err.push(String(e && e.message || e)); }
}
/* paquetes cargados a mano desde un archivo (se guardan en este navegador) */
(function(){
  let saved = {}; try { saved = JSON.parse(localStorage.getItem(PACK_KEY) || `{}`) || {}; } catch(e){}
  for (const id in saved){ try { PK.loading = `archivo`; new Function(`registerPack`, saved[id])(registerPack); PK.src[id] = saved[id]; } catch (e){ PK.err.push(`${id}: ${e.message}`); } }
  PK.loading = null;
})();
function packTopics(){ return Object.values(PK.list).map(p => p.topic).sort((a, b) => parseInt(a.t.slice(1)) - parseInt(b.t.slice(1))); }
function applyPacks(){
  const packs = Object.values(PK.list).sort((a, b) => parseInt(a.topic.t.slice(1)) - parseInt(b.topic.t.slice(1)));
  const out = { REPASO:[], MCQ:[], ABIERTAS:[], EJ:[], FORM:[], FICHAS:[], FQ:[], GENS:[], GUIA:[], SYN:{}, css:`` };
  packs.forEach(p => {
    const t = p.topic.t;
    [`REPASO`,`MCQ`,`ABIERTAS`,`EJ`,`FORM`,`FICHAS`,`FQ`].forEach(k => (p[k] || []).forEach(x => { if (!x.t) x.t = t; out[k].push(x); }));
    (p.VIDEOS || []).forEach(v => { if (!v.t) v.t = t; if (!VIDEOS.some(x => x.id === v.id && x.t === v.t)) VIDEOS.push(v); });
    (p.GENS || []).forEach(g => { if (!g.t) g.t = t; out.GENS.push(g); });
    (p.GUIA || []).forEach(g => out.GUIA.push(g));
    Object.assign(out.SYN, p.SYN || {});
    try { if (typeof p.figs === `function`) p.figs(FIG, typeof AR !== `undefined` ? AR : null); else if (p.FIG) Object.assign(FIG, p.FIG); } catch (e){ PK.err.push(`${p.id} figuras: ${e.message}`); }
    const c = p.topic.color || [`#5F6B72`, `#B3B9BC`];
    out.css += `:root{--${t}:${c[0]}}:root[data-theme="dark"]{--${t}:${c[1]}}@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--${t}:${c[1]}}}.pdfroot{--${t}:${c[0]}}`;
  });
  return out;
}
