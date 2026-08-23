import { test, expect } from '@playwright/test';

test('Assignment 2 - Create and Edit Lead in Leaftaps', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  //login to Leaftaps 
  await page.fill('#username', 'demoSalesManager');
  await page.fill('#password', 'crmsfa');
  await page.click('.decorativeSubmit');

  // click CRM/SFA link 
 await page.click('//a[text()="CRM/SFA" or normalize-space()="CRM/SFA"]');
  await page.click('//a[text()="Leads" or normalize-space()="Leads"]');
  await page.click('//a[text()="Create Lead" or normalize-space()="Create Lead"]');



  // Fill in the lead creation form 
  await page.fill('#createLeadForm_companyName', 'TestLeaf Company');
  await page.fill('#createLeadForm_firstName', 'Dilip');
  await page.fill('#createLeadForm_lastName', 'Rajendran');
  await page.click('input[name="submitButton"]');
  //edit the lead 

  await page.click('//a[text()="Edit" or normalize-space()="Edit"]');
  await page.fill('#updateLeadForm_companyName', 'TestLeaf Company Updated');
  await page.click('input[value="Update"]');
  
  //verfication of the updated lead 
  await expect(page.locator('#viewLead_companyName_sp')).toContainText('TestLeaf Company Updated');
});
