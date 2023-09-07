declare function useAuth(): {
    login: (data: any) => void;
    logout: () => void;
    customDataUser: Object | undefined;
};
export default useAuth;
