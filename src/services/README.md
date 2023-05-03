# For services

## Example

- Service for work with backend
- Service for work with storages (local storage, session storage, cookie storage)

## Code Example

```js
class AuthService {
  login(email: string, password: string) {
    return fetch({url: 'endpoint'}, method: "POST", body: { email, password })
  }

  // ...
}

class ApiService {
  auth: AuthService;

  constructor() {
    this.auth = new AuthService();
  }
}

export const apiService = new ApiService();
```
