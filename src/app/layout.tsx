import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "I love Caroline",
  description: "By Adeeb M.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialised">
        <BackButton />
        <main>{children}</main>
      </body>
    </html>
  );
}
