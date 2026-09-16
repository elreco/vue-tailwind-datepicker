# Date ranges

<script setup>
import { ref } from 'vue'
const value = ref({start:'2026-10-19',end:'2026-10-23'})
</script>
<CrDateRangePicker v-model="value" label="First sprint" />

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { CrDateRangePicker, type DateRangeValue } from '@coderocketapp/vue'
const period = ref<DateRangeValue | null>(null)
</script>
<template><CrDateRangePicker v-model="period" label="Project period" /></template>
```

Shares `label`, `locale`, `placeholder`, `min`, `max`, `disabled` and `weekStartsOn` with the date picker. `modelValue` is `{ start: 'YYYY-MM-DD', end: 'YYYY-MM-DD' } | null`.

The selected endpoints are inclusive calendar dates. A partial selection remains an internal draft; the component emits only when both endpoints are selected. Closing without completing a range preserves the last complete value. Clear emits `null`.

Use explicit conversion when translating inclusive date ranges to time intervals in your own backend.
