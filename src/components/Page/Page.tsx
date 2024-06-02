import { ReactNode } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { NavigationName } from "@/data/navigation";
import Label from "@/components/Label/Label";
import FollowLink from "@/components/FollowLink/FollowLink";
import Divider from "@/components/Divider/Divider";
import LogoIcon from "@/assets/logo.svg";

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
          <main>{children}</main>
        </>
      ) : (
        <>
          <Label />
          <FollowLink />
          <main className=" flex gap-5 pt-32 mx-auto mb-20 w-[70%] pr-40 md:w-full md:px-2 md:mt-0 xl:pr-0">
            <Divider vertical />
            <div className=" flex flex-col gap-10">{children}</div>
          </main>
          <div className=" absolute bottom-[20px] right-[50px] rotate-[270deg] flex justify-center items-center md:hidden ">
            <span className=" text-grayLight">©2024</span>
          </div>
        </>
      )}
    </>
  );
}
