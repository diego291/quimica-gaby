/* ======================= ILUSTRACIONES (SVG, se adaptan al tema claro/oscuro) ======================= */
/* Cada figura: { src, cap, svg } ; src = de dónde sale la idea en el material */
const FIG = (() => {
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" ${o.a ? `text-anchor="${o.a}"` : `text-anchor="middle"`} class="${o.c || `tx`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
  const beaker = (x, y, w, h, lvl, col, op = .22) =>
    `<rect x="${x + 2}" y="${y + h - lvl}" width="${w - 4}" height="${lvl - 2}" rx="5" style="fill:${col};opacity:${op}"/>` +
    `<path class="s" d="M${x - 5} ${y} L${x} ${y + 5} L${x} ${y + h - 7} Q${x} ${y + h} ${x + 7} ${y + h} L${x + w - 7} ${y + h} Q${x + w} ${y + h} ${x + w} ${y + h - 7} L${x + w} ${y + 5} L${x + w + 5} ${y}"/>`;
  const dots = (n, x, y, w, h, r, col, lab) => {
    let s = ``;
    for (let i = 0; i < n; i++) {
      const cx = x + r + rnd() * (w - 2 * r), cy = y + r + rnd() * (h - 2 * r);
      s += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" style="fill:${col}"/>`;
      if (lab) s += `<text x="${cx.toFixed(1)}" y="${(cy + r * 0.38).toFixed(1)}" text-anchor="middle" class="tw" style="font-size:${(r * 1.05).toFixed(1)}px">${lab}</text>`;
    }
    return s;
  };
  const arrow = (x1, y1, x2, y2, cls = `ar`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}" marker-end="url(#ah)"/>`;
  const defs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
  const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;

  const F = {};

  /* ---------- Tema 15 ---------- */
  seed = 11;
  F.particulas = { src: `Tema 15, pág. 3`, cap: `Solución verdadera frente a una mezcla heterogénea. En la solución no se ven partículas, no sedimenta y es transparente.`,
    svg: svg(560, 230,
      beaker(60, 40, 150, 140, 115, `var(--t17)`, .18) + dots(55, 66, 72, 138, 104, 1.6, `var(--t17)`) +
      T(135, 210, `Solución: 0.1–2.0 nm`, { c: `tb` }) + T(135, 26, `Homogénea, una fase`, { c: `tm` }) +
      `<line x1="10" y1="120" x2="250" y2="120" class="beam"/>` + T(270, 124, `luz pasa`, { a: `start`, c: `tm` }) +
      beaker(360, 40, 150, 140, 115, `var(--t15)`, .10) + dots(14, 368, 70, 134, 70, 6, `var(--t15)`) + dots(10, 366, 150, 138, 26, 6.5, `var(--t15)`) +
      T(435, 210, `Comparación: suspensión`, { c: `tb` }) + T(435, 26, `Partículas grandes, sedimentan`, { c: `tm` }),
      `Comparación entre solución y suspensión`) };

  F.solutoSolvente = { src: `Tema 15, pág. 4`, cap: `La regla es de cantidad: el componente mayoritario es el solvente. En el alcohol al 70 % el solvente es el etanol.`,
    svg: (() => { seed = 3; return svg(560, 220,
      beaker(50, 40, 170, 140, 120, `var(--t17)`, .14) + dots(12, 58, 66, 154, 108, 5, `var(--t15)`) + dots(60, 58, 66, 154, 108, 2.4, `var(--t17)`) +
      T(135, 26, `NaCl 0.9 %`, { c: `tb` }) + T(135, 205, `soluto NaCl · solvente agua`, { c: `tm` }) +
      beaker(340, 40, 170, 140, 120, `var(--t16)`, .14) + dots(40, 348, 66, 154, 108, 4, `var(--t16)`) + dots(18, 348, 66, 154, 108, 2.4, `var(--t17)`) +
      T(425, 26, `Etanol 70 %`, { c: `tb` }) + T(425, 205, `soluto agua · solvente etanol`, { c: `tm` }) +
      `<circle cx="262" cy="80" r="5" style="fill:var(--t15)"/>` + T(272, 84, `soluto`, { a: `start`, c: `tm` }) +
      `<circle cx="262" cy="105" r="3" style="fill:var(--t17)"/>` + T(272, 109, `agua`, { a: `start`, c: `tm` }) +
      `<circle cx="262" cy="130" r="4" style="fill:var(--t16)"/>` + T(272, 134, `etanol`, { a: `start`, c: `tm` }),
      `Soluto y solvente según cantidad`); })() };

  F.solubilidadT = { src: `Tema 15, pág. 6–7`, cap: `Sólidos: más temperatura, más solubilidad. Gases: al revés. Por eso una bebida gaseosa caliente pierde su gas.`,
    svg: svg(560, 240,
      `<line x1="70" y1="200" x2="520" y2="200" class="s"/><line x1="70" y1="200" x2="70" y2="30" class="s"/>` +
      T(295, 232, `Temperatura (°C) →`, { c: `tm` }) + `<text x="24" y="115" transform="rotate(-90 24 115)" text-anchor="middle" class="tm">Solubilidad →</text>` +
      `<path d="M80 180 C 200 160, 330 110, 510 45" class="ln" style="stroke:var(--t15)"/>` + T(420, 52, `Sólido (ej. KNO₃)`, { c: `tb`, a: `end` }) +
      `<path d="M80 60 C 200 110, 330 160, 510 185" class="ln" style="stroke:var(--t17)"/>` + T(505, 172, `Gas (ej. O₂, CO₂)`, { c: `tb`, a: `end` }),
      `Curvas de solubilidad frente a temperatura`) };

  F.velocidad = { src: `Tema 15, pág. 8`, cap: `Tres formas de acelerar la disolución: moler (más superficie), agitar y calentar. No cambian cuánto se disuelve, solo qué tan rápido.`,
    svg: svg(560, 200,
      `<rect x="40" y="70" width="60" height="60" rx="4" class="s" style="fill:var(--sunk)"/>` + arrow(110, 100, 150, 100) +
      dots(26, 160, 72, 70, 56, 4, `var(--t15)`) + T(135, 160, `1. Moler`, { c: `tb` }) + T(135, 180, `más superficie`, { c: `tm` }) +
      beaker(250, 50, 80, 100, 80, `var(--t17)`) + `<path d="M290 40 L290 120 M276 120 L304 120" class="s"/>` + `<path d="M268 112 q22 -14 44 0" class="ar" marker-end="url(#ah)"/>` +
      T(290, 172, `2. Agitar`, { c: `tb` }) +
      beaker(420, 40, 80, 100, 80, `var(--t17)`) + `<path d="M435 160 q6 -8 0 -16 q-6 -8 0 -16 M460 160 q6 -8 0 -16 q-6 -8 0 -16 M485 160 q6 -8 0 -16 q-6 -8 0 -16" class="ln" style="stroke:var(--t15);stroke-width:2.5"/>` +
      T(460, 185, `3. Calentar`, { c: `tb` }),
      `Factores que aceleran la disolución`) };

  /* ---------- Tema 16 ---------- */
  seed = 21;
  F.saturacion = { src: `Tema 16, pág. 3`, cap: `Insaturada: cabe más soluto. Saturada: llegó al máximo y lo extra queda en el fondo. Sobresaturada: tiene más del máximo; es inestable y cristaliza con un golpe o un cristal semilla.`,
    svg: svg(560, 220,
      beaker(40, 40, 130, 130, 105, `var(--t16)`, .12) + dots(10, 46, 72, 118, 92, 3, `var(--t16)`) + T(105, 200, `Insaturada`, { c: `tb` }) + T(105, 26, `cabe más`, { c: `tm` }) +
      beaker(215, 40, 130, 130, 105, `var(--t16)`, .26) + dots(34, 221, 72, 118, 80, 3, `var(--t16)`) + `<path d="M222 166 q12 -10 24 0 q12 -10 24 0 q12 -10 24 0 q12 -10 24 0 q12 -10 24 0" class="ln" style="stroke:var(--t16);fill:var(--t16)"/>` +
      T(280, 200, `Saturada`, { c: `tb` }) + T(280, 26, `máximo + exceso al fondo`, { c: `tm` }) +
      beaker(390, 40, 130, 130, 105, `var(--t16)`, .42) + dots(52, 396, 72, 118, 92, 3, `var(--t16)`) + T(455, 200, `Sobresaturada`, { c: `tb` }) + T(455, 26, `inestable`, { c: `tm` }),
      `Tres grados de saturación`) };

  F.molaridad = { src: `Tema 16, pág. 14–16`, cap: `La ruta de la molaridad: gramos → moles → molaridad. Si el volumen está en mL, primero pásalo a litros.`,
    svg: svg(560, 170,
      `<rect x="20" y="50" width="120" height="60" rx="10" class="bx"/>` + T(80, 78, `gramos`, { c: `tb` }) + T(80, 98, `(masa)`, { c: `tm` }) +
      arrow(145, 80, 210, 80) + T(178, 68, `÷ PM`, { c: `tk` }) +
      `<rect x="215" y="50" width="120" height="60" rx="10" class="bx"/>` + T(275, 78, `moles`, { c: `tb` }) + T(275, 98, `n = g / PM`, { c: `tm` }) +
      arrow(340, 80, 405, 80) + T(373, 68, `÷ L sol.`, { c: `tk` }) +
      `<rect x="410" y="50" width="130" height="60" rx="10" class="bx" style="stroke:var(--t16)"/>` + T(475, 78, `Molaridad`, { c: `tb` }) + T(475, 98, `M = mol / L`, { c: `tm` }) +
      T(280, 150, `mL → L: divide entre 1000 (500 mL = 0.5 L)`, { c: `tm` }),
      `Ruta de cálculo de la molaridad`) };

  F.molalidad = { src: `Tema 16, pág. 18–20`, cap: `Molaridad divide entre litros de SOLUCIÓN; molalidad entre kilogramos de SOLVENTE. Solo la molalidad usa el solvente.`,
    svg: svg(560, 220,
      `<path d="M95 30 L95 70 L60 170 Q58 182 72 182 L178 182 Q192 182 190 170 L155 70 L155 30" class="s"/><line x1="82" y1="110" x2="168" y2="110" class="s"/>` +
      `<path d="M78 120 L172 120 L188 172 Q190 180 178 180 L72 180 Q60 180 62 172 Z" style="fill:var(--t16);opacity:.22"/>` +
      T(125, 205, `M: moles / L de solución`, { c: `tb` }) + T(185, 108, `aforo`, { a: `start`, c: `tm` }) +
      `<rect x="340" y="150" width="160" height="16" rx="3" class="s" style="fill:var(--sunk)"/><rect x="400" y="166" width="40" height="20" class="s"/>` +
      beaker(370, 70, 100, 80, 60, `var(--t17)`) + T(420, 205, `m: moles / kg de solvente`, { c: `tb` }) + T(420, 55, `se pesa el agua`, { c: `tm` }),
      `Diferencia entre molaridad y molalidad`) };

  F.normalidad = { src: `Tema 16, pág. 22–26`, cap: `Para la normalidad cuenta cuántos H⁺ u OH⁻ "reactivos" aporta cada molécula: N = M × n.`,
    svg: svg(560, 200,
      T(90, 30, `HCl`, { c: `tb` }) + T(90, 50, `n = 1`, { c: `tk` }) + dots(0, 0, 0, 0, 0, 0) +
      `<circle cx="90" cy="110" r="28" style="fill:var(--t16);opacity:.25"/>` + `<circle cx="90" cy="70" r="11" style="fill:var(--t15)"/>` + T(90, 74, `H⁺`, { c: `tw`, fs: 11 }) + T(90, 115, `Cl`, { c: `tb` }) +
      T(280, 30, `H₂SO₄`, { c: `tb` }) + T(280, 50, `n = 2`, { c: `tk` }) +
      `<circle cx="280" cy="110" r="30" style="fill:var(--t16);opacity:.25"/>` + `<circle cx="252" cy="80" r="11" style="fill:var(--t15)"/><circle cx="308" cy="80" r="11" style="fill:var(--t15)"/>` + T(252, 84, `H⁺`, { c: `tw`, fs: 11 }) + T(308, 84, `H⁺`, { c: `tw`, fs: 11 }) + T(280, 115, `SO₄`, { c: `tb` }) +
      T(470, 30, `Ca(OH)₂`, { c: `tb` }) + T(470, 50, `n = 2`, { c: `tk` }) +
      `<circle cx="470" cy="110" r="28" style="fill:var(--t16);opacity:.25"/>` + `<circle cx="440" cy="138" r="13" style="fill:var(--t17)"/><circle cx="500" cy="138" r="13" style="fill:var(--t17)"/>` + T(440, 142, `OH⁻`, { c: `tw`, fs: 10 }) + T(500, 142, `OH⁻`, { c: `tw`, fs: 10 }) + T(470, 115, `Ca`, { c: `tb` }) +
      T(280, 188, `PE = PM / n      N = M × n`, { c: `tk` }),
      `Cómo contar n en normalidad`) };

  /* ---------- Tema 17 ---------- */
  F.dilucion = { src: `Tema 17, pág. 3–4`, cap: `Se toma V₁ del stock y se lleva hasta V₂ con solvente. Los moles de soluto no cambian; solo se reparten en más volumen.`,
    svg: (() => { seed = 33; return svg(560, 230,
      beaker(40, 50, 120, 140, 115, `var(--t17)`, .55) + dots(40, 46, 82, 108, 100, 3, `var(--t17)`) + T(100, 36, `Stock: C₁`, { c: `tb` }) +
      arrow(170, 110, 235, 110) + T(202, 98, `toma V₁`, { c: `tk` }) +
      `<path d="M310 30 L310 80 L268 180 Q265 192 280 192 L360 192 Q375 192 372 180 L330 80 L330 30" class="s"/><line x1="300" y1="95" x2="340" y2="95" class="s"/>` +
      `<path d="M298 100 L342 100 L370 178 Q372 188 360 188 L280 188 Q268 188 270 178 Z" style="fill:var(--t17);opacity:.2"/>` + dots(40, 282, 112, 76, 70, 3, `var(--t17)`) +
      T(320, 214, `Final: C₂ en V₂`, { c: `tb` }) + T(350, 92, `aforo = V₂`, { a: `start`, c: `tm` }) +
      `<rect x="400" y="60" width="150" height="100" rx="10" class="bx"/>` + T(475, 92, `C₁ × V₁ = C₂ × V₂`, { c: `tk` }) + T(475, 116, `C₂ < C₁ · V₂ > V₁`, { c: `tm` }) + T(475, 138, `agua = V₂ − V₁`, { c: `tm` }),
      `Dilución desde una solución stock`); })() };

  F.coligativas = { src: `Tema 17, pág. 9–10`, cap: `Las cuatro propiedades coligativas. Dependen del número de partículas; un electrolito como NaCl cuenta doble (i = 2).`,
    svg: svg(560, 190,
      `<rect x="10" y="20" width="125" height="130" rx="10" class="bx"/>` + T(72, 45, `1. Presión`, { c: `tb` }) + T(72, 62, `de vapor ↓`, { c: `tb` }) + arrow(50, 125, 50, 85) + arrow(95, 125, 95, 105) + T(72, 140, `menos evapora`, { c: `tm` }) +
      `<rect x="148" y="20" width="125" height="130" rx="10" class="bx"/>` + T(210, 45, `2. Ebullición ↑`, { c: `tb` }) + T(210, 100, `100 → >100 °C`, { c: `tk` }) + T(210, 140, `hierve más tarde`, { c: `tm` }) +
      `<rect x="286" y="20" width="125" height="130" rx="10" class="bx"/>` + T(348, 45, `3. Congelación ↓`, { c: `tb` }) + T(348, 100, `0 → <0 °C`, { c: `tk` }) + T(348, 140, `congela más tarde`, { c: `tm` }) +
      `<rect x="424" y="20" width="125" height="130" rx="10" class="bx"/>` + T(486, 45, `4. Presión`, { c: `tb` }) + T(486, 62, `osmótica`, { c: `tb` }) + `<line x1="486" y1="75" x2="486" y2="128" class="dash"/>` + arrow(456, 105, 482, 105) + T(486, 140, `frena la ósmosis`, { c: `tm` }) +
      T(280, 178, `Más partículas = más efecto (factor i de van 't Hoff)`, { c: `tm` }),
      `Las cuatro propiedades coligativas`) };

  const rbc = (cx, cy, k) => k === `n` ?
      `<ellipse cx="${cx}" cy="${cy}" rx="38" ry="24" style="fill:var(--t15);opacity:.85"/><ellipse cx="${cx}" cy="${cy}" rx="16" ry="9" style="fill:var(--t15);opacity:.45"/>`
    : k === `h` ? `<circle cx="${cx}" cy="${cy}" r="40" style="fill:var(--t15);opacity:.35"/><path d="M${cx + 28} ${cy - 28} l12 -12 M${cx + 38} ${cy - 6} l16 -2 M${cx + 22} ${cy - 38} l4 -16" class="ln" style="stroke:var(--t15)"/>`
    : `<path d="${(() => { let p = ``; for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2, r = i % 2 ? 22 : 34; p += (i ? `L` : `M`) + (cx + r * Math.cos(a)).toFixed(1) + ` ` + (cy + r * Math.sin(a) * .75).toFixed(1); } return p + `Z`; })()}" style="fill:var(--t15);opacity:.85"/>`;
  F.tonicidad = { src: `Tema 17, pág. 11–12`, cap: `HipO-tónico: el agua entra y la célula se hincha hasta romperse (hemólisis). HipER-tónico: el agua sale y se arruga (crenación).`,
    svg: svg(560, 220,
      rbc(95, 100, `n`) + arrow(40, 55, 70, 75) + arrow(150, 145, 120, 125) + T(95, 175, `Isotónico (NaCl 0.9 %)`, { c: `tb` }) + T(95, 195, `forma normal`, { c: `tm` }) +
      rbc(280, 100, `h`) + arrow(215, 60, 245, 80) + arrow(345, 60, 315, 80) + arrow(215, 140, 245, 120) + T(280, 175, `Hipotónico (agua)`, { c: `tb` }) + T(280, 195, `entra agua: hemólisis`, { c: `tm` }) +
      rbc(465, 100, `c`) + arrow(485, 85, 520, 55) + arrow(445, 115, 410, 145) + T(465, 175, `Hipertónico (NaCl 3 %)`, { c: `tb` }) + T(465, 195, `sale agua: crenación`, { c: `tm` }) +
      T(280, 22, `Flechas = movimiento neto del agua`, { c: `tm` }),
      `Efecto de la tonicidad en eritrocitos`) };

  /* ---------- Tema 18 ---------- */
  const bulb = (x, on) => `<circle cx="${x}" cy="45" r="16" class="s" style="fill:${on > 0 ? `var(--mark)` : `var(--surface)`}"/>` +
      (on > 1 ? `<path d="M${x - 26} 30 l-10 -8 M${x + 26} 30 l10 -8 M${x} 18 l0 -12 M${x - 22} 50 l-12 2 M${x + 22} 50 l12 2" class="ln" style="stroke:var(--t21)"/>` : on > 0 ? `<path d="M${x - 24} 34 l-8 -5 M${x + 24} 34 l8 -5" class="ln" style="stroke:var(--t21)"/>` : ``);
  F.conductividad = { src: `Tema 18, pág. 4–5`, cap: `La corriente en una solución viaja por iones. Muchos iones (electrolito fuerte): foco brillante. Pocos (débil): foco tenue. Ninguno: apagado.`,
    svg: (() => { seed = 44; const cell = (x, n, lab1, lab2, on) =>
      bulb(x + 60, on) + `<path d="M${x + 60} 61 L${x + 60} 80 M${x + 30} 80 L${x + 90} 80 M${x + 30} 80 L${x + 30} 120 M${x + 90} 80 L${x + 90} 120" class="s"/>` +
      beaker(x, 100, 120, 80, 62, `var(--t18)`, .16) + dots(n, x + 6, 122, 108, 52, 3.2, `var(--t18)`) + dots(Math.max(0, 8 - n / 4), x + 6, 122, 108, 52, 4.5, `var(--muted)`) +
      T(x + 60, 200, lab1, { c: `tb` }) + T(x + 60, 218, lab2, { c: `tm` });
      return svg(560, 228, cell(30, 40, `Fuerte (NaCl)`, `100 % iones`, 2) + cell(220, 8, `Débil (CH₃COOH)`, `pocos iones`, 1) + cell(410, 0, `No electrolito`, `azúcar: 0 iones`, 0), `Conductividad según tipo de electrolito`); })() };

  const IND = [[`Naranja de metilo`, 3.2, 4.4, `#D9352B`, `#F2C230`], [`Azul de bromotimol`, 6.0, 7.6, `#E8C93A`, `#2F5FB3`], [`Fenolftaleína`, 8.2, 10.0, `rgba(200,200,200,.25)`, `#D8288C`], [`Amarillo de alizarina`, 10.1, 12.0, `#EFD34A`, `#C8372C`]];
  F.indicadores = { src: `Tema 18, pág. 8`, cap: `Cada indicador tiene su color ácido a la izquierda del viraje y su color básico a la derecha. Los colores son reales del indicador; por eso no cambian con el tema de la página.`,
    svg: (() => { const x0 = 150, W = 390, px = p => x0 + p / 14 * W; let s = `<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker>`;
      IND.forEach((d, i) => { s += `<linearGradient id="gi${i}" x1="0" x2="1"><stop offset="0" stop-color="${d[3]}"/><stop offset="1" stop-color="${d[4]}"/></linearGradient>`; });
      s += `</defs>`;
      IND.forEach((d, i) => { const y = 20 + i * 42;
        s += T(x0 - 10, y + 17, d[0], { a: `end`, c: `tb`, fs: 13 }) +
          `<rect x="${x0}" y="${y}" width="${px(d[1]) - x0}" height="24" style="fill:${d[3]}"/>` +
          `<rect x="${px(d[1])}" y="${y}" width="${px(d[2]) - px(d[1])}" height="24" fill="url(#gi${i})"/>` +
          `<rect x="${px(d[2])}" y="${y}" width="${x0 + W - px(d[2])}" height="24" style="fill:${d[4]}"/>` +
          `<rect x="${x0}" y="${y}" width="${W}" height="24" class="s" style="fill:none;stroke-width:1"/>`; });
      for (let p = 0; p <= 14; p += 2) s += `<line x1="${px(p)}" y1="186" x2="${px(p)}" y2="192" class="s"/>` + T(px(p), 208, p, { c: `tm` });
      s += `<line x1="${x0}" y1="186" x2="${x0 + W}" y2="186" class="s"/>` + T(x0 + W / 2, 226, `pH`, { c: `tb` });
      return `<svg viewBox="0 0 560 234" role="img" aria-label="Rangos de viraje de indicadores">${s}</svg>`; })() };

  F.medirPH = { src: `Tema 18, pág. 9`, cap: `Formas de medir el pH en el laboratorio clínico: tira indicadora, pHmetro con electrodo, tira de orina y gasómetro (sangre arterial).`,
    svg: svg(560, 200,
      `<rect x="40" y="40" width="26" height="120" rx="3" class="s" style="fill:var(--surface)"/>` + [`#D9352B`, `#F08A2C`, `#EFD34A`, `#5DAA4B`, `#2F5FB3`].map((c, i) => `<rect x="44" y="${48 + i * 22}" width="18" height="16" style="fill:${c}"/>`).join(``) + T(53, 185, `Tira de pH`, { c: `tb` }) +
      `<rect x="160" y="40" width="110" height="80" rx="10" class="s" style="fill:var(--sunk)"/><rect x="175" y="55" width="80" height="34" rx="4" class="s" style="fill:var(--surface)"/>` + T(215, 79, `7.40`, { c: `tk` }) +
      `<path d="M270 80 Q300 80 300 110 L300 150" class="s"/><rect x="292" y="148" width="16" height="30" rx="7" class="s" style="fill:var(--t18);opacity:.5"/>` + T(230, 185, `pHmetro + electrodo`, { c: `tb` }) +
      `<rect x="370" y="80" width="170" height="20" rx="4" class="s" style="fill:var(--surface)"/>` + [`#EFD34A`, `#5DAA4B`, `#C8372C`, `#2F5FB3`, `#F08A2C`, `#8E5BB0`].map((c, i) => `<rect x="${430 + i * 17}" y="84" width="12" height="12" style="fill:${c}"/>`).join(``) +
      T(455, 125, `Tira de orina`, { c: `tb` }) + T(455, 145, `(almohadilla de pH)`, { c: `tm` }) + T(455, 185, `Gasometría: sangre 7.35–7.45`, { c: `tb` }),
      `Métodos para medir pH`) };

  /* ---------- Tema 19 ---------- */
  F.arrhenius = { src: `Tema 19, pág. 3–5`, cap: `Arrhenius: en agua, el ácido libera H⁺ y la base libera OH⁻. Al juntarse forman agua y una sal.`,
    svg: svg(560, 200,
      T(70, 50, `HCl`, { c: `tk` }) + arrow(105, 45, 170, 45) + T(137, 34, `agua`, { c: `tm` }) + `<circle cx="205" cy="45" r="16" style="fill:var(--t15)"/>` + T(205, 50, `H⁺`, { c: `tw` }) + T(245, 50, `+  Cl⁻`, { c: `tk` }) +
      T(70, 120, `NaOH`, { c: `tk` }) + arrow(105, 115, 170, 115) + T(137, 104, `agua`, { c: `tm` }) + T(195, 120, `Na⁺  +`, { c: `tk` }) + `<circle cx="248" cy="115" r="18" style="fill:var(--t17)"/>` + T(248, 120, `OH⁻`, { c: `tw` }) +
      `<rect x="330" y="55" width="210" height="70" rx="10" class="bx"/>` + T(435, 84, `H⁺ + OH⁻ → H₂O`, { c: `tk` }) + T(435, 108, `ácido + base → sal + agua`, { c: `tm` }) +
      T(280, 175, `Limitación: solo en agua; no explica el NH₃ (no tiene OH⁻)`, { c: `tm` }),
      `Teoría de Arrhenius`) };

  F.bronsted = { src: `Tema 19, pág. 6–8`, cap: `Brønsted-Lowry: el ácido dona un H⁺ y la base lo acepta. Cada lado tiene su par conjugado, que difiere en un solo H⁺.`,
    svg: svg(560, 210,
      T(60, 70, `NH₃`, { c: `tk` }) + T(110, 70, `+`, { c: `tk` }) + T(160, 70, `H₂O`, { c: `tk` }) + T(225, 70, `⇌`, { c: `tk` }) + T(300, 70, `NH₄⁺`, { c: `tk` }) + T(355, 70, `+`, { c: `tk` }) + T(410, 70, `OH⁻`, { c: `tk` }) +
      T(60, 98, `base`, { c: `tm` }) + T(160, 98, `ácido`, { c: `tm` }) + T(300, 98, `ácido conj.`, { c: `tm` }) + T(410, 98, `base conj.`, { c: `tm` }) +
      `<path d="M160 40 Q110 5 66 40" class="ar" marker-end="url(#ah)"/>` + T(113, 16, `H⁺`, { c: `tk` }) +
      `<path d="M60 112 Q180 175 300 112" class="ln" style="stroke:var(--t19)"/>` + T(180, 168, `par 1: NH₃ / NH₄⁺`, { c: `tb` }) +
      `<path d="M160 112 Q285 200 410 112" class="ln" style="stroke:var(--t18);stroke-dasharray:6 4"/>` + T(390, 175, `par 2: H₂O / OH⁻`, { c: `tb` }),
      `Pares conjugados de Brønsted-Lowry`) };

  F.lewis = { src: `Tema 19, pág. 9–10`, cap: `Lewis: la base dona un par de electrones y el ácido lo acepta en un orbital vacío. Se forma un enlace covalente coordinado.`,
    svg: svg(560, 190,
      T(110, 95, `F₃B`, { c: `tk`, fs: 26 }) + `<rect x="140" y="72" width="30" height="30" rx="6" class="dash"/>` + T(155, 125, `orbital vacío`, { c: `tm` }) +
      T(330, 95, `:NH₃`, { c: `tk`, fs: 26 }) + `<path d="M300 70 Q240 30 172 70" class="ar" marker-end="url(#ah)"/>` + T(240, 34, `par de e⁻`, { c: `tk` }) +
      T(110, 155, `ácido de Lewis (acepta)`, { c: `tb` }) + T(330, 155, `base de Lewis (dona)`, { c: `tb` }) +
      T(480, 95, `→ F₃B←NH₃`, { c: `tk`, fs: 18 }),
      `Teoría de Lewis`) };

  F.kw = { src: `Tema 19, pág. 11–13`, cap: `Kw es un sube y baja: si [H⁺] sube, [OH⁻] baja, y su producto siempre vale 1 × 10⁻¹⁴ a 25 °C.`,
    svg: svg(560, 200,
      `<path d="M260 160 L280 130 L300 160 Z" class="s" style="fill:var(--sunk)"/>` +
      `<line x1="110" y1="95" x2="450" y2="165" class="ln" style="stroke:var(--ink);stroke-width:4"/>` +
      `<circle cx="135" cy="72" r="24" style="fill:var(--t15)"/>` + T(135, 78, `H⁺`, { c: `tw` }) + T(135, 36, `ácido: [H⁺] ↑`, { c: `tb` }) +
      `<circle cx="430" cy="145" r="14" style="fill:var(--t17)"/>` + T(430, 150, `OH⁻`, { c: `tw`, fs: 10 }) + T(430, 110, `[OH⁻] ↓`, { c: `tb` }) +
      `<rect x="160" y="172" width="240" height="24" rx="6" class="bx"/>` + T(280, 189, `[H⁺] × [OH⁻] = 1 × 10⁻¹⁴`, { c: `tk`, fs: 14 }),
      `Equilibrio Kw del agua`) };

  /* ---------- Tema 20 ---------- */
  F.escalaPH = { src: `Tema 20, pág. 4 y 7; ejemplos de Tema 21, pág. 1`, cap: `Escala de pH con su [H⁺] y [OH⁻]. Cada unidad de pH es un cambio de 10 veces en la concentración de H⁺.`,
    svg: (() => { const x0 = 66, W = 464, px = p => x0 + p / 14 * W; const cols = [`#C2185B`, `#E53935`, `#F4511E`, `#FB8C00`, `#FDD835`, `#FFEE58`, `#E6EE9C`, `#F5F5F5`, `#C5E1A5`, `#81C784`, `#4DB6AC`, `#4FC3F7`, `#1E88E5`, `#3949AB`, `#283593`];
      let s = ``; for (let p = 0; p < 15; p++) { s += `<rect x="${px(p) - W / 28}" y="70" width="${W / 14}" height="34" style="fill:${cols[p]}"/>` + T(px(p), 92, p, { c: p > 11 || p < 2 ? `tw` : `tdark`, fs: 13 }); }
      s += `<rect x="${px(0) - W / 28}" y="70" width="${W + W / 14}" height="34" class="s" style="fill:none;stroke-width:1"/>`;
      s += T(px(1.5), 60, `ÁCIDO`, { c: `tb` }) + T(px(7), 60, `NEUTRO`, { c: `tb` }) + T(px(12.5), 60, `BÁSICO`, { c: `tb` });
      s += T(6, 128, `[H⁺] (M)`, { a: `start`, c: `tm`, fs: 11 }) + [0, 3, 7, 11, 14].map(p => T(px(p), 128, `10⁻${String(p).split(``).map(c => `⁰¹²³⁴⁵⁶⁷⁸⁹`[c]).join(``)}`.replace(`10⁻⁰`, `10⁰`), { c: `tk`, fs: 12 })).join(``);
      s += [[2, `limón`], [3, `vinagre`], [5, `café`], [7, `agua`], [7.4, `sangre`], [8.3, `bicarbonato`], [11, `amoníaco`], [12.6, `blanqueador`]].map((d, i) =>
        `<line x1="${px(d[0])}" y1="106" x2="${px(d[0])}" y2="${142 + (i % 2) * 22}" class="s" style="stroke-width:1"/>` + T(px(d[0]), 156 + (i % 2) * 22, d[1], { c: `tm`, fs: 11 })).join(``);
      s += T(280, 210, `pH 3 tiene 10 000 veces más H⁺ que pH 7`, { c: `tb` });
      return svg(560, 222, s, `Escala de pH`); })() };

  F.phPka = { src: `Tema 20, pág. 1`, cap: `Si el pH está por debajo del pKa predomina la forma ácida HA; por encima, la base conjugada A⁻. Cuando pH = pKa hay mitad y mitad.`,
    svg: (() => { seed = 55; return svg(560, 220,
      beaker(50, 40, 170, 130, 110, `var(--t20)`, .12) + dots(11, 58, 66, 154, 98, 9, `var(--t18)`, `HA`) + dots(3, 58, 66, 154, 98, 9, `var(--t15)`, `A⁻`) +
      T(135, 26, `pH < pKa`, { c: `tk` }) + T(135, 195, `[HA] > [A⁻]`, { c: `tb` }) + T(135, 213, `predomina el ácido`, { c: `tm` }) +
      T(280, 110, `HA ⇌ H⁺ + A⁻`, { c: `tk` }) +
      beaker(340, 40, 170, 130, 110, `var(--t20)`, .12) + dots(3, 348, 66, 154, 98, 9, `var(--t18)`, `HA`) + dots(11, 348, 66, 154, 98, 9, `var(--t15)`, `A⁻`) +
      T(425, 26, `pH > pKa`, { c: `tk` }) + T(425, 195, `[HA] < [A⁻]`, { c: `tb` }) + T(425, 213, `predomina la base conjugada`, { c: `tm` }),
      `Relación entre pH y pKa`); })() };

  F.fuerteDebil = { src: `Tema 20, pág. 8–9`, cap: `Ácido fuerte: todo el HA se convierte en H⁺ y A⁻ (flecha simple →). Ácido débil: casi todo queda como HA, menos del 5 % se ioniza (doble flecha ⇌).`,
    svg: (() => { const bar = (x, h, col, lab) => `<rect x="${x}" y="${170 - h}" width="34" height="${h}" style="fill:${col}"/>` + T(x + 17, 188, lab, { c: `tm`, fs: 12 });
      return svg(560, 230,
        T(140, 24, `Ácido FUERTE (HCl) →`, { c: `tb` }) + `<line x1="20" y1="170" x2="270" y2="170" class="s"/>` +
        bar(35, 120, `var(--t20)`, `HA inicio`) + bar(140, 2, `var(--t20)`, `HA`) + bar(180, 120, `var(--t15)`, `H⁺`) + bar(220, 120, `var(--t18)`, `A⁻`) + T(175, 214, `final: 100 % ionizado`, { c: `tm` }) +
        T(420, 24, `Ácido DÉBIL (CH₃COOH) ⇌`, { c: `tb` }) + `<line x1="300" y1="170" x2="550" y2="170" class="s"/>` +
        bar(315, 120, `var(--t20)`, `HA inicio`) + bar(420, 115, `var(--t20)`, `HA`) + bar(460, 6, `var(--t15)`, `H⁺`) + bar(500, 6, `var(--t18)`, `A⁻`) + T(460, 214, `final: < 5 % ionizado`, { c: `tm` }),
        `Disociación de ácido fuerte y débil`); })() };

  F.decisionPH = { src: `Tema 20, pág. 5–7`, cap: `Antes de calcular, pregúntate: ¿es ácido o base? ¿Es fuerte o débil? La respuesta decide la fórmula.`,
    svg: svg(560, 250,
      `<rect x="200" y="8" width="160" height="36" rx="18" class="bx"/>` + T(280, 31, `¿Ácido o base?`, { c: `tb` }) +
      arrow(240, 44, 140, 72) + arrow(320, 44, 420, 72) +
      `<rect x="60" y="74" width="160" height="34" rx="8" class="bx" style="stroke:var(--t15)"/>` + T(140, 96, `ÁCIDO`, { c: `tb` }) +
      `<rect x="340" y="74" width="160" height="34" rx="8" class="bx" style="stroke:var(--t17)"/>` + T(420, 96, `BASE`, { c: `tb` }) +
      arrow(110, 108, 70, 138) + arrow(170, 108, 210, 138) + arrow(390, 108, 350, 138) + arrow(450, 108, 490, 138) +
      `<rect x="4" y="140" width="128" height="62" rx="8" class="bx"/>` + T(68, 160, `Fuerte`, { c: `tb` }) + T(68, 180, `[H⁺] = C₀`, { c: `tk`, fs: 13 }) + T(68, 196, `pH = −log C₀`, { c: `tm`, fs: 12 }) +
      `<rect x="146" y="140" width="128" height="62" rx="8" class="bx"/>` + T(210, 160, `Débil`, { c: `tb` }) + T(210, 180, `[H⁺] = √(Ka·C₀)`, { c: `tk`, fs: 13 }) + T(210, 196, `pH = −log[H⁺]`, { c: `tm`, fs: 12 }) +
      `<rect x="286" y="140" width="128" height="62" rx="8" class="bx"/>` + T(350, 160, `Fuerte`, { c: `tb` }) + T(350, 180, `[OH⁻] = C₀ × n`, { c: `tk`, fs: 13 }) + T(350, 196, `pOH = −log[OH⁻]`, { c: `tm`, fs: 12 }) +
      `<rect x="428" y="140" width="128" height="62" rx="8" class="bx"/>` + T(492, 160, `Débil`, { c: `tb` }) + T(492, 180, `[OH⁻] = √(Kb·C₀)`, { c: `tk`, fs: 13 }) + T(492, 196, `pOH = −log[OH⁻]`, { c: `tm`, fs: 12 }) +
      T(280, 232, `Siempre al final: pH + pOH = 14`, { c: `tb` }),
      `Árbol de decisión para calcular pH`) };

  /* ---------- Tema 21 ---------- */
  F.ice = { src: `Tema 21, pág. 5–7`, cap: `Tabla ICE para un ácido débil: Inicio, Cambio, Equilibrio. La x que se ioniza es la [H⁺].`,
    svg: (() => { const c = [110, 250, 370, 480], r = [40, 80, 118, 156]; let s = ``;
      const rows = [[`Etapa`, `HA`, `H⁺`, `A⁻`], [`Inicio`, `C₀`, `0`, `0`], [`Cambio`, `−x`, `+x`, `+x`], [`Equilibrio`, `C₀ − x`, `x`, `x`]];
      s += `<rect x="30" y="18" width="510" height="156" rx="8" class="bx"/>`;
      [56, 96, 136].forEach(y => s += `<line x1="30" y1="${y + 2}" x2="540" y2="${y + 2}" class="s" style="stroke-width:1"/>`);
      rows.forEach((rw, i) => rw.forEach((v, j) => s += T(c[j], r[i], v, { c: i === 0 || j === 0 ? `tb` : `tk`, fs: 16 })));
      s += `<rect x="190" y="138" width="120" height="34" rx="6" style="fill:var(--mark);opacity:.6"/>` + T(250, r[3], `C₀ − x`, { c: `tk`, fs: 16 });
      s += T(285, 205, `Ka = x² / (C₀ − x)   →  si C₀/Ka > 400:  x ≈ √(Ka · C₀)`, { c: `tk`, fs: 15 });
      return svg(560, 220, s, `Tabla ICE`); })() };

  F.titulacion = { src: `Tema 21, pág. 10–11`, cap: `Montaje de una titulación: la bureta contiene el titulante (concentración conocida); el Erlenmeyer, el analito con su indicador.`,
    svg: svg(560, 290,
      `<rect x="40" y="270" width="200" height="10" rx="3" class="s" style="fill:var(--sunk)"/><line x1="70" y1="270" x2="70" y2="20" class="s" style="stroke-width:5"/>` +
      `<line x1="70" y1="120" x2="140" y2="120" class="s" style="stroke-width:4"/>` +
      `<rect x="138" y="20" width="18" height="170" rx="3" class="s" style="fill:var(--surface)"/><rect x="141" y="40" width="12" height="148" style="fill:var(--t17);opacity:.45"/>` +
      [50, 80, 110, 140, 170].map(y => `<line x1="138" y1="${y}" x2="146" y2="${y}" class="s" style="stroke-width:1"/>`).join(``) +
      `<path d="M147 190 L147 212" class="s"/><rect x="138" y="196" width="18" height="6" class="s" style="fill:var(--line2)"/>` +
      `<circle cx="147" cy="222" r="3" style="fill:var(--t17)"/>` +
      `<path d="M135 228 L135 236 L105 266 Q100 272 108 272 L186 272 Q194 272 189 266 L159 236 L159 228" class="s"/>` +
      `<path d="M120 252 L174 252 L189 266 Q194 272 186 272 L108 272 Q100 272 105 266 Z" style="fill:#D8288C;opacity:.55"/>` +
      `<line x1="160" y1="60" x2="250" y2="60" class="s" style="stroke-width:1"/>` + T(258, 64, `Bureta: titulante (ej. NaOH 0.100 M)`, { a: `start`, c: `tb` }) +
      `<line x1="195" y1="255" x2="250" y2="240" class="s" style="stroke-width:1"/>` + T(258, 236, `Erlenmeyer: analito + indicador`, { a: `start`, c: `tb` }) +
      T(258, 256, `(ej. HCl de concentración desconocida)`, { a: `start`, c: `tm` }) +
      `<line x1="160" y1="199" x2="250" y2="170" class="s" style="stroke-width:1"/>` + T(258, 166, `Llave: se abre gota a gota`, { a: `start`, c: `tb` }) +
      `<rect x="258" y="88" width="285" height="56" rx="10" class="bx"/>` + T(400, 112, `moles H⁺ = moles OH⁻`, { c: `tk` }) + T(400, 133, `Mₐ × Vₐ = M_b × V_b  (1:1)`, { c: `tm` }),
      `Montaje de titulación ácido-base`) };

  F.curvaTit = { src: `Tema 21, pág. 11 (forma de la curva: complementario [2])`, cap: `Titulación de ácido fuerte con base fuerte. El pH sube despacio, salta bruscamente cerca de la equivalencia y en ese punto vale 7.00.`,
    svg: (() => { const X = v => 70 + v / 50 * 460, Y = p => 200 - p / 14 * 180; let d = ``;
      for (let v = 0; v <= 50; v += .25) { const na = .1 * 25, nb = .1 * v, Vt = 25 + v; let pH; if (nb < na - 1e-9) pH = -Math.log10((na - nb) / Vt); else if (nb > na + 1e-9) pH = 14 + Math.log10((nb - na) / Vt); else pH = 7; d += (v ? `L` : `M`) + X(v).toFixed(1) + ` ` + Y(pH).toFixed(1); }
      let s = `<line x1="70" y1="200" x2="535" y2="200" class="s"/><line x1="70" y1="200" x2="70" y2="15" class="s"/>`;
      [0, 7, 14].forEach(p => s += T(58, Y(p) + 4, p, { a: `end`, c: `tm` }) + `<line x1="66" y1="${Y(p)}" x2="70" y2="${Y(p)}" class="s"/>`);
      [0, 25, 50].forEach(v => s += T(X(v), 218, `${v} mL`, { c: `tm` }));
      s += `<rect x="70" y="${Y(10)}" width="465" height="${Y(8.2) - Y(10)}" style="fill:#D8288C;opacity:.13"/>` + T(530, Y(10) - 4, `viraje fenolftaleína 8.2–10`, { a: `end`, c: `tm`, fs: 11 });
      s += `<line x1="70" y1="${Y(7)}" x2="535" y2="${Y(7)}" class="dash"/>` + `<path d="${d}" class="ln" style="stroke:var(--t21)"/>`;
      s += `<circle cx="${X(25)}" cy="${Y(7)}" r="6" style="fill:var(--t21)"/>` + T(X(25) + 12, Y(7) + 20, `punto de equivalencia: pH 7.00`, { a: `start`, c: `tb` });
      s += T(300, 240, `Volumen de NaOH agregado`, { c: `tm` }) + `<text x="24" y="110" transform="rotate(-90 24 110)" text-anchor="middle" class="tm">pH</text>`;
      return svg(560, 250, s, `Curva de titulación ácido fuerte con base fuerte`); })() };

  F.buffer = { src: `Tema 21, pág. 12`, cap: `El buffer tiene dos "guardias": la base conjugada A⁻ atrapa el H⁺ que entra y el ácido débil HA neutraliza el OH⁻. Por eso el pH casi no cambia.`,
    svg: svg(560, 240,
      beaker(200, 60, 160, 130, 110, `var(--t21)`, .16) +
      `<circle cx="245" cy="140" r="20" style="fill:var(--t18)"/>` + T(245, 145, `HA`, { c: `tw` }) +
      `<circle cx="315" cy="140" r="20" style="fill:var(--t15)"/>` + T(315, 145, `A⁻`, { c: `tw` }) + T(280, 215, `Buffer: HA + A⁻`, { c: `tb` }) +
      T(95, 40, `Entra ácido fuerte`, { c: `tb` }) + `<circle cx="95" cy="80" r="15" style="fill:var(--t20)"/>` + T(95, 85, `H⁺`, { c: `tw` }) + `<path d="M112 90 Q220 70 300 122" class="ar" marker-end="url(#ah)"/>` +
      T(95, 120, `A⁻ + H⁺ → HA`, { c: `tk`, fs: 14 }) + T(95, 140, `el pH apenas baja`, { c: `tm` }) +
      T(470, 40, `Entra base fuerte`, { c: `tb` }) + `<circle cx="470" cy="80" r="17" style="fill:var(--t17)"/>` + T(470, 85, `OH⁻`, { c: `tw`, fs: 11 }) + `<path d="M452 90 Q330 70 258 122" class="ar" marker-end="url(#ah)"/>` +
      T(470, 120, `HA + OH⁻ → A⁻ + H₂O`, { c: `tk`, fs: 14 }) + T(470, 140, `el pH apenas sube`, { c: `tm` }),
      `Mecanismo de una solución amortiguadora`) };

  F.hh = { src: `Tema 21, pág. 14–15`, cap: `Henderson-Hasselbalch: el pH del buffer es el pKa corregido por la proporción base/ácido. Si hay más base, el pH queda por encima del pKa.`,
    svg: (() => { const X = r => 280 + Math.log10(r) * 220; let s = `<line x1="60" y1="120" x2="500" y2="120" class="s"/>`;
      [[.1, `0.1`], [.5, `0.5`], [1, `1`], [1.5, `1.5`], [2, `2`], [10, `10`]].forEach(d => s += `<line x1="${X(d[0])}" y1="114" x2="${X(d[0])}" y2="126" class="s"/>` + T(X(d[0]), 144, d[1], { c: `tm` }));
      [[.1, `pKa − 1`], [1, `pH = pKa`], [10, `pKa + 1`]].forEach(d => s += T(X(d[0]), 100, d[1], { c: `tb` }));
      s += `<circle cx="${X(1.5)}" cy="120" r="7" style="fill:var(--t21)"/>` + T(X(1.5) + 10, 80, `0.30/0.20 = 1.5 → pH 4.92`, { a: `start`, c: `tk`, fs: 13 });
      s += T(280, 168, `[base conjugada] / [ácido débil]`, { c: `tm` });
      s += `<rect x="90" y="186" width="380" height="36" rx="8" class="bx"/>` + T(280, 210, `pH = pKa + log ( [A⁻] / [HA] )`, { c: `tk`, fs: 16 });
      s += T(280, 28, `Zona útil del buffer: pKa ± 1`, { c: `tb` }) + `<rect x="${X(.1)}" y="40" width="${X(10) - X(.1)}" height="8" rx="4" style="fill:var(--t21);opacity:.35"/>`;
      return svg(560, 232, s, `Ecuación de Henderson-Hasselbalch`); })() };

  F.sangre = { src: `Tema 21, pág. 2 (objetivo); valores de referencia: complementario [4]`, cap: `El tampón bicarbonato de la sangre. Si baja el HCO₃⁻ el pH cae (acidosis metabólica); si sube, el pH aumenta (alcalosis metabólica).`,
    svg: (() => { const X = p => 60 + (p - 6.9) / (7.9 - 6.9) * 440; let s = ``;
      s += `<rect x="${X(6.9)}" y="70" width="${X(7.35) - X(6.9)}" height="30" style="fill:var(--t15);opacity:.35"/>`;
      s += `<rect x="${X(7.35)}" y="70" width="${X(7.45) - X(7.35)}" height="30" style="fill:var(--t18);opacity:.6"/>`;
      s += `<rect x="${X(7.45)}" y="70" width="${X(7.9) - X(7.45)}" height="30" style="fill:var(--t17);opacity:.35"/>`;
      s += `<rect x="${X(6.9)}" y="70" width="${X(7.9) - X(6.9)}" height="30" class="s" style="fill:none;stroke-width:1"/>`;
      [7.0, 7.2, 7.35, 7.45, 7.6, 7.8].forEach(p => s += T(X(p), 120, p.toFixed(p === 7.35 || p === 7.45 ? 2 : 1), { c: `tm`, fs: 12 }));
      s += T((X(6.9) + X(7.35)) / 2, 60, `ACIDOSIS`, { c: `tb` }) + T(X(7.4), 60, `normal`, { c: `tb` }) + T((X(7.45) + X(7.9)) / 2, 60, `ALCALOSIS`, { c: `tb` });
      s += `<rect x="60" y="140" width="440" height="72" rx="8" class="bx"/>`;
      s += T(280, 164, `H₂CO₃ ⇌ H⁺ + HCO₃⁻`, { c: `tk` }) + T(280, 186, `HCO₃⁻ ↓ → pH ↓ (acidosis metabólica)`, { c: `tm`, fs: 13 }) + T(280, 204, `HCO₃⁻ ↑ → pH ↑ (alcalosis metabólica)`, { c: `tm`, fs: 13 });
      return svg(560, 222, s, `pH sanguíneo y tampón bicarbonato`); })() };

  return F;
})();
