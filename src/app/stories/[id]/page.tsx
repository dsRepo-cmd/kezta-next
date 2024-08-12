"use client";
import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider/Divider";
import Text from "@/components/Text/Text";
import SosialLinks from "@/components/SosialLinks/SosialLinks";
import { AdjacentLink, FetchStories, SroriesBlockType, Srory } from "../types";
import Icon from "@/components/Icon/Icon";
import Skeleton from "@/components/Skeleton/Skeleton";
import CheckIcon from "@/assets/check.svg";
import CommentBox from "../../../containers/CommentBox/CommentBox";
import NavigationLinks from "./navigationLinks";

interface StoryProps {
  params: { id: string };
}

function Story({ params }: StoryProps) {
  const [story, setStory] = useState<Srory>();

  const [prevStory, setPrevStory] = useState<AdjacentLink>();
  const [nextStory, setNextStory] = useState<AdjacentLink>();
  const [loading, setLoading] = useState(false);

  const fetchStories = async (storyId: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/stories?storyId=${storyId}`);
      const data: FetchStories = await res.json();

      if (res.ok) {
        setStory(data.story);
        setPrevStory(data.prevStory);
        setNextStory(data.nextStory);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() => {
    fetchStories(params.id);
  }, [params.id]);

  const backToMainLink = (
    <Link
      className="flex gap-4 items-center duration-300 text-orange hover:text-white"
      href="/stories"
    >
      <Divider style={{ width: "3rem", paddingTop: "1px" }} />
      <Text fontSize="text-xl" text="Back to main" />
    </Link>
  );

  if (loading || !story) {
    return (
      <>
        {backToMainLink}

        <div className="flex aspect-[912/446] max-w-[912px]">
          <Skeleton className=" w-full h-full" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className=" w-1/5 h-[78px] md:h-[60px]" />
          <Divider style={{ width: "10rem" }} />

          <Skeleton className=" w-1/3 h-[28px] md:h-[24px]" />
          <Skeleton className=" w-1/3 h-[28px] md:h-[24px]" />
        </div>

        <div className="flex flex-col gap-10">
          <Skeleton className=" w-full h-[800px]" />
        </div>
      </>
    );
  }

  return (
    <>
      {backToMainLink}

      <div className="flex aspect-[912/446] max-w-[912px]">
        <Image
          src={story.image}
          alt={story.image}
          width={912}
          height={446}
          className=" object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-2">
        <Text
          fontSize="text-[44px]"
          className="mb-3 capitalize"
          title={story.title}
        />
        <Divider style={{ width: "10rem" }} />
        <div className="flex gap-2">
          <Text fontSize="text-lg" text={story.date} />
          <Text fontSize="text-lg" text="|" />
          <Text fontSize="text-lg" text={`Posted by: ${story.userName}`} />
        </div>
        <Text fontSize="text-lg" color="text-orange" text={story.type} />
      </div>

      <article className="flex flex-col gap-10">
        {story.blocks.map((block) => (
          <div key={block.id}>
            {block.type === SroriesBlockType.TEXT && (
              <Text
                fontSize="text-lg"
                color="text-grayPrimary"
                text={block.text}
              />
            )}
            {block.type === SroriesBlockType.TITLE && (
              <Text
                fontSize="text-[44px]"
                className="text-[2rem] capitalize"
                title={block.title}
              />
            )}
            {block.type === SroriesBlockType.CHECK_LIST && (
              <ul className="flex flex-col gap-5">
                {block.checkList?.map((item) => (
                  <li className="flex gap-5" key={item.id}>
                    <Icon Svg={CheckIcon} />
                    <Text
                      className=" w-full"
                      fontSize="text-lg"
                      text={item.text}
                    />
                  </li>
                ))}
              </ul>
            )}
            {block.type === SroriesBlockType.IMAGE_TEXT && (
              <span>
                {block.image && (
                  <div className="relative flex-shrink-0 float-right">
                    <Image
                      src={block.image}
                      alt={block.image}
                      width={500}
                      height={230}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                )}
                {block.texts?.map((text) => (
                  <Text
                    fontSize="text-lg"
                    key={text.id}
                    className="mb-10"
                    color="text-grayPrimary"
                    text={text.text}
                  />
                ))}
              </span>
            )}
          </div>
        ))}
      </article>

      <div className="flex w-full justify-end items-center gap-5">
        <Divider style={{ width: "2rem", paddingTop: "1px" }} />
        <SosialLinks horisontal links={story.socialLinks} />
      </div>

      <NavigationLinks nextStory={nextStory} prevStory={prevStory} />

      <CommentBox storyId={params.id} />
    </>
  );
}

export default memo(Story);
