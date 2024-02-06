import { RealmProvider } from "@/realm";

import "@/styles/globals.css";
import { Error401, Provider } from "cllk";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <RealmProvider
        Error401={<Error401 />}
        appId={process.env.NEXT_PUBLIC_REALM as string}
      >
        <Component {...pageProps} />
      </RealmProvider>
    </Provider>
  );
}
