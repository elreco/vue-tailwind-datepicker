<script setup lang="ts">
import { computed, ref, watch, useId } from 'vue'
import type { DateValue } from '@internationalized/date'
import {
  CalendarRoot,
  CalendarHeader,
  CalendarHeading,
  CalendarPrev,
  CalendarNext,
  CalendarGrid,
  CalendarGridHead,
  CalendarGridBody,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarCell,
  CalendarCellTrigger,
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
} from 'reka-ui'
import { calendarDate, formatDate, isFrench, type ISODate, type WeekStartsOn } from '../core'
const props = withDefaults(
  defineProps<{
    modelValue?: ISODate | null
    label?: string
    locale?: string
    placeholder?: ISODate
    min?: ISODate
    max?: ISODate
    disabled?: boolean
    name?: string
    weekStartsOn?: WeekStartsOn
  }>(),
  { modelValue: null, locale: 'en-GB', weekStartsOn: 1 },
)
const emit = defineEmits<{ 'update:modelValue': [value: ISODate | null] }>()
const open = ref(false)
const id = useId()
const french = computed(() => isFrench(props.locale))
const label = computed(() => props.label || (french.value ? 'Date' : 'Date'))
const value = computed(() => (props.modelValue ? calendarDate(props.modelValue) : undefined))
function select(value: DateValue | undefined) {
  emit('update:modelValue', value?.toString() ?? null)
  if (value) open.value = false
}
function clear() {
  emit('update:modelValue', null)
  open.value = false
}
watch(() => props.disabled, disabled => { if (disabled) open.value = false })
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
            modelValue ? formatDate(modelValue, locale) : french ? 'Choisir une date' : 'Choose a date'
          }}</slot></span
        ><span aria-hidden="true" class="cr-calendar-icon">▦</span>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          class="cr-ui cr-popover"
          :lang="locale"
          :side-offset="8"
          align="start"
          :aria-label="label"
        >
          <CalendarRoot
            :disabled="disabled"
            v-slot="{ grid, weekDays }"
            :model-value="value"
            :locale="locale"
            :week-starts-on="weekStartsOn"
            :default-placeholder="placeholder ? calendarDate(placeholder) : undefined"
            :min-value="min ? calendarDate(min) : undefined"
            :max-value="max ? calendarDate(max) : undefined"
            fixed-weeks
            @update:model-value="select"
          >
            <CalendarHeader class="cr-calendar-header">
              <CalendarPrev class="cr-icon-button" :aria-label="french ? 'Mois précédent' : 'Previous month'"
                >‹</CalendarPrev
              >
              <CalendarHeading class="cr-calendar-heading" />
              <CalendarNext class="cr-icon-button" :aria-label="french ? 'Mois suivant' : 'Next month'"
                >›</CalendarNext
              >
            </CalendarHeader>
            <CalendarGrid v-for="month in grid" :key="month.value.toString()" class="cr-calendar-grid">
              <CalendarGridHead
                ><CalendarGridRow
                  ><CalendarHeadCell v-for="day in weekDays" :key="day" class="cr-weekday">{{
                    day
                  }}</CalendarHeadCell></CalendarGridRow
                ></CalendarGridHead
              >
              <CalendarGridBody
                ><CalendarGridRow v-for="(week, index) in month.rows" :key="index">
                  <CalendarCell v-for="day in week" :key="day.toString()" :date="day" class="cr-cell">
                    <CalendarCellTrigger :day="day" :month="month.value" class="cr-day"
                      ><slot name="day" :date="day.toString()">{{ day.day }}</slot></CalendarCellTrigger
                    >
                  </CalendarCell>
                </CalendarGridRow></CalendarGridBody
              >
            </CalendarGrid>
          </CalendarRoot>
          <button
            v-if="modelValue"
            type="button"
            class="cr-text-button"
            @click="clear"
          >
            {{ french ? 'Effacer la date' : 'Clear date' }}
          </button>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
    <input v-if="name" type="hidden" :name="name" :value="modelValue || ''" :disabled="disabled" />
  </div>
</template>
