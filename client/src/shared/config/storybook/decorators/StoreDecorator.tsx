import type { Decorator } from '@storybook/react';

import type { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider/StoreProvider';
import type { DeepPartial } from '@/app/types/global';

import type { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultReducers: ReducersList = {};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList): Decorator =>
  (StoryComponent) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  );
