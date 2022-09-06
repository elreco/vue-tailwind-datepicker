export default {
  title: 'Vue Tailwind Datepicker',
  description: 'Components, composables and configurations for Vue 3',
  themeConfig: {
    logo: 'https://github.com/elreco/vue-tailwind-datepicker/blob/main/docs/logo.png?raw=true',
    socialLinks: [{ icon: 'github', link: 'https://github.com/elreco/vue-tailwind-datepicker' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022'
    },
    sidebar: [
      {
        text: 'Get Started',
        items: [{ text: 'Installation', link: '/installation' }]
      },
      {
        text: 'Components',
        collapsible: true,
        items: [
          { text: 'Album', link: '/components/album' },
          { text: 'Breadcrumb', link: '/components/breadcrumb' },
          { text: 'Button', link: '/components/button' },
          { text: 'Card', link: '/components/card' },
          { text: 'Color Indicator', link: '/components/color-indicator' },
          { text: 'Confirm Button', link: '/components/confirm-button' },
          { text: 'Detail Title', link: '/components/detail-title' },
          { text: 'Dropdown', link: '/components/dropdown' },
          { text: 'Headline', link: '/components/headline' },
          { text: 'Loader', link: '/components/loader' },
          { text: 'Modal', link: '/components/modal' },
          { text: 'Notification', link: '/components/notification' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Progress Bar', link: '/components/progress-bar' },
          { text: 'Radio Group', link: '/components/radio-group' },
          { text: 'Selector', link: '/components/selector' },
          { text: 'Tab', link: '/components/tab' },
          { text: 'Table', link: '/components/table' },
          { text: 'Tip', link: '/components/tip' },
          { text: 'Tooltip', link: '/components/tooltip' }
        ]
      },
      {
        text: 'Form Components',
        collapsible: true,
        items: [
          { text: 'Checkbox', link: '/components/form/checkbox' },
          { text: 'Color Picker', link: '/components/form/color-picker' },
          { text: 'Image Uploader', link: '/components/form/image-uploader' },
          { text: 'Input', link: '/components/form/input' },
          { text: 'Radio', link: '/components/form/radio' },
          { text: 'Select', link: '/components/form/select' }
        ]
      }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/installation' },
      { text: 'Components', link: '/components/album' }
    ]
  }
}