# A new chapter, at your pace

CodeRocket UI is a new API in the same public repository. It does not replace your installed datepicker automatically.

| Existing project                         | New foundation                  |
| ---------------------------------------- | ------------------------------- |
| `@coderocketapp/vue-tailwind-datepicker` | `@coderocketapp/vue`            |
| Existing Day.js and formatting API       | ISO dates and local clock times |
| Original stylesheet                      | `@coderocketapp/vue/style.css`  |
| Original documentation                   | CodeRocket UI documentation     |

Keep using the original component while evaluating the new one in a separate screen. Convert values at your application boundary; a formatted display string is not necessarily an ISO date. Do not replace imports without adapting your models and testing locale behaviour.

[Original installation guide](https://vue-tailwind-datepicker.com/installation.html)
