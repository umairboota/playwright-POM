import {test, expect} from '@playwright/test';


test('Verify user sucessfully navigated to the login page', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await expect(page.locator('//div[@class="login_logo"]')).toBeVisible();

})