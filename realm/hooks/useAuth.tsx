import React, { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function useAuth() {
  const { login, logout, customDataUser } = useContext(RealmContext) as {
    login: (data: any) => void;
    logout: () => void;

    customDataUser: Object | undefined;
  };
  return { login, logout, customDataUser };
}

export default useAuth;
