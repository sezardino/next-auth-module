import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useRef } from "react";

import { createQueryClient } from "@/libs/query";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = useRef(createQueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default appWithTranslation(App);
