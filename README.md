# Química · Laboratorio Clínico

Página de estudio (versión 2026.11.06-0742). Se abre en GitHub Pages y se actualiza sola.

- `material/`: un archivo por tema nuevo (`registerPack({...})`).
- `core.js`, `app.js`, `app.css`: el programa.
- `sw.js`: permite usarla sin internet y descarga la versión nueva al recargar.

## Organizar: Agenda, Pendientes, Notas y Cuaderno

Sección nueva con el calendario (Día · Semana · Mes · Lista), pendientes, notas rápidas, el cuaderno tipo OneNote y “Mis notas”.
Todo se guarda en el dispositivo y se sincroniza con la nube igual que el resto del progreso.

### Para que la Agenda se sincronice con Google Calendar (una sola vez)
1. Entra a https://console.cloud.google.com con la cuenta dueña del proyecto **quimica-gaby**.
2. **APIs y servicios → Biblioteca →** busca **Google Calendar API** → **Habilitar**.
3. **Google Auth Platform (Pantalla de consentimiento) → Acceso a los datos → Agregar o quitar permisos →** marca `.../auth/calendar.events` → Guardar.
4. **Público:** si la app está “En prueba”, agrega el correo de Gaby (y el tuyo) como **usuarios de prueba**.
5. En la página: **Organizar → Agenda → “Conectar Google”** y acepta el permiso. El permiso dura una hora; después basta tocar **“Google: actualizar”**.

### Para que las fotos del Cuaderno se guarden en la nube
En **Firebase → Firestore → Reglas**, las reglas deben permitir las subcolecciones del usuario:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```
Sin esa regla, las fotos se guardan solo en el dispositivo donde se tomaron (el texto del cuaderno sí se sincroniza).
