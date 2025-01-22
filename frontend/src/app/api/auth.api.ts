'use server'
import { cookies } from "next/headers";
import { API } from ".";



interface LoginProps {
  email: string;
  password: string;
}

interface LoginResponse {
  wasValid: boolean;
  message: string
}

export const handleLogin = async (dataLogin: LoginProps): Promise<LoginResponse> => {
  try {
    const { data } = await API.post('/users/login', dataLogin)
    const cookieOptions = {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60,
    }
    const token = data.token
    cookies().set('authToken', token, cookieOptions)
    return {
      wasValid: true,
      message: data.message,
    }
  } catch (error: any) {
    return {
      wasValid: false,
      message: error.response.data.message
    }
  }
}


