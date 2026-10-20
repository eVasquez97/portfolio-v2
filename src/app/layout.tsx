import { KeyboardNav } from "@/components/molecules";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { inter, jetbrainsMono, spaceGrotesk } from "./fonts";
import "./globals.css";
import Loading from "./loading";

const siteUrl = "https://evasquez97.vercel.app";
const title = "Eduardo Vásquez - Full Stack & Mobile Engineer";
const description =
  "Portfolio of Eduardo Vásquez showcasing projects and experience in full-stack web, mobile (React Native/Expo), and software engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Eduardo Vásquez",
  },
  description,
  authors: [{ name: "Eduardo Vásquez" }],
  keywords: [
    "Eduardo Vásquez",
    "software engineer",
    "full stack developer",
    "react",
    "react native",
    "nextjs",
    "typescript",
    "tailwindcss",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Eduardo Vásquez Portfolio",
    images: [
      { url: "/perfil.JPG", width: 1200, height: 630, alt: "Eduardo Vásquez" },
    ],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eduardo Vásquez",
  url: siteUrl,
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/evasquez97",
    "https://linkedin.com/in/evasquez97",
  ],
  knowsAbout: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans min-h-[100dvh] h-[100dvh] bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col items-center justify-between p-3 sm:p-6 gap-3 sm:gap-5 overflow-hidden antialiased selection:bg-highlight selection:text-white`}
      >
        <main className="w-full max-w-2xl sm:max-w-3xl mx-auto flex-1 min-h-0 flex flex-col">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div className="card-container flex-1 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] w-full shadow-2xl shadow-black/5 dark:shadow-black/40 bg-white/95 dark:bg-neutral-900/95 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-xl animate-fade-in min-h-0 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 sm:p-8">
              <div className="pb-4 sm:pb-16">
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </div>
            </div>
          </div>
          <Analytics />
        </main>
        <KeyboardNav />
      </body>
    </html>
  );
}
