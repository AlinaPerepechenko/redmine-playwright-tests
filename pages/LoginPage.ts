import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginContainer: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly stayLoggedInCheckbox: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginContainer = page.locator('#login-form');
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.stayLoggedInCheckbox = page.locator('#autologin');
        this.submitButton = page.locator('#login-submit');
    }
}