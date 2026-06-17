
import { Locator, Page } from '@playwright/test';

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
}