import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingAbout() {
  return (
    <div className=" w-[60vw] flex flex-col gap-10 md:w-[90vw]">
      <Skeleton width={"50%"} height={80} />
      <Skeleton width={"100%"} height={120} />

      <Skeleton width={"100%"} height={430} />
      <Skeleton width={"50%"} height={50} />
      <Skeleton width={"30%"} height={120} />

      <Skeleton width={"100%"} height={430} />
      <Skeleton width={"50%"} height={50} />
      <Skeleton width={"30%"} height={120} />
    </div>
  );
}
