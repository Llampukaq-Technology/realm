import { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";
import { nanoid } from "nanoid";
function useAuth() {
    const { login, logout, customDataUser } = useContext(RealmContext);
    function parseLanguageTag(languageTag) {
        const [language, country] = languageTag.split("-");
        return {
            country: country,
            language: language,
        };
    }
    const createUserData = (data) => {
        return Object.assign(Object.assign(Object.assign({ userId: nanoid(11), created: new Date() }, (data !== null && data !== void 0 ? data : {})), (customDataUser !== null && customDataUser !== void 0 ? customDataUser : {})), parseLanguageTag(navigator.language));
    };
    return { login, logout, createUserData };
}
export default useAuth;
