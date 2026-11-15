/* «Explícalo de otra forma» · Temas 17 y 18: dilución, coligativas y generalidades ácido-base */
Object.assign(OTRA, {
[`Preparación de soluciones por dilución`]:{
  pre:[`Tienes medio vaso de jugo concentrado y le agregas agua hasta llenarlo. ¿Cambió la cantidad de jugo que hay en el vaso?`,`No: el jugo es el mismo; solo se repartió en más volumen y quedó más «aguado».`],
  idea:`Al diluir, los <b>moles de soluto no cambian</b>: solo se reparten en más volumen. Por eso <b>C₁V₁ = C₂V₂</b> (moles antes = moles después).`,
  por:[`C × V = moles (M × L = mol). Si los moles se conservan, el producto se conserva.`,
    `Más volumen → menor concentración, en la misma proporción: si duplicas el volumen, la concentración baja a la mitad.`,
    `C₁ y V₁ son de la solución <b>madre</b> (stock); C₂ y V₂, de la que quieres preparar.`],
  ojo:`Diluir: n se conserva, V ↑, C ↓. En el Parcial 2 Gaby eligió lo contrario.`,
  prueba:[[`Al diluir una solución, ¿qué pasa con los moles de soluto?`,`Se mantienen constantes.`],[`Si a 100 mL de NaCl 2 M le agregas agua hasta 400 mL, ¿qué concentración queda?`,`0.5 M (volumen × 4 → concentración ÷ 4).`]]
},
[`Las cuatro reglas de la dilución`]:{
  pre:[`Para preparar 600 mL de una solución 1.6 M a partir de un stock 4.5 M, ¿cuánto stock tomarás: más o menos de 600 mL?`,`Menos: del stock siempre se toma menos que el volumen final. (Son 213 mL.)`],
  idea:`Después de calcular, verifica con dos flechas: <b>C₁ > C₂</b> y <b>V₁ < V₂</b>. Si no se cumplen, intercambiaste los datos.`,
  por:[`El stock es la solución <b>concentrada</b> (C₁ mayor).`,
    `De ella tomas una porción <b>pequeña</b> (V₁ menor) y la completas con solvente hasta V₂.`,
    `Solvente que agregas = V₂ − V₁.`,
    `Unidades iguales en los dos lados: M con M, mL con mL.`],
  ojo:`Error del Lab 2: 1 687 mL de stock para 600 mL finales. Es imposible: V₁ no puede superar a V₂.`,
  prueba:[[`Stock 4.5 M, quieres 600 mL de 1.6 M. ¿V₁?`,`V₁ = 1.6 × 600 / 4.5 = 213.3 mL.`],[`¿Cuánta agua agregas en ese caso?`,`600 − 213.3 = 386.7 mL.`]]
},
[`Propiedades coligativas`]:{
  pre:[`¿Por qué se echa sal a las calles con hielo en países fríos?`,`Porque la sal disuelta baja el punto de congelación del agua: el hielo se derrite aunque haga frío.`],
  idea:`Las partículas de soluto «estorban» al solvente: le cuesta más <b>evaporarse</b> (↓ presión de vapor, ↑ ebullición), más <b>congelarse</b> (↓ congelación) y empujan el paso de agua a través de membranas (presión osmótica).`,
  por:[`Solo importa <b>cuántas</b> partículas hay, no cuáles.`,
    `Factor i (van 't Hoff): NaCl → Na⁺ + Cl⁻ = 2 partículas (i = 2). CaCl₂ → 3. Glucosa no se disocia: i = 1.`,
    `Por eso 1 mol de NaCl tiene el doble de efecto que 1 mol de glucosa.`],
  ojo:`Con soluto: hierve a <b>más</b> temperatura y congela a <b>menos</b>. Las dos flechas van en sentidos opuestos.`,
  prueba:[[`¿Qué tiene más efecto coligativo: 1 mol de glucosa o 1 mol de NaCl?`,`El NaCl (2 partículas por fórmula).`]]
},
[`Tonicidad y eritrocitos`]:{
  pre:[`El agua se mueve hacia donde hay más partículas disueltas. Si pones un eritrocito en agua destilada, ¿hacia dónde va el agua?`,`Hacia adentro del eritrocito (adentro hay más partículas). Se hincha y revienta: hemólisis.`],
  idea:`<b>El agua va hacia donde hay más soluto.</b> Con esa sola regla deduces los tres casos: isotónico (igual), hipotónico (afuera menos soluto) e hipertónico (afuera más soluto).`,
  por:[`Isotónico (NaCl 0.9 %): igual adentro y afuera → no hay flujo neto → forma normal.`,
    `Hipotónico (agua destilada): afuera hay menos soluto → el agua entra → <b>hemólisis</b>.`,
    `Hipertónico (NaCl 3 %): afuera hay más soluto → el agua sale → <b>crenación</b> (se arruga).`,
    `Por eso los glóbulos rojos se lavan y suspenden en salina 0.9 %.`],
  ojo:`«Hipo» = afuera hay menos soluto → la célula se llena. «Hiper» = afuera hay más → se vacía.`,
  prueba:[[`¿Qué le pasa a un eritrocito en NaCl 3 %?`,`Crenación: pierde agua y se arruga.`],[`¿Qué solución es isotónica con la sangre?`,`NaCl 0.9 % (suero fisiológico).`]]
},
[`Homeostasis y equilibrio`]:{
  pre:[`Afuera hace 35 °C o 15 °C, y tu temperatura sigue cerca de 37 °C. ¿Cómo se llama esa capacidad?`,`Homeostasis.`],
  idea:`<b>Homeostasis</b> = mantener estable el medio interno. No es algo fijo: los valores <b>oscilan dentro de un rango</b>, y ese rango es lo que el laboratorio reporta como «valores de referencia».`,
  por:[`Se controlan: temperatura, pH, glucosa, agua y electrolitos.`,
    `Los buffers y los mecanismos de compensación (respiración, riñón) son <b>herramientas</b> de la homeostasis, no la homeostasis misma.`,
    `Equilibrio dinámico: los valores suben y bajan, pero se corrigen.`],
  ojo:`Pregunta del Parcial 2: la definición es «homeostasis», no «equilibrio» ni «sistema buffer».`,
  prueba:[[`¿El sistema buffer es la homeostasis?`,`No: es uno de los mecanismos que la mantienen.`]]
},
[`Conductividad eléctrica`]:{
  pre:[`En un cable la corriente viaja por electrones. En el agua salada, ¿qué crees que la transporta?`,`Iones en movimiento (Na⁺ y Cl⁻).`],
  idea:`Una solución conduce si tiene <b>iones libres</b>. <b>Sin iones, no hay corriente.</b>`,
  por:[`Cationes (+) viajan hacia un polo y aniones (−) hacia el otro: ese movimiento es la corriente.`,
    `Más iones → más conducción.`,
    `Los electrodos del laboratorio (electrolitos, pH) se basan en esto.`],
  ojo:`El agua pura casi no conduce: lo que conduce son los iones disueltos.`,
  prueba:[[`¿Por qué el agua azucarada no conduce?`,`Porque el azúcar se disuelve sin formar iones.`]]
},
[`Electrolitos fuertes, débiles y no electrolitos`]:{
  pre:[`El etanol se disuelve en agua. ¿Se separa en iones?`,`No: es covalente y se disuelve como moléculas enteras. Es un no electrolito.`],
  idea:`Pregunta: <b>¿cuántos iones libera en agua?</b> Todos → fuerte · algunos → débil · ninguno → no electrolito.`,
  por:[`Fuerte (100 %): NaCl, HCl, NaOH → conducen mucho.`,
    `Débil (parcial, ⇌): ácido acético, NH₃ → conducen poco.`,
    `No electrolito (0 iones): sacarosa, glucosa, etanol, urea → no conducen.`],
  ojo:`«Débil» no significa «sin iones». El etanol no es electrolito débil: no es electrolito.`,
  prueba:[[`¿Qué tipo de electrolito es el etanol?`,`No electrolito.`],[`¿Y el ácido acético?`,`Débil.`]]
},
[`Definiciones operacionales de ácido y base`]:{
  pre:[`Sin saber nada de moléculas, ¿cómo distinguirías un ácido de una base en el laboratorio?`,`Por lo que se observa: sabor (ácido agrio, base amarga), tacto jabonoso de la base, color de indicadores y pH.`],
  idea:`Operacional = <b>lo que ves y mides</b>, no la teoría. Ácido: agrio, pH < 7, tornasol a rojo. Base: amarga, jabonosa, pH > 7, tornasol a azul, fenolftaleína a fucsia.`,
  por:[`Tornasol: el ácido lo vuelve <b>rojo</b> y la base lo vuelve <b>azul</b>. Truco: «b<b>A</b>se → <b>A</b>zul».`,
    `Fenolftaleína: incolora en ácido y neutro, <b>fucsia en base</b>.`,
    `Ácido + metal activo (Zn, Mg) → burbujas de H₂.`],
  ojo:`Error del Lab: NaOH + fenolftaleína no queda incoloro, queda fucsia.`,
  prueba:[[`¿De qué color queda la fenolftaleína con NaOH?`,`Rosa o fucsia.`],[`¿Qué sabor tiene una base?`,`Amargo.`]]
},
[`Indicadores ácido-base`]:{
  pre:[`Un indicador es un ácido débil cuya forma con H⁺ tiene un color y sin H⁺ otro. Si agregas base, ¿qué forma predomina?`,`La forma sin H⁺ (In⁻): se ve el color básico.`],
  idea:`HIn (color ácido) ⇌ H⁺ + In⁻ (color básico). <b>Mucho H⁺</b> → domina HIn · <b>poco H⁺</b> → domina In⁻. En el intervalo de viraje se ve la mezcla.`,
  por:[`Cada indicador cambia de color en un rango de pH distinto: se elige según el pH que quieras detectar.`,
    `Fenolftaleína: vira alrededor de pH 8.2–10 (de incolora a fucsia).`,
    `Naranja de metilo: vira en medio ácido (≈ 3–4.4, de rojo a amarillo).`],
  ojo:`Antes del intervalo: color ácido. Después: color básico.`,
  prueba:[[`Si agregas ácido a un indicador, ¿qué forma predomina?`,`HIn (la forma ácida).`]]
},
[`Cómo se mide el pH en el laboratorio`]:{
  pre:[`¿Medirías el pH de la sangre de un paciente con papel indicador?`,`No: el pH de un paciente se mide con gasometría arterial.`],
  idea:`Elige el método según <b>qué muestra</b> y <b>qué precisión</b>: tiras (aproximado), pHmetro (soluciones, preciso), tira de orina (uroanálisis), <b>gasómetro</b> (sangre del paciente).`,
  por:[`Tira o papel: comparas colores; rápido pero aproximado.`,
    `pHmetro: electrodo con lectura digital; para soluciones y reactivos.`,
    `Gasómetro: pH, pCO₂ y pO₂ de sangre arterial a 37 °C. Referencia 7.35–7.45.`],
  ojo:`«pH de un paciente» = gasometría arterial (pregunta del Parcial 2).`,
  prueba:[[`¿Con qué se mide el pH de un paciente?`,`Con gasometría arterial.`],[`Un gasómetro da pH 7.45: ¿está dentro del rango?`,`Sí, en el límite superior (7.35–7.45).`]]
}
});
(() => { const { T, svg, ln, hl, sep, fig, G, R, set, flow, cmp, scale } = OTRAH; const P = `var(--t17)`, Q = `var(--t18)`;
  const vaso = (x, n, h, lab) => { let s = `<path d="M${x - 40} 20 L${x - 36} 130 L${x + 36} 130 L${x + 40} 20" class="s"/><rect x="${x - 36}" y="${130 - h}" width="72" height="${h}" style="fill:${P};opacity:.18"/>`;
    for (let i = 0; i < n; i++) s += `<circle cx="${x - 26 + (i % 4) * 17}" cy="${126 - h + 12 + Math.floor(i / 4) * (h / 3)}" r="4" style="fill:${R}"/>`; return s + T(x, 156, lab, { c:`tb` }); };
  set(`Preparación de soluciones por dilución`, [fig(svg(560, 170, vaso(130, 8, 40, `antes: 8 partículas en V₁`) + `<line x1="215" y1="90" x2="335" y2="90" class="ar" marker-end="url(#ah)"/>` + T(275, 80, `+ solvente`, { c:`tm` }) + vaso(420, 8, 100, `después: las mismas 8 en V₂`), `Dilución: los moles se conservan`), `Mismos puntos rojos (moles) repartidos en más volumen: la concentración baja.`)]);
  set(`Las cuatro reglas de la dilución`, [fig(cmp([`Stock (1)`, `C₁ = 4.5 M  (mayor)`, `V₁ = 213 mL  (menor)`], [`Final (2)`, `C₂ = 1.6 M  (menor)`, `V₂ = 600 mL  (mayor)`], { cl:R, cr:G, foot:`chequeo: C₁ > C₂ y V₁ < V₂`, label:`Chequeo de una dilución` }), `El problema del MgBr₂ del Lab 2, bien planteado.`)]);
  set(`Propiedades coligativas`, [fig(flow([[`Glucosa`, `1 partícula|i = 1`], [`NaCl`, `Na⁺ + Cl⁻|i = 2`, P], [`CaCl₂`, `Ca²⁺ + 2 Cl⁻|i = 3`, R]], { noArr:1, foot:`más partículas → más efecto coligativo`, label:`Factor de van t Hoff` }), `A igual cantidad de moles, el que se separa en más iones tiene más efecto.`)]);
  set(`Tonicidad y eritrocitos`, [fig(svg(560, 210, (() => { let s = ``; const cell = (x, rx, ry) => `<ellipse cx="${x}" cy="95" rx="${rx}" ry="${ry}" style="fill:${R};opacity:.35;stroke:${R};stroke-width:2"/>`;
    s += cell(95, 34, 22) + T(95, 30, `isotónico`, { c:`tb` }) + T(95, 160, `NaCl 0.9 %`, { c:`tm` }) + T(95, 180, `sin flujo neto`, { c:`tm` });
    s += cell(280, 44, 40) + T(280, 30, `hipotónico`, { c:`tb` }) + `<line x1="215" y1="95" x2="232" y2="95" class="ar" marker-end="url(#ah)"/><line x1="345" y1="95" x2="328" y2="95" class="ar" marker-end="url(#ah)"/>` + T(280, 160, `agua destilada`, { c:`tm` }) + T(280, 180, `el agua entra → hemólisis`, { c:`tb`, col:R });
    s += `<path d="M440 95 l10 -14 l12 10 l12 -12 l12 12 l12 -10 l10 14 l-10 14 l-12 -10 l-12 12 l-12 -12 l-12 10 z" style="fill:${R};opacity:.35;stroke:${R};stroke-width:2"/>` + T(465, 30, `hipertónico`, { c:`tb` }) + `<line x1="440" y1="95" x2="418" y2="95" class="ar" marker-end="url(#ah)"/><line x1="510" y1="95" x2="532" y2="95" class="ar" marker-end="url(#ah)"/>` + T(465, 160, `NaCl 3 %`, { c:`tm` }) + T(465, 180, `el agua sale → crenación`, { c:`tb` });
    return s + sep(187, 20, 190) + sep(373, 20, 190); })(), `Eritrocitos según la tonicidad`), `Las flechas muestran hacia dónde va el agua: siempre hacia donde hay más soluto.`)]);
  set(`Homeostasis y equilibrio`, [fig(svg(560, 150, `<rect x="20" y="40" width="520" height="50" style="fill:${G};opacity:.15"/>` + ln(20, 40, 540, 40, `dash`) + ln(20, 90, 540, 90, `dash`) + T(530, 34, `límite superior`, { c:`tm`, a:`end` }) + T(530, 106, `límite inferior`, { c:`tm`, a:`end` }) + `<polyline points="20,66 70,52 120,74 170,58 220,80 270,50 320,72 370,56 420,78 470,54 540,66" class="s" style="stroke:${Q};stroke-width:3"/>` + T(280, 138, `el valor oscila, pero se queda dentro del rango de referencia`, { c:`tb` }), `Equilibrio dinámico`), `Homeostasis: no es un valor fijo, sino un valor que se corrige dentro de un rango.`)]);
  set(`Conductividad eléctrica`, [fig(svg(560, 160, `<rect x="120" y="30" width="320" height="100" rx="8" style="fill:var(--t17);opacity:.12"/>` + ln(150, 20, 150, 120) + ln(410, 20, 410, 120) + T(150, 14, `−`, { c:`tk` }) + T(410, 14, `+`, { c:`tk` }) + [[240, 60, `Na⁺`, `left`], [340, 100, `Na⁺`, `left`], [215, 100, `Cl⁻`, `right`], [330, 60, `Cl⁻`, `right`]].map(([x, y, l, d]) => T(x, y + 5, l, { c:`tb`, col:d === `left` ? Q : R }) + `<line x1="${x + (d === `left` ? -18 : 18)}" y1="${y}" x2="${x + (d === `left` ? -42 : 42)}" y2="${y}" class="ar" marker-end="url(#ah)"/>`).join(``) + T(280, 152, `los iones se mueven hacia los polos: eso es la corriente`, { c:`tb` }), `Iones que conducen`), `Sin iones libres no hay nada que transporte la corriente.`)]);
  set(`Electrolitos fuertes, débiles y no electrolitos`, [fig(flow([[`Fuerte`, `100 % iones|NaCl, HCl`, Q], [`Débil`, `pocos iones (⇌)|ácido acético`], [`No electrolito`, `0 iones|etanol, glucosa`, R]], { noArr:1, h:84, foot:`conduce: mucho → poco → nada`, label:`Tipos de electrolitos` }), `La pregunta es cuántos iones libera.`)]);
  set(`Definiciones operacionales de ácido y base`, [fig(cmp([`Ácido`, `agrio · pH < 7`, `tornasol → ROJO`, `fenolftaleína: incolora`], [`Base`, `amarga, jabonosa · pH > 7`, `tornasol → AZUL`, `fenolftaleína: FUCSIA`], { cl:R, cr:Q, label:`Ácido frente a base` }), `Lo que se observa en el laboratorio.`)]);
  set(`Indicadores ácido-base`, [fig(scale([[`color ácido (HIn)`, 4, R], [`viraje`, 2, `var(--t20)`], [`color básico (In⁻)`, 4, Q]], { title:`pH →`, foot:`mucho H⁺ → HIn · poco H⁺ → In⁻`, label:`Viraje de un indicador` }), `Cada indicador tiene su propio intervalo de viraje.`)]);
  set(`Cómo se mide el pH en el laboratorio`, [fig(flow([[`Tira / papel`, `aproximado`], [`pHmetro`, `soluciones,|preciso`], [`Tira de orina`, `uroanálisis`], [`Gasómetro`, `sangre del|paciente`, Q]], { noArr:1, h:84, label:`Métodos para medir pH` }), `«pH de un paciente» → gasometría.`)]);
})();
