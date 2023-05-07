import { ChangePasswordFormValues } from "@/components/forms/ChangePassword";
import { ChangePasswordTemplate } from "@/components/templates/ChangePassword/ChangePassword";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay/LoadingOverlay";
import { Seo } from "@/components/ui/Seo";
import { useUpdatePasswordMutation } from "@/hooks/mutations/useUpdatePassword";
import { CustomPage } from "@/types/page";
import { useCallback } from "react";

const SettingsPage: CustomPage = () => {
  const { mutateAsync: updatePassword, isLoading: isUpdatePasswordLoading } =
    useUpdatePasswordMutation();

  const passwordChangeHandler = useCallback(
    async (data: ChangePasswordFormValues) => {
      await updatePassword(data);
    },
    []
  );

  return (
    <>
      {isUpdatePasswordLoading && <LoadingOverlay />}
      <Seo title="Change Password" />
      <ChangePasswordTemplate onPasswordChange={passwordChangeHandler} />
    </>
  );
};

export default SettingsPage;
