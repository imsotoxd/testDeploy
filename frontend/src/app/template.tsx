"use client";
import { getQueryClient } from "@/lib/tanstack/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = getQueryClient();

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </motion.div>
  );
}
