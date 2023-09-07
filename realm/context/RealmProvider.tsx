import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import { App } from "realm-web";

import { useCache, useClearCache } from "react-cache-state";
import { RenderPlugins } from "..";
import { UserDataRealm } from "../types";

export const RealmContext = createContext<any>({});
function RealmProvider<T = any>({
  children,
  appId,
  plugins,
  Error401 = <>401</>,
  customDataUser,
}: PropsWithChildren<{
  appId: string;
  Error401?: ReactNode;
  plugins?: any[];
  customDataUser?: Object;
}>) {
  const app = new App({ id: appId });
  const { clearCache } = useClearCache();
  const [userRealm, setUserRealm] = useState(app.currentUser);
  const [user, setUser] = useCache<T & UserDataRealm>("user");
  const [isLogin, setLogin] = useCache("isLogin", { isLogin: false });
  useEffect(() => {
    if (app.currentUser == null || undefined) {
      logout();
    } else {
      app.currentUser.isLoggedIn && setUserRealm(app.currentUser);
    }
  }, []);
  const updateUser = async (data: any) => {
    const res = await app.currentUser?.functions.userUsers(
      "update",

      user?.userId,
      data
    );
    setUser(res);
  };
  const login = (data: any) => {
    setUserRealm(app.currentUser);
    setUser(data);
    setLogin({ isLogin: true });
  };
  const logout = () => {
    setUserRealm(null);
    setUser(undefined);
    setLogin({ isLogin: false });
    clearCache();
    localStorage.clear();
    sessionStorage.clear();
    userRealm?.logOut();
  };

  const data = {
    customDataUser,
    user,
    setUser,
    updateUser,
    isLogin,
    userRealm,
    setUserRealm,
    Error401,
    login,
    logout,
    app,
  };
  const R: React.Context<typeof data> = RealmContext;
  return (
    //@ts-ignore
    <R.Provider value={{ ...data, R }}>
      {plugins == undefined ? (
        <>{children}</>
      ) : (
        <RenderPlugins plugins={plugins}>{children}</RenderPlugins>
      )}
    </R.Provider>
  );
}

export default RealmProvider;
