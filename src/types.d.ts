import { ComponentOptionsMixin, ComputedOptions, DefineComponent, MethodOptions } from 'vue'

declare namespace VueTailwindDatepicker {
  interface Formatter {
    date?: string
    month?: string
  }

  interface Options {
    shortcuts?: Options.Shortcuts
    footer?: Options.Footer
  }

  namespace Options {
    interface Shortcuts {
      today?: string
      yesterday?: string
      past?: (period: string) => string
      currentMonth?: string
      pastMonth?: string
    }
    interface Footer {
      apply?: string
      cancel?: string
    }
  }
}

export interface DatepickerProps {
  overlay?: boolean
  asSingle?: boolean
  useRange?: boolean
  placeholder?: boolean | string
  i18n?: string
  inputClasses?: string
  disableInRange?: boolean
  disableDate?: false | ((date: Date) => boolean)
  autoApply?: boolean
  shortcuts?: () => { label: string; atClick: () => Date[] }[]
  separator?: string
  formatter?: VueTailwindDatepicker.Formatter
  modelValue:
    | [Date, Date]
    | { start: Date | string; end: Date | string }
    | {
        startDate: Date | string
        endDate: Date | string
      }
    | string
  startFrom?: Date | string
  options?: VueTailwindDatepicker.Options
}

declare enum DatePickerEmits {
  ModelUpdated = 'update:modelValue'
}

declare type TypedDatepickerEmits = {
  [DatePickerEmits.ModelUpdated]: () => true
}

declare type TypedDatepickerData = Record<string, unknown>
declare type VueTailwindDatePicker = DefineComponent<
  DatepickerProps,
  TypedDatepickerData,
  unknown,
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  TypedDatepickerEmits
>

declare const component: VueTailwindDatePicker
export default component
