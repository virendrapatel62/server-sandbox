import { CONFIG } from "@/config/config";
import HttpClient from "./index.http";

export const dyteHttpClient = new HttpClient({
  baseURL: CONFIG.DYTE_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: CONFIG.DYTE_AUTH_HEADER,
  },
});
