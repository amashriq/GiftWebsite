import React from "react";
import ActionButton from "@/components/Buttons/ActionButton";
import ReplayIcon from "@/components/icons/ReplayIcon";
import { motion } from "framer-motion";
import { pageVariants, pageTransitions } from "@/lib/animations";

interface ResultsUIProps {
  outcome: "won" | "lost";
  selectionCount: number;
  onRestart: () => void;
}

export default function ResultsUI({
  outcome,
  selectionCount,
  onRestart,
}: ResultsUIProps) {
  let displayTitle,
    displayMessage = "";
  let bgColor,
    buttonBgColor,
    buttonBorderColor = "";
  if (outcome === "won") {
    displayTitle = "Congratulations!";
    displayMessage = `You won! You selected ${selectionCount} images.`;
    bgColor = "bg-[#F4C2C2]/90";
    buttonBgColor = "bg-[#A8BBA8]";
    buttonBorderColor = "border-2 border-[#97A897]";
  } else {
    displayTitle = "Game Over!";
    displayMessage = `You lost! You selected ${selectionCount} images.`;
    bgColor = "bg-[#D8A39D]/90";
    buttonBgColor = "bg-[#A26769]";
    buttonBorderColor = "border-2 border-[#925D5F]";
  }

  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransitions}
      initial="initial"
      animate="in"
      exit="out"
      className="flex flex-col justify-center items-center w-full h-[90vh] gap-10"
    >
      <div
        className={`p-8
        ${bgColor}
        rounded-lg
        shadow-xl
        text-center
        max-w-[800px]`}
      >
        <h2 className="text-4xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-bold">
          {displayTitle}
        </h2>
        <p className="text-3xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-semibold break-words">
          {displayMessage}
        </p>
      </div>
      <ActionButton
        onClick={onRestart}
        icon={<ReplayIcon className="w-20 h-13" strokeWidth="2" />}
        aria-label="Restart Game"
        className={`${buttonBgColor} ${buttonBorderColor}`}
      />
    </motion.div>
  );
}
