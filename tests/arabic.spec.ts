import { test, expect } from '@playwright/test';
import { ChatbotPage } from '../utils/chatbotPage';

test('Validate Arabic chatbot response', async ({ page }) => {
  const chatbot = new ChatbotPage(page);

  const chatbotPage = await chatbot.openChatbotPopup();

  await chatbot.acceptTerms(chatbotPage);

  await chatbot.sendMessage(
    chatbotPage,
    'كيف يمكنني تجديد بطاقة الهوية الإماراتية؟'
  );

  // Wait for chatbot response
  await chatbotPage.waitForTimeout(10000);

  const bodyText = await chatbotPage.locator('body').innerText();

  console.log(bodyText);

  expect(bodyText.length).toBeGreaterThan(50);
});