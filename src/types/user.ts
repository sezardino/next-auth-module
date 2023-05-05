export enum UserRole {
  ADMIN = "admin",
  SUB_ADMIN = "sub_admin",
  USER = "user",
}

export interface CurrentUserInfo {
  email: string;
  id: number;
  role: UserRole;
}
