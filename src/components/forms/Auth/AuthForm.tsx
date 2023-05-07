import { Form, FormikProvider, useFormik } from "formik";
import { type ComponentPropsWithoutRef, type FC } from "react";

import { useTranslation } from "next-i18next";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { FormikFormField } from "@/components/adapters/FormikFormField";
import { Button } from "@/components/ui/Button/Button";
import { Typography } from "@/components/ui/Typography/Typography";
import { ProjectUrl } from "@/const/project-url";

export interface AuthFormValues {
  email: string;
  password: string;
  remember: boolean;
  repeat?: string;
}

export interface AuthFormProps extends ComponentPropsWithoutRef<"form"> {
  type: "sign-up" | "sign-in" | "clean";
  onFormSubmit: (values: AuthFormValues) => void;
}

export const AuthForm: FC<AuthFormProps> = (props) => {
  const { type, onFormSubmit, className, ...rest } = props;
  const { t } = useTranslation("auth-form");

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeat: "",
      remember: false,
    },
    validationSchema: toFormikValidationSchema(
      z
        .object({
          email: z
            .string({ required_error: t("fields.email.required") })
            .email(t("fields.email.invalid")),
          password: z
            .string({ required_error: t("fields.password.required") })
            .min(8, t("fields.password.to-short")),
          repeat:
            type === "sign-up"
              ? z
                  .string({ required_error: t("fields.repeat.required") })
                  .min(8, t("fields.repeat.to-short"))
              : z //
                  .string()
                  .optional(),
        })
        .refine(
          (data) => (type !== "sign-up" ? true : data.password === data.repeat),
          { path: ["repeat"], message: t("fields.repeat.not-match") }
        )
    ),
    onSubmit: onFormSubmit,
  });

  return (
    <FormikProvider value={form}>
      <Form
        {...rest}
        className={twMerge("space-y-4 md:space-y-6 mt-2", className)}
      >
        <FormikFormField
          name="email"
          type="input"
          label={t(`fields.email.label`)}
          placeholder={t(`fields.email.placeholder`)}
        />
        <FormikFormField
          type="input"
          name="password"
          label={t(`fields.password.label`)}
          placeholder={t(`fields.password.placeholder`)}
        />

        {type === "sign-up" && (
          <FormikFormField
            type="input"
            name="repeat"
            label={t(`fields.repeat.label`)}
            placeholder={t(`fields.repeat.placeholder`)}
          />
        )}

        {type !== "clean" && (
          <FormikFormField
            name="remember"
            type="checkbox"
            labelPlacement="right"
            label={t(`fields.remember-me.label`)}
            className="flex gap-2 flex-wrap items-center justify-between"
          />
        )}
        <Button
          type="submit"
          size="sm"
          isFullWidth
          text={t(`${type}.trigger`)}
        />

        {type !== "clean" && (
          <Typography as="p" styling="capture">
            {t(`${type}.cta.label`)}
            <Button
              variant="link"
              size="xs"
              href={type === "sign-in" ? ProjectUrl.SignUp : ProjectUrl.SignIn}
              text={t(`${type}.cta.link`)}
              className="ml-1"
            />
          </Typography>
        )}
      </Form>
    </FormikProvider>
  );
};
