import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from 'axios';

import { AUTHORISATION_TOKEN, getToken } from './token';

const BASE_URL = 'https://express-cities.onrender.com';
const REQUEST_TIMEOUT = 5000;
const UNAUTHORIZED_STATUS_CODE = 401;

const token = getToken();

export const createApi = (onUnauthorized: () => void): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      [AUTHORISATION_TOKEN]: token,
    },
  });

  const onSend = (config: AxiosRequestConfig) => {
    if (!config.headers[AUTHORISATION_TOKEN]) {
      config.headers[AUTHORISATION_TOKEN] = getToken();
    }
    return config;
  };

  const onSuccess = (response: AxiosResponse) => response;

  const onFail = (error: AxiosError) => {
    if (error.response?.status === UNAUTHORIZED_STATUS_CODE) {
      onUnauthorized();
    }
    return Promise.reject(error);
  };

  api.interceptors.request.use(onSend);
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
