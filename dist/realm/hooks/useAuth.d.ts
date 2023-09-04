declare function useAuth(): {
    login: (data: any) => void;
    logout: () => void;
    customDataUser: Object;
};
export default useAuth;
