import { test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/')
  await page.getByRole('link', { name: 'ivysaur' }).click()
  await page.getByText('chlorophyll').click()
})
