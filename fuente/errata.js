/* ===================== CORRECCIONES DEL MATERIAL =====================
   Una entrada por ficha (clave = título exacto de la ficha de Repaso).
   tipo: `error` (el material dice algo incorrecto), `falta` (el material lo deja incompleto),
         `aviso` (el material se contradice; se explica qué seguir).
   Campos: pg (página), que (qué parte), dice (lo que dice el material), ok (lo correcto), por (por qué). */
const ERRATA = {
  /* ---------- Tema 26 ---------- */
  [`Enlace y geometría del anillo aromático`]:[
    { tipo:`error`, pg:`pág. 4`, que:`Longitud de enlace`, dice:`"1.39 AA"`, ok:`1.39 Å (angstroms)`, por:`Es un error de escritura de la unidad.` }],
  [`Cadenas largas: el benceno como fenilo`]:[
    { tipo:`aviso`, pg:`pág. 11 y 16`, que:`Cuándo el benceno pasa a ser fenilo`, dice:`La pág. 11 dice "si supera los 6 carbonos"; la pág. 16, "con 6 carbonos o más". Sus ejemplos (3-fenilpentano) tienen solo 5 C.`, ok:`Sigue la forma de los ejemplos del docente y, si te piden justificar, pregunta qué criterio exige.`, por:`Las dos páginas dan límites distintos.` }],
  [`Aromáticos famosos`]:[
    { tipo:`error`, pg:`pág. 17`, que:`Nombre`, dice:`"notroglicerina"`, ok:`nitroglicerina`, por:`Error de escritura.` }],
  [`Fármacos, bases nitrogenadas y sustancias tóxicas`]:[
    { tipo:`error`, pg:`pág. 20`, que:`Nombre del fármaco`, dice:`"metrotrexano"`, ok:`metotrexato`, por:`Error de escritura.` },
    { tipo:`error`, pg:`pág. 20`, que:`Nombre del tóxico`, dice:`"venzo (A) pireno"`, ok:`benzo[a]pireno`, por:`Error de escritura.` }],
  /* ---------- Tema 27 ---------- */
  [`Funciones oxigenadas: estructura y fórmula general`]:[
    { tipo:`error`, pg:`portada`, que:`Número del tema`, dice:`"Tema 28"`, ok:`Tema 27 (así se usa en toda la página)`, por:`El archivo corresponde al Tema 27.` }],
  [`Clasificación de las funciones oxigenadas`]:[
    { tipo:`error`, pg:`pág. 4`, que:`Tabla: grupo del éster`, dice:`Éster = "carbonilo + hidroxilo"`, ok:`Éster = −COO−R': el segundo oxígeno está unido a otra cadena, no a un H`, por:`"Carbonilo + hidroxilo" es el ácido carboxílico (−COOH).` }],
  [`Propiedades físicas de los alcoholes`]:[
    { tipo:`error`, pg:`pág. 13`, que:`Causa del punto de ebullición alto`, dice:`Se debe a las fuerzas de dispersión`, ok:`Se debe a los puentes de hidrógeno (etanol 78 °C frente a propano −42 °C); la dispersión solo explica que suba con el tamaño`, por:`Masa parecida, ebullición muy distinta: la diferencia es el −OH.` },
    { tipo:`error`, pg:`pág. 13`, que:`Acidez del etanol`, dice:`"pKa inferior al agua"`, ok:`Etanol (≈ 16) y agua (≈ 15.7) tienen acidez muy parecida`, por:`Dato de referencia [2].` }],
  [`Propiedades físicas de los fenoles`]:[
    { tipo:`error`, pg:`pág. 14`, que:`pKa del fenol`, dice:`"tienen un pKa mayor a los alcoholes, por lo que son más ácidos"`, ok:`Tienen un pKa MENOR (fenol ≈ 10, etanol ≈ 16), por eso son más ácidos`, por:`A menor pKa, mayor acidez. La conclusión es correcta; "mayor" está mal.` }],
  /* ---------- Tema 28 ---------- */
  [`Estructura de los éteres`]:[
    { tipo:`error`, pg:`portada`, que:`Número del tema`, dice:`"Tema 29"`, ok:`Tema 28 (así se usa en toda la página)`, por:`El archivo corresponde al Tema 28.` }],
  [`Propiedades físicas de los éteres`]:[
    { tipo:`error`, pg:`pág. 11`, que:`Ejemplo de ebullición`, dice:`"etanol 78 °C, éter dimetílico 34 °C"`, ok:`El éter dimetílico hierve a −24 °C (es gas); el de 34.6 °C es el éter dietílico`, por:`Comparación justa: etanol 78 °C frente a éter dimetílico −24 °C (los dos de 46 g/mol) [2].` }],
  [`Epóxidos`]:[
    { tipo:`falta`, pg:`pág. 13`, que:`Resinas epoxi`, dice:`Aparecen sin descripción`, ok:`Adhesivos y recubrimientos muy resistentes que se forman al abrir epóxidos y unirlos en cadena (pegamentos de dos componentes, pisos y pinturas industriales)`, por:`Complemento [2].` }],
  /* ---------- Tema 30 ---------- */
  [`Cetonas comunes y en la salud`]:[
    { tipo:`error`, pg:`pág. 11`, que:`Fórmula del acetoacetato`, dice:`Acetoacetato = CH₃−CO−CH₂−COOH`, ok:`Esa fórmula es el ácido acetoacético; el acetoacetato es CH₃−CO−CH₂−COO⁻`, por:`El "-ato" es la forma ionizada.` },
    { tipo:`error`, pg:`pág. 11`, que:`Cetohexosas`, dice:`"la fructosa y la ritrulosa"`, ok:`"Ritrulosa" no existe; quizá ribulosa o eritrulosa, que son cetosas pero no hexosas (5 y 4 C). La cetohexosa del ejemplo es la fructosa`, por:`Error de escritura y de clasificación.` },
    { tipo:`aviso`, pg:`pág. 11`, que:`Cuerpos cetónicos y hormonas`, dice:`Los tres cuerpos cetónicos se presentan como cetonas; se citan "los estrógenos"`, ok:`El β-hidroxibutirato tiene −OH, no grupo cetona. De los estrógenos, la estrona tiene cetona; el estradiol no`, por:`Precisión de nombres.` }],
  [`Oxidación y reducción`]:[
    { tipo:`error`, pg:`pág. 16`, que:`Dibujo de la reducción`, dice:`Muestra alcohol → aldehído → ácido (eso es oxidación)`, ok:`La reducción va al revés: aldehído → alcohol 1° y cetona → alcohol 2°`, por:`Reducción = ganancia de H; el dibujo es el de la oxidación del Tema 27.` }],
  /* ---------- Tema 31 ---------- */
  [`El grupo carboxilo`]:[
    { tipo:`falta`, pg:`pág. 2`, que:`Derivados de los ácidos`, dice:`Se nombran en los objetivos, pero no se desarrollan`, ok:`Se forman al cambiar el −OH: ésteres (−OR), amidas (−NH₂), cloruros de ácido (−Cl) y anhídridos`, por:`Complemento [5].` }],
  [`Reacciones de acidez`]:[
    { tipo:`error`, pg:`pág. 7`, que:`Dibujo de la disociación`, dice:`CH₃−COOH + H₂O ⇌ CH₃−COOH + H₃O⁺`, ok:`CH₃−COOH + H₂O ⇌ CH₃−COO⁻ + H₃O⁺`, por:`Al ceder el H⁺ queda el ion acetato.` }],
  [`Ácidos dicarboxílicos`]:[
    { tipo:`error`, pg:`pág. 10`, que:`Título de la diapositiva`, dice:`"Ácidos Monocarboxílicos"`, ok:`Ácidos dicarboxílicos`, por:`La diapositiva trata de ácidos con dos −COOH.` }],
  [`Ácidos carboxílicos en medicina`]:[
    { tipo:`falta`, pg:`pág. 12`, que:`Metabolitos`, dice:`La diapositiva está cortada: "Metabolitos como el ácido…"`, ok:`Ejemplos complementarios: ácido láctico, pirúvico y cítrico. Confírmalo con el docente`, por:`Complemento [4].` }]
};
/* Los paquetes de material nuevos pueden traer sus propias correcciones: registerPack({ …, ERRATA:{ título:[…] } }) */
if (typeof PK !== `undefined`) Object.values(PK.list || {}).forEach(p => { if (p && p.ERRATA) Object.assign(ERRATA, p.ERRATA); });

