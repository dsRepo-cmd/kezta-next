import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
export default function Header({ children }: HeaderProps) {
  return (
    <header className=" z-10 flex w-full p-10 justify-between items-center  md:p-5 md:items-start  md:fixed   md:bg-black  ">
      {children}
    </header>
  );
}
