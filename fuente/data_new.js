/* ======================= CONTENIDO NUEVO: TEMAS 20 Y 21 ======================= */
const REPASO_NEW = [
{t:`t20`,src:`Tema 20, pág. 2–3`,title:`pH y pKa: qué mide cada uno`,fig:`escalaPH`,
 body:`<p><b>pH (potencial de hidrógeno):</b> mide la concentración de iones hidrógeno en la solución.</p>
 <p class="fx">pH = −log [H⁺]</p>
 <p>El logaritmo de un número pequeño (como 0.0035) es negativo; el signo menos de la fórmula lo vuelve positivo para que quepa en la escala 0–14.</p>
 <p><b>Ejemplo del material (pág. 2):</b> [H⁺] = 3.5 × 10⁻³ M → −log(3.5 × 10⁻³) = 2.456. El docente lo reporta como 2.45 (truncado); redondeado a dos decimales sería 2.46.</p>
 <p><b>pKa (fuerza ácida):</b> logaritmo negativo de la constante de disociación ácida Ka. Indica qué tan fuerte es un ácido en agua.</p>
 <p class="fx">pKa = −log (Ka)</p>
 <p><b>Ejemplo (pág. 3):</b> Ka del ácido acético = 1.8 × 10⁻⁵ → pKa = 4.74.</p>
 <p>Regla de oro: <b>a menor pKa, más fuerte el ácido</b> (porque su Ka es más grande).</p>`,
 memo:`pH habla de la solución; pKa habla del ácido. Menor pKa = ácido más fuerte.`},
{t:`t20`,src:`Tema 20, pág. 4 y 7`,title:`Escala logarítmica de acidez`,fig:`kw`,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Zona</th><th>pH</th><th>Qué predomina</th></tr></thead><tbody>
 <tr><td>Ácida</td><td>&lt; 7</td><td>Alta concentración de protones [H⁺]</td></tr>
 <tr><td>Neutra</td><td>= 7</td><td>[H⁺] = [OH⁻]</td></tr>
 <tr><td>Básica</td><td>&gt; 7</td><td>Predominio de iones hidróxido [OH⁻]</td></tr></tbody></table></div>
 <p>La escala es <b>logarítmica</b>: bajar una unidad de pH significa tener <b>10 veces más</b> H⁺. De pH 7 a pH 4 hay 3 unidades: 10 × 10 × 10 = 1 000 veces más H⁺.</p>
 <p>La tabla de la pág. 7 muestra que, a cada pH, [H⁺] = 10⁻ᵖᴴ y [OH⁻] = 10⁻⁽¹⁴⁻ᵖᴴ⁾. Ejemplo: pH 2 → [H⁺] = 10⁻² y [OH⁻] = 10⁻¹².</p>`,
 memo:`1 unidad de pH = 10 veces. 3 unidades = 1 000 veces.`},
{t:`t20`,src:`Tema 20, pág. 5`,title:`pH de ácidos fuertes`,fig:`fuerteDebil`,
 body:`<p>Un ácido fuerte se disocia <b>al 100 %</b>, así que la [H⁺] es igual a la concentración molar inicial del ácido (C₀).</p>
 <p class="fx">pH = −log [C₀]</p>
 <p><b>Ejemplo del material:</b> HCl 0.05 M → [H⁺] = 0.05 M → pH = −log(0.05) = 1.3.</p>
 <p><b>Ojo con la estequiometría</b> (Tema 21, pág. 2): si el ácido aporta 2 H⁺ por molécula (H₂SO₄ considerando disociación total), [H⁺] = 2 × C₀.</p>`,
 memo:`Fuerte: [H⁺] = C₀. No hay que usar Ka.`},
{t:`t20`,src:`Tema 20, pág. 6`,title:`pH de ácidos débiles`,fig:`ice`,
 body:`<p>Un ácido débil solo se disocia <b>parcialmente</b>. Por eso se necesita su constante Ka y una tabla de equilibrio.</p>
 <p class="fx">[H⁺] = √(Ka · C₀)  →  pH = −log [H⁺]</p>
 <p><b>Ejemplo del material:</b> ácido acético (CH₃COOH) 0.05 M, Ka = 1.8 × 10⁻⁵.</p>
 <ol><li>[H⁺] = √(1.8 × 10⁻⁵ × 0.05) = √(9 × 10⁻⁷) = 9.49 × 10⁻⁴ M</li><li>pH = −log(9.49 × 10⁻⁴) = 3.02</li></ol>
 <p>Compara: HCl 0.05 M tiene pH 1.3; el acético a la misma concentración tiene pH 3.02. La misma concentración, pero el débil libera muchos menos H⁺.</p>
 <p class="note">En la pág. 6 la fórmula final aparece como "pH = −log₁₀[C₀]", pero lo que se sustituye es la [H⁺] calculada (9.49 × 10⁻⁴), no C₀.</p>`,
 memo:`Débil: primero la raíz (√Ka·C₀), después el logaritmo.`},
{t:`t20`,src:`Tema 20, pág. 7`,title:`pOH`,fig:`escalaPH`,
 body:`<p>El pOH mide la concentración de iones hidroxilo (OH⁻). Funciona en escala inversa: <b>a menor pOH, mayor alcalinidad</b>.</p>
 <p class="fx">pOH = 14 − pH   ·   pOH = −log [OH⁻]</p>
 <p><b>Ejemplos del material:</b> ácido débil con pH 3.02 → pOH = 10.98. Ácido fuerte con pH 1.3 → pOH = 12.7.</p>
 <p>Para bases se calcula primero el pOH (con [OH⁻]) y luego pH = 14 − pOH.</p>`,
 memo:`pH + pOH = 14 (a 25 °C). Bases: primero pOH.`},
{t:`t20`,src:`Tema 20, pág. 8–9`,title:`Disociación: fuerte frente a débil`,fig:`fuerteDebil`,
 body:`<p><b>Disociación (o ionización):</b> proceso por el que un ácido o una base se separa en iones al disolverse en agua. Lo que distingue fuerte de débil es <b>cuánto</b> se separa.</p>
 <div class="scroll"><table class="tbl"><thead><tr><th></th><th>Fuertes</th><th>Débiles</th></tr></thead><tbody>
 <tr><th>Grado</th><td>100 % (completa)</td><td>Parcial, por lo general &lt; 5 %</td></tr>
 <tr><th>Flecha</th><td>Una sola (→), irreversible</td><td>Doble (⇌), equilibrio químico</td></tr>
 <tr><th>Ácido</th><td>HCl + H₂O → H₃O⁺ + Cl⁻</td><td>HA + H₂O ⇌ H₃O⁺ + A⁻</td></tr>
 <tr><th>Base</th><td>NaOH → Na⁺ + OH⁻</td><td>B + H₂O ⇌ BH⁺ + OH⁻</td></tr></tbody></table></div>
 <p>En un débil, la mayoría de las moléculas quedan intactas en su forma neutra.</p>`,
 memo:`→ = fuerte (100 %). ⇌ = débil (< 5 %).`},
{t:`t20`,src:`Tema 20, pág. 10`,title:`Constantes Ka y Kb: valor numérico`,fig:`phPka`,
 body:`<p>La constante de disociación es un número sin unidades que mide la <b>fuerza relativa</b> de un ácido o una base en agua, a una temperatura dada (por lo general 25 °C).</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Tipo</th><th>Rango de K</th><th>pK</th><th>En agua</th><th>Ejemplos</th></tr></thead><tbody>
 <tr><td>Ácido fuerte</td><td>Ka ≫ 1</td><td>pKa &lt; 0</td><td>100 %</td><td>HCl, HNO₃, H₂SO₄</td></tr>
 <tr><td>Ácido débil</td><td>10⁻² a 10⁻¹⁴</td><td>2 a 14</td><td>&lt; 5 %</td><td>CH₃COOH (1.8 × 10⁻⁵), HF (6.8 × 10⁻⁴)</td></tr>
 <tr><td>Base fuerte</td><td>Kb ≫ 1</td><td>pKb &lt; 0</td><td>100 %</td><td>NaOH, KOH, Ca(OH)₂</td></tr>
 <tr><td>Base débil</td><td>10⁻² a 10⁻¹⁴</td><td>2 a 14</td><td>&lt; 5 %</td><td>NH₃ (1.8 × 10⁻⁵), C₅H₅N (1.7 × 10⁻⁹)</td></tr></tbody></table></div>
 <p class="fx">Ka × Kb = 1.0 × 10⁻¹⁴   ·   pKa + pKb = 14</p>
 <p>Se cumple para cualquier par conjugado ácido-base a 25 °C. Si un ácido es muy fuerte, su base conjugada es muy débil.</p>`,
 memo:`K grande = fuerte. pK pequeño = fuerte. Par conjugado: Ka·Kb = 10⁻¹⁴.`},
{t:`t20`,src:`Tema 20, pág. 5–7 (síntesis)`,title:`Qué fórmula usar para pH`,fig:`decisionPH`,
 body:`<p>Antes de tocar la calculadora, contesta dos preguntas:</p>
 <ol><li><b>¿Es ácido o base?</b> Ácido: trabajas con H⁺ y pH. Base: trabajas con OH⁻ y pOH, y al final pH = 14 − pOH.</li>
 <li><b>¿Es fuerte o débil?</b> Si el enunciado da Ka o Kb, o el compuesto es CH₃COOH, HF, NH₃: es débil y usas la raíz. Si es HCl, HNO₃, H₂SO₄, NaOH, KOH, Ca(OH)₂: es fuerte y la concentración pasa directa.</li></ol>`,
 memo:`¿Dan Ka o Kb? → débil → raíz. ¿No lo dan y es HCl/NaOH? → fuerte → directo.`},

{t:`t21`,src:`Tema 21, pág. 2`,title:`Qué te van a pedir en este tema`,fig:null,
 body:`<p>Los objetivos de la pág. 2 son, en la práctica, la lista de tipos de ejercicio del parcial:</p>
 <ol><li>pH y pOH de ácidos y bases <b>fuertes</b>, considerando la estequiometría de la disociación total.</li>
 <li>pH de ácidos <b>débiles</b> con ecuaciones de equilibrio y la aproximación según Ka.</li>
 <li>Explicar cómo un <b>buffer</b> resiste cambios de pH gracias a su par conjugado.</li>
 <li>Aplicar <b>Henderson-Hasselbalch</b> para el pH de buffers.</li>
 <li>Concentraciones desconocidas en <b>titulaciones</b> con la relación del punto de equivalencia.</li>
 <li>Interpretar <b>acidosis o alcalosis metabólica</b> con pH sanguíneo y bicarbonato.</li></ol>`,
 memo:`Fuerte, débil, buffer, Henderson, titulación, acidosis/alcalosis.`},
{t:`t21`,src:`Tema 21, pág. 3`,title:`De gramos a pH (ácidos y bases fuertes)`,fig:`molaridad`,
 body:`<p>Los ejercicios de la pág. 3 combinan el Tema 16 con el Tema 20. La ruta siempre es la misma:</p>
 <ol><li>Moles = gramos / PM.</li><li>M = moles / L de solución.</li><li>Ácido fuerte: [H⁺] = M × (número de H⁺). Base fuerte: [OH⁻] = M × (número de OH⁻).</li><li>pH = −log[H⁺] o pOH = −log[OH⁻].</li><li>El otro valor: 14 − el que calculaste.</li></ol>
 <p><b>Ejercicio 1 del material:</b> 0.182 g de HCl en 500 mL → 0.00499 mol → 0.00997 M → pH 2.00, pOH 12.00.</p>
 <p><b>Ejercicio 2:</b> 3.16 g de NaOH en 2.5 L → 0.079 mol → 0.0316 M → pOH 1.50, pH 12.50.</p>`,
 memo:`g → mol → M → [H⁺] u [OH⁻] → log → 14 − ...`},
{t:`t21`,src:`Tema 21, pág. 4`,title:`Ley del equilibrio en ácidos y bases débiles`,fig:null,
 body:`<p>La ionización de un débil no llega al final: alcanza un <b>equilibrio dinámico</b> en el que la reacción directa y la inversa ocurren a la misma velocidad. Ese equilibrio se describe con una constante.</p>
 <p class="fx">HA + H₂O ⇌ H₃O⁺ + A⁻    Ka = [H₃O⁺][A⁻] / [HA]</p>
 <p class="fx">B + H₂O ⇌ BH⁺ + OH⁻    Kb = [BH⁺][OH⁻] / [B]</p>
 <p>Productos arriba, reactivos abajo. El agua no entra en la expresión porque es líquido puro.</p>`,
 memo:`K = productos / reactivos (sin el agua).`},
{t:`t21`,src:`Tema 21, pág. 5–6`,title:`Tabla ICE y aproximación del 5 %`,fig:`ice`,
 body:`<p><b>Metodología general:</b></p>
 <ol><li>Escribir la ecuación de disociación.</li><li>Plantear la tabla ICE (Inicio, Cambio, Equilibrio): C₀ → −x → C₀ − x para el ácido; 0 → +x → x para cada ion.</li><li>Sustituir en la constante: Ka = x² / (C₀ − x).</li><li><b>Aproximación del 5 %:</b> si C₀ / Ka &gt; 400, x es tan pequeña que C₀ − x ≈ C₀.</li></ol>
 <p class="fx">Ácido débil: x = [H₃O⁺] ≈ √(Ka · C₀)   ·   Base débil: x = [OH⁻] ≈ √(Kb · C₀)</p>
 <p>Si C₀ / Ka no supera 400, la aproximación ya no es confiable y habría que resolver la ecuación cuadrática.</p>`,
 memo:`Verifica C₀/Ka > 400 antes de usar la raíz.`},
{t:`t21`,src:`Tema 21, pág. 6–7`,title:`Porcentaje de ionización`,fig:null,
 body:`<p class="fx">% ionización = ([H⁺] / C₀) × 100</p>
 <p><b>Ejemplo 1 del material:</b> CH₃COOH 0.10 M, Ka = 1.8 × 10⁻⁵.</p>
 <ol><li>x² = 1.8 × 10⁻⁵ × 0.10 = 1.8 × 10⁻⁶</li><li>x = 1.34 × 10⁻³ M = [H⁺]</li><li>pH = −log(1.34 × 10⁻³) = 2.87</li><li>% ionización = 1.34 × 10⁻³ / 0.10 × 100 = 1.34 %</li></ol>
 <p>El resultado confirma que es débil: menos del 5 %.</p>`,
 memo:`% = x / C₀ × 100. Débil = menos de 5 %.`},
{t:`t21`,src:`Tema 21, pág. 8–9`,title:`pH de una base débil (amoníaco)`,fig:`bronsted`,
 body:`<p><b>Ejemplo 2 del material:</b> NH₃ 0.15 M, Kb = 1.8 × 10⁻⁵.</p>
 <p class="fx">NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</p>
 <ol><li>ICE: [NH₃] = 0.15 − x; [NH₄⁺] = [OH⁻] = x.</li><li>Kb = x² / 0.15 → x² = 2.7 × 10⁻⁶.</li><li>x = 1.64 × 10⁻³ M = [OH⁻].</li><li>pOH = −log(1.64 × 10⁻³) = 2.78.</li><li>pH = 14 − 2.78 = 11.22.</li></ol>
 <p>Error típico: sacar −log de [OH⁻] y llamarlo pH. Con una base, el logaritmo da <b>pOH</b>.</p>`,
 memo:`Base: la raíz da [OH⁻] → pOH → pH = 14 − pOH.`},
{t:`t21`,src:`Tema 21, pág. 10`,title:`Valoración (titulación) ácido-base`,fig:`titulacion`,
 body:`<p>Técnica analítica <b>cuantitativa</b> para conocer la concentración desconocida de un ácido o una base, haciéndola reaccionar con una solución estándar de concentración conocida (el <b>titulante</b> o valorante).</p>
 <ul><li><b>Bureta:</b> contiene el valorante.</li><li><b>Matraz Erlenmeyer:</b> contiene el analito y el indicador.</li><li><b>Pie de sujeción:</b> sostiene la bureta.</li></ul>
 <p>Con ácido fuerte y base fuerte, la reacción de neutralización es completa:</p>
 <p class="fx">H₃O⁺ + OH⁻ → 2 H₂O</p>`,
 memo:`Bureta = valorante conocido. Erlenmeyer = analito + indicador.`},
{t:`t21`,src:`Tema 21, pág. 1 (punto 5) y pág. 11`,title:`Equivalencia, punto final e indicador`,fig:`curvaTit`,
 body:`<p><b>Punto de equivalencia:</b> momento teórico exacto en que moles de H⁺ = moles de OH⁻. Con ácido fuerte y base fuerte a 25 °C, el pH ahí es <b>siempre 7.00</b>.</p>
 <p><b>Punto final:</b> punto experimental en que el indicador cambia de color (viraje) o el potenciómetro registra el salto. Lo ideal es que coincida con la equivalencia.</p>
 <p><b>Indicador:</b> ácido o base orgánica débil que cambia de color en un rango de pH. Para fuerte-fuerte se usa fenolftaleína (incolora en ácido, rosa en básico) o azul de bromotimol.</p>
 <p>De "moles de H⁺ = moles de OH⁻" sale la fórmula del cálculo (punto 5 del índice: concentración y volumen del valorante y del valorado):</p>
 <p class="fx">Mₐ × Vₐ × nₐ = M_b × V_b × n_b</p>
 <p>Para HCl con NaOH (n = 1 y 1) queda Mₐ × Vₐ = M_b × V_b. Si el ácido es H₂SO₄ (n = 2), multiplica su lado por 2. Es la misma idea de la normalidad del Tema 16: Nₐ × Vₐ = N_b × V_b.</p>`,
 memo:`Equivalencia = teórico (pH 7). Final = cuando cambia el color.`},
{t:`t21`,src:`Tema 21, pág. 12`,title:`Solución amortiguadora (buffer)`,fig:`buffer`,
 body:`<p><b>Buffer, tampón o reguladora:</b> solución que resiste cambios drásticos de pH cuando se le añaden pequeñas cantidades de ácido fuerte o base fuerte, o cuando se diluye.</p>
 <p><b>Composición:</b> dos especies en concentraciones elevadas y parecidas:</p>
 <ul><li><b>Un ácido débil</b> (HA): neutraliza los OH⁻ que se agreguen.</li><li><b>Su base conjugada</b> (A⁻): neutraliza los H⁺ que se agreguen.</li></ul>
 <p><b>Mecanismo:</b></p>
 <ul><li>Si entra ácido fuerte: A⁻ + H⁺ → HA. El H⁺ fuerte se convierte en ácido débil y el pH apenas baja.</li><li>Si entra base fuerte: HA + OH⁻ → A⁻ + H₂O. El OH⁻ se consume y el pH apenas sube.</li></ul>`,
 memo:`HA atrapa OH⁻; A⁻ atrapa H⁺. Necesitas los dos.`},
{t:`t21`,src:`Tema 21, pág. 13`,title:`Ejemplos de buffers`,fig:null,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Grupo</th><th>Buffer</th><th>Componentes / rango</th></tr></thead><tbody>
 <tr><td rowspan="2">Biológicos</td><td>Bicarbonato</td><td>H₂CO₃ / HCO₃⁻</td></tr><tr><td>Fosfato</td><td>H₂PO₄⁻ / HPO₄²⁻</td></tr>
 <tr><td rowspan="4">Laboratorio e industria</td><td>Acetato</td><td>CH₃COOH / CH₃COONa</td></tr><tr><td>Amoniacal</td><td>NH₃ / NH₄Cl</td></tr><tr><td>Citrato</td><td>C₆H₈O₇ / Na₃C₆H₅O₇</td></tr><tr><td>Formiato</td><td>HCOOH / HCOONa</td></tr>
 <tr><td rowspan="3">Biología molecular</td><td>Tris-HCl</td><td>pH 7 a 9</td></tr><tr><td>PBS (fosfato salino)</td><td>pH 7.4</td></tr><tr><td>HEPES</td><td>pH 6.8 a 8.8</td></tr></tbody></table></div>
 <p>La foto de la pág. 13 muestra buffers de calibración del pHmetro (pH 4.01, 7.00 y 10.01): en el laboratorio se usan para calibrar el electrodo antes de medir.</p>`,
 memo:`Sangre: bicarbonato y fosfato. Calibración del pHmetro: 4.01 · 7.00 · 10.01.`},
{t:`t21`,src:`Tema 21, pág. 14–15`,title:`Ecuación de Henderson-Hasselbalch`,fig:`hh`,
 body:`<p class="fx">Buffer ácido: pH = pKa + log ([base conjugada] / [ácido débil])</p>
 <p>También sirve con moles: pH = pKa + log (moles de base / moles de ácido), porque ambos están en el mismo volumen.</p>
 <p class="fx">Buffer básico: pOH = pKb + log ([ácido conjugado] / [base débil])  →  pH = 14 − pOH</p>
 <p><b>Ejemplo del material:</b> CH₃COOH 0.20 M + CH₃COONa 0.30 M.</p>
 <ol><li>pKa = −log(1.8 × 10⁻⁵) = 4.74</li><li>HA = 0.20 M; A⁻ = 0.30 M</li><li>pH = 4.74 + log(0.30/0.20) = 4.74 + log 1.5 = 4.74 + 0.176 = <b>4.92</b></li></ol>
 <p>Lectura rápida: si [base] = [ácido], el log vale 0 y pH = pKa.</p>`,
 memo:`Base ARRIBA, ácido ABAJO. Iguales → pH = pKa.`},
{t:`t21`,src:`Tema 21, pág. 2 (objetivo 6) · complementario [4]`,title:`Acidosis y alcalosis metabólica`,fig:`sangre`,
 body:`<p>El objetivo 6 pide interpretar el estado ácido-base con el pH sanguíneo y el bicarbonato. Los valores de referencia no aparecen en las diapositivas; estos son los de la bibliografía de química clínica [4]:</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Parámetro (sangre arterial)</th><th>Referencia</th></tr></thead><tbody>
 <tr><td>pH</td><td>7.35–7.45</td></tr><tr><td>HCO₃⁻</td><td>22–26 mmol/L</td></tr><tr><td>pCO₂</td><td>35–45 mmHg</td></tr></tbody></table></div>
 <ul><li><b>Acidosis metabólica:</b> pH &lt; 7.35 con HCO₃⁻ bajo (se consumió la base del tampón).</li><li><b>Alcalosis metabólica:</b> pH &gt; 7.45 con HCO₃⁻ alto.</li></ul>
 <p>Es Henderson-Hasselbalch aplicada a la sangre [4]: pH = 6.1 + log ([HCO₃⁻] / (0.03 × pCO₂)). Con HCO₃⁻ 24 y pCO₂ 40: 6.1 + log(24/1.2) = 6.1 + log 20 = 7.40.</p>`,
 memo:`Metabólica = la culpa es del HCO₃⁻. Bajo → acidosis. Alto → alcalosis.`}
];

