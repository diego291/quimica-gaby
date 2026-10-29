
const TOPICS = {
  t15: { n: `Tema 15`, name: `Soluciones` },
  t16: { n: `Tema 16`, name: `Unidades de concentración` },
  t17: { n: `Tema 17`, name: `Dilución y coligativas` },
  t18: { n: `Tema 18`, name: `Generalidades ácido-base` },
  t19: { n: `Tema 19`, name: `Teorías ácido-base y Kw` }
};

/* ======================= REPASO ======================= */
const REPASO = [
/* ---------- TEMA 15 ---------- */
{ t:`t15`, src:`Tema 15, pág. 3`, title:`Qué es una solución`,
  body:`<p>Una solución (o disolución) es una <b>mezcla homogénea</b> de dos o más sustancias. Homogénea significa que se ve una sola fase, igual en toda su extensión.</p>
  <ul>
  <li>Sus partículas miden entre <b>0.1 y 2.0 nm</b>: no se ven ni a simple vista ni dispersan la luz.</li>
  <li>Son <b>transparentes</b>, aunque pueden tener color (una solución de CuSO₄ es azul, pero se ve a través de ella).</li>
  <li><b>No se separan en reposo</b>. Un frasco de suero salino puede pasar días en el estante y el NaCl no se deposita en el fondo.</li>
  <li>No siempre es "sólido en líquido": también hay gas en líquido (O₂ y CO₂ en el plasma) o líquido en líquido (etanol en agua).</li>
  </ul>`,
  memo:`Homogénea, 0.1–2.0 nm, transparente y no sedimenta.` },

{ t:`t15`, src:`Tema 15, pág. 4`, title:`Soluto y solvente`,
  body:`<p>La regla es de cantidad, no de estado físico:</p>
  <ul>
  <li><b>Soluto:</b> el componente que está en <b>menor</b> cantidad.</li>
  <li><b>Solvente (disolvente):</b> el que está en <b>mayor</b> cantidad.</li>
  </ul>
  <p>Ejemplo del material: en etanol al 10 %, el soluto es el etanol (10 %) y el solvente el agua (90 %). En etanol al <b>70 %</b>, se invierte: el solvente es el <b>alcohol</b> (70 %) y el soluto el agua (30 %).</p>
  <p>En el laboratorio: en el suero fisiológico al 0.9 %, el NaCl es el soluto y el agua el solvente.</p>`,
  memo:`El que más hay es el solvente. Alcohol 70 %: solvente = alcohol.` },

{ t:`t15`, src:`Tema 15, pág. 5`, title:`Propiedades generales y coligativas`,
  body:`<p>Piénsalo así: las <b>generales</b> describen <i>cómo es</i> la solución; las <b>coligativas</b> cambian según <i>cuántas</i> partículas hay, sin importar <i>cuáles</i> sean.</p>
  <table class="tbl"><thead><tr><th>Generales</th><th>Coligativas</th></tr></thead><tbody>
  <tr><td>1. Homogeneidad: una sola fase uniforme.</td><td>1. Descenso de la presión de vapor.</td></tr>
  <tr><td>2. Tamaño molecular: 0.1–2.0 nm, sin efecto Tyndall.</td><td>2. Aumento ebulloscópico (hierve a mayor temperatura).</td></tr>
  <tr><td>3. Estabilidad: no sedimenta.</td><td>3. Descenso crioscópico (congela a menor temperatura).</td></tr>
  <tr><td>4. Inseparabilidad mecánica: solo se separa por destilación, cristalización o evaporación.</td><td>4. Presión osmótica.</td></tr>
  <tr><td>5. Composición variable y conservación de masa: masa solución = masa soluto + masa solvente.</td><td>5. Dependen solo del número de partículas, no de la naturaleza química.</td></tr>
  </tbody></table>`,
  memo:`Coligativas = cuentan partículas, no las identifican.` },

{ t:`t15`, src:`Tema 15, pág. 6–7`, title:`Factores que afectan la solubilidad`,
  body:`<p><b>Solubilidad</b> = cuánto soluto como máximo puede disolverse. Cuatro factores:</p>
  <ol>
  <li><b>Naturaleza de soluto y solvente:</b> "lo semejante disuelve a lo semejante". Polar con polar, apolar con apolar. Por eso el aceite (apolar) no se mezcla con el agua (polar), como en la imagen del vaso de la pág. 7.</li>
  <li><b>Temperatura:</b> sólidos y líquidos: a mayor T°, <b>mayor</b> solubilidad. Gases: a mayor T°, <b>menor</b> solubilidad. En la gráfica de la pág. 7, casi todas las sales suben con la temperatura, el NaCl queda casi plano y el Ce₂(SO₄)₃ baja; en la de gases, el CO₂ cae marcadamente.</li>
  <li><b>Presión:</b> solo importa en gases. A mayor presión, mayor solubilidad del gas (<b>Ley de Henry</b>: a T° constante, el gas disuelto es directamente proporcional a su presión parcial). En sólidos y líquidos el efecto es insignificante.</li>
  <li><b>pH:</b> afecta a solutos que son ácidos o bases débiles. La forma <b>ionizada</b> (con carga) es mucho más soluble en agua que la neutra.</li>
  </ol>`,
  memo:`Gases al revés: calor los saca, presión los mete.` },

{ t:`t15`, src:`Tema 15, pág. 8`, title:`Velocidad de disolución`,
  body:`<p>Es la rapidez con la que se disuelve el soluto por unidad de tiempo. No la confundas con la solubilidad: <b>solubilidad = cuánto; velocidad = qué tan rápido</b>.</p>
  <ol>
  <li><b>Grado de subdivisión:</b> partícula más pequeña = más superficie de contacto = más rápido (azúcar en polvo frente a un cubo).</li>
  <li><b>Agitación:</b> retira las moléculas ya disueltas de la superficie del sólido y deja entrar solvente nuevo.</li>
  <li><b>Temperatura:</b> aumenta la energía cinética; las moléculas chocan más rápido y más seguido.</li>
  <li><b>Concentración:</b> al inicio la velocidad es máxima y disminuye al acercarse a la saturación.</li>
  </ol>
  <p>Ojo: la temperatura es el único factor que aparece en las dos listas (solubilidad y velocidad).</p>`,
  memo:`Moler, agitar, calentar: más rápido. Velocidad máxima al inicio.` },

{ t:`t15`, src:`Tema 15, pág. 2`, title:`Soluciones de uso en el laboratorio clínico`,
  body:`<p>Los objetivos del tema mencionan cinco tipos, y su preparación exacta condiciona la exactitud de cualquier prueba diagnóstica:</p>
  <ul>
  <li><b>Amortiguadoras (buffers):</b> mantienen el pH estable durante una reacción o tinción.</li>
  <li><b>Reactivos:</b> participan directamente en la determinación del analito.</li>
  <li><b>Conservadoras:</b> preservan la muestra hasta su análisis.</li>
  <li><b>De limpieza:</b> desinfección de superficies y material.</li>
  <li><b>Tinciones:</b> colorean estructuras para su observación al microscopio.</li>
  </ul>`,
  memo:`Amortiguadoras, reactivos, conservadoras, limpieza y tinciones.` },

/* ---------- TEMA 16 ---------- */
{ t:`t16`, src:`Tema 16, pág. 3`, title:`Saturación de las soluciones`,
  body:`<p>Es la <b>capacidad máxima</b> que tiene un disolvente para disolver un soluto a una temperatura y presión determinadas. En ese punto hay un <b>equilibrio dinámico</b>: la velocidad con que el soluto se disuelve es igual a la velocidad con que cristaliza.</p>
  <ul>
  <li><b>Insaturada (diluida):</b> tiene menos soluto del que podría disolver.</li>
  <li><b>Saturada:</b> tiene exactamente el máximo; lo que agregues ya no se disuelve.</li>
  <li><b>Sobresaturada:</b> estado <b>inestable</b> con más soluto que el límite. Se obtiene calentando para disolver más y enfriando con cuidado; cualquier perturbación brusca cristaliza el exceso.</li>
  </ul>
  <p>Factores que la afectan: temperatura y naturaleza química.</p>`,
  memo:`Insaturada < Saturada (máximo, equilibrio dinámico) < Sobresaturada (inestable).` },

{ t:`t16`, src:`Tema 16, pág. 4–5`, title:`Unidades físicas y químicas`,
  body:`<p>Las unidades de concentración dicen <b>cuánto soluto hay en una cantidad de solución o de solvente</b>. En el laboratorio no basta decir "diluida" o "concentrada"; se necesita el número exacto.</p>
  <table class="tbl"><thead><tr><th>Físicas (masa o volumen)</th><th>Químicas (moles o equivalentes)</th></tr></thead><tbody>
  <tr><td>% m/m = g soluto / g solución × 100</td><td>M = moles soluto / L solución</td></tr>
  <tr><td>% v/v = mL soluto / mL solución × 100</td><td>m = moles soluto / kg solvente</td></tr>
  <tr><td>% m/v = g soluto / mL solución × 100</td><td>N = equivalentes soluto / L solución (N = M × n)</td></tr>
  <tr><td>ppm = mg soluto / L (o kg) solución</td><td></td></tr>
  </tbody></table>`,
  memo:`Solo la molalidad usa solvente; todo lo demás va sobre la solución.` },

{ t:`t16`, src:`Tema 16, pág. 6, 8, 10`, title:`Los tres porcentajes`,
  body:`<p>La clave de todo porcentaje: <b>se divide entre la solución</b>, que es soluto + solvente.</p>
  <ul>
  <li><b>% m/m (p/p):</b> gramos de soluto en 100 g de solución.</li>
  <li><b>% v/v:</b> mL de soluto en 100 mL de solución. Para alcoholes, desinfectantes y mezclas de líquidos.</li>
  <li><b>% m/v (p/v):</b> gramos de soluto en 100 mL de solución. La más usada en sueros, fármacos y química analítica. Se asume que 1 mL pesa aproximadamente 1 g.</li>
  </ul>
  <p><b>Cómo leer el enunciado:</b></p>
  <ul>
  <li>"Se disuelven 25 g en <b>175 g de agua</b>": el agua es solo solvente, <b>suma</b> 25 + 175 = 200 g de solución.</li>
  <li>"...en agua <b>suficiente hasta</b> 300 mL", "hasta <b>aforar</b>", "volumen <b>total</b>": ese dato ya es la solución, no sumes nada.</li>
  </ul>
  <p>Despejes útiles: soluto = % × solución / 100; solución = soluto × 100 / %.</p>`,
  memo:`Soluto entre SOLUCIÓN, por 100. "Hasta" = ya es solución.` },

{ t:`t16`, src:`Tema 16, pág. 12`, title:`Partes por millón (ppm)`,
  body:`<p>Para soluciones <b>muy diluidas</b> (trazas): impurezas en agua, suelo, aire o medicamentos.</p>
  <p class="fx">ppm = mg de soluto / L de solución (o kg de solución)</p>
  <p>1 ppm significa 1 mg de soluto en cada litro o kilogramo. Antes de dividir, verifica: masa en <b>mg</b> y volumen en <b>L</b> (800 mL = 0.8 L).</p>`,
  memo:`ppm = mg / L.` },

{ t:`t16`, src:`Tema 16, pág. 14–16`, title:`Molaridad (M)`,
  body:`<p>Moles de soluto por cada <b>litro de solución</b>. 1 mol disuelto hasta completar 1 L = 1 M. Se usa porque simplifica los cálculos estequiométricos y se mide por volumen.</p>
  <p><b>Los 4 pasos (infografía pág. 15):</b></p>
  <ol>
  <li>Leer el enunciado: anotar masa de soluto y volumen (pasarlo a L).</li>
  <li>Sacar el peso molecular (PM) sumando masas atómicas.</li>
  <li>Moles = masa (g) / PM (g/mol).</li>
  <li>M = moles / litros de solución.</li>
  </ol>
  <p class="note">Nota sobre la pág. 16: allí aparece Na 23 + Cl 35 = 57. Con la masa del cloro que usa la infografía (35.5), el PM del NaCl es <b>58.5 g/mol</b>. El resultado sigue redondeando a 0.15 M, pero en el parcial usa 58.5.</p>`,
  memo:`M = (g / PM) / L de solución.` },

{ t:`t16`, src:`Tema 16, pág. 18–20`, title:`Molalidad (m)`,
  body:`<p>Moles de soluto por cada <b>kilogramo de solvente</b> (no de solución). Se escribe con <b>m minúscula</b>.</p>
  <p>Ventaja: <b>no depende de la temperatura</b>, porque la masa no cambia al calentar o enfriar, mientras que el volumen sí (por eso la molaridad sí varía).</p>
  <p>Pasos: masa de soluto y masa de solvente en kg → PM → moles → m = moles / kg de solvente.</p>`,
  memo:`m minúscula = kg de solvente. No cambia con la temperatura.` },

{ t:`t16`, src:`Tema 16, pág. 22–26`, title:`Normalidad (N)`,
  body:`<p>Equivalentes-gramo de soluto por litro de solución. Mide la <b>capacidad reactiva</b> del soluto, no solo cuántas moléculas hay.</p>
  <p class="fx">PE = PM / n &nbsp;&nbsp;|&nbsp;&nbsp; Eq-g = masa / PE &nbsp;&nbsp;|&nbsp;&nbsp; N = Eq-g / L &nbsp;&nbsp;|&nbsp;&nbsp; N = M × n</p>
  <table class="tbl"><thead><tr><th>Tipo de soluto</th><th>Cómo obtener n</th><th>Ejemplos</th></tr></thead><tbody>
  <tr><td>Ácido</td><td>Número de H⁺ que libera</td><td>HCl = 1, H₂SO₄ = 2, H₃PO₄ = 3</td></tr>
  <tr><td>Base</td><td>Número de OH⁻</td><td>NaOH = 1, Ca(OH)₂ = 2</td></tr>
  <tr><td>Sal</td><td>Nº de cationes × carga de cada catión</td><td>Na₂CO₃ = 2 × 1 = 2; Al₂(SO₄)₃ = 2 × 3 = 6</td></tr>
  </tbody></table>`,
  memo:`N = M × n. Sal: cationes × carga.` },

{ t:`t16`, src:`Tema 16, pág. 5 (resumen)`, title:`Qué fórmula usar según el enunciado`,
  body:`<table class="tbl"><thead><tr><th>Si el problema te da o pide...</th><th>Usa</th></tr></thead><tbody>
  <tr><td>g de soluto y g de solución (o de agua)</td><td>% m/m</td></tr>
  <tr><td>mL de soluto líquido y mL de solución</td><td>% v/v</td></tr>
  <tr><td>g de soluto y mL de solución</td><td>% m/v</td></tr>
  <tr><td>mg de soluto en L o kg (cantidades diminutas)</td><td>ppm</td></tr>
  <tr><td>g, fórmula química y volumen en mL o L de solución; pide "molar"</td><td>Molaridad</td></tr>
  <tr><td>g, fórmula química y g de agua/solvente; pide "molal"</td><td>Molalidad</td></tr>
  <tr><td>Pide "normal" o "equivalentes"</td><td>Normalidad</td></tr>
  <tr><td>Una solución madre que se diluye</td><td>C₁V₁ = C₂V₂ (Tema 17)</td></tr>
  </tbody></table>`,
  memo:`Busca las palabras: "molar", "molal", "normal", "hasta", "en ... g de agua".` },

/* ---------- TEMA 17 ---------- */
{ t:`t17`, src:`Tema 17, pág. 3`, title:`Preparación de soluciones por dilución`,
  body:`<p>Diluir es <b>agregar solvente</b> a una solución concentrada: el volumen aumenta y la concentración disminuye. La cantidad de soluto (moles) <b>no cambia</b>; solo se reparte en más volumen.</p>
  <p class="fx">C₁ × V₁ = C₂ × V₂</p>
  <ul><li>C₁ y V₁: concentración y volumen de la solución madre (stock).</li>
  <li>C₂ y V₂: concentración y volumen finales deseados.</li></ul>
  <p>Analogía: un jugo concentrado al que le agregas agua. El jugo que hay en el vaso es el mismo; solo queda más "aguado".</p>`,
  memo:`Lo que se conserva son los moles de soluto.` },

{ t:`t17`, src:`Tema 17, pág. 4`, title:`Las cuatro reglas de la dilución`,
  body:`<ol>
  <li>C₁ y C₂ en las <b>mismas unidades</b> (M con M, % con %, mg/mL con mg/mL).</li>
  <li>V₁ y V₂ en las <b>mismas unidades</b> (mL con mL o L con L).</li>
  <li>C₂ siempre es <b>menor</b> que C₁.</li>
  <li>V₂ siempre es <b>mayor</b> que V₁.</li>
  </ol>
  <p>Úsalas para verificar tu resultado. Si te da C₂ mayor que C₁, invertiste algo en el despeje.</p>
  <p>Detalle práctico: V₂ es el volumen <b>final</b>. El solvente que agregas es V₂ − V₁.</p>`,
  memo:`Mismas unidades; C baja, V sube; solvente agregado = V₂ − V₁.` },

{ t:`t17`, src:`Tema 17, pág. 9–10`, title:`Propiedades coligativas`,
  body:`<p>Propiedades físicas que dependen <b>exclusivamente de la cantidad de partículas</b> de soluto, no de su identidad química.</p>
  <ol>
  <li><b>Descenso de la presión de vapor:</b> el soluto no volátil dificulta la evaporación del solvente.</li>
  <li><b>Aumento ebulloscópico:</b> la solución necesita mayor temperatura para hervir.</li>
  <li><b>Descenso crioscópico:</b> la solución congela a menor temperatura.</li>
  <li><b>Presión osmótica:</b> fuerza necesaria para detener el paso de solvente a través de una membrana semipermeable.</li>
  </ol>
  <p><b>Efecto de disociación (factor i de van 't Hoff):</b> los electrolitos se ionizan y producen más partículas. NaCl → Na⁺ + Cl⁻ (i = 2); CaCl₂ → Ca²⁺ + 2Cl⁻ (i = 3); glucosa no se disocia (i = 1). A igual concentración, el CaCl₂ tiene el mayor efecto.</p>`,
  memo:`Más partículas = más efecto. Electrolitos multiplican por i.` },

{ t:`t17`, src:`Tema 17, pág. 11–12`, title:`Tonicidad y eritrocitos`,
  body:`<table class="tbl"><thead><tr><th>Medio</th><th>Presión osmótica externa</th><th>Movimiento del agua</th><th>Efecto en el eritrocito</th></tr></thead><tbody>
  <tr><td>Isotónico (NaCl 0.9 %)</td><td>Igual a la intracelular</td><td>Flujo neto nulo</td><td>Conserva su forma bicóncava</td></tr>
  <tr><td>Hipotónico (agua destilada)</td><td>Menor</td><td>Entra a la célula</td><td><b>Hemólisis</b> (se hincha y revienta)</td></tr>
  <tr><td>Hipertónico (NaCl 3 %)</td><td>Mayor</td><td>Sale de la célula</td><td><b>Crenación</b> (se arruga)</td></tr>
  </tbody></table>
  <p>Aplicación en el laboratorio: las suspensiones de glóbulos rojos se preparan en solución salina 0.9 %. Si se usara agua destilada, se lisarían antes del análisis.</p>`,
  memo:`HipO = hinchada (hemólisis). HipER = arrugada (crenación).` },

/* ---------- TEMA 18 ---------- */
{ t:`t18`, src:`Tema 18, pág. 2–3`, title:`Homeostasis y equilibrio`,
  body:`<p><b>Homeostasis:</b> capacidad del cuerpo de mantener estables sus condiciones internas a pesar de los cambios externos.</p>
  <p><b>Equilibrio:</b> es la manifestación de la homeostasis. No es estático sino <b>dinámico</b>: los parámetros oscilan dentro de rangos fisiológicos normales (justo lo que reportas como "valores de referencia").</p>
  <p><b>Principios:</b></p>
  <ol>
  <li>Mantener el <b>medio interno</b> (líquidos extracelulares que bañan a las células): temperatura, pH, glucosa, agua y electrolitos.</li>
  <li>Control por <b>arcos reflejos</b>: receptor, centro integrador y efector.</li>
  <li><b>Retroalimentación</b>: positiva, negativa y anticipatoria.</li>
  <li><b>Cooperación interorgánica</b> jerárquica: sistema nervioso, endocrino y sistemas de intercambio (renal, respiratorio y digestivo).</li>
  </ol>`,
  memo:`Medio interno, arco reflejo, retroalimentación (+, −, anticipatoria), cooperación de órganos.` },

{ t:`t18`, src:`Tema 18, pág. 4`, title:`Conductividad eléctrica`,
  body:`<p>Capacidad de una disolución para transmitir corriente eléctrica. En un cable la corriente viaja por <b>electrones</b>; en un líquido viaja por <b>iones</b> en movimiento (Na⁺, K⁺, Cl⁻, H⁺, OH⁻).</p>
  <p>Sin iones no hay conducción. Este principio es la base de los electrodos con que se miden electrolitos y pH en el laboratorio.</p>`,
  memo:`Metal = electrones. Solución = iones.` },

{ t:`t18`, src:`Tema 18, pág. 5`, title:`Electrolitos fuertes, débiles y no electrolitos`,
  body:`<table class="tbl"><thead><tr><th>Tipo</th><th>Qué ocurre en agua</th><th>Conducción</th><th>Ejemplos</th></tr></thead><tbody>
  <tr><td>Fuerte</td><td>Se disocia al 100 %</td><td>Alta</td><td>NaCl, HCl, NaOH</td></tr>
  <tr><td>Débil</td><td>Se ioniza parcialmente; la mayoría queda neutra</td><td>Baja</td><td>CH₃COOH, NH₃</td></tr>
  <tr><td>No electrolito</td><td>Se disuelve pero no forma iones (enlaces covalentes)</td><td>Nula</td><td>Sacarosa, etanol, urea</td></tr>
  </tbody></table>
  <p>Otros factores que influyen en la conductividad: concentración, tamaño del ion y pureza del solvente.</p>`,
  memo:`Fuerte 100 %, débil parcial, no electrolito 0 %.` },

{ t:`t18`, src:`Tema 18, pág. 6–7`, title:`Definiciones operacionales de ácido y base`,
  body:`<p>Una <b>definición operacional</b> describe una sustancia por lo que se <b>observa y mide</b> en el laboratorio, no por teoría molecular.</p>
  <table class="tbl"><thead><tr><th>Propiedad</th><th>Ácido</th><th>Base</th></tr></thead><tbody>
  <tr><td>Sabor</td><td>Agrio (limón, vinagre)</td><td>Amargo (jabón, bicarbonato, cafeína)</td></tr>
  <tr><td>Tacto</td><td>—</td><td>Resbaladizo, jabonoso</td></tr>
  <tr><td>pH a 25 °C</td><td>Menor de 7</td><td>Mayor de 7</td></tr>
  <tr><td>Tornasol</td><td>Azul → rojo</td><td>Rojo → azul</td></tr>
  <tr><td>Fenolftaleína</td><td>Incolora</td><td>Rosa intenso o fucsia</td></tr>
  <tr><td>Naranja de metilo</td><td>Rojo/rosa</td><td>Amarillo</td></tr>
  <tr><td>Reacción característica</td><td>Con metales activos (Zn, Mg, Fe) → H₂ + sal. Con carbonatos y bicarbonatos → efervescencia de CO₂</td><td>Con grasas → jabón + glicerol (saponificación)</td></tr>
  <tr><td>Neutralización</td><td colspan="2">Ácido + base → sal + agua</td></tr>
  <tr><td>Conductividad</td><td colspan="2">Ambos conducen la corriente (son electrolitos)</td></tr>
  </tbody></table>`,
  memo:`Tornasol: Ácido Azul→Rojo; la base lo devuelve a azul.` },

{ t:`t18`, src:`Tema 18, pág. 8`, title:`Indicadores ácido-base`,
  body:`<p>Compuestos (generalmente un <b>ácido o base orgánica débil</b>) que cambian de color según el pH. Existen en dos formas que absorben la luz de forma distinta:</p>
  <p class="fx">HIn (color de la forma ácida) ⇌ H⁺ + In⁻ (color de la forma básica)</p>
  <p>Por debajo del intervalo de viraje ves el color ácido; por encima, el básico; dentro, un color intermedio.</p>
  <div class="scroll"><table class="tbl"><thead><tr><th>Indicador</th><th>Forma ácida</th><th>Forma básica</th><th>Viraje (pH)</th></tr></thead><tbody>
  <tr><td>Rojo congo</td><td>Azul</td><td>Rojo</td><td>3.0–5.0</td></tr>
  <tr><td>Azul de bromofenol</td><td>Amarillo</td><td>Azul violeta</td><td>3.0–4.6</td></tr>
  <tr><td>Naranja de metilo</td><td>Rojo</td><td>Amarillo</td><td>3.2–4.4</td></tr>
  <tr><td>Verde de bromocresol</td><td>Amarillo</td><td>Azul</td><td>3.8–5.4</td></tr>
  <tr><td>Rojo de metilo</td><td>Rojo</td><td>Amarillo</td><td>4.8–6.0</td></tr>
  <tr><td>Azul de bromotimol</td><td>Amarillo</td><td>Azul</td><td>6.0–7.6</td></tr>
  <tr><td>Rojo fenol</td><td>Amarillo</td><td>Rojo</td><td>6.6–8.0</td></tr>
  <tr><td>Rojo cresol</td><td>Amarillo</td><td>Rojo</td><td>7.0–8.8</td></tr>
  <tr><td>Azul de timol</td><td>Amarillo</td><td>Azul</td><td>8.0–9.6</td></tr>
  <tr><td>Fenolftaleína</td><td>Incoloro</td><td>Rosa fucsia</td><td>8.2–10.0</td></tr>
  <tr><td>Amarillo de alizarina</td><td>Amarillo</td><td>Rojo</td><td>10.1–12.0</td></tr>
  </tbody></table></div>`,
  memo:`Debajo del rango: color ácido. Encima: color básico.` },

{ t:`t18`, src:`Tema 18, pág. 9`, title:`Cómo se mide el pH en el laboratorio`,
  body:`<p>Las imágenes de la pág. 9 muestran los métodos que vas a usar:</p>
  <ul>
  <li><b>Papel o tiras indicadoras de pH:</b> comparación de color con una escala.</li>
  <li><b>pHmetro de bolsillo y pHmetro de mesa:</b> lectura digital con electrodo.</li>
  <li><b>Tira reactiva de orina:</b> incluye una almohadilla de pH dentro del uroanálisis.</li>
  <li><b>Gasómetro:</b> el reporte mostrado (medido a 37 °C) da pH 7.45 con intervalo de referencia 7.35–7.45: está en el límite superior.</li>
  </ul>`,
  memo:`Tira, pHmetro, uroanálisis, gasometría (sangre 7.35–7.45).` },

/* ---------- TEMA 19 ---------- */
{ t:`t19`, src:`Tema 19, pág. 3–5`, title:`Teoría de Arrhenius (1884)`,
  body:`<p>Primer modelo moderno; se basa en lo que pasa <b>en agua</b>.</p>
  <ul><li><b>Ácido:</b> sustancia con hidrógeno que en agua libera <b>H⁺</b>. Ej.: HCl, H₂SO₄.</li>
  <li><b>Base:</b> sustancia que en agua libera <b>OH⁻</b>. Ej.: NaOH, Ba(OH)₂.</li>
  <li><b>Neutralización:</b> H⁺ + OH⁻ → H₂O, y queda una sal en solución: ácido + base → sal + agua.</li></ul>
  <p><b>Limitantes (pág. 4):</b></p>
  <ol><li>Solo sirve en medio acuoso (no en otros solventes ni en fase gaseosa).</li>
  <li>No explica bases sin OH⁻ como el <b>NH₃</b>.</li>
  <li>El H⁺ no existe libre en agua: se une a ella y forma <b>H₃O⁺</b> (hidronio).</li></ol>
  <p>Estas limitantes dieron lugar a las teorías de Brønsted-Lowry y de Lewis.</p>`,
  memo:`Arrhenius: H⁺ y OH⁻ en agua. Falla con NH₃.` },

{ t:`t19`, src:`Tema 19, pág. 6–8`, title:`Teoría de Brønsted-Lowry (1923)`,
  body:`<ul><li><b>Ácido:</b> <b>dona</b> un protón (H⁺).</li><li><b>Base:</b> <b>acepta</b> un protón.</li></ul>
  <p>Las reacciones ácido-base son transferencias de protones. No requiere agua ni que la base tenga OH⁻.</p>
  <p><b>Pares conjugados:</b> el ácido, al ceder su H⁺, se convierte en su <b>base conjugada</b>; la base, al recibirlo, se convierte en su <b>ácido conjugado</b>.</p>
  <p class="fx">NH₃ (base) + H₂O (ácido) ⇌ NH₄⁺ (ácido conj.) + OH⁻ (base conj.)</p>
  <p><b>Método rápido:</b> compara cada especie de la izquierda con las de la derecha. La que <b>pierde</b> un H es el ácido; la que lo <b>gana</b> es la base.</p>
  <ul><li><b>Anfóteras:</b> actúan como ácido o como base según con quién reaccionen. El agua es base frente al HCl y ácido frente al NH₃.</li>
  <li><b>Independencia del solvente:</b> explica HCl + NH₃ → NH₄Cl(s) en fase gaseosa.</li>
  <li><b>Fuerza relativa:</b> ácido fuerte → base conjugada muy débil; ácido débil → base conjugada más fuerte.</li></ul>`,
  memo:`Brønsted: ácido dona H⁺, base acepta H⁺. Pares difieren en un H.` },

{ t:`t19`, src:`Tema 19, pág. 9–10`, title:`Teoría de Lewis (1923)`,
  body:`<p>La más general: se basa en <b>pares de electrones</b>, no en protones.</p>
  <ul><li><b>Ácido de Lewis:</b> <b>acepta</b> un par de electrones; necesita orbitales vacíos (BF₃, AlCl₃, H⁺, Cu²⁺, CO₂).</li>
  <li><b>Base de Lewis:</b> <b>dona</b> un par de electrones solitarios (NH₃, H₂O, Cl⁻, OH⁻).</li></ul>
  <p>Al reaccionar forman un <b>enlace covalente coordinado</b>: ambos electrones del enlace los aporta el mismo átomo (el de la base).</p>
  <p>Truco: los cationes metálicos y las moléculas "con hueco" (B, Al) son ácidos; lo que tiene pares libres (N, O, aniones) es base.</p>`,
  memo:`Lewis: ácido Acepta electrones (A con A); base dona.` },

{ t:`t19`, src:`Tema 19, pág. 3, 6, 9`, title:`Comparación de las tres teorías`,
  body:`<table class="tbl"><thead><tr><th>Teoría</th><th>Ácido</th><th>Base</th><th>Alcance</th></tr></thead><tbody>
  <tr><td>Arrhenius (1884)</td><td>Libera H⁺ en agua</td><td>Libera OH⁻ en agua</td><td>Solo medio acuoso</td></tr>
  <tr><td>Brønsted-Lowry (1923)</td><td>Dona H⁺</td><td>Acepta H⁺</td><td>Cualquier solvente o fase gaseosa</td></tr>
  <tr><td>Lewis (1923)</td><td>Acepta par de e⁻</td><td>Dona par de e⁻</td><td>La más amplia; incluye especies sin H</td></tr>
  </tbody></table>`,
  memo:`Agua → protones → electrones: cada teoría amplía la anterior.` },

{ t:`t19`, src:`Tema 19, pág. 11–12`, title:`Autoionización del agua y Kw`,
  body:`<p>En el agua pura, una fracción muy pequeña de moléculas se ioniza: H₂O ⇌ H⁺ + OH⁻. Se forman <b>iguales cantidades</b> de ambos iones, y la ionización y la recombinación ocurren al mismo ritmo (equilibrio).</p>
  <p class="fx">Kw = [H⁺] × [OH⁻] = 1 × 10⁻¹⁴ (a 25 °C)</p>
  <p>En agua pura: [H⁺] = [OH⁻] = 1 × 10⁻⁷ M, por eso el pH neutro es 7. Si aumenta [H⁺] hay más acidez; si aumenta [OH⁻], más alcalinidad. El producto siempre vale 10⁻¹⁴.</p>`,
  memo:`[H⁺] × [OH⁻] = 10⁻¹⁴. Neutro: ambos 10⁻⁷.` },

{ t:`t19`, src:`Tema 19, pág. 13, 15`, title:`Escala de pH y clasificación de soluciones`,
  body:`<table class="tbl"><thead><tr><th>Solución</th><th>Relación</th><th>Concentraciones a 25 °C</th><th>pH</th></tr></thead><tbody>
  <tr><td>Neutra</td><td>[H⁺] = [OH⁻]</td><td>ambos 10⁻⁷ M</td><td>7</td></tr>
  <tr><td>Ácida</td><td>[H⁺] > [OH⁻]</td><td>[H⁺] > 10⁻⁷ M</td><td>&lt; 7</td></tr>
  <tr><td>Básica</td><td>[H⁺] &lt; [OH⁻]</td><td>[OH⁻] > 10⁻⁷ M</td><td>&gt; 7</td></tr>
  </tbody></table>
  <p><b>Truco con la tabla de la pág. 13:</b> cuando la concentración es exactamente 1 × 10⁻ˣ, el pH es x (el exponente sin signo). Y los exponentes de [H⁺] y [OH⁻] siempre suman −14.</p>
  <p>Ejemplo: [H⁺] = 10⁻³ → pH 3 → [OH⁻] = 10⁻¹¹.</p>
  <p>Cuidado con "más grande": 10⁻³ es <b>mayor</b> que 10⁻⁷ (más H⁺, más ácido).</p>`,
  memo:`Exponentes suman −14. pH = exponente de [H⁺].` },

{ t:`t19`, src:`Tema 19, pág. 14`, title:`Principio de Le Chatelier`,
  body:`<p>"Si un sistema en equilibrio es perturbado desde el exterior, se desplaza en la dirección que contrarresta esa perturbación hasta alcanzar un nuevo equilibrio."</p>
  <ul><li><b>Agregar un ácido:</b> aumenta [H⁺], el pH baja. El equilibrio del agua se desplaza hacia la formación de H₂O y disminuye [OH⁻].</li>
  <li><b>Agregar una base:</b> aumenta [OH⁻], el pH sube; disminuye [H⁺].</li>
  <li><b>Temperatura:</b> la autoionización es <b>endotérmica</b>; al calentar, la ionización aumenta.</li>
  <li>También se mencionan presión y catalizadores.</li></ul>
  <p>Conexión clínica: el organismo hace algo parecido. Ante un exceso de ácido, los sistemas amortiguadores, el pulmón y el riñón desplazan los equilibrios para regresar el pH a 7.35–7.45.</p>`,
  memo:`El equilibrio "se defiende": va contra la perturbación.` }
];

