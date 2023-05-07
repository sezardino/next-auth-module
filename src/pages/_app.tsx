import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useRef } from "react";

import { createQueryClient } from "@/libs/query";

import { PageWrapper } from "@/components/layouts/PageWrapper";
import { Seo } from "@/components/ui/Seo";
import { UserRoleProvider } from "@/context/UserRoleContext";
import "@/styles/globals.css";
import { CustomPage } from "@/types/page";

type CustomAppProps = AppProps & {
  Component: CustomPage;
};

const App = ({ Component, pageProps }: CustomAppProps) => {
  const queryClient = useRef(createQueryClient());
  console.log(pageProps);
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <UserRoleProvider>
          <Seo />
          <PageWrapper layout={Component.layout} role={Component.role}>
            <Component {...pageProps} />
          </PageWrapper>
          <ReactQueryDevtools />
        </UserRoleProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default appWithTranslation(App);
