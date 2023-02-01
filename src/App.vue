<template>
  <div class=" p-10  bg-sky-50 min-h-screen">
    <div class="grid grid-rows-2 gap-4">
      <VueTailwindDatePicker
        :no-input="true"
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
        no-input
        as-single
        i18n="en"
        :disable-date="dDate"
        inputClasses="rounded-md bg-red-300 dark:bg-red-300 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
