export class RequiredEnvError extends Error {
  constructor(variableName: string) {
    super(`${variableName} environment variable is required.`);
  }
}
