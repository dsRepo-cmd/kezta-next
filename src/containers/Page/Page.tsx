import { ReactNode } from "react";
import Header from "../Header/Header";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import { NavigationName } from "@/data/navigation";
import Label from "@/components/Label/Label";
import FollowLink from "@/components/FollowLink/FollowLink";
import Divider from "@/components/Divider/Divider";
import LogoIcon from "@/assets/logo.svg";

interface PageProps {
  children: ReactNode;
  navigation?: NavigationName;
}
export default function Page({ children, navigation }: PageProps) {
  return (
    <div className=" relative flex flex-col min-h-screen  bg-black overflow-hidden mb-40">
      <Header>
        <LogoIcon />
        <Navigation path={navigation} />
      </Header>
      <Label />
      <FollowLink />
      <main className=" mx-auto w-[70%] flex gap-5 pr-40  ">
        <Divider vertical />
        <div className=" flex flex-col gap-40">{children}</div>
      </main>

      <div className=" absolute bottom-[20px] right-[50px] rotate-[270deg] flex justify-center items-center ">
        <span className=" text-grayLight">©2024</span>
      </div>
    </div>
  );
}
