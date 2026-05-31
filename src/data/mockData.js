// Datos mockados para el campus virtual

export const currentUser = {
  id: 1,
  name: 'Juan Pérez',
  email: 'juan.perez@universidad.edu',
  carrera: 'Ingeniería en Sistemas',
  matricula: 'UST2024001',
  avatar: '👨‍🎓',
  semestre: 6
};

export const courses = [
  {
    id: 1,
    nombre: 'Desarrollo Web Avanzado',
    profesor: 'Dr. Carlos López',
    codigo: 'DWA-201',
    semestre: 6,
    horario: 'Lun, Mié 10:00 - 12:00',
    aula: 'Lab 301',
    descripcion: 'Aprende React, Node.js y bases de datos modernas',
    estudiantes: 28,
    color: '#3498db',
    progreso: 75,
    contenido: 'En este curso aprenderás las tecnologías más modernas para desarrollo web. Cubriremos React para frontend, Node.js para backend, y integración con bases de datos. Se enfatiza en buenas prácticas, testing y despliegue en producción.'
  },
  {
    id: 2,
    nombre: 'Algoritmos y Estructuras de Datos',
    profesor: 'Dra. María García',
    codigo: 'AED-210',
    semestre: 6,
    horario: 'Mar, Jue 14:00 - 16:00',
    aula: 'Aula 205',
    descripcion: 'Optimización y análisis de algoritmos',
    estudiantes: 32,
    color: '#9b59b6',
    progreso: 85,
    contenido: 'Estudio profundo de algoritmos clásicos y estructuras de datos. Análisis de complejidad, notación Big O, y optimización. Aplicación práctica en problemas reales de programación.'
  },
  {
    id: 3,
    nombre: 'Bases de Datos',
    profesor: 'Ing. Roberto Torres',
    codigo: 'BDD-220',
    semestre: 6,
    horario: 'Lun, Mié 15:00 - 17:00',
    aula: 'Lab 202',
    descripcion: 'SQL, NoSQL y diseño de bases de datos',
    estudiantes: 30,
    color: '#e74c3c',
    progreso: 60,
    contenido: 'Aprenderás diseño de bases de datos relacionales, consultas SQL avanzadas, y bases de datos NoSQL. Incluye normalización, índices, transacciones y optimización de queries.'
  },
  {
    id: 4,
    nombre: 'Ingeniería de Software',
    profesor: 'Ing. Patricia Ruiz',
    codigo: 'IS-230',
    semestre: 6,
    horario: 'Mar, Jue 10:00 - 12:00',
    aula: 'Aula 301',
    descripcion: 'Metodologías ágiles y ciclo de vida del software',
    estudiantes: 25,
    color: '#f39c12',
    progreso: 70,
    contenido: 'Metodologías de desarrollo de software incluyendo Scrum, Kanban y Lean. Ciclo de vida del desarrollo, testing, documentación y buenas prácticas de ingeniería.'
  }
];

export const tasks = [
  {
    id: 1,
    titulo: 'Proyecto Final - Frontend',
    curso: 'Desarrollo Web Avanzado',
    cursoId: 1,
    descripcion: 'Crear una aplicación React con componentes avanzados y manejo de estado.',
    fecha_entrega: '2024-06-15',
    fecha_entrega_display: '15 Jun 2024',
    estado: 'pendiente',
    porcentaje: 0,
    archivo_adjunto: 'proyecto-frontend.pdf'
  },
  {
    id: 2,
    titulo: 'Taller 3 - Recursión',
    curso: 'Algoritmos y Estructuras de Datos',
    cursoId: 2,
    descripcion: 'Resolver 5 problemas de programación recursiva en C++.',
    fecha_entrega: '2024-06-10',
    fecha_entrega_display: '10 Jun 2024',
    estado: 'entregado',
    porcentaje: 100,
    calificacion: 92,
    archivo_adjunto: 'recursion-solutions.zip'
  },
  {
    id: 3,
    titulo: 'Examen Práctico',
    curso: 'Bases de Datos',
    cursoId: 3,
    descripcion: 'Examen en línea sobre normalización y consultas SQL avanzadas.',
    fecha_entrega: '2024-06-20',
    fecha_entrega_display: '20 Jun 2024',
    estado: 'pendiente',
    porcentaje: 0,
    archivo_adjunto: null
  },
  {
    id: 4,
    titulo: 'Documento: Plan de Desarrollo',
    curso: 'Ingeniería de Software',
    cursoId: 4,
    descripcion: 'Crear un plan de desarrollo siguiendo metodología Scrum.',
    fecha_entrega: '2024-06-08',
    fecha_entrega_display: '08 Jun 2024',
    estado: 'entregado',
    porcentaje: 100,
    calificacion: 88,
    archivo_adjunto: 'scrum-plan.docx'
  }
];

