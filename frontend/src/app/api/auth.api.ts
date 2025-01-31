/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { cookies } from "next/headers";
import { API } from ".";
import { useUserStore } from "@/store/user.store";
import { ApiResponse, LoginProps, RegisterProps } from "./config";

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export const handleLogin = async (
  dataLogin: LoginProps
): Promise<ApiResponse> => {
  try {
    const { data } = await API.post<LoginResponse>("/users/login", dataLogin);
    const cookieOptions = {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 24,
    };
    const token = data.token;
    cookies().set("authToken", token, cookieOptions);

    return {
      wasValid: true,
      message: data.message,
      data: data.user,
    };
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Error Obteniendo Productos";
    return {
      wasValid: false,
      message: errorMessage,
    };
  }
};

export const handleRegister = async (
  dataRegister: RegisterProps
): Promise<ApiResponse> => {
  try {
    await API.post("/users/register", dataRegister);

    return {
      wasValid: true,
      message: "¡Usuario registrado exitosamente!",
    };
  } catch (error: any) {
    if (error.response?.status === 409) {
      return {
        wasValid: false,
        message: "Ya existe una cuenta con ese correo electrónico.",
      };
    }

    return {
      wasValid: false,
      message:
        error.response?.data?.message ||
        "Hubo un error al registrar el usuario.",
    };
  }
};

export const handleLogout = async (): Promise<ApiResponse> => {
  try {
    await API.post("/users/logout");

    const cookieStore = cookies();
    cookieStore.delete("authToken");

    const { delData } = useUserStore.getState();
    delData();

    return {
      wasValid: true,
      message: "¡Sesión cerrada exitosamente!",
    };
  } catch (error: any) {
    return {
      wasValid: false,
      message:
        error.response?.data?.message ||
        "Hubo un error al intentar cerrar la sesión.",
    };
  }
};
