"use client";

import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useState } from "react";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => {
    const client = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          cacheTime: 1000 * 60 * 5, // 5 minutes
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
        },
        mutations: {
          onError: (e) => {
            console.error(e);
            if (e instanceof Error && "code" in e) {
              enqueueSnackbar({ message: e.message, variant: "error" });
            }
          },
        },
      },
    });

    if (typeof window !== "undefined") {
      const persister = createSyncStoragePersister({ storage: localStorage });
      persistQueryClient({ queryClient: client, persister });
    }

    return client;
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider autoHideDuration={10000}>{children}</SnackbarProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
