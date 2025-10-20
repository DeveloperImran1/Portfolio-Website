"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Toaster } from "sonner";

export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Create client in a state to persist between renders
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" theme="light" richColors duration={2000} />
      {children}
    </QueryClientProvider>
  );
}
