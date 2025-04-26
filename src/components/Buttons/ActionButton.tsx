import React from "react";

interface ActionButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: React.ReactNode;
  "aria-label": string;
  className?: string;
}

const ActionButton = ({
  onClick,
  icon,
  className,
  "aria-label": ariaLabel,
}: ActionButtonProps) => {
  const buttonBaseClasses = `
        group 
        flex 
        items-center 
        justify-center 
        p-4 
        h-15 w-30
        bg-[#A8BBA8] 
        rounded-xl 
         
        shadow-md 
        cursor-pointer 
        duration-300 ease-in-out 
        transform
        transition
        hover:brightness-80 hover:shadow-lg hover:scale-105
    `;

  const combinedClasses = `${buttonBaseClasses} ${className || ""}`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClasses.trim()}
      aria-label={ariaLabel}
    >
      <div
        className={`
            text-[#FFE5B4]
            `}
      >
        {icon}
      </div>
    </button>
  );
};

export default ActionButton;
