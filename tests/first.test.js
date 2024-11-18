import {test, expect} from '@playwright/test'

test('Testotomasyon.com', async ({page}) =>{
    await page.goto('https://www.testotomasyonu.com')
    await expect(page).toHaveTitle(/Test/)
    await expect(page).toHaveURL('https://www.testotomasyonu.com') 
    page.close()
});