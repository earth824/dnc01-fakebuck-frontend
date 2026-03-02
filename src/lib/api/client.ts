import { serverEnv } from '@/config/env.validation';
import { ApiError } from '@/lib/api/api.error';

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
};

const BACKEND_URL = serverEnv.BACKEND_URL;

const apiFetch = async (url: string, options: RequestOptions = {}) => {
  const { method = 'GET', body } = options;

  const headers: Record<string, string> = {};
  if (body && !(body instanceof FormData))
    headers['Content-type'] = 'application/json';

  const config: RequestInit = {
    method,
    body: body
      ? body instanceof FormData
        ? body
        : JSON.stringify(body)
      : undefined,
    headers
  };

  const res = await fetch(`${BACKEND_URL}${url}`, config);

  if (!res.ok) {
    const error = await res.json();
    throw new ApiError(error.message, error.code, error.details);
  }

  return res.json();
};

const get = (url: string) => apiFetch(url);
const post = (url: string, body?: unknown) =>
  apiFetch(url, { method: 'POST', body });
const put = (url: string, body?: unknown) =>
  apiFetch(url, { method: 'PUT', body });
const patch = (url: string, body?: unknown) =>
  apiFetch(url, { method: 'PATCH', body });
const del = (url: string) => apiFetch(url, { method: 'DELETE' });

export const api = {
  get,
  post,
  put,
  patch,
  delete: del
};
