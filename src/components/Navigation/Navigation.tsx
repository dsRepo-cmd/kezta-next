"use client";
import { NavigationName, navigation } from "@/data/navigation";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import BurgerIcon from "@/assets/burger-menu.svg";

interface NavigationProps {
  path?: NavigationName;
}

export default function Navigation({ path }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = (name: string | null) => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="  ">
      <Button
        onClick={() => toggleNav(null)}
        variant="clear"
        className=" hidden  md:block"
      >
        <Icon width={40} height={40} Svg={BurgerIcon} />
      </Button>
      <div
        className={` z-50  md:w-full md:h-screen duration-500 flex justify-center items-center gap-10 md:gap-5 md:flex-col  md:bg-black md:fixed ${
          !isOpen ? " translate-x-48" : " right-0"
        }`}
      >
        {navigation.map((link) => (
          <Link
            className={` text-lg hover:text-orange duration-300 ${
              path === link.name ? "text-orange" : ""
            } ${isOpen ? "" : ""}`}
            key={link.id}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
