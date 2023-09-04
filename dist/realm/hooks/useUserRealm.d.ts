declare function useUserRealm(): {
    login: (data: any) => void;
    logout: () => void;
};
export default useUserRealm;
