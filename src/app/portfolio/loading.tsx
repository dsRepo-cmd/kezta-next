import Skeleton from "@/components/Skeleton/Skeleton";

export default function LoadingPortfolio() {
  return (
    <>
      <Skeleton width={"30%"} height={60} />
      <Skeleton width={"100%"} height={30} />
      <Skeleton width={"100%"} height={300} />
      <Skeleton width={"100%"} height={300} />
      <Skeleton width={"100%"} height={300} />
      <Skeleton width={"100%"} height={300} />
    </>
  );
}
