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
  <div class="tw-grid tw-grid-cols-7 tw-gap-y-0.5 tw-my-1">
    <transition-group
      enter-from-class="tw-opacity-0"
      enter-to-class="tw-opacity-100"
      enter-active-class="tw-transition-opacity tw-ease-out tw-duration-300"
      leave-active-class="tw-transition-opacity tw-ease-in tw-duration-200"
      leave-from-class="tw-opacity-100"
      leave-to-class="tw-opacity-0"
    >
      <div
        v-for="(date, keyDate) in calendar.date()"
        :key="keyDate"
        class="tw-relative"
        :class="{ 'vtd-tooltip': asRange && date.duration() }"
        :data-tooltip="`${date.duration()}`"
      >
        <transition
          enter-from-class="tw-opacity-0"
          enter-to-class="tw-opacity-100"
          enter-active-class="tw-transition-opacity tw-ease-out tw-duration-200"
          leave-active-class="tw-transition-opacity tw-ease-in tw-duration-150"
          leave-from-class="tw-opacity-100"
          leave-to-class="tw-opacity-0"
        >
          <span
            v-if="isBetweenRange(date) || date.hovered()"
            class="tw-absolute tw-bg-vtd-primary-100 tw-bg-opacity-60 dark:tw-bg-vtd-secondary-700 dark:tw-bg-opacity-50"
            :class="betweenRangeClasses(date)"
          ></span>
        </transition>
        <button
          type="button"
          class="vtd-datepicker-date tw-relative tw-w-[2.7rem] tw-h-[2.7rem] lg:tw-w-10 lg:tw-h-10 tw-flex tw-justify-center tw-items-center tw-text-xs 2xl:tw-text-sm"
          :class="[datepickerClasses(date), asRange ? 'tw-transition-all' : 'tw-transition-colors']"
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
