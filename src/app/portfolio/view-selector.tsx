"use client";
import { useCallback } from "react";
import GridIcon from "@/assets/grid.svg";
import ListIcon from "@/assets/list.svg";
import { PortfolioView } from "./const";

interface ViewSelectorProps {
  view: PortfolioView;
  setView: (view: PortfolioView) => void;
}

function ViewSelector({ view, setView }: ViewSelectorProps) {
  const handleViewChange = useCallback(
    (newView: PortfolioView) => setView(newView),
    [setView]
  );

  return (
    <div className="flex gap-2 md:hidden">
      <button
        title="list"
        onClick={() => handleViewChange(PortfolioView.LIST)}
        className={`duration-300 text-grayPrimary hover:text-white ${
          view === PortfolioView.LIST ? "text-orange" : ""
        }`}
      >
        <ListIcon />
      </button>
      <button
        title="Grid"
        onClick={() => handleViewChange(PortfolioView.GRID)}
        className={`duration-300 text-grayPrimary hover:text-white ${
          view === PortfolioView.GRID ? "text-orange" : ""
        }`}
      >
        <GridIcon />
      </button>
    </div>
  );
}

export default ViewSelector;