/* ======================= OPCIÓN MÚLTIPLE (la 1.ª opción es la correcta; se mezclan al mostrar) ======================= */
const MCQ = [
/* T15 */
{t:`t15`,src:`Tema 15, pág. 3`,q:`¿Cuál es el tamaño de partícula característico de una solución?`,o:[`0.1 a 2.0 nm`,`2 a 100 nm`,`Mayor de 1 µm`,`100 a 500 nm`],e:`Las soluciones tienen partículas de 0.1–2.0 nm. Por eso son transparentes, no sedimentan y no dispersan la luz.`},
{t:`t15`,src:`Tema 15, pág. 4`,q:`En una solución de etanol al 70 %, según el material, el solvente es:`,o:[`El etanol`,`El agua`,`Ambos por igual`,`No hay solvente`],e:`El solvente es el componente en mayor cantidad. Al 70 %, el etanol supera al agua (30 %).`},
{t:`t15`,src:`Tema 15, pág. 5`,q:`Un haz de luz atraviesa un tubo con suero salino 0.9 % y no se observa su trayectoria. Esto se debe a que:`,o:[`Las partículas son tan pequeñas que no dispersan la luz (no hay efecto Tyndall)`,`El NaCl absorbe toda la luz`,`La solución está sobresaturada`,`El agua refleja la luz hacia afuera`],e:`Por su tamaño (menor de 2.0 nm), las partículas disueltas no dispersan la luz.`},
{t:`t15`,src:`Tema 15, pág. 5`,q:`¿Qué método permite separar el soluto del solvente en una solución?`,o:[`Destilación, cristalización o evaporación`,`Filtración con papel`,`Decantación`,`Dejarla en reposo`],e:`Inseparabilidad mecánica: no se separa filtrando ni decantando; se necesitan métodos de cambio de fase.`},
{t:`t15`,src:`Tema 15, pág. 5`,q:`Las propiedades coligativas dependen de:`,o:[`El número de partículas de soluto`,`La masa molar del soluto`,`El color de la solución`,`La estructura química del soluto`],e:`Dependen solo de cuántas partículas hay, no de qué son.`},
{t:`t15`,src:`Tema 15, pág. 5`,q:`¿Cuál de las siguientes NO es una propiedad coligativa?`,o:[`Homogeneidad`,`Presión osmótica`,`Descenso crioscópico`,`Aumento ebulloscópico`],e:`La homogeneidad es una propiedad general. Las coligativas son: presión de vapor, ebulloscopía, crioscopía y presión osmótica.`},
{t:`t15`,src:`Tema 15, pág. 5`,q:`Se disuelven 9 g de NaCl en 991 g de agua. La masa de la solución es:`,o:[`1000 g`,`991 g`,`982 g`,`9 g`],e:`Conservación de masa: masa de solución = soluto + solvente = 9 + 991 = 1000 g.`},
{t:`t15`,src:`Tema 15, pág. 6–7`,q:`Si una muestra que contiene CO₂ disuelto se calienta, la solubilidad del gas:`,o:[`Disminuye`,`Aumenta`,`No cambia`,`Primero baja y luego sube`],e:`En gases, a mayor temperatura menor solubilidad. La gráfica de la pág. 7 muestra que el CO₂ cae marcadamente.`},
{t:`t15`,src:`Tema 15, pág. 6`,q:`La Ley de Henry establece que, a temperatura constante, la cantidad de gas disuelto en un líquido es:`,o:[`Directamente proporcional a la presión parcial del gas`,`Inversamente proporcional a la presión parcial`,`Independiente de la presión`,`Proporcional a la masa del solvente`],e:`Más presión del gas sobre el líquido, más gas disuelto.`},
{t:`t15`,src:`Tema 15, pág. 6`,q:`Aumentar la presión sobre una solución de NaCl en agua:`,o:[`Tiene un efecto insignificante en su solubilidad`,`Aumenta mucho su solubilidad`,`Disminuye su solubilidad`,`Provoca que precipite`],e:`La presión afecta principalmente a solutos gaseosos; en sólidos y líquidos su efecto es insignificante.`},
{t:`t15`,src:`Tema 15, pág. 6–7`,q:`El aceite no se disuelve en agua porque:`,o:[`Lo semejante disuelve a lo semejante: el aceite es apolar y el agua polar`,`El aceite es más denso que el agua`,`El agua ya está saturada`,`La temperatura es muy baja`],e:`Regla de la naturaleza de soluto y solvente.`},
{t:`t15`,src:`Tema 15, pág. 6`,q:`Un fármaco que es ácido débil se vuelve más soluble en agua cuando:`,o:[`Pasa a su forma ionizada (con carga)`,`Permanece en su forma neutra`,`Se enfría la solución`,`Se agrega más del mismo fármaco`],e:`Al cambiar el pH cambia la proporción ionizada/no ionizada; la forma con carga es mucho más soluble en agua.`},
{t:`t15`,src:`Tema 15, pág. 7`,q:`En la gráfica de solubilidad contra temperatura, ¿qué sal casi no modifica su solubilidad al calentarse?`,o:[`NaCl`,`KBr`,`NaNO₃`,`CH₃CO₂Na`],e:`La curva del NaCl es casi horizontal (≈ 36–39 g/100 mL entre 0 y 100 °C).`},
{t:`t15`,src:`Tema 15, pág. 7`,q:`En la misma gráfica, ¿qué compuesto se vuelve menos soluble al aumentar la temperatura?`,o:[`Ce₂(SO₄)₃`,`Glucosa`,`KBr`,`NH₄Cl`],e:`Es la excepción entre los sólidos: su curva desciende. Por eso la gráfica dice que la mayoría (no todas) se hacen más solubles.`},
{t:`t15`,src:`Tema 15, pág. 8`,q:`Pulverizar un reactivo sólido antes de disolverlo:`,o:[`Aumenta la velocidad de disolución, pero no la cantidad máxima que se disuelve`,`Aumenta la solubilidad`,`Disminuye la velocidad de disolución`,`Convierte la solución en sobresaturada`],e:`El grado de subdivisión aumenta la superficie de contacto: afecta la rapidez, no el límite.`},
{t:`t15`,src:`Tema 15, pág. 8`,q:`¿En qué momento la velocidad de disolución es máxima?`,o:[`Al inicio del proceso`,`Cerca del punto de saturación`,`Cuando la solución ya está saturada`,`Es constante durante todo el proceso`],e:`Al principio hay poco soluto disuelto; conforme se acerca a la saturación, la velocidad disminuye.`},
{t:`t15`,src:`Tema 15, pág. 8`,q:`La agitación acelera la disolución porque:`,o:[`Aleja las moléculas ya disueltas de la superficie del sólido y deja entrar solvente nuevo`,`Aumenta la masa del soluto`,`Disminuye la temperatura`,`Cambia la naturaleza química del soluto`],e:`Renueva el solvente en contacto con el sólido.`},

/* T16 */
{t:`t16`,src:`Tema 16, pág. 3`,q:`Una solución que contiene más soluto que su límite y cristaliza ante una perturbación brusca es:`,o:[`Sobresaturada`,`Saturada`,`Insaturada`,`Diluida`],e:`La sobresaturada es inestable; cualquier golpe o cristal semilla provoca la cristalización del exceso.`},
{t:`t16`,src:`Tema 16, pág. 3`,q:`En una solución saturada se cumple que:`,o:[`La velocidad de disolución es igual a la de cristalización`,`No hay ningún movimiento de partículas`,`Se puede seguir disolviendo soluto sin límite`,`Hay menos soluto del que el solvente admite`],e:`Es un equilibrio dinámico: los procesos continúan, pero a la misma velocidad.`},
{t:`t16`,src:`Tema 16, pág. 3`,q:`¿Cómo se obtiene una solución sobresaturada?`,o:[`Calentando para disolver soluto extra y enfriando con mucho cuidado`,`Agregando agua fría`,`Agitando vigorosamente a temperatura ambiente`,`Filtrando una solución saturada`],e:`Es el procedimiento descrito en la pág. 3.`},
{t:`t16`,src:`Tema 16, pág. 6`,q:`Se disuelven 10 g de soluto en 90 g de agua. El % m/m es:`,o:[`10 %`,`11.1 %`,`9 %`,`90 %`],e:`10 / (10 + 90) × 100 = 10 %. La opción 11.1 % es el error de dividir entre el solvente en lugar de la solución.`},
{t:`t16`,src:`Tema 16, pág. 10`,q:`Una solución de NaCl al 0.9 % m/v contiene:`,o:[`0.9 g de NaCl en 100 mL de solución`,`0.9 g de NaCl en 100 g de agua`,`0.9 mL de NaCl en 100 mL`,`9 g de NaCl en 100 mL`],e:`% m/v = gramos de soluto por cada 100 mL de solución.`},
{t:`t16`,src:`Tema 16, pág. 8`,q:`El % v/v se usa típicamente para expresar:`,o:[`Alcoholes, desinfectantes y mezclas de líquidos`,`Sales sólidas en agua`,`Trazas de metales en agua`,`Gases en sangre`],e:`Ambos componentes se miden en volumen, por eso aplica a líquidos.`},
{t:`t16`,src:`Tema 16, pág. 12`,q:`1 ppm equivale a:`,o:[`1 mg de soluto por litro (o kg) de solución`,`1 g por litro`,`1 mg por mL`,`1 g por 100 mL`],e:`Partes por millón: 1 mg en 1 000 000 mg (1 kg o ≈ 1 L de agua).`},
{t:`t16`,src:`Tema 16, pág. 14`,q:`Una solución 1 M contiene:`,o:[`1 mol de soluto por litro de solución`,`1 mol de soluto por kg de solvente`,`1 equivalente por litro`,`1 g de soluto por litro`],e:`Molaridad = moles / litros de solución.`},
{t:`t16`,src:`Tema 16, pág. 18`,q:`¿Qué unidad de concentración NO se modifica con la temperatura?`,o:[`Molalidad`,`Molaridad`,`Normalidad`,`% m/v`],e:`La molalidad usa masa (kg de solvente), que no cambia al calentar. Las otras usan volumen, que sí se dilata.`},
{t:`t16`,src:`Tema 16, pág. 18`,q:`En la fórmula de molalidad, el denominador es:`,o:[`Kilogramos de solvente`,`Litros de solución`,`Gramos de solución`,`Mililitros de solvente`],e:`m = moles de soluto / kg de solvente.`},
{t:`t16`,src:`Tema 16, pág. 23–24`,q:`El factor n del H₂SO₄ para calcular su peso equivalente es:`,o:[`2`,`1`,`4`,`98`],e:`Es un ácido con 2 H⁺ liberables. PE = 98 / 2 = 49 g/eq.`},
{t:`t16`,src:`Tema 16, pág. 26`,q:`El factor n del Al₂(SO₄)₃ es:`,o:[`6`,`2`,`3`,`12`],e:`Sal: número de cationes × carga = 2 Al³⁺ × 3 = 6.`},
{t:`t16`,src:`Tema 16, pág. 25`,q:`El peso equivalente del Ca(OH)₂ (PM = 74 g/mol) es:`,o:[`37 g/eq`,`74 g/eq`,`148 g/eq`,`24.7 g/eq`],e:`Base con 2 OH⁻: 74 / 2 = 37.`},
{t:`t16`,src:`Tema 16, pág. 5`,q:`Una solución de H₂SO₄ 0.5 M tiene una normalidad de:`,o:[`1 N`,`0.5 N`,`0.25 N`,`2 N`],e:`N = M × n = 0.5 × 2 = 1 N.`},
{t:`t16`,src:`Tema 16, pág. 5`,q:`Para el HCl, la relación entre molaridad y normalidad es:`,o:[`M = N, porque n = 1`,`N = 2M`,`M = 2N`,`No tienen relación`],e:`Con un solo H⁺, un mol equivale a un equivalente.`},
{t:`t16`,src:`Tema 16, pág. 22`,q:`A diferencia de la molaridad, la normalidad mide:`,o:[`La capacidad reactiva del soluto (equivalentes)`,`Solo la cantidad de moléculas`,`La masa del solvente`,`La densidad de la solución`],e:`Cuenta cuántos H⁺, OH⁻ o cargas aporta el soluto en la reacción.`},
{t:`t16`,src:`Tema 16, pág. 15–16`,q:`El peso molecular del NaCl (Na = 23; Cl = 35.5) es:`,o:[`58.5 g/mol`,`57 g/mol`,`35.5 g/mol`,`70 g/mol`],e:`23 + 35.5 = 58.5 g/mol.`},
{t:`t16`,src:`Tema 16, pág. 17`,q:`Al calcular el PM del CuSO₄·5H₂O para una solución, ¿qué se hace con el "·5H₂O"?`,o:[`Se suman 5 × 18 = 90 g/mol al PM del CuSO₄`,`Se ignora`,`Se resta del PM`,`Se multiplica todo por 5`],e:`El agua de hidratación forma parte del sólido que pesas en la balanza: 159.5 + 90 = 249.5 g/mol.`},

/* T17 */
{t:`t17`,src:`Tema 17, pág. 3`,q:`Al diluir una solución, ¿qué permanece constante?`,o:[`La cantidad (moles) de soluto`,`La concentración`,`El volumen`,`La masa de solvente`],e:`Solo se agrega solvente; el soluto es el mismo, repartido en más volumen.`},
{t:`t17`,src:`Tema 17, pág. 4`,q:`En C₁V₁ = C₂V₂ siempre se cumple que:`,o:[`C₂ < C₁ y V₂ > V₁`,`C₂ > C₁ y V₂ < V₁`,`C₁ = C₂`,`V₁ = V₂`],e:`Reglas 3 y 4 de la pág. 4.`},
{t:`t17`,src:`Tema 17, pág. 4`,q:`Si C₁ está expresada en % m/v, C₂ debe expresarse en:`,o:[`% m/v`,`Molaridad`,`ppm`,`Cualquier unidad`],e:`Regla 1: las concentraciones deben estar en las mismas unidades.`},
{t:`t17`,src:`Tema 17, pág. 5`,q:`Se diluyen 400 mL de NaBr 2 M hasta 1200 mL. La nueva concentración es:`,o:[`0.67 M`,`6 M`,`1.5 M`,`0.33 M`],e:`C₂ = 2 × 400 / 1200 = 0.67 M.`},
{t:`t17`,src:`Tema 17, pág. 7`,q:`En el ejemplo de la insulina, el volumen final es 5 mL. ¿Cuánto diluyente se agrega a la ampolla de 2 mL?`,o:[`3 mL`,`5 mL`,`7 mL`,`2.5 mL`],e:`V₂ es el volumen final; el diluyente agregado es V₂ − V₁ = 5 − 2 = 3 mL.`},
{t:`t17`,src:`Tema 17, pág. 9`,q:`El factor de van 't Hoff (i) explica que:`,o:[`Los electrolitos alteran más las propiedades coligativas porque se ionizan`,`Los no electrolitos producen mayor efecto`,`Todas las sustancias tienen i = 1`,`Las propiedades coligativas dependen del color`],e:`Al ionizarse, un electrolito genera varias partículas por cada unidad disuelta.`},
{t:`t17`,src:`Tema 17, pág. 9`,q:`A igual concentración, ¿cuál produce el mayor descenso crioscópico?`,o:[`CaCl₂`,`NaCl`,`Glucosa`,`Urea`],e:`CaCl₂ → Ca²⁺ + 2Cl⁻ = 3 partículas. NaCl da 2; glucosa y urea, 1.`},
{t:`t17`,src:`Tema 17, pág. 10`,q:`El descenso crioscópico consiste en:`,o:[`La disminución de la temperatura de congelación del solvente`,`El aumento del punto de ebullición`,`La disminución de la presión de vapor`,`El paso de solvente por una membrana`],e:`Crio = frío. La solución congela a menor temperatura que el solvente puro.`},
{t:`t17`,src:`Tema 17, pág. 10`,q:`La presión osmótica es:`,o:[`La presión necesaria para detener el flujo de solvente a través de una membrana semipermeable`,`La presión del vapor sobre la solución`,`La presión atmosférica sobre el recipiente`,`La presión que ejerce el soluto al sedimentar`],e:`Definición de la pág. 10 (y Tema 15, pág. 5).`},
{t:`t17`,src:`Tema 17, pág. 12`,q:`Eritrocitos suspendidos en agua destilada sufren:`,o:[`Hemólisis`,`Crenación`,`Ningún cambio`,`Deshidratación`],e:`El agua destilada es hipotónica: el agua entra, la célula se hincha y se rompe.`},
{t:`t17`,src:`Tema 17, pág. 12`,q:`Eritrocitos en NaCl al 3 % (hipertónico) presentan:`,o:[`Crenación: pierden agua y se arrugan`,`Hemólisis`,`Aumento de volumen`,`Forma bicóncava normal`],e:`En medio hipertónico el agua sale de la célula.`},
{t:`t17`,src:`Tema 17, pág. 11`,q:`Una solución isotónica respecto al eritrocito es la que:`,o:[`Tiene la misma presión osmótica que el medio intracelular`,`Tiene mayor presión osmótica`,`No contiene solutos`,`Tiene pH exactamente 7`],e:`Iso = igual. El flujo neto de agua es nulo (ejemplo: NaCl 0.9 %).`},
{t:`t17`,src:`Tema 17, pág. 11`,q:`En un medio hipotónico, el agua:`,o:[`Ingresa a la célula`,`Sale de la célula`,`No se mueve`,`Se evapora de la membrana`],e:`El agua va hacia donde hay más partículas (el interior celular).`},
{t:`t17`,src:`Tema 17, pág. 10`,q:`El descenso de la presión de vapor ocurre porque:`,o:[`El soluto no volátil dificulta la evaporación del solvente`,`El soluto se evapora junto con el solvente`,`Aumenta la temperatura de la solución`,`Se forma un precipitado`],e:`Las partículas de soluto "estorban" la salida de moléculas de solvente.`},

/* T18 */
{t:`t18`,src:`Tema 18, pág. 2`,q:`La homeostasis se define como:`,o:[`La capacidad del cuerpo de mantener estables sus condiciones internas a pesar de los cambios externos`,`Un estado estático sin variaciones`,`La eliminación de electrolitos por el riñón`,`El conjunto de reacciones del metabolismo`],e:`Definición de la pág. 2.`},
{t:`t18`,src:`Tema 18, pág. 2`,q:`El equilibrio fisiológico se caracteriza por ser:`,o:[`Dinámico: los parámetros oscilan dentro de rangos normales`,`Estático y fijo`,`Igual en todas las personas, sin rango`,`Independiente del pH`],e:`Por eso los resultados se interpretan con intervalos de referencia.`},
{t:`t18`,src:`Tema 18, pág. 3`,q:`El medio interno está formado por:`,o:[`Los líquidos extracelulares que rodean y bañan a las células`,`El citoplasma de las células`,`Solo la sangre arterial`,`La orina`],e:`Principio 1 de la pág. 3.`},
{t:`t18`,src:`Tema 18, pág. 3`,q:`Los componentes de un arco reflejo de control son:`,o:[`Receptor, centro integrador y efector`,`Ácido, base y sal`,`Soluto, solvente y solución`,`Riñón, pulmón e intestino`],e:`Principio 2 de la pág. 3.`},
{t:`t18`,src:`Tema 18, pág. 3`,q:`¿Cuál NO es un tipo de retroalimentación mencionado en el material?`,o:[`Neutra`,`Positiva`,`Negativa`,`Anticipatoria`],e:`Se mencionan positiva, negativa y anticipatoria.`},
{t:`t18`,src:`Tema 18, pág. 4`,q:`En una solución, la corriente eléctrica la transportan:`,o:[`Los iones`,`Los electrones libres`,`Las moléculas neutras`,`Los neutrones`],e:`En metales fluyen electrones; en líquidos, iones como Na⁺, K⁺, Cl⁻, H⁺ y OH⁻.`},
{t:`t18`,src:`Tema 18, pág. 5`,q:`¿Cuál de estas sustancias es un electrolito débil?`,o:[`CH₃COOH`,`NaCl`,`HCl`,`NaOH`],e:`El ácido acético se ioniza parcialmente. Los otros tres se disocian al 100 %.`},
{t:`t18`,src:`Tema 18, pág. 5`,q:`La urea disuelta en agua se clasifica como:`,o:[`No electrolito`,`Electrolito fuerte`,`Electrolito débil`,`Ácido fuerte`],e:`Se disuelve pero permanece como molécula neutra, igual que la sacarosa y el etanol.`},
{t:`t18`,src:`Tema 18, pág. 5`,q:`Un electrolito fuerte es aquel que:`,o:[`Se disocia al 100 % en solución acuosa`,`Se ioniza parcialmente`,`No forma iones`,`Solo conduce en estado sólido`],e:`Genera abundantes iones libres.`},
{t:`t18`,src:`Tema 18, pág. 6`,q:`Un ácido que reacciona con zinc metálico produce:`,o:[`Gas hidrógeno (H₂) y una sal`,`Dióxido de carbono`,`Oxígeno`,`Jabón y glicerol`],e:`Reacción con metales activos (Zn, Mg, Fe).`},
{t:`t18`,src:`Tema 18, pág. 6`,q:`En el experimento de vinagre con bicarbonato de sodio, el globo se infla por:`,o:[`La liberación de CO₂`,`La liberación de H₂`,`La evaporación del agua`,`La formación de jabón`],e:`Ácido + bicarbonato = efervescencia de CO₂.`},
{t:`t18`,src:`Tema 18, pág. 6`,q:`El papel tornasol azul cambia a rojo en presencia de:`,o:[`Un ácido`,`Una base`,`Agua destilada`,`Un no electrolito`],e:`El tornasol rojo, en cambio, se vuelve azul con una base.`},
{t:`t18`,src:`Tema 18, pág. 7`,q:`La saponificación es una propiedad operacional de:`,o:[`Las bases: reaccionan con grasas formando jabón y glicerol`,`Los ácidos`,`Los no electrolitos`,`Las sales neutras`],e:`Explica también la sensación jabonosa al tacto.`},
{t:`t18`,src:`Tema 18, pág. 7`,q:`La fenolftaleína en presencia de una base toma un color:`,o:[`Rosa intenso o fucsia`,`Incoloro`,`Amarillo`,`Azul`],e:`En medio ácido permanece incolora.`},
{t:`t18`,src:`Tema 18, pág. 8`,q:`Un indicador ácido-base generalmente es:`,o:[`Un ácido o una base orgánica débil`,`Un ácido inorgánico fuerte`,`Una sal neutra`,`Un electrolito fuerte`],e:`Su equilibrio HIn ⇌ H⁺ + In⁻ es el que cambia de color.`},
{t:`t18`,src:`Tema 18, pág. 8`,q:`Azul de bromotimol en una solución de pH 5.0 se ve:`,o:[`Amarillo`,`Azul`,`Verde`,`Rosa fucsia`],e:`Su viraje es 6.0–7.6. A pH 5 está por debajo, en su forma ácida: amarillo.`},
{t:`t18`,src:`Tema 18, pág. 8`,q:`Naranja de metilo en una muestra de pH 2.0 se ve:`,o:[`Rojo`,`Amarillo`,`Azul`,`Incoloro`],e:`Viraje 3.2–4.4; pH 2 está por debajo: forma ácida roja.`},
{t:`t18`,src:`Tema 18, pág. 8`,q:`Fenolftaleína en una solución de pH 6.5 se ve:`,o:[`Incolora`,`Rosa fucsia`,`Amarilla`,`Roja`],e:`Viraje 8.2–10.0. A pH 6.5 aún está en su forma ácida, incolora.`},
{t:`t18`,src:`Tema 18, pág. 8`,q:`Para detectar cambios de pH cercanos a la neutralidad (6.0–7.6), el indicador más adecuado de la tabla es:`,o:[`Azul de bromotimol`,`Fenolftaleína`,`Naranja de metilo`,`Amarillo de alizarina`],e:`Su intervalo de viraje coincide con esa zona.`},
{t:`t18`,src:`Tema 18, pág. 9`,q:`El reporte de gasometría de la pág. 9 muestra pH 7.45 con referencia 7.35–7.45. El valor está:`,o:[`En el límite superior del intervalo de referencia`,`Por debajo del intervalo`,`Muy por encima del intervalo`,`En zona ácida`],e:`7.45 es el límite alto. La sangre normal es ligeramente alcalina.`},

/* T19 */
{t:`t19`,src:`Tema 19, pág. 3`,q:`Según Arrhenius, una base es una sustancia que en agua:`,o:[`Produce iones OH⁻`,`Acepta protones`,`Dona un par de electrones`,`Produce iones H⁺`],e:`Arrhenius se basa en la producción de H⁺ (ácidos) u OH⁻ (bases) en agua.`},
{t:`t19`,src:`Tema 19, pág. 4`,q:`Una limitante de la teoría de Arrhenius es que no explica por qué actúa como base:`,o:[`NH₃`,`NaOH`,`KOH`,`Ba(OH)₂`],e:`El amoníaco no tiene OH⁻ en su fórmula.`},
{t:`t19`,src:`Tema 19, pág. 4`,q:`En agua, el ion H⁺ realmente se encuentra como:`,o:[`Ion hidronio (H₃O⁺)`,`Ion hidróxido (OH⁻)`,`Átomo de H neutro`,`H₂ gaseoso`],e:`El protón libre se une de inmediato a una molécula de agua.`},
{t:`t19`,src:`Tema 19, pág. 5`,q:`Al disociarse en agua, el Ba(OH)₂ libera:`,o:[`Ba²⁺ + 2OH⁻`,`Ba⁺ + OH⁻`,`Ba²⁺ + OH⁻`,`2Ba⁺ + 2OH⁻`],e:`El bario tiene carga 2+ y hay dos grupos OH.`},
{t:`t19`,src:`Tema 19, pág. 6`,q:`Según Brønsted-Lowry, un ácido es:`,o:[`Una especie que dona un protón`,`Una especie que acepta un protón`,`Un aceptor de pares de electrones`,`Un productor de OH⁻`],e:`Ácido = donador; base = aceptor de protones.`},
{t:`t19`,src:`Tema 19, pág. 8`,q:`En NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, el ácido conjugado es:`,o:[`NH₄⁺`,`OH⁻`,`H₂O`,`NH₃`],e:`El NH₃ (base) gana un H⁺ y se convierte en NH₄⁺, su ácido conjugado.`},
{t:`t19`,src:`Tema 19, pág. 8`,q:`En HSO₄⁻ + OH⁻ ⇌ SO₄²⁻ + H₂O, la base conjugada del HSO₄⁻ es:`,o:[`SO₄²⁻`,`H₂O`,`OH⁻`,`H₃O⁺`],e:`HSO₄⁻ pierde un H⁺ y queda SO₄²⁻.`},
{t:`t19`,src:`Tema 19, pág. 8`,q:`En CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻, el agua actúa como:`,o:[`Ácido (dona un protón)`,`Base (acepta un protón)`,`Ácido de Arrhenius`,`No participa`],e:`El agua pierde un H y queda OH⁻. Frente al carbonato es ácido.`},
{t:`t19`,src:`Tema 19, pág. 7`,q:`El agua se considera anfótera porque:`,o:[`Actúa como base frente al HCl y como ácido frente al NH₃`,`Solo actúa como ácido`,`No reacciona con ácidos ni bases`,`Conduce la electricidad`],e:`Puede donar o aceptar protones según la otra especie.`},
{t:`t19`,src:`Tema 19, pág. 7`,q:`Un ácido fuerte genera una base conjugada:`,o:[`Muy débil`,`Muy fuerte`,`De la misma fuerza`,`Siempre neutra`],e:`Fuerza relativa: a ácido más fuerte, base conjugada más débil.`},
{t:`t19`,src:`Tema 19, pág. 6–7`,q:`La teoría de Brønsted-Lowry explica HCl + NH₃ → NH₄Cl(s) en fase gaseosa porque:`,o:[`No requiere agua ni grupos OH⁻`,`Necesita agua como solvente`,`Solo aplica a sales`,`Se basa en pares de electrones`],e:`Independencia del solvente.`},
{t:`t19`,src:`Tema 19, pág. 9`,q:`Un ácido de Lewis es una especie que:`,o:[`Acepta un par de electrones (tiene orbitales vacíos)`,`Dona un par de electrones`,`Dona protones`,`Produce OH⁻ en agua`],e:`La base de Lewis es la que dona el par.`},
{t:`t19`,src:`Tema 19, pág. 10`,q:`En BF₃ + NH₃ → F₃B–NH₃, la base de Lewis es:`,o:[`NH₃`,`BF₃`,`F₃B–NH₃`,`Ninguna`],e:`El nitrógeno del NH₃ tiene un par libre que dona al boro.`},
{t:`t19`,src:`Tema 19, pág. 10`,q:`En Cu²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺, el Cu²⁺ actúa como:`,o:[`Ácido de Lewis`,`Base de Lewis`,`Base de Arrhenius`,`Ácido de Brønsted`],e:`Acepta pares de electrones de las 4 moléculas de NH₃.`},
{t:`t19`,src:`Tema 19, pág. 9`,q:`El enlace entre un ácido y una base de Lewis se denomina:`,o:[`Covalente coordinado`,`Iónico`,`Metálico`,`Puente de hidrógeno`],e:`Ambos electrones los aporta el mismo átomo.`},
{t:`t19`,src:`Tema 19, pág. 3, 6, 9`,q:`¿Cuál de las tres teorías es la más general?`,o:[`Lewis`,`Arrhenius`,`Brønsted-Lowry`,`Las tres tienen el mismo alcance`],e:`Incluye especies sin H, como BF₃ o Cu²⁺.`},
{t:`t19`,src:`Tema 19, pág. 12`,q:`A 25 °C, el valor de Kw es:`,o:[`1 × 10⁻¹⁴`,`1 × 10⁻⁷`,`7`,`14`],e:`Kw = [H⁺][OH⁻] = 10⁻⁷ × 10⁻⁷.`},
{t:`t19`,src:`Tema 19, pág. 12, 15`,q:`En agua pura a 25 °C:`,o:[`[H⁺] = [OH⁻] = 1 × 10⁻⁷ M`,`[H⁺] > [OH⁻]`,`[H⁺] = 1 × 10⁻¹⁴ M`,`[OH⁻] = 0`],e:`La autoionización produce cantidades iguales de ambos iones.`},
{t:`t19`,src:`Tema 19, pág. 13`,q:`Si [H⁺] = 1 × 10⁻³ M, la [OH⁻] es:`,o:[`1 × 10⁻¹¹ M`,`1 × 10⁻³ M`,`1 × 10⁻⁷ M`,`1 × 10⁻¹⁴ M`],e:`10⁻¹⁴ / 10⁻³ = 10⁻¹¹. Los exponentes suman −14.`},
{t:`t19`,src:`Tema 19, pág. 13, 15`,q:`Una solución con [OH⁻] = 1 × 10⁻² M es:`,o:[`Básica, pH 12`,`Ácida, pH 2`,`Neutra, pH 7`,`Ácida, pH 12`],e:`[H⁺] = 10⁻¹² → pH 12. [OH⁻] > 10⁻⁷, básica.`},
{t:`t19`,src:`Tema 19, pág. 15`,q:`¿Cuál de estas concentraciones de H⁺ corresponde a la solución más ácida?`,o:[`1 × 10⁻²`,`1 × 10⁻⁵`,`1 × 10⁻⁷`,`1 × 10⁻¹⁰`],e:`10⁻² es el número más grande: más H⁺, pH 2.`},
{t:`t19`,src:`Tema 19, pág. 14`,q:`Al agregar HCl al agua, según Le Chatelier:`,o:[`Aumenta [H⁺], el pH baja y disminuye [OH⁻]`,`El pH sube`,`Aumenta [OH⁻]`,`Kw cambia a 10⁻¹²`],e:`El equilibrio se desplaza para consumir parte del exceso de H⁺, formando agua; a temperatura constante Kw no cambia.`},
{t:`t19`,src:`Tema 19, pág. 14`,q:`La autoionización del agua es endotérmica. Si aumenta la temperatura:`,o:[`La ionización aumenta`,`La ionización disminuye`,`No hay ningún cambio`,`El agua deja de ionizarse`],e:`Una reacción endotérmica se favorece al suministrar calor.`}
];

