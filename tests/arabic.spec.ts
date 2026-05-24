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

  await expect(chatbotPage.locator('body')).toContainText('الهوية');
});