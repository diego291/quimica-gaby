#!/usr/bin/env python3
"""Genera el audio natural de cada tarjeta de repaso con Piper (voz neuronal, sin internet).
   Uso: python3 gen_audio.py audio_text.json voz.onnx carpeta_salida
   Salida: <hash>.b.mp3 (cuerpo), <hash>.q.mp3 (pregunta) e index.json con tiempos por frase.
   Solo regenera las tarjetas cuyo texto cambió."""
import json, sys, os, subprocess, hashlib, wave, io
import numpy as np
from piper import PiperVoice
from piper.config import SynthesisConfig
src, model, out = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(out, exist_ok=True)
data = json.load(open(src, encoding='utf-8'))
idx_path = os.path.join(out, 'index.json')
old = json.load(open(idx_path)) if os.path.exists(idx_path) else {}
voice = PiperVoice.load(model); SR = voice.config.sample_rate
cfg = SynthesisConfig(length_scale=float(os.environ.get('LS', '1.0')), noise_scale=0.6, noise_w_scale=0.8)
GAP = np.zeros(int(SR * 0.32), dtype=np.int16)
def synth(sents):
    parts, marks, t = [], [], 0.0
    for s in sents:
        if isinstance(s, dict):
            a = np.zeros(int(SR * s['wait']), dtype=np.int16); marks.append([round(t, 2), None]); parts.append(a); t += len(a) / SR; continue
        a = np.concatenate([c.audio_int16_array for c in voice.synthesize(s, syn_config=cfg)] or [np.zeros(1, np.int16)])
        marks.append([round(t, 2), s]); parts += [a, GAP]; t += (len(a) + len(GAP)) / SR
    return np.concatenate(parts), marks, round(t, 2)
def save(arr, path):
    p = subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-f', 's16le', '-ar', str(SR), '-ac', '1', '-i', '-', '-ac', '1', '-ar', '22050', '-b:a', '40k', path], input=arr.tobytes())
    assert p.returncode == 0
idx, n = {}, 0
for k, c in data.items():
    sig = hashlib.md5(json.dumps([c['body'], c['quiz'], model, os.environ.get('LS', '1.0')], ensure_ascii=False).encode()).hexdigest()[:10]
    if k in old and old[k].get('sig') == sig and os.path.exists(os.path.join(out, f'{k}.b.mp3')):
        idx[k] = old[k]; continue
    e = {'sig': sig}
    a, m, d = synth(c['body']); save(a, os.path.join(out, f'{k}.b.mp3')); e['b'] = {'d': d, 'm': m}
    if c.get('quiz'):
        a, m, d = synth(c['quiz']); save(a, os.path.join(out, f'{k}.q.mp3')); e['q'] = {'d': d, 'm': m, 'qid': c['qid']}
    idx[k] = e; n += 1
    if n % 10 == 0: print(n, 'tarjetas…', flush=True)
for k in set(old) - set(idx):
    for s in ('b', 'q'):
        try: os.remove(os.path.join(out, f'{k}.{s}.mp3'))
        except FileNotFoundError: pass
json.dump(idx, open(idx_path, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print('listo:', n, 'generadas,', len(idx), 'en total')
