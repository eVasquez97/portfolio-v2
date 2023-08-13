import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

const inter = Fira_Code({ subsets: ["latin"], weight: "400" });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
