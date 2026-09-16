import { describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { calendarDate, clockTime, formatDate } from '../packages/vue/src/core'
import { CrDatePicker, CrDateRangePicker, CrTimePicker } from '../packages/vue/src/index'
describe('public ISO model', () => {
  it('validates date-only and local-time input without timezone shifts', () => {
    expect(calendarDate('2028-02-29').toString()).toBe('2028-02-29')
    expect(() => calendarDate('2026-02-29')).toThrow()
    expect(() => calendarDate('10/15/2026')).toThrow()
    expect(clockTime('09:30').hour).toBe(9)
    expect(() => clockTime('24:00')).toThrow()
    expect(formatDate('2026-10-15', 'fr-FR')).toMatch(/15 oct/)
    expect(formatDate('2026-10-15', 'en-GB')).toMatch(/15 Oct/)
  })
  it('server renders the complete library without browser globals', async () => {
    const app = createSSRApp({
      render: () =>
        h('main', [
          h(CrDatePicker, { modelValue: '2026-10-15', label: 'Launch', locale: 'fr-FR' }),
          h(CrDateRangePicker, { modelValue: { start: '2026-10-01', end: '2026-10-05' }, label: 'Period' }),
          h(CrTimePicker, { modelValue: '09:30', label: 'Opening' }),
        ]),
    })
    const html = await renderToString(app)
    expect(html).toContain('15 oct. 2026')
    expect(html).toContain('Launch')
    expect(html).toContain('Opening')
    expect(html).not.toContain('Invalid Date')
  })
})
