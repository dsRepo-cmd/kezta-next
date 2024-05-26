import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
export default function Header({ children }: HeaderProps) {
  return (
    <header className=" flex w-full p-10 justify-between items-center mb-40">
      {children}
    </header>
  );
}
