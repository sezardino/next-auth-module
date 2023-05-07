import { AuthFormValues } from "@/components/forms/Auth/AuthForm";
import { CreateNewUserModal } from "@/components/modules/user/CreateNewUserModal/CreateNewUserModal";
import { Button } from "@/components/ui/Button/Button";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog/ConfirmDialog";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import { Table, TableColumn } from "@/components/ui/Table/Table";
import { Typography } from "@/components/ui/Typography/Typography";
import { User } from "@/types/user";
import {
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type FC,
} from "react";

import { twMerge } from "tailwind-merge";

export interface SubAdminsTemplateProps
  extends ComponentPropsWithoutRef<"div"> {
  data: User[];
  onUserDelete: (id: string) => Promise<void>;
  page: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  onSubAdminCreate: (data: any) => Promise<void>;
}

export const SubAdminsTemplate: FC<SubAdminsTemplateProps> = (props) => {
  const {
    onSubAdminCreate,
    totalItems,
    page,
    onPageChange,
    onUserDelete,
    data,
    className,
    ...rest
  } = props;
  const [userToDelete, setUserToDelete] = useState<string | null>(null);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const openDeleteModal = (id: string) => setUserToDelete(id);
  const closeDeleteModal = () => setUserToDelete(null);

  const userDeleteHandler = async () => {
    if (!userToDelete) return;
    await onUserDelete(userToDelete);
    closeDeleteModal();
  };

  const subAdminCreateHandler = async (dto: AuthFormValues) => {
    await onSubAdminCreate(dto);
    setIsCreateModalOpen(false);
  };

  const columns = useMemo<TableColumn<User>[]>(
    () => [
      {
        accessor: "email",
        head: () => "Email",
        cell: (data) => <p>{data.email}</p>,
      },
      {
        accessor: "role",
        head: () => <p className="text-center">Role</p>,
        cell: (data) => <p className="text-center">{data.role}</p>,
      },
      {
        accessor: "_",
        head: () => <p className="text-right">Actions</p>,
        cell: (row) => (
          <Button
            variant="red"
            size="xs"
            text="Delete"
            className="ml-auto"
            onClick={() => openDeleteModal(row.id)}
          />
        ),
      },
    ],
    []
  );

  return (
    <>
      <main {...rest} className={twMerge("container mx-auto", className)}>
        <header className="flex justify-between items-center flex-wrap gap-3">
          <div className="grid gap-3">
            <Typography as="h1" styling="h1" text="Sub admins" />
            <Typography as="p" text="for admins" />
          </div>
          <Button
            variant="green"
            size="sm"
            text="Create Sub Admin"
            onClick={() => setIsCreateModalOpen(true)}
          />
        </header>
        <Table columns={columns} data={data} className="mt-5" />

        <Pagination
          currentPage={page}
          onPageChange={onPageChange}
          totalItems={totalItems}
          className="mt-5 mx-auto"
        />
      </main>
      <ConfirmDialog
        isOpen={!!userToDelete}
        closeHandler={closeDeleteModal}
        title="Delete User"
        info="Are you sure you want to delete this user?"
        triggers={[
          {
            variant: "red",
            text: "Delete",
            onClick: userDeleteHandler,
          },
          {
            text: "Cancel",
            onClick: closeDeleteModal,
          },
        ]}
      />
      <CreateNewUserModal
        title="Create New User"
        isOpen={isCreateModalOpen}
        closeHandler={() => setIsCreateModalOpen(false)}
        onFormSubmit={subAdminCreateHandler}
      />
    </>
  );
};
