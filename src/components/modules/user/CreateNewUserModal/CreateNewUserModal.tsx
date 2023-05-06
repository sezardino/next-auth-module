import { AuthForm } from "@/components/forms/Auth/AuthForm";
import { Dialog, DialogProps } from "@/components/ui/Dialog/Dialog";
import { Typography } from "@/components/ui/Typography/Typography";
import { useId, type FC } from "react";

export interface CreateNewUserModalProps
  extends Omit<DialogProps, "ariaLabelId"> {
  onFormSubmit: (data: any) => Promise<void>;
  title: string;
}

export const CreateNewUserModal: FC<CreateNewUserModalProps> = (props) => {
  const { title, onFormSubmit, ...rest } = props;
  const titleId = useId();

  return (
    <Dialog {...rest} ariaLabelId={titleId}>
      <Typography as="h2" id={titleId} text={title} />

      <AuthForm type="sign-up" onFormSubmit={onFormSubmit} />
    </Dialog>
  );
};