const MCQ_NEW = [
{t:`t20`,src:`Tema 20, pág. 2`,q:`¿Qué fórmula define el pH?`,o:[`pH = −log [H⁺]`,`pH = log [H⁺]`,`pH = 14 + log [OH⁻]`,`pH = −log Ka`],e:`pH = −log[H⁺]. El signo negativo convierte el logaritmo (negativo para concentraciones menores que 1) en un número positivo.`},
{t:`t20`,src:`Tema 20, pág. 2`,q:`Una solución tiene [H⁺] = 3.5 × 10⁻³ M. Su pH es aproximadamente:`,o:[`2.46`,`3.50`,`−2.46`,`11.54`],e:`−log(3.5 × 10⁻³) = 2.456. El material lo reporta como 2.45; redondeado, 2.46. −2.46 olvida el signo; 11.54 es el pOH.`},
{t:`t20`,src:`Tema 20, pág. 3`,q:`El pKa indica:`,o:[`La fuerza de un ácido en solución acuosa`,`La concentración de H⁺ de una solución`,`La cantidad de OH⁻ libres`,`El volumen de equivalencia`],e:`pKa = −log Ka; mide la fuerza del ácido. La [H⁺] la mide el pH.`},
{t:`t20`,src:`Tema 20, pág. 3 y 10`,q:`¿Cuál de estos ácidos es más fuerte?`,o:[`HF, pKa 3.17`,`CH₃COOH, pKa 4.74`,`Ácido con pKa 9.2`,`Ácido con pKa 12`],e:`A menor pKa, mayor Ka y más fuerte el ácido. HF (Ka 6.8 × 10⁻⁴) es más fuerte que el acético (1.8 × 10⁻⁵).`},
{t:`t20`,src:`Tema 20, pág. 3`,q:`Si Ka = 1.8 × 10⁻⁵, el pKa es:`,o:[`4.74`,`5.00`,`1.8`,`−4.74`],e:`pKa = −log(1.8 × 10⁻⁵) = 4.74 (ejemplo del material).`},
{t:`t20`,src:`Tema 20, pág. 4`,q:`En la zona básica de la escala:`,o:[`pH > 7 y predominan los OH⁻`,`pH < 7 y predominan los H⁺`,`pH = 7 y [H⁺] = [OH⁻]`,`pH > 7 y predominan los H⁺`],e:`Básica: pH mayor que 7, predominio de iones hidróxido.`},
{t:`t20`,src:`Tema 20, pág. 4 y 7`,q:`¿Cuántas veces más H⁺ tiene una solución de pH 3 que una de pH 6?`,o:[`1 000 veces`,`3 veces`,`2 veces`,`100 veces`],e:`La escala es logarítmica: 3 unidades = 10³ = 1 000 veces.`},
{t:`t20`,src:`Tema 20, pág. 5`,q:`El pH de HCl 0.05 M es:`,o:[`1.3`,`0.05`,`2.6`,`12.7`],e:`Ácido fuerte: [H⁺] = C₀ = 0.05 → pH = 1.3. 12.7 es su pOH.`},
{t:`t20`,src:`Tema 20, pág. 5`,q:`En un ácido fuerte monoprótico, la [H⁺] es igual a:`,o:[`La concentración molar inicial del ácido (C₀)`,`√(Ka · C₀)`,`C₀ / 2`,`10⁻⁷ M siempre`],e:`Al disociarse al 100 %, cada molécula aporta su H⁺: [H⁺] = C₀.`},
{t:`t20`,src:`Tema 20, pág. 6`,q:`Para calcular la [H⁺] de un ácido débil se usa:`,o:[`[H⁺] = √(Ka · C₀)`,`[H⁺] = C₀`,`[H⁺] = Ka / C₀`,`[H⁺] = 14 − pKa`],e:`Disociación parcial: se necesita Ka. Con la aproximación, [H⁺] = √(Ka · C₀).`},
{t:`t20`,src:`Tema 20, pág. 6`,q:`El pH del ácido acético 0.05 M (Ka = 1.8 × 10⁻⁵) es:`,o:[`3.02`,`1.30`,`4.74`,`10.98`],e:`[H⁺] = √(9 × 10⁻⁷) = 9.49 × 10⁻⁴ → pH 3.02. 1.30 sería si fuera fuerte; 4.74 es el pKa; 10.98 el pOH.`},
{t:`t20`,src:`Tema 20, pág. 5–6`,q:`HCl 0.05 M y CH₃COOH 0.05 M tienen la misma concentración. ¿Por qué el acético tiene pH más alto?`,o:[`Porque solo se disocia parcialmente y libera menos H⁺`,`Porque tiene más moléculas`,`Porque es una base`,`Porque su Ka es mayor que la del HCl`],e:`El acético es débil: la mayoría de sus moléculas quedan sin ionizar. Menos H⁺ = pH más alto.`},
{t:`t20`,src:`Tema 20, pág. 7`,q:`Si el pH es 3.02, el pOH es:`,o:[`10.98`,`3.02`,`17.02`,`7.00`],e:`pOH = 14 − 3.02 = 10.98.`},
{t:`t20`,src:`Tema 20, pág. 7`,q:`Sobre el pOH es correcto que:`,o:[`A menor pOH, mayor alcalinidad`,`A menor pOH, mayor acidez`,`pOH + pH = 7`,`El pOH mide los iones H⁺`],e:`El pOH mide OH⁻ en escala inversa: pOH bajo = muchos OH⁻ = más básico.`},
{t:`t20`,src:`Tema 20, pág. 7`,q:`Según la tabla de la pág. 7, a pH 2 la [OH⁻] es:`,o:[`10⁻¹² M`,`10⁻² M`,`10⁻⁷ M`,`10⁻¹⁴ M`],e:`[H⁺] = 10⁻² y [OH⁻] = 10⁻¹⁴ / 10⁻² = 10⁻¹². Los exponentes suman −14.`},
{t:`t20`,src:`Tema 20, pág. 8`,q:`¿Cómo se representa la disociación de un ácido fuerte?`,o:[`Con una sola flecha (→), irreversible`,`Con doble flecha (⇌)`,`Con un signo igual`,`No se representa porque no se disocia`],e:`Fuerte: 100 %, irreversible, flecha simple.`},
{t:`t20`,src:`Tema 20, pág. 9`,q:`Por lo general, un ácido débil se disocia:`,o:[`Menos del 5 %`,`Exactamente el 50 %`,`Más del 95 %`,`El 100 %`],e:`Débil: disociación parcial, por lo general menor al 5 %; la mayoría queda en forma neutra.`},
{t:`t20`,src:`Tema 20, pág. 9`,q:`La ecuación B + H₂O ⇌ BH⁺ + OH⁻ representa:`,o:[`Una base débil`,`Un ácido débil`,`Una base fuerte`,`La autoionización del agua`],e:`La base B acepta un H⁺ del agua y deja OH⁻; la doble flecha indica que es débil.`},
{t:`t20`,src:`Tema 20, pág. 8`,q:`¿Cuál ecuación corresponde a una base fuerte según el material?`,o:[`NaOH → Na⁺ + OH⁻`,`NH₃ + H₂O ⇌ NH₄⁺ + OH⁻`,`HA ⇌ H⁺ + A⁻`,`HCl + H₂O → H₃O⁺ + Cl⁻`],e:`NaOH libera todos sus OH⁻ (flecha simple). El NH₃ es base débil; la última es ácido fuerte.`},
{t:`t20`,src:`Tema 20, pág. 10`,q:`Un ácido débil tiene un pKa típicamente:`,o:[`Entre 2 y 14`,`Menor de 0`,`Igual a 7 siempre`,`Mayor de 14`],e:`Tabla de la pág. 10: ácidos débiles 2 < pKa < 14; fuertes pKa < 0.`},
{t:`t20`,src:`Tema 20, pág. 10`,q:`Para un par conjugado ácido-base a 25 °C se cumple:`,o:[`Ka × Kb = 1.0 × 10⁻¹⁴`,`Ka + Kb = 14`,`Ka = Kb`,`pKa × pKb = 14`],e:`Ka × Kb = Kw = 10⁻¹⁴; en escala logarítmica pKa + pKb = 14.`},
{t:`t20`,src:`Tema 20, pág. 10`,q:`El pKa del ácido acético es 4.74. El pKb de su base conjugada (acetato) es:`,o:[`9.26`,`4.74`,`18.74`,`1.8`],e:`pKb = 14 − 4.74 = 9.26.`},
{t:`t20`,src:`Tema 20, pág. 10`,q:`¿Cuál de estos es un ejemplo de base débil del material?`,o:[`NH₃ (Kb 1.8 × 10⁻⁵)`,`KOH`,`Ca(OH)₂`,`NaOH`],e:`NH₃ y piridina (C₅H₅N) son las bases débiles de la tabla. NaOH, KOH y Ca(OH)₂ son fuertes.`},
{t:`t20`,src:`Tema 20, pág. 1`,q:`Si el pH de una solución es menor que el pKa del ácido:`,o:[`Predomina la forma ácida: [HA] > [A⁻]`,`Predomina la base conjugada: [HA] < [A⁻]`,`[HA] = [A⁻]`,`El ácido se disocia al 100 %`],e:`Figura de la pág. 1: pH < pKa → más HA; pH > pKa → más A⁻.`},

{t:`t21`,src:`Tema 21, pág. 3`,q:`Se disuelven 0.182 g de HCl hasta 500 mL. ¿Cuál es su pH aproximado?`,o:[`2.00`,`1.30`,`2.30`,`12.00`],e:`0.182/36.5 = 0.00499 mol; /0.5 L = 0.00997 M; pH = −log(0.00997) = 2.00. 12.00 es el pOH.`},
{t:`t21`,src:`Tema 21, pág. 3`,q:`3.16 g de NaOH en 2.5 L de solución tienen un pH de:`,o:[`12.50`,`1.50`,`1.10`,`12.90`],e:`3.16/40 = 0.079 mol; /2.5 = 0.0316 M = [OH⁻]; pOH = 1.50; pH = 14 − 1.50 = 12.50.`},
{t:`t21`,src:`Tema 21, pág. 2–3`,q:`Ca(OH)₂ 0.01 M (base fuerte, disociación total). Su [OH⁻] es:`,o:[`0.02 M`,`0.01 M`,`0.005 M`,`10⁻¹² M`],e:`Cada Ca(OH)₂ libera 2 OH⁻: [OH⁻] = 2 × 0.01 = 0.02 M. Es la estequiometría que pide el objetivo de la pág. 2.`},
{t:`t21`,src:`Tema 21, pág. 4`,q:`La expresión correcta de Ka para HA + H₂O ⇌ H₃O⁺ + A⁻ es:`,o:[`Ka = [H₃O⁺][A⁻] / [HA]`,`Ka = [HA] / [H₃O⁺][A⁻]`,`Ka = [H₃O⁺][A⁻][H₂O] / [HA]`,`Ka = [H₃O⁺] + [A⁻]`],e:`Productos sobre reactivos; el agua líquida no se incluye.`},
{t:`t21`,src:`Tema 21, pág. 4`,q:`En el equilibrio de un ácido débil:`,o:[`Las velocidades directa e inversa se igualan`,`La reacción se detiene por completo`,`Todo el ácido se ioniza`,`Solo ocurre la reacción inversa`],e:`Equilibrio dinámico: ambas reacciones siguen, a la misma velocidad.`},
{t:`t21`,src:`Tema 21, pág. 5`,q:`En la tabla ICE, ¿qué significa la "C"?`,o:[`Cambio`,`Concentración`,`Constante`,`Conjugado`],e:`ICE = Inicio, Cambio, Equilibrio.`},
{t:`t21`,src:`Tema 21, pág. 5`,q:`En la fila de equilibrio de la tabla ICE de un ácido débil, la concentración del ácido es:`,o:[`C₀ − x`,`x`,`C₀ + x`,`0`],e:`Empieza en C₀ y pierde x al disociarse: C₀ − x. Los iones valen x.`},
{t:`t21`,src:`Tema 21, pág. 6`,q:`La aproximación C₀ − x ≈ C₀ es válida cuando:`,o:[`C₀ / Ka > 400`,`C₀ / Ka < 400`,`Ka > 1`,`El ácido es fuerte`],e:`Aproximación del 5 %: si C₀/Ka > 400, x es despreciable frente a C₀.`},
{t:`t21`,src:`Tema 21, pág. 6–7`,q:`CH₃COOH 0.10 M (Ka = 1.8 × 10⁻⁵): su pH y % de ionización son:`,o:[`pH 2.87 y 1.34 %`,`pH 1.00 y 100 %`,`pH 3.02 y 0.95 %`,`pH 4.74 y 50 %`],e:`x = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ → pH 2.87; % = 1.34 × 10⁻³ / 0.10 × 100 = 1.34 %.`},
{t:`t21`,src:`Tema 21, pág. 7`,q:`El porcentaje de ionización se calcula como:`,o:[`([H⁺] / C₀) × 100`,`(C₀ / [H⁺]) × 100`,`Ka × 100`,`(pH / 14) × 100`],e:`Fracción del ácido inicial que se ionizó, multiplicada por 100.`},
{t:`t21`,src:`Tema 21, pág. 8–9`,q:`En el ejemplo del NH₃ 0.15 M, el valor x = 1.64 × 10⁻³ M corresponde a:`,o:[`[OH⁻]`,`[H⁺]`,`[NH₃] en equilibrio`,`Kb`],e:`En una base débil la x es la [OH⁻]; con ella se calcula el pOH (2.78) y después el pH (11.22).`},
{t:`t21`,src:`Tema 21, pág. 9`,q:`Para NH₃ 0.15 M se obtuvo pOH 2.78. El pH es:`,o:[`11.22`,`2.78`,`7.00`,`16.78`],e:`pH = 14 − 2.78 = 11.22. Solución básica, como corresponde al amoníaco.`},
{t:`t21`,src:`Tema 21, pág. 10`,q:`La valoración ácido-base es una técnica:`,o:[`Cuantitativa, para conocer una concentración desconocida`,`Cualitativa, para identificar el color de una solución`,`Para medir la temperatura de ebullición`,`Para separar mezclas heterogéneas`],e:`Se hace reaccionar una cantidad medida del analito con un estándar de concentración conocida.`},
{t:`t21`,src:`Tema 21, pág. 10`,q:`En el montaje de una titulación, la bureta contiene:`,o:[`El valorante (titulante) de concentración conocida`,`El analito y el indicador`,`Agua destilada`,`Solo el indicador`],e:`Bureta = valorante. El Erlenmeyer lleva el analito con el indicador.`},
{t:`t21`,src:`Tema 21, pág. 11`,q:`En la titulación de un ácido fuerte con una base fuerte a 25 °C, el pH en el punto de equivalencia es:`,o:[`7.00`,`Menor de 7`,`Mayor de 7`,`Igual al pKa`],e:`El material lo subraya: SIEMPRE es 7.00 (neutro).`},
{t:`t21`,src:`Tema 21, pág. 11`,q:`¿Qué diferencia hay entre punto de equivalencia y punto final?`,o:[`Equivalencia es el momento teórico (moles H⁺ = moles OH⁻); final es cuando el indicador cambia de color`,`Son exactamente lo mismo siempre`,`El punto final es teórico y el de equivalencia es visual`,`El punto final solo existe en buffers`],e:`Equivalencia: teórico, estequiométrico. Final: experimental (viraje o salto del potenciómetro). Lo ideal es que coincidan.`},
{t:`t21`,src:`Tema 21, pág. 11`,q:`¿Qué indicador menciona el material para valorar ácido fuerte con base fuerte?`,o:[`Fenolftaleína o azul de bromotimol`,`Rojo congo únicamente`,`Lugol`,`Azul de metileno`],e:`Fenolftaleína (incolora en ácido, rosa en básico) o azul de bromotimol.`},
{t:`t21`,src:`Tema 21, pág. 11`,q:`25.0 mL de HCl se neutralizan con 18.5 mL de NaOH 0.100 M. La concentración del HCl es:`,o:[`0.0740 M`,`0.135 M`,`0.100 M`,`0.0463 M`],e:`Mₐ = M_b × V_b / Vₐ = 0.100 × 18.5 / 25.0 = 0.0740 M.`},
{t:`t21`,src:`Tema 21, pág. 12`,q:`Un buffer está formado por:`,o:[`Un ácido débil y su base conjugada`,`Un ácido fuerte y una base fuerte`,`Agua destilada pura`,`Una sal neutra sola, como NaCl`],e:`Dos especies en concentraciones elevadas y similares: ácido débil + base conjugada (o base débil + ácido conjugado).`},
{t:`t21`,src:`Tema 21, pág. 12`,q:`Si se agrega HCl a un buffer acetato, ¿qué especie lo neutraliza?`,o:[`La base conjugada: CH₃COO⁻ + H⁺ → CH₃COOH`,`El ácido acético`,`El agua`,`El Na⁺`],e:`La base conjugada atrapa el H⁺ y lo convierte en ácido débil; el pH apenas baja.`},
{t:`t21`,src:`Tema 21, pág. 12`,q:`Si se agrega NaOH a un buffer, la reacción que lo amortigua es:`,o:[`HA + OH⁻ → A⁻ + H₂O`,`A⁻ + H⁺ → HA`,`H₂O → H⁺ + OH⁻`,`NaOH → Na⁺ + OH⁻`],e:`El ácido débil neutraliza el OH⁻ y forma agua; el pH apenas sube.`},
{t:`t21`,src:`Tema 21, pág. 13`,q:`¿Cuál es un tampón biológico según el material?`,o:[`Bicarbonato (H₂CO₃ / HCO₃⁻)`,`Tris-HCl`,`HEPES`,`Formiato`],e:`Biológicos: bicarbonato y fosfato. Tris y HEPES son de biología molecular; formiato es de laboratorio/industria.`},
{t:`t21`,src:`Tema 21, pág. 13`,q:`El PBS (fosfato buferado salino) mantiene un pH aproximado de:`,o:[`7.4`,`4.0`,`10.0`,`2.0`],e:`PBS: 7.4. Tris-HCl 7 a 9; HEPES 6.8 a 8.8.`},
{t:`t21`,src:`Tema 21, pág. 14`,q:`La ecuación de Henderson-Hasselbalch para un buffer ácido es:`,o:[`pH = pKa + log ([base conjugada] / [ácido débil])`,`pH = pKa + log ([ácido débil] / [base conjugada])`,`pH = −log Ka × C₀`,`pH = 14 − pKa`],e:`Base arriba, ácido abajo.`},
{t:`t21`,src:`Tema 21, pág. 14–15`,q:`Buffer de CH₃COOH 0.20 M y CH₃COONa 0.30 M (pKa 4.74). Su pH es:`,o:[`4.92`,`4.56`,`4.74`,`5.04`],e:`pH = 4.74 + log(0.30/0.20) = 4.74 + 0.176 = 4.92. Si inviertes la fracción obtienes 4.56.`},
{t:`t21`,src:`Tema 21, pág. 14`,q:`En un buffer, si [base conjugada] = [ácido débil], entonces:`,o:[`pH = pKa`,`pH = 7`,`pH = 0`,`pH = 14 − pKa`],e:`log(1) = 0, así que pH = pKa.`},
{t:`t21`,src:`Tema 21, pág. 15`,q:`NH₃ 0.15 M + NH₄Cl 0.25 M (Kb 1.8 × 10⁻⁵). El pH del buffer es:`,o:[`9.04`,`4.96`,`9.48`,`11.22`],e:`pKb = 4.74; pOH = 4.74 + log(0.25/0.15) = 4.96; pH = 14 − 4.96 = 9.04.`},
{t:`t21`,src:`Tema 21, pág. 2 · complementario [4]`,q:`Un paciente tiene pH 7.28 y HCO₃⁻ 14 mmol/L. Su estado ácido-base sugiere:`,o:[`Acidosis metabólica`,`Alcalosis metabólica`,`Estado normal`,`Alcalosis respiratoria`],e:`pH bajo (< 7.35) con bicarbonato bajo (< 22): acidosis metabólica.`},
{t:`t21`,src:`Tema 21, pág. 2 · complementario [4]`,q:`El rango de referencia del pH en sangre arterial es:`,o:[`7.35–7.45`,`6.8–7.0`,`7.0–8.0`,`7.45–7.65`],e:`7.35–7.45. También aparece en el reporte de gasometría del Tema 18, pág. 9.`}
];

