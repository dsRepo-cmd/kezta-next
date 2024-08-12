import { PortfolioContent, PortfolioView } from "@/app/portfolio/const";
import Image from "next/image";
import { memo } from "react";

interface ContentProps {
  view: PortfolioView;
  filteredContent: PortfolioContent[];
}

function ImagesContent({ view, filteredContent }: ContentProps) {
  return (
    <div
      className={`duration-500 ${
        view === PortfolioView.GRID
          ? "grid grid-cols-3 gap-8"
          : "flex flex-col gap-10"
      }`}
    >
      {filteredContent.map((item) =>
        view === PortfolioView.GRID ? (
          <Image
            key={item.id}
            src={item.imageSquard}
            alt={item.image}
            width={920}
            height={325}
            className="object-contain"
            priority
          />
        ) : (
          <Image
            key={item.id}
            src={item.image}
            alt={item.image}
            width={920}
            height={325}
            className="object-contain"
            priority
          />
        )
      )}
    </div>
  );
}

export default memo(ImagesContent);
