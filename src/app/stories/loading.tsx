import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingStories() {
  return (
    <div className=" w-[60vw] flex flex-col gap-10 md:w-[100vw]">
      <Skeleton width={"50%"} height={80} />
      <Skeleton width={"100%"} height={80} />

      <Skeleton width={"90%"} height={400} />
      <Skeleton width={"50%"} height={50} />
      <Skeleton width={"30%"} height={60} />

      <Skeleton width={"90%"} height={400} />
      <Skeleton width={"50%"} height={50} />
      <Skeleton width={"30%"} height={60} />

      <Skeleton width={"90%"} height={400} />
      <Skeleton width={"50%"} height={50} />
      <Skeleton width={"30%"} height={60} />

      <Skeleton width={"90%"} height={400} />
      <Skeleton width={"50%"} height={50} />
      <Skeleton width={"30%"} height={60} />
    </div>
  );
}
