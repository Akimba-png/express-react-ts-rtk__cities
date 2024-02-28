import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from 'axios';
import { parseUrl } from '../util';
import { AUTHORISATION_TOKEN, getToken } from './token';


const BASE_URL = 'https://express-cities.onrender.com';
const REQUEST_TIMEOUT = 3000;
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

  const onFail = async (error: AxiosError) => {
    try {
      const config = error.config;
      if (config.url && error.code === 'ECONNABORTED' && config.method === 'get') {
        config.baseURL = 'database';
        const url = parseUrl(config.url);
        config.url = url;
        return await api.request(config);
      }
      if (config && error.code === 'ECONNABORTED' && config.url === '/login') {
        onUnauthorized();
      }
      if (error.response?.status === UNAUTHORIZED_STATUS_CODE) {
        onUnauthorized();
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };

  api.interceptors.request.use(onSend);
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
