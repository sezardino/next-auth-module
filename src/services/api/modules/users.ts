import { ChangePasswordFormValues } from "@/components/forms/ChangePassword";
import { UpdateProfileFormValues } from "@/components/forms/UpdateProfile";
import { User, UserRole, UserWithProfile } from "@/types/user";
import { AbstractService } from "./abstract";

interface DataWithPagination<T> {
  data: T[];
  meta: {
    totalPages: number;
    page: number;
    limit: number;
    count: number;
  };
}

export class UsersService extends AbstractService {
  async getAll(page = 1, role: UserRole) {
    return await this.fetch<DataWithPagination<User>>({
      url: "/users",
      method: "GET",
      params: { page, role },
    });
  }

  async createSubAdmin(email: string, password: string) {
    return await this.fetch<User>({
      url: "/users/sub-admin",
      method: "POST",
      data: { email, password },
    });
  }

  async delete(id: string) {
    return await this.fetch<{ success: boolean }>({
      url: `/users/${id}`,
      method: "DELETE",
    });
  }

  async update(data: UpdateProfileFormValues) {
    return await this.fetch<User>({
      url: "/users/profile",
      method: "PUT",
      data,
    });
  }

  async getCurrentUser() {
    return await this.fetch<UserWithProfile>({
      url: "/users/profile",
      method: "GET",
    });
  }

  async changePassword(dto: ChangePasswordFormValues) {
    return await this.fetch<User>({
      url: "/users/password",
      method: "PUT",
      data: dto,
    });
  }
}
