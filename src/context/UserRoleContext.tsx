import { LoadingOverlay } from "@/components/ui/LoadingOverlay/LoadingOverlay";
import { useCurrentUserQuery } from "@/hooks/queries/useCurrentUser";
import { UserRole } from "@/types/user";
import { ReactNode, createContext, useContext, useMemo } from "react";

const UserRoleContext = createContext<{ role: UserRole | null }>({
  role: null,
});
export const useUserRoleContext = () => useContext(UserRoleContext);

export const UserRoleProvider = ({ children }: { children: ReactNode }) => {
  const { data: currentUserData, isLoading: isCurrentUserLoading } =
    useCurrentUserQuery();

  const value = useMemo<{ role: UserRole | null }>(
    () => ({ role: currentUserData?.role || null }),
    [currentUserData?.role]
  );

  return (
    <UserRoleContext.Provider value={value}>
      {isCurrentUserLoading && <LoadingOverlay />}
      {children}
    </UserRoleContext.Provider>
  );
};
