# Contributing

Use Node.js 24+ and pnpm 12.4.2. Run `pnpm install --frozen-lockfile`, then `pnpm check` before opening a pull request. Build outputs are ignored; commit source changes and the lockfile when dependencies change.

The active workspaces are in `packages/`. Keep new behavior in the components and specifications together, and preserve keyboard interaction, focus behavior and explicit labels. Add tests for meaningful behavior changes. Tailwind must remain optional for consumers.

The hosted application and its authentication, database and AI services are maintained separately. Do not add credentials, customer data, deployment configuration or private server source to this repository. Registry examples must use placeholders, never real connection tokens.

The legacy Vue datepicker is frozen. Its historical issues remain available for reference, but new maintenance or feature releases are not planned. For current components, provide a minimal reproduction, package revision, React version and browser details. Review experimental components in your own product before release.

By contributing, you agree to make your contribution available under this repository's MIT license. Preserve existing third-party notices and attribution.
