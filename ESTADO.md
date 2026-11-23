# Estado del proyecto
## Qué es
App web de estudio de Química (Lab. Clínico, UES) para Gaby: repaso, práctica, simulacros, audio y retroalimentación.
Se publica en GitHub Pages; Diego carga el material tema por tema desde los PDF del docente.
## Stack y rutas clave
- Repo (público): https://github.com/diego291/quimica-gaby · Sitio: https://diego291.github.io/quimica-gaby
- Retomar en otro chat: leer https://raw.githubusercontent.com/diego291/quimica-gaby/main/ESTADO.md y .../main/CLAUDE.md
- Para publicar hace falta un token de GitHub (fine-grained, solo este repo, Contents: Read and write). NO está en el repo: Diego lo pega en el chat.
- JS/CSS puros. Editar solo `fuente/`; `python3 fuente/publicar.py` genera app.js, app.css, core.js, packs.js y sube la versión (sw.js).
- Temas: `fuente/material/tNN.js`. Módulos: `retro*.js`, `dib*.js`, `errata.js`. Audio en `audio/` (voz Piper es_MX-claude-high).
## Hecho (verificado y estable)
- Temas 15–28 y 30–36: repaso, fichas, preguntas, ejercicios, videos, práctica y audio.
- Tema 36 (proteínas) cargado: 15 apartados de repaso con 6 figuras, fichas, preguntas, ejercicios, formulario, 5 prácticas, guía, «Explícalo de otra forma» y grupo «Compuestos nitrogenados» del Simulacro. Sin audio ni videos (la pág. 15 solo trae un enlace de Drive del Lic.). Lo no incluido en las diapositivas va marcado «Complementario» (carga según pH/pI, electroforesis, Biuret). Avisos: textos cortados en pág. 4, 12 y 16; el índice anuncia «5. punto isoeléctrico» sin diapositiva propia (está en la pág. 14).
- Unidad VIII cargada: Tema 33 (aminas), 34 (aminoácidos) y 35 (péptidos): repaso con figuras, fichas, preguntas, ejercicios, formulario, 8 prácticas, guía y grupo «Compuestos nitrogenados» en el Simulacro. «Explícalo de otra forma» (31 fichas) y 1 video de apoyo en 33 y en 34 (sin comprobar que reproduzcan); sin audio Piper. Lo no incluido en las diapositivas va marcado «Complementario» (esenciales/no esenciales, ionización por pH, Biuret, hormonas peptídicas).
- Correcciones del material (errata) con aviso por ficha.
- Retroalimentación: diagnóstico, Mis fallos con repaso espaciado, Cómo evalúan, Simulacro.
- Dibujar: 7 lecciones, 8 ejercicios con editor táctil, Taller libre; núcleo con 738 pruebas.
- Dibujar rediseñado (propuestas A+C): ejercicios por pasos (Átomos → Enlaces → Electrones) con solo las herramientas del paso; Con/Sin ayuda (contador de electrones, cuentas por átomo y, en Lewis, esqueleto ya colocado); lienzo 360×300 con papel punteado (un punto por posición de ajuste), zonas táctiles mayores y barra Comprobar/Pista fija abajo. Taller libre sin cambios de flujo.
- Botón «Explícalo de otra forma» (junto a «Ver todas»): alterna un modo que reemplaza el texto de la pestaña Leer por una explicación distinta (pregunta previa, idea, por qué, ojo, pruébate) con dibujo propio; el dibujo del material se queda, se mantiene entre fichas y vuelve con «Ver ficha original». Cubre los Temas 15–28 y 30–35. Contenido en `fuente/otra.js` (Tema 24 + plantillas de dibujo `OTRAH`: flow, cmp, scale, chain) y `fuente/otra_tNN.js` (uno por tema; t17 incluye el 18). Es complementario, no del PDF. Si se agrega una ficha nueva, hay que escribir su entrada en `OTRA` (clave = título exacto) o el botón no aparece.
- Candidato a examen (Estudiar → Candidato): 25 puntos ordenados por un puntaje de 12 (guía del Lic. +4, formato ya usado +3, con desarrollo +2, une temas +2, objetiva recurrente +1), con filtro Hidrocarburos/Oxigenadas y pasos Comprender–Analizar–Trabajar con enlace a Repaso y Práctica. Datos en `fuente/candidato.js`. Basado en parciales 1 y 2, 3 cortos, la Discusión 1 y las 2 guías de la Unidad VI (solo estructura del examen, sin datos de Gaby).
## Decisiones tomadas
- Publicar directo a main, sin ramas ni PR: lo pidió Diego (ver CLAUDE.md).
- Historial de Gaby fuera del repo, cargado desde `historial-gaby.json`: el repo es público.
- Claves deducidas se marcan "probable/sin confirmar": el docente no publicó clave oficial.
## Pendiente (por prioridad)
1. Confirmar con el docente las claves del Parcial 1 (preguntas 24, 29 y 38).
2. Decidir si se borra el commit a85cb03 (tiene datos de Gaby; exige force push).
3. Cargar unidades 1–3 (átomo y enlace) y el Tema 29, si existe: faltan los PDF.
4. Pasar `historial-gaby.json` a Gaby para que lo cargue en cada dispositivo.
5. Probar Dibujar (rediseño con pasos y ayuda) en una pantalla táctil física: solo se probó con emulador a 390 px.
6. Generar el audio (Piper) de los Temas 33–36; revisar el enlace de Drive de la pág. 15 del Tema 36 (¿video?) y confirmar con el Lic. cómo espera «las proteínas no se disuelven» (coloidales) (no se pudo: falta la voz es_MX-claude-high); confirmar con el Lic. aminoácidos esenciales y el corte oligo/polipéptido (10 vs 11 aa); comprobar que reproducen los videos de apoyo de 33 y 34.
7. Actualizar el orden de Candidato cuando el Lic. entregue la guía de la Unidad VII o confirme qué temas entran al parcial 3.
## Restricciones
- Cero datos privados (tokens, notas, respuestas, fotos, apellido de Gaby) en el repo.
- Sin force push ni reescribir historial sin permiso explícito de Diego.
## Última versión/commit publicado
App 2026.11.23-1145 · Tema 36 (proteínas).
