import { type ReactNode, useMemo } from 'react';
import { IntlProvider } from 'react-intl';

import { LocalesContext, type LocalesContextProps } from '../../lib/context/LocalesContext';
import { useLocaleData } from '../../lib/hooks/useLocaleData';

interface LocalesProviderProps {
  children: ReactNode;
}

export const LocalesProvider = (props: LocalesProviderProps) => {
  const { children } = props;
  const { locale, messages, setLocale } = useLocaleData();

  const values: LocalesContextProps = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocalesContext value={values}>
      <IntlProvider locale={locale} messages={messages} defaultLocale=''>
        {children}
      </IntlProvider>
    </LocalesContext>
  );
};
