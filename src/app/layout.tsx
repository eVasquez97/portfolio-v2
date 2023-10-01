import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Footer, Header, NavTabs } from "@/components/molecules";
import { lato } from "./fonts";
import Loading from "./loading";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduardo Vásquez",
  description:
    "Check out my portfolio to see my latest projects and skills in web development, mobile development, and more.",
  authors: [{ name: "Eduardo Vásquez" }],
  keywords: ["react", "nextjs", "typescript", "tailwindcss", "vercel"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} flex min-h-screen bg-primary-light dark:bg-primary-dark w-full p-5`}
      >
        <main className="flex flex-col mx-auto max-w-2xl w-full">
          <Header />
          <NavTabs />
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
