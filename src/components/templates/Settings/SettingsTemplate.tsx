import {
  UpdateProfileForm,
  UpdateProfileFormValues,
} from "@/components/forms/UpdateProfile";
import { Button } from "@/components/ui/Button/Button";
import { Typography } from "@/components/ui/Typography/Typography";
import { ProjectUrl } from "@/const/project-url";
import { UserWithProfile } from "@/types/user";
import { type ComponentPropsWithoutRef, type FC } from "react";
import { twMerge } from "tailwind-merge";

export interface SettingsTemplateProps extends ComponentPropsWithoutRef<"div"> {
  userData?: UserWithProfile;
  onUpdateData: (data: UpdateProfileFormValues) => Promise<void>;
}

export const SettingsTemplate: FC<SettingsTemplateProps> = (props) => {
  const { userData, onUpdateData, className, ...rest } = props;

  return (
    <main {...rest} className={twMerge("container mx-auto", className)}>
      <header className="flex justify-between items-center gap-4 flex-wrap">
        <Typography as="h1" styling="h4" text="Update Profile Data" />
        <Button
          text="Change Password"
          variant="light"
          href={ProjectUrl.ChangePassword}
        />
      </header>
      <div className="mt-5 bg-slate-200 dark:bg-slate-800 rounded-3xl px-4 py-10">
        <UpdateProfileForm
          initialData={userData}
          onFormSubmit={onUpdateData}
          className="max-w-4xl mx-auto"
        />
      </div>
    </main>
  );
};
