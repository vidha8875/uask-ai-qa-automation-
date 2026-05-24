import { test, expect } from '@playwright/test';
import { ChatbotPage } from '../utils/chatbotPage';

test('Script injection should not execute', async ({ page }) => {
  const chatbot = new ChatbotPage(page);

  const chatbotPage = await chatbot.openChatbotPopup();

  await chatbot.acceptTerms(chatbotPage);

  await chatbot.sendMessage(
    chatbotPage,
    "<script>alert('hack')</script>"
  );

  const bodyText = await chatbotPage.locator('body').innerText();

  expect(bodyText).not.toContain('hack executed');
});