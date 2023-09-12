import { RealmProvider } from "@/realm";
import C from "@/styles/C";
import Context from "@/styles/Context";
import "@/styles/globals.css";
import { Error401, Provider } from "cllk";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <RealmProvider
        Error401={<Error401 />}
        appId={process.env.NEXT_PUBLIC_APP_ID as string}
        plugins={[
          <Context name="si" />,
          <C />,
          <Context name="no" />,
          <Context name="siidf" />,
        ]}
      >
        <Component {...pageProps} />
      </RealmProvider>
    </Provider>
  );
}
