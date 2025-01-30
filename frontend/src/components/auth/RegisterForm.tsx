/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchema,
  type RegisterSchemaType,
} from "@/lib/schemas/auth.schema";
import Link from "next/link";
import { handleRegister } from "@/app/api/auth.api";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Image from "next/image";

const RegisterForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    clearErrors,
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      birthdate: undefined,
      email: "",
      password: "",
      nameCompany: "",
      businessArea: "",
    },
  });

  const onSubmit = async (data: RegisterSchemaType) => {
    const response = await handleRegister(data);

    if (response.wasValid) {
      Swal.fire({
        icon: "success",
        title: response.message,
        confirmButtonColor: "var(--primary)",
      }).then(() => {
        router.push("/auth/signin");
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops",
        text: response.message,
        confirmButtonColor: "var(--primary)",
      });
    }

    reset();
  };

  const handleNext = async () => {
    const isValid = await trigger(["firstname", "lastname", "birthdate"]);

    if (isValid) {
      setStep(2);
    }
  };

  const handlePrev = () => {
    setStep(1);
  };

  return (
    <div className="mt-16">
      <p className="text-2xl font-semibold text-primary text-center">
        Registrate
      </p>
      <form
        className="space-y-4 w-[400px] mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {step === 1 && (
          <>
            <div className="flex flex-col">
              <input
                className="border-[1px] h-12 border-primary rounded-xl p-2"
                type="text"
                placeholder="Nombres"
                {...register("firstname")}
                onChange={() => clearErrors("firstname")}
              />
              {errors.firstname && (
                <p className="text-xs text-red-500">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                className="border-[1px] h-12 border-primary rounded-xl p-2"
                type="text"
                placeholder="Apellidos"
                {...register("lastname")}
                onChange={() => clearErrors("lastname")}
              />
              {errors.lastname && (
                <p className="text-xs text-red-500">
                  {errors.lastname.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="birthdate" className="text-gray-500 text-sm mb-1">
                Fecha de nacimiento
              </label>
              <input
                className="border-[1px] h-12 border-primary rounded-xl p-2"
                type="date"
                id="birthdate"
                {...register("birthdate")}
                onChange={() => clearErrors("birthdate")}
              />
              {errors.birthdate && (
                <p className="text-xs text-red-500">
                  {errors.birthdate.message}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="btn bg-gray-400 w-full"
            >
              Siguiente
            </button>
          </>
        )}

        {step === 2 && (
          <>
            {/* Paso 2 */}
            <div className="flex flex-col">
              <input
                className="border-[1px] h-12 border-primary rounded-xl p-2"
                type="text"
                placeholder="Empresa"
                {...register("nameCompany")}
              />
              {errors.nameCompany && (
                <p className="text-xs text-red-500">
                  {errors.nameCompany.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <select
                className="border-[1px] h-12 bg-transparent border-primary rounded-xl p-2"
                {...register("businessArea")}
              >
                <option value="">Selecciona un rubro</option>
                <option value="Alimentos y bebidas">Alimentos y bebidas</option>
                <option value="Bienes e insumos">Bienes e insumos</option>
                <option value="Tecnología">Tecnología</option>
                <option value="Salud">Salud</option>
              </select>
              {errors.businessArea && (
                <p className="text-xs text-red-500">
                  {errors.businessArea.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                className="border-[1px] h-12 border-primary rounded-xl p-2"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="relative flex flex-col">
              <input
                className="border-[1px] h-12 rounded-xl border-primary p-2 pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                {...register("password")}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <Image
                  src={showPassword ? "/eye-off.svg" : "/eye.svg"}
                  alt="Toggle password visibility"
                  width={24}
                  height={24}
                />
              </button>
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="btn w-1/3 bg-gray-400"
              >
                Regresar
              </button>
              <button className="btn btn-neutral w-1/3" type="submit">
                Registrarse
              </button>
            </div>
          </>
        )}
      </form>

      <p className="text-center mt-4">
        ¿Ya tienes una cuenta?{" "}
        <Link
          className="btn no-underline btn-link text-primary"
          href={"/auth/signin"}
        >
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
