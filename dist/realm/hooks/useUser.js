import { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";
function useUser() {
    const { user, updateUser } = useContext(RealmContext);
    return { user, updateUser };
}
export default useUser;
