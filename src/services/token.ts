export const AUTHORISATION_TOKEN = 'X-Token';

export const getToken = () => localStorage.getItem(AUTHORISATION_TOKEN) ?? '';

export const setToken = (value: string) => {
  localStorage.setItem(AUTHORISATION_TOKEN, value);
};
