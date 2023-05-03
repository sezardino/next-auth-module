import { type ComponentPropsWithoutRef, type FC } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../Typography/Typography";

type SelectValue = string | number;

export interface SelectOption {
  value: SelectValue;
  label: string;
}

export interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  options: SelectOption[];
  currentValue?: SelectValue | null;
  placeholder?: string;
}

export const Select: FC<SelectProps> = (props) => {
  const { currentValue, options, placeholder, className, ...rest } = props;

  return (
    <select
      {...rest}
      className={twMerge(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:ring-blue-500 focus-visible:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:ring-blue-500 dark:focus-visible:border-blue-500",
        className
      )}
    >
      <option selected={!currentValue}>
        <Typography as="span" text={placeholder} />
      </option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          selected={currentValue === option.value}
        >
          <Typography as="span" text={option.label} />
        </option>
      ))}
    </select>
  );
};
