import fs from "fs";
import path from "path";

export interface DirecImage {
  id: string;
  src: string;
  filename: string;
  directory: string;
}

function getImages(dir: string): string[] {
  const absoluteDir = path.join(process.cwd(), dir);

  try {
    return fs.readdirSync(absoluteDir, {withFileTypes: true}).filter(dirent => dirent.isFile()).map(dirent => dirent.name);
  }
}