import { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";

function useUser<T>() {
  
  const { user, updateUser } = useContext(RealmContext) as {
    user: T;
    updateUser: (data: Partial<T>) => Promise<void>;
  };
  return { user, updateUser };
}

export default useUser;
