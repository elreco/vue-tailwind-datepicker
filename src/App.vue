<template>
  <div class="p-10 bg-sky-50 min-h-screen">
    <div class="grid grid-rows-2 gap-4">
      <VueTailwindDatePicker
        i18n="en"
        :disable-date="dDate"
        inputClasses="rounded-md bg-red-300 dark:bg-red-300 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        v-model="dateValue"
        @select:month="onSelectSomething($event)"
        @select:year="onSelectSomething($event)"
        @select:right:month="onSelectSomething($event)"
        @select:right:year="onSelectSomething($event)"
        @click:prev="onClickSomething($event)"
        @click:next="onClickSomething($event)"
        @click:right:prev="onClickSomething($event)"
        @click:right:next="onClickSomething($event)"
      />

      <VueTailwindDatePicker
        as-single
        i18n="en"
        :disable-date="dDate"
        inputClasses="rounded-md bg-red-300 dark:bg-red-300 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        v-model="dateValue.startDate"
      ></VueTailwindDatePicker>
    </div>
  </div>
</template>

<script setup>
import VueTailwindDatePicker from './VueTailwindDatePicker.vue'
import dayjs from 'dayjs'
import { ref } from 'vue'

const dateValue = ref({
  startDate: "2022-11-06 18:08:49",
  endDate: dayjs().format('YYYY-MM-DD HH:mm:ss')
})

const dDate = (date) => {
  return date < new Date() || date > new Date(2023, 0, 8);
}
</script>
