import { test, expect } from '@playwright/test';
import { ChatbotPage } from '../utils/chatbotPage';

test('Validate English chatbot response', async ({ page }) => {
  const chatbot = new ChatbotPage(page);

  const chatbotPage = await chatbot.openChatbotPopup();
  await chatbot.acceptTerms(chatbotPage);

  const prompt = 'How can I renew my Emirates ID?';

  await chatbot.sendMessage(chatbotPage, prompt);

  await expect(chatbotPage.getByText('How can I apply for a golden')).toBeVisible();
});