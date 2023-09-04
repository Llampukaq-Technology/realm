import { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";
function useApp() {
    const { app } = useContext(RealmContext);
    return app;
}
export default useApp;
