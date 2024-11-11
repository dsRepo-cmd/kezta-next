import Link from "next/link";
import Navigation from "../Navigation/Navigation";
import LogoIcon from "@/assets/logo.svg";

function Header() {
  return (
    <header className=" z-10 flex w-full p-10 justify-between items-center  md:p-5 md:items-start  md:fixed   md:bg-black  ">
      <Link title="logo" href={"/"}>
        <LogoIcon />
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
