import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { App, User } from "realm-web";
import { RenderPlugins, useIsLogin } from "..";

export const RealmContext = createContext<any>({});
export const useRe = () => {
  return useContext(RealmContext) as {
    customDataUser: Object;
    userRealm: User<
      Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory,
      SimpleObject,
      Realm.DefaultUserProfileData
    > | null;
    setUserRealm: React.Dispatch<
      React.SetStateAction<User<
        Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory,
        SimpleObject,
        Realm.DefaultUserProfileData
      > | null>
    >;
    Error401: ReactNode;
    app: App<
      Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory,
      SimpleObject
    >;
  };
};
function RealmProviderr<T = any>({
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
  const data = {
    customDataUser,
    userRealm,
    setUserRealm,
    Error401,
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

export default RealmProviderr;
