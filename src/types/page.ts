import { NextPage } from "next";
import { UserRole } from "./user";

export type LayoutType = "default" | "auth";

export type CustomPage<P = {}, IP = P> = NextPage<P, IP> & {
  roles?: UserRole[];
  layout?: LayoutType;
  auth?: boolean;
};
