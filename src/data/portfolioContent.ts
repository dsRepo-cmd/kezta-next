export enum PortfolioType {
  BRANDING = "BRANDING",
  WEB_DESIGN = "WEB DESIGN",
  ILLUSTRATION = "ILLUSTRATION",
  PHOTOGRAPHY = "PHOTOGRAPHY",
  ALL_WORKS = "ALL WORKS",
}

export enum PortfolioView {
  LIST = "list",
  GRID = "grid",
}

export const portfolioContent = {
  title: "Portfolio",

  typeTabs: [
    {
      id: "1",
      value: PortfolioType.ALL_WORKS,
    },
    {
      id: "2",
      value: PortfolioType.BRANDING,
    },
    {
      id: "3",
      value: PortfolioType.WEB_DESIGN,
    },
    {
      id: "4",
      value: PortfolioType.ILLUSTRATION,
    },
    {
      id: "5",
      value: PortfolioType.PHOTOGRAPHY,
    },
  ],

  content: [
    {
      id: "1",
      type: PortfolioType.BRANDING,
      image: "https://picsum.photos/id/1/920/325",
      imageSquard: "https://picsum.photos/id/1/300/300",
    },
    {
      id: "2",
      type: PortfolioType.WEB_DESIGN,
      image: "https://picsum.photos/id/250/920/325",
      imageSquard: "https://picsum.photos/id/250/300/300",
    },
    {
      id: "3",
      type: PortfolioType.ILLUSTRATION,
      image: "https://picsum.photos/id/350/920/325",
      imageSquard: "https://picsum.photos/id/350/300/300",
    },
    {
      id: "4",
      type: PortfolioType.PHOTOGRAPHY,
      image: "https://picsum.photos/id/400/920/325",
      imageSquard: "https://picsum.photos/id/400/300/300",
    },
    {
      id: "5",
      type: PortfolioType.BRANDING,
      image: "https://picsum.photos/id/500/920/325",
      imageSquard: "https://picsum.photos/id/500/300/300",
    },
    {
      id: "6",
      type: PortfolioType.WEB_DESIGN,
      image: "https://picsum.photos/id/600/920/325",
      imageSquard: "https://picsum.photos/id/600/300/300",
    },
    {
      id: "7",
      type: PortfolioType.ILLUSTRATION,
      image: "https://picsum.photos/id/700/920/325",
      imageSquard: "https://picsum.photos/id/700/300/300",
    },
    {
      id: "8",
      type: PortfolioType.PHOTOGRAPHY,
      image: "https://picsum.photos/id/800/920/325",
      imageSquard: "https://picsum.photos/id/800/300/300",
    },
    {
      id: "9",
      type: PortfolioType.BRANDING,
      image: "https://picsum.photos/id/900/920/325",
      imageSquard: "https://picsum.photos/id/900/300/300",
    },
  ],
};
