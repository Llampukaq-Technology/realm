import { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";
import { nanoid } from "nanoid";

function useAuth() {
  const { login, logout, customDataUser } = useContext(RealmContext) as {
    login: (data: any) => void;
    logout: () => void;

    customDataUser: Object | undefined;
  };
  function parseLanguageTag(languageTag: string) {
    const [language, country] = languageTag.split("-");
    return {
      country: country,
      language: language,
    };
  }
  const createUserData = (data: { email: string } | object) => {
    return {
      userId: nanoid(11),
      created: new Date(),
      ...(data ?? {}),
      ...(customDataUser ?? {}),
      ...parseLanguageTag(navigator.language),
    };
  };

  return { login, logout, createUserData };
}

export default useAuth;
