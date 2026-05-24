# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ai-response.spec.ts >> Validate English chatbot response
- Location: tests\ai-response.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('How can I apply for a golden')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('How can I apply for a golden')

```

```yaml
- dialog:
  - document:
    - dialog "Disclaimer":
      - heading "Disclaimer" [level=3]
      - paragraph: Please note that ChatGPT is an artificial intelligence language model created for general informational purposes only. The responses provided by ChatGPT are based on its programming and access to a vast corpus of textual data, and should not be taken as professional advice or as a substitute for consulting a qualified expert. U.ae would not be responsible for any action/s taken or not taken based on the information provided. Additionally, ChatGPT may not always provide accurate or complete answers, and may occasionally generate inappropriate or incorrect responses due to the nature of its training data. Use of ChatGPT is entirely at the user's own risk.
      - button "Accept and continue"
      - button "Decline"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ChatbotPage } from '../utils/chatbotPage';
  3  | 
  4  | test('Validate English chatbot response', async ({ page }) => {
  5  |   const chatbot = new ChatbotPage(page);
  6  | 
  7  |   const chatbotPage = await chatbot.openChatbotPopup();
  8  |   await chatbot.acceptTerms(chatbotPage);
  9  | 
  10 |   const prompt = 'How can I renew my Emirates ID?';
  11 | 
  12 |   await chatbot.sendMessage(chatbotPage, prompt);
  13 | 
> 14 |   await expect(chatbotPage.getByText('How can I apply for a golden')).toBeVisible();
     |                                                                       ^ Error: expect(locator).toBeVisible() failed
  15 | });
```