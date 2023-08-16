import { Footer, Header } from "@/components/molecules";
import "./globals.css";
import type { Metadata } from "next";
import { montserrat } from "./fonts";

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
        className={`${montserrat.className} flex min-h-screen bg-primary-light dark:bg-primary-dark`}
      >
        <main className="flex flex-col items-center mx-auto max-w-[1024px] w-full p-2">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
