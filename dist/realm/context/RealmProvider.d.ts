import React, { ReactNode } from "react";
import { App, User } from "realm-web";
export declare const RealmContext: React.Context<{}>;
export interface user {
    created: Date;
    userId: string;
    email: string;
    picture: string;
    name: string;
}
export interface RealmContext<T = any> {
    isLogin: boolean | undefined;
    setUserRealm: (data: any) => void;
    user: (user & T) | undefined;
    Error401: React.ReactNode;
    setUser: (value: any) => void;
    updateUser: (data: any) => Promise<void>;
    login: (data: any) => void;
    logout: () => void;
    customDataUser: Object;
    userRealm: User<Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory, SimpleObject, Realm.DefaultUserProfileData> | null;
    app: App<Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory, SimpleObject>;
}
declare function RealmProvider<T>({ children, appId, plugins, Error401, customDataUser, }: {
    children: ReactNode;
    appId: string;
    Error401?: ReactNode;
    plugins?: any[];
    customDataUser?: Object;
}): import("react/jsx-runtime").JSX.Element;
export default RealmProvider;
