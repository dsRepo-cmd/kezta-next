import TitleBox from "@/components/TitleBox/TitleBox";
import Page from "@/containers/Page/Page";
import { NavigationName } from "@/data/navigation";
import { portfolioContent } from "@/data/portfolioContent";
import Image from "next/image";

export default function Portfolio() {
  return (
    <Page naigation={NavigationName.Portfolio}>
      <TitleBox text={portfolioContent.title} />

      <div className=" flex flex-col gap-10">
        {portfolioContent.content.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.image}
            width={920}
            height={325}
          />
        ))}
      </div>
    </Page>
  );
}
