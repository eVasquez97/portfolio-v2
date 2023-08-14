import { Footer } from "@/components/molecules";
import "./globals.css";
import type { Metadata } from "next";
import { fira } from "./fonts";

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
        className={
          fira.className +
          "flex min-h-screen bg-primary-light dark:bg-primary-dark"
        }
      >
        <div className="flex flex-col items-center mx-auto max-w-[1024px]">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
