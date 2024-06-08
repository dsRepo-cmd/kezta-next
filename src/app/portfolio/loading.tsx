import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingPortfolio() {
  return (
    <>
      <Skeleton className=" w-1/3 h-[60px]" />
      <Skeleton className=" w-full h-[30px]" />
      <Skeleton className=" w-full h-[300px]" />
      <Skeleton className=" w-full h-[300px]" />
      <Skeleton className=" w-full h-[300px]" />
      <Skeleton className=" w-full h-[300px]" />
    </>
  );
}
