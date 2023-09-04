import React, { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function useAuth() {
  const { login, logout, customDataUser } = useContext(
    RealmContext
  ) as RealmContext;
  return { login, logout,customDataUser };
}

export default useAuth;
