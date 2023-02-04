<script setup>
defineProps({
  months: Array
})

const emit = defineEmits(['update:month'])
</script>

<template>
  <div class="tw-flex tw-flex-wrap tw-mt-1.5">
    <div v-for="(month, key) in months" :key="key" class="tw-w-1/2 tw-px-0.5">
      <span class="tw-flex tw-rounded-md tw-mt-1.5">
        <button
          type="button"
          class="tw-px-3 tw-py-2 tw-block tw-w-full tw-leading-6 tw-rounded-md tw-bg-white tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-text-vtd-secondary-600 tw-font-medium tw-transition-colors tw-border tw-border-transparent hover:tw-bg-vtd-secondary-100 hover:tw-text-vtd-secondary-900 focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none tw-uppercase dark:tw-bg-vtd-secondary-800 dark:hover:tw-bg-vtd-secondary-700 dark:tw-text-vtd-secondary-300 dark:hover:tw-text-vtd-secondary-100 dark:focus:tw-bg-vtd-secondary-700"
          v-text="month"
          @click="emit('update:month', key)"
        ></button>
      </span>
    </div>
  </div>
</template>
