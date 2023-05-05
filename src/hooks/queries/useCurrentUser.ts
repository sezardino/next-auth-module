import { useQuery } from "@tanstack/react-query";

import { apiService } from "@/services/api";

export const CURRENT_USER_QUERY_KEY = "current-user";
export const useCurrentUserQuery = () =>
  useQuery({
    queryKey: [CURRENT_USER_QUERY_KEY],
    queryFn: () => apiService.auth.getCurrentUserInfo().then((res) => res.data),
    retry: false,
    staleTime: Infinity,
  });
