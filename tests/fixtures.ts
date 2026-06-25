
import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { DownloadPage } from '../pages/DownloadPage';

type MyFixtures = {
    homePage: HomePage;
    registerPage: RegisterPage;
    loginPage: LoginPage;
    projectsPage: ProjectsPage;
    downloadPage: DownloadPage;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await use(homePage);
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    projectsPage: async ({ page }, use) => {
        await use(new ProjectsPage(page));
    },
    downloadPage: async ({ page }, use) => {
        await use(new DownloadPage(page));
    },
});

export { expect } from '@playwright/test';