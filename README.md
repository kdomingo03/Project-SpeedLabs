# SauceDemo Automation – Project SpeedLabs

This repository contains an end-to-end Playwright test suite for the SauceDemo e-commerce platform.  
The suite covers:

- Programmatic login (bypassing UI login)
- Checkout flow
- UI/Visual validation (button states and colors)
- Mobile responsiveness (iPhone 12 viewport)
- CI/CD integration via GitHub Actions

---

## Prerequisites

- Node.js ≥ 18
- npm (comes with Node.js)
- Internet access to `https://www.saucedemo.com`

---

## Installation

1. Clone the repository (if using GitHub):
```bash
git clone https://github.com/your-username/project-speedlabs.git
cd project-speedlabs
Install dependencies:

npm ci
Install Playwright browsers:

npx playwright install --with-deps
Folder Structure
project-speedlabs/
├── package.json
├── playwright.config.ts
├── storage/
│   └── standard_user.json
├── tests/
│   ├── checkout.spec.ts
│   ├── ui-visual.spec.ts
│   └── checkout.mobile.spec.ts
└── .github/
    └── workflows/
        └── playwright.yml
storage/standard_user.json – stores authenticated browser context for programmatic login

tests/ – contains all Playwright test files

.github/workflows/playwright.yml – GitHub Actions workflow for CI/CD

Running Tests Locally
1. Run All Tests
npx playwright test
2. Run Tests in Headed Mode (visible browser)
npx playwright test --headed
3. Run a Single Test File
npx playwright test tests/checkout.spec.ts
4. Debugging / Inspecting Tests
Add a page.pause() in any test for Playwright Inspector:

await page.pause();
Then run:

npx playwright test --headed
Inspector allows inspecting cookies, storage, and UI state

Resume execution manually
Visual/UX Validation
tests/ui-visual.spec.ts asserts:

Button text changes from "Add to Cart" → "Remove"

Button text color changes to SauceDemo red (rgb(226, 35, 26))

Programmatic Login
Uses storage/standard_user.json with session cookie

Bypasses login UI
Ensures tests are fast, reliable, and CI-ready

CI/CD Integration (GitHub Actions)
Workflow: .github/workflows/playwright.yml
Triggers: push or pull request to main

Steps:
1. Checkout repo
2. Install Node.js 18
3. Install dependencies
4. Install Playwright browsers
5. Run tests
6. Upload HTML report as artifact
