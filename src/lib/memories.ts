export interface MemoryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface MemoryEvent {
  id: string;
  title: string;
  eventCaption: string;
  images: MemoryImage[];
  iconSrc?: string;
}

export const eventsData: MemoryEvent[] = [
  {
    id: "1",
    title: "Christmas",
    eventCaption: "I love you",
    images: [
      {
        id: "4",
        src: "/images/bad/IMG_7762.JPEG",
        alt: "pink Lily",
        caption: "your favorite",
      },
      {
        id: "5",
        src: "/images/PinkLilyBG.jpg",
        alt: "pink Lily",
        caption: "your favorite",
      },
      {
        id: "6",
        src: "/images/bad/IMG_7896.JPEG",
        alt: "pink Lily",
        caption: "your favorite",
      },
      {
        id: "7",
        src: "/images/PinkLilyBG.jpg",
        alt: "pink Lily",
        caption: "your favorite",
      },
    ],
  },
  {
    id: "2",
    title: "Christmas",
    eventCaption: "I love you",
    images: [
      {
        id: "8",
        src: "/images/PinkLilyBG.jpg",
        alt: "pink Lily",
        caption: "your favorite",
      },
      {
        id: "9",
        src: "/images/PinkLilyBG.jpg",
        alt: "pink Lily",
        caption: "your favorite",
      },
      {
        id: "10",
        src: "/images/PinkLilyBG.jpg",
        alt: "pink Lily",
        caption: "your favorite",
      },
      {
        id: "11",
        src: "/images/PinkLilyBG.jpg",
        alt: "pink Lily",
        caption: "your favorite",
      },
    ],
  },
  {
    id: "3",
    title: "Christmas",
    eventCaption: "I love you",
    images: [
      {
        id: "12",
        src: "/images/PinkLilyBG.jpg",
        alt: "pink Lily",
        caption: "your favorite",
      },
      {
        id: "13",
        src: "/images/PinkLilyBG.jpg",
        alt: "pink Lily",
        caption: "your favorite",
      },
      {
        id: "14",
        src: "/images/PinkLilyBG.jpg",
        alt: "pink Lily",
        caption: "your favorite",
      },
      {
        id: "15",
        src: "/images/PinkLilyBG.jpg",
        alt: "pink Lily",
        caption: "your favorite",
      },
    ],
  },
];