export const grades = [
  {
    id: 1,
    curso: 'Desarrollo Web Avanzado',
    cursoId: 1,
    calificaciones: [
      { nombre: 'Participación', valor: 85, peso: 10 },
      { nombre: 'Tareas', valor: 90, peso: 20 },
      { nombre: 'Proyecto Intermedio', valor: 88, peso: 30 },
      { nombre: 'Proyecto Final', valor: null, peso: 40 }
    ],
    promedio: 88,
    estado: 'En curso'
  },
  {
    id: 2,
    curso: 'Algoritmos y Estructuras de Datos',
    cursoId: 2,
    calificaciones: [
      { nombre: 'Talleres', valor: 92, peso: 30 },
      { nombre: 'Quices', valor: 89, peso: 20 },
      { nombre: 'Examen Parcial', valor: 85, peso: 25 },
      { nombre: 'Examen Final', valor: 90, peso: 25 }
    ],
    promedio: 89,
    estado: 'Completado'
  },
  {
    id: 3,
    curso: 'Bases de Datos',
    cursoId: 3,
    calificaciones: [
      { nombre: 'Prácticas', valor: 87, peso: 25 },
      { nombre: 'Proyecto', valor: null, peso: 35 },
      { nombre: 'Examen', valor: null, peso: 40 }
    ],
    promedio: 87,
    estado: 'En curso'
  },
  {
    id: 4,
    curso: 'Ingeniería de Software',
    cursoId: 4,
    calificaciones: [
      { nombre: 'Documentos', valor: 88, peso: 30 },
      { nombre: 'Presentaciones', valor: 85, peso: 20 },
      { nombre: 'Trabajo en Equipo', valor: 90, peso: 25 },
      { nombre: 'Proyecto Final', valor: null, peso: 25 }
    ],
    promedio: 88,
    estado: 'En curso'
  }
];

export const messages = [
  {
    id: 1,
    remitente: 'Dr. Carlos López',
    curso: 'Desarrollo Web Avanzado',
    asunto: 'Retroalimentación sobre tu proyecto',
    contenido: 'Excelente trabajo en la implementación de hooks. Considera mejorar el manejo de errores en el formulario.',
    fecha: '2024-06-05',
    leido: false,
    avatar: '👨‍🏫'
  },
  {
    id: 2,
    remitente: 'Sistema de Notificaciones',
    curso: 'Algoritmos y Estructuras de Datos',
    asunto: 'Calificaciones disponibles',
    contenido: 'Tus calificaciones del Taller 3 están disponibles en la plataforma. Obtuviste 92/100.',
    fecha: '2024-06-03',
    leido: true,
    avatar: '🔔'
  },
  {
    id: 3,
    remitente: 'Dra. María García',
    curso: 'Algoritmos y Estructuras de Datos',
    asunto: 'Tutoría disponible',
    contenido: 'Tengo disponibilidad para tutoría el viernes a las 3 PM. ¿Te interesa?',
    fecha: '2024-06-01',
    leido: true,
    avatar: '👩‍🏫'
  }
];

export const announcements = [
  {
    id: 1,
    titulo: 'Próximo evento: Charla de empleadores',
    descripcion: 'Las principales empresas de tecnología visitarán el campus.',
    fecha: '2024-06-12',
    prioridad: 'alta',
    icon: '📢'
  },
  {
    id: 2,
    titulo: 'Actualización de horarios de atención',
    descripcion: 'El decanato atiende de lunes a viernes de 8 AM a 5 PM.',
    fecha: '2024-06-04',
    prioridad: 'normal',
    icon: '📋'
  },
  {
    id: 3,
    titulo: 'Recordatorio: Registro de cursos',
    descripcion: 'Tienes hasta el 10 de junio para registrar tus cursos del próximo semestre.',
    fecha: '2024-06-02',
    prioridad: 'alta',
    icon: '⏰'
  }
];

