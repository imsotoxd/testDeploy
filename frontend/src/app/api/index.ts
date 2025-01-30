
import axios from "axios";
import { getDatabaseConfig } from "./config";
import { cookies } from "next/headers";

const jwt = cookies().get("authToken");

const { API_URL } = getDatabaseConfig;

export const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    if (jwt) {
      const value = jwt.value;
      config.headers.Authorization = `Bearer ${value}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);