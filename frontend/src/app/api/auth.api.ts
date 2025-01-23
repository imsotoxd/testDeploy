/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { cookies } from "next/headers";
import { API } from ".";
import { useUserStore } from "@/store/user.store";

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: string;
}

interface LoginResponse {
  wasValid: boolean;
  message: string;
}

export const handleLogin = async (
  dataLogin: LoginProps
): Promise<LoginResponse> => {
  try {
    const { data } = await API.post("/users/login", dataLogin);
    const cookieOptions = {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60,
    };
    const token = data.token;
    cookies().set("authToken", token, cookieOptions);
    return {
      wasValid: true,
      message: data.message,
    };
  } catch (error: any) {
    return {
      wasValid: false,
      message: error.response.data.message,
    };
  }
};

export const handleRegister = async (
  dataRegister: RegisterProps
): Promise<LoginResponse> => {
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

export const handleLogout = async (): Promise<LoginResponse> => {
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
