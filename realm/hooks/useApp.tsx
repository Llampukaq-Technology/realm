import { useContext } from "react";
import { App } from "realm-web";
import { RealmContext } from "../context/RealmProvider";
function useApp() {
  const { app } = useContext(RealmContext) as {
    app: App<
      Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory,
      SimpleObject
    >;
  };
  return app;
}

export default useApp;
