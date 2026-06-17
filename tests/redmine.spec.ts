import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { DownloadPage } from '../pages/DownloadPage';

test.describe('Redmine Smoke and Functional Test Suite', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('TC-001: Verify that registration page opens successfully', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await homePage.registerLink.click();

        await expect(registerPage.registerForm).toBeVisible();
        await expect(registerPage.loginInput).toBeVisible();
        await expect(registerPage.passwordInput).toBeVisible();
        await expect(registerPage.confirmationInput).toBeVisible();
        await expect(registerPage.firstNameInput).toBeVisible();
        await expect(registerPage.lastNameInput).toBeVisible();
        await expect(registerPage.emailInput).toBeVisible();
        await expect(registerPage.submitButton).toBeVisible();
    });

test('TC-002: Verify that login page opens successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await homePage.loginLink.click();

    await expect(loginPage.loginContainer).toBeVisible();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.stayLoggedInCheckbox).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
});


test('TC-003: Verify that search returns results for a valid keyword', async ({ page }) => {
    await homePage.searchFor('API');

    await expect(page).toHaveURL(/.*search.*/);
    
    await expect(homePage.searchResultsHeading).toContainText(/Результати|Results/);
    
    await expect(homePage.searchResultsList).toBeVisible();
});

    test('TC-004: Verify that Projects page is accessible from header menu', async ({ page }) => {
        const projectsPage = new ProjectsPage(page);
        await homePage.projectsLink.click();

        await expect(projectsPage.heading).toHaveText('Projects');
        await expect(projectsPage.projectsList).toBeVisible();
        await expect(page).toHaveURL(/.*\/projects.*/);
    });

    test('TC-005: Verify that Download page is opened from navigation menu', async ({ page }) => {
        const downloadPage = new DownloadPage(page);
        await homePage.downloadLink.click();

        await expect(downloadPage.heading).toHaveText(/^Download/);
        await expect(downloadPage.versionTable).toBeVisible();
        await expect(page).toHaveURL(/.*\/Download.*/);
    });
});
