<template>
  <VueTailwindDatePicker v-model="dateValue"></VueTailwindDatePicker>
</template>

<script setup>
import VueTailwindDatePicker from './VueTailwindDatePicker.vue'
import { ref } from 'vue'
const dateValue = ref('')
</script>
