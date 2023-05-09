import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import { createQueryClient } from "@/libs/query";

import { PageWrapper } from "@/components/layouts/PageWrapper";
import { Seo } from "@/components/ui/Seo";
import { UserRoleProvider } from "@/context/UserRoleContext";
import "@/styles/globals.css";
import { CustomPage } from "@/types/page";
import { useState } from "react";

type CustomAppProps = AppProps & {
  Component: CustomPage;
};

// const client = createQueryClient();
const App = ({ Component, pageProps }: CustomAppProps) => {
  const [client] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps.dehydratedState}>
        <Seo />
        <UserRoleProvider>
          <PageWrapper
            layout={Component.layout}
            roles={Component.roles}
            auth={Component.auth}
          >
            <Component {...pageProps} />
          </PageWrapper>
        </UserRoleProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default appWithTranslation(App);
