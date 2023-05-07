import { ChangePasswordFormValues } from "@/components/forms/ChangePassword";
import { DefaultLayout } from "@/components/layouts/Default/DefaultLayout";
import { ChangePasswordTemplate } from "@/components/templates/ChangePassword/ChangePassword";
import { Seo } from "@/components/ui/Seo";
import { useCallback } from "react";

const SettingsPage = () => {
  const passwordChangeHandler = useCallback(
    async (data: ChangePasswordFormValues) => {},
    []
  );

  return (
    <>
      <Seo title="Change Password" />
      <DefaultLayout>
        <ChangePasswordTemplate onPasswordChange={passwordChangeHandler} />
      </DefaultLayout>
    </>
  );
};

export default SettingsPage;
