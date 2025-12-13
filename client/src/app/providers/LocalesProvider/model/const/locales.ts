export const LOCALES = {
  ENGLISH: 'en',
  RUSSIAN: 'ru',
} as const;

export type Locales = (typeof LOCALES)[keyof typeof LOCALES];
