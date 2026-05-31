# Versión React

Esta carpeta contiene la versión React del plugin de accesibilidad.

## Archivos incluidos

- `AccessibilityToolbar.jsx` - componente React del botón flotante y menú.
- `AccessibilityToolbar.css` - estilos del botón flotante y de las opciones.

## Cómo instalar

1. Copia los archivos `AccessibilityToolbar.jsx` y `AccessibilityToolbar.css` a una carpeta de tu proyecto, por ejemplo:
   `src/components/AccessibilityToolbar/`.

2. Importa el componente en `App.jsx` o en un componente de nivel superior:

```jsx
import AccessibilityToolbar from './components/AccessibilityToolbar/AccessibilityToolbar';
```

3. Agrega el componente en el JSX:

```jsx
function App() {
  return (
    <div className="App">
      {/* Tu contenido */}
      <AccessibilityToolbar />
    </div>
  );
}
```

4. Asegúrate de que tu contenido principal tenga la clase `content-wrapper`, porque la lectura en voz alta usa ese selector:

```jsx
<main className="content-wrapper">
  {/* Contenido de la página */}
</main>
```

## Requisitos

- Proyecto React con soporte para JSX.
- Navegador que soporte `speechSynthesis`.

## Qué ofrece

- Aumentar texto
- Reducir texto
- Alto contraste
- Fuente legible
- Reducir movimiento
- Resaltar foco
- Lectura en voz alta
- Restablecer
