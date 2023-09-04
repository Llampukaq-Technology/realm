declare function useUserRealm(): {
    userRealm: import("realm-web").User<Realm.DefaultFunctionsFactory & Realm.BaseFunctionsFactory, SimpleObject, Realm.DefaultUserProfileData> | null;
};
export default useUserRealm;