const ERR_TIPO = { error:[`✕ El material dice`, `✓ Lo correcto`], falta:[`… Falta en el material`, `+ Complemento`], aviso:[`⚠ El material se contradice`, `→ Qué seguir`] };
const errOf = title => ERRATA[title] || null;
const errTema = t => ALL.REPASO.filter(x => x.t === t && ERRATA[x.title]);
const errCount = t => errTema(t).reduce((n, x) => n + ERRATA[x.title].length, 0);
function errFrase(n, list){
  const e = list.filter(x => x.tipo === `error`).length, f = list.filter(x => x.tipo === `falta`).length, a = n - e - f;
  const p = []; if (e) p.push(e === 1 ? `1 error` : `${e} errores`); if (f) p.push(f === 1 ? `1 parte incompleta` : `${f} partes incompletas`); if (a) p.push(a === 1 ? `1 contradicción` : `${a} contradicciones`);
  return `El material tiene ${p.join(` y `)} en esta ficha y ya ${n === 1 ? `está corregido` : `están corregidos`}`;
}
function errItem(e){
  const [kd, ko] = ERR_TIPO[e.tipo] || ERR_TIPO.error;
  return `<div class="errpar"><div class="errbad"><span class="k">${kd}</span>${e.dice}</div><div class="errok"><span class="k">${ko}</span>${e.ok}</div></div>${e.por ? `<p class="errpor"><b>Por qué:</b> ${e.por}</p>` : ``}`;
}
/* Franja sobre el texto de la ficha (opción C) */
function errBanner(it){
  const L = errOf(it.title); if (!L) return null;
  const b = el(`button`, `errban`); b.type = `button`;
  b.innerHTML = `<span class="erbi">⚠</span><span class="erbt">${errFrase(L.length, L)}</span><span class="erbv">Ver</span>`;
  b.onclick = () => errModal(it); return b;
}
let ERRX = null, errJump = null;
function errClose(){ const r = $(`#errroot`); if (r) r.remove(); document.removeEventListener(`keydown`, errKey); const f = ERRX; ERRX = null; if (f && f.isConnected) try { f.focus({ preventScroll:true }); } catch(e){} }
function errKey(ev){ if (ev.key === `Escape`) errClose(); }
function errOpen(cls, label, html, wire){
  errClose(); ERRX = document.activeElement;
  const r = el(`div`); r.id = `errroot`; const sc = el(`div`, `errscrim`); sc.onclick = errClose;
  const d = el(`div`, cls); d.setAttribute(`role`, `dialog`); d.setAttribute(`aria-modal`, `true`); d.setAttribute(`aria-label`, label);
  d.innerHTML = html; r.append(sc, d); document.body.append(r);
  d.querySelectorAll(`[data-x]`).forEach(b => b.onclick = errClose); if (wire) wire(d);
  document.addEventListener(`keydown`, errKey); setTimeout(() => { const f = d.querySelector(`button`); if (f) f.focus({ preventScroll:true }); }, 30);
}
/* Ventana centrada de la ficha (opción A) */
function errModal(it){
  const L = errOf(it.title); if (!L) return; const n = errCount(it.t);
  errOpen(`errmod`, `Corrección del material`, `<div class="errh"><h3>⚠ Corrección del material</h3><button class="xbtn" data-x aria-label="Cerrar">×</button></div>
    <p class="errsub">${TOPICS[it.t].n} · ${it.title}</p>
    ${L.map(e => `<div class="erre"><p class="errpg">${e.pg[0].toUpperCase() + e.pg.slice(1)} · ${e.que}</p>${errItem(e)}</div>`).join(``)}
    ${n > L.length ? `<button class="btn ghost errall" data-all>Ver todas las correcciones del ${TOPICS[it.t].n} (${n})</button>` : ``}`,
    d => { const a = d.querySelector(`[data-all]`); if (a) a.onclick = () => errPanel(it.t, it.title); });
}
/* Panel lateral con todo el tema (opción C del panel) */
function errPanel(t, cur){
  const fs = errTema(t), tema = ALL.REPASO.filter(x => x.t === t);
  fs.sort((a, b) => (b.title === cur) - (a.title === cur) || tema.indexOf(a) - tema.indexOf(b));
  errOpen(`errpanel`, `Correcciones del ${TOPICS[t].n}`, `<div class="errh"><h3>⚠ Correcciones · ${TOPICS[t].n}</h3><button class="xbtn" data-x aria-label="Cerrar">×</button></div>
    <p class="errsub">Lo que el material tiene mal o incompleto, y cómo quedó corregido en el Repaso.</p>
    ${fs.map(x => `<div class="erritem${x.title === cur ? ` cur` : ``}"><div class="errtop"><span class="errtag">${x.title === cur ? `Esta ficha` : `Ficha ${tema.indexOf(x) + 1}`} · ${ERRATA[x.title].map(e => e.pg).filter((v, i, a) => a.indexOf(v) === i).join(`, `)}</span>${x.title === cur ? `` : `<button class="btn ghost errgo" data-go="${tema.indexOf(x)}">Ir a la ficha</button>`}</div>
      <p class="errti">${x.title}</p>${ERRATA[x.title].map(e => `<p class="errpg">${e.que}</p>${errItem(e)}`).join(``)}</div>`).join(``)}`,
    d => d.querySelectorAll(`[data-go]`).forEach(b => b.onclick = () => { const x = tema[+b.dataset.go]; errClose(); if (typeof errJump === `function`) errJump(x); }));
}
