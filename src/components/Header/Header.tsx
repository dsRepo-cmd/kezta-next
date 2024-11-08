import Navigation from "../Navigation/Navigation";
import LogoIcon from "@/assets/logo.svg";

function Header() {
  return (
    <header className=" z-10 flex w-full p-10 justify-between items-center  md:p-5 md:items-start  md:fixed   md:bg-black  ">
      <LogoIcon />
      <Navigation />
    </header>
  );
}

export default Header;
