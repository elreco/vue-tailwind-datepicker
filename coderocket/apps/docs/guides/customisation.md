# Make it your own

## Theme variables

```css
.my-app .cr-ui {
  --cr-accent: #6742a5;
  --cr-accent-soft: #f0eafa;
  --cr-surface: #fff;
  --cr-text: #24202a;
  --cr-muted: #6a6373;
  --cr-border: #ddd6e6;
  --cr-radius: 12px;
  --cr-font: 'Your font', system-ui, sans-serif;
}
```

Popover content is rendered in a portal outside its original DOM ancestry. Apply theme variables to `.cr-ui` globally, or use your own headless composition when a theme must remain scoped to one subtree. Do not depend only on `.my-app` for portal styling.

Both date components expose `trigger` (current value) and `day` (ISO date) slots. Keep accessible text in custom triggers and avoid adding nested interactive controls inside calendar day buttons.

## Headless

The `@coderocketapp/vue/headless` entry exports Reka calendar, range calendar, popover and time-field primitives without the CodeRocket theme.

```ts
import { CalendarRoot, CalendarGrid, CalendarCellTrigger } from '@coderocketapp/vue/headless'
import { calendarDate } from '@coderocketapp/vue/core'
```

Primitive values are `@internationalized/date` objects. The styled CodeRocket components convert these to plain ISO strings. Follow [Reka's composition documentation](https://reka-ui.com/docs/components/calendar) when building your own controls.

## Dark mode

```css
.dark .cr-ui {
  --cr-surface: #18251f;
  --cr-text: #e9f0eb;
  --cr-muted: #a1b4a8;
  --cr-border: #385345;
  --cr-accent: #397957;
  --cr-accent-soft: #233e2e;
}
```
