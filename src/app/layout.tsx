import { Footer, NavTabs } from "@/components/molecules";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { inter, jetbrainsMono } from "./fonts";
import "./globals.css";
import Loading from "./loading";

const siteUrl = "https://evasquez97.vercel.app";
const title = "Eduardo Vásquez";
const description =
  "Check out my portfolio to see my latest projects and skills in web development, mobile development, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Eduardo Vásquez" }],
  keywords: ["react", "nextjs", "typescript", "tailwindcss", "vercel"],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    images: [{ url: "/perfil.JPG" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/perfil.JPG"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans flex items-center justify-center h-screen bg-primary-light dark:bg-primary-dark w-full overflow-hidden p-4`}
      >
        <main className="flex flex-col justify-between mx-auto max-w-xl w-full h-[90vh] max-h-[840px] overflow-hidden">
          <NavTabs />
          <div className="flex-1 overflow-y-auto pr-1 my-2">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
