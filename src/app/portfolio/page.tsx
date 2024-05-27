"use client";
import { useCallback, useState } from "react";
import TitleBox from "@/components/TitleBox/TitleBox";
import Page from "@/containers/Page/Page";
import { NavigationName } from "@/data/navigation";
import { PortfolioType, portfolioContent } from "@/data/portfolioContent";
import Image from "next/image";

export default function Portfolio() {
  const [tabValue, setTabValue] = useState(PortfolioType.ALL_WORKS);

  const handleTabClick = useCallback((tabValue: PortfolioType) => {
    setTabValue(tabValue);
  }, []);

  const filteredContent =
    tabValue === PortfolioType.ALL_WORKS
      ? portfolioContent.content
      : portfolioContent.content.filter((item) => item.type === tabValue);

  return (
    <Page naigation={NavigationName.Portfolio}>
      <TitleBox text={portfolioContent.title} />

      <div className="flex gap-10">
        <div className="flex gap-10">
          {portfolioContent.typeTabs.map((tab) => {
            const isSelected = tab.value === tabValue;

            return (
              <button
                onClick={() => handleTabClick(tab.value)}
                className={`text-grayLight duration-300 hover:text-white ${
                  isSelected && "underline text-orange"
                }`}
                key={tab.id}
              >
                {tab.value}
              </button>
            );
          })}
        </div>
        <div className="flex gap-10"></div>
      </div>

      <div className="flex flex-col gap-10">
        {filteredContent.map((item) => (
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
