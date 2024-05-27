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
      image: "https://picsum.photos/920/325?random=1",
    },
    {
      id: "2",
      type: PortfolioType.WEB_DESIGN,
      image: "https://picsum.photos/920/325?random=2",
    },
    {
      id: "3",
      type: PortfolioType.ILLUSTRATION,
      image: "https://picsum.photos/920/325?random=3",
    },
    {
      id: "4",
      type: PortfolioType.PHOTOGRAPHY,
      image: "https://picsum.photos/920/325?random=4",
    },
    {
      id: "5",
      type: PortfolioType.BRANDING,
      image: "https://picsum.photos/920/325?random=5",
    },
    {
      id: "6",
      type: PortfolioType.WEB_DESIGN,
      image: "https://picsum.photos/920/325?random=6",
    },
    {
      id: "7",
      type: PortfolioType.ILLUSTRATION,
      image: "https://picsum.photos/920/325?random=7",
    },
    {
      id: "8",
      type: PortfolioType.PHOTOGRAPHY,
      image: "https://picsum.photos/920/325?random=8",
    },
    {
      id: "9",
      type: PortfolioType.BRANDING,
      image: "https://picsum.photos/920/325?random=9",
    },
  ],
};
