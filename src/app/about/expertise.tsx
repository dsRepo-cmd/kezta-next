import Image from "next/image";
import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import { aboutContent } from "./const";

function OurExpertise() {
  return (
    <section className="flex flex-col gap-10">
      <TitleBox title={aboutContent.section3.title} />
      <div className="flex gap-20  md:flex-col">
        <div className="flex flex-col gap-10 w-1/2 md:w-full">
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
        <div className="flex p-10 self-center bg-grayPrimary ">
          <div className="w-full relative">
            <Image
              src={aboutContent.section3.image}
              alt={aboutContent.section3.image}
              width={321}
              height={256}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurExpertise;
