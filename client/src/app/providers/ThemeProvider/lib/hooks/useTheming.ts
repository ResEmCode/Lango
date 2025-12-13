import { useAccurateContext } from '@/shared/lib/hooks';

import { ThemeContext } from '../context/ThemeContext';

export const useTheming = () => useAccurateContext(ThemeContext);
