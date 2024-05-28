import Divider from "@/components/Divider/Divider";
import Text from "@/components/Text/Text";
import TitleBox from "@/components/TitleBox/TitleBox";
import Page from "@/containers/Page/Page";
import { SroriesBlockType, stories } from "@/data/stories";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/check.svg";

interface StoryProps {
  params: { id: string };
}
export default function Story({ params }: StoryProps) {
  const story = stories.find((block) => block.id === params.id);

  if (!story)
    return (
      <Page>
        <Link
          className=" flex gap-4 items-center duration-300 text-orange hover:text-white "
          href={"/stories"}
        >
          <Divider style={{ width: "3rem", paddingTop: "1px" }} />
          <Text text="Back to main" />
        </Link>
        <TitleBox title="Story not found" />
      </Page>
    );

  return (
    <Page>
      <Link
        className=" flex gap-4 items-center duration-300 text-orange hover:text-white "
        href={"/stories"}
      >
        <Divider style={{ width: "3rem", paddingTop: "1px" }} />
        <Text text="Back to main" />
      </Link>

      <div className=" relative flex w-[900px] h-[450px]">
        <Image src={story.image} alt={story.image} fill />
      </div>

      {/* title  */}

      <div className=" flex flex-col gap-2">
        <Text className=" mb-3 text-[2.5rem] capitalize" title={story.title} />
        <Divider style={{ width: "10rem" }} />
        <div className=" flex gap-2 ">
          <Text text={story.date} />
          <Text text={"|"} />
          <Text text={`Posted by: ${story.userName}`} />
        </div>
        <Text color="text-orange" text={story.type} />
      </div>

      {/* body of story */}

      <div className=" flex flex-col gap-10">
        {story.blocks.map((block) => (
          <div key={block.id}>
            {block.type === SroriesBlockType.TEXT && (
              <Text color="text-grayPrimary" text={block.text} />
            )}
            {block.type === SroriesBlockType.TITLE && (
              <Text className=" text-[2rem] capitalize" title={block.title} />
            )}

            {block.type === SroriesBlockType.CHECK_LIST && (
              <ul className=" flex flex-col gap-5">
                {block.checkList &&
                  block.checkList.map((item) => (
                    <li className=" flex gap-5" key={item.id}>
                      <CheckIcon />
                      {item.text}
                    </li>
                  ))}
              </ul>
            )}

            {block.type === SroriesBlockType.IMAGE_TEXT && (
              <span>
                {block.image && (
                  <div className="relative w-[500px] h-[230px] flex-shrink-0 float-right">
                    <Image src={block.image} alt={block.image} fill />
                  </div>
                )}

                {block.texts?.map((text) => (
                  <Text
                    key={text.id}
                    className=" mb-10"
                    color="text-grayPrimary"
                    text={text.text}
                  />
                ))}
              </span>
            )}
          </div>
        ))}

        <div className=" flex w-full justify-end">
          {story.socialLinks && (
            <div className=" flex items-stretch gap-2 h-full ">
              {story.socialLinks.map((link) => (
                <Link className=" " href={"#"} key={link?.id}>
                  {link?.icon}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}
