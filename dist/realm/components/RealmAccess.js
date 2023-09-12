import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { RealmContext } from "../context/RealmProvider";
function RealmAccess({ children }) {
    const { Error401, isLogin } = useContext(RealmContext);
    return _jsx(_Fragment, { children: isLogin.isLogin ? children : _jsx(_Fragment, { children: Error401 }) });
}
export default RealmAccess;
