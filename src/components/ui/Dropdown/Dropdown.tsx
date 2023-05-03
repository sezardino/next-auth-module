import { useFocusTrap } from "@/hooks/useFocusTrap";
import {
  ComponentPropsWithoutRef,
  FC,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography/Typography";
import { DropdownContext } from "./Dropdown.context";

type DropdownPosition = "top" | "right" | "bottom" | "left";

export interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  type: "default" | "dots";
  position?: DropdownPosition;
  label: string;
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const {
    type = "default",
    label,
    position = "bottom",
    className,
    children,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);
  const triggerId = useId();

  useFocusTrap(innerRef, isOpen, true);

  const positions: Record<DropdownPosition, string> = {
    bottom: "top-full left-1/2 -translate-x-1/2 translate-y-3",
    left: "right-full top-1/2 -translate-x-3 -translate-y-1/2",
    right: "left-full top-1/2 translate-x-3 -translate-y-1/2",
    top: "bottom-full left-1/2 -translate-x-1/2 -translate-y-3",
  };

  useEffect(() => {
    const keydownHandler = (evt: KeyboardEvent) => {
      if (evt.key !== "Escape") return;

      setIsOpen((value) => {
        if (!value) return value;

        return false;
      });
    };

    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  const context = useMemo(() => ({ closeHandler: () => setIsOpen(false) }), []);

  return (
    <div {...rest} className={twMerge("relative inline-flex", className)}>
      <button
        id={triggerId}
        type="button"
        className="inline-flex gap-2 items-center p-2 text-sm font-medium text-center text-gray-900
        rounded-lg hover:bg-gray-100 focus-visible:ring-4 focus-visible:outline-none dark:text-white focus-visible:ring-gray-50 dark:bg-gray-800 bg-white
        dark:hover:bg-gray-700 dark:focus-visible:ring-gray-600"
        aria-label={type === "dots" ? label : undefined}
        onClick={() => setIsOpen((value) => !value)}
      >
        {type === "default" && <Typography as="span" text={label} />}

        <Icon
          name={type === "default" ? "MdOutlineChevronLeft" : "MdMoreHoriz"}
          className={twMerge(
            "transform",
            isOpen && type === "default" ? "rotate-90" : "-rotate-90"
          )}
        />
      </button>
      {isOpen && (
        <div
          ref={innerRef}
          aria-labelledby={triggerId}
          className={twMerge(
            "absolute grid grid-cols-1 z-30 w-44 dark:bg-gray-800 bg-white rounded",
            positions[position]
          )}
        >
          <DropdownContext.Provider value={context}>
            {children}
          </DropdownContext.Provider>
        </div>
      )}
    </div>
  );
};
