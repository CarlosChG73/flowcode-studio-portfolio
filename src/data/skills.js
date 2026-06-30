// Íconos de tecnologías y herramientas
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNpm,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'

import { FaJava } from 'react-icons/fa'
import {
  FiBookOpen,
  FiCheckSquare,
  FiCloud,
  FiCode,
  FiCpu,
  FiFileText,
  FiGitBranch,
  FiLayers,
  FiLock,
} from 'react-icons/fi'
import { TbApi, TbDatabase, TbNetwork, TbSql } from 'react-icons/tb'

// Datos de áreas técnicas y herramientas
export const skills = [
  {
    id: 'interfaces',
    name: 'Desarrollo de interfaces',
    description:
      'Diseño y construcción de interfaces claras, responsivas y organizadas para soluciones digitales.',
    tools: [
      {
        id: 'html',
        name: 'HTML',
        icon: SiHtml5,
        color: '#E34F26',
      },
      {
        id: 'css',
        name: 'CSS',
        icon: SiCss,
        color: '#1572B6',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#F7DF1E',
      },
      {
        id: 'react',
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#06B6D4',
      },
    ],
  },
  {
    id: 'development-tools',
    name: 'Herramientas de desarrollo',
    description:
      'Herramientas para organizar, versionar, ejecutar y documentar proyectos tecnológicos.',
    tools: [
      {
        id: 'git',
        name: 'Git',
        icon: SiGit,
        color: '#F05032',
      },
      {
        id: 'github',
        name: 'GitHub',
        icon: SiGithub,
        color: '#8B949E',
      },
      {
        id: 'vscode',
        name: 'VS Code',
        icon: FiCode,
        color: '#007ACC',
      },
      {
        id: 'npm',
        name: 'npm',
        icon: SiNpm,
        color: '#CB3837',
      },
      {
        id: 'vite',
        name: 'Vite',
        icon: SiVite,
        color: '#A855F7',
      },
    ],
  },
  {
    id: 'databases',
    name: 'Bases de datos',
    description:
      'Organización, consulta y gestión de información mediante bases de datos relacionales.',
    tools: [
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        icon: SiPostgresql,
        color: '#4169E1',
      },
      {
        id: 'sql',
        name: 'SQL',
        icon: TbSql,
        color: '#2563EB',
      },
      {
        id: 'relational-databases',
        name: 'Bases de datos relacionales',
        icon: TbDatabase,
        color: '#0EA5E9',
      },
    ],
  },
  {
    id: 'backend-integrations',
    name: 'Backend e integraciones',
    description:
      'Integración de funcionalidades del lado servidor para ampliar el alcance de las aplicaciones.',
    tools: [
      {
        id: 'serverless-functions',
        name: 'Funciones serverless',
        icon: FiCloud,
        color: '#38BDF8',
      },
      {
        id: 'apis',
        name: 'APIs',
        icon: TbApi,
        color: '#22C55E',
      },
      {
        id: 'contact-email',
        name: 'Envío de correo desde formularios',
        icon: FiFileText,
        color: '#F59E0B',
      },
      {
        id: 'environment-variables',
        name: 'Variables de entorno',
        icon: FiLock,
        color: '#A78BFA',
      },
    ],
  },
  {
    id: 'academic-formation',
    name: 'Formación técnica',
    description:
      'Base académica en sistemas computacionales, desarrollo de software, redes y tecnologías de información.',
    tools: [
      {
        id: 'java',
        name: 'Java',
        icon: FaJava,
        color: '#E11D48',
      },
      {
        id: 'networks',
        name: 'Redes',
        icon: TbNetwork,
        color: '#14B8A6',
      },
      {
        id: 'software-engineering',
        name: 'Ingeniería de software',
        icon: FiGitBranch,
        color: '#F97316',
      },
      {
        id: 'computer-systems',
        name: 'Sistemas computacionales',
        icon: FiCpu,
        color: '#6366F1',
      },
    ],
  },
  {
    id: 'documentation-support',
    name: 'Documentación y soporte',
    description:
      'Documentación técnica, seguimiento de actividades y comunicación clara para procesos digitales.',
    tools: [
      {
        id: 'technical-documentation',
        name: 'Documentación técnica',
        icon: FiBookOpen,
        color: '#22D3EE',
      },
      {
        id: 'incident-tracking',
        name: 'Seguimiento de incidencias',
        icon: FiCheckSquare,
        color: '#84CC16',
      },
      {
        id: 'project-organization',
        name: 'Organización de proyectos',
        icon: FiLayers,
        color: '#F472B6',
      },
    ],
  },
]