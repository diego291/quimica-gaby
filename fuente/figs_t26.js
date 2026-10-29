/* ======================= ILUSTRACIONES: HIDROCARBUROS AROMÁTICOS ======================= */
(() => {
  const { ring } = AR;
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tx`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
  const defs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
  const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
  const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
  const arrow = (x1, y, x2) => `<line x1="${x1}" y1="${y}" x2="${x2 - 4}" y2="${y}" class="ar" marker-end="url(#ah)"/>`;
  const C = `var(--t26)`;

  FIG.bencenoDona = { src:`Tema 26, pág. 2, 4 y 9`, cap:`Cada carbono del benceno tiene un orbital p sin hibridar. Los seis orbitales p se traslapan de lado y forman dos "donas" de electrones π, una arriba y otra abajo del anillo: los electrones no están fijos en un enlace, se mueven por todo el anillo (deslocalización).`,
    svg: (() => { let s = ``;
      const flat = (cx, cy, r) => [0, 1, 2, 3, 4, 5].map(i => { const a = (60 * i) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * .38 * Math.sin(a)]; });
      const hexp = P => `<path d="${P.map((p, i) => (i ? `L` : `M`) + p[0].toFixed(1) + ` ` + p[1].toFixed(1)).join(``)}Z" class="s"/>`;
      const A = flat(140, 130, 78);
      A.forEach(p => s += `<ellipse cx="${p[0].toFixed(1)}" cy="${(p[1] - 26).toFixed(1)}" rx="9" ry="24" style="fill:${C};opacity:.3;stroke:${C};stroke-width:1.2"/><ellipse cx="${p[0].toFixed(1)}" cy="${(p[1] + 26).toFixed(1)}" rx="9" ry="24" style="fill:${C};opacity:.3;stroke:${C};stroke-width:1.2"/>`);
      s += hexp(A); A.forEach(p => s += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="5" style="fill:var(--ink)"/>`);
      s += T(140, 34, `6 orbitales p paralelos`, { c:`tb` });
      s += arrow(250, 130, 310);
      const B = flat(420, 130, 78);
      s += `<ellipse cx="420" cy="100" rx="82" ry="24" style="fill:none;stroke:${C};stroke-width:14;opacity:.3"/>`;
      s += hexp(B); B.forEach(p => s += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="5" style="fill:var(--ink)"/>`);
      s += `<ellipse cx="420" cy="160" rx="82" ry="24" style="fill:none;stroke:${C};stroke-width:14;opacity:.3"/>`;
      s += T(420, 34, `2 "donas" de electrones π`, { c:`tb` }) + T(520, 96, `arriba`, { a:`start`, c:`tm` }) + T(520, 170, `abajo`, { a:`start`, c:`tm` });
      s += T(280, 228, `6 electrones π deslocalizados · todos los C son sp² · ángulos de 120°`, { c:`tm` });
      return svg(560, 240, s, `Orbitales p y nube de electrones pi del benceno`); })() };

  FIG.requisitos = { src:`Tema 26, pág. 3`, cap:`Los cuatro requisitos deben cumplirse todos. Si falla uno solo, el compuesto no es aromático. La regla de Hückel se revisa al final: el número de electrones π debe dar un n entero.`,
    svg: (() => { let s = ``; const req = [[`1`, `Cíclico`, `anillo cerrado`], [`2`, `Plano`, `todos en un plano`], [`3`, `Conjugado`, `un orbital p en cada átomo`], [`4`, `Hückel`, `4n + 2 electrones π`]];
      req.forEach((r, i) => { const x = 20 + i * 132; s += `<rect x="${x}" y="20" width="122" height="70" rx="8" class="bx" style="stroke:${C}"/>` + `<circle cx="${x + 18}" cy="40" r="11" style="fill:${C}"/>` + T(x + 18, 45, r[0], { c:`tw` }) + T(x + 70, 46, r[1], { c:`tb` }) + T(x + 61, 74, r[2], { c:`tm`, fs:11 }); });
      const rows = [[0, 2], [1, 6], [2, 10], [3, 14]];
      s += T(280, 122, `Números de electrones π que cumplen Hückel`, { c:`tb` });
      rows.forEach((r, i) => { const x = 70 + i * 120; s += `<rect x="${x - 45}" y="134" width="90" height="46" rx="8" style="fill:${r[1] === 6 ? C : `var(--sunk)`};opacity:${r[1] === 6 ? .25 : 1};stroke:var(--line2)"/>` + T(x, 152, `n = ${r[0]}`, { c:`tm` }) + T(x, 172, `${r[1]} e⁻ π`, { c:`tb` }); });
      s += T(280, 206, `Benceno: 4n + 2 = 6 → 4n = 4 → n = 1 (entero) ✔ aromático`, { c:`tx`, fs:14 });
      s += T(280, 228, `Con 8 e⁻ π: 4n + 2 = 8 → n = 1.5 (no entero) ✘ no cumple`, { c:`tm` });
      return svg(560, 240, s, `Requisitos de aromaticidad y regla de Hückel`); })() };

  FIG.longitudes = { src:`Tema 26, pág. 4–5`, cap:`En el benceno los seis enlaces C−C miden lo mismo, 1.39 Å: un valor intermedio entre el sencillo y el doble. Por eso no hay "dobles enlaces fijos": los electrones están repartidos.`,
    svg: (() => { let s = ``; const d = [[`C−C sencillo (alcano)`, 1.54, `var(--t23)`], [`C−C del benceno`, 1.39, C], [`C=C doble (alqueno)`, 1.34, `var(--t24)`], [`C≡C triple (alquino)`, 1.20, `var(--t25)`]];
      d.forEach((r, i) => { const y = 34 + i * 44, w = (r[1] - 1) * 470; s += T(200, y + 15, r[0], { a:`end`, c:i === 1 ? `tb` : `tx`, fs:13.5 }) + `<rect x="212" y="${y}" width="${w.toFixed(0)}" height="22" rx="4" style="fill:${r[2]}"/>` + T(220 + w, y + 16, `${r[1].toFixed(2)} Å`, { a:`start`, c:`tb` }); });
      s += T(280, 214, `Entre más enlaces, más corto. El benceno queda entre el sencillo y el doble.`, { c:`tm` });
      return svg(560, 226, s, `Longitudes de enlace C-C`); })() };

  FIG.representaciones3 = { src:`Tema 26, pág. 11`, cap:`Tres formas de dibujar el mismo benceno (C₆H₆): con todos sus átomos, lineangular con dobles enlaces alternados (Kekulé) y con un círculo que representa los electrones deslocalizados.`,
    svg: (() => { let s = ``;
      const full = (cx, cy, r) => { let m = ring(cx, cy, r, {}, { mode:`kek` }); for (let i = 0; i < 6; i++){ const p = AR.V(cx, cy, r, i); m += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="9" style="fill:var(--surface)"/>` + T(p[0].toFixed(1), (p[1] + 5).toFixed(1), `C`, { c:`tb`, fs:13 }); const q = [p[0] + p[2] * 34, p[1] + p[3] * 34]; m += ln((p[0] + p[2] * 10).toFixed(1), (p[1] + p[3] * 10).toFixed(1), (p[0] + p[2] * 24).toFixed(1), (p[1] + p[3] * 24).toFixed(1)) + T(q[0].toFixed(1), (q[1] + 5).toFixed(1), `H`, { c:`tx`, fs:13 }); } return m; };
      s += full(95, 110, 46) + ring(280, 110, 50, {}, { mode:`kek` }) + ring(465, 110, 50, {}, { mode:`circle` });
      s += T(95, 210, `Desarrollada`, { c:`tb` }) + T(280, 210, `Kekulé (lineangular)`, { c:`tb` }) + T(465, 210, `Con círculo`, { c:`tb` });
      s += T(280, 234, `Como cicloalqueno, su nombre IUPAC sería 1,3,5-ciclohexatrieno (ciclohexa-1,3,5-trieno)`, { c:`tm` });
      return svg(560, 246, s, `Tres representaciones del benceno`); })() };

  FIG.seaReacciones = { src:`Tema 26, pág. 7`, cap:`Sustitución electrófila aromática (SEA): un electrófilo (E⁺) entra en lugar de un H y el anillo aromático se conserva. Cambian el reactivo y el catalizador; el resultado siempre es "benceno con un grupo nuevo".`,
    svg: (() => { let s = ``;
      s += ring(60, 66, 24, { 0:`H` }, { len:12, fs:14 }) + T(118, 72, `+ E⁺`, { c:`tk` }) + arrow(150, 66, 210) + ring(260, 66, 24, { 0:`E` }, { len:12, fs:14 }) + T(320, 72, `+ H⁺`, { c:`tk` }) + T(440, 62, `el anillo no se rompe`, { c:`tb` }) + T(440, 80, `(se sustituye un H)`, { c:`tm` });
      const rows = [[`Halogenación`, `Cl₂ o Br₂`, `FeCl₃ / FeBr₃`, `−Cl → clorobenceno`], [`Nitración`, `HNO₃`, `H₂SO₄`, `−NO₂ → nitrobenceno`], [`Sulfonación`, `H₂SO₄ (SO₃)`, `reversible`, `−SO₃H → ác. bencenosulfónico`], [`Alquilación F-C`, `R−X`, `AlCl₃`, `−R → alquilbenceno (cumeno)`], [`Acilación F-C`, `R−CO−Cl`, `AlCl₃`, `−COR → acetofenona`]];
      s += ln(20, 112, 540, 112, `dash`);
      s += T(20, 134, `Reacción`, { a:`start`, c:`tm` }) + T(145, 134, `Reactivo`, { a:`start`, c:`tm` }) + T(245, 134, `Catalizador`, { a:`start`, c:`tm` }) + T(345, 134, `Grupo que entra → producto`, { a:`start`, c:`tm` });
      rows.forEach((r, i) => { const y = 160 + i * 28; s += T(20, y, r[0], { a:`start`, c:`tb` }) + T(145, y, r[1], { a:`start`, fs:13.5 }) + T(245, y, r[2], { a:`start`, fs:13.5 }) + T(345, y, r[3], { a:`start`, fs:12.5 }); });
      return svg(560, 292, s, `Reacciones de sustitución electrófila aromática`); })() };

  FIG.adicionOx = { src:`Tema 26, pág. 8`, cap:`El benceno solo hace adiciones en condiciones forzadas (presión, temperatura o luz UV) porque pierde la aromaticidad. Resiste a los oxidantes, pero si tiene una cadena lateral con H bencílico, esa cadena se oxida a −COOH.`,
    svg: (() => { let s = ``;
      s += ring(50, 52, 24) + T(120, 58, `+ 3 H₂`, { c:`tk` }) + arrow(160, 52, 240) + T(200, 42, `Ni o Pt, P y T°`, { c:`tm`, fs:11 }) + ring(290, 52, 24, {}, { mode:`none` }) + T(330, 58, `ciclohexano`, { a:`start`, c:`tb` });
      s += ln(20, 98, 540, 98, `dash`);
      s += ring(50, 142, 24) + T(120, 148, `+ 3 Cl₂`, { c:`tk` }) + arrow(160, 142, 240) + T(200, 132, `luz UV (hν)`, { c:`tm`, fs:11 }) + ring(290, 142, 24, {}, { mode:`none` }) + T(330, 140, `hexaclorociclohexano`, { a:`start`, c:`tb` }) + T(330, 158, `(un Cl y un H en cada C)`, { a:`start`, c:`tm` });
      s += ln(20, 182, 540, 182, `dash`);
      s += ring(50, 250, 24, { 0:`CH₃` }, { len:14, fs:14 }) + T(120, 256, `KMnO₄`, { c:`tk` }) + arrow(160, 250, 240) + T(200, 240, `oxidación`, { c:`tm`, fs:11 }) + ring(290, 250, 24, { 0:`COOH` }, { len:14, fs:14 }) + T(330, 248, `ácido benzoico`, { a:`start`, c:`tb` }) + T(330, 266, `(el anillo queda intacto)`, { a:`start`, c:`tm` });
      return svg(560, 290, s, `Adición y oxidación en compuestos aromáticos`); })() };

  FIG.tiposArom = { src:`Tema 26, pág. 10 y 9`, cap:`Monocíclicos: un anillo. Policíclicos (HAP): anillos fusionados que comparten carbonos. Heterocíclicos: el anillo incluye N, O o S y sigue siendo aromático.`,
    svg: (() => { let s = ``, r = 26, dx = r * Math.sqrt(3);
      s += ring(60, 80, r) + T(60, 140, `benceno`, { c:`tb` }) + T(60, 156, `C₆H₆`, { c:`tm` });
      s += ring(170, 80, r) + ring(170 + dx, 80, r) + T(170 + dx / 2, 140, `naftaleno`, { c:`tb` }) + T(170 + dx / 2, 156, `C₁₀H₈`, { c:`tm` });
      s += ring(300, 80, r) + ring(300 + dx, 80, r) + ring(300 + 2 * dx, 80, r) + T(300 + dx, 140, `antraceno`, { c:`tb` }) + T(300 + dx, 156, `C₁₄H₁₀`, { c:`tm` });
      s += ring(130, 220, r, {}, { mode:`kek`, N:3 }) + T(130, 278, `piridina C₅H₅N`, { c:`tb` });
      const pent = (cx, cy, rr) => { const P = [0, 1, 2, 3, 4].map(i => { const a = (-90 + 72 * i) * Math.PI / 180; return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)]; });
        let m = `<path d="${P.map((p, i) => (i ? `L` : `M`) + p[0].toFixed(1) + ` ` + p[1].toFixed(1)).join(``)}Z" class="s"/>`;
        [[1, 2], [3, 4]].forEach(([a, b]) => { const sh = p => [cx + (p[0] - cx) * .72, cy + (p[1] - cy) * .72]; const A = sh(P[a]), B = sh(P[b]); m += ln(A[0].toFixed(1), A[1].toFixed(1), B[0].toFixed(1), B[1].toFixed(1)); });
        m += `<circle cx="${P[0][0].toFixed(1)}" cy="${P[0][1].toFixed(1)}" r="9" style="fill:var(--surface)"/>` + T(P[0][0].toFixed(1), (P[0][1] + 5).toFixed(1), `O`, { c:`tb`, fs:14 }); return m; };
      s += pent(320, 222, 28) + T(320, 278, `furano C₄H₄O`, { c:`tb` });
      s += T(530, 80, `Mono y policíclicos`, { a:`end`, c:`tm` }) + T(530, 222, `Heterocíclicos`, { a:`end`, c:`tm` }) + ln(20, 180, 540, 180, `dash`);
      return svg(560, 292, s, `Tipos de estructuras aromáticas`); })() };

  FIG.omp = { src:`Tema 26, pág. 12 y 14`, cap:`Con dos sustituyentes se numera desde uno de ellos. Orto = posiciones 1,2 (vecinos); meta = 1,3 (uno en medio); para = 1,4 (opuestos). Truco del material: "La ORTOgrafía es la META PARA aprobar".`,
    svg: (() => { let s = ``; const d = [[`orto (o-)`, `1,2`, 1, `1,2-diclorobenceno`], [`meta (m-)`, `1,3`, 2, `1,3-diclorobenceno`], [`para (p-)`, `1,4`, 3, `1,4-diclorobenceno`]];
      d.forEach((r, i) => { const cx = 95 + i * 185; s += ring(cx, 104, 36, { 0:`Cl`, [r[2]]:`Cl` }, { nums:{ 0:1, 1:2, 2:3, 3:4, 4:5, 5:6 } });
        s += T(cx, 196, r[0], { c:`tb`, fs:15 }) + T(cx, 214, `posiciones ${r[1]}`, { c:`tm` }) + T(cx, 232, r[3], { c:`tm`, fs:11.5 }); });
      return svg(560, 244, s, `Posiciones orto, meta y para`); })() };

  FIG.monosust = { src:`Tema 26, pág. 12–13`, cap:`Monosustituidos: nombre del sustituyente + "benceno" (bromobenceno, nitrobenceno, etilbenceno). Varios tienen nombres comunes aceptados por la IUPAC que conviene memorizar.`,
    svg: (() => { let s = ``; const d = [[`CH₃`, `tolueno`, `metilbenceno`], [`OH`, `fenol`, `hidroxibenceno`], [`NH₂`, `anilina`, `aminobenceno`], [`COOH`, `ácido benzoico`, ``], [`O−CH₃`, `anisol`, `metoxibenceno`], [`SO₃H`, `ác. bencenosulfónico`, ``], [`CO−CH₃`, `acetofenona`, `fenil metil cetona`], [`CH=CH₂`, `estireno`, `vinilbenceno`]];
      d.forEach((r, i) => { const cx = 70 + (i % 4) * 140, cy = i < 4 ? 78 : 228; s += ring(cx, cy, 26, { 0:r[0] }, { len:14, fs:14 }) + T(cx, cy + 50, r[1], { c:`tb`, fs:12.5 }) + (r[2] ? T(cx, cy + 66, r[2], { c:`tm`, fs:11 }) : ``); });
      return svg(560, 306, s, `Compuestos aromáticos monosustituidos con nombre común`); })() };

  FIG.trisust = { src:`Tema 26, pág. 14–15`, cap:`Con dos o más sustituyentes se numera para que reciban los números más bajos posibles; si hay empate, decide el orden alfabético. Los nombres van en orden alfabético con di-, tri- si se repiten. Con tres o más no se usan orto, meta ni para.`,
    svg: (() => { let s = ``; const N = { nums:{ 0:1, 1:2, 2:3, 3:4, 4:5, 5:6 } };
      s += ring(95, 110, 38, { 0:`Cl`, 1:`Cl`, 3:`Br` }, { ...N, rot:-30 });
      s += T(95, 214, `4-bromo-1,2-`, { c:`tb`, fs:12.5 }) + T(95, 230, `diclorobenceno`, { c:`tb`, fs:12.5 }) + T(95, 248, `{1,2,4}`, { c:`tm` });
      s += ring(280, 104, 38, { 0:`Br`, 2:`Br`, 4:`CH(CH₃)₂` }, { ...N, rot:-150 });
      s += T(280, 214, `1,3-dibromo-5-`, { c:`tb`, fs:12.5 }) + T(280, 230, `isopropilbenceno`, { c:`tb`, fs:12.5 }) + T(280, 248, `{1,3,5}`, { c:`tm` });
      s += ring(450, 110, 38, { 0:`CH₃`, 1:`C₂H₅`, 3:`Cl` }, N);
      s += T(450, 214, `4-cloro-2-etil-`, { c:`tb`, fs:12.5 }) + T(450, 230, `1-metilbenceno`, { c:`tb`, fs:12.5 }) + T(450, 248, `{1,2,4} gana a {1,2,5}`, { c:`tm` });
      return svg(560, 260, s, `Ejemplos de bencenos trisustituidos`); })() };

  FIG.fenilo = { src:`Tema 26, pág. 11 y 16`, cap:`Cuando la cadena es larga, el benceno pasa a ser la rama y se llama fenilo (C₆H₅−). Si se une a través de un CH₂ es bencilo (C₆H₅−CH₂−). Ejemplo del material: 3-fenilpentano.`,
    svg: (() => { let s = ``; const X = i => 70 + i * 82, labs = [`CH₃`, `CH₂`, `CH`, `CH₂`, `CH₃`];
      labs.forEach((l, i) => { s += T(X(i), 48, l, { c:`tk`, fs:18 }) + T(X(i), 24, i + 1, { c:`tm`, fs:12 }); if (i < 4) s += ln(X(i) + 22, 42, X(i + 1) - 22, 42); });
      s += ln(X(2), 54, X(2), 74) + ring(X(2), 74 + 30, 30, {}, {}) ;
      s += T(X(2) + 46, 112, `fenilo en C3`, { a:`start`, c:`tm` }) + T(X(2), 168, `3-fenilpentano`, { c:`tb`, fs:15 });
      s += ln(20, 186, 540, 186, `dash`);
      s += ring(90, 240, 24, { 1:`` }, { len:18 }) + T(150, 236, `fenilo`, { a:`start`, c:`tb` }) + T(150, 254, `C₆H₅−`, { a:`start`, c:`tm` });
      s += ring(340, 240, 24, { 1:`CH₂−` }, { len:16, fs:14 }) + T(420, 236, `bencilo`, { a:`start`, c:`tb` }) + T(420, 254, `C₆H₅−CH₂−`, { a:`start`, c:`tm` });
      return svg(560, 278, s, `Grupo fenilo y bencilo`); })() };

  FIG.famosos = { src:`Tema 26, pág. 17`, cap:`TNT (2,4,6-trinitrotolueno): tolueno con tres grupos nitro en 2, 4 y 6. Naftaleno: dos anillos fusionados, el componente de la naftalina.`,
    svg: (() => { let s = ``, r = 34;
      s += ring(150, 120, r, { 0:`CH₃`, 1:`NO₂`, 5:`NO₂`, 3:`NO₂` }, { mode:`kek`, nums:{ 0:1, 1:2, 2:3, 3:4, 4:5, 5:6 } }) + T(150, 222, `TNT · 2,4,6-trinitrotolueno`, { c:`tb` });
      const dx = r * Math.sqrt(3); s += ring(390, 120, r, {}, { mode:`kek` }) + ring(390 + dx, 120, r, {}, { mode:`kek`, kshift:1 }) + T(390 + dx / 2, 222, `naftaleno C₁₀H₈`, { c:`tb` });
      return svg(560, 236, s, `TNT y naftaleno`); })() };

  FIG.bioArom = { src:`Tema 26, pág. 18–19`, cap:`Rutas de los aminoácidos aromáticos que se ven en el material: la fenilalanina forma tirosina, y de la tirosina salen las catecolaminas y las hormonas tiroideas. El triptófano (anillo indol) forma serotonina y melatonina.`,
    svg: (() => { let s = ``;
      const bx = (x, y, w, t, col) => `<rect x="${x}" y="${y}" width="${w}" height="34" rx="8" class="bx" style="stroke:${col || `var(--line2)`}"/>` + T(x + w / 2, y + 22, t, { c:`tb`, fs:12.5 });
      const ar = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ar" marker-end="url(#ah)"/>`;
      s += bx(10, 20, 110, `Fenilalanina`, C) + ar(122, 37, 150, 37) + bx(154, 20, 90, `Tirosina`, C) + ar(246, 37, 274, 37) + bx(278, 20, 76, `L-DOPA`) + ar(356, 37, 384, 37) + bx(388, 20, 92, `Dopamina`);
      s += ar(434, 56, 434, 82) + bx(370, 86, 128, `Noradrenalina`) + ar(434, 122, 434, 148) + bx(380, 152, 108, `Adrenalina`);
      s += T(372, 166, `catecolaminas`, { a:`end`, c:`tm` }) + T(372, 182, `(grupo catecol)`, { a:`end`, c:`tm` });
      s += ar(199, 56, 199, 82) + bx(130, 86, 138, `T₃ y T₄ (tiroides)`) + T(199, 136, `derivados yodados`, { c:`tm` });
      s += ln(10, 196, 550, 196, `dash`);
      s += bx(10, 214, 110, `Triptófano`, C) + ar(122, 231, 150, 231) + bx(154, 214, 112, `Serotonina`) + ar(268, 231, 296, 231) + bx(300, 214, 110, `Melatonina`) + T(420, 236, `anillo indol`, { a:`start`, c:`tm` });
      return svg(560, 262, s, `Compuestos aromáticos de interés biológico`); })() };
})();
