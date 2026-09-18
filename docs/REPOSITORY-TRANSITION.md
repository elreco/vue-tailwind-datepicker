# Repository transition and release boundaries

The repository history is preserved. The transition starts from legacy commit `91208cbd9be5465cc43ea3feb722305c476f9fb1` and moves that tracked tree to `legacy/vue-tailwind-datepicker` before adding the public core.

The existing datepicker version tags remain historical references. The branch `legacy/vue-tailwind-datepicker` and tag `vue-tailwind-datepicker-final` both preserve that final commit in its original directory layout.

The repository was renamed from `elreco/vue-tailwind-datepicker` to `elreco/coderocket-ui` on 18 September 2026, preserving its 248 stars, issues and history. GitHub redirects the old repository URL. The legacy documentation remains at https://vue-tailwind-datepicker.com; the root Netlify configuration builds the nested legacy documentation only. The hosted CodeRocket UI app deploys from its separate private repository.

The old workflows are kept under `legacy/vue-tailwind-datepicker/.github/workflows` for provenance. GitHub does not run that nested directory as repository workflows. The only active root workflow validates the public core. There is no active npm publisher and no automatic datepicker release.

The legacy package remains on npm under `@coderocketapp/vue-tailwind-datepicker`. Do not unpublish it or rename its installed API as part of this repository change. Future CodeRocket package publication requires a separate reviewed release and naming decision.

The imported public source is restricted to seven packages: `react`, `blocks`, `engine`, `specs`, `shared`, `cli`, and `mcp`. The hosted app, provider integrations, database, customer records, credentials and deployment tools are not part of this source distribution.
