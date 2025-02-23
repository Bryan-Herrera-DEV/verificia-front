import appConfig from "@/core/config/app.config";
import { AuthStore } from "@/features/Auth/application/stores/AuthStore";
import {
  REQUEST_HEADER_AUTH_KEY,
  TOKEN_TYPE,
} from "@/shared/application/constants/api.constants";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const UNAUTHORIZED_CODES = [401];

function createHttpClient(baseURL: string): AxiosInstance {
  // no puede ser una función flecha por el hoisting
  const instance = axios.create({
    baseURL,
    timeout: 60000,
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = AuthStore.getState().tokenSession;

      if (accessToken) {
        config.headers.set(
          // Usamos 'set' para evitar errores de tipado en Axios >= 1.x, lo sque de una PR de Axios en github
          REQUEST_HEADER_AUTH_KEY,
          `${TOKEN_TYPE}${accessToken}`
        );
      }

      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const { response } = error;

      if (response) {
        const { status } = response;
        if (UNAUTHORIZED_CODES.includes(status)) {
          AuthStore.getState().logout();
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
}

const BaseService = createHttpClient(appConfig.apiUrl);

export default BaseService;
