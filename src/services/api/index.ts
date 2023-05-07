import { AuthService } from "./modules/auth";
import { UsersService } from "./modules/users";

class ApiService {
  auth: AuthService;
  users: UsersService;

  constructor() {
    this.auth = new AuthService();
    this.users = new UsersService();
  }
}

export const apiService = new ApiService();
