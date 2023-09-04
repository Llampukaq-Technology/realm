import React, { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function useUserRealm() {
  const { userRealm } = useContext(RealmContext) as RealmContext;
  return { userRealm };
}

export default useUserRealm;
