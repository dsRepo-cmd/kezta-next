import Image from "next/image";
import TitleBox from "@/components/TitleBox/TitleBox";
import Text from "@/components/Text/Text";
import { aboutContent } from "./const";
const { whatWeDo } = aboutContent;
function WhatWeDo() {
  return (
    <section className="flex flex-col gap-10">
      <TitleBox title={whatWeDo.title} />
      <ul className="flex flex-wrap gap-20 md:gap-5 md:grid md:grid-cols-2">
        {whatWeDo.cards.map((card) => (
          <li className="flex flex-col gap-4 w-1/4  md:w-full " key={card.id}>
            <div className=" w-[55px] h-[55px]">
              <Image
                src={card.image}
                alt={card.image}
                width={50}
                height={50}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <Text fontSize="text-2xl" color="text-white" text={card.title} />
            <Text color="text-grayPrimary" text={card.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WhatWeDo;
