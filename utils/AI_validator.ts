import { expect } from '@playwright/test';

export function validateHelpfulResponse(response: string, keywords: string[]) {
  expect(response.length).toBeGreaterThan(50);

  for (const keyword of keywords) {
    expect(response.toLowerCase()).toContain(keyword.toLowerCase());
  }
}

export function validateNoHallucination(response: string) {
  const hallucinationPhrases = [
    'i made this up',
    'not sure but',
    'probably',
    'as an ai language model',
    'fictional',
    'random answer'
  ];

  for (const phrase of hallucinationPhrases) {
    expect(response.toLowerCase()).not.toContain(phrase);
  }
}

export function validateCleanFormatting(response: string) {
  expect(response).not.toContain('<script>');
  expect(response).not.toContain('</html>');
  expect(response).not.toContain('undefined');
  expect(response).not.toContain('null');
  expect(response.trim()).not.toBe('');
}