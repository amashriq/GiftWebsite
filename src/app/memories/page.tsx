"use client";

import React, { useState, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { eventsData } from "@/lib/memories";
import ActionButton from "@/components/Buttons/ActionButton";
import GoBackIcon from "@/components/icons/GoBackIcon";

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
              icon={<GoBackIcon className="w-20 h-12" strokeWidth="2" />}
              aria-label="Back to Events"
              className={`bg-[#FFF8F0]`}
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
              icon={<GoBackIcon className="w-20 h-12" strokeWidth="2" />}
              aria-label="Back to Images"
              className={`bg-[#8E9B90]`}
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
                Memories
              </h2>
              <p className="text-3xl text-[#4B4B4B] [text-shadow:0px_1px_2px_rgba(0,0,0,0.1)] font-semibold break-words">
                Each picture is a different event/category, filled with more
                pictures of us. If you click on an image in one, you&apos;ll get
                to see a close up, and a personal caption I wrote. Each image
                has a unique caption, and there are nearly 200 to look at! I
                hope you enjoy going through all of them and have as much fun as
                I did revisiting the past three months.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {eventsData.map((event) => {
                const iconDisplaySrc = event.iconSrc || event.images?.[0]?.src;
                return (
                  <Image
                    src={iconDisplaySrc}
                    key={event.id}
                    onClick={() => handleEventSelect(event.id)}
                    alt="event"
                    width={300}
                    height={300}
                    className="rounded-xl
        shadow-md 
        cursor-pointer 
        duration-300 ease-in-out 
        transform
        transition
        hover:brightness-80 hover:shadow-lg hover:scale-105"
                    style={{ objectFit: "contain" }}
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
