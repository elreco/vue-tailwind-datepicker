# Nuxt and server rendering

Install `@coderocketapp/vue` and add its CSS once:

```ts
// nuxt.config.ts
export default defineNuxtConfig({ css: ['@coderocketapp/vue/style.css'] })
```

```vue
<script setup lang="ts">
import { CrDatePicker } from '@coderocketapp/vue'
const launchDate = ref<string | null>('2026-10-15')
</script>
<template><CrDatePicker v-model="launchDate" label="Launch date" locale="en-GB" /></template>
```

Pass explicit initial values and locale so server and browser render the same content. Calendar popovers render when opened; an unopened control does not require a browser-only wrapper.

Availability Pro additionally requires an explicit `today` ISO date. Compute it once for the request in the schedule's timezone and pass the same value to server and client. Its pure scheduling functions are available through `/core`, without importing Vue.
