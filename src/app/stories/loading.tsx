import Skeleton from "@/components/Skeleton/Skeleton";
import { ITEMS_PER_PAGE } from "./page";
import Divider from "@/components/Divider/Divider";
import TitleBox from "@/components/TitleBox/TitleBox";
import Text from "@/components/Text/Text";
import { storiesContent } from "@/data/storiesContent";

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
            <div className="relative  overflow-hidden flex aspect-[921/285] ">
              <Skeleton
                width="100%"
                height={"100%"}
                className="flex w-full h-full"
              />
            </div>

            <Skeleton width="50%" className=" h-[56px] md:h-[38px]" />

            <Divider style={{ width: "10rem" }} />

            <Skeleton width="30%" className="max-w-full h-[60px] md:h-[52px]" />
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-5 items-center gap-2">
        <Skeleton width="30%" height="40px" className="max-w-full" />
      </div>
    </>
  );
}
