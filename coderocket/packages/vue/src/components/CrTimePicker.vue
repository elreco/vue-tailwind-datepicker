<script setup lang="ts">
import { computed, useId } from 'vue'
import { TimeFieldRoot, TimeFieldInput, type TimeValue } from 'reka-ui'
import { clockTime, isFrench, type LocalTime } from '../core'
const props = withDefaults(
  defineProps<{
    modelValue?: LocalTime | null
    label?: string
    locale?: string
    disabled?: boolean
    name?: string
    hourCycle?: 12 | 24
  }>(),
  { modelValue: null, locale: 'en-GB', hourCycle: 24 },
)
const emit = defineEmits<{ 'update:modelValue': [value: LocalTime | null] }>()
const id = useId()
const value = computed(() => (props.modelValue ? clockTime(props.modelValue) : undefined))
function select(time: TimeValue | undefined) {
  emit(
    'update:modelValue',
    time ? `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}` : null,
  )
}
</script>
<template>
  <div class="cr-ui cr-field" :lang="locale">
    <span :id="`${id}-label`" class="cr-label">{{ label || (isFrench(locale) ? 'Heure' : 'Time') }}</span>
    <TimeFieldRoot
      v-slot="{ segments }"
      :model-value="value"
      :locale="locale"
      :disabled="disabled"
      :hour-cycle="hourCycle"
      granularity="minute"
      :aria-labelledby="`${id}-label`"
      class="cr-input cr-time"
      @update:model-value="select"
    >
      <TimeFieldInput
        v-for="segment in segments"
        :key="segment.part"
        :part="segment.part"
        class="cr-time-segment"
        >{{ segment.value }}</TimeFieldInput
      >
      <span aria-hidden="true" class="cr-time-icon">◷</span>
    </TimeFieldRoot>
    <input v-if="name" type="hidden" :name="name" :value="modelValue || ''" :disabled="disabled" />
  </div>
</template>
