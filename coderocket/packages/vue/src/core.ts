import { parseDate, parseTime, type CalendarDate, type Time } from '@internationalized/date'

/** Gregorian date without a time or timezone, e.g. 2026-10-15. */
export type ISODate = string
/** Local, minute-precision clock time, e.g. 09:30. */
export type LocalTime = string
export interface DateRangeValue {
  start: ISODate
  end: ISODate
}
export type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6
export function calendarDate(value: ISODate): CalendarDate {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new RangeError('Expected a YYYY-MM-DD Gregorian date')
  const date = parseDate(value)
  if (date.toString() !== value) throw new RangeError('Invalid calendar date')
  return date
}
export function clockTime(value: LocalTime): Time {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(value))
    throw new RangeError('Expected a HH:mm time between 00:00 and 23:59')
  return parseTime(value)
}
export function formatDate(
  value: ISODate,
  locale = 'en-GB',
  options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' },
): string {
  return new Intl.DateTimeFormat(locale, { ...options, timeZone: 'UTC' }).format(
    calendarDate(value).toDate('UTC'),
  )
}
export function isFrench(locale: string): boolean {
  return locale.toLowerCase().startsWith('fr')
}
