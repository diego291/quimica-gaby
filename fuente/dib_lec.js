/* ===================== DIBUJAR: LECCIONES ===================== */
const dibFig = (m, mode, cap, max) => `<figure class="dbfig">${dbSvg(m, { mode, max:max || 210 })}<figcaption>${cap}</figcaption></figure>`;
const dibTabla = (cab, filas) => `<div class="scroll"><table class="tbl"><thead><tr>${cab.map(c => `<th>${c}</th>`).join(``)}</tr></thead><tbody>${filas.map(f => `<tr>${f.map(c => `<td>${c}</td>`).join(``)}</tr>`).join(``)}</tbody></table></div>`;
const dibLista = (xs, ol) => `<${ol ? `ol` : `ul`} class="dblst">${xs.map(x => `<li>${x}</li>`).join(``)}</${ol ? `ol` : `ul`}>`;
const dibRegla = t => `<p class="dbgold"><b>Regla de oro:</b> ${t}</p>`;
const dibTrampa = xs => `<div class="dbtrap"><b>Trampas frecuentes</b>${dibLista(xs)}</div>`;

/* composiciones: átomos → iones (con flecha) */
function dibIonFig(it){
  const m = dbNew(), nC = it.c[2], nA = it.a[2], n = nC + nA, w = 62, x0 = 40;
  const lista = [].concat(Array(nC).fill(it.c), Array(nA).fill(it.a));
  lista.forEach(([el], k) => dbAdd(m, el, x0 + w * k, 130, { d:DB_EL[el].e }));
  const xf = x0 + w * (n - 1) + 52; m.txt = [{ x:xf, y:136, t:`→`, c:`dbflecha` }];
  lista.forEach(([el, q], k) => dbAdd(m, el, xf + 58 + w * k, 130, { q, d:q > 0 ? 0 : 8 }));
  return m;
}
/* tetraedro y pirámide con enlaces en cuña (hacia el frente) y punteados (hacia atrás) */
function dibCH4_3D(){
  const m = dbNew(), c = dbAdd(m, `C`, 180, 130, { d:0 }), h = (x, y) => dbAdd(m, `H`, x, y, { d:0 });
  dbBond(m, c, h(180, 70), 1); dbBond(m, c, h(132, 168), 1); dbBond(m, c, h(238, 108), 1, `w`); dbBond(m, c, h(222, 176), 1, `h`); return m;
}
function dibNH3_3D(){
  const m = dbNew(), n = dbAdd(m, `N`, 180, 100, { d:2 }), h = (x, y) => dbAdd(m, `H`, x, y, { d:0 });
  dbBond(m, n, h(130, 146), 1); dbBond(m, n, h(232, 146), 1); dbBond(m, n, h(184, 164), 1, `w`); return m;
}
function dibHClDimero(){
  const m = dbNew(), h1 = dbAdd(m, `H`, 60, 130, { d:0 }), c1 = dbAdd(m, `Cl`, 125, 130, { d:6 }), h2 = dbAdd(m, `H`, 235, 130, { d:0 }), c2 = dbAdd(m, `Cl`, 300, 130, { d:6 });
  dbBond(m, h1, c1, 1); dbBond(m, h2, c2, 1); m.dash = [{ a:c1, b:h2 }];
  m.txt = [{ x:60, y:104, t:`δ⁺`, c:`dbdel` }, { x:125, y:104, t:`δ⁻`, c:`dbdel` }, { x:235, y:104, t:`δ⁺`, c:`dbdel` }, { x:300, y:104, t:`δ⁻`, c:`dbdel` }, { x:180, y:122, t:`puente de H`, c:`dbpeq` }];
  return m;
}
function dibNumAnillo(subs, nums){
  const m = dbBenceno(subs), ring = m.atoms.slice(0, 6); m.txt = (m.txt || []).concat(ring.map((a, k) => ({ x:180 + (a.x - 180) * .62, y:130 + (a.y - 130) * .62 + 4, t:String(nums ? nums[k] : k + 1), c:`dbnum` }))); return m;
}
const dibMolFig = (k, cap, max) => { const it = DB_MOLK(k); return dibFig(dbMolDe(it), `lewis`, cap || `${it.f}: ${it.n}`, max); };
const dibHCFig = (n, cap, max) => dibFig(dbHCMol(DB_HC.find(x => x.n === n)), `esq`, cap || n, max);
const dibARFig = (n, cap, max) => dibFig(dbARMol(DB_AR.find(x => x.n === n)), `esq`, cap || n, max || 170);

