import React, { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";
import { User } from "realm-web";

function useUserRealm() {
  const { userRealm } = useContext(RealmContext) as {
    userRealm: User<
      Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory,
      SimpleObject,
      Realm.DefaultUserProfileData
    > | null;
  };
  return { userRealm };
}

export default useUserRealm;
