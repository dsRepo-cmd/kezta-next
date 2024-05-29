"use client";

import { useCallback, useState, useMemo } from "react";
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

  const filteredContent = useMemo(
    () =>
      tabValue === PortfolioType.ALL_WORKS
        ? portfolioContent.content
        : portfolioContent.content.filter((item) => item.type === tabValue),
    [tabValue]
  );

  return (
    <Page navigation={NavigationName.Portfolio}>
      <TitleBox title={portfolioContent.title} />
      <div className="flex gap-32">
        <div className="flex gap-10">
          {portfolioContent.typeTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.value)}
              className={`text-grayLight duration-300 hover:text-white ${
                tab.value === tabValue ? "underline text-orange" : ""
              }`}
            >
              {tab.value}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleViewChange(PortfolioView.LIST)}
            className={`duration-300 text-grayPrimary hover:text-white ${
              view === PortfolioView.LIST ? "text-orange" : ""
            }`}
          >
            <ListIcon />
          </button>
          <button
            onClick={() => handleViewChange(PortfolioView.GRID)}
            className={`duration-300 text-grayPrimary hover:text-white ${
              view === PortfolioView.GRID ? "text-orange" : ""
            }`}
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
            key={item.id}
            className={`relative ${
              view === PortfolioView.GRID
                ? "w-[300px] h-[300px]"
                : "w-[950px] h-[350px]"
            }`}
          >
            <Image
              src={item.image}
              alt={item.image}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        ))}
      </div>
    </Page>
  );
}
