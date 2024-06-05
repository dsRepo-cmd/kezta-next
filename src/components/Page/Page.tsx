import { ReactNode, memo } from "react";
import { NavigationName } from "@/data/navigation";
import Label from "@/components/Label/Label";
import FollowLink from "@/components/FollowLink/FollowLink";
import Divider from "@/components/Divider/Divider";
import LogoIcon from "@/assets/logo.svg";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

interface PageProps {
  children: ReactNode;
  navigation?: NavigationName;
  isHome?: boolean;
}
function Page({ children, navigation, isHome }: PageProps) {
  return (
    <div className=" min-h-screen relative">
      <Header>
        <LogoIcon />
        <Navigation path={navigation} />
      </Header>

      {isHome ? (
        <>
          <Label right />
          <main>{children}</main>
        </>
      ) : (
        <>
          <Label />
          <FollowLink />
          <main className="  flex gap-5 pt-32 mx-auto mb-20 w-[70%] pr-40 min-h-[85vh] md:w-full md:px-2 md:mt-0 xl:pr-0">
            <Divider vertical />
            <div className=" flex flex-col gap-10 min-w-full">{children}</div>
          </main>
        </>
      )}

      <div className=" absolute bottom-[60px] right-[50px] rotate-[270deg] xl:bottom-[60px] xl:right-[30px] md:hidden ">
        <span className=" text-grayLight">©2024</span>
      </div>
    </div>
  );
}

export default memo(Page);
