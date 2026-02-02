# LOJO

Prototipo de software para barberías con un diseño elegante y profesional.

## Cómo verlo en tu PC
1. Abre una terminal **en la carpeta que contiene `index.html`**.
   - Si descomprimiste un ZIP y ves una carpeta como `LOJO-main`, entra ahí primero.
2. Ejecuta un servidor local:

```bash
python3 -m http.server 8000
```

> En Windows puedes usar: `python -m http.server 8000` o `py -m http.server 8000`.

3. Abre tu navegador en `http://localhost:8000`.

### Solución a errores comunes
- **Ves un listado de carpetas**: estás en el lugar correcto, pero abre directamente
  `http://localhost:8000/index.html`.
- **Error 404 (File not found)**: el servidor se inició en otra carpeta. Cierra el servidor,
  entra a la carpeta del proyecto (donde está `index.html`) y vuelve a ejecutar el comando.
  Si arrancaste el servidor **un nivel arriba**, la URL correcta sería:
  `http://localhost:8000/LOJO-main/index.html`.
- **No encuentro `index.html`**: busca dentro de la carpeta `LOJO-main` (o similar) y
  abre una terminal allí. En Windows puedes usar:
  ```powershell
  dir
  ```
  Si no aparece, asegúrate de haber **extraído el ZIP** y de estar dentro de la carpeta
  correcta.

## Convertirlo a `.exe` (Windows)
Este proyecto es una página web estática. Para ejecutarla como app de escritorio, puedes
envolverla en un contenedor tipo navegador.

### Opción rápida con Nativefier (recomendada)
1. Instala Node.js (LTS): https://nodejs.org
2. Abre PowerShell en la carpeta del proyecto y ejecuta:

```bash
npx nativefier --name "BarberiaElite" --platform windows --arch x64 --single-instance "index.html"
```

3. Se generará una carpeta como `BarberiaElite-win32-x64`. Dentro tendrás `BarberiaElite.exe`.

> Si deseas icono propio, agrega `--icon ruta/al/icono.ico`.

### Opción con Tauri (más avanzada)
Tauri crea ejecutables livianos pero requiere configurar un proyecto Rust/Node.
Guía oficial: https://tauri.app
