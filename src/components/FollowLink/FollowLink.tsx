import Link from "next/link";
import FollowIcon from "@/assets/follow-us.svg";

export default function FollowLink() {
  return (
    <Link href={"#"}>
      <div className=" absolute top-[450px] left-[80px] rotate-[270deg] flex  gap-2  justify-center items-center sm:hidden ">
        <span className=" text-lg">Follow Us</span>
        <div className=" text-orange rotate-90">
          <FollowIcon />
        </div>
      </div>
    </Link>
  );
}
