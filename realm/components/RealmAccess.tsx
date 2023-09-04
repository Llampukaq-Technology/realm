import React, { PropsWithChildren, useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function RealmAccess({ children }: PropsWithChildren) {
  const { Error401, isLogin } = useContext(RealmContext) as RealmContext<{}>;
  return <>{isLogin ? children : { Error401 }}</>;
}

export default RealmAccess;
