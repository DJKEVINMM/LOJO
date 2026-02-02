# LOJO

Prototipo de software para barberías con un diseño elegante y profesional.

## Cómo verlo en tu PC
1. Abre una terminal **en esta carpeta** (la que contiene `index.html`).
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
