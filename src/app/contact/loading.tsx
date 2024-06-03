import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingContact() {
  return (
    <div className=" w-[70vw] flex flex-col gap-10 md:w-[100vw]">
      <Skeleton width={300} height={80} />
      <Skeleton width={"100%"} height={80} />
      <Skeleton width={"100%"} height={500} />
      <Skeleton width={"100%"} height={400} />
    </div>
  );
}