const ABIERTAS_NEW = [
{t:`t20`,src:`Tema 20, pág. 2–3`,q:`Explique la diferencia entre pH y pKa y por qué ambos usan el logaritmo negativo.`,a:`El pH describe a la solución: cuánta [H⁺] hay en ella (pH = −log[H⁺]). El pKa describe al ácido: qué tan fuerte es (pKa = −log Ka). Ambos usan −log porque las concentraciones y las constantes son números muy pequeños (por ejemplo 3.5 × 10⁻³ o 1.8 × 10⁻⁵); el logaritmo los convierte en números manejables y el signo negativo los vuelve positivos.`},
{t:`t20`,src:`Tema 20, pág. 5–6`,q:`¿Por qué para un ácido fuerte basta la concentración para calcular el pH, pero para uno débil se necesita Ka?`,a:`Porque el fuerte se disocia al 100 %: cada molécula aporta su H⁺, y [H⁺] = C₀. El débil se disocia parcialmente (menos del 5 %) y solo una fracción de sus moléculas libera H⁺; esa fracción depende de la constante Ka, por eso [H⁺] = √(Ka · C₀).`},
{t:`t20`,src:`Tema 20, pág. 8–9`,q:`Compare la disociación de un ácido fuerte y de uno débil: grado, tipo de flecha y ejemplo.`,a:`Fuerte: 100 %, irreversible, una sola flecha (→). Ejemplo: HCl + H₂O → H₃O⁺ + Cl⁻. Débil: parcial (en general < 5 %), establece un equilibrio químico, doble flecha (⇌), la mayoría de moléculas quedan intactas. Ejemplo: HA + H₂O ⇌ H₃O⁺ + A⁻ (ácido acético).`},
{t:`t20`,src:`Tema 20, pág. 10`,q:`¿Qué significa la relación Ka × Kb = 1.0 × 10⁻¹⁴ para un par conjugado?`,a:`Que la fuerza del ácido y la de su base conjugada son inversas: si Ka es grande (ácido fuerte), Kb es pequeña (base conjugada débil), y viceversa. En escala logarítmica, pKa + pKb = 14. Por ejemplo, ácido acético pKa 4.74 → acetato pKb 9.26.`},
{t:`t21`,src:`Tema 21, pág. 5–6`,q:`Describa los pasos de la tabla ICE para calcular el pH de un ácido débil y cuándo se usa la aproximación del 5 %.`,a:`1) Escribir la ecuación de disociación. 2) Plantear Inicio (C₀, 0, 0), Cambio (−x, +x, +x) y Equilibrio (C₀ − x, x, x). 3) Sustituir en Ka = x² / (C₀ − x). 4) Si C₀/Ka > 400, se aproxima C₀ − x ≈ C₀ y x = √(Ka · C₀). 5) pH = −log x. Si C₀/Ka no supera 400, la aproximación da error apreciable.`},
{t:`t21`,src:`Tema 21, pág. 11`,q:`Diferencie punto de equivalencia, punto final e indicador en una valoración.`,a:`Punto de equivalencia: momento teórico en que moles de H⁺ = moles de OH⁻; con ácido y base fuertes a 25 °C el pH es 7.00. Punto final: momento experimental en que el indicador cambia de color o el potenciómetro registra el salto; idealmente coincide con el de equivalencia. Indicador: ácido o base orgánica débil que vira de color en un rango de pH (fenolftaleína, azul de bromotimol).`},
{t:`t21`,src:`Tema 21, pág. 12`,q:`Explique el mecanismo de acción de un buffer HA/A⁻ cuando se agrega ácido fuerte y cuando se agrega base fuerte.`,a:`Con ácido fuerte, la base conjugada lo consume: A⁻ + H⁺ → HA; el H⁺ fuerte se convierte en ácido débil y el pH apenas baja. Con base fuerte, el ácido débil la neutraliza: HA + OH⁻ → A⁻ + H₂O; el OH⁻ se transforma en agua y el pH apenas sube. Por eso el buffer necesita ambas especies en concentraciones altas y parecidas.`},
{t:`t21`,src:`Tema 21, pág. 2 y 13 · complementario [4]`,q:`¿Por qué el tampón bicarbonato es importante en el laboratorio clínico y cómo se interpreta un HCO₃⁻ bajo con pH bajo?`,a:`El bicarbonato (H₂CO₃/HCO₃⁻) es el principal tampón de la sangre y mantiene el pH en 7.35–7.45. En la gasometría, un pH bajo con HCO₃⁻ bajo indica acidosis metabólica: la base del tampón se consumió neutralizando ácidos (por ejemplo, en cetoacidosis o diarrea). Un pH alto con HCO₃⁻ alto indica alcalosis metabólica.`}
];

