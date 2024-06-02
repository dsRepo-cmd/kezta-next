import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
export default function Header({ children }: HeaderProps) {
  return (
    <header className=" flex w-full p-10 justify-between items-center  md:p-5 md:items-start  md:fixed top-0 left-0 bg-black z-50  ">
      {children}
    </header>
  );
}
