import { createSlice } from '@reduxjs/toolkit';

import type { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
  isLoading: true,
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
