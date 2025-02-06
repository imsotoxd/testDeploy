
import { QueryClient } from "@tanstack/react-query";

let queryClient: QueryClient;

export function getQueryClient() {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // Cambiar si deseas que se refetchee al regresar a la ventana
          refetchOnMount: false,       // Cambiar si deseas que se refetchee al montar el componente
          refetchOnReconnect: false,   // Cambiar si deseas que se refetchee al reconectar
          retry: 2,                    // Intentar dos veces en caso de error
          staleTime: 5 * 60 * 1000,    // Datos frescos por 5 minutos
        },
      }
    });
  }
  return queryClient;
}
