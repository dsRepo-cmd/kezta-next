import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingPortfolio() {
  return (
    <>
      <Skeleton className="mb-5" width={"30%"} height={80} />
      <Skeleton width={"100%"} height={30} />
      <Skeleton width={"100%"} height={300} />
      <Skeleton width={"100%"} height={300} />
      <Skeleton width={"100%"} height={300} />
      <Skeleton width={"100%"} height={300} />
    </>
  );
}
