# Versión Portable

Esta carpeta contiene la versión portable independiente de React.

## Archivos incluidos

- `accessibility-plugin.js` - script independiente que crea un botón flotante de accesibilidad.

## Cómo instalar

1. Copia `accessibility-plugin.js` a tu proyecto.

2. Incluye el script en tu HTML antes del cierre de `</body>`:

```html
<script src="accessibility-plugin.js"></script>
```

3. El botón flotante se mostrará automáticamente en la página.

## Funcionamiento

- El script inyecta el CSS y el botón flotante.
- El menú incluye:
  - Aumentar texto
  - Reducir texto
  - Alto contraste
  - Fuente legible
  - Reducir movimiento
  - Resaltar foco
  - Lectura en voz alta
  - Restablecer

## Notas

- La lectura en voz alta intenta leer primero el contenido de `.content-wrapper`.
- Si no existe `.content-wrapper`, lee el contenido de todo el `body`.
- El plugin funciona en cualquier web estática o dinámica, mientras el navegador soporte `speechSynthesis`.
