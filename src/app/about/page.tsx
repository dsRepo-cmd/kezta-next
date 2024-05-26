import Divider from "@/components/Divider/Divider";
import Header from "@/containers/Header/Header";
import Navigation from "@/containers/Navigation/Navigation";
import { NavigationName } from "@/data/navigation";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative flex flex-col min-h-screen  bg-black overflow-hidden">
      <Header>
        <Image src={"/logo.svg"} alt="logo" width={100} height={50} />
        <Navigation path={NavigationName.About} />
      </Header>

      <div className=" absolute top-[300px] left-[-300px] rotate-[270deg] flex justify-center items-center ">
        <span className=" text-[250px] text-gray font-bold">kezto</span>
      </div>

      <div className=" absolute top-[450px] left-[80px] rotate-[270deg] flex  gap-2  justify-center items-center ">
        <span className=" ">Follow Us</span>
        <Image
          className="rotate-90"
          src={"/follow-us.svg"}
          alt="follow-us"
          width={12}
          height={12}
        />
      </div>

      <main className=" mx-auto w-[70%] flex gap-5 pr-40  ">
        <Divider />

        <div className=" flex flex-col">
          <section className=" flex flex-col gap-10 ">
            <div className=" flex h-full relative">
              <div className=" absolute left-[-102px] bottom-0 top-0  border-solid border-l-2 border-grayPrimary "></div>
              <h2 className="  text-xl text-grayPrimary">Our Story</h2>
            </div>
            <h3 className="  text-lg">
              A world-class agency with defined excellence & passionate approach
              towards creative and digital services for all platforms.
            </h3>

            <div className="flex gap-20">
              <div className="relative w-1/2 min-h-20 flex flex-col  ">
                <Image
                  src={"/k-letter.svg"}
                  alt="k-letter"
                  width={220}
                  height={220}
                  className=" absolute left-1/2 top-5 translate-x-[-50%]"
                />
                <div className=" w-full h-40 "></div>
                <div className=" w-full h-40 bg-orange"></div>
              </div>

              <div className=" flex flex-col gap-6  w-1/2">
                <p className="  text-grayPrimary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Eleifend morbi ornare metus, lobortis. Adipiscing ridiculus
                  praesent rhoncus amet. Hendrerit pulvinar viverra arcu nunc.
                </p>
                <p className=" text-grayPrimary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Eleifend morbi ornare metus, lobortis. Adipiscing ridiculus
                  praesent rhoncus amet. Hendrerit pulvinar viverra arcu nunc.
                </p>
              </div>
            </div>
            <div className=""></div>
          </section>
        </div>
      </main>

      <div className=" absolute bottom-[150px] right-[50px] rotate-[270deg] flex justify-center items-center ">
        <span className=" text-grayLight">©2024</span>
      </div>
    </div>
  );
}
