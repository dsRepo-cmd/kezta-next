"use client";
import { useState, useMemo } from "react";
import TitleBox from "@/components/TitleBox/TitleBox";
import {
  PortfolioType,
  PortfolioView,
  portfolioContent,
} from "@/data/portfolioContent";
import PortfolioTabs from "@/containers/PortfolioTabs/PortfolioTabs";
import PortfolioViewSelector from "@/containers/PortfolioViewSelector/PortfolioViewSelector";
import PortfolioImageContent from "@/containers/PortfolioContent/PortfolioContent";
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
        <PortfolioTabs
          tabValue={tabValue}
          setTabValue={setTabValue}
          typeTabs={portfolioContent.typeTabs}
        />

        <PortfolioViewSelector view={view} setView={setView} />
      </div>
      <PortfolioImageContent view={view} filteredContent={filteredContent} />
    </>
  );
}

export default Portfolio;
