import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from 'axios';

const BASE_URL = 'https://8.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;
const UNAUTHORIZED_STATUS_CODE = 401;

const token = localStorage.getItem('X-Token') ?? '';

export const createApi = (onUnauthorized: () => void): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'X-Token': token,
    },
  });

  const onSuccess = (response: AxiosResponse) => response;

  const onFail = (error: AxiosError) => {
    if (error.response?.status === UNAUTHORIZED_STATUS_CODE) {
      return onUnauthorized();
    }
    return Promise.reject(error);
  };

  const onSend = (config: AxiosRequestConfig) => {
    if (!config.headers['X-Token']) {
      config.headers['X-Token'] = localStorage.getItem('X-Token') ?? '';
    }
    return config;
  };

  api.interceptors.request.use(onSend);
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
