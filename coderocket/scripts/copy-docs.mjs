import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { join } from 'node:path'
await cp('apps/docs/.vitepress/dist', 'apps/site/dist/docs', { recursive: true })
await mkdir('apps/site/dist/downloads', { recursive: true })
execFileSync('npm', ['pack', '-w', '@coderocketapp/vue', '--pack-destination', 'apps/site/dist/downloads', '--json'], { stdio: 'pipe' })
// Serve the authored Markdown alongside the rendered documentation for coding assistants.
const sources = []
async function copyMarkdown(directory, relative = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
    const path = join(directory, entry.name)
    const name = join(relative, entry.name)
    if (entry.isDirectory()) await copyMarkdown(path, name)
    else if (entry.name.endsWith('.md')) {
      const target = join('apps/site/dist/docs', name)
      await cp(path, target)
      sources.push(`## ${name}\n\n${await readFile(path, 'utf8')}`)
    }
  }
}
await copyMarkdown('apps/docs')
await writeFile('apps/site/dist/llms-full.txt', sources.join('\n\n---\n\n'))
await writeFile('apps/site/dist/llms.txt', '# CodeRocket UI\n\nVue date, range and time controls. Availability Pro integration.\n\n- [Full Markdown documentation](/llms-full.txt)\n- [Installation](/docs/guides/getting-started.md)\n- [Model](/docs/pro/schedule.md)\n')
