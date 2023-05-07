import { apiService } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GET_USERS_QUERY_KEY } from "../queries/useUsers";

interface Args {
  email: string;
  password: string;
}

export const useCreateSubAdminMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (args: Args) =>
      apiService.users.createSubAdmin(args.email, args.password),
    onSuccess: () => {
      client.invalidateQueries([GET_USERS_QUERY_KEY]);
    },
  });
};
