# Make time work.

CodeRocket UI is a Vue library for dates, clock times and availability. Use the ready-to-use components or compose your own interface from headless primitives.

**The date, range and time components are MIT licensed.** Availability Pro is an optional commercial extension. The library works without AI or a CodeRocket account.

CodeRocket grows in the existing [Vue Tailwind Datepicker repository](https://github.com/elreco/vue-tailwind-datepicker). The original `@coderocketapp/vue-tailwind-datepicker` package retains its own API and release cycle.

[Install the library →](./guides/getting-started)

## A first example

<script setup>
import { ref } from 'vue'
const date = ref('2026-10-15')
</script>

<CrDatePicker v-model="date" label="Choose a date" locale="en-GB" />

Current ISO value: `{{ date }}`

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { CrDatePicker } from '@coderocketapp/vue'
import '@coderocketapp/vue/style.css'
const date = ref<string | null>('2026-10-15')
</script>
<template><CrDatePicker v-model="date" label="Choose a date" /></template>
```

## What is stable in the model?

Dates are Gregorian `YYYY-MM-DD` strings. Clock times are local `HH:mm` strings. A timezone belongs to an availability schedule, not to a date-only selection. Display formatting never changes the stored value.

The initial release is **0.1**, a pilot release. Pin your dependency until the first stable 1.0 release.
