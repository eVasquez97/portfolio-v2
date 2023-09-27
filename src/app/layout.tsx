import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Footer, Header, NavTabs } from "@/components/molecules";
import { inter } from "./fonts";
import Loading from "./loading";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduardo Vásquez",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen bg-primary-light dark:bg-primary-dark w-full p-5`}
      >
        <main className="flex flex-col mx-auto max-w-2xl w-full mt-11 md:mt-1">
          <NavTabs />
          <Header />
          <Suspense fallback={<Loading />}>
            {children}
            <Footer />
          </Suspense>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
