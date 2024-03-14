import { useState } from "react";
import { createProviderFn } from "../react";
const useLogin = () => {
  const [isLogin, setLogin] = useState<boolean>(false);
  return { isLogin, setLogin };
};
const [LoginProvider, useIsLogin] = createProviderFn<typeof useLogin>(useLogin);
export { LoginProvider, useIsLogin };
