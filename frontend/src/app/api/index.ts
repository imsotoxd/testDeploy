"use server";
import axios from "axios";
import { getDatabaseConfig } from "./config";
import { cookies } from "next/headers";

const jwt = cookies().get("authToken");
const { API_URL } = getDatabaseConfig;

let isLoggedOut = false;

export const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    if (!isLoggedOut && jwt) {
      const value = jwt.value;
      console.log("token", value);
      config.headers.Authorization = `Bearer ${value}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const logoutHandler = () => {
  isLoggedOut = true;
};
