import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { ACCESS_LOCALSTORAGE_KEY } from '../const/localstorage';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(ACCESS_LOCALSTORAGE_KEY) || '';

      if (token) {
        headers.set('Authorization', token);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
