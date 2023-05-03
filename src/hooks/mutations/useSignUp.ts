import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiService } from "@/services/api";
import { AuthDto } from "@/types/dto";

import { CURRENT_USER_QUERY_KEY } from "../queries/useCurrentUser";

export const useSignUpMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (dto: AuthDto) => apiService.auth.signUp(dto),
    onSuccess: () => client.invalidateQueries([CURRENT_USER_QUERY_KEY]),
  });
};
