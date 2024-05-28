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
}

export const stories: Story[] = [
  {
    id: "1",
    title: "Finest Get - Together",
    date: "April 7, 2020",
    type: "TRAVEL",
    image: "https://picsum.photos/920/325?random=1",
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
        ],
      },

      {
        id: "3",
        type: SroriesBlockType.TITLE,
        title: `let's relax`,
      },

      {
        id: "5",
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
];
