import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Footer } from "@/components/molecules";
import { roboto } from "./fonts";
import Loading from "./loading";
import "./globals.css";
import { LightSaber } from "@/components/atoms";

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
        className={`${roboto.className} flex min-h-screen bg-primary-light dark:bg-primary-dark w-full p-5`}
      >
        <main className="flex flex-col mx-auto max-w-2xl w-full mt-11 md:mt-1">
          <LightSaber />
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
