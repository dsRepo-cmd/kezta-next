import Divider from "@/components/Divider/Divider";
import Link from "next/link";

function BackLink() {
  return (
    <Link
      className="flex gap-4 items-center duration-300 text-orange hover:text-white"
      href="/stories"
    >
      <Divider style={{ width: "3rem", paddingTop: "1px" }} />

      <span className=" text-xl md:text-lg ">Back to main</span>
    </Link>
  );
}

export default BackLink;