const EJ_NEW = [
{t:`t20`,src:`Tema 20, pág. 2 (ejemplo)`,q:`Calcule el pH de una solución con [H⁺] = 3.5 × 10⁻³ M.`,
 pide:`Aplicar la definición de pH.`,datos:[`[H⁺] = 3.5 × 10⁻³ M`],f:`pH = −log [H⁺]`,
 pasos:[`Sustituir: pH = −log(3.5 × 10⁻³).`,`log(3.5 × 10⁻³) = −2.456.`,`pH = 2.456 ≈ 2.46.`],
 r:`pH = 2.46 (el material lo reporta truncado como 2.45)`,ojo:`En la calculadora escribe 3.5 × 10^(−3) completo y aplica log; luego cambia el signo.`},
{t:`t20`,src:`Tema 20, pág. 3 (ejemplo)`,q:`Calcule el pKa del ácido acético, cuya Ka es 1.8 × 10⁻⁵.`,
 pide:`Convertir Ka a pKa.`,datos:[`Ka = 1.8 × 10⁻⁵`],f:`pKa = −log Ka`,
 pasos:[`pKa = −log(1.8 × 10⁻⁵).`,`log(1.8 × 10⁻⁵) = −4.744.`,`pKa = 4.74.`],r:`pKa = 4.74`},
{t:`t20`,src:`Tema 20, pág. 5 y 7 (ejemplo)`,q:`Calcule el pH y el pOH de una solución de HCl 0.05 M.`,
 pide:`pH de un ácido fuerte y luego su pOH.`,datos:[`HCl: ácido fuerte, 100 % disociado`,`C₀ = 0.05 M`],f:`pH = −log C₀ ; pOH = 14 − pH`,
 pasos:[`Ácido fuerte: [H⁺] = C₀ = 0.05 M.`,`pH = −log(0.05) = 1.30.`,`pOH = 14 − 1.30 = 12.70.`],r:`pH = 1.30; pOH = 12.70`},
{t:`t20`,src:`Tema 20, pág. 6–7 (ejemplo)`,q:`Calcule la [H⁺], el pH y el pOH de ácido acético 0.05 M (Ka = 1.8 × 10⁻⁵).`,
 pide:`pH de un ácido débil.`,datos:[`C₀ = 0.05 M`,`Ka = 1.8 × 10⁻⁵`],f:`[H⁺] = √(Ka · C₀)`,
 pasos:[`Es débil (dan Ka): se usa la raíz.`,`Ka · C₀ = 1.8 × 10⁻⁵ × 0.05 = 9.0 × 10⁻⁷.`,`[H⁺] = √(9.0 × 10⁻⁷) = 9.49 × 10⁻⁴ M.`,`pH = −log(9.49 × 10⁻⁴) = 3.02.`,`pOH = 14 − 3.02 = 10.98.`],
 r:`[H⁺] = 9.49 × 10⁻⁴ M; pH = 3.02; pOH = 10.98`,ojo:`Comprueba C₀/Ka = 0.05/1.8 × 10⁻⁵ = 2 778 > 400: la aproximación es válida (Tema 21, pág. 6).`},
{t:`t20`,src:`Aplicación de Tema 20, pág. 5`,q:`Calcule el pH de una solución de HNO₃ 0.0020 M.`,
 pide:`Reconocer un ácido fuerte y aplicar −log C₀.`,datos:[`HNO₃: ácido fuerte (tabla pág. 10)`,`C₀ = 2.0 × 10⁻³ M`],f:`pH = −log C₀`,
 pasos:[`[H⁺] = 2.0 × 10⁻³ M.`,`pH = −log(2.0 × 10⁻³) = 2.70.`],r:`pH = 2.70`},
{t:`t20`,src:`Aplicación de Tema 20, pág. 7`,q:`Una orina tiene pH 5.5. Calcule su pOH, su [H⁺] y su [OH⁻].`,
 pide:`Ir de pH a concentraciones (operación inversa del logaritmo).`,datos:[`pH = 5.5`],f:`[H⁺] = 10⁻ᵖᴴ ; [OH⁻] = 10⁻ᵖᴼᴴ`,
 pasos:[`pOH = 14 − 5.5 = 8.5.`,`[H⁺] = 10⁻⁵·⁵ = 3.16 × 10⁻⁶ M (en la calculadora: 10^(−5.5)).`,`[OH⁻] = 10⁻⁸·⁵ = 3.16 × 10⁻⁹ M.`,`Comprobación: 3.16 × 10⁻⁶ × 3.16 × 10⁻⁹ = 1.0 × 10⁻¹⁴ = Kw.`],
 r:`pOH 8.5; [H⁺] = 3.16 × 10⁻⁶ M; [OH⁻] = 3.16 × 10⁻⁹ M`},
{t:`t20`,src:`Aplicación de Tema 20, pág. 2 y Tema 18, pág. 9`,q:`Una gasometría reporta pH 7.40. ¿Cuál es la [H⁺] de esa sangre en mol/L y en nmol/L?`,
 pide:`Antilogaritmo del pH.`,datos:[`pH = 7.40`,`1 mol/L = 10⁹ nmol/L`],f:`[H⁺] = 10⁻ᵖᴴ`,
 pasos:[`[H⁺] = 10⁻⁷·⁴⁰ = 3.98 × 10⁻⁸ M.`,`En nmol/L: 3.98 × 10⁻⁸ × 10⁹ = 39.8 ≈ 40 nmol/L.`],
 r:`[H⁺] = 3.98 × 10⁻⁸ M ≈ 40 nmol/L`,ojo:`Dato útil de gasometría: pH 7.40 equivale a unos 40 nmol/L de H⁺.`},
{t:`t20`,src:`Aplicación de Tema 20, pág. 10`,q:`El ácido acético tiene Ka = 1.8 × 10⁻⁵. Calcule Kb y pKb del ion acetato (su base conjugada).`,
 pide:`Usar la relación de pares conjugados.`,datos:[`Ka = 1.8 × 10⁻⁵`,`Kw = 1.0 × 10⁻¹⁴`],f:`Kb = Kw / Ka ; pKb = 14 − pKa`,
 pasos:[`Kb = 1.0 × 10⁻¹⁴ / 1.8 × 10⁻⁵ = 5.56 × 10⁻¹⁰.`,`pKa = 4.74, así que pKb = 14 − 4.74 = 9.26.`,`Comprobación: −log(5.56 × 10⁻¹⁰) = 9.26.`],r:`Kb = 5.56 × 10⁻¹⁰; pKb = 9.26`},
{t:`t20`,src:`Aplicación de Tema 20, pág. 3 y 10`,q:`Ordene de más fuerte a más débil: HF (Ka 6.8 × 10⁻⁴), CH₃COOH (Ka 1.8 × 10⁻⁵) y HCl. Calcule el pKa de los dos débiles.`,
 pide:`Comparar fuerza con Ka y pKa.`,datos:[`HCl: Ka ≫ 1, pKa < 0`],f:`pKa = −log Ka`,
 pasos:[`pKa(HF) = −log(6.8 × 10⁻⁴) = 3.17.`,`pKa(acético) = −log(1.8 × 10⁻⁵) = 4.74.`,`Menor pKa = más fuerte. HCl (pKa < 0) > HF (3.17) > acético (4.74).`],r:`HCl > HF > CH₃COOH`},
{t:`t20`,src:`Aplicación de Tema 20, pág. 6 y 10 · Tema 21, pág. 6`,q:`Calcule el pH de HF 0.10 M (Ka = 6.8 × 10⁻⁴). ¿Es válida la aproximación de la raíz?`,
 pide:`pH de un ácido débil verificando el criterio del 5 %.`,datos:[`C₀ = 0.10 M`,`Ka = 6.8 × 10⁻⁴`],f:`[H⁺] ≈ √(Ka · C₀) si C₀/Ka > 400`,
 pasos:[`Criterio: C₀/Ka = 0.10 / 6.8 × 10⁻⁴ = 147. Es menor que 400: la aproximación no es del todo válida.`,`Con la raíz: √(6.8 × 10⁻⁵) = 8.25 × 10⁻³ M → pH 2.08.`,`Resolviendo la cuadrática x² + Ka·x − Ka·C₀ = 0: x = 7.91 × 10⁻³ M → pH 2.10.`,`La diferencia es pequeña, pero el criterio te dice que el error supera el 5 %.`],
 r:`pH ≈ 2.10 (cuadrática); con la raíz, 2.08`,ojo:`Si el examen no pide la cuadrática, usa la raíz pero menciona que C₀/Ka < 400. Demuestra que conoces el criterio.`},
{t:`t20`,src:`Aplicación de Tema 20, pág. 7 y 10`,q:`Calcule el pH de una solución de KOH 0.010 M.`,
 pide:`pH de una base fuerte: primero pOH.`,datos:[`KOH: base fuerte (tabla pág. 10)`,`C₀ = 0.010 M`],f:`pOH = −log[OH⁻] ; pH = 14 − pOH`,
 pasos:[`[OH⁻] = 0.010 M.`,`pOH = −log(0.010) = 2.00.`,`pH = 14 − 2.00 = 12.00.`],r:`pH = 12.00`,ojo:`Error frecuente: responder pH = 2. Eso es el pOH.`},

{t:`t21`,src:`Tema 21, pág. 3 (ejercicio 1)`,q:`Se disuelven 0.182 g de HCl en agua suficiente para preparar 500 mL de solución. Calcule la molaridad, el pH y el pOH.`,
 pide:`Molaridad (Tema 16) y luego pH de ácido fuerte.`,datos:[`masa = 0.182 g`,`PM HCl = 36.5 g/mol`,`V = 500 mL = 0.500 L`],f:`M = (g / PM) / L ; pH = −log[H⁺]`,
 pasos:[`Moles = 0.182 / 36.5 = 4.99 × 10⁻³ mol.`,`M = 4.99 × 10⁻³ / 0.500 = 9.97 × 10⁻³ M ≈ 0.0100 M.`,`HCl es fuerte: [H⁺] = 9.97 × 10⁻³ M.`,`pH = −log(9.97 × 10⁻³) = 2.00.`,`pOH = 14 − 2.00 = 12.00.`],r:`M = 9.97 × 10⁻³ M; pH = 2.00; pOH = 12.00`},
{t:`t21`,src:`Tema 21, pág. 3 (ejercicio 2)`,q:`¿Cuál es la molaridad de 2.5 L de una solución en la que se disuelven 3.16 g de NaOH? Calcule su pOH y su pH.`,
 pide:`Molaridad y pH de una base fuerte.`,datos:[`masa = 3.16 g`,`PM NaOH = 40 g/mol`,`V = 2.5 L`],f:`M = (g / PM) / L ; pOH = −log[OH⁻]`,
 pasos:[`Moles = 3.16 / 40 = 0.079 mol.`,`M = 0.079 / 2.5 = 0.0316 M.`,`Base fuerte: [OH⁻] = 0.0316 M.`,`pOH = −log(0.0316) = 1.50.`,`pH = 14 − 1.50 = 12.50.`],r:`M = 0.0316 M; pOH = 1.50; pH = 12.50`},
{t:`t21`,src:`Aplicación de Tema 21, pág. 2–3 (estequiometría)`,q:`Se disuelven 0.37 g de Ca(OH)₂ hasta 500 mL. Considerando disociación total, calcule [OH⁻], pOH y pH.`,
 pide:`Base fuerte que libera 2 OH⁻ por fórmula.`,datos:[`PM Ca(OH)₂ = 74 g/mol`,`V = 0.500 L`,`Ca(OH)₂ → Ca²⁺ + 2 OH⁻`],f:`[OH⁻] = 2 × M`,
 pasos:[`Moles = 0.37 / 74 = 0.0050 mol.`,`M = 0.0050 / 0.500 = 0.010 M.`,`[OH⁻] = 2 × 0.010 = 0.020 M.`,`pOH = −log(0.020) = 1.70.`,`pH = 14 − 1.70 = 12.30.`],r:`[OH⁻] = 0.020 M; pOH = 1.70; pH = 12.30`,ojo:`Si olvidas multiplicar por 2 obtienes pH 12.00. El objetivo de la pág. 2 pide justamente considerar la estequiometría.`},
{t:`t21`,src:`Aplicación de Tema 21, pág. 2–3 (estequiometría)`,q:`Calcule el pH de H₂SO₄ 0.0050 M considerando que libera sus dos H⁺ por completo.`,
 pide:`Ácido fuerte diprótico.`,datos:[`C₀ = 0.0050 M`,`H₂SO₄ → 2 H⁺ + SO₄²⁻`],f:`[H⁺] = 2 × C₀`,
 pasos:[`[H⁺] = 2 × 0.0050 = 0.010 M.`,`pH = −log(0.010) = 2.00.`],r:`pH = 2.00`,ojo:`En rigor, el segundo H⁺ del H₂SO₄ no se disocia al 100 %; a nivel de este curso se usa la disociación total, como indica el objetivo.`},
{t:`t21`,src:`Tema 21, pág. 6–7 (ejemplo 1)`,q:`Calcule el pH y el porcentaje de ionización de CH₃COOH 0.10 M (Ka = 1.8 × 10⁻⁵).`,
 pide:`Tabla ICE, aproximación y % de ionización.`,datos:[`C₀ = 0.10 M`,`Ka = 1.8 × 10⁻⁵`],f:`x = √(Ka · C₀) ; % = x / C₀ × 100`,
 pasos:[`CH₃COOH ⇌ H⁺ + CH₃COO⁻. ICE: 0.10 − x; x; x.`,`C₀/Ka = 5 556 > 400: se aproxima 0.10 − x ≈ 0.10.`,`x² = 1.8 × 10⁻⁵ × 0.10 = 1.8 × 10⁻⁶ → x = 1.34 × 10⁻³ M.`,`pH = −log(1.34 × 10⁻³) = 2.87.`,`% ionización = 1.34 × 10⁻³ / 0.10 × 100 = 1.34 %.`],r:`pH = 2.87; ionización = 1.34 %`},
{t:`t21`,src:`Aplicación de Tema 21, pág. 6–7`,q:`Repita el cálculo para CH₃COOH 0.010 M. Compare el % de ionización con el de 0.10 M.`,
 pide:`Ver cómo cambia la ionización al diluir un ácido débil.`,datos:[`C₀ = 0.010 M`,`Ka = 1.8 × 10⁻⁵`],f:`x = √(Ka · C₀)`,
 pasos:[`C₀/Ka = 556 > 400: aproximación válida.`,`x = √(1.8 × 10⁻⁷) = 4.24 × 10⁻⁴ M.`,`pH = −log(4.24 × 10⁻⁴) = 3.37.`,`% = 4.24 × 10⁻⁴ / 0.010 × 100 = 4.24 %.`,`Al diluir 10 veces, el % de ionización subió de 1.34 % a 4.24 %, aunque el pH subió (hay menos H⁺ en total).`],r:`pH = 3.37; ionización = 4.24 %`},
{t:`t21`,src:`Tema 21, pág. 8–9 (ejemplo 2)`,q:`Calcule [OH⁻], pOH y pH de NH₃ 0.15 M (Kb = 1.8 × 10⁻⁵).`,
 pide:`pH de una base débil.`,datos:[`C₀ = 0.15 M`,`Kb = 1.8 × 10⁻⁵`],f:`[OH⁻] = √(Kb · C₀)`,
 pasos:[`NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. ICE: 0.15 − x; x; x.`,`x² = 1.8 × 10⁻⁵ × 0.15 = 2.7 × 10⁻⁶.`,`x = 1.64 × 10⁻³ M = [OH⁻].`,`pOH = −log(1.64 × 10⁻³) = 2.78.`,`pH = 14 − 2.78 = 11.22.`],r:`[OH⁻] = 1.64 × 10⁻³ M; pOH = 2.78; pH = 11.22`},
{t:`t21`,src:`Aplicación de Tema 21, pág. 11`,q:`Se valoran 25.0 mL de HCl de concentración desconocida y se gastan 18.5 mL de NaOH 0.100 M hasta el punto final. ¿Cuál es la molaridad del HCl?`,
 pide:`Concentración del analito en una titulación 1:1.`,datos:[`Vₐ = 25.0 mL`,`V_b = 18.5 mL`,`M_b = 0.100 M`],f:`Mₐ × Vₐ = M_b × V_b`,
 pasos:[`Moles de OH⁻ gastados = 0.100 × 0.0185 L = 1.85 × 10⁻³ mol.`,`En la equivalencia, moles de H⁺ = 1.85 × 10⁻³ mol.`,`Mₐ = 1.85 × 10⁻³ / 0.0250 L = 0.0740 M.`],r:`HCl = 0.0740 M`,ojo:`Puedes trabajar con mL en ambos lados sin pasar a litros: Mₐ = 0.100 × 18.5 / 25.0.`},
{t:`t21`,src:`Aplicación de Tema 21, pág. 11`,q:`¿Qué volumen de NaOH 0.150 M se necesita para neutralizar 20.0 mL de HCl 0.120 M?`,
 pide:`Volumen de valorante necesario.`,datos:[`Mₐ = 0.120 M; Vₐ = 20.0 mL`,`M_b = 0.150 M`],f:`V_b = Mₐ × Vₐ / M_b`,
 pasos:[`V_b = 0.120 × 20.0 / 0.150.`,`V_b = 2.40 / 0.150 = 16.0 mL.`],r:`16.0 mL de NaOH`},
{t:`t21`,src:`Aplicación de Tema 21, pág. 11 y Tema 16, pág. 22–26`,q:`10.0 mL de H₂SO₄ se neutralizan con 15.0 mL de NaOH 0.200 M. Calcule la molaridad y la normalidad del ácido.`,
 pide:`Titulación con un ácido diprótico (relación 1:2).`,datos:[`H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O`,`V_b = 15.0 mL; M_b = 0.200 M`,`Vₐ = 10.0 mL`],f:`moles H⁺ = moles OH⁻ ; N = M × n`,
 pasos:[`Moles de OH⁻ = 0.200 × 0.0150 = 3.00 × 10⁻³ mol.`,`Moles de H⁺ = 3.00 × 10⁻³; cada H₂SO₄ aporta 2 H⁺: moles de H₂SO₄ = 1.50 × 10⁻³.`,`M = 1.50 × 10⁻³ / 0.0100 = 0.150 M.`,`N = 0.150 × 2 = 0.300 N. Comprobación: N·V = 0.300 × 10.0 = 0.200 × 15.0 = 3.00.`],r:`H₂SO₄ = 0.150 M = 0.300 N`,ojo:`Si usas Mₐ·Vₐ = M_b·V_b sin el factor 2, obtienes 0.300 M: es el doble del valor correcto.`},
{t:`t21`,src:`Tema 21, pág. 14–15 (ejemplo)`,q:`Calcule el pH de un buffer preparado con CH₃COOH 0.20 M y CH₃COONa 0.30 M (Ka = 1.8 × 10⁻⁵).`,
 pide:`Aplicar Henderson-Hasselbalch a un buffer ácido.`,datos:[`[HA] = 0.20 M`,`[A⁻] = 0.30 M`,`Ka = 1.8 × 10⁻⁵`],f:`pH = pKa + log([A⁻]/[HA])`,
 pasos:[`pKa = −log(1.8 × 10⁻⁵) = 4.74.`,`Ácido débil: CH₃COOH = 0.20 M. Base conjugada: CH₃COO⁻ (del acetato de sodio) = 0.30 M.`,`pH = 4.74 + log(0.30/0.20) = 4.74 + log 1.5.`,`pH = 4.74 + 0.176 = 4.92.`],r:`pH = 4.92`},
{t:`t21`,src:`Tema 21, pág. 15 (ejercicio propuesto)`,q:`Una solución contiene NH₃ 0.15 M y NH₄Cl 0.25 M. Calcule su pOH y su pH. Dato: Kb (NH₃) = 1.8 × 10⁻⁵.`,
 pide:`Henderson-Hasselbalch para un buffer básico.`,datos:[`[B] = [NH₃] = 0.15 M`,`[BH⁺] = [NH₄⁺] = 0.25 M`,`Kb = 1.8 × 10⁻⁵`],f:`pOH = pKb + log([ácido conjugado]/[base débil])`,
 pasos:[`pKb = −log(1.8 × 10⁻⁵) = 4.74.`,`pOH = 4.74 + log(0.25/0.15) = 4.74 + log 1.667.`,`pOH = 4.74 + 0.222 = 4.96.`,`pH = 14 − 4.96 = 9.04.`],r:`pOH = 4.96; pH = 9.04`,ojo:`En el buffer básico el ácido conjugado (NH₄⁺) va ARRIBA. Si inviertes la fracción obtienes pOH 4.52 y pH 9.48.`},
{t:`t21`,src:`Aplicación de Tema 21, pág. 14`,q:`Se mezclan 0.050 mol de CH₃COOH y 0.025 mol de CH₃COONa en 500 mL de solución. Calcule el pH (pKa = 4.74).`,
 pide:`Henderson-Hasselbalch con moles.`,datos:[`moles HA = 0.050`,`moles A⁻ = 0.025`],f:`pH = pKa + log(moles base / moles ácido)`,
 pasos:[`No hace falta pasar a molaridad: ambas especies están en los mismos 500 mL.`,`Relación base/ácido = 0.025 / 0.050 = 0.50.`,`pH = 4.74 + log 0.50 = 4.74 − 0.301 = 4.44.`],r:`pH = 4.44`,ojo:`Con más ácido que base, el pH queda por debajo del pKa.`},
{t:`t21`,src:`Aplicación de Tema 21, pág. 12 y 14`,q:`Un litro de buffer contiene 0.10 mol de CH₃COOH y 0.10 mol de CH₃COONa (pH 4.74). Se agregan 0.010 mol de HCl. Calcule el nuevo pH y compárelo con lo que pasaría en 1 L de agua pura.`,
 pide:`Aplicar el mecanismo del buffer y luego Henderson-Hasselbalch.`,datos:[`HA = 0.10 mol; A⁻ = 0.10 mol`,`H⁺ agregado = 0.010 mol`,`pKa = 4.74`],f:`A⁻ + H⁺ → HA`,
 pasos:[`La base conjugada consume el H⁺: A⁻ = 0.10 − 0.010 = 0.090 mol; HA = 0.10 + 0.010 = 0.110 mol.`,`pH = 4.74 + log(0.090/0.110) = 4.74 + log 0.818 = 4.74 − 0.087 = 4.65.`,`En agua pura: [H⁺] = 0.010 M → pH = 2.00 (bajaría de 7 a 2).`,`El buffer solo bajó 0.09 unidades.`],r:`Buffer: 4.74 → 4.65. Agua: 7.00 → 2.00`},
{t:`t21`,src:`Aplicación de Tema 21, pág. 14`,q:`Se quiere un buffer acetato de pH 5.04 (pKa 4.74). ¿Qué relación [A⁻]/[HA] se necesita?`,
 pide:`Despejar la proporción de Henderson-Hasselbalch.`,datos:[`pH = 5.04`,`pKa = 4.74`],f:`[A⁻]/[HA] = 10^(pH − pKa)`,
 pasos:[`log([A⁻]/[HA]) = 5.04 − 4.74 = 0.30.`,`[A⁻]/[HA] = 10⁰·³⁰ = 2.0.`,`Se necesita el doble de acetato que de ácido acético.`],r:`[A⁻]/[HA] = 2.0`},
{t:`t21`,src:`Tema 21, pág. 2 (objetivo 6) · complementario [4]`,q:`Gasometría A: HCO₃⁻ 24 mmol/L, pCO₂ 40 mmHg. Gasometría B: HCO₃⁻ 15 mmol/L, pCO₂ 30 mmHg. Calcule el pH de cada una e interprete. Use pH = 6.1 + log(HCO₃⁻ / (0.03 × pCO₂)).`,
 pide:`Henderson-Hasselbalch aplicada al tampón bicarbonato de la sangre.`,datos:[`pKa del sistema = 6.1`,`0.03 convierte pCO₂ (mmHg) en mmol/L de CO₂ disuelto`],f:`pH = 6.1 + log(HCO₃⁻ / (0.03 × pCO₂))`,
 pasos:[`A: 0.03 × 40 = 1.2; 24/1.2 = 20; log 20 = 1.30; pH = 7.40. Normal.`,`B: 0.03 × 30 = 0.9; 15/0.9 = 16.7; log 16.7 = 1.22; pH = 7.32.`,`B tiene pH < 7.35 con HCO₃⁻ < 22: acidosis metabólica. La pCO₂ baja indica que el pulmón está compensando (elimina CO₂).`],
 r:`A: 7.40 (normal). B: 7.32, acidosis metabólica con compensación respiratoria`}
];

