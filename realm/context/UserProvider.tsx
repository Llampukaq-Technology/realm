import { useLocalStorage } from "@uidotdev/usehooks";
import React, { ReactNode, createContext, useContext, useEffect } from "react";
import { useRe } from "./RealmProvider";
import {
  UserGeneric,
  UserInitialData,
  useCollection,
  useIsLogin,
  useSync,
} from "..";
//@ts-ignore
const userContext = createContext();
export const useUs = () => {
  return useContext(userContext) as {
    logout: () => void;
    login: (data: any) => void;
    updateUser: (data: any) => Promise<void>;
    user: UserInitialData | undefined;
    setUser: React.Dispatch<React.SetStateAction<UserInitialData | undefined>>;
  };
};
function UserProvider<T>({
  children,
  onlyUser,
}: {
  children: ReactNode;
  onlyUser?: string[];
}) {
  const { setLogin } = useIsLogin();
  const { app, setUserRealm, userRealm } = useRe();
  const [user, setUser] = useLocalStorage<(T & UserGeneric) | undefined>(
    "user"
  );
  const collection = useCollection("user", "users");
  useSync<UserGeneric & T>(collection, ["update"], (set, documentUser) => {
    if (documentUser.userId == user?.userId) {
      setUser(documentUser);
    }
  });
  useEffect(() => {
    if (app?.currentUser == null || undefined) {
      logout();
    } else {
      if (app?.currentUser.isLoggedIn) {
        setLogin(true);
        setUserRealm(app?.currentUser);
      }
    }
  }, []);
  const updateUser = async (data: any) => {
    await collection?.findOneAndUpdate(
      { userId: user?.userId },
      { $set: data }
    );
  };
  const login = (data: any) => {
    if (onlyUser != undefined) {
      if (onlyUser?.includes(data.email)) {
        console.log("si");
        setUserRealm(app?.currentUser);
        setUser(data);
        setLogin(true);
      } else {
        logout?.();
      }
    } else {
      setUserRealm(app?.currentUser);
      setUser(data);
      setLogin(true);
    }
  };

  const logout = () => {
    setUserRealm(null);
    setUser(undefined);
    setLogin(false);
    localStorage.clear();
    sessionStorage.clear();
    userRealm?.logOut();
  };
  const value = {
    logout,
    login,
    updateUser,
    user,
    setUser,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

export default UserProvider;
