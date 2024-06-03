import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingStory() {
  return (
    <>
      <Skeleton width={150} height={30} />
      <Skeleton width={"100%"} height={400} />
      <Skeleton width={"50%"} height={60} />
      <Skeleton width={"50%"} height={120} />
      <Skeleton width={"100%"} height={800} />
    </>
  );
}
