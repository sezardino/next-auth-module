import { apiService } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_USERS_QUERY_KEY } from "../queries/useUsers";

export const useDeleteUserMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (userId: string) => apiService.users.delete(userId),
    onSuccess: () => {
      client.invalidateQueries([GET_USERS_QUERY_KEY]);
    },
  });
};
