import { AuthService } from "./modules/auth";

class ApiService {
  auth: AuthService;

  constructor() {
    this.auth = new AuthService();
  }
}

export const apiService = new ApiService();
