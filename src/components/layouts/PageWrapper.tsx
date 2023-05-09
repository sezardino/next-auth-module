import { ProjectUrl } from "@/const/project-url";
import { useUserRoleContext } from "@/context/UserRoleContext";
import { CustomPage } from "@/types/page";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useMemo, type FC } from "react";
import { LoadingOverlay } from "../ui/LoadingOverlay/LoadingOverlay";
import { AuthLayout } from "./Auth/AuthLayout";
import { DefaultLayout } from "./Default/DefaultLayout";

export type LayoutType = "default" | "auth";

export interface PageWrapperProps extends PropsWithChildren {
  layout?: CustomPage["layout"];
  roles?: CustomPage["roles"];
  auth?: CustomPage["auth"];
}

const layouts: Record<LayoutType, FC<PropsWithChildren>> = {
  default: DefaultLayout,
  auth: AuthLayout,
};

export const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { auth, children, roles = [], layout = "default" } = props;
  const { role, isLoading: isUserLoading } = useUserRoleContext();
  const router = useRouter();

  const Layout = useMemo(() => layouts[layout], [layout]);

  useEffect(() => {
    if (isUserLoading) return;

    if (auth === false && role) {
      router.replace(ProjectUrl.Home);
      return;
    }

    if (role && !roles.includes(role)) {
      router.replace(ProjectUrl.Home);
      return;
    }

    if (
      (roles.length === 0 || !role) &&
      !router.pathname.startsWith(ProjectUrl.SignIn)
    ) {
      router.replace(ProjectUrl.SignIn);

      return;
    }

    if (role && roles.includes(role)) return;

    // router.replace(ProjectUrl.SignIn);
  }, [role, roles, auth]);

  const childrenWithLoading = (
    <>
      {isUserLoading && <LoadingOverlay />}
      {children}
    </>
  );

  const loadingWithChildren = (
    <>{isUserLoading ? <LoadingOverlay /> : children}</>
  );

  return (
    <Layout>
      {auth === false || roles.length !== 0
        ? loadingWithChildren
        : childrenWithLoading}
    </Layout>
  );
};
