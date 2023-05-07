import { apiService } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const USER_PROFILE_QUERY_KEY = "user-profile";

export const useUserProfileQuery = () =>
  useQuery({
    queryKey: [USER_PROFILE_QUERY_KEY],
    queryFn: () => apiService.users.getCurrentUser(),
  });
