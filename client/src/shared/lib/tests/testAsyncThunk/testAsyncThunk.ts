import type { AsyncThunkAction, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import axios, { type AxiosStatic } from 'axios';
import { type MockedFunction, vitest } from 'vitest';

import type { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import type { DeepPartial } from '@/app/types/global';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  atg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

vitest.mock('axios');

const mockedAxios = vitest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: ThunkDispatch<StateSchema, any, UnknownAction>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: MockedFunction<AxiosStatic>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = vitest.fn();
    this.getState = vitest.fn(() => state as StateSchema);

    this.api = mockedAxios;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
    });

    return result;
  }
}
