/* ===================== RETROALIMENTACIÓN: ESTRUCTURA PÚBLICA =====================
   Aquí solo hay estructura y definiciones genéricas. El historial personal (notas, respuestas, fallos
   y patrones) NO está en este archivo ni en el sitio público: se carga desde un archivo y se guarda en
   S.x.rfd (el navegador y la cuenta de la estudiante). Lectura de marcas del docente: "—" correcta, "+" incorrecta. */

const RF_TEMAS = {
  atomo:{ n:`Átomo, isótopos y mol`, t:null },
  conf:{ n:`Configuración electrónica`, t:null },
  tabla:{ n:`Tabla periódica`, t:null },
  enlace:{ n:`Enlace químico y Lewis`, t:null },
  inter:{ n:`Fuerzas intermoleculares`, t:null },
  esteq:{ n:`Estequiometría y balanceo`, t:null },
  termo:{ n:`Cinética, termodinámica y enzimas`, t:null },
  sol:{ n:`Soluciones y solubilidad`, t:`t15` },
  conc:{ n:`Unidades de concentración`, t:`t16` },
  dil:{ n:`Dilución y coligativas`, t:`t17` },
  acb:{ n:`Ácidos y bases`, t:`t18` },
  ph:{ n:`pH y pOH`, t:`t20` },
  buf:{ n:`Buffers`, t:`t21` },
  lab:{ n:`Laboratorio práctico`, t:null }
};

const RF_CAUSAS = {
  inv:{ n:`Inversión de sentido`, e:`↕`, col:`#B45309`,
    def:`Respondes lo contrario de lo correcto: lo que sube lo pones bajando, o intercambias los datos del problema.`,
    senal:`El resultado no pasa la prueba de sentido: una dilución que concentra, más stock del que cabe en el volumen final, un pH ácido para una base.`,
    fix:`Antes de responder dibuja una flecha: ¿esto sube o baja? ¿Este dato es del stock o de la solución final? Al terminar, compara el resultado con el dato inicial.` },
  conf:{ n:`Conceptos o especies parecidas`, e:`≈`, col:`#7C3AED`,
    def:`Mezclas dos ideas que suenan o se escriben parecido: iónico y covalente, Z y N, H₂PO₄⁻ y HPO₄²⁻, mol y número de Avogadro.`,
    senal:`Eliges la opción que "suena conocida" y que comparte palabras con la correcta.`,
    fix:`Arma una tabla de dos columnas con la pregunta-llave de cada concepto (¿transfiere o comparte electrones? ¿cuenta protones o neutrones?) y repásala antes de cada examen.` },
  base:{ n:`Concepto sin base sólida`, e:`?`, col:`#DC2626`,
    def:`No tenías claro el mecanismo o la definición, así que elegiste por intuición.`,
    senal:`No puedes explicar el porqué con tus palabras, solo reconoces el término.`,
    fix:`Vuelve a la ficha del tema, explícala en voz alta en 3 frases y haz 5 preguntas del tema hasta acertarlas sin mirar.` },
  proc:{ n:`Procedimiento o fórmula mal aplicada`, e:`ƒ`, col:`#0F766E`,
    def:`Sabes la fórmula pero la aplicas con el dato equivocado o en el orden equivocado.`,
    senal:`Los números "cuadran" visualmente pero las unidades no (usaste gramos donde iban equivalentes).`,
    fix:`Escribe las unidades en cada paso y verifica que se cancelen: g ÷ (g/eq) = eq; eq ÷ L = N.` },
  omi:{ n:`Paso omitido`, e:`⤼`, col:`#2563EB`,
    def:`Hiciste bien casi todo y olvidaste un paso: dividir entre el volumen, multiplicar por los 2 OH⁻.`,
    senal:`El resultado es "casi" correcto y se queda a medio camino.`,
    fix:`Termina con una lista de verificación corta: ¿pasé a litros? ¿multipliqué por el número de H⁺ u OH⁻? ¿respondí lo que pide la pregunta?` },
  tiempo:{ n:`Sin responder o incompleto`, e:`⏱`, col:`#9333EA`,
    def:`Dejaste el problema en blanco o a medias.`,
    senal:`Los últimos ejercicios del examen quedan sin resolver.`,
    fix:`Reparte el tiempo (unos 2 minutos por pregunta en un parcial), resuelve primero lo de plantilla corta y deja siempre el planteamiento escrito.` },
  forma:{ n:`Forma y precisión`, e:`✎`, col:`#BE185D`,
    def:`La idea es correcta pero la respuesta pierde el punto por cómo está escrita: tachadura, respuesta incompleta, redondeo, falta de la magnitud.`,
    senal:`Tu respuesta "casi" dice lo correcto.`,
    fix:`Contesta con la estructura "qué + cómo se calcula + unidad". Evita tachar: piensa en el borrador y pasa en limpio. Redondea, no trunques.` },
  lab:{ n:`Vocabulario y observación de laboratorio`, e:`⚗`, col:`#4D7C0F`,
    def:`No recuerdas el nombre exacto de un instrumento o lo que se observó en una práctica.`,
    senal:`Respondes con un nombre genérico o inviertes un color o un resultado.`,
    fix:`Después de cada práctica haz una tarjeta por experimento: material, qué observaste, por qué. Repásalas antes del corto.` }
};


