# @coderocketapp/vue

Vue components for dates and local times. MIT licensed, with ready-to-use styles and headless primitives.

```sh
npm install @coderocketapp/vue
```

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { CrDatePicker } from '@coderocketapp/vue'
import '@coderocketapp/vue/style.css'
const date = ref<string | null>('2026-10-15')
</script>
<template><CrDatePicker v-model="date" label="Launch date" locale="en-GB" /></template>
```

Also exports `CrDateRangePicker`, `CrTimePicker`, ISO model types and date-format helpers. Requires Vue 3.5. Tailwind installation is optional. ESM with TypeScript declarations.

Headless primitives: `@coderocketapp/vue/headless`. Pure date helpers: `@coderocketapp/vue/core`.

[Documentation](https://ui.coderocket.app/docs/) · [Source](https://github.com/elreco/vue-tailwind-datepicker/tree/codex/coderocket-ui/coderocket)

This is the new CodeRocket API, separate from `@coderocketapp/vue-tailwind-datepicker`. Version 0.1 is a pilot; pin dependencies while evaluating.
