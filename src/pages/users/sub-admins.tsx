import { AuthFormValues } from "@/components/forms/Auth/AuthForm";
import { DefaultLayout } from "@/components/layouts/Default/DefaultLayout";
import { SubAdminsTemplate } from "@/components/templates/SubAdmins/SubAdmins";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay/LoadingOverlay";
import { useCreateSubAdminMutation } from "@/hooks/mutations/useCreateSubAdmin";
import { useDeleteUserMutation } from "@/hooks/mutations/useDeleteUser";
import { useUsersQuery } from "@/hooks/queries/useUsers";
import { UserRole } from "@/types/user";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback, useState } from "react";

const UsersPage = () => {
  const [page, setPage] = useState(0);

  const { data: usersData, isLoading: isUsersDataLoading } = useUsersQuery({
    page,
    role: UserRole.SUB_ADMIN,
  });

  const { mutateAsync: createSubAdmin, isLoading: isCreateLoading } =
    useCreateSubAdminMutation();

  const { mutateAsync: deleteUser, isLoading: isDeleteLoading } =
    useDeleteUserMutation();

  const createSubAdminHandler = useCallback(async (dto: AuthFormValues) => {
    await createSubAdmin(dto);
  }, []);

  const deleteUserHandler = useCallback(async (userId: string) => {
    await deleteUser(userId);
  }, []);

  return (
    <>
      <DefaultLayout>
        {(isUsersDataLoading || isCreateLoading || isDeleteLoading) && (
          <LoadingOverlay />
        )}

        <SubAdminsTemplate
          data={usersData?.data.data || []}
          page={page}
          onUserDelete={deleteUserHandler}
          onPageChange={setPage}
          totalItems={usersData?.data.meta.count || 0}
          onSubAdminCreate={createSubAdminHandler}
        />
      </DefaultLayout>
    </>
  );
};

export default UsersPage;

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  return {
    props: { ...(await serverSideTranslations(locale)) },
  };
};
