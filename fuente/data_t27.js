/* ======================= TEMA 27: ALCOHOLES Y FENOLES ======================= */
const REPASO_T27 = [
{t:`t27`,src:`Tema 27, pág. 1–3`,title:`Funciones oxigenadas: estructura y fórmula general`,fig:`grupoOH`,
 body:`<p>Las <b>funciones orgánicas oxigenadas</b> son compuestos de <b>carbono, hidrógeno y oxígeno</b>. El oxígeno actúa como átomo clave (heteroátomo) dentro de un grupo funcional: modifica el hidrocarburo base y determina sus propiedades físicas y químicas.</p>
 <div class="scroll"><table class="tbl"><thead><tr><th></th><th>Alcoholes</th><th>Fenoles</th></tr></thead><tbody>
 <tr><td>Fórmula</td><td><b>R−OH</b> (R = cadena alifática)</td><td><b>Ar−OH</b> (Ar = anillo aromático, como el fenilo)</td></tr>
 <tr><td>Fórmula global</td><td><b>CₙH₂ₙ₊₂O</b></td><td><b>CₙH₂ₙ₋₆O</b> (n ≥ 6)</td></tr>
 <tr><td>Ejemplo</td><td>Etanol CH₃CH₂OH = C₂H₆O</td><td>Timol C₁₀H₁₄O (C₁₀H₁₃OH)</td></tr></tbody></table></div>
 <p class="note">La portada del PDF dice "Tema 28", pero el archivo es el Tema 27. Aquí se usa Tema 27 para todo.</p>`,
 memo:`Alcohol R−OH (CₙH₂ₙ₊₂O). Fenol Ar−OH (CₙH₂ₙ₋₆O).`},
{t:`t27`,src:`Tema 27, pág. 4`,title:`Clasificación de las funciones oxigenadas`,fig:null,
 body:`<p>Se clasifican por la estructura de la cadena y por el <b>tipo de enlace del oxígeno</b> (sencillo o doble).</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Enlace</th><th>Función</th><th>Grupo</th><th>Fórmula</th><th>Global</th><th>Ejemplo</th></tr></thead><tbody>
 <tr><td>C−O</td><td>Alcohol</td><td>Hidroxilo −OH</td><td>R−OH</td><td>CₙH₂ₙ₊₂O</td><td>Etanol</td></tr>
 <tr><td>C−O</td><td>Fenol</td><td>Hidroxilo aromático</td><td>Ar−OH</td><td>CₙH₂ₙ₋₆O</td><td>Fenol C₆H₅−OH</td></tr>
 <tr><td>C−O</td><td>Éter</td><td>−O−</td><td>R−O−R'</td><td>CₙH₂ₙ₊₂O</td><td>Dietiléter</td></tr>
 <tr><td>C=O</td><td>Aldehído</td><td>Carbonilo terminal</td><td>R−CHO</td><td>CₙH₂ₙO</td><td>Propanal</td></tr>
 <tr><td>C=O</td><td>Cetona</td><td>Carbonilo intermedio</td><td>R−CO−R'</td><td>CₙH₂ₙO</td><td>Propanona (acetona)</td></tr>
 <tr><td>C=O + −OH</td><td>Ácido carboxílico</td><td>Carboxilo −COOH</td><td>R−COOH</td><td>CₙH₂ₙO₂</td><td>Ácido acético</td></tr>
 <tr><td>C=O + −O−</td><td>Éster</td><td>−COO−</td><td>R−COO−R'</td><td>CₙH₂ₙO₂</td><td>Acetato de etilo</td></tr></tbody></table></div>
 <p class="note">Fíjate: alcohol y éter comparten CₙH₂ₙ₊₂O (son isómeros de función); aldehído y cetona comparten CₙH₂ₙO; ácido y éster comparten CₙH₂ₙO₂. En la tabla del material el éster aparece como "carbonilo + hidroxilo": en realidad su segundo oxígeno está unido a otra cadena (−COO−R'), no a un H.</p>`,
 memo:`Pares con la misma fórmula: alcohol/éter · aldehído/cetona · ácido/éster.`},
{t:`t27`,src:`Tema 27, pág. 5–6`,title:`Nomenclatura: regla general y prioridad`,fig:`prioridad`,
 body:`<p>El nombre usa un <b>sufijo específico</b> para cada grupo y una <b>regla de prioridad</b> cuando hay más de una función.</p>
 <p class="fx">[Sustituyentes] + [Cadena principal] + [Insaturaciones −en/−in] + [Sufijo del grupo principal]</p>
 <ol><li><b>Identificar la función principal</b> (la de mayor prioridad da el sufijo; aquí, el −OH).</li>
 <li><b>Cadena principal:</b> la cadena continua más larga que contenga el grupo principal (y la mayor cantidad de dobles o triples enlaces), o el anillo aromático.</li>
 <li><b>Numerar</b> desde el extremo que da el número más bajo al grupo principal.</li>
 <li><b>Sustituyentes</b> en orden alfabético antes de la raíz.</li>
 <li><b>Prioridad oxigenadas:</b> ácido carboxílico > éster > aldehído > cetona > alcohol/fenol > éter.</li></ol>
 <p><b>Ejemplo:</b> CH₃−CH(OH)−CH₂−CH₃ → <b>butan-2-ol</b> (2-butanol): 4 carbonos + OH en C2 + sufijo -ol.</p>`,
 memo:`Ácido > éster > (amida > nitrilo) > aldehído > cetona > alcohol > fenol > (amina) > éter.`},
{t:`t27`,src:`Tema 27, pág. 7`,title:`Alcoholes como función principal (sufijo -ol)`,fig:`nombreAlcohol`,
 body:`<ol><li><b>Seleccionar la cadena principal</b> (la más larga con el C del −OH).</li>
 <li><b>Numerar</b> dando el número más bajo al −OH.</li>
 <li><b>Ramificaciones e insaturaciones:</b> los dobles o triples se indican en medio con -en o -in, antes de la terminación -ol.</li>
 <li><b>Ensamblar:</b> se cambia la última vocal del alcano por <b>-ol</b>, con el localizador justo antes de la terminación.</li></ol>
 <p class="fx">CH₃−CH(CH₃)−CH(OH)−CH₃ → 3-metilbutan-2-ol</p>
 <p class="fx">CH₂=CH−CH₂−OH → prop-2-en-1-ol (alcohol alílico)</p>
 <p>En el segundo: 3 carbonos (prop), doble enlace en C2 (-2-en-), OH en C1 (-1-ol). El −OH manda en la numeración, aunque el doble enlace quede con número mayor.</p>`,
 memo:`butano → butan-2-ol: se quita la "o" y entra "-número-ol".`},
{t:`t27`,src:`Tema 27, pág. 8`,title:`Polialcoholes, alcoholes cíclicos y -OH secundario`,fig:`polioles`,
 body:`<ul><li><b>Varios −OH:</b> se <b>conserva la "o"</b> del alcano y se usa -diol, -triol, -tetraol.<br>HO−CH₂−CH₂−OH → <b>etano-1,2-diol</b> (etilenglicol) · HO−CH₂−CH(OH)−CH₂−OH → <b>propano-1,2,3-triol</b> (glicerina).</li>
 <li><b>Alcoholes cíclicos:</b> el carbono con el −OH es siempre el <b>C1</b>, así que no se indica su número salvo que haya varios −OH. Anillo de 6 con metilo en posición 3 → <b>3-metilciclohexanol</b>.</li>
 <li><b>Cuando el alcohol es secundario</b> (hay una función de mayor prioridad): se nombra con el prefijo <b>hidroxi-</b>.<br>CH₃−CO−CH₂−CH₂−OH → <b>4-hidroxibutan-2-ona</b> (la cetona da el sufijo).</li></ul>`,
 memo:`diol/triol conservan la "o" (etanodiol, no "etandiol"). Cíclico: OH = C1. Si gana otra función → hidroxi-.`},
{t:`t27`,src:`Tema 27, pág. 9`,title:`Nombres IUPAC y comunes de alcoholes`,fig:`tipoAlcohol`,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>C</th><th>Fórmula</th><th>IUPAC</th><th>Común</th></tr></thead><tbody>
 <tr><td>1</td><td>CH₃−OH</td><td>Metanol</td><td>Alcohol metílico / de madera</td></tr>
 <tr><td>2</td><td>CH₃−CH₂−OH</td><td>Etanol</td><td>Alcohol etílico / fino</td></tr>
 <tr><td>3</td><td>CH₃−CH₂−CH₂−OH</td><td>Propan-1-ol</td><td>Alcohol propílico</td></tr>
 <tr><td>3</td><td>CH₃−CH(OH)−CH₃</td><td>Propan-2-ol</td><td>Alcohol isopropílico / isopropanol</td></tr>
 <tr><td>4</td><td>CH₃−(CH₂)₃−OH</td><td>Butan-1-ol</td><td>Alcohol n-butílico</td></tr>
 <tr><td>4</td><td>CH₃−CH₂−CH(OH)−CH₃</td><td>Butan-2-ol</td><td>Alcohol sec-butílico</td></tr>
 <tr><td>4</td><td>(CH₃)₂CH−CH₂−OH</td><td>2-metilpropan-1-ol</td><td>Alcohol isobutílico</td></tr>
 <tr><td>4</td><td>(CH₃)₃C−OH</td><td>2-metilpropan-2-ol</td><td>Alcohol tert-butílico</td></tr>
 <tr><td>5</td><td>CH₃−(CH₂)₃−CH₂−OH</td><td>Pentan-1-ol</td><td>Alcohol n-amílico</td></tr>
 <tr><td>2</td><td>HO−CH₂−CH₂−OH</td><td>Etano-1,2-diol</td><td>Etilenglicol / glicol</td></tr>
 <tr><td>3</td><td>HO−CH₂−CH(OH)−CH₂−OH</td><td>Propano-1,2,3-triol</td><td>Glicerina / glicerol</td></tr>
 <tr><td>3</td><td>CH₂=CH−CH₂−OH</td><td>Prop-2-en-1-ol</td><td>Alcohol alílico</td></tr>
 <tr><td>7</td><td>C₆H₅−CH₂−OH</td><td>Fenilmetanol</td><td>Alcohol bencílico</td></tr></tbody></table></div>
 <p class="note">Complementario [2]: según cuántos carbonos tenga unido el C del −OH, el alcohol es primario (propan-1-ol), secundario (propan-2-ol) o terciario (2-metilpropan-2-ol). Lo necesitas para la oxidación (pág. 15).</p>`,
 memo:`Metanol = de madera (tóxico). Etanol = fino. Isopropanol = propan-2-ol (el de botiquín).`},
{t:`t27`,src:`Tema 27, pág. 10`,title:`Nomenclatura de fenoles`,fig:`fenolesNom`,
 body:`<p>Se toma el <b>fenol (C₆H₅OH)</b> como estructura base.</p>
 <ol><li><b>Estructura principal:</b> el carbono unido al −OH es el <b>C1</b>.</li>
 <li><b>Numeración:</b> en la dirección (horaria o antihoraria) que dé los <b>números más bajos</b> a los demás sustituyentes.</li>
 <li><b>Orden alfabético</b> de los sustituyentes antes de la palabra "fenol".</li>
 <li>Sufijo <b>"fenol"</b>.</li></ol>
 <p><b>Ejemplos:</b> −CH₃ en C2 → <b>2-metilfenol</b> · −Cl en C4 → <b>4-clorofenol</b> · −NO₂ en C3 → <b>3-nitrofenol</b>. Con un solo sustituyente <b>aplica orto, meta y para</b> (o-metilfenol, p-clorofenol, m-nitrofenol).</p>`,
 memo:`OH = C1 siempre. 2 = orto, 3 = meta, 4 = para.`},
{t:`t27`,src:`Tema 27, pág. 11–12`,title:`Fenoles polisustituidos, polifenoles y nombres comunes`,fig:`polifenoles`,
 body:`<ul><li><b>Polisustituidos</b> (dos o más sustituyentes además del −OH): <b>no aplica o, m, p</b>; se busca la menor combinación de números. Ej.: <b>4-bromo-2,6-dimetilfenol</b>.</li>
 <li><b>Polifenoles</b> (varios −OH en el mismo anillo): se nombran como <b>derivados del benceno</b>, con -diol, -triol y los números más bajos para los −OH.</li></ul>
 <div class="scroll"><table class="tbl"><thead><tr><th>IUPAC</th><th>Común</th></tr></thead><tbody>
 <tr><td>Hidroxibenceno</td><td>Fenol / ácido fénico</td></tr><tr><td>2-, 3-, 4-metilfenol</td><td>o-, m-, p-cresol</td></tr>
 <tr><td>Benceno-1,2-diol</td><td>Catecol / pirocatecol</td></tr><tr><td>Benceno-1,3-diol</td><td>Resorcinol / resorcina</td></tr>
 <tr><td>Benceno-1,4-diol</td><td>Hidroquinona / quinol</td></tr><tr><td>Benceno-1,2,3-triol</td><td>Pirogalol / ácido pirogálico</td></tr>
 <tr><td>2-isopropil-5-metilfenol</td><td>Timol</td></tr><tr><td>2-metoxi-4-(prop-2-en-1-il)fenol</td><td>Eugenol</td></tr>
 <tr><td>Ácido 2-hidroxibenzoico</td><td>Ácido salicílico</td></tr><tr><td>2,4,6-trinitrofenol</td><td>Ácido pícrico</td></tr></tbody></table></div>
 <p>El catecol es el grupo que comparten las catecolaminas (Tema 26, pág. 19). En el ácido salicílico el −COOH tiene más prioridad que el −OH, por eso se nombra "ácido … hidroxi…".</p>`,
 memo:`Catecol 1,2 · resorcinol 1,3 · hidroquinona 1,4 · pirogalol 1,2,3.`},
{t:`t27`,src:`Tema 27, pág. 13`,title:`Propiedades físicas de los alcoholes`,fig:`puentesH`,
 body:`<p>Derivan del grupo −OH, <b>muy polar</b>, que forma <b>puentes de hidrógeno</b> entre sus moléculas y con el agua.</p>
 <ol><li><b>Puntos de ebullición elevados</b> (más altos que los alcanos de masa parecida); suben con el tamaño por las fuerzas de dispersión.</li>
 <li><b>Solubilidad en agua:</b> a mayor tamaño, menor solubilidad. Son solubles de <b>1 a 3 carbonos</b>.</li>
 <li><b>Estado:</b> de <b>1 a 11 C</b>, líquidos incoloros, poco viscosos, de olor penetrante; de <b>12 C en adelante</b>, sólidos cerosos e inodoros.</li>
 <li><b>Densidad</b> menor que el agua; los polialcoholes son más densos.</li>
 <li><b>Anfóteros:</b> actúan como ácidos y bases débiles; reaccionan con Na y K liberando H₂.</li></ol>
 <p class="note">Precisión: el material atribuye el punto de ebullición alto a las fuerzas de dispersión. Lo que lo hace <b>alto</b> son los <b>puentes de hidrógeno</b> (por eso el etanol hierve a 78 °C y el propano, de masa parecida, a −42 °C); la dispersión explica que <b>siga subiendo</b> con el tamaño. También dice "pKa inferior al agua": en realidad el etanol (≈ 16) y el agua (≈ 15.7) tienen una acidez muy parecida [2].</p>`,
 memo:`−OH = puente de H → hierve alto y se disuelve (1–3 C). Líquidos 1–11 C; sólidos 12+.`},
{t:`t27`,src:`Tema 27, pág. 14`,title:`Propiedades físicas de los fenoles`,fig:null,
 body:`<ol><li><b>Puntos de ebullición elevados:</b> forman puentes de hidrógeno intermoleculares.</li>
 <li><b>Solubles en agua.</b></li>
 <li>Son <b>más ácidos que los alcoholes</b> y reaccionan con bases para formar sales.</li>
 <li><b>Densidad</b> mayor que la del agua (1.07) y <b>olor</b> dulzón penetrante.</li>
 <li><b>Cáusticos</b> al contacto con la piel.</li></ol>
 <p class="note"><b>Error importante del material:</b> dice que los fenoles "tienen un pKa <b>mayor</b> a los alcoholes, por lo que son más ácidos". Es al revés: a <b>menor pKa, mayor acidez</b>. El fenol tiene pKa ≈ 10 y el etanol ≈ 16 [2]. La conclusión (el fenol es más ácido) es correcta; lo incorrecto es "mayor".</p>`,
 memo:`Fenol: más ácido que el alcohol (pKa MÁS BAJO, ≈ 10), denso (1.07), cáustico.`},
{t:`t27`,src:`Tema 27, pág. 15`,title:`Propiedades químicas de los alcoholes`,fig:`reaccAlcohol`,
 body:`<p>Dependen de la polaridad del grupo −OH: el enlace <b>O−H</b> explica la acidez y la sustitución del H; el enlace <b>C−O</b> permite quitar todo el −OH.</p>
 <ol><li><b>Ácido débil:</b> el H del −OH sale como protón frente a bases muy fuertes o metales alcalinos: 2 R−OH + 2 Na → 2 R−O⁻Na⁺ + H₂.</li>
 <li><b>Oxidación:</b> los primarios se oxidan suavemente a <b>aldehídos</b> y, con oxidantes fuertes, hasta <b>ácidos carboxílicos</b>: R−CH₂OH → R−CHO → R−COOH.</li>
 <li><b>Deshidratación:</b> con un ácido fuerte (H₂SO₄ o H₃PO₄) y calor pierden agua y forman <b>alquenos</b>: R−CH₂−CH₂OH → R−CH=CH₂ + H₂O.</li>
 <li><b>Combustión:</b> los de masa baja y media son inflamables: CₙH₂ₙ₊₁OH + (3n/2) O₂ → n CO₂ + (n+1) H₂O + calor.</li></ol>
 <p class="note">Complementario [2]: los secundarios se oxidan a <b>cetonas</b> y los terciarios prácticamente no se oxidan.</p>`,
 memo:`Na → alcóxido + H₂ · oxidación 1° → aldehído → ácido · H₂SO₄/calor → alqueno · O₂ → CO₂ + H₂O.`},
{t:`t27`,src:`Tema 27, pág. 16`,title:`Propiedades químicas de los fenoles`,fig:`reaccFenol`,
 body:`<p>El −OH unido directamente al anillo cambia tanto al −OH como al anillo.</p>
 <p><b>1. Reacciones del grupo −OH</b></p>
 <ul><li><b>Acidez aumentada y sales:</b> reaccionan con metales alcalinos y también con <b>bases fuertes acuosas</b> como el NaOH (un alcohol común no lo hace): C₆H₅OH + NaOH → C₆H₅O⁻Na⁺ + H₂O.</li>
 <li><b>Síntesis de Williamson (éteres):</b> el ion fenóxido es buen nucleófilo y reacciona con haluros de alquilo primarios: C₆H₅O⁻Na⁺ + CH₃−I → C₆H₅−O−CH₃ (<b>anisol</b>) + NaI.</li></ul>
 <p><b>2. SEAr en el anillo:</b> el −OH es un <b>activante muy fuerte</b> y <b>director orto/para</b>; el fenol es mucho más reactivo que el benceno.</p>
 <ul><li><b>Bromación:</b> C₆H₅OH + 3 Br₂ → <b>2,4,6-tribromofenol</b>↓ + 3 HBr.</li><li><b>Nitración:</b> con ácido nítrico <b>diluido</b>.</li><li><b>Sulfonación:</b> con ácido sulfúrico concentrado.</li></ul>
 <p>Compara con el Tema 26 (pág. 7): el benceno necesita FeBr₃ para bromarse y entra un solo Br; el fenol no necesita catalizador y entran tres.</p>`,
 memo:`Fenol + NaOH → fenóxido (sal). −OH = activa y dirige a orto/para (2,4,6).`},
{t:`t27`,src:`Tema 27 (índice, punto 6) · compl. [2]`,title:`Orden de acidez`,fig:`acidez`,
 body:`<p>El índice del tema incluye "Orden de acidez", pero no tiene lámina propia; se deduce de las págs. 13–16 y se completa con bibliografía [2].</p>
 <p class="fx">ácido carboxílico (pKa ≈ 5) > fenol (≈ 10) > agua (15.7) ≈ metanol > alcohol 1° > 2° > 3° (≈ 18)</p>
 <ul><li><b>Regla de oro:</b> menor pKa = más ácido.</li>
 <li><b>¿Por qué el fenol es más ácido que el etanol?</b> Al perder el H⁺ queda el ion fenóxido, cuya carga negativa se reparte por el anillo (resonancia). Un alcóxido no tiene dónde repartirla.</li>
 <li><b>Consecuencia práctica:</b> el fenol reacciona con NaOH; el etanol necesita Na metálico.</li>
 <li>Los grupos que atraen electrones (como −NO₂) aumentan la acidez del fenol: el <b>ácido pícrico</b> (2,4,6-trinitrofenol) es muy ácido, por eso se llama "ácido".</li></ul>`,
 memo:`COOH > fenol > agua ≈ alcohol. Menor pKa = más ácido.`}
];

const MCQ_T27 = [
{t:`t27`,src:`Tema 27, pág. 3`,q:`Las funciones orgánicas oxigenadas están formadas por:`,o:[`Carbono, hidrógeno y oxígeno`,`Solo carbono e hidrógeno`,`Carbono, hidrógeno y nitrógeno`,`Carbono y oxígeno`],e:`El oxígeno es el heteroátomo del grupo funcional.`},
{t:`t27`,src:`Tema 27, pág. 3`,q:`La fórmula general de un alcohol saturado con un −OH es:`,o:[`CₙH₂ₙ₊₂O`,`CₙH₂ₙO`,`CₙH₂ₙ₋₆O`,`CₙH₂ₙO₂`],e:`Etanol: n = 2 → C₂H₆O.`},
{t:`t27`,src:`Tema 27, pág. 3`,q:`La fórmula general de los fenoles es:`,o:[`CₙH₂ₙ₋₆O (n ≥ 6)`,`CₙH₂ₙ₊₂O`,`CₙH₂ₙO`,`CₙH₂ₙ₋₂O`],e:`Fenol C₆H₆O; timol C₁₀H₁₄O.`},
{t:`t27`,src:`Tema 27, pág. 3`,q:`¿Qué diferencia a un fenol de un alcohol?`,o:[`En el fenol el −OH está unido directamente a un anillo aromático`,`El fenol no tiene oxígeno`,`El fenol tiene un grupo −CHO`,`El alcohol siempre es cíclico`],e:`Alcohol R−OH; fenol Ar−OH.`},
{t:`t27`,src:`Tema 27, pág. 4`,q:`¿Qué función tiene la misma fórmula global que los alcoholes (CₙH₂ₙ₊₂O)?`,o:[`Éter`,`Aldehído`,`Cetona`,`Éster`],e:`Por eso alcohol y éter con los mismos C son isómeros de función.`},
{t:`t27`,src:`Tema 27, pág. 4`,q:`El grupo carbonilo terminal (R−CHO) corresponde a:`,o:[`Aldehído`,`Cetona`,`Éter`,`Alcohol`],e:`Si el carbonilo está en medio (R−CO−R') es cetona.`},
{t:`t27`,src:`Tema 27, pág. 4`,q:`Ácido acético (CH₃−COOH) pertenece a la función:`,o:[`Ácido carboxílico`,`Éster`,`Aldehído`,`Alcohol`],e:`Grupo carboxilo −COOH; global CₙH₂ₙO₂.`},
{t:`t27`,src:`Tema 27, pág. 5`,q:`Según el material, ¿cuál es el orden correcto de prioridad?`,o:[`Ácido > éster > aldehído > cetona > alcohol > éter`,`Alcohol > cetona > aldehído > ácido`,`Éter > alcohol > cetona > ácido`,`Cetona > aldehído > éster > ácido`],e:`El ácido carboxílico tiene la máxima prioridad.`},
{t:`t27`,src:`Tema 27, pág. 5`,q:`¿Cuál es el nombre de CH₃−CH(OH)−CH₂−CH₃?`,o:[`Butan-2-ol`,`Butan-3-ol`,`2-hidroxibutano`,`Butanol-2-ona`],e:`Se numera para dar al −OH el número más bajo (2).`},
{t:`t27`,src:`Tema 27, pág. 6`,q:`Cuando el −OH es grupo secundario se nombra con el prefijo:`,o:[`Hidroxi-`,`Oxo-`,`Alcoxi-`,`Formil-`],e:`El sufijo -ol solo se usa si el alcohol es la función principal.`},
{t:`t27`,src:`Tema 27, pág. 6`,q:`El prefijo "oxo-" corresponde a:`,o:[`Cetona (y aldehído)`,`Alcohol`,`Éter`,`Ácido`],e:`Cetona: oxo-; aldehído: formil- u oxo-.`},
{t:`t27`,src:`Tema 27, pág. 6`,q:`El metoxietano (CH₃−O−CH₂−CH₃) es un:`,o:[`Éter`,`Alcohol`,`Éster`,`Aldehído`],e:`Éter: −O− entre dos cadenas; se nombra con -oxi- (alcoxi).`},
{t:`t27`,src:`Tema 27, pág. 7`,q:`El nombre de CH₃−CH(CH₃)−CH(OH)−CH₃ es:`,o:[`3-metilbutan-2-ol`,`2-metilbutan-3-ol`,`3-metilbutanol`,`2-metilbutan-2-ol`],e:`Desde la derecha el −OH queda en C2 y el metilo en C3.`},
{t:`t27`,src:`Tema 27, pág. 7`,q:`El nombre de CH₂=CH−CH₂−OH es:`,o:[`Prop-2-en-1-ol`,`Prop-1-en-3-ol`,`Propan-1-ol`,`Prop-2-in-1-ol`],e:`El −OH manda: C1. El doble enlace queda en C2.`},
{t:`t27`,src:`Tema 27, pág. 8`,q:`El nombre IUPAC del etilenglicol (HO−CH₂−CH₂−OH) es:`,o:[`Etano-1,2-diol`,`Etan-1,2-ol`,`Etanodiol-1`,`Dietanol`],e:`Con varios −OH se conserva la "o" del alcano: etano + 1,2-diol.`},
{t:`t27`,src:`Tema 27, pág. 8`,q:`La glicerina es el:`,o:[`Propano-1,2,3-triol`,`Propan-2-ol`,`Etano-1,2-diol`,`Butano-1,2,3-triol`],e:`HO−CH₂−CH(OH)−CH₂−OH.`},
{t:`t27`,src:`Tema 27, pág. 8`,q:`En un alcohol cíclico, el carbono que lleva el −OH:`,o:[`Es siempre el C1 y su número no se escribe (si hay un solo −OH)`,`Es el de número más alto`,`Depende del orden alfabético`,`Se numera al final`],e:`Ej.: 3-metilciclohexanol.`},
{t:`t27`,src:`Tema 27, pág. 8`,q:`El nombre de CH₃−CO−CH₂−CH₂−OH es:`,o:[`4-hidroxibutan-2-ona`,`Butan-1-ol-3-ona`,`3-oxobutan-1-ol`,`1-hidroxibutan-3-ona`],e:`La cetona tiene más prioridad: da el sufijo -ona y el −OH pasa a hidroxi-.`},
{t:`t27`,src:`Tema 27, pág. 9`,q:`El alcohol de madera es el:`,o:[`Metanol`,`Etanol`,`Propan-2-ol`,`Glicerol`],e:`Alcohol metílico = de madera (tóxico).`},
{t:`t27`,src:`Tema 27, pág. 9`,q:`El alcohol isopropílico es el:`,o:[`Propan-2-ol`,`Propan-1-ol`,`2-metilpropan-2-ol`,`Butan-2-ol`],e:`CH₃−CH(OH)−CH₃.`},
{t:`t27`,src:`Tema 27, pág. 9`,q:`El alcohol tert-butílico ((CH₃)₃C−OH) se llama:`,o:[`2-metilpropan-2-ol`,`Butan-2-ol`,`2-metilpropan-1-ol`,`Butan-1-ol`],e:`El alcohol isobutílico es el 2-metilpropan-1-ol.`},
{t:`t27`,src:`Tema 27, pág. 9`,q:`El alcohol bencílico (C₆H₅−CH₂−OH) es:`,o:[`Fenilmetanol, un alcohol (no un fenol)`,`Un fenol`,`Un éter`,`Hidroxibenceno`],e:`El −OH está en el CH₂, no en el anillo: es alcohol.`},
{t:`t27`,src:`Tema 27, pág. 10`,q:`En la nomenclatura de fenoles, el carbono unido al −OH es:`,o:[`El C1`,`El C2`,`El de número más alto`,`El que indica el orden alfabético`],e:`Luego se numera hacia los números más bajos.`},
{t:`t27`,src:`Tema 27, pág. 10`,q:`Un fenol con −Cl en C4 se llama:`,o:[`4-clorofenol (p-clorofenol)`,`2-clorofenol`,`3-clorofenol`,`1-cloro-4-fenol`],e:`Posición 4 = para.`},
{t:`t27`,src:`Tema 27, pág. 12`,q:`El o-cresol es el:`,o:[`2-metilfenol`,`3-metilfenol`,`4-metilfenol`,`Metoxibenceno`],e:`Orto = 2. El m-cresol es 3-metilfenol y el p-cresol, 4-metilfenol.`},
{t:`t27`,src:`Tema 27, pág. 11`,q:`¿Cuándo NO se usan orto, meta, para en los fenoles?`,o:[`Cuando hay dos o más sustituyentes además del −OH`,`Cuando hay un solo sustituyente`,`Nunca se usan`,`Cuando el sustituyente es un halógeno`],e:`Ej.: 4-bromo-2,6-dimetilfenol.`},
{t:`t27`,src:`Tema 27, pág. 11–12`,q:`El benceno-1,2-diol se conoce como:`,o:[`Catecol`,`Resorcinol`,`Hidroquinona`,`Pirogalol`],e:`1,2 catecol · 1,3 resorcinol · 1,4 hidroquinona · 1,2,3 pirogalol.`},
{t:`t27`,src:`Tema 27, pág. 11–12`,q:`La hidroquinona es el:`,o:[`Benceno-1,4-diol`,`Benceno-1,3-diol`,`Benceno-1,2-diol`,`Benceno-1,2,3-triol`],e:`Los −OH en posición para.`},
{t:`t27`,src:`Tema 27, pág. 12`,q:`El ácido pícrico es el:`,o:[`2,4,6-trinitrofenol`,`Ácido 2-hidroxibenzoico`,`2,4,6-trinitrotolueno`,`Benceno-1,2,3-triol`],e:`El ácido salicílico es el ácido 2-hidroxibenzoico; el TNT, el trinitrotolueno.`},
{t:`t27`,src:`Tema 27, pág. 12`,q:`El timol es el:`,o:[`2-isopropil-5-metilfenol`,`4-metilfenol`,`Benceno-1,3-diol`,`2-metoxifenol`],e:`C₁₀H₁₄O, el ejemplo de la pág. 3.`},
{t:`t27`,src:`Tema 27, pág. 13`,q:`¿Por qué los alcoholes tienen puntos de ebullición elevados?`,o:[`Porque forman puentes de hidrógeno entre sus moléculas`,`Porque son iónicos`,`Porque no son polares`,`Porque son aromáticos`],e:`El −OH es muy polar y forma puentes de H (más las fuerzas de dispersión, que crecen con el tamaño).`},
{t:`t27`,src:`Tema 27, pág. 13`,q:`Según el material, los alcoholes son solubles en agua cuando tienen:`,o:[`De 1 a 3 carbonos`,`De 5 a 10 carbonos`,`Más de 12 carbonos`,`Cualquier tamaño`],e:`A mayor cadena, menor solubilidad.`},
{t:`t27`,src:`Tema 27, pág. 13`,q:`Los alcoholes de 12 carbonos o más son, a temperatura ambiente:`,o:[`Sólidos cerosos e inodoros`,`Líquidos incoloros`,`Gases`,`Líquidos viscosos con olor`],e:`De 1 a 11 C son líquidos.`},
{t:`t27`,src:`Tema 27, pág. 13`,q:`Que los alcoholes sean anfóteros significa que:`,o:[`Pueden actuar como ácidos y como bases débiles`,`Son muy ácidos`,`No reaccionan`,`Solo actúan como bases`],e:`Reaccionan con Na o K liberando H₂.`},
{t:`t27`,src:`Tema 27, pág. 14 · compl. [2]`,q:`¿Cuál es más ácido y por qué?`,o:[`El fenol, porque su pKa (≈ 10) es MENOR que el del etanol (≈ 16)`,`El etanol, porque su pKa es mayor`,`El fenol, porque su pKa es mayor`,`Son iguales`],e:`A menor pKa, mayor acidez. El material escribe "mayor" por error.`},
{t:`t27`,src:`Tema 27, pág. 14`,q:`La densidad del fenol es:`,o:[`Mayor que la del agua (1.07)`,`Menor que la del agua`,`Igual a la del agua`,`0.5 g/mL`],e:`Los alcoholes simples, en cambio, son menos densos.`},
{t:`t27`,src:`Tema 27, pág. 15`,q:`2 R−OH + 2 Na produce:`,o:[`2 R−O⁻Na⁺ + H₂`,`R−O−R + H₂O`,`Alqueno + H₂O`,`Aldehído`],e:`Comportamiento ácido: se libera hidrógeno gaseoso.`},
{t:`t27`,src:`Tema 27, pág. 15`,q:`Un alcohol primario con un oxidante suave forma:`,o:[`Un aldehído`,`Una cetona`,`Un alqueno`,`Un éter`],e:`Con oxidante fuerte sigue hasta ácido carboxílico.`},
{t:`t27`,src:`Tema 27, pág. 15`,q:`La deshidratación de un alcohol (H₂SO₄ y calor) produce:`,o:[`Un alqueno y agua`,`Un aldehído`,`Un ácido`,`Un alcano`],e:`R−CH₂−CH₂OH → R−CH=CH₂ + H₂O.`},
{t:`t27`,src:`Tema 27, pág. 15`,q:`En la combustión completa de 1 mol de etanol (n = 2), ¿cuántos mol de O₂ se usan?`,o:[`3`,`2`,`3.5`,`6`],e:`3n/2 = 3 → C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O.`},
{t:`t27`,src:`Tema 27, pág. 15 · compl. [2]`,q:`Un alcohol secundario (como el propan-2-ol) al oxidarse forma:`,o:[`Una cetona (propanona)`,`Un aldehído`,`Un ácido carboxílico`,`No se oxida`],e:`1° → aldehído → ácido; 2° → cetona; 3° casi no se oxida.`},
{t:`t27`,src:`Tema 27, pág. 16`,q:`C₆H₅OH + NaOH produce:`,o:[`C₆H₅O⁻Na⁺ + H₂O (fenóxido de sodio)`,`C₆H₅Na + H₂O`,`No reacciona`,`C₆H₆ + NaOH`],e:`El fenol es lo bastante ácido para reaccionar con una base acuosa.`},
{t:`t27`,src:`Tema 27, pág. 16`,q:`La síntesis de Williamson con fenóxido de sodio y CH₃−I forma:`,o:[`Anisol (metoxibenceno), un éter`,`Tolueno`,`Fenol`,`Ácido benzoico`],e:`C₆H₅O⁻Na⁺ + CH₃I → C₆H₅−O−CH₃ + NaI.`},
{t:`t27`,src:`Tema 27, pág. 16`,q:`En la SEAr del fenol, el grupo −OH es:`,o:[`Activante muy fuerte y director orto/para`,`Desactivante y director meta`,`Inerte`,`Desactivante orto/para`],e:`Por eso el fenol es mucho más reactivo que el benceno.`},
{t:`t27`,src:`Tema 27, pág. 16`,q:`Fenol + 3 Br₂ produce:`,o:[`2,4,6-tribromofenol + 3 HBr`,`Bromobenceno`,`3-bromofenol`,`Hexabromociclohexano`],e:`Entran Br en las dos posiciones orto y en la para.`},
{t:`t27`,src:`Tema 27 (punto 6) · compl. [2]`,q:`Ordene de mayor a menor acidez: etanol, ácido acético, fenol.`,o:[`Ácido acético > fenol > etanol`,`Etanol > fenol > ácido acético`,`Fenol > ácido acético > etanol`,`Fenol > etanol > ácido acético`],e:`pKa ≈ 4.8 < 10 < 16.`}
];

const ABIERTAS_T27 = [
{t:`t27`,src:`Tema 27, pág. 3–4`,q:`Diferencie alcoholes y fenoles en estructura, fórmula general y un ejemplo de cada uno.`,a:`Alcohol: el −OH está unido a un carbono de una cadena alifática (R−OH); fórmula CₙH₂ₙ₊₂O; ejemplo, etanol CH₃CH₂OH (C₂H₆O). Fenol: el −OH está unido directamente a un anillo aromático (Ar−OH); fórmula CₙH₂ₙ₋₆O con n ≥ 6; ejemplos, fenol C₆H₅OH y timol C₁₀H₁₄O.`},
{t:`t27`,src:`Tema 27, pág. 5–8`,q:`Explique los pasos para nombrar un alcohol y cómo cambia el nombre si hay varios −OH o si el −OH no es la función principal.`,a:`1) Elegir la cadena más larga que contenga el C del −OH. 2) Numerar dando el número más bajo al −OH. 3) Nombrar ramas e insaturaciones (-en, -in). 4) Cambiar la "o" final del alcano por -ol con su localizador: butan-2-ol. Con varios −OH se conserva la "o" y se usa -diol, -triol: etano-1,2-diol. En cíclicos el C del −OH es C1. Si hay una función de mayor prioridad (ácido, éster, aldehído, cetona), el −OH se nombra como hidroxi-: 4-hidroxibutan-2-ona.`},
{t:`t27`,src:`Tema 27, pág. 13`,q:`Explique cómo influye el puente de hidrógeno en el punto de ebullición y la solubilidad de los alcoholes.`,a:`El −OH es muy polar: el H queda parcialmente positivo y se atrae con el O de otra molécula. Entre moléculas de alcohol, esos puentes hacen que cueste más separarlas, por eso hierven más alto que los alcanos de masa parecida. Con el agua también forman puentes, por eso los alcoholes pequeños (1 a 3 C) son solubles; al crecer la cadena (parte apolar) disminuye la solubilidad.`},
{t:`t27`,src:`Tema 27, pág. 15`,q:`Describa las cuatro reacciones químicas de los alcoholes con su ecuación general.`,a:`1) Acidez débil: 2 R−OH + 2 Na → 2 R−O⁻Na⁺ + H₂. 2) Oxidación de primarios: R−CH₂OH → (suave) R−CHO → (fuerte) R−COOH. 3) Deshidratación con H₂SO₄ o H₃PO₄ y calor: R−CH₂−CH₂OH → R−CH=CH₂ + H₂O. 4) Combustión: CₙH₂ₙ₊₁OH + (3n/2) O₂ → n CO₂ + (n+1) H₂O + calor.`},
{t:`t27`,src:`Tema 27, pág. 14 y 16 · compl. [2]`,q:`¿Por qué el fenol es más ácido que el etanol? ¿Qué prueba química lo demuestra?`,a:`Al perder el H⁺, el fenol forma el ion fenóxido, cuya carga negativa se reparte por el anillo aromático (resonancia) y lo estabiliza; el ion etóxido no tiene esa estabilización. Por eso el fenol tiene un pKa menor (≈ 10 frente a ≈ 16): a menor pKa, mayor acidez. Prueba: el fenol reacciona con una base acuosa como el NaOH (C₆H₅OH + NaOH → C₆H₅O⁻Na⁺ + H₂O), mientras que el etanol necesita un metal alcalino como el Na.`}
];

const EJ_T27 = [
{t:`t27`,src:`Tema 27, pág. 7 (ejemplo)`,q:`Nombre CH₃−CH(CH₃)−CH(OH)−CH₃ y dé su fórmula molecular.`,
 pide:`Aplicar las reglas del sufijo -ol.`,datos:[`Cadena de 4 C con −OH y un metilo`],f:`localizador rama + raíz + an + localizador OH + ol`,
 pasos:[`Cadena principal con el C del −OH: 4 C → butan-…-ol.`,`Desde la derecha el −OH queda en C2; desde la izquierda, en C3. Gana la derecha.`,`El metilo queda en C3.`,`Nombre: 3-metilbutan-2-ol.`,`5 C en total: CₙH₂ₙ₊₂O → C₅H₁₂O.`],r:`3-metilbutan-2-ol, C₅H₁₂O`},
{t:`t27`,src:`Tema 27, pág. 7 (ejemplo)`,q:`Nombre CH₂=CH−CH₂−OH.`,
 pide:`Alcohol con insaturación: el −OH manda en la numeración.`,datos:[`3 C, un doble enlace`],f:`raíz + en + ol`,
 pasos:[`3 C → prop.`,`Numerar desde el C del −OH: OH en C1.`,`El doble enlace queda entre C2 y C3 → -2-en-.`,`Nombre: prop-2-en-1-ol (alcohol alílico).`],r:`prop-2-en-1-ol`},
{t:`t27`,src:`Aplicación de Tema 27, pág. 7`,q:`Nombre: a) CH₃−CH₂−CH₂−CH₂−OH; b) CH₃−CH₂−CH(OH)−CH₂−CH₃; c) CH₃−CH(CH₃)−CH₂−CH₂−OH; d) (CH₃)₃C−OH.`,
 pide:`Numerar dando el número más bajo al −OH.`,datos:[`−OH = función principal`],f:`—`,
 pasos:[`a) 4 C, OH en C1 → butan-1-ol.`,`b) 5 C, OH en C3 desde cualquier lado → pentan-3-ol.`,`c) 4 C; desde el −OH: OH en C1 y metilo en C3 → 3-metilbutan-1-ol.`,`d) 3 C en la cadena con el C del −OH en el centro; metilo y −OH en C2 → 2-metilpropan-2-ol (alcohol tert-butílico).`],r:`butan-1-ol, pentan-3-ol, 3-metilbutan-1-ol, 2-metilpropan-2-ol`},
{t:`t27`,src:`Tema 27, pág. 8 (ejemplos)`,q:`Nombre: a) HO−CH₂−CH₂−OH; b) HO−CH₂−CH(OH)−CH₂−OH; c) CH₃−CO−CH₂−CH₂−OH.`,
 pide:`Polioles y −OH como grupo secundario.`,datos:[`La cetona tiene más prioridad que el alcohol`],f:`—`,
 pasos:[`a) Dos −OH: se conserva la "o": etano-1,2-diol (etilenglicol).`,`b) Tres −OH: propano-1,2,3-triol (glicerina).`,`c) La cetona da el sufijo: 4 C, C=O en C2 → butan-2-ona; el −OH en C4 → prefijo hidroxi-: 4-hidroxibutan-2-ona.`],r:`etano-1,2-diol; propano-1,2,3-triol; 4-hidroxibutan-2-ona`},
{t:`t27`,src:`Aplicación de Tema 27, pág. 10–12`,q:`Nombre los fenoles: a) −OH y −CH₃ en para; b) −OH en C1 y −NO₂ en C2; c) −OH en C1, −Cl en C2 y C4; d) −OH en C1 y C3.`,
 pide:`El C del −OH es C1; números más bajos.`,datos:[`Con 2+ sustituyentes además del −OH no se usa o/m/p`],f:`—`,
 pasos:[`a) 4-metilfenol = p-cresol.`,`b) 2-nitrofenol = o-nitrofenol.`,`c) 2,4-diclorofenol (dos sustituyentes: solo números).`,`d) Dos −OH: derivado del benceno → benceno-1,3-diol = resorcinol.`],r:`4-metilfenol, 2-nitrofenol, 2,4-diclorofenol, benceno-1,3-diol`},
{t:`t27`,src:`Aplicación de Tema 27, pág. 15`,q:`Escriba la ecuación balanceada de la combustión completa del etanol y del propan-1-ol.`,
 pide:`Aplicar CₙH₂ₙ₊₁OH + (3n/2) O₂ → n CO₂ + (n+1) H₂O.`,datos:[`Etanol n = 2; propanol n = 3`],f:`O₂ = 3n/2`,
 pasos:[`Etanol: 3(2)/2 = 3 → C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O.`,`Comprobación O: 1 + 6 = 7 a la izquierda; 4 + 3 = 7 a la derecha ✔.`,`Propanol: 3(3)/2 = 4.5 → C₃H₇OH + 4.5 O₂ → 3 CO₂ + 4 H₂O.`,`Sin decimales (× 2): 2 C₃H₇OH + 9 O₂ → 6 CO₂ + 8 H₂O.`],r:`C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O; 2 C₃H₇OH + 9 O₂ → 6 CO₂ + 8 H₂O`},
{t:`t27`,src:`Aplicación de Tema 27, pág. 15 y Tema 16`,q:`¿Cuántos gramos de CO₂ se producen al quemar 23 g de etanol? (C = 12, H = 1, O = 16)`,
 pide:`Estequiometría con la ecuación de combustión.`,datos:[`23 g de C₂H₅OH`],f:`n = m / PM`,
 pasos:[`PM etanol = 2(12) + 6(1) + 16 = 46 g/mol.`,`n = 23 / 46 = 0.5 mol.`,`C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O: 1 mol da 2 mol de CO₂ → 1 mol de CO₂.`,`PM CO₂ = 44 g/mol → 44 g.`],r:`44 g de CO₂`},
{t:`t27`,src:`Aplicación de Tema 27, pág. 15 · compl. [2]`,q:`Prediga el producto: a) propan-1-ol + oxidante suave; b) propan-1-ol + oxidante fuerte; c) propan-2-ol + oxidante; d) propan-1-ol + H₂SO₄ y calor; e) etanol + Na.`,
 pide:`Reacciones de los alcoholes.`,datos:[`Propan-1-ol es primario; propan-2-ol es secundario`],f:`—`,
 pasos:[`a) Aldehído: propanal (CH₃−CH₂−CHO).`,`b) Ácido: ácido propanoico (CH₃−CH₂−COOH).`,`c) Secundario → cetona: propanona (acetona).`,`d) Deshidratación → propeno (CH₃−CH=CH₂) + H₂O.`,`e) Etóxido de sodio (CH₃CH₂O⁻Na⁺) + H₂ (2 C₂H₅OH + 2 Na → 2 C₂H₅ONa + H₂).`],r:`propanal, ácido propanoico, propanona, propeno, etóxido + H₂`},
{t:`t27`,src:`Aplicación de Tema 27, pág. 3–4`,q:`Compruebe con la fórmula general: a) C₄H₁₀O ¿alcohol o fenol?; b) C₇H₈O ¿cumple CₙH₂ₙ₋₆O?; c) dé un éter isómero del etanol.`,
 pide:`Usar las fórmulas globales del material.`,datos:[`Alcohol CₙH₂ₙ₊₂O; fenol CₙH₂ₙ₋₆O`],f:`—`,
 pasos:[`a) n = 4: 2(4) + 2 = 10 → C₄H₁₀O cumple la fórmula de alcohol (o de éter): por ejemplo, butan-1-ol.`,`b) n = 7: 2(7) − 6 = 8 → C₇H₈O cumple; es un metilfenol (cresol).`,`c) Etanol C₂H₆O; el éter con la misma fórmula es CH₃−O−CH₃ (dimetiléter, metoximetano): isómeros de función.`],r:`a) alcohol; b) sí, cresol; c) CH₃−O−CH₃`},
{t:`t27`,src:`Tema 27, pág. 16`,q:`Complete: a) fenol + NaOH; b) fenóxido de sodio + CH₃−I; c) fenol + 3 Br₂. ¿Por qué el bromo entra en 2, 4 y 6?`,
 pide:`Reacciones del fenol.`,datos:[`−OH: activante, orto/para`],f:`—`,
 pasos:[`a) C₆H₅O⁻Na⁺ + H₂O (fenóxido de sodio, una sal).`,`b) Síntesis de Williamson: C₆H₅−O−CH₃ (anisol) + NaI.`,`c) 2,4,6-tribromofenol (precipitado) + 3 HBr.`,`El −OH es director orto/para: las posiciones orto son 2 y 6 y la para es 4.`],r:`fenóxido; anisol; 2,4,6-tribromofenol`}
];

const FORM_T27 = [
{t:`t27`,src:`Tema 27, pág. 3–16`,title:`Alcoholes y fenoles`,rows:[
 [`Fórmulas`,`Alcohol R−OH, CₙH₂ₙ₊₂O · fenol Ar−OH, CₙH₂ₙ₋₆O (n ≥ 6)`],[`Prioridad`,`Ácido > éster > aldehído > cetona > alcohol/fenol > éter`],
 [`Nombre`,`alcano − "o" + "-n-ol" (butan-2-ol) · diol/triol conservan la "o" · cíclico: OH = C1 · secundario: hidroxi-`],
 [`Fenoles`,`OH = C1 · 1 sustituyente: o/m/p · 2+: solo números · polifenoles: benceno-diol`],
 [`Físicas`,`Puente de H · solubles 1–3 C · líquidos 1–11 C, sólidos 12+ · fenol: d = 1.07, cáustico`],
 [`Reacciones alcohol`,`+Na → R−O⁻Na⁺ + H₂ · oxidación 1° → aldehído → ácido · H₂SO₄/calor → alqueno`],
 [`Combustión`,`CₙH₂ₙ₊₁OH + (3n/2) O₂ → n CO₂ + (n+1) H₂O`],
 [`Reacciones fenol`,`+NaOH → fenóxido · Williamson → éter (anisol) · +3 Br₂ → 2,4,6-tribromofenol`],
 [`Acidez`,`COOH (≈ 5) > fenol (≈ 10) > agua ≈ alcohol (≈ 16). Menor pKa = más ácido`]]}
];

const FICHAS_T27 = [
{t:`t27`,src:`Tema 27, pág. 3`,fig:`grupoOH`,f:`Fórmula general de alcoholes y fenoles.`,b:`Alcohol R−OH (CₙH₂ₙ₊₂O). Fenol Ar−OH (CₙH₂ₙ₋₆O, n ≥ 6).`},
{t:`t27`,src:`Tema 27, pág. 4`,fig:null,f:`¿Qué funciones tienen C=O?`,b:`Aldehído (R−CHO), cetona (R−CO−R'), ácido (R−COOH) y éster (R−COO−R').`},
{t:`t27`,src:`Tema 27, pág. 5`,fig:`prioridad`,f:`Orden de prioridad de las oxigenadas.`,b:`Ácido > éster > aldehído > cetona > alcohol/fenol > éter.`},
{t:`t27`,src:`Tema 27, pág. 7`,fig:`nombreAlcohol`,f:`CH₃−CH(CH₃)−CH(OH)−CH₃`,b:`3-metilbutan-2-ol.`},
{t:`t27`,src:`Tema 27, pág. 7`,fig:null,f:`CH₂=CH−CH₂−OH`,b:`Prop-2-en-1-ol (alcohol alílico).`},
{t:`t27`,src:`Tema 27, pág. 8`,fig:`polioles`,f:`Etilenglicol y glicerina (IUPAC).`,b:`Etano-1,2-diol y propano-1,2,3-triol.`},
{t:`t27`,src:`Tema 27, pág. 8`,fig:null,f:`CH₃−CO−CH₂−CH₂−OH`,b:`4-hidroxibutan-2-ona (la cetona manda; el −OH es hidroxi-).`},
{t:`t27`,src:`Tema 27, pág. 9`,fig:null,f:`Alcohol isopropílico y tert-butílico.`,b:`Propan-2-ol y 2-metilpropan-2-ol.`},
{t:`t27`,src:`Tema 27, pág. 9`,fig:null,f:`Alcohol de madera y alcohol fino.`,b:`Metanol y etanol.`},
{t:`t27`,src:`Tema 27, pág. 10–12`,fig:`fenolesNom`,f:`o-, m-, p-cresol.`,b:`2-, 3-, 4-metilfenol.`},
{t:`t27`,src:`Tema 27, pág. 11–12`,fig:`polifenoles`,f:`Catecol, resorcinol, hidroquinona, pirogalol.`,b:`Benceno-1,2-diol · 1,3-diol · 1,4-diol · 1,2,3-triol.`},
{t:`t27`,src:`Tema 27, pág. 12`,fig:null,f:`Ácido salicílico y ácido pícrico.`,b:`Ácido 2-hidroxibenzoico y 2,4,6-trinitrofenol.`},
{t:`t27`,src:`Tema 27, pág. 13`,fig:`puentesH`,f:`¿Por qué el etanol se disuelve en agua y hierve alto?`,b:`Forma puentes de hidrógeno (−OH muy polar). Solubles de 1 a 3 C.`},
{t:`t27`,src:`Tema 27, pág. 13`,fig:null,f:`Estado físico de los alcoholes.`,b:`1–11 C: líquidos incoloros. 12 C o más: sólidos cerosos.`},
{t:`t27`,src:`Tema 27, pág. 14`,fig:`acidez`,f:`¿Fenol o etanol: cuál es más ácido?`,b:`El fenol (pKa ≈ 10, MENOR que ≈ 16). Reacciona incluso con NaOH.`},
{t:`t27`,src:`Tema 27, pág. 15`,fig:`reaccAlcohol`,f:`Oxidación de un alcohol primario.`,b:`Suave → aldehído; fuerte → ácido carboxílico.`},
{t:`t27`,src:`Tema 27, pág. 15`,fig:null,f:`Alcohol + H₂SO₄ y calor →`,b:`Alqueno + agua (deshidratación).`},
{t:`t27`,src:`Tema 27, pág. 16`,fig:`reaccFenol`,f:`Fenol + 3 Br₂ →`,b:`2,4,6-tribromofenol + 3 HBr (−OH dirige a orto/para).`}
];

const FQ_T27 = [
{t:`t27`,src:`Tema 27, pág. 5–8`,q:`"La molécula tiene −OH y C=O (cetona)." ¿Qué sufijo usas?`,o:[`-ona, y el −OH va como hidroxi-`,`-ol, y la cetona va como oxo-`,`-ol-ona`,`Cualquiera`],e:`La cetona tiene más prioridad que el alcohol.`},
{t:`t27`,src:`Tema 27, pág. 15`,q:`"¿Cuántos O₂ necesita la combustión de un alcohol de n carbonos?"`,o:[`3n/2`,`(3n + 1)/2`,`n + 1`,`2n`],e:`(3n + 1)/2 es para los alcanos (Tema 23); el alcohol ya trae un O.`},
{t:`t27`,src:`Tema 27, pág. 15`,q:`"Te dan un alcohol y un oxidante." ¿Qué revisas primero?`,o:[`Si es primario, secundario o terciario`,`Cuántos H tiene`,`Si es líquido`,`Su densidad`],e:`1° → aldehído/ácido · 2° → cetona · 3° → no se oxida.`},
{t:`t27`,src:`Tema 27, pág. 14 y punto 6`,q:`"¿Cuál es más ácido?" y te dan pKa. ¿Qué regla usas?`,o:[`El de menor pKa es el más ácido`,`El de mayor pKa es el más ácido`,`El que tenga más carbonos`,`El más denso`],e:`Igual que en el Tema 20: pKa = −log Ka.`}
];

const VIDEOS_T27 = [
{t:`t27`,sub:`Nomenclatura de alcoholes paso a paso`,src:`Tema 27, pág. 5–8`,id:`m-Ipf5tK5tY`,title:`Alcoholes: nomenclatura (fácil y paso a paso)`,ch:``,rep:[`Alcoholes como función principal (sufijo -ol)`,`Nomenclatura: regla general y prioridad`]},
{t:`t27`,sub:`Nomenclatura de alcoholes (muchos ejemplos)`,src:`Tema 27, pág. 7–9`,id:`rX_LJDXC7wE`,title:`Nomenclatura de alcoholes (muchos ejemplos)`,ch:``,rep:[`Alcoholes como función principal (sufijo -ol)`,`Polialcoholes, alcoholes cíclicos y -OH secundario`,`Nombres IUPAC y comunes de alcoholes`]},
{t:`t27`,sub:`Cómo nombrar alcoholes`,src:`Tema 27, pág. 7`,id:`vYVRwgTeMN8`,title:`Cómo nombrar alcoholes`,ch:``,rep:[`Alcoholes como función principal (sufijo -ol)`]},
{t:`t27`,sub:`Prioridad de grupos funcionales`,src:`Tema 27, pág. 5–6`,id:`0-Y1Iz16uYM`,title:`Orden de prioridad de los grupos funcionales de química orgánica`,ch:``,rep:[`Nomenclatura: regla general y prioridad`,`Clasificación de las funciones oxigenadas`]},
{t:`t27`,sub:`Nomenclatura de fenoles`,src:`Tema 27, pág. 10–12`,id:`9A5Ex1YWYYk`,title:`Nomenclatura del fenol: ejercicios`,ch:`Química Profe Germán`,rep:[`Nomenclatura de fenoles`,`Fenoles polisustituidos, polifenoles y nombres comunes`]},
{t:`t27`,sub:`Fenoles: nomenclatura y formulación`,src:`Tema 27, pág. 10–12`,id:`CsGcTrcO-fo`,title:`Fenoles: nomenclatura y formulación (ejercicios)`,ch:``,rep:[`Nomenclatura de fenoles`,`Fenoles polisustituidos, polifenoles y nombres comunes`]},
{t:`t27`,sub:`Propiedades físicas: punto de ebullición`,src:`Tema 27, pág. 13`,id:`s1M6BdHFWOo`,title:`Propiedades físicas de alcoholes (punto de ebullición)`,ch:``,rep:[`Propiedades físicas de los alcoholes`]},
{t:`t27`,sub:`Alcoholes: propiedades físicas`,src:`Tema 27, pág. 13`,id:`bCcEwEd8vMo`,title:`Alcoholes: propiedades físicas`,ch:``,rep:[`Propiedades físicas de los alcoholes`]},
{t:`t27`,sub:`Oxidación de alcoholes`,src:`Tema 27, pág. 15`,id:`Cdr7Fu-CM_s`,title:`Oxidación de alcoholes`,ch:``,rep:[`Propiedades químicas de los alcoholes`]},
{t:`t27`,sub:`Deshidratación de alcoholes`,src:`Tema 27, pág. 15`,id:`8847gIRs_kk`,title:`Deshidratación de alcoholes`,ch:``,rep:[`Propiedades químicas de los alcoholes`]},
{t:`t27`,sub:`Acidez de alcoholes y fenoles`,src:`Tema 27, pág. 14 y punto 6`,id:`asuNqTCWch4`,title:`Acidez de alcoholes y fenoles. Variación de la acidez de fenoles sustituidos`,ch:``,rep:[`Orden de acidez`,`Propiedades físicas de los fenoles`]},
{t:`t27`,sub:`Acidez del fenol`,src:`Tema 27, pág. 14 y 16`,id:`T9s8N458_uA`,title:`Acidez del fenol`,ch:``,rep:[`Orden de acidez`,`Propiedades químicas de los fenoles`]}
];
VIDEOS.push(...VIDEOS_T27);
