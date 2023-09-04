declare function useAuth(): {
    login: (data: any) => void;
    logout: () => void;
};
export default useAuth;
