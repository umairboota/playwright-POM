import {test, expect} from '@playwright/test';


test('Verify user sucessfully navigated to the login page', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await expect(page.locator('//div[@class="login_logo"]')).toBeVisible();

})

test ('Verify that the user is able to login using the valid credentionals', async ({page})=>{


    await page.locator('//input[@placeholder = "Username"]').fill('standard_user');

        await page.locator('//input[@placeholder = "Username"]').fill('standard_user')



})