import { UpdateProfileFormValues } from "@/components/forms/UpdateProfile";
import { apiService } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export const useUpdateUserProfileMutation = () =>
  useMutation({
    mutationFn: (dto: UpdateProfileFormValues) => apiService.users.update(dto),
  });
