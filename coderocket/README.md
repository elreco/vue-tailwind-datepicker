# CodeRocket UI

A fresh Vue foundation for dates, time and availability, developed in the original Vue Tailwind Datepicker repository.

- **Free, MIT:** `@coderocketapp/vue`, date picker, ranges, time picker, headless primitives.
- **Commercial:** Availability Pro, maintained in the private `elreco/coderocket-ui-pro` repository.
- **Legacy:** the root package `@coderocketapp/vue-tailwind-datepicker` keeps its own API and publication workflow.

## Develop

Use Node 24 LTS, then run from this directory:

```sh
npm ci
npm run build:lib
npm run dev
npm run typecheck
npm test
npm run build
npm run check:package -- --nuxt
npx playwright install chromium
npm run test:browser
```

Public site: `apps/site`. VitePress documentation: `apps/docs`, copied under `/docs/` by the build. No Pro source belongs in this workspace. For a local Pro iframe, set `VITE_PRO_DEMO_URL=http://127.0.0.1:4181` before building the site.

## Toolchain choices

Vue 3.5, Vite 8, Tailwind 4, Reka 2 and the framework-independent `@internationalized/date`. Versions are pinned in the lockfile. TypeScript 7 is installed with the official TypeScript 6 compiler-API bridge required by Vue's declaration tooling. VitePress stays on its stable 1.6 release with a patched Vite 7 dependency override; the documentation build and browser tests cover this compatibility choice.

## Releases remain independent

Use the conventional-commit scope `coderocket` for new-product work. The legacy analyzer and release notes exclude this scope and commits touching only this directory or its dedicated workflows. Legacy npm trust remains attached to `release.yml`.

CodeRocket releases use tags `coderocket-v<package version>` and `.github/workflows/coderocket-release.yml`. A tag must match `packages/vue/package.json`. There is no automatic legacy major upgrade.

The first npm publication of `@coderocketapp/vue` must be bootstrapped by its owner, then configure npm trusted publishing for owner `elreco`, repository `vue-tailwind-datepicker`, workflow `coderocket-release.yml`, with no environment. Subsequent matching tags publish via OIDC; never add a long-lived npm token to CI.

## Deploy

Create a separate Netlify project with base directory `coderocket`, configuration `coderocket/netlify.toml`, command `npm ci && npm run build`, publish `apps/site/dist`, Node 24. Set `VITE_PRO_DEMO_URL` to the private repository's deployed demo URL. Connect `ui.coderocket.app` while retaining the existing datepicker project and domain. Enable Netlify Forms detection for `pro-interest` and verify submissions in the dashboard.

Do not overwrite any pre-existing DNS record for this subdomain without checking its current use. No changes to the apex `coderocket.app` are needed.

## Initial commercial validation

The launch offer is €299 excl. VAT for five developers, perpetual use of acquired versions and twelve months of updates/bug support. Validate demand with three paying pilot customers before expanding into resource planning, monthly recurrences or calendar integrations. No automated outreach or sales platform is included.

See `ANNOUNCEMENT.md` for the prepared transition announcement.

## Pilot deployment status

The working site is https://coderocket-ui.netlify.app/ and the separately built demo is https://coderocket-availability-pro.netlify.app/. The custom `ui.coderocket.app` domain awaits access to its Cloudflare DNS (OVH is the registrar, not the authoritative DNS provider). Do not modify OVH nameservers.

Private GitHub Actions is currently blocked by the account billing/spending status. All 22 Pro tests, including real Redis concurrency checks, and five browser checks have passed locally. Public GitHub CI passes. AI calls remain disabled until owner-controlled OpenAI/Upstash credentials and the monthly budget approval are configured.
