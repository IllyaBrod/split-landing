import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Lato} from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${lato.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
