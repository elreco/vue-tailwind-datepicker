import DefaultTheme from 'vitepress/theme'
import { CrDatePicker, CrDateRangePicker, CrTimePicker } from '@coderocketapp/vue'
import '@coderocketapp/vue/style.css'
import './custom.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component('CrDatePicker', CrDatePicker)
    app.component('CrDateRangePicker', CrDateRangePicker)
    app.component('CrTimePicker', CrTimePicker)
  },
}
