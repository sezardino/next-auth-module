import { apiService } from "@/services/api";
import { tokenService } from "@/services/token";
import axios, { AxiosResponse, CreateAxiosDefaults } from "axios";

export type FetcherResponse<TResponse> = AxiosResponse<TResponse>;

const fetcherOptions: CreateAxiosDefaults = {
  baseURL: process.env.API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetcher = axios.create(fetcherOptions);
export const fetcherClear = axios.create(fetcherOptions);

fetcher.interceptors.request.use((config) => {
  const token = tokenService.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

fetcher.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest._retry) return Promise.reject(error);

    const token = tokenService.get();

    if (!token) return Promise.reject(error);

    originalRequest._retry = true;

    if (error.response.status !== 401) return Promise.reject(error);

    try {
      const response = await apiService.auth.refresh();
      if (!response.data.access_token) return Promise.reject(error);
      tokenService.save(response.data.access_token, "cookie");
      return fetcher.request(originalRequest);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
