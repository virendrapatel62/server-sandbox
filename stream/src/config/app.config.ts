import { RequiredEnvError } from "@/errors/RequiredEnv.error";
import { config } from "dotenv";

const getOrThrow = (name: string) => {
  if (process.env[name]) {
    return process.env[name];
  }
  throw new RequiredEnvError(`${name} environment variable is required.`);
};

export const appConfig = {
  serverPort: getOrThrow("PORT"),
  dyteBaseUrl: getOrThrow("DYTE_BASE_URL"),
  dyteOrgId: getOrThrow("DYTE_ORG_ID"),
  dyteApiKey: getOrThrow("DYTE_API_KEY"),
  dyteAuthHeader: getOrThrow("DYTE_AUTH_HEADER"),
};
