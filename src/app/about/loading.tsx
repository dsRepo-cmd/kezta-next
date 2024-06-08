import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingAbout() {
  return (
    <>
      <Skeleton className=" w-1/2 h-[60px]" />
      <Skeleton className=" w-full h-[120px] " />

      <Skeleton className=" w-full h-[800px] " />
      <Skeleton className=" w-1/2 h-[50px]" />
      <Skeleton className=" w-1/3 h-[120px]" />

      <Skeleton className=" w-full h-[430px] " />
      <Skeleton className=" w-1/2 h-[50px]" />
      <Skeleton className=" w-1/3 h-[120px]" />
    </>
  );
}
