import { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function useIsLogin() {
  const { isLogin } = useContext(RealmContext) as {
    isLogin: { isLogin: boolean };
  };
  return { isLogin: isLogin.isLogin };
}

export default useIsLogin;
