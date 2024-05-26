import Image from "next/image";
import Link from "next/link";

export default function FollowLink() {
  return (
    <Link href={"#"}>
      <div className=" absolute top-[450px] left-[80px] rotate-[270deg] flex  gap-2  justify-center items-center ">
        <span className="">Follow Us</span>
        <Image
          className="rotate-90"
          src={"/follow-us.svg"}
          alt="follow-us"
          width={12}
          height={12}
        />
      </div>
    </Link>
  );
}
