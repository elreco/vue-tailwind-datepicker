<script setup lang="ts">
import { computed, ref, shallowRef, watch, useId } from 'vue'
import {
  RangeCalendarRoot,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarPrev,
  RangeCalendarNext,
  RangeCalendarGrid,
  RangeCalendarGridHead,
  RangeCalendarGridBody,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  type DateRange,
} from 'reka-ui'
import {
  calendarDate,
  formatDate,
  isFrench,
  type DateRangeValue,
  type ISODate,
  type WeekStartsOn,
} from '../core'
const props = withDefaults(
  defineProps<{
    modelValue?: DateRangeValue | null
    label?: string
    locale?: string
    placeholder?: ISODate
    min?: ISODate
    max?: ISODate
    disabled?: boolean
    weekStartsOn?: WeekStartsOn
  }>(),
  { modelValue: null, locale: 'en-GB', weekStartsOn: 1 },
)
const emit = defineEmits<{ 'update:modelValue': [value: DateRangeValue | null] }>()
const open = ref(false)
watch(() => props.disabled, disabled => { if (disabled) open.value = false })
const id = useId()
function clear() {
  emit('update:modelValue', null)
  open.value = false
}
const french = computed(() => isFrench(props.locale))
const label = computed(() => props.label || (french.value ? 'Période' : 'Date range'))
const draft = shallowRef<DateRange>({ start: undefined, end: undefined })
function reset() {
  draft.value = {
    start: props.modelValue ? calendarDate(props.modelValue.start) : undefined,
    end: props.modelValue ? calendarDate(props.modelValue.end) : undefined,
  }
}
watch(() => props.modelValue, reset, { immediate: true, deep: true })
watch(open, (value) => {
  if (value) reset()
})
function select(value: DateRange) {
  draft.value = value
  if (value.start && value.end) {
    emit('update:modelValue', { start: value.start.toString(), end: value.end.toString() })
    open.value = false
  }
}
</script>
<template>
  <div class="cr-ui cr-field" :lang="locale">
    <label :id="`${id}-label`" :for="id" class="cr-label">{{ label }}</label>
    <PopoverRoot v-model:open="open">
      <PopoverTrigger
        :id="id"
        :disabled="disabled"
        class="cr-input cr-trigger"
        :aria-labelledby="`${id}-label ${id}-value`"
      >
        <span :id="`${id}-value`"
          ><slot name="trigger" :value="modelValue">{{
            modelValue
              ? `${formatDate(modelValue.start, locale)} – ${formatDate(modelValue.end, locale)}`
              : french
                ? 'Choisir une période'
                : 'Choose a date range'
          }}</slot></span
        ><span aria-hidden="true">↔</span>
      </PopoverTrigger>
      <PopoverPortal
        ><PopoverContent
          class="cr-ui cr-popover"
          :lang="locale"
          :side-offset="8"
          align="start"
          :aria-label="label"
        >
          <RangeCalendarRoot
            :disabled="disabled"
            v-slot="{ grid, weekDays }"
            :model-value="draft"
            :locale="locale"
            :week-starts-on="weekStartsOn"
            :default-placeholder="placeholder ? calendarDate(placeholder) : undefined"
            :min-value="min ? calendarDate(min) : undefined"
            :max-value="max ? calendarDate(max) : undefined"
            fixed-weeks
            @update:model-value="select"
          >
            <RangeCalendarHeader class="cr-calendar-header"
              ><RangeCalendarPrev
                class="cr-icon-button"
                :aria-label="french ? 'Mois précédent' : 'Previous month'"
                >‹</RangeCalendarPrev
              ><RangeCalendarHeading class="cr-calendar-heading" /><RangeCalendarNext
                class="cr-icon-button"
                :aria-label="french ? 'Mois suivant' : 'Next month'"
                >›</RangeCalendarNext
              ></RangeCalendarHeader
            >
            <RangeCalendarGrid v-for="month in grid" :key="month.value.toString()" class="cr-calendar-grid">
              <RangeCalendarGridHead
                ><RangeCalendarGridRow
                  ><RangeCalendarHeadCell v-for="day in weekDays" :key="day" class="cr-weekday">{{
                    day
                  }}</RangeCalendarHeadCell></RangeCalendarGridRow
                ></RangeCalendarGridHead
              >
              <RangeCalendarGridBody
                ><RangeCalendarGridRow v-for="(week, index) in month.rows" :key="index"
                  ><RangeCalendarCell v-for="day in week" :key="day.toString()" :date="day" class="cr-cell"
                    ><RangeCalendarCellTrigger :day="day" :month="month.value" class="cr-day"
                      ><slot name="day" :date="day.toString()">{{ day.day }}</slot></RangeCalendarCellTrigger
                    ></RangeCalendarCell
                  ></RangeCalendarGridRow
                ></RangeCalendarGridBody
              >
            </RangeCalendarGrid>
          </RangeCalendarRoot>
          <button
            v-if="modelValue"
            type="button"
            class="cr-text-button"
            @click="clear"
          >
            {{ french ? 'Effacer la période' : 'Clear range' }}
          </button>
        </PopoverContent></PopoverPortal
      >
    </PopoverRoot>
  </div>
</template>
