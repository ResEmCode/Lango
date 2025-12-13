import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { ReducersMapObject } from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider/StoreProvider';
import type { DeepPartial } from '@/app/types/global';

interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions) => {
  const { route = '/', asyncReducers, initialState } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        {component}
      </StoreProvider>
    </MemoryRouter>
  );
};
