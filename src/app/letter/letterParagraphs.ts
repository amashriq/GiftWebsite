export interface LetterParagraph {
  id: number;
  title?: string;
  text?: string;
  audioSrc: string;
}

// Define and export the array of letter paragraphs
export const letterParagraphs: LetterParagraph[] = [
  {
    id: 1,
    title: "A Letter to Caroline",
    text: "By Adeeb M. coming soon...",
    audioSrc: "/audio/testAudio.mp3", // Make sure this path is correct relative to /public
  },
];
