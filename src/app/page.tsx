import Card from "@/components/Card/Card";
import { navigation } from "@/data/navigation";
import { socialLinks } from "@/data/socialLinks";
import { link } from "fs";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row  min-h-screen  justify-between  bg-black overflow-hidden">
      {/* left side */}
      <div className=" flex flex-col items-center  p-10 w-[212px]">
        <Image src={"/logo.svg"} alt="logo" width={100} height={50} />

        <div className=" flex h-full">
          <div className=" flex flex-col gap-5 self-center ">
            {socialLinks.map((link) => (
              <Link key={link.id} href={"#"}>
                <Image src={link.path} alt={link.name} width={15} height={15} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* hero */}
      <div className="relative w-full mt-5">
        <div className="  flex flex-col items-end  w-full  h-[90%] p-10 bg-hero-pattern  bg-no-repeat bg-cover ">
          <nav className=" flex justify-center items-center gap-10">
            {navigation.map((link) => (
              <Link
                className=" text-lg hover:text-orange duration-300"
                key={link.id}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
          </nav>

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
