import React, { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function useUser() {
  const { user, updateUser } = useContext(RealmContext) as RealmContext;
  return { user, updateUser };
}

export default useUser;
