/* ===================== DIBUJAR: BIBLIOTECA DE COMPUESTOS ===================== */

/* ---------- átomos para símbolos de Lewis (electrones de valencia = e) ---------- */
const DB_ATOMOS = [`H`,`Li`,`Be`,`B`,`C`,`N`,`O`,`F`,`Ne`,`Na`,`Mg`,`Al`,`P`,`S`,`Cl`,`K`,`Ca`,`Br`];
const DB_ATNOM = { H:`hidrógeno`, Li:`litio`, Be:`berilio`, B:`boro`, C:`carbono`, N:`nitrógeno`, O:`oxígeno`, F:`flúor`, Ne:`neón`, Na:`sodio`, Mg:`magnesio`, Al:`aluminio`, P:`fósforo`, S:`azufre`, Cl:`cloro`, K:`potasio`, Ca:`calcio`, Br:`bromo` };
const DB_GRUPO = { 1:`1A`, 2:`2A`, 3:`3A`, 4:`4A`, 5:`5A`, 6:`6A`, 7:`7A`, 8:`8A` };
function dbAtomo(el, conPuntos = true){ const m = dbNew(); dbAdd(m, el, 180, 130, { d:conPuntos ? DB_EL[el].e : 0 }); return m; }

/* ---------- compuestos iónicos: [elemento, carga, cantidad] ---------- */
const DB_ION = [
  { f:`LiF`, n:`fluoruro de litio`, c:[`Li`, 1, 1], a:[`F`, -1, 1] }, { f:`NaCl`, n:`cloruro de sodio`, c:[`Na`, 1, 1], a:[`Cl`, -1, 1] },
  { f:`KBr`, n:`bromuro de potasio`, c:[`K`, 1, 1], a:[`Br`, -1, 1] }, { f:`MgO`, n:`óxido de magnesio`, c:[`Mg`, 2, 1], a:[`O`, -2, 1] },
  { f:`CaO`, n:`óxido de calcio`, c:[`Ca`, 2, 1], a:[`O`, -2, 1] }, { f:`MgCl₂`, n:`cloruro de magnesio`, c:[`Mg`, 2, 1], a:[`Cl`, -1, 2] },
  { f:`CaF₂`, n:`fluoruro de calcio`, c:[`Ca`, 2, 1], a:[`F`, -1, 2] }, { f:`Na₂O`, n:`óxido de sodio`, c:[`Na`, 1, 2], a:[`O`, -2, 1] },
  { f:`K₂S`, n:`sulfuro de potasio`, c:[`K`, 1, 2], a:[`S`, -2, 1] }, { f:`Li₂O`, n:`óxido de litio`, c:[`Li`, 1, 2], a:[`O`, -2, 1] },
  { f:`AlCl₃`, n:`cloruro de aluminio`, c:[`Al`, 3, 1], a:[`Cl`, -1, 3] }, { f:`CaS`, n:`sulfuro de calcio`, c:[`Ca`, 2, 1], a:[`S`, -2, 1] },
  { f:`MgBr₂`, n:`bromuro de magnesio`, c:[`Mg`, 2, 1], a:[`Br`, -1, 2] }
];
function dbIones(it){
  const m = dbNew(); const list = []; for (let k = 0; k < it.c[2]; k++) list.push(it.c); for (let k = 0; k < it.a[2]; k++) list.push(it.a);
  list.forEach(([el, q], k) => dbAdd(m, el, 70 + 75 * k, 130, { q, d:q > 0 ? 0 : 8 })); return m;
}
const dbAtomosDe = it => { const m = dbNew(); const list = []; for (let k = 0; k < it.c[2]; k++) list.push(it.c[0]); for (let k = 0; k < it.a[2]; k++) list.push(it.a[0]); list.forEach((el, k) => dbAdd(m, el, 70 + 75 * k, 130, { d:DB_EL[el].e })); return m; };

/* ---------- moléculas e iones poliatómicos (estructuras de Lewis) ----------
   A: [elemento, x, y, extras] · B: [átomo, átomo, orden, estilo] · c: átomo central para la geometría · polar: true/false/null */
