import {
  ComponentPropsWithoutRef,
  FC,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "../Icon/Icon";

import { useFocusTrap } from "@/hooks/useFocusTrap";
import { Typography } from "../Typography/Typography";
import { DialogContext } from "./Dialog.context";

type ModalSizes = "sm" | "default" | "lg" | "xl";
type ModalXPositions = "left" | "center" | "right";
type ModalYPositions = "top" | "center" | "bottom";

export interface DialogProps extends ComponentPropsWithoutRef<"div"> {
  ariaLabelId: string;
  ariaDescriptionId?: string;
  xPosition?: ModalXPositions;
  yPosition?: ModalYPositions;
  sizing?: ModalSizes;
  isOpen: boolean;
  closeHandler: () => void;
  focusOnOpen?: boolean;
}

export const Dialog: FC<DialogProps> = (props) => {
  const {
    sizing = "default",
    xPosition = "center",
    yPosition = "center",
    ariaDescriptionId,
    ariaLabelId,
    closeHandler,
    focusOnOpen = false,
    isOpen = false,
    className,
    children,
    ...rest
  } = props;
  const windowRef = useRef<HTMLDivElement | null>(null);

  useFocusTrap(windowRef, isOpen || focusOnOpen, focusOnOpen);

  const sizes: Record<ModalSizes, string> = {
    sm: "max-w-md",
    default: "max-w-lg",
    lg: "max-w-4xl",
    xl: "max-w-7xl",
  };

  const xPositions: Record<ModalXPositions, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const yPositions: Record<ModalYPositions, string> = {
    center: "items-center",
    top: "items-start",
    bottom: "items-end",
  };

  // Add overflow hidden to body when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const keydownHandler = (evt: KeyboardEvent) => {
      if (evt.key !== "Escape" || !isOpen) return;

      closeHandler();
    };

    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, [isOpen]);

  const context = useMemo(() => ({ closeHandler }), []); // eslint-disable-line

  if (!isOpen) return null;

  return (
    <DialogContext.Provider value={context}>
      <div
        {...rest}
        ref={windowRef}
        className={twMerge(
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 md:inset-0 h-modal md:h-full flex bg-black bg-opacity-80",
          xPositions[xPosition],
          yPositions[yPosition],
          isOpen ? "" : "hidden"
        )}
        aria-modal="true"
        role="dialog"
        aria-labelledby={ariaLabelId}
        aria-describedby={ariaDescriptionId}
        onPointerDown={closeHandler}
      >
        <div
          className={twMerge(
            "relative w-full h-full md:h-auto bg-white rounded-lg shadow dark:bg-gray-700 p-6",
            sizes[sizing],
            className
          )}
          onPointerDown={(evt) => evt.stopPropagation()}
        >
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            onClick={closeHandler}
          >
            <Icon name="MdClose" size={20} />
            <Typography as="span" isHidden>
              Close modal
            </Typography>
          </button>
          {children}
        </div>
      </div>
    </DialogContext.Provider>
  );
};
