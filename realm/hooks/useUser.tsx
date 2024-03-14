import { useUs } from "../context/UserProvider";

function useUser<T>() {
  const { user, updateUser } = useUs();
  const g = user as T;
  return { user: g, updateUser };
}

export default useUser;
