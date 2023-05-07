import { User, UserRole } from "@/types/user";
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
}
