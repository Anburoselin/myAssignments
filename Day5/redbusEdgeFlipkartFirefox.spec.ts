import { test, chromium, firefox } from '@playwright/test';

test('Red Bus and Flipkart using Edge and Firefox browsers', async () => {
  // Launch Edge and open Red Bus
  const edgeBrowser = await chromium.launch({ channel: 'msedge' });
  const edgeContext = await edgeBrowser.newContext();
  const edgePage = await edgeContext.newPage();

  await edgePage.goto('https://www.redbus.in');

  console.log('Red Bus Page Title:', await edgePage.title());
  console.log('Red Bus Page URL:', edgePage.url());

  // Launch Firefox and open Flipkart
  const firefoxBrowser = await firefox.launch();
  const firefoxContext = await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();

  await firefoxPage.goto('https://www.flipkart.com');

  console.log('Flipkart Page Title:', await firefoxPage.title());
  console.log('Flipkart Page URL:', firefoxPage.url());

  await edgeBrowser.close();
  await firefoxBrowser.close();
});

