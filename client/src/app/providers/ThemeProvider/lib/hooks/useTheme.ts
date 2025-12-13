import { useCallback, useLayoutEffect, useState } from 'react';

import { THEME_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { getLocalStorage } from '@/shared/lib/utils';

import type { Theme } from '../context/ThemeContext';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  useLayoutEffect(() => {
    const themeLocal = getLocalStorage<Theme>(THEME_LOCALSTORAGE_KEY) ?? 'dark';

    document.documentElement.setAttribute('data-theme', themeLocal);
    setCurrentTheme(themeLocal);
  }, []);

  const setTheme = useCallback((theme: Theme) => {
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, theme);

    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const toggleTheme = useCallback(() => {
    switch (currentTheme) {
      case 'dark':
        {
          setTheme('light');
        }
        break;
      case 'light':
        {
          setTheme('dark');
        }
        break;
    }
  }, [currentTheme]);

  return {
    currentTheme,
    setTheme,
    toggleTheme,
  };
};
