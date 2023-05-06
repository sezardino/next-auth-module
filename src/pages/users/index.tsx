import { DefaultLayout } from "@/components/layouts/Default/DefaultLayout";
import { UsersTemplate } from "@/components/templates/Users/UsersTemplate";
import { User, UserRole } from "@/types/user";
import { useState } from "react";

const data: User[] = [
  { id: "1", email: "e@mail.com", role: UserRole.USER },
  { id: "2", email: "e@mail.com", role: UserRole.USER },
  { id: "3", email: "e@mail.com", role: UserRole.USER },
  { id: "4", email: "e@mail.com", role: UserRole.USER },
];

const UsersPage = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      <DefaultLayout>
        <UsersTemplate
          data={data}
          page={page}
          onUserDelete={async () => undefined}
          onPageChange={setPage}
          totalItems={1000}
        />
      </DefaultLayout>
    </>
  );
};

export default UsersPage;
