import Skeleton from "@/components/Skeleton/Skeleton";
import Divider from "@/components/Divider/Divider";
import TitleBox from "@/components/TitleBox/TitleBox";
import Text from "@/components/Text/Text";
import { storiesContent } from "@/data/storiesContent";

const ITEMS_PER_PAGE = 4;
export default function LoadingStories() {
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
        {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex aspect-[920/300]  ">
              <Skeleton
                aspectRatio="920/300"
                className=" w-full h-full max-w-[920px]"
              />
            </div>

            <Skeleton className=" w-1/2 h-[56px] md:h-[38px]" />

            <Divider style={{ width: "10rem" }} />

            <Skeleton className=" w-1/3 h-[60px] md:h-[52px]" />
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-5 items-center gap-2">
        <Skeleton className=" w-1/3 h-[40px] max-w-full" />
      </div>
    </>
  );
}
