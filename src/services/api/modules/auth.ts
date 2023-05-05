import { AuthDto } from "@/types/dto";
import { CurrentUserInfo } from "@/types/user";
import { AbstractService } from "./abstract";

export class AuthService extends AbstractService {
  async signIn(data: AuthDto) {
    return this.fetch<{ access_token: string }, { error: string }>({
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
    return this.fetch<CurrentUserInfo>({
      url: "/auth",
      method: "GET",
    });
  }
}
