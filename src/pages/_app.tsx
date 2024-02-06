import Top from "@/components/top";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundary from "@/components/gen-ui/error-boundary";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Top />
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}
