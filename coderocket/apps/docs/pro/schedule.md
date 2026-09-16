# Schedule model

Version 1 uses a Gregorian start date, optional inclusive end date, an IANA timezone and a weekly pattern.

```ts
const schedule = {
  version: 1,
  timeZone: 'Europe/Paris',
  startDate: '2026-10-01',
  endDate: '2026-10-31',
  intervalWeeks: 2,
  weekly: [
    { day: 2, slots: [{ start: '09:00', end: '12:00' }] },
    { day: 4, slots: [{ start: '09:00', end: '12:00' }] },
  ],
  exceptions: [{ date: '2026-10-15', slots: [] }],
}
```

Weekdays use ISO numbering: Monday 1 through Sunday 7. Alternating weeks are anchored to the Monday of the week containing `startDate`. Dates earlier than `startDate` are excluded.

A date exception replaces the entire day's usual availability, even in a normally inactive week. An empty exception closes the day. Slots are local `HH:mm` values in the schedule timezone; start is inclusive and end exclusive. Adjacent slots are allowed; overlapping, reversed and overnight slots are rejected. Endpoints must be between 00:00 and 23:59 in this version.

## Server-side usage

```ts
import { validateAvailability, expandAvailability } from '@coderocketapp/availability-pro/core'
const validation = validateAvailability(requestBody)
if (!validation.success) return validation.issues
const { occurrences, diagnostics } = expandAvailability(validation.data, {
  from: '2026-10-01',
  to: '2026-10-31',
})
```

Every occurrence contains its local date and clock times, IANA timezone, and UTC start/end instants. The preview window is inclusive and limited to 366 days. Calculation is independent of the server's own timezone.

Ambiguous or nonexistent local-time boundaries during clock changes produce diagnostics and omit the affected slot. They are never silently shifted. Show diagnostics to the user and let them add an explicit date override.

Limits: 7 weekday entries, 12 windows per day, 100 date exceptions, interval 1–52 weeks. Duplicate days or exception dates are invalid; exceptions must lie within the schedule period.
