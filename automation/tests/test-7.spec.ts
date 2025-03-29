import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://otpfield.satyamseth.com/');
 test.setTimeout(90000);
//  await page.setViewportSize({ width: 1720, height: 1020 });


  await page.getByRole('spinbutton', { name: 'Box Count:' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('spinbutton', { name: 'Box Count:' }).fill('4');
  await page.waitForTimeout(2000);

  await page.getByRole('checkbox', { name: 'On Paste Blur Field:' }).check();
  await page.waitForTimeout(1000);

  await page.getByRole('checkbox', { name: 'On Paste Blur Field:' }).uncheck();
  await page.waitForTimeout(1000);

  await page.getByRole('checkbox', { name: 'Pass Custom Regex:' }).check();
  await page.waitForTimeout(1000);

  await page.getByRole('checkbox', { name: 'Pass Custom Regex:' }).uncheck();
  await page.waitForTimeout(1000);

  await page.getByLabel('Value Type:').selectOption('1');
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Submit' }).click(); 
  await page.waitForTimeout(1000);

  await page.locator('#example-box-0').click();
  await page.waitForTimeout(1000);

  await page.locator('#example-box-0').fill('a'); 
   await page.waitForTimeout(1000);

  await page.locator('#example-box-1').fill('s'); 
    await page.waitForTimeout(1000);

  await page.waitForTimeout(1000);

  await page.locator('#example-box-2').fill('v'); 
   await page.waitForTimeout(1000);

  await page.locator('#example-box-3').fill('d');  
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Copy OTP Field Config' }).click();  
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Copy OTP Field ID' }).click(); 
   await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Copy OTP Field Value' }).click(); 
   await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Clear OTP Field Value' }).click(); 
   await page.waitForTimeout(1000);

  await page.locator('#example-box-0').fill('d'); 
   await page.waitForTimeout(1000);

  await page.locator('#example-box-1').fill('f');  
  await page.waitForTimeout(1000);


  await page.locator('#example-box-2').fill('s');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-3').fill('f');
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Clear OTP Field Value' }).click();
  await page.waitForTimeout(1000);

  await page.locator('#example-box-0').fill('s');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-1').fill('d');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-2').fill('f');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-3').fill('s'); 
   await page.waitForTimeout(1000);

  await page.locator('#example-box-3').click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Clear OTP Field Value' }).click();
  await page.waitForTimeout(1000);

  await page.locator('#example-box-0').fill('d');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-1').fill('f');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-2').fill('s');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-3').fill('f');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-3').click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Clear OTP Field Value' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Focus OTP Field' }).click();
  await page.waitForTimeout(1000);

  await page.locator('#example-box-0').fill('s');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-1').fill('d');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-2').fill('f');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-3').fill('s');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-3').click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Clear OTP Field Value' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Disable OTP Field' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('spinbutton', { name: 'Box Count:' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('spinbutton', { name: 'Box Count:' }).fill('9');
  await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(1000);

  await page.locator('#example-box-0').click();
  await page.waitForTimeout(1000);

  await page.locator('#example-box-0').fill('d');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-1').fill('s');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-2').fill('f');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-3').fill('s');
  await page.locator('#example-box-4').fill('f');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-5').fill('s');
  await page.locator('#example-box-6').fill('d');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-7').fill('f');
  await page.locator('#example-box-8').fill('s');
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Clear OTP Field Value' }).click();
  await page.waitForTimeout(1000);

  await page.locator('#example-box-0').fill('d');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-1').fill('f');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-2').fill('d');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-3').fill('s');
  await page.locator('#example-box-4').fill('f');
  await page.locator('#example-box-5').fill('d');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-6').fill('s');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-7').fill('f');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-8').fill('d');
  await page.waitForTimeout(1000);

  await page.locator('#example-box-8').click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Clear OTP Field Value' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Enable OTP Field' }).click();
  await page.waitForTimeout(1000);

  // await page.getByRole('button', { name: 'Enable OTP Field' }).click();
  await page.getByRole('button', { name: 'Disable OTP Field' }).click();
})




