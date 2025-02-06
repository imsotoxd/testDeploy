"use client";

import { getAllMovements, postOneMovement } from "@/app/api/movements.api";
import { useUserStore } from "@/store/user.store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useMovements() {
  const queryClient = useQueryClient();
  const { data: userData } = useUserStore();

  const { data, isFetching, refetch, isRefetching } = useQuery({
    queryKey: ["moves", userData?.id],
    queryFn: () => {
      if (!userData?.id) return Promise.reject("No hay ID disponible")
      return getAllMovements()
    },
    enabled: !!userData?.id,
  });


  const addMovementQuery = useMutation({
    mutationFn: postOneMovement,
    mutationKey: ["addMove"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["moves", userData?.id],
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["infinityProducts", userData?.id],
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["allProducts", userData?.id],
        refetchType: "active"
      });
    }
  });

  return {
    movements: data?.data ?? [],
    movementError: data?.error,
    isFetchingMovement: isFetching,
    refetchMoves: refetch,
    isRefetchinMoves: isRefetching,

    createMovement: addMovementQuery.mutate,
    isCreatinMovement: addMovementQuery.isPending,
    createMovementResponse: addMovementQuery.data,
  };
}
