<script setup>
  import DemoLayout from './DemoLayout.vue'
  import VueTailwindDatePicker from '../src/VueTailwindDatePicker.vue'
  import { ref } from 'vue'

  const dateValue1 = ref([])
  const dateValue2 = ref([])
  const dateValue3 = ref([])
  const dateValue4 = ref([])
  const dateValue5 = ref([])
  const dateValue6 = ref([])
  const dateValue7 = ref([])
  const dateValue8 = ref([])
  const dateValue9 = ref([])
  const dateValue10 = ref([])
  const dateValue11 = ref([])
  const dateValue12 = ref([])
  const dateValue13 = ref([])
  const dateValue14 = ref([])
  const dateValue15 = ref([])
  const formatter = ref({
    date: 'DD MMM YYYY',
    month: 'MMM'
  })
  const startFrom = new Date(2020, 0, 1)
  const dDate = (date) => {
    return date < new Date() || date > new Date(2023, 0, 8);
  }
  const options = ref({
    shortcuts: {
      today: 'Hari ini',
      yesterday: 'Kemarin',
      past: period => period + ' hari terakhir',
      currentMonth: 'Bulan ini',
      pastMonth: 'Bulan lalu'
    },
    footer: {
      apply: 'Terapkan',
      cancel: 'Batal'
    }
  })
</script>

# Props

All available `props`, to setting up Vue Tailwind Datepicker.

## Default Configuration

The datepicker if you don't set any `props`.

<DemoLayout>
  <VueTailwindDatePicker
    v-model="dateValue1"
  ></VueTailwindDatePicker>
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
    <vue-tailwind-datepicker v-model="dateValue" />
</template>
```

## Overlay

Using datepicker with backdrop, by default `overlay` is false.

<DemoLayout>
  <VueTailwindDatePicker
    :overlay="true"
    v-model="dateValue2"
  ></VueTailwindDatePicker>
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
    <vue-tailwind-datepicker overlay v-model="dateValue" />
</template>
```

## Input classes

You can apply apply your own input classes using Tailwind CSS.

<DemoLayout>
  <VueTailwindDatePicker
    input-classes="text-sm bg-red-100 border-red-200 rounded-sm text-slate-800 font-medium dark:bg-red-800 dark:text-slate-800 border border-solid dark:border-red-200"
    v-model="dateValue15"
  ></VueTailwindDatePicker>
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
    <vue-tailwind-datepicker input-classes="block mb-2 text-sm font-medium text-green-700 dark:text-green-500" v-model="dateValue" />
</template>
```

## Single Date

Using date picker as single date.

<DemoLayout>
  <VueTailwindDatePicker
    as-single
    v-model="dateValue3"
  />
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
    <vue-tailwind-datepicker as-single v-model="dateValue" />
</template>
```

## Use Range

Using date picker as single date, but datepicker with range.

<DemoLayout>
  <VueTailwindDatePicker
    as-single
    use-range
    v-model="dateValue4"
  />
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
    <vue-tailwind-datepicker as-single use-range v-model="dateValue" />
</template>
```

## Placeholder

Change placeholder, by default placeholder use `formatter.date` object.

<DemoLayout>
  <VueTailwindDatePicker
    placeholder="My Placeholder"
    v-model="dateValue5"
  />
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
    <vue-tailwind-datepicker placeholder="My Placeholder" v-model="dateValue" />
</template>
```

## Separator

Change placeholder, by default placeholder use `formatter.date` object.

<DemoLayout>
  <VueTailwindDatePicker
    separator=" to "
    v-model="dateValue6"
  />
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
    <vue-tailwind-datepicker separator=" to " v-model="dateValue" />
</template>
```

## Without Input

Display Datepicker only without input

<DemoLayout>
  <VueTailwindDatePicker
    :no-input="true"
    :as-single="true"
    v-model="dateValue13"
  ></VueTailwindDatePicker>
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
    <vue-tailwind-datepicker no-input v-model="dateValue" />
</template>
```

## Formatter

Change formatter, default `formatter`:

```js
  {
    date: 'YYYY-MM-DD HH:mm:ss',
    month: 'MMM'
  }
```

<DemoLayout>
  <VueTailwindDatePicker
    :formatter="formatter"
    v-model="dateValue7"
  />
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
const formatter = ref({
  date: 'DD MMM YYYY',
  month: 'MMM'
})
</script>

<template>
    <vue-tailwind-datepicker :formatter="formatter" v-model="dateValue" />
</template>
```

## Auto apply

Change auto apply, by default `autoApply` is true.

<DemoLayout>
  <VueTailwindDatePicker
    :auto-apply="false"
    v-model="dateValue8"
  />
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
    <vue-tailwind-datepicker :auto-apply="false" v-model="dateValue" />
</template>
```

## Start from

Change start from of datepicker, by default `startFrom` is new Date().

