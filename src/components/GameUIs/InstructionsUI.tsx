import React from "react";
import ActionButton from "@/components/Buttons/ActionButton";
import PlayIcon from "@/components/icons/PlayIcon";
import { motion } from "framer-motion";
import { pageVariants, pageTransitions } from "@/lib/animations";

interface InstructionsUIProps {
  onStartGame: () => void;
}

export default function InstructionsUI({ onStartGame }: InstructionsUIProps) {
  const Instructions =
    "Blah blah blah. This is the instructions for the game. Blah blah blah. This is the instructions for the game. Blah blah blah. This is the instructions for the game. Blah blah blah. This is the instructions for the game.";

  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransitions}
      initial="initial"
      animate="in"
      exit="out"
      className="flex flex-col justify-center items-center w-full min-h-[95vh] gap-10"
    >
      <div
        className={`
        p-8
        bg-[#F9F5EF]/90
        rounded-xl
        shadow-xl
        text-center
        max-w-[800px]`}
      >
        <h2 className="text-4xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-bold">
          Instructions
        </h2>
        <p className="text-3xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-semibold break-words">
          {Instructions}
        </p>
      </div>
      <ActionButton
        onClick={onStartGame}
        icon={<PlayIcon className="w-20 h-12" strokeWidth="2" />}
        aria-label="Restart Game"
        className={`bg-[#B78D6A] border-2 border-[#A57F5F]`}
      />
    </motion.div>
  );
}
