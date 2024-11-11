import Divider from "@/components/Divider/Divider";
import Text from "@/components/Text/Text";
import { SroriesBlockType, Story } from "@/types/types";
import Image from "next/image";
import CheckIcon from "@/assets/check.svg";
import Icon from "@/components/Icon/Icon";

interface Props {
  story: Story;
}

function Article({ story }: Props) {
  return (
    <>
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
          fontSize="text-[32px]"
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
      <article className="flex flex-col gap-6">
        {story.blocks.map((block) => (
          <div key={block.id}>
            {block.type === SroriesBlockType.TEXT && (
              <Text
                fontSize="text-base"
                color="text-grayPrimary"
                text={block.text}
              />
            )}
            {block.type === SroriesBlockType.TITLE && (
              <Text
                fontSize="text-2xl"
                className=" capitalize"
                title={block.title}
              />
            )}
            {block.type === SroriesBlockType.CHECK_LIST && (
              <ul className="flex flex-col gap-5 mb-4">
                {block.checkList?.map((item) => (
                  <li className="flex gap-5" key={item.id}>
                    <Icon Svg={CheckIcon} />
                    <Text
                      className=" w-full"
                      fontSize="text-base"
                      text={item.text}
                    />
                  </li>
                ))}
              </ul>
            )}
            {block.type === SroriesBlockType.IMAGE_TEXT && (
              <span>
                {block.image && (
                  <div className="relative float-right ml-4 xl:ml-0 lg:ml-4 mb-4 md:ml-0 ">
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
                    fontSize="text-base"
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
    </>
  );
}

export default Article;
