import { UpdateProfileFormValues } from "@/components/forms/UpdateProfile";
import { SettingsTemplate } from "@/components/templates/Settings/SettingsTemplate";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay/LoadingOverlay";
import { Seo } from "@/components/ui/Seo";
import { useUpdateUserProfileMutation } from "@/hooks/mutations/useUpdateUserProfile";
import { useUserProfileQuery } from "@/hooks/queries/useUserProfile";
import { CustomPage } from "@/types/page";
import { UserRole } from "@/types/user";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback } from "react";

const SettingsPage: CustomPage = () => {
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
      {(isProfileLoading || isUpdatingLoading) && <LoadingOverlay />}

      <SettingsTemplate
        userData={profileData?.data}
        onUpdateData={profileUpdateHandler}
      />
    </>
  );
};

export default SettingsPage;

SettingsPage.roles = [UserRole.ADMIN, UserRole.SUB_ADMIN, UserRole.USER];

export const getServerSideProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};
