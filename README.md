# GAD — Invitación web interactiva

## Dirección visual
Esta versión usa una paleta original de negro profundo, rojo intenso y sombras borgoña, con luces cálidas inspiradas en la atmósfera ochentosa de Stranger Things, con un título inspirado en el logotipo de la serie (relleno negro, contorno rojo luminoso y resplandor exterior), una ilustración SVG propia de una gimnasta en salto split, luces de escenario, niebla visual, interferencias y animaciones cinematográficas.

## Archivos
- `index.html`: estructura y contenido.
- `styles.css`: estética Stranger Things, responsive y animaciones.
- `script.js`: entrada interactiva, fecha/horario y confirmación por WhatsApp.

## Probar en tu computadora
1. Descargá y descomprimí `GAD-Stranger-Things-v4.zip`.
2. Abrí la carpeta.
3. Hacé doble clic en `index.html`. Se abrirá en tu navegador.
4. Para una vista más parecida a la del celular, abrí las herramientas de desarrollador del navegador y elegí vista móvil.

La invitación no requiere instalar dependencias ni usar un servidor para probarla. Las fuentes externas requieren conexión a internet; si no cargan, se usan fuentes alternativas.

## Personalizar fecha, horario y WhatsApp
Abrí `script.js` con Visual Studio Code o un editor de texto y buscá al comienzo:

```js
const CONFIG = {
  EVENT_DATE: "",
  EVENT_TIME: "",
  WHATSAPP_PHONE: ""
};
```

- En `EVENT_DATE`, escribí la fecha confirmada, por ejemplo `"Sábado 14 de noviembre de 2026"`.
- En `EVENT_TIME`, escribí el horario, por ejemplo `"20:30 h"`.
- En `WHATSAPP_PHONE`, escribí el número de GAD con código de país y área, solo números. Formato de ejemplo argentino: `5493764000000`. No uses `+`, espacios ni guiones.
- Si el número queda vacío, al tocar confirmar la página lo solicitará.

Guardá los cambios y recargá `index.html`.

## Publicar gratis con GitHub Pages
1. Creá una cuenta o iniciá sesión en https://github.com.
2. Creá un repositorio nuevo, por ejemplo `invitacion-gad`.
3. Subí `index.html`, `styles.css` y `script.js` a la raíz del repositorio.
4. Entrá a **Settings → Pages**.
5. En **Build and deployment**, seleccioná **Deploy from a branch**.
6. Elegí la rama `main` y la carpeta `/ (root)`, y guardá.
7. Esperá a que GitHub publique el sitio. El enlace aparecerá en la misma sección Pages, normalmente con formato `https://TU-USUARIO.github.io/invitacion-gad/`.

## Publicar con Vercel
1. Subí los tres archivos a un repositorio de GitHub.
2. Entrá en https://vercel.com e iniciá sesión.
3. Elegí **Add New → Project** e importá el repositorio.
4. Para un sitio estático como este, no hace falta framework ni comando de build.
5. Publicá y copiá el enlace generado por Vercel.

## Antes de enviar el enlace
- Completá fecha, horario y número de WhatsApp.
- Probá el botón de WhatsApp en un teléfono.
- Revisá que el nombre de la institución esté escrito como quieren mostrarlo.
- Compartí el enlace desde otro teléfono o navegador para comprobar la experiencia completa.

## Nota de marca
La invitación usa una estética de suspenso ochentoso inspirada en el género y la atmósfera de Stranger Things; no incluye logotipos oficiales ni imágenes de la serie. Para una gala pública o comercial, conviene usar recursos visuales propios o autorizados.
