# Installation

::: warning
⚠️ Vue Tailwind Datepicker uses Tailwind CSS (with the @tailwindcss/forms plugin) & Day.js under the hood, **you must install those packages** before.
You can follow [this tutorial](https://dev.to/elreco/add-a-tailwind-datepicker-to-your-vue-3-application-57j2).
:::

## Install via npm

```
$ npm install vue-tailwind-datepicker
```

## Install via yarn

```
$ yarn add vue-tailwind-datepicker
```

## How it works

Setup the component globally

```js
// main.js
import { createApp } from "vue";
import App from "@/App.vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
// ...

const app = createApp(App);

app.use(VueTailwindDatepicker);
app.mount("#app");
```

Setup as a single component

```vue
<!-- SFC file -->
<script setup>
import { ref } from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const dateValue = ref([]);
</script>

<template>
  <vue-tailwind-datepicker v-model="dateValue" />
</template>
```

## Add Tailwind CSS configuration

```js
// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.sky, // Light mode Datepicker color
        "vtd-secondary": colors.gray, // Dark mode Datepicker color
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
```

## Setup in Nuxt3

1. Install Vue Tailwind Datepicker along with Tailwind CSS and Day.js.

2. Create a plugin for Vue Tailwind Datepicker in the plugins directory of your Nuxt project. For example, vue-tailwind-datepicker.js:

```js
import { defineNuxtPlugin } from '#app'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueTailwindDatepicker', VueTailwindDatepicker)
})
```

3. Register the plugin in your nuxt.config.js:

```js
export default {
  plugins: [
    '~/plugins/vue-tailwind-datepicker.js'
  ],
}

```

4. Now, you can use the <vue-tailwind-datepicker> component in any of your Nuxt pages or components.