const DB_MOL = [
  { k:`H2`, f:`H₂`, n:`hidrógeno`, A:[[`H`,150,130],[`H`,210,130]], B:[[0,1,1]], polar:false },
  { k:`Cl2`, f:`Cl₂`, n:`cloro`, A:[[`Cl`,145,130],[`Cl`,215,130]], B:[[0,1,1]], polar:false },
  { k:`O2`, f:`O₂`, n:`oxígeno`, A:[[`O`,145,130],[`O`,215,130]], B:[[0,1,2]], polar:false },
  { k:`N2`, f:`N₂`, n:`nitrógeno`, A:[[`N`,145,130],[`N`,215,130]], B:[[0,1,3]], polar:false },
  { k:`HCl`, f:`HCl`, n:`cloruro de hidrógeno`, A:[[`H`,140,130],[`Cl`,210,130]], B:[[0,1,1]], polar:true },
  { k:`HF`, f:`HF`, n:`fluoruro de hidrógeno`, A:[[`H`,145,130],[`F`,205,130]], B:[[0,1,1]], polar:true },
  { k:`H2O`, f:`H₂O`, n:`agua`, A:[[`O`,180,100],[`H`,134,136],[`H`,226,136]], B:[[0,1,1],[0,2,1]], c:0, polar:true },
  { k:`H2S`, f:`H₂S`, n:`sulfuro de hidrógeno`, A:[[`S`,180,100],[`H`,134,136],[`H`,226,136]], B:[[0,1,1],[0,2,1]], c:0, polar:true },
  { k:`NH3`, f:`NH₃`, n:`amoníaco`, A:[[`N`,180,100],[`H`,130,140],[`H`,180,160],[`H`,230,140]], B:[[0,1,1],[0,2,1],[0,3,1]], c:0, polar:true },
  { k:`CH4`, f:`CH₄`, n:`metano`, A:[[`C`,180,130],[`H`,180,80],[`H`,130,130],[`H`,180,180],[`H`,230,130]], B:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], c:0, polar:false },
  { k:`CCl4`, f:`CCl₄`, n:`tetracloruro de carbono`, A:[[`C`,180,130],[`Cl`,180,78],[`Cl`,128,130],[`Cl`,180,182],[`Cl`,232,130]], B:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], c:0, polar:false },
  { k:`CO2`, f:`CO₂`, n:`dióxido de carbono`, A:[[`O`,110,130],[`C`,180,130],[`O`,250,130]], B:[[0,1,2],[1,2,2]], c:1, polar:false },
  { k:`BF3`, f:`BF₃`, n:`trifluoruro de boro`, A:[[`B`,180,122],[`F`,180,66],[`F`,132,150],[`F`,228,150]], B:[[0,1,1],[0,2,1],[0,3,1]], c:0, polar:false, sinOcteto:true },
  { k:`HCN`, f:`HCN`, n:`cianuro de hidrógeno`, A:[[`H`,110,130],[`C`,170,130],[`N`,235,130]], B:[[0,1,1],[1,2,3]], c:1, polar:true },
  { k:`CH2O`, f:`CH₂O`, n:`formaldehído`, A:[[`C`,180,124],[`O`,180,70],[`H`,138,154],[`H`,222,154]], B:[[0,1,2],[0,2,1],[0,3,1]], c:0, polar:true },
  { k:`C2H2`, f:`C₂H₂`, n:`etino (acetileno)`, A:[[`H`,90,130],[`C`,150,130],[`C`,210,130],[`H`,270,130]], B:[[0,1,1],[1,2,3],[2,3,1]], c:1, polar:false, cn:`cada carbono` },
  { k:`C2H4`, f:`C₂H₄`, n:`eteno (etileno)`, A:[[`C`,150,130],[`C`,210,130],[`H`,112,100],[`H`,112,160],[`H`,248,100],[`H`,248,160]], B:[[0,1,2],[0,2,1],[0,3,1],[1,4,1],[1,5,1]], c:0, polar:false, cn:`cada carbono` },
  { k:`C2H6`, f:`C₂H₆`, n:`etano`, A:[[`C`,150,130],[`C`,210,130],[`H`,150,82],[`H`,102,130],[`H`,150,178],[`H`,210,82],[`H`,258,130],[`H`,210,178]], B:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1],[1,7,1]], c:0, polar:false, cn:`cada carbono` },
  { k:`CH3OH`, f:`CH₃OH`, n:`metanol`, A:[[`C`,150,130],[`O`,215,130],[`H`,150,80],[`H`,100,130],[`H`,150,180],[`H`,215,80]], B:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1]], polar:true },
  { k:`CH3Cl`, f:`CH₃Cl`, n:`clorometano`, A:[[`C`,170,130],[`Cl`,235,130],[`H`,170,80],[`H`,120,130],[`H`,170,180]], B:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], c:0, polar:true },
  { k:`NH4`, f:`NH₄⁺`, n:`ion amonio`, A:[[`N`,180,130,{ q:1 }],[`H`,180,80],[`H`,130,130],[`H`,180,180],[`H`,230,130]], B:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]], c:0, polar:null },
  { k:`H3O`, f:`H₃O⁺`, n:`ion hidronio`, A:[[`O`,180,100,{ q:1 }],[`H`,130,140],[`H`,180,160],[`H`,230,140]], B:[[0,1,1],[0,2,1],[0,3,1]], c:0, polar:null },
  { k:`OH`, f:`OH⁻`, n:`ion hidróxido`, A:[[`O`,150,130,{ q:-1 }],[`H`,210,130]], B:[[0,1,1]], polar:null },
  { k:`CO3`, f:`CO₃²⁻`, n:`ion carbonato`, A:[[`C`,180,124],[`O`,180,70],[`O`,134,152,{ q:-1 }],[`O`,226,152,{ q:-1 }]], B:[[0,1,2],[0,2,1],[0,3,1]], c:0, polar:null },
  { k:`NO3`, f:`NO₃⁻`, n:`ion nitrato`, A:[[`N`,180,124,{ q:1 }],[`O`,180,70],[`O`,134,152,{ q:-1 }],[`O`,226,152,{ q:-1 }]], B:[[0,1,2],[0,2,1],[0,3,1]], c:0, polar:null }
];
function dbMolDe(it){
  const m = dbNew(); const ids = it.A.map(([el, x, y, ex]) => dbAdd(m, el, x, y, Object.assign({ auto:1 }, ex || {})));
  it.B.forEach(([a, b, o, s]) => dbBond(m, ids[a], ids[b], o, s)); dbAuto(m); m.ids = ids; return m;
}
const DB_MOLK = k => DB_MOL.find(x => x.k === k);