const FORM_NEW = [
{t:`t20`,src:`Tema 20, pág. 2–10`,title:`pH, pOH y constantes`,rows:[
 [`pH`,`−log [H⁺]`],[`pOH`,`−log [OH⁻] = 14 − pH`],[`De pH a [H⁺]`,`[H⁺] = 10^(−pH)`],[`pKa`,`−log Ka (menor pKa = más fuerte)`],
 [`Ácido fuerte`,`[H⁺] = C₀ (× n si libera n H⁺)`],[`Ácido débil`,`[H⁺] = √(Ka · C₀)`],[`Base fuerte`,`[OH⁻] = C₀ × n`],[`Base débil`,`[OH⁻] = √(Kb · C₀)`],
 [`Par conjugado`,`Ka × Kb = 10⁻¹⁴ ; pKa + pKb = 14`],[`Rangos`,`Débil: K 10⁻² a 10⁻¹⁴, pK 2–14, < 5 % ionizado`]]},
{t:`t21`,src:`Tema 21, pág. 4–7`,title:`Equilibrio de débiles`,rows:[
 [`Ka`,`[H₃O⁺][A⁻] / [HA]`],[`Kb`,`[BH⁺][OH⁻] / [B]`],[`ICE`,`C₀ − x ; x ; x`],[`Criterio del 5 %`,`C₀ / Ka > 400 → x ≈ √(Ka·C₀)`],[`% ionización`,`[H⁺] / C₀ × 100`]]},
{t:`t21`,src:`Tema 21, pág. 10–11`,title:`Titulación`,rows:[
 [`Equivalencia`,`moles H⁺ = moles OH⁻ (fuerte-fuerte: pH 7.00)`],[`Fórmula 1:1`,`Mₐ × Vₐ = M_b × V_b`],[`Con estequiometría`,`Mₐ·Vₐ·nₐ = M_b·V_b·n_b ; Nₐ·Vₐ = N_b·V_b`],[`Indicador`,`Fenolftaleína (8.2–10) o azul de bromotimol (6.0–7.6)`]]},
{t:`t21`,src:`Tema 21, pág. 12–15`,title:`Buffers`,rows:[
 [`Composición`,`Ácido débil + base conjugada (o base débil + ácido conjugado)`],[`Entra H⁺`,`A⁻ + H⁺ → HA`],[`Entra OH⁻`,`HA + OH⁻ → A⁻ + H₂O`],
 [`Henderson (ácido)`,`pH = pKa + log([A⁻]/[HA])`],[`Henderson (básico)`,`pOH = pKb + log([BH⁺]/[B]) ; pH = 14 − pOH`],[`Despeje`,`[A⁻]/[HA] = 10^(pH − pKa)`],[`Sangre (compl. [4])`,`pH = 6.1 + log(HCO₃⁻ / (0.03 × pCO₂)) ; ref. 7.35–7.45`]]}
];

