import { Credentials, useApp, useAuth, useSetUserRealm } from "@/realm";
import { Button, H1 } from "cllk";
export default function Home() {
  const app = useApp();
  const { login, createUserData } = useAuth();
  const { setUserRealm } = useSetUserRealm();
  async function loginEmail(email: string, password: string) {
    const credentials = Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);
    const userData = await user.functions.userUsers(
      "create",
      email,
      createUserData({ email })
    ); //@ts-ignore
    setUserRealm(user);
    login(userData);
    return { userRealm: user, userData };
  }
  return (
    <>
      <H1>si</H1>
      <Button
        onClick={async () => {
          await loginEmail("luisgarrido0987@gmail.com", "123456");
        }}
      >
        sii
      </Button>
    </>
  );
}
