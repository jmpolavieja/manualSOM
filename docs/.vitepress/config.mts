import {defineConfig} from 'vitepress'
import {withMermaid} from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config

export default withMermaid(
  defineConfig({
    base: "/manualSOM/",
    title: "Sistemas Operativos Monopuesto",
    description: "Un manual y guía de la asignatura 1º SMR",
    // 🔻 Habilita el renderizado de ecuaciones matemáticas:
    markdown: {
      math: true
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        {text: 'Home', link: '/'},
        {text: '1ª Evaluación', link: '/01-01-tema-sistema-informatico'}
      ],

      sidebar: [
        {
          text: 'UD1: Sistemas Informáticos (RA1)',
          collapsed: false,
          items: [
            {text: '1.1 Tema: El Sistema Informático', link: '/01-01-tema-sistema-informatico'},
            {text: '1.1 Práctica: Inspección de Hardware', link: '/01-01-cuestionario-sistema-informatico'},
            {text: '1.2 Tema: Representación de la Información', link: '/01-02-resumen-representacion-informacion'}
          ]
        },
        {
          text: 'UD2: Introducción a los SSOO (RA1)',
          collapsed: false,
          items: [
            {text: '2.1 Tema: Arquitectura y Procesos', link: '/02-01-tema-arquitectura-y-procesos'},
            {text: '2.1 Cuestionario y práctica arquitectura y procesos.', link: '/02-01-cuestionario-sistemas-operativos'},
            {text: '2.2 Tema: Sistemas de Archivos y Comandos', link: '/02-02-tema-sistemas-archivos-comandos'},
            {text: '2.2 Práctica: Administración por Terminal', link: '/02-02-practica-administracion-terminal'}
          ]
        },
        {
          text: 'UD3: Virtualización de Sistemas (RA5)',
          collapsed: false,
          items: [
            {text: '3.1 Tema: Fundamentos de Virtualización', link: '/03-01-tema-introduccion-virtualizacion'},
            {text: '3.1 Cuestionario: Hipervisores y MVs', link: '/03-01-cuestionario-virtualizacion'},
            {text: '3.2 Tema: Manual de VirtualBox 6.1', link: '/03-02-tema-manual-virtualbox'},
            {text: '3.2 Práctica: Instalación VirtualBox y Linux', link: '/03-02-practica-instalacion-virtualbox-linux'}
          ]
        },
        {
          text: 'UD4: Instalación de SSOO (RA2)',
          collapsed: false,
          items: [
            {
              text: '4.1 Tema: Discos, Particiones y Sistemas de Archivos',
              link: '/04-01-tema-estructura-discos-particiones'
            },
            {text: '4.1 Cuestionario: Planificación de Disco', link: '/04-01-cuestionario-planificacion-particiones'},
            {text: '4.2 Tema: Proceso de Instalación y Licencias', link: '/04-02-tema-proceso-instalacion-licencias'},
            {text: '4.2 Práctica: Despliegue de SSOO en MV', link: '/04-02-practica-instalacion-sistemas'}
          ]
        }
      ],

      socialLinks: [
        {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
      ]
    },
    // 🔻 Configuración necesaria para procesar correctamente Mermaid en Vite:
    vite: {
      optimizeDeps: {
        include: ['mermaid', 'dayjs', 'cytoscape', 'khroma']
      },
      ssr: {
        noExternal: ['vitepress-plugin-mermaid', 'mermaid']
      }
    }
  })
)
