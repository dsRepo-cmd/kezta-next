import Divider from "@/components/Divider/Divider";
import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingStory() {
  return (
    <>
      <Skeleton className=" w-1/2 h-[28px]" />

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
