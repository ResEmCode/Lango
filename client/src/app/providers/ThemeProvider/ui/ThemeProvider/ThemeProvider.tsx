import { type ReactNode, useMemo } from 'react';

import { ThemeContext, type ThemeContextProps } from '../../lib/context/ThemeContext';
import { useTheme } from '../../lib/hooks/useTheme';

import '@/app/styles/themes/index.scss';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const { currentTheme, setTheme, toggleTheme } = useTheme();

  const values: ThemeContextProps = useMemo(
    () => ({ theme: currentTheme, setTheme, toggleTheme }),
    [currentTheme],
  );

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