/* ======================= PREGUNTAS DE DESARROLLO ======================= */
const ABIERTAS = [
{t:`t15`,src:`Tema 15, pág. 8`,q:`Diferencie solubilidad y velocidad de disolución. Dé un ejemplo.`,a:`La solubilidad es la cantidad máxima de soluto que se disuelve en una cantidad de solvente a cierta temperatura y presión. La velocidad de disolución es qué tan rápido ocurre. Ejemplo: azúcar en polvo y en cubo tienen la misma solubilidad, pero el polvo se disuelve más rápido por su mayor superficie de contacto.`},
{t:`t15`,src:`Tema 15, pág. 3 y 5`,q:`¿Por qué el NaCl del suero fisiológico no sedimenta aunque el frasco esté en reposo?`,a:`Porque es una solución verdadera: sus partículas (0.1–2.0 nm) están distribuidas uniformemente en una sola fase (homogeneidad) y son estables. Solo pueden separarse por métodos que implican cambio de fase: destilación, cristalización o evaporación.`},
{t:`t15`,src:`Tema 15, pág. 6–7`,q:`Explique el efecto de la temperatura sobre la solubilidad de sólidos y de gases, con un ejemplo de cada uno.`,a:`En sólidos y líquidos, a mayor temperatura mayor solubilidad (KBr o glucosa en la gráfica). En gases, a mayor temperatura menor solubilidad (el CO₂ en la gráfica; una bebida gaseosa caliente pierde gas). Excepción entre los sólidos: el Ce₂(SO₄)₃ disminuye.`},
{t:`t15`,src:`Tema 15, pág. 2`,q:`Mencione los tipos de soluciones usadas en el laboratorio clínico y por qué su exactitud es importante.`,a:`Amortiguadoras, reactivos, conservadoras, de limpieza y tinciones. Una concentración incorrecta altera el pH, la reacción, la conservación de la muestra o la coloración, y con ello la exactitud del resultado diagnóstico.`},
{t:`t16`,src:`Tema 16, pág. 3`,q:`Describa cómo se prepara una solución sobresaturada y qué ocurre si se agita bruscamente.`,a:`Se calienta el solvente para disolver más soluto del que admitiría a temperatura ambiente y luego se enfría lentamente sin perturbarla. Es inestable: una agitación brusca provoca la cristalización rápida del exceso de soluto.`},
{t:`t16`,src:`Tema 16, pág. 18`,q:`¿Por qué la molalidad es independiente de la temperatura y la molaridad no?`,a:`La molalidad relaciona moles con kilogramos de solvente; la masa no cambia al calentar o enfriar. La molaridad usa litros de solución, y el volumen se dilata o contrae con la temperatura.`},
{t:`t16`,src:`Tema 16, pág. 22–24`,q:`¿Qué es un equivalente-gramo? Explíquelo con el H₂SO₄.`,a:`Es la cantidad de sustancia que reacciona con (o sustituye a) 1 mol de H⁺ o de electrones. El H₂SO₄ (PM 98) libera 2 H⁺, así que su peso equivalente es 98/2 = 49 g: 49 g de H₂SO₄ son 1 equivalente-gramo.`},
{t:`t16`,src:`Tema 16, pág. 4`,q:`¿Por qué en el trabajo de laboratorio no basta con decir que una solución es "diluida" o "concentrada"?`,a:`Porque son términos cualitativos. Un reactivo o un estándar de calibración requiere la cantidad exacta de soluto en una cantidad conocida de solución o solvente, expresada en unidades físicas o químicas.`},
{t:`t17`,src:`Tema 17, pág. 11–12`,q:`Explique qué le ocurre a un eritrocito en un medio isotónico, hipotónico e hipertónico.`,a:`Isotónico: flujo neto de agua nulo, conserva su forma bicóncava. Hipotónico: entra agua por ósmosis, se hincha y se rompe (hemólisis). Hipertónico: sale agua, se arruga (crenación) y se compromete su función.`},
{t:`t17`,src:`Tema 17, pág. 9`,q:`¿Por qué una solución 0.1 m de NaCl tiene mayor efecto coligativo que una de glucosa 0.1 m?`,a:`Porque el NaCl es un electrolito y se disocia en Na⁺ y Cl⁻ (i = 2): produce el doble de partículas. La glucosa no se disocia (i = 1). Las propiedades coligativas dependen del número de partículas.`},
{t:`t17`,src:`Tema 17, pág. 4`,q:`Enumere las cuatro consideraciones para aplicar la fórmula de dilución.`,a:`1) C₁ y C₂ en las mismas unidades. 2) V₁ y V₂ en las mismas unidades. 3) C₂ siempre menor que C₁. 4) V₂ siempre mayor que V₁.`},
{t:`t17`,src:`Tema 17, pág. 10`,q:`Nombre y defina brevemente las cuatro propiedades coligativas.`,a:`Descenso de la presión de vapor (el soluto no volátil bloquea la evaporación). Aumento ebulloscópico (hierve a mayor temperatura). Descenso crioscópico (congela a menor temperatura). Presión osmótica (fuerza para detener el paso de solvente a través de una membrana semipermeable).`},
{t:`t18`,src:`Tema 18, pág. 3`,q:`Enumere los cuatro principios generales de la homeostasis.`,a:`1) Mantenimiento del medio interno (temperatura, pH, glucosa, agua, electrolitos). 2) Control por arcos reflejos (receptor, centro integrador, efector). 3) Retroalimentación positiva, negativa y anticipatoria. 4) Jerarquía de cooperación interorgánica (nervioso, endocrino, renal, respiratorio, digestivo).`},
{t:`t18`,src:`Tema 18, pág. 6`,q:`¿Qué es una definición operacional? Mencione cuatro propiedades operacionales de un ácido.`,a:`Es la que define una sustancia por sus propiedades observables y medibles en el laboratorio. Ácido: sabor agrio, pH menor de 7, tornasol azul a rojo, reacciona con metales activos liberando H₂, produce CO₂ con carbonatos, neutraliza bases y conduce la corriente.`},
{t:`t18`,src:`Tema 18, pág. 4–5`,q:`¿Por qué una solución de NaCl conduce la electricidad y una de sacarosa no?`,a:`El NaCl es un electrolito fuerte: se disocia al 100 % en Na⁺ y Cl⁻, y la corriente en líquidos viaja por iones. La sacarosa es un no electrolito: se disuelve como moléculas neutras sin formar iones.`},
{t:`t18`,src:`Tema 18, pág. 8`,q:`Explique cómo funciona un indicador ácido-base.`,a:`Es un ácido o base orgánica débil que existe en dos formas, HIn (ácida) e In⁻ (básica), con colores distintos. Según el pH, el equilibrio HIn ⇌ H⁺ + In⁻ se desplaza y predomina una forma u otra, cambiando el color dentro de su intervalo de viraje.`},
{t:`t19`,src:`Tema 19, pág. 4`,q:`Mencione las tres limitantes de la teoría de Arrhenius.`,a:`1) Solo aplica a medios acuosos. 2) No explica bases sin OH⁻, como el NH₃. 3) El H⁺ no existe libre en agua; forma H₃O⁺.`},
{t:`t19`,src:`Tema 19, pág. 7`,q:`Defina par conjugado ácido-base y dé un ejemplo.`,a:`Dos especies que se diferencian en un protón. Cuando un ácido cede su H⁺ se convierte en su base conjugada. Ejemplo: CH₃COOH / CH₃COO⁻; NH₄⁺ / NH₃; H₂O / OH⁻.`},
{t:`t19`,src:`Tema 19, pág. 14`,q:`Enuncie el principio de Le Chatelier y aplíquelo a la ionización del agua cuando se agrega NaOH.`,a:`Un sistema en equilibrio perturbado se desplaza en el sentido que contrarresta la perturbación. Al agregar NaOH aumenta [OH⁻]; el equilibrio H₂O ⇌ H⁺ + OH⁻ se desplaza hacia la formación de agua, disminuye [H⁺] y el pH sube. Kw se mantiene en 10⁻¹⁴ a 25 °C.`},
{t:`t19`,src:`Tema 19, pág. 9`,q:`¿Por qué el BF₃ puede actuar como ácido de Lewis si no tiene hidrógeno?`,a:`Porque la teoría de Lewis no se basa en protones sino en electrones: el boro tiene un orbital vacío que le permite aceptar un par de electrones (por ejemplo, del NH₃), formando un enlace covalente coordinado.`}
];

