/* eslint-disable @typescript-eslint/no-explicit-any */
const { API_URL } = process.env;

export const getDatabaseConfig = {
  API_URL,
};

export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: string;
}

export interface ApiResponse {
  wasValid: boolean;
  message: string;
  data?: any;
}
