import { SocialLink } from "./socialLinks";

export enum SroriesBlockType {
  TEXT = "text",
  IMAGE = "image",
  TITLE = "title",
  CHECK_LIST = "checkList",
  IMAGE_TEXT = "imageText",
}

interface StoriesBlock {
  id: string;
  type: SroriesBlockType;
  title?: string;
  text?: string;
  texts?: { id: string; text: string }[];
  checkList?: { id: string; text: string }[];
  image?: string;
}

interface Story {
  id: string;
  title: string;
  date: string;
  type: string;
  image: string;
  userName: string;
  socialLinks: SocialLink[];
  blocks: StoriesBlock[];
  comments?: string;
}

export const stories: Story[] = [
  {
    id: "1",
    title: "Finest Get - Together",
    date: "April 7, 2020",
    type: "TRAVEL",
    image: "https://picsum.photos/920/446?random=1",
    userName: "Jery",
    socialLinks: [
      {
        id: "1",
        name: "twitter",
        link: "#",
      },
      {
        id: "2",
        name: "be",
        link: "#",
      },
      {
        id: "4",
        name: "linkedIn",
        link: "#",
      },
      {
        id: "5",
        name: "dribbble",
        link: "#",
      },
    ],
    blocks: [
      {
        id: "1",
        type: SroriesBlockType.TEXT,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui adipiscing fringilla sit mus netus quam id. Arcu tortor velit enim, sit amet, sit arcu dictum. Est eget tempus bibendum non laoreet ultrices tristique. Duis urna, aliquam velit aliquam vitae. Diam nullam porta non semper. Eu, nisl gravida pulvinar erat odio amet vitae ac quis. Mi sagittis, blandit tellus amet. Cursus id duis sit cursus integer eu augue euismod vitae. .",
      },
      {
        id: "3",
        type: SroriesBlockType.TITLE,
        title: "Our vacation ",
      },
      {
        id: "2",
        type: SroriesBlockType.TEXT,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui adipiscing fringilla sit mus netus quam id. Arcu tortor velit enim, sit amet, sit arcu dictum. Est eget tempus bibendum non laoreet ultrices tristique. Duis urna, aliquam velit aliquam vitae. Diam nullam porta non semper. Eu, nisl gravida pulvinar erat odio amet vitae ac quis. Mi sagittis, blandit tellus amet. Cursus id duis sit cursus integer eu augue euismod vitae. .",
      },

      {
        id: "4",
        type: SroriesBlockType.TEXT,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui adipiscing fringilla sit mus netus quam id. Arcu tortor velit enim, sit amet, sit arcu dictum.",
      },

      {
        id: "5",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=1",
        texts: [
          {
            id: "1",
            text: "Consectetur adipiscing elit. Pellentesque viverra faucibus sed ipsum eget sodales. Porttitor semper urna leo tempus amet amet pellentesque commodo. Fermentum vel leo bibendum cursus at enim nibh metus, fermentum. Velit accumsan.",
          },
          {
            id: "2",
            text: "Porttitor semper urna leo tempus amet amet pellentesque commodo. Fermentum vel leo bibendum cursus at enim nibh metus, fermentum.",
          },
          {
            id: "3",
            text: "Amet, pellentesque tortor, velit etiam viverra. Cursus facilisis in libero consectetur etiam turpis. Augue facilisi cum ullamcorper habitasse hac. Non tempor egestas tristique lectus placerat posuere ullamcorper. Odio malesuada ut diam dui. Porta at massa etiam blandit. Quis tempus, sed morbi volutpat sed sagittis, sit. Sit aenean egestas et sit sit porta nam et purus. Adipiscing ullamcorper vel molestie risus in.",
          },
        ],
      },
      {
        id: "6",
        type: SroriesBlockType.CHECK_LIST,
        checkList: [
          {
            id: "1",
            text: "Consectetur adipiscing elit. Dui adipiscing fringilla sit mus netus quam id.",
          },
          {
            id: "2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id cras sit.",
          },
          {
            id: "3",
            text: "Lorem ipsum dolor sit amet.",
          },
        ],
      },

      {
        id: "7",
        type: SroriesBlockType.TITLE,
        title: `let's relax`,
      },

      {
        id: "8",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=4",
        texts: [
          {
            id: "1",
            text: "Consectetur adipiscing elit. Pellentesque viverra faucibus sed ipsum eget sodales. Porttitor semper urna leo tempus amet amet pellentesque commodo. Fermentum vel leo bibendum cursus at enim nibh metus, fermentum. Velit accumsan.",
          },
          {
            id: "2",
            text: "Porttitor semper urna leo tempus amet amet pellentesque commodo. Fermentum vel leo bibendum cursus at enim nibh metus, fermentum.",
          },
          {
            id: "3",
            text: "Amet, pellentesque tortor, velit etiam viverra. Cursus facilisis in libero consectetur etiam turpis. Augue facilisi cum ullamcorper habitasse hac. Non tempor egestas tristique lectus placerat posuere ullamcorper. Odio malesuada ut diam dui. Porta at massa etiam blandit. Quis tempus, sed morbi volutpat sed sagittis, sit. Sit aenean egestas et sit sit porta nam et purus. Adipiscing ullamcorper vel molestie risus in.",
          },
        ],
      },
    ],
  },

  {
    id: "2",
    title: "Meet Colorful Pencils",
    date: "December 20, 2020",
    type: "PHOTOGRAPHY",
    image: "https://picsum.photos/920/446?random=2",
    userName: "Tomas",
    socialLinks: [
      {
        id: "1",
        name: "twitter",
        link: "#",
      },

      {
        id: "5",
        name: "dribbble",
        link: "#",
      },
    ],
    blocks: [
      {
        id: "1",
        type: SroriesBlockType.TEXT,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui adipiscing fringilla sit mus netus quam id. Arcu tortor velit enim, sit amet, sit arcu dictum. Est eget tempus bibendum non laoreet ultrices tristique. Duis urna, aliquam velit aliquam vitae. Diam nullam porta non semper. Eu, nisl gravida pulvinar erat odio amet vitae ac quis. Mi sagittis, blandit tellus amet. Cursus id duis sit cursus integer eu augue euismod vitae. .",
      },
      {
        id: "2",
        type: SroriesBlockType.TEXT,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui adipiscing fringilla sit mus netus quam id. Arcu tortor velit enim, sit amet, sit arcu dictum. Est eget tempus bibendum non laoreet ultrices tristique. Duis urna, aliquam velit aliquam vitae. Diam nullam porta non semper. Eu, nisl gravida pulvinar erat odio amet vitae ac quis. Mi sagittis, blandit tellus amet. Cursus id duis sit cursus integer eu augue euismod vitae. .",
      },
      {
        id: "3",
        type: SroriesBlockType.TITLE,
        title: "Global Eye Projects",
      },
      {
        id: "4",
        type: SroriesBlockType.TEXT,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui adipiscing fringilla sit mus netus quam id. Arcu tortor velit enim, sit amet, sit arcu dictum.",
      },
      {
        id: "5",
        type: SroriesBlockType.CHECK_LIST,
        checkList: [
          {
            id: "1",
            text: "Consectetur adipiscing elit. Dui adipiscing fringilla sit mus netus quam id.",
          },
          {
            id: "2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id cras sit.",
          },
          {
            id: "3",
            text: "Lorem ipsum dolor sit amet.",
          },
          {
            id: "4",
            text: "Dui adipiscing fringilla sit mus netus quam id.",
          },
        ],
      },
      {
        id: "6",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=1",
        texts: [
          {
            id: "1",
            text: "Consectetur adipiscing elit. Pellentesque viverra faucibus sed ipsum eget sodales. Porttitor semper urna leo tempus amet amet pellentesque commodo. Fermentum vel leo bibendum cursus at enim nibh metus, fermentum. Velit accumsan.",
          },
          {
            id: "2",
            text: "Porttitor semper urna leo tempus amet amet pellentesque commodo. Fermentum vel leo bibendum cursus at enim nibh metus, fermentum.",
          },
          {
            id: "3",
            text: "Amet, pellentesque tortor, velit etiam viverra. Cursus facilisis in libero consectetur etiam turpis. Augue facilisi cum ullamcorper habitasse hac. Non tempor egestas tristique lectus placerat posuere ullamcorper. Odio malesuada ut diam dui. Porta at massa etiam blandit. Quis tempus, sed morbi volutpat sed sagittis, sit. Sit aenean egestas et sit sit porta nam et purus. Adipiscing ullamcorper vel molestie risus in.",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Exploring the Mountains",
    date: "January 15, 2021",
    type: "ADVENTURE",
    image: "https://picsum.photos/920/446?random=3",
    userName: "Anna",
    socialLinks: [
      {
        id: "1",
        name: "twitter",
        link: "#",
      },
      {
        id: "3",
        name: "facebook",
        link: "#",
      },
      {
        id: "4",
        name: "linkedIn",
        link: "#",
      },
    ],
    blocks: [
      {
        id: "1",
        type: SroriesBlockType.TITLE,
        title: "The Journey Begins",
      },
      {
        id: "2",
        type: SroriesBlockType.TEXT,
        text: "Setting out on an adventure to the mountains. The air is crisp, and the views are breathtaking. We have a long trek ahead, but the excitement is palpable.",
      },
      {
        id: "3",
        type: SroriesBlockType.IMAGE,
        image: "https://picsum.photos/920/446?random=2",
      },
      {
        id: "4",
        type: SroriesBlockType.CHECK_LIST,
        checkList: [
          {
            id: "1",
            text: "Pack all necessary gear",
          },
          {
            id: "2",
            text: "Map out the trail",
          },
          {
            id: "3",
            text: "Ensure enough food and water supplies",
          },
        ],
      },
      {
        id: "5",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=5",
        texts: [
          {
            id: "1",
            text: "As we ascend, the scenery changes, revealing lush forests and hidden streams. Each step brings a new discovery, making the effort worthwhile.",
          },
          {
            id: "2",
            text: "The summit is in sight, and the sense of achievement is overwhelming. We pause to take in the panorama, feeling on top of the world.",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "City Lights",
    date: "March 10, 2021",
    type: "URBAN",
    image: "https://picsum.photos/920/446?random=4",
    userName: "Mike",
    socialLinks: [
      {
        id: "1",
        name: "twitter",
        link: "#",
      },
      {
        id: "2",
        name: "facebook",
        link: "#",
      },
      {
        id: "4",
        name: "linkedIn",
        link: "#",
      },
    ],
    blocks: [
      {
        id: "1",
        type: SroriesBlockType.TITLE,
        title: "Night in the City",
      },
      {
        id: "2",
        type: SroriesBlockType.TEXT,
        text: "The city comes alive at night. The streets are filled with people, the air is buzzing with energy, and the lights create a mesmerizing spectacle.",
      },
      {
        id: "3",
        type: SroriesBlockType.IMAGE,
        image: "https://picsum.photos/920/446?random=3",
      },
      {
        id: "4",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=6",
        texts: [
          {
            id: "1",
            text: "Exploring the urban jungle, we find hidden gems in every corner. From street art to cozy cafes, there's always something new to discover.",
          },
          {
            id: "2",
            text: "The skyline is breathtaking, with skyscrapers lighting up the night sky. It's a perfect backdrop for a night out with friends.",
          },
        ],
      },
      {
        id: "5",
        type: SroriesBlockType.CHECK_LIST,
        checkList: [
          {
            id: "1",
            text: "Visit the downtown area",
          },
          {
            id: "2",
            text: "Try local street food",
          },
          {
            id: "3",
            text: "Capture photos of the cityscape",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Desert Adventure",
    date: "May 5, 2021",
    type: "EXPEDITION",
    image: "https://picsum.photos/920/446?random=5",
    userName: "Sara",
    socialLinks: [
      {
        id: "1",
        name: "twitter",
        link: "#",
      },
      {
        id: "2",
        name: "facebook",
        link: "#",
      },
    ],
    blocks: [
      {
        id: "1",
        type: SroriesBlockType.TITLE,
        title: "Into the Sands",
      },
      {
        id: "2",
        type: SroriesBlockType.TEXT,
        text: "Our expedition into the desert has begun. The vast stretches of sand dunes are both intimidating and awe-inspiring.",
      },
      {
        id: "3",
        type: SroriesBlockType.IMAGE,
        image: "https://picsum.photos/920/446?random=4",
      },
      {
        id: "4",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=7",
        texts: [
          {
            id: "1",
            text: "The sun sets over the dunes, painting the sky in hues of orange and purple. It's a sight that words cannot describe.",
          },
          {
            id: "2",
            text: "We set up camp under the stars, the silence of the desert offering a perfect moment of reflection and peace.",
          },
        ],
      },
      {
        id: "5",
        type: SroriesBlockType.CHECK_LIST,
        checkList: [
          {
            id: "1",
            text: "Ensure sufficient water supply",
          },
          {
            id: "2",
            text: "Map out the route carefully",
          },
          {
            id: "3",
            text: "Prepare for extreme temperatures",
          },
        ],
      },
    ],
  },

  {
    id: "6",
    title: "Culinary Journey",
    date: "July 14, 2021",
    type: "FOOD",
    image: "https://picsum.photos/920/446?random=6",
    userName: "Laura",
    socialLinks: [
      {
        id: "1",
        name: "facebook",
        link: "#",
      },
      {
        id: "2",
        name: "be",
        link: "#",
      },
      {
        id: "3",
        name: "linkedIn",
        link: "#",
      },
    ],
    blocks: [
      {
        id: "1",
        type: SroriesBlockType.TITLE,
        title: "A Taste of the World",
      },
      {
        id: "2",
        type: SroriesBlockType.TEXT,
        text: "Exploring different cuisines has been an incredible journey. Each dish tells a story of its culture and history.",
      },
      {
        id: "3",
        type: SroriesBlockType.IMAGE,
        image: "https://picsum.photos/920/446?random=5",
      },
      {
        id: "4",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=8",
        texts: [
          {
            id: "1",
            text: "From the spicy flavors of Asia to the rich and savory dishes of Europe, every meal is a new adventure.",
          },
          {
            id: "2",
            text: "Food brings people together, and sharing these meals has created unforgettable memories with friends and family.",
          },
        ],
      },
      {
        id: "5",
        type: SroriesBlockType.CHECK_LIST,
        checkList: [
          {
            id: "1",
            text: "Try at least one new dish each week",
          },
          {
            id: "2",
            text: "Learn about the origins of each dish",
          },
          {
            id: "3",
            text: "Share recipes with friends",
          },
        ],
      },
    ],
  },

  {
    id: "7",
    title: "Winter Wonderland",
    date: "December 1, 2021",
    type: "SEASONAL",
    image: "https://picsum.photos/920/446?random=7",
    userName: "Emma",
    socialLinks: [
      {
        id: "1",
        name: "twitter",
        link: "#",
      },
      {
        id: "2",
        name: "facebook",
        link: "#",
      },
      {
        id: "3",
        name: "be",
        link: "#",
      },
    ],
    blocks: [
      {
        id: "1",
        type: SroriesBlockType.TITLE,
        title: "Snowy Escapades",
      },
      {
        id: "2",
        type: SroriesBlockType.TEXT,
        text: "Winter has transformed the landscape into a magical wonderland. Snow-covered trees and sparkling icicles create a picturesque scene.",
      },
      {
        id: "3",
        type: SroriesBlockType.IMAGE,
        image: "https://picsum.photos/920/446?random=6",
      },
      {
        id: "4",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=9",
        texts: [
          {
            id: "1",
            text: "Building snowmen and having snowball fights bring out the child in all of us. It's pure, unadulterated fun.",
          },
          {
            id: "2",
            text: "The coziness of a warm fire after a day in the snow is unmatched. It's the perfect way to end a winter's day.",
          },
        ],
      },
      {
        id: "5",
        type: SroriesBlockType.CHECK_LIST,
        checkList: [
          {
            id: "1",
            text: "Go ice skating",
          },
          {
            id: "2",
            text: "Try snowboarding or skiing",
          },
          {
            id: "3",
            text: "Make hot cocoa from scratch",
          },
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Beach Bliss",
    date: "August 15, 2021",
    type: "LEISURE",
    image: "https://picsum.photos/920/446?random=8",
    userName: "Liam",
    socialLinks: [
      {
        id: "1",
        name: "twitter",
        link: "#",
      },
      {
        id: "3",
        name: "facebook",
        link: "#",
      },
      {
        id: "5",
        name: "dribbble",
        link: "#",
      },
    ],
    blocks: [
      {
        id: "1",
        type: SroriesBlockType.TITLE,
        title: "Sun, Sand, and Sea",
      },
      {
        id: "2",
        type: SroriesBlockType.TEXT,
        text: "The beach offers a perfect escape from the hustle and bustle. The sound of waves and the feeling of sand between your toes are pure bliss.",
      },
      {
        id: "3",
        type: SroriesBlockType.IMAGE,
        image: "https://picsum.photos/920/446?random=7",
      },
      {
        id: "4",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=10",
        texts: [
          {
            id: "1",
            text: "The days are spent soaking up the sun and swimming in the clear blue waters. The evenings bring stunning sunsets that paint the sky in vibrant colors.",
          },
          {
            id: "2",
            text: "Beach volleyball, building sandcastles, and long walks along the shore make for a perfect day at the beach.",
          },
        ],
      },
      {
        id: "5",
        type: SroriesBlockType.CHECK_LIST,
        checkList: [
          {
            id: "1",
            text: "Apply sunscreen regularly",
          },
          {
            id: "2",
            text: "Stay hydrated",
          },
          {
            id: "3",
            text: "Collect seashells",
          },
        ],
      },
    ],
  },

  {
    id: "9",
    title: "Autumn Retreat",
    date: "October 3, 2021",
    type: "SEASONAL",
    image: "https://picsum.photos/920/446?random=9",
    userName: "Olivia",
    socialLinks: [
      {
        id: "2",
        name: "twitter",
        link: "#",
      },
      {
        id: "4",
        name: "linkedIn",
        link: "#",
      },
      {
        id: "6",
        name: "be",
        link: "#",
      },
    ],
    blocks: [
      {
        id: "1",
        type: SroriesBlockType.TITLE,
        title: "Falling Leaves",
      },
      {
        id: "2",
        type: SroriesBlockType.TEXT,
        text: "Autumn brings a riot of colors as the leaves change. It's a season of cozy sweaters, pumpkin spice, and scenic walks through nature.",
      },
      {
        id: "3",
        type: SroriesBlockType.IMAGE,
        image: "https://picsum.photos/920/446?random=8",
      },
      {
        id: "4",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=11",
        texts: [
          {
            id: "1",
            text: "The crisp air and the crunch of leaves underfoot make every walk a joy. Autumn festivals and harvests bring communities together.",
          },
          {
            id: "2",
            text: "Carving pumpkins, baking pies, and enjoying the bounty of the harvest season are some of the highlights of autumn.",
          },
        ],
      },
      {
        id: "5",
        type: SroriesBlockType.CHECK_LIST,
        checkList: [
          {
            id: "1",
            text: "Go apple picking",
          },
          {
            id: "2",
            text: "Take a scenic drive to see the fall foliage",
          },
          {
            id: "3",
            text: "Attend a local fall festival",
          },
        ],
      },
    ],
  },

  {
    id: "10",
    title: "Spring Awakening",
    date: "April 10, 2022",
    type: "SEASONAL",
    image: "https://picsum.photos/920/446?random=10",
    userName: "Jack",
    socialLinks: [
      {
        id: "1",
        name: "twitter",
        link: "#",
      },
      {
        id: "2",
        name: "dribbble",
        link: "#",
      },
    ],
    blocks: [
      {
        id: "1",
        type: SroriesBlockType.TITLE,
        title: "Blooming Beauty",
      },
      {
        id: "2",
        type: SroriesBlockType.TEXT,
        text: "Spring is a time of renewal and growth. Flowers bloom, and the world comes alive with vibrant colors and fresh scents.",
      },
      {
        id: "3",
        type: SroriesBlockType.IMAGE,
        image: "https://picsum.photos/920/446?random=9",
      },
      {
        id: "4",
        type: SroriesBlockType.IMAGE_TEXT,
        image: "https://picsum.photos/920/446?random=12",
        texts: [
          {
            id: "1",
            text: "The gardens are a riot of color as tulips, daffodils, and cherry blossoms bloom. It's the perfect time for a leisurely stroll or a picnic.",
          },
          {
            id: "2",
            text: "The birds return, filling the air with their songs. The longer days and warmer weather are invigorating and bring a sense of optimism.",
          },
        ],
      },
      {
        id: "5",
        type: SroriesBlockType.CHECK_LIST,
        checkList: [
          {
            id: "1",
            text: "Plant a garden",
          },
          {
            id: "2",
            text: "Go for a hike to see wildflowers",
          },
          {
            id: "3",
            text: "Clean and declutter the home",
          },
        ],
      },
    ],
  },
];
