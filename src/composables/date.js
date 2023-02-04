export default function useDate() {
  const usePreviousDate = (date) => {
    const display = []
    const firstDay = date.localeData().firstDayOfWeek()
    for (let i = 0; i <= date.date(0 - firstDay).day(); i++) {
      display.push(date.date(0).subtract(i, 'day'))
    }
    return display.sort((a, b) => a.date() - b.date())
  }

  const useCurrentDate = (date) => {
    return Array.from(
      {
        length: date.daysInMonth()
      },
      (v, k) => date.date(k + 1)
    )
  }

  const useNextDate = (date) => {
    const display = []
    for (let i = 1; i <= 42 - (usePreviousDate(date).length + date.daysInMonth()); i++) {
      display.push(date.date(i).month(date.month()).add(1, 'month'))
    }
    return display
  }

  const useDisableDate = (date, { disableDate }) => {
    if (typeof disableDate === 'function') {
      return disableDate(date.toDate())
    } else {
      return false
    }
  }

  const useBetweenRange = (date, { previous, next }) => {
    let pattern
    if (previous.isAfter(next, 'date')) {
      pattern = '(]'
    } else {
      pattern = '[)'
    }
    return !!(date.isBetween(previous, next, 'date', pattern) && !date.off)
  }

  const useToValueFromString = (date, { formatter }) => {
    return date.format(formatter.date)
  }

  const useToValueFromArray = ({ previous, next }, { formatter, separator }) => {
    return `${previous.format(formatter.date)}${separator}${next.format(formatter.date)}`
  }
  return {
    usePreviousDate,
    useCurrentDate,
    useNextDate,
    useDisableDate,
    useBetweenRange,
    useToValueFromString,
    useToValueFromArray
  }
}