/* ---------- Datos personales: vacíos hasta que se cargue el archivo ---------- */
let RF_EVALS = [], RF_HIST = [], RF_FALLOS = [], RF_PATRONES = [], RF_FAMILIAS = [];
let RF_PERFIL = { estructura:[], estilos:[], distractores:[], siguiente:[] };
const RF_FALLO = id => RF_FALLOS.find(f => f.id === id);
const rfTieneDatos = () => RF_HIST.length > 0 && RF_EVALS.length > 0;
/* quita etiquetas HTML de todo texto cargado: el contenido del archivo nunca se interpreta como código */
function rfLimpia(x){ if (typeof x === `string`) return x.replace(/<\/?[a-zA-Z!][^>]*>/g, ``); if (Array.isArray(x)) return x.map(rfLimpia); if (x && typeof x === `object`){ const r = {}; Object.keys(x).forEach(k => { r[k] = rfLimpia(x[k]); }); return r; } return x; }
function rfValida(d){
  if (!d || typeof d !== `object`) return `El archivo no tiene el formato esperado.`;
  for (const k of [`evals`,`hist`,`fallos`,`patrones`,`familias`]) if (!Array.isArray(d[k]) || !d[k].length) return `Falta la sección "${k}".`;
  if (!d.evals.every(e => e && e.id && typeof e.nota === `number` && e.corto)) return `Alguna evaluación está incompleta.`;
  if (!d.hist.every(h => h && h.ev && h.tm && RF_TEMAS[h.tm] && typeof h.ok === `number`)) return `Alguna fila del historial no es válida.`;
  if (!d.fallos.every(f => f && f.id && f.q && f.por && RF_CAUSAS[f.causa])) return `Algún fallo no es válido.`;
  return ``;
}
function rfAplicar(d){
  if (!d || rfValida(d)){ RF_EVALS = []; RF_HIST = []; RF_FALLOS = []; RF_PATRONES = []; RF_FAMILIAS = []; RF_PERFIL = { estructura:[], estilos:[], distractores:[], siguiente:[] }; return false; }
  const c = rfLimpia(d); RF_EVALS = c.evals; RF_HIST = c.hist; RF_FALLOS = c.fallos; RF_PATRONES = c.patrones; RF_FAMILIAS = c.familias;
  RF_PERFIL = Object.assign({ estructura:[], estilos:[], distractores:[], siguiente:[] }, c.perfil || {}); return true;
}

/* ---------- Estadísticas derivadas ---------- */
const rfNotaCalc = ev => { const r = RF_HIST.filter(x => x.ev === ev); const p = r.reduce((s, x) => s + x.ok, 0); return { pts:p, tot:r.length, nota:+(p / r.length * 10).toFixed(1) }; };
const rfFechaOrd = e => e.f || `9999`;
const rfPorTema = () => { const m = {}; RF_HIST.forEach(x => { const a = m[x.tm] || (m[x.tm] = { tm:x.tm, ok:0, n:0 }); a.ok += x.ok; a.n++; }); return Object.values(m).map(a => Object.assign(a, { err:1 - a.ok / a.n })).sort((a, b) => b.err - a.err); };
const rfPorNivel = () => { const m = { r:{ n:0, ok:0 }, c:{ n:0, ok:0 }, a:{ n:0, ok:0 } }; RF_HIST.filter(x => x.tipo === `o`).forEach(x => { m[x.lv].n++; m[x.lv].ok += x.ok; }); return m; };
const rfClaves = () => { const c = { A:0, B:0, C:0, D:0, n:0 }, w = { A:0, B:0, C:0, D:0, n:0 }; RF_HIST.filter(x => x.tipo === `o`).forEach(x => { if (x.k){ c[x.k]++; c.n++; } if (!x.ok){ w[x.r]++; w.n++; } }); return { claves:c, falladas:w }; };
