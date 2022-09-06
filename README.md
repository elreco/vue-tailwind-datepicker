# Vue Tailwind Datepicker

<p align="center">
    <a href="https://www.vue-tailwind-datepicker.com" target="_blank">
      <img alt="Vue Tailwind Datepicker" width="100" style="border-radius: 100%;" src="https://github.com/elreco/vue-tailwind-datepicker/blob/main/docs/logo.png?raw=true">
    </a><br><br>
    A Datepicker component for Vue 3 using Tailwind and dayjs.
</p>

## Documentation

Go to [full documentation](https://www.vue-tailwind-datepicker.com)

## Simple Usage

How it works,

```vue
<template>
  <div>
    <vue-tailwind-datepicker
      ref="myRef"
      :formatter="formatter"
      v-model="dateValue"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import VueTailwindDatepicker from 'vue-tailwind-datepicker';

export default {
  components: {
    VueTailwindDatepicker
  },
  setup() {
    const myRef = ref(null);
    const dateValue = ref([]);
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM'
    });

    return {
      myRef,
      dateValue,
      formatter
    };
  }
};
</script>
```

## Theming options

**Light Mode**

![Light Mode](https://github.com/elreco/vue-tailwind-datepicker/blob/main/docs/light.png?raw=true)

**Dark Mode**

![Dark Mode](https://github.com/elreco/vue-tailwind-datepicker/blob/main/docs/dark.png?raw=true)

## Changelog
All notable changes to this project will be documented in this file, [Read](CHANGELOG.md).

## License
The [MIT](LICENSE) License. Please [see](http://opensource.org/licenses/MIT) for more information.

## Thanks to
- [kenhyuwa](https://github.com/kenhyuwa)
- [Vue](https://v3.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [day.js](https://day.js.org/)
- and other support...