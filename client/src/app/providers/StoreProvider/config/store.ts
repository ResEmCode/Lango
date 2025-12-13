import { configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';

import { createReducerManager } from './reducerManager';
import type { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
  initialState: StateSchema,
  asyncReducers: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: Boolean(import.meta.env.VITE__IS_DEV__),
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