/* ======================= FIGURAS PARA LAS TARJETAS DE REPASO ANTERIORES ======================= */
const FIGMAP = {
 "Qué es una solución":"particulas", "Soluto y solvente":"solutoSolvente", "Factores que afectan la solubilidad":"solubilidadT", "Velocidad de disolución":"velocidad",
 "Saturación de las soluciones":"saturacion", "Molaridad (M)":"molaridad", "Molalidad (m)":"molalidad", "Normalidad (N)":"normalidad",
 "Preparación de soluciones por dilución":"dilucion", "Propiedades coligativas":"coligativas", "Tonicidad y eritrocitos":"tonicidad",
 "Conductividad eléctrica":"conductividad", "Electrolitos fuertes, débiles y no electrolitos":"conductividad", "Indicadores ácido-base":"indicadores", "Cómo se mide el pH en el laboratorio":"medirPH",
 "Teoría de Arrhenius (1884)":"arrhenius", "Teoría de Brønsted-Lowry (1923)":"bronsted", "Teoría de Lewis (1923)":"lewis", "Autoionización del agua y Kw":"kw", "Escala de pH y clasificación de soluciones":"escalaPH"
};

/* ======================= FICHAS DE ESTUDIO (anverso / reverso) ======================= */
const FICHAS = [
{t:`t15`,src:`Tema 15, pág. 3`,fig:`particulas`,f:`¿Qué es una solución y cuánto miden sus partículas?`,b:`Mezcla homogénea de dos o más sustancias. Partículas de 0.1–2.0 nm: transparente, no sedimenta, no dispersa la luz.`},
{t:`t15`,src:`Tema 15, pág. 4`,fig:`solutoSolvente`,f:`¿Cómo distingo el soluto del solvente?`,b:`Por cantidad: soluto = menor cantidad; solvente = mayor. En etanol 70 % el solvente es el etanol.`},
{t:`t15`,src:`Tema 15, pág. 5`,fig:null,f:`Nombra las 4 propiedades coligativas.`,b:`Descenso de la presión de vapor, aumento ebulloscópico, descenso crioscópico y presión osmótica.`},
{t:`t15`,src:`Tema 15, pág. 6–7`,fig:`solubilidadT`,f:`¿Qué le pasa a la solubilidad de un gas al calentar?`,b:`Disminuye. Sólidos y líquidos: aumenta. Gases: más presión = más solubilidad (Ley de Henry).`},
{t:`t15`,src:`Tema 15, pág. 6`,fig:null,f:`"Lo semejante disuelve a lo semejante" significa…`,b:`Polar disuelve polar (agua y sal); apolar disuelve apolar. Por eso el aceite no se mezcla con el agua.`},
{t:`t15`,src:`Tema 15, pág. 8`,fig:`velocidad`,f:`Tres formas de acelerar la disolución.`,b:`Subdividir (moler), agitar y calentar. Cambian la velocidad, no la solubilidad.`},
{t:`t16`,src:`Tema 16, pág. 3`,fig:`saturacion`,f:`Insaturada, saturada y sobresaturada.`,b:`Insaturada: cabe más soluto. Saturada: el máximo (equilibrio dinámico). Sobresaturada: más del máximo, inestable.`},
{t:`t16`,src:`Tema 16, pág. 6–10`,fig:null,f:`Fórmula de % m/v.`,b:`% m/v = g de soluto / mL de solución × 100.`},
{t:`t16`,src:`Tema 16, pág. 12`,fig:null,f:`¿Qué es 1 ppm?`,b:`1 mg de soluto por litro (o kg) de solución.`},
{t:`t16`,src:`Tema 16, pág. 14–16`,fig:`molaridad`,f:`Fórmula de molaridad.`,b:`M = moles de soluto / L de SOLUCIÓN. Moles = g / PM.`},
{t:`t16`,src:`Tema 16, pág. 18–20`,fig:`molalidad`,f:`Molalidad: ¿qué la hace diferente?`,b:`m = moles / kg de SOLVENTE. No cambia con la temperatura.`},
{t:`t16`,src:`Tema 16, pág. 22–26`,fig:`normalidad`,f:`¿Cómo obtengo n para la normalidad?`,b:`Ácido: nº de H⁺. Base: nº de OH⁻. Sal: cationes × carga. N = M × n.`},
{t:`t17`,src:`Tema 17, pág. 3`,fig:`dilucion`,f:`Fórmula de dilución y qué se conserva.`,b:`C₁ × V₁ = C₂ × V₂. Se conservan los moles de soluto.`},
{t:`t17`,src:`Tema 17, pág. 4`,fig:null,f:`Las 4 reglas de la dilución.`,b:`Mismas unidades de C; mismas unidades de V; C₂ < C₁; V₂ > V₁.`},
{t:`t17`,src:`Tema 17, pág. 4–6`,fig:null,f:`Si V₁ = 100 mL y V₂ = 500 mL, ¿cuánta agua agrego?`,b:`V₂ − V₁ = 400 mL.`},
{t:`t17`,src:`Tema 17, pág. 9–10`,fig:`coligativas`,f:`¿Por qué el NaCl afecta más las coligativas que la glucosa?`,b:`Porque se disocia en 2 partículas (i = 2); la glucosa no se disocia (i = 1).`},
{t:`t17`,src:`Tema 17, pág. 11–12`,fig:`tonicidad`,f:`Eritrocito en medio hipotónico.`,b:`Entra agua, se hincha y revienta: hemólisis.`},
{t:`t17`,src:`Tema 17, pág. 11–12`,fig:`tonicidad`,f:`Eritrocito en medio hipertónico.`,b:`Sale agua y se arruga: crenación.`},
{t:`t18`,src:`Tema 18, pág. 4`,fig:`conductividad`,f:`¿Por qué una solución conduce electricidad?`,b:`Porque tiene iones que se mueven. En un metal conducen electrones; en una solución, iones.`},
{t:`t18`,src:`Tema 18, pág. 5`,fig:`conductividad`,f:`Ejemplos de electrolito fuerte, débil y no electrolito.`,b:`Fuerte: NaCl, HCl, NaOH. Débil: CH₃COOH, NH₃. No electrolito: sacarosa, etanol, urea.`},
{t:`t18`,src:`Tema 18, pág. 6–7`,fig:null,f:`Tornasol en ácido y en base.`,b:`Ácido: azul → rojo. Base: rojo → azul.`},
{t:`t18`,src:`Tema 18, pág. 8`,fig:`indicadores`,f:`Viraje de la fenolftaleína.`,b:`Incolora por debajo de 8.2; rosa fucsia por encima de 10.0.`},
{t:`t18`,src:`Tema 18, pág. 8`,fig:`indicadores`,f:`Viraje del azul de bromotimol.`,b:`Amarillo por debajo de 6.0; azul por encima de 7.6.`},
{t:`t18`,src:`Tema 18, pág. 9`,fig:`medirPH`,f:`Valor de referencia del pH sanguíneo.`,b:`7.35–7.45 (gasometría).`},
{t:`t19`,src:`Tema 19, pág. 3–5`,fig:`arrhenius`,f:`Ácido y base según Arrhenius.`,b:`Ácido: libera H⁺ en agua. Base: libera OH⁻ en agua. Falla con NH₃.`},
{t:`t19`,src:`Tema 19, pág. 6–8`,fig:`bronsted`,f:`Ácido y base según Brønsted-Lowry.`,b:`Ácido: dona H⁺. Base: acepta H⁺. Los pares conjugados difieren en un H⁺.`},
{t:`t19`,src:`Tema 19, pág. 9–10`,fig:`lewis`,f:`Ácido y base según Lewis.`,b:`Ácido: acepta un par de electrones (BF₃). Base: dona un par (NH₃).`},
{t:`t19`,src:`Tema 19, pág. 11–12`,fig:`kw`,f:`Valor de Kw a 25 °C.`,b:`[H⁺] × [OH⁻] = 1 × 10⁻¹⁴. En agua pura ambos valen 10⁻⁷ M.`},
{t:`t19`,src:`Tema 19, pág. 13`,fig:`escalaPH`,f:`Si [H⁺] = 10⁻³ M, ¿pH y [OH⁻]?`,b:`pH = 3; [OH⁻] = 10⁻¹¹ M (los exponentes suman −14).`},
{t:`t19`,src:`Tema 19, pág. 14`,fig:null,f:`Principio de Le Chatelier en una frase.`,b:`Si perturbas un equilibrio, se desplaza para contrarrestar la perturbación.`},
{t:`t20`,src:`Tema 20, pág. 2`,fig:`escalaPH`,f:`Fórmula del pH.`,b:`pH = −log [H⁺].`},
{t:`t20`,src:`Tema 20, pág. 3`,fig:null,f:`Fórmula del pKa y qué indica.`,b:`pKa = −log Ka. Indica la fuerza del ácido: menor pKa, más fuerte.`},
{t:`t20`,src:`Tema 20, pág. 5`,fig:`decisionPH`,f:`pH de un ácido fuerte.`,b:`[H⁺] = C₀ → pH = −log C₀. Ej.: HCl 0.05 M → pH 1.3.`},
{t:`t20`,src:`Tema 20, pág. 6`,fig:`decisionPH`,f:`pH de un ácido débil.`,b:`[H⁺] = √(Ka · C₀) → pH = −log[H⁺]. Ej.: acético 0.05 M → pH 3.02.`},
{t:`t20`,src:`Tema 20, pág. 7`,fig:null,f:`Relación entre pH y pOH.`,b:`pH + pOH = 14. A menor pOH, más básico.`},
{t:`t20`,src:`Tema 20, pág. 8–9`,fig:`fuerteDebil`,f:`Flecha y % de disociación: fuerte frente a débil.`,b:`Fuerte: → y 100 %. Débil: ⇌ y por lo general < 5 %.`},
{t:`t20`,src:`Tema 20, pág. 10`,fig:null,f:`Relación Ka–Kb de un par conjugado.`,b:`Ka × Kb = 10⁻¹⁴; pKa + pKb = 14.`},
{t:`t20`,src:`Tema 20, pág. 1`,fig:`phPka`,f:`Si pH < pKa, ¿qué forma predomina?`,b:`La ácida: [HA] > [A⁻]. Si pH > pKa, predomina A⁻.`},
{t:`t21`,src:`Tema 21, pág. 5`,fig:`ice`,f:`¿Qué significa ICE?`,b:`Inicio, Cambio, Equilibrio. Ácido: C₀ → −x → C₀ − x.`},
{t:`t21`,src:`Tema 21, pág. 6`,fig:null,f:`¿Cuándo puedo usar C₀ − x ≈ C₀?`,b:`Cuando C₀ / Ka > 400 (aproximación del 5 %).`},
{t:`t21`,src:`Tema 21, pág. 7`,fig:null,f:`Fórmula del % de ionización.`,b:`% = [H⁺] / C₀ × 100. Acético 0.10 M: 1.34 %.`},
{t:`t21`,src:`Tema 21, pág. 10`,fig:`titulacion`,f:`¿Qué va en la bureta y qué en el Erlenmeyer?`,b:`Bureta: valorante (concentración conocida). Erlenmeyer: analito + indicador.`},
{t:`t21`,src:`Tema 21, pág. 11`,fig:`curvaTit`,f:`pH en la equivalencia ácido fuerte + base fuerte.`,b:`Siempre 7.00 a 25 °C.`},
{t:`t21`,src:`Tema 21, pág. 11`,fig:null,f:`Punto de equivalencia frente a punto final.`,b:`Equivalencia: teórico (moles H⁺ = moles OH⁻). Final: el indicador cambia de color.`},
{t:`t21`,src:`Tema 21, pág. 12`,fig:`buffer`,f:`¿Qué es un buffer y de qué está hecho?`,b:`Solución que resiste cambios de pH. Ácido débil + su base conjugada.`},
{t:`t21`,src:`Tema 21, pág. 14`,fig:`hh`,f:`Ecuación de Henderson-Hasselbalch.`,b:`pH = pKa + log([base conjugada] / [ácido débil]).`},
{t:`t21`,src:`Tema 21, pág. 13`,fig:null,f:`Dos tampones biológicos.`,b:`Bicarbonato (H₂CO₃/HCO₃⁻) y fosfato (H₂PO₄⁻/HPO₄²⁻).`},
{t:`t21`,src:`Tema 21, pág. 2 · compl. [4]`,fig:`sangre`,f:`pH bajo + HCO₃⁻ bajo =`,b:`Acidosis metabólica. pH alto + HCO₃⁻ alto = alcalosis metabólica.`}
];

