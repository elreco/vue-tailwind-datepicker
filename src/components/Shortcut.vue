<script setup>
import { inject } from 'vue'

const props = defineProps({
  shortcuts: [Boolean, Function],
  close: Function,
  asRange: Boolean,
  asSingle: Boolean,
  i18n: Object
})

const setToToday = inject('setToToday')
const setToYesterday = inject('setToYesterday')
const setToLastDay = inject('setToLastDay')
const setToThisMonth = inject('setToThisMonth')
const setToLastMonth = inject('setToLastMonth')
const setToCustomShortcut = inject('setToCustomShortcut')

const withShortcut = () => {
  if (typeof props.shortcuts === 'function') {
    return props.shortcuts()
  } else {
    return false
  }
}
</script>

<template>
  <div
    v-if="(props.asRange && props.asSingle) || (props.asRange && !props.asSingle)"
    class="relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
  >
    <ol
      v-if="withShortcut()"
      class="grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
    >
      <li v-for="(item, i) in withShortcut()" :key="i">
        <a
          href="#"
          class="vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300"
          @click.prevent="setToCustomShortcut(item, close)"
          v-text="item.label"
        >
        </a>
      </li>
    </ol>
    <ol
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
    >
      <li>
        <a
          href="#"
          class="vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300"
          @click.prevent="setToToday(close)"
        >
          {{ props.i18n.today }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300"
          @click.prevent="setToYesterday(close)"
        >
          {{ props.i18n.yesterday }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300"
          @click.prevent="setToLastDay(7, close)"
        >
          {{ props.i18n.past(7) }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300"
          @click.prevent="setToLastDay(30, close)"
        >
          {{ props.i18n.past(30) }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300"
          @click.prevent="setToThisMonth(close)"
        >
          {{ props.i18n.currentMonth }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300"
          @click.prevent="setToLastMonth(close)"
        >
          {{ props.i18n.pastMonth }}
        </a>
      </li>
    </ol>
  </div>
</template>
