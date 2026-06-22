import { expect, Locator, Page } from '@playwright/test';

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

    async verifyLoginFormIsVisible() {
        await expect(this.loginContainer).toBeVisible();
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.stayLoggedInCheckbox).toBeVisible();
        await expect(this.submitButton).toBeVisible();
    }


    async login(username: string, password: string, rememberMe: boolean = false) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        if (rememberMe) {
            await this.stayLoggedInCheckbox.check();
        }
        await this.submitButton.click();
    }
}