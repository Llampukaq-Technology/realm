import React, { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function useUserRealm() {
  const { login, logout } = useContext(RealmContext) as RealmContext;
  return { login, logout };
}

export default useUserRealm;
