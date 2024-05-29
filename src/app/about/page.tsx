"use client";

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
      <div className="flex flex-col gap-24">
        {/* section1 */}
        <section className="flex flex-col gap-10">
          <TitleBox title={aboutContent.section1.title} />
          <Text
            fontSize="text-[32px]"
            color="text-white"
            subtitle={aboutContent.section1.subtitle}
          />
          <div className="flex gap-20">
            <div className="relative w-1/2 max-w-[400px] min-h-20 flex flex-col">
              <Image
                src="/k-letter.svg"
                alt="k-letter"
                width={220}
                height={220}
                className="absolute left-1/2 top-5 translate-x-[-50%]"
              />
              <div className="w-full h-40" />
              <div className="w-full h-48 bg-orange" />
            </div>
            <div className="flex flex-col gap-6 w-1/2">
              {aboutContent.section1.text.map((text) => (
                <Text
                  fontSize="text-lg"
                  color="text-grayPrimary"
                  key={text.id}
                  text={text.paragraph}
                />
              ))}
              <div className="flex items-center gap-4">
                <Divider style={{ width: "5rem", paddingTop: "1px" }} />
                <Link href={aboutContent.section1.link.href}>
                  <Text
                    fontSize="text-lg"
                    color="text-orange"
                    className="duration-300 underline hover:text-white"
                    text={aboutContent.section1.link.text}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="m-auto">
            <ul className="flex gap-10 w-full mt-20">
              {aboutContent.section1.cards.map((card) => (
                <li className="flex flex-col gap-4 self-center" key={card.id}>
                  <Text
                    fontSize="text-lg"
                    color="text-orange"
                    className="text-[1rem]"
                    text={card.number}
                  />
                  <Text
                    className="text-[1.75rem]"
                    fontSize="text-[28px]"
                    color="text-white"
                    subtitle={card.value}
                  />
                  <Divider style={{ width: "80%" }} />
                  <Text
                    fontSize="text-lg"
                    className="min-w-36 text-nowrap"
                    color="text-grayPrimary"
                    text={card.text}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* What We Do */}
        <section className="flex flex-col gap-10">
          <TitleBox title={aboutContent.section2.title} />
          <ul className="flex flex-wrap gap-20">
            {aboutContent.section2.cards.map((card) => (
              <li className="flex flex-col gap-4 w-1/4" key={card.id}>
                <Image
                  src={card.image}
                  alt={card.image}
                  width={50}
                  height={50}
                />
                <Text
                  fontSize="text-2xl"
                  color="text-white"
                  text={card.title}
                />
                <Text color="text-grayPrimary" text={card.text} />
              </li>
            ))}
          </ul>
        </section>
        {/* Our Expertise */}
        <section className="flex flex-col gap-10">
          <TitleBox title={aboutContent.section3.title} />
          <div className="flex gap-20">
            <div className="flex flex-col gap-10 w-1/2">
              <Text
                fontSize="text-xl"
                color="text-grayPrimary"
                text={aboutContent.section3.text}
              />
              <div className="flex flex-col gap-10">
                {aboutContent.section3.statistics.map((item) => (
                  <div key={item.id}>
                    <div className="flex justify-between">
                      <Text fontSize="text-sm" text={item.title} />
                      <Text fontSize="text-sm" text={`${item.value}%`} />
                    </div>
                    <progress
                      className="progress-bar w-full h-[10px] bg-grayPrimary"
                      max="100"
                      value={item.value}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex p-10 bg-grayPrimary w-[450px] h-[360px]">
              <div className="w-full relative">
                <Image
                  src={aboutContent.section3.image}
                  alt={aboutContent.section3.image}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="50vh"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Clients */}
        <section className="flex flex-col gap-10">
          <TitleBox title={aboutContent.section4.title} />
          <ul className="flex flex-wrap w-[700px] gap-20">
            {aboutContent.section4.cards.map((card) => (
              <li className="flex gap-4" key={card.id}>
                <button className="duration-300 text-grayLight hover:text-orange">
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
