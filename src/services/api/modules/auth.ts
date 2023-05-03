import { AuthDto } from "@/types/dto";
import { AbstractService } from "./abstract";

export class AuthService extends AbstractService {
  async signIn(data: AuthDto) {
    return this.fetch({
      url: "/auth/sign-in",
      method: "POST",
      data,
    });
  }

  async signUp(data: AuthDto) {
    return this.fetch({
      url: "/auth/sign-up",
      method: "POST",
      data,
    });
  }

  async signOut() {
    return this.fetch({
      url: "/auth/sign-out",
      method: "POST",
    });
  }

  async refresh() {
    return this.fetch({
      url: "/auth/refresh",
      method: "POST",
    });
  }

  async getCurrentUserInfo() {
    return this.fetch({
      url: "/auth",
      method: "GET",
    });
  }
}
