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
    eventCaption:
      "I'll never forget going out with you that December. When I tell people how we met, this is the day I talk about. I never clicked with someone like I did with you that night, and I'm so glad I did. It was so stupid too. Just watching reels in a sorority house basement, being stupid, and occasionally staring at each other. It was the night we fell in love.",
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
        caption: "So colorful. Daisy needs to get her real man (Ostap).",
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
    eventCaption:
      "I can safely say that was the best winter break I've ever had. Being with someone special during the holidays was everything I imagined it was and more. Even after you left, I still had fun calling you everyday while I went about my day to day life. I can't wait for the summer because every second with you is a blast.",
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
    id: "10",
    title: "Tattoo",
    eventCaption:
      "I was really happy when you asked me to come with you while you got your tattoo. You were really forward when it came to hanging out with me, and it took a lot of pressure off of me. I was never unsure about whether you wanted to spend time with me, and was never left wondering if you were having as much fun as I was while we were together. Watching you get a tattoo was super fun, and shout out to the guy for giving me aux.",
    images: [
      {
        id: "/images/memoriesImages/tattoo/a1.jpg",
        src: "/images/memoriesImages/tattoo/a1.jpg",
        alt: "pic",
        caption: "The way she poses is just so tough.",
        videoSrc: "/images/memoriesImages/tattoo/a1.mp4",
      },
      {
        id: "/images/memoriesImages/tattoo/a2.jpg",
        src: "/images/memoriesImages/tattoo/a2.jpg",
        alt: "pic",
        caption: "peace.",
        videoSrc: "/images/memoriesImages/tattoo/a2.mp4",
      },
      {
        id: "/images/memoriesImages/tattoo/a3.jpg",
        src: "/images/memoriesImages/tattoo/a3.jpg",
        alt: "pic",
        caption: "And a lot of UNDERBOOOOB.",
        videoSrc: "/images/memoriesImages/tattoo/a3.mp4",
      },
      {
        id: "/images/memoriesImages/tattoo/a4.jpg",
        src: "/images/memoriesImages/tattoo/a4.jpg",
        alt: "pic",
        caption: "Try not to laugh gang.",
        videoSrc: "/images/memoriesImages/tattoo/a4.mp4",
      },
      {
        id: "/images/memoriesImages/tattoo/a5.jpg",
        src: "/images/memoriesImages/tattoo/a5.jpg",
        alt: "pic",
        caption: "Smile!",
        videoSrc: "/images/memoriesImages/tattoo/a5.mp4",
      },
      {
        id: "/images/memoriesImages/tattoo/a6.jpg",
        src: "/images/memoriesImages/tattoo/a6.jpg",
        alt: "pic",
        caption: "And tattoo finished! Lilies, so pretty.",
        videoSrc: "/images/memoriesImages/tattoo/a6.mp4",
      },
      {
        id: "/images/memoriesImages/tattoo/a7.jpg",
        src: "/images/memoriesImages/tattoo/a7.jpg",
        alt: "pic",
        caption:
          "Who even is this? Why are they sitting in your car? Why does the car have no bumper?",
      },
    ],
  },

  {
    id: "3",
    title: "Parkside Visit",
    eventCaption:
      "I look back on this day fondly now. I only remember the good stuff to be honest. It was really fun spending a day with you, and I think it was representative of what our breaks would be like if weren't for our (your) parents. Just spending the day together, enjoying each other's presence. I think days like this is what love is, being happy doing anything together.",
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
    eventCaption:
      "My first Christmas with a girl and it was incredible. Next year we are definitely making plans on Christmas Eve, when everything isn't closed, but we made the best out of what we had. I was so impressed by your gift, the beginning of a long run of one upping me, and love the amount of effort you put into everything you do. I love you.",
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
    title: "New Year's Eve",
    eventCaption:
      "Starting off the year right! I had a lot of fun going out too. Drinking with you is always a treat, seeing you act all silly and clingly, its the most adorable thing in the world. Homemade hotpot also hit. Loved the glasses too, they really made the night.",
    images: [
      {
        id: "/images/memoriesImages/nye/a1.JPEG",
        src: "/images/memoriesImages/nye/a1.JPEG",
        alt: "pic",
        caption:
          "Hotpot expert adeeb cooks up for the family. So blessed to be able to cook for my girl.",
        videoSrc: "/images/memoriesImages/nye/a1.mp4",
      },
      {
        id: "/images/memoriesImages/nye/a2.JPEG",
        src: "/images/memoriesImages/nye/a2.JPEG",
        alt: "pic",
        caption: "And he's just so kawaii isn't he.",
        videoSrc: "/images/memoriesImages/nye/a2.mp4",
      },
      {
        id: "/images/memoriesImages/nye/a3.JPG",
        src: "/images/memoriesImages/nye/a3.JPG",
        alt: "pic",
        caption: "The picture sitting right on my desk. Love you.",
      },
      {
        id: "/images/memoriesImages/nye/a4.jpg",
        src: "/images/memoriesImages/nye/a4.jpg",
        alt: "pic",
        caption: "Caroline get's lit and dances at the bar.",
      },
      {
        id: "/images/memoriesImages/nye/a5.JPEG",
        src: "/images/memoriesImages/nye/a5.JPEG",
        alt: "pic",
        caption: "2025 hea-",
      },
      {
        id: "/images/memoriesImages/nye/a6.JPEG",
        src: "/images/memoriesImages/nye/a6.JPEG",
        alt: "pic",
        caption: "She's so chill. NCaroline.",
      },
      {
        id: "/images/memoriesImages/nye/a7.jpg",
        src: "/images/memoriesImages/nye/a7.jpg",
        alt: "pic",
        caption: "Guess who was okay after this and who wasn't.",
      },
      {
        id: "/images/memoriesImages/nye/a8.JPEG",
        src: "/images/memoriesImages/nye/a8.JPEG",
        alt: "pic",
        caption: "Second time's the charm!",
      },
      {
        id: "/images/memoriesImages/nye/a10.JPEG",
        src: "/images/memoriesImages/nye/a10.JPEG",
        alt: "pic",
        caption: "I went outta control the next morning.",
      },
      {
        id: "/images/memoriesImages/nye/a11.JPG",
        src: "/images/memoriesImages/nye/a11.JPG",
        alt: "pic",
        caption: "This is some dynamic duo shit. We should make a team.",
      },
    ],
  },

  {
    id: "6",
    title: "Music",
    eventCaption:
      "A small little reminder that we are compatible in every way.",
    images: [
      {
        id: "/images/memoriesImages/music/a1.PNG",
        src: "/images/memoriesImages/music/a1.PNG",
        alt: "pic",
        caption:
          "Up three percent since then! Me and my bitch, we be off them drugs.",
      },
      {
        id: "/images/memoriesImages/music/a2.PNG",
        src: "/images/memoriesImages/music/a2.PNG",
        alt: "pic",
        caption: "This might've been a sign.",
      },
    ],
  },

  {
    id: "7",
    title: "Partyaline",
    eventCaption:
      "Seeing you go back was hard, but man did you look good when you went out. It made me a little jealous, that everyone got to see just how beautiful you are, but you got to let a baddie be a baddie.",
    images: [
      {
        id: "/images/memoriesImages/partyaline/a1.JPEG",
        src: "/images/memoriesImages/partyaline/a1.JPEG",
        alt: "pic",
        caption: "Absolutely wicked choice of alc.",
      },
      {
        id: "/images/memoriesImages/partyaline/a2.JPEG",
        src: "/images/memoriesImages/partyaline/a2.JPEG",
        alt: "pic",
        caption: "What going out on Monday does to someone.",
      },
      {
        id: "/images/memoriesImages/partyaline/a3.JPEG",
        src: "/images/memoriesImages/partyaline/a3.JPEG",
        alt: "pic",
        caption: "Body tea and bikini top eats. Sorority Caroline is here!",
      },
      {
        id: "/images/memoriesImages/partyaline/a4.JPEG",
        src: "/images/memoriesImages/partyaline/a4.JPEG",
        alt: "pic",
        caption: "nice tongue.",
      },
      {
        id: "/images/memoriesImages/partyaline/a5.JPEG",
        src: "/images/memoriesImages/partyaline/a5.JPEG",
        alt: "pic",
        caption: "First time we see grumpyline. I wonder why you're so upset.",
      },
      {
        id: "/images/memoriesImages/partyaline/a6.JPEG",
        src: "/images/memoriesImages/partyaline/a6.JPEG",
        alt: "pic",
        caption: "Yayy happy and I love the bangs!",
      },
      {
        id: "/images/memoriesImages/partyaline/a7.JPEG",
        src: "/images/memoriesImages/partyaline/a7.JPEG",
        alt: "pic",
        caption:
          "Such a silly little picture. Really liking the accessories. Sunglasses, bracelets, and the bag.",
      },
      {
        id: "/images/memoriesImages/partyaline/a8.png",
        src: "/images/memoriesImages/partyaline/a8.png",
        alt: "pic",
        caption: "Didn't even see the red.",
      },
      {
        id: "/images/memoriesImages/partyaline/a9.JPEG",
        src: "/images/memoriesImages/partyaline/a9.JPEG",
        alt: "pic",
        caption: "Who's dick is that.",
      },
      {
        id: "/images/memoriesImages/partyaline/a10.JPEG",
        src: "/images/memoriesImages/partyaline/a10.JPEG",
        alt: "pic",
        caption: "Who is Adeed.",
      },
      {
        id: "/images/memoriesImages/partyaline/a11.JPEG",
        src: "/images/memoriesImages/partyaline/a11.JPEG",
        alt: "pic",
        caption:
          "Really liked these devil horns. Hope I see them again one day.",
      },
      {
        id: "/images/memoriesImages/partyaline/a12.JPEG",
        src: "/images/memoriesImages/partyaline/a12.JPEG",
        alt: "pic",
        caption: "Good censor on the d, now it really does look like my name!",
        videoSrc: "/images/memoriesImages/partyaline/a12.mp4",
      },
      {
        id: "/images/memoriesImages/partyaline/a13.JPEG",
        src: "/images/memoriesImages/partyaline/a13.JPEG",
        alt: "pic",
        caption: "Not even a bad look.",
        videoSrc: "/images/memoriesImages/partyaline/a13.mp4",
      },
      {
        id: "/images/memoriesImages/partyaline/a14.JPEG",
        src: "/images/memoriesImages/partyaline/a14.JPEG",
        alt: "pic",
        caption: "Sucks that you're cleaning it but what a fire vid.",
        videoSrc: "/images/memoriesImages/partyaline/a14.mp4",
      },
      {
        id: "/images/memoriesImages/partyaline/a15.JPG",
        src: "/images/memoriesImages/partyaline/a15.JPG",
        alt: "pic",
        caption: "My tube top queen. Fits always on point.",
      },
      {
        id: "/images/memoriesImages/partyaline/a16.jpg",
        src: "/images/memoriesImages/partyaline/a16.jpg",
        alt: "pic",
        caption:
          '"does he remember who I am?" "Duh." We should have seen the signs.',
        videoSrc: "/images/memoriesImages/partyaline/a16.mp4",
      },
    ],
  },

  {
    id: "8",
    title: "First Visit",
    eventCaption:
      "Looking back, it was a little crazy that I was willing to fly out to see you, but still not ask you out. I had so much fun visiting. Evanston and Chicago just felt so foreign to me, it was like we were exploring a different country. I really liked walking while holding hands, showing the world that you were mine.",
    images: [
      {
        id: "/images/memoriesImages/firstVisit/a1.JPEG",
        src: "/images/memoriesImages/firstVisit/a1.JPEG",
        alt: "pic",
        caption:
          "So glad to be in the north. That's why I look so happy. I love the cold!",
      },
      {
        id: "/images/memoriesImages/firstVisit/a2.JPEG",
        src: "/images/memoriesImages/firstVisit/a2.JPEG",
        alt: "pic",
        caption:
          "Really good form with the brushing. I bet your teeth are super clean.",
        videoSrc: "/images/memoriesImages/firstVisit/a2.mp4",
      },
      {
        id: "/images/memoriesImages/firstVisit/a3.JPG",
        src: "/images/memoriesImages/firstVisit/a3.JPG",
        alt: "pic",
        caption: "😛",
      },
      {
        id: "/images/memoriesImages/firstVisit/a4.JPG",
        src: "/images/memoriesImages/firstVisit/a4.JPG",
        alt: "pic",
        caption:
          "This is one of my favorite pictures of us. It might be my favorite actually. Really love it when you're all over me.",
      },
      {
        id: "/images/memoriesImages/firstVisit/a5.JPEG",
        src: "/images/memoriesImages/firstVisit/a5.JPEG",
        alt: "pic",
        caption: "Always happy to see me aren't you.",
        videoSrc: "/images/memoriesImages/firstVisit/a5.mp4",
      },
      {
        id: "/images/memoriesImages/firstVisit/a6.JPG",
        src: "/images/memoriesImages/firstVisit/a6.JPG",
        alt: "pic",
        caption: "Didn't flick it :(",
      },
      {
        id: "/images/memoriesImages/firstVisit/a7.JPEG",
        src: "/images/memoriesImages/firstVisit/a7.JPEG",
        alt: "pic",
        caption:
          "Hate how I look but I bet you don't so I'll leave this here. Practice makes perfect!",
        videoSrc: "/images/memoriesImages/firstVisit/a7.mp4",
      },
      {
        id: "/images/memoriesImages/firstVisit/a8.JPEG",
        src: "/images/memoriesImages/firstVisit/a8.JPEG",
        alt: "pic",
        caption: "Hecka cute. Weren't even dating yet.",
      },
      {
        id: "/images/memoriesImages/firstVisit/a9.JPEG",
        src: "/images/memoriesImages/firstVisit/a9.JPEG",
        alt: "pic",
        caption:
          "Always thinking thinking thinking. Do you ever wander what it is that's in my mind?",
        videoSrc: "/images/memoriesImages/firstVisit/a9.mp4",
      },
      {
        id: "/images/memoriesImages/firstVisit/a10.JPEG",
        src: "/images/memoriesImages/firstVisit/a10.JPEG",
        alt: "pic",
        caption: "Pervert.",
        videoSrc: "/images/memoriesImages/firstVisit/a10.mp4",
      },
      {
        id: "/images/memoriesImages/firstVisit/a11.JPEG",
        src: "/images/memoriesImages/firstVisit/a11.JPEG",
        alt: "pic",
        caption: "This reminds me of a certain painting.",
      },
      {
        id: "/images/memoriesImages/firstVisit/a12.JPEG",
        src: "/images/memoriesImages/firstVisit/a12.JPEG",
        alt: "pic",
        caption: "Guy in the painting is so tough.",
      },
      {
        id: "/images/memoriesImages/firstVisit/a13.JPEG",
        src: "/images/memoriesImages/firstVisit/a13.JPEG",
        alt: "pic",
        caption:
          "Thanks for tying my shoe, and always taking care of me. You're the best! I also really love this picture.",
      },
      {
        id: "/images/memoriesImages/firstVisit/a14.JPEG",
        src: "/images/memoriesImages/firstVisit/a14.JPEG",
        alt: "pic",
        caption: "First date. Kinda nervous.",
        videoSrc: "/images/memoriesImages/firstVisit/a14.mp4",
      },
      {
        id: "/images/memoriesImages/firstVisit/a15.JPEG",
        src: "/images/memoriesImages/firstVisit/a15.JPEG",
        alt: "pic",
        caption: "Got over my nerves. Now ready to eat!",
        videoSrc: "/images/memoriesImages/firstVisit/a15.mp4",
      },
      {
        id: "/images/memoriesImages/firstVisit/a16.JPEG",
        src: "/images/memoriesImages/firstVisit/a16.JPEG",
        alt: "pic",
        caption: "Bruh why was this pizza HELLA good.",
        videoSrc: "/images/memoriesImages/firstVisit/a16.mp4",
      },
      {
        id: "/images/memoriesImages/firstVisit/a17.JPG",
        src: "/images/memoriesImages/firstVisit/a17.JPG",
        alt: "pic",
        caption:
          "This is the best picture of me that we have. Weren't even dating yet btw.",
      },
      {
        id: "/images/memoriesImages/firstVisit/a18.JPEG",
        src: "/images/memoriesImages/firstVisit/a18.JPEG",
        alt: "pic",
        caption: "Might be top three. You make a good thug.",
      },
      {
        id: "/images/memoriesImages/firstVisit/a19.JPEG",
        src: "/images/memoriesImages/firstVisit/a19.JPEG",
        alt: "pic",
        caption: "To the next visit!",
        videoSrc: "/images/memoriesImages/firstVisit/a19.mp4",
      },
      {
        id: "/images/memoriesImages/firstVisit/a20.jpg",
        src: "/images/memoriesImages/firstVisit/a20.jpg",
        alt: "pic",
        caption:
          "My little cutie. I love these pictures where we're touching somehow. More of this please!",
      },
    ],
  },

  {
    id: "9",
    title: "Second Visit",
    eventCaption:
      "Seeing you after nearly 10 hours of delay after delay is actually what I imagine entering heaven is like. As soon as I put all my stuff down, I forgot about how long of a day it had been, and everything in my mind became about you. It was worth every penny, and showed me that long distance didn't matter as long as we saw each other eventually.",
    images: [
      {
        id: "/images/memoriesImages/secondVisit/a1.JPG",
        src: "/images/memoriesImages/secondVisit/a1.JPG",
        alt: "pic",
        caption: "Put some clothes on, freak.",
      },
      {
        id: "/images/memoriesImages/secondVisit/a2.JPG",
        src: "/images/memoriesImages/secondVisit/a2.JPG",
        alt: "pic",
        caption: "Burrito and wine night unmatched, can't lie.",
      },
      {
        id: "/images/memoriesImages/secondVisit/a3.JPEG",
        src: "/images/memoriesImages/secondVisit/a3.JPEG",
        alt: "pic",
        caption: "Second date! Tacos were some SHIT.",
        videoSrc: "/images/memoriesImages/secondVisit/a3.mp4",
      },
      {
        id: "/images/memoriesImages/secondVisit/a4.JPEG",
        src: "/images/memoriesImages/secondVisit/a4.JPEG",
        alt: "pic",
        caption: "<3 <3 at least your food was good :(",
        videoSrc: "/images/memoriesImages/secondVisit/a4.mp4",
      },
      {
        id: "/images/memoriesImages/secondVisit/a5.JPEG",
        src: "/images/memoriesImages/secondVisit/a5.JPEG",
        alt: "pic",
        caption: "Caroline always the first one out the door!",
      },
      {
        id: "/images/memoriesImages/secondVisit/a6.JPEG",
        src: "/images/memoriesImages/secondVisit/a6.JPEG",
        alt: "pic",
        caption: "Never happier than when I'm leaving.",
        videoSrc: "/images/memoriesImages/secondVisit/a6.mp4",
      },
      {
        id: "/images/memoriesImages/secondVisit/a7.JPG",
        src: "/images/memoriesImages/secondVisit/a7.JPG",
        alt: "pic",
        caption: "This is super romantic. Kiss kiss.",
      },
      {
        id: "/images/memoriesImages/secondVisit/a8.JPG",
        src: "/images/memoriesImages/secondVisit/a8.JPG",
        alt: "pic",
        caption: "What a dress. I'm in love.",
      },
    ],
  },

  {
    id: "11",
    title: "Caroline to CP!",
    eventCaption: "I love you",
    images: [
      {
        id: "/images/memoriesImages/yourVisit/a1.JPEG",
        src: "/images/memoriesImages/yourVisit/a1.JPEG",
        alt: "pic",
        caption: "fire close up.",
      },
      {
        id: "/images/memoriesImages/yourVisit/a2.jpg",
        src: "/images/memoriesImages/yourVisit/a2.jpg",
        alt: "pic",
        caption: "Wait why are you hella tough though.",
        videoSrc: "/images/memoriesImages/yourVisit/a2.mp4",
      },
      {
        id: "/images/memoriesImages/yourVisit/a3.jpg",
        src: "/images/memoriesImages/yourVisit/a3.jpg",
        alt: "pic",
        caption: "More touchy pics please!",
      },
      {
        id: "/images/memoriesImages/yourVisit/a4.JPEG",
        src: "/images/memoriesImages/yourVisit/a4.JPEG",
        alt: "pic",
        caption: "You have big eyes, small face, I like.",
        videoSrc: "/images/memoriesImages/yourVisit/a4.mp4",
      },
      {
        id: "/images/memoriesImages/yourVisit/a5.JPEG",
        src: "/images/memoriesImages/yourVisit/a5.JPEG",
        alt: "pic",
        caption: "My driver just has so much swag.",
        videoSrc: "/images/memoriesImages/yourVisit/a5.mp4",
      },
      {
        id: "/images/memoriesImages/yourVisit/a6.JPEG",
        src: "/images/memoriesImages/yourVisit/a6.JPEG",
        alt: "pic",
        caption: "Why you geeked twin. You didn't throw up after this did you?",
        videoSrc: "/images/memoriesImages/yourVisit/a6.mp4",
      },
      {
        id: "/images/memoriesImages/yourVisit/a7.JPEG",
        src: "/images/memoriesImages/yourVisit/a7.JPEG",
        alt: "pic",
        caption: "Do I look like a monkey guys?",
        videoSrc: "/images/memoriesImages/yourVisit/a7.mp4",
      },
      {
        id: "/images/memoriesImages/yourVisit/a8.jpg",
        src: "/images/memoriesImages/yourVisit/a8.jpg",
        alt: "pic",
        caption: "Yucky.",
        videoSrc: "/images/memoriesImages/yourVisit/a8.mp4",
      },
      {
        id: "/images/memoriesImages/yourVisit/a9.jpg",
        src: "/images/memoriesImages/yourVisit/a9.jpg",
        alt: "pic",
        caption: "Sisterly love.",
        videoSrc: "/images/memoriesImages/yourVisit/a9.mp4",
      },
      {
        id: "/images/memoriesImages/yourVisit/a10.JPEG",
        src: "/images/memoriesImages/yourVisit/a10.JPEG",
        alt: "pic",
        caption: "Four monkeys and a ...",
        videoSrc: "/images/memoriesImages/yourVisit/a10.mp4",
      },
      {
        id: "/images/memoriesImages/yourVisit/a11.JPG",
        src: "/images/memoriesImages/yourVisit/a11.JPG",
        alt: "pic",
        caption: "Look at that hip pop, she know she a baddie.",
      },
      {
        id: "/images/memoriesImages/yourVisit/a12.JPG",
        src: "/images/memoriesImages/yourVisit/a12.JPG",
        alt: "pic",
        caption: "Aww my little girl, you don't look sick at all!",
      },
      {
        id: "/images/memoriesImages/yourVisit/a13.JPG",
        src: "/images/memoriesImages/yourVisit/a13.JPG",
        alt: "pic",
        caption: "Running it back fs.",
      },
    ],
  },

  {
    id: "12",
    title: "Lunch is 12",
    eventCaption: "I love you",
    images: [
      {
        id: "/images/memoriesImages/young/a1.PNG",
        src: "/images/memoriesImages/young/a1.PNG",
        alt: "pic",
        caption: "Lunch",
      },
      {
        id: "/images/memoriesImages/young/a2.PNG",
        src: "/images/memoriesImages/young/a2.PNG",
        alt: "pic",
        caption: "Breakfast",
      },
      {
        id: "/images/memoriesImages/young/a3.jpg",
        src: "/images/memoriesImages/young/a3.jpg",
        alt: "pic",
        caption: "Why did you do this.",
      },
    ],
  },

  {
    id: "13",
    title: "Selfies",
    eventCaption: "I love you",
    images: [
      {
        id: "/images/memoriesImages/selfies/a1.JPG",
        src: "/images/memoriesImages/selfies/a1.JPG",
        alt: "pic",
        caption: "Why am I fine monkey shyt tho??",
      },
      {
        id: "/images/memoriesImages/selfies/a2.jpg",
        src: "/images/memoriesImages/selfies/a2.jpg",
        alt: "pic",
        caption:
          "One of the first fit pics. Feel good FDOC. Thanks Kevin for the top!",
      },
      {
        id: "/images/memoriesImages/selfies/a3.jpg",
        src: "/images/memoriesImages/selfies/a3.jpg",
        alt: "pic",
        caption:
          "Birth of Shiesty Adeeb. You can tell I have the eyes of a thug.",
      },
      {
        id: "/images/memoriesImages/selfies/a4.JPEG",
        src: "/images/memoriesImages/selfies/a4.JPEG",
        alt: "pic",
        caption:
          "Don't really know what was happening here but you look sad. I remember when I first saw this I thought you were laying down on a couch. Also FUCK those headphones.",
      },
      {
        id: "/images/memoriesImages/selfies/a5.JPEG",
        src: "/images/memoriesImages/selfies/a5.JPEG",
        alt: "pic",
        caption:
          "Yayyyy heart. I love you too. Even in sadness you make sure to reassure me!",
      },
      {
        id: "/images/memoriesImages/selfies/a6.JPEG",
        src: "/images/memoriesImages/selfies/a6.JPEG",
        alt: "pic",
        caption:
          "Even though you look sad, I can't even be upset cause you're just so cute. Sorry.",
      },
      {
        id: "/images/memoriesImages/selfies/a7.JPEG",
        src: "/images/memoriesImages/selfies/a7.JPEG",
        alt: "pic",
        caption: "Shiesty Adeeb reveals himself as a young, nice, humble boy.",
        videoSrc: "/images/memoriesImages/selfies/a7.mp4",
      },
      {
        id: "/images/memoriesImages/selfies/a8.JPG",
        src: "/images/memoriesImages/selfies/a8.JPG",
        alt: "pic",
        caption:
          "This is really cute. I think you just look amazing in everything. Super tough. Thanks for the photo carry.",
      },
      {
        id: "/images/memoriesImages/selfies/a9.JPG",
        src: "/images/memoriesImages/selfies/a9.JPG",
        alt: "pic",
        caption:
          "Wow, pupils are really small here. I looked it up and apparently that happens when you do heroin...",
      },
      {
        id: "/images/memoriesImages/selfies/a10.jpg",
        src: "/images/memoriesImages/selfies/a10.jpg",
        alt: "pic",
        caption: "More Sadoline. Curse Winter quarter.",
      },
      {
        id: "/images/memoriesImages/selfies/a11.jpg",
        src: "/images/memoriesImages/selfies/a11.jpg",
        alt: "pic",
        caption:
          "I don't know what this is but I fw the view. Twin always looks good in red.",
      },
      {
        id: "/images/memoriesImages/selfies/a12.JPEG",
        src: "/images/memoriesImages/selfies/a12.JPEG",
        alt: "pic",
        caption:
          "hair is EATINGGG!!! So glad you got bangs, took you from a 10 to lunch. Like literally the most beautiful girl I know. My dream girl fr.",
      },
      {
        id: "/images/memoriesImages/selfies/a13.JPEG",
        src: "/images/memoriesImages/selfies/a13.JPEG",
        alt: "pic",
        caption: "You may not think so, but this works too. For me at least.",
      },
      {
        id: "/images/memoriesImages/selfies/a14.JPG",
        src: "/images/memoriesImages/selfies/a14.JPG",
        alt: "pic",
        caption:
          "Rare glimpse of Happyline in trying times. Face is hella symmetrical too.",
      },
      {
        id: "/images/memoriesImages/selfies/a15.JPEG",
        src: "/images/memoriesImages/selfies/a15.JPEG",
        alt: "pic",
        caption:
          "My stem queen doing whatever it is she does in Formula. Keep up the good work! vroom vroom.",
      },
      {
        id: "/images/memoriesImages/selfies/a16.JPG",
        src: "/images/memoriesImages/selfies/a16.JPG",
        alt: "pic",
        caption: "Hi pretty.",
      },
      {
        id: "/images/memoriesImages/selfies/a17.jpg",
        src: "/images/memoriesImages/selfies/a17.jpg",
        alt: "pic",
        caption: "Caroline doing volunteer work for Make-A-Wish.",
        videoSrc: "/images/memoriesImages/selfies/a17.mp4",
      },
      {
        id: "/images/memoriesImages/selfies/a18.JPG",
        src: "/images/memoriesImages/selfies/a18.JPG",
        alt: "pic",
        caption: "Caroline fucking up that napoleon ice cream.",
      },
      {
        id: "/images/memoriesImages/selfies/a19.JPG",
        src: "/images/memoriesImages/selfies/a19.JPG",
        alt: "pic",
        caption: "Do you know that in this photo, you are actually NAKED. lfg!",
      },
    ],
  },
  {
    id: "14",
    title: "Miscellaneous",
    eventCaption: "I love you",
    images: [
      {
        id: "/images/memoriesImages/random/a1.JPEG",
        src: "/images/memoriesImages/random/a1.JPEG",
        alt: "pic",
        caption: "Let me LIVE please. So glad I went to the gym with you.",
      },
      {
        id: "/images/memoriesImages/random/a2.jpg",
        src: "/images/memoriesImages/random/a2.jpg",
        alt: "pic",
        caption: "Literally us.",
        videoSrc: "/images/memoriesImages/random/a2.mp4",
      },
      {
        id: "/images/memoriesImages/random/a3.jpg",
        src: "/images/memoriesImages/random/a3.jpg",
        alt: "pic",
        caption: "Barry no diffs this guy.",
      },
      {
        id: "/images/memoriesImages/random/a4.PNG",
        src: "/images/memoriesImages/random/a4.PNG",
        alt: "pic",
        caption: "You hopefully.",
      },
      {
        id: "/images/memoriesImages/random/a5.png",
        src: "/images/memoriesImages/random/a5.png",
        alt: "pic",
        caption:
          "I remember being really happy to see this. I looked at it a lot, thinking that I was definitely going to become your boyfriend soon.",
      },
      {
        id: "/images/memoriesImages/random/a6.JPEG",
        src: "/images/memoriesImages/random/a6.JPEG",
        alt: "pic",
        caption: "Rocky could never replace me. But he looks cute trying.",
      },
      {
        id: "/images/memoriesImages/random/a7.png",
        src: "/images/memoriesImages/random/a7.png",
        alt: "pic",
        caption: "Incredible stroke game from caroline.",
        videoSrc: "/images/memoriesImages/random/a7.MP4",
      },
      {
        id: "/images/memoriesImages/random/a8.PNG",
        src: "/images/memoriesImages/random/a8.PNG",
        alt: "pic",
        caption:
          "I'm just too nice in the dms. I think I kept texting you on insta anyway. I just love reels!",
      },
      {
        id: "/images/memoriesImages/random/a9.png",
        src: "/images/memoriesImages/random/a9.png",
        alt: "pic",
        caption:
          "Why his lips look like a bootyhole. Also fuck you. Whistling is not tough.",
      },
      {
        id: "/images/memoriesImages/random/a10.JPEG",
        src: "/images/memoriesImages/random/a10.JPEG",
        alt: "pic",
        caption:
          "The last time these two ever hung out. Poor Daisy, men just can't stand her.",
      },
      {
        id: "/images/memoriesImages/random/a11.JPG",
        src: "/images/memoriesImages/random/a11.JPG",
        alt: "pic",
        caption:
          "Taken hours before I asked you out. We really should not leave the house looking like this.",
      },
      {
        id: "/images/memoriesImages/random/a12.jpg",
        src: "/images/memoriesImages/random/a12.jpg",
        alt: "pic",
        caption:
          "You sent me this today, and I just could not stop smiling watching it. Twin, everything you do is just too cute. Keep being you, alright?",
        videoSrc: "/images/memoriesImages/random/a12.mp4",
      },
    ],
  },

  {
    id: "15",
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
