import { test, expect } from '@playwright/test';

test('JavaScript Alerts Assignment', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  let confirmAction = 'accept';

  page.on('dialog', async (dialog) => {

    if (dialog.type() === 'alert') {
      expect(dialog.message()).toBe('I am a JS Alert');
      await dialog.accept();
    }

    else if (dialog.type() === 'confirm') {
      expect(dialog.message()).toBe('I am a JS Confirm');

      if (confirmAction === 'accept') {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    }

    else if (dialog.type() === 'prompt') {
      expect(dialog.message()).toBe('I am a JS prompt');
      await dialog.accept('Playwright');
    }
  });

  // Alert
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();

  await expect(page.locator('#result'))
    .toHaveText('You successfully clicked an alert');


  // Confirm - Accept
  confirmAction = 'accept';

  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

  await expect(page.locator('#result'))
    .toHaveText('You clicked: Ok');


  // Confirm - Dismiss
  confirmAction = 'dismiss';

  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

  await expect(page.locator('#result'))
    .toHaveText('You clicked: Cancel');


  // Prompt
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

  await expect(page.locator('#result'))
    .toHaveText('You entered: Playwright');

});