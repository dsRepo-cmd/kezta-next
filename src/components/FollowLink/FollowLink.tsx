import { memo } from "react";
import Link from "next/link";
import FollowIcon from "@/assets/follow-us.svg";

function FollowLink() {
  return (
    <Link
      aria-label="Follow Us"
      target="_blank"
      href={"https://www.google.com/"}
    >
      <div className=" absolute top-[450px] left-[80px] rotate-[270deg] flex  gap-2  justify-center items-center md:hidden xl:left-12 xl:top-[420px] ">
        <span className=" text-lg">Follow Us</span>
        <div className=" text-orange rotate-90">
          <FollowIcon />
        </div>
      </div>
    </Link>
  );
}

export default memo(FollowLink);
