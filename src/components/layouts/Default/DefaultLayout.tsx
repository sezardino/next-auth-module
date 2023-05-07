import { Button } from "@/components/ui/Button/Button";
import { ProjectUrl } from "@/const/project-url";
import { useUserRoleContext } from "@/context/UserRoleContext";
import { useSignOutMutation } from "@/hooks/mutations/useSignOut";
import Link from "next/link";
import { PropsWithChildren, type FC } from "react";

import { twMerge } from "tailwind-merge";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  const { role } = useUserRoleContext();
  const { mutateAsync: signOut } = useSignOutMutation();

  return (
    <>
      {/* // TODO: add normal header */}
      <header className={twMerge("py-5")}>
        <div className="container mx-auto flex flex-wrap gap-4 justify-between items-center">
          <Link href={ProjectUrl.Home}>Logo</Link>
          {/* Add text to i18n */}

          {role && <Button text="Sign Out" onClick={signOut} />}
          {!role && (
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
