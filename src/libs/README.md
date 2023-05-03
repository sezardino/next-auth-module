# Libs

## For used libraries, like: tanstack-query, axios, cookie ...

### Code example

```js
import Cookie from "js-cookie";

class Cookies {
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

export const cookie = new Cookies();
```
