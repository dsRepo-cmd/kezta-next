"use client";
import React, { useCallback, useMemo, useState } from "react";
import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider/Divider";
import { storiesContent } from "@/data/storiesContent";

const ITEMS_PER_PAGE = 4;

export default function Stories() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(storiesContent.cards.length / ITEMS_PER_PAGE);

  const currentCards = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = currentPage * ITEMS_PER_PAGE;
    return storiesContent.cards.slice(startIndex, endIndex);
  }, [currentPage]);

  const handlePageClick = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const renderPagination = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`duration-300 p-2 hover:text-white ${
            i === currentPage ? "text-orange underline" : "text-grayLight"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  }, [currentPage, handlePageClick, totalPages]);

  return (
    <>
      <div className=" flex flex-col gap-8">
        <TitleBox title={storiesContent.title} />
        <Text
          fontSize="text-xl"
          color="text-grayPrimary"
          text={storiesContent.subtitle}
        />
      </div>

      <div className=" flex flex-col gap-20">
        {currentCards.map((card) => (
          <div className="flex flex-col gap-3" key={card.id}>
            <div className=" flex overflow-hidden">
              <Link
                href={`/stories/${card.id}`}
                className="relative w-[900px] h-[300px] "
              >
                <Image
                  className=" duration-500 hover:scale-[1.05]"
                  src={card.image}
                  alt={card.image}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Link>
            </div>
            <Text fontSize="text-[32px]" className=" mt-2" text={card.title} />
            <Divider style={{ width: "10rem" }} />
            <div className=" flex  flex-col gap-1">
              <Text fontSize="text-lg" text={card.date} />
              <Text color="text-orange" fontSize="text-lg" text={card.type} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex m justify-end mt-5 items-center gap-2">
        <Divider style={{ width: "1.75rem", paddingTop: "1px" }} />
        {renderPagination}
      </div>
    </>
  );
}
