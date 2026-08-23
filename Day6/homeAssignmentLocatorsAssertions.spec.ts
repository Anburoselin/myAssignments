import { test, expect } from '@playwright/test';

const leaftapsUrl = 'https://leaftaps.com/opentaps/control/login';
const leaftapsUsername = 'democsr';
const leaftapsPassword = 'crmsfa';
const salesforceUrl = 'https://login.salesforce.com';
const salesforceUsername = 'anburosali.1b70b1b060bf@agentforce.com';
const salesforcePassword = 'N!g@1234';

test('Assignment 1 - Create a Lead', async ({ page }) => {
  // Login to Leaftaps
  await page.goto(leaftapsUrl);
  await page.locator('#username').fill(leaftapsUsername);
  await page.locator('#password').fill(leaftapsPassword);
  await page.locator('.decorativeSubmit').click();

  // Open Create Lead
  await page.getByText('CRM/SFA', { exact: true }).click();
  await page.getByText('Leads', { exact: true }).click();
  await page.getByText('Create Lead', { exact: true }).click();

  // Fill the lead details
  await page.locator('#createLeadForm_companyName').fill('TestLeaf Company');
  await page.locator('#createLeadForm_firstName').fill('Dilip');
  await page.locator('#createLeadForm_lastName').fill('DRajendran');
  await page.locator('#createLeadForm_personalTitle').selectOption({ label: 'Mr.' });
  await page.locator('#createLeadForm_generalProfTitle').fill('Tester');
  await page.locator('#createLeadForm_annualRevenue').fill('50000');
  await page.locator('#createLeadForm_departmentName').fill('QA');
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');

  // Create the lead
  await page.locator('input[name="submitButton"]').click();

  //  Verify the created lead
  await expect(page.locator('#viewLead_companyName_sp')).toHaveText('TestLeaf Company');
  await expect(page.locator('#viewLead_firstName_sp')).toHaveText('Dilip');
  await expect(page.locator('#viewLead_lastName_sp')).toHaveText('DRajendran');
  await expect(page.locator('#viewLead_status_sp')).toHaveText('Assigned');
});

test('Assignment 2 - Edit a Lead', async ({ page }) => {
  //  Login and open Leads
  await page.goto(leaftapsUrl);
  await page.locator('#username').fill(leaftapsUsername);
  await page.locator('#password').fill(leaftapsPassword);
  await page.locator('.decorativeSubmit').click();
  await page.getByText('CRM/SFA', { exact: true }).click();
  await page.getByText('Leads', { exact: true }).click();

  // Find the lead by first name
  await page.getByText('Find Leads', { exact: true }).click();
  await page.locator('#ext-gen23').fill('Dilip');
  await page.getByText('Find Leads', { exact: true }).last().click();

  // Open the first lead and click Edit
  await page.locator('div.x-grid3-cell-inner.x-grid3-col-partyId a').first().click();
  await page.getByText('Edit', { exact: true }).click();

  //  Edit the lead details
  await page.locator('#updateLeadForm_companyName').fill('Updated TestLeaf Company');
  await page.locator('#updateLeadForm_annualRevenue').fill('75000');
  await page.locator('#updateLeadForm_departmentName').fill('Automation');
  await page.locator('#updateLeadForm_description').fill('Lead details updated');

  // Update the lead
  await page.locator('input[value="Update"]').click();

  //  Verify the updated fields
  await expect(page.locator('#viewLead_companyName_sp')).toHaveText('Updated TestLeaf Company');
  await expect(page.locator('#viewLead_annualRevenue_sp')).toHaveText('75000');
  await expect(page.locator('#viewLead_departmentName_sp')).toHaveText('Automation');
  await expect(page.locator('#viewLead_description_sp')).toHaveText('Lead details updated');
});

test('Assignment 3 - Create a new Account', async ({ page }) => {
  //  Login to Salesforce
  await page.goto(salesforceUrl);
  await page.getByLabel('Username').fill(salesforceUsername);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByLabel('Password').fill(salesforcePassword);
  await page.locator('input[name="Login"]').click();

  //  Verify the Salesforce page
  await expect(page).toHaveTitle(/Salesforce|Lightning Experience/);
  await expect(page).toHaveURL(/salesforce\.com/);

  // Open Accounts from the Service app
  await page.locator('button[title="App Launcher"]').click();
  await page.getByText('View All', { exact: true }).click();
  await page.getByPlaceholder('Search apps or items...').fill('Service');
  await page.locator('(//p[normalize-space(.)="Service"])[1]').click();
  await page.locator('a[title="Accounts"]').click();

  // Create the account
  await page.getByRole('button', { name: 'New', exact: true }).click();
  await page.locator('input[name="Name"]').fill('TestLeaf Account');
  await page.locator('//button[@title="Save"]').click();

  //  Verify the toast message
  await expect(page.getByText(/Account .* was created/i)).toBeVisible();
});
