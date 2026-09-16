import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'CodeRocket UI',
  description: 'Vue components for dates, time and availability.',
  base: '/docs/',
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">↗</text></svg>',
      },
    ],
  ],
  themeConfig: {
    logo: undefined,
    siteTitle: 'CodeRocket UI',
    search: { provider: 'local' },
    nav: [
      { text: 'Website', link: 'https://coderocket-ui.netlify.app/' },
      { text: 'Original datepicker', link: 'https://vue-tailwind-datepicker.com/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/elreco/vue-tailwind-datepicker' }],
    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/guides/getting-started' },
          { text: 'Customisation', link: '/guides/customisation' },
          { text: 'Nuxt & SSR', link: '/guides/nuxt' },
          { text: 'Migration', link: '/guides/migration' },
        ],
      },
      {
        text: 'Free components',
        items: [
          { text: 'Date picker', link: '/components/date-picker' },
          { text: 'Date ranges', link: '/components/date-range' },
          { text: 'Time picker', link: '/components/time-picker' },
        ],
      },
      {
        text: 'Availability Pro',
        items: [
          { text: 'Overview & integration', link: '/pro/' },
          { text: 'Schedule model', link: '/pro/schedule' },
          { text: 'Optional AI', link: '/pro/ai' },
          { text: 'License', link: '/pro/license' },
        ],
      },
    ],
    footer: { message: 'Open source foundations · MIT', copyright: 'CodeRocket © 2026' },
  },
})
