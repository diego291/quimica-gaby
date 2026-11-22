/* «Explícalo de otra forma» · Tema 34: aminoácidos */
Object.assign(OTRA, {
[`Definición y estructura del α-aminoácido`]:{
  pre:[`¿Cuántos grupos distintos tiene un carbono quiral?`,`Cuatro.`],
  idea:`El carbono α es el <b>centro</b>; de él cuelgan cuatro cosas: <b>−NH₂, −COOH, H y R</b>. Lo único que cambia entre aminoácidos es R.`,
  por:[`Amino + carboxilo + H + cadena lateral R.`,`El Cα es quiral (excepto en la glicina).`,`Es anfótero: grupo ácido y grupo básico a la vez.`],
  ojo:`En la glicina R = H, por eso no es quiral.`,
  prueba:[[`¿Qué cuatro grupos tiene el Cα?`,`Amino, carboxilo, H y R.`]]
},
[`Zwitterión`]:{
  pre:[`¿Qué carga tiene −COO⁻ y cuál −NH₃⁺?`,`Negativa y positiva.`],
  idea:`El −COOH le pasa su H⁺ al −NH₂ <b>dentro de la misma molécula</b>: queda con <b>una carga − y una +</b>, neutra en conjunto.`,
  por:[`Forma: ⁺H₃N−CHR−COO⁻.`,`Predomina a pH ≈ 7.4.`,`Explica puntos de fusión altos y buena solubilidad en agua.`],
  ojo:`Carga neta cero no es «sin cargas»: tiene dos que se compensan.`,
  prueba:[[`¿Qué carga neta tiene el zwitterión?`,`Cero (una + y una −).`]]
},
[`Clasificación según el grupo R`]:{
  pre:[`¿Qué parte del aminoácido cambia de uno a otro?`,`El grupo R.`],
  idea:`Se clasifican por <b>cómo se comporta R con el agua y la carga</b>: le teme (apolar), se lleva bien (polar), o tiene carga (ácido −, básico +).`,
  por:[`Apolares (hidrofóbicos).`,`Polares sin carga.`,`Ácidos: carga − a pH 7.4.`,`Básicos: carga + a pH 7.4.`],
  ojo:`Siempre mira el R, no el resto de la molécula.`,
  prueba:[[`¿Cuáles son las cuatro clases?`,`Apolares, polares sin carga, ácidos y básicos.`]]
},
[`Aminoácidos apolares`]:{
  pre:[`¿Qué significa hidrofóbico?`,`Que rehúye el agua.`],
  idea:`R es <b>un hidrocarburo</b> (o casi): no puede hacer puentes de H ni tener carga. Se esconde dentro de las proteínas, lejos del agua.`,
  por:[`Alifáticos: Gly, Ala, Val, Leu, Ile, Met, Pro.`,`Aromáticos: Phe, Tyr, Trp.`],
  ojo:`El material los agrupa aquí aunque la tirosina tenga un −OH.`,
  prueba:[[`Cita los tres aromáticos.`,`Fenilalanina, tirosina y triptófano.`]]
},
[`Aminoácidos polares sin carga`]:{
  pre:[`¿Qué grupos forman puentes de H con el agua?`,`−OH, −SH y amidas.`],
  idea:`R tiene un grupo que <b>se lleva bien con el agua</b> pero que <b>no carga</b> a pH 7.4.`,
  por:[`Ser y Thr (−OH).`,`Cys (−SH).`,`Asn y Gln (amida).`],
  ojo:`Cisteína es la que forma puentes disulfuro.`,
  prueba:[[`¿Qué grupos tienen Ser y Cys en R?`,`−OH y −SH.`]]
},
[`Aminoácidos ácidos`]:{
  pre:[`¿Qué forma tiene un −COOH a pH 7.4?`,`−COO⁻.`],
  idea:`Tienen un <b>segundo carboxilo en R</b>: a pH fisiológico lo pierden y quedan con carga <b>negativa</b>.`,
  por:[`Ácido aspártico → aspartato.`,`Ácido glutámico → glutamato.`],
  ojo:`El nombre «ácido» no significa que estén sin ionizar: a pH 7.4 son aniones.`,
  prueba:[[`¿Cuáles son los dos aminoácidos ácidos?`,`Aspártico y glutámico.`]]
},
[`Aminoácidos básicos`]:{
  pre:[`¿Qué le pasa al N con par libre cuando capta un H⁺?`,`Queda con carga +.`],
  idea:`R tiene <b>un N que capta H⁺</b>: a pH 7.4 queda con carga <b>positiva</b>.`,
  por:[`Lisina, arginina, histidina.`,`Las histonas son ricas en básicos y se unen al ADN (carga −).`],
  ojo:`Positivo atrae a negativo: por eso se pegan al ADN.`,
  prueba:[[`¿Por qué se unen las histonas al ADN?`,`Tienen carga + y el ADN tiene carga −.`]]
},
[`Propiedades físicas`]:{
  pre:[`¿Qué fuerza es mucho más intensa que un puente de H?`,`La atracción entre cargas opuestas (electrostática).`],
  idea:`Como son zwitteriones, se comportan casi como una <b>sal</b>: puntos de fusión altos y solubles en agua.`,
  por:[`Punto de fusión > 200 °C; muchos se descomponen antes de fundir.`,`Solubles en agua, ácidos y bases diluidos.`,`Gly y Ala son dulces; Leu es insípida.`],
  ojo:`Alto punto de fusión viene de cargas, no de masa grande.`,
  prueba:[[`¿Por qué funden a más de 200 °C?`,`Por las atracciones electrostáticas entre zwitteriones.`]]
},
[`Propiedades químicas`]:{
  pre:[`¿Qué grupos de R pueden reaccionar además del amino y carboxilo?`,`−SH y −OH.`],
  idea:`Dos reacciones clave del material: <b>unir dos −SH</b> (puente disulfuro) y <b>añadir fosfato a un −OH</b> (fosforilación).`,
  por:[`2 Cys se oxidan → cistina (−S−S−).`,`Ser, Thr y Tyr se fosforilan.`,`La fosforilación regula enzimas y señales celulares.`],
  ojo:`Solo Ser, Thr y Tyr tienen −OH que se fosforila.`,
  prueba:[[`¿Qué aminoácido forma puentes disulfuro?`,`Cisteína.`]]
},
[`Aminoácidos esenciales y no esenciales`]:{
  pre:[`¿Qué quiere decir «esencial» en nutrición?`,`Que el cuerpo no lo produce: hay que tomarlo de la dieta.`],
  idea:`<b>Complementario (no está en las diapositivas).</b> Esencial = <b>no lo fabrica tu cuerpo</b>, lo traes de la comida. No esencial = lo sintetizas.`,
  por:[`Los 9 esenciales para el adulto: His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val.`,`Confirmar con el Lic. la lista que usa.`],
  ojo:`«No esencial» no es «no importante».`,
  prueba:[[`¿Qué significa que un aminoácido sea esencial?`,`El cuerpo no lo sintetiza y debe venir en la dieta.`]]
},
[`Aminoácidos`]:{
  pre:[`¿Qué cuatro cosas tiene el Cα?`,`NH₂, COOH, H y R.`],
  idea:`Resumen: <b>estructura (Cα) → zwitterión → clase por R → propiedades</b>.`,
  por:[`Se clasifican por R en 4 clases.`,`A pH 7.4 son zwitteriones.`,`Cys forma puentes S−S; Ser/Thr/Tyr se fosforilan.`],
  ojo:`El zwitterión explica las propiedades físicas.`,
  prueba:[[`¿Qué clase tiene la lisina?`,`Básico.`]]
}
});
