import { fetcher } from "@/libs/fetcher";
import { AxiosRequestConfig } from "axios";

export abstract class AbstractService {
  protected fetch<Response>(config: AxiosRequestConfig) {
    return fetcher<Response>(config);
  }
}
