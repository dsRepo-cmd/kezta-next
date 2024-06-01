import { CSSProperties } from "react";

interface DividerProps {
  vertical?: boolean;
  className?: string;
  style?: CSSProperties | undefined;
}

export default function Divider({ vertical, className, style }: DividerProps) {
  if (vertical) {
    return (
      <div
        style={style}
        className={` block border-solid border-l-2 border-divider mr-20 ${className} sm:mr-2`}
      ></div>
    );
  }
  return (
    <span
      style={style}
      className={`block border-solid border-b-[1px] border-divider  w-full ${className}`}
    ></span>
  );
}
