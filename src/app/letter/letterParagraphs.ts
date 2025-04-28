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
    title: "Letter to Caroline",
    text: "By Adeeb M.",
    audioSrc: "/audio/testAudio.mp3", // Make sure this path is correct relative to /public
  },
  {
    id: 2,
    text: "Life has taken an unexpected turn, leading me down a path I never anticipated. It began subtly, a quiet whisper of change.",
    audioSrc: "/audio/testAudio.mp3",
  },
  {
    id: 3,
    text: "Now, the landscape ahead feels both daunting and exciting. There's a sense of possibility I haven't felt in years.",
    audioSrc: "/audio/testAudio.mp3",
  },
  {
    id: 4, // Example last paragraph
    text: "regards, Your Name.",
    audioSrc: "/audio/testAudio.mp3",
  },
  // Add the rest of your paragraphs here...
];
