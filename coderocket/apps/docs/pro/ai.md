# Optional AI, your backend

The availability editor works fully without AI. To add natural-language input, pass an `interpret` function. Never include provider credentials in browser code.

```ts
import type { AvailabilityInterpreter } from '@coderocketapp/availability-pro'
const interpret: AvailabilityInterpreter = async (text, context) => {
  const response = await fetch('/api/availability/interpret', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, ...context }),
  })
  if (!response.ok) throw new Error('Suggestions are temporarily unavailable.')
  return response.json()
}
```

The callback returns one of:

```ts
{ kind:'proposal', schedule:validSchedule, explanation:'What changed' }
{ kind:'clarification', question:'Which holiday dates should be excluded?' }
```

The component validates proposals again and displays them before applying any change. The user must confirm. If the schedule changes while a request is in flight, the stale response is rejected. Editing a schedule also dismisses an older unaccepted proposal.

On your server: authenticate your users, validate input and generated output, enforce your own quotas, and never execute generated code. The callback does not call CodeRocket services. You own the provider selection and API bill.

Our public demonstration has shared and per-visitor quotas. If its AI is unavailable, manual editing and example schedules remain available.
