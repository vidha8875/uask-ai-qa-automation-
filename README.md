# U-Ask AI/ML QA Automation Framework

This project contains end-to-end automated tests for the UAE Government U-Ask AI chatbot using Playwright and TypeScript.

## Tech Stack

- Playwright
- TypeScript
- Page Object Model
- HTML Test Report

## Test Coverage

- Chatbot UI launch and input visibility
- English AI response validation
- Arabic multilingual response validation
- Script injection handling
- Popup handling
- HTML report generation

## Project Structure

```text
uask-ai-qa-automation/
├── tests/
│   ├── ui.spec.ts
│   ├── ai-response.spec.ts
│   ├── arabic.spec.ts
│   └── security.spec.ts
├── utils/
│   └── chatbotPage.ts
├── data/
│   └── test-data.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
└── test-report.md