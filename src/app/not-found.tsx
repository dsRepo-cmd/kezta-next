import Text from "@/components/Text/Text";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" flex flex-col w-full h-screen  gap-20 items-center justify-center">
      <Text fontSize="text-[4rem]" title="Not Found" />
      <div className=" flex flex-col gap-10 items-center">
        <Text
          fontSize="text-xl"
          color="text-grayPrimary"
          text="Could not find requested resource"
        />

        <Link
          className=" duration-300 text-lg px-12 py-3 bg-orange  hover:opacity-80 hover:text-grayLight active:text-white"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
