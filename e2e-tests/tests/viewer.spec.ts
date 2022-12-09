import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Go to viewer app before each test case
  await page.goto('');
});

test('Should display viewer app.', async ({ page }) => {
  // Verify that the page title is correct
  await expect(page.locator('h1')).toContainText('Azure Container Apps Albums');
  // Verify Greatest hits div is present
  await expect(page.getByText('Greatest Hits')).toBeTruthy();
  // Verify each menu item is clickable
  await page.getByRole('button', { name: 'Docs' }).click();
  await page.getByRole('button', { name: 'Public Roadmap' }).click();
  await page.getByRole('button', { name: 'Discord' }).click();
  await page.getByRole('button', { name: 'Mailing List' }).click();
});

test('Should display albums correctly.', async ({ page }) => {
  // Loop through each album
  const albums = page.locator('.item');
  const count = await albums.count();
  for (let i = 0; i < count; ++i)
  { 
    const album = await albums.nth(i);
    // Verify album title is present
    const albumTitle = await album.locator('.album-title'); 
    await expect(albumTitle).toBeTruthy();
    // Verify album image is present
    const albumImage = await album.locator('img'); 
    await expect(albumImage).toBeTruthy();
  }
});