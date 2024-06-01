import { NavigationName, navigation } from "@/data/navigation";
import Link from "next/link";

interface NavigationProps {
  path?: NavigationName;
}

export default function Navigation({ path }: NavigationProps) {
  return (
    <nav className=" flex justify-center items-center gap-10 lg:gap-5 sm:flex-col">
      {navigation.map((link) => (
        <Link
          className={` text-lg hover:text-orange duration-300 ${
            path === link.name ? "text-orange" : ""
          }`}
          key={link.id}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
