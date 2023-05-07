import { UsersTemplate } from "@/components/templates/Users/UsersTemplate";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay/LoadingOverlay";
import { Seo } from "@/components/ui/Seo";
import { useDeleteUserMutation } from "@/hooks/mutations/useDeleteUser";
import { useUsersQuery } from "@/hooks/queries/useUsers";
import { CustomPage } from "@/types/page";
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
