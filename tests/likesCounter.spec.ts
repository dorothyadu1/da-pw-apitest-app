import { test, expect, request} from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('https://angular.realworld.how');
    await page.getByText('Global Feed').click()
    const firstLikeButton = page.locator('app-article-preview').first().locator('button')

    await firstLikeButton.click()

})