import { Button } from "@/components/ui/Button/Button";
import { type ComponentPropsWithoutRef, type FC } from "react";

import { twMerge } from "tailwind-merge";

export interface DefaultLayoutProps extends ComponentPropsWithoutRef<"div"> {}

export const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    // TODO: add normal header
    <header {...rest} className={twMerge("py-5", className)}>
      <div className="container mx-auto">
        {/* Add text to i18n */}
        <Button text="signOut" />
      </div>
      <main className="mt-5">{children}</main>
    </header>
  );
};
