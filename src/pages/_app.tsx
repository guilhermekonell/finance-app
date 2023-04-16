import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <div className="flex h-screen bg-special-main">
          <Navbar />
          <div className="flex flex-col flex-1">
            <Header />
            <Component {...pageProps} />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
