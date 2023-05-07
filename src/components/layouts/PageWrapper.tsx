import { useUserRoleContext } from "@/context/UserRoleContext";
import { CustomPage } from "@/types/page";
import { PropsWithChildren, useEffect, useMemo, type FC } from "react";
import { AuthLayout } from "./Auth/AuthLayout";
import { DefaultLayout } from "./Default/DefaultLayout";

export type LayoutType = "default" | "auth";

export interface PageWrapperProps extends PropsWithChildren {
  layout?: CustomPage["layout"];
  role?: CustomPage["role"];
}

const layouts: Record<LayoutType, FC<PropsWithChildren>> = {
  default: DefaultLayout,
  auth: AuthLayout,
};

export const PageWrapper: FC<PageWrapperProps> = (props) => {
  const { children, layout = "default" } = props;
  const { role } = useUserRoleContext();

  console.log(layout);

  const Layout = useMemo(() => layouts[layout], [layout]);
  console.log(1);
  useEffect(() => {}, [role]);

  return <Layout>{children}</Layout>;
};
