<script setup>
defineProps({
  weeks: Array
})
</script>

<template>
  <div class="grid grid-cols-7 py-2 mt-0.5 border-b border-black/[.1] dark:border-vtd-secondary-700/[1]">
    <div
      v-for="(day, keyDay) in weeks"
      :key="keyDay"
      class="text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
    >
      <span v-text="day"> </span>
    </div>
  </div>
</template>
