import { createProviderFn } from "../react";
import { useLocalStorage } from "@uidotdev/usehooks";
const useLogin = () => {
  const [isLogin, setLogin] = useLocalStorage<boolean>("isLogin", false);
  return { isLogin, setLogin };
};
const [LoginProvider, useIsLogin] = createProviderFn<typeof useLogin>(useLogin);
export { LoginProvider, useIsLogin };
