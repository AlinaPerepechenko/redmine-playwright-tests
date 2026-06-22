
import { expect, Locator, Page } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly registerForm: Locator;
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmationInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerForm = page.locator('form[action="/account/register"]');
        this.loginInput = page.locator('#user_login');
        this.passwordInput = page.locator('#user_password');
        this.confirmationInput = page.locator('#user_password_confirmation');
        this.firstNameInput = page.locator('#user_firstname');
        this.lastNameInput = page.locator('#user_lastname');
        this.emailInput = page.locator('#user_mail');
        this.submitButton = page.locator('input[name="commit"]');
    }
async verifyRegistrationFormIsVisible() {
        await expect(this.registerForm).toBeVisible();
        await expect(this.loginInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.confirmationInput).toBeVisible();
        await expect(this.firstNameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.submitButton).toBeVisible();
    }


    async fillRegistrationForm(userData: Record<string, string>) {
        await this.loginInput.fill(userData.username);
        await this.passwordInput.fill(userData.password);
        await this.confirmationInput.fill(userData.confirmation || userData.password);
        await this.firstNameInput.fill(userData.firstName);
        await this.lastNameInput.fill(userData.lastName);
        await this.emailInput.fill(userData.email);
    }

    
    async submitRegistration() {
        await this.submitButton.click();
    }
}