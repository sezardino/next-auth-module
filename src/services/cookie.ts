import Cookie from "js-cookie";

class CookieService {
  setCookie(name: string, value: string) {
    Cookie.set(name, value);
  }

  getCookie(name: string) {
    return Cookie.get(name);
  }

  removeCookie(name: string) {
    Cookie.remove(name);
  }
}

export const cookieService = new CookieService();
