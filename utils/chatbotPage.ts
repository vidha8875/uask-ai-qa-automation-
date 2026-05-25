import { Page, expect } from '@playwright/test';

export class ChatbotPage {
  constructor(private page: Page) {}

  async openChatbotPopup() {
    await this.page.goto('https://u.ae/en/u-ask');

    const popupPromise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'U.Ask' }).click();

    const chatbotPage = await popupPromise;
    await chatbotPage.waitForLoadState();

    return chatbotPage;
  }

  async acceptTerms(chatbotPage: Page) {
  const acceptButton = chatbotPage.getByRole('button', {
    name: 'Accept and continue'
  });

  if (await acceptButton.count() > 0) {
    try {
      await acceptButton.click({ force: true, timeout: 10000 });
      await chatbotPage.waitForTimeout(2000);
    } catch {
      console.log('Disclaimer popup not displayed or already accepted');
    }
  }
}
 async sendMessage(chatbotPage: Page, message: string) {
  const input = chatbotPage.getByPlaceholder('Please ask me a question');

  await input.waitFor({ state: 'visible', timeout: 20000 });
  await input.click({ force: true });
  await input.fill(message);
  await input.press('Enter');
}

  async getLatestResponse(chatbotPage: Page) {
    return await chatbotPage.locator('body').innerText();
  }

  async verifyInputVisible(chatbotPage: Page) {
    await expect(
      chatbotPage.getByPlaceholder('Please ask me a question')
    ).toBeVisible();
  }
}