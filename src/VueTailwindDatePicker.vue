<script setup>
import VtdHeader from './components/Header.vue'
import VtdMonth from './components/Month.vue'
import VtdWeek from './components/Week.vue'
import VtdYear from './components/Year.vue'
import VtdCalendar from './components/Calendar.vue'
import VtdShortcut from './components/Shortcut.vue'
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isToday from 'dayjs/plugin/isToday'
import isBetween from 'dayjs/plugin/isBetween'
import duration from 'dayjs/plugin/duration'
import { ref, reactive, computed, provide, nextTick, isProxy, watchEffect, watch, unref } from 'vue'
import useDate from './composables/date'
import useDom from './composables/dom'

const {
  useCurrentDate,
  useDisableDate,
  useBetweenRange,
  useNextDate,
  usePreviousDate,
  useToValueFromArray,
  useToValueFromString
} = useDate()

const { useVisibleViewport } = useDom()

dayjs.extend(localeData)
dayjs.extend(localizedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(isToday)
dayjs.extend(isBetween)
dayjs.extend(duration)

const props = defineProps({
  noInput: Boolean,
  overlay: Boolean,
  asSingle: Boolean,
  useRange: Boolean,
  placeholder: {
    type: [Boolean, String],
    default: false
  },
  i18n: {
    type: String,
    default: 'en'
  },
  inputClasses: {
    type: String,
    default: ''
  },
  disableInRange: {
    type: Boolean,
    default: true
  },
  disableDate: {
    type: [Boolean, Array, Function],
    default: false
  },
  autoApply: {
    type: Boolean,
    default: true
  },
  shortcuts: {
    type: [Boolean, Function],
    default: true
  },
  separator: {
    type: String,
    default: ' ~ '
  },
  formatter: {
    type: Object,
    default: () => ({
      date: 'YYYY-MM-DD HH:mm:ss',
      month: 'MMM'
    })
  },
  modelValue: {
    type: [Array, Object, String],
    default: () => []
  },
  startFrom: {
    type: [Object, String],
    default: () => new Date()
  },
  weekdaysSize: {
    type: String,
    default: 'short'
  },
  options: {
    type: Object,
    default: () => ({
      shortcuts: {
        today: 'Today',
        yesterday: 'Yesterday',
        past: (period) => `Last ${period} Days`,
        currentMonth: 'This Month',
        pastMonth: 'Last Month'
      },
      footer: {
        apply: 'Apply',
        cancel: 'Cancel'
      }
    })
  }
})
const emit = defineEmits([
  'update:modelValue',
  'select:month',
  'select:year',
  'select:right:month',
  'select:right:year',
  'click:prev',
  'click:next',
  'click:right:prev',
  'click:right:next'
])
const VtdRef = ref(null)
const VtdInputRef = ref(null)
const placement = ref(null)
const givenPlaceholder = ref('')
const selection = ref(null)
const pickerValue = ref('')
const hoverValue = ref([])
const applyValue = ref([])
const previous = ref(null)
const next = ref(null)
const panel = reactive({
  previous: {
    calendar: true,
    month: false,
    year: false
  },
  next: {
    calendar: true,
    month: false,
    year: false
  }
})
const datepicker = ref({
  previous: dayjs(),
  next: dayjs().add(1, 'month'),
  year: {
    previous: dayjs().year(),
    next: dayjs().year()
  },
  weeks: props.weekdaysSize === 'min' ? dayjs.weekdaysMin() : dayjs.weekdaysShort(),
  months: props.formatter.month === 'MMM' ? dayjs.monthsShort() : dayjs.months()
})
const weeks = computed(() => datepicker.value.weeks)
const months = computed(() => datepicker.value.months)
const calendar = computed(() => {
  const { previous, next, year } = unref(datepicker)
  return {
    previous: {
      date: () => {
        return usePreviousDate(previous)
          .concat(useCurrentDate(previous))
          .concat(useNextDate(previous))
          .map((v) => {
            v.today = v.isToday()
            v.active = previous.month() === v.month()
            v.off = previous.month() !== v.month()
            v.sunday = v.day() === 0
            v.disabled = useDisableDate(v, props) && !inRangeDate(v)
            v.inRange = () => {
              if (props.asSingle && !props.useRange) {
                return previous.month() !== v.month()
              }
            }
            v.hovered = () => {
              if (!asRange()) return false
              if (hoverValue.value.length > 1) {
                return (
                  (v.isBetween(hoverValue.value[0], hoverValue.value[1], 'date', '()') ||
                    v.isBetween(hoverValue.value[1], hoverValue.value[0], 'date', '(]')) &&
                  previous.month() === v.month()
                )
              }
              return false
            }
            v.duration = () => {
              return false
            }
            return v
          })
      },
      month: previous && previous.format(props.formatter.month),
      year: previous && previous.year(),
      years: () => {
        return Array.from(
          {
            length: 12
          },
          (v, k) => year.previous + k
        )
      },
      onPrevious: () => {
        datepicker.value.previous = previous.subtract(1, 'month')
        emit('click:prev', datepicker.value.previous)
      },
      onNext: () => {
        datepicker.value.previous = previous.add(1, 'month')
        if (previous.diff(next, 'month') === -1) {
          datepicker.value.next = next.add(1, 'month')
        }
        emit('click:next', datepicker.value.previous)
      },
      onPreviousYear: () => {
        datepicker.value.year.previous = datepicker.value.year.previous - 12
      },
      onNextYear: () => {
        datepicker.value.year.previous = datepicker.value.year.previous + 12
      },
      openMonth: () => {
        panel.previous.month = !panel.previous.month
        panel.previous.year = false
        panel.previous.calendar = !panel.previous.month
      },
      setMount: ($event) => {
        datepicker.value.previous = previous.month($event)
        panel.previous.month = !panel.previous.month
        panel.previous.year = false
        panel.previous.calendar = !panel.previous.month
        emit('select:month', datepicker.value.previous)
        nextTick(() => {
          if (
            datepicker.value.next.isSame(datepicker.value.previous, 'month') ||
            datepicker.value.next.isBefore(datepicker.value.previous)
          ) {
            datepicker.value.next = datepicker.value.previous.add(1, 'month')
          }
          datepicker.value.year.next = datepicker.value.next.year()
        })
      },
      openYear: () => {
        panel.previous.year = !panel.previous.year
        panel.previous.month = false
        panel.previous.calendar = !panel.previous.year
      },
      setYear: ($event, asNext) => {
        if (!asNext) {
          datepicker.value.previous = previous.year($event)
          panel.previous.year = !panel.previous.year
          panel.previous.calendar = !panel.previous.year
          emit('select:year', datepicker.value.previous)
          nextTick(() => {
            if (
              datepicker.value.next.isSame(datepicker.value.previous, 'month') ||
              datepicker.value.next.isBefore(datepicker.value.previous)
            ) {
              datepicker.value.next = datepicker.value.previous.add(1, 'month')
            }
            datepicker.value.year.previous = datepicker.value.previous.year()
            datepicker.value.year.next = datepicker.value.next.year()
          })
        }
      }
    },
    next: {
      date: () => {
        return usePreviousDate(next)
          .concat(useCurrentDate(next))
          .concat(useNextDate(next))
          .map((v) => {
            v.today = v.isToday()
            v.active = next.month() === v.month()
            v.off = next.month() !== v.month()
            v.sunday = v.day() === 0
            v.disabled = useDisableDate(v, props) && !inRangeDate(v)
            v.inRange = () => {
              if (props.asSingle && !props.useRange) {
                return next.month() !== v.month()
              }
            }
            v.hovered = () => {
              if (hoverValue.value.length > 1) {
                return (
                  (v.isBetween(hoverValue.value[0], hoverValue.value[1], 'date', '()') ||
                    v.isBetween(hoverValue.value[1], hoverValue.value[0], 'date', '(]')) &&
                  next.month() === v.month()
                )
              }
              return false
            }
            v.duration = () => {
              return false
            }
            return v
          })
      },
      month: next && next.format(props.formatter.month),
      year: next && next.year(),
      years: () => {
        return Array.from(
          {
            length: 12
          },
          (v, k) => year.next + k
        )
      },
      onPrevious: () => {
        datepicker.value.next = next.subtract(1, 'month')
        if (next.diff(previous, 'month') === 1) {
          datepicker.value.previous = previous.subtract(1, 'month')
        }
        emit('click:right:prev', datepicker.value.next)
      },
      onNext: () => {
        datepicker.value.next = next.add(1, 'month')
        emit('click:right:next', datepicker.value.next)
      },
      onPreviousYear: () => {
        datepicker.value.year.next = datepicker.value.year.next - 12
      },
      onNextYear: () => {
        datepicker.value.year.next = datepicker.value.year.next + 12
      },
      openMonth: () => {
        panel.next.month = !panel.next.month
        panel.next.year = false
        panel.next.calendar = !panel.next.month
      },
      setMount: ($event) => {
        datepicker.value.next = next.month($event)
        panel.next.month = !panel.next.month
        panel.next.year = false
        panel.next.calendar = !panel.next.month
        emit('select:right:month', datepicker.value.next)
        nextTick(() => {
          if (
            datepicker.value.previous.isSame(datepicker.value.next, 'month') ||
            datepicker.value.previous.isAfter(datepicker.value.next)
          ) {
            datepicker.value.previous = datepicker.value.next.subtract(1, 'month')
          }
          datepicker.value.year.previous = datepicker.value.previous.year()
        })
      },
      openYear: () => {
        panel.next.year = !panel.next.year
        panel.next.month = false
        panel.next.calendar = !panel.next.year
      },
      setYear: ($event, asNext) => {
        if (asNext) {
          datepicker.value.next = next.year($event)
          panel.next.year = !panel.next.year
          panel.next.month = false
          panel.next.calendar = !panel.next.year
          emit('select:right:year', datepicker.value.next)
          nextTick(() => {
            if (
              datepicker.value.previous.isSame(datepicker.value.next, 'month') ||
              datepicker.value.previous.isAfter(datepicker.value.next)
            ) {
              datepicker.value.previous = datepicker.value.next.subtract(1, 'month')
            }
            datepicker.value.year.previous = datepicker.value.previous.year()
            datepicker.value.year.next = datepicker.value.next.year()
          })
        }
      }
    }
  }
})

const displayDatepicker = ref(false)

setTimeout(() => {
  displayDatepicker.value = true
}, 250)

const isFirstMonday = () => {
  return dayjs().localeData().firstDayOfWeek()
}

const shuffleWeekdays = (days) => {
  const daysArr = [...days]
  const lastDay = daysArr.shift()
  return [...daysArr, lastDay]
}

const useArray = () => Array.isArray(props.modelValue)

const useObject = () => typeof props.modelValue === 'object'

const asRange = () => {
  if (!props.useRange && !props.asSingle) {
    return true
  } else if (!props.useRange && props.asSingle) {
    return false
  } else if (props.useRange && !props.asSingle) {
    return true
  } else return !!(props.useRange && props.asSingle)
}

const inRangeDate = (date) => {
  if (props.disableInRange) return false
  if (pickerValue.value === '') return false
  let s, e
  if (useArray()) {
    const [start, end] = props.modelValue
    s = start
    e = end
  } else if (useObject()) {
    if (props.modelValue) {
      const [start, end] = Object.values(props.modelValue)
      s = start
      e = end
    }
  } else {
    const [start, end] = props.modelValue.split(props.separator)
    s = start
    e = end
  }

  return date.isBetween(dayjs(s, props.formatter.date, true), dayjs(e, props.formatter.date, true), 'date', '[]')
}

const force = () => {
  previous.value = null
  next.value = null
  hoverValue.value = []
  selection.value = null
}

const clearPicker = () => {
  pickerValue.value = ''
  if (useArray()) {
    emit('update:modelValue', [])
  } else if (useObject()) {
    const obj = {}
    const [start, end] = Object.keys(props.modelValue)
    obj[start] = ''
    obj[end] = ''
    emit('update:modelValue', obj)
  } else {
    emit('update:modelValue', '')
  }
  applyValue.value = []
  VtdInputRef.value && VtdInputRef.value.focus()
}

/**
 * keyUp event
 * @since v1.0.5
 */
const keyUp = () => {
  if (asRange()) {
    const [s, e] = pickerValue.value.split(props.separator)
    const [sd, ed] = [dayjs(s, props.formatter.date, true), dayjs(e, props.formatter.date, true)]
    if (sd.isValid() && ed.isValid()) {
      setDate(sd)
      setDate(ed)
      if (useArray()) {
        emit('update:modelValue', [s, e])
      } else if (useObject()) {
        const obj = {}
        const [start, end] = Object.keys(props.modelValue)
        obj[start] = s
        obj[end] = e
        emit('update:modelValue', obj)
      } else {
        emit(
          'update:modelValue',
          useToValueFromArray(
            {
              previous: sd,
              next: ed
            },
            props
          )
        )
      }
    }
  } else {
    const d = dayjs(pickerValue.value, props.formatter.date, true)
    if (d.isValid()) {
      setDate(d)
      if (useArray()) {
        emit('update:modelValue', [pickerValue.value])
      } else if (useObject()) {
        const obj = {}
        const [start] = Object.keys(props.modelValue)
        obj[start] = pickerValue.value
        emit('update:modelValue', obj)
      } else {
        emit('update:modelValue', pickerValue.value)
      }
    }
  }
}

const setDate = (date, asNext, close) => {
  if (asRange()) {
    if (previous.value) {
      next.value = date
      if (props.autoApply) {
        if (date.isBefore(previous.value)) {
          pickerValue.value = useToValueFromArray(
            {
              previous: date,
              next: previous.value
            },
            props
          )
        } else {
          pickerValue.value = useToValueFromArray(
            {
              previous: previous.value,
              next: date
            },
            props
          )
        }
        const [s, e] = pickerValue.value.split(props.separator)

        if (useArray()) {
          emit('update:modelValue', [
            dayjs(s, props.formatter.date, true).format(props.formatter.date),
            dayjs(e, props.formatter.date, true).format(props.formatter.date)
          ])
        } else if (useObject()) {
          const obj = {}
          const [start, end] = Object.keys(props.modelValue)
          obj[start] = s
          obj[end] = e
          emit('update:modelValue', obj)
        } else {
          emit(
            'update:modelValue',
            useToValueFromArray(
              {
                previous: dayjs(s, props.formatter.date, true),
                next: dayjs(e, props.formatter.date, true)
              },
              props
            )
          )
        }
        if (close) {
          close()
        }
        applyValue.value = []
        if (!dayjs(s, props.formatter.date, true).isSame(dayjs(e, props.formatter.date, true), 'month')) {
          datepicker.value.previous = dayjs(s, props.formatter.date, true)
          datepicker.value.next = dayjs(e, props.formatter.date, true)
        }
        force()
      } else {
        if (previous.value.isAfter(date, 'month')) {
          applyValue.value = [date, previous.value]
        } else {
          applyValue.value = [previous.value, date]
        }
        const [s, e] = applyValue.value

        if (!s.isSame(e, 'month')) {
          datepicker.value.previous = s
          datepicker.value.next = e
        }
        force()
      }
    } else {
      applyValue.value = []
      previous.value = date
      selection.value = date
      hoverValue.value.push(date)
      applyValue.value.push(date)

      if (asNext) {
        datepicker.value.next = date
        if (datepicker.value.previous.isSame(date, 'month')) {
          datepicker.value.next = date.add(1, 'month')
        }
      } else {
        datepicker.value.previous = date
        if (datepicker.value.next.isSame(date, 'month')) {
          datepicker.value.previous = datepicker.value.next
          datepicker.value.next = date.add(1, 'month')
        }
      }
    }
  } else {
    if (props.autoApply) {
      pickerValue.value = useToValueFromString(date, props)
      if (useArray()) {
        emit('update:modelValue', [pickerValue.value])
      } else if (useObject()) {
        const obj = {}
        const [start] = Object.keys(props.modelValue)
        obj[start] = pickerValue.value
        emit('update:modelValue', obj)
      } else {
        emit('update:modelValue', pickerValue.value)
      }
      if (close) {
        close()
      }
      applyValue.value = []
      force()
    } else {
      applyValue.value = [date]
      force()
    }
  }
}

// onBeforeMount(() => {
//   if (props.modelValue[0] && props.modelValue[1]) {
//     setDate(dayjs(props.modelValue[0]), false)
//     setDate(dayjs(props.modelValue[1]), false)
//   }
// })

const applyDate = (close) => {
  if (applyValue.value.length < 1) return false
  let date
  if (asRange()) {
    const [s, e] = applyValue.value
    if (e.isBefore(s)) {
      date = useToValueFromArray(
        {
          previous: e,
          next: s
        },
        props
      )
    } else {
      date = useToValueFromArray(
        {
          previous: s,
          next: e
        },
        props
      )
    }
  } else {
    const [s] = applyValue.value
    date = s
  }
  if (asRange()) {
    const [s, e] = date.split(props.separator)

    if (useArray()) {
      emit('update:modelValue', [
        dayjs(s, props.formatter.date, true).format(props.formatter.date),
        dayjs(e, props.formatter.date, true).format(props.formatter.date)
      ])
    } else if (useObject()) {
      const obj = {}
      const [start, end] = Object.keys(props.modelValue)
      obj[start] = s
      obj[end] = e
      emit('update:modelValue', obj)
    } else {
      emit(
        'update:modelValue',
        useToValueFromArray(
          {
            previous: dayjs(s, props.formatter.date, true),
            next: dayjs(e, props.formatter.date, true)
          },
          props
        )
      )
    }
    pickerValue.value = date
  } else {
    pickerValue.value = date.format(props.formatter.date)
    if (useArray()) {
      emit('update:modelValue', [pickerValue.value])
    } else if (useObject()) {
      const obj = {}
      const [start] = Object.keys(props.modelValue)
      obj[start] = pickerValue.value
      emit('update:modelValue', obj)
    } else {
      emit('update:modelValue', pickerValue.value)
    }
  }
  if (close) {
    close()
  }
}

const atMouseOver = (date) => {
  if (!asRange()) return false
  if (previous.value) {
    hoverValue.value = [previous.value, date]
  } else {
    hoverValue.value = []
    return false
  }
}

const isBetweenRange = (date) => {
  if (previous.value && props.autoApply) return false
  let s, e
  if (hoverValue.value.length > 1) {
    const [start, end] = hoverValue.value
    s = dayjs(start, props.formatter.date, true)
    e = dayjs(end, props.formatter.date, true)
  } else {
    if (useArray()) {
      if (props.autoApply) {
        const [start, end] = props.modelValue
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      } else {
        const [start, end] = applyValue.value
        s = dayjs(start, props.formatter.date, true)
        e = dayjs(end, props.formatter.date, true)
      }
    } else if (useObject()) {
      if (props.autoApply) {
        if (props.modelValue) {
          const [start, end] = Object.values(props.modelValue)
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      } else {
        const [start, end] = applyValue.value
        s = dayjs(start, props.formatter.date, true)
        e = dayjs(end, props.formatter.date, true)
      }
    } else {
      if (props.autoApply) {
        const [start, end] = props.modelValue ? props.modelValue.split(props.separator) : [false, false]
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      } else {
        const [start, end] = applyValue.value
        s = dayjs(start, props.formatter.date, true)
        e = dayjs(end, props.formatter.date, true)
      }
    }
  }
  if (s && e) {
    return useBetweenRange(date, {
      previous: s,
      next: e
    })
  }
  return false
}

const datepickerClasses = (date) => {
  const { today, active, off, disabled } = date
  let classes, s, e
  if (asRange()) {
    if (useArray()) {
      if (selection.value) {
        const [start, end] = hoverValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      } else {
        if (props.autoApply) {
          const [start, end] = props.modelValue
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        } else {
          const [start, end] = applyValue.value
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      }
    } else if (useObject()) {
      if (selection.value) {
        const [start, end] = hoverValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      } else {
        if (props.autoApply) {
          const [start, end] = props.modelValue ? Object.values(props.modelValue) : [false, false]
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        } else {
          const [start, end] = applyValue.value
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      }
    } else {
      if (selection.value) {
        const [start, end] = hoverValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      } else {
        if (props.autoApply) {
          const [start, end] = props.modelValue ? props.modelValue.split(props.separator) : [false, false]
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        } else {
          const [start, end] = applyValue.value
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      }
    }
  } else {
    if (useArray()) {
      if (props.autoApply) {
        if (props.modelValue.length > 0) {
          const [start] = props.modelValue
          s = dayjs(start, props.formatter.date, true)
        }
      } else {
        const [start] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
      }
    } else if (useObject()) {
      if (props.autoApply) {
        if (props.modelValue) {
          const [start] = Object.values(props.modelValue)
          s = dayjs(start, props.formatter.date, true)
        }
      } else {
        const [start] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
      }
    } else {
      if (props.autoApply) {
        if (props.modelValue) {
          const [start] = props.modelValue.split(props.separator)
          s = dayjs(start, props.formatter.date, true)
        }
      } else {
        const [start] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
      }
    }
  }
  if (active) {
    classes = today
      ? `tw-text-vtd-primary-500 tw-font-semibold dark:tw-text-vtd-primary-400 tw-rounded-full focus:tw-bg-vtd-primary-50 focus:tw-text-vtd-secondary-900 focus:tw-border-vtd-primary-300 tw-focus:ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-text-vtd-secondary-300 dark:hover:tw-bg-vtd-secondary-700 dark:hover:tw-text-vtd-secondary-300 dark:focus:tw-bg-vtd-secondary-600 dark:focus:tw-text-vtd-secondary-100 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-25 dark:focus:tw-bg-opacity-50`
      : disabled
      ? `tw-text-vtd-secondary-600 tw-font-normal disabled:tw-text-vtd-secondary-500 disabled:tw-cursor-not-allowed tw-rounded-full`
      : date.isBetween(s, e, 'date', '()')
      ? `tw-text-vtd-secondary-700 tw-font-medium dark:tw-text-vtd-secondary-100 tw-rounded-full`
      : `tw-text-vtd-secondary-600 tw-font-medium dark:tw-text-vtd-secondary-200 tw-rounded-full`
  }
  if (off) {
    classes = `tw-text-vtd-secondary-400 tw-font-light disabled:tw-cursor-not-allowed`
  }
  if (s && e && !off) {
    if (date.isSame(s, 'date')) {
      classes = e.isAfter(s, 'date')
        ? 'tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-l-full disabled:tw-cursor-not-allowed'
        : 'tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-r-full disabled:tw-cursor-not-allowed'
      if (s.isSame(e, 'date')) {
        classes = `tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-full disabled:tw-cursor-not-allowed`
      }
    }
    if (date.isSame(e, 'date')) {
      classes = e.isAfter(s, 'date')
        ? 'tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-r-full disabled:tw-cursor-not-allowed'
        : 'tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-l-full disabled:tw-cursor-not-allowed'
      if (s.isSame(e, 'date')) {
        classes = `tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-full disabled:tw-cursor-not-allowed`
      }
    }
  } else if (s) {
    if (date.isSame(s, 'date') && !off) {
      classes = `tw-bg-vtd-primary-500 tw-text-white tw-font-bold tw-rounded-full disabled:tw-cursor-not-allowed`
    }
  }

  return classes
}

const betweenRangeClasses = (date) => {
  let classes, s, e
  classes = ''
  if (!asRange()) return classes
  if (useArray()) {
    if (hoverValue.value.length > 1) {
      const [start, end] = hoverValue.value
      s = start && dayjs(start, props.formatter.date, true)
      e = end && dayjs(end, props.formatter.date, true)
    } else {
      if (props.autoApply) {
        const [start, end] = props.modelValue
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      } else {
        const [start, end] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
    }
  } else if (useObject()) {
    if (hoverValue.value.length > 1) {
      const [start, end] = hoverValue.value
      s = start && dayjs(start, props.formatter.date, true)
      e = end && dayjs(end, props.formatter.date, true)
    } else {
      if (props.autoApply) {
        if (props.modelValue) {
          const [start, end] = Object.values(props.modelValue)
          s = start && dayjs(start, props.formatter.date, true)
          e = end && dayjs(end, props.formatter.date, true)
        }
      } else {
        const [start, end] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
    }
  } else {
    if (hoverValue.value.length > 1) {
      const [start, end] = hoverValue.value
      s = start && dayjs(start, props.formatter.date, true)
      e = end && dayjs(end, props.formatter.date, true)
    } else {
      if (props.autoApply) {
        const [start, end] = props.modelValue ? props.modelValue.split(props.separator) : [false, false]
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      } else {
        const [start, end] = applyValue.value
        s = start && dayjs(start, props.formatter.date, true)
        e = end && dayjs(end, props.formatter.date, true)
      }
    }
  }

  if (s && e) {
    if (date.isSame(s, 'date')) {
      if (e.isBefore(s)) {
        classes += ` tw-rounded-r-full tw-inset-0`
      }
      if (s.isBefore(e)) {
        classes += ` tw-rounded-l-full tw-inset-0`
      }
    } else if (date.isSame(e, 'date')) {
      if (e.isBefore(s)) {
        classes += ` tw-rounded-l-full tw-inset-0`
      }
      if (s.isBefore(e)) {
        classes += ` tw-rounded-r-full tw-inset-0`
      }
    } else {
      classes += ` tw-inset-0`
    }
  }
  return classes
}

const forceEmit = (s, e) => {
  datepicker.value.previous = dayjs(s, props.formatter.date, true)
  datepicker.value.next = dayjs(e, props.formatter.date, true)
  if (
    dayjs.duration(datepicker.value.next.diff(datepicker.value.previous)).$d.months === 2 ||
    (dayjs.duration(datepicker.value.next.diff(datepicker.value.previous)).$d.months === 1 &&
      dayjs.duration(datepicker.value.next.diff(datepicker.value.previous)).$d.days === 7)
  ) {
    datepicker.value.next = datepicker.value.next.subtract(1, 'month')
  }
  if (
    datepicker.value.next.isSame(datepicker.value.previous, 'month') ||
    datepicker.value.next.isBefore(datepicker.value.previous)
  ) {
    datepicker.value.next = datepicker.value.previous.add(1, 'month')
  }
}

const emitShortcut = (s, e) => {
  if (asRange()) {
    if (props.autoApply) {
      if (useArray()) {
        emit('update:modelValue', [s, e])
      } else if (useObject()) {
        const obj = {}
        const [start, end] = Object.keys(props.modelValue)
        obj[start] = s
        obj[end] = e
        emit('update:modelValue', obj)
      } else {
        emit(
          'update:modelValue',
          useToValueFromArray(
            {
              previous: dayjs(s, props.formatter.date, true),
              next: dayjs(e, props.formatter.date, true)
            },
            props
          )
        )
      }
      pickerValue.value = `${s}${props.separator}${e}`
    } else {
      applyValue.value = [dayjs(s, props.formatter.date, true), dayjs(e, props.formatter.date, true)]
    }
  } else {
    if (props.autoApply) {
      if (useArray()) {
        emit('update:modelValue', [s])
      } else if (useObject()) {
        const obj = {}
        const [start] = Object.keys(props.modelValue)
        obj[start] = s
        emit('update:modelValue', obj)
      } else {
        emit('update:modelValue', s)
      }
      pickerValue.value = s
    } else {
      applyValue.value = [dayjs(s, props.formatter.date, true), dayjs(e, props.formatter.date, true)]
    }
  }
  forceEmit(s, e)
}

const setToToday = (close) => {
  const s = dayjs().format(props.formatter.date)
  const e = dayjs().format(props.formatter.date)

  emitShortcut(s, e)
  if (close) {
    close()
  }
}

const setToYesterday = (close) => {
  const s = dayjs().subtract(1, 'day').format(props.formatter.date)
  const e = dayjs().subtract(1, 'day').format(props.formatter.date)

  emitShortcut(s, e)
  if (close) {
    close()
  }
}

const setToLastDay = (day, close) => {
  const s = dayjs()
    .subtract(day - 1, 'day')
    .format(props.formatter.date)
  const e = dayjs().format(props.formatter.date)

  emitShortcut(s, e)
  if (close) {
    close()
  }
}

const setToThisMonth = (close) => {
  const s = dayjs().date(1).format(props.formatter.date)
  const e = dayjs().date(dayjs().daysInMonth()).format(props.formatter.date)

  emitShortcut(s, e)
  if (close) {
    close()
  }
}

const setToLastMonth = (close) => {
  const s = dayjs().date(1).subtract(1, 'month').format(props.formatter.date)
  const e = dayjs().date(0).format(props.formatter.date)

  emitShortcut(s, e)
  if (close) {
    close()
  }
}

const setToCustomShortcut = (item, close) => {
  let s, e
  const [d, dd] = item.atClick()
  s = dayjs(d).format(props.formatter.date)
  e = dayjs(dd).format(props.formatter.date)

  emitShortcut(s, e)
  if (close) {
    close()
  }
}

watch(
  () => applyValue.value,
  (newValue) => {
    if (newValue.length > 0) {
      panel.previous.calendar = true
      panel.previous.month = false
      panel.previous.year = false

      panel.next.calendar = true
      panel.next.month = false
      panel.next.year = false
    }
  }
)

watchEffect(() => {
  if (!props.placeholder) {
    if (asRange()) {
      givenPlaceholder.value = `${props.formatter.date}${props.separator}${props.formatter.date}`
    } else {
      givenPlaceholder.value = props.formatter.date
    }
  } else {
    givenPlaceholder.value = props.placeholder
  }
})

watchEffect(() => {
  const locale = props.i18n
  nextTick(() => {
    const modules = import.meta.glob(`./locale/*.js`)
    for (const path in modules) {
      modules[path]()
        .then(() => {
          dayjs.locale(locale)
          let s, e
          if (asRange()) {
            if (useArray()) {
              if (props.modelValue.length > 0) {
                const [start, end] = props.modelValue
                s = dayjs(start, props.formatter.date, true)
                e = dayjs(end, props.formatter.date, true)
              }
            } else if (useObject()) {
              if (!isProxy(props.modelValue)) {
                try {
                  Object.keys(props.modelValue)
                } catch (e) {
                  console.warn(
                    '[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model',
                    'font-style: italic; color: #42b883;',
                    ', but you pass it undefined or null.'
                  )
                  console.warn(
                    `[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }`,
                    'font-style: italic; color: #42b883;',
                    ', but you can replace manually.'
                  )
                  emit('update:modelValue', {
                    startDate: '',
                    endDate: ''
                  })
                }
              }
              if (props.modelValue) {
                const [start, end] = Object.values(props.modelValue)
                s = start && dayjs(start, props.formatter.date, true)
                e = end && dayjs(end, props.formatter.date, true)
              }
            } else {
              if (props.modelValue) {
                const [start, end] = props.modelValue.split(props.separator)
                s = dayjs(start, props.formatter.date, true)
                e = dayjs(end, props.formatter.date, true)
              }
            }

            if (s && e) {
              pickerValue.value = useToValueFromArray(
                {
                  previous: s,
                  next: e
                },
                props
              )
              if (e.isBefore(s, 'month')) {
                datepicker.value.previous = e
                datepicker.value.next = s
                datepicker.value.year.previous = e.year()
                datepicker.value.year.next = s.year()
              } else if (e.isSame(s, 'month')) {
                datepicker.value.previous = s
                datepicker.value.next = e.add(1, 'month')
                datepicker.value.year.previous = s.year()
                datepicker.value.year.next = s.add(1, 'year').year()
              } else {
                datepicker.value.previous = s
                datepicker.value.next = e
                datepicker.value.year.previous = s.year()
                datepicker.value.year.next = e.year()
              }
              if (!props.autoApply) {
                applyValue.value = [s, e]
              }
            } else {
              datepicker.value.previous = dayjs(props.startFrom)
              datepicker.value.next = dayjs(props.startFrom).add(1, 'month')
              datepicker.value.year.previous = datepicker.value.previous.year()
              datepicker.value.year.next = datepicker.value.next.year()
            }
          } else {
            if (useArray()) {
              if (props.modelValue.length > 0) {
                const [start] = props.modelValue
                s = dayjs(start, props.formatter.date, true)
              }
            } else if (useObject()) {
              if (props.modelValue) {
                const [start] = Object.values(props.modelValue)
                s = dayjs(start, props.formatter.date, true)
              }
            } else {
              if (props.modelValue.length) {
                const [start] = props.modelValue.split(props.separator)
                s = dayjs(start, props.formatter.date, true)
              }
            }

            if (s && s.isValid()) {
              pickerValue.value = useToValueFromString(s, props)
              datepicker.value.previous = s
              datepicker.value.next = s.add(1, 'month')
              datepicker.value.year.previous = s.year()
              datepicker.value.year.next = s.add(1, 'year').year()
              if (!props.autoApply) {
                applyValue.value = [s]
              }
            } else {
              datepicker.value.previous = dayjs(props.startFrom)
              datepicker.value.next = dayjs(props.startFrom).add(1, 'month')
              datepicker.value.year.previous = datepicker.value.previous.year()
              datepicker.value.year.next = datepicker.value.next.year()
            }
          }
          const days = props.weekdaysSize === 'min' ? dayjs.weekdaysMin() : dayjs.weekdaysShort()
          datepicker.value.weeks = isFirstMonday() ? shuffleWeekdays(days) : days
          datepicker.value.months = props.formatter.month === 'MMM' ? dayjs.monthsShort() : dayjs.months()
        })
        .catch((e) => {
          console.warn(e.message)
        })
    }
  })
})

const getAbsoluteClass = (open) => {
  if (open && placement.value === null) {
    placement.value = useVisibleViewport(VtdRef.value)
  }
  if (open && placement.value) {
    return 'place-right'
  }
  return 'place-left'
}

const getAbsoluteParentClass = (open) => {
  if (open && placement.value === null) {
    placement.value = useVisibleViewport(VtdRef.value)
  }

  if (placement.value) {
    return 'tw-left-auto tw-right-0'
  }
  return 'tw-left-0 tw-right-auto'
}

provide('isBetweenRange', isBetweenRange)
provide('betweenRangeClasses', betweenRangeClasses)
provide('datepickerClasses', datepickerClasses)
provide('atMouseOver', atMouseOver)
provide('setToToday', setToToday)
provide('setToYesterday', setToYesterday)
provide('setToLastDay', setToLastDay)
provide('setToThisMonth', setToThisMonth)
provide('setToLastMonth', setToLastMonth)
provide('setToCustomShortcut', setToCustomShortcut)
</script>

<template>
  <Popover v-if="!props.noInput" v-slot="{ open }" as="div" id="vtd" class="tw-relative tw-w-full">
    <PopoverOverlay v-if="props.overlay" class="tw-fixed tw-inset-0 tw-bg-black tw-opacity-30" />

    <PopoverButton as="label" class="tw-relative tw-block">
      <slot :value="pickerValue" :placeholder="givenPlaceholder" :clear="clearPicker">
        <input
          ref="VtdInputRef"
          type="text"
          class="tw-relative tw-block tw-w-full"
          :class="
            inputClasses ||
            'tw-pl-3 tw-pr-12 tw-py-2.5 tw-rounded-lg tw-overflow-hidden tw-border-solid tw-text-sm tw-text-vtd-secondary-700 tw-placeholder-vtd-secondary-400 tw-transition-colors tw-bg-white tw-border tw-border-vtd-secondary-300 focus:tw-border-vtd-primary-300 focus:tw-ring focus:tw-ring-vtd-primary-500 focus:tw-ring-opacity-10 focus:tw-outline-none dark:tw-bg-vtd-secondary-800 dark:tw-border-vtd-secondary-700 dark:tw-text-vtd-secondary-100 dark:tw-placeholder-vtd-secondary-500 dark:focus:tw-border-vtd-primary-500 dark:focus:tw-ring-opacity-20'
          "
          autocomplete="off"
          data-lpignore="true"
          data-form-type="other"
          v-bind="$attrs"
          v-model="pickerValue"
          :placeholder="givenPlaceholder"
          @keyup="keyUp"
        />
        <div
          class="tw-absolute tw-inset-y-0 tw-right-0 tw-inline-flex tw-items-center tw-rounded-md tw-overflow-hidden"
        >
          <button
            type="button"
            class="tw-px-2 tw-py-1 tw-mr-1 focus:tw-outline-none tw-text-vtd-secondary-400 dark:tw-text-opacity-70 tw-rounded-md"
            @click="pickerValue ? clearPicker() : $refs.VtdInputRef.focus()"
          >
            <svg
              class="tw-w-5 tw-h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                v-if="pickerValue"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </button>
        </div>
      </slot>
    </PopoverButton>

    <transition
      enter-from-class="tw-opacity-0 tw-translate-y-3"
      enter-to-class="tw-opacity-100 tw-translate-y-0"
      enter-active-class="tw-transform tw-transition tw-ease-out tw-duration-200"
      leave-active-class="tw-transform tw-transition tw-ease-in tw-duration-150"
      leave-from-class="tw-opacity-100 tw-translate-y-0"
      leave-to-class="tw-opacity-0 tw-translate-y-3"
    >
      <PopoverPanel as="div" class="tw-relative tw-z-50" v-slot="{ close }">
        <div class="tw-absolute tw-z-50 tw-top-full sm:tw-mt-2.5" :class="getAbsoluteParentClass(open)">
          <div
            ref="VtdRef"
            class="tw-fixed tw-inset-0 tw-z-50 tw-overflow-y-auto sm:tw-overflow-visible sm:tw-static sm:tw-z-auto tw-bg-white dark:tw-bg-vtd-secondary-800 sm:tw-rounded-lg tw-shadow-sm"
          >
            <div
              class="vtd-datepicker tw-static sm:tw-relative tw-w-full tw-bg-white sm:tw-rounded-lg sm:tw-shadow-sm tw-border-0 sm:tw-border tw-border-black/[.1] tw-px-3 tw-py-3 sm:tw-px-4 sm:tw-py-4 dark:tw-bg-vtd-secondary-800 dark:tw-border-vtd-secondary-700/[1]"
              :class="getAbsoluteClass(open)"
            >
              <div class="tw-flex tw-flex-wrap lg:tw-flex-nowrap">
                <vtd-shortcut
                  v-if="props.shortcuts"
                  :shortcuts="props.shortcuts"
                  :as-range="asRange()"
                  :as-single="props.asSingle"
                  :i18n="props.options.shortcuts"
                  :close="close"
                />
                <div class="tw-relative tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-p-1 tw-w-full">
                  <div
                    v-if="asRange() && !props.asSingle"
                    class="tw-hidden tw-h-full tw-absolute tw-inset-0 sm:tw-flex tw-justify-center tw-items-center"
                  >
                    <div class="tw-h-full tw-border-r tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]"></div>
                  </div>
                  <div
                    class="tw-relative tw-w-full md:tw-w-1/2 lg:tw-w-80"
                    :class="{
                      'tw-mb-3 sm:tw-mb-0 sm:tw-mr-2': asRange() && !props.asSingle
                    }"
                  >
                    <vtd-header :panel="panel.previous" :calendar="calendar.previous" />
                    <div class="tw-px-0.5 sm:tw-px-2">
                      <vtd-month
                        v-show="panel.previous.month"
                        :months="months"
                        @update:month="calendar.previous.setMount"
                      />
                      <vtd-year
                        v-show="panel.previous.year"
                        :years="calendar.previous.years()"
                        @update:year="calendar.previous.setYear"
                      />
                      <div v-show="panel.previous.calendar">
                        <vtd-week :weeks="weeks" />
                        <vtd-calendar
                          :calendar="calendar.previous"
                          :weeks="weeks"
                          :as-range="asRange()"
                          @update:date="(date, asNext) => setDate(date, asNext, close)"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="asRange() && !props.asSingle"
                    class="tw-relative tw-w-full md:tw-w-1/2 lg:tw-w-80 tw-overflow-hidden tw-mt-3 sm:tw-mt-0 sm:tw-ml-2"
                  >
                    <vtd-header as-prev-or-next :panel="panel.next" :calendar="calendar.next" />
                    <div class="tw-px-0.5 sm:tw-px-2">
                      <vtd-month v-show="panel.next.month" :months="months" @update:month="calendar.next.setMount" />
                      <vtd-year
                        as-prev-or-next
                        v-show="panel.next.year"
                        :years="calendar.next.years()"
                        @update:year="calendar.next.setYear"
                      />
                      <div v-show="panel.next.calendar">
                        <vtd-week :weeks="weeks" />
                        <vtd-calendar
                          as-prev-or-next
                          :calendar="calendar.next"
                          :weeks="weeks"
                          :as-range="asRange()"
                          @update:date="(date, asNext) => setDate(date, asNext, close)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!props.autoApply">
                <div
                  class="tw-mt-2 tw-mx-2 tw-py-1.5 tw-border-t tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]"
                >
                  <div class="tw-mt-1.5 sm:tw-flex sm:tw-flex-row-reverse">
                    <button
                      type="button"
                      class="away-apply-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-vtd-primary-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-vtd-primary-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800 disabled:tw-cursor-not-allowed"
                      :disabled="props.asSingle ? applyValue.length < 1 : applyValue.length < 2"
                      @click="applyDate(close)"
                      v-text="props.options.footer.apply"
                    ></button>
                    <button
                      type="button"
                      @click="close()"
                      class="tw-mt-3 away-cancel-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-vtd-secondary-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-base tw-font-medium tw-text-vtd-secondary-700 hover:tw-bg-vtd-secondary-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-mt-0 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800"
                      v-text="props.options.footer.cancel"
                    ></button>
                  </div>
                </div>
              </div>
              <div v-else class="sm:tw-hidden">
                <div
                  class="tw-mt-2 tw-mx-2 tw-py-1.5 tw-border-t tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]"
                >
                  <div class="tw-mt-1.5 sm:tw-flex sm:tw-flex-row-reverse">
                    <button
                      type="button"
                      @click="close()"
                      class="away-cancel-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-vtd-secondary-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-base tw-font-medium tw-text-vtd-secondary-700 hover:tw-bg-vtd-secondary-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-mt-0 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800"
                      v-text="props.options.footer.cancel"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
  <div v-else-if="displayDatepicker" class="tw-flex">
    <div
      class="tw-bg-white tw-rounded-lg tw-shadow-sm tw-border-0 tw-border tw-border-black/[.1] tw-px-3 tw-py-3 sm:tw-px-4 sm:tw-py-4 dark:tw-bg-vtd-secondary-800 dark:tw-border-vtd-secondary-700/[1]"
    >
      <div class="tw-flex tw-flex-wrap lg:tw-flex-nowrap">
        <vtd-shortcut
          v-if="props.shortcuts"
          :shortcuts="props.shortcuts"
          :as-range="asRange()"
          :as-single="props.asSingle"
          :i18n="props.options.shortcuts"
        />
        <div class="tw-relative tw-flex tw-flex-wrap sm:tw-flex-nowrap tw-p-1 tw-w-full">
          <div
            v-if="asRange() && !props.asSingle"
            class="tw-hidden tw-h-full tw-absolute tw-inset-0 sm:tw-flex tw-justify-center tw-items-center"
          >
            <div class="tw-h-full tw-border-r tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]"></div>
          </div>
          <div
            class="tw-relative tw-w-full lg:tw-w-80"
            :class="{
              'tw-mb-3 sm:tw-mb-0 sm:tw-mr-2 md:tw-w-1/2': asRange() && !props.asSingle
            }"
          >
            <vtd-header :panel="panel.previous" :calendar="calendar.previous" />
            <div class="tw-px-0.5 sm:tw-px-2">
              <vtd-month v-show="panel.previous.month" :months="months" @update:month="calendar.previous.setMount" />
              <vtd-year
                v-show="panel.previous.year"
                :years="calendar.previous.years()"
                @update:year="calendar.previous.setYear"
              />
              <div v-show="panel.previous.calendar">
                <vtd-week :weeks="weeks" />
                <vtd-calendar
                  :calendar="calendar.previous"
                  :weeks="weeks"
                  :as-range="asRange()"
                  @update:date="(date, asNext) => setDate(date, asNext)"
                />
              </div>
            </div>
          </div>

          <div
            v-if="asRange() && !props.asSingle"
            class="tw-relative tw-w-full md:tw-w-1/2 lg:tw-w-80 tw-overflow-hidden tw-mt-3 sm:tw-mt-0 sm:tw-ml-2"
          >
            <vtd-header as-prev-or-next :panel="panel.next" :calendar="calendar.next" />
            <div class="tw-px-0.5 sm:tw-px-2">
              <vtd-month v-show="panel.next.month" :months="months" @update:month="calendar.next.setMount" />
              <vtd-year
                as-prev-or-next
                v-show="panel.next.year"
                :years="calendar.next.years()"
                @update:year="calendar.next.setYear"
              />
              <div v-show="panel.next.calendar">
                <vtd-week :weeks="weeks" />
                <vtd-calendar
                  as-prev-or-next
                  :calendar="calendar.next"
                  :weeks="weeks"
                  :as-range="asRange()"
                  @update:date="(date, asNext) => setDate(date, asNext)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!props.autoApply">
        <div class="tw-mt-2 tw-mx-2 tw-py-1.5 tw-border-t tw-border-black/[.1] dark:tw-border-vtd-secondary-700/[1]">
          <div class="tw-mt-1.5 sm:tw-flex sm:tw-flex-row-reverse">
            <button
              type="button"
              class="away-apply-picker tw-w-full tw-transition tw-ease-out tw-duration-300 tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-vtd-primary-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-vtd-primary-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-vtd-primary-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm dark:tw-ring-offset-vtd-secondary-800 disabled:tw-cursor-not-allowed"
              :disabled="props.asSingle ? applyValue.length < 1 : applyValue.length < 2"
              @click="applyDate()"
              v-text="props.options.footer.apply"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.vtd-datepicker-overlay.open::before {
  @apply tw-block tw-opacity-50;
}
.vtd-datepicker::before {
  --vtd-datepicker: 0px;
  content: '';
  @apply tw-absolute tw-top-0 tw-w-4 tw-h-4 tw-bg-white tw-shadow tw-border tw-border-black/[.1] dark:tw-bg-vtd-secondary-800 dark:tw-border-vtd-secondary-700;
  transform: translate(50%, -50%) rotate(-45deg);
  clip-path: polygon(
    calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),
    calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),
    calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker))
  );
}
.vtd-datepicker.place-left::before {
  @apply tw-left-1;
}
.vtd-datepicker.place-right::before {
  @apply tw-right-5;
}
</style>
