import { UserWithProfile } from "@/types/user";
import { Form, FormikProvider, useFormik } from "formik";
import { useEffect, type ComponentPropsWithoutRef, type FC } from "react";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FormikFormField } from "../adapters/FormikFormField";
import { Button } from "../ui/Button/Button";

export interface UpdateProfileFormValues {
  name: string;
  surname: string;
  address: string;
}

export interface UpdateProfileFormProps
  extends ComponentPropsWithoutRef<"form"> {
  initialData?: UserWithProfile;
  onFormSubmit: (data: UpdateProfileFormValues) => Promise<void>;
}

export const UpdateProfileForm: FC<UpdateProfileFormProps> = (props) => {
  const { onFormSubmit, initialData, className, ...rest } = props;

  const form = useFormik<UpdateProfileFormValues>({
    initialValues: {
      address: "",
      name: "",
      surname: "",
    },
    validationSchema: toFormikValidationSchema(
      z.object({
        address: z.string().min(1).max(255),
        name: z.string().min(1).max(255),
        surname: z.string().min(1).max(255),
      })
    ),
    onSubmit: onFormSubmit,
  });

  useEffect(() => {
    if (initialData) {
      form.setValues({
        address: initialData.address,
        name: initialData.name,
        surname: initialData.surname,
      });
    }
  }, [initialData]);

  return (
    <FormikProvider value={form}>
      <Form {...rest} className={twMerge(className, "grid gap-8")}>
        <FormikFormField
          type="input"
          name="name"
          label="Name"
          placeholder="Jardani"
        />
        <FormikFormField
          type="input"
          name="surname"
          label="Surname"
          placeholder="Jovonovich"
        />
        <FormikFormField
          type="input"
          name="address"
          label="Address"
          placeholder="h. Continental, 1"
        />

        <Button type="submit" text="Update" className="ml-auto" />
      </Form>
    </FormikProvider>
  );
};
