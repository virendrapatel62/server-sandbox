import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";

export class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(config: CreateAxiosDefaults) {
    const { baseURL, timeout = 5000 } = config;

    this.axiosInstance = axios.create({
      baseURL,
      timeout,
      headers: Object.assign(
        {
          "Content-Type": "application/json",
        },
        config.headers
      ),
    });
  }

  addResponseInterceptor(
    onFullFill: (response: AxiosResponse) => AxiosResponse,
    onError: (response: AxiosError) => AxiosError
  ): void {
    this.axiosInstance.interceptors.response.use(onFullFill, onError);
  }

  addRequestInterceptor(
    onFullFill: (
      response: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig,
    onError: (response: AxiosError) => AxiosError
  ): void {
    this.axiosInstance.interceptors.request.use(onFullFill, onError);
  }

  private handleError(error: any) {
    console.error("GET Request failed:", error.message);
    throw error;
  }

  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(url, { params });
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  async post<T>(url: string, data?: Record<string, any>): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put<T>(url: string, data?: Record<string, any>): Promise<T> {
    try {
      const response = await this.axiosInstance.put<T>(url, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

export default HttpClient;
