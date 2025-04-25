"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ActionButton from "@/components/ActionButton";
import CheckIcon from "@/components/icons/CheckIcon";

export interface GameImage {
  src: string;
  type: "good" | "bad";
  width: number;
  height: number;
  filename: string;
}

interface GameClientProps {
  goodImages: GameImage[];
  badImages: GameImage[];
}

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export default function GameClient({ goodImages, badImages }: GameClientProps) {
  const [currentImages, setCurrentImages] = useState<GameImage[]>([]);
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set());
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">(
    "playing"
  );
  const [message, setMessage] = useState<string>("Pick all the good pictures!");
  const [isFadingOut, setIsFadingOut] = useState(false);

  const TOTAL_IMAGES_PER_ROUND = 10; //subject to change
  const IMAGES_PER_TYPE = TOTAL_IMAGES_PER_ROUND / 2;

  const selectGameImages = useCallback((): GameImage[] => {
    const shuffledGood = shuffleArray([...goodImages]);
    const shuffledBad = shuffleArray([...badImages]);

    const selectedGood = shuffledGood.slice(0, IMAGES_PER_TYPE);
    const selectedBad = shuffledBad.slice(0, IMAGES_PER_TYPE);

    const finalImages = shuffleArray([...selectedGood, ...selectedBad]);
    return finalImages;
  }, [goodImages, badImages, IMAGES_PER_TYPE]);

  const setupNewGame = useCallback(() => {
    if (
      goodImages.length < IMAGES_PER_TYPE ||
      badImages.length < IMAGES_PER_TYPE
    ) {
      setMessage(
        `Not enough images available for a ${IMAGES_PER_TYPE}-${IMAGES_PER_TYPE} split.`
      );
      setGameState("lost");
      setCurrentImages([]);
      setSelectedImages(new Set());
      return;
    }

    const newImages = selectGameImages();
    setCurrentImages(newImages);
    setSelectedImages(new Set());
    setGameState("playing");
    setMessage("Pick all the good pictures!");
  }, [selectGameImages, goodImages.length, badImages.length]);

  useEffect(() => {
    setupNewGame();
  }, [setupNewGame]);

  const handleImageSelect = (imageSrc: string) => {
    if (gameState !== "playing") return;
    setSelectedImages((currentSelected) => {
      const newSelected = new Set(currentSelected);
      if (newSelected.has(imageSrc)) {
        newSelected.delete(imageSrc);
      } else {
        newSelected.add(imageSrc);
      }
      return newSelected;
    });
  };

  const handleCheckAnswer = () => {
    if (isFadingOut) return;
    if (gameState !== "playing") return;

    setIsFadingOut(true);
    const transitionDuration = 300;

    const winConditionMet = selectedImages.size === TOTAL_IMAGES_PER_ROUND;

    setTimeout(() => {
      if (winConditionMet) {
        setGameState("won");
        setMessage("Congratulations! You picked all the good pictures!");
      } else {
        setGameState("lost");
        setMessage("maybe next time! You picked some bad pictures."); //diff messages based on how many she chose
      }
    }, transitionDuration);
  };

  useEffect(() => {
    if (gameState === "playing") {
      setIsFadingOut(false);
    }
  }, [gameState]);

  return (
    <div className="flex h-[95vh] w-[vw] flex-col justify-center items-center p-6 mt-10">
      {gameState === "playing" ? (
        <>
          <div
            className={`flex flex-wrap justify-center items-center gap-10 mb-8 transition-opacity duration-300 ease-in-out ${
              isFadingOut ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentImages.map((img) => (
              <div
                key={img.src}
                onClick={() => handleImageSelect(img.src)}
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
                  className={`block w-full h-full rounded-lg transition duration-300 ease-in-out transform hover:brightness-80`}
                  priority
                />
              </div>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            {currentImages.length === TOTAL_IMAGES_PER_ROUND && (
              <ActionButton
                onClick={handleCheckAnswer}
                icon={<CheckIcon className="w-20 h-12" stroke="#D8A39D" />}
                aria-label="Check Answer"
                className={`${
                  isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              />
            )}
          </div>
        </>
      ) : (
        <>
          {gameState === "lost" && (
            <button
              onClick={setupNewGame}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition shadow"
            >
              Try Again
            </button>
          )}
          {gameState === "won" && (
            <button
              onClick={setupNewGame}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition shadow"
            >
              Play Again?
            </button>
          )}
        </>
      )}
    </div>
  );
}
