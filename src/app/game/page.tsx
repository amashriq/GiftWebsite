import React from "react";
import GameClient from "./GameClient";
import { getImagesFromDirectory, DirectoryImage } from "@/lib/images";
import { GameImage } from "./GameClient";

export const metadata = {
  title: "A Game for Caroline",
  description: "Pick the good pictures!",
};

export default async function GamePage() {
  const goodImageDir = "images/good";
  const badImageDir = "images/bad";

  const goodImagesData: DirectoryImage[] = await getImagesFromDirectory(
    goodImageDir
  );
  const badImagesData: DirectoryImage[] = await getImagesFromDirectory(
    badImageDir
  );

  const allGoodImagesForClient: GameImage[] = goodImagesData.map((img) => ({
    src: img.src,
    type: "good",
    width: img.width,
    height: img.height,
    filename: img.filename,
  }));

  const allBadImagesForClient: GameImage[] = badImagesData.map((img) => ({
    src: img.src,
    type: "bad",
    width: img.width,
    height: img.height,
    filename: img.filename,
  }));

  return (
    <GameClient
      goodImages={allGoodImagesForClient}
      badImages={allBadImagesForClient}
    />
  );
}
