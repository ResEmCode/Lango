import { createAccurateContext } from '@/shared/lib/utils';

import type { Locales } from '../../model/const/locales';

export interface LocalesContextProps {
  locale: Locales;
  setLocale: (locale: Locales) => void;
}

export const LocalesContext = createAccurateContext<LocalesContextProps>();
