/* ===================== RETROALIMENTACIÓN: GENERADORES Y BANCO ===================== */

/* ---------- Generadores con las plantillas que el docente repite ---------- */
const RF_PM = { 'Ca(OH)₂':74, 'CaCO₃':100, 'H₂SO₄':98, 'Na₂CO₃':106, 'Al(OH)₃':78, 'H₃PO₄':98, 'Mg(OH)₂':58, 'NaOH':40, 'KOH':56, 'NaCl':58.5, 'Glucosa':180, 'Urea':60, 'KCl':74.5, 'HNO₃':63, 'HCl':36.5, 'HClO₄':100.5, 'HBr':81 };
GENS.push(
 {id:`dilDoc`,t:`t17`,src:`Parcial 2 (22 y 27) · Lab 2 (7)`,name:`Dilución estilo parcial (sal y stock)`,make(){
   const sal = pick([`NaBr`,`MgBr₂`,`KCl`,`NaNO₃`,`CaCl₂`,`KI`]);
   if (Math.random() < .5){
     const C1 = pick([3.5,4.5,5,6,2.5,8]); const C2 = pick([.5,.8,1.2,1.6,2,2.4].filter(x => x < C1)); const V2 = pick([250,300,400,500,600,750,1000]); const V1 = C2*V2/C1;
     return { q:`Se desea preparar ${V2} mL de una solución de ${sal} ${C2} M a partir de una solución stock ${C1} M. ¿Cuántos mililitros de stock se necesitan?`, unit:`mL`, ans:V1, rel:.02,
       pasos:[`Identifica los roles: stock → C₁ = ${C1} M; solución que se quiere → C₂ = ${C2} M y V₂ = ${V2} mL.`,`V₁ = C₂·V₂ / C₁ = ${C2} × ${V2} / ${C1} = ${nf(V1,1)} mL.`,`Prueba de sentido: V₁ (${nf(V1,1)} mL) < V₂ (${V2} mL) y C₂ < C₁ ✔. Si te sale V₁ > V₂, intercambiaste los datos.`], r:`${nf(V1,1)} mL de stock` };
   }
   const [V1, V2] = pick([[400,1200],[650,1500],[250,750],[300,900],[200,500],[500,1250]]); const C1 = pick([2,2.5,3.5,4,5]); const C2 = C1*V1/V2;
   return { q:`Se tienen ${V1} mL de una solución madre de ${sal} ${C1} M. Se le añade agua destilada hasta alcanzar un volumen final de ${V2} mL. Calcule la concentración molar final.`, unit:`M`, ans:C2, rel:.02,
     pasos:[`Datos: C₁ = ${C1} M, V₁ = ${V1} mL, V₂ = ${V2} mL.`,`C₂ = C₁·V₁ / V₂ = ${C1} × ${V1} / ${V2} = ${sci(C2,3)} M.`,`Prueba de sentido: C₂ < C₁ porque se diluyó ✔.`], r:`${sci(C2,3)} M` };
 }},
 {id:`normDoc`,t:`t16`,src:`Parcial 2 (26) · Lab 2 (6)`,name:`Normalidad estilo parcial`,make(){
   const [s, k] = pick([[`Ca(OH)₂`,2],[`CaCO₃`,2],[`H₂SO₄`,2],[`Na₂CO₃`,2],[`Al(OH)₃`,3],[`H₃PO₄`,3],[`Mg(OH)₂`,2],[`NaOH`,1]]);
   const PE = RF_PM[s]/k; const eq = pick([.25,.4,.5,.8,1,1.5,2]); const g = Math.round(eq*PE*10)/10; const [Vt, VL] = pick([[`2 litros`,2],[`700 mL`,.7],[`500 mL`,.5],[`1 litro`,1],[`250 mL`,.25]]);
   const n = g/PE, N = n/VL;
   return { q:`Determina la normalidad (N) de una disolución acuosa que contiene ${nf(g,1)} g de ${s} (PM ${RF_PM[s]}) disueltos en un volumen total de ${Vt}.`, unit:`N`, ans:N, rel:.02,
     pasos:[`Peso equivalente: Peq = PM ÷ n = ${RF_PM[s]} ÷ ${k} = ${nf(PE,2)} g/eq.`,`Equivalentes = masa ÷ Peq = ${nf(g,1)} g ÷ ${nf(PE,2)} g/eq = ${sci(n,3)} eq. (Ojo: ${nf(PE,2)} es la masa de UN equivalente, no el número de equivalentes.)`,`N = eq ÷ L = ${sci(n,3)} ÷ ${nf(VL,2)} L = ${sci(N,3)} N.`,`Control de unidades: g ÷ (g/eq) = eq; eq ÷ L = N ✔.`], r:`${sci(N,3)} N` };
 }},
 {id:`pctDoc`,t:`t16`,src:`Lab 2 (4) · Lab ác./bases (4 y 5)`,name:`% m/v, % v/v y preparación`,make(){
   const m = Math.floor(Math.random()*3);
   if (m === 0){ const p = pick([2.5,3.3,5,7,10]), V = pick([500,1000,1500,2300,2500]); const g = p*V/100;
     return { q:`Un paciente requiere recibir ${V} mL de una solución intravenosa de glucosa al ${p} % m/v. ¿Cuántos gramos de glucosa pura consumirá tras recibir el volumen total?`, unit:`g`, ans:g, rel:.02,
       pasos:[`${p} % m/v = ${p} g de soluto por cada 100 mL de solución.`,`Estimación: ${V} mL son ${nf(V/100,1)} bloques de 100 mL → unos ${nf(V/100*p,0)} g.`,`g = ${p} × ${V} ÷ 100 = ${nf(g,1)} g.`], r:`${nf(g,1)} g de glucosa` }; }
   if (m === 1){ const a = pick([20,25,35,40,60,75]), b = pick([480,500,600,750,960,1000]); const p = a/b*100;
     return { q:`Calcule el %v/v de una disolución que contiene ${a} mL de etanol (C₂H₅OH) disueltos en ${b} mL de disolución. (Redondea a 2 decimales.)`, unit:`%`, ans:+p.toFixed(2), abs:.005,
       pasos:[`%v/v = mL de soluto ÷ mL de disolución × 100.`,`= ${a} ÷ ${b} × 100 = ${p.toFixed(4)} %.`,`Redondeo a 2 decimales: ${p.toFixed(2)} % (se redondea, no se trunca).`], r:`${p.toFixed(2)} % v/v` }; }
   const p = pick([1.6,2.5,4,5,0.9]), V = pick([100,100,250,500]); const g = p*V/100, sv = V - g;
   return { q:`¿Cuántos mililitros de solvente (agua) se usan para preparar ${V} mL de una disolución acuosa al ${p} % p/v de sulfato de cobre II pentahidratado? (Convención del docente: mL de solvente = volumen de solución − gramos de soluto.)`, unit:`mL`, ans:sv, rel:.01,
     pasos:[`Gramos de soluto = ${p} × ${V} ÷ 100 = ${nf(g,2)} g.`,`mL de solvente = ${V} − ${nf(g,2)} = ${nf(sv,2)} mL.`,`Los ${V} mL son la solución final, no el solvente.`], r:`${nf(sv,2)} mL de agua (con ${nf(g,2)} g de soluto)` };
 }},
 {id:`molalDoc`,t:`t16`,src:`Parcial 2 (25)`,name:`Molalidad (moles por kg de solvente)`,make(){
   const s = pick([`NaOH`,`KOH`,`NaCl`,`Glucosa`,`Urea`,`KCl`]); const g = pick([10,15,20,25,30,40]); const gs = pick([200,250,400,500,800]);
   const n = g/RF_PM[s], m = n/(gs/1000);
   return { q:`Se disuelven ${g} g de ${s} (PM ${RF_PM[s]}) en ${gs} g de agua pura. Determine la molalidad (m) de la solución resultante.`, unit:`m`, ans:m, rel:.02,
     pasos:[`Moles de soluto = ${g} ÷ ${RF_PM[s]} = ${sci(n,3)} mol.`,`Kilogramos de solvente = ${gs} g = ${nf(gs/1000,3)} kg (el agua, no la solución).`,`m = ${sci(n,3)} ÷ ${nf(gs/1000,3)} = ${sci(m,3)} mol/kg.`], r:`${sci(m,3)} m` };
 }},
 {id:`baseDoc`,t:`t20`,src:`Parcial 2 (28)`,name:`pH y pOH de una base fuerte`,make(){
   const [s, k] = pick([[`hidróxido de bario [Ba(OH)₂]`,2],[`hidróxido de calcio [Ca(OH)₂]`,2],[`hidróxido de estroncio [Sr(OH)₂]`,2],[`hidróxido de sodio (NaOH)`,1],[`hidróxido de potasio (KOH)`,1],[`hidróxido de litio (LiOH)`,1]]);
   const M = pick([.005,.01,.025,.04,.05,.08,.1,.15]); const OH = k*M, pOH = -Math.log10(OH), pH = 14 - pOH; const ask = pick([`pH`,`pOH`]);
   return { q:`Calcule el ${ask} de una disolución acuosa ${M} M de ${s} a 25 °C.`, unit:``, ans:ask === `pH` ? pH : pOH, abs:.02,
     pasos:[`Es un hidróxido: una base fuerte que se disocia por completo.`,`[OH⁻] = ${k > 1 ? `${k} × ` : ``}${M} = ${sci(OH,3)} M (cada unidad libera ${k} OH⁻).`,`pOH = −log(${sci(OH,3)}) = ${fx2(pOH)}.`,`pH = 14 − ${fx2(pOH)} = ${fx2(pH)}.`,`Prueba de sentido: una base tiene pH > 7 ✔.`], r:`pOH = ${fx2(pOH)} · pH = ${fx2(pH)}` };
 }},
 {id:`acidG`,t:`t20`,src:`Parcial 2 (30)`,name:`Ácido fuerte desde gramos: M, pH y pOH`,make(){
   const s = pick([`HNO₃`,`HCl`,`HClO₄`,`HBr`]); const mol = pick([.002,.005,.01,.02,.04]); const g = +(mol*RF_PM[s]).toFixed(3); const V = pick([100,250,500,1000]);
   const n = g/RF_PM[s], M = n/(V/1000), pH = -Math.log10(M), pOH = 14 - pH; const ask = pick([`M`,`pH`,`pOH`]);
   const label = ask === `M` ? `la molaridad` : `el ${ask}`;
   return { q:`Calcule ${label} de una disolución acuosa preparada al disolver ${nf(g,3)} g de ${s} (PM ${RF_PM[s]}) en agua suficiente hasta completar ${V} mL de solución a 25 °C.`, unit:ask === `M` ? `M` : ``, ans:ask === `M` ? M : ask === `pH` ? pH : pOH, rel:ask === `M` ? .02 : undefined, abs:ask === `M` ? undefined : .02,
     pasos:[`Moles = ${nf(g,3)} ÷ ${RF_PM[s]} = ${sci(n,3)} mol.`,`M = ${sci(n,3)} ÷ ${nf(V/1000,3)} L = ${sci(M,3)} M.`,`${s} es un ácido fuerte: [H⁺] = M = ${sci(M,3)}.`,`pH = −log(${sci(M,3)}) = ${fx2(pH)} · pOH = 14 − ${fx2(pH)} = ${fx2(pOH)}.`], r:ask === `M` ? `${sci(M,3)} M` : ask === `pH` ? `pH = ${fx2(pH)}` : `pOH = ${fx2(pOH)}` };
 }},
 {id:`bufDoc`,t:`t21`,src:`Parcial 2 (29)`,name:`Buffer desde moles (Henderson–Hasselbalch)`,make(){
   const [ac, sa, Ka] = pick([[`ácido acético (CH₃COOH)`,`acetato de sodio (CH₃COONa)`,1.8e-5],[`ácido fórmico (HCOOH)`,`formiato de sodio (HCOONa)`,1.8e-4],[`ácido láctico (C₃H₆O₃)`,`lactato de sodio`,1.4e-4],[`ácido benzoico (C₆H₅COOH)`,`benzoato de sodio`,6.3e-5]]);
   const na = pick([.1,.15,.2,.25,.3]), nb = pick([.2,.25,.3,.35,.4,.5]); const V = pick([250,500,1000]); const pKa = -Math.log10(Ka), pH = pKa + Math.log10(nb/na);
   return { q:`Calcule el pH de una solución amortiguadora preparada disolviendo ${na} moles de ${ac} y ${nb} moles de ${sa} en agua hasta completar ${V} mL de solución a 25 °C (Ka = ${sci(Ka,1)}).`, unit:``, ans:pH, abs:.03,
     pasos:[`pKa = −log(${sci(Ka,1)}) = ${fx2(pKa)}.`,`Henderson–Hasselbalch: pH = pKa + log(base/ácido). El volumen se cancela: sirve la razón de moles.`,`pH = ${fx2(pKa)} + log(${nb}/${na}) = ${fx2(pKa)} + ${fx2(Math.log10(nb/na))} = ${fx2(pH)}.`,`Con más base que ácido el pH queda por encima del pKa ✔.`], r:`pH = ${fx2(pH)}` };
 }},
 {id:`espBuf`,t:`t21`,src:`Parcial 2 (18 y 20) · Lab 2 (10)`,name:`¿Qué especie del buffer neutraliza qué?`,make(){
   const B = [[`H₂CO₃`,`HCO₃⁻`,`carbónico/bicarbonato`],[`H₂PO₄⁻`,`HPO₄²⁻`,`fosfato`],[`CH₃COOH`,`CH₃COO⁻`,`acético/acetato`],[`NH₄⁺`,`NH₃`,`amonio/amoníaco`],[`HF`,`F⁻`,`fluorhídrico/fluoruro`]];
   const i = Math.floor(Math.random()*B.length); const [ac, ba, nm] = B[i]; const h = Math.random() < .5;
   const ans = h ? ba : ac, par = h ? ac : ba; const otros = B.filter((_, j) => j !== i); const ex = shuf(otros).slice(0, 2).map(x => h ? x[1] : x[0]);
   const opts = shuf([ans, par].concat(ex)); const q = h ? `En el buffer ${nm}, ¿qué especie neutraliza un exceso de iones H⁺?` : `En el buffer ${nm}, ¿qué especie neutraliza una pequeña cantidad de una base fuerte (OH⁻)?`;
   return { q, opts, correct:opts.indexOf(ans), pasos:[h ? `El H⁺ lo acepta la base conjugada: la especie con un H menos, ${ba}.` : `El OH⁻ lo neutraliza el ácido débil: la especie con un H más, ${ac}.`, h ? `${ba} + H⁺ → ${ac}` : `${ac} + OH⁻ → ${ba} + H₂O`, `Regla: el ácido "come" OH⁻; la base "come" H⁺.`], r:ans };
 }},
 {id:`carbMix`,t:`t22`,src:`Guía de alifáticos, sección III`,name:`Hibridación de cada carbono (molécula mixta)`,make(){
   let b; do { b = Array.from({ length:4 }, () => pick([1,1,2,3])); } while (!b.some(x => x > 1) || b.some((x, i) => i < 3 && x + b[i + 1] > 4));
   const n = 5, hs = []; for (let i = 0; i < n; i++) hs.push(4 - (i > 0 ? b[i - 1] : 0) - (i < n - 1 ? b[i] : 0));
   const sym = x => x === 1 ? `−` : x === 2 ? `=` : `≡`; const SUBS = [`₀`,`₁`,`₂`,`₃`];
   const frm = hs.map((h, i) => `C${h ? `H${h > 1 ? SUBS[h] : ``}` : ``}` + (i < n - 1 ? sym(b[i]) : ``)).join(``);
   const hyb = i => { const l = i > 0 ? b[i - 1] : 1, r = i < n - 1 ? b[i] : 1; return (l === 3 || r === 3 || (l === 2 && r === 2)) ? `sp` : (l === 2 || r === 2) ? `sp²` : `sp³`; };
   const D = { sp:`sp · lineal · 180°`, 'sp²':`sp² · trigonal plana · 120°`, 'sp³':`sp³ · tetraédrica · 109.5°` };
   const k = Math.floor(Math.random()*n), h = hyb(k); const ans = D[h];
   const opts = shuf([ans].concat(Object.keys(D).filter(x => x !== h).map(x => D[x]), [h === `sp²` ? `sp² · tetraédrica · 109.5°` : `sp³ · trigonal plana · 120°`]));
   return { q:`En la molécula ${frm} (carbonos numerados C1 a C5 de izquierda a derecha), ¿qué hibridación, geometría y ángulo de enlace tiene el carbono C${k + 1}?`, opts, correct:opts.indexOf(ans),
     pasos:[`Cuenta los enlaces múltiples del C${k + 1}: ${[b[k - 1], b[k]].filter(x => x).map(sym).join(` y `)}.`,`Triple (o dos dobles) → sp; un doble → sp²; todos sencillos → sp³.`,`C${k + 1}: ${ans}.`], r:ans };
 }}
);

