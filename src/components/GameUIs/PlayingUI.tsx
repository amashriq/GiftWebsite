import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ActionButton from "@/components/Buttons/ActionButton";
import CheckIcon from "@/components/icons/CheckIcon";
import InstructionsIcon from "@/components/icons/InstructionsIcon";
import { GameImage } from "@/app/game/GameClient";
import { pageVariants, pageTransitions } from "@/lib/animations";

interface PlayingUIProps {
  currentImages: GameImage[];
  selectedImages: Set<string>;
  totalImages: number;
  onImageSelect: (src: string) => void;
  onCheckAnswer: () => void;
  onShowInstructions: () => void;
}

export default function PlayingUI({
  currentImages,
  selectedImages,
  totalImages,
  onImageSelect,
  onCheckAnswer,
  onShowInstructions,
}: PlayingUIProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
      className="flex flex-col min-h-[95vh] justify-center items-center px-20 pt-20 gap-8"
    >
      <div className={`flex flex-wrap justify-center items-center gap-10`}>
        {currentImages.map((img) => (
          <div
            key={img.src}
            onClick={() => onImageSelect(img.src)}
            className={`flex h-[17.5vw] rounded-lg ring-4 ring-[#A26769] cursor-pointer transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 hover:ring-6 ${
              selectedImages.has(img.src)
                ? "shadow-lg !ring-[8px] scale-105 !ring-[#F4C2C2]"
                : ""
            }`}
          >
            <Image
              src={img.src}
              alt={img.filename}
              width={img.width}
              height={img.height}
              className={`block w-full h-full rounded-lg transition duration-300 ease-in-out hover:brightness-80`}
              priority
            />
          </div>
        ))}
      </div>
      {currentImages.length === totalImages && (
        <div className="flex gap-4 items-center">
          <ActionButton
            onClick={onShowInstructions}
            icon={<InstructionsIcon className="w-20 h-13" strokeWidth="2" />}
            aria-label="Show Instructions"
            className="border-2 border-[#97A897]"
          />
          <ActionButton
            onClick={onCheckAnswer}
            icon={<CheckIcon className="w-20 h-12" stroke="#D8A39D" />}
            aria-label="Check Answer"
            className="border-2 border-[#97A897]"
          />
        </div>
      )}
    </motion.div>
  );
}
