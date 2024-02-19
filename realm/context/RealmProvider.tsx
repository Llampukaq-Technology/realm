import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import { App } from "realm-web";
import { RenderPlugins } from "..";
import { UserDataRealm } from "../types";
import { useLocalStorage } from "@uidotdev/usehooks";

export const RealmContext = createContext<any>({});
function RealmProvider<T = any>({
  children,
  appId,
  plugins,
  Error401 = <>Error 401</>,
  customDataUser,
}: PropsWithChildren<{
  appId: string;
  Error401?: ReactNode;
  plugins?: any[];
  customDataUser?: Object;
  onlyUser?: string[];
}>) {
  const app = new App({ id: appId });
  const [userRealm, setUserRealm] = useState(app.currentUser);
  const [user, setUser] = useLocalStorage<(T & UserDataRealm) | undefined>(
    "user"
  );
  const [isLogin, setLogin] = useState<boolean>(false);

  useEffect(() => {
    if (app.currentUser == null || undefined) {
      logout();
    } else {
      if (app.currentUser.isLoggedIn) {
        setLogin(true);
        setUserRealm(app.currentUser);
      }
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
    setLogin(true);
  };
  const logout = () => {
    setUserRealm(null);
    setUser(undefined);
    setLogin(false);
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

  return (
    <RealmContext.Provider value={data}>
      {plugins == undefined ? (
        <>{children}</>
      ) : (
        <RenderPlugins plugins={plugins}>{children}</RenderPlugins>
      )}
    </RealmContext.Provider>
  );
}

export default RealmProvider;
