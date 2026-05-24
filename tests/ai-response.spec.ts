import { test, expect } from '@playwright/test';
import { ChatbotPage } from '../utils/chatbotPage';

test.setTimeout(120000);

test('Validate English chatbot response', async ({ page }) => {
  const chatbot = new ChatbotPage(page);

  const chatbotPage = await chatbot.openChatbotPopup();
  await chatbot.acceptTerms(chatbotPage);

  await chatbot.sendMessage(chatbotPage, 'How can I renew my Emirates ID?');

  await chatbotPage.waitForTimeout(10000);

  const bodyText = await chatbotPage.locator('body').innerText();

  expect(bodyText.length).toBeGreaterThan(50);
  expect(bodyText).not.toContain('undefined');
  expect(bodyText).not.toContain('null');
});