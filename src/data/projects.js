// Datos de proyectos
export const projects = [
  {
    id: 'portfolio-react',
    title: 'Flowcode Studio Portfolio',
    description:
      'Aplicación web profesional creada para presentar perfil, formación, áreas técnicas, proyectos y contacto mediante una interfaz responsiva, organizada y adaptable.',
    status: 'Proyecto activo',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Vercel Functions',
      'Nodemailer',
      'React Icons',
      'Sharp',
      'Git',
    ],
    path: '/proyectos/portfolio-react',
    demoUrl: '',
    repositoryUrl: '',
    summary:
      'Flowcode Studio Portfolio es una aplicación web profesional desarrollada para presentar perfil, formación académica, áreas técnicas, proyectos y contacto mediante una interfaz clara, responsiva y estructurada.',
    objective:
      'El objetivo del proyecto es construir una presencia profesional en línea que permita mostrar información pública del perfil, proyectos desarrollados y un canal de contacto funcional, manteniendo protegidos los datos personales sensibles.',
    features: [
      'Diseño responsivo para móvil, tablet y escritorio.',
      'Modo claro y oscuro.',
      'Navegación interna por secciones.',
      'Página individual para detalle de proyectos.',
      'Sección de áreas técnicas y herramientas.',
      'Formulario de contacto funcional.',
      'Backend serverless para envío de mensajes.',
      'Protección de credenciales mediante variables de entorno.',
      'Optimización de imagen principal en formato WebP.',
      'Estructura organizada por componentes, páginas, datos y recursos visuales.',
    ],
    technicalDecisions: [
      'Se utilizó una estructura basada en componentes para separar layout, secciones, elementos reutilizables y contenido del portafolio.',
      'El formulario de contacto se conectó a una función serverless para procesar mensajes sin exponer credenciales en el frontend.',
      'Las variables de entorno permiten proteger la configuración del servicio de correo.',
      'La imagen principal fue optimizada en formato WebP para mejorar el rendimiento de carga.',
      'El contenido se organizó en archivos de datos para facilitar mantenimiento, actualización de proyectos y crecimiento del portafolio.',
    ],
    result:
      'El resultado es una aplicación web funcional, responsiva y preparada para publicación, con contenido profesional, navegación clara, formulario operativo y estructura lista para integrar nuevos proyectos.',
  },
  {
    id: 'crud-react',
    title: 'Sistema CRUD',
    description:
      'Proyecto planificado para trabajar gestión de información, formularios, validación de datos, estructura de componentes y operaciones básicas de consulta, creación, edición y eliminación.',
    status: 'En planificación',
    technologies: ['React', 'JavaScript', 'PostgreSQL', 'API'],
    path: '/proyectos/crud-react',
    demoUrl: '',
    repositoryUrl: '',
    summary:
      'Proyecto planificado para construir una solución de gestión de información mediante operaciones de creación, consulta, edición y eliminación de registros.',
    objective:
      'El objetivo será aplicar fundamentos de desarrollo de software, manejo de datos, formularios, validaciones e integración con servicios de información.',
    features: [
      'Gestión de registros.',
      'Formularios para captura de información.',
      'Validación de datos.',
      'Organización de información en interfaz responsiva.',
      'Integración con API y base de datos.',
    ],
    technicalDecisions: [
      'El proyecto se estructurará por componentes para separar responsabilidades.',
      'La información se organizará mediante una base de datos relacional.',
      'La interfaz se diseñará con enfoque responsivo y mantenimiento futuro.',
    ],
    result:
      'Proyecto en planificación para fortalecer el manejo de datos, formularios, estructura de componentes e integración con backend.',
  },
  {
    id: 'dashboard-api',
    title: 'Dashboard con integración de datos',
    description:
      'Proyecto planificado para consumir información externa, organizar datos y presentarlos mediante una interfaz clara, responsiva y orientada a la visualización de indicadores.',
    status: 'En planificación',
    technologies: ['React', 'API', 'Tailwind CSS', 'JavaScript'],
    path: '/proyectos/dashboard-api',
    demoUrl: '',
    repositoryUrl: '',
    summary:
      'Proyecto planificado para consumir datos desde una API, organizarlos y presentarlos visualmente mediante una interfaz clara y responsiva.',
    objective:
      'El objetivo será transformar datos externos en información visual útil mediante tarjetas, secciones de resumen e indicadores.',
    features: [
      'Consumo de datos desde API.',
      'Visualización de información en tarjetas.',
      'Organización de indicadores.',
      'Interfaz responsiva.',
      'Manejo de estados de carga y error.',
    ],
    technicalDecisions: [
      'El proyecto separará la lógica de consumo de datos de la presentación visual.',
      'La interfaz se organizará en componentes reutilizables.',
      'El diseño priorizará claridad, legibilidad y adaptación a distintos dispositivos.',
    ],
    result:
      'Proyecto en planificación para fortalecer consumo de APIs, organización de información y visualización de datos.',
  },
]