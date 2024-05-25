interface Navigation {
  name: NavigationName;
  path: string;
  id: string;
}

export enum NavigationName {
  Home = "Home",
  About = "About",
  Portfolio = "Portfolio",
  Stories = "Stories",
  Contact = "Contact",
}

export const navigation: Navigation[] = [
  { name: NavigationName.Home, path: "/", id: "1" },
  { name: NavigationName.About, path: "/about", id: "2" },
  { name: NavigationName.Portfolio, path: "/portfolio", id: "3" },
  { name: NavigationName.Stories, path: "/stories", id: "4" },
  { name: NavigationName.Contact, path: "/contact", id: "5" },
];
