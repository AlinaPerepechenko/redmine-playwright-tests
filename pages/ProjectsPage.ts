
import { Locator, Page } from '@playwright/test';

export class ProjectsPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly projectsList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('#content h2');
        this.projectsList = page.locator('#projects-index');
    }
}