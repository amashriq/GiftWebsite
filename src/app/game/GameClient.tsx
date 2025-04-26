"use client";

import React, { useState, useEffect, useCallback } from "react";
import PlayingUI from "@/components/GameUIs/PlayingUI";
import { AnimatePresence } from "framer-motion";
import ResultsUI from "@/components/GameUIs/ResultsUI";
import InstructionsUI from "@/components/GameUIs/InstructionsUI";

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
  const [gameState, setGameState] = useState<
    "playing" | "won" | "lost" | "instructions"
  >("playing");

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
      setGameState("lost");
      setCurrentImages([]);
      setSelectedImages(new Set());
      return;
    }

    const newImages = selectGameImages();
    setCurrentImages(newImages);
    setSelectedImages(new Set());
    setGameState("playing");
  }, [selectGameImages, IMAGES_PER_TYPE, goodImages.length, badImages.length]);

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

  const handleCheckAnswer = useCallback(() => {
    if (gameState !== "playing") return;
    const winConditionMet = selectedImages.size === TOTAL_IMAGES_PER_ROUND;

    setGameState(winConditionMet ? "won" : "lost");
  }, [gameState, selectedImages.size, TOTAL_IMAGES_PER_ROUND]);

  useEffect(() => {
    if (gameState === "playing" && currentImages.length === 0) {
      setupNewGame();
    }
  }, [gameState, currentImages.length, setupNewGame]);

  const handleStartGame = useCallback(() => {
    if (gameState === "playing") return;
    setGameState("playing");
  }, [gameState]);

  const renderContent = () => {
    switch (gameState) {
      case "playing":
        return (
          <PlayingUI
            key="playing"
            currentImages={currentImages}
            selectedImages={selectedImages}
            totalImages={TOTAL_IMAGES_PER_ROUND}
            onImageSelect={handleImageSelect}
            onCheckAnswer={handleCheckAnswer}
            onShowInstructions={() => setGameState("instructions")}
          />
        );
      case "instructions":
        return (
          <InstructionsUI key="instructions" onStartGame={handleStartGame} />
        );
      case "won":
        return (
          <ResultsUI
            key="won"
            outcome="won"
            selectionCount={selectedImages.size}
            onRestart={setupNewGame}
          />
        );
      case "lost":
        return (
          <ResultsUI
            key="lost"
            outcome="lost"
            selectionCount={selectedImages.size}
            onRestart={setupNewGame}
          />
        );
      default:
        return <div key="loading">Loading or unKnown state</div>;
    }
  };
  return (
    <div className="flex flex-grow w-full flex-col justify-center items-center p-4 md:p-8 overflow-hidden">
      <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
    </div>
  );
}
