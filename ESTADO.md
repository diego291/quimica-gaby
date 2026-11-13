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
- Temas 15–28 y 30–32: repaso, fichas, preguntas, ejercicios, videos, práctica y audio.
- Correcciones del material (errata) con aviso por ficha.
- Retroalimentación: diagnóstico, Mis fallos con repaso espaciado, Cómo evalúan, Simulacro.
- Dibujar: 7 lecciones, 8 ejercicios con editor táctil, Taller libre; núcleo con 738 pruebas.
## Decisiones tomadas
- Publicar directo a main, sin ramas ni PR: lo pidió Diego (ver CLAUDE.md).
- Historial de Gaby fuera del repo, cargado desde `historial-gaby.json`: el repo es público.
- Claves deducidas se marcan "probable/sin confirmar": el docente no publicó clave oficial.
## Pendiente (por prioridad)
1. Confirmar con el docente las claves del Parcial 1 (preguntas 24, 29 y 38).
2. Decidir si se borra el commit a85cb03 (tiene datos de Gaby; exige force push).
3. Cargar unidades 1–3 (átomo y enlace) y el Tema 29, si existe: faltan los PDF.
4. Pasar `historial-gaby.json` a Gaby para que lo cargue en cada dispositivo.
5. Probar Dibujar en una pantalla táctil física (solo se probó con emulador).
## Restricciones
- Cero datos privados (tokens, notas, respuestas, fotos, apellido de Gaby) en el repo.
- Sin force push ni reescribir historial sin permiso explícito de Diego.
## Última versión/commit publicado
App 2026.11.13-1036 · commit 06b6d0c (módulo Dibujar).
