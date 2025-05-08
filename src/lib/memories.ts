export interface MemoryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  videoSrc?: string;
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
    title: "Going Out Together",
    eventCaption: "I love you",
    images: [
      {
        id: "/images/memoriesImages/goingOut/a1.jpg",
        src: "/images/memoriesImages/goingOut/a1.jpg",
        alt: "pic",
        caption: "Loved my girl since the jump.",
      },
      {
        id: "/images/memoriesImages/goingOut/a2.jpg",
        src: "/images/memoriesImages/goingOut/a2.jpg",
        alt: "pic",
        caption:
          "Me and twin and months apart, and she has a hickey on her tit. Smh my head.",
      },
      {
        id: "/images/memoriesImages/goingOut/a3.jpg",
        src: "/images/memoriesImages/goingOut/a3.jpg",
        alt: "pic",
        caption:
          "Yeah I think something is just wrong with me tbh. I don't know why I look like this.",
      },
      {
        id: "/images/memoriesImages/goingOut/a4.jpg",
        src: "/images/memoriesImages/goingOut/a4.jpg",
        alt: "pic",
        caption: "The way he sits there is just so tough.",
      },
      {
        id: "/images/memoriesImages/goingOut/a5.jpg",
        src: "/images/memoriesImages/goingOut/a5.jpg",
        alt: "pic",
        caption:
          "bonggg. I'm surprised you can hold my wallet like that. It's super duper heavy.",
      },
      {
        id: "/images/memoriesImages/goingOut/a6.JPEG",
        src: "/images/memoriesImages/goingOut/a6.JPEG",
        alt: "pic",
        caption: "So colorful. Daisy needs to get her real man (Ostap) though.",
        videoSrc: "/images/memoriesImages/goingOut/a6.mp4",
      },
      {
        id: "/images/memoriesImages/goingOut/a7.jpg",
        src: "/images/memoriesImages/goingOut/a7.jpg",
        alt: "pic",
        caption: "Twin is so excited to eat some chipotle.",
      },
      {
        id: "/images/memoriesImages/goingOut/a8.jpg",
        src: "/images/memoriesImages/goingOut/a8.jpg",
        alt: "pic",
        caption: "Legendary two man double Zheng bang.",
      },
      {
        id: "/images/memoriesImages/goingOut/a9.jpg",
        src: "/images/memoriesImages/goingOut/a9.jpg",
        alt: "pic",
        caption: "Just burn this picture.",
      },
      {
        id: "/images/memoriesImages/goingOut/a10.jpg",
        src: "/images/memoriesImages/goingOut/a10.jpg",
        alt: "pic",
        caption: "Is this my rbf. Am I gay?",
      },
    ],
  },
  {
    id: "2",
    title: "Hometown Fun",
    eventCaption: "",
    images: [
      {
        id: "/images/memoriesImages/hometown/b1.JPEG",
        src: "/images/memoriesImages/hometown/b1.JPEG",
        alt: "pic",
        caption:
          "First Hangout!!!! Had a great time with twin, can't wait to go back to pure this summer.",
      },
      {
        id: "/images/memoriesImages/hometown/b2.JPEG",
        src: "/images/memoriesImages/hometown/b2.JPEG",
        alt: "pic",
        caption: "Super lit gift, heard it was hella good too.",
        videoSrc: "/images/memoriesImages/hometown/b2.mp4", // GET RID OF IF NEED SPACE
      },
      {
        id: "/images/memoriesImages/hometown/b3.JPEG",
        src: "/images/memoriesImages/hometown/b3.JPEG",
        alt: "pic",
        caption: "My real gym crush.",
        videoSrc: "/images/memoriesImages/hometown/b3.mp4",
      },
      {
        id: "/images/memoriesImages/hometown/b4.JPEG",
        src: "/images/memoriesImages/hometown/b4.JPEG",
        alt: "pic",
        caption: "Picking me up at 9am, this is why Baba loves you.",
        videoSrc: "/images/memoriesImages/hometown/b4.mp4",
      },
      {
        id: "/images/memoriesImages/hometown/b5.JPEG",
        src: "/images/memoriesImages/hometown/b5.JPEG",
        alt: "pic",
        caption: "Pristine form, breathing, speed. Really good rep twin.",
        videoSrc: "/images/memoriesImages/hometown/b5.mp4",
      },
      {
        id: "/images/memoriesImages/hometown/b6.JPEG",
        src: "/images/memoriesImages/hometown/b6.JPEG",
        alt: "pic",
        caption:
          "Look at these screenagers man. I just know they hate Indians.",
        videoSrc: "/images/memoriesImages/hometown/b6.mp4",
      },
      {
        id: "/images/memoriesImages/hometown/b7.JPEG",
        src: "/images/memoriesImages/hometown/b7.JPEG",
        alt: "pic",
        caption:
          "Woah red shoes. You're like Dorothy. Drip while picking up dog poop.",
        videoSrc: "/images/memoriesImages/hometown/b7.mp4",
      },
      {
        id: "/images/memoriesImages/hometown/b8.JPEG",
        src: "/images/memoriesImages/hometown/b8.JPEG",
        alt: "pic",
        caption:
          "Might be the most fun I've ever had grocery shopping. Can we do this for the rest of our lives please?",
        videoSrc: "/images/memoriesImages/hometown/b8.mp4",
      },
      {
        id: "/images/memoriesImages/hometown/b9.JPEG",
        src: "/images/memoriesImages/hometown/b9.JPEG",
        alt: "pic",
        caption: "My Playa Queen! Can't wait till you become Playa Manager.",
        videoSrc: "/images/memoriesImages/hometown/b9.mp4",
      },
      {
        id: "/images/memoriesImages/hometown/b10.PNG",
        src: "/images/memoriesImages/hometown/b10.PNG",
        alt: "pic",
        caption:
          "First time twin copied said some Adeeb shit. This might be the moment I fell in love.",
      },
      {
        id: "/images/memoriesImages/hometown/b11.JPEG",
        src: "/images/memoriesImages/hometown/b11.JPEG",
        alt: "pic",
        caption: "Massages HIT! Let's learn to do our own.",
      },
      {
        id: "/images/memoriesImages/hometown/b12.JPEG",
        src: "/images/memoriesImages/hometown/b12.JPEG",
        alt: "pic",
        caption: "I practiced left hand driving my whole life for this.",
      },
      {
        id: "/images/memoriesImages/hometown/b13.JPEG",
        src: "/images/memoriesImages/hometown/b13.JPEG",
        alt: "pic",
        caption: "I wonder what this means!!",
        videoSrc: "/images/memoriesImages/hometown/b13.mp4",
      },
      {
        id: "/images/memoriesImages/hometown/b14.JPG",
        src: "/images/memoriesImages/hometown/b14.JPG",
        alt: "pic",
        caption: "Ewwwwwww",
      },
      {
        id: "/images/memoriesImages/hometown/b15.JPEG",
        src: "/images/memoriesImages/hometown/b15.JPEG",
        alt: "pic",
        caption: "Who knew I'd be PTing to this day.",
        videoSrc: "/images/memoriesImages/hometown/b15.mp4",
      },
      {
        id: "/images/memoriesImages/hometown/b16.JPEG",
        src: "/images/memoriesImages/hometown/b16.JPEG",
        alt: "pic",
        caption: "What pervert took this.",
        videoSrc: "/images/memoriesImages/hometown/b16.mp4",
      },
    ],
  },
];
