var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState, } from "react";
import { App } from "realm-web";
import { useCache, useClearCache } from "react-cache-state";
import { RenderPlugins } from "..";
export const RealmContext = createContext({});
function RealmProvider({ children, appId, plugins, Error401 = _jsx(_Fragment, { children: "Error 401" }), customDataUser, }) {
    const app = new App({ id: appId });
    const { clearCache } = useClearCache();
    const [userRealm, setUserRealm] = useState(app.currentUser);
    const [user, setUser] = useCache("user");
    const [isLogin, setLogin] = useState({ isLogin: false });
    useEffect(() => {
        if (app.currentUser == null || undefined) {
            logout();
        }
        else {
            if (app.currentUser.isLoggedIn) {
                setLogin({ isLogin: true });
                setUserRealm(app.currentUser);
            }
        }
    }, []);
    const updateUser = (data) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const res = yield ((_a = app.currentUser) === null || _a === void 0 ? void 0 : _a.functions.userUsers("update", user === null || user === void 0 ? void 0 : user.userId, data));
        setUser(res);
    });
    const login = (data) => {
        setUserRealm(app.currentUser);
        setUser(data);
        setLogin({ isLogin: true });
    };
    const logout = () => {
        setUserRealm(null);
        setUser(undefined);
        setLogin({ isLogin: false });
        clearCache();
        localStorage.clear();
        sessionStorage.clear();
        userRealm === null || userRealm === void 0 ? void 0 : userRealm.logOut();
    };
    const data = {
        customDataUser,
        user,
        setUser,
        updateUser,
        isLogin,
        userRealm,
        setUserRealm,
        Error401,
        login,
        logout,
        app,
    };
    return (_jsx(RealmContext.Provider, { value: data, children: plugins == undefined ? (_jsx(_Fragment, { children: children })) : (_jsx(RenderPlugins, { plugins: plugins, children: children })) }));
}
export default RealmProvider;
