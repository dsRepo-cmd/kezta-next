import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingContact() {
  return (
    <>
      <Skeleton className=" w-[300px] h-[80px] " />
      <Skeleton className=" w-full h-[80px] " />
      <Skeleton className=" w-full h-[500px] " />
      <Skeleton className=" w-full h-[400px] " />
    </>
  );
}
