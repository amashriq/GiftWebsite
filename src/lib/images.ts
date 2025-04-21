import fs from "fs";
import path from "path";
import sharp from "sharp";

export interface DirectoryImage {
  src: string;
  filename: string;
  directory: string;
  width: number;
  height: number;
}

function getImagesFilenames(dir: string): string[] {
  const absoluteDir = path.join(process.cwd(), dir);
  try {
    return fs
      .readdirSync(absoluteDir, { withFileTypes: true })
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name);
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      console.warn(`Directory not found: ${absoluteDir}`);
    } else {
      console.error(`Error reading directory: ${absoluteDir}`, error);
    }
    return [];
  }
}
export async function getImagesFromDirectory(
  imageDir: string
): Promise<DirectoryImage[]> {
  const dir = path.join("public", imageDir);
  const filenames = getImagesFilenames(dir);

  const imageDetailsPromises = filenames
    .filter((file) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
    .map(async (file): Promise<DirectoryImage | null> => {
      const srcPath = `/${imageDir}/${file}`;
      const filePath = path.join(process.cwd(), "public", imageDir, file);
      try {
        const metadata = await sharp(filePath).metadata();
        if (metadata.width && metadata.height) {
          return {
            src: srcPath,
            filename: file,
            directory: imageDir,
            width: metadata.width,
            height: metadata.height,
          };
        } else {
          console.warn(`No metadata found for file: ${file}`);
          return null;
        }
      } catch (error) {
        console.error(`Error reading metadata for ${filePath}:`, error);
        return null;
      }
    });
  const results = await Promise.all(imageDetailsPromises);
  return results.filter((result): result is DirectoryImage => result !== null);
}
