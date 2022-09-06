<template>
  <div class="flex gap-2 flex-wrap items-start w-full justify-end md:w-auto lg:items-start lg:justify-start xl:items-center flex-wrap w-1/2 mt-5 sm:mt-11 lg:mt-0">
    <div class="w-1/4 absolute top-4">
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
