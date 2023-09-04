declare function useUser(): {
    user: any;
    updateUser: (data: any) => Promise<void>;
};
export default useUser;
