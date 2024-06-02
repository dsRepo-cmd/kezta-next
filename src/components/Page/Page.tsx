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
import Text from "../Text/Text";

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
          <div className=" flex gap-10">
            <div className=" flex items-center p-20">
              <SosialLinks links={socialLinks} />
            </div>

            <div className="relative w-full mt-5">
              <div className="  flex flex-col items-end  w-full  h-[90%] p-10 bg-hero-pattern  bg-no-repeat bg-cover ">
                <div className=" absolute bottom-[150px] right-[-50px] w-[450px] h-[250px] z-10 ">
                  <div className=" bg-orange p-10 h-full flex flex-col gap-2">
                    <Text fontSize="text-7xl" title="Structure" />
                    <Text
                      fontSize="text-2xl"
                      text="The freeware for community"
                    />
                    <div className=" border-solid border-x-white  border-b-[2px] w-1/3" />
                    <Text fontSize="text-lg" text="LIFESTYLE" />
                  </div>
                </div>
              </div>
            </div>

            <main className=" relative flex gap-5 pr-40 md:mx-0 md:w-full md:pr-4 md:mt-32">
              {children}
            </main>
          </div>
        </>
      ) : (
        <>
          <Label />
          <FollowLink />
          <main className=" mx-auto w-[70%] flex gap-5 pr-40 md:mx-0 md:w-full md:pr-4 md:mt-32">
            <Divider vertical />
            <div className=" flex flex-col gap-10">{children}</div>
          </main>
        </>
      )}

      <div className=" absolute bottom-[20px] right-[50px] rotate-[270deg] flex justify-center items-center sm:right-0 ">
        <span className=" text-grayLight">©2024</span>
      </div>
    </>
  );
}
