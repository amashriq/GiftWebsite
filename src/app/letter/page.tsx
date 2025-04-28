"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SoundIcon from "@/components/icons/SoundIcon";
import LeftIcon from "@/components/icons/LeftIcon";
import RightIcon from "@/components/icons/RightIcon";

import {
  letterParagraphs,
  LetterParagraph,
} from "@/app/letter/letterParagraphs";

import ActionButton from "@/components/Buttons/ActionButton";

const pageVariants = {
  initial: (direction: "forward" | "backward") => ({
    opacity: 0,
    x: direction === "forward" ? 50 : -50,
  }),
  in: { opacity: 1, x: 0 },
  out: (direction: "forward" | "backward") => ({
    opacity: 0,
    x: direction === "forward" ? -50 : 50,
  }),
};
const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

export default function LetterPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const N = letterParagraphs.length;

  const handlePlaySound = (audioSrc?: string) => {
    const audioEl = audioRef.current;
    if (!audioEl || !audioSrc) return;
    audioEl.pause();
    audioEl.currentTime = 0;
    audioEl.src = audioSrc;
    audioEl.play().catch(console.error);
  };
  const handlePrevious = () => {
    if (currentIndex === 0) return;
    if (audioRef.current) audioRef.current.pause();
    setDirection("backward");
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  const handleNext = () => {
    if (currentIndex === N - 1) return;
    if (audioRef.current) audioRef.current.pause();
    setDirection("forward");
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && currentIndex !== 0) handlePrevious();
      else if (event.key === "ArrowRight" && currentIndex !== N) handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (audioRef.current) audioRef.current.pause();
    };
  }, [currentIndex]);

  const currentParagraphData: LetterParagraph = letterParagraphs[currentIndex];
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === N - 1;

  return (
    <motion.div
      key={currentIndex}
      custom={direction}
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      className="flex flex-col justify-center items-center w-full min-h-[90vh] gap-5 p-8"
    >
      <div className="flex justify-between w-full max-w-[1000px]">
        <audio ref={audioRef} preload="auto" style={{ display: "none" }} />
        {currentParagraphData?.audioSrc && (
          <ActionButton
            onClick={() => handlePlaySound(currentParagraphData.audioSrc)}
            icon={<SoundIcon className="w-8 h-8" />}
            aria-label="Play Audio"
            className={`bg-[#E0948C] !w-12 !h-12`}
          />
        )}
      </div>
      <div
        className={`p-8
        bg-[#F9F5EF]/90
        rounded-xl
        shadow-xl
        text-center
        w-full
        max-w-[1000px]`}
      >
        {currentParagraphData?.title && (
          <h2 className="text-4xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-bold">
            {currentParagraphData.title}
          </h2>
        )}
        {currentParagraphData?.text && (
          <p className="text-3xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-semibold break-words">
            {currentParagraphData.text}
          </p>
        )}
      </div>
      <div className="flex justify-between w-full max-w-[1000px]">
        <ActionButton
          onClick={handlePrevious}
          icon={<LeftIcon className="w-12 h-10" strokeWidth="2" />}
          aria-label="Previous Step"
          className={`bg-[#A26769] !w-20 !h-12`}
          disabled={isFirstStep}
        />
        <ActionButton
          onClick={handleNext}
          icon={<RightIcon className="w-12 h-10" strokeWidth="2" />}
          aria-label="Next Step"
          className={`bg-[#A26769] !w-20 !h-12`}
          disabled={isLastStep}
        />
      </div>
    </motion.div>
  );
}
