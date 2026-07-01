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

import { TbApi, TbSql } from 'react-icons/tb'

// Datos de áreas técnicas y herramientas
export const skills = [
  {
    id: 'interfaces',
    name: 'Desarrollo de interfaces',
    description:
      'Construcción de interfaces web responsivas, organizadas y orientadas a soluciones digitales.',
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
    id: 'development-workflow',
    name: 'Flujo de desarrollo',
    description:
      'Herramientas para versionar código, gestionar dependencias, consumir APIs y construir proyectos web.',
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
      {
        id: 'apis',
        name: 'APIs',
        icon: TbApi,
        color: '#22C55E',
      },
    ],
  },
  {
    id: 'databases',
    name: 'Bases de datos',
    description:
      'Consulta y gestión de información mediante SQL y bases de datos relacionales.',
    tools: [
      {
        id: 'sql',
        name: 'SQL',
        icon: TbSql,
        color: '#2563EB',
      },
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        icon: SiPostgresql,
        color: '#4169E1',
      },
    ],
  },
]