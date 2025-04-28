import { appConfig } from "config";
import HttpClient from "./index.http";

export const dyteHttpClient = new HttpClient({
  baseURL: appConfig.dyteBaseUrl,
  timeout: 10000,
  headers: {
    Authorization: appConfig.dyteAuthHeader,
  },
});
