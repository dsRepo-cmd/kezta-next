"use client";
import { NavigationName, navigation } from "@/data/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import BurgerIcon from "@/assets/burger-menu.svg";
import Portal from "../Portal/Portal";

interface NavigationProps {
  path?: NavigationName;
}

export default function Navigation({ path }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 836);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigationLinks = navigation.map((link) => (
    <Link
      className={`text-lg hover:text-orange duration-300 ${
        path === link.name ? "text-orange" : ""
      }`}
      key={link.id}
      href={link.path}
    >
      {link.name}
    </Link>
  ));

  return (
    <nav>
      <Button
        onClick={toggleNav}
        variant="clear"
        className={` p-1 ${isMediumScreen ? "hidden" : "block"}`}
      >
        <div className={`${isOpen && "open"}`} id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Button>

      {isMediumScreen ? (
        <div className="flex gap-10 justify-center items-center duration-300 md:hidden">
          {navigationLinks}
        </div>
      ) : (
        <Portal>
          <div
            className={`w-full h-screen duration-300 md:flex flex-col justify-center items-center gap-5 bg-black fixed z-50 ${
              isOpen ? "right-0" : "translate-x-[100%]"
            }`}
          >
            {navigationLinks}
          </div>
        </Portal>
      )}
    </nav>
  );
}
