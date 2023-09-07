import { User } from "realm-web";
declare function useUserRealm(): {
    userRealm: User<Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory, SimpleObject, Realm.DefaultUserProfileData> | null;
};
export default useUserRealm;
