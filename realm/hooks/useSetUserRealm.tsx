import React, { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function useSetUserRealm() {
  const { setUserRealm, setUser } = useContext(RealmContext) as {
    setUser: () => void;
    setUserRealm: () => void;
  };
  return { setUserRealm, setUser };
}

export default useSetUserRealm;
