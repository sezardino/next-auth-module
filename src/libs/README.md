# Libs

## For used libraries, like: tanstack-query, axios, cookie ...

### Code example

```ts
import { QueryClient } from "@tanstack/react-query";

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
```