export const studyMaterials = [
  {
    id: 1,
    titulo: 'Introducción a React',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'guía',
    contenido: 'React es una librería de JavaScript para construir interfaces de usuario. Aprenderás sobre componentes, JSX, state, props y hooks. Los componentes son reutilizables y permiten crear aplicaciones escalables. JSX es la sintaxis que permite escribir HTML dentro de JavaScript. State permite a los componentes mantener datos internos que pueden cambiar. Props son la forma de pasar datos de un componente padre a uno hijo. Los Hooks permiten usar estado y otras características sin escribir clases.',
    fecha_creacion: '2024-05-15',
    descargas: 245,
    relevancia: 'alta',
    formato: 'PDF'
  },
  {
    id: 2,
    titulo: 'Complejidad Algorítmica - Big O',
    cursoId: 2,
    curso: 'Algoritmos y Estructuras de Datos',
    tipo: 'documento',
    contenido: 'La notación Big O nos permite analizar la eficiencia de los algoritmos. O(1) es tiempo constante, O(n) es lineal, O(n²) es cuadrático, O(log n) es logarítmico, y O(n!) es factorial. Comprender la complejidad es esencial para escribir código eficiente. Los algoritmos de búsqueda y ordenamiento tienen diferentes complejidades. Por ejemplo, búsqueda lineal es O(n), búsqueda binaria es O(log n), bubble sort es O(n²) y merge sort es O(n log n).',
    fecha_creacion: '2024-05-20',
    descargas: 312,
    relevancia: 'muy alta',
    formato: 'DOCX'
  },
  {
    id: 3,
    titulo: 'Diseño y Normalización de Bases de Datos',
    cursoId: 3,
    curso: 'Bases de Datos',
    tipo: 'tutorial',
    contenido: 'La normalización es el proceso de organizar datos en una base de datos. Evita la redundancia y mejora la integridad de los datos. Existen varias formas normales: 1NF (datos atómicos), 2NF (sin dependencias parciales), 3NF (sin dependencias transitivas). El diseño adecuado de una base de datos es fundamental para el rendimiento. Debes identificar entidades, atributos y relaciones. Usa diagramas ER para visualizar la estructura. Las claves primarias identifican registros únicamente, las claves foráneas establecen relaciones entre tablas.',
    fecha_creacion: '2024-05-18',
    descargas: 198,
    relevancia: 'alta',
    formato: 'PDF'
  },
  {
    id: 4,
    titulo: 'Metodología Scrum - Guía Práctica',
    cursoId: 4,
    curso: 'Ingeniería de Software',
    tipo: 'guía',
    contenido: 'Scrum es un marco de trabajo ágil para desarrollo de software. Se basa en sprints cortos, típicamente de 2 semanas. El Product Owner gestiona el backlog, el Scrum Master facilita el proceso, y el equipo de desarrollo entrega incrementos. Los eventos principales son: planificación del sprint, standup diario, revisión del sprint y retrospectiva. El backlog del producto contiene todas las historias de usuario priorizadas. Durante la retrospectiva se discuten mejoras para el siguiente sprint. Scrum enfatiza la comunicación y la adaptación continua.',
    fecha_creacion: '2024-05-22',
    descargas: 156,
    relevancia: 'media',
    formato: 'PPTX'
  },
  {
    id: 5,
    titulo: 'JavaScript Avanzado - ES6 y Más Allá',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'guía',
    contenido: 'Domina las características modernas de JavaScript. Aprenderás sobre arrow functions, destructuring, spread operator, template literals, clases, módulos, promesas y async/await. ES6 (ECMAScript 2015) revolucionó JavaScript con características funcionales poderosas. Las arrow functions proporcionan una sintaxis más concisa. El destructuring permite extraer valores de objetos y arrays fácilmente. Las promesas manejan operaciones asincrónicas. Async/await es azúcar sintáctico que facilita el trabajo con promesas. Los módulos permiten organizar código en archivos separados.',
    fecha_creacion: '2024-05-10',
    descargas: 421,
    relevancia: 'muy alta',
    formato: 'PDF'
  },
  {
    id: 6,
    titulo: 'Node.js y Backend con Express',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'documento',
    contenido: 'Construye servidores web escalables con Node.js y Express. Aprenderás sobre middlewares, enrutamiento, manejo de errores, autenticación y autorización. Node.js es un entorno de ejecución de JavaScript en el servidor. Express es un framework minimalista pero poderoso para crear APIs REST. Los middlewares son funciones que procesan solicitudes. El enrutamiento define qué ocurre para diferentes URLs y métodos HTTP. La autenticación verifica la identidad del usuario. La autorización controla qué pueden hacer los usuarios autenticados.',
    fecha_creacion: '2024-05-12',
    descargas: 356,
    relevancia: 'muy alta',
    formato: 'DOCX'
  },
  {
    id: 7,
    titulo: 'APIs REST - Diseño y Mejores Prácticas',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'tutorial',
    contenido: 'Diseña APIs REST profesionales y escalables. Cubrimos conceptos como recursos, verbos HTTP, códigos de estado, versionado y seguridad. REST (Representational State Transfer) es un estilo arquitectónico para sistemas distribuidos. Los recursos son entidades identificadas por URLs. Los verbos HTTP (GET, POST, PUT, DELETE) especifican operaciones. Los códigos de estado HTTP comunican el resultado (200, 404, 500, etc.). El versionado permite cambios compatibles hacia atrás. La seguridad incluye autenticación, HTTPS y rate limiting.',
    fecha_creacion: '2024-05-14',
    descargas: 289,
    relevancia: 'alta',
    formato: 'PDF'
  },
  {
    id: 8,
    titulo: 'Testing en JavaScript - Jest y Testing Library',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'guía',
    contenido: 'Escribe pruebas unitarias e integración confiables. Aprenderás sobre Jest, Testing Library, mocks, stubs y cobertura de código. Las pruebas automatizadas son críticas para mantener calidad. Jest es un framework de testing completo. Testing Library ayuda a escribir pruebas enfocadas en el comportamiento del usuario. Los mocks simulan funciones o módulos. Los stubs reemplazan funciones con implementaciones controladas. La cobertura de código mide cuánto código está siendo testeado.',
    fecha_creacion: '2024-05-16',
    descargas: 234,
    relevancia: 'alta',
    formato: 'TXT'
  },
  {
    id: 9,
    titulo: 'TypeScript para Desarrollo Web',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'documento',
    contenido: 'Mejora la calidad de tu código con TypeScript. Cubrimos tipos básicos, interfaces, genéricos, decoradores y configuración. TypeScript añade tipado estático a JavaScript. Los tipos previenen errores comunes. Las interfaces definen la estructura de objetos. Los genéricos permiten código reutilizable con tipos. Los decoradores modifican clases y métodos. La configuración de tsconfig.json personaliza el comportamiento del compilador.',
    fecha_creacion: '2024-05-17',
    descargas: 298,
    relevancia: 'alta',
    formato: 'PPTX'
  },
  {
    id: 10,
    titulo: 'Deployment y DevOps - Producción con Vercel y Docker',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'tutorial',
    contenido: 'Despliega aplicaciones web a producción de forma profesional. Aprenderás sobre CI/CD, Docker, Vercel, variables de entorno y monitoreo. El deployment es el proceso de poner código en servidores reales. CI/CD automatiza testing y deployment. Docker containeriza aplicaciones para portabilidad. Vercel es una plataforma para desplegar aplicaciones frontend. Las variables de entorno almacenan configuración sensible de forma segura. El monitoreo permite detectar y resolver problemas en producción.',
    fecha_creacion: '2024-05-19',
    descargas: 267,
    relevancia: 'alta',
    formato: 'PDF'
  },
  {
    id: 11,
    titulo: 'Hooks Avanzados de React',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'documento',
    contenido: 'Domina hooks más allá de useState y useEffect. Aprenderás sobre useContext, useReducer, useCallback, useMemo y custom hooks. Los hooks permiten usar estado sin clases. useContext evita prop drilling. useReducer gestiona estado complejo. useCallback memoriza funciones. useMemo memoriza valores. Los custom hooks reutilizan lógica de estado entre componentes.',
    fecha_creacion: '2024-05-21',
    descargas: 213,
    relevancia: 'media',
    formato: 'DOCX'
  },
  {
    id: 12,
    titulo: 'Gestión del Estado - Redux y Context API',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'guía',
    contenido: 'Gestiona estado complejo en aplicaciones grandes. Cubrimos Redux, acciones, reducers y middleware. También exploramos Context API como alternativa. Redux centraliza el estado de la aplicación. Las acciones describen cambios. Los reducers especifican cómo cambia el estado. El middleware permite lógica asincrónica. Context API es una solución más ligera para pasar datos a través de la jerarquía de componentes.',
    fecha_creacion: '2024-05-23',
    descargas: 189,
    relevancia: 'media',
    formato: 'PDF'
  },
  {
    id: 13,
    titulo: 'Optimización de Rendimiento Web',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'tutorial',
    contenido: 'Crea aplicaciones web rápidas y eficientes. Aprenderás sobre lazy loading, code splitting, memoización, y herramientas de profiling. El rendimiento es crucial para la experiencia del usuario. Lazy loading carga recursos solo cuando se necesitan. Code splitting divide el bundle en piezas más pequeñas. La memoización evita renderizados innecesarios. Las herramientas como Lighthouse miden el rendimiento. El análisis de bundles identifica código innecesario.',
    fecha_creacion: '2024-05-25',
    descargas: 201,
    relevancia: 'media',
    formato: 'TXT'
  },
  {
    id: 14,
    titulo: 'Seguridad Web - Prevención de Vulnerabilidades',
    cursoId: 1,
    curso: 'Desarrollo Web Avanzado',
    tipo: 'documento',
    contenido: 'Protege tus aplicaciones contra ataques comunes. Cubrimos OWASP Top 10, XSS, CSRF, SQL Injection, y HTTPS. Las vulnerabilidades de seguridad pueden causar pérdidas graves. XSS permite inyectar scripts maliciosos. CSRF realiza acciones sin consentimiento. SQL Injection manipula consultas de base de datos. HTTPS cifra comunicaciones. OWASP proporciona las top 10 vulnerabilidades más críticas.',
    fecha_creacion: '2024-05-24',
    descargas: 176,
    relevancia: 'muy alta',
    formato: 'PPTX'
  }
];
