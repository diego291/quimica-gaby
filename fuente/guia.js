/* ======================= GUÍA: CÓMO ESTUDIAR CON ESTA HERRAMIENTA ======================= */
const GUIA = [
 { h:`Cómo moverte por la página`, go:null, html:`<ul>
   <li><b>Cinco botones</b> (a la izquierda en la computadora, abajo en el celular): <b>Inicio</b> (Pomodoro, agenda, tu ruta, Cómo estudiar y Mi progreso), <b>Estudiar</b> (Repaso, Fichas, Videos, Formulario), <b>Practicar</b> (Preguntas, Ejercicios, Práctica, ¿Qué fórmula?, Laboratorio), <b>Examen</b> (Simulacro y Parcial impreso) y <b>Preguntar</b>.</li>
   <li><b>Temas:</b> los temas elegidos se ven como etiquetas arriba. Toca <b>+ Temas</b> para cambiarlos; puedes elegir uno, una unidad completa o todos. En la computadora, la lista también está en el panel derecho.</li>
   <li><b>Pomodoro:</b> en Inicio. Ajusta minutos de estudio y descanso, ciclos, meta diaria y sonido con <b>Ajustes</b>. El botón ⛶ abre el modo concentración. Suena solo mientras la página esté abierta.</li>
   <li><b>Calendario y agenda:</b> agrega tu parcial con su fecha y los temas que entran. Verás la cuenta regresiva y, si activas el <b>plan de repaso</b>, la página reparte los temas en los días que faltan.</li>
   <li><b>☀ / ☾:</b> cambia entre modo día (para mucha luz) y modo noche (colores cálidos y menos brillo).</li></ul>` },
 { h:`Antes de empezar`, go:null, html:`<ul>
   <li>Ten a la mano los <b>PDF del Lic. Grande</b>, una <b>calculadora científica</b> (la misma que llevarás al parcial) y un <b>cuaderno</b>. Los ejercicios se resuelven en papel; la página solo te guía y te corrige.</li>
   <li>Cada ítem dice de qué tema y página salió ("Fuente: Tema 21, pág. 14"). Cuando algo no te quede claro, abre esa página del PDF. Lo marcado como "complementario" no está en las diapositivas.</li>
   <li>Si un tema no se entiende con la explicación de clase, abre <b>Estudiar → Videos</b>: hay videos cortos en español para cada subtema, y cada tarjeta de Repaso trae su video al final. Mira el video <b>después</b> de leer la tarjeta y <b>antes</b> de hacer ejercicios.</li>
   <li>Si te surge una duda puntual, usa el botón <b>Preguntar</b>: busca la respuesta en todo el material (sin internet) o prepara la búsqueda en la web. Lo que no se resuelva, guárdalo en <b>Mis dudas</b> para preguntarlo en clase.</li>
   <li>Pregúntale al docente qué formato tendrá el parcial (opción múltiple, ejercicios, desarrollo), si dará el formulario o las constantes (Ka, Kb, PM) y si permite calculadora. Ajusta tu práctica a esa respuesta.</li></ul>` },
 { h:`Paso 1 · Diagnóstico (20 minutos)`, go:[`simulacro`,`Ir a Simulacro`], html:`<p>Elige todos los temas (botón <b>+ Temas</b> → Todos) y en <b>Examen → Simulacro</b> haz uno de <b>20 preguntas</b> con las respuestas <b>al finalizar</b>. No estudies antes: el objetivo es saber dónde estás.</p>
   <p>Después abre <b>Inicio → Mi progreso</b>. Los temas con menos de 70 % son tu prioridad.</p>` },
 { h:`Paso 2 · Entender, tema por tema (del 15 al 21)`, go:[`repaso`,`Ir a Repaso`], html:`<p>Elige <b>un solo tema</b> a la vez, en orden. Los temas se apoyan unos en otros: no puedes calcular el pH del Tema 21 sin la molaridad del Tema 16.</p>
   <ol><li><b>Repaso:</b> va tarjeta por tarjeta. Lee, mira el dibujo, abre la página del PDF que indica y responde la pregunta <b>"Comprueba lo que leíste"</b> antes de pasar a la siguiente.</li>
   <li><b>Practicar → Laboratorio</b> (Temas 17 a 23): mueve los controles para ver qué pasa. Ejemplo: en el buffer, agrega ácido y compara con el agua pura.</li>
   <li>Explica el tema en voz alta, sin mirar, como si se lo enseñaras a alguien. Si te trabas, vuelve a la tarjeta.</li></ol>` },
 { h:`Paso 3 · Memorizar con fichas (10–15 minutos diarios)`, go:[`fichas`,`Ir a Fichas`], html:`<p>Responde en voz alta antes de voltear y sé honesta al calificarte. Las que fallas vuelven a salir; con tres aciertos seguidos quedan dominadas.</p>
   <p>Mejor 10 minutos todos los días que una hora el día anterior al examen.</p>` },
 { h:`Paso 4 · Aprender a identificar qué fórmula usar`, go:[`formula`,`Ir a ¿Qué fórmula uso?`], html:`<p>Es la habilidad que más puntos da en el parcial. Haz rondas hasta acertar <b>9 de cada 10</b>.</p>
   <p>Fíjate en las palabras clave: "molar", "molal", "normal", "hasta", "stock", "se gastaron", "Ka", "Kb", "y su sal", "neutralizar".</p>` },
 { h:`Paso 5 · Resolver ejercicios`, go:[`ejercicios`,`Ir a Ejercicios`], html:`<ol><li><b>Ejercicios:</b> empieza por los que dicen "ejemplo" o "ejercicio" en la fuente. Son los del docente y los más probables en el examen. Resuélvelos en el cuaderno y abre los pasos solo si te atascas.</li>
   <li><b>Práctica infinita:</b> cuando ya te salgan, haz al menos <b>5 seguidos correctos</b> de cada tipo. Los números cambian cada vez, así que no puedes memorizar el resultado.</li>
   <li>Escribe siempre: datos, fórmula, sustitución y resultado con unidades. Así se califica en el parcial.</li></ol>` },
 { h:`Paso 6 · Simular el examen`, go:[`impreso`,`Ir a Parcial impreso`], html:`<ol><li>En <b>Examen → Parcial impreso</b> genera un parcial, descarga solo el examen e imprímelo.</li>
   <li>Resuélvelo con tiempo (aproximadamente 1.5 minutos por pregunta de opción múltiple y 6 por ejercicio), sin apuntes.</li>
   <li>Después descarga la hoja de respuestas, califícate y anota las páginas de tus errores.</li>
   <li>Repasa esas páginas y practica tus fallos con el botón <b>Repasar fallos</b> de Inicio.</li></ol>` },
 { h:`Temas 22 y 23 (hidrocarburos): cómo estudiarlos`, go:[`practica`,`Ir a Práctica`], html:`<p>Aquí casi no hay cálculos: lo que más se evalúa es <b>nombrar y dibujar</b> compuestos y <b>relacionar estructura con propiedades</b>. Se aprende con práctica, no leyendo.</p>
   <ol><li>Aprende de memoria las raíces (met, et, prop, but, pent, hex, hept, oct) y los sufijos (-ano, -eno, -ino). Usa Fichas.</li>
   <li>Lee en Repaso las reglas IUPAC y el ejemplo 3-etil-2-metilhexano. Mira los videos de nomenclatura.</li>
   <li>En <b>Practicar → Práctica</b> haz "Nombrar alcanos ramificados" hasta acertar <b>10 seguidos</b>. Cada vez sale una molécula distinta; antes de elegir, cuenta la cadena más larga en el cuaderno.</li>
   <li>Practica también "Tipo de carbono" y "Hibridación y ángulo" hasta que salgan sin pensar.</li>
   <li>Usa el <b>Explorador de hidrocarburos</b> del Laboratorio para ver cómo cambian fórmula, estado y punto de ebullición.</li>
   <li>Dibuja a mano: cada ejercicio de nomenclatura escríbelo también al revés (del nombre a la estructura).</li></ol>` },
 { h:`Temas 24 y 25 (alquenos y alquinos): cómo estudiarlos`, go:[`practica`,`Ir a Práctica`], html:`<p>Son la continuación directa de los alcanos: mismas raíces, otras reglas de numeración. Lo que más se evalúa es <b>nombrar</b>, <b>reconocer cis/trans</b>, <b>clasificar</b> (dienos, terminal o interno, grado de sustitución) y <b>completar reacciones</b> sencillas.</p>
   <ol><li>Primero asegúrate de dominar los alcanos (Tema 23). Sin eso, aquí te vas a perder.</li>
   <li>Repaso de los Temas 24 y 25 con sus dibujos: compara siempre sp³ / sp² / sp, 109.5° / 120° / 180° y 0 / 1 / 2 enlaces π.</li>
   <li>En <b>Practicar → Práctica</b>: "Nombrar alquenos" y "Nombrar alquinos" hasta acertar <b>10 seguidos</b>; luego "¿Tiene isómeros cis/trans?", "Tipo de dieno", "Fórmula: ¿cuántos H?" y "Moles de H₂ para saturar".</li>
   <li>Ejercicios guiados: resuelve las moléculas de las págs. 2 y 3 del Tema 25 (diino y alquino con carbono cuaternario). Son de nivel parcial.</li>
   <li>Memoriza la tabla de reacciones: +H₂ → alcano; +Br₂ → dibromuro; +H₂O/H⁺ → alcohol (alquenos) o cetona (alquinos); terminal + NaH → acetiluro.</li>
   <li>Ojo con las erratas del material que están marcadas en Repaso (Tema 25, pág. 8: el etino es C₂H₂).</li></ol>` },
 { h:`Tema 26 (aromáticos): cómo estudiarlo`, go:[`practica`,`Ir a Práctica`], html:`<p>Tiene cuatro bloques que pueden salir en el parcial: <b>aromaticidad</b> (requisitos y Hückel), <b>reacciones</b> (SEA, adición forzada y oxidación), <b>nomenclatura</b> (mono, di, tri y fenilo) y <b>compuestos de interés clínico</b>.</p>
   <ol><li>Repaso con los dibujos: entiende por qué el benceno es tan estable (dos donas π, enlaces iguales de 1.39 Å). Eso explica por qué sustituye en vez de adicionar.</li>
   <li>Memoriza con Fichas los nombres comunes (tolueno, fenol, anilina, anisol, estireno, acetofenona, ácido benzoico) y la tabla de la SEA con sus catalizadores.</li>
   <li>En <b>Practicar → Práctica</b>: "Regla de Hückel", "¿Orto, meta o para?", "Nombrar bencenos disustituidos", "Nombres comunes" y "Producto de la reacción del benceno", hasta acertar <b>10 seguidos</b> en cada uno.</li>
   <li>Ejercicios guiados: los trisustituidos de la pág. 15 y los fenil-alcanos de la pág. 16. Lee las notas: el material tiene reglas que chocan entre sí y ahí se explica cuál gana.</li>
   <li>Para la parte clínica, aprende la ruta fenilalanina → tirosina → catecolaminas y T₃/T₄, y triptófano → serotonina → melatonina.</li></ol>` },
 { h:`Tema 27 (alcoholes y fenoles): cómo estudiarlo`, go:[`practica`,`Ir a Práctica`], html:`<p>Abre la Unidad VII (funciones oxigenadas). Lo más evaluable: <b>fórmulas generales</b>, <b>prioridad de funciones</b>, <b>nombrar alcoholes y fenoles</b> (con sus nombres comunes), <b>puente de hidrógeno</b>, <b>reacciones</b> y <b>orden de acidez</b>.</p>
   <ol><li>Repaso con los dibujos; lee las notas de los recuadros: el material dice que el fenol tiene pKa "mayor", y es <b>menor</b> (por eso es más ácido).</li>
   <li>Memoriza con Fichas la tabla de prioridad y los nombres comunes (isopropanol, glicerina, etilenglicol, cresoles, catecol, resorcinol, hidroquinona).</li>
   <li>En <b>Practicar → Práctica</b>: "Nombrar alcoholes", "Nombrar fenoles", "¿Qué función da el sufijo?", "Alcohol 1°, 2° o 3°" y "Combustión de alcoholes", hasta acertar <b>10 seguidos</b>.</li>
   <li>Ejercicios guiados: combustión con estequiometría (23 g de etanol → 44 g de CO₂) y predicción de productos de oxidación y deshidratación.</li>
   <li>Conecta con temas anteriores: la deshidratación da alquenos (Tema 24), la SEAr del fenol se compara con la del benceno (Tema 26) y el pKa es el del Tema 20.</li></ol>` },
 { h:`Tema 28 (éteres y epóxidos): cómo estudiarlo`, go:[`practica`,`Ir a Práctica`], html:`<p>Es corto y se apoya en el Tema 27: mismo tipo de fórmula (CₙH₂ₙ₊₂O) pero sin el H en el oxígeno. Lo más evaluable: <b>clasificar</b>, <b>nombrar</b> (alcoxi, común y cíclicos), <b>comparar con los alcoholes</b> (puente de hidrógeno) y las <b>reacciones</b>.</p>
   <ol><li>Repaso del Tema 28 con sus dibujos. Lee la nota del recuadro: el material confunde el punto de ebullición del éter dimetílico con el del dietílico.</li>
   <li>En <b>Práctica</b>: "Nombrar éteres (IUPAC)", "Clasificar éteres", "Nombrar éteres cíclicos" y "Combustión de éteres", hasta acertar <b>10 seguidos</b>.</li>
   <li>Memoriza la tabla de éteres comunes: éter dietílico (anestésico y solvente), óxido de etileno (esterilizante), THF (solvente), MTBE (gasolina).</li>
   <li>Ejercicio clave: escribe etanol y éter dimetílico (los dos C₂H₆O) y explica por qué el alcohol hierve 100 °C más alto.</li></ol>` },
 { h:`Plan sugerido de 7 días (ejemplo con los Temas 15 a 21)`, go:null, html:`<div class="scroll"><table class="tbl"><thead><tr><th>Día</th><th>Qué hacer</th></tr></thead><tbody>
   <tr><td>1</td><td>Diagnóstico. Temas 15 y 16: repaso, fichas y ejercicios de molaridad y normalidad.</td></tr>
   <tr><td>2</td><td>Temas 17 y 18: dilución, tonicidad, electrolitos e indicadores.</td></tr>
   <tr><td>3</td><td>Tema 19 y Tema 20: teorías, Kw, pH, pOH y pKa.</td></tr>
   <tr><td>4</td><td>Tema 21: ácidos y bases débiles, titulación y buffers. Es el tema con más cálculos; dale tiempo.</td></tr>
   <tr><td>5</td><td>Todos los temas mezclados: ¿Qué fórmula uso? y Práctica infinita en modo "Al azar".</td></tr>
   <tr><td>6</td><td>Parcial impreso completo con tiempo. Califícalo con la hoja de respuestas.</td></tr>
   <tr><td>7</td><td>Solo errores y fichas pendientes. Formulario. Descansa y duerme bien.</td></tr></tbody></table></div>
   <p>¿Tienes menos tiempo? Con 3 días: día 1, temas 15 a 18; día 2, temas 19 a 21; día 3, parcial impreso y errores.</p>` },
 { h:`Cada sesión de estudio (60–90 minutos)`, go:null, html:`<ol><li>10 min: fichas pendientes.</li><li>30 min: repaso y ejercicios del tema del día.</li><li>15 min: práctica infinita.</li><li>10 min: preguntas de opción múltiple del tema.</li><li>5 min: revisar Mi progreso y anotar qué repetir mañana.</li></ol><p>Con el <b>Pomodoro</b> de Inicio: 3 pomodoros de 25 minutos con descansos de 5 cubren esta sesión.</p>` },
 { h:`Cómo saber que estás lista`, go:[`progreso`,`Ir a Mi progreso`], html:`<ul><li>Sacas <b>8/10 o más</b> en dos simulacros seguidos con las respuestas al finalizar.</li>
   <li>Aciertas <b>9 de 10</b> en ¿Qué fórmula uso?</li>
   <li>Resuelves los ejercicios del Tema 21 sin abrir los pasos.</li>
   <li>Todas tus fichas están dominadas y tu lista de errores está vacía o casi.</li></ul>` },
 { h:`¿Basta con esta página para el parcial?`, go:null, html:`<p>Cubre el contenido de los 14 PDF del docente (Temas 15 a 28), pero <b>sola no alcanza</b>. Úsala junto con lo siguiente:</p>
   <ul><li><b>Tus apuntes de clase.</b> Las diapositivas son un resumen; el docente puede preguntar cosas que explicó en clase y no escribió.</li>
   <li><b>Práctica en papel.</b> Los ejercicios del parcial pueden venir con variaciones: dar el resultado y pedir un dato inicial, o combinar dos temas (por ejemplo, gramos → molaridad → pH). Por eso hay que resolver en el cuaderno y usar la Práctica infinita, que cambia los números cada vez.</li>
   <li><b>Información que solo da el docente:</b> el formato del examen, si dará las constantes (Ka, Kb, pesos moleculares) y qué calculadora se permite. Pregúntaselo.</li>
   <li><b>El material del docente manda.</b> Las preguntas de esta página se redactaron a partir de los PDF y los cálculos se revisaron, pero si alguna respuesta no coincide con el PDF o con lo dicho en clase, vale lo del docente.</li></ul>
   <p><b>En resumen:</b> esta página, el PDF abierto en la página indicada, tus apuntes y práctica en papel forman una preparación completa.</p>` }
];
function vGuia(v){
  v.append(el(`p`,`lead`, `Ruta recomendada para usar esta página desde cero hasta el día del parcial. Sigue los pasos en orden.`));
  const l = el(`div`,`list guia`);
  GUIA.forEach(g => {
    const c = el(`article`,`card plain gcard`);
    c.append(el(`h3`,``, g.h), el(`div`,``, g.html));
    if (g.go){ const r = el(`div`,`btnrow`); r.append(btn(g.go[1], `btn ghost`, () => { if (!S.sel.size) S.sel = new Set(TORDER); go(g.go[0]); })); c.append(r); }
    l.append(c);
  });
  v.append(l);
}
