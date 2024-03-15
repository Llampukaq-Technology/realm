import { PropsWithChildren, ReactNode } from "react";
import { LoginProvider } from "./LoginProvider";
import RealmProviderr from "./RealmProvider";
import UserProvider from "./UserProvider";

function RealmProvider({
  children,
  onlyUser,
  ...props
}: PropsWithChildren<{
  appId: string;
  Error401?: ReactNode;
  plugins?: any[];
  customDataUser?: Object;
  onlyUser?: string[];
}>) {
  return (
    <LoginProvider>
      <RealmProviderr {...props}>
        <UserProvider onlyUser={onlyUser}>{children}</UserProvider>
      </RealmProviderr>
    </LoginProvider>
  );
}
export default RealmProvider;
