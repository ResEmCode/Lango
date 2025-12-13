import type { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getUserError = (state: StateSchema) => state.user.error;
export const getUserIsLoading = (state: StateSchema) =>
  state.user.isLoading || false;
export const getUserData = (state: StateSchema) => state.user.user;
