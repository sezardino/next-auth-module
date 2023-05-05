import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { apiService } from "@/services/api";
import { AuthDto } from "@/types/dto";

import { tokenService } from "@/services/token";
import { CURRENT_USER_QUERY_KEY } from "../queries/useCurrentUser";

export const useSignInMutation = (): UseMutationResult<
  { access_token: string },
  { message: string },
  AuthDto,
  { m: string }
> => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (dto: AuthDto) =>
      apiService.auth.signIn(dto).then((res) => res.data),
    onSuccess: (data, dto) => {
      client.clear();
      client.invalidateQueries([CURRENT_USER_QUERY_KEY]);

      tokenService.save(data.access_token, dto.remember ? "cookie" : "session");
    },
  });
};
