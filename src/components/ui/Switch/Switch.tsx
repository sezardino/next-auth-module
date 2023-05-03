import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

export interface SwitchProps extends ComponentPropsWithoutRef<"input"> {}

export const Switch: FC<SwitchProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <>
      <input {...rest} type="checkbox" className="sr-only peer" />
      <div
        className={twMerge(
          `
          w-11 h-6 bg-gray-200 dark:bg-gray-700 relative
          peer-focus-visible:outline-none peer-focus-visible:ring-4 peer-focus-visible:ring-blue-300 dark:peer-focus-visible:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
          peer-checked:bg-blue-600
          `,
          className
        )}
      />
    </>
  );
};
