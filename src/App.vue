<template>
  <div class="tw-p-10 tw-bg-sky-50 tw-min-h-screen">
    <div class="tw-grid tw-grid-rows-2 tw-gap-4">
      <VueTailwindDatePicker
        i18n="en"
        :disable-date="dDate"
        inputClasses="tw-rounded-md tw-bg-red-300 dark:tw-bg-red-300 tw-border-gray-300 tw-shadow-sm focus:tw-border-indigo-500 focus:tw-ring-indigo-500 sm:tw-text-sm"
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
        inputClasses="tw-rounded-md tw-bg-red-300 dark:tw-bg-red-300 tw-border-gray-300 tw-shadow-sm focus:tw-border-indigo-500 focus:tw-ring-indigo-500 sm:tw-text-sm"
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
