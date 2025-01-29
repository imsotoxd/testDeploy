"use client";

import { deleteProduct } from "@/app/api/product.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

interface DeleteProps {
  productID: string;
  productName: string;
  closeModal: () => void;
}

function ProductDelete({ productID, closeModal, productName }: DeleteProps) {
  const qc = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: async (res) => {
      await qc.invalidateQueries({ queryKey: ["products", productID] });
      Swal.fire({
        title: "Producto eliminado",
        text: res.message,
        icon: "success",
        confirmButtonColor: "var(--primary)",
      });
    },
    onError: (error: any) => {
      Swal.fire({
        title: "Error al eliminar",
        text: error.response.data.message,
        icon: "error",
        confirmButtonColor: "var(--primary)",
      });
    },
  });
  const handleDelete = () => {
    Swal.fire({
      title: "Eliminar producto",
      html: `¿Estás seguro de eliminar el producto <b>${productName}</b>?`,
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
      confirmButtonColor: "var(--primary)",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync(productID);
        closeModal();
      }
    });
  };
  return (
    <>
      <button
        onClick={handleDelete}
        className="btn-sm w-full btn btn-ghost rounded-none flex items-center justify-between"
      >
        <span>Eliminar</span>
        <span className="icon-[prime--trash]" role="img" aria-hidden="true" />
      </button>
    </>
  );
}

export default ProductDelete;
