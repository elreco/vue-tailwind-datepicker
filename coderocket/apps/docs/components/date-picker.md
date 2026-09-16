# Date picker

<script setup>
import { ref } from 'vue'
const value = ref('2026-10-15')
</script>
<CrDatePicker v-model="value" label="Launch date" locale="en-GB" />

```vue
<CrDatePicker
  v-model="date"
  label="Launch date"
  locale="fr-FR"
  min="2026-01-01"
  max="2026-12-31"
  :week-starts-on="1"
/>
```

| Prop           | Type / default           | Behaviour                                     |
| -------------- | ------------------------ | --------------------------------------------- |
| `modelValue`   | `string \| null`, `null` | Gregorian ISO date; emits `update:modelValue` |
| `label`        | `string`, `Date`         | Accessible field label                        |
| `locale`       | `string`, `en-GB`        | Display language; `fr-FR` supported           |
| `min`, `max`   | ISO date, optional       | Inclusive date bounds                         |
| `placeholder`  | ISO date, optional       | Initial visible month when empty              |
| `weekStartsOn` | `0…6`, `1`               | Sunday = 0, Monday = 1                        |
| `disabled`     | `boolean`, `false`       | Prevent interaction                           |
| `name`         | `string`, optional       | Hidden form field name                        |

Selection closes the calendar and returns focus to the trigger. Escape dismisses it. Arrow keys navigate dates; Enter selects. Clear emits `null`. Invalid externally supplied date strings throw an explicit error instead of silently changing your data.

Slots: `trigger` receives `{ value }`; `day` receives `{ date }` as an ISO string.
