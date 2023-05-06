import { DefaultLayout } from "@/components/layouts/Default/DefaultLayout";
import { SubAdminsTemplate } from "@/components/templates/SubAdmins/SubAdmins";
import { User, UserRole } from "@/types/user";
import { useCallback, useState } from "react";

const data: User[] = [
  { id: "1", email: "e@mail.com", role: UserRole.USER },
  { id: "2", email: "e@mail.com", role: UserRole.USER },
  { id: "3", email: "e@mail.com", role: UserRole.USER },
  { id: "4", email: "e@mail.com", role: UserRole.USER },
];

const UsersPage = () => {
  const [page, setPage] = useState(0);

  const createSubAdminHandler = useCallback(async () => {}, []);

  return (
    <>
      <DefaultLayout>
        <SubAdminsTemplate
          data={data}
          page={page}
          onUserDelete={async () => undefined}
          onPageChange={setPage}
          totalItems={1000}
          onSubAdminCreate={createSubAdminHandler}
        />
      </DefaultLayout>
    </>
  );
};

export default UsersPage;
