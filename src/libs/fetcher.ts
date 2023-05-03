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
