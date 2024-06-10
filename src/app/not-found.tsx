import Text from "@/components/Text/Text";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex flex-col w-full h-screen  gap-20 items-center justify-center">
      <Text fontSize="text-[4rem]" title="Not Found" />
      <div className=" flex flex-col gap-5 items-center">
        <Text
          color="text-grayPrimary"
          title="Could not find requested resource"
        />

        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
