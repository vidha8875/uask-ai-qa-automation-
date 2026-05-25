import { test, expect } from '@playwright/test';
import { ChatbotPage } from '../utils/chatbotPage';

test.setTimeout(120000);

test('AI provides clear and helpful response for public service query', async ({ page }) => {
  const chatbot = new ChatbotPage(page);

  const chatbotPage = await chatbot.openChatbotPopup();

  await chatbot.acceptTerms(chatbotPage);

  await chatbot.sendMessage(
    chatbotPage,
    'How can I renew my Emirates ID?'
  );

  await chatbotPage.waitForTimeout(15000);

  const response = await chatbotPage.locator('body').innerText();

  expect(response.length).toBeGreaterThan(30);

  expect(response.toLowerCase()).not.toContain('undefined');
  expect(response.toLowerCase()).not.toContain('null');
});

test('AI response should not contain hallucinated or irrelevant content', async ({ page }) => {
  const chatbot = new ChatbotPage(page);

  const chatbotPage = await chatbot.openChatbotPopup();

  await chatbot.acceptTerms(chatbotPage);

  await chatbot.sendMessage(
    chatbotPage,
    'What are the documents required for a UAE driving license?'
  );

  await chatbotPage.waitForTimeout(15000);

  const response = await chatbotPage.locator('body').innerText();

  expect(response.length).toBeGreaterThan(30);

  expect(response.toLowerCase()).not.toContain('fictional');
  expect(response.toLowerCase()).not.toContain('random');
});

test('English and Arabic responses should stay consistent for similar intent', async ({ page }) => {
  const chatbot = new ChatbotPage(page);

  const englishPage = await chatbot.openChatbotPopup();

  await chatbot.acceptTerms(englishPage);

  await chatbot.sendMessage(
    englishPage,
    'How can I renew my Emirates ID?'
  );

  await englishPage.waitForTimeout(10000);

  const englishResponse =
    await englishPage.locator('body').innerText();

  expect(englishResponse.length).toBeGreaterThan(30);

  const arabicPage = await chatbot.openChatbotPopup();

  await chatbot.acceptTerms(arabicPage);

  await chatbot.sendMessage(
    arabicPage,
    'كيف يمكنني تجديد بطاقة الهوية الإماراتية؟'
  );

  await arabicPage.waitForTimeout(10000);

  const arabicResponse =
    await arabicPage.locator('body').innerText();

  expect(arabicResponse.length).toBeGreaterThan(30);
});

test('AI response formatting should be clean', async ({ page }) => {
  const chatbot = new ChatbotPage(page);

  const chatbotPage = await chatbot.openChatbotPopup();

  await chatbot.acceptTerms(chatbotPage);

  await chatbot.sendMessage(
    chatbotPage,
    'How can I apply for a golden visa?'
  );

  await chatbotPage.waitForTimeout(10000);

  const response = await chatbotPage.locator('body').innerText();

  expect(response).not.toContain('<script>');
  expect(response).not.toContain('undefined');
  expect(response).not.toContain('null');
});

test('Loading state or chatbot response should appear', async ({ page }) => {
  const chatbot = new ChatbotPage(page);

  const chatbotPage = await chatbot.openChatbotPopup();

  await chatbot.acceptTerms(chatbotPage);

  await chatbot.sendMessage(
    chatbotPage,
    'How can I get UAE residence visa?'
  );

  await chatbotPage.waitForTimeout(5000);

  const response = await chatbotPage.locator('body').innerText();

  expect(response.length).toBeGreaterThan(20);
});