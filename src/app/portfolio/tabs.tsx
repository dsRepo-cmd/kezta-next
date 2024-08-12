import { memo, useCallback } from "react";
import { PortfolioTab, PortfolioType } from "./const";

interface TabsProps {
  tabValue: PortfolioType;
  setTabValue: (value: PortfolioType) => void;
  typeTabs: PortfolioTab[];
}

function Tabs({ typeTabs, setTabValue, tabValue }: TabsProps) {
  const handleTabClick = useCallback(
    (newTab: PortfolioType) => setTabValue(newTab),
    [setTabValue]
  );

  return (
    <div className="flex flex-wrap gap-10">
      {typeTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.value)}
          className={`text-grayLight duration-300 text-nowrap hover:text-white ${
            tab.value === tabValue ? "underline text-orange" : ""
          }`}
        >
          {tab.value}
        </button>
      ))}
    </div>
  );
}

export default memo(Tabs);
