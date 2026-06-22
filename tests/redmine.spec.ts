import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { DownloadPage } from '../pages/DownloadPage'; // Переконайся, що імпортуєш усі класи

test.describe('Redmine Smoke and Functional Test Suite', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('TC-001: Verify that registration page opens successfully', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await homePage.clickRegister();

        await registerPage.verifyRegistrationFormIsVisible();
    });

    test('TC-002: Verify that login page opens successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await homePage.clickLogin();

        await loginPage.verifyLoginFormIsVisible();
    });

    test('TC-003: Verify that search returns results for a valid keyword', async ({ page }) => {
 
        await homePage.searchFor('API');

        await expect(page).toHaveURL(/.*search.*/);
        await expect(homePage.searchResultsHeading).toContainText(/Результати|Results/);
        await expect(homePage.searchResultsList).toBeVisible();
    });

test('TC-004: Verify that Projects page is accessible from header menu', async ({ page }) => {
        const projectsPage = new ProjectsPage(page);
        
        await homePage.clickProjects();

        await expect(projectsPage.heading).toHaveText('Projects');
        
        const isListVisible = await projectsPage.isProjectsListVisible();
        expect(isListVisible).toBe(true);

        await expect(page).toHaveURL(/.*\/projects.*/);
    });

    test('TC-005: Verify that Download page is opened from navigation menu', async ({ page }) => {
        const downloadPage = new DownloadPage(page);

        await homePage.clickDownload();

        await expect(downloadPage.heading).toHaveText(/^Download/);
        
        const isVersionTableVisible = await downloadPage.isVersionTableVisible();
        expect(isVersionTableVisible).toBe(true);

        await expect(page).toHaveURL(/.*\/Download.*/);
  });
  
});