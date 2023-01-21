import { version } from '../../package.json'

export default {
  title: 'Vue Tailwind Datepicker',
  description: 'Components, composables and configurations for Vue 3',
  themeConfig: {
    /* logo: 'https://github.com/elreco/vue-tailwind-datepicker/blob/main/docs/logo.png?raw=true', */
    socialLinks: [{ icon: 'github', link: 'https://github.com/elreco/vue-tailwind-datepicker' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Alexandre Le Corre'
    },
    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Demo', link: '/demo' }
        ]
      },
      {
        text: 'Customization',
        items: [
          { text: 'Theming options', link: '/theming-options' },
          { text: 'Props', link: '/props' },
          { text: 'Events', link: '/events' },
          { text: 'Advanced Features', link: '/advanced-features' },
        ]
      },
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/installation' },
      { text: 'Demo', link: '/demo' },
      {
        text: version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/elreco/vue-tailwind-datepicker/releases'
          },
        ]
      }
    ]
  }
}
