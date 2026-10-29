/* ======================= ARRANQUE ======================= */
initX(); if (Array.isArray(S.x.known)) TORDER.forEach(t => { if (!S.x.known.includes(t)) S.sel.add(t); }); S.x.known = TORDER.slice(); applyTheme(); injectPackCss(); versionNotice();
if (!SECS.some(sc => sc.modes.some(m => m[0] === S.mode))) S.mode = `inicio`;
renderAll();
setInterval(pomoTick, 1000);
document.addEventListener(`keydown`, e => {
  if (e.key === `Escape`){ if ($(`#focusroot`).children.length) closeFocus(); else if (SH) closeSheet(); return; }
  const tag = (document.activeElement && document.activeElement.tagName) || ``;
  if (S.mode === `repaso` && !S.x.rall && !SH && !/INPUT|SELECT|TEXTAREA/.test(tag) && (e.key === `ArrowRight` || e.key === `ArrowLeft`)){ const bs = document.querySelectorAll(`.decknav .btn`); const b = e.key === `ArrowRight` ? bs[1] : bs[0]; if (b && !b.disabled){ e.preventDefault(); b.click(); } }
});
try { matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`, () => renderHead()); } catch(e){}
let BPNOW = bp(); addEventListener(`resize`, () => { const b = bp(); if (b !== BPNOW){ BPNOW = b; renderAll(); } });
document.addEventListener(`visibilitychange`, () => { if (!document.hidden) pomoTick(); });

/* Para generar PDF vectoriales desde fuera (impresión del examen): */
window.__doc = (kind, code) => { const d = buildDoc(kind, code ? buildExam(code) : undefined); [...document.body.children].forEach(c => { if (![`STYLE`,`LINK`,`TITLE`,`META`].includes(c.tagName)) c.remove(); }); document.body.className = `printing`; document.body.append(d.root); return d.spec.file; };
window.__buildExam = buildExam;
