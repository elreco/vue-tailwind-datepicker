<script setup lang="ts">
import { injectStrict } from '../utils'
import {
  atMouseOverKey,
  betweenRangeClassesKey,
  datepickerClassesKey,
  isBetweenRangeKey,
} from '../keys'

defineProps<{
  calendar: {
    date: () => any[]
    month: string
    year: number
    years: () => number[]
    onPrevious: () => void
    onNext: () => void
    onPreviousYear: () => void
    onNextYear: () => void
    openMonth: () => void
    setMonth: ($event: number) => void
    openYear: () => void
    setYear: ($event: number) => void
  }
  weeks: string[]
  asRange: boolean
}>()

const emit = defineEmits<{
  (e: 'updateDate', event: any): void
}>()

const isBetweenRange = injectStrict(isBetweenRangeKey)
const betweenRangeClasses = injectStrict(betweenRangeClassesKey)
const datepickerClasses = injectStrict(datepickerClassesKey)
const atMouseOver = injectStrict(atMouseOverKey)
</script>

<template>
  <div class="grid grid-cols-7 gap-y-0.5 my-1">
    <transition-group
      enter-from-class="opacity-0" enter-to-class="opacity-100"
      enter-active-class="transition-opacity ease-out duration-300"
      leave-active-class="transition-opacity ease-in duration-200" leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-for="(date, keyDate) in calendar.date()" :key="keyDate" class="relative"
        :class="{ 'vtd-tooltip': asRange && date.duration() }" :data-tooltip="`${date.duration()}`"
      >
        <transition
          enter-from-class="opacity-0" enter-to-class="opacity-100"
          enter-active-class="transition-opacity ease-out duration-200"
          leave-active-class="transition-opacity ease-in duration-150" leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <span
            v-if="isBetweenRange(date) || date.hovered()"
            class="absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50"
            :class="betweenRangeClasses(date)"
          />
        </transition>
        <button
          type="button"
          class="vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm"
          :class="[
            datepickerClasses(date),
            asRange ? 'transition-all' : 'transition-colors',
          ]" :disabled="date.disabled || date.inRange()" :data-date="date.toDate()" @click="emit('updateDate', date)"
          @mouseenter="atMouseOver(date)" @focusin="atMouseOver(date)" v-text="date.date()"
        />
      </div>
    </transition-group>
  </div>
</template>
