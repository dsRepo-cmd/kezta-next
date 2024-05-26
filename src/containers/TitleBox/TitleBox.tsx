import { ReactNode } from "react";

interface TitleBoxProps {
  children: ReactNode;
}
export default function TitleBox({ children }: TitleBoxProps) {
  return (
    <div className=" flex h-full relative">
      <div className=" absolute left-[-102px] bottom-0 top-0  border-solid border-l-2 border-grayPrimary " />
      {children}
    </div>
  );
}
