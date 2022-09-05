<template>
  <div class="w-full flex items-end justify-end">
    <div class="w-1/2">
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
