import { cp } from 'node:fs/promises'
await cp('apps/docs/.vitepress/dist', 'apps/site/dist/docs', { recursive: true })
