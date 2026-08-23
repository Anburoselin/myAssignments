import { test, expect } from '@playwright/test';

test('Assignment 4 - Edit Individual in Salesforce', async ({ page }) => {
  // 1. Login to Salesforce
  await page.goto('https://login.salesforce.com');
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('#password')).toBeVisible({ timeout: 10000 });
  await page.locator('#password').fill('TestLeaf@2025');
  await page.locator('input[name="Login"]').click();
  //await page.waitForURL(/.*salesforce\.com.*/i, { timeout: 20000 });

  // 2. Open the App Launcher
  await page.locator('button[title="App Launcher"]').click();

  // 3. Click View All and open Individuals
  await page.locator('button:has-text("View All")').click();
  await page.getByRole('combobox', { name: 'Search apps or items...' }).fill('Individuals');
  const individuals = page.locator('//p[normalize-space(.)="Individuals"]');
  await expect(individuals).toBeVisible({ timeout: 10000 });

  // 4. Open the Individuals tab
  await individuals.click();

  // 5. Search by last name
  const searchBox = page.getByPlaceholder('Search this list...');
  await searchBox.fill('DRajendran');
  await searchBox.press('Enter');

  // 6. Open the row menu and select Edit
  await page.getByRole('button', { name: 'Show Actions' }).first().click();
  await page.getByText('Edit', { exact: true }).click();

  // 7. Select the salutation
  await page.getByLabel('Salutation').click();
  await page.getByRole('option', { name: 'Mr.', exact: true }).click();

  // 8. Enter the first name
  await page.getByLabel('First Name').fill('Dilip');

  // 9. Save and verify the first name
  await page.getByRole('button', { name: 'Save', exact: true }).click();

  await expect(page.locator('table tbody tr').first()).toContainText('Dilip');
});
