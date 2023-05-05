import { fetcher } from "@/libs/fetcher";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export abstract class AbstractService {
  protected fetch<Response, Error = { message: string }>(
    config: AxiosRequestConfig
  ) {
    return fetcher<AxiosError<Error>, AxiosResponse<Response>>(config);
  }
}
