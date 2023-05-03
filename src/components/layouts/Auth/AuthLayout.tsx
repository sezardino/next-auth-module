import { type ComponentPropsWithoutRef, type FC } from "react";
import { twMerge } from "tailwind-merge";

export interface AuthLayoutProps extends ComponentPropsWithoutRef<"div"> {}

export const AuthLayout: FC<AuthLayoutProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <main {...rest} className={twMerge("h-full", className)}>
      {children}
    </main>
  );
};
