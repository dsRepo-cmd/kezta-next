import Image from "next/image";
import Text from "@/components/Text/Text";
import SosialLinks from "@/components/SosialLinks/SosialLinks";
import { socialLinks } from "@/components/SosialLinks/const";

function Home() {
  return (
    <>
      <div className=" ms-10   items-center justify-center p-10 xl:ms-0">
        <SosialLinks links={socialLinks} />
      </div>

      <div className=" fixed flex top-[20px] left-[200px] right-[200px] bottom-[80px] xl:left-[100px] xl:right-[160px] md:left-[10px] md:right-[10px] z-[-20]  ">
        <Image
          src={"/main-hero.png"}
          fill
          alt="hero"
          style={{ objectFit: "cover" }}
        />

        <div className=" absolute bottom-[50px] right-[-50px] w-[450px] h-[250px]  md:w-[350px] md:h-[200px] md:right-[20px] z-10 ">
          <div className=" bg-orange p-10 h-full flex flex-col gap-2">
            <Text fontSize="text-[4rem]" title="Structure" />
            <Text fontSize="text-2xl" text="The freeware for community" />
            <div className=" border-solid border-x-white  border-b-[2px] w-1/3" />
            <Text fontSize="text-lg" text="LIFESTYLE" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
