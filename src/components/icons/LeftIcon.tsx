import React from "react";

const LeftIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
    >
      <path
        d="M10 7L7 10L10 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10L13.5 10C15.433 10 17 11.567 17 13.5V13.5C17 15.433 15.433 17 13.5 17L12 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftIcon;
