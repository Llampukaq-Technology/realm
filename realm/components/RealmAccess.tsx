import React, { PropsWithChildren, ReactNode, useContext } from "react";
import { useRe } from "../context/RealmProvider";
import { useIsLogin } from "..";

function RealmAccess({ children }: PropsWithChildren) {
  const { isLogin } = useIsLogin();
  const { Error401 } = useRe();

  return <>{isLogin ? children : <>{Error401}</>}</>;
}

export default RealmAccess;
