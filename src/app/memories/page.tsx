"use client";

import React, { useState, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { eventsData } from "@/lib/memories";
import ActionButton from "@/components/Buttons/ActionButton";
import GameIcon from "@/components/icons/GameIcon";

type ViewMode = "events" | "eventImages" | "imageFocus";

const viewFadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function MemoriesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("events");
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [focusedImageId, setFocusedImageId] = useState<string | null>(null);

  const selectedEvent = useMemo(() => {
    if (!selectedEventId) return null;
    return eventsData.find((event) => event.id === selectedEventId) || null;
  }, [selectedEventId]);

  const focusedImage = useMemo(() => {
    if (!selectedEvent || !focusedImageId) return null;
    return (
      selectedEvent.images.find((img) => img.id === focusedImageId) || null
    );
  }, [selectedEvent, focusedImageId]);

  const handleEventSelect = (eventId: string) => {
    setSelectedEventId(eventId);
    setViewMode("eventImages");
  };

  const handleImageSelect = (imageId: string) => {
    setFocusedImageId(imageId);
    setViewMode("imageFocus");
  };

  const handleBackToEvents = () => {
    setViewMode("events");
    setSelectedEventId(null);
    setFocusedImageId(null);
  };

  const handleBackToImages = () => {
    setViewMode("eventImages");
    setFocusedImageId(null);
  };

  const renderContent = () => {
    switch (viewMode) {
      case "eventImages":
        if (!selectedEvent) return null;
        return (
          <motion.div
            key="eventImages"
            className="flex flex-col justify-center items-center w-full min-h-[95vh] p-8 gap-4"
            variants={viewFadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className={`
        p-4
        text-center
        max-w-[800px]`}
            >
              <h2 className="text-5xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-bold">
                {selectedEvent.title}
              </h2>
              <p className="text-3xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-semibold break-words">
                {selectedEvent.eventCaption}
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {selectedEvent.images.map((img) => (
                <img
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => handleImageSelect(img.id)}
                  className="flex max-h-[400px] max-w-[300px] rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
                />
              ))}
            </div>
            <ActionButton
              onClick={handleBackToEvents}
              icon={<GameIcon className="w-20 h-12" strokeWidth="2" />}
              aria-label="Back to Events"
              className={`bg-[#B78D6A] border-2 border-[#A57F5F]`}
            />
          </motion.div>
        );

      case "imageFocus":
        if (!focusedImage || !selectedEvent) return null;
        return (
          <motion.div
            key="imageFocus"
            className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center p-4 gap-4"
            variants={viewFadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-full max-w-4xl h-[70vh] mt-10">
              {focusedImage.videoSrc ? (
                <video
                  key={focusedImage.videoSrc}
                  src={focusedImage.videoSrc}
                  className="w-full h-full object-contain rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={focusedImage.src}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={focusedImage.src}
                  alt={focusedImage.alt}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  sizes="90vw"
                  className="rounded-lg"
                />
              )}
            </div>
            <p className="text-3xl text-[#F9F5EF] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-semibold break-words">
              {focusedImage.caption}
            </p>
            <ActionButton
              onClick={handleBackToImages}
              icon={<GameIcon className="w-20 h-12" strokeWidth="2" />}
              aria-label="Back to Images"
              className={`bg-[#B78D6A] border-2 border-[#A57F5F]`}
            />
          </motion.div>
        );

      case "events":
      default:
        return (
          <motion.div
            key="overview"
            className="flex flex-col justify-center items-center w-full min-h-[95vh] p-8 gap-4"
            variants={viewFadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className={`
        p-4
        text-center
        max-w-[800px]`}
            >
              <h2 className="text-5xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-bold">
                hi
              </h2>
              <p className="text-3xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-semibold break-words">
                hi
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {eventsData.map((event) => {
                const iconDisplaySrc = event.iconSrc || event.images?.[0]?.src;
                return (
                  <ActionButton
                    key={event.id}
                    onClick={() => handleEventSelect(event.id)}
                    aria-label={event.title}
                    icon={
                      <Image
                        src={iconDisplaySrc}
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-md"
                        style={{ objectFit: "cover" }}
                      />
                    }
                    className="!w-[25vh] !h-[25vh] bg-[#B78D6A] border-2 border-[#A57F5F]"
                  />
                );
              })}{" "}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <>
      <Head>
        <title>
          {viewMode === "eventImages" && selectedEvent
            ? `${selectedEvent.title} - Memories`
            : viewMode === "imageFocus" && focusedImage
            ? `${focusedImage.caption} - Memories`
            : "Our Memories"}
        </title>
        <meta
          name="description"
          content="A collection of photos from our events."
        />
      </Head>
      <main className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </main>
    </>
  );
}
