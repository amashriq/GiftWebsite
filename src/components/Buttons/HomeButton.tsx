import React from "react";
import Link from "next/link";

interface HomeButtonProps {
  href: string;
  icon: React.ReactNode;
  "aria-label": string;
  className?: string;
}

const HomeButton = ({
  href,
  icon,
  className,
  "aria-label": ariaLabel,
}: HomeButtonProps) => {
  const buttonBaseClasses = `
        group 
        flex 
        items-center 
        justify-center 
        p-4 
        h-30 w-30 
        bg-[#F4C2C2] 
        rounded-xl 
        border-2 border-[#D8A39D] 
        shadow-md 
        cursor-pointer 
        transition duration-300 ease-in-out 
        transform 
        hover:brightness-80 hover:shadow-lg hover:scale-105
    `;

  const combinedClasses = `${buttonBaseClasses} ${className || ""}`;

  return (
    <Link href={href} className={combinedClasses.trim()} aria-label={ariaLabel}>
      <div
        className={`
            text-[#FFE5B4]
            `}
      >
        {icon}
      </div>
    </Link>
  );
};

export default HomeButton;
