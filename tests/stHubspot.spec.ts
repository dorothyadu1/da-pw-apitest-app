import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://soltech.net/salesforce-implementation/hubspot/');
  await page.getByPlaceholder('First Name *').click();
  await page.getByPlaceholder('First Name *').fill('Dorothy ');
  await page.getByPlaceholder('Last Name *').click();
  await page.getByPlaceholder('Last Name *').fill('Adu');
  await page.getByPlaceholder('Company Name *').click();
  await page.getByPlaceholder('Company Name *').fill('SOLTECH');
  await page.getByPlaceholder('Email *').click();
  await page.getByPlaceholder('Email *').fill('dorothy.adu@soltech.net');
  await page.getByPlaceholder('Phone Number *').click();
  await page.getByPlaceholder('Phone Number *').fill('123-345-5678');
  await page.getByLabel('How Can We HelpCustom').selectOption('Growing Your Team');
  await page.getByPlaceholder('Tell us a little about your').click();
  await page.getByPlaceholder('Tell us a little about your').fill('This is a TEST');
  await page.getByRole('button', { name: 'Submit' }).click();
  //await expect(page.locator('h1')).toContainText('Thank you!');
});