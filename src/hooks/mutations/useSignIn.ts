import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { apiService } from "@/services/api";
import { AuthDto } from "@/types/dto";

import { ProjectUrl } from "@/const/project-url";
import { tokenService } from "@/services/token";
import { useRouter } from "next/router";
import { CURRENT_USER_QUERY_KEY } from "../queries/useCurrentUser";

export const useSignInMutation = (): UseMutationResult<
  { access_token: string },
  { message: string },
  AuthDto,
  { m: string }
> => {
  const client = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (dto: AuthDto) =>
      apiService.auth.signIn(dto).then((res) => res.data),
    onSuccess: (data, dto) => {
      client.clear();
      client.invalidateQueries([CURRENT_USER_QUERY_KEY]);

      tokenService.save(data.access_token, dto.remember ? "cookie" : "session");
      router.push(ProjectUrl.Home);
    },
  });
};
