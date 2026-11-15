/* «Explícalo de otra forma» · Tema 19: teorías ácido-base y Kw */
Object.assign(OTRA, {
[`Teoría de Arrhenius (1884)`]:{
  pre:[`El amoníaco (NH₃) vuelve azul el tornasol, pero no tiene ningún OH en su fórmula. Según «base = libera OH⁻», ¿es base?`,`Arrhenius no puede explicarlo: esa es su limitación. Por eso hicieron falta teorías más amplias.`],
  idea:`Arrhenius es la teoría <b>«en agua»</b>: ácido libera <b>H⁺</b> en agua; base libera <b>OH⁻</b> en agua. Simple, pero <b>estrecha</b>.`,
  por:[`HCl → H⁺ + Cl⁻ (ácido). NaOH → Na⁺ + OH⁻ (base).`,
    `Neutralización: H⁺ + OH⁻ → H₂O; ácido + base → sal + agua.`,
    `Limitaciones: solo en agua, y no explica bases sin OH⁻ como el NH₃.`],
  ojo:`Para Arrhenius la base <b>tiene</b> OH⁻ en su fórmula y lo libera en agua.`,
  prueba:[[`¿Por qué Arrhenius no clasifica al NH₃ como base?`,`Porque no tiene OH⁻ que liberar.`]]
},
[`Teoría de Brønsted-Lowry (1923)`]:{
  pre:[`En NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, ¿quién le pasa un H⁺ a quién?`,`El agua le da un H⁺ al NH₃. El agua actúa como ácido y el NH₃ como base.`],
  idea:`Ácido y base se definen por un <b>pase de protón</b>: el ácido <b>da</b> H⁺, la base lo <b>recibe</b>. Ya no hace falta agua ni OH⁻.`,
  por:[`Pares conjugados: el ácido, al dar su H⁺, queda como su <b>base conjugada</b> (un H menos). La base, al recibirlo, queda como su <b>ácido conjugado</b> (un H más).`,
    `Método rápido: compara cada especie de la izquierda con la de la derecha. ¿Perdió un H? Era ácido. ¿Ganó un H? Era base.`,
    `NH₃ → NH₄⁺ (ganó H: base). H₂O → OH⁻ (perdió H: ácido).`],
  ojo:`Frase modelo del Lab 2: «Arrhenius: libera OH⁻ en agua; Brønsted-Lowry: acepta H⁺».`,
  prueba:[[`¿Cuál es la base conjugada del H₂PO₄⁻?`,`HPO₄²⁻ (un H menos).`],[`¿Cuál es el ácido conjugado del NH₃?`,`NH₄⁺ (un H más).`]]
},
[`Teoría de Lewis (1923)`]:{
  pre:[`El BF₃ no tiene H⁺ que dar, pero reacciona con NH₃. Si no hay protones, ¿qué se están pasando?`,`Un par de electrones: el N del NH₃ se lo da al B, que tiene un hueco.`],
  idea:`Lewis mira <b>electrones</b>, no protones: base <b>dona un par</b> de electrones; ácido <b>acepta un par</b> (tiene un «hueco», un orbital vacío).`,
  por:[`Base de Lewis: algo con pares libres (NH₃, H₂O, OH⁻, Cl⁻).`,
    `Ácido de Lewis: algo con hueco (BF₃, AlCl₃, H⁺, cationes metálicos como Cu²⁺).`,
    `Forman un enlace covalente coordinado: los dos electrones los pone la base.`],
  ojo:`Ojo con la dirección: el ácido de Lewis <b>acepta</b> electrones (no los da).`,
  prueba:[[`¿El Cu²⁺ es ácido o base de Lewis?`,`Ácido: tiene orbitales vacíos y acepta pares.`]]
},
[`Comparación de las tres teorías`]:{
  pre:[`Si las tres teorías fueran círculos, ¿cuál contendría a las otras dos?`,`Lewis: es la más amplia. Todo ácido de Arrhenius es de Brønsted, y todo Brønsted cabe en Lewis.`],
  idea:`Cada teoría <b>amplía</b> a la anterior: Arrhenius (H⁺/OH⁻ en agua) ⊂ Brønsted (pase de H⁺) ⊂ Lewis (pase de par de electrones).`,
  por:[`Arrhenius: solo agua.`,
    `Brønsted: cualquier solvente; explica el NH₃.`,
    `Lewis: incluye sustancias sin H, como BF₃ o metales.`],
  ojo:`Pregunta típica: «¿cuál es la diferencia fundamental?». Responde con lo que cada una amplía.`,
  prueba:[[`¿Qué teoría explica que el BF₃ sea ácido?`,`Lewis.`]]
},
[`Autoionización del agua y Kw`]:{
  pre:[`Si en el agua pura se forman H⁺ y OH⁻ a partir de la misma molécula, ¿cuál hay en mayor cantidad?`,`Ninguno: se forman en cantidades iguales (10⁻⁷ M cada uno a 25 °C).`],
  idea:`[H⁺] × [OH⁻] = <b>10⁻¹⁴ siempre</b> (a 25 °C). Son como un <b>sube y baja</b>: si uno sube, el otro baja para que el producto no cambie.`,
  por:[`Agua pura: 10⁻⁷ × 10⁻⁷ = 10⁻¹⁴ → neutra, pH 7.`,
    `Si [H⁺] = 10⁻³, entonces [OH⁻] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹.`,
    `En exponentes: los de [H⁺] y [OH⁻] siempre suman −14.`],
  ojo:`Con potencias de 10 se dividen restando exponentes: 10⁻¹⁴ / 10⁻³ = 10⁻¹¹.`,
  prueba:[[`[OH⁻] = 10⁻⁵ M. ¿[H⁺]?`,`10⁻⁹ M.`]]
},
[`Escala de pH y clasificación de soluciones`]:{
  pre:[`¿Qué número es más grande: 10⁻³ o 10⁻⁵? ¿Cuál de esas [H⁺] es más ácida?`,`10⁻³ es mayor (0.001 > 0.00001). Más H⁺ → más ácida, y su pH (3) es menor.`],
  idea:`pH es el <b>exponente sin signo</b> de [H⁺]: [H⁺] = 10⁻ˣ → pH = x. Escala <b>inversa</b>: más H⁺ → pH <b>más bajo</b>.`,
  por:[`Ácida: [H⁺] > 10⁻⁷ → pH < 7. Neutra: = 10⁻⁷ → pH 7. Básica: [H⁺] < 10⁻⁷ → pH > 7.`,
    `Cada unidad de pH es 10 veces más (o menos) H⁺: pH 3 tiene 10 veces más H⁺ que pH 4.`,
    `pH + pOH = 14.`],
  ojo:`Exponente más negativo = número más pequeño. 10⁻⁵ es menor que 10⁻³.`,
  prueba:[[`[H⁺] = 10⁻⁴ M: ¿pH y tipo de solución?`,`pH 4, ácida.`],[`En la zona básica, ¿cómo son [H⁺] y [OH⁻]?`,`[H⁺] menor y [OH⁻] mayor.`]]
},
[`Principio de Le Chatelier`]:{
  pre:[`Un sistema en equilibrio es como alguien a quien empujas: ¿hacia dónde se mueve?`,`En contra del empujón, para compensarlo.`],
  idea:`Si perturbas un equilibrio, el sistema <b>se mueve para contrarrestar</b> el cambio. Agregas algo → lo consume. Quitas algo → lo repone.`,
  por:[`Agregas ácido (↑ H⁺): el equilibrio del agua consume H⁺ y OH⁻ para formar H₂O → [OH⁻] baja.`,
    `Agregas base (↑ OH⁻): pasa al revés → [H⁺] baja.`,
    `Temperatura: la autoionización absorbe calor; al calentar, se ioniza más el agua (Kw sube).`,
    `Es la idea que explica cómo funcionan los buffers (Tema 21).`],
  ojo:`El equilibrio «se opone» al cambio, pero no lo anula del todo.`,
  prueba:[[`Si agregas HCl al agua, ¿qué pasa con [OH⁻]?`,`Disminuye.`]]
}
});
(() => { const { T, svg, ln, hl, sep, fig, G, R, set, flow, cmp, scale } = OTRAH; const P = `var(--t19)`;
  set(`Teoría de Arrhenius (1884)`, [fig(cmp([`Ácido (en agua)`, `libera H⁺`, `HCl → H⁺ + Cl⁻`], [`Base (en agua)`, `libera OH⁻`, `NaOH → Na⁺ + OH⁻`], { cl:R, cr:G, foot:`límite: no explica el NH₃ (no tiene OH)`, label:`Arrhenius` }), `Todo ocurre en agua y la base tiene que traer su propio OH⁻.`)]);
  set(`Teoría de Brønsted-Lowry (1923)`, [fig(svg(560, 170, T(70, 60, `NH₃`, { c:`tk`, fs:22 }) + T(140, 60, `+`, { c:`tk` }) + T(200, 60, `H₂O`, { c:`tk`, fs:22 }) + T(280, 60, `⇌`, { c:`tk`, fs:22 }) + T(360, 60, `NH₄⁺`, { c:`tk`, fs:22 }) + T(430, 60, `+`, { c:`tk` }) + T(500, 60, `OH⁻`, { c:`tk`, fs:22 }) + `<path d="M200 76 Q140 120 78 76" class="ar" marker-end="url(#ah)" style="stroke:${R}"/>` + T(140, 128, `H⁺`, { c:`tb`, col:R }) + T(70, 98, `base`, { c:`tb`, col:G }) + T(200, 98, `ácido`, { c:`tb`, col:R }) + T(360, 98, `ác. conjugado`, { c:`tm` }) + T(500, 98, `base conjugada`, { c:`tm` }) + T(280, 160, `¿ganó un H? era base · ¿perdió un H? era ácido`, { c:`tb` }), `Pase de protón en Brønsted`), `La flecha roja es el H⁺ que pasa del agua al amoníaco.`)]);
  set(`Teoría de Lewis (1923)`, [fig(svg(560, 150, T(130, 70, `H₃N:`, { c:`tk`, fs:24 }) + `<path d="M160 60 Q230 20 300 60" class="ar" marker-end="url(#ah)" style="stroke:${G}"/>` + T(230, 30, `par de e⁻`, { c:`tb`, col:G }) + T(350, 70, `BF₃`, { c:`tk`, fs:24 }) + `<rect x="385" y="48" width="26" height="26" rx="4" class="dash"/>` + T(398, 92, `hueco`, { c:`tm`, fs:11 }) + T(130, 110, `base: dona el par`, { c:`tb` }) + T(370, 110, `ácido: acepta el par`, { c:`tb` }) + T(280, 142, `forman un enlace coordinado`, { c:`tm` }), `Ácido y base de Lewis`), `La base pone los dos electrones del enlace.`)]);
  set(`Comparación de las tres teorías`, [fig(svg(560, 210, `<ellipse cx="280" cy="110" rx="260" ry="95" style="fill:${P};opacity:.12;stroke:${P}"/><ellipse cx="240" cy="120" rx="170" ry="66" style="fill:${P};opacity:.16;stroke:${P}"/><ellipse cx="200" cy="130" rx="90" ry="38" style="fill:${P};opacity:.22;stroke:${P}"/>` + T(200, 134, `Arrhenius`, { c:`tb` }) + T(350, 120, `Brønsted-Lowry`, { c:`tb` }) + T(470, 82, `Lewis`, { c:`tb` }) + T(200, 152, `H⁺/OH⁻ en agua`, { c:`tm`, fs:11 }) + T(350, 138, `pase de H⁺`, { c:`tm`, fs:11 }) + T(470, 100, `pase de e⁻`, { c:`tm`, fs:11 }), `Teorías como círculos`), `Cada teoría contiene a la anterior y la amplía.`)]);
  set(`Autoionización del agua y Kw`, [fig(svg(560, 170, `<polygon points="280,120 265,145 295,145" style="fill:var(--muted)"/>` + `<line x1="110" y1="140" x2="450" y2="100" class="s" style="stroke-width:4"/>` + T(130, 120, `[H⁺] = 10⁻³`, { c:`tb`, col:R }) + T(440, 82, `[OH⁻] = 10⁻¹¹`, { c:`tb`, col:G }) + T(280, 30, `[H⁺] × [OH⁻] = 10⁻¹⁴ siempre`, { c:`tb`, fs:15 }) + T(280, 166, `si uno sube, el otro baja (exponentes que suman −14)`, { c:`tm` }), `Sube y baja del agua`), `Un sube y baja: el producto de los dos siempre es 10⁻¹⁴.`)]);
  set(`Escala de pH y clasificación de soluciones`, [fig(scale([[`ácida`, 7, R, `[H⁺] > 10⁻⁷`], [`básica`, 7, G, `[H⁺] < 10⁻⁷`]], { ticks:[[0, `0`], [3 / 14, `3`], [.5, `7`], [11 / 14, `11`], [1, `14`]], foot:`más H⁺ → pH más bajo (escala inversa)`, label:`Escala de pH` }), `pH = exponente sin signo de [H⁺] cuando es 1 × 10⁻ˣ.`)]);
  set(`Principio de Le Chatelier`, [fig(flow([[`Equilibrio`, `H₂O ⇌ H⁺ + OH⁻`], [`+ ácido`, `↑ H⁺`, R], [`Se desplaza`, `forma H₂O|(consume H⁺)`], [`Resultado`, `↓ OH⁻`, G]], { label:`Le Chatelier al agregar ácido` }), `El sistema se mueve para gastar lo que le agregaste.`)]);
})();
