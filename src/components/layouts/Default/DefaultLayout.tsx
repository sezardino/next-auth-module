import { Button } from "@/components/ui/Button/Button";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay/LoadingOverlay";
import { ProjectUrl } from "@/const/project-url";
import { useSignOutMutation } from "@/hooks/mutations/useSignOut";
import { useCurrentUserQuery } from "@/hooks/queries/useCurrentUser";
import Link from "next/link";
import { type ComponentPropsWithoutRef, type FC } from "react";

import { twMerge } from "tailwind-merge";

export interface DefaultLayoutProps extends ComponentPropsWithoutRef<"div"> {}

export const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
  const { className, children, ...rest } = props;
  const { data: currentUser, isLoading: isCurrentUserLoading } =
    useCurrentUserQuery();
  const { mutateAsync: signOut } = useSignOutMutation();

  return (
    <>
      {isCurrentUserLoading && <LoadingOverlay />}
      {/* // TODO: add normal header */}
      <header {...rest} className={twMerge("py-5", className)}>
        <div className="container mx-auto flex flex-wrap gap-4 justify-between items-center">
          <Link href={ProjectUrl.Home}>Logo</Link>
          {/* Add text to i18n */}

          {currentUser && <Button text="Sign Out" onClick={signOut} />}
          {!currentUser && (
            <div className="inline-flex flex-wrap gap-5">
              <Button text="Sign In" href={ProjectUrl.SignIn} />
              <Button text="Sign Up" href={ProjectUrl.SignUp} />
            </div>
          )}
        </div>
        <main className="mt-5">{children}</main>
      </header>
    </>
  );
};
