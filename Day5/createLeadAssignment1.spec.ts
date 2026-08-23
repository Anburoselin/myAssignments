import { test, expect } from '@playwright/test';

test('Assignment 1 - Create Lead in Salesforce', async ({ browser }) => {
  test.setTimeout(120000);
  const context = await browser.newContext({
    permissions: ['geolocation'],
    geolocation: { latitude: 12.9716, longitude: 77.5946 }
  });
  const page = await context.newPage();

  await page.goto('https://login.salesforce.com/');
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
  await page.locator('input[name="Login"]').click();
  await page.locator('#password').fill('TestLeaf@2025');
  await page.locator('input[name="Login"]').click();

  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('button', { name: 'View All Applications' }).click();

  await page.getByText('Manage your sales process with accounts, leads, opportunities, and more').click();
  //await page.locator(`(//p[contains(text(),'Manage your sales process with accounts, leads, opportunities, and more')])`).click();
  await page.getByRole('button', { name: 'Leads List' }).click();
  await page.getByRole('menuitem', { name: 'New Lead' }).click();
  await page.getByRole('combobox', { name: 'Salutation' }).click();
  await page.locator('span').filter({ hasText: 'Mrs.' }).first().click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rojas');
  await page.getByRole('textbox', { name: 'Company' }).fill('Infy');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await expect(page.getByRole('link', { name: /Rojas/ })).toBeVisible({ timeout: 30000 });
});