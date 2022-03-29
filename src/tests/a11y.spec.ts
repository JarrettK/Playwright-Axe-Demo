import {expect, test, Page} from '@playwright/test';
import {injectAxe, checkA11y} from 'axe-playwright';

test.describe('Wikipedia A11y Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.wikipedia.org/')
    });

    test('Go to English page and Check A11y', async ({ page }) => {
        // Click the "English" link.
        await page.locator('a#js-link-box-en.link-box').click();

        // Expect the page to be at the following URL.
        await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Main_Page');
        
        // Use axe to check the accessibility of the current page.
        await checkAccessibility(page);
    });
});

test.describe('Weather Channel A11y Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.weather.com/');
    });

    test('Check A11y on Homepage',async ({ page }) => {
        // Use axe to check the accessibility of the current page.
        await checkAccessibility(page);
    });
});

async function checkAccessibility(page: Page) {
    // Inject required axe code into the page.
    await injectAxe(page);

    // Have axe perform A11y checks against the page.
    await checkA11y(page);
};
