# Installation

::: warning
⚠️ Vute Tailwind Datepicker use Tailwind CSS & Day.js under the hood, **you must installing those packages** before.
:::

## Install via npm

```
$ npm install -S litepie-datepicker 
```

## Install via yarn

```
$ yarn add litepie-datepicker 
```

## How it works

Setup the component globally

```js
// main.js
import { createApp } from 'vue'
import App from '@/App.vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
// ...

const app = createApp(App)

app.use(VueTailwindDatepicker)
app.mount('#app')
```

Setup as a single component

```vue
<!-- SFC file -->
<script setup>
  import { ref } from 'vue'
  import VueTailwindDatepicker from 'vue-tailwind-datepicker'

  const dateValue = ref([])
</script>

<template>
  <vue-tailwind-datepicker v-model="dateValue" />
</template>
```

## Add Tailwind CSS configuration

```js
// tailwind.config.js
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.sky, // Light mode Datepicker color
        "vtd-secondary": colors.gray, // Dark mode Datepicker color
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
```