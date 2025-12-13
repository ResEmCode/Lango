import { createAccurateContext } from '@/shared/lib/utils';

export type Theme = 'dark' | 'light';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createAccurateContext<ThemeContextProps>();
