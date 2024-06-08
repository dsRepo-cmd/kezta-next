"use client";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import Divider from "@/components/Divider/Divider";
import Skeleton from "@/components/Skeleton/Skeleton";
import { storiesContent } from "@/data/storiesContent";

const ITEMS_PER_PAGE = 4;

interface StoryProps {
  _id: string;
  title: string;
  type: string;
  image: string;
  date: string;
}

const Stories = () => {
  const [stories, setStories] = useState<StoryProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch("/api/stories");
        const data = await res.json();
        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageClick = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const totalPages = useMemo(
    () => Math.ceil(stories.length / ITEMS_PER_PAGE),
    [stories.length]
  );

  const currentCards = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return stories.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, stories]);

  const renderPagination = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => handlePageClick(i + 1)}
        className={`duration-300 p-2 hover:text-white ${
          i + 1 === currentPage ? "text-orange underline" : "text-grayLight"
        }`}
      >
        {i + 1}
      </button>
    ));
  }, [currentPage, handlePageClick, totalPages]);

  if (stories.length === 0) {
    return (
      <div className="flex flex-col gap-8">
        <TitleBox title={storiesContent.title} />
        <Text
          fontSize="text-xl"
          color="text-grayPrimary"
          text={storiesContent.subtitle}
        />
        {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
          <div key={index} className="flex flex-col gap-8 max-w-full">
            <Skeleton
              width="100%"
              height="400px"
              className="w-full max-w-full"
            />
            <Skeleton width="50%" height="50px" className="max-w-full" />
            <Skeleton width="30%" height="60px" className="max-w-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        <TitleBox title={storiesContent.title} />
        <Text
          fontSize="text-xl"
          color="text-grayPrimary"
          text={storiesContent.subtitle}
        />
      </div>
      <div className="flex flex-col gap-20">
        {currentCards.map((card) => (
          <div className="flex flex-col gap-3" key={card._id}>
            <div className="flex overflow-hidden">
              <Link
                href={`/stories/${card._id}`}
                className="relative flex w-full h-full"
              >
                <Image
                  className="duration-500 hover:scale-[1.05]"
                  src={card.image}
                  alt={card.image}
                  width={900}
                  height={300}
                  priority
                />
              </Link>
            </div>
            <Text fontSize="text-[32px]" className="mt-2" text={card.title} />
            <Divider style={{ width: "10rem" }} />
            <div className="flex flex-col gap-1">
              <Text fontSize="text-lg" text={card.date} />
              <Text color="text-orange" fontSize="text-lg" text={card.type} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-5 items-center gap-2">
        <Divider style={{ width: "1.75rem", paddingTop: "1px" }} />
        {renderPagination}
      </div>
    </>
  );
};

export default memo(Stories);
