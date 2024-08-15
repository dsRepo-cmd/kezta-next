import Link from "next/link";
import Divider from "@/components/Divider/Divider";
import Text from "@/components/Text/Text";
import SosialLinks from "@/components/SosialLinks/SosialLinks";
import Skeleton from "@/components/Skeleton/Skeleton";
import CommentBox from "./(comments)/comment-box";
import NavigationLinks from "./navigation-links";
import { getStory } from "@/lib/getStory";
import Article from "./article";

interface StoryProps {
  params: { id: string };
}

async function Story({ params }: StoryProps) {
  const fetchData = await getStory(params.id);

  const backToMainLink = (
    <Link
      className="flex gap-4 items-center duration-300 text-orange hover:text-white"
      href="/stories"
    >
      <Divider style={{ width: "3rem", paddingTop: "1px" }} />
      <Text fontSize="text-xl" text="Back to main" />
    </Link>
  );

  if (!fetchData?.story) {
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

  const { story, nextStory, prevStory } = fetchData;

  return (
    <>
      {backToMainLink}

      <Article story={story} />

      <div className="flex w-full justify-end items-center gap-5">
        <Divider style={{ width: "2rem", paddingTop: "1px" }} />
        <SosialLinks horisontal links={story.socialLinks} />
      </div>

      <NavigationLinks nextStory={nextStory} prevStory={prevStory} />

      <CommentBox storyId={params.id} />
    </>
  );
}

export default Story;
