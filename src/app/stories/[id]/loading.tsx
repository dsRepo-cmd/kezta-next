import Divider from "@/components/Divider/Divider";
import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingStory() {
  return (
    <>
      <Skeleton width={"50%"} height={28} />

      <div className="flex aspect-[912/446] max-w-[912px]">
        <Skeleton
          width={"100%"}
          height={"100%"}
          className="flex w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton width={"50%"} className=" h-[78px] md:h-[60px]" />
        <Divider style={{ width: "10rem" }} />

        <Skeleton width={"30%"} className=" h-[28px] md:h-[24px]" />
        <Skeleton width={"30%"} className=" h-[28px] md:h-[24px]" />
      </div>

      <div className="flex flex-col gap-10">
        <Skeleton width={"100%"} height={800} />
      </div>
    </>
  );
}
