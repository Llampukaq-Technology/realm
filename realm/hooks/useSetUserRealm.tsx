import React, { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function useSetUserRealm() {
  const { setUserRealm } = useContext(RealmContext) as RealmContext;
  return { setUserRealm };
}

export default useSetUserRealm;
