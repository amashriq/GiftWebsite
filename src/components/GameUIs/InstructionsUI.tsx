import React from "react";
import ActionButton from "@/components/Buttons/ActionButton";
import PlayIcon from "@/components/icons/PlayIcon";
import { motion } from "framer-motion";
import { pageVariants, pageTransitions } from "@/lib/animations";

interface InstructionsUIProps {
  onStartGame: () => void;
}

export default function InstructionsUI({ onStartGame }: InstructionsUIProps) {
  const motivation = `We can't seem to ever agree on pictures. For some reason my magnificent, beautiful girlfriend always thinks she looks bad, and I just can't figure out why. Anyway, that was my inspiration for this game, and it was the first idea I had when making this website.`;
  const howItWorks = `Images of you will show up on the screen. Your goal is pick all of the "good" pictures. I did my best to classify them, but I'm sure you still won't agree with me. That's the fun of it! Click on the pictures you think look good, and when you're done, press the submit button at the bottom. You'll get a message based on how close you were to my picks. Press the play button below when you're ready to start!`;

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
        bg-[#F9F5EF]/1
        rounded-xl
        shadow-xl
        text-center
        max-w-[800px]`}
      >
        <h2 className="text-5xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-bold">
          Instructions
        </h2>
        <p className="text-3xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-semibold break-words">
          <br /> <strong>Motivation:</strong> <br />
          {motivation} <br /> <br /> <strong>How it works:</strong> <br />
          {howItWorks}
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
