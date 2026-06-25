import { test, expect } from './fixtures';

test.describe('Redmine Smoke and Functional Test Suite', () => {

    test('TC-001: Verify that registration page opens successfully', async ({ homePage, registerPage }) => {
        await homePage.clickRegister();
        await registerPage.verifyRegistrationFormIsVisible();
    });

    test('TC-002: Verify that login page opens successfully', async ({ homePage, loginPage }) => {
        await homePage.clickLogin();
        await loginPage.verifyLoginFormIsVisible();
    });

    test('TC-003: Verify that search returns results for a valid keyword', async ({ homePage, page }) => {
        await homePage.searchFor('API');

        await expect(page).toHaveURL(/.*search.*/);
        await expect(homePage.searchResultsHeading).toContainText(/Результати|Results/);
        await expect(homePage.searchResultsList).toBeVisible();
    });

    test('TC-004: Verify that Projects page is accessible from header menu', async ({ homePage, projectsPage, page }) => {
        await homePage.clickProjects();

        await expect(projectsPage.heading).toHaveText('Projects');
        
        const isListVisible = await projectsPage.isProjectsListVisible();
        expect(isListVisible).toBe(true);

        await expect(page).toHaveURL(/.*\/projects.*/);
    });

    test('TC-005: Verify that Download page is opened from navigation menu', async ({ homePage, downloadPage, page }) => {
        await homePage.clickDownload();

        await expect(downloadPage.heading).toHaveText(/^Download/);
        
        const isVersionTableVisible = await downloadPage.isVersionTableVisible();
        expect(isVersionTableVisible).toBe(true);

        await expect(page).toHaveURL(/.*\/Download.*/);
    });
  
});