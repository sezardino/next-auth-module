export enum UserRole {
  ADMIN = "admin",
  SUB_ADMIN = "sub_admin",
  USER = "user",
}

export interface User {
  email: string;
  id: string;
  role: UserRole;
}

export interface CurrentUserInfo extends User {}

export interface UserWithProfile extends User {
  name: string;
  surname: string;
  address: string;
}
