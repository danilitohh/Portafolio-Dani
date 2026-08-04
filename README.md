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
- `src/lanyard/`: componente React Three Fiber del retrato colgante
- `vite.config.js`: compilación de JavaScript, JSX y recursos `.glb`

## Cómo personalizar

1. Edita el bloque `PROFILE` en `script.js`.
2. Reemplaza los textos de `CONTENT.es` y `CONTENT.en`.
3. Cambia los enlaces de GitHub, correo y teléfono si lo necesitas.
4. En cada proyecto, rellena `image` con una ruta local como `assets/projects/proyecto-01.jpg`, `liveUrl` con el enlace al proyecto y `repoUrl` con el enlace real de GitHub.
5. Ajusta las categorías de la sección de `Tecnologías` en `CONTENT.es/en` según tu stack real.
6. Ajusta colores, tarjetas y secciones en `styles.css`.

## Desarrollo local

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

## Notas

- El idioma se guarda en `localStorage`.
- El formulario de contacto abre el cliente de correo sin necesitar backend.
- La estructura está pensada para que puedas mover o duplicar secciones sin romper el diseño.
- El contenido principal sigue escrito en JavaScript vanilla. React y Three.js se usan solamente para el colgante 3D interactivo.
- Si dejas `image` vacío, la tarjeta mostrará un bloque guía hasta que subas tu captura.
- Si dejas `liveUrl` vacío, la tarjeta mostrará solo el enlace al repositorio.

## Remoto

El repositorio local ya quedó vinculado al remoto:

- `origin`: `https://github.com/danilitohh/Portafolio-Dani.git`
