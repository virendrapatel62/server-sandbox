import { RequiredEnvError } from "@/errors/RequiredEnv.error";
import { config } from "dotenv";

const getOrThrow = (name: string) => {
  if (process.env[name]) {
    return process.env[name];
  }
  throw new RequiredEnvError(`${name} environment variable is required.`);
};

export const CONFIG = {
  SERVER_PORT: getOrThrow("PORT"),

  DYTE_BASE_URL: getOrThrow("DYTE_BASE_URL"),
  DYTE_ORG_ID: getOrThrow("DYTE_ORG_ID"),
  DYTE_API_KEY: getOrThrow("DYTE_API_KEY"),
  DYTE_AUTH_HEADER: getOrThrow("DYTE_AUTH_HEADER"),
};
