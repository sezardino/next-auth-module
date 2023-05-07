import {
  ChangePasswordForm,
  ChangePasswordFormValues,
} from "@/components/forms/ChangePassword";
import { Button } from "@/components/ui/Button/Button";
import { Typography } from "@/components/ui/Typography/Typography";
import { ProjectUrl } from "@/const/project-url";
import { type ComponentPropsWithoutRef, type FC } from "react";
import { twMerge } from "tailwind-merge";

export interface ChangePasswordTemplateProps
  extends ComponentPropsWithoutRef<"div"> {
  onPasswordChange: (data: ChangePasswordFormValues) => Promise<void>;
}

export const ChangePasswordTemplate: FC<ChangePasswordTemplateProps> = (
  props
) => {
  const { onPasswordChange, className, ...rest } = props;

  return (
    <main {...rest} className={twMerge("container mx-auto", className)}>
      <header className="grid grid-cols-1 gap-4">
        <Typography as="h1" styling="h4" text="Update Profile Data" />
        <Button
          text="Back"
          size="sm"
          variant="alternative"
          href={ProjectUrl.Settings}
          className="-order-1 justify-self-start"
        />
      </header>
      <div className="mt-5 bg-slate-200 dark:bg-slate-800 rounded-3xl px-4 py-10">
        <ChangePasswordForm onFormSubmit={onPasswordChange} />
      </div>
    </main>
  );
};
