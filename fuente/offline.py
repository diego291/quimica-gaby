import base64, re
d='node_modules/@fontsource/'
faces=[('Atkinson Hyperlegible',400,'normal','atkinson-hyperlegible/files/atkinson-hyperlegible-latin-400-normal.woff2'),
('Atkinson Hyperlegible',700,'normal','atkinson-hyperlegible/files/atkinson-hyperlegible-latin-700-normal.woff2'),
('Atkinson Hyperlegible',400,'italic','atkinson-hyperlegible/files/atkinson-hyperlegible-latin-400-italic.woff2'),
('Zilla Slab',500,'normal','zilla-slab/files/zilla-slab-latin-500-normal.woff2'),
('Zilla Slab',600,'normal','zilla-slab/files/zilla-slab-latin-600-normal.woff2'),
('Zilla Slab',700,'normal','zilla-slab/files/zilla-slab-latin-700-normal.woff2')]
css=''.join(f'@font-face{{font-family:"{f}";font-weight:{w};font-style:{s};font-display:swap;src:url(data:font/woff2;base64,{base64.b64encode(open(d+p,"rb").read()).decode()}) format("woff2")}}\n' for f,w,s,p in faces)
html=open('../Parcial_Modulo_IV_v2.html').read()
html=re.sub(r'<link[^>]*fonts\.(googleapis|gstatic)[^>]*>\n?','',html)
js1=open('node_modules/jspdf/dist/jspdf.umd.min.js').read().replace('</script','<\\/script')
js2=open('node_modules/html2canvas/dist/html2canvas.min.js').read().replace('</script','<\\/script')
html=html.replace('<style>','<style>\n'+css,1)
i=html.rindex('<script>')
html=html[:i]+'<script>'+js1+'</script>\n<script>'+js2+'</script>\n'+html[i:]
doc='<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<style>[hidden]{display:none!important}body{margin:0}</style>\n</head>\n<body>\n'+html+'\n</body>\n</html>\n'
open('/home/claude/Parcial_Quimica_Modulo_IV_offline.html','w').write(doc)
print(len(doc)//1024,'KB')
