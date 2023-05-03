import { FC, useId } from "react";
import { twMerge } from "tailwind-merge";
import { Checkbox, CheckboxProps } from "../Checkbox/Checkbox";
import { Input, InputProps } from "../Input/Input";
import { Radio, RadioProps } from "../Radio/Radio";
import { Select, SelectProps } from "../Select/Select";
import { Switch, SwitchProps } from "../Switch/Switch";
import { Textarea, TextareaProps } from "../Textarea/Textarea";
import { Typography } from "../Typography/Typography";

interface SwitchFieldProps extends SwitchProps {
  type: "switch";
  labelPlacement?: "left" | "right";
}

interface CheckboxFieldProps extends CheckboxProps {
  type: "checkbox";
  labelPlacement?: "left" | "right";
}

interface RadioFieldProps extends RadioProps {
  type: "radio";
  labelPlacement?: "left" | "right";
}

interface SelectFieldProps extends SelectProps {
  type: "select";
  labelPlacement?: "left" | "right";
}

interface InputFieldProps extends InputProps {
  type: "input";
}

interface TextareaFieldProps extends TextareaProps {
  type: "textarea";
}

export interface FormFieldCommon {
  label: string;
  isLabelHidden?: boolean;
  error?: string;
  description?: string;
}

export type FormFieldProps = FormFieldCommon &
  (
    | SwitchFieldProps
    | InputFieldProps
    | TextareaFieldProps
    | CheckboxFieldProps
    | RadioFieldProps
    | SelectFieldProps
  );

export const FormField: FC<FormFieldProps> = (props) => {
  const {
    type = "input",
    isLabelHidden = false,
    description,
    label,
    error,
    className,
    ...rest
  } = props;
  const id = useId();
  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;

  const hasError = Boolean(error);

  const commonProps = {
    "aria-describedby": descriptionId,
    "aria-invalid": !!error,
    "aria-errormessage": error && errorId,
  };

  const checkStyles = "inline-flex gap-3 items-center";

  const field =
    type === "textarea" ? (
      <Textarea
        {...(rest as TextareaProps)}
        {...commonProps}
        className="mt-2"
      />
    ) : type === "input" ? (
      <Input {...(rest as InputProps)} {...commonProps} className="mt-2" />
    ) : type === "switch" ? (
      <Switch {...(rest as SwitchProps)} {...commonProps} />
    ) : type === "checkbox" ? (
      <Checkbox {...(rest as CheckboxProps)} {...commonProps} />
    ) : type === "radio" ? (
      <Radio {...(rest as RadioProps)} {...commonProps} />
    ) : type === "select" ? (
      <Select {...(rest as SelectProps)} {...commonProps} className="mt-2" />
    ) : null;

  return (
    <div className={twMerge("relative", className)}>
      <Typography
        as="label"
        variant={hasError ? "red" : "default"}
        className={twMerge(
          "block cursor-pointer select-none",
          rest.disabled && "cursor-default",
          (type === "switch" || type === "checkbox" || type === "radio") &&
            checkStyles
        )}
      >
        <span
          className={twMerge(
            isLabelHidden ? "sr-only" : "",
            "labelPlacement" in rest &&
              rest.labelPlacement === "right" &&
              "order-1"
          )}
        >
          {label}
        </span>
        {field}
      </Typography>

      {description && (
        <Typography
          as="p"
          styling="capture"
          text={description}
          id={descriptionId}
          className="mt-2"
        />
      )}

      {error && (
        <Typography
          id={errorId}
          as="p"
          text={error}
          styling="capture"
          variant="red"
          className="mt-1"
        >
          <span className="font-medium">{error}</span>
        </Typography>
      )}
    </div>
  );
};
