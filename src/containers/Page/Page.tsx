import { ReactNode } from "react";
import Header from "../Header/Header";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import { NavigationName } from "@/data/navigation";
import Label from "@/components/Label/Label";
import FollowLink from "@/components/FollowLink/FollowLink";
import Divider from "@/components/Divider/Divider";

interface PageProps {
  children: ReactNode;
  naigation?: NavigationName;
}
export default function Page({ children, naigation }: PageProps) {
  return (
    <div className=" relative flex flex-col min-h-screen  bg-black overflow-hidden mb-40">
      <Header>
        <Image src={"/logo.svg"} alt="logo" width={100} height={50} />
        <Navigation path={naigation} />
      </Header>
      <Label />
      <FollowLink />
      <main className=" mx-auto w-[70%] flex gap-5 pr-40  ">
        <Divider />
        <div className=" flex flex-col gap-40">{children}</div>
      </main>

      <div className=" absolute bottom-[150px] right-[50px] rotate-[270deg] flex justify-center items-center ">
        <span className=" text-grayLight">©2024</span>
      </div>
    </div>
  );
}
