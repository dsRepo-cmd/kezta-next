"use client";
import { useEffect, memo } from "react";
import Isotope from "isotope-layout";
import Image from "next/image";
import { portfolioContent, PortfolioView } from "@/app/portfolio/const";
import { getClassFromPortfolioType } from "@/lib/utils";

interface ContentProps {
  view: PortfolioView;

  isoRef: React.MutableRefObject<Isotope | null>;
}

function ImagesContent({ view, isoRef }: ContentProps) {
  useEffect(() => {
    if (!isoRef.current) {
      isoRef.current = new Isotope(".grid-container", {
        itemSelector: ".grid-item",
        layoutMode: view === PortfolioView.GRID ? "fitRows" : "vertical",
        transitionDuration: "0.6s",
        containerStyle: {
          height: "100%",
          position: "relative",
        },
        stagger: "0.05s",
        percentPosition: true,
      });
    }

    return () => {
      if (isoRef.current) {
        isoRef.current.destroy();
        isoRef.current = null;
      }
    };
  }, [view, isoRef]);

  return (
    <div
      className={`grid-container ${
        view === PortfolioView.GRID ? "grid" : "list"
      }`}
    >
      {portfolioContent.content.map((item) => (
        <div
          key={item.id}
          className={`grid-item p-2 ${getClassFromPortfolioType(item.type)}`}
        >
          <Image
            src={view === PortfolioView.GRID ? item.imageSquard : item.image}
            alt={item.image}
            width={view === PortfolioView.GRID ? 300 : 920}
            height={view === PortfolioView.GRID ? 300 : 325}
            className="object-contain"
            priority
          />
        </div>
      ))}
    </div>
  );
}

export default memo(ImagesContent);
