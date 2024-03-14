import { useRe } from "../context/RealmProvider";
import { nanoid } from "nanoid";
import { useUs } from "../context/UserProvider";

function useAuth() {
  const { login, logout } = useUs();
  const { customDataUser } = useRe();
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
