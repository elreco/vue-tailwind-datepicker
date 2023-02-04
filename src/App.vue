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
        @select:month="onSelectSomething($event)"
        @select:year="onSelectSomething($event)"
        @click:prev="onClickSomething($event)"
        @click:next="onClickSomething($event)"
      />
    </div>
  </div>
</template>

<script setup>
import VueTailwindDatePicker from './VueTailwindDatePicker.vue'
import dayjs from 'dayjs'
import { ref } from 'vue'

const dateValue = ref({
  startDate: dayjs(),
  endDate: dayjs().add(7, 'days').format('YYYY-MM-DD HH:mm:ss')
})

const dDate = (date) => dayjs(date).isBefore(dayjs().subtract(1, 'day'))

const onSelectSomething = (newDate) => {
  console.log(newDate instanceof dayjs)
  console.log(newDate)
}

const onClickSomething = (newDate) => {
  console.log(newDate instanceof dayjs)
  console.log(newDate)
}
</script>
