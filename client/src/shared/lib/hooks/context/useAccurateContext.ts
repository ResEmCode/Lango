import { type Context, useContext } from 'react';
export const useAccurateContext = <T>(ctx: Context<T | null>): T => {
  const value = useContext(ctx);

  if (value === null) {
    throw new Error('Empty context value');
  }
  return value;
};
