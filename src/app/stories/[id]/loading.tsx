import Divider from "@/components/Divider/Divider";
import Skeleton from "@/components/Skeleton/Skeleton";
import BackLink from "./back-link";

export default function LoadingStory() {
  return (
    <>
      <BackLink />

      <div className="flex aspect-[912/446] max-w-[912px]">
        <Skeleton className=" w-full h-full" />
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className=" w-1/5 h-[44px] md:h-[32px]" />
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
