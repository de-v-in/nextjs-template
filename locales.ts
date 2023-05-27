import 'server-only';

import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./locales/en.json').then((module) => module.default),
  vi: () => import('./locales/vi.json').then((module) => module.default),
};

export const getLocale = async (locale: Locale) => dictionaries[locale]();
