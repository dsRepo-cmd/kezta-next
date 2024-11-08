"use client";
import Label from "@/components/Label/Label";
import FollowLink from "@/components/FollowLink/FollowLink";
import Divider from "@/components/Divider/Divider";
import { usePathname } from "next/navigation";

interface PageProps {
  children: React.ReactNode;
}
function Page({ children }: PageProps) {
  const isHome = usePathname() === "/";
  return (
    <div className=" relative">
      {isHome ? (
        <>
          <Label right />
          <main className=" flex flex-col items-start justify-center h-[80vh]">
            {children}
          </main>
        </>
      ) : (
        <>
          <Label />
          <FollowLink />
          <main className="  flex gap-5 pt-16 mx-auto mb-20 w-[70%] pr-40 min-h-[85vh] md:w-full md:px-2 md:mt-0 xl:pr-0">
            <Divider vertical />
            <div className=" mt-2 w-full h-full">
              <div className=" flex flex-col gap-10 min-w-full">{children}</div>
            </div>
          </main>
        </>
      )}

      <div className=" absolute bottom-[60px] right-[50px] rotate-[270deg] xl:bottom-[60px] xl:right-[30px] md:hidden ">
        <span className=" select-none text-grayLight">©2024</span>
      </div>
    </div>
  );
}

export default Page;
