import { PropsWithChildren, type FC } from "react";
import { twMerge } from "tailwind-merge";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <main className={twMerge("h-full")}>{children}</main>;
};
