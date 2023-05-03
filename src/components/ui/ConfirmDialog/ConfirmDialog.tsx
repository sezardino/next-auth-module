import { FC, useId } from "react";
import { twMerge } from "tailwind-merge";
import { Button, ButtonProps } from "../Button/Button";
import { Dialog, DialogProps } from "../Dialog/Dialog";
import { Typography } from "../Typography/Typography";

export interface ConfirmDialogProps
  extends Omit<
    DialogProps,
    | "ariaLabelId"
    | "ariaDescriptionId"
    | "xPosition"
    | "yPosition"
    | "focusOnOpen"
  > {
  title: string;
  info?: string;
  triggers: ButtonProps[];
}

export const ConfirmDialog: FC<ConfirmDialogProps> = (props) => {
  const { title, info, triggers, className, ...rest } = props;
  const modalId = useId();
  const titleId = modalId + "-title";
  const descriptionId = modalId + "-description";

  const defaultHandler = (cb?: () => void) => {
    props.closeHandler();

    if (cb) cb();
  };

  return (
    <Dialog
      {...rest}
      ariaLabelId={titleId}
      ariaDescriptionId={descriptionId}
      id={modalId}
      className={twMerge(className)}
    >
      <div className="text-center grid gap-6">
        <Typography id={titleId} as="h2" styling="h2" text={title} />
        {info && (
          <Typography as="p" id={descriptionId} styling="leading" text={info} />
        )}
        <div className="flex flex-wrap gap-7 justify-center">
          {triggers?.map((trigger, index) => (
            <Button
              key={index}
              {...trigger}
              onClick={() => defaultHandler(trigger.onClick)}
            />
          ))}
        </div>
      </div>
    </Dialog>
  );
};
