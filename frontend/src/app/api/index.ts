"use server";
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
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
