import { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";
function useUserRealm() {
    const { userRealm } = useContext(RealmContext);
    return { userRealm };
}
export default useUserRealm;
