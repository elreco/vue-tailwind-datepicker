import { mkdtemp, writeFile, readFile, mkdir, rm } from 'node:fs/promises'
import { execFileSync, spawn } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { createServer } from 'node:net'
const root = process.cwd()
const dir = await mkdtemp(join(tmpdir(), 'coderocket-consumer-'))
const run = (command, args, cwd = dir) =>
  execFileSync(command, args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, NUXT_TELEMETRY_DISABLED: '1' },
    maxBuffer: 10 * 1024 * 1024,
  })
const withNuxt = process.argv.includes('--nuxt')
try {
  const packed = JSON.parse(
    run('npm', ['pack', '-w', '@coderocketapp/vue', '--pack-destination', dir, '--json'], root),
  )[0]
  for (const file of [
    'dist/index.js',
    'dist/index.d.ts',
    'dist/headless.js',
    'dist/core.js',
    'dist/style.css',
    'LICENSE',
  ])
    if (!packed.files.some((item) => item.path === file)) throw new Error(`Missing package file: ${file}`)
  if (packed.files.some((item) => /\.env|availability-pro|server\//.test(item.path)))
    throw new Error('Unexpected private file in free package')
  const deps = {
    vue: '3.5.42',
    '@vue/server-renderer': '3.5.42',
    '@coderocketapp/vue': `file:${join(dir, packed.filename)}`,
    vite: '8.3.0',
    tailwindcss: '4.3.3',
    '@tailwindcss/vite': '4.3.3',
  }
  if (withNuxt) deps.nuxt = '^4.0.0'
  await writeFile(
    join(dir, 'package.json'),
    JSON.stringify({ private: true, type: 'module', dependencies: deps }),
  )
  run('npm', ['install', '--ignore-scripts', '--no-audit', '--no-fund'])
  await writeFile(
    join(dir, 'ssr.mjs'),
    `import {createSSRApp,h} from 'vue';import {renderToString} from '@vue/server-renderer';import {CrDatePicker,CrDateRangePicker,CrTimePicker} from '@coderocketapp/vue';import {calendarDate} from '@coderocketapp/vue/core';import {CalendarRoot} from '@coderocketapp/vue/headless';if(!CalendarRoot||calendarDate('2028-02-29').day!==29)throw Error('Subpath export failure');const html=await renderToString(createSSRApp({render:()=>h('main',[h(CrDatePicker,{modelValue:'2026-10-15',locale:'fr-FR'}),h(CrDateRangePicker,{modelValue:null}),h(CrTimePicker,{modelValue:'09:30'})])}));if(!html.includes('15 oct. 2026'))throw Error('SSR failure');console.log('Packed library: ESM, core/headless and SSR passed');`,
  )
  process.stdout.write(run(process.execPath, ['ssr.mjs']))
  await writeFile(
    join(dir, 'index.html'),
    '<div id="app"></div><script type="module" src="/main.js"></script>',
  )
  await writeFile(
    join(dir, 'main.js'),
    `import {createApp,h} from 'vue';import {CrDatePicker} from '@coderocketapp/vue';import '@coderocketapp/vue/style.css';createApp({render:()=>h(CrDatePicker,{modelValue:'2026-10-15'})}).mount('#app')`,
  )
  run(process.execPath, [join(dir, 'node_modules/vite/bin/vite.js'), 'build'])
  await writeFile(
    join(dir, 'vite.config.mjs'),
    `import tailwind from '@tailwindcss/vite';export default {plugins:[tailwind()]}`,
  )
  await writeFile(join(dir, 'app.css'), '@import "tailwindcss";')
  await writeFile(
    join(dir, 'main.js'),
    `import './app.css';\n` + (await readFile(join(dir, 'main.js'), 'utf8')),
  )
  run(process.execPath, [join(dir, 'node_modules/vite/bin/vite.js'), 'build'])
  console.log('Consumer builds with and without Tailwind passed')
  if (withNuxt) {
    await mkdir(join(dir, 'app'))
    await writeFile(
      join(dir, 'nuxt.config.ts'),
      `export default defineNuxtConfig({css:['@coderocketapp/vue/style.css'],devtools:{enabled:false}})`,
    )
    await writeFile(
      join(dir, 'app/app.vue'),
      `<script setup>import {CrDatePicker,CrDateRangePicker,CrTimePicker} from '@coderocketapp/vue';const date=ref('2026-10-15');</script><template><main><h1>Nuxt consumer</h1><CrDatePicker v-model="date" locale="fr-FR"/><CrDateRangePicker :model-value="null"/><CrTimePicker model-value="09:30"/></main></template>`,
    )
    run(process.execPath, [join(dir, 'node_modules/@nuxt/cli/bin/nuxi.mjs'), 'build'])
    const socket = createServer()
    await new Promise((ok) => socket.listen(0, '127.0.0.1', ok))
    const port = socket.address().port
    await new Promise((ok) => socket.close(ok))
    const server = spawn(process.execPath, ['.output/server/index.mjs'], {
      cwd: dir,
      env: { ...process.env, HOST: '127.0.0.1', PORT: String(port) },
      stdio: 'ignore',
    })
    try {
      let html = ''
      for (let i = 0; i < 60; i++) {
        try {
          html = await (await fetch(`http://127.0.0.1:${port}`)).text()
          break
        } catch {
          await new Promise((ok) => setTimeout(ok, 250))
        }
      }
      if (!html.includes('Nuxt consumer') || !html.includes('15 oct. 2026'))
        throw new Error('Nuxt SSR response did not render the packed library')
      console.log('Nuxt 4 production build and server response passed')
    } finally {
      server.kill()
    }
  }
  await rm(dir, { recursive: true, force: true })
} catch (error) {
  console.error(error.stderr?.toString() || error)
  console.error(`Consumer fixture kept at ${dir}`)
  process.exitCode = 1
}
