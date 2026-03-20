import { test, expect } from '@playwright/test';

test('test', async ({ page }) =>
{
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await page.locator('form input[name="name"]').click();
  await page.locator('form input[name="name"]').fill('Sathish');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@12');
  await page.getByRole('checkbox', { name: 'Check me out if you Love' }).check();
  await page.getByLabel('Gender').selectOption('Female');
  await page.getByRole('radio', { name: 'Employed' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('form-comp')).toContainText('× Success! The Form has been submitted successfully!.');
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.locator('app-card').filter({ hasText: 'Blackberry $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.getByText('Checkout ( 1 ) (current)').click();
  await expect(page.locator('h4')).toContainText('Blackberry');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await expect(page.locator('app-checkout')).toContainText('Please choose your delivery location. Then click on purchase button');
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).pressSequentially('India', {delay:150});
  await expect(page.getByText('India')).toBeVisible();
  await page.getByText('India').filter({visible: true}).click();
  await page.getByText('I agree with the term &').click();
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.locator('app-checkout')).toContainText('× Success! Thank you! Your order will be delivered in next few weeks :-).');
  
});