/* ======================= EJERCICIOS ======================= */
const EJ = [
/* ---- T15 ---- */
{t:`t15`,src:`Tema 15, pág. 4`,q:`Identifique soluto y solvente en: a) suero fisiológico NaCl 0.9 %; b) etanol al 70 %; c) etanol al 10 %; d) solución de glucosa al 5 % para uso intravenoso.`,
 pide:`Aplicar el criterio de cantidad: el componente mayoritario es el solvente.`,
 datos:[`Soluto = menor cantidad`,`Solvente = mayor cantidad`],
 f:`—`,
 pasos:[`a) Soluto NaCl (0.9 %); solvente agua.`,`b) El etanol es el 70 %: solvente etanol; soluto agua (30 %).`,`c) Soluto etanol (10 %); solvente agua (90 %).`,`d) Soluto glucosa; solvente agua.`],
 r:`Solo en el etanol al 70 % el agua pasa a ser el soluto`},
{t:`t15`,src:`Tema 15, pág. 6–8`,q:`Clasifique cada acción según modifique la solubilidad, la velocidad de disolución o ambas: a) moler el soluto; b) agitar; c) calentar; d) aumentar la presión de un gas sobre el líquido; e) cambiar el pH de un ácido débil.`,
 pide:`Distinguir cuánto se disuelve (solubilidad) de qué tan rápido (velocidad).`,
 datos:[`Solubilidad: naturaleza, T°, presión, pH (pág. 6)`,`Velocidad: subdivisión, agitación, T°, concentración (pág. 8)`],
 f:`—`,
 pasos:[`a) Moler: solo velocidad.`,`b) Agitar: solo velocidad.`,`c) Calentar: ambas (la temperatura está en las dos listas).`,`d) Presión de un gas: solubilidad (Ley de Henry).`,`e) pH: solubilidad (forma ionizada más soluble).`],
 r:`Velocidad: a, b. Solubilidad: d, e. Ambas: c.`},
{t:`t15`,src:`Tema 15, pág. 7`,q:`Usando las gráficas de la pág. 7: a) ¿qué ocurre con la solubilidad del KBr de 0 a 100 °C?; b) ¿y la del NaCl?; c) ¿qué gas es el más soluble a 20 °C y qué le pasa al calentarlo?`,
 pide:`Leer la tendencia de cada curva, no valores exactos.`,
 datos:[`Gráfica izquierda: sólidos en g/100 mL de agua`,`Gráfica derecha: gases en mmol/L a 1 atm`],
 f:`Curva que sube = más soluble con la T°; curva que baja = menos soluble`,
 pasos:[`a) KBr: aumenta de forma sostenida (≈ 55 a ≈ 105 g/100 mL).`,`b) NaCl: casi no cambia (≈ 36–39 g/100 mL); su curva es casi horizontal.`,`c) El CO₂ es el más soluble; su solubilidad cae marcadamente al aumentar la temperatura.`],
 r:`KBr aumenta; NaCl casi constante; CO₂ el más soluble y disminuye con la T°`},
/* ---- % m/m ---- */
{t:`t16`,src:`Tema 16, pág. 6 (ejemplo)`,q:`¿Cuál es el porcentaje m/m de 300 gramos de una solución que se prepara con 10 gramos de glucosa?`,
 pide:`El % m/m: cuántos gramos de glucosa habría en 100 g de solución.`,
 datos:[`Soluto: 10 g de glucosa`,`Dato de 300 g (lee con cuidado: ¿solución o solvente?)`],
 f:`% m/m = (masa de soluto / masa de solución) × 100`,
 pasos:[`La diapositiva interpreta los 300 g como agua (solvente). Entonces masa de solución = 10 + 300 = 310 g.`,`% m/m = 10 / 310 × 100 = 3.22 %.`,`Si el enunciado del parcial dice expresamente "300 g de solución", no sumes: 10 / 300 × 100 = 3.33 %.`],
 r:`3.22 % m/m (según la resolución de la diapositiva)`,
 ojo:`Antes de dividir, decide si el dato es solución o solvente. Es la trampa más común.`},
{t:`t16`,src:`Tema 16, pág. 6 (ejemplo)`,q:`En una solución de LiCl al 5.75 % m/m, ¿cuál es la masa de la solución si contiene 1.6 g de soluto?`,
 pide:`La masa total de solución. Te dan el % y el soluto: hay que despejar.`,
 datos:[`% m/m = 5.75 %`,`Soluto = 1.6 g LiCl`],
 f:`Masa de solución = (masa de soluto × 100) / % m/m`,
 pasos:[`Despeja la fórmula: masa de solución = 1.6 × 100 / 5.75.`,`160 / 5.75 = 27.83 g.`],
 r:`27.83 g de solución`},
{t:`t16`,src:`Tema 16, pág. 7, ejercicio 1`,q:`Se prepara una solución disolviendo 25 g de NaCl en 175 g de agua destilada. Calcule el % m/m.`,
 pide:`El % m/m. Los 175 g son de agua (solvente), no de solución.`,
 datos:[`Soluto: 25 g`,`Solvente: 175 g`],
 f:`% m/m = soluto / (soluto + solvente) × 100`,
 pasos:[`Masa de solución = 25 + 175 = 200 g.`,`% m/m = 25 / 200 × 100 = 12.5 %.`],
 r:`12.5 % m/m`},
{t:`t16`,src:`Tema 16, pág. 7, ejercicio 2`,q:`Una solución acuosa de azúcar tiene una concentración del 12 % m/m. Si se dispone de 350 g de esta solución, ¿cuántos gramos de azúcar y cuántos de agua contiene?`,
 pide:`Dos cosas: la masa de soluto y la masa de solvente.`,
 datos:[`% m/m = 12 %`,`Solución = 350 g`],
 f:`Soluto = % × solución / 100; solvente = solución − soluto`,
 pasos:[`Azúcar = 12 × 350 / 100 = 42 g.`,`Agua = 350 − 42 = 308 g.`],
 r:`42 g de azúcar y 308 g de agua`},
{t:`t16`,src:`Tema 16, pág. 7, ejercicio 3`,q:`Se disuelven 40 g de KNO₃ en agua suficiente para preparar exactamente 200 g de solución. Determine el % m/m.`,
 pide:`El % m/m. "Para preparar 200 g de solución" indica que 200 g ya es la solución.`,
 datos:[`Soluto: 40 g`,`Solución: 200 g`],
 f:`% m/m = soluto / solución × 100`,
 pasos:[`No se suma nada: 40 / 200 × 100 = 20 %.`],
 r:`20 % m/m`},
{t:`t16`,src:`Tema 16, pág. 7, ejercicio 4`,q:`¿Qué masa total de solución al 8 % m/m de CuSO₄ se puede preparar con 16 g de la sal pura?`,
 pide:`La masa de solución que se obtiene usando todo el soluto.`,
 datos:[`% m/m = 8 %`,`Soluto = 16 g`],
 f:`Solución = soluto × 100 / %`,
 pasos:[`16 × 100 / 8 = 200 g.`],
 r:`200 g de solución`},
{t:`t16`,src:`Tema 16, pág. 7, ejercicio 5`,q:`Se mezclan 15 g de glucosa purificada con 135 g de agua pura. Calcule el % m/m e indique soluto y solvente.`,
 pide:`El % m/m y la identificación de los componentes.`,
 datos:[`Glucosa: 15 g`,`Agua: 135 g`],
 f:`% m/m = soluto / (soluto + solvente) × 100`,
 pasos:[`Solución = 15 + 135 = 150 g.`,`15 / 150 × 100 = 10 %.`,`Soluto: glucosa (menor cantidad). Solvente: agua (mayor cantidad).`],
 r:`10 % m/m; soluto glucosa, solvente agua`},

/* ---- % v/v ---- */
{t:`t16`,src:`Tema 16, pág. 8 (ejemplo)`,q:`Se disuelven 50 mL de etanol en agua hasta obtener 250 mL de solución. ¿Cuál es el % v/v?`,
 pide:`El % v/v. "Hasta obtener 250 mL" es el volumen de solución.`,
 datos:[`Soluto: 50 mL`,`Solución: 250 mL`],
 f:`% v/v = mL soluto / mL solución × 100`,
 pasos:[`50 / 250 × 100 = 20 %.`],
 r:`20 % v/v`},
{t:`t16`,src:`Tema 16, pág. 8 (ejemplo)`,q:`Se mezclan 80 mL de etilenglicol con 160 mL de agua para preparar un anticongelante. ¿Cuál es la concentración en % v/v?`,
 pide:`El % v/v del etilenglicol. (La diapositiva dice "metanol" por error de redacción; el soluto es el etilenglicol.)`,
 datos:[`Soluto: 80 mL`,`Solvente: 160 mL`],
 f:`% v/v = soluto / (soluto + solvente) × 100`,
 pasos:[`Volumen de solución = 80 + 160 = 240 mL (asumiendo volúmenes aditivos).`,`80 / 240 × 100 = 33.33 %.`],
 r:`33.33 % v/v`},
{t:`t16`,src:`Tema 16, pág. 9, ejercicio 1`,q:`Se agregan 45 mL de isopropanol a 255 mL de agua destilada. Asumiendo aditividad de volúmenes, calcule el % v/v.`,
 pide:`El % v/v. Hay que sumar porque 255 mL es agua.`,
 datos:[`Soluto: 45 mL`,`Agua: 255 mL`],
 f:`% v/v = soluto / solución × 100`,
 pasos:[`Solución = 45 + 255 = 300 mL.`,`45 / 300 × 100 = 15 %.`],
 r:`15 % v/v`},
{t:`t16`,src:`Tema 16, pág. 9, ejercicio 2`,q:`Un jarabe de 350 mL contiene extracto de menta al 8.5 % v/v. Determine el volumen de extracto puro.`,
 pide:`El volumen de soluto.`,
 datos:[`Solución: 350 mL`,`% v/v = 8.5 %`],
 f:`Soluto = % × solución / 100`,
 pasos:[`8.5 × 350 / 100 = 29.75 mL.`],
 r:`29.75 mL de extracto`},
{t:`t16`,src:`Tema 16, pág. 9, ejercicio 3`,q:`Se disuelven 32 mL de glicerina en agua hasta alcanzar 400 mL de mezcla. ¿Cuál es el % v/v?`,
 pide:`El % v/v. "Hasta alcanzar 400 mL" ya es la solución.`,
 datos:[`Soluto: 32 mL`,`Solución: 400 mL`],
 f:`% v/v = soluto / solución × 100`,
 pasos:[`32 / 400 × 100 = 8 %.`],
 r:`8 % v/v`},
{t:`t16`,src:`Tema 16, pág. 9, ejercicio 4`,q:`Se requiere un limpiador con vinagre al 15 % v/v. Si solo hay 90 mL de vinagre puro, ¿cuántos mL de agua se deben añadir?`,
 pide:`El volumen de AGUA, no el de solución. Son dos pasos.`,
 datos:[`Soluto: 90 mL`,`% v/v = 15 %`],
 f:`Solución = soluto × 100 / %; agua = solución − soluto`,
 pasos:[`Solución total = 90 × 100 / 15 = 600 mL.`,`Agua = 600 − 90 = 510 mL.`],
 r:`510 mL de agua`,
 ojo:`Si respondes 600 mL, diste el volumen de solución, no el de agua.`},
{t:`t16`,src:`Tema 16, pág. 9, ejercicio 5`,q:`Una cerveza de 500 mL tiene 6 % v/v de alcohol. Si una persona consume la mitad, ¿cuántos mL de etanol ingirió?`,
 pide:`El etanol contenido en 250 mL.`,
 datos:[`Volumen consumido: 500 / 2 = 250 mL`,`% v/v = 6 %`],
 f:`Soluto = % × solución / 100`,
 pasos:[`6 × 250 / 100 = 15 mL.`],
 r:`15 mL de etanol`},

/* ---- % m/v ---- */
{t:`t16`,src:`Tema 16, pág. 10 (ejemplo)`,q:`Se disuelven 18 g de KNO₃ en agua suficiente hasta 300 mL de solución. ¿Cuál es el % m/v?`,
 pide:`El % m/v: gramos por cada 100 mL de solución.`,
 datos:[`Soluto: 18 g`,`Solución: 300 mL`],
 f:`% m/v = g soluto / mL solución × 100`,
 pasos:[`18 / 300 × 100 = 6 %.`],
 r:`6 % m/v`},
{t:`t16`,src:`Tema 16, pág. 10 (ejemplo)`,q:`Se necesitan 750 mL de solución salina normal al 0.9 % m/v de NaCl para uso intravenoso. ¿Cuántos gramos de NaCl se deben pesar?`,
 pide:`La masa de soluto que vas a pesar en la balanza.`,
 datos:[`Solución: 750 mL`,`% m/v = 0.9 %`],
 f:`g soluto = % × mL solución / 100`,
 pasos:[`0.9 × 750 / 100 = 6.75 g.`],
 r:`6.75 g de NaCl`},
{t:`t16`,src:`Tema 16, pág. 11, ejercicio 1`,q:`Un jarabe se prepara con 45 g de bromhexina hasta un volumen total de 1.5 L. ¿Cuál es el % m/v?`,
 pide:`El % m/v. El volumen está en litros: pásalo a mL.`,
 datos:[`Soluto: 45 g`,`Solución: 1.5 L = 1500 mL`],
 f:`% m/v = g / mL × 100`,
 pasos:[`45 / 1500 × 100 = 3 %.`],
 r:`3 % m/v`},
{t:`t16`,src:`Tema 16, pág. 11, ejercicio 2`,q:`Se dispone de 18 g de NaOH. ¿Qué volumen de solución al 4 % m/v se puede preparar? Exprese en litros.`,
 pide:`El volumen de solución, en L.`,
 datos:[`Soluto: 18 g`,`% m/v = 4 %`],
 f:`mL solución = g soluto × 100 / %`,
 pasos:[`18 × 100 / 4 = 450 mL.`,`450 / 1000 = 0.45 L.`],
 r:`0.45 L`},
{t:`t16`,src:`Tema 16, pág. 11, ejercicio 3`,q:`Una muestra de 250 mL de agua de pozo contiene 125 mg de fluoruro de sodio. ¿Cuál es el % m/v?`,
 pide:`El % m/v. La masa está en mg; el % m/v exige gramos.`,
 datos:[`Soluto: 125 mg = 0.125 g`,`Solución: 250 mL`],
 f:`% m/v = g / mL × 100`,
 pasos:[`Convierte: 125 mg / 1000 = 0.125 g.`,`0.125 / 250 × 100 = 0.05 %.`],
 r:`0.05 % m/v`,
 ojo:`Si no conviertes los mg a g, obtienes 50 %, un valor absurdo para agua potable.`},
{t:`t16`,src:`Tema 16, pág. 11, ejercicio 4`,q:`Se tienen 36 g de CuSO₄ y se desea una solución al 12 % m/v. ¿Cuántos mL de agua se deben medir (el sólido no altera el volumen)?`,
 pide:`El volumen de solución, que en este caso es igual al de agua.`,
 datos:[`Soluto: 36 g`,`% m/v = 12 %`],
 f:`mL solución = g × 100 / %`,
 pasos:[`36 × 100 / 12 = 300 mL.`],
 r:`300 mL de agua`},
{t:`t16`,src:`Tema 16, pág. 11, ejercicio 5`,q:`Un paciente recibe 2.5 L de glucosa al 5 % m/v. ¿Cuántos gramos de glucosa recibe?`,
 pide:`La masa total de soluto.`,
 datos:[`Solución: 2.5 L = 2500 mL`,`% m/v = 5 %`],
 f:`g = % × mL / 100`,
 pasos:[`5 × 2500 / 100 = 125 g.`],
 r:`125 g de glucosa`},

/* ---- ppm ---- */
{t:`t16`,src:`Tema 16, pág. 12 (ejemplo)`,q:`En 2.5 kg de tierra hay 50 mg de hierro. ¿Cuál es el contenido en ppm?`,
 pide:`mg de hierro por kg de muestra.`,
 datos:[`Soluto: 50 mg`,`Muestra: 2.5 kg`],
 f:`ppm = mg / kg`,
 pasos:[`50 / 2.5 = 20 ppm.`],
 r:`20 ppm`},
{t:`t16`,src:`Tema 16, pág. 12 (ejemplo)`,q:`En 800 mL de agua de un río se detectan 0.004 mg de mercurio. ¿Cuál es la concentración en ppm?`,
 pide:`mg de Hg por litro.`,
 datos:[`Soluto: 0.004 mg`,`Volumen: 800 mL = 0.8 L`],
 f:`ppm = mg / L`,
 pasos:[`Convierte el volumen: 800 / 1000 = 0.8 L.`,`0.004 / 0.8 = 0.005 ppm.`],
 r:`0.005 ppm`},
{t:`t16`,src:`Aplicación de Tema 16, pág. 12`,q:`Un análisis detecta 0.25 mg de plomo en 500 mL de agua. Exprese la concentración en ppm.`,
 pide:`mg por litro.`,
 datos:[`0.25 mg`,`0.5 L`],
 f:`ppm = mg / L`,
 pasos:[`0.25 / 0.5 = 0.5 ppm.`],
 r:`0.5 ppm`},

/* ---- Molaridad ---- */
{t:`t16`,src:`Tema 16, pág. 16 (ejemplo)`,q:`Se pesan 4.5 g de NaCl y se añade agua hasta 500 mL de solución. ¿Cuál es la molaridad?`,
 pide:`Moles de NaCl por litro de solución.`,
 datos:[`Masa: 4.5 g`,`Volumen: 500 mL = 0.5 L`,`PM NaCl = 23 + 35.5 = 58.5 g/mol`],
 f:`M = (g / PM) / L`,
 pasos:[`Litros: 500 / 1000 = 0.5 L.`,`PM: 23 + 35.5 = 58.5 g/mol (la diapositiva usa 57).`,`Moles: 4.5 / 58.5 = 0.077 mol.`,`M = 0.077 / 0.5 = 0.15 M.`],
 r:`≈ 0.15 M`},
{t:`t16`,src:`Tema 16, pág. 17, ejercicio 1`,q:`Se prepara 250 mL de solución estándar de glucosa (C₆H₁₂O₆) disolviendo 4.5 g de glucosa anhidra. ¿Cuál es la molaridad?`,
 pide:`La molaridad.`,
 datos:[`4.5 g`,`0.250 L`,`PM = 6(12) + 12(1) + 6(16) = 180 g/mol`],
 f:`M = (g / PM) / L`,
 pasos:[`Moles = 4.5 / 180 = 0.025 mol.`,`M = 0.025 / 0.250 = 0.1 M.`],
 r:`0.1 M`},
{t:`t16`,src:`Tema 16, pág. 17, ejercicio 2`,q:`Se disuelven 3.75 g de CuSO₄·5H₂O hasta 150 mL. Calcule la molaridad del sulfato de cobre.`,
 pide:`La molaridad. El sólido es la sal hidratada: su PM incluye las 5 aguas.`,
 datos:[`3.75 g`,`0.150 L`,`PM CuSO₄ = 63.5 + 32 + 64 = 159.5; + 5(18) = 249.5 g/mol`],
 f:`M = (g / PM) / L`,
 pasos:[`PM del hidrato = 159.5 + 90 = 249.5 g/mol.`,`Moles = 3.75 / 249.5 = 0.0150 mol.`,`M = 0.0150 / 0.150 = 0.10 M.`],
 r:`0.10 M`,
 ojo:`Si usas 159.5 (sin aguas) obtienes 0.157 M, que es incorrecto para la sal pesada.`},
{t:`t16`,src:`Tema 16, pág. 17, ejercicio 3`,q:`Se preparan 2 L de solución de urea (CO(NH₂)₂) a partir de 18 g del compuesto puro. ¿Qué molaridad tiene?`,
 pide:`La molaridad.`,
 datos:[`18 g`,`2 L`,`PM = 12 + 16 + 2(14) + 4(1) = 60 g/mol`],
 f:`M = (g / PM) / L`,
 pasos:[`Moles = 18 / 60 = 0.3 mol.`,`M = 0.3 / 2 = 0.15 M.`],
 r:`0.15 M`},
{t:`t16`,src:`Tema 16, pág. 17, ejercicio 4`,q:`Se disuelven 9.3 g de EDTA disódico dihidratado (C₁₀H₁₄N₂Na₂O₈·2H₂O) en un matraz de 100 mL. Determine la molaridad.`,
 pide:`La molaridad. Es el anticoagulante de los tubos de tapón lila.`,
 datos:[`9.3 g`,`0.1 L`,`PM = 10(12) + 14(1) + 2(14) + 2(23) + 8(16) + 2(18) = 372 g/mol`],
 f:`M = (g / PM) / L`,
 pasos:[`PM: 120 + 14 + 28 + 46 + 128 = 336; más 2 H₂O (36) = 372 g/mol.`,`Moles = 9.3 / 372 = 0.025 mol.`,`M = 0.025 / 0.1 = 0.25 M.`],
 r:`0.25 M`},
{t:`t16`,src:`Tema 16, pág. 17, ejercicio 5`,q:`Se toman 4.15 mL de HCl al 37 % en peso (densidad 1.19 g/mL) y se diluyen hasta 500 mL. ¿Cuál es la molaridad de la solución diluida?`,
 pide:`La molaridad final. Es el ejercicio más complejo: hay que pasar de volumen a masa con la densidad, y luego aplicar el porcentaje.`,
 datos:[`V tomado: 4.15 mL`,`Densidad: 1.19 g/mL`,`37 % m/m`,`V final: 0.5 L`,`PM HCl = 1 + 35.5 = 36.5 g/mol`],
 f:`masa = densidad × volumen; masa HCl = masa × 0.37; M = (g / PM) / L`,
 pasos:[`Masa de solución concentrada: 1.19 × 4.15 = 4.94 g.`,`Masa de HCl puro: 4.94 × 0.37 = 1.83 g.`,`Moles: 1.83 / 36.5 = 0.050 mol.`,`M = 0.050 / 0.5 = 0.10 M.`,`Comprobación con dilución: el HCl 37 % es (1.19 × 1000 × 0.37) / 36.5 = 12.06 M; 12.06 × 4.15 = C₂ × 500 → C₂ = 0.10 M.`],
 r:`0.10 M`},
{t:`t16`,src:`Aplicación de Tema 16, pág. 10 y 14`,q:`¿Cuál es la molaridad del suero fisiológico (NaCl 0.9 % m/v)?`,
 pide:`Convertir un porcentaje m/v a molaridad.`,
 datos:[`0.9 g en 100 mL`,`PM NaCl = 58.5 g/mol`],
 f:`Pasar a g/L; luego M = (g/L) / PM`,
 pasos:[`0.9 g / 100 mL equivale a 9 g / 1000 mL = 9 g/L.`,`M = 9 / 58.5 = 0.154 M.`],
 r:`0.154 M (≈ 154 mmol/L)`},
{t:`t16`,src:`Aplicación de Tema 16, pág. 10 y 14`,q:`¿Cuál es la molaridad de una solución de glucosa al 5 % m/v?`,
 pide:`Convertir % m/v a M.`,
 datos:[`5 g en 100 mL = 50 g/L`,`PM glucosa = 180 g/mol`],
 f:`M = (g/L) / PM`,
 pasos:[`50 / 180 = 0.278 M.`],
 r:`0.278 M`},
{t:`t16`,src:`Aplicación de Tema 16, pág. 14–15`,q:`¿Cuántos gramos de NaOH se necesitan para preparar 250 mL de solución 0.2 M?`,
 pide:`El problema inverso: tienes M y volumen, te piden la masa a pesar.`,
 datos:[`M = 0.2 mol/L`,`V = 0.250 L`,`PM NaOH = 23 + 16 + 1 = 40 g/mol`],
 f:`moles = M × L; gramos = moles × PM`,
 pasos:[`Moles = 0.2 × 0.250 = 0.05 mol.`,`Gramos = 0.05 × 40 = 2 g.`],
 r:`2 g de NaOH`},

/* ---- Molalidad ---- */
{t:`t16`,src:`Tema 16, pág. 20 (ejemplo)`,q:`Se disuelven 13.5 g de glucosa (C₆H₁₂O₆) en 250 g de agua. ¿Cuál es la molalidad?`,
 pide:`Moles de glucosa por kg de agua.`,
 datos:[`13.5 g`,`Solvente: 250 g = 0.250 kg`,`PM = 180 g/mol`],
 f:`m = (g / PM) / kg de solvente`,
 pasos:[`Moles = 13.5 / 180 = 0.075 mol.`,`m = 0.075 / 0.250 = 0.3 m.`],
 r:`0.3 m`},
{t:`t16`,src:`Tema 16, pág. 21, ejercicio 1`,q:`Se disuelven 9.0 g de urea (CO(NH₂)₂) en 300 g de agua para calibrar un analizador de nitrógeno ureico. ¿Cuál es la molalidad?`,
 pide:`La molalidad.`,
 datos:[`9.0 g`,`0.300 kg`,`PM = 60 g/mol`],
 f:`m = (g / PM) / kg`,
 pasos:[`Moles = 9.0 / 60 = 0.15 mol.`,`m = 0.15 / 0.300 = 0.5 m.`],
 r:`0.5 m`},
{t:`t16`,src:`Tema 16, pág. 21, ejercicio 2`,q:`Se añaden 8.775 g de NaCl a 750 g de agua libre de iones (reactivo para osmometría). Calcule la molalidad.`,
 pide:`La molalidad.`,
 datos:[`8.775 g`,`0.750 kg`,`PM = 58.5 g/mol`],
 f:`m = (g / PM) / kg`,
 pasos:[`Moles = 8.775 / 58.5 = 0.15 mol.`,`m = 0.15 / 0.750 = 0.2 m.`],
 r:`0.2 m`},
{t:`t16`,src:`Tema 16, pág. 21, ejercicio 3`,q:`Se disuelven 17.1 g de sacarosa (C₁₂H₂₂O₁₁) en 200 g de agua. Determine la molalidad.`,
 pide:`La molalidad.`,
 datos:[`17.1 g`,`0.200 kg`,`PM = 12(12) + 22(1) + 11(16) = 342 g/mol`],
 f:`m = (g / PM) / kg`,
 pasos:[`PM: 144 + 22 + 176 = 342 g/mol.`,`Moles = 17.1 / 342 = 0.05 mol.`,`m = 0.05 / 0.200 = 0.25 m.`],
 r:`0.25 m`},
{t:`t16`,src:`Tema 16, pág. 21, ejercicio 4`,q:`Se disuelven 33.0 g de sulfato de amonio ((NH₄)₂SO₄) en 500 g de agua desionizada. ¿Cuál es la molalidad?`,
 pide:`La molalidad. Ojo con el paréntesis: el NH₄ va dos veces.`,
 datos:[`33.0 g`,`0.500 kg`,`PM = 2(14) + 8(1) + 32 + 4(16) = 132 g/mol`],
 f:`m = (g / PM) / kg`,
 pasos:[`PM: 28 + 8 + 32 + 64 = 132 g/mol.`,`Moles = 33 / 132 = 0.25 mol.`,`m = 0.25 / 0.5 = 0.5 m.`],
 r:`0.5 m`},
{t:`t16`,src:`Tema 16, pág. 21, ejercicio 5`,q:`Se disuelven 22.77 g de manitol (C₆H₁₄O₆) en 400 g de agua. ¿Qué molalidad tiene?`,
 pide:`La molalidad.`,
 datos:[`22.77 g`,`0.400 kg`,`PM = 72 + 14 + 96 = 182 g/mol`],
 f:`m = (g / PM) / kg`,
 pasos:[`Moles = 22.77 / 182 = 0.125 mol.`,`m = 0.125 / 0.400 = 0.31 m.`],
 r:`≈ 0.31 m`},

/* ---- Normalidad ---- */
{t:`t16`,src:`Tema 16, pág. 24 (ejemplo, ácido)`,q:`Se disuelven 49 g de H₂SO₄ en agua hasta 250 mL. ¿Cuál es la normalidad?`,
 pide:`Equivalentes de H₂SO₄ por litro.`,
 datos:[`49 g`,`0.25 L`,`PM = 2 + 32 + 64 = 98 g/mol`,`n = 2 (dos H⁺)`],
 f:`PE = PM / n; Eq = g / PE; N = Eq / L`,
 pasos:[`PE = 98 / 2 = 49 g/eq.`,`Eq = 49 / 49 = 1 eq.`,`N = 1 / 0.25 = 4 N.`],
 r:`4 N`},
{t:`t16`,src:`Tema 16, pág. 25 (ejemplo, base)`,q:`Se disuelven 3.7 g de Ca(OH)₂ hasta 500 mL. ¿Cuál es la normalidad?`,
 pide:`La normalidad de una base.`,
 datos:[`3.7 g`,`0.5 L`,`PM = 40 + 2(16) + 2(1) = 74 g/mol`,`n = 2 (dos OH⁻)`],
 f:`PE = PM / n; Eq = g / PE; N = Eq / L`,
 pasos:[`PE = 74 / 2 = 37 g/eq.`,`Eq = 3.7 / 37 = 0.1 eq.`,`N = 0.1 / 0.5 = 0.2 N.`],
 r:`0.2 N`},
{t:`t16`,src:`Tema 16, pág. 26 (ejemplo, sal)`,q:`Se disuelven 34.2 g de Al₂(SO₄)₃ hasta 250 mL. ¿Cuál es la normalidad?`,
 pide:`La normalidad de una sal: n = cationes × carga.`,
 datos:[`34.2 g`,`0.25 L`,`PM = 2(27) + 3(32) + 12(16) = 342 g/mol`,`n = 2 Al³⁺ × 3 = 6`],
 f:`PE = PM / n; Eq = g / PE; N = Eq / L`,
 pasos:[`PE = 342 / 6 = 57 g/eq.`,`Eq = 34.2 / 57 = 0.6 eq.`,`N = 0.6 / 0.25 = 2.4 N.`],
 r:`2.4 N`},
{t:`t16`,src:`Tema 16, pág. 27, ejercicio 1`,q:`Calcule la normalidad de una solución preparada con 10 g de NaOH hasta 500 mL.`,
 pide:`La normalidad. NaOH tiene un OH⁻.`,
 datos:[`10 g`,`0.5 L`,`PM = 40 g/mol`,`n = 1`],
 f:`N = (g / PE) / L`,
 pasos:[`PE = 40 / 1 = 40 g/eq.`,`Eq = 10 / 40 = 0.25 eq.`,`N = 0.25 / 0.5 = 0.5 N.`],
 r:`0.5 N (igual a su molaridad)`},
{t:`t16`,src:`Tema 16, pág. 27, ejercicio 2`,q:`¿Cuál es la normalidad de una solución de 26.5 g de Na₂CO₃ en 250 mL?`,
 pide:`La normalidad de una sal.`,
 datos:[`26.5 g`,`0.25 L`,`PM = 2(23) + 12 + 3(16) = 106 g/mol`,`n = 2 Na⁺ × 1 = 2`],
 f:`N = (g / PE) / L`,
 pasos:[`PE = 106 / 2 = 53 g/eq.`,`Eq = 26.5 / 53 = 0.5 eq.`,`N = 0.5 / 0.25 = 2 N.`],
 r:`2 N`},
{t:`t16`,src:`Tema 16, pág. 27, ejercicio 3`,q:`Se disuelven 19.6 g de H₃PO₄ hasta 400 mL. Determine la normalidad considerando que participan los tres protones.`,
 pide:`La normalidad con n = 3.`,
 datos:[`19.6 g`,`0.4 L`,`PM = 3 + 31 + 64 = 98 g/mol`,`n = 3`],
 f:`N = (g / PE) / L`,
 pasos:[`PE = 98 / 3 = 32.67 g/eq.`,`Eq = 19.6 / 32.67 = 0.6 eq.`,`N = 0.6 / 0.4 = 1.5 N.`],
 r:`1.5 N`},
{t:`t16`,src:`Aplicación de Tema 16, pág. 23–24`,q:`¿Cuántos gramos de H₂SO₄ se necesitan para preparar 500 mL de solución 0.1 N?`,
 pide:`La masa a pesar, partiendo de la normalidad.`,
 datos:[`N = 0.1 eq/L`,`V = 0.5 L`,`PE H₂SO₄ = 49 g/eq`],
 f:`Eq = N × L; g = Eq × PE`,
 pasos:[`Eq = 0.1 × 0.5 = 0.05 eq.`,`g = 0.05 × 49 = 2.45 g.`],
 r:`2.45 g de H₂SO₄`},

/* ---- Dilución ---- */
{t:`t17`,src:`Tema 17, pág. 5 (ejemplo)`,q:`Se tienen 400 mL de NaBr 2 M. Se agrega agua hasta 1200 mL. ¿Cuál es la concentración obtenida?`,
 pide:`C₂, la concentración final.`,
 datos:[`C₁ = 2 M`,`V₁ = 400 mL`,`V₂ = 1200 mL`,`C₂ = ?`],
 f:`C₂ = C₁ × V₁ / V₂`,
 pasos:[`2 × 400 = C₂ × 1200.`,`C₂ = 800 / 1200 = 0.67 M.`,`Verificación: 0.67 < 2 (cumple la regla 3).`],
 r:`0.67 M`,
 ojo:`En la diapositiva el despeje aparece rotulado como "C1"; lo que se calcula es C₂.`},
{t:`t17`,src:`Tema 17, pág. 6 (ejemplo)`,q:`Se quieren preparar 500 mL de NaCl al 4 % a partir de una solución stock al 20 %. ¿Qué volumen del stock se debe tomar?`,
 pide:`V₁, cuánto tomar de la solución madre.`,
 datos:[`C₁ = 20 %`,`C₂ = 4 %`,`V₂ = 500 mL`,`V₁ = ?`],
 f:`V₁ = C₂ × V₂ / C₁`,
 pasos:[`20 × V₁ = 4 × 500.`,`V₁ = 2000 / 20 = 100 mL.`,`Se toman 100 mL de stock y se completa con agua hasta 500 mL (se agregan 400 mL).`],
 r:`100 mL de stock`,
 ojo:`La diapositiva rotula 4 % v/v; al ser NaCl (sólido) lo correcto sería % m/v. El cálculo no cambia.`},
{t:`t17`,src:`Tema 17, pág. 7 (ejemplo)`,q:`¿En qué volumen se debe diluir una ampolla de 2 mL de insulina de 1 mg/mL para obtener 0.4 mg/mL?`,
 pide:`V₂, el volumen final.`,
 datos:[`C₁ = 1 mg/mL`,`V₁ = 2 mL`,`C₂ = 0.4 mg/mL`],
 f:`V₂ = C₁ × V₁ / C₂`,
 pasos:[`1 × 2 = 0.4 × V₂.`,`V₂ = 2 / 0.4 = 5 mL.`,`Diluyente a agregar: 5 − 2 = 3 mL.`],
 r:`5 mL finales (se agregan 3 mL)`},
{t:`t17`,src:`Aplicación de Tema 17, pág. 3–4`,q:`Se necesitan 250 mL de HCl 0.1 M y se dispone de un stock 2 M. ¿Cuánto stock se toma y cuánta agua se agrega?`,
 pide:`V₁ y el volumen de agua.`,
 datos:[`C₁ = 2 M`,`C₂ = 0.1 M`,`V₂ = 250 mL`],
 f:`V₁ = C₂V₂ / C₁; agua = V₂ − V₁`,
 pasos:[`V₁ = 0.1 × 250 / 2 = 12.5 mL.`,`Agua = 250 − 12.5 = 237.5 mL (en la práctica, se afora a 250 mL).`],
 r:`12.5 mL de stock + 237.5 mL de agua`},
{t:`t17`,src:`Aplicación de Tema 17, pág. 3`,q:`Se toman 5 mL de glucosa al 10 % m/v y se llevan a 50 mL con agua. ¿Cuál es la concentración final?`,
 pide:`C₂ en % m/v.`,
 datos:[`C₁ = 10 %`,`V₁ = 5 mL`,`V₂ = 50 mL`],
 f:`C₂ = C₁V₁ / V₂`,
 pasos:[`C₂ = 10 × 5 / 50 = 1 % m/v.`],
 r:`1 % m/v`},
{t:`t17`,src:`Aplicación de Tema 17, pág. 3`,q:`A partir de NaCl al 10 % m/v, ¿cómo prepara 500 mL de solución salina al 0.9 % m/v?`,
 pide:`V₁ del concentrado.`,
 datos:[`C₁ = 10 %`,`C₂ = 0.9 %`,`V₂ = 500 mL`],
 f:`V₁ = C₂V₂ / C₁`,
 pasos:[`V₁ = 0.9 × 500 / 10 = 45 mL.`,`Se toman 45 mL del concentrado y se completa con agua hasta 500 mL.`],
 r:`45 mL de NaCl 10 %`},
{t:`t17`,src:`Aplicación de Tema 17, pág. 3 y Tema 16, pág. 17`,q:`Se dispone de HCl concentrado 12 M. ¿Qué volumen se necesita para preparar 100 mL de HCl 0.5 M?`,
 pide:`V₁.`,
 datos:[`C₁ = 12 M`,`C₂ = 0.5 M`,`V₂ = 100 mL`],
 f:`V₁ = C₂V₂ / C₁`,
 pasos:[`V₁ = 0.5 × 100 / 12 = 4.17 mL.`,`Seguridad: se agrega el ácido sobre el agua, nunca al revés.`],
 r:`4.17 mL`},
{t:`t17`,src:`Tema 17, pág. 2 (objetivo; cálculo complementario)`,q:`Una proteína (1.00 g) se disuelve hasta 100 mL de solución. A 25 °C su presión osmótica es 0.0100 atm. Estime su masa molar. Use π = M × R × T, R = 0.0821 L·atm/mol·K.`,
 pide:`La masa molar (g/mol). El objetivo del tema lo menciona, aunque la fórmula no se desarrolla en las diapositivas.`,
 datos:[`π = 0.0100 atm`,`T = 25 + 273 = 298 K`,`V = 0.1 L`,`masa = 1.00 g`],
 f:`M = π / (R × T); moles = M × L; masa molar = g / moles`,
 pasos:[`R × T = 0.0821 × 298 = 24.47.`,`M = 0.0100 / 24.47 = 4.09 × 10⁻⁴ mol/L.`,`Moles = 4.09 × 10⁻⁴ × 0.1 = 4.09 × 10⁻⁵ mol.`,`Masa molar = 1.00 / 4.09 × 10⁻⁵ ≈ 24 500 g/mol.`],
 r:`≈ 2.45 × 10⁴ g/mol`},
{t:`t17`,src:`Aplicación de Tema 17, pág. 9`,q:`Ordene de mayor a menor efecto sobre el punto de congelación, todas a 0.1 m: glucosa, NaCl, CaCl₂, urea.`,
 pide:`Comparar el número de partículas que libera cada soluto.`,
 datos:[`Glucosa: no se disocia`,`NaCl → Na⁺ + Cl⁻`,`CaCl₂ → Ca²⁺ + 2Cl⁻`,`Urea: no se disocia`],
 f:`Partículas efectivas = i × concentración`,
 pasos:[`CaCl₂: i = 3 → 0.3.`,`NaCl: i = 2 → 0.2.`,`Glucosa y urea: i = 1 → 0.1 cada una.`],
 r:`CaCl₂ > NaCl > glucosa = urea`},
{t:`t17`,src:`Aplicación de Tema 17, pág. 11–12`,q:`Prediga el efecto sobre los eritrocitos de: a) NaCl 0.9 %; b) NaCl 0.45 %; c) NaCl 2 %; d) agua destilada.`,
 pide:`Clasificar cada medio por tonicidad respecto al eritrocito y deducir el efecto.`,
 datos:[`El eritrocito es isotónico con NaCl 0.9 %`],
 f:`Menor que 0.9 % = hipotónico; igual = isotónico; mayor = hipertónico`,
 pasos:[`a) 0.9 %: isotónico, forma normal.`,`b) 0.45 %: hipotónico, entra agua, hemólisis.`,`c) 2 %: hipertónico, sale agua, crenación.`,`d) Agua destilada: muy hipotónico, hemólisis.`],
 r:`a) normal; b) hemólisis; c) crenación; d) hemólisis`},

/* ---- T18 ---- */
{t:`t18`,src:`Tema 18, pág. 5`,q:`Clasifique como electrolito fuerte, débil o no electrolito: NaCl, CH₃COOH, sacarosa, HCl, NH₃, urea, NaOH, etanol.`,
 pide:`Ubicar cada sustancia según cuánto se ioniza en agua.`,
 datos:[`Fuerte: 100 %`,`Débil: parcial`,`No electrolito: no forma iones`],
 f:`—`,
 pasos:[`Fuertes: NaCl, HCl, NaOH.`,`Débiles: CH₃COOH, NH₃.`,`No electrolitos: sacarosa, urea, etanol.`],
 r:`Fuertes: NaCl, HCl, NaOH. Débiles: CH₃COOH, NH₃. No electrolitos: sacarosa, urea, etanol.`},
{t:`t18`,src:`Tema 18, pág. 8`,q:`Una solución tiene pH 3.0. ¿De qué color se verá con: naranja de metilo, rojo de metilo, azul de bromotimol y fenolftaleína?`,
 pide:`Comparar pH 3.0 con el intervalo de viraje de cada indicador.`,
 datos:[`Naranja de metilo 3.2–4.4`,`Rojo de metilo 4.8–6.0`,`Azul de bromotimol 6.0–7.6`,`Fenolftaleína 8.2–10.0`],
 f:`pH por debajo del intervalo = color ácido; por encima = color básico`,
 pasos:[`Naranja de metilo: 3.0 < 3.2 → rojo.`,`Rojo de metilo: 3.0 < 4.8 → rojo.`,`Azul de bromotimol: 3.0 < 6.0 → amarillo.`,`Fenolftaleína: 3.0 < 8.2 → incolora.`],
 r:`Rojo, rojo, amarillo e incolora`},
{t:`t18`,src:`Tema 18, pág. 8`,q:`Una solución tiene pH 11.0. Prediga el color con fenolftaleína, azul de timol, naranja de metilo y amarillo de alizarina.`,
 pide:`Mismo razonamiento con pH alcalino.`,
 datos:[`Fenolftaleína 8.2–10.0`,`Azul de timol 8.0–9.6`,`Naranja de metilo 3.2–4.4`,`Amarillo de alizarina 10.1–12.0`],
 f:`Comparar con el intervalo`,
 pasos:[`Fenolftaleína: 11 > 10 → rosa fucsia.`,`Azul de timol: 11 > 9.6 → azul.`,`Naranja de metilo: 11 > 4.4 → amarillo.`,`Amarillo de alizarina: 11 está dentro de 10.1–12.0 → color intermedio (entre amarillo y rojo).`],
 r:`Fucsia, azul, amarillo e intermedio (zona de viraje)`},
{t:`t18`,src:`Tema 18, pág. 6–7`,q:`Una sustancia desconocida vuelve azul el tornasol rojo, rosa la fenolftaleína y se siente jabonosa. Además, reacciona con aceite formando jabón. ¿Qué es y cuál es su pH aproximado?`,
 pide:`Usar las definiciones operacionales para identificarla.`,
 datos:[`Tornasol rojo → azul`,`Fenolftaleína rosa`,`Tacto jabonoso`,`Saponificación`],
 f:`Comparar con las propiedades de la tabla de ácidos y bases`,
 pasos:[`Todas las observaciones coinciden con las propiedades de una base.`,`La fenolftaleína rosa indica pH mayor de 8.2.`],
 r:`Es una base; pH mayor de 7 (por la fenolftaleína, superior a 8.2)`},
{t:`t18`,src:`Tema 18, pág. 6`,q:`Escriba los productos de: a) Mg + 2HCl; b) NaHCO₃ + HCl. ¿Qué observaría en cada caso?`,
 pide:`Aplicar las reacciones características de los ácidos.`,
 datos:[`Ácido + metal activo → sal + H₂`,`Ácido + bicarbonato → sal + H₂O + CO₂`],
 f:`—`,
 pasos:[`a) Mg + 2HCl → MgCl₂ + H₂↑. Se observa burbujeo de hidrógeno.`,`b) NaHCO₃ + HCl → NaCl + H₂O + CO₂↑. Se observa efervescencia (como el globo de la pág. 6).`],
 r:`a) MgCl₂ + H₂; b) NaCl + H₂O + CO₂`},

/* ---- T19 ---- */
{t:`t19`,src:`Tema 19, pág. 5`,q:`Según Arrhenius, clasifique como ácido o base: HCl, HNO₃, CH₃COOH, NaOH, KOH, Ba(OH)₂. Indique el ion que liberan.`,
 pide:`Revisar qué ion se produce en cada disociación.`,
 datos:[`Ácido → H⁺`,`Base → OH⁻`],
 f:`—`,
 pasos:[`HCl → H⁺ + Cl⁻ (ácido).`,`HNO₃ → H⁺ + NO₃⁻ (ácido).`,`CH₃COOH ⇌ H⁺ + CH₃COO⁻ (ácido débil).`,`NaOH → Na⁺ + OH⁻ (base).`,`KOH → K⁺ + OH⁻ (base).`,`Ba(OH)₂ → Ba²⁺ + 2OH⁻ (base).`],
 r:`Ácidos: HCl, HNO₃, CH₃COOH. Bases: NaOH, KOH, Ba(OH)₂.`},
{t:`t19`,src:`Tema 19, pág. 8, ejercicios 1–3`,q:`Identifique ácido, base, ácido conjugado y base conjugada: 1) HCl + H₂O → H₃O⁺ + Cl⁻; 2) HNO₃ + H₂O → H₃O⁺ + NO₃⁻; 3) CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻.`,
 pide:`Ver quién pierde un H (ácido) y quién lo gana (base).`,
 datos:[`Ácido → base conjugada (pierde H⁺)`,`Base → ácido conjugado (gana H⁺)`],
 f:`—`,
 pasos:[`1) Ácido HCl; base H₂O; ácido conj. H₃O⁺; base conj. Cl⁻.`,`2) Ácido HNO₃; base H₂O; ácido conj. H₃O⁺; base conj. NO₃⁻.`,`3) Ácido CH₃COOH; base H₂O; ácido conj. H₃O⁺; base conj. CH₃COO⁻.`],
 r:`En los tres casos el agua actúa como base`},
{t:`t19`,src:`Tema 19, pág. 8, ejercicios 4–6`,q:`Identifique los pares conjugados: 4) NH₃ + H₂O ⇌ NH₄⁺ + OH⁻; 5) CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻; 6) HSO₄⁻ + OH⁻ ⇌ SO₄²⁻ + H₂O.`,
 pide:`Mismo método. Fíjate que aquí el agua cambia de papel.`,
 datos:[`Anfoterismo del agua (pág. 7)`],
 f:`—`,
 pasos:[`4) Base NH₃ → ácido conj. NH₄⁺; ácido H₂O → base conj. OH⁻.`,`5) Base CO₃²⁻ → ácido conj. HCO₃⁻; ácido H₂O → base conj. OH⁻.`,`6) Ácido HSO₄⁻ → base conj. SO₄²⁻; base OH⁻ → ácido conj. H₂O.`],
 r:`En 4 y 5 el agua es ácido; en 6 se forma agua como ácido conjugado`,
 ojo:`Compara con los ejercicios 1–3: allí el agua era base. Esto demuestra que es anfótera.`},
{t:`t19`,src:`Tema 19, pág. 10`,q:`Identifique el ácido y la base de Lewis: 1) BF₃ + NH₃; 2) H⁺ + H₂O; 3) AlCl₃ + Cl⁻; 4) CO₂ + OH⁻; 5) Cu²⁺ + 4NH₃; 6) H⁺ + NH₃.`,
 pide:`Quién acepta el par (ácido) y quién lo dona (base).`,
 datos:[`Ácido: orbitales vacíos o carga positiva`,`Base: pares libres (N, O, aniones)`],
 f:`—`,
 pasos:[`1) Ácido BF₃; base NH₃.`,`2) Ácido H⁺; base H₂O.`,`3) Ácido AlCl₃; base Cl⁻.`,`4) Ácido CO₂; base OH⁻.`,`5) Ácido Cu²⁺; base NH₃.`,`6) Ácido H⁺; base NH₃.`],
 r:`Ácidos: BF₃, H⁺, AlCl₃, CO₂, Cu²⁺. Bases: NH₃, H₂O, Cl⁻, OH⁻.`},
{t:`t19`,src:`Tema 19, pág. 12–13, 15`,q:`Calcule la concentración faltante y clasifique: a) [H⁺] = 1 × 10⁻⁴ M; b) [OH⁻] = 1 × 10⁻⁵ M; c) [H⁺] = 1 × 10⁻⁷ M; d) [OH⁻] = 1 × 10⁻¹ M.`,
 pide:`Usar Kw para hallar el otro ion y la tabla para el pH.`,
 datos:[`Kw = [H⁺][OH⁻] = 1 × 10⁻¹⁴`],
 f:`[OH⁻] = 10⁻¹⁴ / [H⁺]; [H⁺] = 10⁻¹⁴ / [OH⁻]`,
 pasos:[`a) [OH⁻] = 10⁻¹⁰ M; pH 4; ácida.`,`b) [H⁺] = 10⁻⁹ M; pH 9; básica.`,`c) [OH⁻] = 10⁻⁷ M; pH 7; neutra.`,`d) [H⁺] = 10⁻¹³ M; pH 13; básica.`],
 r:`a) ácida pH 4; b) básica pH 9; c) neutra pH 7; d) básica pH 13`},
{t:`t19`,src:`Aplicación de Tema 19, pág. 12`,q:`Si [H⁺] = 2 × 10⁻³ M, ¿cuál es la [OH⁻]? ¿La solución es ácida o básica?`,
 pide:`Aplicar Kw con un coeficiente distinto de 1.`,
 datos:[`[H⁺] = 2 × 10⁻³ M`,`Kw = 1 × 10⁻¹⁴`],
 f:`[OH⁻] = Kw / [H⁺]`,
 pasos:[`Divide los coeficientes: 1 / 2 = 0.5.`,`Resta los exponentes: −14 − (−3) = −11.`,`[OH⁻] = 0.5 × 10⁻¹¹ = 5 × 10⁻¹² M.`,`[H⁺] > 10⁻⁷ M, entonces es ácida.`],
 r:`5 × 10⁻¹² M; ácida`},
{t:`t19`,src:`Aplicación de Tema 19, pág. 13 y Tema 18, pág. 9`,q:`El pH sanguíneo normal es 7.35–7.45. ¿Entre qué potencias de 10 se ubica la [H⁺] y cómo se clasifica la sangre?`,
 pide:`Ubicar un pH no entero en la tabla.`,
 datos:[`pH 7 → [H⁺] = 10⁻⁷`,`pH 8 → [H⁺] = 10⁻⁸`],
 f:`A mayor pH, menor [H⁺]`,
 pasos:[`7.35–7.45 está entre pH 7 y pH 8.`,`Por lo tanto, [H⁺] está entre 10⁻⁷ y 10⁻⁸ M (es menor que 10⁻⁷).`,`[H⁺] < [OH⁻]: la sangre es ligeramente alcalina.`],
 r:`[H⁺] entre 10⁻⁸ y 10⁻⁷ M; ligeramente básica`},
{t:`t19`,src:`Tema 19, pág. 14`,q:`Explique qué ocurre con [H⁺], [OH⁻], pH y Kw cuando: a) se añade NaOH al agua; b) se calienta agua pura.`,
 pide:`Aplicar Le Chatelier a dos perturbaciones distintas.`,
 datos:[`H₂O ⇌ H⁺ + OH⁻ (endotérmica)`],
 f:`El equilibrio se desplaza contra la perturbación`,
 pasos:[`a) Aumenta [OH⁻]; el equilibrio se desplaza hacia la formación de agua; disminuye [H⁺]; el pH sube. Kw no cambia (misma temperatura).`,`b) Al ser endotérmica, el calor favorece la ionización: aumentan [H⁺] y [OH⁻] por igual y Kw aumenta. El agua sigue siendo neutra porque ambos iones siguen iguales.`],
 r:`a) pH sube, Kw constante; b) aumenta la ionización y Kw; sigue neutra`},
{t:`t19`,src:`Tema 19, pág. 3–4`,q:`Escriba la neutralización de Arrhenius de: a) HCl + NaOH; b) H₂SO₄ + NaOH (balanceada). Nombre la sal.`,
 pide:`Ácido + base → sal + agua.`,
 datos:[`H⁺ + OH⁻ → H₂O`],
 f:`—`,
 pasos:[`a) HCl + NaOH → NaCl + H₂O. Sal: cloruro de sodio.`,`b) H₂SO₄ tiene 2 H⁺, necesita 2 NaOH: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Sal: sulfato de sodio.`],
 r:`a) NaCl + H₂O; b) Na₂SO₄ + 2H₂O`}
];


