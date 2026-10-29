const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const errs = [];
 const p = await (await b.newContext({viewport:{width:1100,height:950}})).newPage();
 p.on('pageerror', e => errs.push('ERR '+e.message));
 await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
 await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' }); await p.waitForTimeout(300);
 const r = await p.evaluate(() => { const out = []; for (const id of ['nomEter','tipoEter','cicloEter','combEter','nomAlcohol']){ const g = GENS.find(x => x.id === id); const samp = [];
   for (let i = 0; i < 300; i++){ const P = g.make(); if (P.opts){ if (P.correct < 0 || new Set(P.opts).size !== P.opts.length || P.opts.length < 2) out.push(id+' BAD '+JSON.stringify(P)); } else if (!(P.ans >= 0)) out.push(id+' NUM '+P.ans); if (i < 4) samp.push(P.q + ' → ' + P.r + (P.opts ? ' | ' + P.opts.join(' / ') : '')); }
   out.push(id + ':\n  ' + samp.join('\n  ')); }
   const figs = ALL.REPASO.filter(x => x.fig && !FIG[x.fig]).map(x => x.title); out.push('missing figs: ' + figs.join(',')); out.push('counts ' + ['t27','t28'].map(t => t+': R'+ALL.REPASO.filter(x=>x.t===t).length+' M'+ALL.MCQ.filter(x=>x.t===t).length+' A'+ALL.ABIERTAS.filter(x=>x.t===t).length+' E'+ALL.EJ.filter(x=>x.t===t).length+' F'+ALL.FICHAS.filter(x=>x.t===t).length+' V'+VIDEOS.filter(x=>x.t===t).length).join(' ')); 
   const badrep = VIDEOS.filter(v => v.rep.some(t => !ALL.REPASO.some(r => r.title === t))).map(v => v.id); out.push('bad rep: ' + badrep);
   return out.join('\n'); });
 console.log(r);
 await p.evaluate(() => { S.x.rall = true; setSel(['t28']); go('repaso'); }); await p.waitForTimeout(200);
 const figs = await p.$$('#view figure.fig, #view .fig'); console.log('figs', figs.length);
 for (let i = 0; i < figs.length; i++) await figs[i].screenshot({ path:`shots/n_fig${i}.png` });
 console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
