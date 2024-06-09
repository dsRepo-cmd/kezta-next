"use client";
import { memo, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { NavigationName, navigation } from "@/data/navigation";
import Button from "../Button/Button";
import Portal from "../Portal/Portal";

interface NavigationProps {
  path?: NavigationName;
}

function Navigation({ path }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth >= 836);
    };

    handleResize(); // Initial call to set the screen size

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
      {/* burger button */}
      <Button
        id="buttonNavigation"
        title="navigation"
        onClick={toggleNav}
        variant="clear"
        className="p-1 hidden md:block"
      >
        <div
          className={`relative w-[30px] h-[22.5px] mx-auto cursor-pointer transition-transform duration-200 ease-in-out  `}
        >
          <span
            className={`block absolute   h-[3px] w-full bg-white rounded-md transition-transform duration-[0.225s] ease-in-out ${
              isOpen ? "top-[9px] rotate-[135deg]" : "top-0 left-0"
            }`}
          ></span>
          <span
            className={`block transition-all  absolute h-[3px] w-full bg-white rounded-md  duration-[0.225s] ease-in-out ${
              isOpen ? " opacity-0 left-[-30px] top-[9px]" : "top-[9px] left-0"
            }`}
          ></span>
          <span
            className={`block  absolute h-[3px] w-full bg-white rounded-md transition-transform duration-[0.225s] ease-in-out ${
              isOpen ? "top-[9px] rotate-[-135deg]" : "top-[18px] left-0"
            }`}
          ></span>
        </div>
      </Button>

      {/* navigation Links */}
      <div className="flex gap-10 justify-center items-center duration-300 md:hidden">
        {navigationLinks}
      </div>

      {!isBigScreen && isOpen && (
        <Portal>
          <div
            className={`w-full h-screen duration-300 flex flex-col justify-start items-center gap-5 bg-black fixed z-50 right-0`}
          >
            {navigationLinks}
          </div>
        </Portal>
      )}
    </nav>
  );
}

export default memo(Navigation);
