import { RealmProvider } from "@/realm";

import "@/styles/globals.css";
import { Error401, Provider } from "cllk";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <RealmProvider
        onlyUser={["luisgarrido0987@gmail.com"]}
        Error401={<Error401 />}
        appId={"spondylusdevelopment-zwkhjqi"}
      >
        <Component {...pageProps} />
      </RealmProvider>
    </Provider>
  );
}
