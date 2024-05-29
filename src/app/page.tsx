import Navigation from "@/components/Navigation/Navigation";
import { NavigationName } from "@/data/navigation";
import LogoIcon from "@/assets/logo.svg";
import SosialLinks from "@/components/SosialLinks/SosialLinks";
import { socialLinks } from "@/data/socialLinks";
import Text from "@/components/Text/Text";

export default function Home() {
  return (
    <main className="flex flex-row  min-h-screen  justify-between  bg-black overflow-hidden">
      {/* left side */}
      <div className=" flex flex-col items-center  p-10 w-[212px]">
        <LogoIcon />

        <div className=" flex h-full">
          <SosialLinks links={socialLinks} />
        </div>
      </div>

      {/* hero */}
      <div className="relative w-full mt-5">
        <div className="  flex flex-col items-end  w-full  h-[90%] p-10 bg-hero-pattern  bg-no-repeat bg-cover ">
          <Navigation path={NavigationName.Home} />

          <div className=" absolute bottom-[150px] right-[-50px] w-[450px] h-[250px] z-10 ">
            <div className=" bg-orange p-10 h-full flex flex-col gap-2">
              <Text fontSize="text-7xl" title="Structure" />
              <Text fontSize="text-2xl" text="The freeware for community" />
              <div className=" border-solid border-x-white  border-b-[2px] w-1/3" />
              <Text fontSize="text-lg" text="LIFESTYLE" />
            </div>
          </div>
        </div>
        <div> </div>
      </div>

      {/* right side */}
      <div className=" relative w-[251px] overflow-hidden">
        <div className=" absolute bottom-60 right-[-220px] rotate-[270deg] flex justify-center items-center ">
          <span className=" text-grayLight">©2024</span>
          <span className=" text-[200px] text-gray font-bold">kezto</span>
        </div>
      </div>
    </main>
  );
}
