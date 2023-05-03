import { AuthForm, AuthFormValues } from "@/components/forms/Auth/AuthForm";
import { Typography } from "@/components/ui/Typography/Typography";
import { useTranslation } from "next-i18next";
import { type ComponentPropsWithoutRef, type FC } from "react";

export interface AuthTemplateProps extends ComponentPropsWithoutRef<"div"> {
  type: "sign-in" | "sign-up";
  onAuthFormSubmit: (values: AuthFormValues) => Promise<void>;
  errorMessage?: string;
}

export const AuthTemplate: FC<AuthTemplateProps> = (props) => {
  const { type, errorMessage, onAuthFormSubmit, className, ...rest } = props;
  const { t } = useTranslation("auth-page");

  return (
    <div {...rest} className="w-full h-full flex justify-center items-center">
      <section
        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md
        xl:p-6 p-6 sm:p-8
       dark:bg-gray-800 dark:border-gray-700
        space-y-4 md:space-y-6
      "
      >
        <Typography as="h1" styling="h4" text={t(`${type}.title`)} />

        <AuthForm type={type} onFormSubmit={onAuthFormSubmit} />

        {errorMessage && (
          <Typography
            as="small"
            variant="red"
            text={errorMessage}
            className="block mt-2 text-center"
          />
        )}
      </section>
    </div>
  );
};
