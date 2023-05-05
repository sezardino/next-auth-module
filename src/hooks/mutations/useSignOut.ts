import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiService } from "@/services/api";

import { tokenService } from "@/services/token";
import { CURRENT_USER_QUERY_KEY } from "../queries/useCurrentUser";

export const useSignOutMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: () => apiService.auth.signOut(),
    onSuccess: () => {
      client.invalidateQueries([CURRENT_USER_QUERY_KEY]);
      client.clear();

      tokenService.clear();
    },
  });
};
