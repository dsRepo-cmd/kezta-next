import React, { useMemo } from "react";
import Divider from "@/components/Divider/Divider";
import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import { SroriesBlockType, stories } from "@/data/stories";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/check.svg";
import SosialLinks from "@/components/SosialLinks/SosialLinks";

interface StoryProps {
  params: { id: string };
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function Story({ params }: StoryProps) {
  const story = stories.find((block) => block.id === params.id);

  const currentIndex = useMemo(
    () => stories.findIndex((block) => block.id === params.id),
    [params.id]
  );

  const prevStory = useMemo(
    () => (currentIndex > 0 ? stories[currentIndex - 1] : null),
    [currentIndex]
  );
  const nextStory = useMemo(
    () =>
      currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null,
    [currentIndex]
  );

  if (!story) {
    return (
      <>
        <Link
          className="flex gap-4 items-center duration-300 text-orange hover:text-white"
          href="/stories"
        >
          <Divider style={{ width: "3rem", paddingTop: "1px" }} />
          <Text text="Back to main" />
        </Link>
        <TitleBox title="Story not found" />
      </>
    );
  }

  return (
    <>
      <Link
        className="flex gap-4 items-center duration-300 text-orange hover:text-white"
        href="/stories"
      >
        <Divider style={{ width: "3rem", paddingTop: "1px" }} />
        <Text fontSize="text-xl" text="Back to main" />
      </Link>

      <div className=" flex ">
        <Image
          src={story.image}
          alt={story.image}
          width={912}
          height={446}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          priority
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(912, 446)
          )}`}
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

      <div className="flex flex-col gap-10">
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
                    <CheckIcon />
                    <Text fontSize="text-lg" text={item.text} />
                  </li>
                ))}
              </ul>
            )}
            {block.type === SroriesBlockType.IMAGE_TEXT && (
              <span>
                {block.image && (
                  <div className="relative w-[500px] h-[230px] flex-shrink-0 float-right">
                    <Image
                      src={block.image}
                      alt={block.image}
                      fill
                      sizes="50vw"
                      style={{ objectFit: "contain" }}
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

        <div className="flex w-full justify-end items-center gap-5">
          <Divider style={{ width: "2rem", paddingTop: "1px" }} />
          <SosialLinks horisontal links={story.socialLinks} />
        </div>

        <div className="flex flex-col gap-4 ">
          <div className="flex gap-4 items-baseline">
            {nextStory && (
              <>
                <Text
                  fontSize="text-[28px]"
                  color="text-grayPrimary"
                  text="Next:"
                />
                <Link href={`/stories/${nextStory.id}`}>
                  <Text
                    fontSize="text-xl"
                    className="duration-300  hover:text-orange"
                    text={nextStory.title}
                  />
                </Link>
              </>
            )}
          </div>
          <div className="flex gap-4 items-baseline">
            {prevStory && (
              <>
                <Text
                  fontSize="text-[28px]"
                  color="text-grayPrimary"
                  text="Prev:"
                />
                <Link href={`/stories/${prevStory.id}`}>
                  <Text
                    fontSize="text-xl"
                    className="duration-300  hover:text-orange"
                    text={prevStory.title}
                  />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
