import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { Icon, IconNames } from "../Icon/Icon";

type ButtonVariant =
  | "primary"
  | "alternative"
  | "dark"
  | "light"
  | "green"
  | "red"
  | "yellow"
  | "link";

type ButtonSizes = "xs" | "sm" | "base" | "lg" | "xl";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSizes;
  isFullWidth?: boolean;
  href?: string;
  onClick?: () => void;
  icon?: IconNames;
}

export const Button = (props: ButtonProps) => {
  const {
    icon,
    isFullWidth = false,
    text,
    size = "base",
    type = "button",
    variant = "primary",
    href,
    className,
    ...rest
  } = props;

  const commonStyles =
    "font-medium rounded-lg focus-visible:ring-4 focus-visible:outline-none inline-block flex justify-center items-center";

  const styles: Record<ButtonVariant, string> = {
    primary:
      "text-white bg-blue-700 hover:bg-blue-800 focus-visible:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus-visible:ring-blue-800",
    alternative:
      "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus-visible:z-10 focus-visible:ring-gray-200 dark:focus-visible:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 focus-visible:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus-visible:ring-gray-600 dark:border-gray-700",
    light:
      "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus-visible:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus-visible:ring-gray-700",
    green:
      "text-white bg-green-700 hover:bg-green-800 focus-visible:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus-visible:ring-green-800",
    red: "text-white bg-red-700 hover:bg-red-800 focus-visible:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus-visible:ring-red-900",
    yellow:
      "text-white bg-yellow-400 hover:bg-yellow-500 focus-visible:ring-yellow-300 dark:focus-visible:ring-yellow-900",
    link: "inline font-medium text-blue-600 dark:text-blue-500 hover:underline",
  };

  const textSizes: Record<ButtonSizes, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-sm",
    lg: "text-base",
    xl: "text-base",
  };

  const sizes: Record<ButtonSizes, string> = {
    xs: "py-2 px-3",
    sm: "py-2 px-3",
    base: "py-2.5 px-5",
    lg: "py-3 px-5",
    xl: "py-3.5 px-6",
  };

  const buttonStyles = twMerge(
    commonStyles,
    styles[variant],
    textSizes[size],
    variant !== "link" && sizes[size],
    isFullWidth && "w-full text-center",
    className
  );

  const iconComponent = icon && (
    <Icon name={icon} size={24} className={text ? "mr-2" : ""} />
  );

  const inner = (
    <>
      {iconComponent}
      {text}
    </>
  );

  if (href && href.startsWith("http")) {
    return (
      <a
        {...(rest as any)}
        target="_blank"
        rel="noopener"
        href={href}
        className={buttonStyles}
      >
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <a {...(rest as any)} href={href} className={buttonStyles}>
        {inner}
      </a>
    );
  }

  return (
    <button {...(rest as any)} type={type} className={buttonStyles}>
      {inner}
    </button>
  );
};
