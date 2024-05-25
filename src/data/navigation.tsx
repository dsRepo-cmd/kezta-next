interface Navigation {
  name: string;
  path: string;
  id: string;
}

export const navigation: Navigation[] = [
  { name: "Home", path: "/", id: "1" },
  { name: "About", path: "/about", id: "2" },
  { name: "Portfolio", path: "/portfolio", id: "3" },
  { name: "Stories", path: "/stories", id: "4" },
  { name: "Contact", path: "/contact", id: "5" },
];
