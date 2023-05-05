import { cookie } from "../libs/cookie";

const TOKEN_KEY = "token";

class TokenService {
  save(token: string, type: "session" | "cookie") {
    switch (type) {
      case "session":
        sessionStorage.setItem(TOKEN_KEY, token);
        break;
      case "cookie":
        cookie.setCookie(TOKEN_KEY, token);
        break;
      default:
        throw new Error("Invalid storage type");
    }
  }

  get() {
    return sessionStorage.getItem(TOKEN_KEY) || cookie.getCookie(TOKEN_KEY);
  }

  clear() {
    sessionStorage.removeItem(TOKEN_KEY);
    cookie.removeCookie(TOKEN_KEY);
  }
}

export const tokenService = new TokenService();
