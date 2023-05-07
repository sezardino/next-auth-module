import { UpdateProfileFormValues } from "@/components/forms/UpdateProfile";
import { DefaultLayout } from "@/components/layouts/Default/DefaultLayout";
import { SettingsTemplate } from "@/components/templates/Settings/SettingsTemplate";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay/LoadingOverlay";
import { Seo } from "@/components/ui/Seo";
import { useUpdateUserProfileMutation } from "@/hooks/mutations/useUpdateUserProfile";
import { useUserProfileQuery } from "@/hooks/queries/useUserProfile";
import { useCallback } from "react";

const SettingsPage = () => {
  const { data: profileData, isLoading: isProfileLoading } =
    useUserProfileQuery();

  const { mutateAsync: updateProfile, isLoading: isUpdatingLoading } =
    useUpdateUserProfileMutation();

  const profileUpdateHandler = useCallback(
    async (dto: UpdateProfileFormValues) => {
      await updateProfile(dto);
    },
    []
  );

  return (
    <>
      <Seo title="Settings" />
      <DefaultLayout>
        {(isProfileLoading || isUpdatingLoading) && <LoadingOverlay />}

        <SettingsTemplate
          userData={profileData?.data}
          onUpdateData={profileUpdateHandler}
        />
      </DefaultLayout>
    </>
  );
};

export default SettingsPage;
