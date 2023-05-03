# Types

## Folder for reusable types

### P.S - except, specific component types

## Example

```ts
export interface PaginatedData<Data> {
  data: Data[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
```
