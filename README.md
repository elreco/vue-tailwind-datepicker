# CodeRocket UI

**A component library you can make your own — and give to your coding agents.**

Define a design system, compose React interfaces from shared components, and keep editable code in your own application. This repository contains the open-source components, design-system engine, specifications, CLI and MCP client used by [CodeRocket UI](https://ui.coderocket.app).

[Try the interactive demo](https://ui.coderocket.app/#live-preview) · [Read the documentation](https://ui.coderocket.app/docs) · [Discuss a pilot](https://ui.coderocket.app/contact)

## From Vue Tailwind Datepicker to CodeRocket UI

This is the same repository, with its stars, issues and Git history. The project is expanding from a Vue datepicker into tools for building a coherent component library.

**CodeRocket UI supports React today.** It is not a drop-in update to the Vue datepicker. Vue, Svelte and SolidJS renderers are planned, without a promised release date.

**Vue Tailwind Datepicker is frozen and no longer maintained.** Its existing npm package, `@coderocketapp/vue-tailwind-datepicker`, remains available. Its source, MIT attribution, changelog and documentation are preserved in [`legacy/vue-tailwind-datepicker`](legacy/vue-tailwind-datepicker). Existing applications do not need to migrate because this repository changed its name. No new fixes or releases are planned for the legacy package.

Read the [transition announcement](ANNOUNCEMENT.md) and [legacy documentation](https://vue-tailwind-datepicker.com).

## What is open source?

| Package                                 | What it provides                                                                                      |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`@coderocket/react`](packages/react)   | 48 React components, accessible primitives based on Base UI, compiled CSS and a composition renderer. |
| [`@coderocket/blocks`](packages/blocks) | 26 interface blocks with typed callbacks for your own application logic.                              |
| [`@coderocket/engine`](packages/engine) | A versioned design-system model, token validation, theme generation and reviewed token import.        |
| [`@coderocket/specs`](packages/specs)   | Component and block specifications, plus validated composition schemas.                               |
| [`@coderocket/shared`](packages/shared) | Types and a read-only registry client shared by the integration tools.                                |
| [`@coderocket/cli`](packages/cli)       | Local import analysis and installation/sync from a saved library, preserving local changes.           |
| [`@coderocket/mcp`](packages/mcp)       | A read-only MCP server that gives an agent your saved rules and component sources.                    |

These packages are MIT licensed. They are currently experimental: review and test them in your application's context. Authentication, payments, email delivery and uploads are not bundled backends; blocks expose callbacks that you connect yourself.

The hosted Studio, its accounts, database, AI-provider integration and operating infrastructure are separate. They are not included in this repository. Using the React components or engine locally does not require an account or an AI provider. The CLI's registry commands and MCP client need a saved library and a connection token from the Studio, or a compatible registry server.

## Build from source

Use Node.js 24 or newer and pnpm 12.4.2. This repository is the source distribution; package names in the workspace do not imply a public npm release.

```sh
git clone https://github.com/elreco/coderocket-ui.git
cd coderocket-ui
pnpm install --frozen-lockfile
pnpm check
```

`pnpm check` typechecks the workspace, builds JavaScript/CSS/declarations into each package's `dist/` directory, and runs the unit tests. It does not contact the hosted Studio or an AI provider. The legacy Vue project uses its own npm lockfiles and is outside the pnpm workspace.

### Use the components

In a pnpm workspace consumer, add `@coderocket/react` as a workspace dependency and import its compiled styles once:

```tsx
import { Button, ThemeScope } from "@coderocket/react";
import "@coderocket/react/styles.css";

export function App() {
  return (
    <ThemeScope>
      <Button onClick={() => console.log("Saved locally")}>Save changes</Button>
    </ThemeScope>
  );
}
```

React 19.3 and Base UI 1.8 are the versions used by this source release. Tailwind is optional. See [development and integration](docs/DEVELOPMENT.md) for tokens, local packages and a standalone example.

### Use the CLI or MCP

After the build:

```sh
node packages/cli/dist/index.mjs --help
```

Follow the [CLI guide](packages/cli/README.md) for local imports and safe installation, or the [MCP guide](packages/mcp/README.md) for the eight read-only tools. Neither tool writes connection tokens into project files. Generated source is project data and must be reviewed before it is applied.

## Help shape the pilot

The hosted Studio is free during early access. We are looking for developers and teams to try it on a real project, show us what fails, and discuss a focused integration pilot. No subscription or paid plan is activated by creating an account.

[Contact us voluntarily](https://ui.coderocket.app/contact) with your framework, your project and the problem you want to solve. GitHub stars and historical datepicker usage are not treated as permission to contact you. We will not automatically email existing users.

## Contributing and licensing

See [CONTRIBUTING.md](CONTRIBUTING.md), [the roadmap](docs/ROADMAP.md), [MIT license](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md). New component work belongs in the active packages. The legacy datepicker is kept as an unmaintained reference.
