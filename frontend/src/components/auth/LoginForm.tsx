"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginSchemaType } from "@/lib/schemas/auth.schema";
import Link from "next/link";
import axios from "axios";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("respuesta del servidor", response);

      reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        console.error("Error en la respuesta", error.response.data);
      } else {
        console.error("Error en la peticion", error.message);
      }
      reset();
    }
  };

  return (
    <div className="mt-16">
      <p className="text-2xl font-semibold text-primary text-center ">
        Inicar sesión
      </p>
      <form
        className="space-y-8 w-[400px]  mt-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <input
            className=" border-[1px] h-14 border-primary  rounded-xl p-2 "
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="border-red border-[1px] h-14 rounded-xl border-primary p-2 "
            type="password"
            placeholder="Contraseña"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button
          className="flex w-full h-14 items-center justify-center rounded-xl bg-primary  py-2 font-bold text-white"
          type="submit"
        >
          Ingresar
        </button>
      </form>
      <p className="text-center mt-7">
        ¿No tienes una cuenta?{" "}
        <Link href={"/auth/signup"}>
          <span className="text-primary ml-2">Registrate</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
