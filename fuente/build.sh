set -e
cd /home/claude/build
{ cat head.html; echo '<style>'; cat base.css new.css ui.css; echo '</style>'; cat body.html; echo '<script>';
  node -e 'const d=require("./old.json");for(const k of ["TOPICS","REPASO","MCQ","ABIERTAS","EJ","FORM"]) console.log(`const ${k} = ${JSON.stringify(d[k])};`)';
  cat figs.js figs_org.js arom.js figs_org2.js figs_t26.js figs_t27.js figs_t28.js data_new.js data_org.js data_org2.js data_t26.js data_t27.js data_t28.js guia.js packcore.js $(ls material/*.js 2>/dev/null) app.js org_app.js arom_app.js alc_app.js eter_app.js ask.js ui.js notas.js clock.js frases.js motiva.js estudio.js audio.js push.js sync.js init.js; echo '</script>'; } | sed "s/__BUILD__/${BUILD:-$(date +%Y.%m.%d-%H%M)}/" > ../Parcial_Modulo_IV_v2.html
{ echo '<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>'; cat ../Parcial_Modulo_IV_v2.html; echo '</body></html>'; } > test.html
ls -la ../Parcial_Modulo_IV_v2.html
