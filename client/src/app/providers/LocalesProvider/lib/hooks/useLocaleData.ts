import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { LOCALES_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { getLocalStorage } from '@/shared/lib/utils';

import { LOCALES, type Locales } from '../../model/const/locales';
import EnglishLanguage from '../../model/data/en.json' assert { type: 'json' };

export const useLocaleData = () => {
  const [messages, setMessages] = useState<Record<string, string>>(
    EnglishLanguage as Record<string, string>,
  );
  const [locale, setLocale] = useState<Locales>(LOCALES.ENGLISH);

  const loadMessages = useCallback(async (locale: Locales) => {
    const localeMessages = await import(`../../model/data/${locale}.json`);
    setMessages(localeMessages.default);
  }, []);

  useLayoutEffect(() => {
    const locale = getLocalStorage(LOCALES_LOCALSTORAGE_KEY) as Locales;
    setLocale(locale ?? LOCALES.ENGLISH);
  }, []);

  useEffect(() => {
    loadMessages(locale);
  }, [locale]);

  return {
    messages,
    locale,
    setLocale,
  };
};
