import { useRe } from "../context/RealmProvider";
function useApp() {
  const { app } = useRe();
  return app;
}

export default useApp;
