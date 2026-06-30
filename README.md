# Flowcode Studio Portfolio

Portafolio profesional de Carlos Chávez, Ingeniero en Sistemas Computacionales, orientado al desarrollo de software, soluciones digitales y soporte tecnológico.

El proyecto presenta perfil profesional, formación académica, áreas técnicas, proyectos, enlaces profesionales y un formulario de contacto funcional mediante backend serverless.

## Vista general

Flowcode Studio Portfolio es una aplicación web responsiva desarrollada para presentar información profesional de forma clara, organizada y accesible.

El sitio está diseñado para mostrar:

- Perfil profesional.
- Formación académica.
- Áreas técnicas y herramientas.
- Proyectos y soluciones desarrolladas.
- Enlaces profesionales.
- Formulario de contacto con envío de correo.

## Tecnologías principales

- React
- Vite
- Tailwind CSS
- React Router
- Vercel Functions
- Nodemailer
- React Icons
- Sharp
- Git

## Características

- Diseño responsivo para móvil, tablet y escritorio.
- Modo claro y oscuro.
- Navegación interna por secciones.
- Página interna para detalle de proyectos.
- Sección de stack utilizado por proyecto.
- Íconos de tecnologías y herramientas mediante React Icons.
- Imagen principal optimizada en formato WebP.
- Formulario de contacto conectado a una función serverless.
- Variables de entorno para proteger credenciales del servicio de correo.
- Estructura organizada por componentes, páginas, datos, recursos visuales y utilidades.

## Estructura general del proyecto

```txt
flowcode-studio-portfolio/
├── api/
│   └── contact.js
├── public/
├── scripts/
│   └── optimize-images.mjs
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── logos/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Instalación

Clonar el repositorio e instalar dependencias:

```bash
npm install
```

## Ejecución local

Para revisar diseño, contenido y navegación:

```bash
npm run dev
```

El proyecto se ejecutará normalmente en:

```txt
http://localhost:5173
```

## Ejecución con backend serverless

Para probar el formulario de contacto con la función serverless:

```bash
vercel dev
```

El proyecto se ejecutará normalmente en:

```txt
http://localhost:3000
```

## Variables de entorno

El formulario de contacto utiliza variables de entorno para proteger las credenciales del servicio de correo.

Archivo local requerido:

```txt
.env.local
```

Variables necesarias:

```env
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=
```

Estas variables no deben subirse al repositorio.

## Formulario de contacto

El formulario envía la información del usuario a una función serverless ubicada en:

```txt
api/contact.js
```

La función procesa la solicitud y envía el mensaje mediante Nodemailer.

El formulario conserva un campo oculto antispam y validaciones básicas para nombre, correo y mensaje.

## Optimización de imagen

La imagen principal del Hero se optimiza mediante Sharp.

Ejecutar el script:

```bash
node scripts/optimize-images.mjs
```

El archivo optimizado se genera en:

```txt
src/assets/images/hero-flowcode-studio.webp
```

## Build de producción

Para generar la versión de producción:

```bash
npm run build
```

Los archivos finales se generan en:

```txt
dist/
```

## Estado del proyecto

Proyecto activo en desarrollo.

El portafolio cuenta con una base funcional y responsiva, formulario de contacto operativo, contenido profesional inicial y estructura preparada para integrar nuevos proyectos.

## Autor

Carlos Chávez  
Flowcode Studio