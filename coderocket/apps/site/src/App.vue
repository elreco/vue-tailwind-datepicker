<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { CrDatePicker, CrDateRangePicker, CrTimePicker, type DateRangeValue } from '@coderocketapp/vue'
const date = ref<string | null>('2026-10-15')
const range = ref<DateRangeValue | null>({ start: '2026-10-19', end: '2026-10-23' })
const time = ref<string | null>('09:30')
const locale = ref('en-GB')
const copied = ref(false)
const npmReleased = import.meta.env.VITE_NPM_RELEASED === 'true'
const installCommand = npmReleased ? 'npm install @coderocketapp/vue' : 'npm install https://coderocket-ui.netlify.app/downloads/coderocketapp-vue-0.1.0.tgz'
const demoHeight = ref(1280)
const demoUrl = import.meta.env.VITE_PRO_DEMO_URL || ''
const demoOrigin = demoUrl ? new URL(demoUrl).origin : ''
function resize(event: MessageEvent) {
  if (
    event.origin === demoOrigin &&
    event.data?.type === 'coderocket-demo:resize' &&
    typeof event.data.height === 'number'
  )
    demoHeight.value = Math.min(5000, Math.max(600, event.data.height + 8))
}
onMounted(() => window.addEventListener('message', resize))
onUnmounted(() => window.removeEventListener('message', resize))
async function copyInstall() {
  try {
    await navigator.clipboard.writeText(installCommand)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    copied.value = false
  }
}
const data = computed(() => JSON.stringify({ date: date.value, time: time.value }, null, 2))
</script>
<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <header class="site-header">
    <a class="wordmark" href="/" aria-label="CodeRocket UI home"
      ><span class="brand-mark" aria-hidden="true">↗</span>CodeRocket<span class="wordmark-ui">UI</span></a
    >
    <nav aria-label="Main navigation">
      <a href="/docs/">Documentation</a><a href="#availability">Availability Pro</a
      ><a href="https://github.com/elreco/vue-tailwind-datepicker" class="github-link"
        >GitHub <span aria-hidden="true">↗</span></a
      >
    </nav>
  </header>
  <main id="main">
    <section class="hero section-wrap">
      <div class="hero-copy">
        <div class="eyebrow"><span class="status-dot" /> BUILT FOR VUE. MADE FOR YOUR PRODUCT.</div>
        <h1>Make time<br /><em>work.</em></h1>
        <p class="hero-description">
          Thoughtful components for dates, time and availability. Yours to shape. Ready for the real world.
        </p>
        <div class="hero-actions">
          <a href="/docs/" class="button button-dark"
            >Explore the components <span aria-hidden="true">↗</span></a
          ><a href="#availability" class="text-link"
            >Meet Availability Pro <span aria-hidden="true">→</span></a
          >
        </div>
        <button
          class="install-command"
          type="button"
          @click="copyInstall"
          :aria-label="copied ? 'Install command copied' : 'Copy npm install command'"
        >
          <span aria-hidden="true">$</span><code>{{ npmReleased ? installCommand : 'Install the 0.1 pilot' }}</code
          ><span class="copy-hint">{{ copied ? 'Copied' : 'Copy' }}</span>
        </button>
        <p class="hero-footnote">Open source foundations. A little less work for you. <a v-if="!npmReleased" href="/downloads/coderocketapp-vue-0.1.0.tgz">Download the pilot archive ↗</a></p>
      </div>
      <div class="hero-demo">
        <div class="demo-window-top">
          <div class="window-dots" aria-hidden="true"><i /><i /><i /></div>
          <span>your-next-project.vue</span><span class="live-label">LIVE</span>
        </div>
        <div class="demo-content">
          <div class="demo-card-heading">
            <span class="mini-label">LET’S MAKE SOMETHING</span
            ><label class="language-select"
              >Language<select v-model="locale" aria-label="Demo language">
                <option value="en-GB">EN</option>
                <option value="fr-FR">FR</option>
              </select></label
            >
          </div>
          <h2>{{ locale === 'fr-FR' ? 'Le prochain grand projet.' : 'The next big thing.' }}</h2>
          <p>
            {{
              locale === 'fr-FR' ? 'Tout commence par une date.' : 'Every good project starts with a date.'
            }}
          </p>
          <div class="demo-fields">
            <CrDatePicker
              v-model="date"
              :locale="locale"
              placeholder="2026-10-15"
              :label="locale === 'fr-FR' ? 'Date de lancement' : 'Launch date'"
            /><CrTimePicker
              v-model="time"
              :locale="locale"
              :label="locale === 'fr-FR' ? 'Heure de début' : 'Start time'"
            /><CrDateRangePicker
              v-model="range"
              :locale="locale"
              placeholder="2026-10-19"
              :label="locale === 'fr-FR' ? 'Première semaine' : 'First sprint'"
            />
          </div>
          <div class="demo-caption">
            <span class="status-dot" />
            {{
              locale === 'fr-FR' ? 'De vrais composants. Essayez-les.' : 'Real components. Give them a try.'
            }}
          </div>
        </div>
        <div class="demo-code">
          <span class="code-label">YOUR DATA, WITHOUT THE GUESSWORK</span>
          <pre><code>{{data}}</code></pre>
        </div>
        <div class="floating-note">
          <span aria-hidden="true">✳</span> A good time<br />to build something.
        </div>
      </div>
    </section>
    <div class="trust-strip section-wrap">
      <span>SMALL DETAILS. SOLID FOUNDATIONS.</span>
      <div>Vue 3 <i /> TypeScript <i /> Tailwind CSS <i /> Headless <i /> MIT</div>
    </div>
    <section class="components-section section-wrap" aria-labelledby="components-title">
      <div class="section-heading">
        <div>
          <span class="eyebrow">01 / THE OPEN SOURCE CORE</span>
          <h2 id="components-title">The everyday essentials.<br />With the details considered.</h2>
        </div>
        <a class="text-link" href="/docs/components/date-picker">Browse the docs ↗</a>
      </div>
      <div class="component-grid">
        <a href="/docs/components/date-picker" class="component-card"
          ><div class="component-art mini-calendar" aria-hidden="true">
            <span v-for="n in 21" :key="n" :class="{ selected: n === 15 }">{{ n }}</span>
          </div>
          <span class="card-number">01</span>
          <h3>Date picker <span>↗</span></h3>
          <p>A clear starting point. Keyboard navigation, localisation and your own look.</p></a
        ><a href="/docs/components/date-range" class="component-card"
          ><div class="component-art range-art" aria-hidden="true">
            <span>19</span><span>20</span><span>21</span><span>22</span><span>23</span>
          </div>
          <span class="card-number">02</span>
          <h3>Date ranges <span>↗</span></h3>
          <p>From this day to that day. Two endpoints, one simple and predictable value.</p></a
        ><a href="/docs/components/time-picker" class="component-card"
          ><div class="component-art time-art" aria-hidden="true">
            <span>09</span><b>:</b><span>30</span><i>AM</i>
          </div>
          <span class="card-number">03</span>
          <h3>Time picker <span>↗</span></h3>
          <p>Hours and minutes in their place. Local clock times that stay separate from dates.</p></a
        >
      </div>
    </section>
    <section class="philosophy section-wrap">
      <div class="philosophy-label">
        <span class="eyebrow">YOUR PRODUCT SHOULD<br />STILL FEEL LIKE YOURS.</span
        ><span class="asterisk" aria-hidden="true">✳</span>
      </div>
      <div class="philosophy-body">
        <h2>Take the components.<br />Keep your personality.</h2>
        <p>
          Use the considered defaults, change the theme, or build your own interface with the headless
          primitives. Clear types and complete examples make the library straightforward for you — and your
          coding assistant.
        </p>
        <a href="/docs/guides/customisation" class="text-link">Make it your own →</a>
      </div>
    </section>
    <section id="availability" class="availability-section">
      <div class="section-wrap">
        <div class="section-heading">
          <div>
            <span class="eyebrow">02 / AVAILABILITY PRO</span>
            <h2>Life doesn’t repeat<br /><em>quite</em> like a calendar.</h2>
          </div>
          <p>Regular hours. Alternating weeks. Days off.<br />A focused editor for the rules of real life.</p>
        </div>
        <iframe
          v-if="demoUrl"
          :src="demoUrl"
          title="Interactive Availability Pro editor"
          class="pro-demo-frame"
          :style="{ height: `${demoHeight}px` }"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
        <div v-else class="demo-pending">
          <h3>Availability Pro is in private preview.</h3>
          <p>Tell us what you’re building to try the editor with your use case.</p>
          <a href="#contact" class="button button-dark">Request access ↗</a>
        </div>
        <div class="pro-features">
          <span>↳ Weekly & alternating schedules</span><span>↳ Date-specific exceptions</span
          ><span>↳ Explicit time zones</span><span>↳ Optional AI suggestions</span>
        </div>
      </div>
    </section>
    <section class="pricing-section section-wrap" aria-labelledby="pricing-title">
      <div class="pricing-copy">
        <span class="eyebrow">A USEFUL TOOL. A STRAIGHTFORWARD LICENSE.</span>
        <h2 id="pricing-title">Build the product<br />you have in mind.</h2>
        <p>
          The foundations are free. Choose Pro when you need a complete availability editor, source access and
          maintained scheduling logic.
        </p>
        <a href="https://github.com/elreco/vue-tailwind-datepicker" class="text-link"
          >Start with the open source library ↗</a
        >
      </div>
      <article class="price-card">
        <div class="price-card-top">
          <h3>Availability Pro</h3>
          <span class="pill">LAUNCH OFFER</span>
        </div>
        <div class="price">€299 <span>excl. VAT / team</span></div>
        <p class="price-subtitle">Up to 5 developers. One focused toolkit.</p>
        <ul>
          <li>Availability editor + recurrence engine</li>
          <li>Vue components, TypeScript types & source</li>
          <li>Use in your own and client applications</li>
          <li>Keep the versions you purchase forever</li>
          <li>12 months of updates and bug support</li>
        </ul>
        <a href="#contact" class="button button-dark">Let’s talk about your project ↗</a>
        <p class="price-footnote">
          Manual purchase and delivery. No subscription required.<br /><a href="/docs/pro/license"
            >Read the license terms</a
          >
        </p>
      </article>
    </section>
    <section id="contact" class="contact-section section-wrap">
      <div>
        <span class="eyebrow">LET’S START WITH YOUR USE CASE</span>
        <h2>What are you building?</h2>
        <p>
          Tell us how you want to use Availability Pro.<br />We’ll discuss fit, integration and your team’s
          license.
        </p>
      </div>
      <form
        name="pro-interest"
        method="POST"
        action="/thanks.html"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="pro-interest" />
        <p class="honeypot">
          <label>Leave this empty<input name="bot-field" tabindex="-1" autocomplete="off" /></label>
        </p>
        <label
          >Your name or company<input
            name="name"
            autocomplete="organization"
            required
            maxlength="200" /></label
        ><label
          >Work email<input name="email" type="email" autocomplete="email" required maxlength="254" /></label
        ><label
          >Your project<textarea
            name="message"
            rows="4"
            required
            maxlength="3000"
            placeholder="We’re building a SaaS for…"
          />
        </label>
        <p class="form-note">
          We use these details only to respond to your request. <a href="/docs/privacy">Privacy</a>
        </p>
        <button class="button button-dark" type="submit">Send your enquiry ↗</button>
      </form>
    </section>
    <section class="continuity section-wrap">
      <span class="brand-mark" aria-hidden="true">↗</span>
      <p>
        <strong>A new chapter for Vue Tailwind Datepicker.</strong><br />Same public repository. A fresh
        foundation. The original datepicker remains available.
      </p>
      <a href="https://vue-tailwind-datepicker.com/" class="text-link">Original documentation ↗</a>
    </section>
  </main>
  <footer class="site-footer section-wrap">
    <a class="wordmark" href="/">CodeRocket<span class="wordmark-ui">UI</span></a
    ><span>Built with care. Made to be yours.</span>
    <div>
      <a href="/docs/">Docs</a><a href="https://github.com/elreco/vue-tailwind-datepicker">GitHub</a
      ><a href="/docs/privacy">Privacy</a>
    </div>
  </footer>
</template>
