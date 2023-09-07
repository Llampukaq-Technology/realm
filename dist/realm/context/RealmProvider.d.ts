import React, { PropsWithChildren, ReactNode } from "react";
export declare const RealmContext: React.Context<any>;
declare function RealmProvider<T = any>({ children, appId, plugins, Error401, customDataUser, }: PropsWithChildren<{
    appId: string;
    Error401?: ReactNode;
    plugins?: any[];
    customDataUser?: Object;
}>): import("react/jsx-runtime").JSX.Element;
export default RealmProvider;
