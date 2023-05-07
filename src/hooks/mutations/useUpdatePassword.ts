import { ChangePasswordFormValues } from "@/components/forms/ChangePassword";
import { apiService } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export const useUpdatePasswordMutation = () =>
  useMutation({
    mutationFn: (dto: ChangePasswordFormValues) =>
      apiService.users.changePassword(dto),
  });
