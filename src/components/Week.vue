<script setup>
defineProps({
  weeks: Array
})
</script>

<template>
  <div class="tw-grid tw-grid-cols-7 tw-py-2 tw-mt-0.5">
    <div
      v-for="(day, keyDay) in weeks"
      :key="keyDay"
      class="tw-text-vtd-secondary-500 tw-text-xs 2xl:tw-text-sm tw-tracking-wide tw-font-medium tw-text-center tw-cursor-default dark:tw-text-vtd-secondary-400"
    >
      <span v-text="day"> </span>
    </div>
  </div>
</template>
