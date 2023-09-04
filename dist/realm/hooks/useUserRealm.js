import { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";
function useUserRealm() {
    const { login, logout } = useContext(RealmContext);
    return { login, logout };
}
export default useUserRealm;
