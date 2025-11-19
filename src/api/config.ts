import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.maanyuba.io:4433";
const APP_ID =
  import.meta.env.VITE_APP_ID || "fcb9b164-7b23-11ef-8547-0a01598a6d21";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-app-id": APP_ID,
  },
  timeout: 30000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const message =
        error.response.data?.details?.businessMeaning ||
        error.response.data?.message ||
        "Error en la petición";
      return Promise.reject(new Error(message));
    }
    if (error.request) {
      return Promise.reject(new Error("No se pudo conectar con el servidor"));
    }
    return Promise.reject(error);
  }
);
