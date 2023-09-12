<script setup>
import dayjs from "dayjs";
import { ref } from "vue";
import VueTailwindDatePicker from "./VueTailwindDatePicker.vue";

const dateValue = ref({
  startDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  endDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
});
</script>

<template>
  <div class="p-10 bg-sky-50 min-h-screen">
    <div class="grid grid-rows-2 gap-4">
      <VueTailwindDatePicker
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
        v-model="dateValue.startDate"
        as-single
        i18n="en"
      />
    </div>
  </div>
</template>
