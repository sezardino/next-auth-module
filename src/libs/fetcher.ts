import { tokenService } from "@/services/token";
import axios, { AxiosResponse, CreateAxiosDefaults } from "axios";

export type FetcherResponse<TResponse> = AxiosResponse<TResponse>;

const fetcherOptions: CreateAxiosDefaults = {
  baseURL: process.env.API_URL,
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
