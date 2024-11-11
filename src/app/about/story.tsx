import Link from "next/link";
import Image from "next/image";
import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import Divider from "@/components/Divider/Divider";
import { aboutContent } from "./const";
const { outStory } = aboutContent;
function OurStory() {
  return (
    <section className="flex flex-col gap-10 justify-center">
      <TitleBox title={outStory.title} />
      <Text
        fontSize="text-[32px]"
        color="text-white"
        subtitle={outStory.subtitle}
      />
      <div className="flex gap-20 md:flex-col items-center">
        <div className="relative w-1/2 max-w-[400px] min-h-20 flex flex-col md:w-full">
          <Image
            src="/k-letter.svg"
            alt="k-letter"
            width={220}
            height={220}
            style={{ width: "auto", height: "auto" }}
            className="absolute left-1/2 top-5 translate-x-[-50%]"
          />
          <div className="w-full h-40" />
          <div className="w-full h-48 bg-orange" />
        </div>
        <div className="flex flex-col gap-6 w-1/2 md:w-full">
          {outStory.text.map((text) => (
            <Text
              fontSize="text-lg"
              color="text-grayPrimary"
              key={text.id}
              text={text.paragraph}
            />
          ))}
          <div className="flex items-center gap-4">
            <Divider style={{ width: "5rem", paddingTop: "1px" }} />
            <Link href={outStory.link.href}>
              <Text
                fontSize="text-lg"
                color="text-orange"
                className="duration-300 underline hover:text-white"
                text={outStory.link.text}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="m-auto">
        <ul className="flex flex-wrap gap-10 w-full mt-20">
          {outStory.cards.map((card) => (
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
  );
}

export default OurStory;
