import Divider from "@/components/Divider/Divider";
import FollowLink from "@/components/FollowLink/FollowLink";
import Label from "@/components/Label/Label";
import Text from "@/components/Text/Text";
import Header from "@/containers/Header/Header";
import Navigation from "@/containers/Navigation/Navigation";
import TitleBox from "@/containers/TitleBox/TitleBox";
import { aboutContent } from "@/data/aboutContent";
import { NavigationName } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative flex flex-col min-h-screen  bg-black overflow-hidden">
      <Header>
        <Image src={"/logo.svg"} alt="logo" width={100} height={50} />
        <Navigation path={NavigationName.About} />
      </Header>

      <Label />

      <FollowLink />

      <main className=" mx-auto w-[70%] flex gap-5 pr-40  ">
        <Divider />

        <div className=" flex flex-col">
          <section className=" flex flex-col gap-10 ">
            <TitleBox>
              <Text
                color="text-grayPrimary"
                title={aboutContent.section1.title}
              />
            </TitleBox>

            <Text
              color="text-white"
              subtitle={aboutContent.section1.subtitle}
            />

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
                <div className=" w-full h-48 bg-orange"></div>
              </div>

              <div className=" flex flex-col gap-6  w-1/2">
                {aboutContent.section1.text.map((text) => (
                  <Text
                    color="text-grayPrimary"
                    key={text.id}
                    text={text.paragraph}
                  />
                ))}
                <div className=" flex items-center gap-4">
                  <span className=" border-solid border-b-2 border-divider w-[100px]"></span>
                  <Link href={aboutContent.section1.link.href}>
                    <Text
                      color="text-orange"
                      className=" underline"
                      text={aboutContent.section1.link.text}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className=" m-auto">
              <ul className=" flex gap-10 w-full  mt-20">
                {aboutContent.section1.cards.map((card) => (
                  <li
                    className=" flex flex-col gap-4 self-center   "
                    key={card.id}
                  >
                    <Text
                      color="text-orange"
                      className=" text-[1rem]"
                      text={card.number}
                    />
                    <Text
                      className="text-[1.75rem]"
                      color="text-white"
                      subtitle={card.value}
                    />
                    <span className=" border-solid border-b-2 border-divider w-[80%]"></span>
                    <Text
                      className=" min-w-36 text-nowrap"
                      color="text-grayPrimary"
                      text={card.text}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>

      <div className=" absolute bottom-[150px] right-[50px] rotate-[270deg] flex justify-center items-center ">
        <span className=" text-grayLight">©2024</span>
      </div>
    </div>
  );
}
