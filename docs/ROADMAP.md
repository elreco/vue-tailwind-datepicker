# Current scope

## Available in the open-source core

- React components and interface blocks, with compiled CSS and Base UI behavior.
- A typed, versioned design-system model and specifications.
- Local token analysis and reviewed model changes.
- CLI installation/sync that preserves local file changes.
- A read-only MCP server for a saved library and its design rules.

The catalogue is experimental. Fixes should be driven by real integrations, with particular care for keyboard behavior, focus, SSR and mobile.

## Next: validate integrations

The near-term goal is a small number of voluntary pilots using a real application. We want evidence that teams can create a coherent library, install it, preserve local edits and use the same components through an agent.

Possible later work includes additional framework renderers, stronger import coverage, team workflows and commercial plans. Those are directions to validate, not features already delivered or release commitments.

Vue Tailwind Datepicker is archived in `legacy/` as unmaintained source. Its presence does not mean the new CodeRocket component renderer supports Vue.
