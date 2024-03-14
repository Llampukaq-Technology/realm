import { useRe } from "../context/RealmProvider";

function useUserRealm() {
  const { userRealm } = useRe();
  return { userRealm };
}

export default useUserRealm;
