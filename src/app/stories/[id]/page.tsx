import Link from "next/link";
import Divider from "@/components/Divider/Divider";
import SosialLinks from "@/components/SosialLinks/SosialLinks";
import CommentBox from "./(comments)/comment-box";
import NavigationLinks from "./navigation-links";
import { getStory } from "@/lib/getStory";
import Article from "./article";

interface StoryProps {
  params: Promise<{ id: string }>;
}
export const backToMainLink = (
  <Link
    className="flex gap-4 items-center duration-300 text-orange hover:text-white"
    href="/stories"
  >
    <Divider style={{ width: "3rem", paddingTop: "1px" }} />

    <span className=" text-xl md:text-lg ">Back to main</span>
  </Link>
);

async function Story(props: StoryProps) {
  const params = await props.params;
  const fetchData = await getStory(params.id);

  if (!fetchData?.story) {
    return null;
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