/* ======================= ENTRENADOR: ¿QUÉ FÓRMULA USO? ======================= */
const FQ = [
{t:`t16`,src:`Tema 16, pág. 5`,q:`"Se disuelven 15 g de glucosa en agua hasta completar 250 mL. Exprese la concentración en porcentaje."`,o:[`% m/v`,`% m/m`,`% v/v`,`ppm`],e:`Gramos de soluto y mL de solución: % m/v.`},
{t:`t16`,src:`Tema 16, pág. 5`,q:`"Se mezclan 30 mL de etanol con agua hasta 200 mL."`,o:[`% v/v`,`% m/v`,`Molaridad`,`% m/m`],e:`Soluto líquido en mL y solución en mL: % v/v.`},
{t:`t16`,src:`Tema 16, pág. 5`,q:`"Se disuelven 10 g de NaCl en 90 g de agua."`,o:[`% m/m`,`% m/v`,`Molalidad`,`Normalidad`],e:`Ambas cantidades en gramos; la solución pesa 100 g: % m/m. (Si pidiera "molal" usarías molalidad.)`},
{t:`t16`,src:`Tema 16, pág. 12`,q:`"Una muestra de agua de 2 L contiene 0.6 mg de plomo."`,o:[`ppm`,`% m/v`,`Molaridad`,`% m/m`],e:`Cantidad diminuta en mg por litro: ppm.`},
{t:`t16`,src:`Tema 16, pág. 14`,q:`"¿Cuál es la concentración molar de 20 g de NaOH en 500 mL de solución?"`,o:[`Molaridad: (g/PM)/L`,`Molalidad: moles/kg`,`Normalidad`,`% m/v`],e:`"Molar" y volumen de solución: M = (g/PM)/L.`},
{t:`t16`,src:`Tema 16, pág. 18`,q:`"Se disuelven 9 g de glucosa en 500 g de agua. Calcule su concentración molal."`,o:[`Molalidad: moles/kg de solvente`,`Molaridad`,`% m/m`,`Dilución`],e:`"Molal" y masa del solvente: molalidad.`},
{t:`t16`,src:`Tema 16, pág. 22`,q:`"¿Cuántos equivalentes por litro tiene H₂SO₄ 0.5 M?"`,o:[`Normalidad: N = M × n`,`Molaridad`,`pH`,`Dilución`],e:`Equivalentes por litro = normalidad. n = 2: N = 1.0.`},
{t:`t17`,src:`Tema 17, pág. 3`,q:`"A partir de un stock de NaCl al 10 %, prepare 200 mL al 0.9 %."`,o:[`Dilución: C₁V₁ = C₂V₂`,`% m/v directo`,`Molaridad`,`Henderson-Hasselbalch`],e:`Hay stock y concentración final deseada: dilución. Buscas V₁.`},
{t:`t17`,src:`Tema 17, pág. 5`,q:`"A 50 mL de HCl 1 M se le agrega agua hasta 250 mL. ¿Nueva concentración?"`,o:[`Dilución: C₂ = C₁V₁ / V₂`,`pH de ácido fuerte`,`Titulación`,`Molalidad`],e:`Se agrega solvente: dilución. C₂ = 0.2 M.`},
{t:`t19`,src:`Tema 19, pág. 12`,q:`"Una solución tiene [H⁺] = 1 × 10⁻⁴ M. ¿Cuál es su [OH⁻]?"`,o:[`Kw: [OH⁻] = 10⁻¹⁴ / [H⁺]`,`pH = −log C₀`,`√(Ka·C₀)`,`C₁V₁ = C₂V₂`],e:`Pide el otro ion del agua: Kw.`},
{t:`t20`,src:`Tema 20, pág. 5`,q:`"Calcule el pH de HNO₃ 0.01 M."`,o:[`Ácido fuerte: pH = −log C₀`,`Ácido débil: √(Ka·C₀)`,`Henderson-Hasselbalch`,`pOH = −log C₀`],e:`HNO₃ es fuerte y no te dan Ka: [H⁺] = C₀.`},
{t:`t20`,src:`Tema 20, pág. 6`,q:`"Calcule el pH de ácido fórmico 0.1 M, Ka = 1.8 × 10⁻⁴."`,o:[`Ácido débil: [H⁺] = √(Ka·C₀)`,`Ácido fuerte: pH = −log C₀`,`Henderson-Hasselbalch`,`Kw`],e:`Te dan Ka y una sola especie: ácido débil, raíz.`},
{t:`t20`,src:`Tema 20, pág. 7`,q:`"Calcule el pH de NaOH 0.001 M."`,o:[`Base fuerte: pOH = −log C₀ y pH = 14 − pOH`,`pH = −log C₀`,`√(Kb·C₀)`,`Henderson-Hasselbalch`],e:`Base fuerte: primero pOH = 3, luego pH = 11.`},
{t:`t21`,src:`Tema 21, pág. 8`,q:`"Calcule el pH de una solución 0.2 M de metilamina, Kb = 4.4 × 10⁻⁴."`,o:[`Base débil: [OH⁻] = √(Kb·C₀) → pOH → pH`,`Base fuerte`,`Ácido débil`,`Henderson-Hasselbalch básico`],e:`Dan Kb y una sola especie: base débil.`},
{t:`t20`,src:`Tema 20, pág. 3`,q:`"El ácido láctico tiene Ka = 1.4 × 10⁻⁴. Exprese su fuerza en escala logarítmica."`,o:[`pKa = −log Ka`,`pH = −log Ka`,`Ka × Kb = 10⁻¹⁴`,`% ionización`],e:`Escala logarítmica de Ka: pKa.`},
{t:`t20`,src:`Tema 20, pág. 10`,q:`"Ka del HF = 6.8 × 10⁻⁴. Calcule la Kb del ion F⁻."`,o:[`Kb = Kw / Ka`,`Kb = Ka`,`pKb = −log Ka`,`√(Ka·C₀)`],e:`Par conjugado: Ka × Kb = 10⁻¹⁴.`},
{t:`t21`,src:`Tema 21, pág. 7`,q:`"¿Qué fracción del ácido acético 0.1 M está ionizada?"`,o:[`% ionización = [H⁺]/C₀ × 100`,`pKa`,`pH = −log C₀`,`Titulación`],e:`"Qué fracción" o "qué porcentaje se ionizó": % de ionización (antes calcula [H⁺]).`},
{t:`t21`,src:`Tema 21, pág. 14`,q:`"Una solución contiene ácido acético 0.1 M y acetato de sodio 0.15 M. Calcule el pH."`,o:[`Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])`,`Ácido débil: √(Ka·C₀)`,`Ácido fuerte`,`Dilución`],e:`Dos especies (ácido débil + su sal): es un buffer.`},
{t:`t21`,src:`Tema 21, pág. 15`,q:`"NH₃ 0.2 M y NH₄Cl 0.2 M. Calcule el pOH."`,o:[`Henderson básico: pOH = pKb + log([BH⁺]/[B])`,`Base débil: √(Kb·C₀)`,`pOH = −log C₀`,`Kw`],e:`Base débil + su ácido conjugado: buffer básico. Como son iguales, pOH = pKb.`},
{t:`t21`,src:`Tema 21, pág. 11`,q:`"Se gastaron 22 mL de NaOH 0.1 M para neutralizar 20 mL de HCl. ¿Concentración del HCl?"`,o:[`Titulación: Mₐ × Vₐ = M_b × V_b`,`Dilución`,`pH de ácido fuerte`,`Henderson-Hasselbalch`],e:`"Neutralizar", "se gastaron", "punto final": titulación.`},
{t:`t17`,src:`Tema 17, pág. 3 vs Tema 21, pág. 11`,q:`¿Cuál es la diferencia de fondo entre C₁V₁ = C₂V₂ y Mₐ·Vₐ = M_b·V_b?`,o:[`La primera es la misma sustancia diluida; la segunda, dos sustancias que reaccionan (ácido y base)`,`Son idénticas y se usan para lo mismo`,`La primera solo sirve para ácidos`,`La segunda solo sirve con porcentajes`],e:`Se parecen en forma, pero en la dilución se conserva el soluto; en la titulación se igualan moles de H⁺ y OH⁻.`},
{t:`t21`,src:`Tema 21, pág. 2 · compl. [4]`,q:`"Gasometría con HCO₃⁻ 18 mmol/L y pCO₂ 35 mmHg. Calcule el pH."`,o:[`HH de la sangre: pH = 6.1 + log(HCO₃⁻ / (0.03·pCO₂))`,`pH = −log HCO₃⁻`,`√(Ka·C₀)`,`Kw`],e:`Bicarbonato + pCO₂: Henderson-Hasselbalch del tampón bicarbonato.`},
{t:`t15`,src:`Tema 15, pág. 4`,q:`"Identifique el solvente en una mezcla de 60 mL de alcohol y 40 mL de agua."`,o:[`Regla de cantidad: el mayoritario es el solvente`,`El agua siempre es el solvente`,`Molaridad`,`Ley de Henry`],e:`El componente en mayor cantidad (alcohol, 60 %) es el solvente.`},
{t:`t17`,src:`Tema 17, pág. 11–12`,q:`"¿Qué ocurre con eritrocitos colocados en NaCl 3 %?"`,o:[`Tonicidad: hipertónico → crenación`,`Dilución`,`Molalidad`,`Ley de Henry`],e:`Pregunta conceptual de tonicidad: hipertónico, sale agua, crenación.`}
];

/* ======================= REFERENCIAS (Vancouver) ======================= */
const REFS = [
 `Grande C ME. Temas 15 a 28: soluciones, ácidos-bases, hidrocarburos, alcoholes, fenoles y éteres [presentaciones de clase]. Módulo IV, Licenciatura en Laboratorio Clínico; 2026.`,
 `Chang R, Goldsby KA. Química. 12a ed. México: McGraw-Hill Interamericana; 2017.`,
 `Brown TL, LeMay HE, Bursten BE, Murphy CJ, Woodward PM. Química: la ciencia central. 12a ed. México: Pearson Educación; 2014.`,
 `Rifai N, editor. Tietz fundamentals of clinical chemistry and molecular diagnostics. 8th ed. St. Louis: Elsevier; 2019.`
];
