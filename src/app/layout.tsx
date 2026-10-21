import { KeyboardNav } from "@/components/molecules";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { inter, jetbrainsMono, plusJakartaSans, spaceGrotesk } from "./fonts";
import "./globals.css";
import Loading from "./loading";

const siteUrl = "https://evasquez97.vercel.app/";
const title = "Eduardo Vásquez | Desarrollador Web Frontend & Fullstack";
const description =
  "Desarrollador Web Frontend y Fullstack con +6 años de experiencia creando aplicaciones web y móviles escalables con React, Next.js, React Native y TypeScript. Disponible para nuevos proyectos y oportunidades.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Eduardo Vásquez",
  },
  description,
  authors: [{ name: "Eduardo Vásquez", url: siteUrl }],
  keywords: [
    "Eduardo Vásquez",
    "Desarrollador Web Frontend",
    "Desarrollador Fullstack",
    "Software Engineer",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
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
      {
        url: "/perfil.JPG",
        width: 1200,
        height: 630,
        alt: "Eduardo Vásquez | Desarrollador Web Frontend & Fullstack",
      },
    ],
    locale: "es_HN",
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
  image: `${siteUrl}perfil.JPG`,
  jobTitle: "Desarrollador Web Frontend & Fullstack",
  description,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad Católica de Honduras",
  },
  sameAs: [
    "https://github.com/evasquez97",
    "https://www.linkedin.com/in/eduardovasquez97/",
    "https://twitter.com/evasquez97_",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "SQL",
    "Azure",
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
        className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} flex h-dvh min-h-dvh flex-col items-center justify-between gap-3 overflow-hidden bg-neutral-50 p-3 font-sans text-base leading-relaxed text-neutral-900 antialiased selection:bg-highlight selection:text-white dark:bg-neutral-950 dark:text-neutral-100 sm:gap-5 sm:p-6`}
      >
        <main className="mx-auto flex min-h-0 w-full max-w-2xl flex-1 flex-col sm:max-w-3xl">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div className="card-container animate-fade-in flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[28px] border border-neutral-200/80 bg-white/95 shadow-2xl shadow-black/5 backdrop-blur-xl dark:border-neutral-800/80 dark:bg-neutral-900/95 dark:shadow-black/40">
            <div className="flex-1 overflow-y-auto scroll-smooth p-4 sm:p-8">
              <div className="pb-4 sm:pb-8">
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