/* ---------- hidrocarburos: nombre IUPAC y especificación (numeración ya IUPAC) ---------- */
const DB_HC = [
  /* alcanos */
  { n:`propano`, s:{ n:3, b:[1,1] } }, { n:`butano`, s:{ n:4, b:[1,1,1] } }, { n:`pentano`, s:{ n:5, b:[1,1,1,1] } }, { n:`hexano`, s:{ n:6, b:[1,1,1,1,1] } },
  { n:`heptano`, s:{ n:7, b:[1,1,1,1,1,1] } }, { n:`octano`, s:{ n:8, b:[1,1,1,1,1,1,1] } },
  { n:`2-metilpropano`, s:{ n:3, b:[1,1], s:{ 2:[`M`] } } }, { n:`2-metilbutano`, s:{ n:4, b:[1,1,1], s:{ 2:[`M`] } } },
  { n:`2,2-dimetilpropano`, s:{ n:3, b:[1,1], s:{ 2:[`M`,`M`] } } }, { n:`2-metilpentano`, s:{ n:5, b:[1,1,1,1], s:{ 2:[`M`] } } },
  { n:`3-metilpentano`, s:{ n:5, b:[1,1,1,1], s:{ 3:[`M`] } } }, { n:`2,3-dimetilbutano`, s:{ n:4, b:[1,1,1], s:{ 2:[`M`], 3:[`M`] } } },
  { n:`2,2-dimetilbutano`, s:{ n:4, b:[1,1,1], s:{ 2:[`M`,`M`] } } }, { n:`3-etilpentano`, s:{ n:5, b:[1,1,1,1], s:{ 3:[`Et`] } } },
  { n:`2,3-dimetilpentano`, s:{ n:5, b:[1,1,1,1], s:{ 2:[`M`], 3:[`M`] } } }, { n:`3-metilhexano`, s:{ n:6, b:[1,1,1,1,1], s:{ 3:[`M`] } } },
  { n:`2,2,4-trimetilpentano`, s:{ n:5, b:[1,1,1,1], s:{ 2:[`M`,`M`], 4:[`M`] } } },
  /* alquenos */
  { n:`eteno`, s:{ n:2, b:[2] } }, { n:`propeno`, s:{ n:3, b:[2,1] } }, { n:`1-buteno`, s:{ n:4, b:[2,1,1] } }, { n:`2-buteno`, s:{ n:4, b:[1,2,1] } },
  { n:`1-penteno`, s:{ n:5, b:[2,1,1,1] } }, { n:`2-penteno`, s:{ n:5, b:[1,2,1,1] } }, { n:`1-hexeno`, s:{ n:6, b:[2,1,1,1,1] } },
  { n:`2-hexeno`, s:{ n:6, b:[1,2,1,1,1] } }, { n:`3-hexeno`, s:{ n:6, b:[1,1,2,1,1] } },
  { n:`2-metilpropeno`, s:{ n:3, b:[2,1], s:{ 2:[`M`] } } }, { n:`2-metil-1-buteno`, s:{ n:4, b:[2,1,1], s:{ 2:[`M`] } } },
  { n:`3-metil-1-buteno`, s:{ n:4, b:[2,1,1], s:{ 3:[`M`] } } }, { n:`2-metil-2-buteno`, s:{ n:4, b:[1,2,1], s:{ 2:[`M`] } } },
  { n:`4-metil-2-penteno`, s:{ n:5, b:[1,2,1,1], s:{ 4:[`M`] } } }, { n:`2,3-dimetil-2-buteno`, s:{ n:4, b:[1,2,1], s:{ 2:[`M`], 3:[`M`] } } },
  /* alquinos */
  { n:`etino`, s:{ n:2, b:[3] } }, { n:`propino`, s:{ n:3, b:[3,1] } }, { n:`1-butino`, s:{ n:4, b:[3,1,1] } }, { n:`2-butino`, s:{ n:4, b:[1,3,1] } },
  { n:`1-pentino`, s:{ n:5, b:[3,1,1,1] } }, { n:`2-pentino`, s:{ n:5, b:[1,3,1,1] } }, { n:`1-hexino`, s:{ n:6, b:[3,1,1,1,1] } },
  { n:`2-hexino`, s:{ n:6, b:[1,3,1,1,1] } }, { n:`3-hexino`, s:{ n:6, b:[1,1,3,1,1] } },
  { n:`3-metil-1-butino`, s:{ n:4, b:[3,1,1], s:{ 3:[`M`] } } }, { n:`4-metil-1-pentino`, s:{ n:5, b:[3,1,1,1], s:{ 4:[`M`] } } },
  { n:`4-metil-2-pentino`, s:{ n:5, b:[1,3,1,1], s:{ 4:[`M`] } } },
  /* cíclicos */
  { n:`ciclopropano`, r:{ r:3, b:[1,1,1] } }, { n:`ciclobutano`, r:{ r:4, b:[1,1,1,1] } }, { n:`ciclopentano`, r:{ r:5, b:[1,1,1,1,1] } },
  { n:`ciclohexano`, r:{ r:6, b:[1,1,1,1,1,1] } }, { n:`ciclohexeno`, r:{ r:6, b:[2,1,1,1,1,1] } }, { n:`metilciclohexano`, r:{ r:6, b:[1,1,1,1,1,1], s:{ 1:[`M`] } } }
];
const dbHCMol = it => it.s ? dbChain(it.s) : dbRing(it.r);
const dbHCFam = it => { const m = dbPrep(dbHCMol(it), `esq`); const o = { 2:0, 3:0 }; m.bonds.forEach(b => { if (o[b.o] !== undefined) o[b.o]++; }); return it.r ? (o[2] ? `cicloalqueno` : `cicloalcano`) : o[3] ? `alquino` : o[2] ? `alqueno` : `alcano`; };
const dbHCForm = it => dbFormula(dbPrep(dbHCMol(it), `esq`), `esq`);

