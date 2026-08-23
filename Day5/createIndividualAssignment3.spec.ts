import { test, expect } from '@playwright/test';

test('Assignment 3 - Create Individual in Salesforce', async ({ page }) => {
  await page.goto('https://login.salesforce.com');
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
  await page.locator('#password').fill('TestLeaf@2025');
  await page.locator('input[name="Login"]').click();
  await page.waitForURL(/.*salesforce\.com.*/i, { timeout: 20000 });

  await page.locator('button[title="App Launcher"]').click();
  await page.locator('button:has-text("View All")').click();
  const searchBox = page.getByRole('combobox', { name: 'Search apps or items...' });
  await searchBox.fill('Individuals');

  const individuals = page.locator('//p[normalize-space(.)="Individuals"]');
  await expect(individuals).toBeVisible({ timeout: 10000 });
  await individuals.click();
// 
  const newButton = page.getByRole('button', { name: 'New', exact: true });
  await expect(newButton).toBeVisible({ timeout: 10000 });
  await newButton.click();



const lastname = page.getByRole(`textbox`,{name:`Last Name`})
await lastname.fill('Roja')
console.log("Individual name is Roja "+ lastname.inputValue() );
await page.locator(`(//span[contains(text(), 'Save')])[2]`).click()



  const createdName = await page.locator('span[data-aura-class="uiOutputText"]').first().textContent();
  expect(createdName).toContain('Roja');
});
