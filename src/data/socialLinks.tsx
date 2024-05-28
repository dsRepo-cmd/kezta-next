export type SocialLinkName =
  | "twitter"
  | "be"
  | "facebook"
  | "linkedIn"
  | "dribbble";

export interface SocialLink {
  id: string;
  name: SocialLinkName;
  link: string;
}
export const socialLinks: SocialLink[] = [
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
    id: "3",
    name: "facebook",
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
];
