import React, { PropsWithChildren, ReactNode, useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function RealmAccess({ children }: PropsWithChildren) {
  const { Error401, isLogin } = useContext(RealmContext) as {
    Error401: ReactNode;
    isLogin: boolean;
  };
  return <>{isLogin ? children : { Error401 }}</>;
}

export default RealmAccess;
