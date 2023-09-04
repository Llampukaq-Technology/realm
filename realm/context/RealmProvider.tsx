import React, { ReactNode, createContext, useEffect, useState } from "react";
import { App, User } from "realm-web";
import RenderPlugins from "../components/RenderPlugins";
import { useCache, useClearCache } from "react-cache-state";
export const RealmContext = createContext({});
export interface user {
  created: Date;
  userId: string;
  email: string;
  picture: string;
  name: string;
}
export interface RealmContext<T = any> {
  isLogin: boolean | undefined;
  user: (user & T) | undefined;
  Error401: React.ReactNode;
  setUser: (value: any) => void;
  updateUser: (data: any) => Promise<void>;
  login: (data: any) => void;
  logout: () => void;
  userRealm: User<
    Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory,
    SimpleObject,
    Realm.DefaultUserProfileData
  > | null;
  app: App<
    Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory,
    SimpleObject
  >;
}
function RealmProvider<T>({
  children,
  appId,
  plugins,
  Error401 = (
    <>
      <h1>dont access 401</h1>
    </>
  ),
}: {
  children: ReactNode;
  appId: string;
  Error401?: ReactNode;
  plugins?: any[];
}) {
  const app = new App({ id: appId });
  const { clearCache } = useClearCache();
  const [userRealm, setUserRealm] = useState(app.currentUser);
  const [user, setUser] = useCache<(user & T) | undefined>("user");
  const [isLogin, setLogin] = useCache("isLogin", { isLogin: false });
  const update = async (data: any) => {
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
  useEffect(() => {
    if (app.currentUser == null || undefined) {
      logout();
    } else {
      app.currentUser.isLoggedIn && setUserRealm(app.currentUser);
    }
  }, []);
  const data = {
    isLogin: isLogin?.isLogin,
    user,
    Error401,
    setUser,
    updateUser: update,
    login,
    logout,
    userRealm,
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
