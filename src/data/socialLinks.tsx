import { FC, ReactNode } from "react";
import TwitterIcon from "@/assets/social-twitter.svg";
import BeIcon from "@/assets/social-be.svg";
import FacebookIcon from "@/assets/social-f.svg";
import LinkedInIcon from "@/assets/social-linkedin.svg";
import DribbbleIcon from "@/assets/social-dribbble.svg";

export interface SocialLinks {
  id: string;
  name: string;
  icon: ReactNode;
}
export const socialLinks: SocialLinks[] = [
  {
    id: "1",
    name: "Twitter",
    icon: <TwitterIcon />,
  },
  {
    id: "2",
    name: "Be",
    icon: <BeIcon />,
  },
  {
    id: "3",
    name: "f",
    icon: <FacebookIcon />,
  },
  {
    id: "4",
    name: "li",
    icon: <LinkedInIcon />,
  },
  {
    id: "5",
    name: "dribbble",
    icon: <DribbbleIcon />,
  },
];
