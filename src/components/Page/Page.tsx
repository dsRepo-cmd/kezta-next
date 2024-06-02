import { ReactNode } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { NavigationName } from "@/data/navigation";
import Label from "@/components/Label/Label";
import FollowLink from "@/components/FollowLink/FollowLink";
import Divider from "@/components/Divider/Divider";
import LogoIcon from "@/assets/logo.svg";
import SosialLinks from "../SosialLinks/SosialLinks";
import { socialLinks } from "@/data/socialLinks";

interface PageProps {
  children: ReactNode;
  navigation?: NavigationName;
  isHome?: boolean;
}
export default function Page({ children, navigation, isHome }: PageProps) {
  return (
    <>
      <Header>
        <LogoIcon />
        <Navigation path={navigation} />
      </Header>

      {isHome ? (
        <>
          <div className=" flex gap-10 min-h-full">
            <div className=" flex items-center p-20">
              <SosialLinks links={socialLinks} />
            </div>

            <main className=" flex flex-col items-end  w-full h-[80vh] p-10 bg-hero-pattern  bg-no-repeat bg-cover ">
              {children}
            </main>
          </div>
        </>
      ) : (
        <>
          <Label />
          <FollowLink />
          <main className=" mx-auto  w-[70%]  flex gap-5 pr-40 md:mx-0 md:w-full md:pr-4 md:mt-32 mb-20 xl:pr-0">
            <Divider vertical />
            <div className=" flex  flex-col gap-10">{children}</div>
          </main>
        </>
      )}

      <div className=" absolute bottom-[20px] right-[50px] rotate-[270deg] flex justify-center items-center md:hidden ">
        <span className=" text-grayLight">©2024</span>
      </div>
    </>
  );
}
