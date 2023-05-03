import { type ComponentPropsWithoutRef, type FC } from "react";
import { twMerge } from "tailwind-merge";

export interface DrawerProps extends ComponentPropsWithoutRef<"div"> {
  isOpen?: boolean;
  closeHandler?: () => void;
  position?: "left" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  labelId: string;
}

export const Drawer: FC<DrawerProps> = (props) => {
  const { labelId, isOpen, closeHandler, position, className, ...rest } = props;

  return (
    <div
      className={twMerge(
        "fixed top-0 left-0 right-0 bottom-0",
        isOpen ? "backdrop-filter backdrop-blur-sm bg-opacity-30" : "hidden"
      )}
      onClick={closeHandler}
    >
      <div
        {...rest}
        className={twMerge(
          "h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 translate-x-0",
          !isOpen && "-translate-x-full"
        )}
        tabIndex={-1}
        aria-labelledby={labelId}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};
