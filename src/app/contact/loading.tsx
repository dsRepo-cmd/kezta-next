import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingContact() {
  return (
    <>
      <Skeleton width={300} height={80} />
      <Skeleton width={"100%"} height={80} />
      <Skeleton width={"100%"} height={500} />
      <Skeleton width={"100%"} height={400} />
    </>
  );
}
