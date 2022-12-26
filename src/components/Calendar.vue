<script setup>
import { inject } from 'vue'

const isBetweenRange = inject('isBetweenRange')
const betweenRangeClasses = inject('betweenRangeClasses')
const datepickerClasses = inject('datepickerClasses')
const atMouseOver = inject('atMouseOver')

defineProps({
  asPrevOrNext: Boolean,
  calendar: Object,
  weeks: Array,
  asRange: Boolean
})

const emit = defineEmits(['update:date'])
</script>

<template>
  <div class="grid grid-cols-7 gap-y-0.5 my-1">
    <transition-group
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      enter-active-class="transition-opacity ease-out duration-300"
      leave-active-class="transition-opacity ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-for="(date, keyDate) in calendar.date()"
        :key="keyDate"
        class="relative"
        :class="{ 'vtd-tooltip': asRange && date.duration() }"
        :data-tooltip="`${date.duration()}`"
      >
        <transition
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          enter-active-class="transition-opacity ease-out duration-200"
          leave-active-class="transition-opacity ease-in duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >

          <span
            v-if="isBetweenRange(date) || date.hovered()"
            class="absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50"
            :class="betweenRangeClasses(date)"
          ></span>
        </transition>
        <button
          type="button"
          class="vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50"
          :class="[datepickerClasses(date), asRange ? 'transition-all' : 'transition-colors']"
          :disabled="date.disabled || date.inRange()"
          @click="emit('update:date', date, asPrevOrNext)"
          @mouseenter="atMouseOver(date)"
          @focusin="atMouseOver(date)"
          v-text="date.date()"
          :data-date="date.toDate()"
        ></button>
      </div>
    </transition-group>
  </div>
</template>
