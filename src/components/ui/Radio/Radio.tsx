import { type ComponentPropsWithoutRef, type FC } from "react";
import { twMerge } from "tailwind-merge";

export interface RadioProps extends ComponentPropsWithoutRef<"input"> {}

export const Radio: FC<RadioProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <input
      {...rest}
      type="radio"
      className={twMerge(
        "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-600 dark:ring-offset-gray-800 focus-visible:ring-2 dark:bg-gray-700 dark:border-gray-600",
        className
      )}
    />
  );
};
