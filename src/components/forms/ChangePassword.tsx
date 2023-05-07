import { Form, FormikProvider, useFormik } from "formik";
import { type ComponentPropsWithoutRef, type FC } from "react";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FormikFormField } from "../adapters/FormikFormField";
import { Button } from "../ui/Button/Button";

export interface ChangePasswordFormValues {
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordFormProps
  extends ComponentPropsWithoutRef<"form"> {
  onFormSubmit: (data: ChangePasswordFormValues) => Promise<void>;
}

export const ChangePasswordForm: FC<ChangePasswordFormProps> = (props) => {
  const { onFormSubmit, className, ...rest } = props;

  const form = useFormik<ChangePasswordFormValues>({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: toFormikValidationSchema(
      z.object({
        oldPassword: z.string().min(1).max(255),
        newPassword: z.string().min(1).max(255),
      })
    ),
    onSubmit: onFormSubmit,
  });

  return (
    <FormikProvider value={form}>
      <Form {...rest} className={twMerge(className, "grid gap-8")}>
        <FormikFormField
          type="input"
          name="oldPassword"
          label="Old Password"
          placeholder="password1"
        />
        <FormikFormField
          type="input"
          name="newPassword"
          label="New Password"
          placeholder="password2"
        />

        <Button type="submit" text="Update" className="ml-auto" />
      </Form>
    </FormikProvider>
  );
};
