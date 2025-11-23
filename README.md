# QA Lite Cypress Automation

Automated end-to-end coverage for QA Lite using Cypress with the Cucumber preprocessor. The suite follows a Page Object Model with reusable commands to keep tests readable, reliable, and easy to maintain.

## Prerequisites

- Node.js 20+
- npm 10+
- Access credentials for QA Lite (email, password, and optional auth cookie)

## Installation

```bash
npm ci
```

## Running the tests

- Headless run (CI default):

```bash
npm run cy:run
```

- Open Cypress runner (desktop viewport):

```bash
npm run cy:open:desktop
```

- Open Cypress runner (mobile viewport):

```bash
npm run cy:open:mobile
```

## Environment variables

The project reads the workspace URL and authentication cookie from your environment:

- `QA_LITE_BASE_URL` – base URL for the QA Lite workspace (defaults to `https://qa-lite.vercel.app`).
- `QA_LITE_AUTH_COOKIE` – authentication cookie if required by the environment.

Create a `.env` file or export the variables in your shell before running the suite.

## Project structure

- `cypress/e2e/features` – Gherkin feature files (Given/When/Then) describing scenarios.
- `cypress/support/pages` – Page Objects and shared base page helpers.
- `cypress/support/steps` – Step definitions mapping Gherkin steps to reusable actions.
- `cypress/support/commands.js` – Custom Cypress commands (e.g., `cy.login`).
- `cypress/fixtures` – Test data fixtures such as default user credentials.
- `.github/workflows` – GitHub Actions workflow that lints and runs Cypress in CI.

## Coding guidelines

- Keep selectors in dedicated `elements.js` files with clear, English names.
- Keep Page Object methods single-responsibility and reusable.
- Prefer semantic steps and assertions over duplicated command chains.
- Reset browser state between tagged scenarios to avoid data leakage.

## Linting and formatting

Run ESLint across the project:

```bash
npm run lint
```

Format files with Prettier:

```bash
npm run format
```
