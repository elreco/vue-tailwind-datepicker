<script setup lang="ts">
import { ref } from 'vue'
import { CrDatePicker, CrDateRangePicker, CrTimePicker, type DateRangeValue } from '@coderocketapp/vue'
const date = ref<string | null>('2026-10-15')
const range = ref<DateRangeValue | null>(null)
const time = ref<string | null>('09:30')
</script>
<template>
  <main style="max-width: 32rem; margin: 3rem auto; display: grid; gap: 1rem; font-family: system-ui">
    <h1>CodeRocket UI</h1>
    <CrDatePicker v-model="date" label="Date" locale="fr-FR" />
    <CrDateRangePicker v-model="range" label="Période" locale="fr-FR" />
    <CrTimePicker v-model="time" label="Heure" locale="fr-FR" />
    <pre>{{ JSON.stringify({ date, range, time }, null, 2) }}</pre>
  </main>
</template>
