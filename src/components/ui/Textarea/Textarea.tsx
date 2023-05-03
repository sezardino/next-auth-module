import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {}

export const Textarea: FC<TextareaProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <textarea
      {...rest}
      rows={4}
      className={twMerge(
        "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus-visible:ring-blue-500 focus-visible:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:ring-blue-500 dark:focus-visible:border-blue-500 resize-none",
        className
      )}
    />
  );
};
