import { apiService } from "@/services/api";
import { UserRole } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

interface Args {
  page?: number;
  role?: UserRole;
}

export const GET_USERS_QUERY_KEY = "users";

export const useUsersQuery = ({ page = 1, role = UserRole.USER }: Args) =>
  useQuery({
    queryKey: [GET_USERS_QUERY_KEY, page, role],
    queryFn: () => apiService.users.getAll(page, role),
  });
