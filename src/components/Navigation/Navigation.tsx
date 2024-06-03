"use client";
import { NavigationName, navigation } from "@/data/navigation";
import Link from "next/link";
import { memo, useCallback, useEffect, useState } from "react";
import Button from "../Button/Button";
import Portal from "../Portal/Portal";
import cls from "./Navigation.module.css";

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
        className=" p-1 hidden md:block"
      >
        <div className={`${cls.NavIcon} ${isOpen && cls.open}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Button>

      <div className="flex gap-10 justify-center items-center duration-300 md:hidden">
        {navigationLinks}
      </div>
      {!isBigScreen && (
        <Portal>
          <div
            className={`w-full  h-screen duration-300 md:flex flex-col justify-start items-center gap-5 bg-black fixed z-50 ${
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

export default memo(Navigation);
