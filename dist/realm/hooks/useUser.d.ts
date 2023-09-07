declare function useUser<T>(): {
    user: T;
    updateUser: (data: Partial<T>) => Promise<void>;
};
export default useUser;
