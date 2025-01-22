/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchema,
  type RegisterSchemaType,
} from "@/lib/schemas/auth.schema";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      birthdate: undefined,
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterSchemaType) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      Swal.fire({
        icon: "success",
        title: "¡Usuario registrado, Inicia sesión!",
      }).then(() => {
        router.push("/auth/signin");
      });

      reset();
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          error.response?.data?.message ||
          "Hubo un error al registrar el usuario.",
      });
      reset();
    }
  };

  return (
    <div className="mt-16">
      <p className="text-2xl font-semibold text-primary text-center ">
        Registrate
      </p>
      <form
        className="space-y-8 w-[400px]  mt-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <input
            className=" border-[1px] h-14 border-primary  rounded-xl p-2 "
            type="text"
            placeholder="Nombres"
            {...register("firstname")}
          />
          {errors.firstname && (
            <p className="text-xs text-red-500">{errors.firstname.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className=" border-[1px] h-14 border-primary  rounded-xl p-2 "
            type="text"
            placeholder="Apellidos"
            {...register("lastname")}
          />
          {errors.lastname && (
            <p className="text-xs text-red-500">{errors.lastname.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className=" border-[1px] h-14 border-primary  rounded-xl p-2 "
            type="date"
            placeholder="edad"
            {...register("birthdate")}
          />
          {errors.birthdate && (
            <p className="text-xs text-red-500">{errors.birthdate.message}</p>
          )}
        </div>

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
          Registrarse
        </button>
      </form>
      <p className="text-center mt-7">
        ¿Ya tienes una cuenta?{" "}
        <Link href={"/auth/signin"}>
          <span className="text-primary ml-2">Iniciar sesión</span>
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
