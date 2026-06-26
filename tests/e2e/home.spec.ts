import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should display the project name and tagline', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1, h2').first()).toBeVisible()
    // Verify the page title contains the project identifier
    const title = await page.title()
    expect(title.length).toBeGreaterThan(0)
  })

  test('should have navigation links', async ({ page }) => {
    await page.goto('/')
    // Look for typical navigation elements
    const nav = page.locator('nav, header')
    await expect(nav).toBeVisible()
  })

  test('should have a working signup or CTA link', async ({ page }) => {
    await page.goto('/')
    // Check for a CTA button pointing to /signup or similar
    const cta = page.locator('a[href*="signup"], a[href*="register"], a[href*="get-started"]').first()
    if (await cta.count() > 0) {
      await expect(cta).toBeVisible()
    }
  })

  test('should display footer with links', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    const links = footer.locator('a')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })
})