/* ---------- Banco de preguntas de refuerzo, estilo docente ----------
   rf = patrón que refuerza · tm = tema del historial · lv = nivel (r, c, a) · la opción 0 es la correcta */
const RF_DOC = [];
const rfD = (rf, tm, lv, q, o, e) => RF_DOC.push({ rf, tm, lv, t:(RF_TEMAS[tm] || {}).t || null, q, o, e, src:`Refuerzo de ${RF_TEMAS[tm].n.toLowerCase()}` });
/* enlace e intermoleculares */
rfD(`enlace`,`enlace`,`r`,`¿Entre qué tipo de elementos se forma por lo general un enlace iónico?`,[`Un metal y un no metal`,`Dos no metales distintos`,`Dos metales`,`Dos átomos iguales`],`El metal cede electrones y el no metal los recibe: se transfieren. Dos no metales comparten (covalente) y dos metales forman un enlace metálico.`);
rfD(`enlace`,`enlace`,`c`,`¿Cuál de estas frases describe el enlace covalente?`,[`Los átomos comparten pares de electrones`,`Un átomo transfiere electrones a otro y los iones se atraen`,`Una nube de electrones rodea a los núcleos metálicos`,`Las moléculas se atraen por dipolos temporales`],`Covalente = compartir. La B es el iónico, la C el metálico y la D son fuerzas entre moléculas.`);
rfD(`enlace`,`enlace`,`a`,`El enlace entre el hidrógeno y el cloro en la molécula de HCl es:`,[`Covalente polar`,`Covalente no polar`,`Iónico`,`Metálico`],`Son dos no metales (comparten) y son distintos: el cloro atrae más los electrones, así que el enlace es polar.`);
rfD(`enlace`,`enlace`,`a`,`El enlace entre los dos átomos de la molécula de Cl₂ es:`,[`Covalente no polar`,`Covalente polar`,`Iónico`,`Puente de hidrógeno`],`Dos átomos iguales atraen los electrones con la misma fuerza: no hay polaridad.`);
rfD(`enlace`,`inter`,`c`,`Un ejemplo de enlace intramolecular es:`,[`El enlace covalente dentro de una molécula`,`El puente de hidrógeno entre dos moléculas de agua`,`La atracción dipolo–dipolo`,`Las fuerzas de dispersión de London`],`Intra = dentro de la molécula. Las otras tres opciones actúan entre moléculas.`);
rfD(`enlace`,`inter`,`r`,`¿Cuáles elementos, unidos al hidrógeno, forman los puentes de hidrógeno más fuertes?`,[`Flúor, oxígeno y nitrógeno`,`Carbono, oxígeno y nitrógeno`,`Cloro, azufre y fósforo`,`Carbono, hidrógeno y cloro`],`Solo F, O y N: pequeños y muy electronegativos. El carbono no forma puentes de hidrógeno fuertes.`);
rfD(`enlace`,`inter`,`r`,`¿Qué fuerza intermolecular existe entre moléculas apolares como el N₂ o el CH₄?`,[`Fuerzas de dispersión de London`,`Puente de hidrógeno`,`Dipolo–dipolo permanente`,`Ión–dipolo`],`Sin dipolos permanentes solo quedan los dipolos instantáneos: dispersión de London.`);
rfD(`enlace`,`enlace`,`c`,`El cloruro de sodio sólido no conduce la electricidad, pero disuelto en agua sí. ¿Por qué?`,[`Porque al disolverse los iones quedan libres y se mueven`,`Porque en agua se forman electrones libres`,`Porque el agua es un metal`,`Porque en estado sólido es covalente`],`En el cristal los iones están fijos. Al disolverse (o fundirse) se mueven y llevan la corriente.`);
rfD(`enlace`,`inter`,`c`,`El agua hierve a una temperatura mucho mayor que el H₂S. La razón es que:`,[`Sus moléculas forman puentes de hidrógeno`,`El H₂S es más polar`,`El agua es un compuesto iónico`,`El agua tiene mayor masa molar`],`El H₂S pesa más (34 frente a 18 g/mol) y aun así hierve menos: la diferencia la hacen los puentes de hidrógeno del agua.`);
rfD(`enlace`,`enlace`,`c`,`La polaridad de un enlace covalente entre dos átomos distintos depende de:`,[`La diferencia de electronegatividad entre ellos`,`El número de neutrones`,`El tamaño del núcleo únicamente`,`La temperatura del ambiente`],`A mayor diferencia de electronegatividad, más polar es el enlace.`);
rfD(`enlace`,`enlace`,`a`,`En el carbonato de calcio (CaCO₃), ¿qué tipos de enlace hay?`,[`Iónico entre Ca²⁺ y CO₃²⁻, y covalente dentro del carbonato`,`Solo iónico`,`Solo covalente`,`Metálico entre el calcio y el carbono`],`El carbonato es un ion poliatómico: covalente por dentro, iónico con el calcio.`);
rfD(`enlace`,`enlace`,`r`,`El enlace metálico se describe como:`,[`Núcleos metálicos rodeados de una nube de electrones`,`Transferencia de electrones de un metal a un no metal`,`Pares de electrones compartidos entre no metales`,`Atracción entre moléculas polares`],`La nube de electrones libres explica la conducción y la maleabilidad de los metales.`);
rfD(`enlace`,`enlace`,`c`,`Según la teoría RPECV, ¿cuál es el orden de repulsión entre pares de electrones, de mayor a menor?`,[`Libre–libre > libre–enlazante > enlazante–enlazante`,`Enlazante–enlazante > libre–enlazante > libre–libre`,`Libre–enlazante > libre–libre > enlazante–enlazante`,`Todas las repulsiones son iguales`],`Los pares libres ocupan más espacio que los enlazantes, por eso se repelen más.`);
rfD(`enlace`,`enlace`,`a`,`Un elemento tiene 4 electrones de valencia. En su símbolo de Lewis, los puntos se colocan:`,[`Uno en cada lado (arriba, derecha, abajo, izquierda)`,`Los cuatro juntos en un mismo lado`,`Dos pares en lados opuestos`,`No se colocan puntos`],`Primero se reparte un electrón por lado y solo después se aparean.`);
/* átomo, tabla y configuración */
rfD(`enlace`,`atomo`,`a`,`¿Cuántos neutrones tiene un átomo de francio con A = 223 y Z = 87?`,[`136`,`87`,`223`,`310`],`Neutrones = A − Z = 223 − 87 = 136. El 87 son los protones.`);
rfD(`enlace`,`atomo`,`a`,`Si el peso atómico del flúor es 19 UMA, un mol de flúor pesa:`,[`19 g`,`9.5 g`,`6.022 × 10²³ g`,`9 g`],`La masa de un mol en gramos coincide con el peso atómico en UMA. El número de Avogadro cuenta partículas, no gramos.`);
rfD(`enlace`,`tabla`,`c`,`¿Cuál es el elemento de mayor radio atómico y cuál el más electronegativo, respectivamente?`,[`Francio y flúor`,`Astato y flúor`,`Hidrógeno y francio`,`Flúor y francio`],`El radio crece hacia abajo y a la izquierda (Fr); la electronegatividad crece hacia arriba y a la derecha (F).`);
rfD(`enlace`,`conf`,`a`,`La configuración electrónica del selenio (Z = 34), siguiendo el orden de llenado de Moeller, es:`,[`1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁴`,`1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴`,`1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 4p⁴ 3d¹⁰`,`1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴`],`El orden de llenado es 3p → 4s → 3d → 4p. Las demás opciones alteran el orden o no suman 34 electrones.`);
rfD(`enlace`,`tabla`,`c`,`Los elementos que pertenecen a un mismo grupo de la tabla periódica tienen en común:`,[`El número de electrones de valencia`,`El nivel de energía`,`El radio atómico`,`La electronegatividad`],`Grupo = columna = mismos electrones de valencia. Periodo = fila = mismo nivel de energía.`);
rfD(`enlace`,`atomo`,`c`,`Los isótopos de un elemento son átomos con:`,[`Igual número atómico y distinto número de masa`,`Igual número de masa y distinto número atómico`,`Igual número de neutrones y distinto de protones`,`Distinta carga eléctrica`],`Mismo Z (protones), distinto A (por distinto número de neutrones).`);
/* inversión de sentido */
rfD(`inversion`,`dil`,`c`,`Al diluir una solución agregando solvente:`,[`Los moles de soluto no cambian y la concentración disminuye`,`Los moles de soluto aumentan y la concentración aumenta`,`Los moles de soluto disminuyen y el volumen baja`,`La concentración se mantiene y el volumen baja`],`Solo se agrega solvente: n constante, volumen ↑, concentración ↓ (C₁V₁ = C₂V₂).`);
rfD(`inversion`,`conc`,`c`,`Las partes por millón (ppm) son más útiles cuando la solución es:`,[`Muy diluida (trazas de soluto)`,`Muy concentrada`,`Saturada`,`Sobresaturada`],`ppm expresa cantidades muy pequeñas de soluto, como contaminantes.`);
rfD(`inversion`,`termo`,`a`,`Una reacción tiene ΔG = −25 kJ/mol. Se clasifica como:`,[`Exergónica (espontánea)`,`Endergónica`,`En equilibrio químico`,`Imposible de realizar`],`ΔG negativo: la reacción libera energía libre. ΔG positivo sería endergónica.`);
rfD(`inversion`,`termo`,`c`,`Una enzima con alta afinidad por su sustrato tiene un Km:`,[`Bajo`,`Alto`,`Igual a la velocidad máxima`,`Independiente de la afinidad`],`Con alta afinidad basta poco sustrato para llegar a la mitad de la velocidad máxima: Km bajo.`);
rfD(`inversion`,`ph`,`a`,`¿Cuál es un valor razonable para el pH de una solución 0.025 M de Ba(OH)₂?`,[`12.7`,`1.3`,`1.6`,`7.0`],`Es una base fuerte: pH > 7. [OH⁻] = 0.05 M → pOH = 1.3 → pH = 12.7. Valores de 1.3 o 1.6 corresponden a un ácido.`);
rfD(`inversion`,`dil`,`a`,`Para preparar 600 mL de una solución 1.6 M a partir de un stock 4.5 M, el volumen de stock será:`,[`Menor que 600 mL (≈ 213 mL)`,`Mayor que 600 mL (≈ 1687 mL)`,`Exactamente 600 mL`,`Cero: no hace falta stock`],`V₁ = C₂V₂/C₁ = 1.6 × 600 / 4.5 = 213 mL. Del stock concentrado siempre se toma menos que el volumen final.`);
rfD(`inversion`,`sol`,`c`,`Al aumentar la temperatura, la solubilidad de un gas en un líquido:`,[`Disminuye`,`Aumenta`,`No cambia`,`Primero aumenta y luego se anula`],`Los gases se disuelven menos al calentar (la bebida gaseosa tibia pierde su gas).`);
rfD(`inversion`,`sol`,`c`,`Al aumentar la presión parcial de un gas sobre un líquido, su solubilidad:`,[`Aumenta (ley de Henry)`,`Disminuye`,`No cambia`,`Se vuelve cero`],`Ley de Henry: la solubilidad es directamente proporcional a la presión parcial.`);
rfD(`inversion`,`ph`,`c`,`En la zona básica de la escala de pH, las concentraciones de H⁺ y OH⁻ son, respectivamente:`,[`[H⁺] menor y [OH⁻] mayor`,`[H⁺] mayor y [OH⁻] menor`,`Ambas iguales`,`Ambas mayores que 10⁻⁷ M`],`pH > 7 significa menos H⁺ y más OH⁻ (Kw = [H⁺][OH⁻] = 10⁻¹⁴).`);
/* bases, pOH y buffers */
rfD(`bases`,`buf`,`c`,`Cuando se añade OH⁻ a un buffer, lo neutraliza:`,[`El componente ácido (HA)`,`El componente básico (A⁻)`,`El agua del buffer`,`El catión de la sal`],`HA + OH⁻ → A⁻ + H₂O. Una base no neutraliza a otra base.`);
rfD(`bases`,`buf`,`c`,`Cuando se añade H⁺ a un buffer, lo neutraliza:`,[`La base conjugada (A⁻)`,`El ácido débil (HA)`,`El solvente`,`El catión de la sal`],`A⁻ + H⁺ → HA.`);
rfD(`bases`,`buf`,`c`,`En el buffer fosfato (H₂PO₄⁻ / HPO₄²⁻), la especie que acepta H⁺ es:`,[`HPO₄²⁻`,`H₂PO₄⁻`,`Ambas por igual`,`Ninguna de las dos`],`La base conjugada es la que tiene un H menos: HPO₄²⁻.`);
rfD(`bases`,`buf`,`c`,`En el buffer carbónico/bicarbonato, la especie que neutraliza un exceso de H⁺ es:`,[`HCO₃⁻ (bicarbonato)`,`H₂CO₃`,`El agua`,`El sodio`],`HCO₃⁻ + H⁺ → H₂CO₃. Es el principal amortiguador de la sangre.`);
rfD(`bases`,`ph`,`a`,`¿Cómo se mide el pH de la sangre de un paciente en el laboratorio clínico?`,[`Con gases arteriales (gasometría)`,`Con papel pH`,`Con tiras reactivas de orina`,`Con fenolftaleína`],`Cuando la pregunta habla de un paciente, el contexto es clínico: gasometría arterial.`);
rfD(`bases`,`acb`,`c`,`El alcohol etílico disuelto en agua es:`,[`Un no electrolito`,`Un electrolito fuerte`,`Un electrolito débil`,`Un ácido fuerte`],`Es una molécula que se disuelve sin formar iones; la solución no conduce la electricidad.`);
rfD(`bases`,`acb`,`c`,`El cloruro de sodio disuelto en agua es un electrolito:`,[`Fuerte`,`Débil`,`No electrolito`,`Neutro`],`Se disocia por completo en Na⁺ y Cl⁻.`);
rfD(`bases`,`acb`,`c`,`El ácido acético disuelto en agua es un electrolito:`,[`Débil`,`Fuerte`,`No electrolito`,`Insoluble`],`Se ioniza solo parcialmente: pocos iones.`);
rfD(`bases`,`acb`,`r`,`Según Arrhenius, una base es una sustancia que:`,[`En agua libera iones OH⁻`,`Acepta protones`,`Dona pares de electrones`,`Acepta pares de electrones`],`Es la teoría más limitada: exige agua y OH⁻.`);
rfD(`bases`,`acb`,`r`,`Según Brønsted–Lowry, una base es una sustancia que:`,[`Acepta protones (H⁺)`,`Libera OH⁻ en agua`,`Dona protones`,`Acepta pares de electrones`],`Por eso el amoníaco (NH₃), sin OH⁻ en la fórmula, es una base.`);
rfD(`bases`,`acb`,`r`,`Según Lewis, un ácido es una sustancia que puede:`,[`Aceptar un par de electrones`,`Donar un par de electrones`,`Donar solo protones`,`Liberar OH⁻`],`Lewis es la definición más amplia: ácido = aceptor de par de electrones.`);
rfD(`bases`,`ph`,`a`,`Una disolución de Ba(OH)₂ 0.01 M tiene una concentración de OH⁻ igual a:`,[`0.02 M`,`0.01 M`,`0.005 M`,`1 × 10⁻¹² M`],`Cada Ba(OH)₂ libera 2 OH⁻: [OH⁻] = 2 × 0.01 = 0.02 M.`);
rfD(`bases`,`ph`,`a`,`El pH de una solución de HCl 0.01 M es:`,[`2`,`12`,`0.01`,`7`],`Ácido fuerte: [H⁺] = 0.01 = 10⁻² → pH = 2.`);
rfD(`bases`,`buf`,`c`,`Un buffer resiste mejor los cambios de pH cuando:`,[`El pH es cercano al pKa y hay buena cantidad de ácido y de base conjugada`,`Solo contiene un ácido fuerte`,`Su pH es siempre 7`,`No contiene ninguna sal`],`El buffer actúa en pKa ± 1 y necesita las dos formas, ácido y base.`);
rfD(`bases`,`buf`,`r`,`La capacidad del cuerpo de mantener estables sus condiciones internas frente a los cambios del exterior se llama:`,[`Homeostasis`,`Equilibrio`,`Sistema buffer`,`Mecanismos de compensación`],`El buffer y la compensación son herramientas de la homeostasis.`);
/* unidades de concentración y soluciones */
rfD(`normalidad`,`conc`,`a`,`El número de equivalentes que hay en 37 g de Ca(OH)₂ (PM 74) es:`,[`1 eq`,`37 eq`,`0.5 eq`,`2 eq`],`Peq = 74/2 = 37 g/eq → equivalentes = 37 g ÷ 37 g/eq = 1 eq. El 37 es una masa por equivalente, no un número de equivalentes.`);
rfD(`normalidad`,`conc`,`c`,`La normalidad se define como:`,[`Equivalentes de soluto por litro de solución`,`Moles de soluto por litro de solución`,`Moles de soluto por kilogramo de solvente`,`Gramos de soluto por 100 mL de solución`],`N = eq/L. Molaridad = mol/L; molalidad = mol/kg de solvente.`);
rfD(`normalidad`,`conc`,`a`,`El peso equivalente del CaCO₃ (PM 100, carga 2) es:`,[`50 g/eq`,`100 g/eq`,`200 g/eq`,`25 g/eq`],`Peq = PM ÷ carga = 100 ÷ 2 = 50 g/eq.`);
rfD(`unidades`,`conc`,`c`,`La molalidad se define como:`,[`Moles de soluto por kilogramo de solvente`,`Moles de soluto por litro de solución`,`Equivalentes por litro de solución`,`Gramos de soluto por 100 g de solución`],`Usa la masa del solvente; por eso no cambia con la temperatura.`);
rfD(`unidades`,`conc`,`c`,`La molaridad se define como:`,[`Moles de soluto por litro de solución`,`Moles de soluto por kilogramo de solvente`,`Equivalentes por litro de solución`,`Gramos de soluto por litro de solvente`],`Usa el volumen de la solución completa.`);
rfD(`unidades`,`conc`,`a`,`Una solución al 7 % m/v tiene 7 g de soluto en cada:`,[`100 mL de solución`,`100 g de solvente`,`1 L de solvente`,`100 g de soluto`],`m/v = masa de soluto por volumen de solución.`);
rfD(`unidades`,`conc`,`a`,`¿Cuántos gramos de glucosa hay en 2300 mL de una solución al 7 % m/v?`,[`161 g`,`16.1 g`,`0.3 g`,`7 g`],`7 g por cada 100 mL × 23 bloques de 100 mL = 161 g.`);
rfD(`unidades`,`conc`,`a`,`35 mL de etanol en 960 mL de disolución equivalen aproximadamente a:`,[`3.65 % v/v`,`27.4 % v/v`,`36.5 % v/v`,`0.365 % v/v`],`35 ÷ 960 × 100 = 3.6458 → 3.65 % (se redondea, no se trunca).`);
rfD(`unidades`,`conc`,`a`,`Para preparar 100 mL de disolución al 1.6 % p/v se usan 1.6 g de soluto y, según la convención del docente, ¿cuántos mL de agua?`,[`98.4 mL`,`100 mL`,`101.6 mL`,`1.6 mL`],`mL de solvente = 100 − 1.6 = 98.4 mL. Los 100 mL son el volumen de la solución final.`);
rfD(`unidades`,`dil`,`c`,`Las propiedades coligativas de una solución dependen de:`,[`La cantidad de partículas de soluto, no de su identidad`,`La identidad química del soluto`,`El volumen del recipiente`,`Únicamente de la temperatura ambiente`],`Coligativa = cuántas partículas, no cuáles.`);
rfD(`unidades`,`dil`,`a`,`Un eritrocito sumergido en una solución hipotónica:`,[`Se hincha y se rompe (hemólisis)`,`Se arruga (crenación)`,`No cambia de forma`,`Se evapora`],`El agua entra por ósmosis hacia el medio más concentrado (el interior de la célula).`);
rfD(`unidades`,`sol`,`c`,`En una solución, el soluto es:`,[`El componente que está en menor cantidad`,`El componente que está en mayor cantidad`,`Siempre un sólido`,`Siempre el agua`],`Soluto = el que se disuelve y está en menor cantidad; solvente = el que está en mayor cantidad.`);
/* laboratorio */
rfD(`lab`,`lab`,`r`,`La propipeta (pera de succión) se usa para:`,[`Aspirar líquido con la pipeta sin usar la boca`,`Medir el pH`,`Calentar soluciones`,`Pesar sólidos`],`Es un instrumento de seguridad para pipetear.`);
rfD(`lab`,`lab`,`r`,`La fenolftaleína en una solución de NaOH se torna:`,[`Rosa o fucsia`,`Incolora`,`Amarilla`,`Azul`],`En medio básico (pH > 8.2) la fenolftaleína es rosa.`);
rfD(`lab`,`lab`,`r`,`La fenolftaleína en medio ácido es:`,[`Incolora`,`Rosa`,`Roja`,`Verde`],`Incolora en ácido y neutro; rosa en base.`);
rfD(`lab`,`lab`,`r`,`El extracto de repollo morado en un medio fuertemente ácido (jugo de limón) toma color:`,[`Rosado o rojo`,`Verde`,`Azul`,`Incoloro`],`El repollo morado es indicador universal: rojo en ácidos y verde-amarillo en bases fuertes.`);
rfD(`lab`,`lab`,`r`,`El gas que se produce al reaccionar magnesio con ácido sulfúrico es:`,[`Hidrógeno`,`Oxígeno`,`Dióxido de carbono`,`Cloro`],`Mg + H₂SO₄ → MgSO₄ + H₂.`);
rfD(`lab`,`lab`,`r`,`El precipitado marrón que se forma al mezclar FeCl₃ con NaOH es:`,[`Hidróxido de hierro III, Fe(OH)₃`,`Cloruro de sodio`,`Óxido de sodio`,`Hierro metálico`],`FeCl₃ + 3 NaOH → Fe(OH)₃↓ + 3 NaCl.`);
rfD(`lab`,`lab`,`r`,`El gas que se libera al agregar HCl a carbonato de calcio es:`,[`Dióxido de carbono (CO₂)`,`Hidrógeno`,`Oxígeno`,`Cloro`],`2 HCl + CaCO₃ → CaCl₂ + H₂O + CO₂.`);
rfD(`lab`,`lab`,`c`,`Al añadir agua al residuo de quemar cinta de magnesio se forma:`,[`Hidróxido de magnesio (leche de magnesia)`,`Cloruro de magnesio`,`Magnesio metálico`,`Carbonato de magnesio`],`Mg → MgO (al quemar); MgO + H₂O → Mg(OH)₂.`);
rfD(`lab`,`lab`,`c`,`El NaCl no presenta olor ni volatilidad porque:`,[`Es un compuesto iónico con fuertes atracciones entre iones`,`Es una molécula covalente apolar`,`Es un gas a temperatura ambiente`,`Es un metal`],`Sus iones se atraen muy fuerte: no pasa a gas, no libera olor.`);
rfD(`lab`,`lab`,`r`,`Entre sodio, magnesio y aluminio, el metal que reacciona más violentamente con el agua es:`,[`Sodio`,`Magnesio`,`Aluminio`,`Los tres reaccionan igual`],`La reactividad con el agua baja en el orden Na ≫ Mg > Al.`);

