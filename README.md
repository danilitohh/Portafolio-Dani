# Portafolio bilingüe

Base de portafolio en JavaScript puro, pensada para mostrar:

- Proyectos
- Información personal
- Tecnologías
- Experiencia
- Contacto
- Soporte bilingüe en español e inglés

## Estructura

- `index.html`: entrada principal del sitio
- `styles.css`: diseño, layout y responsive
- `script.js`: contenido, traducciones y comportamiento

## Cómo personalizar

1. Edita el bloque `PROFILE` en `script.js`.
2. Reemplaza los textos de `CONTENT.es` y `CONTENT.en`.
3. Cambia los enlaces de GitHub, LinkedIn y correo.
4. En cada proyecto, rellena `image` con una ruta local como `assets/projects/proyecto-01.jpg`, `liveUrl` con el enlace al proyecto y `repoUrl` con el enlace real de GitHub.
5. Ajusta las categorías de la sección de `Tecnologías` en `CONTENT.es/en` según tu stack real.
6. Ajusta colores, tarjetas y secciones en `styles.css`.

## Cómo abrirlo

- Abre `index.html` directamente en el navegador, o
- Sirve la carpeta con cualquier servidor estático si prefieres evitar `file://`.

## Notas

- El idioma se guarda en `localStorage`.
- El formulario de contacto abre el cliente de correo sin necesitar backend.
- La estructura está pensada para que puedas mover o duplicar secciones sin romper el diseño.
- No requiere Node ni dependencias para funcionar en esta base inicial.
- Si dejas `image` vacío, la tarjeta mostrará un bloque guía hasta que subas tu captura.
- Si dejas `liveUrl` vacío, la tarjeta mostrará solo el enlace al repositorio.

## Remoto

El repositorio local ya quedó vinculado al remoto:

- `origin`: `https://github.com/danilitohh/Portafolio-Dani.git`
