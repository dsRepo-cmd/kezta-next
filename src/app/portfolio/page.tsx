"use client";

import { useState, useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import TitleBox from "@/components/TitleBox/TitleBox";
import ImagesContent from "./images-content";
import ViewSelector from "./view-selector";
import Tabs from "./tabs";
import { portfolioContent, PortfolioType, PortfolioView } from "./const";
import { getClassFromPortfolioType } from "@/lib/utils";

function Portfolio() {
  const [tabValue, setTabValue] = useState(PortfolioType.ALL_WORKS);
  const [view, setView] = useState(PortfolioView.LIST);
  const isoRef = useRef<Isotope | null>(null);

  useEffect(() => {
    if (isoRef.current) {
      isoRef.current.arrange({
        filter:
          tabValue === PortfolioType.ALL_WORKS
            ? "*"
            : `.${getClassFromPortfolioType(tabValue)}`,
      });
    }
  }, [tabValue, view]);

  return (
    <>
      <TitleBox title={portfolioContent.title} />
      <div className="flex gap-32">
        <Tabs tabValue={tabValue} setTabValue={setTabValue} />
        <ViewSelector view={view} setView={setView} />
      </div>
      <ImagesContent view={view} isoRef={isoRef} />
    </>
  );
}

export default Portfolio;
