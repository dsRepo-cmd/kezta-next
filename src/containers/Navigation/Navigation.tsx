import { navigation } from "@/data/navigation";
import Link from "next/link";
import { memo } from "react";

const Navigation = () => {
  return (
    <nav className=" flex justify-center items-center gap-10">
      {navigation.map((link) => (
        <Link className=" text-lg" key={link.id} href={link.path}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default memo(Navigation);
