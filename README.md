# 🎓 Campus Virtual - Plataforma Educativa

Un moderno campus virtual construido con **React** y **Vite**. Diseño limpio y profesional con funcionalidades completas para la gestión académica.

## ✨ Características

### 📊 Dashboard
- **Resumen de cursos**: Vista rápida de todos tus cursos activos
- **Estadísticas personalizadas**: Promedio general, tareas completadas, nuevos mensajes
- **Próxima entrega**: Muestra la tarea más urgente
- **Anuncios importantes**: Noticias del campus con diferentes prioridades
- **Progreso de cursos**: Visualización del avance en cada materia

### 📚 Gestión de Cursos
- **Lista de cursos**: Todos tus cursos organizados en tarjetas
- **Detalles del curso**: Información completa del profesor, horario, aula
- **Progreso visual**: Barra de progreso para cada curso
- **Recursos**: Acceso a materiales, videos y documentos

### ✓ Sistema de Tareas
- **Vista de todas las tareas**: Filtradas por estado (pendientes/entregadas)
- **Detalles de tareas**: Descripción, fecha de entrega, calificación
- **Subida de trabajos**: Interfaz para enviar asignaciones
- **Historial**: Seguimiento de tareas completadas

### 📈 Calificaciones
- **Promedio general**: Tu calificación general del semestre
- **Desglose por curso**: Calificaciones detalladas de cada materia
- **Componentes de nota**: Visualización del peso de cada evaluación
- **Análisis visual**: Gráficos de progreso y desempeño

### 💬 Sistema de Mensajes
- **Bandeja de entrada**: Todos tus mensajes de profesores y sistema
- **Notificaciones**: Indicador de mensajes sin leer
- **Detalles completos**: Vista expandida de cada mensaje
- **Respuesta rápida**: Opción de responder directamente

### 👤 Perfil de Usuario
- **Información personal**: Datos del estudiante
- **Opciones de seguridad**: Cambio de contraseña y autenticación
- **Preferencias**: Notificaciones y configuración de interfaz
- **Estadísticas**: Historial de cursos completados y logros

## 🎨 Diseño

- **Colores modernos y suaves**: Azules, grises y blancos
- **Interfaz responsive**: Adaptable a todos los tamaños de pantalla
- **Navegación intuitiva**: Sidebar con acceso rápido a todas las secciones
- **Animaciones fluidas**: Transiciones suaves entre vistas
- **Iconos descriptivos**: Emojis para mejor identificación visual

## 🛠️ Tecnologías

- **React 18**: Librería de UI
- **Vite**: Bundler rápido y moderno
- **CSS3**: Estilos avanzados y responsive
- **JavaScript ES6+**: Código moderno y limpio

## 📁 Estructura del Proyecto

```
campus-virtual/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación superior
│   │   ├── Sidebar.jsx         # Menú lateral
│   │   ├── Dashboard.jsx       # Panel principal
│   │   ├── Courses.jsx         # Gestión de cursos
│   │   ├── Tasks.jsx           # Sistema de tareas
│   │   ├── Grades.jsx          # Calificaciones
│   │   ├── Messages.jsx        # Mensajería
│   │   └── Profile.jsx         # Perfil de usuario
│   ├── data/
│   │   └── mockData.js         # Datos de ejemplo
│   ├── styles/
│   │   └── components.css      # Estilos globales
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos de la app
│   ├── index.css               # Estilos base
│   └── main.jsx                # Punto de entrada
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js 14+ y npm

### Pasos de Instalación

```bash
# 1. Navega al directorio del proyecto
cd campus-virtual

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev

# 4. Abre tu navegador en http://localhost:5173
```

### Comandos Disponibles

```bash
# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar la versión compilada
npm run preview
```

## 👥 Datos de Prueba

El proyecto incluye datos mockados para demostración:

### Usuario de Ejemplo
- **Nombre**: Juan Pérez
- **Email**: juan.perez@universidad.edu
- **Matrícula**: UST2024001
- **Carrera**: Ingeniería en Sistemas

### Cursos Disponibles
1. Desarrollo Web Avanzado
2. Algoritmos y Estructuras de Datos
3. Bases de Datos
4. Ingeniería de Software

## 🎯 Funcionalidades Principales

### Navegación
- Barra lateral colapsible para mejor uso del espacio
- Menú superior con información del usuario
- Notificaciones en tiempo real

### Interactividad
- Filtrado de tareas (todas, pendientes, entregadas)
- Búsqueda dentro de cursos
- Visualización detallada de cada componente
- Vistas de lista y detalle intercambiables

### Diseño Responsivo
- **Desktop**: Layout completo con sidebar
- **Tablet**: Optimizado para pantallas medianas
- **Mobile**: Adaptación completa de todos los componentes

## 💡 Características Futuras

- [ ] Autenticación real
- [ ] Base de datos integrada
- [ ] Subida de archivos
- [ ] Notificaciones en tiempo real
- [ ] Chat en vivo con profesores
- [ ] Sistema de calificación automático
- [ ] Exportar reportes académicos
- [ ] Integración con calendario

## 🎨 Paleta de Colores

| Nombre | Color | Uso |
|--------|-------|-----|
| Primario | #3498db | Botones, enlaces |
| Secundario | #2c3e50 | Sidebar |
| Éxito | #27ae60 | Tareas completadas |
| Peligro | #e74c3c | Alertas, pendientes |
| Advertencia | #f39c12 | Notificaciones |
| Fondo claro | #f8f9fa | Fondo principal |

## 📝 Licencia

Este proyecto es de uso educativo. Puedes modificarlo y adaptarlo según tus necesidades.

## 👨‍💻 Desarrollado con ❤️ por GitHub Copilot

---

**¡Espero que disfrutes este campus virtual! Siéntete libre de personalizarlo y extender sus funcionalidades.**
# prueba-proyecto
