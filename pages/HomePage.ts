
import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly registerLink: Locator;
    readonly loginLink: Locator;
    readonly projectsLink: Locator;
    readonly downloadLink: Locator;
    readonly searchField: Locator;
    readonly searchResultsHeading: Locator;
    readonly searchResultsList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerLink = page.locator('a.register');
        this.loginLink = page.locator('a.login');
        this.projectsLink = page.locator('a.projects');
        this.downloadLink = page.locator('a.download');
        
  
        this.searchField = page.locator('#q');
        this.searchResultsHeading = page.locator('#content h3');
        this.searchResultsList = page.locator('#search-results');
    }

    async navigate() {
        await this.page.goto('https://www.redmine.org/');
    }

    async searchFor(keyword: string) {
        await this.searchField.fill(keyword);
        await this.page.keyboard.press('Enter');
    }

    async clickRegister() {
        await this.registerLink.click();
    }

    async clickLogin() {
        await this.loginLink.click();
    }

    async clickProjects() {
        await this.projectsLink.click();
    }

    async clickDownload() {
        await this.downloadLink.click();
    }
}