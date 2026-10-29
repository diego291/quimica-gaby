const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const errs = [];
 for (const [w, h, sc] of [[1366, 900, 'dark'], [390, 844, 'light']]){
  const p = await (await b.newContext({ viewport:{ width:w, height:h }, colorScheme:sc })).newPage();
  p.on('pageerror', e => errs.push(w + ' ERR ' + e.message));
  await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' }); await p.waitForTimeout(300);
  const nav = s => w > 700 ? `#rail .ri:has-text("${s}")` : `#bnav .bn:has-text("${s}")`;
  // temas: solo el 28
  await p.click('#head .tchp.add'); await p.waitForTimeout(150);
  await p.click('.tqk button:has-text("Solo lo nuevo")'); await p.waitForTimeout(150);
  await p.screenshot({ path:`shots/v_${w}_temas.png` });
  if (w <= 700) await p.click('.sheet .btn:has-text("Listo")');
  // evento
  await p.click(nav('Inicio')); await p.waitForTimeout(100);
  if (w > 1100) await p.click('.ptabs button:has-text("Agenda")');
  await p.click('[data-agenda] .ag .btn'); await p.waitForTimeout(100);
  await p.fill('.sheet .inp', 'Parcial de Química');
  const d = new Date(Date.now() + 6*864e5); const ds = d.toISOString().slice(0,10);
  await p.fill('.sheet input[type=date]', ds); await p.fill('.sheet input[type=time]', '08:00');
  await p.screenshot({ path:`shots/v_${w}_evento.png` });
  await p.click('.sheet .btn:has-text("Guardar evento")'); await p.waitForTimeout(150);
  // pomodoro
  await p.click('[data-pomo=card] [data-pa=cfg]'); await p.waitForTimeout(100); await p.screenshot({ path:`shots/v_${w}_pomocfg.png` });
  await p.click('.sheet .btn:has-text("Listo")');
  await p.click('[data-pomo=card] [data-pa=toggle]'); await p.waitForTimeout(1300);
  await p.screenshot({ path:`shots/v_${w}_inicio2.png`, fullPage:true });
  await p.click('[data-pomo=card] [data-pa=focus]'); await p.waitForTimeout(200); await p.screenshot({ path:`shots/v_${w}_focus.png` });
  await p.click('.focus [data-pa=exit]');
  // repaso tema 28 + práctica
  await p.click(nav('Estudiar')); await p.click('#subw .sb:has-text("Repaso")'); await p.waitForTimeout(150); await p.screenshot({ path:`shots/v_${w}_rep28.png`, fullPage:true });
  await p.click(nav('Practicar')); await p.click('#subw .sb:has-text("Práctica")'); await p.waitForTimeout(150); await p.screenshot({ path:`shots/v_${w}_prac.png` });
  await p.click(nav('Examen')); await p.click('#subw .sb:has-text("Simulacro")'); await p.waitForTimeout(150); await p.screenshot({ path:`shots/v_${w}_sim.png` });
  const st = await p.evaluate(() => JSON.stringify({ ev:S.x.ev.length, run:S.x.pst.run, sel:[...S.sel] }));
  console.log(w, st);
 }
 console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
