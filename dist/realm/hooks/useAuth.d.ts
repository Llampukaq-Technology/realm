declare function useAuth(): {
    login: (data: any) => void;
    logout: () => void;
    createUserData: (data: {
        email: string;
    } | object) => {
        country: string;
        language: string;
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
        email?: string | undefined;
        userId: string;
        created: Date;
    };
};
export default useAuth;
