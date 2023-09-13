import { Footer, Header, NavTabs } from "@/components/molecules";
import "./globals.css";
import type { Metadata } from "next";
import { roboto } from "./fonts";
import { Analytics } from "@vercel/analytics/react";
import { ContactMe } from "@/components/atoms";

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
        className={`${roboto.className} flex min-h-screen bg-primary-light dark:bg-primary-dark w-full`}
      >
        <ContactMe />
        <main className="flex flex-col items-center mx-auto max-w-7xl w-full p-2 mt-11 md:mt-0">
          <Header />
          <NavTabs />
          {children}
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
