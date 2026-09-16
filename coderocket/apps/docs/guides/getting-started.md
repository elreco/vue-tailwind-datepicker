# Installation

Requires Vue 3.5 or later in the Vue 3 line. Tailwind is optional: the supplied stylesheet is already compiled and does not include a global reset.

```sh
npm install @coderocketapp/vue
```

```ts
import { CrDatePicker, CrDateRangePicker, CrTimePicker } from '@coderocketapp/vue'
import '@coderocketapp/vue/style.css'
```

Import the CSS once in your application entry. Components are named exports; there is no global plugin to install. The package is ESM and includes TypeScript declarations.

## Before the first npm release

Build and install the local archive:

```sh
cd coderocket
npm ci
npm run build:lib
npm pack -w @coderocketapp/vue
# In your consuming app:
npm install /absolute/path/to/coderocketapp-vue-0.1.0.tgz
```

Do not assume the package is published until the release workflow or npm confirms it.

## Forms

`CrDatePicker` and `CrTimePicker` accept a `name` prop and submit an ISO date or clock time through a hidden input. The range component exposes `{ start, end }`; submit those values using your application's form handling.

Labels should describe the field. Provide a label even if you replace the trigger using a slot.

## Complete applications

Download the [Vue example](https://github.com/elreco/vue-tailwind-datepicker/tree/codex/coderocket-ui/coderocket/examples/vue) or the [Nuxt example](https://github.com/elreco/vue-tailwind-datepicker/tree/codex/coderocket-ui/coderocket/examples/nuxt). Each includes its package manifest, application and build configuration. Neither requires Tailwind.

## Pilot archive (available now)

The first npm publication is awaiting owner verification. You can already install the exact public pilot archive:

```sh
npm install https://coderocket-ui.netlify.app/downloads/coderocketapp-vue-0.1.0.tgz
```

The package name and imports stay `@coderocketapp/vue`. [Markdown for coding assistants](https://coderocket-ui.netlify.app/llms-full.txt).
