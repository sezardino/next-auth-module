import { useCurrentUserQuery } from "@/hooks/queries/useCurrentUser";
import { UserRole } from "@/types/user";
import { ReactNode, createContext, useContext, useMemo } from "react";

const UserRoleContext = createContext<{
  role: UserRole | null;
  isLoading: boolean;
}>({
  role: null,
  isLoading: true,
});
export const useUserRoleContext = () => useContext(UserRoleContext);

export const UserRoleProvider = ({ children }: { children: ReactNode }) => {
  const { data: currentUserData, isLoading: isCurrentUserLoading } =
    useCurrentUserQuery();

  const value = useMemo(
    () => ({
      role: currentUserData?.data.role || null,
      isLoading: isCurrentUserLoading,
    }),
    [currentUserData?.data.role, isCurrentUserLoading]
  );

  return (
    <UserRoleContext.Provider value={value}>
      {children}
    </UserRoleContext.Provider>
  );
};
