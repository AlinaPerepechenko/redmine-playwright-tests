# Redmine E2E Test Automation Project 🚀

This repository contains a robust suite of End-to-End (E2E) automated tests for the [Redmine](https://www.redmine.org/) web platform. The automation framework is built from scratch using **Playwright**, **TypeScript**, and follows the **Page Object Model (POM)** design pattern.

The project features a fully automated CI/CD pipeline via **GitHub Actions** that executes tests on every push, compiles historical test data, generates an interactive **Allure Report**, and deploys it directly to **GitHub Pages**.

---

## Architecture & Tech Stack

*   **Automation Framework:** Playwright (Cross-browser: Chromium, Firefox, WebKit)
*   **Language:** TypeScript
*   **Design Pattern:** Page Object Model (POM) — isolating page elements and actions from the test logic.
*   **Reporting:** Allure Report — providing rich visual analytics, step-by-step execution details, and historical trends.
*   **CI/CD Pipeline:** GitHub Actions — triggers test execution automatically on code changes.
*   **Report Hosting:** GitHub Pages (deployed via the `gh-pages` branch).

---

 ## Running Tests
    - `npm run test` — runs all automated tests in headless mode.
    - `npm run test:headed` — runs tests with a browser window displayed.
    - `npm run test:allure` — runs tests and automatically generates an Allure report.

---

## Project Structure

```text
redmine-playwright-tests/
├── .github/workflows/
│   └── playwright.yml       # GitHub Actions CI/CD pipeline configuration
├── pages/                   # Page Object classes (Locators & Methods)
│   ├── HomePage.ts          # Main page elements and global search
│   ├── LoginPage.ts         # Authentication form and inputs
│   ├── RegisterPage.ts      # Registration form elements
│   ├── ProjectsPage.ts      
│   └── DownloadPage.ts      
├── tests/                   # Test scenarios
│   └── redmine.spec.ts      # Automated test cases (Smoke & Functional Suite)
├── playwright.config.ts     # Global Playwright configuration
└── package.json             # Node.js dependencies and run scripts
