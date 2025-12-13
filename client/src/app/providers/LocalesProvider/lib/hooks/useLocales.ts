import { useAccurateContext } from '@/shared/lib/hooks';

import { LocalesContext } from '../context/LocalesContext';

export const useLocales = () => useAccurateContext(LocalesContext);
