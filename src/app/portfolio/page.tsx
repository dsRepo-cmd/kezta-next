"use client";
import { useState, useMemo } from "react";
import TitleBox from "@/components/TitleBox/TitleBox";
import {
  PortfolioType,
  PortfolioView,
  portfolioContent,
} from "@/data/portfolioContent";
import ImagesContent from "./imagesContent";
import ViewSelector from "./viewSelector";
import Tabs from "./tabs";

function Portfolio() {
  const [tabValue, setTabValue] = useState(PortfolioType.ALL_WORKS);
  const [view, setView] = useState(PortfolioView.LIST);

  const filteredContent = useMemo(
    () =>
      tabValue === PortfolioType.ALL_WORKS
        ? portfolioContent.content
        : portfolioContent.content.filter((item) => item.type === tabValue),
    [tabValue]
  );

  return (
    <>
      <TitleBox title={portfolioContent.title} />
      <div className="flex gap-32">
        <Tabs
          tabValue={tabValue}
          setTabValue={setTabValue}
          typeTabs={portfolioContent.typeTabs}
        />

        <ViewSelector view={view} setView={setView} />
      </div>
      <ImagesContent view={view} filteredContent={filteredContent} />
    </>
  );
}

export default Portfolio;
