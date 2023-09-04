import React, { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function useIsLogin() {
  const { isLogin } = useContext(RealmContext) as RealmContext;
  return { isLogin };
}

export default useIsLogin;
