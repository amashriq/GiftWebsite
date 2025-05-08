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

  {
    id: "3",
    title: "Parkside Visit",
    eventCaption: "I love you",
    images: [
      {
        id: "/images/memoriesImages/apartment/c1.JPEG",
        src: "/images/memoriesImages/apartment/c1.JPEG",
        alt: "pic",
        caption: "Lunch sized shopping cart.",
        videoSrc: "/images/memoriesImages/apartment/c1.mp4",
      },
      {
        id: "/images/memoriesImages/apartment/c2.JPEG",
        src: "/images/memoriesImages/apartment/c2.JPEG",
        alt: "pic",
        caption: "Omg Turkey burger. Hella delicious.",
      },
      {
        id: "/images/memoriesImages/apartment/c3.JPEG",
        src: "/images/memoriesImages/apartment/c3.JPEG",
        alt: "pic",
        caption: "My girl can EAT.",
        videoSrc: "/images/memoriesImages/apartment/c3.mp4",
      },
      {
        id: "/images/memoriesImages/apartment/c4.JPEG",
        src: "/images/memoriesImages/apartment/c4.JPEG",
        alt: "pic",
        caption: "First time cleaning a toilet, thanks for keeping me company.",
        videoSrc: "/images/memoriesImages/apartment/c4.mp4",
      },
      {
        id: "/images/memoriesImages/apartment/c5.JPEG",
        src: "/images/memoriesImages/apartment/c5.JPEG",
        alt: "pic",
        caption: "Bathroom was looking luxurious if I do say so myself.",
        videoSrc: "/images/memoriesImages/apartment/c5.mp4",
      },
      {
        id: "/images/memoriesImages/apartment/c6.JPEG",
        src: "/images/memoriesImages/apartment/c6.JPEG",
        alt: "pic",
        caption: "How's Will bitch.",
      },
    ],
  },

  {
    id: "4",
    title: "Christmas",
    eventCaption: "I love you",
    images: [
      {
        id: "/images/memoriesImages/christmas/d1.JPEG",
        src: "/images/memoriesImages/christmas/d1.JPEG",
        alt: "pic",
        caption:
          "First of Adeeb's broke man's artwork. Before I had a job, this is what I had to resort to.",
        videoSrc: "/images/memoriesImages/christmas/d1.mp4",
      },
      {
        id: "/images/memoriesImages/christmas/d2.JPG",
        src: "/images/memoriesImages/christmas/d2.JPG",
        alt: "pic",
        caption:
          "It turned out really well! It sucks that it got smeared on the way, but I loved it!",
      },
      {
        id: "/images/memoriesImages/christmas/d3.JPEG",
        src: "/images/memoriesImages/christmas/d3.JPEG",
        alt: "pic",
        caption: "Twin is the cutest. I can't. I love this picture.",
        videoSrc: "/images/memoriesImages/christmas/d3.mp4",
      },
      {
        id: "/images/memoriesImages/christmas/d4.JPG",
        src: "/images/memoriesImages/christmas/d4.JPG",
        alt: "pic",
        caption: "Yes, I'll go to hoco with you!",
      },
      {
        id: "/images/memoriesImages/christmas/d5.JPEG",
        src: "/images/memoriesImages/christmas/d5.JPEG",
        alt: "pic",
        caption:
          "Mwah, I wanna kiss all over your face. You look so adorable in my hat.",
        videoSrc: "/images/memoriesImages/christmas/d5.mp4",
      },
      {
        id: "/images/memoriesImages/christmas/d6.JPEG",
        src: "/images/memoriesImages/christmas/d6.JPEG",
        alt: "pic",
        caption: '"You\'re not supposed to touch him, it ruins the magic."',
        videoSrc: "/images/memoriesImages/christmas/d6.mp4",
      },
      {
        id: "/images/memoriesImages/christmas/d7.JPEG",
        src: "/images/memoriesImages/christmas/d7.JPEG",
        alt: "pic",
        caption:
          '"Omg you asked me to Hoco? You know I\'ve never been asked before," "yeah, I know"',
        videoSrc: "/images/memoriesImages/christmas/d7.mp4",
      },
      {
        id: "/images/memoriesImages/christmas/d8.JPEG",
        src: "/images/memoriesImages/christmas/d8.JPEG",
        alt: "pic",
        caption: '"It\'s good!"',
        videoSrc: "/images/memoriesImages/christmas/d8.mp4",
      },
      {
        id: "/images/memoriesImages/christmas/d9.JPEG",
        src: "/images/memoriesImages/christmas/d9.JPEG",
        alt: "pic",
        caption:
          "Insane turnout. You're the best. Always surpassing expectations.",
        videoSrc: "/images/memoriesImages/christmas/d9.mp4",
      },
    ],
  },

  {
    id: "5",
    title: "Facetime Photos",
    eventCaption: "I love you",
    images: [
      {
        id: "/images/memoriesImages/ftPhotos/a1.JPEG",
        src: "/images/memoriesImages/ftPhotos/a1.JPEG",
        alt: "pic",
        caption: "First long distance facetime. So new for the both of us.",
        videoSrc: "/images/memoriesImages/ftPhotos/a1.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a2.JPEG",
        src: "/images/memoriesImages/ftPhotos/a2.JPEG",
        alt: "pic",
        caption: "Pic so fire had to lock screen it.",
        videoSrc: "/images/memoriesImages/ftPhotos/a2.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a3.JPEG",
        src: "/images/memoriesImages/ftPhotos/a3.JPEG",
        alt: "pic",
        caption: "Actually posted, twin looks good at all times.",
        videoSrc: "/images/memoriesImages/ftPhotos/a3.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a4.JPEG",
        src: "/images/memoriesImages/ftPhotos/a4.JPEG",
        alt: "pic",
        caption: "We should try this one.",
        videoSrc: "/images/memoriesImages/ftPhotos/a4.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a5.JPEG",
        src: "/images/memoriesImages/ftPhotos/a5.JPEG",
        alt: "pic",
        caption: "Twin how did you get so ripped.",
        videoSrc: "/images/memoriesImages/ftPhotos/a5.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a6.JPEG",
        src: "/images/memoriesImages/ftPhotos/a6.JPEG",
        alt: "pic",
        caption: "Cutie with a mustache.",
        videoSrc: "/images/memoriesImages/ftPhotos/a6.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a7.JPEG",
        src: "/images/memoriesImages/ftPhotos/a7.JPEG",
        alt: "pic",
        caption: "Caroline playing super competitive connect 4 game over call.",
        videoSrc: "/images/memoriesImages/ftPhotos/a7.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a8.PNG",
        src: "/images/memoriesImages/ftPhotos/a8.PNG",
        alt: "pic",
        caption: "Moments before the incredible banana over under.",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a9.PNG",
        src: "/images/memoriesImages/ftPhotos/a9.PNG",
        alt: "pic",
        caption: "Under.",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a10.JPEG",
        src: "/images/memoriesImages/ftPhotos/a10.JPEG",
        alt: "pic",
        caption: "Freakaline tries two at once.",
        videoSrc: "/images/memoriesImages/ftPhotos/a10.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a11.JPEG",
        src: "/images/memoriesImages/ftPhotos/a11.JPEG",
        alt: "pic",
        caption: "meow meow meow.",
        videoSrc: "/images/memoriesImages/ftPhotos/a11.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a12.JPEG",
        src: "/images/memoriesImages/ftPhotos/a12.JPEG",
        alt: "pic",
        caption: "This kinda reminds me of the stone face.",
        videoSrc: "/images/memoriesImages/ftPhotos/a12.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a13.JPEG",
        src: "/images/memoriesImages/ftPhotos/a13.JPEG",
        alt: "pic",
        caption: "Love taking photos of my girl.",
        videoSrc: "/images/memoriesImages/ftPhotos/a13.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a14.JPEG",
        src: "/images/memoriesImages/ftPhotos/a14.JPEG",
        alt: "pic",
        caption: "Twin looks really cute this night I couldn't resist.",
        videoSrc: "/images/memoriesImages/ftPhotos/a14.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a15.JPEG",
        src: "/images/memoriesImages/ftPhotos/a15.JPEG",
        alt: "pic",
        caption: "Wonder why I took this.",
        videoSrc: "/images/memoriesImages/ftPhotos/a15.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a17.JPEG",
        src: "/images/memoriesImages/ftPhotos/a17.JPEG",
        alt: "pic",
        caption: "So Chinese.",
        videoSrc: "/images/memoriesImages/ftPhotos/a17.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a18.JPEG",
        src: "/images/memoriesImages/ftPhotos/a18.JPEG",
        alt: "pic",
        caption: "Ayyyy condom spread.",
        videoSrc: "/images/memoriesImages/ftPhotos/a18.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a19.JPEG",
        src: "/images/memoriesImages/ftPhotos/a19.JPEG",
        alt: "pic",
        caption: "Great angle.",
        videoSrc: "/images/memoriesImages/ftPhotos/a19.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a20.JPEG",
        src: "/images/memoriesImages/ftPhotos/a20.JPEG",
        alt: "pic",
        caption: "Pretend you're on a roller coaster.",
        videoSrc: "/images/memoriesImages/ftPhotos/a20.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a21.JPEG",
        src: "/images/memoriesImages/ftPhotos/a21.JPEG",
        alt: "pic",
        caption: "Great tooth brushing form. Just like the movies.",
        videoSrc: "/images/memoriesImages/ftPhotos/a21.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a22.JPEG",
        src: "/images/memoriesImages/ftPhotos/a22.JPEG",
        alt: "pic",
        caption: "Mwah!",
        videoSrc: "/images/memoriesImages/ftPhotos/a22.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a23.JPEG",
        src: "/images/memoriesImages/ftPhotos/a23.JPEG",
        alt: "pic",
        caption: "Legendary e-sex scene. Cuz why was it fire.",
        videoSrc: "/images/memoriesImages/ftPhotos/a23.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a24.JPEG",
        src: "/images/memoriesImages/ftPhotos/a24.JPEG",
        alt: "pic",
        caption: "who's that behind you.",
        videoSrc: "/images/memoriesImages/ftPhotos/a24.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a25.JPEG",
        src: "/images/memoriesImages/ftPhotos/a25.JPEG",
        alt: "pic",
        caption: "First dress fashion show, and twin killed it.",
        videoSrc: "/images/memoriesImages/ftPhotos/a25.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a26.JPEG",
        src: "/images/memoriesImages/ftPhotos/a26.JPEG",
        alt: "pic",
        caption: "AHHHHHH don't hit me.",
        videoSrc: "/images/memoriesImages/ftPhotos/a26.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a27.JPEG",
        src: "/images/memoriesImages/ftPhotos/a27.JPEG",
        alt: "pic",
        caption:
          "Wait hair growth though. You kind of remind me of Ray in this. Just the same amount of bummy.",
        videoSrc: "/images/memoriesImages/ftPhotos/a27.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a28.JPEG",
        src: "/images/memoriesImages/ftPhotos/a28.JPEG",
        alt: "pic",
        caption: "Cutie patootie wears my gifted hat.",
        videoSrc: "/images/memoriesImages/ftPhotos/a28.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a29.JPEG",
        src: "/images/memoriesImages/ftPhotos/a29.JPEG",
        alt: "pic",
        caption: "Fit change but the hat stays on.",
        videoSrc: "/images/memoriesImages/ftPhotos/a29.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a30.JPEG",
        src: "/images/memoriesImages/ftPhotos/a30.JPEG",
        alt: "pic",
        caption: "DON'T HIT ME.",
        videoSrc: "/images/memoriesImages/ftPhotos/a30.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a31.JPEG",
        src: "/images/memoriesImages/ftPhotos/a31.JPEG",
        alt: "pic",
        caption: '"Meow," "You\'re retarded"',
        videoSrc: "/images/memoriesImages/ftPhotos/a31.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a32.JPEG",
        src: "/images/memoriesImages/ftPhotos/a32.JPEG",
        alt: "pic",
        caption: "This is what I see if I lay on your lap.",
        videoSrc: "/images/memoriesImages/ftPhotos/a32.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a33.JPEG",
        src: "/images/memoriesImages/ftPhotos/a33.JPEG",
        alt: "pic",
        caption: "uhhhh. Sorry for taking this.",
        videoSrc: "/images/memoriesImages/ftPhotos/a33.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a34.JPEG",
        src: "/images/memoriesImages/ftPhotos/a34.JPEG",
        alt: "pic",
        caption: "Ooga booga. Yummy.",
        videoSrc: "/images/memoriesImages/ftPhotos/a34.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a35.JPEG",
        src: "/images/memoriesImages/ftPhotos/a35.JPEG",
        alt: "pic",
        caption: "Mwah, Mwah, to rightoline and leftoline.",
        videoSrc: "/images/memoriesImages/ftPhotos/a35.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a36.JPEG",
        src: "/images/memoriesImages/ftPhotos/a36.JPEG",
        alt: "pic",
        caption: "The figure, the body, the waist, the ass, TEA.",
        videoSrc: "/images/memoriesImages/ftPhotos/a36.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a37.JPEG",
        src: "/images/memoriesImages/ftPhotos/a37.JPEG",
        alt: "pic",
        caption: "Something on your lip.",
        videoSrc: "/images/memoriesImages/ftPhotos/a37.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a38.JPEG",
        src: "/images/memoriesImages/ftPhotos/a38.JPEG",
        alt: "pic",
        caption:
          '"Hehe stoppp" you\'re literally flirting with me you literally want me.',
        videoSrc: "/images/memoriesImages/ftPhotos/a38.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a39.JPEG",
        src: "/images/memoriesImages/ftPhotos/a39.JPEG",
        alt: "pic",
        caption: "Wait don't be sad.",
        videoSrc: "/images/memoriesImages/ftPhotos/a39.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a40.JPEG",
        src: "/images/memoriesImages/ftPhotos/a40.JPEG",
        alt: "pic",
        caption: "Classic Camel and Cat.",
        videoSrc: "/images/memoriesImages/ftPhotos/a40.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a41.JPEG",
        src: "/images/memoriesImages/ftPhotos/a41.JPEG",
        alt: "pic",
        caption: "Barry banging on his chest.",
        videoSrc: "/images/memoriesImages/ftPhotos/a41.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a42.JPEG",
        src: "/images/memoriesImages/ftPhotos/a42.JPEG",
        alt: "pic",
        caption: "Caroline rp's with a stuffed animal after a bad day.",
        videoSrc: "/images/memoriesImages/ftPhotos/a42.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a43.JPEG",
        src: "/images/memoriesImages/ftPhotos/a43.JPEG",
        alt: "pic",
        caption: "Barry is beating Caroline's ass after a rp gone bad.",
        videoSrc: "/images/memoriesImages/ftPhotos/a43.mp4",
      },
      {
        id: "/images/memoriesImages/ftPhotos/a44.JPEG",
        src: "/images/memoriesImages/ftPhotos/a44.JPEG",
        alt: "pic",
        caption:
          "Barry is doing jumping jacks on the D after a rp gone sexual.",
        videoSrc: "/images/memoriesImages/ftPhotos/a44.mp4",
      },
    ],
  },
];
