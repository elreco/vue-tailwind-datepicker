<script setup>
defineProps({
  asPrevOrNext: Boolean,
  panel: Object,
  calendar: Object
})
</script>

<template>
  <div class="tw-flex tw-justify-between tw-items-center tw-px-2 tw-py-1.5">
    <div class="tw-flex-shrink-0">
      <span v-show="panel.calendar || panel.year" class="tw-inline-flex tw-rounded-full">
        <button
          type="button"
          class="tw-p-1.5 tw-rounded-full tw-bg-white tw-text-vtd-secondary-600 tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50"
          @click="panel.calendar ? calendar.onPrevious() : calendar.onPreviousYear()"
        >
          <svg
            class="tw-w-5 tw-h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              :d="panel.calendar ? `M15 19l-7-7 7-7` : `M11 19l-7-7 7-7m8 14l-7-7 7-7`"
            ></path>
          </svg>
        </button>
      </span>
    </div>
    <div class="tw-px-1.5 tw-space-x-1.5 tw-flex tw-flex-1">
      <span class="tw-flex-1 tw-flex tw-rounded-md">
        <button
          type="button"
          class="tw-px-3 tw-py-1.5 tw-block tw-w-full tw-leading-relaxed tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-semibold sm:tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50"
          v-text="calendar.month"
          @click="calendar.openMonth()"
        ></button>
      </span>
      <span class="tw-flex-1 tw-flex tw-rounded-md">
        <button
          type="button"
          class="tw-px-3 tw-py-1.5 tw-block tw-w-full tw-leading-relaxed tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-semibold sm:tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50"
          v-text="calendar.year"
          @click="calendar.openYear()"
        ></button>
      </span>
    </div>
    <div class="tw-flex-shrink-0">
      <span v-show="panel.calendar || panel.year" class="tw-inline-flex tw-rounded-full">
        <button
          type="button"
          class="tw-p-1.5 tw-rounded-full tw-bg-white tw-text-vtd-secondary-600 tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50"
          @click="panel.calendar ? calendar.onNext() : calendar.onNextYear()"
        >
          <svg
            class="tw-w-5 tw-h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              :d="panel.calendar ? `M9 5l7 7-7 7` : `M13 5l7 7-7 7M5 5l7 7-7 7`"
            ></path>
          </svg>
        </button>
      </span>
    </div>
  </div>
</template>
