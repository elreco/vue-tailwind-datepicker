# Time picker

<script setup>
import { ref } from 'vue'
const value=ref('09:30')
</script>
<CrTimePicker v-model="value" label="Opening time" locale="en-GB" />

```vue
<CrTimePicker v-model="openingTime" label="Opening time" :hour-cycle="24" />
```

| Prop         | Type / default                  |
| ------------ | ------------------------------- |
| `modelValue` | `string \| null`, `null`        |
| `label`      | `string`, localised “Time”      |
| `locale`     | `string`, `en-GB`               |
| `hourCycle`  | `12 \| 24`, `24`                |
| `disabled`   | `boolean`, `false`              |
| `name`       | optional hidden form field name |

The stored value is always `HH:mm` with minute precision and a 24-hour clock, regardless of display settings. It has no date, offset or timezone. Incomplete input does not invent a full time. Each segment supports keyboard entry and arrow-key changes.
