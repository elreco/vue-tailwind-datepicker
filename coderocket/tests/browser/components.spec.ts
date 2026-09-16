import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
test('select a date using the keyboard and restore focus', async ({ page }) => {
  await page.goto('/')
  const trigger = page.getByRole('button', { name: /Launch date/ })
  await trigger.click()
  const selected = page.locator('[data-value="2026-10-15"]')
  await expect(selected).toBeVisible()
  await selected.focus()
  await page.keyboard.press('ArrowRight')
  await page.keyboard.press('Enter')
  await expect(page.locator('.demo-code')).toContainText('2026-10-16')
  await expect(trigger).toBeFocused()
})
test('a range is committed after both endpoints are selected', async ({ page }) => {
  await page.goto('/')
  const trigger = page.getByRole('button', { name: /First sprint/ })
  await trigger.click()
  await page.locator('[data-value="2026-10-20"]').click()
  await expect(page.locator('.cr-popover')).toBeVisible()
  await page.locator('[data-value="2026-10-23"]').click()
  await expect(trigger).toContainText('20 Oct 2026')
  await expect(page.locator('.cr-popover')).toHaveCount(0)
})
test('time segments update the stored 24-hour value', async ({ page }) => {
  await page.goto('/')
  const hour = page.getByRole('spinbutton', { name: /hour/i })
  await hour.focus()
  await page.keyboard.press('ArrowUp')
  await expect(page.locator('.demo-code')).toContainText('10:30')
})
test('French labels and date display keep the same ISO model', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('combobox', { name: 'Demo language' }).selectOption('fr-FR')
  await expect(page.getByRole('button', { name: /Date de lancement/ })).toContainText('15 oct. 2026')
  await expect(page.locator('.demo-code')).toContainText('2026-10-15')
})
test('documentation includes an interactive server-rendered example', async ({ page }) => {
  await page.goto('/docs/')
  await expect(page.getByRole('heading', { name: 'Make time work.' })).toBeVisible()
  await page.getByRole('button', { name: /Choose a date/ }).click()
  await expect(page.locator('.cr-popover')).toBeVisible()
})
test('desktop page and open calendar have no WCAG A/AA violations', async ({ page }) => {
  await page.goto('/')
  expect(
    (await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()).violations.map(
      (v) => ({ id: v.id, nodes: v.nodes.map((n) => ({ target: n.target, message: n.failureSummary })) }),
    ),
  ).toEqual([])
  await page.getByRole('button', { name: /Launch date/ }).click()
  expect(
    (
      await new AxeBuilder({ page })
        .include('.cr-popover')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze()
    ).violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => ({ target: n.target, message: n.failureSummary })),
    })),
  ).toEqual([])
})
test('mobile layout and calendar stay within the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  await page.getByRole('button', { name: /Launch date/ }).click()
  const box = await page.locator('.cr-popover').boundingBox()
  expect(box!.x).toBeGreaterThanOrEqual(0)
  expect(box!.x + box!.width).toBeLessThanOrEqual(391)
})
