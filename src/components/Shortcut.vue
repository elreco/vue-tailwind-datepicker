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
    class="tw-relative tw-w-full tw-border-t tw-border-b-0 sm:tw-border-t-0 sm:tw-border-b lg:tw-border-b-0 lg:tw-border-r tw-border-black/[.1] tw-order-last sm:tw-order-none dark:tw-border-vtd-secondary-700/[1] sm:tw-mt-1 lg:tw-mr-1 sm:tw-mb-1 lg:tw-mb-0 sm:tw-mx-1 lg:tw-mx-0"
  >
    <ol
      v-if="withShortcut()"
      class="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 tw-gap-1 lg:tw-block tw-w-full tw-pr-5 sm:tw-pr-6 tw-mt-1.5 sm:tw-mt-0 sm:tw-mb-1.5 lg:tw-mb-0"
    >
      <li v-for="(item, i) in withShortcut()" :key="i">
        <a
          href="#"
          class="vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300"
          @click.prevent="setToCustomShortcut(item, close)"
          v-text="item.label"
        >
        </a>
      </li>
    </ol>
    <ol
      v-else
      class="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 tw-gap-1 lg:tw-block tw-w-full tw-pr-5 sm:tw-pr-6 tw-mt-1.5 sm:tw-mt-0 sm:tw-mb-1.5 lg:tw-mb-0"
    >
      <li>
        <a
          href="#"
          class="vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300"
          @click.prevent="setToToday(close)"
        >
          {{ props.i18n.today }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300"
          @click.prevent="setToYesterday(close)"
        >
          {{ props.i18n.yesterday }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300"
          @click.prevent="setToLastDay(7, close)"
        >
          {{ props.i18n.past(7) }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300"
          @click.prevent="setToLastDay(30, close)"
        >
          {{ props.i18n.past(30) }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300"
          @click.prevent="setToThisMonth(close)"
        >
          {{ props.i18n.currentMonth }}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="vtd-shortcuts tw-block tw-text-sm lg:tw-text-xs tw-px-2 tw-py-2 sm:tw-leading-4 tw-whitespace-nowrap tw-font-medium tw-rounded tw-text-vtd-primary-600 hover:tw-text-vtd-primary-700 tw-transition-colors hover:tw-bg-vtd-secondary-100 focus:tw-bg-vtd-secondary-100 focus:tw-text-vtd-primary-600 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-primary-300 dark:tw-text-vtd-primary-400 dark:focus:tw-bg-vtd-secondary-700 dark:focus:tw-text-vtd-primary-300"
          @click.prevent="setToLastMonth(close)"
        >
          {{ props.i18n.pastMonth }}
        </a>
      </li>
    </ol>
  </div>
</template>
