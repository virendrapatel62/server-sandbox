import { RequiredEnvError } from "../errors/RequiredEnv.error";

const getOrThrow = (name: string) => {
  if (process.env[name]) {
    return process.env[name];
  }
  throw new RequiredEnvError(`${name} environment variable is required.`);
};

export const appConfig = {
  authServerPort: getOrThrow("AUTH_SERVER_PORT"),
  streamServerPort: getOrThrow("STREAM_SERVER_PORT"),

  dyteBaseUrl: getOrThrow("DYTE_BASE_URL"),
  dyteOrgId: getOrThrow("DYTE_ORG_ID"),
  dyteApiKey: getOrThrow("DYTE_API_KEY"),
  dyteAuthHeader: getOrThrow("DYTE_AUTH_HEADER"),
};