const FORM = [
  {t:`t15`,src:`Tema 15, pág. 6–8`,title:`Solubilidad y velocidad`,rows:[
    [`Sólidos y líquidos`,`↑ T° = ↑ solubilidad`],[`Gases`,`↑ T° = ↓ solubilidad; ↑ P = ↑ solubilidad (Ley de Henry)`],
    [`pH`,`Forma ionizada más soluble`],[`Velocidad de disolución`,`↑ subdivisión, ↑ agitación, ↑ T°; máxima al inicio`]]},
  {t:`t16`,src:`Tema 16, pág. 5–12`,title:`Unidades físicas`,rows:[
    [`% m/m`,`g soluto / g solución × 100`],[`% v/v`,`mL soluto / mL solución × 100`],
    [`% m/v`,`g soluto / mL solución × 100`],[`ppm`,`mg soluto / L (o kg) solución`],
    [`Despejes`,`soluto = % × solución / 100; solución = soluto × 100 / %`]]},
  {t:`t16`,src:`Tema 16, pág. 14–26`,title:`Unidades químicas`,rows:[
    [`Moles`,`n = g / PM`],[`Molaridad`,`M = moles / L de solución`],[`Molalidad`,`m = moles / kg de solvente`],
    [`Peso equivalente`,`PE = PM / n (ácido: H⁺; base: OH⁻; sal: cationes × carga)`],
    [`Normalidad`,`N = (g / PE) / L = M × n`],[`Problema inverso`,`g = M × L × PM; g = N × L × PE`]]},
  {t:`t17`,src:`Tema 17, pág. 3–4`,title:`Dilución`,rows:[
    [`Fórmula`,`C₁ × V₁ = C₂ × V₂`],[`Buscar C₂`,`C₂ = C₁V₁ / V₂`],[`Buscar V₁`,`V₁ = C₂V₂ / C₁`],[`Buscar V₂`,`V₂ = C₁V₁ / C₂`],
    [`Solvente a agregar`,`V₂ − V₁`],[`Verificación`,`C₂ < C₁; V₂ > V₁; mismas unidades`]]},
  {t:`t17`,src:`Tema 17, pág. 9–12`,title:`Coligativas y tonicidad`,rows:[
    [`Factor i`,`NaCl 2, CaCl₂ 3, glucosa/urea 1`],[`Isotónico`,`NaCl 0.9 %: forma normal`],
    [`Hipotónico`,`Entra agua: hemólisis`],[`Hipertónico`,`Sale agua: crenación`],[`Presión osmótica (complementario)`,`π = i × M × R × T; R = 0.0821`]]},
  {t:`t18`,src:`Tema 18, pág. 5–8`,title:`Electrolitos e indicadores`,rows:[
    [`Fuertes`,`NaCl, HCl, NaOH (100 %)`],[`Débiles`,`CH₃COOH, NH₃`],[`No electrolitos`,`Sacarosa, etanol, urea`],
    [`Tornasol`,`Ácido: azul → rojo; base: rojo → azul`],[`Fenolftaleína`,`Incolora < 8.2; fucsia > 10.0`],
    [`Naranja de metilo`,`Rojo < 3.2; amarillo > 4.4`],[`Azul de bromotimol`,`Amarillo < 6.0; azul > 7.6`]]},
  {t:`t19`,src:`Tema 19, pág. 3–15`,title:`Teorías y Kw`,rows:[
    [`Arrhenius`,`Ácido libera H⁺; base libera OH⁻ (en agua)`],[`Brønsted-Lowry`,`Ácido dona H⁺; base acepta H⁺`],
    [`Lewis`,`Ácido acepta par e⁻; base dona par e⁻`],[`Kw (25 °C)`,`[H⁺][OH⁻] = 1 × 10⁻¹⁴`],
    [`Hallar el otro ion`,`[OH⁻] = 10⁻¹⁴ / [H⁺]`],[`pH (si coef. = 1)`,`pH = exponente de [H⁺] sin signo`],
    [`Clasificación`,`Ácida pH < 7; neutra = 7; básica > 7`]]}
];
module.exports={TOPICS,REPASO,MCQ,ABIERTAS,EJ,FORM};