<DemoLayout>
  <VueTailwindDatePicker
    :start-from="startFrom"
    v-model="dateValue9"
  />
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
const startFrom = new Date(2020, 0, 1)
</script>

<template>
    <vue-tailwind-datepicker :start-from="startFrom" v-model="dateValue" />
</template>
```

## Shortcuts

Display or not the dates shortcuts, default value is true.

<DemoLayout>
  <VueTailwindDatePicker
    :shortcuts="false"
    v-model="dateValue10"
  />
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
    <vue-tailwind-datepicker :shortcuts="false" v-model="dateValue" />
</template>
```

## Disable date

Disable some dates in range.

<DemoLayout>
  <VueTailwindDatePicker
    :disable-date="dDate"
    v-model="dateValue14"
  />
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
const dDate = (date) => {
  return date < new Date() || date > new Date(2023, 0, 8);
}
</script>

<template>
    <vue-tailwind-datepicker :disable-date="dDate" v-model="dateValue" />
</template>
```

## Slot

Using slots.

<DemoLayout>
  <div class="tw-flex">
    <VueTailwindDatePicker
      v-model="dateValue11"
      v-slot="{ value, placeholder, clear }"
    >
      <div class="tw-flex">
        <div class="tw-flex-1">
          <button
            type="button"
            class="tw-block tw-w-full tw-bg-gray-50 tw-text-gray-400 hover:tw-text-gray-900 tw-leading-6 tw-py-3 sm:tw-px-6 tw-border tw-border-gray-200 tw-rounded-xl tw-items-center tw-justify-center tw-space-x-2 sm:tw-space-x-4 focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-white focus:tw-ring-gray-300 focus:tw-outline-none tw-transition tw-ease-out tw-duration-300"
          >
            <span class="tw-text-gray-900">
              {{ value || placeholder }}
            </span>
          </button>
        </div>
        <div class="tw-flex-shrink-0">
          <button
            type="button"
            class="tw-ml-4 tw-block tw-px-3 tw-flex-none tw-bg-indigo-50 tw-text-indigo-400 hover:tw-text-indigo-900 tw-leading-6 tw-py-3 sm:tw-px-6 tw-border tw-border-indigo-200 tw-rounded-xl tw-items-center tw-justify-center tw-space-x-2 sm:tw-space-x-4 focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-white focus:tw-ring-indigo-300 focus:tw-outline-none tw-transition tw-ease-out tw-duration-300"
            @click="clear"
          >
            <svg
              class="tw-w-6 tw-h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </VueTailwindDatePicker>
  </div>
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
</script>

<template>
  <div class="tw-flex">
    <vue-tailwind-datepicker
      v-model="dateValue"
      v-slot="{ value, placeholder, clear }"
    >
      <div class="tw-flex">
        <div class="tw-flex-1">
          <button
            type="button"
            class="tw-block tw-w-full tw-bg-gray-50 tw-text-gray-400 hover:tw-text-gray-900 tw-leading-6 tw-py-3 sm:tw-px-6 tw-border tw-border-gray-200 tw-rounded-xl tw-items-center tw-justify-center tw-space-x-2 sm:tw-space-x-4 focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-white focus:tw-ring-gray-300 focus:tw-outline-none tw-transition tw-ease-out tw-duration-300"
          >
            <span class="tw-text-gray-900">
              {{ value || placeholder }}
            </span>
          </button>
        </div>
        <div class="tw-flex-shrink-0">
          <button
            type="button"
            class="tw-ml-4 tw-block tw-px-3 tw-flex-none tw-bg-indigo-50 tw-text-indigo-400 hover:tw-text-indigo-900 tw-leading-6 tw-py-3 sm:tw-px-6 tw-border tw-border-indigo-200 tw-rounded-xl tw-items-center tw-justify-center tw-space-x-2 sm:tw-space-x-4 focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-white focus:tw-ring-indigo-300 focus:tw-outline-none tw-transition tw-ease-out tw-duration-300"
            @click="clear"
          >
            <svg
              class="tw-w-6 tw-h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </vue-tailwind-datepicker>
  </div>
</template>
```

## Options

Change default options

<DemoLayout>
  <VueTailwindDatePicker
    :options="options" :auto-apply="false"
    v-model="dateValue12"
  />
</DemoLayout>

```vue
<script setup>
import { ref } from 'vue'
const dateValue = ref([])
const options = ref({
  shortcuts: {
    today: 'Hari ini',
    yesterday: 'Kemarin',
    past: period => period + ' hari terakhir',
    currentMonth: 'Bulan ini',
    pastMonth: 'Bulan lalu'
  },
  footer: {
    apply: 'Terapkan',
    cancel: 'Batal'
  }
})
</script>

<template>
    <vue-tailwind-datepicker :options="options" :auto-apply="false" v-model="dateValue" />
</template>
```
