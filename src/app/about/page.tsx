import Text from "@/components/Text/Text";
import Page from "@/containers/Page/Page";
import TitleBox from "@/components/TitleBox/TitleBox";
import { aboutContent } from "@/data/aboutContent";
import { NavigationName } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider/Divider";

export default function About() {
  return (
    <Page navigation={NavigationName.About}>
      {/* section1 */}
      <div className=" flex flex-col gap-24">
        <section className=" flex flex-col gap-10 ">
          <TitleBox title={aboutContent.section1.title}></TitleBox>

          <Text color="text-white" subtitle={aboutContent.section1.subtitle} />

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
                <Divider style={{ width: "5rem", paddingTop: "1px" }} />
                <Link href={aboutContent.section1.link.href}>
                  <Text
                    color="text-orange"
                    className=" duration-300 underline hover:text-white"
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
                  <Divider style={{ width: "80%" }} />

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
        {/* section2 */}

        <section className="flex flex-col gap-10">
          <TitleBox title={aboutContent.section2.title}></TitleBox>
          <ul className=" flex flex-wrap gap-20">
            {aboutContent.section2.cards.map((card) => (
              <li className=" flex flex-col gap-4  w-1/4   " key={card.id}>
                <Image
                  src={card.image}
                  alt={card.image}
                  width={50}
                  height={50}
                />
                <Text
                  color="text-white"
                  className=" text-[1rem]"
                  text={card.title}
                />
                <Text className="" color="text-grayPrimary" text={card.text} />
              </li>
            ))}
          </ul>
        </section>
        {/* section3 */}

        <section className="flex flex-col gap-10">
          <TitleBox title={aboutContent.section3.title}></TitleBox>
          <div className=" flex  gap-20">
            <div className=" flex flex-col gap-10 w-1/2">
              <Text
                color="text-grayPrimary"
                text={aboutContent.section3.text}
              />

              <div className=" flex flex-col gap-10">
                {aboutContent.section3.statistics.map((item) => (
                  <div className="" key={item.id}>
                    <div className=" flex justify-between">
                      <Text className=" text-sm" text={item.title} />
                      <Text className=" text-sm" text={`${item.value}%`} />
                    </div>
                    <progress
                      className="progress-bar w-full h-[10px] bg-grayPrimary "
                      max="100"
                      value={item.value}
                    ></progress>
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex  p-10 bg-grayPrimary w-[400px] h-[360px]">
              <div className=" w-full relative">
                <Image
                  src={aboutContent.section3.image}
                  alt={aboutContent.section3.image}
                  fill
                />
              </div>
            </div>
          </div>
        </section>
        {/* section4 */}

        <section className="flex flex-col gap-10">
          <TitleBox title={aboutContent.section4.title}></TitleBox>
          <ul className=" flex flex-wrap w-[700px] gap-20">
            {aboutContent.section4.cards.map((card) => (
              <li className=" flex  gap-4   " key={card.id}>
                <button className=" duration-300 text-grayLight hover:text-orange">
                  {card.image}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Page>
  );
}
