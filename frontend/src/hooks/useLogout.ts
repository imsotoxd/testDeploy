"use client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { handleLogout } from "@/app/api/auth.api";

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Cerraras tu sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--primary)",
      cancelButtonColor: "#777777",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const logoutResponse = await handleLogout();
        if (logoutResponse.wasValid) {
          localStorage.clear();
          Swal.fire({
            title: "¡Sesión cerrada!",
            text: "Has cerrado sesión exitosamente.",
            icon: "success",
            confirmButtonColor: "var(--primary)",
          }).then(() => {
            router.push("/");
          });
        } else {
          Swal.fire({
            title: "Error",
            text:
              logoutResponse.message || "Hubo un problema al cerrar sesión.",
            icon: "error",
            confirmButtonColor: "var(--primary)",
          });
        }
      }
    });
  };

  return { logout };
};
