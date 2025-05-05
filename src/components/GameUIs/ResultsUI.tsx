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
    displayTitle = "You Win!";
    displayMessage = `Wasn't that cute? I'm sure you saw this coming, but it's true! There's never been a second of time where you didn't look amazing. I wish you could see yourself through my eyes, but until that happens, let this game remind you that you are always beautiful, and every picture of you is a good one.`;
    bgColor = "bg-[#F4C2C2]/90";
    buttonBgColor = "bg-[#A8BBA8]";
    buttonBorderColor = "border-2 border-[#97A897]";
  } else {
    if (selectionCount <= 1) {
      displayTitle = "Yikes";
      displayMessage =
        "Wow, that was a really bad guess. Let's have a little more self love please!";
    } else if (selectionCount <= 3) {
      displayTitle = "Not Doing Great";
      displayMessage =
        "I guess we really do just disagree on these, but keep playing because I, Adeeb Mashriqui, have faith that you'll win!";
    } else if (selectionCount <= 6) {
      displayTitle = "Eh";
      displayMessage =
        "It could be better but I wouldn't call this a complete loss. The only real loss is when you give up. That was hella deep.";
    } else {
      displayTitle = "Close";
      displayMessage =
        "You're right there! Really think about what I would pick. What would I look like playing this game? I'm sure you'll get it on the next one.";
    }
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
        rounded-xl
        shadow-xl
        text-center
        max-w-[800px]`}
      >
        <h2 className="text-4xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-bold">
          {displayTitle}
        </h2>
        <p className="text-3xl whitespace-pre-line text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-semibold break-words">
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
