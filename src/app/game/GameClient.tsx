"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

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
  }, [
    selectGameImages,
    goodImages.length,
    badImages.length,
    IMAGES_PER_TYPE,
    TOTAL_IMAGES_PER_ROUND,
  ]);

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
    if (gameState !== "playing") return;
    const winConditionMet = selectedImages.size === TOTAL_IMAGES_PER_ROUND;

    if (winConditionMet) {
      setGameState("won");
      setMessage("Congratulations! You picked all the good pictures!");
    } else {
      setGameState("lost");
      setMessage("maybe next time! You picked some bad pictures."); //diff messages based on how many she chose
    }
  };

  return (
    <div className="flex w-full flex-col items-center p-4">
      <h1 className="text-3x1 font-bold mb-4"> Game Time!</h1>
      <p className="mb-6 text-lg text-center"> hiiii</p>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-8 w-full">
        {currentImages.map((img) => (
          <div
            key={img.src}
            onClick={() => handleImageSelect(img.src)}
            className={`flex-1 min-w-[140px] relative border-4 rounded-lg transition-all duration-200 ease-in-out group${
              selectedImages.has(img.src)
                ? "boarder-green-500 shadow-lg"
                : "border-transparent hover:border-gray-400"
            } ${
              gameState !== "playing"
                ? "opacity-70 cursor-not-allowed pointer-events-none"
                : "cursor-pointer"
            }`}
          >
            <Image
              src={img.src}
              alt={img.filename}
              width={img.width}
              height={img.height}
              className="block w-full h-auto align-middle rounded-md group-hover:opacity-85 transition-opacity"
              priority
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 h-10 items-center">
        {gameState === "playing" &&
          currentImages.length === TOTAL_IMAGES_PER_ROUND && (
            <button
              onClick={handleCheckAnswer}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition shadow"
            >
              Check Answer
            </button>
          )}
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
      </div>
    </div>
  );
}
