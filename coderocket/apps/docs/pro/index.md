# Availability Pro

A commercial Vue editor for weekly availability, alternating weeks, multiple time windows and date-specific exceptions. The editor, validation and occurrence engine are delivered with TypeScript declarations and source.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { AvailabilityEditor, createAvailability } from '@coderocketapp/availability-pro'
import '@coderocketapp/vue/style.css'
import '@coderocketapp/availability-pro/style.css'
// In a real app, obtain this date from request data, in the selected timezone.
const today = '2026-10-01'
const schedule = ref(createAvailability(today, 'Europe/Paris'))
</script>
<template><AvailabilityEditor v-model="schedule" :today="today" locale="fr-FR" /></template>
```

The editor requires `modelValue` and `today`. Optional props: `locale` (default `en-GB`), `disabled`, and `interpret` for your own AI backend. It emits `update:modelValue` only for valid models, and `validation` with the current error list. Invalid edits remain visible until corrected.

`preview-footer` receives occurrences and diagnostics. `footer` receives the draft value and its validity. The preview covers 30 days beginning at the later of `today` and the schedule start date.

No booking storage, payment processing or calendar-provider integration is included. Your application persists schedules and decides how users book appointments.

[See pricing and request a license](https://coderocket-ui.netlify.app/#contact).
