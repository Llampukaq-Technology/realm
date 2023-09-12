export * from "./hooks";
export * from "./components";
import RealmProvider from "./context/RealmProvider";
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
export type UserDataRealm<T = {}> = UserInitialData & T;
