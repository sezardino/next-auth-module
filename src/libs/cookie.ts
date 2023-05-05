import cookieLib from "js-cookie";

class Cookie {
  setCookie(name: string, value: string) {
    cookieLib.set(name, value);
  }

  getCookie(name: string) {
    return cookieLib.get(name);
  }

  removeCookie(name: string) {
    cookieLib.remove(name);
  }
}

export const cookie = new Cookie();
