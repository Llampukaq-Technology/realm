import { useRe } from "../context/RealmProvider";
import { useUs } from "../context/UserProvider";

function useSetUserRealm() {
  const { setUserRealm } = useRe();
  const { setUser } = useUs();
  return { setUserRealm, setUser };
}

export default useSetUserRealm;
