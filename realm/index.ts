export * from "./hooks";
export * from "./components";
import RealmProvider from "./context";
export { Credentials, User } from "realm-web";
export { RealmProvider };

export interface UserInitialData {
  created: Date;
  userId: string;
  email: string;
  country: string;
  language: string;
  name?: string;
  picture?: string;
}
export type UserGeneric<T = {}> = UserInitialData & T;
