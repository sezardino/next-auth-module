import { useField } from "formik";
import { type FC } from "react";
import { FormField, FormFieldProps } from "../ui/FormField/FormField";

export type FormikFormFieldProps = FormFieldProps & {
  name: string;
};

export const FormikFormField: FC<FormikFormFieldProps> = (props) => {
  const { name, ...rest } = props;

  const [field, meta] = useField(name);

  return (
    <FormField
      {...rest}
      {...field}
      error={meta.touched && meta.error ? meta.error : undefined}
    />
  );
};