const DIB_LES = [
  { id:`atomo`, n:`El símbolo de Lewis de un átomo`, cat:`atomo`, res:`Símbolo del elemento y un punto por cada electrón de valencia.`,
    html:() => `<p>Un <b>símbolo de Lewis</b> es el símbolo del elemento rodeado de puntos. Cada punto es un <b>electrón de valencia</b>, un electrón de la última capa. Los electrones internos no se dibujan.</p>
      ${dibLista([`Busca el <b>grupo</b> del elemento en la tabla periódica: el número del grupo (1A a 8A) es su número de electrones de valencia. El helio es la excepción: tiene 2.`, `Escribe el <b>símbolo</b> del elemento y revísalo: Mg (magnesio) no es Hg (mercurio).`, `Coloca los puntos <b>de uno en uno, un punto por lado</b>: arriba, derecha, abajo, izquierda.`, `Cuando ya hay un punto en cada lado (a partir del quinto electrón) empieza a formar <b>pares</b>.`, `Cuenta: los puntos deben ser iguales a los electrones de valencia.`], true)}
      <div class="dbrow">${[`Li`,`Be`,`B`,`C`,`N`,`O`,`F`,`Ne`].map(e => dibFig(dbAtomo(e), `lewis`, `${e}: ${DB_EL[e].e} e⁻ (${DB_GRUPO[DB_EL[e].e]})`, 135)).join(``)}</div>
      ${dibTrampa([`Los puntos son los electrones de <b>valencia</b>, no el número atómico.`, `No juntes los puntos en un solo lado: primero uno por lado.`])}
      ${dibRegla(`un punto por lado y, desde el quinto, pares.`)}` },
  { id:`ionico`, n:`Compuestos iónicos: de átomos a iones`, cat:`ionico`, res:`El metal cede, el no metal recibe; las cargas suman cero.`,
    html:() => `<p>Un compuesto iónico se forma cuando un <b>metal cede electrones a un no metal</b>. Los electrones se <b>transfieren</b>: el metal queda con carga positiva (catión) y el no metal con carga negativa (anión). Los iones de carga opuesta se atraen.</p>
      ${dibLista([`Dibuja el símbolo de Lewis de cada átomo (Li con 1 punto, F con 7).`, `El metal cede todos sus electrones de valencia: queda <b>sin puntos</b> y con carga positiva igual a los electrones cedidos (Li → Li⁺, Mg → Mg²⁺).`, `El no metal recibe electrones hasta tener <b>8 puntos</b> y queda con carga negativa (F → F⁻, O → O²⁻).`, `Ajusta la cantidad de iones para que las cargas <b>sumen cero</b>: MgCl₂ = 1 Mg²⁺ + 2 Cl⁻; Na₂O = 2 Na⁺ + 1 O²⁻.`, `Al disolverse en agua los iones se separan: MgCl₂ → Mg²⁺ + 2 Cl⁻.`], true)}
      <div class="dbrow">${dibFig(dibIonFig(DB_ION[0]), `lewis`, `LiF: Li cede 1 e⁻ y F lo recibe`, 330)}${dibFig(dibIonFig(DB_ION[5]), `lewis`, `MgCl₂: Mg cede 2 e⁻, uno a cada Cl`, 400)}</div>
      ${dibTrampa([`Cada cloruro es un ion independiente: <b>2 Cl⁻</b>, no “Cl₂⁻”.`, `El calcio cede 2 electrones: es <b>Ca²⁺</b>, no Ca⁺.`, `Un ion poliatómico como el carbonato (CO₃²⁻) es <b>covalente por dentro</b> y <b>iónico</b> con el calcio.`])}
      <div class="dbrow">${dibMolFig(`CO3`, `CO₃²⁻: covalente por dentro (el calcio lo enlaza de forma iónica)`, 190)}</div>
      ${dibRegla(`el metal cede y se queda sin puntos; el no metal recibe y queda con 8.`)}` },
  { id:`lewis`, n:`Enlace covalente: estructuras de Lewis paso a paso`, cat:`lewis`, res:`Cuenta electrones, completa octetos y verifica.`,
    html:() => `<p>En el <b>enlace covalente</b> los átomos <b>comparten</b> pares de electrones, normalmente entre no metales. Cada par compartido se dibuja como una línea (−) y los electrones que no se comparten, como puntos.</p>
      ${dibLista([`Suma los <b>electrones de valencia</b> de todos los átomos (si es un ion, suma uno por cada carga negativa y resta uno por cada positiva).`, `Elige el <b>átomo central</b> (el menos electronegativo; nunca el H) y únelo con los demás con enlaces sencillos.`, `Completa el <b>octeto</b> de los átomos de los lados con puntos (el H solo necesita 2).`, `Coloca los electrones que sobren en el átomo central.`, `Si al central le faltan electrones, forma <b>enlaces dobles o triples</b>. Verifica: cada átomo con 8 (el H con 2).`], true)}
      ${dibTabla([`Molécula`,`Electrones de valencia`,`Resultado`], [[`H₂O`, `6 + 2 × 1 = 8`, `dos enlaces sencillos y 2 pares libres en el O`], [`CO₂`, `4 + 2 × 6 = 16`, `dos dobles enlaces C=O`], [`N₂`, `2 × 5 = 10`, `un enlace triple N≡N`], [`NH₃`, `5 + 3 × 1 = 8`, `tres enlaces sencillos y 1 par libre en el N`], [`C₂H₄`, `2 × 4 + 4 × 1 = 12`, `un doble enlace C=C`]])}
      <div class="dbrow">${[`H2O`,`CO2`,`N2`,`NH3`,`C2H4`].map(k => dibMolFig(k, DB_MOLK(k).f, 215)).join(``)}</div>
      <p><b>Polaridad.</b> Si los dos átomos son distintos, el más electronegativo atrae más los electrones: el enlace es <b>covalente polar</b> (δ⁻ en el más electronegativo, δ⁺ en el otro). Entre átomos iguales es <b>no polar</b>. El <b>puente de hidrógeno</b> une el H (δ⁺) de una molécula con un átomo muy electronegativo (δ⁻) de otra, y se dibuja con una línea punteada.</p>
      <div class="dbrow">${dibFig(dibHClDimero(), `lewis`, `HCl: enlace polar y puente de hidrógeno entre dos moléculas`, 380)}</div>
      ${dibTrampa([`El eteno (C₂H₄) lleva el <b>doble enlace C=C</b> desde que se dibuja la formación del compuesto.`, `El hidrógeno solo comparte 1 par: nunca tiene puntos.`, `Marca siempre δ⁺ y δ⁻ cuando dibujes un puente de hidrógeno.`])}
      ${dibRegla(`cuenta electrones, completa octetos (H con 2) y verifica el total.`)}` },
  { id:`geo`, n:`Geometría molecular (RPECV)`, cat:`geo`, res:`Cuenta dominios: átomos enlazados + pares libres.`,
    html:() => `<p>La forma de una molécula depende de cuántos <b>dominios de electrones</b> rodean al átomo central. Cada átomo enlazado cuenta como <b>1 dominio</b> (da igual que el enlace sea sencillo, doble o triple) y cada <b>par libre</b> cuenta como 1. Los dominios se alejan lo más posible entre sí.</p>
      ${dibTabla([`Átomos enlazados`,`Pares libres`,`Geometría`,`Ángulo`,`Hibridación`,`Ejemplos`], [[`2`, `0`, `lineal`, `180°`, `sp`, `CO₂, C₂H₂, HCN`], [`3`, `0`, `trigonal plana`, `120°`, `sp²`, `BF₃, CH₂O, C₂H₄ (cada C)`], [`4`, `0`, `tetraédrica`, `109.5°`, `sp³`, `CH₄, CCl₄, NH₄⁺`], [`3`, `1`, `piramidal trigonal`, `≈ 107°`, `sp³`, `NH₃`], [`2`, `2`, `angular`, `≈ 104.5°`, `sp³`, `H₂O`]])}
      <div class="dbrow">${[`CO2`,`BF3`].map(k => dibMolFig(k, DB_MOLK(k).f, 215)).join(``)}${dibFig(dibCH4_3D(), `lewis`, `CH₄: tetraédrica (cuña = hacia ti, punteado = hacia atrás)`, 190)}${dibFig(dibNH3_3D(), `lewis`, `NH₃: piramidal trigonal`, 190)}${dibMolFig(`H2O`, `H₂O: angular`, 215)}</div>
      <p><b>Orden de repulsión:</b> par libre–par libre &gt; par libre–par enlazante &gt; enlazante–enlazante. Por eso el NH₃ (≈ 107°) y el H₂O (≈ 104.5°) tienen ángulos menores que 109.5°.</p>
      <p><b>Polaridad.</b> Una molécula es <b>polar</b> si tiene enlaces polares y su forma no los cancela (H₂O, NH₃). Si es simétrica los cancela y es <b>no polar</b> (CO₂, CH₄, BF₃, C₂H₄).</p>
      ${dibRegla(`primero cuenta los dominios del átomo central; la geometría, el ángulo y la hibridación salen de esa cuenta.`)}` },
  { id:`hc`, n:`Hidrocarburos: del nombre al dibujo`, cat:`hc`, res:`Raíz → carbonos, terminación → enlaces, números → posición.`,
    html:() => `${dibTabla([`Tipo`,`Fórmula general`,`Enlace`,`Hibridación`,`Geometría`,`Ángulo`], [[`alcano`, `CₙH₂ₙ₊₂`, `sencillo C−C`, `sp³`, `tetraédrica`, `109.5°`], [`alqueno`, `CₙH₂ₙ`, `doble C=C`, `sp²`, `trigonal plana`, `120°`], [`alquino`, `CₙH₂ₙ₋₂`, `triple C≡C`, `sp`, `lineal`, `180°`]])}
      <p>La hibridación y la geometría se miden <b>carbono por carbono</b>: en el 1-buteno los dos carbonos del doble enlace son sp² y los otros dos son sp³.</p>
      <p><b>Del nombre al dibujo:</b></p>
      ${dibLista([`La <b>raíz</b> dice cuántos carbonos tiene la cadena principal: met 1, et 2, prop 3, but 4, pent 5, hex 6, hept 7, oct 8.`, `La <b>terminación</b> dice los enlaces: <b>-ano</b> todos sencillos, <b>-eno</b> un doble, <b>-ino</b> un triple. El número antes de -eno o -ino indica en qué carbono empieza.`, `Numera la cadena desde el extremo que le dé el <b>número más bajo</b> al enlace múltiple (o a las ramificaciones).`, `Coloca los sustituyentes (metil, etil) en los carbonos que indican los números.`, `Completa con hidrógenos hasta que cada carbono tenga <b>4 enlaces</b> (en la fórmula esquelética no se dibujan).`], true)}
      <p>En la <b>fórmula esquelética</b> la cadena se dibuja en zigzag: cada vértice y cada extremo es un carbono y las ramas salen hacia arriba o hacia abajo. En la <b>fórmula semidesarrollada</b> cada carbono lleva sus hidrógenos (H = 4 − enlaces): <b>CH₃−CH₂−CH=CH₂</b>.</p>
      <div class="dbrow">${[`propano`,`2-metilpentano`,`1-buteno`,`2-butino`,`ciclohexano`].map(n => dibHCFig(n, ({ propano:`propano`, '2-metilpentano':`2-metilpentano`, '1-buteno':`1-buteno · CH₂=CH−CH₂−CH₃`, '2-butino':`2-butino · lineal (180°)`, ciclohexano:`ciclohexano` })[n], 235)).join(``)}</div>
      ${dibTrampa([`Los alquinos son <b>lineales</b>: C−C≡C−C va en línea recta.`, `Un carbono con un doble enlace y dos sencillos lleva <b>1 H</b>; con un triple y uno sencillo, 1 H; el CH₃ de un extremo lleva 3.`, `En el nombre, el número de la ramificación se cuenta desde el extremo que da el número más bajo al enlace múltiple.`])}
      ${dibRegla(`raíz = carbonos, terminación = enlaces, números = posiciones; cada carbono cierra 4 enlaces.`)}` },
  { id:`arom`, n:`Aromáticos: el benceno y sus derivados`, cat:`arom`, res:`Hexágono con círculo; sustituyentes hacia afuera; orto, meta, para.`,
    html:() => `<p>El <b>benceno</b> (C₆H₆) es un anillo plano de 6 carbonos sp² con ángulos de 120°. Sus electrones π están <b>deslocalizados</b>: por eso se dibuja un círculo dentro del hexágono. Cada vértice es un carbono con un H, salvo donde hay un sustituyente.</p>
      <div class="dbrow">${dibFig(dibNumAnillo({}), `esq`, `benceno C₆H₆`, 200)}${dibFig(dibNumAnillo({ 1:[`M`], 2:[`M`] }), `esq`, `orto: posiciones 1 y 2`, 215)}${dibFig(dibNumAnillo({ 1:[`M`], 3:[`M`] }), `esq`, `meta: posiciones 1 y 3`, 215)}${dibFig(dibNumAnillo({ 1:[`M`], 4:[`M`] }), `esq`, `para: posiciones 1 y 4`, 215)}</div>
      ${dibTabla([`Grupo`,`Nombre del grupo`,`Compuesto`], [[`−OH`, `hidroxilo`, `fenol`], [`−NH₂`, `amino`, `anilina`], [`−NO₂`, `nitro`, `nitrobenceno`], [`−COOH`, `carboxilo`, `ácido benzoico`], [`−SO₃H`, `sulfónico`, `ácido bencenosulfónico`], [`−CH₃`, `metilo`, `tolueno`], [`−F, −Cl, −Br, −I`, `halógenos`, `fluoro-, cloro-, bromo-, yodo-benceno`]])}
      <p><b>Numeración.</b> Si hay un grupo que da el nombre base (fenol, anilina, ácido benzoico, tolueno), ese grupo es el <b>carbono 1</b>. Si no, se usa el conjunto de números más bajo y los sustituyentes se nombran en <b>orden alfabético</b> (1-bromo-3,5-dimetilbenceno).</p>
      <div class="dbrow">${[`tolueno`,`fenol`,`ácido benzoico`,`2,4,6-trinitrotolueno (TNT)`,`1-bromo-3,5-dimetilbenceno`].map(n => dibARFig(n, n.replace(` (`, `<br>(`), 205)).join(``)}</div>
      ${dibTrampa([`<b>Orto, meta y para no son lo mismo</b>: cuenta las posiciones entre los dos sustituyentes (1,2 · 1,3 · 1,4).`, `En el TNT los tres NO₂ van en las posiciones 2, 4 y 6 respecto al CH₃.`, `Un anillo con enlaces sencillos (ciclohexano) <b>no</b> es benceno: falta el círculo.`])}
      ${dibRegla(`primero el anillo con su círculo y después cada sustituyente en su posición.`)}` },
  { id:`err`, n:`Errores frecuentes y cómo evitarlos`, cat:`mixto`, res:`Revisa esta lista antes de entregar un dibujo.`,
    html:() => `<p>Estos errores se repiten mucho al dibujar estructuras. Revísalos antes de comprobar:</p>
      ${dibTabla([`✗ Error`,`✓ Lo correcto`], [[`Escribir “Hg” en vez de Mg`, `Revisa que el símbolo sea el del elemento que te piden (Mg es magnesio).`], [`Cl₂⁻ o “un solo cloruro” en MgCl₂`, `Son <b>dos</b> iones Cl⁻ independientes, cada uno con 8 puntos.`], [`Ca⁺ o Mg⁺ en lugar de Ca²⁺, Mg²⁺`, `El metal cede <b>todos</b> sus electrones de valencia: la carga es la del número de e⁻ cedidos.`], [`Unir el calcio al carbonato con un enlace covalente`, `Ca²⁺ y CO₃²⁻ se unen de forma iónica; el covalente está dentro del carbonato.`], [`C₂H₄ sin doble enlace`, `Cada C comparte 2 pares con el otro C: C=C. Cada C queda con 8 electrones.`], [`Puntos sobre el hidrógeno`, `El H comparte su único electrón: no lleva puntos en una molécula.`], [`Alquino en zigzag`, `Los carbonos del triple enlace y sus vecinos van en línea recta (180°).`], [`Olvidar los H del CH₃ al escribir la fórmula`, `Cada carbono suma 4 enlaces: CH₃ (1 enlace), CH₂ (2), CH (3), C (4).`], [`Puente de hidrógeno sin δ⁺ y δ⁻`, `Marca el H δ⁺ y el átomo δ⁻ de la otra molécula y une con una línea punteada.`]])}
      ${dibRegla(`antes de entregar, cuenta: átomos, electrones (octeto) y cargas.`)}` }
];
