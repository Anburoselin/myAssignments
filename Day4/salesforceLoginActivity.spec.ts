import { test, expect } from '@playwright/test';

test('Salesforce login using CSS and XPath selectors', async ({ page }) => {
  const username = 'dilipkumar.rajendran@testleaf.com';
  const password = 'TestLeaf@2025';


  // Step 1: Navigate to the Salesforce login page
  await page.goto('https://login.salesforce.com/?locale=in');

  // Step 2: Use CSS selectors to locate the username and password fields
  await page.locator('#username').fill(username);
  await page.locator('#password').fill(password);

  // Step 3: Use XPath selectors to locate the username, password, and login button
  await page.locator("xpath=//input[@id='username']").fill(username);
  await page.locator("xpath=//input[@id='password']").fill(password);
  await page.locator("xpath=//input[@name='Login']").click();


});
