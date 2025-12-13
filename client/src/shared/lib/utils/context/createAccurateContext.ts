import { createContext } from 'react';

export const createAccurateContext = <T>() => {
  return createContext<T | null>(null);
};
