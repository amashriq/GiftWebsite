"use client";

import React from "react";
import { usePathname } from "next/navigation";
import HomeButton from "@/components/HomeButton";
import HomeIcon from "@/components/icons/HomeIcon";

export default function BackButton() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return null;
  }

  return (
    <div className="absolute top-4 left-4 z-10">
      <HomeButton
        href="/"
        icon={
          <HomeIcon className="w-10 h-10" stroke="#D8A39D" strokeWidth="2" />
        }
        aria-label="Back to Home"
        className="!w-15 !h-15"
      />
    </div>
  );
}
