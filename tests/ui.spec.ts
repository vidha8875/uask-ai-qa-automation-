import { test } from '@playwright/test';
import { ChatbotPage } from '../utils/chatbotPage';

test('Chatbot should open and input should be visible', async ({ page }) => {
  const chatbot = new ChatbotPage(page);

  const chatbotPage = await chatbot.openChatbotPopup();

  await chatbot.acceptTerms(chatbotPage);
  await chatbot.verifyInputVisible(chatbotPage);
});