import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import BeIcon from "@/assets/social-be.svg";
import TwitterIcon from "@/assets/social-twitter.svg";
import FacebookIcon from "@/assets/social-f.svg";
import LinkedInIcon from "@/assets/social-linkedin.svg";
import DribbbleIcon from "@/assets/social-dribbble.svg";
import { SocialLink, SocialLinkName } from "@/data/socialLinks";
import { memo } from "react";

const iconMap: { [key in SocialLinkName]: any } = {
  twitter: TwitterIcon,
  be: BeIcon,
  facebook: FacebookIcon,
  linkedIn: LinkedInIcon,
  dribbble: DribbbleIcon,
};

interface SosialLinksProps {
  links: SocialLink[];
  horisontal?: boolean;
}

function SosialLinks({ links, horisontal }: SosialLinksProps) {
  return (
    <div
      className={` flex  gap-5 self-center ${
        horisontal ? " text-grayPrimary" : " flex-col"
      } `}
    >
      {links?.map((link) => (
        <Link
          key={link.id}
          className=" duration-300 hover:text-orange "
          href={"#"}
        >
          <Icon Svg={iconMap[link.name]} width={16} height={16} />
        </Link>
      ))}
    </div>
  );
}

export default memo(SosialLinks);
