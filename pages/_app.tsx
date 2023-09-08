import { RealmProvider } from "@/realm";
import C from "@/styles/C";
import Context from "@/styles/Context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RealmProvider
      Error401={
        <>
          <Error401 />
        </>
      }
      customDataUser={{ git: "example@llampukaq.com" }}
      appId={"backend-llk-nlhkq"}
      plugins={[
        <Context name="si" />,
        <C />,
        <Context name="no" />,
        <Context name="siidf" />,
      ]}
    >
      <Component {...pageProps} />
    </RealmProvider>
  );
}
