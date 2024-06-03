"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider/Divider";
import { storiesContent } from "@/data/storiesContent";
import Skeleton from "@/components/Skeleton/Skeleton";

const ITEMS_PER_PAGE = 4;

interface StoryProps {
  _id: string;
  title: string;
  type: string;
  image: string;
  date: string;
}

export default function Stories() {
  const [stories, setStories] = useState<StoryProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchStories = async () => {
    try {
      const res = await fetch("/api/stories");
      const data = await res.json();
      setStories(data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handlePageClick = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const totalPages = useMemo(
    () => Math.ceil(stories.length / ITEMS_PER_PAGE),
    [stories.length]
  );

  const currentCards = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = currentPage * ITEMS_PER_PAGE;
    return stories.slice(startIndex, endIndex);
  }, [currentPage, stories]);

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

  if (!stories) {
    return (
      <div className=" w-[60vw] flex flex-col gap-10 md:w-[90vw]">
        <Skeleton width={"50%"} height={60} />
        <Skeleton width={"50%"} height={"100%"} />

        <Skeleton width={"100%"} height={430} />
        <Skeleton width={"50%"} height={50} />
        <Skeleton width={"30%"} height={120} />

        <Skeleton width={"100%"} height={430} />
        <Skeleton width={"50%"} height={50} />
        <Skeleton width={"30%"} height={120} />
      </div>
    );
  }

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
          <div className="flex flex-col gap-3" key={card._id}>
            <div className=" flex overflow-hidden">
              <Link
                href={`/stories/${card._id}`}
                className="relative flex  w-full h-full"
              >
                <Image
                  className=" duration-500 hover:scale-[1.05]"
                  src={card.image}
                  alt={card.image}
                  width={900}
                  height={300}
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
