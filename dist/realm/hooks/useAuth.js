import { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";
function useAuth() {
    const { login, logout } = useContext(RealmContext);
    return { login, logout };
}
export default useAuth;
