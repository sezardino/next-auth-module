import { UsersTemplate } from "@/components/templates/Users/UsersTemplate";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay/LoadingOverlay";
import { Seo } from "@/components/ui/Seo";
import { useDeleteUserMutation } from "@/hooks/mutations/useDeleteUser";
import { useUsersQuery } from "@/hooks/queries/useUsers";
import { CustomPage } from "@/types/page";
import { UserRole } from "@/types/user";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback, useState } from "react";

const UsersPage: CustomPage = () => {
  const [page, setPage] = useState(0);

  const { data: usersData, isLoading: isUsersDataLoading } = useUsersQuery({
    page,
  });

  const { mutateAsync: deleteUser, isLoading: isDeleteLoading } =
    useDeleteUserMutation();
  const deleteUserHandler = useCallback(async (userId: string) => {
    await deleteUser(userId);
  }, []);

  return (
    <>
      {(isUsersDataLoading || isDeleteLoading) && <LoadingOverlay />}
      <Seo title="Users" />

      <UsersTemplate
        data={usersData?.data.data || []}
        page={page}
        onUserDelete={deleteUserHandler}
        onPageChange={setPage}
        totalItems={usersData?.data.meta.count || 0}
      />
    </>
  );
};

export default UsersPage;

UsersPage.roles = [UserRole.ADMIN, UserRole.SUB_ADMIN];

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};