/* ---------- aromáticos: nombre y sustituyentes por posición del anillo (1 a 6) ---------- */
const DB_AR = [
  { n:`fluorobenceno`, s:{ 1:[`F`] } }, { n:`clorobenceno`, s:{ 1:[`Cl`] } }, { n:`bromobenceno`, s:{ 1:[`Br`] } }, { n:`nitrobenceno`, s:{ 1:[`NO2`] } },
  { n:`tolueno`, s:{ 1:[`M`] } }, { n:`etilbenceno`, s:{ 1:[`Et`] } }, { n:`fenol`, s:{ 1:[`OH`] } }, { n:`anilina`, s:{ 1:[`NH2`] } },
  { n:`ácido benzoico`, s:{ 1:[`COOH`] } }, { n:`ácido bencenosulfónico`, s:{ 1:[`SO3H`] } }, { n:`alilbenceno`, s:{ 1:[`All`] } }, { n:`octilbenceno`, s:{ 1:[`Oct`] } },
  { n:`o-xileno (1,2-dimetilbenceno)`, s:{ 1:[`M`], 2:[`M`] } }, { n:`m-xileno (1,3-dimetilbenceno)`, s:{ 1:[`M`], 3:[`M`] } }, { n:`p-xileno (1,4-dimetilbenceno)`, s:{ 1:[`M`], 4:[`M`] } },
  { n:`1,3,5-trimetilbenceno`, s:{ 1:[`M`], 3:[`M`], 5:[`M`] } }, { n:`2,4,6-trinitrotolueno (TNT)`, s:{ 1:[`M`], 2:[`NO2`], 4:[`NO2`], 6:[`NO2`] } },
  { n:`ácido 4-clorobenzoico`, s:{ 1:[`COOH`], 4:[`Cl`] } }, { n:`3-isopropilfenol (m-isopropilfenol)`, s:{ 1:[`OH`], 3:[`iPr`] } },
  { n:`1-bromo-3,5-dimetilbenceno`, s:{ 1:[`Br`], 3:[`M`], 5:[`M`] } }, { n:`2-metilfenol (o-cresol)`, s:{ 1:[`OH`], 2:[`M`] } },
  { n:`4-metilfenol (p-cresol)`, s:{ 1:[`OH`], 4:[`M`] } }, { n:`4-nitrofenol (p-nitrofenol)`, s:{ 1:[`OH`], 4:[`NO2`] } },
  { n:`2,4-dinitrofenol`, s:{ 1:[`OH`], 2:[`NO2`], 4:[`NO2`] } }, { n:`4-cloroanilina (p-cloroanilina)`, s:{ 1:[`NH2`], 4:[`Cl`] } },
  { n:`1-cloro-4-nitrobenceno`, s:{ 1:[`Cl`], 4:[`NO2`] } }, { n:`ácido 3-nitrobenzoico (m-nitrobenzoico)`, s:{ 1:[`COOH`], 3:[`NO2`] } },
  { n:`1,4-diclorobenceno (p-diclorobenceno)`, s:{ 1:[`Cl`], 4:[`Cl`] } }, { n:`3-bromotolueno (m-bromotolueno)`, s:{ 1:[`M`], 3:[`Br`] } },
  { n:`ácido 2-hidroxibenzoico (ácido salicílico)`, s:{ 1:[`COOH`], 2:[`OH`] } }
];
const dbARMol = it => dbBenceno(it.s);
