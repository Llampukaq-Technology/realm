import { RealmProvider } from "@/realm";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RealmProvider appId={process.env.NEXT_PUBLIC_APP_ID as string}>
      <Component {...pageProps} />
    </RealmProvider>
  );
}
