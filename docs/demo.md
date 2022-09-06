<script setup>
  import DemoLayout from './DemoLayout.vue'
  import VueTailwindDatePicker from '../src/VueTailwindDatePicker.vue'
  import { ref } from 'vue'

  const dateValue = ref('')
</script>

# Demo

::: tip
You can also test it with [the playground](https://stackblitz.com/edit/vue-58nly1?file=src/components/Playground.vue)!
:::

<DemoLayout>
  <VueTailwindDatePicker
    v-model="dateValue"
  ></VueTailwindDatePicker>
</DemoLayout>

```vue
<script setup>
import VueTailwindDatePicker from 'vue-tailwind-datepicker'
import { ref } from 'vue'

const dateValue = ref('')
</script>

<template>
  <vue-tailwind-datepicker v-model="dateValue" />
</template>
```
