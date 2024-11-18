import {test, expect} from '@playwright/test'

test.beforeEach(async({page})=>{
    page.goto('https://www.youtube.com')
})
test.describe('Test Grup',()=>{
    //birinci test
    test('Page Title Check', async({page})=>{
        await expect(page).toHaveTitle(/youtube/)
    })
    //ikinci test
    test('Page Url Check', async({page})=>{
        await expect(page).toHaveURL('https://www.youtube.com')
    })
})

