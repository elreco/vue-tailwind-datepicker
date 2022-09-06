<template>
  <div class="p-10 bg-sky-50 min-h-screen">
    <div class="w-1/4">
      <VueTailwindDatePicker
        inputClasses="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
        v-model="dateValue"
      ></VueTailwindDatePicker>
    </div>
  </div>
</template>

<script setup>
import VueTailwindDatePicker from './VueTailwindDatePicker.vue'
import { ref } from 'vue'
const dateValue = ref('')
</script>
