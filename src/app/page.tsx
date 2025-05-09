"use client";

import HomeButton from "@/components/Buttons/HomeButton";
import GameIcon from "@/components/icons/GameIcon";
import MemoriesIcon from "@/components/icons/MemoriesIcon";
import LetterIcon from "@/components/icons/LetterIcon";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransitions } from "@/lib/animations";

export default function Home() {
  return (
    <motion.main
      variants={pageVariants}
      transition={pageTransitions}
      initial="initial"
      animate="in"
      exit="out"
      className={`
      flex
      min-h-screen
      flex-col
      items-center
      justify-center`}
    >
      <div
        className={`
        p-4
        text-center
        max-w-[800px]`}
      >
        <h2 className="text-5xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-bold">
          Happy Birthday Caroline!
        </h2>
        <p className="text-3xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-semibold break-words">
          After many, many hours, I'm happy to present to you your very own
          website! There are three main activities, and perhaps more in the
          future. Start by clicking one of the three buttons below, and when
          you're finished, click the house Icon that will appear in the top left
          to go back to this screen. I hope you enjoy, and as always, I love
          you.
        </p>
      </div>
      <div
        className={`
        flex
        flex-wrap
        justify-center
        gap-4
        w-1/2
        `}
      >
        <AnimatePresence>
          <HomeButton
            key="game"
            href="/game"
            icon={
              <GameIcon
                className="w-20 h-20"
                stroke="#D8A39D"
                strokeWidth=".1"
              />
            }
            aria-label="Game"
          />
          <HomeButton
            key="memories"
            href="/memories"
            icon={
              <MemoriesIcon
                className="w-20 h-20"
                stroke="#D8A39D"
                strokeWidth=".1"
              />
            }
            aria-label="Memories"
          />
          <HomeButton
            key="letter"
            href="/letter"
            icon={
              <LetterIcon
                className="w-20 h-20"
                stroke="#D8A39D"
                strokeWidth="1.5"
              />
            }
            aria-label="letter"
          />
        </AnimatePresence>
      </div>
    </motion.main>
  );
}
