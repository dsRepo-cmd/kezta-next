"use client";
import { useCallback, useState } from "react";
import TitleBox from "@/components/TitleBox/TitleBox";
import Page from "@/containers/Page/Page";
import { NavigationName } from "@/data/navigation";
import {
  PortfolioType,
  PortfolioView,
  portfolioContent,
} from "@/data/portfolioContent";
import Image from "next/image";
import GridIcon from "@/assets/grid.svg";
import ListIcon from "@/assets/list.svg";

export default function Portfolio() {
  const [tabValue, setTabValue] = useState(PortfolioType.ALL_WORKS);
  const [view, setView] = useState(PortfolioView.LIST);

  const handleViewChange = useCallback(
    (newView: PortfolioView) => setView(newView),
    []
  );
  const handleTabClick = useCallback(
    (newTab: PortfolioType) => setTabValue(newTab),
    []
  );

  const filteredContent =
    tabValue === PortfolioType.ALL_WORKS
      ? portfolioContent.content
      : portfolioContent.content.filter((item) => item.type === tabValue);

  return (
    <Page navigation={NavigationName.Portfolio}>
      <TitleBox title={portfolioContent.title} />
      <div className="flex gap-32">
        <div className="flex gap-10">
          {portfolioContent.typeTabs.map((tab) => (
            <button
              onClick={() => handleTabClick(tab.value)}
              className={`text-grayLight duration-300 hover:text-white ${
                tab.value === tabValue ? "underline text-orange" : ""
              }`}
              key={tab.id}
            >
              {tab.value}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            className={`duration-300 text-grayPrimary hover:text-white ${
              view === PortfolioView.LIST ? "text-orange" : ""
            }`}
            onClick={() => handleViewChange(PortfolioView.LIST)}
          >
            <ListIcon />
          </button>
          <button
            className={`duration-300 text-grayPrimary hover:text-white ${
              view === PortfolioView.GRID ? "text-orange" : ""
            }`}
            onClick={() => handleViewChange(PortfolioView.GRID)}
          >
            <GridIcon />
          </button>
        </div>
      </div>
      <div
        className={`duration-500 ${
          view === PortfolioView.GRID
            ? "grid grid-cols-3 gap-8"
            : "flex flex-col gap-10"
        }`}
      >
        {filteredContent.map((item) => (
          <div
            className={`relative ${
              view === PortfolioView.GRID
                ? "w-[300px] h-[300px]"
                : "w-[950px] h-[350px]"
            }`}
            key={item.id}
          >
            <Image src={item.image} alt={item.image} fill objectFit="cover" />
          </div>
        ))}
      </div>
    </Page>
  );
}
