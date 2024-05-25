import Card from "@/components/Card/Card";
import { navigation } from "@/data/navigation";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row  min-h-screen  justify-between pt-5 bg-black">
      <div className=" p-10 w-[212px]">
        <Image src={"/logo.svg"} alt="logo" width={100} height={50} />
        <div></div>
      </div>

      <div className=" relative flex flex-col items-end bg-hero-pattern w-full p-10  bg-no-repeat bg-cover ">
        <nav className=" flex justify-center items-center gap-10">
          {navigation.map((link) => (
            <Link className=" text-lg" key={link.id} href={link.path}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className=" absolute bottom-[150px] right-[-50px] ">
          <Card>
            <h2 className="  text-[3rem]">Structure</h2>
            <p>The freeware for community</p>
            <p>LIFESTYLE</p>
          </Card>
        </div>
      </div>

      <div className=" relative w-[251px]">
        <div className=" absolute bottom-60 right-[-250px] rotate-[270deg]   ">
          <span className=" text-[250px] text-gray">kezto</span>
        </div>
      </div>
    </main>
  );
}
