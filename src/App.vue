<template>
  <div class="dark p-10 flex bg-sky-50 min-h-screen">
    <div class="w-1/4 absolute right-32">
      <VueTailwindDatePicker
        inputClasses="rounded-md bg-red-300 dark:bg-red-300 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
