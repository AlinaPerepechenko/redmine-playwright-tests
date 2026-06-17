
import { Locator, Page } from '@playwright/test';

export class DownloadPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly latestReleaseInfo: Locator;
    readonly versionTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('#content h1');
        this.latestReleaseInfo = page.locator('a.external').first(); 
        this.versionTable = page.locator('#content table').first()
    }
}