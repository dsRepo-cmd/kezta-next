import Card from "@/components/Card/Card";
import Navigation from "@/containers/Navigation/Navigation";
import { NavigationName } from "@/data/navigation";
import LogoIcon from "@/assets/logo.svg";
import SosialLinks from "@/containers/SosialLinks/SosialLinks";
import { socialLinks } from "@/data/socialLinks";

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
            <Card>
              <h2 className="  text-[3.5rem]">Structure</h2>
              <p className=" text-[1.4rem]">The freeware for community</p>
              <div className=" border-solid border-x-white  border-b-[2px] w-1/3" />
              <p>LIFESTYLE</p>
            </Card>
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
