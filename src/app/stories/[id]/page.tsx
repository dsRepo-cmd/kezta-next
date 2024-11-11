import Divider from "@/components/Divider/Divider";
import SosialLinks from "@/components/SosialLinks/SosialLinks";
import CommentBox from "./(comments)/comment-box";
import NavigationLinks from "./navigation-links";
import { getStory } from "@/lib/getStory";
import Article from "./article";
import BackLink from "./back-link";

interface StoryProps {
  params: Promise<{ id: string }>;
}

async function Story(props: StoryProps) {
  const params = await props.params;
  const fetchData = await getStory(params.id);

  if (!fetchData?.story) {
    return null;
  }

  const { story, nextStory, prevStory } = fetchData;

  return (
    <>
      <BackLink />

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
