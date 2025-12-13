import axios from 'axios';

import { ACCESS_LOCALSTORAGE_KEY } from '../const/localstorage';

export const $api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    authorization: localStorage.getItem(ACCESS_LOCALSTORAGE_KEY) || '',
  },
});
