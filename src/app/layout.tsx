import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

import "./globals.css";
import React from "react";
import BackButton from "@/components/Buttons/BackButton";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Include all weights you might need
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-eb-garamond", // This name is up to you, but be descriptive
});

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
      <body className={` antialised ${ebGaramond.variable} font-serif`}>
        <BackButton />
        <main>{children}</main>
      </body>
    </html>
  );
}
