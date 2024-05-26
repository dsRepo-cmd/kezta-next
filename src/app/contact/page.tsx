import Header from "@/containers/Header/Header";
import Navigation from "@/containers/Navigation/Navigation";
import { NavigationName } from "@/data/navigation";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col  bg-black overflow-hidden">
      <Header>
        <Image src={"/logo.svg"} alt="logo" width={100} height={50} />
        <Navigation path={NavigationName.Contact} />
      </Header>
      <div className=" flex ">
        <aside>aside</aside>
        <main>main</main>
      </div>
    </div>
  );
}