/* ---------- Preguntas abiertas de respuesta corta (para el Corto) ---------- */
const RF_ABI = [];
const rfA = (rf, tm, q, a, k) => RF_ABI.push({ rf, tm, t:(RF_TEMAS[tm] || {}).t || null, q, a, k, src:`Refuerzo de ${RF_TEMAS[tm].n.toLowerCase()}` });
rfA(`unidades`,`sol`,`¿Cuál es la diferencia entre el soluto y el solvente de una solución?`,`El soluto es el componente que está en menor cantidad y se disuelve; el solvente es el que está en mayor cantidad y lo disuelve.`,[`menor cantidad`,`mayor cantidad`]);
rfA(`unidades`,`conc`,`¿Cuál es la diferencia conceptual principal entre la molaridad (M) y la molalidad (m)?`,`Molaridad = moles de soluto ÷ litros de solución. Molalidad = moles de soluto ÷ kilogramos de solvente (no depende de la temperatura).`,[`moles de soluto`,`litros de solución`,`kg de solvente`]);
rfA(`bases`,`acb`,`¿Cuál es la diferencia entre la base de Arrhenius y la de Brønsted–Lowry?`,`Arrhenius: base = sustancia que en agua libera OH⁻. Brønsted–Lowry: base = aceptor de protones (H⁺), con o sin agua y sin OH⁻ en la fórmula.`,[`libera OH⁻ en agua`,`acepta H⁺`]);
rfA(`enlace`,`enlace`,`¿Cuál es la diferencia entre el enlace iónico y el covalente?`,`Iónico: se transfieren electrones (metal + no metal) y los iones de carga opuesta se atraen. Covalente: se comparten pares de electrones entre no metales.`,[`transfieren`,`comparten`,`metal + no metal`]);
rfA(`enlace`,`atomo`,`Explique qué son los isótopos y cómo se calcula el número de neutrones.`,`Isótopos: átomos del mismo elemento (igual Z) con distinto número de masa (A). Neutrones = A − Z.`,[`igual Z`,`distinto A`,`A − Z`]);
rfA(`inversion`,`sol`,`Entre aumentar la temperatura y aumentar la presión, ¿cuál favorece la solubilidad de un gas en un líquido? Explique.`,`La presión (ley de Henry): la solubilidad del gas es directamente proporcional a su presión parcial. Al aumentar la temperatura la solubilidad del gas disminuye.`,[`presión`,`Henry`,`temperatura disminuye`]);
rfA(`unidades`,`sol`,`Explique en qué consiste el grado de subdivisión de un soluto sólido y cómo influye en la velocidad de disolución.`,`Es qué tan pequeñas son las partículas del soluto. A mayor subdivisión (más superficie de contacto), el soluto se disuelve más rápido.`,[`partículas pequeñas`,`superficie de contacto`,`más rápido`]);
rfA(`inversion`,`ph`,`En la zona básica de la escala de pH, ¿cómo son las concentraciones de H⁺ y OH⁻, respectivamente?`,`[H⁺] menor y [OH⁻] mayor (pH > 7).`,[`H⁺ menor`,`OH⁻ mayor`]);
rfA(`bases`,`buf`,`¿Qué componente del buffer ácido carbónico/bicarbonato neutraliza un exceso de H⁺? Escriba la reacción.`,`El bicarbonato (base conjugada): HCO₃⁻ + H⁺ → H₂CO₃.`,[`bicarbonato`,`HCO₃⁻`]);
rfA(`unidades`,`dil`,`¿De qué dependen las propiedades coligativas? Nombre dos.`,`Dependen del número de partículas de soluto, no de su naturaleza. Ejemplos: descenso de la presión de vapor, aumento del punto de ebullición, descenso del punto de congelación y presión osmótica.`,[`número de partículas`,`dos ejemplos`]);
rfA(`lab`,`lab`,`¿Para qué sirve la propipeta? ¿Por qué se usa?`,`Para aspirar líquidos en la pipeta sin hacerlo con la boca; es una medida de seguridad ante sustancias peligrosas.`,[`aspirar`,`sin la boca`,`seguridad`]);
rfA(`enlace`,`inter`,`Explique por qué las moléculas de agua forman puentes de hidrógeno.`,`El H está unido al oxígeno, muy electronegativo: queda con carga parcial positiva (δ⁺) y es atraído por el par libre del oxígeno (δ⁻) de otra molécula.`,[`H δ⁺`,`O δ⁻`,`par libre`]);
rfA(`inversion`,`termo`,`¿Qué indica un valor negativo de ΔG en una reacción?`,`Que la reacción es espontánea y libera energía libre: exergónica.`,[`espontánea`,`exergónica`]);
rfA(`bases`,`acb`,`¿Por qué el etanol no conduce la electricidad en solución acuosa?`,`Porque es un no electrolito: se disuelve como moléculas sin formar iones, y la corriente necesita iones móviles.`,[`no electrolito`,`no forma iones`]);
const RF_DOCS = () => RF_DOC.concat(typeof PACKS !== `undefined` && PACKS.DOC ? PACKS.DOC : []);
const RF_ABIS = () => RF_ABI.concat(typeof PACKS !== `undefined` && PACKS.DOCA ? PACKS.DOCA : []);
