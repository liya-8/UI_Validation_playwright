# Playwright Test Automation Project

This repository contains automated UI tests for a Book Store web application using [Playwright](https://playwright.dev/).

## Project Structure

```
├── config.js
├── package.json
├── playwright.config.js
├── pages/
│   ├── BookStore.js
│   ├── firstpage.js
│   └── LoginPage.js
├── playwright-report/
│   └── index.html
│   └── data/
├── test-results/
│   └── tests-UIvalidation-test/
├── tests/
│   ├── UIvalidation.spec.js
│   
├── tests-examples/
│   └── demo-todo-app.spec.js
|__ detailsOfBook.txt
```

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/liya-8/UI_Validation_playwright.git
   cd UI_validation_playwright
   ```
2. Install dependencies:
   ```
   npm install 
   ```

### Running Tests
To run all tests:
```
npx playwright test
```

To run tests for a specific browser:
```
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Viewing Reports
After running tests, view the HTML report:
```
npx playwright show-report
```

## Configuration
- Test settings are managed in `playwright.config.js`.
- Page objects are in the `pages/` directory.
- Test results and reports are saved in `test-results/` and `playwright-report/`.
- config.js file is added to store the app url, user credentials and bookname.
- Details of books are stored into a file detailsOfBook.txt.




