import React, { FC } from "react";

import { ThemeProvider } from "@/shared/application/components/ui/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

interface ConfigContainerProps {
  children: React.ReactNode;
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60,
      },
    },
  });
}

export const ConfigContainer: FC<ConfigContainerProps> = ({ children }) => {
  const queryClient = makeQueryClient();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
