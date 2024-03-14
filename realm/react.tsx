import { PropsWithChildren, createContext, useContext } from "react";

export function createProviderFn<T>(
  fn: any
  //@ts-ignore
): [({ children }: PropsWithChildren) => JSX.Element, () => ReturnType<T>] {
  const res = createContext({});
  const Provider = ({ children }: PropsWithChildren) => {
    const value = fn();

    return <res.Provider value={value}>{children}</res.Provider>;
  }; //@ts-ignore
  type rt = ReturnType<T>;
  const useProvider = (): rt => {
    return useContext(res) as rt;
  };
  return [Provider, useProvider];
}
