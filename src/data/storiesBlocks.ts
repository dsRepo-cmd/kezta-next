export enum SroriesBlockType {
  TEXT = "text",
  IMAGE = "image",
  TITLE = "title",
  CHECK_LIST = "checkList",
  IMAGE_TEXT = "imageText",
}

export const storiesBlocks = [
  {
    id: "2",
    title: "Meet Colorful Pencils",
    date: "December 20, 2020",
    type: "PHOTOGRAPHY",
    image: "https://picsum.photos/920/325?random=2",
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
        id: "5",
        type: SroriesBlockType.IMAGE_TEXT,

        text: [
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
